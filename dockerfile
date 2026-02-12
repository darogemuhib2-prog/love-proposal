FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy website files
COPY index.html .
COPY style.css .
COPY script.js .

# Expose port 8000
EXPOSE 8000

# Start Python HTTP server
CMD ["python", "-m", "http.server", "8000"]
