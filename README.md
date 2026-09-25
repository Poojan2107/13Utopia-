# 13 UTOPIA Website

Greenfield Next.js App Router scaffold for the new 13 UTOPIA website.

## Stack

- Next.js (App Router) + TypeScript
- CSS Modules + design tokens (`styles/tokens.css`)
- Typed content files under `content/`
- No Tailwind, no WebGL/GSAP in this phase

## Develop

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for canonicals/sitemap.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run format` — Prettier

## Docs

Strategic source of truth lives in `docs/` (`bdna`, `bdna2`, `ws`, `wsplan`).

Missing business facts are marked `[CONTENT NEEDED]` / `[FOUNDER INPUT REQUIRED]` / `[VERIFIED METRIC REQUIRED]`.
