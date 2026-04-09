# Information Architecture
> Phase: design | Project: chainless-blog | Generated: 2026-04-08

---

## Site Structure

```
/blog                          Blog listing (all articles)
/blog?pillar=soberania         Filtered by pillar
/blog?pillar=crescimento       Filtered by pillar
/blog?pillar=pratica           Filtered by pillar
/blog?page=2                   Paginated listing
/blog/[slug]                   Individual article
```

## Content Hierarchy

### Level 1: Blog Home (`/blog`)
The entry point. Shows all articles with pillar filtering. Featured article at top, grid below, pagination at bottom.

### Level 2: Article Page (`/blog/[slug]`)
The primary content surface. Self-contained — every article includes its own CTA, FAQ, and related posts. No need to return to the listing to find related content.

### Level 3: Pillar Clusters (implicit)
Not separate pages — filtering on the listing page and "related posts" on articles create the cluster structure. Google understands this via `articleSection` in JSON-LD.

---

## Content Grouping

### Article Page Sections (scroll order)

| # | Section | Purpose | Priority |
|---|---------|---------|:--------:|
| 1 | Article hero | Establish topic, author credibility, reading commitment | P0 |
| 2 | TL;DR box | Featured snippet capture, time-pressed readers | P0 |
| 3 | Article body | Core educational content | P0 |
| 4 | Soft CTA | Convert educated readers | P0 |
| 5 | FAQ accordion | Long-tail keyword capture, structured data | P1 |
| 6 | Related posts | Internal linking, session depth | P0 |
| 7 | Global CTA | Brand-level conversion | P0 |

**TOC sidebar** (desktop) runs alongside sections 2-4. Not a separate section — it's a navigation aid.

### Blog Listing Sections (scroll order)

| # | Section | Purpose | Priority |
|---|---------|---------|:--------:|
| 1 | Page hero | Establish the blog, set expectations | P0 |
| 2 | Pillar filter | Category navigation | P0 |
| 3 | Featured article | Highlight latest/pinned content | P1 |
| 4 | Article grid | Browse all articles | P0 |
| 5 | Pagination | Navigate pages, SEO-friendly URLs | P0 |
| 6 | Newsletter CTA | Email capture (optional) | P2 |

---

## Navigation Context

The blog lives within the existing Chainless site navigation:
- **Navbar** (reused from landing) provides global nav: Home, Blog (new), Transparencia, etc.
- **Blog-internal navigation** uses pillar filter tabs and article-level TOC — no additional nav layer needed
- **Breadcrumbs** not needed — the hierarchy is only 2 levels deep

---

## Landmark Regions

### Article Page
```
<header>    → Navbar (reused)
<nav>       → TOC sidebar (desktop) / TOC drawer (mobile)
<main>      → Article hero + TL;DR + body + soft CTA + FAQ
<aside>     → Related posts
<footer>    → Global CTA + Footer (reused)
```

### Blog Listing
```
<header>    → Navbar (reused)
<main>      → Page hero + filter + featured + grid + pagination
<footer>    → Newsletter CTA + Footer (reused)
```
