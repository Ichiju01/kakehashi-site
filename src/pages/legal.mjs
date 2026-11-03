import { SITE } from "../config.mjs";
import { page, pageHero, esc } from "../layout.mjs";
import { DISCLAIMER } from "../content.mjs";

// Privacy Policy, Terms of Use and Disclaimer. Written for an Australian business under the
// Privacy Act 1988 (Cth) and the Australian Consumer Law. Owner: have these reviewed before launch.
const UPDATED = "2 November 2026";
const N = esc(SITE.name);
const mail = `<a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>`;

const legal = ({ path, title, description, sections, intro = "" }) =>
  page({
    path,
    title,
    description,
    body: `
${pageHero({ eyebrow: "Legal", title })}
<section class="section">
  <div class="wrap narrow legal">
    <p class="legal-meta">Last updated: ${UPDATED}</p>
    ${intro ? `<p class="legal-intro">${intro}</p>` : ""}
    ${sections.map(([h, html]) => `<h2>${h}</h2>\n${html}`).join("\n")}
  </div>
</section>`,
  });

export const privacy = () =>
  legal({
    path: "/privacy/",
    title: "Privacy Policy",
    description: `How ${SITE.name} collects, uses, stores and protects your personal information.`,
    intro: `${N} ("we", "us", "our") respects your privacy. This policy explains how we handle personal information in line with the Australian Privacy Principles in the <em>Privacy Act 1988</em> (Cth).`,
    sections: [
      ["Information we collect", `<p>We collect only the information we need to respond to you and provide our services. Depending on how you contact us, this may include:</p>
<ul>
<li>your name, company, role, email address and phone number;</li>
<li>your company website, product category and current export markets;</li>
<li>the details you include in a message or booking request, such as your goals for Japan and preferred call times;</li>
<li>whether you have agreed to receive marketing emails from us.</li>
</ul>
<p>The Japan fit quiz runs in your browser. Your answers are not sent to us unless you choose to contact us afterwards.</p>`],
      ["How we collect it", `<p>We collect personal information directly from you when you complete a form on this website, email us, book a call or speak with us. If you are a business adviser or industry body referring a client, we may receive that client's details from you, and you should make sure they are happy for you to share them.</p>
<p>If you choose to accept analytics cookies, we also collect information about how you use this website. See "Cookies and analytics" below.</p>`],
      ["How we use it", `<p>We use your personal information to:</p>
<ul>
<li>respond to your enquiry and arrange calls or meetings;</li>
<li>assess whether our services suit your business and prepare a proposal;</li>
<li>provide our services, including representing your business to Japanese buyers when you have engaged us to do so;</li>
<li>send you the information you asked for and, if you opted in, occasional emails about selling into Japan;</li>
<li>improve this website and our services;</li>
<li>meet our legal obligations.</li>
</ul>
<p>We do not sell your personal information.</p>`],
      ["Marketing emails", `<p>We send marketing emails only if you tick the box to receive them. Every marketing email includes a way to unsubscribe, and you can also ask us to stop at any time by emailing ${mail}.</p>`],
      ["Cookies and analytics", `<p>This website does not use analytics or advertising cookies unless you accept them. If you accept, we use Google Analytics to understand how visitors use the site, such as which pages are viewed. Google Analytics collects information such as your approximate location, device type and pages visited, and does not tell us who you are. You can withdraw consent by clearing cookies for this website in your browser.</p>`],
      ["Who we share it with", `<p>We share personal information only where needed to run our business and provide our services, including with:</p>
<ul>
<li>service providers who help us operate, such as our form processing, email, scheduling and analytics providers;</li>
<li>Japanese importers, distributors, retailers and other buyers, but only information about your business that you have agreed we can share as part of an engagement;</li>
<li>professional advisers, such as our accountants and lawyers;</li>
<li>government authorities, where the law requires it.</li>
</ul>`],
      ["Overseas disclosure", `<p>Some of our service providers store data outside Australia, including in the United States. When we represent your business in Japan, we share agreed information with buyers there. Where we disclose personal information overseas, we take reasonable steps to make sure it is handled in a way that is consistent with the Australian Privacy Principles.</p>`],
      ["Storage and security", `<p>We store personal information electronically with reputable providers and take reasonable steps to protect it from misuse, loss and unauthorised access. We keep it only for as long as we need it for the purposes above or as required by law, and then delete or de-identify it.</p>`],
      ["Access and correction", `<p>You can ask for a copy of the personal information we hold about you, or ask us to correct it, by emailing ${mail}. We will respond within a reasonable time, usually 30 days. If we cannot give you access, we will explain why.</p>`],
      ["Complaints", `<p>If you have a concern about how we have handled your personal information, please email ${mail} and we will respond within 30 days. If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" rel="noopener" target="_blank">oaic.gov.au</a>.</p>`],
      ["Changes to this policy", `<p>We may update this policy from time to time. The current version will always be on this page, with the date it was last updated.</p>`],
      ["Contact us", `<p>For any privacy question or request, email ${mail}.</p>`],
    ],
  });

export const terms = () =>
  legal({
    path: "/terms/",
    title: "Terms of Use",
    description: `The terms that apply when you use the ${SITE.name} website, including how its information may be used, intellectual property and liability.`,
    intro: `These terms apply to your use of this website, operated by ${N} ("we", "us", "our"). By using the website, you agree to them. If you do not agree, please do not use the website.`,
    sections: [
      ["Using this website", `<p>You may use this website for lawful purposes only. You must not:</p>
<ul>
<li>use the website in a way that breaks any law or infringes anyone's rights;</li>
<li>submit false, misleading or offensive information through our forms;</li>
<li>attempt to gain unauthorised access to the website or interfere with how it works;</li>
<li>copy or scrape the website's content in bulk without our written permission.</li>
</ul>`],
      ["Information on this website", `<p>${esc(DISCLAIMER(SITE.name))}</p>
<p>We take care to keep the information on this website accurate and current, but we do not guarantee that it is complete, accurate or up to date. Market conditions, regulations and requirements in Australia and Japan change, and you should get advice specific to your business before acting on any information here.</p>`],
      ["Our services", `<p>Nothing on this website is an offer to provide services. Any engagement with us is governed by a written proposal and agreement made directly with you, which will set out the scope, fees and terms of that engagement. Japanese buyers purchase directly from our clients. We do not buy, import or resell products.</p>
<p>We cannot guarantee orders, buyers or any particular result in Japan.</p>`],
      ["Intellectual property", `<p>The content of this website, including its text, design, logo and graphics, belongs to us or is used with permission. You may view and print pages for your own business use. You must not otherwise copy, reproduce or publish our content without our written permission. Photographs used under licence remain the property of their owners.</p>`],
      ["Links to other websites", `<p>This website may link to websites run by others, such as government agencies or service providers. We do not control those websites and are not responsible for their content, availability or privacy practices.</p>`],
      ["Limitation of liability", `<p>Nothing in these terms excludes, restricts or modifies any right or remedy you have under the Australian Consumer Law that cannot lawfully be excluded.</p>
<p>Subject to that, to the extent permitted by law, we are not liable for any loss or damage, including indirect or consequential loss, arising from your use of this website or your reliance on its content. Where our liability cannot be excluded but can be limited, it is limited to supplying the relevant information again.</p>`],
      ["Privacy", `<p>Our <a href="/privacy/">Privacy Policy</a> explains how we handle personal information you give us through this website.</p>`],
      ["Governing law", `<p>These terms are governed by the laws of New South Wales, Australia. You agree to the non-exclusive jurisdiction of the courts of New South Wales.</p>`],
      ["Changes to these terms", `<p>We may update these terms from time to time. The current version will always be on this page, with the date it was last updated. Your continued use of the website means you accept the updated terms.</p>`],
      ["Contact us", `<p>Questions about these terms can be sent to ${mail}.</p>`],
    ],
  });

export const disclaimer = () =>
  legal({
    path: "/disclaimer/",
    title: "Disclaimer",
    description: `Important information about the general nature of the content on the ${SITE.name} website.`,
    intro: esc(DISCLAIMER(SITE.name)),
    sections: [
      ["General information only", `<p>The content on this website is general information about selling Australian products in Japan. It does not take into account your business's circumstances and is not legal, tax, financial, customs, regulatory or grant advice. Please get advice from a qualified professional before making decisions.</p>`],
      ["No affiliation with government agencies", `<p>${N} is a private business. We are not affiliated with, endorsed by or acting on behalf of Austrade or any other Australian or Japanese government agency. References to government programs are for general information only. Eligibility for any program depends on your business and is decided by the agency that runs it.</p>`],
      ["Third-party information", `<p>Some information on this website comes from or refers to third parties, including government websites and industry sources. We do not control that information and cannot guarantee that it is accurate or current. Please check requirements with the relevant authority.</p>`],
      ["Results", `<p>Selling into a new market takes time, and results depend on many factors outside our control, including your product, pricing, supply capacity and buyer demand. We do not guarantee orders, buyers, sales volumes or any other outcome.</p>`],
    ],
  });
