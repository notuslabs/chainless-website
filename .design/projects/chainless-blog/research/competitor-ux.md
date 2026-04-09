# Competitor UX
> Phase: research | Project: chainless-blog | Generated: 2026-04-08

---

## 1. Stripe Blog (stripe.com/blog)

**Theme:** Light. Clean white backgrounds with Stripe's signature deep navy (#0a2540) text.

**Listing page:**
- Segmented control filter with accent color highlighting active state, 4px spacing between items
- Featured article uses `BlogIndexPost--variantFeatured` with shadow card, rounded corners, responsive grid that shifts image placement across breakpoints
- Standard cards use multi-column grid: 1 -> 2 -> 4 columns across breakpoints
- Card anatomy: category badge, title, author list, body excerpt, "read more" link, date
- Typography: Sohne variable font, headlines at weight 500 (24-56px range), body at weight 300 (15-18px)

**Article page:**
- No sidebar TOC (Stripe articles are typically shorter, 500-1000 words)
- Clean single-column layout with generous margins
- Inline images with full-bleed treatment
- CTAs are contextual product links within the text, not separate CTA sections

**Takeaways for Chainless:**
- Stripe's card grid progression (1->2->4) is too aggressive. 1->2->3 is better for Chainless's longer titles in Portuguese
- Stripe's segmented control pattern for category filtering is directly applicable
- The lack of TOC is because Stripe articles are short. Chainless's 1,500-2,500 word articles need a TOC.

---

## 2. Linear Blog/Changelog (linear.app/blog)

**Theme:** Dark. Background #08090a (near-black), InterVariable font family.

**Listing page:**
- Tab navigation: All, Changelog, Community, News, Craft, AI, Practices, Press
- Three large featured cards at top (448px wide each with hero images at 1792x1008)
- Cards show: author/category label (small gray text), date, headline (medium weight ~24-28px), brief description (2-3 lines max with `-webkit-line-clamp`)
- Subtle underline accents at 1.5px thickness

**Article page:**
- Single-column focused reading with generous whitespace
- Minimal UI — no TOC, no sidebar, no reading progress bar
- Content-first approach with large inline images
- Soft transitions, micro-interactions on hover

**Dark theme specifics:**
- LCH color space for theme generation (perceptually uniform lightness)
- Text tertiary/quaternary use reduced opacity grays
- Contrast improved by making text lighter in dark mode specifically

**Takeaways for Chainless:**
- Linear's near-black (#08090a) is slightly cooler than Chainless's warm #1C1B19. The warm undertone is a differentiator — keep it.
- The `-webkit-line-clamp` pattern for card excerpts is essential
- Linear's minimal article page works for short changelogs but would fail for 2,000-word articles. Chainless needs the TOC.
- Linear's image sizing (1792x1008) suggests 16:9 hero images — good target ratio for article heroes

---

## 3. a16z Crypto (a16zcrypto.com/posts)

**Theme:** Dynamic — supports dark/light toggle with `prefers-color-scheme` fallback. Three randomized accent themes (Magenta, Green, Blue).

**Listing page:**
- Prominent filter panel with three sections: Categories, Format, Tags — most complex filtering of any competitor
- Article cards display: headline, excerpt, author, multiple tag labels
- Infinite scroll with "Load More" pagination (SEO-unfriendly — avoid this pattern)
- Algolia-powered search

**Article page:**
- Rich content types: supports MathJax for scientific notation, code blocks, tables
- Author attribution with linked team profiles
- Multiple tag labels per article (vs. single pillar approach of Chainless)

**Takeaways for Chainless:**
- a16z's complex filtering (Categories + Format + Tags) is overkill for 30 articles. Chainless's simple pillar tabs are correct.
- The infinite scroll is wrong for SEO — Chainless's page-based pagination is the right call.
- The multi-tag approach creates visual noise. Single pillar tag per article (with color coding) is cleaner.
- MathJax support is unnecessary, but MDX comparison table support is essential for Chainless's "CDI vs DeFi" style content.

---

## 4. Paradigm (paradigm.xyz/writing)

**Theme:** Light. Clean, research-publication aesthetic.

**Listing page:**
- Chronological listing with category filters (Research, Policy, Commentary, News)
- Four featured articles prominently displayed at top, then standard card grid below
- Cards: featured image (16:9), headline, summary, date, author with linked profiles
- Traditional page-based pagination (1-10 of 238, numbered pages)

**Article page:**
- Research paper aesthetic — clean typography, generous margins
- Minimal chrome around content
- No sidebar TOC despite very long research articles (interesting — possibly a missed opportunity)

**Takeaways for Chainless:**
- Paradigm's 16:9 image ratio for article cards confirms the standard
- Their chronological + filter approach matches Chainless's plan exactly
- Page-based pagination with count display ("Mostrando 1-9 de 30") is a good UX detail
- The research-paper aesthetic works because their audience expects academic rigor. Chainless targets a broader audience — needs more visual warmth (which the Zodiak serif and Doppelrand cards provide)

---

## 5. Design Pattern Synthesis Across Competitors

| Pattern | Stripe | Linear | a16z | Paradigm | Chainless Decision |
|---------|--------|--------|------|----------|-------------------|
| Theme | Light | Dark | Both | Light | Dark (warm) |
| TOC | None | None | None | None | Yes — differentiator for long content |
| Card grid | 1-2-4 | 3 featured | List | Grid + featured | 1-2-3 grid + featured |
| Filtering | Segmented | Tabs | Complex panel | Simple tabs | Horizontal tabs |
| Pagination | N/A | N/A | Infinite scroll | Numbered pages | Numbered pages |
| CTA style | Inline links | None | None | None | Contextual Doppelrand card |
| Typography | Sohne (sans) | Inter (sans) | System | Sans-serif | Zodiak (headlines) + Switzer (body) |
| Progress bar | No | No | No | No | Yes — ScrollProgress exists |

**Key differentiators for Chainless:**
1. TOC sidebar — none of the competitors have one, despite all having long content. This is a genuine UX advantage.
2. Dual-serif + sans typography — editorial warmth that none of the competitors achieve
3. Doppelrand card treatment — unique visual identity for article cards
4. Reading progress bar — subtle premium touch that competitors lack
5. Warm dark theme — Linear is cool-dark, Stripe/Paradigm are light. Warm-dark is the white space in this market.
