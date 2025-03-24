# Workflow de Generación de Embeddings para Documentación

Este workflow permite procesar la documentación de tu proyecto (archivos Markdown y MDX) para generar embeddings utilizando OpenAI y almacenarlos en una base de datos PostgreSQL de Supabase.

## Requisitos Previos

- Docker instalado en tu sistema
- Cuenta en OpenAI con API key
- Proyecto en Supabase con base de datos PostgreSQL

## Configuración de Supabase

Antes de ejecutar el workflow, necesitas crear una tabla en tu base de datos Supabase para almacenar los embeddings. Puedes hacerlo desde el Editor SQL de Supabase ejecutando:

```sql
-- Habilitar la extensión de vectores si no está habilitada
CREATE EXTENSION IF NOT EXISTS vector;

-- Crear tabla para embeddings
CREATE TABLE document_embeddings (
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

-- Opcional: Crear índice para búsquedas por similitud
CREATE INDEX ON document_embeddings
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
```

## Configuración del Entorno

1. Copia el archivo `.env.example` a `.env`:
   ```
   cp .env.example .env
   ```

2. Edita el archivo `.env` y configura tus credenciales y ajustes:
   - `OPENAI_API_KEY`: Tu clave de API de OpenAI
   - `SUPABASE_URL`: URL de tu proyecto Supabase
   - `SUPABASE_KEY`: Clave de API de Supabase
   - Otros parámetros como modelo de embedding, tamaño de chunks, etc.

## Construcción y Ejecución del Contenedor

1. Construir la imagen Docker:
   ```
   docker build -t docs-embeddings-generator .
   ```

2. Ejecutar el contenedor:
   ```
   docker run --env-file .env -v /ruta/absoluta/a/docs:/app/docs docs-embeddings-generator
   ```

   Reemplaza `/ruta/absoluta/a/docs` con la ruta absoluta a tu carpeta de documentación.

   Por ejemplo, para este proyecto:
   ```
   docker run --env-file .env -v "$(pwd)/../website/docs:/app/docs" docs-embeddings-generator
   ```

   Varios directorios:
   ```
   docker run --env-file .env -v "$(pwd)/../website/docs:/app/docs/docs" -v "$(pwd)/../website/installs:/app/docs/installs" docs-embeddings-generator
   ```

## Personalización

Puedes personalizar varios aspectos del procesamiento ajustando las variables en el archivo `.env`:

- `EMBEDDING_MODEL`: Modelo de embeddings de OpenAI a utilizar
- `BATCH_SIZE`: Número de documentos a procesar por lote
- `CHUNK_SIZE`: Tamaño máximo de cada fragmento de texto
- `CHUNK_OVERLAP`: Cantidad de solapamiento entre fragmentos
- `EMBEDDING_TABLE`: Nombre de la tabla en Supabase

## Utilización de los Embeddings

Una vez generados los embeddings, puedes usarlos para:

1. Búsqueda semántica en tu documentación
2. Construcción de RAG (Retrieval Augmented Generation)
3. Entrenamiento de modelos personalizados


## SQL

```sql
-- Habilitar la extensión de vectores si no está habilitada
CREATE EXTENSION IF NOT EXISTS vector;

-- Crear tabla para embeddings
CREATE TABLE document_embeddings (
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

-- Opcional: Crear índice para búsquedas por similitud
CREATE INDEX ON document_embeddings
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
```
