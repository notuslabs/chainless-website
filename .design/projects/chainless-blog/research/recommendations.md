# Recommendations
> Phase: research | Project: chainless-blog | Generated: 2026-04-08

---

## Adopt

### 1. next-mdx-remote/rsc for content rendering
Content lives in `content/posts/` as data files, not as route pages. `next-mdx-remote/rsc` is the correct tool for this architecture. It renders in Server Components natively and supports the remark/rehype plugin pipeline needed for heading IDs and syntax highlighting.
*Finding: [technical-research.md, MDX Strategy section]*

### 2. Sticky sidebar TOC with IntersectionObserver scroll tracking
None of the analyzed competitors (Stripe, Linear, a16z, Paradigm) implement a sticky TOC despite having long content. This is a genuine UX differentiator. Use `rootMargin: "-80px 0px -70% 0px"` for accurate active heading detection.
*Finding: [ux-patterns.md, Table of Contents Patterns], [competitor-ux.md, Pattern Synthesis]*

### 3. Doppelrand card treatment for TL;DR and CTA sections
The existing `DoppelrandCard` component provides the double-border visual language. Apply it to TL;DR boxes, the soft CTA section, and related post cards. This creates visual consistency with the landing page.
*Finding: [ux-patterns.md, TL;DR Card Patterns]*

### 4. BlogPosting + FAQPage dual JSON-LD schema
Render two `<script type="application/ld+json">` blocks per article: one BlogPosting (required: headline, author, datePublished, image) and one FAQPage (mainEntity array of Question/Answer pairs). Despite Google's FAQ rich result deprecation, FAQPage adoption increased through 2024 — the structured data still carries SEO signal.
*Finding: [reference-specs.md, Article JSON-LD], [content-strategy.md, FAQ Schema Strategy]*

### 5. MotionConfig reducedMotion="user" at layout level
Wrap the app in `<MotionConfig reducedMotion="user">` to automatically strip transform/layout animations for users who prefer reduced motion, while preserving opacity transitions. The existing FadeUp component works correctly under this mode.
*Finding: [accessibility-patterns.md, Reduced Motion]*

### 6. Page-based pagination (not infinite scroll)
a16z uses infinite scroll and it is SEO-hostile. Paradigm uses numbered pages with discrete URLs — Google can crawl each page independently. Use `/blog?page=2` pattern, 9 articles per page.
*Finding: [competitor-ux.md, a16z and Paradigm analysis]*

### 7. generateStaticParams with dynamicParams = false
Pre-render all 30 articles at build time with zero runtime cost. Unknown slugs return 404. Simple, fast, correct for a content site.
*Finding: [technical-research.md, Static Generation]*

---

## Adapt

### 8. @tailwindcss/typography prose styles — start with plugin, consider hand-rolling
Start with `@tailwindcss/typography` + `prose-invert` + custom CSS variable overrides for the dark warm theme. If the overrides become unwieldy (likely, given the Zodiak/Switzer/IBM Plex Mono font mixing), switch to hand-rolled prose styles. The plugin saves time on list/table/blockquote defaults but the heading and code styles will need full overrides anyway.
*Finding: [technical-research.md, Tailwind v4 Prose section]*

### 9. Stripe's segmented control filter — adapt to horizontal tabs with pillar colors
Stripe uses a neutral segmented control. Chainless should use a similar horizontal tab pattern but apply pillar color accents (yellow/green/blue) to the active tab indicator. This communicates the pillar system visually while maintaining the familiar filter UX.
*Finding: [competitor-ux.md, Stripe listing analysis], [ux-patterns.md, Pillar Filtering]*

### 10. Linear's card line-clamping — adapt with warm type hierarchy
Linear clamps card descriptions to 2-3 lines with `-webkit-line-clamp`. Adopt this pattern but use the Chainless type hierarchy: Switzer 600 for card titles, regular weight for excerpts, IBM Plex Mono for metadata. Linear uses Inter for everything — Chainless's font mixing creates stronger visual hierarchy.
*Finding: [competitor-ux.md, Linear analysis]*

### 11. Reading time display — adapt WPM for Portuguese
Standard English reading time calculators use 250 WPM. Portuguese averages ~220 WPM due to longer word lengths. Use 220 WPM and display as "X min de leitura" (PT-BR convention).
*Finding: [content-strategy.md, Reading Time]*

---

## Avoid

### 12. Avoid complex filter panels (a16z pattern)
a16z's three-section filter panel (Categories + Format + Tags) is engineered for 200+ articles. Chainless launches with 30 articles across 3 pillars. A simple horizontal tab bar is sufficient and avoids UI bloat.
*Finding: [competitor-ux.md, a16z analysis]*

### 13. Avoid pure black backgrounds
Linear uses #08090a (near pure black). This is too cool and too dark for extended reading. Chainless's #1C1B19 warm dark is significantly better for long-form content readability. Material Design research confirms that pure black causes halo effects.
*Finding: [ux-patterns.md, Dark Theme Typography]*

### 14. Avoid inline TOC (within article body)
Some blogs place the TOC as a list within the article body itself. This wastes prime content real estate and cannot track scroll position. The sticky sidebar pattern (desktop) + collapsible disclosure (mobile) is strictly superior for articles above 1,500 words.
*Finding: [ux-patterns.md, Table of Contents Patterns]*

### 15. Avoid multiple CTAs per article
The article page has two CTA touchpoints: the contextual soft CTA ("Como a Chainless resolve isso") and the global CTA at the bottom. Do not add more — no inline banners, no sidebar CTAs, no popups. Premium editorial feel depends on restraint.
*Finding: [ux-patterns.md, Conversion CTA Patterns], [content-strategy.md, CTA Placement Rules]*

### 16. Avoid aria-live on TOC active state changes
When the TOC highlights a new heading during scroll, do NOT announce it via aria-live. This would interrupt screen reader users with constant announcements as they read. The active state is visual feedback only — screen reader users navigate by heading level, not by TOC highlighting.
*Finding: [accessibility-patterns.md, TOC Screen Reader Behavior]*
