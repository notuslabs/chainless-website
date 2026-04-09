# Screen 03: ProofBar — Responsive Grid Fix
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix the 3-column grid that forces all stats into a single row at mobile viewports, causing text overflow and truncation at 320px. The "R$300M+" value is the primary overflow culprit.

## Current Issues

- Grid: `grid-cols-3` at all breakpoints — no responsive breakpoint
- At 320px with `px-4` (16px) padding: each column gets ~96px width
- "R$300M+" with prefix "R$" renders at ~120px minimum — overflows
- Labels like "volume transacionado" truncate
- Container uses `px-4` instead of brand-spec `px-6`

## Mobile Design (320px-640px)

### Grid Strategy: Stacked on Mobile

Switch to `grid-cols-1 sm:grid-cols-3`. Each stat occupies full width on mobile, stacked vertically with horizontal dividers instead of vertical ones.

```
Grid:
  Before: className="grid grid-cols-3 py-7 md:py-9"
  After:  className="grid grid-cols-1 sm:grid-cols-3 py-5 sm:py-7 md:py-9"
```

### Mobile Layout Per Stat

On mobile (< 640px), each stat renders as a horizontal row:

```
┌─────────────────────────────────────────┐
│  30.000+              Carteiras ativas  │
├─────────────────────────────────────────┤
│  R$300M+         Volume transacionado   │
├─────────────────────────────────────────┤
│  100%                Custódia própria   │
└─────────────────────────────────────────┘
```

- Stat value: left-aligned, `text-xl` (no size reduction needed — full width available)
- Label: right-aligned, `text-xs`
- Each row: `flex justify-between items-baseline`
- Dividers: horizontal `border-b border-warm-700/15` between items (replace vertical `border-l`)

### Alternative: Keep 3-col with Compression

If the stacked layout feels too tall, an alternative is to keep `grid-cols-3` but:
1. Reduce font size: `text-lg sm:text-xl md:text-3xl`
2. Abbreviate at smallest sizes via responsive text (e.g., hide "R$" prefix below 360px)
3. Use `text-center` with `break-words`

Recommendation: **Stacked layout** (option 1) — cleaner, no truncation risk, follows grid.md mobile-first spec.

### Padding Fix

```
Container:
  Before: className="mx-auto max-w-[var(--container-content)] px-4 md:px-8"
  After:  className="mx-auto max-w-[var(--container-content)] px-6 md:px-8"
```

### Border Logic

Conditional dividers based on breakpoint:

```tsx
// Mobile: horizontal divider below (except last)
// Desktop: vertical divider left (except first)
className={`
  flex flex-row justify-between items-baseline sm:flex-col sm:items-center sm:text-center
  ${i < proof.length - 1 ? "border-b border-warm-700/15 pb-4 sm:border-b-0 sm:pb-0" : ""}
  ${i > 0 ? "pt-4 sm:pt-0 sm:border-l sm:border-warm-700/15" : ""}
`}
```

## States

| State | Behavior |
|-------|----------|
| Default | Stacked stats on mobile, 3-col on sm+ |
| Loading | AnimatedCounter counts up on viewport entry |
| Error | N/A — static data, no API calls |
| Empty | N/A — hardcoded values |

## Accessibility

- `<dl>` structure preserved — `<dd>` for values, `<dt>` for labels
- No truncation at 320px — full text always visible
- `tabular-nums` for consistent number alignment
- `aria-label` on section already present
- Animated counters respect `prefers-reduced-motion` — show final value immediately

## Image Resources

No imagery — pure text/data component.
