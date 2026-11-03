// Shared handler for every form: validates required fields, then posts JSON to the configured
// endpoint with a `source` tag (client, partner, japanese-buyer, contact) for CRM routing.
(() => {
  // Japanese strings approved 2 Nov 2026.
  const TEXT = {
    en: {
      check: (n) => `<strong>Please check ${n === 1 ? "one field" : n + " fields"}.</strong>`,
      sending: "Sending…",
      offline: "<strong>This form is not connected yet.</strong> The site owner needs to add a form endpoint before messages can be delivered.",
      failed: "<strong>Sorry, something went wrong.</strong> Please check your connection and try again.",
    },
    ja: {
      check: () => "<strong>入力内容をご確認ください。</strong>",
      sending: "送信中…",
      offline: "<strong>このフォームは現在準備中です。</strong>お手数ですが、メールにてお問い合わせください。",
      failed: "<strong>送信できませんでした。</strong>時間をおいて再度お試しください。",
    },
  };

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const urlOk = (v) => { try { return new URL(/^https?:\/\//i.test(v) ? v : "https://" + v).hostname.includes("."); } catch { return false; } };

  const valid = (el, form) => {
    const v = (el.value || "").trim();
    if (el.type === "radio") return !!form.querySelector(`input[name="${el.name}"]:checked`);
    if (el.type === "checkbox") return !el.required || el.checked;
    if (!v) return !el.required;
    if (el.type === "email") return emailOk(v);
    if (el.dataset.url) return urlOk(v);
    if (el.dataset.minDigits) return v.replace(/\D/g, "").length >= +el.dataset.minDigits;
    return true;
  };

  const mark = (el, form) => {
    const ok = valid(el, form);
    const f = el.closest(".field");
    if (f) f.classList.toggle("invalid", !ok);
    if (el.type === "radio") form.querySelectorAll(`input[name="${el.name}"]`).forEach((r) => r.setAttribute("aria-invalid", String(!ok)));
    else el.setAttribute("aria-invalid", String(!ok));
    return ok;
  };

  document.querySelectorAll("form.form").forEach((form) => {
    const t = TEXT[form.dataset.lang] || TEXT.en;
    const summary = form.querySelector(".form-summary");
    const submit = form.querySelector('button[type="submit"]');
    const controls = () => [...form.querySelectorAll("input, select, textarea")].filter((el) => el.name && el.name !== "_gotcha" && el.type !== "hidden");

    form.addEventListener("focusout", (e) => { if (e.target.name && e.target.type !== "radio" && (e.target.value || form.dataset.tried)) mark(e.target, form); });
    form.addEventListener("input", (e) => { if (e.target.closest(".field.invalid")) mark(e.target, form); });
    form.addEventListener("change", (e) => { if (e.target.type === "radio" || e.target.tagName === "SELECT") mark(e.target, form); });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      form.dataset.tried = "1";
      const bad = [...new Set(controls().filter((el) => !mark(el, form)).map((el) => el.closest(".field")))];
      if (bad.length) {
        summary.innerHTML = t.check(bad.length);
        summary.classList.add("show");
        bad[0].scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => bad[0].querySelector("input, select, textarea")?.focus({ preventScroll: true }), 350);
        return;
      }
      summary.classList.remove("show");

      const success = () => {
        form.hidden = true;
        const s = document.getElementById(form.id + "-success");
        s.hidden = false;
        s.focus();
        window.track?.("generate_lead", { source: form.dataset.source });
      };
      // Honeypot: bots fill hidden fields. Pretend success and stop.
      if (form.elements._gotcha?.value) return success();

      const data = { source: form.dataset.source, page: location.pathname, _subject: form.dataset.subject || "Website enquiry" };
      new FormData(form).forEach((v, k) => {
        if (k === "_gotcha") return;
        const key = k.replace(/^(m-|home-checklist-|checklist-form-)/, "");
        data[key] = data[key] ? `${data[key]}, ${v}` : v;
      });
      // International format drops the national trunk 0 (e.g. 0412 → +61 412); Italy keeps it.
      if (data.dialCode && data.phone) { data.phone = `${data.dialCode} ${data.dialCode === "+39" ? data.phone : data.phone.replace(/^\s*0+/, "")}`; delete data.dialCode; }
      data.marketing = data.marketing === "yes" ? "Yes" : "No";

      const endpoint = window.SITE_CONFIG?.endpoint;
      if (!endpoint) {
        summary.innerHTML = t.offline;
        summary.classList.add("show");
        summary.focus();
        console.info("Form payload (not sent, no endpoint configured):", data);
        return;
      }

      submit.disabled = true;
      const original = submit.innerHTML;
      submit.textContent = t.sending;
      try {
        const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error(String(res.status));
        success();
      } catch {
        summary.innerHTML = t.failed;
        summary.classList.add("show");
        summary.focus();
        submit.disabled = false;
        submit.innerHTML = original;
      }
    });
  });
})();

// Phone fields show only the dial code when closed; keep it in sync with the selected country.
const syncDial = (sel) => { const code = sel.closest(".dial")?.querySelector(".dial-code"); if (code) code.textContent = sel.value; };
document.addEventListener("change", (e) => { if (e.target.matches(".dial select")) syncDial(e.target); });
document.addEventListener("reset", (e) => setTimeout(() => e.target.querySelectorAll(".dial select").forEach(syncDial)));
