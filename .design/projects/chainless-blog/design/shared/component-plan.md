# Component Plan
> Phase: design | Project: chainless-blog | Generated: 2026-04-08

---

## Reuse (as-is)

| Component | Source | Screens Used |
|-----------|--------|:------------:|
| `Navbar` | `landing/src/components/navbar.tsx` | Both |
| `Footer` | `landing/src/components/footer.tsx` | Both |
| `CTASection` | `landing/src/components/cta-section.tsx` | Article (global CTA) |
| `FadeUp` | `landing/src/components/motion.tsx` | Both |
| `StaggerContainer` / `StaggerItem` | `landing/src/components/motion.tsx` | Listing (card grid) |
| `MagneticButton` | `landing/src/components/motion.tsx` | Both (CTA buttons) |
| `ScrollProgress` | `landing/src/components/motion.tsx` | Article (reading progress) |

---

## Refactor (needs changes)

| Component | Source | Changes Needed | Screens Used |
|-----------|--------|----------------|:------------:|
| `DoppelrandCard` | Currently copy-pasted in 6 files | Extract to shared component per `doppelrand.md` spec. Add `variant` prop for blog-specific treatments. | Both |

**DoppelrandCard refactor details:**
- Extract the shared outer-shell + inner-core pattern into `components/doppelrand-card.tsx`
- Add `variant?: 'default' | 'light' | 'article' | 'tldr'` prop
- `article` variant: narrower padding (`p-6` inner), optional image slot
- `tldr` variant: no hover lift, yellow-500 left accent border (3px), compact padding
- Add `hover?: boolean` prop (default true for article cards, false for TL;DR)

---

## New (shared — reusable across pages)

| Component | Purpose | Screens Used |
|-----------|---------|:------------:|
| `ArticleCard` | Card for article grid/related posts. Renders inside DoppelrandCard with pillar tag, title, excerpt, meta. | Both |
| `PillarTag` | Small colored label for content pillar. Uses pillar accent color at 10% opacity background. | Both |
| `ArticleMeta` | Author + date + reading time row. IBM Plex Mono for reading time. | Both |

---

## New (local — screen-specific)

| Component | Screen | Purpose |
|-----------|--------|---------|
| `ArticleHero` | Article | Hero section: pillar tag, H1, meta, optional hero image |
| `TldrBox` | Article | Featured snippet summary card. DoppelrandCard `tldr` variant |
| `TableOfContents` | Article | Sticky sidebar (desktop) / collapsible drawer (mobile). IntersectionObserver scroll tracking |
| `ArticleBody` | Article | MDX renderer with prose styles. Wraps `MDXRemote` with custom components |
| `PullQuote` | Article | Zodiak Light editorial quote with yellow left border |
| `CalloutBox` | Article | Info/warning callout with icon and tinted background |
| `FaqAccordion` | Article | Expandable Q&A section. `<details>/<summary>` enhanced with animation |
| `RelatedPosts` | Article | 3-card grid of same-pillar articles |
| `SoftCta` | Article | Contextual "Como a Chainless resolve isso" section with DoppelrandCard |
| `PillarFilter` | Listing | Horizontal pill tabs for pillar filtering |
| `FeaturedArticle` | Listing | Large card for latest/pinned article |
| `Pagination` | Listing | Numbered page navigation with prev/next |
| `BlogHero` | Listing | Page title, description, article count |

---

## Prose Styles (not a component — CSS)

The `ArticleBody` component applies prose styles via a scoped CSS class (`.prose-chainless`) or Tailwind `@apply` in `globals.css`. This handles:

- H2–H4 heading styles with proper spacing
- Paragraph spacing (28px between paragraphs)
- List indentation and markers
- Blockquote with yellow left border
- Inline code background and color
- Code block syntax highlighting
- Table styling with warm borders
- Image captions
- Link styling with yellow underline

This is CSS-level work, not a component — but it's the largest single piece of design-to-code translation.

---

## Dependencies

```
DoppelrandCard (refactor) ──► ArticleCard, TldrBox, SoftCta, FeaturedArticle
ArticleMeta ──────────────► ArticleCard, ArticleHero
PillarTag ─────────────────► ArticleCard, ArticleHero, FeaturedArticle
```

**Build order:**
1. DoppelrandCard (shared component extraction)
2. PillarTag + ArticleMeta (small shared components)
3. ArticleCard (depends on DoppelrandCard + PillarTag + ArticleMeta)
4. Article page components (ArticleHero, TldrBox, TOC, ArticleBody, etc.)
5. Listing page components (BlogHero, PillarFilter, FeaturedArticle, Pagination)
