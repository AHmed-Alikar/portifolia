# Ahmed Alikar — Portfolio

Personal portfolio site. Content is organized around actual engineering
areas (backend, full-stack, AI, mobile, data) and real projects rather
than a single-project showcase. Dark, editorial, one restrained accent
color — no gradients, no glassmorphism, no fake metrics. No content
here is invented — `src/data/profile.js` is the single source of
truth, and it only lists what's actually built.

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

Edit `src/data/profile.js` to update copy — name, role, the `ABOUT` and
`ENGINEERING` sections, `PROJECTS`, and the `NOW` list. Nothing else
needs to change for a content update. When a new project actually
ships, add it to `PROJECTS`; give it `featured: true` to replace the
current featured write-up, or leave it unfeatured to appear in the
project index below it.

## Design system

- **Type**: Archivo (display/headings), Source Sans 3 (body), IBM Plex
  Mono (labels, tags, section numbers only — never body copy).
- **Color**: near-black ground (`--bg`), one warm accent (`--accent`,
  used sparingly — CTAs, active states, the one underline in Contact),
  a separate semantic green (`--good`) for status pills so it's never
  confused with the accent.
- Tokens live at the top of `src/styles/global.css`; components are
  styled through those tokens, not one-off colors.

## Deployment

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub
Pages on every push to `main`. GitHub Pages is enabled with **Source**
set to "GitHub Actions" in this repo's settings.

`vite.config.js` sets the production base path to `/portifolia/` to match
this repo's name for a `username.github.io/portifolia/` project-page URL.
If you rename the repo or add a custom domain, update `base` in
`vite.config.js` to match (`/` for a custom domain or a `username.github.io`
user-page repo).
