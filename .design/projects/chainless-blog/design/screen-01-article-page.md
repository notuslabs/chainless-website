# Screen 01: Article Page
> Phase: design | Project: chainless-blog | Generated: 2026-04-08
> Route: `/blog/[slug]`

---

## Purpose

The primary content surface for Chainless's SEO strategy. Renders long-form articles (1,500-2,500 words) that educate readers about crypto sovereignty, DeFi yields, and practical financial tools — then converts them to Chainless users through contextual CTAs.

**User flow position:** Entry point via Google search (primary) or blog listing click (secondary). Self-contained — includes its own CTAs, related posts, and FAQ. Readers may never visit the listing page.

---

## Layout

### Section 1: Article Hero

Full-width section on `bg-dark-500`. Content centered within `max-w-4xl`.

```
[Pillar Tag]                    ← PillarTag component, colored pill
                                   e.g., "Soberania Digital" in yellow

# Article H1 Headline           ← Zodiak 700, clamp(2.25rem, 1.7rem + 2.2vw, 3.5rem)
  In Zodiak for editorial        tracking: -0.025em
  weight and ink-trap detail     color: #FAFAF8

[Author avatar] Equipe Chainless · 15 Mar 2026 · 8 min de leitura
                                 ← ArticleMeta component
                                   Author: Switzer 400, warm-300
                                   Date: Switzer 400, warm-400
                                   Reading time: IBM Plex Mono 400, warm-400
```

**Optional hero image:** When present, displayed below the meta row inside a rounded-2xl container with `overflow-hidden`. Aspect ratio 16:9. Dark gradient overlay at bottom edge (transparent -> dark-500, 30% height) to blend into the body. Image loaded with `priority` via Next.js `<Image>`.

**Spacing:** Section padding `pt-32 pb-16` (hero-to-content transition). Pillar tag to H1: `mt-6`. H1 to meta: `mt-8`.

---

### Section 2: TL;DR Box

DoppelrandCard `tldr` variant. Full width within the content column (`max-w-prose`). Appears below hero, above body.

```
┌─────────────────────────────────────────┐  Outer shell (Doppelrand)
│ ┌─────────────────────────────────────┐ │
│ │ ▎ TL;DR                            │ │  ← 3px yellow-500 left border
│ │ ▎                                   │ │     on inner core
│ │ ▎ • Bullet point summary           │ │
│ │ ▎ • 2-4 points, concise            │ │  ← Switzer 400, 18px
│ │ ▎ • Captures the core thesis       │ │     text-[#FAFAF8]/85
│ │ ▎                                   │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**Label:** "TL;DR" in IBM Plex Mono 600, 13px, uppercase, `letter-spacing: 0.1em`, `text-yellow-500`. Maps to the Overline type level.

**No hover effect** — this is a static content card, not a link.

**Spacing:** `mt-12 mb-16` from hero and body.

---

### Section 3: Content Area (Desktop Layout)

Desktop (>=1024px) uses a two-column layout:

```
┌────────────────────────────────────────────────────────────────┐
│  max-w-7xl mx-auto px-6                                        │
│                                                                │
│  ┌──────────────────────────────────┐  ┌────────────────────┐  │
│  │  Article Body                     │  │  TOC Sidebar       │  │
│  │  max-w-prose (65ch)               │  │  w-60 (240px)      │  │
│  │                                   │  │  sticky top-24      │  │
│  │  [H2 heading]                     │  │                    │  │
│  │  [Paragraph text...]              │  │  Indice            │  │
│  │  [Paragraph text...]              │  │  ─────────         │  │
│  │                                   │  │  ● H2 heading 1   │  │
│  │  [H3 subheading]                 │  │    H3 sub 1a       │  │
│  │  [Paragraph text...]              │  │    H3 sub 1b       │  │
│  │                                   │  │  ○ H2 heading 2   │  │
│  │  [Pull quote in Zodiak Light]     │  │    H3 sub 2a       │  │
│  │                                   │  │  ○ H2 heading 3   │  │
│  │  [Code block]                     │  │                    │  │
│  │                                   │  │                    │  │
│  │  [Comparison table]               │  │                    │  │
│  │                                   │  │                    │  │
│  │  [Callout box - info]             │  │                    │  │
│  │                                   │  │                    │  │
│  └──────────────────────────────────┘  └────────────────────┘  │
│                                                                │
│  gap-12 between content and TOC                                │
└────────────────────────────────────────────────────────────────┘
```

Mobile/tablet: single column, TOC as collapsible drawer above body.

---

### Article Body Typography

**Prose class:** `.prose-chainless` applied to the MDX container.

| Element | Font | Size | Weight | Color | Spacing |
|---------|------|------|:------:|-------|---------|
| H2 | Switzer | clamp(1.5rem, 1.17rem+1.4vw, 2.25rem) | 600 | `#FAFAF8` | `mt-14 mb-3.5` (56px top, 14px bottom) |
| H3 | Switzer | clamp(1.25rem, 1.03rem+0.9vw, 1.75rem) | 600 | `#FAFAF8` | `mt-10 mb-3` (40px top, 12px bottom) |
| H4 | Switzer | 1.375rem | 600 | `#FAFAF8` | `mt-8 mb-2` |
| p | Switzer | 18px | 400 | `rgba(250,250,248,0.85)` | `mb-7` (28px between paragraphs) |
| a | — | — | 500 | `text-yellow-500` | underline, `underline-offset-[3px]`, `decoration-yellow-500/40` |
| a:hover | — | — | — | `text-yellow-400` | `decoration-yellow-400/60` |
| ul/ol | Switzer | 18px | 400 | `rgba(250,250,248,0.85)` | `pl-7` (28px indent), `mb-7` |
| li | — | — | — | — | `mb-2` between items |
| blockquote | Zodiak | 21px (Body Large) | 300 | `rgba(250,250,248,0.7)` | `border-l-[3px] border-yellow-500 pl-6 my-10` |
| code (inline) | IBM Plex Mono | 15px | 400 | `text-yellow-400` | `bg-dark-700 px-1.5 py-0.5 rounded` |
| pre (block) | IBM Plex Mono | 15px | 400 | `#FAFAF8` | `bg-dark-600 rounded-lg p-6 my-8 overflow-x-auto` |
| img | — | — | — | — | `rounded-xl my-8`, full width within prose |
| figcaption | Switzer | 13px | 400 | `text-warm-400` | `mt-3 text-center` |
| table | Switzer | 15px body, 13px header | 400/600 | header: `warm-300`, body: `rgba(250,250,248,0.85)` | `border-warm-700` |
| hr | — | — | — | `border-warm-700/50` | `my-12` |

---

### Section 4: Pull Quote (within body)

```
     ▎  "A verdadeira soberania financeira comeca
     ▎   quando voce controla suas proprias chaves."
     ▎
```

- Font: Zodiak Light (300), 21px
- Color: `rgba(250,250,248,0.7)`
- Left border: 3px solid `yellow-500`
- Padding-left: 24px (`pl-6`)
- Max usage: 1 per 600-800 words

---

### Section 5: Callout Box (within body)

Two variants: `info` and `warning`.

```
┌──────────────────────────────────────────┐
│ ℹ️ Info callout heading                    │  ← Phosphor Info icon (duotone)
│                                            │     Switzer 600, 15px
│ Callout body text explaining a concept     │     Switzer 400, 15px
│ in detail when needed.                     │     text-[#FAFAF8]/75
└──────────────────────────────────────────┘
```

- Background: `bg-dark-700` (info) or `bg-dark-700` (warning)
- Left border: 3px solid `info` color or `warning` color
- Border radius: `rounded-lg`
- Padding: `p-5`
- Icon: Phosphor `Info` (duotone) for info, `Warning` (duotone) for warning
- Icon color: `text-info` or `text-warning`

---

### Section 6: Soft CTA — "Como a Chainless resolve isso"

DoppelrandCard with centered content. Appears after the main article body, before FAQ.

```
┌─────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐ │
│ │                                         │ │
│ │   Como a Chainless resolve isso         │ │  ← Switzer 600, H4 scale
│ │                                         │ │
│ │   1-2 sentences connecting the article  │ │  ← Switzer 400, 18px
│ │   topic to the Chainless product.       │ │     text-[#FAFAF8]/75
│ │                                         │ │
│ │        [Veja como funciona →]           │ │  ← MagneticButton, yellow-500 bg
│ │                                         │ │     dark-500 text, rounded-full
│ │                                         │ │     ArrowRight icon (bold, 15px)
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

**Spacing:** `mt-16 mb-12`

**Atmospheric glow:** Subtle yellow glow orb behind the card, `bg-yellow-500/[0.015] blur-[180px]`, 400x400px, positioned top-right.

---

### Section 7: FAQ Accordion

```
## Perguntas frequentes              ← Switzer 600, H3 scale

┌──────────────────────────────────────────┐
│ ▶ O que e autocustodia cripto?           │  ← summary: Switzer 500, 18px
├──────────────────────────────────────────┤     #FAFAF8
│   Autocustodia cripto e o modelo em que  │  ← answer: Switzer 400, 16px
│   voce mesmo controla as chaves...       │     rgba(250,250,248,0.75)
└──────────────────────────────────────────┘
┌──────────────────────────────────────────┐
│ ▶ Qual a diferenca entre custodia...     │  ← collapsed by default
└──────────────────────────────────────────┘
```

- Container: no Doppelrand — simple bordered sections
- Question border: `border-b border-warm-700/30`
- Question padding: `py-5 px-0`
- Answer padding: `pb-5 pt-2`
- Chevron icon: Phosphor `CaretDown` (bold, 16px), rotates 180deg on open
- All FAQ content visible in DOM for SEO (not lazy-loaded)
- Maps directly to FAQPage JSON-LD schema

---

### Section 8: Related Posts

```
## Leia tambem                       ← Switzer 600, H3 scale

[ArticleCard]  [ArticleCard]  [ArticleCard]
```

- 3 cards from the same pillar cluster
- Uses the shared `ArticleCard` component inside `DoppelrandCard`
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`
- StaggerContainer entrance animation (120ms stagger)
- Section spacing: `py-16`

---

### Section 9: Global CTA

Reuses the landing `CTASection` component without modification. Provides the brand-level conversion catch-all for readers who didn't convert at the soft CTA.

---

## States

### Default
Full article rendered with all sections visible. TOC tracks scroll position. Reading progress bar active.

### Loading
- Skeleton: Article hero shows shimmer placeholder for pillar tag, H1 (2 lines), meta row
- Body: 8-10 shimmer lines of varying widths
- TOC: 5 shimmer lines
- Uses `bg-dark-700/50` shimmer with `animate-pulse`

### Error
- Full-page error state: "Artigo nao encontrado"
- Switzer 400, centered text
- Link back to `/blog`
- Returns 404 status code

### Empty
Not applicable — articles are statically generated. If the slug doesn't match, it's a 404.

---

## SEO Metadata

```tsx
// generateMetadata output
{
  title: `${post.title} | Chainless Blog`,
  description: post.excerpt,
  openGraph: {
    type: "article",
    title: post.title,
    description: post.excerpt,
    images: [{ url: post.heroImage, width: 1200, height: 630 }],
    publishedTime: post.date,
    locale: "pt_BR",
    siteName: "Chainless",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: `https://chainless.com/blog/${post.slug}`,
  },
}
```

**JSON-LD:** Two `<script type="application/ld+json">` blocks:
1. `BlogPosting` — headline, author, datePublished, image, wordCount, inLanguage, articleSection
2. `FAQPage` — mainEntity array of Question/Answer pairs (when FAQ section present)

---

## Accessibility

### Landmark Regions
- `<header>` — Navbar
- `<nav aria-label="Indice do artigo">` — TOC sidebar / drawer
- `<main>` — Article content (hero through FAQ)
- `<aside aria-label="Artigos relacionados">` — Related posts
- `<footer>` — Global CTA + Footer

### Heading Hierarchy
```
<h1> Article title (one per page)
  <h2> Body section headings
    <h3> Body subsection headings
      <h4> Body sub-subsection headings
  <h2> Perguntas frequentes
  <h2> Leia tambem
```

### Focus Management
- Skip link: "Ir para o conteudo" targets `<main>`
- TOC links: focusable, `role="navigation"`, heading links scroll to target
- FAQ accordion: `<details>/<summary>` provides native keyboard support (Enter/Space to toggle)
- All interactive elements have visible focus ring: `ring-2 ring-yellow-500 ring-offset-2 ring-offset-dark-500`

### Screen Reader
- Hero image: descriptive `alt` text
- PillarTag: `aria-label="Categoria: Soberania Digital"`
- Reading time: "8 minutos de leitura" (not "8 min")
- TOC active state: NOT announced via aria-live (visual only)
- Code blocks: `role="code"` with language label

### Dynamic Type / Zoom
- All text in rem/clamp — scales with browser zoom
- Layout reflows correctly at 200% zoom (320px equivalent)
- No content clipped or overlapping at any zoom level
- Text spacing overrides work per WCAG SC 1.4.12

---

## Image Resources

### Hero Image (optional)
- **Type:** Photography or CSS gradient (per-article decision)
- **Treatment:** `rounded-2xl overflow-hidden`, dark gradient bottom fade
- **Aspect ratio:** 16:9 at 1200x675px (matches OG image)
- **Fallback:** When no hero image, hero section is text-only (no placeholder)

### Inline Article Images
- **Type:** Screenshots, diagrams, charts
- **Treatment:** `rounded-xl`, optional caption below
- **Size:** Max width within prose container (65ch equivalent in px)
- **Loading:** `loading="lazy"` for all below-fold images

### No Decorative Images
The article page is content-first. No atmospheric glows on the body area, no mesh gradients, no decorative orbs. The only atmospheric element is the subtle glow behind the soft CTA card. This is intentional — long-form reading demands a calm visual environment.
