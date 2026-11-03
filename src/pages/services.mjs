import { page, icon, ctaBand, pageHero, faqList, BOOK, ORG_ID } from "../layout.mjs";
import { SERVICES, ALSO_AVAILABLE, TAILORED, FAQS, lowerList } from "../content.mjs";

const body = `
${pageHero({
  eyebrow: "Services",
  title: "Japan market entry and sales, end to end.",
  lede: "Start with an honest assessment, move to your first order, then keep growing with us as your Japan team.",
})}

<section class="section">
  <div class="wrap">
    <div class="services">
      ${SERVICES.map((s, i) => `<article class="service reveal">
        <p class="service-n">0${i + 1}</p>
        <span class="tile-ic">${icon(s.ic)}</span>
        <h2>${s.title}</h2>
        <p class="service-lede">${s.lede}</p>
        <p class="includes-label">Includes</p>
        <ul class="ticks">${s.includes.map((x) => `<li>${icon("check")}<span>${x}</span></li>`).join("")}</ul>
        <a class="btn btn-primary" href="${BOOK}">Book a free call ${icon("arrow")}</a>
      </article>`).join("")}
    </div>
    <p class="tailored reveal">${TAILORED}</p>
  </div>
</section>

<section class="section section-grey">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">Also available</p>
      <h2>Support for the moments that matter.</h2>
    </div>
    <ul class="also reveal">${ALSO_AVAILABLE.map((a) => `<li>${icon("check")}<span>${a}</span></li>`).join("")}</ul>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">FAQ</p>
      <h2>Common questions.</h2>
      <p class="section-link"><a href="/faq/">See all questions ${icon("arrow")}</a></p>
    </div>
    <div class="reveal">${faqList(FAQS)}</div>
  </div>
</section>

${ctaBand()}
`;

export default () =>
  page({
    path: "/services/",
    active: "/services/",
    title: "Japan market entry services for Australian brands",
    crumb: "Services",
    description: "Japan Readiness Check, Japan Market Entry and Japan Representation: bilingual services that help Australian producers win Japanese buyers and grow sales.",
    body,
    schema: [
      ...SERVICES.map((s) => ({
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.title,
        description: `${s.lede} Includes ${lowerList(s.includes)}.`,
        serviceType: "Japan market entry and sales support",
        provider: { "@id": ORG_ID },
        areaServed: [{ "@type": "Country", name: "Australia" }, { "@type": "Country", name: "Japan" }],
        audience: { "@type": "BusinessAudience", name: "Australian producers and brands" },
      })),
    ],
  });
