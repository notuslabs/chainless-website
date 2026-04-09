# File References
> Phase: brief | Project: chainless-blog | Generated: 2026-04-08

---

## Existing Components to Reuse

| Component | File | Usage in Blog |
|-----------|------|---------------|
| `CTASection` | `landing/src/components/cta-section.tsx` | Bottom CTA on article page |
| `Navbar` | `landing/src/components/navbar.tsx` | Global navigation |
| `Footer` | `landing/src/components/footer.tsx` | Global footer |
| `FadeUp` | `landing/src/components/motion.tsx` | Entrance animations |
| `StaggerContainer` | `landing/src/components/motion.tsx` | Card grid stagger |
| `StaggerItem` | `landing/src/components/motion.tsx` | Card grid stagger |
| `MagneticButton` | `landing/src/components/motion.tsx` | Interactive buttons |
| `EASE_PREMIUM` | `landing/src/components/motion.tsx` | All transitions |
| `ChainlessLogo` | `landing/src/components/chainless-logo.tsx` | Navigation |

## Existing Styles

| Asset | File | Relevance |
|-------|------|-----------|
| Global CSS + tokens | `landing/src/app/globals.css` | All color/font tokens |
| Font loading | `landing/src/app/(root)/layout.tsx` or `[locale]/layout.tsx` | Switzer + Zodiak stacks |
| Legal prose styles | `landing/src/app/globals.css` (`.legal-prose`) | Partial reference for blog prose |

## Existing Fonts

| Font | Files | Status |
|------|-------|--------|
| Switzer | `landing/src/fonts/Switzer-*.woff2` | Loaded, 5 weights |
| Zodiak | `landing/src/fonts/Zodiak-*.woff2` | Loaded, 4 weights |
| IBM Plex Mono | Not present | Needs install — `@fontsource/ibm-plex-mono` or self-hosted woff2 |

## Brand Pattern References

| Document | Path | Relevance |
|----------|------|-----------|
| Typography | `.design/branding/chainless/patterns/foundations/typography.md` | Type scale, font pairing rules |
| Color system | `.design/branding/chainless/patterns/foundations/color-system.md` | All color tokens, dark mode mapping |
| Spacing | `.design/branding/chainless/patterns/foundations/spacing.md` | Spacing scale, section patterns |
| Grid | `.design/branding/chainless/patterns/foundations/grid.md` | Breakpoints, layout patterns |
| Motion | `.design/branding/chainless/patterns/foundations/motion.md` | Animation components, easing |
| Doppelrand | `.design/branding/chainless/patterns/components/doppelrand.md` | Card spec for article cards |
| Classification | `.design/branding/chainless/patterns/components/classification.md` | Cross-cutting fixes needed |

## SEO Content Plan

| Document | Path |
|----------|------|
| Content plan | `.design/projects/chainless-blog/seo-content-plan.md` |
