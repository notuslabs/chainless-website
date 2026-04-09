# Scope
> Phase: brief | Project: chainless-mobile | Generated: 2026-04-08

---

## Project Summary

Mobile responsiveness audit and fixes for the Chainless landing page. Every section has been reviewed at 320px–640px viewports. The site is mobile-first in theory (Tailwind defaults) but several components have desktop-centric layouts, inconsistent horizontal padding, and touch/spacing issues that degrade the mobile experience.

## Screen List

| # | Screen | Priority | Notes |
|---|--------|----------|-------|
| 1 | Homepage (all sections) | P0 | Single-page landing — all sections below |
| 2 | Fees page (`/taxas`) | P1 | Content page, likely inherits fixes |
| 3 | Legal pages | P2 | Text-heavy, minimal layout risk |

## Section-Level Audit (Priority Order)

### P0 — Critical Mobile Issues

| # | Section | Component | Issue |
|---|---------|-----------|-------|
| 1 | ProofBar | `proof-bar.tsx` | 3-column grid (`grid-cols-3`) at all breakpoints. "R$300M+" text overflows at 320px. Labels truncate. No responsive breakpoint. |
| 2 | SpendCredit | `spend-credit.tsx` | Uses `bg-black` instead of `bg-dark-500` (warm palette violation). Video edge fades hardcoded to `#000000` — color mismatch with adjacent sections on warm-dark surfaces. |
| 3 | EditorialBreak | `editorial-break.tsx` | Preloads 121 frame images on mobile — massive bandwidth hit. No lazy loading or mobile-specific optimization. `h-[320vh]` scroll hijack is disorienting on touch. |
| 4 | Hero | `hero.tsx` | Double `px-4` nesting (section + container) = 32px total horizontal padding on mobile. Inconsistent with rest of site. Trust strip metrics can wrap awkwardly at 320px. |

### P1 — Important Mobile Fixes

| # | Section | Component | Issue |
|---|---------|-----------|-------|
| 5 | Philosophy | `philosophy.tsx` | Image height `h-[280px]` on mobile is disproportionate for small screens. Content padding `p-8` (32px) is generous for 320px. |
| 6 | Footer | `footer.tsx` | `md:grid-cols-12` stacks on mobile but link columns have no horizontal separation — visual soup. `px-4` padding. |
| 7 | Navbar | `navbar.tsx` | Pill nav `px-2 py-2` has tight touch targets. Logo link `px-4 py-2` = 40px height, borderline for 44px touch target. |
| 8 | SocialProof | `social-proof.tsx` | Horizontal scroll carousel has no scroll indicator. `w-[85vw]` cards with hidden scrollbar = invisible interaction. |

### P2 — Spacing & Rhythm Polish

| # | Section | Component | Issue |
|---|---------|-----------|-------|
| 9 | All sections | Multiple | Inconsistent horizontal padding: `px-4` (16px) vs brand system spec `px-6` (24px). Grid.md specifies 24px for mobile. |
| 10 | All sections | Multiple | Section vertical padding `py-32` (128px) on mobile — excessive. Consider `py-20` or `py-24` for mobile. |
| 11 | YieldSection | `yield-section.tsx` | PROTECT card image bleeds poorly on small screens. Pool ticker rows need touch target review. |
| 12 | BorrowCredit | `borrow-credit.tsx` | Cards stack well but inner padding `p-8` (32px) on 320px screens leaves only ~256px content width. |
| 13 | Security | `security.tsx` | Bento cards stack on mobile — OK but 4 sequential cards feel long. No visual break or rhythm variation. |

## Component Scope

Components requiring mobile-specific changes:

| Component | Change Type | Estimated Effort |
|-----------|------------|-----------------|
| `proof-bar.tsx` | Responsive grid breakpoint | Small |
| `spend-credit.tsx` | Color fix + padding | Small |
| `editorial-break.tsx` | Mobile performance optimization | Medium |
| `hero.tsx` | Padding normalization | Small |
| `philosophy.tsx` | Image height + padding | Small |
| `footer.tsx` | Mobile link layout | Small |
| `navbar.tsx` | Touch target sizing | Small |
| `social-proof.tsx` | Scroll indicator | Small |
| All sections | Padding normalization (px-4 → px-6) | Medium (13 files) |
| All sections | Section spacing reduction on mobile | Medium (10 files) |

## Project Boundaries

**In scope:**
- Mobile viewport fixes (320px–640px) for all landing page sections
- Horizontal padding normalization to match brand system (24px)
- Section vertical spacing reduction for mobile
- Touch target compliance (44px minimum, WCAG 2.5.8)
- EditorialBreak mobile performance (lazy load / reduced frames)
- SpendCredit warm palette correction

**Out of scope:**
- Desktop layout changes (preserve existing desktop experience)
- New features or sections
- Content/copy changes
- Legal pages (low risk, inherit fixes from global styles)
- Influencer pages
- i18n / translation changes

## Success Criteria

1. No horizontal overflow at 320px viewport width
2. All interactive elements meet 44px touch target minimum
3. Horizontal padding consistent at 24px (`px-6`) across all sections
4. Section spacing feels proportional on mobile (not desktop-inherited excess)
5. EditorialBreak loads <500KB total on mobile (vs ~3MB+ for 121 frames)
6. ProofBar text doesn't truncate or overflow at 320px
7. Social proof carousel has visible scroll affordance
8. Lighthouse mobile performance score maintained or improved

## Issue Framing

This project maps to 3 bounded issues:

1. **Mobile padding & spacing normalization** — Standardize `px-6` horizontal padding and reduce `py-32` to `py-20`/`py-24` on mobile across all sections. Low risk, high impact.
2. **Critical section fixes** — ProofBar grid, Hero double-padding, SpendCredit color, Philosophy image sizing, Footer layout, Navbar touch targets, SocialProof scroll indicator.
3. **EditorialBreak mobile optimization** — Reduce frame count or lazy-load on mobile. Performance-focused, isolated to one component.

## Dependencies

- Brand system: `.design/branding/chainless/patterns/` (grid, spacing, typography specs)
- Sibling project: `chainless-fees` is in design phase — fees page may inherit padding fixes
