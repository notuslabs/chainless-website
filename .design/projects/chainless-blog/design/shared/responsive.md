# Responsive Behavior
> Phase: design | Project: chainless-blog | Generated: 2026-04-08

---

## Breakpoints

Using Tailwind v4 defaults:

| Name | Width | Key Changes |
|------|------:|-------------|
| Mobile | 0–639px | Single column, no TOC sidebar, collapsible TOC, stacked cards |
| Tablet | 640–1023px | 2-column card grid, optional collapsible TOC, wider content area |
| Desktop | 1024px+ | Article body + sticky TOC sidebar, 3-column card grid, max-w-7xl container |

---

## Article Page Responsive

### Mobile (<640px)

```
[Navbar]
[Article Hero - full width]
  Pillar tag
  H1 (clamp to ~36px)
  Author / Date / Reading time
[TL;DR Box - collapsible TOC trigger above]
[Collapsible TOC drawer - full width]
[Article Body - full width, 18px body]
  max-width: none (viewport constrains to ~40-55ch naturally)
[Soft CTA - full width Doppelrand card]
[FAQ Accordion - full width]
[Related Posts - single column, stacked cards]
[Global CTA - full width]
[Footer]
```

- No sidebar TOC — collapsible drawer below TL;DR
- Body text stays at 18px (never reduce on mobile)
- Images scale to full width
- Code blocks horizontal scroll
- Pull quotes: left border, no indent
- Tables: horizontal scroll wrapper

### Tablet (640–1023px)

```
[Navbar]
[Article Hero - max-w-4xl centered]
[TL;DR Box]
[Collapsible TOC (optional, at wider end)]
[Article Body - max-w-prose centered]
[Soft CTA]
[FAQ Accordion]
[Related Posts - 2-column grid]
[Global CTA]
[Footer]
```

- TOC: collapsible disclosure widget (same as mobile)
- At 900px+, consider showing TOC inline if space allows
- Related posts: 2-column grid, gap-6
- Body: `max-w-prose` (65ch) centered

### Desktop (1024px+)

```
[Navbar]
[Article Hero - max-w-4xl centered]
┌─────────────────────────────────┬──────────┐
│ [TL;DR Box]                     │ [TOC     │
│ [Article Body - max-w-prose]    │  Sidebar │
│ [Soft CTA]                      │  sticky  │
│ [FAQ Accordion]                 │  240px]  │
└─────────────────────────────────┴──────────┘
[Related Posts - 3-column grid]
[Global CTA]
[Footer]
```

- Content area: `max-w-prose` (65ch) left-aligned within container
- TOC sidebar: 240px fixed width, sticky at top: 96px
- Gap between content and TOC: 48px (gap-12)
- Related posts: 3-column grid, gap-8
- Full container: `max-w-7xl` (1280px)

---

## Blog Listing Responsive

### Mobile (<640px)

```
[Navbar]
[Page Hero - centered text]
[Pillar Filter - horizontal scroll tabs]
[Featured Article - full width card]
[Article Grid - single column]
[Pagination - centered]
[Footer]
```

- Pillar tabs: horizontal scroll with snap, right fade indicator
- Article cards: single column, full width
- Featured article: same width as regular cards, larger text

### Tablet (640–1023px)

```
[Navbar]
[Page Hero]
[Pillar Filter - centered tabs, all visible]
[Featured Article - full width, larger]
[Article Grid - 2-column, gap-6]
[Pagination]
[Footer]
```

### Desktop (1024px+)

```
[Navbar]
[Page Hero]
[Pillar Filter - centered tabs]
[Featured Article - spans 2 columns of the 3-col grid]
[Article Grid - 3-column, gap-8]
[Pagination]
[Footer]
```

- Featured article: `col-span-2` in the 3-column grid
- Article cards: equal width, 3 per row
- Max container: `max-w-7xl` (1280px)

---

## Content-Specific Responsive Rules

### Code Blocks
- Desktop: full width within prose container, syntax highlighting
- Mobile: horizontal scroll (`overflow-x: auto`), `font-size: 14px` (slightly smaller for readability)
- Always: border-radius `rounded-lg`, `bg-dark-600` background

### Tables
- Desktop: full width within prose container
- Mobile: horizontal scroll wrapper with `overflow-x: auto`
- Minimum column width: 120px
- Table header: sticky (if supported)

### Images
- Desktop: max-width within prose (65ch), centered
- Mobile: full bleed (negative margin to edge of viewport)
- Caption: always below, `text-warm-400`, `text-[13px]`

### Pull Quotes
- Desktop: left margin indent (`ml-8`), left border, `max-w-prose`
- Mobile: no indent, left border, full width within padding
