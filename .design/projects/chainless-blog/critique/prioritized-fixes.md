# Prioritized Fixes
> Phase: critique | Project: chainless-blog | Generated: 2026-04-08

---

## Critical (Must Fix)

### 1. Resolve Zodiak heading weight conflict
**Screen:** [Article Page](../design/screen-01-article-page.md)
**Issue:** Article H1 specifies Zodiak **700** (bold), but the shipped identity uses Zodiak **400** (Regular) for all display headings. The identity doc explicitly states: "Display headings use weight 400 (Regular), not 700 (Bold). This gives the Zodiak serif a lighter, more editorial feel."
**Fix:** Change article H1 from `Zodiak 700` to `Zodiak 400`. The clamp scale (up to 3.5rem / 56px) provides sufficient visual weight without bold. This maintains brand consistency with all other Zodiak headings across the site.

### 2. Resolve DoppelrandCard radius discrepancy
**Screen:** Both screens
**Issue:** The article design specs reference `rounded-[2.25rem]` (36px) for the outer shell, but the authoritative `doppelrand.md` component spec defines `--doppelrand-radius-outer: 1.125rem` (18px). These conflict.
**Fix:** Use the component spec value: `1.125rem` (18px) outer, `calc(1.125rem - 0.375rem)` inner. The 2.25rem value in the screen spec appears to be an error (possibly doubling the value). Update screen-01 and screen-02 to reference the component spec directly.

### 3. Add mobile TOC focus trap specification
**Screen:** [Article Page](../design/screen-01-article-page.md)
**Issue:** The mobile/tablet collapsible TOC drawer opens over content but has no focus trap specification. Screen reader and keyboard users could tab behind the drawer into invisible content.
**Fix:** Add to the TOC section: "When the collapsible TOC drawer is open on mobile/tablet, focus is trapped within the drawer. Pressing Escape closes the drawer and returns focus to the trigger element. Focus trap releases when a heading link is tapped (drawer closes, focus moves to the heading)."
**WCAG ref:** See [accessibility-fixes.md](./accessibility-fixes.md), issue 2.

---

## Important (High Priority)

### 4. Add MDX error boundary specification
**Screen:** [Article Page](../design/screen-01-article-page.md)
**Issue:** No specification for what happens when MDX content fails to render (malformed markdown, missing component, runtime error). The current error state only covers "slug not found" (404), not "slug found but content broken."
**Fix:** Add an error boundary state: "If the article body fails to render, show a minimal fallback: the article hero (title, meta) with a message: 'Erro ao carregar o conteudo deste artigo.' and a link to report the issue. Log the error to monitoring. Do not crash the entire page."

### 5. Add "back to top" affordance for long articles
**Screen:** [Article Page](../design/screen-01-article-page.md)
**Issue:** Articles are 1,500-2,500 words. The ScrollProgress bar shows position but doesn't enable action. Mobile users (especially Pedro persona, 45, non-technical) may not know to use the TOC to navigate back up.
**Fix:** Add a floating "back to top" button that appears after scrolling past the TL;DR section. Style: `fixed bottom-6 right-6`, small circle (40x40px), `bg-dark-700 ring-1 ring-white/[0.08]`, Phosphor `ArrowUp` icon (bold, 16px), `text-warm-400`. FadeUp entrance, FadeOut exit on scroll. `aria-label="Voltar ao topo"`. Hidden when within the first viewport of the page.

### 6. Add pillar tag tooltip/description
**Screen:** Both screens
**Issue:** Pillar tags ("Soberania Digital," "Crescimento Patrimonial," "Vida Financeira Pratica") are presented without explanation. New visitors (especially Camila persona, crypto newcomer) may not understand what these categories mean.
**Fix:** On first visit or on hover (desktop) / long-press (mobile), show a one-line description: "Soberania: Educacao sobre autocustodia e controle das suas chaves" / "Crescimento: Rendimentos DeFi vs. financas tradicionais" / "Pratica: Cartao, Pix e uso diario de cripto." Implement as a native `title` attribute on the tag, or a lightweight tooltip component.

### 7. Specify featured article fallback for new blog
**Screen:** [Blog Listing](../design/screen-02-blog-listing.md)
**Issue:** The featured article section (Section 3) spans 2 columns in the desktop grid and expects a hero image. At blog launch with few articles, there may not be a suitable featured article with a hero image.
**Fix:** Add a rule: "If no article is pinned or has a hero image, the featured section collapses and the grid starts immediately with equal-sized cards. The first card in the grid receives no special treatment. Featured section appears only when an article is explicitly pinned via frontmatter (`featured: true`) or has a hero image."

---

## Polish (If Time Allows)

### 8. Add keyboard navigation hint for listing
**Screen:** [Blog Listing](../design/screen-02-blog-listing.md)
**Issue:** No keyboard shortcuts for browsing articles (J/K for next/prev card focus, Enter to open). Not critical for a blog, but would improve efficiency for power users.
**Fix:** Add `onKeyDown` handler on the article grid that supports J (next card), K (previous card), and Enter (navigate to article). Announce focus changes via `aria-live="polite"` on a visually hidden element.

### 9. Add article navigation within articles
**Screen:** [Article Page](../design/screen-01-article-page.md)
**Issue:** After reading an article, the only navigation options are related posts (same pillar) or the global CTA. There's no "Previous article" / "Next article" navigation for users reading sequentially.
**Fix:** Add a minimal prev/next navigation bar between the FAQ section and related posts: two ghost buttons, left-aligned "Anterior" and right-aligned "Proximo," each showing the adjacent article's title. Same pillar preferred, chronological fallback.

### 10. Consider image alt text strategy for hero images
**Screen:** [Article Page](../design/screen-01-article-page.md)
**Issue:** The design says hero image has "descriptive alt text" but doesn't specify a strategy for generating/writing alt text at scale for 30+ articles.
**Fix:** Add to the content strategy: "Hero image alt text follows the pattern: '[Description of image]. Ilustracao para o artigo sobre [topic].' Alt text is a required frontmatter field. Articles without alt text for their hero image must not use a hero image."

---

## Cross-References

- Accessibility-specific fixes: [accessibility-fixes.md](./accessibility-fixes.md)
- Full critique analysis: [critique.md](./critique.md)
- Design specs: [screen-01](../design/screen-01-article-page.md), [screen-02](../design/screen-02-blog-listing.md)
