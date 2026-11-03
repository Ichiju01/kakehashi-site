import { page, icon, pageHero, ctaBand } from "../layout.mjs";
import { CHECKLIST } from "../content.mjs";

const TOTAL = CHECKLIST.reduce((n, g) => n + g.items.length, 0);

// Short preview used on Home: the six areas, linking to the full checklist.
export const checklistPreview = () => `<ul class="checklist-preview">${CHECKLIST.map((g) => `<li>${icon("check")}<span>${g.title}</span></li>`).join("")}</ul>`;

const body = `
${pageHero({
  eyebrow: "Free checklist",
  title: "The Japan Export Readiness Checklist.",
  lede: `${TOTAL} checks across six areas. Tick off what you already have in place, and you will see where your business stands before you approach Japanese buyers.`,
  actions: `<button class="btn btn-ghost" type="button" data-print>${icon("doc")} Print or save as PDF</button>`,
})}

<section class="section">
  <div class="wrap narrow">
    <div class="checklist" data-checklist>
      ${CHECKLIST.map((g, gi) => `
      <fieldset class="check-group reveal">
        <legend><span class="tile-ic">${icon(g.ic)}</span><span>${gi + 1}. ${g.title}</span></legend>
        ${g.items.map((t, i) => `<label class="check-item"><input type="checkbox" name="c${gi}-${i}"><span>${t}</span></label>`).join("")}
      </fieldset>`).join("")}
    </div>

    <div class="check-result" aria-live="polite">
      <p class="check-score"><strong data-count>0</strong> of ${TOTAL} in place</p>
      <div class="check-bar"><span data-bar></span></div>
      <p class="check-msg" data-msg>Tick each item you already have in place.</p>
    </div>

    <p class="legal-meta">This checklist is general information only and does not cover every requirement for every product. Check current requirements with the relevant authority or a qualified adviser.</p>
  </div>
</section>

${ctaBand({ heading: "Not sure about some of these?", text: "Book a free 20-minute call and we will go through them with you." })}
`;

export default () =>
  page({
    path: "/checklist/",
    active: "/insights/",
    title: "Japan Export Readiness Checklist",
    crumb: "Checklist",
    description: "A free checklist for Australian producers planning to export to Japan: product fit, supply, regulations and labelling, pricing, sales materials and commitment.",
    body,
    scripts: ["/assets/checklist.js"],
  });
