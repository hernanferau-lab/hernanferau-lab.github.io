# Hernan Fernandez — Portfolio

Static single-page portfolio. Vanilla HTML/CSS/JS. No build step. Designed for GitHub Pages.

## What's here

```
portfolio/
├── index.html          # Single page, semantic markup
├── styles.css          # All styling (mobile-first, dark theme, WCAG AA-oriented)
├── script.js           # Nav, mobile menu, reveal-on-scroll, project expand/collapse
├── README.md           # This file
└── assets/
    ├── portrait.jpg    # You add this (see below)
    └── cv.pdf          # You add this (see below)
```

## Two assets you need to add before deploying

1. **`assets/portrait.jpg`** — the professional headshot (the suit-and-white-shirt one already used in your current portfolio). Recommended: 800×840 px, ≤200 KB, JPG.
2. **`assets/cv.pdf`** — the CV version you want recruiters to download. Recommend the "Business_Analyst" variant with the "Full Work Rights" line and the Kaplan applied-analytics detail. Rename it to exactly `cv.pdf`.

You can copy them in from PowerShell:

```bash
copy "C:\Users\Pao\Pictures\your-portrait.jpg" "assets\portrait.jpg"
copy "D:\RESUMES\APLICATIONS\Business_Analyst_Hernan_Fernandez.pdf" "assets\cv.pdf"
```

## Preview locally

Just double-click `index.html`, or run a tiny static server so paths behave the same as production:

```bash
python -m http.server 8080
```

Then open http://localhost:8080/.

## Deploy on GitHub Pages (recommended)

Two options: **user site** (fastest, lives at `hernanferau-lab.github.io`) or **project site** (`hernanferau-lab.github.io/portfolio`).

### Option A — user site (recommended)

1. Create a new public repo on GitHub named exactly **`hernanferau-lab.github.io`**.
2. In this `portfolio/` folder:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/hernanferau-lab/hernanferau-lab.github.io.git
   git push -u origin main
   ```
3. Wait ~1 minute. Site is live at **https://hernanferau-lab.github.io**.

### Option B — project site

1. Create a public repo named `portfolio`.
2. Same git commands as above but point to `hernanferau-lab/portfolio.git`.
3. In the repo on GitHub: **Settings → Pages → Source: Deploy from a branch → main / root → Save**.
4. Site is live at **https://hernanferau-lab.github.io/portfolio/**.

## Custom domain (hernanferau.com)

Once you own the domain:

1. Add a file named `CNAME` (no extension) at the root of the repo, containing exactly:
   ```
   hernanferau.com
   ```
2. At your domain registrar, create these DNS records pointing to GitHub Pages:
   - `A` record for `@` → `185.199.108.153`
   - `A` record for `@` → `185.199.109.153`
   - `A` record for `@` → `185.199.110.153`
   - `A` record for `@` → `185.199.111.153`
   - `CNAME` for `www` → `hernanferau-lab.github.io`
3. In the repo: **Settings → Pages → Custom domain → hernanferau.com → Save**, then tick **Enforce HTTPS** once the certificate provisions (usually 10–30 min).

## Editing content

Everything editorial is directly in `index.html`. Look for these anchors and edit the text between the tags:

- Hero headline → `<h1 class="hero__title">`
- Metrics strip → `<section class="metrics">`
- Projects → each `<article class="project">`
- About → `#about`
- Timeline → `<ol class="timeline">`
- Testimonial → `<blockquote>` in `#testimonial`

The reference letter is quoted verbatim from Andrew Railz's "To Whom It May Concern" letter. If you want to swap for a shorter or different pull-quote, edit inside `<blockquote>`.

## Tone and NDA scope

The current copy stays inside the boundary of Andrew's public reference letter: it names Railz, describes the sector (fleet / asset management) and role (BA on MVP), and quotes Andrew publicly. It **does not** publish: engine internals, weights, correlations, DFDs of internal logic, client names, or code. Keep it that way when adding to the site.

## Analytics (optional)

If you want visit counts, add a lightweight, privacy-friendly script (Plausible or GoatCounter) right before `</body>`. Do **not** add Google Analytics unless you also add a cookie banner — AU/EU visitors expect one.
