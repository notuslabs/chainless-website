# Typography

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Source of Truth

- Identity spec: `identity/typography.md`
- Implementation: `landing/src/app/globals.css` (font stacks), `landing/src/app/layout.tsx` (font loading)

## Status: KEEP with NOTES

Typography tokens are implemented and working. Two known divergences from identity spec are documented below as intentional decisions, not bugs.

---

## Font Stacks

| Role | Identity Spec | Implementation | CSS Variable | Status |
|------|--------------|----------------|-------------|--------|
| **Primary** | Sohne (Klim, commercial) | **Satoshi** (FontShare, free) | `--font-sans` | KEEP — licensing decision |
| **Accent Serif** | Fraunces (Google Fonts) | Fraunces | `--font-serif` | KEEP |
| **Monospace** | IBM Plex Mono | IBM Plex Mono | `--font-mono` | KEEP |

### Font Stack Definitions

```css
--font-sans:  'Satoshi', 'General Sans', ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-serif: 'Fraunces', 'Newsreader', 'Georgia', 'Times New Roman', serif;
--font-mono:  'IBM Plex Mono', 'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace;
```

### Known Divergence: Sohne vs Satoshi

Identity spec prescribes Sohne (Klim Type Foundry, commercial license ~$300+). Implementation uses Satoshi by Indian Type Foundry via FontShare (free, commercial use). Both are humanist sans-serifs with warm geometry. General Sans sits in the fallback chain as a bridge.

**Decision**: KEEP Satoshi until Sohne licensing is acquired. The design system tokens are font-agnostic — swapping requires only changing the `@font-face` declaration and the first entry in `--font-sans`.

---

## Type Scale

Base: **18px** | Ratio: **1.25** (Major Third) | Grid: **4px**

| Level | Size | rem | Fluid (clamp) | Weight | Line Height | Letter Spacing | Font |
|-------|-----:|----:|---------------|:------:|:-----------:|:--------------:|------|
| **Display** | 72px | 4.5rem | `clamp(2.75rem, 2.1rem + 2.7vw, 4.5rem)` | 700 | 76px / 1.06 | -0.025em | Serif |
| **H1** | 56px | 3.5rem | `clamp(2.25rem, 1.7rem + 2.2vw, 3.5rem)` | 700 | 60px / 1.07 | -0.025em | Sans or Serif |
| **H2** | 44px | 2.75rem | `clamp(1.875rem, 1.45rem + 1.7vw, 2.75rem)` | 600 | 48px / 1.09 | -0.025em | Sans |
| **H3** | 36px | 2.25rem | `clamp(1.5rem, 1.17rem + 1.4vw, 2.25rem)` | 600 | 40px / 1.11 | -0.015em | Sans |
| **H4** | 28px | 1.75rem | `clamp(1.25rem, 1.03rem + 0.9vw, 1.75rem)` | 600 | 32px / 1.14 | -0.01em | Sans |
| **H5** | 22px | 1.375rem | — | 600 | 28px / 1.27 | 0 | Sans |
| **Body Large** | 21px | 1.3125rem | — | 400 | 32px / 1.52 | 0 | Sans |
| **Body** | 18px | 1.125rem | — | 400 | 28px / 1.56 | 0 | Sans |
| **Body Small** | 15px | 0.9375rem | — | 400 | 24px / 1.6 | 0.01em | Sans |
| **Caption** | 13px | 0.8125rem | — | 400 | 20px / 1.54 | 0.015em | Sans |
| **Overline** | 12px | 0.75rem | — | 600 | 16px / 1.33 | 0.1em | Sans (uppercase) |
| **Code** | 15px | 0.9375rem | — | 400 | 24px / 1.6 | 0 | Mono |
| **Data** | 18px | 1.125rem | — | 500 | 24px / 1.33 | -0.01em | Mono |

---

## Font Pairing Rules

**Serif (Fraunces) is for brand moments only.** Never body text, never UI labels, never buttons, never forms.

| Context | Font | Weight | Rationale |
|---------|------|:------:|-----------|
| Hero headline ("Torne-se Chainless.") | Fraunces | 700 | Magician speaks — transformation |
| Campaign headlines | Fraunces | 700 | High Magician energy |
| Pull quotes, testimonials | Fraunces Italic | 400-500 | Editorial warmth |
| Section headings (product) | Satoshi | 600 | Ruler governs — structure |
| Body text | Satoshi | 400 | Clarity and readability |
| Navigation | Satoshi | 500 | Medium weight, functional |
| Buttons | Satoshi | 600 | Semibold, action-oriented |
| Data values, addresses | IBM Plex Mono | 500 | Architect's precision |

---

## Weight Strategy

| Value | Name | Usage |
|:-----:|------|-------|
| 200 | Extralight | Display numerals, decorative (rare) |
| 300 | Light | Bylines, metadata, elegant large text |
| 400 | Regular | Body text, descriptions, default |
| 500 | Medium | Emphasized body, nav, labels, form inputs |
| 600 | Semibold | H2-H5, buttons, overlines |
| 700 | Bold | H1, Display, key CTAs |
| 800 | Extrabold | Campaign headlines (rare) |

---

## Responsive Behavior

### Mobile (< 640px)

- Display drops to ~44px via `clamp()`
- H1 drops to ~36px via `clamp()`
- Body stays at 18px — never reduce body on mobile
- Line lengths naturally constrain to ~40-60 characters

### Desktop (> 1280px)

- Max content width: 1200px
- Display reaches full 72px
- Body max-width: `65ch` (`max-w-prose`)
- Increased whitespace at large viewports

### Fluid Range (640-1280px)

All heading levels scale via `clamp()`. Body and below are static — 18px is comfortable at all widths.

---

## Vertical Rhythm

Grid unit: **4px** | Body line-height anchor: **28px** (7 x 4px)

All spacing derives from the body line-height. See `spacing.md` for the full scale.

---

## Text Rendering

Implemented in `globals.css` body rule:

```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

Plus `text-wrap: pretty` and `hanging-punctuation: first last` on `.pull-quote` elements.

---

## Accessibility

- Body line-height: 28px / 18px = 1.56 (WCAG SC 1.4.12 requires >= 1.5)
- All `clamp()` values use rem — preserves zoom (WCAG SC 1.4.4)
- Minimum text size: 12px (overline) — above practical floor
- Max line length: 65ch via `max-w-prose`
- Layout survives text spacing overrides per WCAG SC 1.4.12

---

## Font Loading

Satoshi is loaded via `@font-face` in `globals.css` pointing to FontShare CDN WOFF2 files. Variable font covers weights 300-900.

```css
@font-face {
  font-family: 'Satoshi';
  src: url('https://cdn.fontshare.com/...SATOSHI-VARIABLE.woff2') format('woff2');
  font-weight: 300 900;
  font-display: swap;
}
```

**Future upgrade path**: When Sohne license is acquired, replace CDN URL with self-hosted WOFF2 and update first entry in `--font-sans`. No other code changes needed.
