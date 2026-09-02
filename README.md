# MadebyAMW Portfolio

Built with Next.js 15 (App Router) + Tailwind CSS v4.

## Structure

- `/` — Home (hero, capability index, case study preview)
- `/about` — Bio
- `/case-studies` — Index of all 3 case studies
- `/case-studies/leaf-africa`, `/chyberrport`, `/techland` — Individual case studies
- `/logofolio` — Logo grid (placeholder tiles)
- `/branding` — Applied identity work (placeholder tiles)
- `/social` — Social content systems (placeholder tiles)
- `/contact` — Contact links

## Adding real images

Placeholder tiles on `/logofolio`, `/branding`, and `/social` are typographic
stand-ins. To swap in real assets:

1. In Figma, select the frame/image you want → right-click → **Export** (or
   use the Export panel) → PNG/SVG.
2. Drop the file into the matching folder: `public/logofolio/`,
   `public/branding/`, `public/social/`, or `public/case-studies/`.
3. Replace the placeholder `<div>` tiles in the relevant `page.tsx` with
   `<Image src="/logofolio/leaf.png" ... />` (use `next/image` for
   optimization).

The site now uses your real fonts, self-hosted via `next/font/local`:
- **Beluga** — big page headlines (`--font-display`)
- **Articulat CF** (Thin/Medium/Bold/ExtraBold/Heavy) — nav, labels, card
  titles, capability index, stats (`--font-ui`)
- **Inter** (Google Fonts) — body paragraphs (`--font-body`)

Font files live in `public/fonts/`. If you get updated weights or files,
just replace them there — the paths in `app/layout.tsx` stay the same as
long as filenames match.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub (see steps below).
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Every push to `main` auto-deploys.

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: MadebyAMW portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
