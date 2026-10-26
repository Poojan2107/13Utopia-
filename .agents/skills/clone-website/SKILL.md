---
name: clone-website
description: Rebuild existing web pages as isolated, working local code matching their real content, assets, responsive layout, and interactions, specifically adapted for the 13 Utopia workspace without modifying or overriding existing 13 Utopia production pages.
---

Recreate the target web pages as isolated, working code in this Next.js project.
Deliver working, editable code: screenshots, iframes, and downloaded production bundles are references, not the implementation.

> **CRITICAL WORKSPACE RULE FOR 13 UTOPIA**:
> The existing 13 Utopia production site (`app/page.tsx`, `app/services/`, `app/work/`, `components/home/`, `components/layout/`, `components/motion/`, `components/black-hole/`, `styles/tokens.css`, etc.) is **strictly protected**.
> **NEVER** overwrite `app/page.tsx`, root layouts, or existing 13 Utopia components during cloning.
> All cloned sites must live in the designated isolated clone spaces described below.

---

## 1. Directory & Route Conventions

When cloning a website (e.g. `https://example.com`, giving the site identifier `example`), use the following isolated directories:

| Purpose | Isolated Location |
|---|---|
| **Routes** | `app/clone/<site>/page.tsx`, `app/clone/<site>/[...slug]/page.tsx` |
| **Components** | `components/sites/<site>/` (components, section blocks, local SVG icons) |
| **Assets** | `public/sites/<site>/` (downloaded images, fonts, media, videos) |
| **Research & Evidence** | `docs/research/<site>/` (page brief, asset map, layout notes, comparison screenshots) |
| **Styles** | Scoped CSS Modules (e.g. `components/sites/<site>/*.module.css`) to prevent style leaks |

Preview URL locally: `http://localhost:3000/clone/<site>` (Overview dashboard at `http://localhost:3000/clone`).

---

## 2. Map the Work
1. Read the source URLs. Open them using the browser tool.
2. Establish a site name identifier (e.g., `cuberto`, `linear`, `stripe`).
3. Create `docs/research/<site>/brief.md` recording:
   - Source URL(s)
   - Route mapping (e.g., `https://target.com/` -> `/clone/<site>`, `https://target.com/about` -> `/clone/<site>/about`)
   - Section structure & order
   - Primary typography, color palette, and layout dimensions
4. Verify that no existing 13 Utopia files are touched.

---

## 3. Observe Before Building
1. Inspect the source page at desktop (e.g., 1440px / 1280px) and mobile (390px / 375px) widths.
2. Scroll from top to bottom to trigger lazy-loaded media, reveal animations, and sticky/pinned scenes.
3. Exercise interactive elements: menus, tabs, accordions, carousels, hover states, modal dialogs.
4. Extract real assets directly into `public/sites/<site>/`:
   - Images (`.webp`, `.png`, `.jpg`, `.avif`)
   - SVGs (preserve `viewBox`, inline symbols, masks)
   - Fonts (preserve actual loaded weights and family definitions)
   - Videos / audio (direct media URLs)
5. Read [the inspection reference](references/inspection-guide.md) for DOM & style extraction.
6. For **Framer sites, scroll-driven scenes, or complex animations**, read [Framer and motion reference](references/framer-and-motion.md).

---

## 4. Build the Isolated Clone Pass
1. Set up the site root component at `app/clone/<site>/page.tsx`.
2. Build modular components in `components/sites/<site>/`:
   - `Hero.tsx`, `Navbar.tsx`, `Features.tsx`, `Footer.tsx`, etc.
   - Use CSS Modules (`Hero.module.css`, etc.) for clean scoping without leaking into 13 Utopia.
   - Use existing motion libraries if needed (`framer-motion`, `gsap`, `lenis`).
3. Reference extracted assets via `/sites/<site>/...`.
4. Ensure all controls, links, and navigation behave as expected.

---

## 5. Compare & Refine
1. Run local dev server (`npm run dev`).
2. Open both the original site and `http://localhost:3000/clone/<site>` at identical viewport sizes.
3. Compare geometry, typography, spacing, colors, and motion states.
4. Fix any visual drift or missing interactions.
5. Run `npm run check` (or `npm run lint` + `npm run typecheck`) to confirm zero build/type errors.

---

## 6. Porting to 13 Utopia (When Ready)
When the user desires to incorporate specific sections or features from the clone into 13 Utopia:
1. Identify the target component in `components/sites/<site>/`.
2. Adapt it into 13 Utopia's component hierarchy (`components/home/`, `components/services/`, etc.).
3. Replace clone-specific colors and fonts with 13 Utopia's tokens from `styles/tokens.css` (`--color-bg`, `--font-didone`, `--font-sans`, `--space-md`, etc.).
4. Integrate the component into 13 Utopia's main pages.
