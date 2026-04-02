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

| Role | Font | CSS Variable | Status |
|------|------|-------------|--------|
| **Primary** | Switzer (FontShare, free) | `--font-sans` | ADOPTED — Swiss neutrality, institutional warmth |
| **Display Serif** | Zodiak (local woff2) | `--font-serif` | ADOPTED — ink-trap display, editorial precision |
| **Monospace** | IBM Plex Mono | `--font-mono` | SPEC'd (not yet imported in landing) |

### Font Stack Definitions

```css
--font-sans:  var(--font-switzer), ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-serif: var(--font-zodiak), Georgia, serif;
--font-mono:  'IBM Plex Mono', 'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace;
```

### Rationale: Switzer

Neo-grotesque with Swiss typographic heritage. More open apertures and softer stroke junctions than Geist (previous implementation), without Satoshi's rounded playfulness. Reads as "European private bank" — invisible infrastructure that lets the palette and Zodiak carry brand personality. Self-hosted via FontShare (free, commercial use).

### Rationale: Zodiak

Indie display serif by Pangram Pangram with ink-trap details. At display sizes (48px+), ink traps create distinctive negative spaces that signal editorial precision and contemporary craft. More unexpected than Fraunces (prev spec), aligns with the "rebel" half of the 60/40 premium/rebel split.

**Known limitation:** No italic cuts in current local files. Serif italic contexts (pull quotes, editorial taglines) use browser-synthesized oblique. Source italic cuts if they become available.

**Known weight gap:** Available weights are Light (300), Regular (400), Bold (700), ExtraBold (800). No 500/600 semibold — browser will synthesize or round to 700 for semibold contexts.

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

**Zodiak (serif) is for brand moments only.** Never body text, never UI labels, never buttons, never forms.

| Context | Font | Weight | Rationale |
|---------|------|:------:|-----------|
| Hero headline ("Torne-se Chainless.") | Zodiak | 400 | Magician speaks — ink traps as precision metaphor |
| Section headings (aspirational) | Zodiak | 400 | Transformation moments, editorial authority |
| Campaign headlines | Zodiak | 700 | High Magician energy |
| Pull quotes, editorial couplets | Zodiak | 300 | Light weight, editorial restraint |
| Section headings (product) | Switzer | 600 | Ruler governs — structure |
| Body text | Switzer | 400 | Swiss neutrality, invisible infrastructure |
| Navigation | Switzer | 500 | Medium weight, institutional |
| Buttons | Switzer | 600 | Semibold, action-oriented |
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

Both primary fonts are self-hosted as local WOFF2 files in `src/fonts/`.

**Switzer** — 5 weight cuts: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700). Loaded via `next/font/local` with `--font-switzer` CSS variable.

**Zodiak** — 4 weight cuts: Light (300), Regular (400), Bold (700), ExtraBold (800). Loaded via `next/font/local` with `--font-zodiak` CSS variable. No italic cuts available.

CSS mapping in `globals.css`:
```css
--font-sans: var(--font-switzer), ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-serif: var(--font-zodiak), Georgia, serif;
```
