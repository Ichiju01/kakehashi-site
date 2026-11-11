import { page, icon, ctaBand, pageHero, flow, BOOK } from "../layout.mjs";
import { STEPS, CLIENT_FIT } from "../content.mjs";

const body = `
${pageHero({
  eyebrow: "How it works",
  title: "From a first call to a working Japan channel.",
  lede: "Four steps, one bilingual team beside you the whole way. We handle the Japanese side and keep you informed in English.",
  actions: `<a class="btn btn-primary btn-lg" href="${BOOK}">Book a free call ${icon("arrow")}</a>`,
})}

<section class="section">
  <div class="wrap">
    <ol class="timeline">
      ${STEPS.map((s, i) => `<li class="reveal"><span class="tl-n">${i + 1}</span><div class="tl-body"><span class="tile-ic">${icon(s.ic)}</span><h2>${s.title}</h2><p>${s.text}</p></div></li>`).join("")}
    </ol>
  </div>
</section>

<section class="section section-grey">
  <div class="wrap split split-center">
    <div class="reveal">
      <p class="eyebrow">The model</p>
      <h2>You sell to Japanese buyers. We make it happen.</h2>
      <p class="lede">Japanese buyers purchase directly from you. We do not buy or resell products; we represent and support you.</p>
      <p>In most categories a Japanese importer brings your product in. We find the right one, or a retailer or distributor that imports directly.</p>
    </div>
    <div class="reveal">${flow()}</div>
  </div>
</section>

<section class="section">
  <div class="wrap narrow">
    <div class="fit-panel reveal">
      <p class="eyebrow">What we look for in a client</p>
      <p class="fit-text">${CLIENT_FIT}</p>
      <a class="btn btn-ghost" href="/japan-fit/">Check your Japan fit ${icon("arrow")}</a>
    </div>
  </div>
</section>

${ctaBand()}
`;

export default () =>
  page({
    path: "/how-it-works/",
    active: "/how-it-works/",
    title: "How to sell Australian products in Japan",
    crumb: "How it works",
    description: "How Kakehashi.au helps Australian producers enter the Japanese market: check your fit, prepare in Japanese, win Japanese buyers and grow in Japan.",
    body,
  });
