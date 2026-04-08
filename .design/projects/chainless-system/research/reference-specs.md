# Reference Specs: Standards, Guidelines, and Source Material
> Phase: research | Project: chainless-system | Generated: 2026-04-07
---

## 1. WCAG 2.1 Table Accessibility

### W3C WAI Tables Tutorial
- URL: https://www.w3.org/WAI/tutorials/tables/
- Key requirements: `<caption>`, `<th scope>`, `<thead>/<tbody>`, simple structure preferred.
- Relevant success criteria: 1.3.1 (Info and Relationships), 1.3.2 (Meaningful Sequence).

### WebAIM Data Tables Guide
- URL: https://webaim.org/techniques/tables/data
- Guidance: All `<th>` should have scope. Caption provides table context for screen readers. Avoid layout tables for data.

### MDN HTML Table Accessibility
- URL: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility
- Covers: caption usage, scope attribute, screen reader navigation behavior.

### W3C H40 Technique (Description Lists)
- URL: https://www.w3.org/TR/WCAG20-TECHS/H40.html
- Guidance: `<dl>` elements appropriate for glossaries and key-value pairs. Satisfies WCAG 1.3.1.
- Note: Screen reader support for `<dl>` is less consistent than `<table>`. Table recommended for fee schedules.

## 2. HTML5 Specification

### `<dl>` with `<div>` wrapping
- HTML5 spec allows `<div>` elements as direct children of `<dl>` for grouping `<dt>/<dd>` pairs.
- Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl
- Enables flexbox/grid styling per term-definition group.

### `<table>` with `<caption>`
- The `<caption>` must be the first child of `<table>`.
- Source: HTML Living Standard, section 4.9.2.

## 3. Existing Codebase Patterns (Internal References)

### Content Page Template
- File: `landing/src/components/transparency-content.tsx`
- Pattern: `"use client"` + FadeUp + bg-surface + max-w-[780px] + legal-prose
- Reused across: transparency, terms, privacy, AML pages.

### Page Route Template
- File: `landing/src/app/transparencia/page.tsx`
- Pattern: Metadata export + Navbar + ContentComponent + Footer.

### Motion Components
- File: `landing/src/components/motion.tsx`
- FadeUp: opacity 0->1, y 40->0, blur 10px->0px, duration 0.9s, EASE_PREMIUM.
- Uses `whileInView` with `once: true` and `margin: "-80px"`.

### Design Tokens
- File: `landing/src/app/globals.css`
- Surface: `--color-surface: #FAFAF8`
- Text primary (light bg): `--color-text-primary-light: #1C1B19`
- Text secondary (light bg): `--color-text-secondary-light: #6B6862`
- Warm neutrals: `--color-warm-100` through `--color-warm-500`
- Overline size: `--text-overline: 0.5625rem`
- Small size: `--text-small: 0.9375rem`

### Legal Prose Styles
- File: `landing/src/app/globals.css` (lines 351-434)
- h2: 1.125rem, weight 600, text-primary-light, mb 0.75rem
- h3: 0.9375rem, weight 600, mt 1.5rem, mb 0.5rem
- Body: text-[0.9375rem], leading-[1.85], text-secondary-light
- Lists: custom counters (ol), dash bullets (ul)
- Note: No existing table styles in legal-prose — these need to be added.

## 4. Fintech UX Research Sources

### Eleken — Fintech Design Guide (2026)
- URL: https://www.eleken.co/blog-posts/modern-fintech-design-guide
- Key insight: "Nothing destroys trust faster than unexpected charges."
- Applies to: Transparency posture, explicit free-item listing.

### JPN Fintech — Pricing Page Design Patterns
- URL: https://www.jpnfintech.com/pricing-page-design-for-fintech-patterns-that-increase-conversions/
- Key insight: "In fintech, pricing pages are trust-building assets."
- Applies to: Page positioning as trust signal, not just information.

### Ponivesc — Coinbase UX Case Study (Medium)
- URL: https://poni.medium.com/how-coinbase-uses-design-against-their-own-users-a-ux-case-study-75b3160fc2
- Key insight: Tooltip-based fee hiding erodes user trust. Coinbase displays "fee: 0" while obscuring spread costs.
- Applies to: Anti-pattern — never hide fees behind interactions.

## 5. Competitor Fee Pages

| Platform | URL | Notes |
|----------|-----|-------|
| Binance | binance.com/en/fee/schedule | Tiered table, dark theme, tabs |
| Bitso | bitso.com/fees | Sidebar accordion, color-coded rows |
| Nexo | support.nexo.com/article/nexo-general-fee-schedule | Help center article, loyalty tiers |
| Crypto.com | help.crypto.com/en/articles/4894437-applicable-fees | Help center, formula-based |
| Fold | foldapp.com/pricing | Two-tier comparison, toggle billing |
| Mercado Bitcoin | mercadobitcoin.com.br/taxas-contas-limites | Progressive fees, zero-fee marketing |

## 6. Semantic HTML Decision (dl vs table)

### Snook.ca — Definition Lists vs Tables
- URL: https://snook.ca/archives/html_and_css/definition-lists-v-tables
- Conclusion: For key-value pairs, `<dl>` is semantically correct. For data with column relationships, `<table>` is preferred.

### W3C WAI IG Discussion (2014)
- URL: https://lists.w3.org/Archives/Public/w3c-wai-ig/2014JanMar/0049.html
- Conclusion: Data tables provide more reliable screen reader support than description lists. For fee schedules with consistent structure, table is the pragmatic choice.

## 7. Brand Reference

### Voice and Tone
- File: `.design/branding/chainless/verbal/voice-and-tone.md`
- Archetype: Magician 70% / Ruler 30%
- Voice attributes: Confident, Defiant, Warm, Clear
- Tone ratio: 60% premium / 40% rebel
