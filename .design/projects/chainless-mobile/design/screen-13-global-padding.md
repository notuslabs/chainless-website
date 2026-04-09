# Screen 13: Global Padding Normalization
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Normalize horizontal padding from `px-4` (16px) to `px-6` (24px) across all sections, and reduce vertical section spacing from desktop values to mobile-appropriate values. This is a cross-cutting change that affects 13+ component files.

## Brand System Reference

From `foundations/grid.md`:
- Mobile (< 640px): 24px gutter (`px-6`)
- Desktop container: `max-w-7xl` (1280px) with `px-6` minimum

From `foundations/spacing.md`:
- Section boundary spacing: `py-24` (96px) for same-surface, `py-32` (128px) for surface transitions

## Global Pattern

Every section follows this container pattern:

```html
<section className="... px-{X} py-{Y} md:py-{Z}">
  <div className="mx-auto max-w-[var(--container-content)]">
    ...
  </div>
</section>
```

Or in some cases (Hero, ProofBar), the section has `px-{X}` AND the inner container has `px-{X}` (double padding bug).

## Changes By Component

### Horizontal Padding (px-4 to px-6)

| Component | File | Current | After |
|-----------|------|---------|-------|
| Hero | `hero.tsx` | `px-4 ... md:px-0` (section) + `px-4 md:px-8` (container) | Remove section `px-4`, container `px-6 md:px-8` |
| ProofBar | `proof-bar.tsx` | `px-4 md:px-8` (container) | `px-6 md:px-8` |
| Philosophy | `philosophy.tsx` | `px-4` (section) | `px-6` |
| EditorialBreak | `editorial-break.tsx` | `px-6` (couplet area) | Already correct |
| YieldSection | `yield-section.tsx` | `px-4` (section) | `px-6` |
| SpendCredit | `spend-credit.tsx` | `px-4` (section) | `px-6` |
| BorrowCredit | `borrow-credit.tsx` | `px-4` (section) | `px-6` |
| Security | `security.tsx` | `px-4` (section) | `px-6` |
| SocialProof | `social-proof.tsx` | `px-4` (section) | `px-6` |
| CTASection | `cta-section.tsx` | `px-4` (section) | `px-6` |
| Footer | `footer.tsx` | `px-4` (footer) | `px-6` |

**Note:** Hero is a special case — it has double `px-4` (section + container). Fix by removing section padding and upgrading container to `px-6`.

### Vertical Spacing Reduction

| Component | Current | After | Rationale |
|-----------|---------|-------|-----------|
| Hero | `py-32` | `py-20 md:py-32` | Uses `min-h-[100dvh]`, py is safety floor |
| Philosophy | `py-32 md:py-44` | `py-20 md:py-32 lg:py-44` | 128px to 80px on mobile |
| SpendCredit | `py-32 md:py-44` | `py-20 md:py-32 lg:py-44` | Same pattern |
| SocialProof | `py-32 md:py-44` | `py-20 md:py-32 lg:py-44` | Same pattern |
| Security | `py-32 md:py-44` | `py-20 md:py-32 lg:py-44` | Same pattern |
| YieldSection | `py-32 md:py-44` | `py-20 md:py-32 lg:py-44` | Same pattern |
| BorrowCredit | `py-32 md:py-44` | `py-20 md:py-32 lg:py-44` | Same pattern |
| CTASection | `py-32 md:py-44` | `py-20 md:py-32 lg:py-44` | Same pattern |
| Footer | `pt-32` | `pt-20 md:pt-32` | Top padding only |

The consistent pattern is: `py-20 md:py-32 lg:py-44`
- Mobile: 80px
- Tablet: 128px
- Desktop: 176px

This creates a proportional rhythm: mobile gets ~60% of desktop vertical spacing.

## Implementation Priority

1. **Horizontal padding** — single find-and-replace pattern, low risk
2. **Vertical spacing** — same pattern across all sections, low risk
3. **Hero double-padding** — structural change, test carefully

## Accessibility

- 24px (px-6) gutter at 320px leaves 272px content width — sufficient for body text
- Vertical spacing reduction doesn't affect content readability
- No horizontal overflow at 320px when padding is correctly applied (single padding layer)

## Related Screens

This cross-cutting change is referenced by every other screen chunk in this design. Individual screen chunks specify their component-specific changes; this document captures the global pattern.
