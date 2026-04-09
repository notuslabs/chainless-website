# screen-02-blog-listing build log

Date: 2026-04-08

## Files created

### Route files
- `landing/src/app/[locale]/blog/layout.tsx` — minimal pass-through layout for the blog route group
- `landing/src/app/[locale]/blog/page.tsx` — blog listing page (server component)

### Components
- `landing/src/components/blog/blog-hero.tsx` — hero with Zodiak H1, description, article count
- `landing/src/components/blog/blog-listing.tsx` — client orchestrator: filter + featured + grid + pagination
- `landing/src/components/blog/pillar-filter.tsx` — client pill tabs with URL-driven filter
- `landing/src/components/blog/featured-article.tsx` — full-width featured card with optional hero image
- `landing/src/components/blog/pagination.tsx` — numbered page navigation with prev/next arrows

## Implementation notes

### Static export constraint (output: "export")
The project uses `output: "export"` in next.config.ts, which forbids `force-dynamic` pages and runtime `searchParams` reads. The page is designed for SSG compatibility:
- `page.tsx` is a server component that fetches all posts and passes them down
- All filtering/pagination state is managed client-side via `useSearchParams` in `BlogListing`
- `BlogListing` is wrapped in `<Suspense>` as required when `useSearchParams` is used inside a static page

### Next.js 15+ async params
`params` is awaited per the Next.js 15 breaking change. `searchParams` is NOT used server-side (static export incompatible):
```tsx
await params; // locale extracted only in generateMetadata
```

### lib/blog.ts — pre-existing
Found at `landing/src/lib/blog.ts`, built by screen-01 agent. Uses MDX file system reads with gray-matter. Post shape:
```ts
Post {
  slug: string
  frontmatter: PostFrontmatter  // title, excerpt, pillar, author, date, heroImage, featured, ...
  content: string
  readingTime: number
}
```
All listing page code adapts to this nested shape.

### BlogHero
- Zodiak 400 H1 with clamp(2.25rem, 1.7rem + 2.2vw, 3.5rem) fluid size
- FadeUp on heading, FadeUp delay=0.2 on description + count
- font-mono for article count (IBM Plex Mono stack via --font-mono if loaded, system mono otherwise)

### PillarFilter
- Client component — uses useRouter, useSearchParams, usePathname
- URL params: `?pillar=soberania|crescimento|pratica`
- Resets `page` param on pillar change
- role="tablist" / role="tab" / aria-selected for accessibility
- Horizontal scroll on mobile with overflow-x-auto snap-x

### FeaturedArticle
- Conditional: only rendered when `!activePillar && currentPage === 1` AND a post has `featured: true` or `heroImage`
- DoppelrandCard variant="default" with hover
- 2-column desktop (45% image / 55% text), stacked mobile
- Next.js Image fill with object-cover for the hero image

### Pagination
- Only renders when totalPages > 1
- URL structure: `?pillar=soberania&page=2`
- Phosphor CaretLeft/CaretRight (bold weight) from `/dist/ssr` for SSR safety
- Active page: bg-yellow-500 text-dark-500 font-semibold
- Disabled arrows: opacity-30 pointer-events-none via cursor-not-allowed + no Link

### Empty state
- Shown when no posts match pillar filter
- Ghost button "Ver todos os artigos" links to `/${locale}/blog`

### SEO
- generateMetadata awaits params
- Includes alternates.canonical, openGraph, twitter card

## TypeScript
- npx tsc --noEmit exits 0 (no errors)

## Build
- npx next build succeeds with 0 errors
- /pt/blog and /en/blog rendered as SSG (●) static HTML pages
