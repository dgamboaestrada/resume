[![Build-and-deploy](https://github.com/dgamboaestrada/resume/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/dgamboaestrada/resume/actions/workflows/build-and-deploy.yml)

# 📄 Daniel Gamboa Estrada - Resume

Automated resume generation with custom Google Style theme.

## Requirements

- Node.js

## Usage

```bash
# Install dependencies
npm install
# or
npm ci # clean-install

# (Optional) Automatically fix known vulnerabilities in dependencies
npm audit fix

# Build both languages
npm run build

# Build specific language
npm run build:en    # English
npm run build:es    # Spanish

# Generate PDFs
npm run build-pdf

# Development server
npm run preview     # English
npm run preview:es  # Spanish
```

## Structure

```
resumes/              # Resume data (JSON)
jsonresume-themes/    # Custom themes
dist/                 # Generated files
```

## Docker

```bash
npm run build
docker build -t resume -f Dockerfile dist
```

Built with [resume-cli](https://github.com/jsonresume/resume-cli) and Material Design.
