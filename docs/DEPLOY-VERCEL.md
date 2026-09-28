# Deploy to Vercel

## Status
- `npm run build` passes locally
- Framework: Next.js 16 (Turbopack build)
- No required secrets for a basic marketing deploy
- Intake feedback app: `/intake` (device localStorage on Vercel; shared file save works in local `npm run dev` only)

## Before first deploy

1. **Commit & push** all site work to `origin/master` (or your deploy branch). Vercel Git deploys only what’s on the remote.
2. In Vercel: **Add New Project** → import `Poojan2107/13Utopia-` (or link existing).
3. Framework preset: **Next.js** (auto).
4. Root directory: `.` (repo root).
5. Env var (Production + Preview):

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://13utopia.com` (or your `*.vercel.app` URL until domain is attached) |

6. Deploy.

## CLI alternative (from repo root)

```bash
npx vercel login
npx vercel link
npx vercel env add NEXT_PUBLIC_SITE_URL
npx vercel --prod
```

## Domain
Point `13utopia.com` / `www` to the Vercel project after the first production deploy (Project → Settings → Domains).

## Notes
- Large packs (`Awwwards_Master_Pack`, `animmaster`) are excluded via `.vercelignore`.
- `/type-lab*` routes ship with the build; remove from nav/sitemap later if you don’t want them public.
- Intake suggestions on production: team edits stay in their browser unless they Export JSON to you.
