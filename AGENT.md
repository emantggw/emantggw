# AGENT.md

Guide for AI coding agents (and humans) working in this repository.

- Owner: Amanuel Tito (github.com/emantggw), email emantweb@gmail.com
- Remote: https://github.com/emantggw/emantggw.git (branch: main)

---

## 1. What this repository is

Two things live in one repo:

1. **GitHub portfolio / profile landing page** rendered by the root `readme.md`, which is what visitors see on github.com/emantggw. It presents experience, projects, tech-stack badges, Flutter packages, articles, and screenshots (images in `assets/`).
2. **A CV generator in `c/`** that produces professional one-page A4 PDF resumes from plain data files, rendered with headless Chromium. Two focused variants are maintained today:
   - `c/mobile/` renders **"Amanuel Tito - Mobile CV.pdf"** (role: *Senior Mobile App Developer*, FinTech-heavy)
   - `c/fullstack/` renders **"Amanuel Tito - Fullstack CV.pdf"** (role: *Senior Full-Stack Engineer*, backend / bots / ML focus)

The repository is intentionally simple: static HTML, CSS, JS data, fonts, images and PDFs. There is no build system, no package manager, no server. "Building" means rendering PDFs with a local headless Chromium.

---

## 2. Repository layout

| Path | Purpose |
|---|---|
| `readme.md` | GitHub profile landing page (banner, badges, projects, packages, articles). |
| `config.md` | **Project rules. Read first, it is the law.** |
| `AGENT.md` | This file. |
| `assets/` | Banners, project screenshots, company logos. |
| `assets/fonts/` | Inter woff2 files (400, 500, 600, 700). Source of truth for fonts. |
| `c/` | CV generator root. Kept clean: shared sources live in `_shared`, everything else lives inside a variant folder. |
| `c/_shared/` | **Master shared sources for the CV generator.** |
| `c/_shared/template.html` | Master render template: reads `data.js` and fills `#page-root`. Copy it into a new variant as `index.html`. |
| `c/_shared/base.css` | Master shared stylesheet (fonts referenced as `../assets/fonts/`). Copy it into a new variant and fix the 4 font paths to `fonts/`. |
| `c/index.html`, `c/style.css`, `c/data.js` | **Legacy** single-CV layout (also `c/Amanuel Tito.pdf`). Do not extend; keep intact as fallback. |
| `c/Amanuel_Tito_Cover_Letter.md` | Cover letter draft (markdown). |
| `c/<variant>/` | One self-contained folder per CV variant (currently `mobile/` and `fullstack/`). Each contains everything needed to render without touching any sibling. |
| `c/<variant>/index.html` | Render entry point (copy of `_shared/template.html` with the variant title and CSS links). |
| `c/<variant>/data.js` | All CV content for the variant. |
| `c/<variant>/style.css` | Theme colors + spacing overrides for single-page fit. |
| `c/<variant>/base.css` | Copy of `_shared/base.css` with font paths fixed to local `./fonts/`. |
| `c/<variant>/fonts/` | Local copy of the 4 Inter woff2 files. |
| `c/<variant>/<variant CV>.pdf` | **Generated PDF artifact, committed and kept in sync with data.** |
| `c/<variant>/examples/` (optional) | Placeholder for per-variant extras (screenshots, notes); not required. |

---

## 3. The CV data model (`data.js`)

Every variant defines `const cvData = { ... }` and its `index.html` renders it via JS
`document.getElementById('page-root').innerHTML`. Shape:

```js
{
  name: "Amanuel Tito",
  role: "Senior Mobile App Developer",
  contact: [ { label, text, link }, ... ],   // 5 items, link may be null
  skills: [ { group, items: [...] }, ... ],  // sidebar skill groups
  packages: [ { name, link }, ... ],         // Flutter pub.dev packages
  education: { degree, school, meta },       // meta may contain HTML
  certifications: [ { name, date }, ... ],   // e.g. date "Sep 2026"
  languages: [ { name, level }, ... ],
  summary: "one-paragraph pitch",
  experience: [ { title, company, companyLink, dates, location, bullets: [..] } ],
  projects: [ { name, desc, stack, links: [ {label, url} ] } ],
  moreWork: { text, linkText, link }         // footer "More work on github.com/emantggw"
}
```

Notes and subtle rules:
- `education.meta` is **deliberately not HTML-escaped** by the template so that
  `<b>CGPA 3.86 / 4.00</b>` renders bold. Do not escape it.
- `experience[].bullets[]` items are injected as-is, so they may contain `<b>...</b>`.
- `contact` must have exactly 5 items to fill the header grid: Phone, Email, LinkedIn, GitHub, Location.
- `certifications[].date` is optional in the model but always provide one (missing dates render blank).
- Dates use `Mon YYYY - Present` (plain hyphen, never en/em dash).
- Keep text concise: both CVs must fit **one A4 page**.

---

## 4. How to render a CV to PDF

Each variant renders itself. Run from inside the variant folder and write the PDF into
that same folder (that is where it is committed):

```bash
cd c/mobile
chromium --headless --no-sandbox --disable-gpu \
  --print-to-pdf="Amanuel Tito - Mobile CV.pdf" index.html
```

Same for fullstack. Every variant is self-contained: `index.html` loads the variant's own
`data.js`, `base.css`, `style.css`, and `fonts/`, so rendering never touches siblings.

---

## 5. Design rules (do not break these)

- **One page A4** (210 x 297 mm). The two-column `.body` flex container is NOT split
  across pages by Chromium's print engine: if the content slightly exceeds one page,
  the whole body jumps to page 2 (page 1 shows only the header). Treat 297 mm as a hard cap.
- **Inter typeface only** (weights 400/500/600/700). Verify with `pdffonts` that no
  fallback font (e.g. NimbusSans) appears.
- **Layout**: header (name/role left, 5-cell contact grid right at 77 mm, `1.05fr 0.95fr`),
  then sidebar (Skills, Published Packages, Education, Certifications, Languages) and main
  (Summary, Experience, Selected Projects).
- **No em dashes** anywhere (per `config.md`), including commits and this file. Use commas,
  periods, or plain hyphens. En dashes and em dashes are forbidden in user-visible text.
- **Accent-based theming**: each variant's `style.css` only overrides `:root` color variables
  and spacing, so all CVs share one visual system.

---

## 6. Validation checklist (run after every change)

```bash
f="Amanuel Tito - Mobile CV.pdf" # inside c/mobile

pdfinfo "$f" | grep Pages            # MUST be: Pages: 1
pdffonts  "$f"                       # every row must be Inter-*, no NimbusSans
pdftotext "$f" - | grep -c $'\xE2\x80\x93\|\xE2\x80\x94'   # MUST print 0 (no en/em dashes)
```

Also confirm the changed content actually appears in the extracted text (e.g. a new
certificate, address, or bullet), and that the page bottom ink stays inside ~290 mm.

---

## 7. Recipe: common feature requests

### Change contact info
Edit the `contact` array in the variant's `data.js`. Keep 5 items, order Phone, Email,
LinkedIn, GitHub, Location.

### Add a skill group or a tag
Add or remove objects inside `skills` (or edit `items`). Sidebar wraps tags automatically.
Watch sidebar height: it typically drives page fit.

### Add a project
Append to `projects` in `data.js`:
```js
{ "name": "Project Name", "desc": "One or two concise sentences.",
  "stack": "Flutter · NestJS", "links": [ { "label": "Link", "url": "https://..." } ] }
```
Keep `desc` short; long descriptions push the page over the limit.

### Add a certification
```js
{ "name": "Name of Course or Award", "date": "Sep 2026" }
```
Insert near the top (most recent first). Keep the count small enough for the sidebar.

### Change the accent color of one variant
Edit `:root` variables in that variant's `style.css` (`--accent`, `--ink`, `--sidebar-bg`, ...).

### Add a brand-new variant (e.g. a new focus)
1. `cp -r c/mobile c/newfocus`
2. Update `c/newfocus/index.html` title and `c/newfocus/data.js` role/content.
3. Tune `c/newfocus/style.css` spacing to fit one page.
4. Render inside the folder and commit the new PDF.

---

## 8. Gotchas and known traps

- **Flex print quirk**: if the body is a few mm too tall, Chromium does not split it, it
  pushes it entirely to page 2. Symptom: page 1 has only the header. Fixes (in order):
  trim copy (bullets/descriptions), then tighten `style.css` spacing, then reduce font
  sizes. Never fix by shrinking below ~8 pt body.
- **Fonts must be local files**: `src: url(fonts/inter-400.woff2)`. Base64 `data:` URIs are
  NOT embedded correctly by Chromium's print to PDF (measured with `pdffonts`). Do not "improve" this.
- **`base.css` lives in 3 places on purpose**: `_shared/base.css` is the master
  (`../assets/fonts/`); each variant keeps its own `base.css` (`fonts/`). When editing
  shared CSS, update `_shared` first, then copy into each variant and fix the four
  `src: url(...)` font paths.
- **`template.html` lives in `_shared`**: variants hold a generated `index.html` copy.
  After editing `_shared/template.html`, regenerate (or copy) it into each variant and
  patch the `<title>` and added CSS links.
- **Fonts are duplicated on purpose**: `assets/fonts/` (source of truth) and one copy in
  each variant folder so every CV is self-contained.
- **PDFs are tracked in git**: after editing `data.js` or CSS, rebuild the PDF inside the
  variant folder and commit it together with the sources, or the artifact drifts.
- The legacy `c/index.html` + `c/data.js` + `c/style.css` (+ `c/Amanuel Tito.pdf`) is the
  original single CV. Keep it intact (part of git history and a fallback).

---

## 9. Commit conventions

Follow the repo history style: `feat: add ...`, `refactor: refine ...`, `fix: correct ...`.
Commit source files **and** the regenerated PDFs (and font copies, if added) together so
that the repository always reproduces its PDFs exactly.
