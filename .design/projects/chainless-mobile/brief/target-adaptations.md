# Target Adaptations
> Phase: brief | Project: chainless-mobile | Generated: 2026-04-08

---

## Token Overrides

No new tokens needed. This project enforces existing brand tokens that are currently bypassed on mobile.

### Padding Alignment

| Current (mobile) | Brand System Spec | Fix |
|-------------------|------------------|-----|
| `px-4` (16px) | `px-6` (24px) per `foundations/grid.md` | Update all sections to `px-4 sm:px-6` or `px-6` |

### Spacing Alignment

| Current (mobile) | Proposed | Rationale |
|-------------------|----------|-----------|
| `py-32` (128px) | `py-20 md:py-32` (80px → 128px) | 128px is excessive on 667px viewport — wastes 38% of viewport height |
| `py-44` (176px) | `py-28 md:py-44` (112px → 176px) | Desktop spacing preserved, mobile reduced proportionally |

### Color Correction

| Component | Current | Fix |
|-----------|---------|-----|
| `spend-credit.tsx` section bg | `bg-black` (#000000) | `bg-dark-500` (#1C1B19) — warm palette mandate |
| `spend-credit.tsx` edge fades | `#000000` in gradients | `#1C1B19` (dark-500) or `var(--color-dark-500)` |

## Component Adaptations

### ProofBar — Responsive Grid

**Current:** `grid-cols-3` always
**Adaptation:** Stack to `grid-cols-1 sm:grid-cols-3` or use `flex-wrap` with min-width per stat. Each stat should be readable at 320px without truncation.

Reference: `foundations/grid.md` — "Mobile (< 640px): Single column, full-width content"

### Hero — Padding Deduplication

**Current:** Section `px-4` + container `px-4` = 32px total on mobile
**Adaptation:** Remove inner `px-4` on section, keep container `px-4 md:px-8`. Or unify to single `px-6`.

### EditorialBreak — Mobile Performance

**Current:** 121 frames preloaded regardless of device
**Adaptation options:**
1. Reduce to ~30 frames on mobile (every 4th frame) via media query or JS check
2. Replace frame sequence with a single still image + CSS parallax on mobile
3. Intersection Observer to defer loading until section enters viewport

Recommendation: Option 2 for mobile — single keyframe image with CSS animation. Preserves editorial intent without the bandwidth cost.

### SocialProof — Scroll Affordance

**Current:** `overflow-x-auto` with `[scrollbar-width:none]` — invisible scroll
**Adaptation:** Add scroll indicator dots or a subtle peek of the next card (reduce `w-[85vw]` to `w-[78vw]`) so users see content continues.

### Philosophy — Mobile Image

**Current:** `h-[280px]` fixed height on mobile
**Adaptation:** `h-[200px] sm:h-[280px]` — proportional reduction. Content padding `p-6 sm:p-8` on mobile.

### Navbar — Touch Targets

**Current:** Logo link area ~40px height. Nav items `px-4 py-2` = ~36px height.
**Adaptation:** Ensure all tappable areas reach 44x44px minimum. Increase hamburger button padding or explicit min-height.

Reference: `foundations/spacing.md` — "Touch targets: minimum 44x44px (WCAG SC 2.5.8)"

### Footer — Mobile Link Layout

**Current:** Link columns stack vertically with no visual separation
**Adaptation:** Add `grid grid-cols-2 gap-8` for link columns on mobile (2x2 grid instead of vertical stack), or add horizontal dividers between column groups.

## Platform Considerations

### iOS Safari
- `100dvh` already used in Hero (good) — avoids address bar issues
- Sticky `position: fixed` nav needs testing with iOS Safari elastic scroll
- `backdrop-filter: blur()` may have compositing cost — test on older iPhones

### Android Chrome
- Video autoplay with `playsInline muted` should work
- EditorialBreak canvas rendering may stutter on low-end Android — performance budget reason to simplify on mobile

### 320px Width Floor
- WCAG 2.2 SC 1.4.10 (Reflow) requires no horizontal scroll at 320px
- ProofBar and Hero trust strip are the primary overflow risks

## Implementation Target Mapping

All changes target existing components in `landing/src/components/`. No new components needed. Changes are CSS-level (Tailwind classes) with one JS-level change (EditorialBreak frame optimization).

| Design Change | Implementation |
|---------------|---------------|
| Padding normalization | Tailwind responsive prefixes (`px-4 sm:px-6` or `px-6`) |
| Spacing reduction | Tailwind responsive prefixes (`py-20 md:py-32`) |
| Color correction | Direct class change (`bg-black` → `bg-dark-500`) |
| ProofBar grid | Responsive grid classes |
| EditorialBreak | JS condition for mobile frame count or replacement |
| Touch targets | Padding/min-height adjustments |
| Scroll indicator | CSS pseudo-elements or peek adjustment |
