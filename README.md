# Kakehashi: Japan market entry and sales for Australian producers

A static website. Pages are generated from `src/` into `public/`.

## Preview locally

```bash
node build.mjs
node serve.mjs public 5180
```

Then open http://localhost:5180

## Where things live

| File | What it is |
|---|---|
| `src/config.mjs` | Contact details, form endpoint, booking link, analytics ID |
| `src/content.mjs` | Most of the site copy: steps, services, sectors, FAQ, article titles, disclaimer |
| `src/layout.mjs` | Header, footer, logo, shared page template |
| `src/pages/` | One file per page (Home, How it works, Services, Sectors, About, Partners, Insights, Checklist, Japan fit quiz, 日本語, Contact, legal) |
| `assets/` | Stylesheet, scripts (`forms.js`, `quiz.js`, `main.js`), favicon |
| `public/` | Generated site. Don't edit; rebuild with `node build.mjs` |
| `OWNER-TODO.md` | Owner notes (kept out of GitHub) |
| `.github/workflows/deploy.yml` | Builds and publishes the site to GitHub Pages on every push to `main` |

The previous OEM sourcing version is no longer in this folder.
