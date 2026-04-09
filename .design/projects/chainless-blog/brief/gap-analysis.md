# Gap Analysis
> Phase: brief | Project: chainless-blog | Generated: 2026-04-08

---

## Components in Brand System — Missing from Codebase

| Component | Brand Spec | Status | Blog Need |
|-----------|-----------|:------:|:---------:|
| `DoppelrandCard` | `patterns/components/doppelrand.md` | Copy-pasted in 6 files, no shared component | **Critical** — article cards, TL;DR, CTA |
| `--color-text-primary` | `patterns/components/classification.md` (cross-cutting #2) | Hardcoded `text-[#FAFAF8]` in 13 files | **Critical** — all blog text |
| `--text-section-heading` | `patterns/components/classification.md` (cross-cutting #4) | Copy-pasted clamp in 5+ files | **Medium** — article H2s |
| `--container-content` | `patterns/components/classification.md` (cross-cutting #5) | `max-w-[1200px]` in 10 files | **Low** — blog uses `max-w-prose` for body |
| IBM Plex Mono import | `patterns/foundations/typography.md` | Spec'd but not imported in landing | **Medium** — code blocks |

## Tokens in Brand System — Not Yet in `globals.css`

| Token | Defined In | Current State | Blog Need |
|-------|-----------|:------------:|:---------:|
| `--color-text-primary` | classification.md | Missing | **Critical** |
| `--color-text-secondary` | color-system.md (dark mode mapping) | Missing (use `#B0ADA6`) | **High** |
| `--color-text-tertiary` | color-system.md (dark mode mapping) | Missing (use `#9E9A93`) | **Medium** |
| `--text-section-heading` | classification.md | Missing | **Medium** |
| `--container-content` | classification.md | Missing | **Low** |

## Prose Typography — No Existing System

The landing page has no long-form prose styling. The blog needs a complete prose typographic system:

- Paragraph spacing
- Heading hierarchy within body content (H2–H4)
- List styles (ordered, unordered, nested)
- Blockquote styling
- Code blocks (inline + fenced)
- Table styling
- Image captions
- Horizontal rules
- Link styles within body text

**Recommendation:** Create a `.prose-dark` class in `globals.css` with `@apply` rules, or use Tailwind Typography plugin (`@tailwindcss/typography`) as a base and override with brand tokens.

## MDX Infrastructure — Not Present

No MDX setup exists in the codebase:

- No `@next/mdx` or `next-mdx-remote` dependency
- No MDX component mapping
- No content directory structure
- No frontmatter parsing

**Recommendation:** Add `next-mdx-remote` for flexibility (content can come from files, CMS, or API later). Create `/content/blog/` directory for MDX files.

## Route Structure — Not Present

No `/blog` route exists. Need:

```
landing/src/app/[locale]/blog/
  page.tsx          — listing page
  [slug]/
    page.tsx        — article page
```

Or if blog stays outside locale routing:

```
landing/src/app/(root)/blog/
  page.tsx
  [slug]/
    page.tsx
```

**Decision needed:** Does the blog live under `[locale]` routing or `(root)`?
