import { page, icon, pageHero } from "../layout.mjs";
import { INSIGHT_CATEGORIES } from "../content.mjs";
import { ARTICLES } from "../articles.mjs";
import { articleCard } from "./article.mjs";

const body = `
${pageHero({
  eyebrow: "Insights",
  title: "Practical guides to selling in Japan.",
  lede: "Notes on market entry, sectors, and Japanese business culture for Australian exporters.",
  actions: `<a class="btn btn-primary btn-lg" href="/checklist/">Open the checklist ${icon("arrow")}</a>`,
})}

<section class="section">
  <div class="wrap">
    <div class="filters" role="group" aria-label="Filter by category">
      <button type="button" class="filter on" data-cat="all" aria-pressed="true">All</button>
      ${INSIGHT_CATEGORIES.map((c) => `<button type="button" class="filter" data-cat="${c}" aria-pressed="false">${c}</button>`).join("")}
    </div>
    <div class="articles">
      ${ARTICLES.map(articleCard).join("")}
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="lead-magnet slim reveal">
      <div class="lead-copy">
        <p class="eyebrow eyebrow-light">Free checklist</p>
        <h2>The Japan Export Readiness Checklist.</h2>
      </div>
      <a class="btn btn-gold btn-lg" href="/checklist/">Open the checklist ${icon("arrow")}</a>
    </div>
  </div>
</section>
<div class="spacer"></div>
`;

export default () =>
  page({
    path: "/insights/",
    active: "/insights/",
    title: "Japan export guides for Australian producers",
    crumb: "Insights",
    description: "Guides for Australian exporters on Japan market entry, sector requirements and Japanese business etiquette.",
    body,
  });
