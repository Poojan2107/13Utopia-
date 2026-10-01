# 13 UTOPIA Website

Award-track marketing site for **13 UTOPIA** — brand, technology & growth.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript 5**
- **CSS Modules** + design tokens in [`styles/tokens.css`](styles/tokens.css) — no Tailwind
- Motion: `framer-motion`, `gsap`, `lenis`
- 3D: `three` (portrayed portfolio on `/work`)

## Develop

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for
canonicals / sitemap.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | local development |
| `npm run build` | production build |
| `npm run start` | serve the production build |
| `npm run lint` | ESLint over app source only |
| `npm run format` | Prettier |

## Routes

| Path | Contents |
| --- | --- |
| `/` | Homepage — preloader, hero, three worlds, work, outcomes, about, CTA |
| `/services`, `/services/[slug]` | CREATE · BUILD · GROW service worlds |
| `/work` | WebGL portfolio showcase (`/portfolio` and `/works` redirect here) |

## Structure

```
app/            App Router routes, root layout, SEO metadata
components/
  framer/       Scroll-driven sections used by the homepage
  home/         Hero, preloader and work carousel
  layout/       SiteHeader
  motion/       Lenis smooth scroll, magnetic cursor, ambient field
  services/     Services overview + detail
  work-showcase/ WebGL portfolio
lib/            SEO metadata builder + JSON-LD schema
styles/         CSS Modules, one folder per component area
data/           Typed content
public/         Fonts, brand marks, media
```

## Conventions

- Business facts that are still unverified are marked
  `[CONTENT NEEDED]` / `[FOUNDER INPUT REQUIRED]` / `[VERIFIED METRIC REQUIRED]`.
- Reference material (`Awwwards_Master_Pack/`), the vendored prototype in
  `web/`, and local tool state are git- and ESLint-ignored — they are not part
  of the shipped site.
- Fonts under `public/fonts/` must be licensed for commercial web use before
  they ship; see `public/fonts/README.md`.
