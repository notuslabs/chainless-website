# Screen 04: Philosophy — Image Height + Padding Fix
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix disproportionate image height and generous inner padding on Philosophy pillar cards at mobile viewports. The `h-[280px]` fixed image height and `p-8` (32px) card padding waste viewport space on small screens.

## Current Issues

- Image area: `h-[280px]` on mobile — nearly half the viewport at 667px
- Card inner padding: `p-8` (32px) on the content side — at 320px that leaves ~256px content width inside a Doppelrand card
- Section uses `px-4` instead of brand-spec `px-6`
- Section spacing `py-32` (128px) excessive on mobile

## Mobile Design (320px-640px)

### Image Height

Reduce proportionally on mobile:

```
Image container:
  Before: className="relative h-[280px] md:col-span-5 md:h-full md:min-h-[420px]"
  After:  className="relative h-[200px] sm:h-[280px] md:col-span-5 md:h-full md:min-h-[420px]"
```

200px at mobile gives a 3:2 aspect feel on a ~272px-wide card (after padding). Still enough to show the editorial photography with dark overlay treatment.

### Card Content Padding

Reduce inner padding on mobile:

```
Content area (inside DoppelrandCard):
  Before: className="p-8 md:col-span-7 md:p-12 lg:p-16"
  After:  className="p-6 sm:p-8 md:col-span-7 md:p-12 lg:p-16"
```

`p-6` (24px) on mobile gives 320 - 48 (section padding) - 12 (Doppelrand outer) - 48 (content padding) = ~212px content width. That is tight but acceptable for body text at 18px (11-12 words per line).

### Section Spacing

```
Section:
  Before: className="... px-4 py-32 md:py-44"
  After:  className="... px-6 py-20 md:py-32 lg:py-44"
```

### Pillar Card Stacking

Cards are already `grid-cols-1 md:grid-cols-12` — they stack correctly on mobile. The image sits above the text content. No grid changes needed.

### Spacing Between Cards

`space-y-6` (24px) between pillar cards is fine on mobile. The visual rhythm of alternating image-above-text cards works well vertically.

## States

| State | Behavior |
|-------|----------|
| Default | Stacked card with image (200px) above text content |
| Loading | Image placeholder via Next.js blur-up, card structure visible immediately |
| Error | Image fails — dark overlay still shows, text content unaffected |
| Empty | N/A — static content |

## Accessibility

- Images have `alt` text from dictionary (`pillar.imageAlt`)
- Heading structure: section `<h2>`, card titles as `<h3>` or strong text
- Card content readable at 200% zoom (320px * 2 = 640px → triggers sm: breakpoint)
- Color contrast preserved — same dark overlay treatment on images

## Image Resources

No changes to imagery. Existing `philosophy-1.jpg` and `philosophy-2.jpg` are cropped via `object-cover` — reducing height from 280px to 200px changes the crop but not the source image. The dark warm tint overlay persists.
