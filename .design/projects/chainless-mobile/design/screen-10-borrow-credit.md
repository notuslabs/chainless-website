# Screen 10: BorrowCredit — Card Padding Fix
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix inner card padding on BorrowCredit section. Cards use `p-8` (32px) uniformly, which on a 320px viewport with section padding leaves only ~256px content width.

## Current Issues

- Card inner padding: `p-8` (32px) on all breakpoints
- At 320px: 320 - 48 (section px-6) - 12 (Doppelrand outer) - 64 (p-8 left+right) = ~196px content width
- Actually `px-4` (16px) section padding makes it slightly better: 320 - 32 - 12 - 64 = ~212px
- Either way, body text at 18px gets ~4-5 words per line — uncomfortably tight
- Section padding: `px-4` instead of `px-6`
- Section spacing: `py-32` excessive on mobile

## Mobile Design (320px-640px)

### Card Padding Reduction

```
Card inner:
  Before: className="... p-8 md:p-10"
  After:  className="... p-5 sm:p-8 md:p-10"
```

`p-5` (20px) on mobile: 320 - 48 (px-6) - 12 (Doppelrand) - 40 (p-5 left+right) = ~220px content width. That gives ~6-7 words per line at 18px — acceptable.

If the card doesn't use Doppelrand wrapper, content width is even better: 320 - 48 - 40 = ~232px.

### Section Spacing + Padding

```
Section:
  Before: className="... px-4 py-32 md:py-44"
  After:  className="... px-6 py-20 md:py-32 lg:py-44"
```

### Card Grid

Cards likely use `grid-cols-1 md:grid-cols-2` — they stack correctly on mobile. No grid changes needed.

### Loan Calculator / Interactive Elements

If BorrowCredit has a loan calculator or slider:
- Ensure slider track is at least 44px tall for touch
- Input fields: `min-h-[44px]`
- CTA button: already using brand button pattern (44px+ height)

## States

| State | Behavior |
|-------|----------|
| Default | Cards stacked vertically with reduced padding |
| Loading | Card structure visible, content fades in |
| Error | N/A — static content |
| Empty | N/A |

## Accessibility

- Card content readable at reduced padding — line lengths still above 40 characters
- Interactive elements (if any) meet 44px touch targets
- Heading hierarchy preserved within cards
- Cards are visual grouping only — no `role="group"` needed unless interactive

## Image Resources

No imagery changes. BorrowCredit is primarily text + data cards.
