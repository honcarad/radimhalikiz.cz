# CLAUDE.md

Guidance for Claude Code when working in this repo. Keep it current when
conventions change.

## What this is

Static marketing/content site for a dance studio, built on the **HOWL stack**:
**H**TML-first, with **O**wn-your-tools, **W**eb-standards, **L**ightweight JS.

- **Eleventy (11ty)** — static site generator (v3)
- **Tailwind CSS** (v3, standalone CLI) — styling
- **HTMX** — server/fetch interactivity via HTML attributes (CDN)
- **Stimulus** — small client UI behaviors, loaded via **import map** (CDN)
- **Netlify** — hosting + form handling

No framework, no bundler. Client JS is authored as native ES modules and served
as-is.

## Commands

```bash
npm install       # one-time setup
npm run dev       # Eleventy --serve + Tailwind --watch, in parallel
npm run build     # production build → dist/
npm run clean     # remove dist/
```

Preview runs at http://localhost:8080/.

## Architecture & conventions

- **Directories:** input `src/`, output `dist/`, includes `src/_includes/`.
  `dist/` is generated — never edit it, it's gitignored.
- **Template engine is Nunjucks (`njk`)** for both HTML and Markdown (set in
  `.eleventy.js`). Use Nunjucks filter syntax `{{ x | filter("arg") }}`, **not**
  Liquid syntax `{{ x | filter: "arg" }}`.
- **Layouts:** `base.html` is the outer frame (navbar/footer/head). `article.html`
  wraps Markdown articles and itself sets `layout: base.html` (nested layouts).
- **Tailwind is compiled OUTSIDE Eleventy** by the standalone CLI, written
  straight to `dist/css/main.css`. In `npm run build`, `build:11ty` runs BEFORE
  `build:css` on purpose — Eleventy cleans the output dir, so CSS must be written
  last or it gets wiped.
- **Design tokens live in `tailwind.theme.js`**, spread into `theme.extend` in
  `tailwind.config.js`. Change colors/fonts/shape there, in one place.
- **HTMX fragments** live in `src/partials/`. That folder is BOTH passthrough-
  copied AND added to `eleventyConfig.ignores` so Eleventy doesn't also render
  it as a page — we want exactly one file at `/partials/schedule.html`. If you
  add HTMX endpoints on a static host, they must be real files at the fetched URL.
- **Stimulus controllers** live in `src/js/controllers/`, passed through via
  `addPassthroughCopy("src/js")`, imported by absolute URL in `base.html`
  (`import X from "/js/controllers/x.js"`) using the import map. New controllers
  must be registered in the boot `<script type="module">` in `base.html`.
- **Custom `date` filter** is defined in `.eleventy.js` (dependency-free
  strftime-ish; supports `%Y %m %d %e %B`). There is no Luxon/date plugin.

## Gotchas

- The HTMX `<script>` `integrity` hash in `base.html` is a placeholder — replace
  with the real SRI hash (or drop `integrity`/`crossorigin`) before deploying.
- The Netlify contact form (`data-netlify="true"`) does **not** work in local
  preview — only on Netlify (or via `netlify dev`). Keep the hidden `form-name`
  input in sync with the form's `name`.
- Theme (`tailwind.theme.js`) is matched to the live radimhalikiz.cz site: gold
  `#f3c813` accent (`brand`), black `ink` text, Montserrat body + Poppins display.
  The Google Fonts are loaded in `base.html`; headings get the display font via a
  base layer in `src/css/tailwind.css`.
- The `brand` accent is a LIGHT yellow — always put dark text on it
  (`bg-brand text-ink`), never `text-white`, or it becomes unreadable.

## When making changes

- Match the existing style: semantic HTML, Tailwind utility classes inline,
  clear comments explaining *why*.
- After template or config changes, run `npm run build` to confirm it compiles
  before reporting done.
- Keep the README non-technical (it's written for the studio owner); put
  developer-facing detail here instead.
