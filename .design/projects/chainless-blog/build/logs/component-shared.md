# Shared Components Build Log

## Date: 2026-04-08

### 1. DoppelrandCard (extended)

- **File:** `landing/src/components/doppelrand-card.tsx`
- **Action:** Extended existing multi-renderer component with two new variants: `article` and `tldr`
- **Changes:**
  - Added `"article" | "tldr"` to the variant union type in `DoppelrandCardProps`
  - `article` variant: applies `p-6` inner padding
  - `tldr` variant: disables hover, applies `border-l-[3px] border-yellow-500` and compact `p-4` inner padding
  - All other renderers (modern-dark, minimal-dark, luxury, frosted-glass) receive the new variant values but fall back to default behavior gracefully

### 2. PillarTag

- **File:** `landing/src/components/blog/pillar-tag.tsx`
- **Classification:** Server component (no "use client")
- **Props:** `pillar: 'sovereignty' | 'wealth' | 'practical'`, `className?`
- **Details:** Colored pill labels with PT-BR display names and `aria-label` for accessibility

### 3. ArticleMeta

- **File:** `landing/src/components/blog/article-meta.tsx`
- **Classification:** Server component (no "use client")
- **Props:** `author`, `date`, `readingTime`, `className?`
- **Details:** Inline metadata row with middot separators, screen reader label for reading time
- **Gap noted:** `font-mono` falls back to system monospace; IBM Plex Mono is not loaded in the font pipeline (`--font-mono` not defined in globals.css or layout)

### 4. ArticleCard

- **File:** `landing/src/components/blog/article-card.tsx`
- **Classification:** Server component (no "use client")
- **Props:** `title`, `excerpt`, `slug`, `pillar`, `author`, `date`, `readingTime`
- **Details:** Wraps content in DoppelrandCard `article` variant, entire card is a Next.js `<Link>`. Uses PillarTag and ArticleMeta internally.
