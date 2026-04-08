# UX Patterns: Fees & Pricing Transparency in Fintech/Crypto
> Phase: research | Project: chainless-system | Generated: 2026-04-07
---

## 1. Core Layout Patterns for Fee Pages

### Pattern A: Simple Two-Column List (Service / Fee)
The dominant pattern for straightforward fee schedules. A vertical list where each row pairs a service name with its cost. Used by: most neobanks, simple fintech apps.

- **Structure:** Single column of rows, each with left-aligned service label and right-aligned fee value.
- **Strengths:** Scannable, mobile-native, no cognitive overhead.
- **Weakness:** Cannot express conditional/tiered fees without supplementary text.
- **Best for:** Chainless's flat fee schedule (no tiers, no volume discounts).

### Pattern B: Tiered Table with Volume Bands
Used by exchanges with maker/taker models and volume-based discounts: Binance, Bitso, Coinbase Advanced.

- **Structure:** Multi-column table with tier rows (Regular, VIP 1-9). Columns include volume thresholds, maker %, taker %.
- **Binance implementation:** Dark theme, tabbed navigation for different markets (Spot, Futures, etc.), color-coded tier badges. Source: binance.com/en/fee/schedule
- **Bitso implementation:** Color-coded active row per currency pair, sidebar accordion navigation by market. Source: bitso.com/fees
- **Not applicable** to Chainless: no tiering, no maker/taker, no volume discounts.

### Pattern C: Category-Grouped Sections
Fee items organized under semantic headings. Each category is a distinct visual block. Used by Nexo, Crypto.com help center articles.

- **Structure:** H2 heading per category, then list/table of fees within each.
- **Nexo categories:** Trading, Deposits, Withdrawals, Borrowing, Card. Source: support.nexo.com/article/nexo-general-fee-schedule
- **Strengths:** Scales well with many fee types, easy to deep-link to a category.
- **Applicable to Chainless:** Could group into "Operacoes PIX", "Swap e Conversao", "Pools de Liquidez", "Transferencias", "Gas".

### Pattern D: Comparison/Tier Pricing
Side-by-side columns comparing free vs premium tiers. Used by Fold, subscription-based products.

- **Fold implementation:** Two-column comparison (Fold Member vs Fold+) with feature rows. Toggle for monthly/annual billing. Source: foldapp.com/pricing
- **Not applicable** to Chainless: single tier, no subscription model.

## 2. Visual Hierarchy Techniques

### Emphasizing "Free" Items
A critical UX pattern for trust-building: visually celebrating zero-fee items.

- **Technique 1 — Badge/pill:** "Sem taxa" in a green or muted pill beside the service name. Nexo uses green checkmarks.
- **Technique 2 — Strikethrough contrast:** Show the fee as "R$ 0,00" or simply "Gratis" in a distinct color.
- **Technique 3 — Grouping:** Put all free items together in a "Sem custo" section at the top, establishing goodwill before showing paid fees.
- **Recommendation for Chainless:** Use "Sem taxa" in warm-500 text or a subtle badge, consistent with the understated brand.

### Percentage vs Fixed Fee Differentiation
When a schedule mixes fixed (R$ 2,90) and percentage (0,7%) fees, visual consistency matters.

- **Pattern:** Right-align all fee values. Use consistent typography (tabular-nums). If both types coexist in the same column, no special treatment needed — the format itself differentiates.
- **Anti-pattern:** Mixing "free", "R$", and "%" in the same column without visual alignment.

## 3. Explanatory Content Patterns

### Inline Explanations
Fees that need context (e.g., gas fees) benefit from a brief explanation below or beside the fee row.

- **Pattern:** A `<small>` or secondary-text line below the fee item explaining the condition.
- **Example:** "0,5% na conversao de BRZ/USDC para criptos da Pool" — the condition IS the fee description.
- **For gas fees:** Dedicate a separate section with a clear heading and 2-3 sentences explaining Account Abstraction and where the user sees the estimate.

### Tooltip vs Inline
Coinbase has been criticized for tooltip-based fee explanations that obscure actual costs. Source: Andrei Ponivesc, "How Coinbase Uses Design Against Their Own Users" (Medium).

- **Anti-pattern:** Hiding fee details behind tooltips, modals, or expandable accordions.
- **Recommendation:** Inline everything. A fees page exists precisely to be transparent; collapsing information defeats the purpose.

## 4. Trust-Building Patterns

### "No Hidden Fees" Positioning
Fintech UX research consistently identifies hidden fees as the primary trust-destroyer. Source: Eleken, "Fintech design guide with patterns that build trust" (2026).

- **Pattern:** Lead with a clear statement — "Todas as taxas cobradas pela Chainless estao listadas abaixo."
- **Pattern:** Show the complete list, including explicitly listing items that are free.
- **Pattern:** Date-stamp the page ("Ultima atualizacao: ...") for credibility.

### Contextual Framing
Position fees as a transparent business model, not an apology.

- **Chainless opportunity:** The regulatory page (section 3.3) already states that revenue comes from interface fees. The fees page can reference this — fees fund the sovereign infrastructure, not hidden custodial costs.

## 5. Mobile-First Considerations

### Responsive Fee Tables
On mobile, traditional `<table>` elements often break. Two proven approaches:

- **Stacked cards:** Each fee becomes a card with label on top, value below. Works for < 15 items.
- **Description list (dl/dt/dd):** Each term-definition pair stacks naturally. Semantically correct for key-value data.
- **For Chainless (9 fee items + gas):** A `<dl>` or simple stacked list is ideal — no complex table needed.

### Sticky Category Headers
For longer pages, sticky section headers aid orientation during scroll. Not necessary for Chainless's compact fee list, but useful if the page grows.

## 6. Pattern Recommendation for Chainless

Given: 9 discrete fee items (no tiers, no volume discounts) + 1 explanatory gas section.

**Recommended pattern: Category-Grouped Description List**

1. Page header matching existing content page pattern (overline, serif h1, date, divider).
2. Brief introductory paragraph establishing transparency posture.
3. Fee items in a styled `<dl>` or semantic `<table>`, grouped by category:
   - PIX (Deposito, Saque)
   - Negociacao (Swap)
   - Renda (Investimento)
   - Pools de Liquidez (Criacao, Adicao, Desmontagem)
   - Transferencias (BRZ externo, Outras criptos externo)
4. Separate section for gas fees with explanatory prose.
5. Closing note reinforcing that the list is exhaustive.

This avoids over-engineering (no tabs, no tiers, no accordions) while maintaining the editorial, premium tone of existing content pages.
