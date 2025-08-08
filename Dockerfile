FROM nginx:1.21.3-alpine

RUN mkdir -p /usr/share/nginx/html/es

# Inglés
COPY resume.html /usr/share/nginx/html/index.html
COPY resume.pdf /usr/share/nginx/html/resume.pdf

# Español (alias en subruta /es)
COPY resume_es.html /usr/share/nginx/html/es/index.html
COPY resume_es.pdf /usr/share/nginx/html/es/resume.pdf

# Copias legacy en raíz por compatibilidad
COPY resume_es.html /usr/share/nginx/html/resume_es.html
COPY resume_es.pdf /usr/share/nginx/html/resume_es.pdf
