import { SITE } from "../config.mjs";
import { page, icon, mark, esc } from "../layout.mjs";
import { form, field, select, phoneField } from "../forms.mjs";

// Japanese page for importers and buyers. Japanese copy is approved by the owner or written for owner review (2 Nov 2026).
const CATEGORIES = ["食品", "ワイン・酒類", "水産品", "健康食品", "化粧品", "ライフスタイル商品"];

const fields = `
<div class="grid-2">
  ${field({ id: "company", label: "会社名", required: true, autocomplete: "organization", lang: "ja", error: "会社名をご入力ください。" })}
  ${field({ id: "name", label: "ご担当者名", required: true, autocomplete: "name", lang: "ja", error: "ご担当者名をご入力ください。" })}
  ${field({ id: "email", label: "メールアドレス", type: "email", required: true, autocomplete: "email", lang: "ja", error: "正しいメールアドレスをご入力ください。" })}
  ${phoneField({ label: "お電話番号", required: true, error: "お電話番号をご入力ください。", lang: "ja", defaultIso: "JP" })}
</div>
${select({ id: "category", label: "取扱カテゴリー", options: CATEGORIES, required: true, placeholder: "選択してください", lang: "ja", error: "カテゴリーをお選びください。" })}
${field({ id: "products", label: "ご関心のある商品", lang: "ja" })}
${field({ id: "message", label: "お問い合わせ内容", type: "textarea", required: true, lang: "ja", error: "お問い合わせ内容をご入力ください。" })}`;

const body = `
<section class="hero hero-ja">
  <div class="wrap narrow center">
    <span class="ja-mark">${mark(56)}</span>
    <p class="eyebrow">${esc(SITE.name)} · 日本の輸入者・バイヤー様へ</p>
    <h1 class="ja-h1">オーストラリアの優れた生産者と、日本のバイヤーをつなぎます。</h1>
    <a class="btn btn-primary btn-lg" href="#enquiry">お問い合わせ ${icon("arrow")}</a>
  </div>
</section>

<section class="section">
  <div class="wrap ja-grid">
    <article class="ja-block reveal">
      <p class="eyebrow">私たちについて</p>
      <p>シドニーを拠点に、オーストラリア企業の日本市場参入と販路開拓を支援しています。</p>
      <p>日豪両方の文化を理解するバイリンガルチームが、日本語でご相談を承ります。</p>
    </article>
    <article class="ja-block reveal">
      <p class="eyebrow">ご提供内容</p>
      <p>食品、ワイン・酒類、水産品、健康食品、化粧品、ライフスタイル商品など、オーストラリア産商品のご紹介、サンプル手配、商談や産地視察のアレンジ。</p>
    </article>
    <article class="ja-block reveal">
      <p class="eyebrow">お取引について</p>
      <p>お取引はバイヤー様と生産者様の直接取引となります。当社は窓口として双方をサポートします。</p>
    </article>
  </div>
</section>

<section class="section section-grey" id="enquiry">
  <div class="wrap narrow">
    <div class="card form-card reveal">
      <h2 class="h3">お問い合わせ</h2>
      ${form({
        id: "ja-form",
        source: "japanese-buyer",
        subject: "日本のバイヤー様からのお問い合わせ",
        fields,
        submit: "お問い合わせ",
        lang: "ja",
        success: `<h3>お問い合わせありがとうございます。</h3><p>内容を確認のうえ、担当者よりご連絡いたします。</p>`,
      })}
    </div>
  </div>
</section>
`;

export default () =>
  page({
    path: "/ja/",
    active: "/ja/",
    lang: "ja",
    title: "オーストラリア産食品・ワインの輸入をご検討のバイヤー様へ",
    crumb: "日本語",
    description: "オーストラリア産の食品・ワイン・商品の輸入や仕入れをご検討中の日本のバイヤー様へ。オーストラリアの優れた生産者をご紹介し、サンプル手配、商談や産地視察をアレンジします。",
    body,
    alternates: { en: "/", ja: "/ja/" },
    scripts: ["/assets/forms.js"],
  });
