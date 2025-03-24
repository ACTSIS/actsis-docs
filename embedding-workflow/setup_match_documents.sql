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

-- Drop old function if it exists
DROP FUNCTION IF EXISTS match_documents (vector(1536), int, jsonb);

-- Create a function to search for documents
CREATE FUNCTION match_documents (
  query_embedding vector(1536),
  match_count int DEFAULT null,
  filter jsonb DEFAULT '{}'
) RETURNS TABLE (
  id integer,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
#variable_conflict use_column
BEGIN
  RETURN QUERY
  SELECT
    id,
    content,
    metadata,
    1 - (document_embeddings.embedding <=> query_embedding) AS similarity
  FROM document_embeddings
  WHERE metadata @> filter
  ORDER BY document_embeddings.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Note: This function assumes you're using the document_embeddings table
-- If you want to use a different table, replace 'document_embeddings' with your table name

-- Example usage:
-- SELECT * FROM match_documents(
--   '[0.1, 0.2, ...]'::vector(1536),
--   5,
--   '{"file_id": "1761"}'::jsonb
-- );
