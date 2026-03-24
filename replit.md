# Doublenines Dotcom

## Overview
Static website for Double Nines — a digital product design and build studio. Originally exported from Webflow.

## Project Structure
- `/index.html` — Homepage
- `/work.html` — Work/portfolio page
- `/case-study/` — Case study pages
- `/css/` — Stylesheets (normalize, webflow, custom)
- `/js/` — JavaScript files (webflow runtime)
- `/images/` — Image assets
- `/fonts/` — Custom fonts
- `/documents/` — Downloadable documents
- `server.js` — Simple Node.js static file server for development (port 5000)

## Key Pages
- `index.html` — Main landing page
- `work.html` — Portfolio/work page
- `3d-home.html` — 3D version of home page
- `privacy-policy.html` — Privacy policy
- `style-guide.html` — Style guide reference
- `404.html` / `401.html` — Error pages
- `confirmed.html` — Confirmation page

## Development
- **Runtime**: Node.js 20
- **Dev server**: `node server.js` on port 5000 (0.0.0.0)
- **Deployment**: Static site (serves from root directory)
