# Screen 12: CTASection — Spacing Fix
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Normalize padding and vertical spacing on the CTA section for mobile viewports.

## Current Issues

- Section padding: likely `px-4` instead of `px-6`
- Section spacing: inherits desktop-scale vertical padding
- CTA section has large fade gradients (280px top, 320px bottom) — these consume viewport space on mobile

## Mobile Design (320px-640px)

### Padding + Spacing

```
Section:
  Before: className="... px-4 py-32 md:py-44" (or similar)
  After:  className="... px-6 py-20 md:py-32 lg:py-44"
```

### Fade Gradient Adjustment

The CTA section uses large vertical fade overlays to dissolve into adjacent sections. On mobile, these fades consume a disproportionate amount of the section:

- Top fade: 280px / 667px viewport = 42% consumed by gradient
- Bottom fade: 320px / 667px = 48%

Reduce fade heights on mobile:

```
Top fade:
  Before: className="... h-[280px]"
  After:  className="... h-[140px] sm:h-[280px]"

Bottom fade:
  Before: className="... h-[320px]"
  After:  className="... h-[160px] sm:h-[320px]"
```

This preserves the section-blending effect while giving more space to the actual CTA content.

### CTA Button Group

If the CTA section has multiple buttons (primary + secondary), ensure they stack on mobile:

```
Button group:
  flex-col sm:flex-row gap-4
```

Each button: full width on mobile (`w-full sm:w-auto`), 44px minimum height.

### Content Width

CTA sections typically center a short headline + 1-2 buttons. The `max-w-prose` or `max-w-2xl` constraint keeps text readable. No changes needed to text layout.

## States

| State | Behavior |
|-------|----------|
| Default | Centered headline + CTA buttons with reduced fades |
| Loading | Content fades in via FadeUp |
| Error | N/A — static content |
| Empty | N/A |

## Accessibility

- CTA buttons: 44px min-height, clearly labeled
- Section heading: `<h2>` with clear call to action text
- Buttons: sufficient contrast (yellow-500 on dark surface = 11.1:1)
- Focus order: heading → primary button → secondary button

## Image Resources

No imagery. CTA section is text + buttons with atmospheric gradients (CSS-only).
