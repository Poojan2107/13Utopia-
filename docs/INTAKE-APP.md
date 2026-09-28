# Launch Intake Web App — how to share with the team

## Open it

With `npm run dev` running:

**http://localhost:3000/intake**  
(also works: `/intake/` and `/intake/index.html`)

Mobile-responsive. Enter your name → edit any field → autosaves. Suggestions + activity feed included.

## What saves where

| Mode | Where data lives |
| --- | --- |
| Local `npm run dev` | Shared file `data/launch-intake.json` (everyone on that server sees the same data) |
| Device backup | Browser localStorage (always) |
| Export / Import | JSON download — use if someone is offline |

**Important:** Shared save works for anyone hitting **the same running Next server**.  
On Vercel production, file writes may not persist across deploys — keep using local/dev or Export JSON until a DB is wired.

## Share with the team tonight

1. Keep `npm run dev` running on your machine.
2. Expose it with a tunnel, e.g. Cloudflare Tunnel or ngrok:
   - `npx cloudflared tunnel --url http://localhost:3000`
   - or `npx ngrok http 3000`
3. Send the team: `https://<tunnel-url>/intake/`
4. Tell them: enter name → fill red **NEED** / amber **RISK** → post suggestions → tap **Mark my edits done**.

## You review tomorrow

Open the same `/intake/` URL → filter **Need team** / **Risk** → read **Suggestions** + **Recent activity**.

Export JSON anytime as a backup.

## Reset to seed

Only if needed (wipes team edits on the server store):

```http
POST /api/intake
{ "type": "reset", "author": "Your Name" }
```
