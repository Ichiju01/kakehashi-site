import { page, icon, pageHero } from "../layout.mjs";
import { form, field } from "../forms.mjs";

const fields = `
<div class="grid-2">
  ${field({ id: "name", label: "Name", required: true, autocomplete: "name", error: "Please enter your name." })}
  ${field({ id: "organisation", label: "Organisation", required: true, autocomplete: "organization", error: "Please enter your organisation." })}
  ${field({ id: "role", label: "Role", required: true, autocomplete: "organization-title", error: "Please enter your role." })}
  ${field({ id: "email", label: "Email", type: "email", required: true, autocomplete: "email", error: "Please enter a valid email address." })}
</div>
${field({ id: "workTogether", label: "How you would like to work together", type: "textarea", required: true, error: "Please tell us a little about how you would like to work together." })}`;

const body = `
${pageHero({
  eyebrow: "Partners",
  title: "Working with advisers and industry bodies.",
  lede: "If you advise or represent Australian businesses that want to grow in Japan, we would love to work with you. We support your clients and members with hands-on Japan market entry and sales, and we can run Japan-focused workshops and webinars.",
})}

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">How we can help</p>
      <h2>Supporting the people who support exporters.</h2>
      <ul class="point-list">
        <li><span class="tile-ic">${icon("users")}</span><span>Business advisers and accountants</span></li>
        <li><span class="tile-ic">${icon("route")}</span><span>Industry associations and member bodies</span></li>
        <li><span class="tile-ic">${icon("calendar")}</span><span>Japan-focused workshops and webinars for your clients or members</span></li>
      </ul>
    </div>
    <div class="card form-card reveal" id="get-in-touch">
      <h2 class="h3">Get in touch</h2>
      ${form({
        id: "partner-form",
        source: "partner",
        subject: "New partner enquiry",
        fields,
        submit: "Get in touch",
        success: `<h3>Thank you.</h3><p>We have your details and will be in touch soon.</p>`,
      })}
    </div>
  </div>
</section>
`;

export default () =>
  page({
    path: "/partners/",
    active: "/partners/",
    title: "Partners: advisers and industry bodies",
    crumb: "Partners",
    description: "Kakehashi.au works with business advisers, accountants and industry bodies to support Australian businesses entering the Japanese market.",
    body,
    scripts: ["/assets/forms.js"],
  });
