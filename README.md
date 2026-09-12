# Ahmed Alikar — Portfolio

Personal portfolio site. Design direction: **Raster** — a Swiss/International
Typographic Style layout: a strict grid, one condensed display face at real
scale, hard edges (no rounded corners, no shadows, no gradients), and a
fixed red/black/white/yellow palette. No content here is invented — the
`src/data/profile.js` file is the single source of truth, and it only
lists what's actually built.

## Stack

React + Vite, no UI framework or component library — every visual choice
here is deliberate, hand-built CSS, so nothing came from a default theme.

## Development

```bash
npm install
npm run dev      # local dev server
npm run lint      # eslint
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Content

Edit `src/data/profile.js` to update copy — name, role, stack, projects,
and the "now" list. Nothing else needs to change for a content update.

**Before this goes live:** replace the placeholder email in
`src/data/profile.js` (`PROFILE.email`) with a real contact address.

## Deployment

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages
on every push to `main`. One-time setup: in this repo's Settings → Pages,
set **Source** to "GitHub Actions".

`vite.config.js` sets the production base path to `/portifolia/` to match
this repo's name for a `username.github.io/portifolia/` project-page URL.
If you rename the repo or add a custom domain, update `base` in
`vite.config.js` to match (`/` for a custom domain or a `username.github.io`
user-page repo).
