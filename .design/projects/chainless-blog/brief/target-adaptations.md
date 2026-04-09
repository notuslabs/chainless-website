# Target Adaptations
> Phase: brief | Project: chainless-blog | Generated: 2026-04-08

---

## Token Adaptations

The blog introduces a long-form reading context that the landing page doesn't have. Most brand tokens apply directly, but prose typography needs project-specific treatment.

### Typography Extensions

| Token | Value | Rationale |
|-------|-------|-----------|
| `--prose-max-width` | `65ch` | Optimal reading line length for 18px body |
| `--prose-paragraph-spacing` | `28px` (`space-lg`) | One body line-height between paragraphs |
| `--prose-heading-margin-top` | `56px` (`space-2xl`) | Clear section breaks before H2/H3 |
| `--prose-heading-margin-bottom` | `14px` (`space-md`) | Tight heading-to-body coupling |
| `--prose-list-indent` | `28px` (`space-lg`) | One line-height indent for lists |
| `--prose-blockquote-border` | `3px solid var(--color-yellow-500)` | Brand accent on blockquote left border |
| `--prose-code-bg` | `var(--color-dark-700)` | Elevated surface for inline code |
| `--prose-code-block-bg` | `var(--color-dark-600)` | Deeper surface for code blocks |

### Pillar Color Accents

Each content pillar gets a subtle accent color for tags and category indicators:

| Pillar | Accent | Token | Rationale |
|--------|--------|-------|-----------|
| Soberania Digital | `var(--color-yellow-500)` | `--pillar-sovereignty` | Brand yellow — sovereignty is the core message |
| Crescimento Patrimonial | `var(--color-success)` | `--pillar-wealth` | Green — growth, positive yields |
| Vida Financeira Prática | `var(--color-info)` | `--pillar-practical` | Blue — utility, everyday tools |

Usage: pillar tag background (10% opacity), pillar tag text, article hero accent line.

### Surface Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--surface-article` | `var(--color-dark-500)` | Article page background (matches landing) |
| `--surface-toc` | `var(--color-dark-600)` | TOC sidebar background |
| `--surface-tldr` | `var(--color-dark-700)` | TL;DR box background |
| `--surface-callout` | `var(--color-dark-700)` | Info/warning callout background |

---

## Component Adaptations

### DoppelrandCard → Blog variants

The Doppelrand pattern needs two blog-specific variants beyond the standard card:

| Variant | Adaptation | Ref |
|---------|-----------|-----|
| **Article card** | Narrower padding (`p-6` inner), image slot at top, pillar tag overlay | Extends `doppelrand.md` |
| **TL;DR card** | Full-width, no hover lift, yellow-500 left accent border (3px), compact padding | New variant |
| **CTA card** | Wider, centered content, yellow CTA button, gradient bg shift | Reuses landing CTA pattern |

### ArticleBody — Prose Styling

Maps to Tailwind `@apply` prose styles. Key adaptations from the brand type scale:

| Element | Font | Size | Weight | Color |
|---------|------|------|:------:|-------|
| H2 | Switzer | `clamp(1.5rem, 1.17rem + 1.4vw, 2.25rem)` (H3 scale) | 600 | `text-[#FAFAF8]` → `text-text-primary` |
| H3 | Switzer | `clamp(1.25rem, 1.03rem + 0.9vw, 1.75rem)` (H4 scale) | 600 | `text-text-primary` |
| H4 | Switzer | `1.375rem` (H5 scale) | 600 | `text-text-primary` |
| Body | Switzer | `18px` | 400 | `text-text-primary` opacity 0.85 |
| Body link | — | — | 500 | `text-yellow-500` underline offset 3px |
| Blockquote | Zodiak | `21px` (Body Large) | 300 | `text-text-primary` opacity 0.7 |
| Code inline | IBM Plex Mono | `15px` | 400 | `text-yellow-400` on `--prose-code-bg` |
| Code block | IBM Plex Mono | `15px` | 400 | `text-text-primary` on `--prose-code-block-bg` |
| Caption | Switzer | `13px` | 400 | `text-warm-400` |
| Table header | Switzer | `13px` (Overline) | 600 | `text-warm-300` uppercase |
| Table cell | Switzer | `15px` (Body Small) | 400 | `text-text-primary` opacity 0.85 |

### TableOfContents

| Property | Desktop | Mobile |
|----------|---------|--------|
| Position | Sticky sidebar, `top: 96px` | Collapsible drawer below hero |
| Width | `240px` fixed | Full-width |
| Active indicator | Yellow-500 left border (2px) | Same |
| Scroll tracking | IntersectionObserver on H2/H3 | Same |
| Animation | FadeUp on mount | SlideDown on expand |

### PillarFilter

| Property | Value |
|----------|-------|
| Layout | Horizontal pill tabs, scroll on mobile |
| Active state | Filled pill with pillar accent color |
| Inactive state | Ghost pill, `ring-1 ring-white/[0.08]` |
| Transition | `EASE_PREMIUM`, 300ms background-color |

### Pagination

| Property | Value |
|----------|-------|
| Style | Numbered pages, prev/next arrows |
| Active page | `bg-yellow-500 text-dark-500` |
| Inactive page | `text-warm-400 hover:text-text-primary` |
| URL pattern | `/blog?page=2` or `/blog/page/2` |

---

## Platform Considerations

### Reading Experience Priorities

1. **Mobile (320–640px):** Single column, no TOC sidebar, collapsible TOC above content. Body 18px — never reduce.
2. **Tablet (640–1024px):** Single column with optional TOC sidebar at wider end. Article cards 2-col.
3. **Desktop (1024+):** Article body + sticky TOC sidebar. Article cards 3-col. Max prose width 65ch.

### Performance

- Articles are text-heavy — should score 95+ Performance on Lighthouse
- Lazy-load images below fold
- Preload hero image
- JSON-LD injected via Next.js metadata API
- No client-side JS for core reading experience (TOC tracking is the only interactive piece)

---

## Implementation Target Mapping

| Design Component | Implementation |
|-----------------|----------------|
| Article layout | Next.js page component (`/blog/[slug]/page.tsx`) |
| Blog listing | Next.js page component (`/blog/page.tsx`) |
| MDX rendering | `next-mdx-remote` or `@next/mdx` |
| Prose styles | Tailwind `@apply` in `globals.css` or scoped prose class |
| JSON-LD | Next.js `metadata` export + `<script type="application/ld+json">` |
| TOC scroll tracking | Client component with IntersectionObserver |
| Pillar filtering | URL search params + server component filtering |
| Pagination | URL search params, server-rendered |
| Image optimization | Next.js `<Image>` component |

Ref: brand components at `.design/branding/chainless/patterns/components/`
