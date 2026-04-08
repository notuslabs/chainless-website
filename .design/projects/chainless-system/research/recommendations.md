# Recommendations: Fees Page
> Phase: research | Project: chainless-system | Generated: 2026-04-07
---

## Adopt

### 1. Follow the existing content page pattern exactly
Route `/taxas`, component `fees-content.tsx`, same Navbar/Footer/FadeUp/legal-prose structure as transparency, terms, privacy, AML pages. No architectural novelty -- consistency across content pages signals organizational clarity. The page is static content (no API, no state, no CMS) -- hardcode everything, same as the other four content pages.

### 2. Use a semantic `<table>` for the fee schedule
Two columns: Service | Fee. `<caption>` for screen readers, `<th scope="col">` for headers, `<thead>`/`<tbody>` separation. Table is universally supported by assistive technology and naturally handles the mix of fixed fees, percentages, and "Sem taxa" values without responsive gymnastics at 780px max-width. The `<dl>` alternative was considered but rejected -- screen reader support for description lists is inconsistent, and the fee schedule's tabular nature maps more naturally to a data table.

### 3. Lead with free items prominently
Mercado Bitcoin, Nubank, and Foxbit all lead with zero-fee messaging. Chainless has three genuinely free services (PIX deposit, yield investment, external crypto transfers). Group or visually distinguish "Sem taxa" items to establish goodwill before presenting paid fees. Use `text-text-primary-light` for "Sem taxa" to give it visual weight, not a muted secondary color. Consider ordering the table so free items appear first within each logical group (e.g., PIX deposit before PIX withdrawal).

### 4. Inline fee conditions -- no footnotes, no asterisks
Several fees have conditions (e.g., "0,5% na conversao de BRZ/USDC para criptos da Pool"). Present these as secondary text within the table cell, directly below the fee value in smaller, muted type. Foxbit's footnote/asterisk pattern and Coinbase's tooltip pattern both erode trust -- inline everything. The condition IS the fee description; separating them creates an unnecessary "gotcha" moment.

### 5. Separate gas fee section with explanatory prose
Gas fees are conceptually different from platform fees (external cost vs. Chainless revenue). Dedicate an h2 section below the fee table with 2-3 paragraphs following the what/how/where structure:
- What: gas is a blockchain network cost, not a Chainless fee.
- How: Chainless uses Account Abstraction (EIP-4337 / EIP-7702 era) to absorb gas, reflecting it in the effective price.
- Where: the estimated gas cost is visible in the Transaction Details screen before confirmation.
This is an education opportunity that also reinforces Chainless's technical sophistication.

### 6. Add table styles to legal-prose in globals.css
The existing legal-prose class has no table styles. Add: border-collapsed table with full width, uppercase th headers in warm-400 color with 0.1em letter-spacing, td with 0.875rem vertical padding and warm-100 bottom border, right-aligned last column with font-variant-numeric: tabular-nums, and a warm-200 bottom border on the thead row. These mirror the existing warm-neutral aesthetic of the legal-prose lists and headings.

### 7. Date-stamp the page
"Ultima atualizacao: ..." below the h1, matching the transparency page pattern. This signals maintenance discipline and builds credibility -- users trust dated information more than undated information. Use the same `lastUpdated` const pattern from other content components.

## Adapt

### 8. Category grouping -- use sparingly
Nexo and Foxbit use category headings (Trading, Deposits, etc.) to organize fees. Chainless has only 9 items -- over-categorizing would create visual noise. Use a single table with logical ordering (PIX operations first, then swap, then yield, then pools, then transfers) rather than multiple tables with h3 headers. The ordering should follow a user's mental model of progressive complexity: simple in/out first, trading second, DeFi operations last. If the fee list grows beyond 15 items in the future, revisit category grouping.

### 9. Trust-framing intro paragraph -- subtle, not salesy
Foxbit's "Transparencia gera confianca" is on-the-nose. Chainless's defiant voice can be sharper: one sentence establishing that all fees are listed, one sentence noting the absence of hidden costs. No tagline, no hero card grid -- let the table itself be the trust signal. The intro should connect to the regulatory page's statement that Chainless revenue comes from interface fees (section 3.3), grounding the fees page in the broader transparency narrative.

### 10. Nubank-level spacing and polish
Brazilian users are conditioned to Nubank's generous whitespace and clean typography. The existing legal-prose already achieves this (0.9375rem, 1.85 line-height, space-y-10). Maintain these proportions in the fee table -- avoid cramming rows too tight. 0.875rem vertical padding per td matches the prose rhythm. The overall page should feel like an editorial document, not a spreadsheet.

## Avoid

### 11. No tabs, tiers, or volume-band tables
Binance and Bitso use these because their fee models demand it. Chainless has flat fees with no tiers. Adding complexity signals complexity in the product. A single, scannable table communicates "we have nothing to hide."

### 12. No help-center or FAQ-style presentation
Nexo and Crypto.com bury fees in support knowledge bases. This signals that fees are a customer support issue, not a brand value. Chainless should treat the fees page as a first-class marketing asset -- it is a trust differentiator, not documentation.

### 13. No promotional gimmicks
Mercado Bitcoin's "48-hour zero fee" campaigns train users to expect promotional pricing. Chainless's fees are structural (funding sovereign infrastructure), not negotiable. Present them with the same confidence used in the regulatory page.

### 14. No tooltips or progressive disclosure for fee values
Coinbase's spread-hiding pattern and hover-to-reveal approaches are well-documented trust violations (see Ponivesc case study). Every fee value must be visible on page load without interaction. The fees page exists to be transparent -- any interaction that hides data defeats the purpose.

### 15. No "fee calculator" or interactive elements
Nubank's fee calculator makes sense for variable merchant fees. Chainless's fees are fixed and simple enough to read in a table. Interactive tools add JS weight and cognitive overhead for no benefit.

## Implementation Priority

1. Add table styles to legal-prose in globals.css -- prerequisite for the component.
2. Create `fees-content.tsx` component with header, intro, table, gas section, closing note.
3. Create `/taxas` route page with metadata, Navbar, FeesContent, Footer.
4. Add "Taxas" link to footer legal links section.
5. Verify accessibility: table semantics, heading hierarchy, color contrast, reduced motion.
6. Test on mobile (375px) to confirm table does not overflow at 780px max-width with 2 columns.
