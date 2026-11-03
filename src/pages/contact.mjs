import { SITE } from "../config.mjs";
import { page, icon, pageHero, contactLines, faqList, esc } from "../layout.mjs";
import { form, field, select, radios, phoneField, PRODUCT_CATEGORIES } from "../forms.mjs";
import { FAQS } from "../content.mjs";

const bookingFields = `
<div class="grid-2">
  ${field({ id: "name", label: "Name", required: true, autocomplete: "name", error: "Please enter your name." })}
  ${field({ id: "company", label: "Company", required: true, autocomplete: "organization", error: "Please enter your company name." })}
  ${field({ id: "website", label: "Website", type: "url", autocomplete: "url", placeholder: "www.example.com.au", error: "Please enter a valid website address.", attrs: 'data-url="1"' })}
  ${field({ id: "role", label: "Role", required: true, autocomplete: "organization-title", error: "Please enter your role." })}
  ${field({ id: "email", label: "Email", type: "email", required: true, autocomplete: "email", error: "Please enter a valid email address." })}
  ${phoneField()}
  ${select({ id: "category", label: "Product category", options: PRODUCT_CATEGORIES, required: true, error: "Please choose a category." })}
  ${field({ id: "exportMarkets", label: "Current export markets", placeholder: "e.g. New Zealand, Singapore" })}
</div>
${radios({ name: "soldToJapan", label: "Have you sold to Japan before?", options: ["Yes", "No"], required: true, error: "Please choose yes or no." })}
${field({ id: "goals", label: "What would you like to achieve in Japan?", type: "textarea", required: true, error: "Please tell us a little about your goals." })}
${field({ id: "preferredTimes", label: "Preferred call times, Sydney time", placeholder: "e.g. Tuesday mornings" })}`;

const messageFields = `
<div class="grid-2">
  ${field({ id: "m-name", label: "Name", required: true, autocomplete: "name", error: "Please enter your name." })}
  ${field({ id: "m-company", label: "Company", required: true, autocomplete: "organization", error: "Please enter your company name." })}
  ${field({ id: "m-email", label: "Email", type: "email", required: true, autocomplete: "email", error: "Please enter a valid email address." })}
  ${field({ id: "m-phone", label: "Phone", type: "tel", autocomplete: "tel", error: "Please enter a valid phone number.", attrs: 'data-min-digits="6"' })}
</div>
${field({ id: "m-message", label: "Message", type: "textarea", required: true, error: "Please enter a message." })}`;

// With a scheduler link configured, embed it. Until then, a booking request form collects the same details.
const booking = SITE.bookingUrl
  ? `<iframe class="scheduler" src="${esc(SITE.bookingUrl)}" title="Book a free 20-minute call" loading="lazy"></iframe>`
  : form({
      id: "booking-form",
      source: "client",
      subject: "Free call request",
      fields: bookingFields,
      submit: "Request my free call",
      success: `<h3>Thank you. Your request is in.</h3><p>We will be in touch to confirm a time for your free 20-minute call.</p>`,
    });

const body = `
${pageHero({
  eyebrow: "Contact",
  title: "Book a free <span class=\"nowrap\">20-minute</span> call.",
  lede: "Tell us about your product and what you want to achieve in Japan. We will talk it through by video call and give you an honest first view.",
})}

<section class="section">
  <div class="wrap contact-layout">
    <div class="card form-card reveal">
      <h2 class="h3">Your free call</h2>
      <p class="form-intro">20 minutes by video, Sydney time.</p>
      ${booking}
    </div>
    <aside class="contact-aside reveal">
      <div class="card">
        <h2 class="h3">Talk to us directly</h2>
        ${contactLines()}
      </div>
      <div class="card card-navy">
        <p class="eyebrow eyebrow-light">Not ready for a call?</p>
        <p>Check your Japan fit in a couple of minutes.</p>
        <a class="btn btn-gold" href="/japan-fit/">Check your Japan fit</a>
      </div>
    </aside>
  </div>
</section>

<section class="section section-grey">
  <div class="wrap narrow">
    <div class="card form-card reveal" id="message">
      <h2 class="h3">Prefer to send a message?</h2>
      ${form({
        id: "contact-form",
        source: "contact",
        subject: "New website message",
        fields: messageFields,
        submit: "Send message",
        success: `<h3>Thank you.</h3><p>Your message has been sent. We will reply soon.</p>`,
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="reveal">
      <p class="eyebrow">FAQ</p>
      <h2>Before you get in touch.</h2>
      <p class="section-link"><a href="/faq/">See all questions ${icon("arrow")}</a></p>
    </div>
    <div class="reveal">${faqList(FAQS)}</div>
  </div>
</section>
`;

export default () =>
  page({
    path: "/contact/",
    active: "/contact/",
    title: "Contact and book a free call",
    description: "Book a free 20-minute call with Kakehashi to talk about exporting your product to Japan, or send us a message.",
    body,
    scripts: ["/assets/forms.js"],
  });
