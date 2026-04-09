# Alternative Directions
> Phase: critique | Project: chainless-mobile | Date: 2026-04-08

---

## Direction 1: Progressive Disclosure Mobile

Instead of showing all 12 sections in a long scroll, collapse secondary sections (Security, BorrowCredit) into expandable accordions on mobile. The mobile page becomes:

1. Hero (full viewport)
2. ProofBar (stacked stats)
3. Philosophy (2 cards)
4. EditorialBreak (static keyframe)
5. YieldSection (primary product)
6. **Collapsed accordion:** "Mais sobre Chainless" containing SpendCredit, BorrowCredit, Security
7. SocialProof (carousel with dots)
8. CTA
9. Footer

**Trade-offs:**
- (+) Dramatically reduces scroll fatigue on mobile (4-5 screens instead of 12)
- (+) Users see CTA faster -- reduces bounce from "this page never ends" fatigue
- (+) Accordion sections still indexable by search engines (content in DOM)
- (-) Requires new accordion component and mobile-specific page structure
- (-) Departs from the "desktop parity" philosophy -- mobile gets a different IA
- (-) Implementation scope grows significantly beyond responsive CSS fixes

## Direction 2: Anchor Navigation Strip

Keep all 12 sections but add a sticky horizontal scroll tab bar below the navbar on mobile. Tabs: Rendimentos | Cartao | Emprestimo | Seguranca. Tapping a tab smooth-scrolls to that section. An active indicator follows scroll position.

```
[Navbar pill]
[Rendimentos | Cartao | Emprestimo | Seguranca]  <-- sticky strip
```

**Trade-offs:**
- (+) Preserves full content while adding navigation agency
- (+) Addresses Help/Documentation heuristic (score 3) -- gives users a mental map
- (+) Reuses existing section IDs and anchor links
- (+) Relatively small implementation scope (1 new component)
- (-) Two sticky bars (navbar + tab strip) consume ~100px of viewport on mobile
- (-) Interaction conflict: scroll-driven active state + tap-to-scroll can fight
- (-) May feel heavy for a marketing landing page (more suited to product/docs)

---

## Recommendation

Neither direction is recommended for this project. The current audit-and-fix approach is the correct scope. These alternatives would be appropriate if post-launch analytics show high mobile bounce rates or low scroll depth. Direction 2 (anchor strip) is the lighter-weight option if needed.
