import { SITE } from "../config.mjs";
import { page, icon, ctaBand, pageHero, esc } from "../layout.mjs";

// What working together looks like. Shown on Home and About.
// Each line restates approved copy (FAQ, Services).
const WORKING = [
  ["users", "One point of contact", "You deal with one person, in English, from first call to reorder."],
  ["language", "Japanese, handled", "Every buyer conversation, email and meeting is handled in Japanese."],
  ["pin", "Japan trips, planned with you", "We plan and join your visits to Japan at the moments that matter."],
  ["calendar", "Regular updates", "You always know where each buyer conversation stands."],
];

export const workingCard = () => `<div class="work-card">
  <p class="eyebrow eyebrow-light">Working together</p>
  <p class="work-title">What it looks like day to day.</p>
  <ul class="work-list">${WORKING.map(([ic, t, d]) => `<li><span class="tile-ic">${icon(ic)}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join("")}</ul>
</div>`;

const POINTS = [
  ["language", "A group of Australians with native Japanese backgrounds"],
  ["users", "Fluent in English and Japanese"],
  ["handshake", "Strong personal and professional ties to both countries"],
  ["growth", "Over a decade of enterprise sales across Asia-Pacific"],
  ["pin", "In Japan regularly"],
];

const body = `
${pageHero({
  eyebrow: "About",
  title: "Built to bridge Australian producers and Japanese buyers.",
})}

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">Who you work with</p>
      <h2>A team at home in Australia and Japan.</h2>
      <p>We understand how Australian producers work and what Japanese buyers expect, because we have lived and worked in both cultures.</p>
      <ul class="point-list">${POINTS.map(([ic, t]) => `<li><span class="tile-ic">${icon(ic)}</span><span>${t}</span></li>`).join("")}</ul>
    </div>
    <div class="reveal">${workingCard()}</div>
  </div>
</section>

<section class="section section-navy">
  <div class="wrap narrow center reveal">
    <p class="eyebrow eyebrow-light">Why we exist</p>
    <p class="statement">Australia makes products Japan wants. What is often missing is a team that can sell across both cultures and stay the course. That is what we do.</p>
    <p class="statement-jp" lang="ja" aria-hidden="true">架け橋</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <p class="eyebrow">How we work</p>
      <h2>On your side of the table.</h2>
    </div>
    <div class="tiles three">
      <article class="tile reveal"><span class="tile-ic">${icon("handshake")}</span><h3>The right buyers</h3><p>We look for the importers, distributors, retailers and restaurant groups that genuinely suit your product, and introduce you properly.</p></article>
      <article class="tile reveal"><span class="tile-ic">${icon("language")}</span><h3>Japanese, handled</h3><p>We communicate with buyers in Japanese and keep you informed in English, so you do not need your own Japanese-speaking team.</p></article>
      <article class="tile reveal"><span class="tile-ic">${icon("route")}</span><h3>We stay the course</h3><p>We go beyond research and introductions. We follow up, negotiate and stay on until the business is working.</p></article>
    </div>
  </div>
</section>

${ctaBand()}
`;

export default () =>
  page({
    path: "/about/",
    active: "/about/",
    title: "About us: a bilingual Australia and Japan team",
    crumb: "About",
    description: `${SITE.name} is a Sydney-based group of Australians with native Japanese backgrounds, helping Australian producers enter the Japanese market.`,
    body,
  });
