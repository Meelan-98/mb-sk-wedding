# Shehani ❤️ Meelan – Wedding site (Next.js + Ant Design)

## Run locally
    npm install
    npm run dev          # http://localhost:3000

## Edit your content
- `data/wedding.ts`  – names, date, venue, Maps link, time, countdown target
- `data/tables.ts`   – seating (table number -> list of guests)
- `data/photos.ts`   – 25 photos (location, date, caption)
- `public/photos/`   – put 01.jpg … 25.jpg here (matching `data/photos.ts`)

## Deploy to GitHub Pages
1. Push to a GitHub repo (branch `main`).
2. Repo Settings → Pages → Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically,
   setting the base path to `/<repo-name>`.

Manual static build: `npm run build` → output in `out/`
(for a project site: `NEXT_PUBLIC_BASE_PATH=/repo-name npm run build`).
