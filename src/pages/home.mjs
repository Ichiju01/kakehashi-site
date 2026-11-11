import { SITE } from "../config.mjs";
import { page, icon, ctaBand, flow, photo, stepsList, esc, BOOK } from "../layout.mjs";
import { CHALLENGES, WHAT_WE_DO, STEPS, SECTORS, WHY } from "../content.mjs";
import { checklistPreview } from "./checklist.mjs";
import { workingCard } from "./about.mjs";

const body = `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="hero-jp" lang="ja">${esc(SITE.jpTagline)}</p>
      <h1>Turn Japanese interest into Japanese orders.</h1>
      <p class="lede">Bilingual Japan market entry and sales support for Australian producers. We find the right Japanese buyers, handle the relationship in Japanese, and stay on as your Japan team.</p>
      <div class="actions">
        <a class="btn btn-primary btn-lg" href="${BOOK}">Book a free call ${icon("arrow")}</a>
        <a class="btn btn-ghost btn-lg" href="/how-it-works/">See how it works</a>
      </div>
    </div>
    <div class="hero-flow">
      <p class="flow-title">How your product reaches Japan</p>
      ${flow()}
      <p class="flow-foot">We find the right buyers, handle everything in Japanese and stay on as your Japan team.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">The challenge</p>
      <h2>Japan rewards the exporters who stay the course.</h2>
    </div>
    <ul class="challenge-list">
      ${CHALLENGES.map((c, i) => `<li class="reveal"><span class="num">${i + 1}</span><p>${c}</p></li>`).join("")}
    </ul>
  </div>
</section>

<section class="section section-grey">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">What we do</p>
      <h2>Your Japan team, from first conversation to reorder.</h2>
    </div>
    <div class="tiles four">
      ${WHAT_WE_DO.map((t) => `<article class="tile reveal"><span class="tile-ic">${icon(t.ic)}</span><h3>${t.title}</h3><p>${t.text}</p></article>`).join("")}
    </div>
    <p class="section-link reveal"><a href="/services/">See our services ${icon("arrow")}</a></p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">How it works</p>
      <h2>Four steps to a working Japan channel.</h2>
    </div>
    ${stepsList(STEPS)}
    <p class="section-link reveal"><a href="/how-it-works/">How it works in detail ${icon("arrow")}</a></p>
  </div>
</section>

<section class="section section-grey">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">Sectors</p>
      <h2>Australian products Japanese buyers are looking for.</h2>
    </div>
    <div class="tiles sectors">
      ${SECTORS.map((s) => `<a class="tile tile-link reveal" href="/sectors/${s.slug}/"><span class="tile-ic">${icon(s.ic)}</span><h3>${s.name}</h3><p>${s.intro}</p><span class="more">Explore ${icon("arrow")}</span></a>`).join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split split-center">
    <div class="reveal">
      <p class="eyebrow">Why work with us</p>
      <h2>Sell across both cultures, with a team that lives in both.</h2>
      <ul class="why-list">${WHY.map((w) => `<li>${icon("check")}<span>${w}</span></li>`).join("")}</ul>
    </div>
    <div class="reveal">${workingCard()}</div>
  </div>
</section>

<section class="section-tight">
  <div class="wrap provenance">
    ${photo("", { img: "/assets/img/producer-vineyard", alt: "A grower's hand holding a ripe bunch of grapes on the vine", ratio: "3/2" })}
    ${photo("", { img: "/assets/img/japan-sushi-counter", alt: "Sushi chefs at work behind the counter of a restaurant in Osaka", ratio: "3/2" })}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="lead-magnet reveal">
      <div class="lead-copy">
        <span class="tile-ic">${icon("check")}</span>
        <p class="eyebrow eyebrow-light">Free checklist</p>
        <h2>The Japan Export Readiness Checklist.</h2>
        <p>Check where your business stands before you approach Japanese buyers. No sign-up needed.</p>
      </div>
      <div class="lead-form">
        <p class="includes-label">Six areas to check</p>
        ${checklistPreview()}
        <a class="btn btn-primary" href="/checklist/">Open the checklist ${icon("arrow")}</a>
      </div>
    </div>
  </div>
</section>

${ctaBand()}
`;

export default () =>
  page({
    path: "/",
    active: "/",
    title: "Export to Japan from Australia",
    description: "Japan market entry and sales for Australian producers. A bilingual team that finds the right Japanese buyers, handles the relationship in Japanese and stays on.",
    body,
    alternates: { en: "/", ja: "/ja/" },
    scripts: ["/assets/forms.js"],
  });
