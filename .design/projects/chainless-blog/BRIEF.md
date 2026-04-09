# Project Brief: Chainless Blog

## What
Design and build a blog for Chainless — article page template + listing page. Two screens, one PR.

## Why
SEO content plan is ready (30 articles across 3 pillars). Need the design system to render articles that match Chainless's premium brand while maximizing organic search performance.

## Content Pillars
1. **Soberania Digital** (Sovereignty) — self-custody education
2. **Crescimento Patrimonial** (Wealth Growth) — DeFi yields vs. traditional finance
3. **Vida Financeira Prática** (Practical Finance) — card, Pix, day-to-day crypto

## Screens
1. **Article page** — hero, body (long-form 1,500-2,500 words), TOC/sidebar, pillar tag, CTA section, related posts
2. **Blog listing** — pillar filtering, article cards, search, pagination

## Content Structure (per article)
- TL;DR box at top (featured snippet capture)
- H1 = target keyword, H2s = related long-tails
- "Como a Chainless resolve isso" soft CTA near bottom
- Schema markup: FAQPage + Article

## Platform
- Web (Next.js 16, same codebase as landing)
- Portuguese (BR) primary, English future
- Dark theme (matching landing)

## SEO Requirements
- Clean URL structure: /blog/[slug]
- Open Graph + Twitter Card meta
- Structured data (Article + FAQPage JSON-LD)
- Reading time estimate
- Canonical URLs
- Sitemap integration

## Brand Constraints
- Zodiak for article headlines (editorial moments)
- Switzer for body text
- IBM Plex Mono for code blocks and data
- Doppelrand cards for related posts and CTA
- 60-30-10 color composition
- FadeUp entrance animations (restrained — content-first)

## References
- SEO content plan: `.design/projects/chainless-blog/seo-content-plan.md`
- Brand patterns: `.design/branding/chainless/patterns/`
