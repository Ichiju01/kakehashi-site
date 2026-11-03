import { page, icon, ctaBand, pageHero } from "../layout.mjs";
import { SECTORS, STEPS } from "../content.mjs";
import { ARTICLES } from "../articles.mjs";
import { articleCard } from "./article.mjs";

// Two relevant guides per sector, linked from each sector page.
const GUIDES = {
  "food-and-produce": ["export-food-from-australia-to-japan", "japanese-labelling-basics"],
  "wine-spirits-and-craft-beer": ["japanese-labelling-basics", "pricing-your-product-for-japan"],
  "seafood-meat-and-dairy": ["export-food-from-australia-to-japan", "pricing-your-product-for-japan"],
  "health-and-beauty": ["what-japanese-importers-look-for", "pricing-your-product-for-japan"],
  "fashion-and-lifestyle": ["what-japanese-importers-look-for", "japanese-business-etiquette"],
};
const guidesFor = (slug) => (GUIDES[slug] || []).map((g) => ARTICLES.find((a) => a.slug === g)).filter(Boolean);

const FIT_CTA = { heading: "Is your product a fit for Japan?", text: "Answer a few short questions and get an honest first read.", button: "Check your Japan fit", href: "/japan-fit/" };

export const sectorsIndex = () =>
  page({
    path: "/sectors/",
    active: "/sectors/",
    title: "Sectors: Australian products for Japan",
    crumb: "Sectors",
    description: "Japan market entry for Australian food and produce, wine, spirits and craft beer, seafood, meat and dairy, health and beauty, and fashion and lifestyle brands.",
    body: `
${pageHero({
  eyebrow: "Sectors",
  title: "Where Australian producers can win in Japan.",
  lede: "We work with Australian food, beverage, health, beauty and lifestyle brands. Choose your sector to see what to prepare and how we would approach it.",
})}
<section class="section">
  <div class="wrap">
    <div class="tiles sectors">
      ${SECTORS.map((s) => `<a class="tile tile-link reveal" href="/sectors/${s.slug}/"><span class="tile-ic">${icon(s.ic)}</span><h2 class="h3">${s.name}</h2><p>${s.intro}</p><span class="more">Explore ${icon("arrow")}</span></a>`).join("")}
    </div>
  </div>
</section>
${ctaBand(FIT_CTA)}`,
  });

export const sectorPage = (s) =>
  page({
    path: `/sectors/${s.slug}/`,
    active: "/sectors/",
    title: s.seoTitle,
    crumb: s.name,
    description: s.metaDesc,
    body: `
<section class="page-hero">
  <div class="wrap">
    <p class="crumbs"><a href="/sectors/">Sectors</a> / ${s.name}</p>
    <span class="tile-ic tile-ic-lg">${icon(s.ic)}</span>
    <h1>${s.name}</h1>
    <p class="lede">${s.intro}</p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">What to prepare for</p>
      <h2>Have these ready before buyers ask.</h2>
      <p>Japanese buyers value preparation. These are the things that help a conversation move quickly.</p>
    </div>
    <ul class="ticks ticks-lg reveal">${s.prepare.map((p) => `<li>${icon("check")}<span>${p}</span></li>`).join("")}</ul>
  </div>
</section>

<section class="section section-grey">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">How our four steps apply</p>
      <h2>${s.name}, step by step.</h2>
    </div>
    <ol class="steps">${STEPS.map((st, i) => `<li class="step reveal"><span class="step-n">${String(i + 1).padStart(2, "0")}</span><span class="step-ic">${icon(st.ic)}</span><h3>${st.title}</h3><p>${s.steps[i]}</p></li>`).join("")}</ol>
    <p class="section-link reveal"><a href="/how-it-works/">How it works in detail ${icon("arrow")}</a></p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Guides</p>
      <h2>Read before you approach buyers.</h2>
    </div>
    <div class="articles articles-two">${guidesFor(s.slug).map(articleCard).join("")}</div>
  </div>
</section>

${ctaBand(FIT_CTA)}`,
  });
