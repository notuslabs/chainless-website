# Build Log

> Phase: build | Project: chainless-blog | Generated: 2026-04-08

---

## Implementation Summary

Built a complete blog system for Chainless: article page (`/blog/[slug]`) and listing page (`/blog`). Two screens, 16 new components, MDX content infrastructure, prose typography system, SEO structured data, and full accessibility.

Architecture: Server Components with `next-mdx-remote/rsc` for MDX rendering. Static generation via `generateStaticParams`. Client-side filtering/pagination for listing (compatible with `output: "export"`). Doppelrand card system extended with blog variants.

## Files Created

| File | Purpose |
|------|---------|
| `src/components/doppelrand-card.tsx` | Extended with `article` and `tldr` variants |
| `src/components/blog/pillar-tag.tsx` | Colored pill label for content pillars |
| `src/components/blog/article-meta.tsx` | Author + date + reading time row |
| `src/components/blog/article-card.tsx` | Blog card composing DoppelrandCard + PillarTag + ArticleMeta |
| `src/components/blog/article-hero.tsx` | Article hero section with Zodiak H1 |
| `src/components/blog/tldr-box.tsx` | TL;DR summary card (DoppelrandCard tldr variant) |
| `src/components/blog/table-of-contents.tsx` | Sticky sidebar TOC with IntersectionObserver |
| `src/components/blog/pull-quote.tsx` | Zodiak Light editorial blockquote |
| `src/components/blog/callout-box.tsx` | Info/warning callout with Phosphor icons |
| `src/components/blog/faq-accordion.tsx` | Expandable Q&A with native details/summary |
| `src/components/blog/soft-cta.tsx` | Contextual CTA with atmospheric glow |
| `src/components/blog/related-posts.tsx` | 3-card grid of same-pillar articles |
| `src/components/blog/back-to-top.tsx` | Floating scroll-to-top button |
| `src/components/blog/blog-hero.tsx` | Listing page hero with article count |
| `src/components/blog/blog-listing.tsx` | Client orchestrator for filter + grid + pagination |
| `src/components/blog/pillar-filter.tsx` | Horizontal pill filter tabs |
| `src/components/blog/featured-article.tsx` | Large featured article card |
| `src/components/blog/pagination.tsx` | Numbered page navigation |
| `src/lib/blog.ts` | MDX utilities (getAllPosts, getPost, extractHeadings, etc.) |
| `src/app/[locale]/blog/layout.tsx` | Blog route layout |
| `src/app/[locale]/blog/page.tsx` | Blog listing page |
| `src/app/[locale]/blog/[slug]/page.tsx` | Blog article page |
| `content/posts/o-que-e-autocustodia.mdx` | Sample article with frontmatter |

## Files Modified

| File | Changes |
|------|---------|
| `src/app/globals.css` | Added `.prose-chainless` typography system (~180 lines) + `scroll-padding-top: 6rem` |
| `src/components/doppelrand-card.tsx` | Added `article` and `tldr` variant support |

## Component Map

| Design Component | Codebase File | Status |
|-----------------|---------------|--------|
| DoppelrandCard (blog variants) | `src/components/doppelrand-card.tsx` | complete |
| PillarTag | `src/components/blog/pillar-tag.tsx` | complete |
| ArticleMeta | `src/components/blog/article-meta.tsx` | complete |
| ArticleCard | `src/components/blog/article-card.tsx` | complete |
| ArticleHero | `src/components/blog/article-hero.tsx` | complete |
| TldrBox | `src/components/blog/tldr-box.tsx` | complete |
| TableOfContents | `src/components/blog/table-of-contents.tsx` | complete |
| PullQuote | `src/components/blog/pull-quote.tsx` | complete |
| CalloutBox | `src/components/blog/callout-box.tsx` | complete |
| FaqAccordion | `src/components/blog/faq-accordion.tsx` | complete |
| SoftCta | `src/components/blog/soft-cta.tsx` | complete |
| RelatedPosts | `src/components/blog/related-posts.tsx` | complete |
| BackToTop | `src/components/blog/back-to-top.tsx` | complete |
| BlogHero | `src/components/blog/blog-hero.tsx` | complete |
| BlogListing | `src/components/blog/blog-listing.tsx` | complete |
| PillarFilter | `src/components/blog/pillar-filter.tsx` | complete |
| FeaturedArticle | `src/components/blog/featured-article.tsx` | complete |
| Pagination | `src/components/blog/pagination.tsx` | complete |
| ArticleBody (prose styles) | `src/app/globals.css` (.prose-chainless) | complete |

## Patterns Applied

- **Server/Client split:** Server Components for all static content; Client Components only for interactivity (TOC scroll tracking, filter state, back-to-top, FAQ chevron)
- **MDX-as-data:** Content in `content/posts/`, rendered via `next-mdx-remote/rsc` in Server Components
- **Static export compatibility:** All filter/pagination is client-side via `useSearchParams`
- **Doppelrand system:** Extended existing card with blog variants rather than creating separate components
- **Component composition:** ArticleCard composes DoppelrandCard + PillarTag + ArticleMeta

## Dependencies Added

- `next-mdx-remote@^6.0.0` — MDX rendering in RSC
- `remark-gfm@^4.0.1` — GitHub-flavored markdown
- `rehype-slug@^6.0.0` — Auto heading IDs for TOC
- `gray-matter` — Frontmatter parsing

## Known Gaps

- **IBM Plex Mono not loaded:** `font-mono` falls back to system monospace. Need to add IBM Plex Mono woff2 files and load via `next/font/local`
- **Hardcoded semantic hex colors:** `#3DA66A`, `#4A90DA`, `#D4890D` used inline in pillar-tag and callout-box — no Tailwind utility for semantic colors
- **Single sample article:** Only one MDX file exists. Need to create 2-3 more to test pagination and filtering
- **Newsletter CTA:** Marked P2, not implemented
- **RSS feed:** Out of scope, trivial to add later

## Screen Status

| # | Screen | Status | Notes |
|---|--------|--------|-------|
| 01 | Article Page | complete | All sections, JSON-LD, prose styles, back-to-top |
| 02 | Blog Listing | complete | Filter, featured, grid, pagination, empty state |
