[![Build-and-deploy](https://github.com/dgamboaestrada/resume/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/dgamboaestrada/resume/actions/workflows/build-and-deploy.yml)

# Resume
Resume

Requirements:
- nodejs

Install dependencies:
```bash
npm install
```

Build resume:
```bash
npm run-script build
```

Build docker image:
```bash
docker build -t <image:tag> -f Dockerfile dist
```

This project use the [resume-cli](https://github.com/jsonresume/resume-cli) to generate the resume file.
