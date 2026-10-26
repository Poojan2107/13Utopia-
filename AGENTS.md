<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 13 Utopia & Website Cloner Architecture

## 1. Production Site Protection
- The core 13 Utopia production site (`app/page.tsx`, `app/services/`, `app/work/`, `components/home/`, `components/layout/`, `components/motion/`, `styles/tokens.css`, etc.) is **strictly preserved**.
- Root pages and existing design tokens must never be overridden during cloning.

## 2. Isolated Website Cloning Workflow
When cloning or reverse-engineering external sites using the `clone-website` skill:
- **Routes**: `app/clone/<site-name>/page.tsx` and `app/clone/<site-name>/[...slug]/page.tsx`
- **Components**: `components/sites/<site-name>/`
- **Assets**: `public/sites/<site-name>/`
- **Research & Evidence**: `docs/research/<site-name>/`
- **Styling**: Scoped CSS Modules (never alter global tokens unless requested)
- **Preview & Inspection**: Preview at `/clone/<site-name>`. Central Clone Lab at `/clone`.

## 3. Porting to 13 Utopia
- When adapting features or sections from a clone into 13 Utopia, migrate the components into 13 Utopia's component hierarchy, mapping colors and fonts to 13 Utopia tokens (`styles/tokens.css`).
