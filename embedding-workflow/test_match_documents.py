import os
import json
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
EMBEDDING_TABLE = os.getenv("EMBEDDING_TABLE", "document_embeddings")

# Inicializar clientes
openai.api_key = OPENAI_API_KEY
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


def get_embedding(text: str, model: str = EMBEDDING_MODEL):
    """Obtiene el embedding para un texto usando la API de OpenAI."""
    response = openai.embeddings.create(model=model, input=text)
    return response.data[0].embedding


def test_match_documents():
    """Prueba la función match_documents con una consulta de ejemplo."""
    # Verificar requisitos
    if not OPENAI_API_KEY:
        raise ValueError(
            "OPENAI_API_KEY no está configurado en las variables de entorno"
        )
    if not SUPABASE_URL or not SUPABASE_KEY:
        raise ValueError(
            "SUPABASE_URL o SUPABASE_KEY no están configurados en las variables de entorno"
        )

    # Consulta de ejemplo
    query_text = "IIS"
    print(f"Consulta: {query_text}")

    try:
        # Obtener embedding para la consulta
        query_embedding = get_embedding(query_text)
        print(f"Embedding generado correctamente. Longitud: {len(query_embedding)}")

        # Convertir el embedding a formato de texto para SQL
        embedding_str = json.dumps(query_embedding)

        # Parámetros para la consulta
        match_count = 5  # Número de resultados a devolver
        filter_json = "{}"  # Sin filtro adicional

        # Ejecutar la función match_documents usando RPC
        print("Ejecutando consulta a match_documents...")
        response = supabase.rpc(
            "match_documents",
            {
                "query_embedding": embedding_str,
                "match_count": match_count,
                "filter": filter_json,
            },
        ).execute()

        # Mostrar resultados
        print("\nResultados:")
        if response.data:
            for i, item in enumerate(response.data):
                print(f"\nResultado {i+1}:")
                print(f"ID: {item['id']}")
                print(f"Similitud: {item['similarity']:.4f}")
                print(f"Contenido: {item['content'][:150]}...")
                print(f"Metadata: {json.dumps(item['metadata'], indent=2)}")
        else:
            print("No se encontraron resultados.")

    except Exception as e:
        print(f"Error al ejecutar la consulta: {e}")

        # Intentar diagnosticar el problema
        try:
            # Verificar si la tabla existe
            table_check = (
                supabase.table(EMBEDDING_TABLE).select("count").limit(1).execute()
            )
            print(
                f"La tabla {EMBEDDING_TABLE} existe y contiene datos: {table_check.data}"
            )

            # Verificar si la función existe
            function_check = supabase.rpc("match_documents_info").execute()
            print("La función match_documents existe.")
        except Exception as check_error:
            print(f"Error adicional durante el diagnóstico: {check_error}")
            print("\nPosibles problemas:")
            print(
                "1. La función match_documents no está creada correctamente en Supabase"
            )
            print("2. La tabla document_embeddings no existe o está vacía")
            print(
                "3. El tipo de datos del embedding no coincide con lo esperado por la función"
            )
            print("4. Hay un problema con los permisos de la función o la tabla")

            print("\nSugerencias:")
            print(
                "- Verifica que hayas ejecutado el script setup_match_documents.sql en Supabase"
            )
            print("- Asegúrate de que la tabla document_embeddings tenga datos")
            print("- Revisa los tipos de datos en la función y en la tabla")


if __name__ == "__main__":
    test_match_documents()
