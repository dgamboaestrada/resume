[![Build-and-deploy](https://github.com/dgamboaestrada/resume/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/dgamboaestrada/resume/actions/workflows/build-and-deploy.yml)

# Resume
Resume

Requirements:
- nodejs

Install dependencies:
```bash
npm install
```

Build resume (both languages):
```bash
npm run-script build
```

Build resume in English only:
```bash
npm run build:en
```

Build resume in Spanish only:
```bash
npm run build:es
```

Build docker image:
```bash
docker build -t <image:tag> -f Dockerfile dist
```

This project use the [resume-cli](https://github.com/jsonresume/resume-cli) to generate the resume file.
