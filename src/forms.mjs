// Form building blocks. Every form is handled by assets/forms.js, which validates the fields
// marked `required`, then posts JSON to SITE.formEndpoint with a `source` tag for CRM routing.
import { COUNTRIES, POPULAR } from "./countries.mjs";
import { esc, icon } from "./layout.mjs";

const req = (r, lang) => (r ? ` <span class="req" aria-hidden="true">*</span>` : lang === "ja" ? `<span class="opt">（任意）</span>` : ` <span class="opt">(optional)</span>`);

export const field = ({ id, label, type = "text", required = false, autocomplete = "", placeholder = "", hint = "", error = "", lang = "en", attrs = "" }) => `
<div class="field">
  <label for="${id}">${label}${req(required, lang)}</label>
  ${hint ? `<p class="hint" id="${id}-hint">${hint}</p>` : ""}
  ${type === "textarea"
    ? `<textarea id="${id}" name="${id}" rows="5"${required ? " required" : ""}${placeholder ? ` placeholder="${esc(placeholder)}"` : ""}${hint ? ` aria-describedby="${id}-hint"` : ""} ${attrs}></textarea>`
    : `<input id="${id}" name="${id}" type="${type}"${required ? " required" : ""}${autocomplete ? ` autocomplete="${autocomplete}"` : ""}${placeholder ? ` placeholder="${esc(placeholder)}"` : ""}${hint ? ` aria-describedby="${id}-hint"` : ""} ${attrs}>`}
  ${error ? `<p class="field-error">${error}</p>` : ""}
</div>`;

export const select = ({ id, label, options, required = false, placeholder = "Please select", error = "", lang = "en" }) => `
<div class="field">
  <label for="${id}">${label}${req(required, lang)}</label>
  <select id="${id}" name="${id}"${required ? " required" : ""}>
    <option value="">${placeholder}</option>
    ${options.map((o) => `<option>${esc(o)}</option>`).join("")}
  </select>
  ${error ? `<p class="field-error">${error}</p>` : ""}
</div>`;

export const radios = ({ name, label, options, required = false, error = "" }) => `
<fieldset class="field">
  <legend>${label}${req(required)}</legend>
  <div class="radio-row">${options.map((o) => `<label class="choice"><input type="radio" name="${name}" value="${esc(o)}"${required ? " required" : ""}><span>${o}</span></label>`).join("")}</div>
  ${error ? `<p class="field-error">${error}</p>` : ""}
</fieldset>`;

// Phone with an international dialling code, Australia preselected.
export const phoneField = ({ required = true, label = "Phone", error = "Please enter a phone number.", lang = "en", defaultIso = "AU" } = {}) => {
  const opt = (c) => `<option value="+${c.dial}" data-iso="${c.iso}"${c.iso === defaultIso ? " selected" : ""}>${esc(c.name)} (+${c.dial})</option>`;
  const popular = POPULAR.map((iso) => COUNTRIES.find((c) => c.iso === iso)).filter(Boolean);
  const initial = COUNTRIES.find((c) => c.iso === defaultIso);
  return `
<div class="field">
  <label for="phone">${label}${req(required, lang)}</label>
  <div class="phone-row">
    <div class="dial">
      <span class="dial-code" aria-hidden="true">+${initial ? initial.dial : ""}</span>
      <select id="dialCode" name="dialCode" aria-label="Country code">
        <optgroup label="Common">${popular.map(opt).join("")}</optgroup>
        <optgroup label="All countries">${COUNTRIES.map((c) => opt({ ...c, iso: c.iso + "-all" })).join("")}</optgroup>
      </select>
    </div>
    <input id="phone" name="phone" type="tel" autocomplete="tel-national"${required ? " required" : ""} data-min-digits="6">
  </div>
  <p class="field-error">${error}</p>
</div>`;
};

// Unticked marketing opt-in and privacy link, required on every form by the brief.
export const consent = (lang = "en") =>
  lang === "ja"
    ? `<div class="consent"><label class="check"><input type="checkbox" name="marketing" value="yes"><span>最新情報やお知らせを受け取る</span></label><p class="privacy-note">ご入力いただいた情報は、お問い合わせへの回答に使用します。詳しくは<a href="/privacy/">プライバシーポリシー（英語）</a>をご覧ください。</p></div>`
    : `<div class="consent"><label class="check"><input type="checkbox" name="marketing" value="yes"><span>Subscribe to our latest news and updates.</span></label><p class="privacy-note">We use your details to reply to your enquiry. See our <a href="/privacy/">Privacy Policy</a>.</p></div>`;

// Wraps fields in a form with honeypot, error summary, submit button and success message.
export const form = ({ id, source, fields, submit, success, lang = "en", subject = "" }) => `
<form class="form" id="${id}" data-source="${source}" data-lang="${lang}"${subject ? ` data-subject="${esc(subject)}"` : ""} novalidate>
  <div class="form-summary" role="alert" tabindex="-1"></div>
  ${fields}
  <div class="hp" aria-hidden="true"><label>Leave this empty<input name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
  ${consent(lang)}
  <button class="btn btn-primary btn-lg" type="submit">${submit} ${icon("arrow")}</button>
</form>
<div class="form-success" id="${id}-success" hidden tabindex="-1">
  <span class="success-ic">${icon("check")}</span>
  ${success}
</div>`;

export const PRODUCT_CATEGORIES = ["Food and produce", "Wine, spirits and craft beer", "Seafood, meat and dairy", "Health and beauty", "Fashion and lifestyle", "Other"];
