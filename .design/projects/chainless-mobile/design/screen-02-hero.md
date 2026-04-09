# Screen 02: Hero — Padding Deduplication
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix double horizontal padding on the Hero section at mobile viewports. Currently the section applies `px-4` AND the inner container applies `px-4`, resulting in 32px total horizontal padding instead of the brand-specified 24px.

## Current Issues

- Section: `className="... bg-dark-500 px-4 py-32 md:px-0"`
- Inner container: `className="... mx-auto w-full max-w-[var(--container-content)] px-4 md:px-8"`
- Result at mobile: 16px (section) + 16px (container) = 32px padding per side
- Brand spec (grid.md): 24px mobile gutter

## Mobile Design (320px-640px)

### Padding Fix Strategy

Remove `px-4` from the `<section>` element. The inner container already provides horizontal padding. Upgrade the container from `px-4` to `px-6` to match the brand system's 24px mobile gutter.

```
Section:
  Before: className="... bg-dark-500 px-4 py-32 md:px-0"
  After:  className="... bg-dark-500 py-20 md:py-32"

Container:
  Before: className="... mx-auto w-full max-w-[var(--container-content)] px-4 md:px-8"
  After:  className="... mx-auto w-full max-w-[var(--container-content)] px-6 md:px-8"
```

### Vertical Spacing Reduction

Section vertical padding `py-32` (128px) is excessive on mobile. Hero uses `min-h-[100dvh]` so the `py` is more of a safety floor. Reduce to `py-20` (80px) on mobile, `md:py-32` on desktop.

### Trust Strip (Below CTA)

The Hero has a trust metrics strip below the CTA buttons. At 320px this can wrap awkwardly. Verify the trust strip items use `flex-wrap` and have sufficient spacing. If the trust strip exists as a sub-component of Hero, ensure items gracefully stack or reduce to 2 per row at 320px.

### Content Width

`max-w-[600px]` on the headline container is fine — at 320px with 24px padding per side, content width is 272px which naturally constrains the headline to ~5-6 words per line with `clamp()` sizing.

## States

| State | Behavior |
|-------|----------|
| Default | Full-viewport hero with video bg, mesh gradient, headline + CTA |
| Loading | Video loads progressively — mesh gradient visible first, then video fades in |
| Error | Video fails — mesh gradient remains as sole background (already graceful) |
| Reduced motion | Video paused on first frame, mesh gradient stops orbiting |

## Accessibility

- Video is decorative (`aria-hidden="true"`) — correct
- Headline uses `<h1>` with `TextReveal` — VoiceOver reads full text immediately
- CTA buttons have sufficient contrast (yellow-500 on dark-500 = 11.1:1 AAA)
- `min-h-[100dvh]` handles iOS Safari address bar correctly

## Image Resources

No changes — existing video (`hero-bg.mp4`) and mesh gradient are sufficient. The video's sepia filter and left vignette are CSS-only treatments.
