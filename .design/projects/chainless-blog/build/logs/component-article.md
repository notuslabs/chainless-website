# component-article build log

Date: 2026-04-08

## Components built

All 8 article blog components written to `/landing/src/components/blog/`.

### ArticleHero (`article-hero.tsx`)
- Server component
- Props: title, pillar, author, date, readingTime, heroImage?, heroImageAlt?
- Layout: PillarTag → H1 (Zodiak 400, clamp fluid) → ArticleMeta → optional hero image
- Hero image uses Next.js `<Image priority fill>` with dark gradient bottom fade, `aspect-video rounded-2xl`
- Spacing: pt-32 pb-16, mt-6 pillar→h1, mt-8 h1→meta

### TldrBox (`tldr-box.tsx`)
- Server component
- Wraps DoppelrandCard variant="tldr" hover={false}
- Yellow left border (border-l-[3px] border-yellow-500) inside inner div
- Label: IBM Plex Mono (font-mono) 600, 13px, uppercase, tracking-[0.1em], text-yellow-500
- Margin: mt-12 mb-16

### TableOfContents (`table-of-contents.tsx`)
- Client component ("use client")
- Desktop (>=1024px): sticky sidebar w-60, sticky top-24, max-h scroll
- Mobile (<1024px): collapsible drawer, starts collapsed, toggle button "Índice" with CaretDown icon
- IntersectionObserver rootMargin: "-80px 0px -70% 0px"
- Active state: text-yellow-500 border-l-2 border-yellow-500
- Escape key closes drawer and returns focus to trigger button
- `<nav aria-label="Índice do artigo">`

### PullQuote (`pull-quote.tsx`)
- Server component
- Zodiak Light (font-serif font-light), 21px, text-text-primary/70
- Left border: border-l-[3px] border-yellow-500 pl-6
- Margin: my-10
- `.pull-quote` CSS class applied (text-wrap: pretty; hanging-punctuation)

### CalloutBox (`callout-box.tsx`)
- Server component (imports from @phosphor-icons/react/dist/ssr for SSR safety)
- Props: type ('info'|'warning'), title?, children
- bg-dark-700, rounded-lg, p-5, border-l-[3px]
- info border: #4A90DA (text-info icon), warning border: #D4890D (text-warning icon)
- Phosphor Info/Warning weight="duotone"
- Title: Switzer 600, 15px; body: Switzer 400, 15px, text-text-primary/75

### FaqAccordion (`faq-accordion.tsx`)
- Client component (for chevron animation via group-open CSS)
- Native `<details>/<summary>` for a11y
- Question: Switzer 500, 18px; Answer: Switzer 400, 16px, text-text-primary/75
- CaretDown bold 16px, rotates 180deg on open via group-open:rotate-180
- Heading: "Perguntas frequentes" as H2, Switzer 600
- All content visible in DOM (no lazy load)

### SoftCta (`soft-cta.tsx`)
- Client component (MagneticButton requires client)
- Wraps DoppelrandCard hover={false}, centered content
- Default heading: "Como a Chainless resolve isso"
- Default ctaText: "Veja como funciona"
- Default ctaHref: Apple App Store
- MagneticButton wrapping yellow pill button with ArrowRight icon
- Atmospheric glow: radial-gradient yellow/0.015, blur 180px, 400x400px, top-right, pointer-events-none
- Margin: mt-16 mb-12

### RelatedPosts (`related-posts.tsx`)
- Server component (StaggerContainer/StaggerItem handle their own client boundary)
- Props: posts array
- `<aside aria-label="Artigos relacionados">`
- Heading: "Leia também" H2, Switzer 600
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
- StaggerContainer with 120ms stagger (staggerDelay=0.12)
- Uses ArticleCard from shared @/components/article-card

## Shared component dependencies (built by parallel agent)
- `@/components/pillar-tag` — PillarTag
- `@/components/article-meta` — ArticleMeta
- `@/components/article-card` — ArticleCard
- `@/components/doppelrand-card` — DoppelrandCard (exists already)
- `@/components/motion` — MagneticButton, StaggerContainer, StaggerItem (exists already)
