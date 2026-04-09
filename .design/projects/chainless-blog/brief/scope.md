# Scope
> Phase: brief | Project: chainless-blog | Generated: 2026-04-08

---

## Screen List

| # | Screen | Priority | Purpose |
|---|--------|:--------:|---------|
| 1 | **Article page** | P0 | Long-form content template — the primary SEO surface |
| 2 | **Blog listing** | P0 | Index page with pillar filtering and article cards |

### Screen 1: Article Page (`/blog/[slug]`)

**Purpose:** Render 1,500–2,500 word articles that rank for Portuguese crypto keywords while converting readers to Chainless users.

**Sections (top to bottom):**

1. **Article hero** — pillar tag, H1 (Zodiak 700), author/date/reading time, optional hero image
2. **TL;DR box** — featured snippet capture, visually distinct summary card
3. **Table of contents** — sticky sidebar (desktop), collapsible (mobile), tracks scroll position
4. **Article body** — long-form prose with full typography support:
   - Headings (H2–H4), paragraphs, lists, blockquotes
   - Code blocks (IBM Plex Mono)
   - Inline images with captions
   - Comparison tables (CDI vs DeFi, etc.)
   - Pull quotes (Zodiak Light, editorial moments)
   - Info/warning callout boxes
5. **"Como a Chainless resolve isso"** — soft CTA section with Doppelrand card
6. **FAQ section** — expandable Q&A (maps to FAQPage schema)
7. **Related posts** — 2–3 article cards from same pillar cluster
8. **Global CTA** — reuse landing CTASection component

**SEO metadata:**
- Article JSON-LD structured data
- FAQPage JSON-LD (when FAQ section present)
- Open Graph (title, description, image, type: article)
- Twitter Card (summary_large_image)
- Canonical URL
- Reading time in meta

### Screen 2: Blog Listing (`/blog`)

**Purpose:** Browse and filter articles by pillar. Entry point for organic and direct traffic.

**Sections (top to bottom):**

1. **Page hero** — "Blog" heading, brief description, total article count
2. **Pillar filter bar** — horizontal tabs: All / Soberania / Crescimento / Prática
3. **Featured article** — latest or pinned article, large card with image
4. **Article grid** — responsive card grid (1-col mobile, 2-col tablet, 3-col desktop)
5. **Pagination** — page-based navigation (not infinite scroll — SEO needs discrete URLs)
6. **Newsletter CTA** — optional, bottom of page

**Article card anatomy:**
- Pillar tag (colored)
- Title (H3, Switzer 600)
- Excerpt (2 lines max)
- Author + date + reading time
- Hover: subtle lift + ring glow (Doppelrand language)

---

## Component Scope

### New Components

| Component | Screen | Priority |
|-----------|--------|:--------:|
| `ArticleHero` | Article | P0 |
| `TldrBox` | Article | P0 |
| `TableOfContents` | Article | P0 |
| `ArticleBody` (MDX/prose styles) | Article | P0 |
| `PullQuote` | Article | P1 |
| `CalloutBox` | Article | P1 |
| `FaqAccordion` | Article | P1 |
| `RelatedPosts` | Article | P0 |
| `ArticleCard` | Both | P0 |
| `PillarFilter` | Listing | P0 |
| `FeaturedArticle` | Listing | P1 |
| `Pagination` | Listing | P0 |
| `ArticleMeta` (author/date/time) | Both | P0 |
| `PillarTag` | Both | P0 |

### Reused from Landing

| Component | Usage |
|-----------|-------|
| `CTASection` | Bottom CTA on article page |
| `Navbar` | Global navigation |
| `Footer` | Global footer |
| `FadeUp` / `StaggerContainer` | Entrance animations |
| `DoppelrandCard` (to be created) | Related posts, TL;DR box, CTA card |

---

## Project Boundaries

### In scope
- Article page template (responsive, dark theme)
- Blog listing page with pillar filtering
- Full typography system for long-form prose
- SEO structured data (Article + FAQPage JSON-LD)
- Open Graph / Twitter Card metadata
- Static content rendering (MDX or similar)
- Pillar-based color accents (subtle, not garish)

### Out of scope
- CMS integration (content source TBD — MDX files for now)
- Author pages
- Pillar hub/landing pages (future project)
- Search functionality (future — listing uses filter only)
- Comments/discussion
- Newsletter backend
- RSS feed (trivial to add later)
- Light mode (landing doesn't have it yet)
- i18n (articles will be PT-BR only initially)

---

## Success Criteria

1. Article page scores 90+ on Lighthouse (Performance, Accessibility, SEO, Best Practices)
2. Structured data validates in Google Rich Results Test
3. Typography renders correctly at all breakpoints (320px–2560px)
4. Reading experience matches premium editorial sites (Stripe blog, Linear changelog tier)
5. Article cards are visually consistent with landing page Doppelrand language
6. TOC tracks scroll position accurately on desktop
7. Page loads < 2s on 3G (content is text-heavy, should be fast)

---

## Dependencies

- **Content source:** MDX files in repo (simplest start). No external CMS.
- **Images:** Article hero images and inline images need a hosting strategy (Next.js Image optimization)
- **Fonts:** Switzer, Zodiak, IBM Plex Mono already loaded in landing
- **DoppelrandCard:** Shared component needs to exist (currently copy-pasted in 6 files)

---

## Issue Framing

Suggest shipping as **2 issues / 1 PR:**

| Issue | Scope | Estimate |
|-------|-------|----------|
| **Issue 1: Article page** | ArticleHero, ArticleBody (prose styles), TldrBox, TOC, RelatedPosts, ArticleMeta, PillarTag, FAQ, CTA integration, JSON-LD, OG meta | Largest surface |
| **Issue 2: Blog listing** | PillarFilter, ArticleCard, FeaturedArticle, Pagination, listing layout | Depends on ArticleCard from Issue 1 |

Ship Issue 1 first — it's the SEO surface that matters. Issue 2 can follow in the same PR or separately.
