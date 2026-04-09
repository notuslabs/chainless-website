# Design
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

## Screens

| # | Screen | File | Components Modified |
|---|--------|------|---------------------|
| 01 | Navbar | [screen-01-navbar.md](./screen-01-navbar.md) | Navbar (touch targets) |
| 02 | Hero | [screen-02-hero.md](./screen-02-hero.md) | Hero (padding deduplication) |
| 03 | ProofBar | [screen-03-proof-bar.md](./screen-03-proof-bar.md) | ProofBar (responsive grid) |
| 04 | Philosophy | [screen-04-philosophy.md](./screen-04-philosophy.md) | Philosophy (image height + padding) |
| 05 | EditorialBreak | [screen-05-editorial-break.md](./screen-05-editorial-break.md) | EditorialBreak (mobile performance) |
| 06 | SpendCredit | [screen-06-spend-credit.md](./screen-06-spend-credit.md) | SpendCredit (color fix + padding) |
| 07 | SocialProof | [screen-07-social-proof.md](./screen-07-social-proof.md) | SocialProof (scroll affordance) |
| 08 | Footer | [screen-08-footer.md](./screen-08-footer.md) | Footer (mobile link layout) |
| 09 | YieldSection | [screen-09-yield-section.md](./screen-09-yield-section.md) | YieldSection (image bleed + padding) |
| 10 | BorrowCredit | [screen-10-borrow-credit.md](./screen-10-borrow-credit.md) | BorrowCredit (card padding) |
| 11 | Security | [screen-11-security.md](./screen-11-security.md) | Security (spacing rhythm) |
| 12 | CTASection | [screen-12-cta-section.md](./screen-12-cta-section.md) | CTASection (spacing) |
| 13 | Global Padding | [screen-13-global-padding.md](./screen-13-global-padding.md) | All sections (px-6 + py-20) |

## Shared

| Chunk | File | ~Lines |
|-------|------|--------|
| Personas | [personas.md](./shared/personas.md) | ~45 |
| Information Architecture | [information-architecture.md](./shared/information-architecture.md) | ~40 |
| Navigation | [navigation.md](./shared/navigation.md) | ~35 |
| Micro-interactions | [micro-interactions.md](./shared/micro-interactions.md) | ~45 |
| Responsive | [responsive.md](./shared/responsive.md) | ~60 |
| Component Plan | [component-plan.md](./shared/component-plan.md) | ~65 |

## Issue-to-Screen Mapping

| Issue Group | Screens |
|-------------|---------|
| Mobile padding & spacing normalization | Screen 13 (global), all individual screens |
| Critical section fixes | Screens 01-08 |
| EditorialBreak mobile optimization | Screen 05 |

## Summary

13 design chunks covering all 12 components identified in the brief plus a cross-cutting global padding normalization spec. Key decisions:

1. **ProofBar:** Stacked `grid-cols-1` on mobile (not compressed 3-col)
2. **EditorialBreak:** Single static keyframe on mobile (not reduced frame count)
3. **SocialProof:** Card peek (`w-[78vw]`) + scroll indicator dots
4. **Security:** Compact single column with visual break at midpoint (not 2-col grid)
5. **Footer:** 2-column link grid on mobile (Produto + Recursos side by side)
6. **Global pattern:** `px-6 py-20 md:py-32 lg:py-44` across all sections
