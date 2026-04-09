# Screen 09: YieldSection — Image Bleed + Padding Fix
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix image bleed on the PROTECT card and review touch targets on pool ticker rows at mobile viewports.

## Current Issues

- PROTECT card: Bitcoin coin image as background bleeds poorly on small screens (crops awkwardly)
- Pool ticker rows: token icons + APY values + action area need touch target review
- Section padding: `px-4` instead of `px-6`
- Section spacing: `py-32` excessive on mobile
- Cards stack on mobile (correct) but inner padding `p-8` is generous for 320px

## Mobile Design (320px-640px)

### PROTECT Card Image

The Bitcoin coin photograph sits as a card background with glassmorphism overlay. On mobile the card is full-width, so the background image is larger relative to content. This should look fine. However, verify the image position doesn't create an awkward crop:

```
Image container:
  Add: className="... object-[center_30%]" (position coin slightly higher on mobile)
  Or use responsive object-position: "object-center sm:object-[center_30%]"
```

If the coin bleeds off the bottom on mobile, shift `object-position` to keep the coin visible in the card's visible area.

### Pool Ticker Rows

Each row shows: token icons (stacked) + pool name + APY value + arrow/action.

Touch target check:
- Each row should be tappable as a full-width element: `min-h-[44px]`
- Token icon stack: purely visual, not individually tappable
- The row itself is the tap target (if it links somewhere)

```
Pool row:
  Add: className="... min-h-[44px] flex items-center"
```

### Card Padding Reduction

```
Card inner:
  Before: p-8 md:p-10
  After:  p-6 sm:p-8 md:p-10
```

### Section Spacing + Padding

```
Section:
  Before: className="... px-4 py-32 md:py-44"
  After:  className="... px-6 py-20 md:py-32 lg:py-44"
```

### APY Display

APY values use `tabular-nums` (correct). At mobile, the font sizes should remain readable:
- Pool name: body size (18px) — fine at mobile
- APY value: body-large or larger — ensure it doesn't wrap awkwardly

## States

| State | Behavior |
|-------|----------|
| Default | Yield cards stacked, pool rows with APY values |
| Loading | Card structure renders, data values animate in (CountUp) |
| Error | N/A — static display data |
| Empty | N/A |

## Accessibility

- Pool rows: if interactive, ensure `role="link"` or `<a>` wrapper with descriptive `aria-label`
- APY values: `tabular-nums` for screen reader consistency
- Card backgrounds: decorative, `aria-hidden="true"` on background images
- Touch targets: 44px minimum on all interactive rows

## Image Resources

No changes. Bitcoin coin photo is existing. Cryptocurrency token icons (BTC, USDC, ETH) are existing image assets. Only the object-position may shift.
