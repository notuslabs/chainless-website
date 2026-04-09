# Screen 06: SpendCredit — Color Fix + Padding
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix the warm palette violation (`bg-black` instead of `bg-dark-500`) and normalize padding/spacing for mobile viewports.

## Current Issues

- Section background: `bg-black` (#000000) — violates warm palette mandate
- Edge fade gradients hardcode `#000000` — color mismatch on warm-dark surfaces
- Section padding: `px-4` instead of brand-spec `px-6`
- Section vertical: `py-32 md:py-44` — 128px excessive on mobile
- Atmospheric glow orbs positioned with negative percentages — may create horizontal overflow on mobile

## Mobile Design (320px-640px)

### Color Correction

This is a brand compliance fix, not mobile-specific, but it ships in this audit:

```
Section:
  Before: className="relative bg-black px-4 py-32 md:py-44"
  After:  className="relative bg-dark-500 px-6 py-20 md:py-32 lg:py-44"
```

### Edge Fade Gradients

The video container has 4-sided edge fades using `#000000`. Update all gradient stops to use `#1C1B19` (dark-500):

```css
/* Top fade */
Before: linear-gradient(to top, transparent, #000000)
After:  linear-gradient(to top, transparent, #1C1B19)

/* Bottom fade */
Before: linear-gradient(to bottom, transparent, #000000)
After:  linear-gradient(to bottom, transparent, #1C1B19)

/* Left fade */
Before: linear-gradient(to left, transparent, #000000)
After:  linear-gradient(to left, transparent, #1C1B19)

/* Right fade */
Before: linear-gradient(to right, transparent, #000000)
After:  linear-gradient(to right, transparent, #1C1B19)
```

This ensures the video edges dissolve seamlessly into the `bg-dark-500` section background instead of creating a cold/warm mismatch at the fade boundary.

### Atmospheric Glow Containment

The glow orbs use `-left-[10%]` and `-left-[5%]` positioning. On mobile, these can extend beyond the `overflow-hidden` boundary (if section doesn't have it).

Verify: section has `overflow-hidden` or `overflow-x-clip`. If not, add `overflow-x-clip` to prevent horizontal scrollbar.

```
Section:
  After:  className="relative overflow-x-clip bg-dark-500 px-6 py-20 md:py-32 lg:py-44"
```

### Video Container on Mobile

The video sits inside a `lg:col-span-7` grid area. On mobile it spans full width. The video's edge fades (4-sided) work at any width. No changes needed to the video layout itself.

### IOF Comparison Card

The glass card (`doppelrand-hallmark-narrow`) uses `px-6 pb-7 pt-6` — at mobile this is fine (24px horizontal padding). No change needed.

### Grid Layout

```
Current: grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20
```

On mobile: single column, text above video. This stacks correctly. Gap `gap-12` (48px) between text and video on mobile is appropriate.

## States

| State | Behavior |
|-------|----------|
| Default | Warm dark section with video, atmospheric glows, text + IOF card |
| Loading | Video loads progressively — dark section bg visible first |
| Error | Video fails — dark section with atmospheric glows remains, text/card unaffected |
| Empty | N/A — static content |

## Accessibility

- Video is auto-playing but muted — WCAG compliant
- IOF comparison card has `aria-label` for the comparison context
- Section uses `aria-labelledby="spend-heading"` — correct
- Color correction improves consistency (warm palette = brand accessibility guideline)
- `overflow-x-clip` prevents horizontal scroll at 320px

## Image Resources

No changes — existing auto-playing video with edge fades. Only the fade gradient colors change from #000000 to #1C1B19.
