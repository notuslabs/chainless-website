# Screen 08: Footer — Mobile Link Layout
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix the mobile footer link layout. When the 12-column grid stacks to single column on mobile, the three link columns (Produto, Recursos, Legal) have no visual separation and blend into an undifferentiated vertical list.

## Current Issues

- Grid: `md:grid-cols-12` — stacks to single column below `md:`
- Link columns have no horizontal or vertical separation on mobile
- Brand column takes 6/12 cols on desktop, full width on mobile — fine
- Footer padding: `px-4` instead of `px-6`
- Footer spacing: `pt-32` (128px) excessive on mobile

## Mobile Design (320px-640px)

### Link Column Layout

On mobile, arrange the three link columns in a 2-column grid instead of pure vertical stack:

```
┌──────────────────────────────────────┐
│ [Chainless Logo]                     │
│ Brand description text               │
│ Tagline                              │
├──────────────────┬───────────────────┤
│ PRODUTO          │ RECURSOS          │
│ ─────            │ ─────             │
│ Rendimento       │ Central de ajuda  │
│ Cartao           │ Taxas             │
│ Emprestimo       │                   │
│ Seguranca        │                   │
├──────────────────┴───────────────────┤
│ LEGAL                                │
│ ─────                                │
│ Privacidade  Termos  AML  Regulacao  │
├──────────────────────────────────────┤
│ © 2026 Chainless. CNPJ xxx.         │
└──────────────────────────────────────┘
```

Implementation:

```tsx
// Wrap link columns in a sub-grid on mobile
<div className="grid grid-cols-2 gap-8 sm:gap-10 md:contents">
  {/* Produto — left column */}
  <div className="md:col-span-2">...</div>
  {/* Recursos — right column */}
  <div className="md:col-span-2">...</div>
  {/* Legal — full width below */}
  <div className="col-span-2 md:col-span-2">...</div>
</div>
```

Produto and Recursos sit side by side. Legal spans full width below them. On `md:` breakpoint, `contents` dissolves the wrapper and they rejoin the 12-column grid.

### Legal Links on Mobile

The Legal column has 4 links. On mobile at full width, render them as a horizontal wrap with separators instead of a vertical list:

```
Privacidade · Termos · AML · Regulacao
```

Or keep them vertical if space allows — the full-width column gives plenty of room.

### Padding + Spacing

```
Footer:
  Before: className="relative bg-dark-500 px-4 pb-16 pt-32"
  After:  className="relative bg-dark-500 px-6 pb-12 pt-20 md:pb-16 md:pt-32"
```

### Inner Grid Gap

```
Grid:
  Before: className="grid gap-14 md:grid-cols-12"
  After:  className="grid gap-10 md:gap-14 md:grid-cols-12"
```

Reduce gap from 56px to 40px on mobile for tighter, more cohesive layout.

## States

| State | Behavior |
|-------|----------|
| Default | Brand column + 2-col link grid + legal row + copyright |
| Loading | Footer is at bottom — always rendered with content |
| Error | N/A — static content |
| Empty | N/A |

## Accessibility

- Footer uses `<footer>` element — correct landmark
- Link groups could benefit from `<nav aria-label="Footer navigation">` wrapper (enhancement)
- All links meet touch target requirements — `gap-3.5` (14px) between links + line-height gives >44px per item
- Category headings (`<h4>`) provide structure for screen readers
- Link text is descriptive — no "click here" patterns

## Image Resources

No imagery. Footer uses ChainlessLogo SVG component only.
