# Prioritized Fixes
> Phase: critique | Project: chainless-mobile | Date: 2026-04-08

---

## Critical (Must Fix)

None. The design addresses all P0 issues identified in the brief correctly.

---

## Important (High Priority)

1. **EditorialBreak mobile detection method** (Screen 05)
   Current spec uses `window.innerWidth < 640` which doesn't respond to resize events or orientation changes. Use `matchMedia('(max-width: 639px)')` with a listener, or better, use a CSS-only approach with `<picture>` for the static keyframe and CSS `display:none` for the canvas.
   - File: `editorial-break.tsx`
   - Impact: Landscape-to-portrait rotation on mobile could show broken canvas or load 121 frames unexpectedly.

2. **Security section visual break specificity** (Screen 11)
   The spec recommends a "visual break between cards 2 and 3" but doesn't define the treatment. Specify: `mt-4` extra spacing on card 3 (gap increases from 16px to 32px between cards 2-3), or a `border-t border-warm-700/10` hairline divider.
   - File: `security.tsx`
   - Impact: Without specificity, the implementer may skip the break entirely or choose an inconsistent treatment.

3. **ScrollDots IntersectionObserver thresholds** (Screen 07)
   Specify: `threshold: 0.6` (card is 60% visible = active). Use `rootMargin: "0px -10% 0px -10%"` to account for peek area. No debouncing needed -- IntersectionObserver fires on threshold cross, not continuously.
   - File: `social-proof.tsx` (new `scroll-dots.tsx`)
   - Impact: Without threshold spec, dots may flicker during scroll or not update reliably.

4. **Skip navigation link** (Global)
   Add a visually-hidden skip-nav link as the first focusable element: `<a href="#main-content" class="sr-only focus:not-sr-only ...">Skip to content</a>`. This is a WCAG 2.4.1 (A) requirement that's not currently spec'd and not currently implemented.
   - File: `layout.tsx` or `navbar.tsx`
   - Impact: Keyboard and screen reader users must tab through the entire navbar to reach content.

5. **Landscape orientation** (Global)
   No spec addresses landscape mobile (e.g., 667x375 on iPhone SE). The EditorialBreak `h-[200vh]` becomes `h-[750px]` in landscape -- still reasonable. But the Hero `min-h-[100dvh]` in landscape may push CTA buttons below fold. Add: verify Hero CTA is visible without scroll in landscape at 667x375.
   - File: `hero.tsx`
   - Impact: Landscape visitors may miss the CTA entirely.

---

## Polish (If Time Allows)

1. **Scroll-to-top button on mobile** -- For a 12-section single-page site, consider a floating "back to top" button that appears after 2+ screens of scroll. Matches the Navbar floating pill pattern (glassmorphism, blur). `sm:hidden` to keep desktop clean.

2. **ProofBar alternative layout consideration** -- The spec recommends stacked `grid-cols-1` but notes a compressed 3-col alternative. During build, test the stacked layout at 375px (iPhone) -- if it feels too tall (3 stacked rows with dividers), the compressed 3-col with `text-lg` may work at 375px+ even if it fails at 320px. Consider: `grid-cols-1` at 320-374px, `grid-cols-3` at 375px+.

3. **SocialProof carousel edge case** -- The peek width `w-[78vw]` is calculated for 320px (250px card + 50px peek). At 640px (just before `sm:` hides the mobile treatment), cards are ~499px wide -- nearly full-width with minimal peek. Consider `w-[78vw] max-w-[320px]` to cap card width and maintain visible peek at larger mobile viewports.

4. **Footer Legal links on mobile** -- Screen 08 suggests horizontal inline links ("Privacidade . Termos . AML . Regulacao") but doesn't commit. At full width, vertical is fine and more tappable. Recommend keeping vertical for consistency with Produto/Recursos columns.

---

## Cross-References

- Accessibility fixes: [accessibility-fixes.md](./accessibility-fixes.md)
- Critique details: [critique.md](./critique.md)
- Design specs: [../design/INDEX.md](../design/INDEX.md)
