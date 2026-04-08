# Technical Research: Fees Page Implementation
> Phase: research | Project: chainless-system | Generated: 2026-04-07
---

## 1. Established Codebase Pattern

The existing content pages (transparency, terms, privacy, AML) follow an identical architecture:

**Page component** (`app/taxas/page.tsx`):
```
- Metadata export (title, description)
- Navbar + ContentComponent + Footer
- No data fetching, no dynamic routes
```

**Content component** (`components/fees-content.tsx`):
```
- "use client" (for FadeUp motion)
- bg-surface, px-4, pb-32, pt-40
- max-w-[780px] centered container
- FadeUp wrapping header block and body block
- legal-prose class for body typography
```

This pattern is proven across 4 existing pages. The fees page should follow it exactly.

## 2. Semantic HTML for Fee Data

### Option A: Description List (`<dl>/<dt>/<dd>`)
The fee schedule is fundamentally key-value data: service name -> fee amount.

```html
<dl>
  <div>
    <dt>Deposito PIX</dt>
    <dd>Sem taxa</dd>
  </div>
  <div>
    <dt>Saque PIX</dt>
    <dd>R$ 2,90</dd>
  </div>
</dl>
```

**Pros:**
- Semantically correct for key-value pairs (W3C H40 technique).
- Wrapping `<div>` elements inside `<dl>` is valid HTML5 and enables flexbox/grid styling.
- Natural stacking on mobile — no responsive table gymnastics.
- Screen readers announce term/definition relationship.

**Cons:**
- Some older screen readers have inconsistent `<dl>` support.
- Not ideal if a third column (e.g., "conditions") is needed.

### Option B: Table (`<table>`)
```html
<table>
  <caption>Taxas cobradas pela Chainless</caption>
  <thead>
    <tr><th scope="col">Servico</th><th scope="col">Taxa</th></tr>
  </thead>
  <tbody>
    <tr><td>Deposito PIX</td><td>Sem taxa</td></tr>
  </tbody>
</table>
```

**Pros:**
- Universal screen reader support with `<caption>`, `<th scope>`, and `<thead>/<tbody>`.
- Consistent alignment across all rows.
- Extensible to 3+ columns if needed later.

**Cons:**
- Needs responsive handling on small screens (though with only 2 columns, standard table works fine).
- Slightly more markup for what is essentially key-value data.

### Recommendation: Table

For a fee schedule, `<table>` is the safer choice because:
1. Screen reader support is universally reliable.
2. The `<caption>` element provides a clear table summary.
3. Two columns (Service | Fee) align naturally even on mobile at 780px max-width.
4. Some fee items have conditional text ("0,5% na conversao de BRZ/USDC para criptos da Pool") that reads better as a third implicit column or inline note within the cell.

## 3. Styling the Fee Table

Using existing design tokens and the `legal-prose` class context:

```css
/* Fee table — extends legal-prose context */
.legal-prose table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
}

.legal-prose th {
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-warm-400);
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--color-warm-200);
}

.legal-prose td {
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--color-warm-100);
  vertical-align: top;
}

.legal-prose td:last-child {
  text-align: right;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
```

This uses existing warm-neutral tokens and matches the understated legal-prose aesthetic.

## 4. Page Route

Following existing naming convention (Portuguese slugs):
- Route: `/taxas`
- File: `app/taxas/page.tsx`
- Component: `components/fees-content.tsx`

Consistent with `/transparencia`, `/termos-de-uso`, `/politica-de-privacidade`, `/politica-aml`.

## 5. SEO Metadata

```ts
export const metadata: Metadata = {
  title: "Chainless | Taxas",
  description:
    "Todas as taxas cobradas pela Chainless. Depositos PIX, saques, swaps, pools de liquidez e transferencias. Sem taxas ocultas.",
};
```

## 6. Motion/Animation

Use the same FadeUp pattern as other content pages:
- Header block in one FadeUp.
- Body (fee table + gas section) in a second FadeUp.
- No StaggerContainer needed — this is a short, single-read page.

## 7. Footer Link

Add "Taxas" to the footer legal links section alongside Transparencia, Termos de Uso, Privacidade, Politica AML.

## 8. Static vs Dynamic

The fee data is static content that changes rarely. No need for:
- API calls or data fetching
- Client-side state management
- CMS integration
- Dynamic rendering

A simple static page with hardcoded content matches the pattern of all other content pages and is the correct approach.

## 9. Performance Considerations

- Page is entirely static HTML + CSS with minimal JS (FadeUp animation).
- No images, no heavy dependencies.
- Expected Lighthouse score: 95+ across all metrics.
- FadeUp uses `whileInView` with `once: true` — animation fires once and stops.
