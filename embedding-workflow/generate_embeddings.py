import os
import json
import re
from pathlib import Path
from typing import List, Dict, Any, Optional
from tqdm import tqdm
import nltk
from nltk.tokenize import sent_tokenize
import markdown
from bs4 import BeautifulSoup
import mistune
import yaml
import openai
from dotenv import load_dotenv
from supabase import create_client, Client

# Cargar variables de entorno
load_dotenv()

# Configuración
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "text-embedding-3-small")
BATCH_SIZE = int(os.getenv("BATCH_SIZE", "100"))
CHUNK_SIZE = int(os.getenv("CHUNK_SIZE", "1000"))
CHUNK_OVERLAP = int(os.getenv("CHUNK_OVERLAP", "200"))
EMBEDDING_TABLE = os.getenv("EMBEDDING_TABLE", "document_embeddings")
DOCS_DIR = os.getenv("DOCS_DIR", "/app/docs")
DOCUMENT_ID = os.getenv("DOCUMENT_ID", "1")  # ID base para crear IDs únicos

# Inicializar clientes
openai.api_key = OPENAI_API_KEY
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


def clean_text(text: str) -> str:
    """Limpia el texto para preprocesamiento."""
    # Eliminar caracteres especiales y múltiples espacios
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"\n+", " ", text)
    return text.strip()


def extract_frontmatter(content: str) -> tuple:
    """Extrae frontmatter YAML de documentos MDX/MD y retorna frontmatter y contenido."""
    content = content.strip()
    frontmatter = {}

    # Verificar si el documento tiene frontmatter (delimitado por ---)
    if content.startswith("---"):
        try:
            # Encontrar la segunda ocurrencia de ---
            end_idx = content.find("---", 3)
            if end_idx != -1:
                # Extraer frontmatter
                frontmatter_str = content[3:end_idx].strip()
                frontmatter = yaml.safe_load(frontmatter_str)
                # Extraer contenido sin el frontmatter
                content = content[end_idx + 3 :].strip()
        except Exception as e:
            print(f"Error al extraer frontmatter: {e}")

    return frontmatter, content


def markdown_to_text(md_content: str) -> str:
    """Convierte el contenido de Markdown a texto plano."""
    # Extraer frontmatter si existe
    frontmatter, content = extract_frontmatter(md_content)

    # Convertir markdown a HTML
    if md_content.endswith(".mdx"):
        # Para MDX, usamos un enfoque simplificado con mistune
        renderer = mistune.HTMLRenderer()
        markdown_parser = mistune.Markdown(renderer)
        html = markdown_parser(content)
    else:
        # Para MD regular, usamos python-markdown
        html = markdown.markdown(content)

    # Convertir HTML a texto plano
    soup = BeautifulSoup(html, features="html.parser")
    text = soup.get_text()

    # Agregar información del frontmatter si existe
    if frontmatter:
        frontmatter_text = " ".join([f"{k}: {v}" for k, v in frontmatter.items()])
        text = f"{frontmatter_text}\n\n{text}"

    # Limpieza básica
    return clean_text(text)


def chunk_text(
    text: str, chunk_size: int = CHUNK_SIZE, chunk_overlap: int = CHUNK_OVERLAP
) -> List[str]:
    """Divide el texto en chunks de tamaño apropiado para embeddings."""
    # Si el texto es más corto que el tamaño del chunk, devolverlo completo
    if len(text) <= chunk_size:
        return [text]

    # Dividir el texto en oraciones
    sentences = sent_tokenize(text)
    chunks = []
    current_chunk = []
    current_size = 0

    for sentence in sentences:
        sentence_size = len(sentence)

        # Si la oración actual más el tamaño actual excede el tamaño del chunk
        if current_size + sentence_size > chunk_size and current_chunk:
            # Guardar el chunk actual y comenzar uno nuevo
            chunks.append(" ".join(current_chunk))

            # Si hay solapamiento, mantener algunas oraciones
            overlap_sentences = []
            overlap_size = 0
            for s in reversed(current_chunk):
                if overlap_size + len(s) <= chunk_overlap:
                    overlap_sentences.insert(0, s)
                    overlap_size += len(s) + 1  # +1 por el espacio
                else:
                    break

            current_chunk = overlap_sentences
            current_size = overlap_size

        current_chunk.append(sentence)
        current_size += sentence_size + 1  # +1 por el espacio

    # Agregar el último chunk si hay algo
    if current_chunk:
        chunks.append(" ".join(current_chunk))

    return chunks


def process_document(
    file_path: Path, global_chunk_index: int = 0
) -> tuple[List[Dict[str, Any]], int]:
    """Procesa un documento y lo prepara para embeddings.

    Args:
        file_path: Ruta al archivo a procesar
        global_chunk_index: Índice global para asegurar IDs únicos entre documentos

    Returns:
        Tupla con la lista de registros y el nuevo índice global
    """
    # Extraer metadatos del archivo
    relative_path = file_path.relative_to(Path(DOCS_DIR))
    file_name = file_path.name
    file_ext = file_path.suffix

    # Determinar el tipo de documento y extraer el contenido
    if file_ext.lower() in [".md", ".mdx"]:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        text = markdown_to_text(content)
    else:
        # Para otros tipos de archivos, podríamos agregar más manejadores
        print(f"Tipo de archivo no soportado: {file_ext} - {file_path}")
        return [], global_chunk_index

    # Chunking del texto
    chunks = chunk_text(text)

    # Crear registros para cada chunk
    records = []
    for i, chunk in enumerate(chunks):
        # Crear metadata en formato JSON para compatibilidad con n8n
        metadata = {
            "loc": {"lines": {"to": i + 1, "from": i}},
            "source": "blob",
            "file_id": DOCUMENT_ID,  # Usar el mismo ID para todos los documentos
            "blobType": "text/plain",
        }

        # Crear un ID único basado en el ID base y el índice global del chunk
        # Esto asegura que cada chunk tenga un ID único incluso entre diferentes documentos
        chunk_id = int(f"{DOCUMENT_ID}{global_chunk_index:04d}")
        global_chunk_index += 1

        record = {
            "id": chunk_id,  # ID único para cada chunk
            "document_path": str(relative_path),
            "document_name": file_name,
            "chunk_index": i,
            "total_chunks": len(chunks),
            "content": chunk,
            "metadata": metadata,  # Store as Python dict, Supabase will handle JSONB conversion
            "embedding": None,  # Se llenará después
        }
        records.append(record)

    return records, global_chunk_index


def get_embedding(text: str, model: str = EMBEDDING_MODEL) -> List[float]:
    """Obtiene el embedding para un texto usando la API de OpenAI."""
    response = openai.embeddings.create(model=model, input=text)
    return response.data[0].embedding


def create_table_if_not_exists() -> None:
    """Crea la tabla en Supabase si no existe."""
    try:
        # Verificar si la tabla existe y crearla si es necesario
        # Nota: Esto requiere permisos de administrador en Supabase
        print(f"Verificando existencia de la tabla {EMBEDDING_TABLE}...")

        # En producción, es mejor crear la tabla manualmente o usar migraciones
        # Este es un ejemplo simplificado
        query = f"""
        CREATE TABLE IF NOT EXISTS {EMBEDDING_TABLE} (
            id INTEGER PRIMARY KEY,
            document_path TEXT,
            document_name TEXT,
            chunk_index INTEGER,
            total_chunks INTEGER,
            content TEXT,
            metadata JSONB,
            embedding VECTOR(1536),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
        );
        """

        # En Supabase 1.0.3, no existe el método query(), usamos la API REST
        try:
            # Intentamos obtener datos de la tabla para ver si existe
            response = supabase.table(EMBEDDING_TABLE).select("id").limit(1).execute()
            print(f"Tabla {EMBEDDING_TABLE} encontrada.")
        except Exception as table_error:
            print(f"Error al verificar la tabla: {table_error}")
            print(
                f"La tabla {EMBEDDING_TABLE} debe ser creada manualmente en Supabase."
            )
            print(f"Ejecute el siguiente SQL en el Editor SQL de Supabase:")
            print(query)
            # Salimos con un mensaje de error más claro
            raise ValueError(
                f"La tabla {EMBEDDING_TABLE} no existe en Supabase. Créela manualmente."
            )

        print("Tabla verificada. Asegúrate de tener la tabla creada en Supabase.")
    except Exception as e:
        print(f"Advertencia: No se pudo verificar/crear la tabla: {e}")
        print("Por favor, crea la tabla manualmente en Supabase.")
        exit(1)


def process_batches(records: List[Dict[str, Any]]) -> None:
    """Procesa los registros en lotes para obtener embeddings y guardarlos."""
    # Primero borrar todos los registros existentes relacionados con el ID base
    try:
        # Calcular el rango de IDs a eliminar
        min_id = int(f"{DOCUMENT_ID}0000")
        max_id = int(f"{DOCUMENT_ID}9999")

        # Eliminar registros en el rango de IDs del documento actual
        supabase.table(EMBEDDING_TABLE).delete().gte("id", min_id).lte(
            "id", max_id
        ).execute()
        print(
            f"Registros previos con IDs entre {min_id} y {max_id} han sido eliminados."
        )
    except Exception as e:
        print(f"Advertencia: No se pudieron borrar registros previos: {e}")
        print("Continuando con la inserción...")

    # Imprimir información sobre los registros a procesar
    document_paths = set([record["document_path"] for record in records])
    print(f"Procesando documentos de las siguientes rutas:")
    for path in document_paths:
        path_records = [r for r in records if r["document_path"] == path]
        print(f"  - {path}: {len(path_records)} chunks")

    for i in tqdm(range(0, len(records), BATCH_SIZE), desc="Procesando lotes"):
        batch = records[i : i + BATCH_SIZE]

        # Obtener embeddings para cada registro en el lote
        for record in batch:
            try:
                embedding = get_embedding(record["content"])
                record["embedding"] = embedding
            except Exception as e:
                print(
                    f"Error al obtener embedding para {record['document_path']}/{record['document_name']} (chunk {record['chunk_index']}): {e}"
                )
                continue

        # Guardar en Supabase
        try:
            # Usando upsert para manejar posibles duplicados
            response = (
                supabase.table(EMBEDDING_TABLE)
                .upsert(batch, on_conflict="id")
                .execute()
            )
            print(f"Lote {i//BATCH_SIZE + 1} guardado. Registros: {len(batch)}")
        except Exception as e:
            print(f"Error al guardar en Supabase: {e}")
            # Si hay un error con todo el lote, intentar insertar uno por uno
            print("Intentando insertar registros individualmente...")
            successful = 0
            for single_record in batch:
                try:
                    supabase.table(EMBEDDING_TABLE).upsert(
                        [single_record], on_conflict="id"
                    ).execute()
                    successful += 1
                except Exception as inner_e:
                    print(
                        f"Error al insertar registro {single_record['id']} ({single_record['document_path']}/{single_record['document_name']}): {inner_e}"
                    )
            print(f"Insertados {successful} de {len(batch)} registros individualmente.")

    # Verificar cuántos registros se insertaron realmente
    try:
        response = supabase.table(EMBEDDING_TABLE).select("count").execute()
        count = response.data[0]["count"] if response.data else 0
        print(f"Total de registros en la tabla {EMBEDDING_TABLE}: {count}")
    except Exception as e:
        print(f"No se pudo verificar el número total de registros: {e}")


def find_documents() -> List[Path]:
    """Encuentra todos los documentos en la carpeta de documentación."""
    docs_path = Path(DOCS_DIR)
    all_files = []

    # Buscar archivos de documentación (.md, .mdx) en todas las subcarpetas
    for ext in ["*.md", "*.mdx"]:
        all_files.extend(list(docs_path.glob(f"**/{ext}")))

    # Imprimir información de depuración sobre los archivos encontrados
    print(f"Directorios escaneados: {docs_path}")
    print(f"Archivos encontrados por carpeta:")
    folders = {}
    for file in all_files:
        parent = file.parent
        if parent not in folders:
            folders[parent] = 0
        folders[parent] += 1

    for folder, count in folders.items():
        print(f"  - {folder}: {count} archivos")

    return all_files


def main():
    """Función principal que coordina todo el proceso."""
    print("Iniciando generación de embeddings")

    # Verificar requisitos
    if not OPENAI_API_KEY:
        raise ValueError(
            "OPENAI_API_KEY no está configurado en las variables de entorno"
        )
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise ValueError(
            "SUPABASE_URL o SUPABASE_KEY no están configurados en las variables de entorno"
        )

    # Crear tabla si no existe
    create_table_if_not_exists()

    # Encontrar documentos
    files = find_documents()
    print(f"Encontrados {len(files)} documentos para procesar")

    # Procesar documentos
    all_records = []
    global_chunk_index = 0  # Inicializar índice global para IDs únicos
    for file_path in tqdm(files, desc="Procesando documentos"):
        records, global_chunk_index = process_document(file_path, global_chunk_index)
        all_records.extend(records)

    print(f"Total de chunks generados: {len(all_records)}")

    # Procesar lotes para obtener embeddings y guardarlos
    process_batches(all_records)

    print("Proceso completado con éxito")


if __name__ == "__main__":
    main()
