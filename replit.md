# Double Nines Website

## Overview
Static HTML/CSS website for Double Nines, a Product Design and Build Studio. Originally exported from Webflow.

## Project Structure
- `web/` - Main static site files (HTML, CSS, JS, images, fonts)
  - `index.html` - Homepage
  - `work.html` - Work/portfolio page
  - `case-study/` - Case study pages
  - `css/` - Stylesheets (normalize, webflow, site-specific)
  - `js/` - JavaScript (webflow.js)
  - `images/` - Image assets
  - `fonts/` - Custom fonts
  - `documents/` - PDF documents
- `_archive/` - Archive of old Webflow export

## Running
The site is served using Python's built-in HTTP server:
```
python3 -m http.server 5000 --directory web
```

## Deployment
Configured as a static site deployment with `publicDir: "web"`.
