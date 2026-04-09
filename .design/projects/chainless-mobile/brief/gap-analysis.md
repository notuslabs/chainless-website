# Gap Analysis
> Phase: brief | Project: chainless-mobile | Generated: 2026-04-08

---

## Brand System vs. Implementation Gaps (Mobile-Specific)

### Spacing Gaps

| Brand System Spec | File | Current Implementation | Gap |
|-------------------|------|----------------------|-----|
| Mobile horizontal padding: 24px (`px-6`) | `foundations/grid.md` line 37 | `px-4` (16px) in 13+ component files | 8px under-padded |
| Touch target minimum: 44x44px | `foundations/spacing.md` line 103 | Navbar links ~36px height, hamburger ~40px | Below minimum |
| Body line-height anchor: 28px | `foundations/spacing.md` line 7 | Correct in typography, not in spacing rhythm | OK |

### Grid Gaps

| Brand System Spec | File | Current Implementation | Gap |
|-------------------|------|----------------------|-----|
| Mobile: single column, full-width | `foundations/grid.md` line 106 | ProofBar forces `grid-cols-3` on mobile | Violates mobile-first spec |
| Content reflows at 320px | `foundations/grid.md` line 116 | ProofBar, Hero trust strip overflow risk | Untested/unverified |

### Color Gaps

| Brand System Spec | Component | Gap |
|-------------------|-----------|-----|
| Dark surface: `#1C1B19` (dark-500) | `spend-credit.tsx` | Uses `bg-black` (#000000) — cold, violates warm palette |
| Edge fades match section bg | `spend-credit.tsx` | Gradients hardcode `#000000` not `#1C1B19` |

### Motion Gaps

| Brand System Spec | Component | Gap |
|-------------------|-----------|-----|
| Reasonable performance budget | `editorial-break.tsx` | 121 webp frames preloaded — ~3MB+ on mobile, no lazy strategy |
| `prefers-reduced-motion` respect | `editorial-break.tsx` | No reduced-motion alternative for frame sequence |

### Component Gaps

| Brand Component | Implementation Gap |
|-----------------|-------------------|
| Responsive section spacing | No mobile-specific `py-*` overrides — desktop spacing used everywhere |
| Scroll affordance patterns | SocialProof carousel hides scrollbar with no alternative indicator |
| Mobile card padding | Cards use `p-8` (32px) uniformly — tight on 320px leaving ~256px content |

## Tokens Present in Brand System, Missing from Mobile Implementation

These tokens exist in `patterns/foundations/` but aren't applied at mobile breakpoints:

| Token | Spec File | Value | Where It Should Apply |
|-------|-----------|-------|----------------------|
| `space-xl` (42px) | spacing.md | 42px | Section vertical rhythm on mobile (instead of 128px) |
| Mobile gutter: 24px | grid.md | 24px | All section horizontal padding |
| Touch target: 44px | spacing.md | 44px | Navbar links, hamburger, store buttons |
