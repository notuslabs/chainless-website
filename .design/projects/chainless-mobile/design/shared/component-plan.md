# Component Plan
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Reuse (As-Is)

| Component | Source | Screens Used |
|-----------|--------|--------------|
| `FadeUp` | `motion.tsx` | All sections |
| `StaggerContainer` / `StaggerItem` | `motion.tsx` | Philosophy, Security, SocialProof |
| `TextReveal` | `motion.tsx` | Hero |
| `MagneticButton` | `motion.tsx` | Hero, CTA |
| `AnimatedCounter` | `animated-counter.tsx` | ProofBar |
| `Eyebrow` | `eyebrow.tsx` | All content sections |
| `DoppelrandCard` | `doppelrand-card.tsx` | Philosophy, Security, SocialProof, Yield, Borrow |
| `ChainlessLogo` | `chainless-logo.tsx` | Navbar, Footer |
| `LanguageSwitcher` | `language-switcher.tsx` | Navbar |

## Refactor (Needs Changes)

| Component | Source | Changes Needed | Screens Used |
|-----------|--------|----------------|--------------|
| `Navbar` | `navbar.tsx` | Touch target sizing (logo: min-h-44, hamburger: 44x44, gap-2) | Screen 01 |
| `Hero` | `hero.tsx` | Remove section `px-4`, upgrade container to `px-6`, reduce `py-32` to `py-20` | Screen 02 |
| `ProofBar` | `proof-bar.tsx` | Responsive grid `grid-cols-1 sm:grid-cols-3`, horizontal dividers on mobile, `px-6` | Screen 03 |
| `Philosophy` | `philosophy.tsx` | Image `h-[200px] sm:h-[280px]`, card `p-6 sm:p-8`, `px-6`, `py-20` | Screen 04 |
| `EditorialBreak` | `editorial-break.tsx` | Mobile: static keyframe, skip frame loading, `h-[200vh] sm:h-[320vh]`, reduced-motion fallback | Screen 05 |
| `SpendCredit` | `spend-credit.tsx` | `bg-dark-500` (not `bg-black`), gradient colors `#1C1B19`, `px-6`, `py-20`, `overflow-x-clip` | Screen 06 |
| `SocialProof` | `social-proof.tsx` | Card `w-[78vw]`, scroll indicator dots, `-mx-6 px-6`, `py-20` | Screen 07 |
| `Footer` | `footer.tsx` | 2-col link grid on mobile, `px-6`, `pt-20` | Screen 08 |
| `YieldSection` | `yield-section.tsx` | Card `p-6 sm:p-8`, image object-position, pool row touch targets, `px-6`, `py-20` | Screen 09 |
| `BorrowCredit` | `borrow-credit.tsx` | Card `p-5 sm:p-8`, `px-6`, `py-20` | Screen 10 |
| `Security` | `security.tsx` | Card `p-5 sm:p-8`, visual break between cards 2-3, icon `h-9 w-9 sm:h-10 sm:w-10`, `px-6`, `py-20` | Screen 11 |
| `CTASection` | `cta-section.tsx` | Reduced fade heights, button stacking, `px-6`, `py-20` | Screen 12 |

## New (Shared)

| Component | Purpose | Screens Used |
|-----------|---------|--------------|
| `ScrollDots` | Scroll indicator dots for horizontal carousels. Props: `count`, `activeIndex`. Shows on mobile, hidden on sm+. | SocialProof (Screen 07) |

## New (Local)

None. All changes are to existing components. The `ScrollDots` component is the only new addition and it's shared.

## Implementation Notes

- **No new pages or routes.** All changes are within existing component files.
- **No new dependencies.** `ScrollDots` uses IntersectionObserver (native) + CSS transitions.
- **13 files modified** for the global padding normalization.
- **1 file with significant logic change**: `editorial-break.tsx` (mobile detection + conditional frame loading).
- **1 new file**: `scroll-dots.tsx` (simple presentational component, ~30 lines).
