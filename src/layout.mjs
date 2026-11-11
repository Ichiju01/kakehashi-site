import { SITE, ph } from "./config.mjs";

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Stroke icons, 24x24. Inherit colour from currentColor.
const ICONS = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  language: '<path d="M4 5h9M8.5 3v2M6 5c.6 3.6 2.8 6.4 6 8M11 5c-.7 3.8-3.2 6.9-7 8.5"/><path d="M13 21l4-9 4 9M14.5 18h5"/>',
  handshake: '<path d="M3 11l3-3 4 1 3-2 3 1 5 3"/><path d="M3 11l5 5c.8.8 2 .8 2.8 0l.2-.2M21 10l-6 6c-.8.8-2 .8-2.8 0L10 13.8"/><path d="M12.5 17.5l1 1c.8.8 2 .8 2.8 0"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  doc: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  growth: '<path d="M3 20h18"/><path d="M5 16l5-5 3.5 3.5L20 8"/><path d="M15 8h5v5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5"/><path d="M15.5 4.8a3.5 3.5 0 010 6.4M18 14.8c2 .7 3.2 2.5 3.5 5.2"/>',
  route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 000-6H9a3 3 0 010-6h6.5"/>',
  leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-4 6-6.5 10-8.5"/>',
  glass: '<path d="M7 3h10l-.6 6a4.4 4.4 0 01-8.8 0z"/><path d="M12 13.5V20M8.5 20.5h7"/>',
  fish: '<path d="M3 12c3-4.5 7-6 10.5-6C18 6 20.5 9 21 12c-.5 3-3 6-7.5 6C10 18 6 16.5 3 12z"/><path d="M3 12l-1 3.5M3 12L2 8.5"/><circle cx="16.5" cy="10.5" r=".6" fill="currentColor"/>',
  drop: '<path d="M12 3c3.5 4.2 6 7.6 6 10.8a6 6 0 01-12 0C6 10.6 8.5 7.2 12 3z"/><path d="M9.3 14.5a2.8 2.8 0 002.7 2.3"/>',
  spark: '<path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"/><path d="M18.5 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
  store: '<path d="M4 9.5L5.5 4h13L20 9.5"/><path d="M4 9.5a2.7 2.7 0 005.3 0 2.7 2.7 0 005.4 0 2.7 2.7 0 005.3 0"/><path d="M5.5 12v8h13v-8M10 20v-4.5h4V20"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6 8.5-6"/>',
  phone: '<path d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 006.6 6.6l1.4-2.3 4.5 1.8V19a2 2 0 01-2 2A16.5 16.5 0 013 5.5a2 2 0 012-2z"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.8v.1M11.5 16v-5.5M11.5 13c0-1.7 1-2.6 2.3-2.6s2.2.9 2.2 2.6V16"/>',
  download: '<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
};

export const icon = (name, cls = "icon") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

// The mark: one arc landing on two gold points. Two shores, one connection:
// the literal meaning of 架け橋 (kakehashi). The arc takes the surrounding text colour.
export const mark = (size = 40) => `<svg class="mark" width="${size}" height="${Math.round(size * 0.7)}" viewBox="0 0 40 28" aria-hidden="true">
  <path d="M5 23.5Q20 -2 35 23.5" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>
  <circle cx="5" cy="23.5" r="3.4" fill="#c9a45c"/>
  <circle cx="35" cy="23.5" r="3.4" fill="#c9a45c"/>
</svg>`;

const brand = (cls = "") => `<a class="brand ${cls}" href="/" aria-label="${esc(SITE.name)} home">${mark()}<span class="brand-text"><span class="brand-name">${esc(SITE.name)}</span><span class="brand-sub">${esc(SITE.descriptor)}</span></span></a>`;

const NAV = [
  ["/how-it-works/", "How it works"],
  ["/services/", "Services"],
  ["/sectors/", "Sectors"],
  ["/about/", "About"],
  ["/insights/", "Insights"],
];

export const BOOK = "/contact/";

const header = (active) => `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    ${brand()}
    <nav class="nav" aria-label="Main">
      <ul>${NAV.map(([href, label]) => `<li><a href="${href}"${active === href ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}<li class="nav-lang"><a class="nav-ja" href="/ja/" lang="ja" hreflang="ja" title="Japanese"${active === "/ja/" ? ' aria-current="page"' : ""}>${icon("globe")}日本語</a></li></ul>
    </nav>
    <a class="btn btn-primary btn-sm header-cta" href="${BOOK}">Book a free call</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">${icon("menu")}</button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <ul>${NAV.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}<li><a href="/faq/">FAQ</a></li><li><a href="/partners/">Partners</a></li><li><a href="/contact/">Contact</a></li><li class="mobile-lang"><a href="/ja/" lang="ja" hreflang="ja" title="Japanese">${icon("globe")}日本語</a></li></ul>
    <a class="btn btn-primary" href="${BOOK}">Book a free call ${icon("arrow")}</a>
  </div>
</header>`;

export const contactLines = () => `<ul class="contact-lines">
  <li>${icon("mail")} ${SITE.email ? `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>` : ph("Email")}</li>
  ${SITE.linkedinUrl ? `<li>${icon("linkedin")} <a href="${esc(SITE.linkedinUrl)}" rel="noopener" target="_blank">Kakehashi.au on LinkedIn</a></li>` : ""}
</ul>`;

const footer = () => `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        ${brand("brand-light")}
        <p>Bilingual Japan market entry and sales support for Australian producers.</p>
        <p class="footer-jp" lang="ja">${esc(SITE.jpTagline)}</p>
      </div>
      <div class="footer-cols">
        <div><h2 class="footer-h">Work with us</h2><ul><li><a href="/how-it-works/">How it works</a></li><li><a href="/services/">Services</a></li><li><a href="/sectors/">Sectors</a></li><li><a href="/faq/">FAQ</a></li><li><a href="/japan-fit/">Check your Japan fit</a></li></ul></div>
        <div><h2 class="footer-h">Company</h2><ul><li><a href="/about/">About</a></li><li><a href="/partners/">Partners</a></li><li><a href="/insights/">Insights</a></li><li><a href="/contact/">Contact</a></li><li><a href="/ja/" lang="ja">日本語</a></li></ul></div>
        <div><h2 class="footer-h">Contact</h2>${contactLines()}</div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} ${esc(SITE.name)}</p>
      <ul><li><a href="/privacy/">Privacy</a></li><li><a href="/terms/">Terms</a></li><li><a href="/disclaimer/">Disclaimer</a></li></ul>
    </div>
  </div>
</footer>`;

export const ORG_ID = `${SITE.url}/#organization`;

const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE.name,
  alternateName: ["Kakehashi", "架け橋"],
  url: SITE.url,
  logo: `${SITE.url}/assets/logo.png`,
  image: `${SITE.url}/assets/og-image.png`,
  description: "Bilingual Japan market entry and sales support for Australian producers. Kakehashi.au finds the right Japanese buyers, handles the relationship in Japanese and stays on as the client's Japan team.",
  slogan: SITE.jpTagline,
  areaServed: [{ "@type": "Country", name: "Australia" }, { "@type": "Country", name: "Japan" }],
  knowsAbout: ["Exporting to Japan from Australia", "Japan market entry", "Japanese importers and distributors", "Japanese business culture", "Food, wine, seafood, health and beauty, and lifestyle exports to Japan"],
  ...(SITE.email ? { email: SITE.email } : {}),
  knowsLanguage: ["en", "ja"],
  ...(SITE.linkedinUrl ? { sameAs: [SITE.linkedinUrl] } : {}),
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  inLanguage: ["en-AU", "ja"],
  publisher: { "@id": ORG_ID },
});

// Breadcrumbs for search results: Home > (section) > page. `crumb` is the short page name.
const SECTION_NAMES = { "/sectors/": "Sectors", "/insights/": "Insights" };
const breadcrumbSchema = (path, crumb) => {
  const items = [["Home", "/"]];
  const parent = path.split("/").filter(Boolean).length > 1 ? `/${path.split("/")[1]}/` : null;
  if (parent && SECTION_NAMES[parent]) items.push([SECTION_NAMES[parent], parent]);
  items.push([crumb, path]);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, p], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE.url + p })),
  };
};

// `alternates` pairs the English and Japanese equivalents for hreflang (home and /ja/).
// `title` is the search-result title (brand is appended); `crumb` is the short name for breadcrumbs.
export function page({ title, description, path, body, active = "", schema = [], scripts = [], lang = "en-AU", alternates = null, crumb = title, noindex = false }) {
  const fullTitle = `${title} | ${SITE.name}`;
  const canonical = SITE.url + path;
  const ogImage = `${SITE.url}/assets/og-image.png`;
  const allSchema = [orgSchema(), ...(path === "/" ? [websiteSchema()] : path === "/404.html" ? [] : [breadcrumbSchema(path, crumb)]), ...schema];
  const hreflang = alternates
    ? [["en-AU", alternates.en], ["ja", alternates.ja], ["x-default", alternates.en]].map(([l, p]) => `<link rel="alternate" hreflang="${l}" href="${SITE.url}${p}">`).join("\n")
    : `<link rel="alternate" hreflang="${lang}" href="${esc(canonical)}">`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<script>document.documentElement.classList.add("js")</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}">
<link rel="canonical" href="${esc(canonical)}">
${hreflang}
<meta property="og:type" content="website">
<meta property="og:locale" content="${lang === "ja" ? "ja_JP" : "en_AU"}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:locale:alternate" content="${lang === "ja" ? "en_AU" : "ja_JP"}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(SITE.name)}: Japan market entry and sales for Australian producers">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${ogImage}">
<meta name="theme-color" content="#0f1f38">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/logo.png">
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable summary">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&family=Noto+Serif+JP:wght@500;600&family=Noto+Sans+JP:wght@400;500;700&display=swap">
<link rel="stylesheet" href="/assets/styles.css">
${allSchema.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n")}
</head>
<body>
${header(active)}
<main id="main">
${body}
</main>
${footer()}
<script>window.SITE_CONFIG=${JSON.stringify({ endpoint: SITE.formEndpoint, ga4: SITE.ga4Id })}</script>
<script src="/assets/main.js" defer></script>
${scripts.map((s) => `<script src="${s}" defer></script>`).join("\n")}
</body>
</html>
`;
}

// Closing call to action (approved copy by default).
export const ctaBand = ({ heading = "Is your product right for Japan?", text = "Book a free 20-minute call.", button = "Book a free call", href = BOOK } = {}) => `
<section class="cta-band">
  <div class="wrap cta-inner">
    <div class="cta-copy">
      <h2>${heading}</h2>
      <p>${text}</p>
    </div>
    <a class="btn btn-gold btn-lg" href="${href}">${button} ${icon("arrow")}</a>
  </div>
</section>`;

export const pageHero = ({ eyebrow, title, lede = "", actions = "" }) => `
<section class="page-hero">
  <div class="wrap">
    <p class="eyebrow">${eyebrow}</p>
    <h1>${title}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ""}
    ${actions ? `<div class="actions">${actions}</div>` : ""}
  </div>
</section>`;

// Image slot for owner-supplied photography. Shows a labelled placeholder until `src` is set.
// `img` is a base path such as "/assets/img/name"; expects name-800.webp and name-1400.webp
export const photo = (label, { src = "", img = "", alt = label, ratio = "4/3", cls = "" } = {}) =>
  img
    ? `<figure class="photo ${cls}" style="aspect-ratio:${ratio}"><img src="${img}-1400.webp" srcset="${img}-800.webp 800w, ${img}-1400.webp 1400w" sizes="(max-width: 760px) 100vw, 50vw" alt="${esc(alt)}" loading="lazy" decoding="async"></figure>`
    : src
    ? `<figure class="photo ${cls}" style="aspect-ratio:${ratio}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></figure>`
    : `<figure class="photo photo-ph ${cls}" style="aspect-ratio:${ratio}"><figcaption><span>Photo: ${esc(label)}</span><span class="ph">[owner to supply]</span></figcaption></figure>`;

// Flow graphic (owner-approved change from the brief's "Japanese importer" step, 2 Nov 2026)
export const flow = () => `<ol class="flow" aria-label="How your product reaches Japan">
  <li><span class="flow-ic">${icon("leaf")}</span><span class="flow-label">Your product</span></li>
  <li class="flow-us"><span class="flow-ic">${mark(30)}</span><span class="flow-label">${esc(SITE.name)}</span></li>
  <li><span class="flow-ic">${icon("handshake")}</span><span class="flow-label">Japanese buyer<span class="flow-sub">Importer, distributor, retailer or restaurant group</span></span></li>
  <li><span class="flow-ic">${icon("store")}</span><span class="flow-label">Japanese shelves, menus and online stores</span></li>
</ol>`;

export const faqList = (faqs) => `<div class="faq-list">${faqs
  .map(([q, a, note]) => `<details class="faq-item"><summary><span>${q}</span>${icon("plus", "icon faq-ic")}</summary><p>${a}</p>${note ? `<p class="faq-note">${note}</p>` : ""}</details>`)
  .join("")}</div>`;

export const stepsList = (steps) => `<ol class="steps">${steps
  .map((s, i) => `<li class="step reveal"><span class="step-n">${String(i + 1).padStart(2, "0")}</span><span class="step-ic">${icon(s.ic)}</span><h3>${s.title}</h3><p>${s.text}</p></li>`)
  .join("")}</ol>`;
