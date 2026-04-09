# Design Critique
> Phase: critique | Project: chainless-mobile | Date: 2026-04-08
> Reviewer: GSP Design Critic

---

## Strategy Alignment

The project correctly identifies a bounded, high-impact problem: the Chainless landing page is desktop-first despite being built with Tailwind's mobile-first utilities. The brief scopes 3 clear issue groups (padding normalization, critical section fixes, EditorialBreak optimization) and targets 320px-640px viewports -- the exact range where the current implementation breaks.

**Strengths:** The audit is surgical -- no scope creep into new features, content changes, or desktop rework. The persona set (Lucas on 4G iPhone, Marina on budget Android, Roberto with reduced-motion) directly maps to the technical issues. Every design decision traces to a brand system spec or WCAG criterion.

**Concern:** The brief excludes fees page and legal pages ("inherit fixes from global styles") but doesn't verify this assumption. If those pages have their own `px-4` hardcoded, the global pattern won't propagate automatically.

**Assessment:** Strong strategic alignment. The right problem at the right scope. Score: 4.5/5.

---

## Usability Evaluation (Nielsen's 10 Heuristics)

| # | Heuristic | Score | Notes |
|---|-----------|:-----:|-------|
| 1 | Visibility of system status | 4 | Scroll indicator dots (Screen 07) add carousel state feedback. EditorialBreak mobile fallback (Screen 05) provides clear visual state instead of scroll-hijack confusion. AnimatedCounter reduced-motion fallback shows final value. Minor gap: no explicit loading skeleton specs for mobile slow connections. |
| 2 | Match between system and real world | 5 | All content is real Portuguese copy, no placeholders. Terminology matches Brazilian fintech conventions. ProofBar uses familiar metric patterns (R$300M+, carteiras ativas). |
| 3 | User control and freedom | 4 | EditorialBreak scroll height reduction (320vh to 200vh) reduces scroll-trap severity. SocialProof carousel uses native scroll (user-controlled). Minor: no explicit "scroll to top" or section skip affordance on mobile -- 12 sections is a long scroll on 320px. |
| 4 | Consistency and standards | 5 | The global padding normalization (Screen 13) establishes `px-6 py-20 md:py-32 lg:py-44` as a universal pattern. Every section spec follows this exact pattern. Card padding follows consistent `p-5/p-6 sm:p-8 md:p-10` progression. |
| 5 | Error prevention | 4 | `overflow-x-clip` on SpendCredit (Screen 06) prevents horizontal scroll from glow orbs. ProofBar stacked layout eliminates text overflow at 320px. EditorialBreak static image eliminates canvas rendering failures. Gap: no explicit 320px overflow testing spec for all sections. |
| 6 | Recognition over recall | 5 | SocialProof scroll dots make carousel position visible. ProofBar horizontal layout shows all stats without interaction. Footer 2-col grid makes link categories scannable. |
| 7 | Flexibility and efficiency | 4 | Native scroll carousel (SocialProof) works with both swipe and scroll. EditorialBreak gracefully degrades on mobile. Minor: no consideration for landscape mobile orientation (common on Android). |
| 8 | Aesthetic and minimalist design | 4 | Vertical spacing reduction (128px to 80px) significantly improves mobile content density. Philosophy image height reduction (280px to 200px) reclaims viewport space. Security compact layout with visual break prevents monotony. Minor concern: Screen 11 (Security) Option B still has 4 sequential cards -- even with a visual break, this may feel long on mobile. |
| 9 | Error recovery | 4 | Every screen spec includes error states (video fails, image fails). EditorialBreak degrades to dark overlay + readable text. Hero mesh gradient persists if video fails. Gap: error state specs are brief -- no mobile-specific error treatment beyond "it still works." |
| 10 | Help and documentation | 3 | No skip-navigation link specified. No section anchor navigation for mobile. No "scroll to top" button. For a 12-section single-page site, this is a notable gap on mobile where scrolling back to top takes significant effort. |

**Total: 42/50**

---

## Visual Hierarchy

**Strong:** The responsive breakpoint strategy creates clear visual hierarchy transitions. ProofBar shifts from compressed 3-col (where "R$300M+" fights for space) to generous stacked layout where each stat commands full width. Philosophy cards scale proportionally (h-200 to h-280) maintaining the image-above-text hierarchy.

**Concern:** The Security section (Screen 11) recommends Option B (single column with visual break) but the design doesn't specify the visual break treatment. A `mt-8` or hairline between cards 2-3 is vague -- this could be a warm-700 hairline, a spacing increase, or a typographic divider. Specificity is needed.

## Typography & Color

**Strong:** The SpendCredit `bg-black` to `bg-dark-500` correction is a critical brand fix that ensures warm palette consistency across all sections. The gradient color corrections (`#000000` to `#1C1B19`) show attention to the atmospheric transition details.

**Note:** No typography changes are proposed, which is correct -- the fluid `clamp()` type system handles mobile scaling well. Body text at 16px stays readable at 272px content width (with `px-6` padding on 320px).

## Content Quality

All content is real production copy in Portuguese. ProofBar uses actual metrics (R$300M+, 30.000+, 100%). Testimonials reference real users. No placeholders detected.

## Implementation Quality

**Strong decisions:**
- EditorialBreak: static keyframe on mobile is the right call. 121 frames to 1 frame = 99% bandwidth reduction.
- ProofBar: `grid-cols-1 sm:grid-cols-3` is clean Tailwind pattern, no JS needed.
- SocialProof: `w-[78vw]` peek + IntersectionObserver dots = native-feeling carousel.

**Concern:** The ScrollDots component (new) uses IntersectionObserver to track active card. This is correct, but the spec doesn't address:
1. IntersectionObserver threshold values (what percentage of card visibility triggers active state?)
2. Debouncing during rapid scroll
3. The dots being `sm:hidden` means they need conditional rendering or CSS-only hiding

**Concern:** Screen 05 (EditorialBreak) uses `window.innerWidth < 640` for mobile detection. This is a resize-fragile approach. A `matchMedia('(max-width: 639px)')` listener or CSS-only approach would be more robust.

## Taste Assessment

**Intentionality: 4/5** -- Every change traces to a specific brand spec or WCAG criterion. No arbitrary styling.
**Visual coherence: 5/5** -- Consistent pattern (`px-6 py-20 md:py-32 lg:py-44`) across all sections.
**Restraint: 5/5** -- No new visual elements, no mobile-specific decorations. Just fixes.
**Craft in details: 4/5** -- SocialProof dots use elongated pill + yellow-500/60 = considered. But Security visual break is underspecified.
**Distinctiveness: 3/5** -- This is a responsive fix audit, not a redesign. The mobile experience will be "correctly responsive" but doesn't add mobile-specific delight (e.g., haptic-style micro-interactions, mobile-native gestures).

---

## Summary

| Dimension | Score |
|-----------|:-----:|
| Strategy | 4.5/5 |
| Nielsen's Heuristics | 42/50 |
| Brand Contract | N/A (no STYLE.md) |

**Verdict: Pass.** Nielsen score 42/50 exceeds the 40/50 threshold. No critical fixes affect layout/navigation/IA. The design is a well-scoped, technically sound responsive audit that fixes real issues without introducing new ones.

**Recommendation:** Proceed to build. Address the minor gaps (skip-nav, scroll-to-top, Security visual break specificity) during implementation.
