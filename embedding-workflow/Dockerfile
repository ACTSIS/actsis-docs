FROM python:3.11-slim

WORKDIR /app

# Instalar dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Descargar recursos NLTK necesarios para el procesamiento de texto
RUN python -c "import nltk; nltk.download('punkt'); nltk.download('stopwords')"

# Copiar el código
COPY . .

# Ejecutar el script cuando el contenedor inicie
CMD ["python", "generate_embeddings.py"]
