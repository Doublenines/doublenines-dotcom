# Double Nines Website

## Overview
Static website for Double Nines (doublenines.co), a senior AI talent & staffing firm. The site positions Double Nines as placing senior, AI-fluent talent (digital product development, data analysis, AI development, GTM & marketing, and adjacent roles) into startups and enterprises. Differentiators: senior-only talent, nearshore across the Americas, AI certifications & formal experience. Engagement models: contract, contract-to-hire, full-time placement, and team augmentation. Fuerza products are the productized version of the team/talent; case studies are business solutions delivered by placed teams. Clean, Scale.com-inspired dark-themed site with premium typography and visual effects.

## Architecture
- **Server**: Node.js static file server (`server.js`) serving from `./web` on port 5000
- **Frontend**: Pure HTML/CSS + vanilla JS component library, no frameworks, no build step
- **Component Library**: `web/js/components.js` — shared nav, mobile menu, footer via `DN.mount()` (root) or `DN.mount({ prefix: '../' })` (subpages)
- **Fonts**: Inter (body, weights 400-800) + Familjen Grotesk (headings, weights 400-700) via Google Fonts
- **Theme**: Dark (#050505 bg, #f80094 accent pink, #a855f7 accent purple, #8b8b96 muted text)
- **Design system**: Shared `idx-` prefixed CSS classes for new-design pages (nav, buttons, features, split, FAQ, process, clients bar, page hero). Reusable section helpers: `idx-band` (section spacing + top border), `idx-section-head`/`idx-section-eyebrow`/`idx-section-title`/`idx-section-sub` (centered section intro), `idx-offer-grid`/`idx-offer-card` (3-card offerings), `roles-groups`/`roles-group`/`roles-pill` (grouped role lists). Page-specific overrides scoped under `.page-index`, `.page-services`, `.page-product`, `.page-roles`. Product pages use `prod-` prefixed classes (prod-hero, prod-pill, prod-intro, prod-cta) with unique hero glows per product (`prod-hero-glow--agents`, `prod-hero-glow--chat`).
- **CSS version**: `?v=7` — bump on all HTML pages when CSS changes

## File Structure
```
server.js                    # Static file server (port 5000)
web/
  js/components.js           # Vanilla JS component library (nav, footer, mobile menu)
  css/style.css              # Shared stylesheet (all pages)
  index.html                 # Homepage (uses DN.mount())
  services.html              # Services page (Scale.com-inspired layout)
  roles.html                 # Roles We Place page (grouped role lists)
  work.html                  # Work/portfolio page
  404.html                   # 404 error page
  privacy-policy.html        # Privacy policy
  products/                  # Product pages
    fuerza-agents.html
    fuerza-chat.html
    fuerza-analysis.html
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
