# Navigation
> Phase: design | Project: chainless-blog | Generated: 2026-04-08

---

## Global Navigation (Reused)

The existing Chainless navbar is reused without modification. It provides:
- Logo (link to home)
- Primary nav items (horizontal on desktop, hamburger on mobile)
- "Blog" link added to the nav items
- CTA button ("Baixe o app" or similar)

No changes to the navbar component are required beyond adding the blog link.

---

## Blog-Internal Navigation

### Pillar Filter (Listing Page)

**Pattern:** Horizontal pill tabs

| Tab | Label | URL Parameter |
|-----|-------|---------------|
| All | Todos | `/blog` (no param) |
| Sovereignty | Soberania | `/blog?pillar=soberania` |
| Wealth | Crescimento | `/blog?pillar=crescimento` |
| Practical | Pratica | `/blog?pillar=pratica` |

**Desktop (>=768px):** Centered row of pill buttons below the page hero heading. All tabs visible.

**Mobile (<768px):** Horizontal scroll with snap points. "Todos" visible on load, other tabs accessible by scrolling right. Subtle fade gradient on the right edge to signal scrollability.

**Active state:** Filled pill with pillar accent color (yellow for Soberania, green for Crescimento, blue for Pratica). Text color: `dark-500` on active, `warm-400` on inactive. Transition: `EASE_PREMIUM`, 300ms background-color.

**Inactive state:** Ghost pill with `ring-1 ring-white/[0.08]`, `text-warm-400`, `hover:text-[#FAFAF8]`.

### Table of Contents (Article Page)

**Desktop (>=1024px):** Sticky sidebar, right side of content. `position: sticky; top: 96px`. Width: 240px. Shows H2 and H3 headings. Active heading has `border-left: 2px solid var(--color-yellow-500)` and `text-[#FAFAF8]`. Inactive headings: `text-warm-500`. FadeUp entrance on mount.

**Tablet (768-1024px):** No sidebar. Collapsible disclosure widget above the article body, below TL;DR. Trigger: "Indice" label with chevron. Animates open with SlideDown (300ms, `EASE_PREMIUM`).

**Mobile (<768px):** Same collapsible disclosure as tablet. Full-width. Tapping a heading scrolls to it and collapses the TOC.

**Scroll tracking:** IntersectionObserver on all H2/H3 elements. `rootMargin: "-80px 0px -70% 0px"`. Updates active state as user scrolls. Does NOT use `aria-live` — visual feedback only.

---

## Pagination (Listing Page)

**Pattern:** Numbered pages with prev/next arrows.

```
[<] [1] [2] [3] ... [7] [>]
```

**Active page:** `bg-yellow-500 text-dark-500 rounded-lg`
**Inactive page:** `text-warm-400 hover:text-[#FAFAF8]`
**Disabled arrow:** `opacity-30 pointer-events-none`

9 articles per page. URL pattern: `/blog?page=2`.

---

## Related Posts Navigation

3 article cards at the bottom of each article page, linking to same-pillar articles. This provides organic internal navigation without a formal nav structure.
