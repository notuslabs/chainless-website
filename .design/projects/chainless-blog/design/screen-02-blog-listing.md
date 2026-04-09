# Screen 02: Blog Listing
> Phase: design | Project: chainless-blog | Generated: 2026-04-08
> Route: `/blog`

---

## Purpose

The blog index page. Allows users to browse, filter, and discover articles by content pillar. Secondary entry point — most readers arrive directly at articles via Google, but the listing serves as a hub for return visitors, internal linking, and pillar-based browsing.

**User flow position:** Accessed via navbar "Blog" link or direct URL. Links out to individual article pages. Never a dead end — always has content to show.

---

## Layout

### Section 1: Blog Hero

Full-width section on `bg-dark-500`. Content centered within `max-w-4xl`.

```
                    Blog                     ← Zodiak 700, H1 scale
                                              clamp(2.25rem, 1.7rem + 2.2vw, 3.5rem)
                                              color: #FAFAF8

          Analises, guias e insights          ← Switzer 400, Body Large (21px)
          sobre soberania financeira           rgba(250,250,248,0.65)
          e o futuro do dinheiro.               max-w-2xl, text-center

                  30 artigos                  ← IBM Plex Mono 400, 15px
                                               text-warm-400
```

**Spacing:** `pt-32 pb-12`. Heading to description: `mt-6`. Description to count: `mt-4`.

**Animation:** TextReveal on the heading (word-by-word entrance). FadeUp on description with 200ms delay.

---

### Section 2: Pillar Filter

Horizontal pill tabs centered below the hero.

```
  [Todos]  [Soberania]  [Crescimento]  [Pratica]
```

**Tab anatomy:**
- Inactive: `rounded-full px-5 py-2.5 text-[15px] font-medium ring-1 ring-white/[0.08] text-warm-400`
- Active (Todos): `bg-white/[0.08] text-[#FAFAF8]`
- Active (Soberania): `bg-yellow-500/15 text-yellow-400 ring-yellow-500/20`
- Active (Crescimento): `bg-success/15 text-success ring-success/20` (where success = #3DA66A)
- Active (Pratica): `bg-info/15 text-info ring-info/20` (where info = #4A90DA)
- Hover (inactive): `ring-white/[0.12] text-[#FAFAF8]/80`
- Transition: `300ms EASE_PREMIUM` on background-color and ring-color

**Desktop:** Centered row with `gap-3`.
**Mobile:** Horizontal scroll with `overflow-x-auto snap-x snap-mandatory`. Right edge fade gradient (`bg-gradient-to-r from-transparent to-dark-500`) to signal scrollability.

**Spacing:** `py-8` (compact, between hero and content).

**URL behavior:** Each tab updates URL params (`/blog?pillar=soberania`) without full page reload. Server component re-renders the filtered grid.

---

### Section 3: Featured Article

Large card spanning 2 columns (desktop) for the latest or pinned article.

```
┌─────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │  ┌──────────────────┐                                       │ │
│ │  │                  │  [Pillar Tag]                          │ │
│ │  │   Hero Image     │                                       │ │
│ │  │   (16:9)         │  O guia completo de autocustodia       │ │
│ │  │                  │  cripto em 2026                        │ │
│ │  │                  │                                       │ │
│ │  └──────────────────┘  Entenda por que manter suas           │ │
│ │                        chaves privadas e a decisao...        │ │
│ │                                                             │ │
│ │                        Equipe Chainless · 15 Mar · 8 min    │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Desktop:** DoppelrandCard, `col-span-2` in the 3-column grid. Internal layout: 2-column — image left (45%), text right (55%). Image: `rounded-xl overflow-hidden aspect-video`.

**Mobile:** DoppelrandCard, full width. Internal layout: stacked — image top, text below.

**Title:** Switzer 600, H3 scale (`clamp(1.5rem, 1.17rem+1.4vw, 2.25rem)`).
**Excerpt:** Switzer 400, Body (18px), `text-[#FAFAF8]/65`, 3 lines max with `line-clamp-3`.
**Meta:** ArticleMeta component.
**Hover:** DoppelrandCard hover behavior — `ring-white/[0.05]` -> `ring-white/[0.08]`, `-translate-y-px`.

---

### Section 4: Article Grid

Responsive card grid below the featured article.

```
  [ArticleCard]    [ArticleCard]    [ArticleCard]
  [ArticleCard]    [ArticleCard]    [ArticleCard]
  [ArticleCard]    [ArticleCard]    [ArticleCard]
```

**Grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`

**ArticleCard anatomy (inside DoppelrandCard):**

```
┌───────────────────────────────────┐
│ ┌───────────────────────────────┐ │
│ │                               │ │
│ │  [Pillar Tag]                 │ │  ← PillarTag, top-left
│ │                               │ │
│ │  Article title goes here      │ │  ← Switzer 600, H5 scale (22px)
│ │  and wraps to two lines       │ │     #FAFAF8, line-clamp-2
│ │                               │ │
│ │  Brief excerpt text that      │ │  ← Switzer 400, Body Small (15px)
│ │  gives context about...       │ │     rgba(250,250,248,0.6)
│ │                               │ │     line-clamp-2
│ │                               │ │
│ │  Equipe Chainless · 15 Mar    │ │  ← ArticleMeta, Caption scale (13px)
│ │  8 min de leitura             │ │     text-warm-400
│ │                               │ │
│ └───────────────────────────────┘ │
└───────────────────────────────────┘
```

**Card inner padding:** `p-6` (narrower than standard DoppelrandCard `p-8`)
**Pillar tag to title:** `mt-4`
**Title to excerpt:** `mt-3`
**Excerpt to meta:** `mt-4`

**Hover:** DoppelrandCard hover — ring brightens, subtle -1px lift, 700ms `ease-premium`.

**Entire card is a link:** Wrap in `<Link>` or use `<a>` on the outer shell. No separate "Read more" button — the card itself is the clickable target.

**Animation:** StaggerContainer on the grid, 120ms stagger between cards. Each card FadeUp with blur.

---

### Section 5: Pagination

```
         [<]  [1]  [2]  [3]  ...  [7]  [>]
```

Centered below the article grid.

**Button anatomy:**
- Size: `w-10 h-10 rounded-lg` (square buttons for numbers)
- Active: `bg-yellow-500 text-dark-500 font-semibold`
- Inactive: `text-warm-400 hover:text-[#FAFAF8] hover:bg-white/[0.04]`
- Arrows: `<` (Phosphor `CaretLeft`, bold) and `>` (Phosphor `CaretRight`, bold)
- Disabled arrow: `opacity-30 pointer-events-none`
- Ellipsis: `text-warm-500` (not clickable)

**Spacing:** `py-12` above and below.

**URL pattern:** `/blog?page=2` (or `/blog?pillar=soberania&page=2` when filtered).

**9 articles per page.** Show pagination only when total articles > 9.

---

### Section 6: Newsletter CTA (Optional)

Minimal email capture section below pagination. Not in MVP — marked P2.

If implemented:
```
┌─────────────────────────────────────────────┐
│                                             │
│   Receba novos artigos no seu email         │  ← Switzer 600, H4 scale
│                                             │
│   [email@example.com          ] [Assinar]   │  ← Input + button inline
│                                             │
│   Sem spam. Cancele quando quiser.          │  ← Switzer 400, 13px, warm-400
│                                             │
└─────────────────────────────────────────────┘
```

Input: `bg-dark-700 border-warm-700/30 rounded-lg text-[#FAFAF8] placeholder-warm-500`
Button: `bg-yellow-500 text-dark-500 rounded-lg font-semibold px-6`

---

## States

### Default
Full listing with articles rendered. First page visible. "Todos" filter active.

### Empty (per filter)
When a pillar filter has no articles:

```
        Nenhum artigo encontrado              ← Switzer 400, 18px, text-warm-400
        nesta categoria ainda.                  centered in the grid area

        [Ver todos os artigos]                ← Ghost button linking to /blog
```

### Loading
- Filter change: article grid shows skeleton cards (same card dimensions, shimmer animation)
- 6 skeleton cards in the grid
- Shimmer: `bg-dark-700/50 animate-pulse rounded`

### Error
- Server error: "Nao foi possivel carregar os artigos. Tente novamente."
- Centered text with retry button
- This should be extremely rare with static generation

---

## Accessibility

### Landmark Regions
```
<header>  → Navbar
<main>    → Blog hero + filter + featured + grid + pagination
<footer>  → Newsletter CTA + Footer
```

### Heading Hierarchy
```
<h1> Blog
  <h2> (visually hidden) Artigos em destaque  — for the featured article area
  <h2> (visually hidden) Todos os artigos     — for the grid
```

### Pillar Filter
- `role="tablist"` on the container
- Each tab: `role="tab"`, `aria-selected="true/false"`
- Tab panel: `role="tabpanel"` wrapping the article grid
- Keyboard: Arrow keys to navigate tabs, Enter/Space to select

### Article Cards
- Each card is a single `<a>` element (no nested links)
- Accessible name: article title (via the heading inside the link)
- Pillar tag: decorative (info is in the card context), `aria-hidden="true"`
- Reading time: full text "8 minutos de leitura" for screen readers, abbreviated "8 min" visually

### Pagination
- `<nav aria-label="Paginacao">` wrapping the pagination
- Current page: `aria-current="page"`
- Previous/next: `aria-label="Pagina anterior"` / `aria-label="Proxima pagina"`
- Disabled buttons: `aria-disabled="true"`

### Focus Management
- After filter change: focus moves to the first article card in the grid
- After page change: focus moves to the first article card
- All interactive elements have visible focus ring: `ring-2 ring-yellow-500 ring-offset-2 ring-offset-dark-500`

---

## Image Resources

### Featured Article Hero Image
- **Type:** Photography or branded illustration (per-article content)
- **Treatment:** `rounded-xl overflow-hidden`, `aspect-video` (16:9)
- **Size:** 600x338px rendered (1200x675 source for retina)
- **Fallback:** When no image, featured card uses text-only layout (no image column)

### Article Card Images
- Cards do NOT include images in MVP. Title + excerpt + meta is sufficient information density for a 3-column grid. Adding images to every card increases page weight and reduces scan speed.
- Future: optional thumbnail can be added as a background treatment on the DoppelrandCard inner core.

### No Decorative Imagery
The listing page is a utility page — browse, filter, find. No atmospheric effects, no mesh gradients, no glows. The DoppelrandCard surface treatment provides enough visual richness.
