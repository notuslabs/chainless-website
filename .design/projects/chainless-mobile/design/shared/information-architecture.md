# Information Architecture
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Content Hierarchy (Mobile Scroll Order)

The landing page is a single-page scroll. On mobile, every section stacks vertically. The IA doesn't change — only the visual treatment and spacing adapts.

```
1. Navbar (fixed, floating pill)
2. Hero (full viewport)
3. ProofBar (social proof metrics)
4. Philosophy (brand story, 2 pillar cards)
5. EditorialBreak (cinematic scroll moment)
6. YieldSection (yield products)
7. SpendCredit (card/spending)
8. BorrowCredit (loan products)
9. Security (4 security layers)
10. SocialProof (3 testimonials)
11. CTASection (download CTA)
12. Footer (links + legal)
```

## Mobile-Specific Grouping

The audit identifies 3 bounded issue groups:

| Group | Sections Affected | Change Type |
|-------|-------------------|-------------|
| Global padding/spacing | All 12 sections | CSS class updates |
| Critical section fixes | ProofBar, Hero, SpendCredit, Philosophy, Footer, Navbar, SocialProof | Layout + color + touch targets |
| Performance optimization | EditorialBreak | JS logic + asset strategy |

## Navigation Impact

No navigation structure changes. The floating pill navbar remains identical. Mobile menu items point to the same section anchors. The audit only affects within-section layout and spacing.
