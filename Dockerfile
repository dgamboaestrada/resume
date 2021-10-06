FROM nginx:1.21.3-alpine

COPY resume.html /usr/share/nginx/html/index.html
COPY resume.pdf /usr/share/nginx/html/resume.pdf
