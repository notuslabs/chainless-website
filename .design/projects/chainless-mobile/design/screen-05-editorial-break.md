# Screen 05: EditorialBreak — Mobile Performance Optimization
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Optimize the 121-frame scroll-driven video sequence for mobile performance. Current implementation preloads all 121 WebP frames regardless of device, consuming ~3MB+ on mobile connections. The `h-[320vh]` scroll hijack is also disorienting on touch devices.

## Current Issues

- 121 frames preloaded eagerly via `useFrameSequence(TOTAL_FRAMES)` — no mobile check
- Each frame is a WebP image (~25-30KB) = ~3-3.6MB total
- `h-[320vh]` section height = scroll hijack for the entire editorial reveal
- Canvas-based rendering with `requestAnimationFrame` is CPU-intensive on low-end mobile
- No `prefers-reduced-motion` fallback
- Couplet text at `text-xl` on mobile is fine, but the scroll interaction is frustrating on touch

## Mobile Design (320px-640px)

### Strategy: Single Keyframe + CSS Animation

On mobile (< 640px), replace the 121-frame scroll scrubber with:

1. **Single hero frame** — use frame 60 (midpoint) as a static background image
2. **CSS crossfade** — couplets crossfade on scroll using Intersection Observer (no canvas)
3. **Reduced section height** — `h-[200vh] sm:h-[320vh]` (200vh gives sufficient scroll travel for the two couplets without feeling like a scroll trap)

### Implementation Approach

```tsx
// Detect mobile via media query or viewport width
const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

// Conditional frame loading
const frames = useFrameSequence(isMobile ? 0 : TOTAL_FRAMES);
```

When `isMobile` is true:
- Skip `useFrameSequence` entirely (load 0 frames)
- Render frame-060.webp as a static `<img>` with `object-cover` instead of canvas
- Apply the same sepia/saturation filter via CSS: `filter: saturate(0.8) sepia(0.06)`
- Use a CSS transition or simple scroll-driven opacity for the overlay reveal
- Couplets still crossfade based on scroll position, but driven by simpler IntersectionObserver thresholds

### Mobile Section Height

```
Section:
  Before: className="relative h-[320vh]"
  After:  className="relative h-[200vh] sm:h-[320vh]"
```

200vh on mobile means ~1334px of scroll travel (on a 667px iPhone). Enough for:
- 0-30%: First couplet visible over dark overlay
- 30-50%: Overlay lifts, image revealed
- 50-70%: Second couplet fades in
- 70-100%: Hold and exit

### prefers-reduced-motion

For users with reduced motion preference (any viewport):
- Show static frame-060.webp
- Both couplets visible simultaneously (no crossfade)
- No scroll-driven overlay animation
- Section height reduced to `h-[100vh]` — just a static editorial moment

### Performance Budget

| Metric | Current (Mobile) | Target (Mobile) |
|--------|:----------------:|:---------------:|
| Frame images loaded | 121 (~3MB) | 1 (~30KB) |
| JS execution | Canvas draw per scroll | Intersection Observer only |
| CPU during scroll | High (canvas redraws) | Minimal (CSS transitions) |
| Bandwidth | ~3MB+ | ~30KB |

### Desktop (Unchanged)

Full 121-frame canvas scrubber preserved on viewports >= 640px. No changes to desktop behavior.

## States

| State | Behavior |
|-------|----------|
| Default (mobile) | Static keyframe image with CSS overlay, scroll-driven couplet crossfade |
| Default (desktop) | Full 121-frame canvas scrubber (existing behavior) |
| Loading (mobile) | Single image loads quickly — placeholder is dark overlay (already covers) |
| Error (mobile) | Image fails — dark overlay remains, couplets still readable on dark-950 bg |
| Reduced motion | Static frame, both couplets visible, no animation |

## Accessibility

- `aria-label` on section preserved
- Canvas is `aria-hidden="true"` — correct
- Couplet text is readable without scroll interaction (reduced-motion fallback)
- Section height reduction on mobile mitigates scroll hijack frustration
- No auto-playing animation — all scroll-driven (WCAG 2.2.2 compliant)

## Image Resources

- **Static keyframe:** `editorial-frames/frame-060.webp` (already exists in frame sequence)
- No new images needed — reuse existing frame asset
- Treatment: `filter: saturate(0.8) sepia(0.06)` matching the canvas filter
- Dark overlay (`bg-dark-950` at 0.98 opacity) covers until scroll reveals
