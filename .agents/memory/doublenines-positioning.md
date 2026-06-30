---
name: Double Nines positioning
description: Brand positioning of the Double Nines static site and the copy vocabulary / page-structure quirks to keep consistent.
---

Double Nines (web/) is positioned as a **senior AI talent & staffing firm**, NOT a product design/build studio.

Core message: places senior, AI-fluent talent (digital product development, data analysis, AI development, GTM & marketing, adjacent roles) into startups/enterprises.
- Differentiators: senior-only, nearshore across the Americas, AI certifications & formal experience.
- Engagement models: contract, contract-to-hire, full-time placement, team augmentation.
- Fuerza products (agents/chat/analysis) = the *productized version of the team/talent* ("our people, packaged").
- Case studies = business solutions delivered by *the senior team we placed* (heading is "The business solution", not "About the work").
- Contact unchanged: hi@doublenines.co / 301-359-1431.

**Why:** Avoid drifting copy back toward agency/"we build for you" framing in future edits.

**How to apply:** When editing copy, use staffing verbs (place, embed, hire, match) not agency verbs (we built, we shipped for you).

Page structure quirk (matters for nav/footer edits):
- `index.html`, `services.html`, and `products/*` use the JS component library `web/js/components.js` via `DN.mount()` — edit nav/footer there once.
- `work.html`, `blog/*.html`, `privacy-policy.html`, and `case-study/*.html` have **hardcoded** nav/footer — edit each file (footer callout text "Hire senior<br>AI talent").
- Footer callout in hardcoded pages historically used a straight apostrophe in "Let's"; sed/perl is more reliable than the edit tool for bulk replacing it.
- CSS untouched by this repositioning (copy-only), so the `?v=` cache-busting query strings were left as-is.

Nav/footer label conventions (decisions):
- Header CTA wording is "Hire talent"; the old "Get in touch" link was intentionally retired sitewide.
- "Careers" already lives in the main nav links, so it must not be duplicated in the right-hand CTA area.
- The Fuerza links footer column is titled "Talent Platform" (not "Products"); the nav dropdown trigger deliberately stays "Products".

**Why:** these were explicit user requests during the staffing repositioning; keep them consistent on any future nav/footer edit.

Blog voice: all posts read from Double Nines' POV as a staffing firm. Case/engineering posts attribute the work to "the senior team/talent we placed" (not "we built it" as an agency). Fuerza product launches frame the products as "the productized version of the talent we place." Client name-drops must come from the live case-study set (Ryder, Bacardi, Coop, Sunbelt, etc.) — Paramount and Domino's were removed.

Case study set is curated, not auto-derived from the files on disk: the work grid is a hand-picked, ordered subset. Some case-study HTML files exist but are intentionally unlinked from the grid. Nanowear is a stub (senior staff-augmentation story for its SimpleSense cardiac-monitoring platform) the user asked us to add — it is NOT one of the original projects.
**Why:** a future agent should not "restore" unlinked case studies or assume every file should be featured — the curation is deliberate and user-directed.
