Minimal one‑page personal site (Astro)

Overview
- Simple, text‑only, minimalist design using Geist Mono Variable.
- Sections: About, Projects, Blog — all on a single page.

Getting started
1) Install dependencies
   - npm install

2) Run locally
   - npm run dev

3) Build for production
   - npm run build && npm run preview

Customize
- Update content in `src/pages/index.astro` (name, tagline, bio, projects, posts).
- Global styles live in `src/styles/global.css`.
- The layout is in `src/layouts/Base.astro`.

Font
- Geist Mono Variable loads via CDN from `@fontsource-variable/geist-mono` in the layout head.
- If you prefer bundling fonts locally, install the package and import:
  - npm i @fontsource-variable/geist-mono
  - Replace the CDN <link> with `import "@fontsource-variable/geist-mono";` in `Base.astro`.

Notes
- Design avoids buttons and images; only text and links.
- Dark mode adapts via `prefers-color-scheme`.

