import { page, icon, ctaBand, pageHero, faqList, faqSchema } from "../layout.mjs";
import { FAQ_GROUPS, ALL_FAQS } from "../content.mjs";

const body = `
${pageHero({
  eyebrow: "FAQ",
  title: "Questions about selling into Japan.",
  lede: "How we work, how Japanese buyers buy, and what to expect along the way.",
  actions: FAQ_GROUPS.map((g) => `<a class="btn btn-ghost btn-sm" href="#${g.id}">${g.title}</a>`).join(""),
})}

${FAQ_GROUPS.map((g, i) => `
<section class="section${i % 2 ? " section-grey" : ""}" id="${g.id}">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">FAQ</p>
      <h2>${g.title}</h2>
    </div>
    <div class="reveal">${faqList(g.items)}</div>
  </div>
</section>`).join("")}

<section class="section-tight">
  <div class="wrap narrow center reveal">
    <p>Have a question that is not answered here? <a href="/contact/">Send us a message ${icon("arrow")}</a></p>
  </div>
</section>

${ctaBand()}
`;

export default () =>
  page({
    path: "/faq/",
    active: "/faq/",
    title: "Exporting to Japan from Australia: FAQ",
    crumb: "FAQ",
    description: "Answers for Australian producers selling into Japan: Japanese importers and buyers, samples, labelling, timelines, travel and how we work.",
    body,
    schema: [faqSchema(ALL_FAQS)],
  });
