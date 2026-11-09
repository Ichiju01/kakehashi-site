// Site-wide settings. Fill in the empty values and rebuild (node build.mjs): every page picks them up.
// Anything left empty shows on the site as a clearly marked "[owner to supply]" placeholder.
export const SITE = {
  name: "Kakehashi",
  // Shown under the logo and in page titles
  descriptor: "Japan Market Entry & Sales",
  // Small Japanese tagline (approved copy)
  jpTagline: "オーストラリアの良いものを、日本へ。",
  // Your live domain, no trailing slash. Used for canonical URLs, hreflang, sitemap.xml and social previews.
  url: "https://kakehashi.au",
  location: "Sydney",

  email: "support@kakehashi.au",

  // Form endpoint (e.g. Formspree). Every form posts here with a "source" tag:
  // client, partner, japanese-buyer, contact.
  // Leave empty until you have one: forms then show a setup notice instead of pretending to send.
  formEndpoint: "https://formspree.io/f/xzeekqbg",
  // Calendly (or similar) scheduling link for the free 20-minute call. When set, the Contact page embeds it.
  bookingUrl: "",
  // Google Analytics 4 measurement ID (G-XXXXXXX). When set, a cookie consent banner appears and GA loads only after consent.
  ga4Id: "G-4WSE2YY95K",
  // IndexNow key (https://www.indexnow.org). Published at /<key>.txt; GitHub Actions pings Bing and others with every page after each deploy.
  indexNowKey: "cd3ac1dda391d986a4ef99cd780938c7",
};

// Visible placeholder for anything the owner still has to supply.
export const ph = (label) => `<span class="ph">[${label}: owner to supply]</span>`;
