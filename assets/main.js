// Header shadow, mobile menu, scroll reveal, Insights filter, and consent-gated Google Analytics.
(() => {
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open;
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) { setMenu(false); toggle.focus(); }
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // Insights category filter
  const filters = document.querySelectorAll(".filter");
  filters.forEach((btn) => btn.addEventListener("click", () => {
    const cat = btn.dataset.cat;
    filters.forEach((b) => { b.classList.toggle("on", b === btn); b.setAttribute("aria-pressed", String(b === btn)); });
    document.querySelectorAll(".article-card").forEach((c) => { c.hidden = cat !== "all" && c.dataset.cat !== cat; });
  }));

  // Analytics: only when a GA4 ID is configured, and only after the visitor accepts.
  const ga = window.SITE_CONFIG?.ga4;
  window.track = (name, params = {}) => { if (window.gtag) window.gtag("event", name, params); };
  if (!ga) return;
  const KEY = "kk-consent";
  const store = { get: () => { try { return localStorage.getItem(KEY); } catch { return null; } }, set: (v) => { try { localStorage.setItem(KEY, v); } catch {} } };
  const load = () => {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${ga}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", ga);
  };
  const choice = store.get();
  if (choice === "yes") return load();
  if (choice === "no") return;
  const bar = document.createElement("div");
  bar.className = "cookie-bar";
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Cookie consent");
  bar.innerHTML = '<p>We use analytics cookies to understand how our site is used. See our <a href="/privacy/">Privacy Policy</a>.</p><div><button type="button" class="btn btn-ghost btn-sm" data-c="no">Decline</button><button type="button" class="btn btn-primary btn-sm" data-c="yes">Accept</button></div>';
  bar.addEventListener("click", (e) => {
    const c = e.target.closest("button")?.dataset.c;
    if (!c) return;
    store.set(c);
    bar.remove();
    if (c === "yes") load();
  });
  document.body.appendChild(bar);
})();
