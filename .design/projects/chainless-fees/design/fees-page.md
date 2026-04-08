# Screen Design: Fees Page (`/taxas`)
> Phase: design | Project: chainless-fees | Generated: 2026-04-07
---

## Overview

Single content page displaying Chainless's fee schedule. Follows the existing content page pattern (transparency, terms, privacy, AML). Light background, legal-prose typography, max-w-780px container.

**Core insight:** Chainless charges for conversions. Operations themselves are free. The page should make this principle obvious without stating it as a marketing claim — let the table speak.

---

## Route & Metadata

- **Route:** `/taxas`
- **Component:** `fees-content.tsx`
- **Title:** `Chainless | Taxas`
- **Description:** `Todas as taxas cobradas pela Chainless. Sem taxas ocultas, sem surpresas.`

---

## Layout (ASCII Mockup)

```
┌─────────────────────────────────────────────────────────────┐
│  [Navbar]                                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  bg-surface · px-4 pb-32 pt-40                              │
│                                                              │
│       ┌─── max-w-[780px] mx-auto ───────────────────┐       │
│       │                                              │       │
│       │  TAXAS                          ← overline   │       │
│       │                                              │       │
│       │  Taxas e custos                 ← h1 serif   │       │
│       │                                              │       │
│       │  Ultima atualizacao: 7 de abril de 2026      │       │
│       │                                              │       │
│       │  ─────────────────────────────── ← divider   │       │
│       │                                              │       │
│       │  Todas as taxas cobradas pela Chainless      │       │
│       │  estao listadas abaixo. Nao ha taxas         │       │
│       │  ocultas nem custos adicionais.  ← intro p   │       │
│       │                                              │       │
│       │                                              │       │
│       │  ┌─ FEE TABLE ──────────────────────────┐    │       │
│       │  │                                       │    │       │
│       │  │  Operacao              Taxa            │    │       │
│       │  │  ═══════════════════════════════════   │    │       │
│       │  │                                       │    │       │
│       │  │  Deposito PIX          Sem taxa        │    │       │
│       │  │  ───────────────────────────────────   │    │       │
│       │  │  Saque PIX             R$ 2,90         │    │       │
│       │  │  ───────────────────────────────────   │    │       │
│       │  │  Swap                  0,7%            │    │       │
│       │  │  compra, venda e       sobre o valor   │    │       │
│       │  │  conversao de cripto   transacionado   │    │       │
│       │  │  ───────────────────────────────────   │    │       │
│       │  │  Investimento em       Sem taxa        │    │       │
│       │  │  renda                                 │    │       │
│       │  │  ───────────────────────────────────   │    │       │
│       │  │  Pools de Liquidez     0,5%            │    │       │
│       │  │  criacao, adicao       sobre conversao │    │       │
│       │  │  e desmontagem         BRZ/USDC        │    │       │
│       │  │  ───────────────────────────────────   │    │       │
│       │  │  Transferencia de      0,5%            │    │       │
│       │  │  BRZ para wallets      sobre o valor   │    │       │
│       │  │  externas              movimentado     │    │       │
│       │  │  ───────────────────────────────────   │    │       │
│       │  │  Transferencia de      Sem taxa        │    │       │
│       │  │  outras criptos para                   │    │       │
│       │  │  wallets externas                      │    │       │
│       │  │                                       │    │       │
│       │  └───────────────────────────────────────┘    │       │
│       │                                              │       │
│       │                                              │       │
│       │  2. Taxa de Gas              ← h2 section    │       │
│       │                                              │       │
│       │  A taxa de gas e um custo cobrado            │       │
│       │  pelas redes blockchain para processar       │       │
│       │  transacoes. Ela varia conforme a rede       │       │
│       │  e o nivel de congestionamento.              │       │
│       │                                              │       │
│       │  A Chainless, por meio de Abstracao de       │       │
│       │  Contas, permite que voce pague a taxa       │       │
│       │  de gas com o proprio token transacionado    │       │
│       │  — sem precisar manter tokens nativos        │       │
│       │  como ETH, SOL ou MATIC.                     │       │
│       │                                              │       │
│       │  Na pratica, a Chainless adianta a taxa      │       │
│       │  de gas e cobra uma margem no preco          │       │
│       │  efetivo da transacao. A estimativa e        │       │
│       │  exibida na tela de Detalhes da Transacao    │       │
│       │  antes da confirmacao.                       │       │
│       │                                              │       │
│       │                                              │       │
│       └──────────────────────────────────────────┘       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  [Footer]                                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Content Spec

### Header

| Element | Content | Style |
|---------|---------|-------|
| Overline | `TAXAS` | `text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary-light` |
| H1 | `Taxas e custos` | `font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary-light md:text-5xl` |
| Date | `Ultima atualizacao: 7 de abril de 2026` | `text-small text-text-secondary-light` |
| Divider | — | `h-px bg-warm-200/60` |

### Intro Paragraph

> Todas as taxas cobradas pela Chainless estao listadas abaixo. Nao ha taxas ocultas nem custos adicionais.

Style: part of `legal-prose`, same `text-[0.9375rem] leading-[1.85] text-text-secondary-light`.

### Fee Table

Semantic `<table>` with:
- `<caption class="sr-only">` — "Tabela de taxas da Chainless"
- `<thead>` — "Operacao" | "Taxa" (uppercase, warm-400, 0.1em tracking, text-xs)
- `<tbody>` — 7 rows
- Right-align fee column, `font-variant-numeric: tabular-nums`
- Row border: `border-b border-warm-200/40`
- Thead border: `border-b border-warm-200`
- "Sem taxa" in `text-text-primary-light` (not muted — give it weight)
- Conditions as secondary line: `text-xs text-text-secondary-light mt-0.5 block`

**Simplified fee rows:**

| Operacao | Taxa | Condition (secondary line) |
|----------|------|---------------------------|
| Deposito PIX | Sem taxa | — |
| Saque PIX | R$ 2,90 | — |
| Swap | 0,7% | compra, venda e conversao de cripto |
| Investimento em renda | Sem taxa | — |
| Pools de Liquidez | 0,5% | sobre o valor convertido de BRZ/USDC |
| Transferencia de BRZ para wallets externas | 0,5% | sobre o valor movimentado |
| Transferencia de outras criptos para wallets externas | Sem taxa | — |

### Gas Fee Section

`<section>` with `<h2>` — "Taxa de Gas"

Three paragraphs following what/how/where:

1. **What:** A taxa de gas e um custo cobrado pelas redes blockchain para processar e confirmar transacoes. Ela varia conforme a rede e o nivel de congestionamento no momento da operacao.

2. **How:** A Chainless, por meio de Abstracao de Contas, permite que voce pague a taxa de gas com o proprio token transacionado — sem precisar manter tokens nativos como ETH, SOL ou MATIC.

3. **Where:** Na pratica, a Chainless adianta a taxa de gas e cobra uma margem no preco efetivo da transacao para cobrir custos operacionais. A estimativa e exibida na tela de Detalhes da Transacao antes da confirmacao.

---

## CSS Additions (globals.css)

New table styles inside `.legal-prose`:

```css
.legal-prose table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.75rem;
}

.legal-prose thead th {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-warm-400);
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-warm-200);
  text-align: left;
}

.legal-prose thead th:last-child {
  text-align: right;
}

.legal-prose tbody td {
  padding: 0.875rem 0;
  border-bottom: 1px solid oklch(0.81 0.015 80.68 / 0.4);
  vertical-align: top;
  font-size: 0.9375rem;
}

.legal-prose tbody td:last-child {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.legal-prose tbody tr:last-child td {
  border-bottom: none;
}
```

---

## Interaction & Motion

- **FadeUp** on header block (same as all content pages)
- **FadeUp** on body block (single wrap, same as transparency)
- No other interactions — static content page

---

## Accessibility

- `<table>` with `<caption>` (sr-only), `<th scope="col">`, `<thead>`/`<tbody>`
- Heading hierarchy: h1 (page title) → h2 (Gas section)
- "Sem taxa" not communicated by color alone — uses same text weight as other values
- All text meets WCAG AA on `bg-surface` (verified in color-system.md)
- Reduced motion: FadeUp respects `prefers-reduced-motion`

---

## Footer Update

Add "Taxas" to the Legal section in `footer.tsx`:

```
Legal: [
  { label: "Taxas", href: "/taxas" },        ← new
  { label: "Privacidade", href: "/politica-de-privacidade" },
  ...
]
```

---

## Files to Create/Modify

| Action | File |
|--------|------|
| Create | `landing/src/components/fees-content.tsx` |
| Create | `landing/src/app/taxas/page.tsx` |
| Modify | `landing/src/app/globals.css` — add table styles to legal-prose |
| Modify | `landing/src/components/footer.tsx` — add "Taxas" link |
