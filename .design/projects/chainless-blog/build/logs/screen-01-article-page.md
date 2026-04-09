# Screen 01 - Article Page Build Log

## Date: 2026-04-08

## Files created

- `landing/src/app/[locale]/blog/[slug]/page.tsx` - Blog article page component
- `landing/src/lib/blog.ts` - MDX utilities (getAllPosts, getPost, getRelatedPosts, calculateReadingTime, extractHeadings)
- `landing/content/posts/o-que-e-autocustodia.mdx` - Sample article with frontmatter, FAQ, softCta
- `landing/src/components/blog/back-to-top.tsx` - Floating back-to-top button client component

## Files modified

- `landing/src/app/globals.css` - Added `.prose-chainless` typography system + `scroll-padding-top: 6rem`

## Dependencies added

- `gray-matter` - Frontmatter parsing for MDX files

## Architecture decisions

- Page is a Server Component; uses `next-mdx-remote/rsc` `MDXRemote` for RSC-compatible MDX rendering
- `params` awaited as `Promise<{ locale: string; slug: string }>` per Next.js 16 pattern
- Two JSON-LD scripts rendered: BlogPosting (always) + FAQPage (when FAQ frontmatter exists)
- `generateStaticParams` reads all posts from filesystem; `dynamicParams = false` for strict static generation
- MDX component map: `blockquote` -> PullQuote, `Callout` -> CalloutBox, h2/h3 passthrough for rehype-slug IDs
- Two-column layout: article body (flex-1) + sticky TOC sidebar (desktop), collapsible TOC (mobile)
- Navbar/Footer imported directly in page (same pattern as home page)
- BackToTop appears after 400px scroll, uses CSS transitions for show/hide

## Existing components consumed (not modified)

- ScrollProgress, ArticleHero, TldrBox, TableOfContents, PullQuote, CalloutBox, FaqAccordion, SoftCta, RelatedPosts, CTASection, Navbar, Footer

## TypeScript

- Clean `tsc --noEmit` pass, no type errors
