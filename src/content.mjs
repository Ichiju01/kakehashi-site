// Site copy in one place, so it can be edited without touching page layouts.
// Text marked APPROVED comes from the owner's brief and is used as written.

// APPROVED: How it works steps
export const STEPS = [
  { title: "Check your fit", ic: "compass", text: "A free call to understand your product and goals. If it makes sense, we review demand, competitors, pricing and requirements in Japan and give you a clear recommendation." },
  { title: "Prepare for Japan", ic: "doc", text: "We build your Japan plan and prepare Japanese sales materials and product information, so buyers can say yes quickly." },
  { title: "Win buyers", ic: "handshake", text: "We shortlist and approach the right importers and distributors, arrange meetings in Japan, and support you through negotiation to your first order." },
  { title: "Grow in Japan", ic: "growth", text: "We stay on as your Japan team: managing the relationship, reorders, new accounts and regular visits." },
];

// APPROVED: Home "What we do" tiles
export const WHAT_WE_DO = [
  { title: "Assess your fit", ic: "compass", text: "Honest advice on whether and how your product can succeed in Japan." },
  { title: "Prepare in Japanese", ic: "language", text: "Sales materials, product information and a clear plan." },
  { title: "Win buyers", ic: "handshake", text: "We find, approach and meet the right Japanese buyers with you." },
  { title: "Represent you in Japan", ic: "users", text: "Ongoing account management, reorders and new opportunities." },
];

// APPROVED: Home "The challenge"
export const CHALLENGES = [
  "Japanese buyers value long-term relationships and detail.",
  "An introduction is not an order. The follow-up wins the deal.",
  "Most Australian exporters do not have a Japanese-speaking team.",
];

// APPROVED: Home "Why work with us"
export const WHY = [
  "Australian-born, with native Japanese backgrounds.",
  "Fluent in English and Japanese, and at home in both business cultures.",
  "Over a decade of enterprise sales across Asia-Pacific.",
  "On the ground in Japan regularly.",
  "We understand what Japanese buyers need before they say yes.",
];

// APPROVED: client criteria panel
export const CLIENT_FIT = "An Australian-made or Australian-grown product, the ability to supply consistently, and the patience to build a Japanese channel over 6 to 18 months.";

// APPROVED: Services
export const SERVICES = [
  {
    title: "Japan Readiness Check",
    ic: "compass",
    lede: "Find out whether Japan is right for your product before you invest.",
    includes: ["Demand and competitor review", "Pricing guidance", "Regulatory and labelling overview", "Written recommendation and debrief call"],
  },
  {
    title: "Japan Market Entry",
    ic: "route",
    lede: "From plan to first order.",
    includes: ["Japan go-to-market plan", "Japanese sales materials", "Buyer shortlist and outreach", "Sample coordination", "Meetings in Japan with us alongside you", "Negotiation support"],
  },
  {
    title: "Japan Representation",
    ic: "users",
    lede: "Your Japan team, without the overhead.",
    includes: ["Ongoing buyer relationship management", "Reorders and new accounts", "Regular visits to Japan", "Monthly updates"],
  },
];
export const ALSO_AVAILABLE = ["Japan trade show support", "Japan market visits", "Hosting Japanese buyers in Australia", "Japanese marketing materials", "Sample programs", "Japan business culture workshops for your team"];
export const TAILORED = "Every engagement is tailored to your product and goals. After a free call we will send you a clear written proposal.";

// Sectors. `intro` is APPROVED. `prepare` and `steps` approved 2 Nov 2026.
export const SECTORS = [
  {
    slug: "food-and-produce",
    seoTitle: "Export food to Japan from Australia",
    metaDesc: "Export food to Japan from Australia with a bilingual team. We find the right Japanese buyers, prepare you in Japanese and stay on through every reorder.",
    name: "Food and produce",
    ic: "leaf",
    keyword: "export food to Japan",
    intro: "Japanese consumers and chefs value quality, safety and provenance, and Australian produce has a strong reputation for all three.",
    prepare: [
      "Full ingredient, allergen and nutrition information, ready to translate",
      "Shelf-life, storage and transport details for each product",
      "The export documentation your category needs from the Australian side",
      "Packaging that has room for a Japanese label",
      "A clear picture of how much you can supply, and how consistently",
    ],
    steps: [
      "We look at where your products could sit in Japan, from retail to food service, and what buyers in that channel expect.",
      "Product sheets, specifications and your provenance story, prepared in Japanese.",
      "We approach importers who already handle your kind of product and arrange tastings and meetings.",
      "We manage reorders, new accounts and feedback from buyers and chefs.",
    ],
  },
  {
    slug: "wine-spirits-and-craft-beer",
    seoTitle: "Export wine, spirits and craft beer to Japan",
    metaDesc: "Export wine, spirits and craft beer to Japan. Bilingual support for Australian producers, from tastings and buyer meetings to allocations and reorders.",
    name: "Wine, spirits and craft beer",
    ic: "glass",
    keyword: "export wine to Japan",
    intro: "Japan has a sophisticated drinks culture and a growing appetite for premium and craft labels.",
    prepare: [
      "Technical sheets and tasting notes for each label",
      "The story behind your producer, region and range",
      "Reliable availability across vintages or batches",
      "Label artwork and information that can be adapted for Japan",
      "Pricing that still works once freight and importer margins are included",
    ],
    steps: [
      "We assess which labels in your range are the best fit and where they could be poured or sold.",
      "Tasting notes, producer stories and price lists, written in Japanese.",
      "We approach specialist importers and arrange tastings and meetings in Japan.",
      "We stay close to your importer to manage allocations, reorders and new accounts.",
    ],
  },
  {
    slug: "seafood-meat-and-dairy",
    seoTitle: "Export seafood, meat and dairy to Japan",
    metaDesc: "Export seafood, meat and dairy to Japan from Australia. Bilingual support to prepare for Japanese buyer requirements, win buyers and grow volume.",
    name: "Seafood, meat and dairy",
    ic: "fish",
    keyword: "export seafood, meat and dairy to Japan",
    intro: "Australia is a long-standing, trusted supplier of premium protein to Japan.",
    prepare: [
      "Detailed specifications: cuts, grades, sizes and packing formats",
      "Processing, handling and certification documentation",
      "Cold-chain arrangements from your door to the port",
      "Seasonal and year-round supply volumes",
      "The provenance and production story behind your product",
    ],
    steps: [
      "We look at how your specifications and supply match what Japanese buyers are asking for.",
      "Specification sheets and your product story, prepared in Japanese.",
      "We approach importers in your category, coordinate samples and arrange meetings.",
      "We manage the relationship, quality feedback and reorders.",
    ],
  },
  {
    slug: "health-and-beauty",
    seoTitle: "Export skincare and supplements to Japan",
    metaDesc: "Export skincare and supplements to Japan. Bilingual support for Australian health and beauty brands, from regulatory preparation to Japanese buyers.",
    name: "Health and beauty",
    ic: "drop",
    keyword: "export skincare and supplements to Japan",
    intro: "From supplements to skincare, Japanese buyers look for clean, effective products with a story.",
    prepare: [
      "Full ingredient lists and formulations",
      "Supporting documentation for the claims you make",
      "Test reports and certificates you already hold",
      "Packaging that can be adapted for Japanese labelling",
      "The story behind your brand and its ingredients",
    ],
    steps: [
      "We review your range, ingredients and claims, and the requirements that may apply in Japan.",
      "Product information, brand story and sales materials, prepared in Japanese.",
      "We approach importers and retailers that suit your brand and arrange meetings.",
      "We manage the account, new stockists and ongoing communication.",
    ],
  },
  {
    slug: "fashion-and-lifestyle",
    seoTitle: "Sell Australian fashion and lifestyle in Japan",
    metaDesc: "Sell Australian fashion and lifestyle products in Japan. Bilingual support to reach the right importers and select stores, and grow seasonal orders.",
    name: "Fashion and lifestyle",
    ic: "spark",
    keyword: "sell Australian fashion and lifestyle products in Japan",
    intro: "Distinctive Australian design and natural materials can find a loyal audience in Japan.",
    prepare: [
      "Line sheets, lookbooks and product photography",
      "Size, material and care information",
      "Production capacity and lead times",
      "A wholesale price structure",
      "The design story behind your brand",
    ],
    steps: [
      "We look at where your brand could sit in Japan and which buyers suit it.",
      "Line sheets, brand story and product information, prepared in Japanese.",
      "We approach importers and select stores, and arrange showroom and buyer meetings.",
      "We manage seasonal orders, new stockists and buyer relationships.",
    ],
  },
];

// APPROVED: FAQ (shown on Services and Contact)
export const FAQS = [
  ["Do you buy or import our products?", "No. Japanese buyers purchase directly from you. We find and win those buyers, manage the relationship and support you throughout."],
  ["Do I need a Japanese importer?", "In most categories, yes. Someone in Japan has to bring your product in and handle the import requirements. That might be a specialist importer, a distributor, or a retailer or restaurant group that imports directly. We find the right one for your product."],
  ["How do you charge?", "Every engagement is tailored to your product and goals. After a free call we will send a clear written proposal."],
  ["How long does it take to get into Japan?", "It varies by product, but building a Japanese channel usually takes 6 to 18 months. Japanese buyers value preparation and long-term commitment."],
  ["Do I need to speak Japanese?", "No. We handle communication in Japanese and keep you informed in English."],
  ["Do I need to travel to Japan?", "It helps to visit at key moments, and we will plan and join those trips with you. Much of the work we can do on your behalf."],
  ["Can government export grants help?", "Some export marketing activities may be eligible for government export grants. Eligibility depends on your business, so please check with your own adviser or Austrade. We are not affiliated with any government agency.", DISCLAIMER()], // third item: small note shown under the answer,
  ["Can you guarantee results?", "No one can honestly guarantee orders in a new market. What we can promise is a clear plan, Japanese-language expertise and persistent follow-up."],
];

// FAQ page (/faq/): the approved FAQS above, grouped, plus further questions (approved 2 Nov 2026).
const faq = (q) => FAQS.find(([x]) => x === q);
export const FAQ_GROUPS = [
  {
    id: "working-with-us",
    title: "Working with us",
    items: [
      faq("Do you buy or import our products?"),
      ["Who do you work with?", `Australian food, beverage, seafood, health, beauty and lifestyle producers. We look for ${CLIENT_FIT.charAt(0).toLowerCase() + CLIENT_FIT.slice(1)}`],
      ["What happens on the free call?", "It is a 20-minute video call, on Sydney time, to understand your product and goals. If Japan makes sense, we explain how we would approach it and what the next step looks like."],
      faq("Do I need to speak Japanese?"),
      faq("Do I need to travel to Japan?"),
      faq("How do you charge?"),
    ],
  },
  {
    id: "selling-in-japan",
    title: "Selling in Japan",
    items: [
      faq("Do I need a Japanese importer?"),
      ["What kinds of Japanese buyers do you approach?", "It depends on your product. We approach importers, distributors, retailers that import directly, restaurant groups and online sellers, whichever suits your category and goals."],
      ["Will Japanese buyers want samples?", "Usually, yes. Japanese buyers generally want to see, taste or test a product before they order. We coordinate samples as part of our Japan Market Entry service."],
      ["Do I need Japanese labelling?", "In most categories, products sold in Japan need Japanese labelling that meets local rules, and the requirements differ by category. We cover them in the Japan Readiness Check."],
      faq("How long does it take to get into Japan?"),
      ["What happens after the first order?", "We can stay on as your Japan team through Japan Representation: managing the buyer relationship, reorders and new accounts, with regular visits to Japan and monthly updates."],
    ],
  },
  {
    id: "funding-and-results",
    title: "Funding and results",
    items: [faq("Can government export grants help?"), faq("Can you guarantee results?")],
  },
];
export const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);

// Insights categories. Articles live in src/articles.mjs.
export const INSIGHT_CATEGORIES = ["Market entry", "Sectors", "Culture and etiquette"];

// APPROVED disclaimer: under the grants FAQ and on /disclaimer/
// Function declaration so it is hoisted: FAQS uses it above.
export function DISCLAIMER(name = "Kakehashi") {
  return `Information on this website is general in nature and is not legal, tax, financial or grant advice. ${name} is not affiliated with or endorsed by Austrade or any government agency.`;
}

// Japan Export Readiness Checklist (/checklist/). Shown on the page; no download or sign-up.
// General information only. Owner: check the regulatory lines against current requirements.
export const CHECKLIST = [
  {
    title: "Product and fit",
    ic: "leaf",
    items: [
      "You can explain in one sentence why a Japanese buyer would choose your product over what they already stock.",
      "You have checked whether similar products are sold in Japan, and at what price.",
      "Your product, pack sizes and packaging suit Japanese retail or food service, or you are open to adapting them.",
      "Your shelf life allows for freight, customs clearance and time on the shelf in Japan.",
      "You have checked whether your brand name is available to register as a trademark in Japan.",
    ],
  },
  {
    title: "Supply and capacity",
    ic: "growth",
    items: [
      "You can supply consistent quality and volume, all year or in clearly planned seasons.",
      "You know your minimum order quantities and lead times.",
      "You could fill a larger order if a Japanese buyer asked for one.",
      "You can send samples quickly when a buyer asks.",
    ],
  },
  {
    title: "Regulations and labelling",
    ic: "doc",
    items: [
      "You have checked that every ingredient and additive is permitted in Japan. Some that are allowed in Australia are not.",
      "For food, drinks, seafood, meat and dairy, you have checked Australian export requirements for Japan, including any export registration or certificates. The Department of Agriculture, Fisheries and Forestry's Manual of Importing Country Requirements (MICoR) is the place to start.",
      "You understand that products sold in Japan need Japanese labelling, usually prepared with your importer.",
      "For cosmetics and supplements, you understand that a licensed Japanese business must take responsibility for the product, and that some ingredients and claims are restricted.",
      "You can share ingredient lists, specifications and certificates in a form a Japanese buyer can review.",
    ],
  },
  {
    title: "Pricing",
    ic: "compass",
    items: [
      "You know your export price for Japan, and whether it is ex works or includes delivery to port.",
      "You have worked out how freight, duties and importer and distributor margins build up to a Japanese shelf price.",
      "Your margins still work at that shelf price.",
      "You have decided which currency and payment terms you will offer.",
    ],
  },
  {
    title: "Sales materials",
    ic: "language",
    items: [
      "You have a specification sheet for each product.",
      "You have high-quality product photos and a short brand story.",
      "You are prepared to have your key materials translated into Japanese.",
      "Your website or product catalogue is ready to share with buyers.",
    ],
  },
  {
    title: "Commitment",
    ic: "route",
    items: [
      "You can commit 6 to 18 months to building a Japanese channel.",
      "You, or someone senior in your business, can visit Japan at key moments such as buyer meetings or trade shows.",
      "You have a budget for samples, translation, travel and trade shows.",
      "You can answer buyer questions quickly and in detail.",
    ],
  },
];

// Lowercase list items for running text, keeping proper nouns (Japan, Australia) capitalised.
export const lowerList = (items) => items.map((i) => (/^(Japan|Australia)/.test(i) ? i : i[0].toLowerCase() + i.slice(1))).join(", ");
