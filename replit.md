# Double Nines Website

## Overview
Static website for Double Nines (doublenines.co), a digital product design and build studio. Rebuilt as a clean, Scale.com-inspired dark-themed site with premium typography and visual effects.

## Architecture
- **Server**: Node.js static file server (`server.js`) serving from `./web` on port 5000
- **Frontend**: Pure HTML/CSS, no frameworks, no build step
- **Fonts**: Inter (body, weights 400-800) + Instrument Serif (index page headings, weight 400) via Google Fonts
- **Theme**: Dark (#050505 bg, #f80094 accent pink, #a855f7 accent purple, #8b8b96 muted text)
- **Index page**: Redesigned in save.design style — serif display headings, near-black #0a0a0a bg, muted grays, minimal accent colors. Scoped under `.page-index` body class.

## File Structure
```
server.js                    # Static file server (port 5000)
web/
  css/style.css              # Shared stylesheet (all pages)
  index.html                 # Homepage
  services.html              # Services page (Scale.com-inspired layout)
  work.html                  # Work/portfolio page
  404.html                   # 404 error page
  privacy-policy.html        # Privacy policy
  products/                  # Product pages
    fuerza-agents.html
    fuerza-chat.html
  blog/                      # Blog section (6 posts + index)
    index.html               # Blog overview with card grid
    fuerza-chat-launch.html  # March 20, 2026
    fuerza-agents-beta.html  # February 12, 2026
    fuerza-talent-launch.html # January 19, 2026
    princess-cruises-ai-search.html # October 27, 2025
    cv-document-analysis.html # April 9, 2025
    coop-99-sprints.html     # December 1, 2024
  case-study/                # 12 case study pages
    bacardi-freepour.html
    black-pearl.html
    cannalytics.html
    coop.html
    getswift.html
    paramount-movienight.html
    ryder-gyde.html
    ryder-pay.html
    sunbelt.html
    torque.html
    torque-copy.html
    x-games.html
  images/                    # All images (SVG, PNG, JPG)
```

## Key Design Decisions
- No Webflow CSS/JS dependencies — completely custom clean code
- No jQuery — vanilla JS only (mobile menu toggle, FAQ accordion, testimonials carousel)
- Scale.com-inspired aesthetic: #050505 deep black bg, radial gradient hero glows, tight letter-spacing (-.045em), frosted glass nav
- Nav: `.nav-cta` glass-style button, `.nav-hamburger` as accessible `<button>`, backdrop-filter blur
- Buttons: `.btn-primary` (pink glow), `.btn-ghost` (subtle border), `.btn-arrow` suffix
- Cards: `.work-card` / `.case-card` with hover shadow + subtle image zoom
- Stats: gradient text (pink-to-purple) via background-clip
- Responsive: breakpoints at 540px, 640px, 768px, 900px
- Container max-width: 1320px with fluid gutter clamp(1.25rem, 5vw, 3.5rem)

## Contact
- Email: hi@doublenines.co
- Phone: 301-359-1431
