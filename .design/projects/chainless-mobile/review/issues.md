# Issues
> Phase: review | Project: chainless-mobile | Generated: 2026-04-08

---

## Critical Issues

| # | Issue | Severity | File | Line | Expected | Actual | Remediation |
|---|-------|----------|------|------|----------|--------|-------------|
| 1 | SpendCredit uses `bg-black` | Critical | `src/components/spend-credit.tsx` | 15 | `bg-dark-500` (#1C1B19) per brand warm palette | `bg-black` (#000000) -- cold black violates brand system | Change `bg-black` to `bg-dark-500`. Design spec [screen-06](../design/screen-06-spend-credit.md) explicitly calls this out as a warm palette violation. |
| 2 | SpendCredit gradient stops use #000000 | Critical | `src/components/spend-credit.tsx` | 108, 113, 118, 123 | `#1C1B19` (dark-500) for all 4 edge fade gradients | `#000000` in all 4 gradient stops (top, bottom, left, right) | Replace all `#000000` with `#1C1B19` in the video edge fade gradients. Creates visible cold/warm boundary. |

---

## Major Issues

| # | Issue | Severity | File | Line | Expected | Actual | Remediation |
|---|-------|----------|------|------|----------|--------|-------------|
| 3 | EditorialBreak: no mobile optimization | Major | `src/components/editorial-break.tsx` | 64 | Single keyframe on mobile (< 640px), matchMedia detection, h-[200vh] sm:h-[320vh] | All 121 frames loaded on every device, h-[320vh] always | Implement mobile detection via `matchMedia('(max-width: 639px)')`. On mobile: skip frame loading, show static frame-060.webp, reduce section to h-[200vh]. Per [screen-05](../design/screen-05-editorial-break.md) and critique fix #1. |
| 4 | SocialProof carousel missing ARIA | Major | `src/components/social-proof.tsx` | 222 | `aria-label="Depoimentos de clientes"` on scroll container, `role="group"` on each card | No ARIA attributes on carousel container or cards | Add `aria-label` to StaggerContainer, wrap each card in `role="group" aria-label="Depoimento {n} de {total}"`. Per accessibility fix #2. |

---

## Minor Issues

| # | Issue | Severity | File | Line | Expected | Actual | Remediation |
|---|-------|----------|------|------|----------|--------|-------------|
| 5 | Footer links lack 44px touch targets | Minor | `src/components/footer.tsx` | 69-85 | `min-h-[44px] flex items-center` on each footer `<a>` | Footer links use default text-sm sizing (~21px line-height) with gap-3.5 | Add `min-h-[44px] inline-flex items-center` to footer link `<a>` elements. Per accessibility fix #3. |
| 6 | page.tsx SectionRule uses px-4 | Minor | `src/app/[locale]/page.tsx` | 39 | `px-6` (24px gutter) consistent with all sections | SectionRule component uses `px-4` | Change `px-4` to `px-6` in SectionRule for consistency. Low visual impact since the rule is a thin gradient line, but breaks the global pattern. |
| 7 | EditorialBreak: no prefers-reduced-motion handling | Minor | `src/components/editorial-break.tsx` | — | Static frame + both couplets visible when reduced motion preferred | No reduced-motion detection -- full scroll-driven animation always runs | Add `useReducedMotion()` from framer-motion. When true: show static keyframe, display both couplets, reduce section height. |

---

## Deferred (Manual Testing Required)

| # | Issue | Notes |
|---|-------|-------|
| 8 | Landscape orientation (667x375) | Hero CTA may be pushed below fold in landscape. EditorialBreak h-[200vh/320vh] behavior in landscape. Requires device testing. |
| 9 | how-it-works.tsx still uses px-4 | Commented out in page.tsx -- not rendered. If re-enabled, will need the same px-6 normalization. |

---

## Cross-References

- Design specs: [../design/INDEX.md](../design/INDEX.md)
- Critique fixes: [../critique/prioritized-fixes.md](../critique/prioritized-fixes.md)
- Accessibility fixes: [../critique/accessibility-fixes.md](../critique/accessibility-fixes.md)
- Brand patterns: [chainless.yml](../../../branding/chainless/patterns/chainless.yml)
