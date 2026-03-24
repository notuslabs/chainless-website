# Grid & Layout

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Source of Truth

- Identity spec: `identity/typography.md` (responsive behavior section)
- Implementation: Tailwind v4 utilities across all components

## Status: KEEP

The grid system uses Tailwind defaults with consistent patterns. No custom grid framework needed.

---

## Layout Structure

### Container

```
max-width: 1280px (max-w-7xl)
horizontal padding: 24px (px-6)
centering: mx-auto
```

Every section follows this pattern: `<section class="px-6"><div class="mx-auto max-w-7xl">`.

### Breakpoints

Using Tailwind v4 defaults:

| Name | Min Width | Columns | Gutter | Usage |
|------|----------:|:-------:|:------:|-------|
| Default (mobile) | 0px | 1 | 24px | Stack layout, full-width content |
| `sm` | 640px | 1-2 | 24px | Two-column where needed |
| `md` | 768px | 2-6 | 24px-32px | Card grids begin |
| `lg` | 1024px | 6-12 | 32px | Full grid available |
| `xl` | 1280px | 12 | 32px | Max container width reached |
| `2xl` | 1536px | 12 | 32px | Content stays at 1280px, extra margin |

---

## Grid Patterns (Extracted)

### Hero Layout

```
Full-width dark background
Container centered
Content: single column, centered text
Max text width: 65ch (max-w-prose) or max-w-4xl
```

### Feature Grid (2-3 columns)

```
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Gap: gap-6 or gap-8
Items: equal-width cards
```

### Split Layout (Text + Visual)

```
Grid: grid-cols-1 lg:grid-cols-2
Gap: gap-12 lg:gap-16
Alignment: items-center
```

### Bento Grid

```
Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Span variations: col-span-2 for wide cards
Gap: gap-6
```

### Stats Row

```
Grid: grid-cols-2 md:grid-cols-4
Gap: gap-8
Dividers: border-l on non-first items
```

---

## Content Width Constraints

| Element | Max Width | Tailwind |
|---------|:---------:|----------|
| Page container | 1280px | `max-w-7xl` |
| Prose/body text | 65ch | `max-w-prose` |
| Narrow content | 672px | `max-w-2xl` |
| Medium content | 896px | `max-w-4xl` |
| Wide content | 1152px | `max-w-6xl` |

---

## Responsive Strategy

Mobile-first with progressive enhancement:

1. **Mobile (< 640px)**: Single column, full-width cards, stacked navigation
2. **Tablet (640-1024px)**: 2-column grids appear, split layouts begin
3. **Desktop (1024-1280px)**: Full grid, 3-column layouts, generous whitespace
4. **Wide (> 1280px)**: Content maxes at 1280px, extra space becomes margin

---

## Accessibility

- No horizontal scroll at any breakpoint
- Content reflows at 320px width (WCAG SC 1.4.10)
- Touch targets maintain 44px minimum on mobile
- Reading order matches visual order (no CSS reordering that breaks tab sequence)
