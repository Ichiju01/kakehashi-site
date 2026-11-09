import { SITE } from "../config.mjs";
import { page, icon, ctaBand, esc, ORG_ID } from "../layout.mjs";
import { ARTICLES, PUBLISHED } from "../articles.mjs";

// Each article can set its own date; the first six share PUBLISHED.
export const articleDate = (a) => a.date || PUBLISHED;
const dateLabel = (d) => new Date(d).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
const strip = (h) => h.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");

export const articleCard = (a) => `<a class="article-card tile-link" href="/insights/${a.slug}/" data-cat="${a.cat}">
  <p class="article-cat">${a.cat}</p>
  <h2 class="h3">${a.title}</h2>
  <p>${a.excerpt}</p>
  <span class="more">Read the guide ${icon("arrow")}</span>
</a>`;

const articleSchema = (a) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.description,
  image: `${SITE.url}/assets/og-image.png`,
  datePublished: articleDate(a),
  dateModified: a.updated || articleDate(a),
  inLanguage: "en-AU",
  articleSection: a.cat,
  author: { "@type": "Organization", name: `${SITE.name} team`, url: `${SITE.url}/about/` },
  publisher: { "@id": ORG_ID },
  mainEntityOfPage: `${SITE.url}/insights/${a.slug}/`,
});

// Questions and answers at the end of a guide, as visible text plus FAQPage markup for search engines and AI assistants.
const faqSchema = (a) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: a.faqs.map(([q, ans]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: strip(ans) } })),
});
const faqBlock = (a) =>
  a.faqs?.length
    ? `<h2>Common questions</h2>\n${a.faqs.map(([q, ans]) => `<h3>${q}</h3>\n<p>${ans}</p>`).join("\n")}`
    : "";

export const articlePage = (a) => {
  const related = ARTICLES.filter((x) => x.slug !== a.slug && x.cat === a.cat)
    .concat(ARTICLES.filter((x) => x.slug !== a.slug && x.cat !== a.cat))
    .slice(0, 2);
  return page({
    path: `/insights/${a.slug}/`,
    active: "/insights/",
    title: a.seoTitle,
    crumb: a.title,
    description: a.description,
    schema: [articleSchema(a), ...(a.faqs?.length ? [faqSchema(a)] : [])],
    body: `
<section class="page-hero">
  <div class="wrap narrow">
    <p class="crumbs"><a href="/insights/">Insights</a> / ${a.cat}</p>
    <h1 class="article-h1">${a.title}</h1>
    <p class="lede">${a.excerpt}</p>
    <p class="article-meta">By the ${esc(SITE.name)} team · <time datetime="${articleDate(a)}">${dateLabel(articleDate(a))}</time> · ${a.mins} min read</p>
  </div>
</section>

<article class="section">
  <div class="wrap narrow prose">
    ${a.body}
    ${faqBlock(a)}
    <p class="legal-meta">This guide is general information only, not legal, tax or regulatory advice. Requirements change, so check them with the relevant authority or your importer before acting.</p>
  </div>
</article>

<section class="section section-grey">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Keep reading</p>
      <h2>More guides for Australian exporters.</h2>
    </div>
    <div class="articles articles-two">${related.map(articleCard).join("")}</div>
  </div>
</section>

${ctaBand()}`,
  });
};
