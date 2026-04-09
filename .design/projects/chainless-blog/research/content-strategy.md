# Content Strategy
> Phase: research | Project: chainless-blog | Generated: 2026-04-08

---

## Article Metadata Display

### Reading Time

Display as **"X min de leitura"** — this is the established Portuguese convention. Calculate at 220 WPM (Portuguese reads ~10% slower than English due to longer average word length). Place alongside date and author in a single metadata line.

### Date Format

Use **relative dates** for recent articles ("ha 3 dias"), **absolute dates** for older content ("12 de marco de 2026"). Brazilian convention uses day-month-year order with months lowercase and unabbreviated. Use `Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })` for consistent formatting.

### Author Display

- Article page: author name + optional avatar (small, 32px circle). For Chainless's initial launch, a single "Equipe Chainless" byline is fine. Individual author names can come when the team grows.
- Card: author name only (no avatar at card scale — too much visual noise)

### Metadata Line Pattern

```
Soberania Digital  |  12 de marco de 2026  |  8 min de leitura
```

Pillar tag is colored (yellow/green/blue), separator is muted, date and reading time in IBM Plex Mono at small size for visual contrast with the headline.

---

## CTA Microcopy for Editorial-to-Product Conversion

### Soft CTA ("Como a Chainless resolve isso")

The section title itself is the primary copy asset — it frames Chainless as the answer to the problem the article just explained. Microcopy principles:

- **Solution-oriented, not sales-oriented.** "Veja como funciona" beats "Crie sua conta gratis"
- **Reference the article topic.** For a lending article: "Pegue emprestimo usando BTC como garantia — sem vender seus ativos." For a yield article: "Comece a gerar rendimento em dolar hoje."
- **Single CTA button.** One action. "Conhecer a Chainless" or "Comecar agora"
- **Supporting sentence.** One line of proof: "Mais de R$ XX milhoes sob gestao" or "Autocustodia real — suas chaves, seus ativos"

### Global CTA (bottom of page)

Reuse the landing `CTASection` component as-is. It already handles the brand CTA treatment. No article-specific adaptation needed.

### CTA Placement Rules

1. **Never** place a CTA before the reader has received value (i.e., never in the first 30% of the article)
2. The soft CTA goes after the article body, before FAQ
3. The global CTA goes after related posts (very bottom)
4. No inline banner ads or popups — these destroy the editorial premium feel

---

## Pillar Naming and Iconography

### Pillar Labels

| Pillar | PT-BR Label | Short Label (tabs) | Color Accent |
|--------|------------|-------------------|--------------|
| Sovereignty | Soberania Digital | Soberania | Yellow (#FFC73D) |
| Wealth Growth | Crescimento Patrimonial | Crescimento | Green (success token) |
| Practical Finance | Vida Financeira Pratica | Pratica | Blue (info token) |

### Iconography

Use Phosphor Icons (already in the project) for pillar indicators:

| Pillar | Icon Suggestion | Rationale |
|--------|----------------|-----------|
| Soberania | `Shield` or `Key` | Self-custody = security/ownership |
| Crescimento | `TrendUp` or `ChartLineUp` | Growth/yield |
| Pratica | `CreditCard` or `CurrencyCircleDollar` | Day-to-day finance |

Icons appear at 16px beside the pillar tag label. Outlined weight (not filled) to match the brand's refined aesthetic.

---

## SEO Title and Description Patterns

### Title Tag Formula

```
{Article Title} | Chainless Blog
```

Keep under 60 characters total. The article titles in the content plan are already keyword-optimized H1s. The title tag should match the H1 exactly (or be a slight abbreviation).

### Meta Description Formula

```
{TL;DR summary sentence}. Aprenda como {benefit} com a Chainless.
```

150-160 characters. Include the primary keyword naturally. End with a Chainless brand mention to build recognition in SERPs.

### Examples

- **Title:** "O que e autocustodia e por que ela importa em 2026 | Chainless Blog"
- **Description:** "Autocustodia cripto significa que so voce controla seus ativos digitais. Entenda por que isso importa apos o colapso da FTX e como comecar com seguranca."

### Portuguese Keyword Optimization

- Use accented characters in content but ensure URL slugs use ASCII (`autocustodia-cripto`, not `autocustódia-cripto`)
- Long-tail keywords in PT-BR tend to be longer than English equivalents — plan for 4-7 word queries
- Target "pergunta" keywords ("o que e...", "como funciona...") for featured snippet capture

---

## Featured Snippet Optimization

### TL;DR Box Strategy

The TL;DR box at the top of each article is the primary featured snippet capture mechanism:

- **Format:** 2-4 bullet points or a single paragraph of 40-60 words
- **Content:** Direct answer to the search query implied by the article title
- **Structure:** Clean HTML with `<ul>` or `<p>` — Google pulls these formats into featured snippets
- **Avoid:** Tables or complex formatting in TL;DR — simple text performs best for snippet extraction

### FAQ Schema Strategy

Each article's FAQ section targets "People Also Ask" (PAA) results:

- 3-5 questions per article
- Questions should use natural Portuguese phrasing ("O que acontece se minha exchange quebrar?")
- Answers should be 40-60 words — concise enough for Google to display
- Questions should target related long-tail keywords that differ from the main H1 keyword

Note: Google deprecated FAQ rich results in August 2023, but the structured data still provides crawlability and contextual signals. FAQPage schema adoption actually increased through 2024 despite the deprecation, suggesting continued SEO value.

### Internal Linking for Topic Authority

Per the SEO content plan's cluster architecture:
- Every top-of-funnel article links to a mid-funnel comparison piece
- Every comparison piece links to a branded/bottom-funnel article
- Implement as contextual links within the article body, not as a sidebar widget
- Use descriptive anchor text matching the target article's keyword
