# Double Nines Website

## Overview
Static website for Double Nines (doublenines.co), a digital product design and build studio. Rebuilt as a clean, Scale.com-inspired dark-themed site.

## Architecture
- **Server**: Node.js static file server (`server.js`) serving from `./web` on port 5000
- **Frontend**: Pure HTML/CSS, no frameworks, no build step
- **Font**: Montserrat (Google Fonts, weights 400-800)
- **Theme**: Dark (#09090b bg, #f80094 accent pink, #a1a1aa muted text)

## File Structure
```
server.js                    # Static file server (port 5000)
web/
  css/style.css              # Shared stylesheet (all pages)
  index.html                 # Homepage
  work.html                  # Work/portfolio page
  404.html                   # 404 error page
  privacy-policy.html        # Privacy policy
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
- No jQuery — vanilla JS only (minimal, just mobile menu toggle)
- Scale.com-inspired aesthetic: dark backgrounds, clean typography, gradient accents
- Responsive: mobile-first breakpoints at 540px, 640px, 768px, 900px
- Fixed nav with backdrop blur, pill-style CTA buttons, card-based work grid

## Contact
- Email: hi@doublenines.co
- Phone: 301-359-1431
