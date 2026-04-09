# UX Patterns
> Phase: research | Project: chainless-blog | Generated: 2026-04-08

---

## Table of Contents Patterns

### Sidebar TOC (Adopt)

The sticky sidebar TOC is the dominant pattern for long-form editorial content (1,500+ words). NN/g research confirms that highlighting the current section as the user scrolls increases discoverability and provides progress feedback. Implementation approach for Chainless:

- **Position:** Right sidebar on desktop (>=1024px), collapsible drawer on mobile
- **Behavior:** `position: sticky; top: var(--navbar-height)` with IntersectionObserver tracking active heading
- **Active state:** Highlight current H2/H3 with brand yellow left border or opacity shift
- **Scroll offset:** Account for sticky navbar height in scroll-to calculations
- **Depth:** Show H2 + H3 only. H4 creates noise in a sidebar TOC without adding navigation value

Source: [NN/g Table of Contents Design Guide](https://www.nngroup.com/articles/table-of-contents/)

### Reading Progress Indicator (Adopt)

A thin progress bar at the top of the viewport communicates reading progress without occupying layout space. The existing `ScrollProgress` component in `motion.tsx` already implements this with `scaleX` tied to `scrollYProgress` — a 2px golden line at the top. This is the exact right pattern: unobtrusive, uses brand color, and requires no additional implementation.

Research from University of Nebraska-Lincoln found users with a visible progress indicator wait 3x longer before abandoning content.

Source: [Mobbin - Progress Indicator Patterns](https://mobbin.com/glossary/progress-indicator)

---

## Article Page Layout Patterns

### TL;DR / Summary Card (Adopt)

Premium editorial blogs increasingly place a summary card immediately after the headline area. This serves two purposes:

1. **Reader utility** — lets time-pressed readers get the core thesis in 15 seconds
2. **SEO capture** — Google pulls concise summary blocks as featured snippets when they directly answer search queries

**Pattern specifics:**
- Place directly below article hero, above the body
- Visual distinction via Doppelrand card treatment (double-border signals "this is a callout")
- Keep to 2-4 bullet points or a single short paragraph
- Use a label like "TL;DR" or "Resumo" to signal the card's purpose
- Monospace label ("TL;DR" in IBM Plex Mono) creates visual contrast with the body serif

### Article Body Typography — Dark Theme (Adopt with care)

Dark theme long-form content requires specific adjustments vs. light theme defaults:

- **Background:** Use #1C1B19 (the Chainless base), not pure black. Pure black (#000) causes halo effects that strain eyes during extended reading. Google Material Design settled on #121212; Chainless's warm dark is even better for long reading sessions.
- **Text color:** Off-white with warm undertone (e.g., rgba(255, 248, 240, 0.88)). Never pure white on dark — the contrast is too harsh for sustained reading.
- **Line height:** 1.55-1.65 for body (28px at 18px body size = 1.56, which falls in the optimal range)
- **Max width:** 65ch is the sweet spot. Research consistently shows 45-90 characters per line with 66 as the ideal target.
- **Letter spacing:** Slightly increased (+0.01em) for body text in dark mode to reduce visual crowding
- **Paragraph spacing:** 1.5em between paragraphs in dark themes (slightly more than light theme conventions)

Sources: [Design Shack - Dark Mode Typography](https://designshack.net/articles/typography/dark-mode-typography/), [Smashing Magazine - Readability](https://www.smashingmagazine.com/2009/03/10-principles-for-readable-web-typography/)

### Pull Quotes (Adopt — sparingly)

Pull quotes break up long prose and create visual rhythm. For Chainless:
- Zodiak Light italic at ~24px, left-aligned with a yellow left border
- Use 1 per 600-800 words maximum — overuse dilutes their editorial weight
- Should contain an actual insight, not just a repeated sentence

---

## Conversion CTA Patterns

### Contextual Soft CTA (Adopt)

The "Como a Chainless resolve isso" pattern is a best-practice editorial CTA. The key UX principles:

1. **Placement:** After the educational content, before FAQ. The reader has the problem context; the CTA offers a solution. Never before the reader has received value.
2. **Tone:** Solution-oriented, not sales-oriented. "Veja como funciona" > "Assine agora"
3. **Visual treatment:** Doppelrand card with subtle yellow accent — it should feel like premium content, not an ad
4. **Single action:** One clear CTA button. Multiple options create decision paralysis.
5. **Contextual relevance:** The CTA text should reference the article topic. A lending article's CTA talks about lending, not generic "sign up."

Source: [Thundertech - Hard vs Soft Sell CTAs](https://www.thundertech.com/blog-news/understanding-ctas-balancing-hard-and-soft-sells/)

### Global CTA (Reuse)

The existing `CTASection` component from the landing page serves as the bottom-of-page catch-all. This is standard — Stripe, Linear, and a16z all end articles with a global brand CTA. No need to reinvent.

---

## Blog Listing Patterns

### Pillar Filtering (Adopt)

Horizontal tab/segmented control for category filtering is the dominant pattern (Stripe, a16z, Paradigm all use it). Key details:

- **Horizontal tabs**, not a sidebar filter panel — the listing page is about browsing, not complex faceted search
- **Tab labels:** "Todos" / "Soberania" / "Crescimento" / "Prática" — short, scannable
- **Active state:** Yellow underline or filled pill with transition animation
- **URL sync:** Each filter state should be a URL parameter (`/blog?pillar=sovereignty`) for shareability and SEO crawlability
- **Count badges:** Optional but helpful — show article count per pillar

### Article Card Design (Adopt — Doppelrand variant)

Article cards need 5 information layers in strict visual hierarchy:

1. **Pillar tag** — small colored label (top, establishes category)
2. **Title** — H3, Switzer 600, 2-3 lines max with line-clamp
3. **Excerpt** — 2 lines, muted color, line-clamped
4. **Meta** — author + date + reading time in small mono text
5. **Hover state** — subtle lift (-1px translateY) + ring glow (Doppelrand language)

Grid layout: 1-col mobile, 2-col tablet (768px), 3-col desktop (1024px). This matches Stripe's progression and works well for the content density.

### Featured Article (Adopt)

A larger card at the top of the listing for the latest or pinned article. Stripe and Linear both do this with a wider card spanning 2 columns. Include the hero image if available, larger title, and a longer excerpt.

### Pagination (Adopt — not infinite scroll)

Page-based pagination is correct for SEO. Each page needs a discrete URL that Google can crawl. Infinite scroll fragments content into one uncrawlable page. Pattern: numbered pages with prev/next arrows, 9-12 articles per page.

---

## FAQ Section Patterns

### Accordion FAQ with Schema (Adopt)

The FAQ accordion serves dual purpose: reader utility and SEO structured data. Pattern:

- Each Q/A pair maps directly to a `Question` entity in FAQPage JSON-LD
- Accordion uses `<details>/<summary>` as the base for native accessibility, enhanced with JS for animation
- Show 3-5 questions per article (more dilutes the schema signal)
- Questions should use actual long-tail keywords ("O que e autocustodia cripto?")
- Answers should be 40-60 words — concise enough for Google to pull as a rich result

Note: Google deprecated FAQ rich results in August 2023, but FAQPage schema adoption actually increased through 2024 — webmasters still find value in the structured data signal even without the rich result display.

Source: [HTTP Archive - Structured Data 2024](https://almanac.httparchive.org/en/2024/structured-data)
