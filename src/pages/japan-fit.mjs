import { page, pageHero, BOOK } from "../layout.mjs";

// Each answer scores 0 to 2.
// Result bands: Strong fit >= 14, Promising >= 9, otherwise Not yet (maximum 18).
export const QUIZ = {
  questions: [
    { q: "What kind of product do you make?", a: [["Food and produce", 2], ["Wine, spirits or craft beer", 2], ["Seafood, meat or dairy", 2], ["Health or beauty", 2], ["Fashion or lifestyle", 2], ["Something else", 1]] },
    { q: "Where is your product made or grown?", a: [["Made or grown in Australia", 2], ["Made in Australia with some imported ingredients", 1], ["Made outside Australia", 0]] },
    { q: "Do you export today?", a: [["Yes, to several markets", 2], ["Yes, to one market", 2], ["Not yet", 1]] },
    { q: "Have you sold to Japan before?", a: [["Yes, and we want to grow", 2], ["We have had interest, but no orders", 2], ["No", 1]] },
    { q: "Could you supply consistent volumes to a new market?", a: [["Yes, comfortably", 2], ["Yes, with some planning", 1], ["Not at the moment", 0]] },
    { q: "How long does your product keep in normal storage?", a: [["12 months or more, or it does not expire", 2], ["3 to 12 months", 1], ["Under 3 months, or it must be kept chilled", 1]] },
    { q: "How would you describe your price position?", a: [["Premium", 2], ["Mid-range", 1], ["Value or high volume", 1]] },
    { q: "When would you like to be selling in Japan?", a: [["Within 6 months", 1], ["In 6 to 18 months", 2], ["No fixed timeline yet", 1]] },
    { q: "Can you commit time to building a Japanese channel over 6 to 18 months?", a: [["Yes", 2], ["Possibly", 1], ["Not right now", 0]] },
  ],
  results: [
    { min: 14, label: "Strong fit", text: "Your product and your business look well placed for Japan. You have the supply, the shelf life and the commitment that Japanese buyers look for. The next step is to confirm demand and pricing for your category and start shortlisting the right buyers. Book a free call and we will give you an honest view of where to begin." },
    { min: 9, label: "Promising", text: 'There is real potential here, with a few things to work through first. These are often supply planning, shelf life, pricing or timing. None of them rule Japan out, but Japanese buyers will ask about each one. Go through the <a href="/checklist/">Japan Export Readiness Checklist</a>, or book a free call and we will help you work out what to fix first.' },
    { min: 0, label: "Not yet", text: 'Japan may not be the right next step just yet. Buyers there expect consistent supply and a long-term commitment, and it is worth having those in place before you approach them. The <a href="/checklist/">Japan Export Readiness Checklist</a> shows what to work on. If your situation changes, or you would like a second opinion, we are happy to talk.' },
  ],
};

const body = `
${pageHero({
  eyebrow: "Japan fit check",
  title: "Is your product ready for Japan?",
  lede: "Nine quick questions on your product, supply and plans. You will get an honest first read in about two minutes.",
})}

<section class="section">
  <div class="wrap narrow">
    <div class="card quiz" id="quiz" data-book="${BOOK}">
      <div class="quiz-progress" aria-hidden="true"><span></span></div>
      <p class="quiz-count" aria-live="polite"></p>
      <div class="quiz-stage"></div>
      <noscript><p>The fit check needs JavaScript. You can <a href="${BOOK}">book a free call</a> instead.</p></noscript>
    </div>
  </div>
</section>
<script type="application/json" id="quiz-data">${JSON.stringify(QUIZ)}</script>
`;

export default () =>
  page({
    path: "/japan-fit/",
    active: "/sectors/",
    title: "Check your Japan fit",
    description: "A short quiz for Australian producers: find out how ready your product is to sell in Japan, then book a free call.",
    body,
    scripts: ["/assets/quiz.js"],
  });
