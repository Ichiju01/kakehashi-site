// Builds the static site into ./public. Run: node build.mjs
import { mkdir, writeFile, rm, cp } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE } from "./src/config.mjs";
import { page, icon } from "./src/layout.mjs";
import { SECTORS, STEPS, SERVICES, ALSO_AVAILABLE, ALL_FAQS, CLIENT_FIT, WHY, DISCLAIMER, lowerList } from "./src/content.mjs";
import home from "./src/pages/home.mjs";
import howItWorks from "./src/pages/how-it-works.mjs";
import services from "./src/pages/services.mjs";
import { sectorsIndex, sectorPage } from "./src/pages/sectors.mjs";
import about from "./src/pages/about.mjs";
import partners from "./src/pages/partners.mjs";
import insights from "./src/pages/insights.mjs";
import checklist from "./src/pages/checklist.mjs";
import japanFit from "./src/pages/japan-fit.mjs";
import ja from "./src/pages/ja.mjs";
import contact from "./src/pages/contact.mjs";
import faq from "./src/pages/faq.mjs";
import { articlePage } from "./src/pages/article.mjs";
import { ARTICLES } from "./src/articles.mjs";
import { privacy, terms, disclaimer } from "./src/pages/legal.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, "public");

const notFound = () =>
  page({
    path: "/404.html",
    noindex: true,
    title: "Page not found",
    description: "The page you were looking for could not be found.",
    body: `<section class="notfound"><div class="wrap"><h1>This page could not be found.</h1><p class="lede">The link may be out of date, or the page may have moved.</p><a class="btn btn-primary" href="/">Back to home ${icon("arrow")}</a></div></section>`,
  });

const pages = {
  "/": home(),
  "/how-it-works/": howItWorks(),
  "/services/": services(),
  "/sectors/": sectorsIndex(),
  ...Object.fromEntries(SECTORS.map((s) => [`/sectors/${s.slug}/`, sectorPage(s)])),
  "/faq/": faq(),
  "/about/": about(),
  "/partners/": partners(),
  "/insights/": insights(),
  ...Object.fromEntries(ARTICLES.map((a) => [`/insights/${a.slug}/`, articlePage(a)])),
  "/checklist/": checklist(),
  "/japan-fit/": japanFit(),
  "/ja/": ja(),
  "/contact/": contact(),
  "/privacy/": privacy(),
  "/terms/": terms(),
  "/disclaimer/": disclaimer(),
};

await rm(out, { recursive: true, force: true });
for (const [path, html] of Object.entries(pages)) {
  const file = join(out, path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}
await writeFile(join(out, "404.html"), notFound());
await cp(join(root, "assets"), join(out, "assets"), { recursive: true });

const today = new Date().toISOString().slice(0, 10);
const articleMod = Object.fromEntries(ARTICLES.map((a) => [`/insights/${a.slug}/`, a.updated || a.date || today]));
// The English home page and /ja/ are language alternates of each other.
const langPair = (p) =>
  p === "/" || p === "/ja/"
    ? `\n    <xhtml:link rel="alternate" hreflang="en-AU" href="${SITE.url}/"/>\n    <xhtml:link rel="alternate" hreflang="ja" href="${SITE.url}/ja/"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/"/>\n  `
    : "";
await writeFile(
  join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${Object.keys(pages)
    .map((p) => `  <url><loc>${SITE.url}${p}</loc><lastmod>${articleMod[p] || today}</lastmod>${langPair(p)}</url>`)
    .join("\n")}\n</urlset>\n`
);

// Search engines and AI assistants are welcome to read the whole site.
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot"];
await writeFile(
  join(out, "robots.txt"),
  `User-agent: *\nAllow: /\n\n${AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /`).join("\n\n")}\n\nSitemap: ${SITE.url}/sitemap.xml\n`
);

// llms.txt: a plain-language summary for AI assistants (https://llmstxt.org). Built from the same approved copy as the pages.
const strip = (h) => h.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");
const link = (p, name, note) => `- [${name}](${SITE.url}${p})${note ? `: ${note}` : ""}`;
const llms = `# ${SITE.name}

> ${SITE.name} (架け橋, "bridge") is a Sydney-based, bilingual Japan market entry and sales service for Australian producers. We find the right Japanese buyers (importers, distributors, retailers and restaurant groups), handle the relationship in Japanese, and stay on as the client's Japan team.

- Who we help: Australian food, beverage, seafood, health, beauty and lifestyle producers.
- Team: a group of Australians with native Japanese backgrounds; fluent in English and Japanese; in Japan regularly.
- Fit: ${CLIENT_FIT}

## How it works
${STEPS.map((s, i) => `${i + 1}. ${s.title}: ${strip(s.text)}`).join("\n")}

## Services
${SERVICES.map((s) => `- ${s.title}: ${s.lede} Includes ${lowerList(s.includes)}.`).join("\n")}
- Also available: ${lowerList(ALSO_AVAILABLE)}.

## Sectors
${SECTORS.map((s) => link(`/sectors/${s.slug}/`, s.name, s.intro)).join("\n")}

## FAQ
${ALL_FAQS.map(([q, a]) => `- ${q} ${strip(a)}`).join("\n")}

## Pages
${link("/", "Home")}
${link("/how-it-works/", "How it works")}
${link("/services/", "Services")}
${link("/sectors/", "Sectors")}
${link("/faq/", "FAQ", "questions about selling into Japan and working with us")}
${link("/about/", "About")}
${link("/japan-fit/", "Check your Japan fit", "a short quiz")}
${link("/checklist/", "Japan Export Readiness Checklist", "a free on-page checklist, no sign-up")}
${link("/contact/", "Contact", "book a free 20-minute call")}
${link("/ja/", "日本語", "for Japanese importers and buyers")}

## Optional
${link("/partners/", "Partners", "for business advisers, accountants and industry bodies")}
${link("/insights/", "Insights", "guides for Australian exporters")}
${ARTICLES.map((a) => link(`/insights/${a.slug}/`, a.title, a.excerpt)).join("\n")}
${link("/privacy/", "Privacy Policy")}

${DISCLAIMER(SITE.name)}
`;
await writeFile(join(out, "llms.txt"), llms);

// IndexNow: the key file proves we own the site; .github/workflows/deploy.yml submits urls.txt after each deploy.
if (SITE.indexNowKey) {
  await writeFile(join(out, `${SITE.indexNowKey}.txt`), SITE.indexNowKey);
  await writeFile(join(out, "urls.txt"), Object.keys(pages).map((p) => `${SITE.url}${p}`).join("\n") + "\n");
}

console.log(`Built ${Object.keys(pages).length + 1} pages into ./public`);
