# Research Index: Chainless Fees Page
> Phase: research | Project: chainless-system | Generated: 2026-04-07
---

## Scope

Research for a transparent fees/pricing page for Chainless, a Brazilian crypto-backed self-custody financial platform. The page displays 9 fee items (flat structure, no tiers) plus a gas fee explanation section.

## Research Files

| # | File | Focus | Lines |
|---|------|-------|-------|
| 1 | [ux-patterns.md](./ux-patterns.md) | Fee page layout patterns, visual hierarchy, trust-building, mobile-first, explanatory content patterns | ~112 |
| 2 | [competitor-ux.md](./competitor-ux.md) | Binance, Bitso, Nexo, Crypto.com, Fold, Mercado Bitcoin, Nubank, Foxbit fee page analysis | ~150 |
| 3 | [technical-research.md](./technical-research.md) | Semantic HTML (dl vs table), CSS styling, route structure, metadata, motion, performance | ~168 |
| 4 | [accessibility-patterns.md](./accessibility-patterns.md) | WCAG table a11y, heading hierarchy, color contrast, motion, screen reader flow | ~95 |
| 5 | [content-strategy.md](./content-strategy.md) | Voice application, microcopy, terminology, fee value formatting, gas fee prose, tone calibration | ~107 |
| 6 | [reference-specs.md](./reference-specs.md) | W3C/WAI specs, HTML5, codebase patterns, design tokens, fintech UX sources, competitor URLs | ~114 |
| 7 | [recommendations.md](./recommendations.md) | Adopt/adapt/avoid framework, implementation priority | ~90 |

## Key Decisions

- **Layout:** Follow existing content page pattern (bg-surface, max-w-780px, legal-prose, FadeUp)
- **Semantic element:** `<table>` over `<dl>` for universal screen reader support
- **Route:** `/taxas` (Portuguese slug, consistent with `/transparencia`, `/termos-de-uso`)
- **Component:** `fees-content.tsx` (matches `transparency-content.tsx` pattern)
- **No tiers, tabs, calculators, or interactive elements** -- flat fees presented in a single table
- **Gas fee:** Separate h2 section with explanatory prose about Account Abstraction

## Sources Consulted

- W3C WAI Tables Tutorial, WebAIM Data Tables Guide, MDN Table Accessibility
- Competitor fee pages: Binance, Bitso, Nexo, Crypto.com, Fold, Mercado Bitcoin, Nubank, Foxbit
- Fintech UX: Eleken (2026), JPN Fintech, Ponivesc/Coinbase case study
- Account Abstraction: 101 Blockchains, Reown, Ambire
- Internal: transparency-content.tsx, terms-content.tsx, globals.css (legal-prose styles)
