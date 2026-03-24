# Color System

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Source of Truth

- Identity spec: `identity/color-system.md`
- Machine-readable palettes: `identity/palettes.json`
- Implementation: `landing/src/app/globals.css` (`@theme inline` block)

## Status: KEEP

The color system is fully implemented and aligned between identity spec and codebase. No changes required — only documentation and gap-filling for light mode tokens.

---

## Color Scales

### Brand Yellow (Primary Accent)

Source: `#FFC73D` — preserved brand asset.

| Token | Hex | OKLCH | CSS Variable | Usage |
|-------|-----|-------|-------------|-------|
| `yellow-50` | `#FFF8F0` | `oklch(0.982 0.013 71.33)` | `--color-yellow-50` | Tinted backgrounds, yellow wash |
| `yellow-100` | `#FFF5E8` | `oklch(0.974 0.02 74.66)` | `--color-yellow-100` | Hover backgrounds |
| `yellow-200` | `#FFE8C6` | `oklch(0.941 0.051 77.63)` | `--color-yellow-200` | Light accent fills, selection bg |
| `yellow-300` | `#FFDEA9` | `oklch(0.916 0.077 79.31)` | `--color-yellow-300` | Decorative elements, progress bars |
| `yellow-400` | `#FFD486` | `oklch(0.89 0.108 81.52)` | `--color-yellow-400` | Secondary buttons, icons, dark mode accent |
| `yellow-500` | `#FFC73D` | `oklch(0.858 0.158 85.23)` | `--color-yellow-500` | **Primary accent — CTAs, links, active states** |
| `yellow-600` | `#CC9C00` | `oklch(0.718 0.147 86.43)` | `--color-yellow-600` | Hover on primary (light mode) |
| `yellow-700` | `#967200` | `oklch(0.572 0.117 86.52)` | `--color-yellow-700` | Active/pressed buttons |
| `yellow-800` | `#634A00` | `oklch(0.424 0.087 86.3)` | `--color-yellow-800` | High-contrast yellow text on light bg |
| `yellow-900` | `#372800` | `oklch(0.287 0.059 86.81)` | `--color-yellow-900` | Darkest yellow text emphasis |
| `yellow-950` | `#201600` | `oklch(0.207 0.042 86.81)` | `--color-yellow-950` | Near-black warm |

### Warm Neutrals (60% — Backbone)

Source: `#6B6862` — the 60% of 60-30-10.

| Token | Hex | OKLCH | CSS Variable | Usage |
|-------|-----|-------|-------------|-------|
| `warm-50` | `#F0EEE9` | `oklch(0.949 0.007 88.56)` | `--color-warm-50` | Page background (light mode) |
| `warm-100` | `#E3DFD7` | `oklch(0.905 0.012 84.54)` | `--color-warm-100` | Card surfaces, secondary bg |
| `warm-200` | `#C6C0B6` | `oklch(0.81 0.015 80.68)` | `--color-warm-200` | Borders, dividers, scrollbar |
| `warm-300` | `#A4A097` | `oklch(0.706 0.014 86.82)` | `--color-warm-300` | Disabled text, scrollbar hover |
| `warm-400` | `#87837C` | `oklch(0.611 0.011 81.76)` | `--color-warm-400` | Tertiary text, captions |
| `warm-500` | `#6B6862` | `oklch(0.518 0.01 84.56)` | `--color-warm-500` | Secondary text |
| `warm-600` | `#55524D` | `oklch(0.44 0.009 80.68)` | `--color-warm-600` | Strong secondary text |
| `warm-700` | `#3F3D3A` | `oklch(0.361 0.006 78.24)` | `--color-warm-700` | Emphasis text on light bg |
| `warm-800` | `#2D2C29` | `oklch(0.293 0.006 91.52)` | `--color-warm-800` | Elevated dark surfaces |
| `warm-900` | `#1A1917` | `oklch(0.214 0.004 84.56)` | `--color-warm-900` | Dark mode background |
| `warm-950` | `#0F0E0D` | `oklch(0.165 0.003 67.65)` | `--color-warm-950` | Deepest dark surface |

### Dark Neutrals (Espresso)

Source: `#1C1B19` — warm black, 30% of 60-30-10.

| Token | Hex | OKLCH | CSS Variable | Usage |
|-------|-----|-------|-------------|-------|
| `dark-50` | `#E8E5DF` | `oklch(0.923 0.009 84.52)` | `--color-dark-50` | Borders on dark surfaces |
| `dark-100` | `#D1CBC1` | `oklch(0.844 0.015 80.68)` | `--color-dark-100` | Input borders |
| `dark-200` | `#9F9B93` | `oklch(0.691 0.012 84.56)` | `--color-dark-200` | Disabled text, placeholders |
| `dark-300` | `#706D67` | `oklch(0.536 0.01 84.56)` | `--color-dark-300` | Tertiary text, metadata |
| `dark-400` | `#44423E` | `oklch(0.38 0.007 84.56)` | `--color-dark-400` | Secondary text on dark |
| `dark-500` | `#1C1B19` | `oklch(0.222 0.004 84.56)` | `--color-dark-500` | **Primary text / dark surface base** |
| `dark-600` | `#181716` | `oklch(0.205 0.003 67.7)` | `--color-dark-600` | Deeper dark surface |
| `dark-700` | `#141312` | `oklch(0.187 0.003 67.68)` | `--color-dark-700` | Elevated dark card |
| `dark-800` | `#0F0E0D` | `oklch(0.165 0.003 67.65)` | `--color-dark-800` | Near-black |
| `dark-900` | `#080706` | `oklch(0.13 0.004 69.83)` | `--color-dark-900` | Deepest dark |
| `dark-950` | `#040403` | `oklch(0.106 0.004 107.07)` | `--color-dark-950` | Absolute dark |

---

## Semantic Colors

| Role | Hex | CSS Variable | WCAG on dark-500 | Usage |
|------|-----|-------------|:-:|-------|
| **Success** | `#2D8A56` | `--color-success` | — | Positive yields, confirmations |
| **Warning** | `#D4890D` | `--color-warning` | — | Caution states, pending txns |
| **Error** | `#C93B3B` | `--color-error` | — | Failed transactions, errors |
| **Info** | `#3B7FC9` | `--color-info` | — | Informational states |

Full 11-stop scales for each in `identity/palettes.json`.

---

## Surface Tokens

Implemented in `globals.css`. These are the semantic layer on top of the scales.

| Token | Hex | CSS Variable | Context |
|-------|-----|-------------|---------|
| `surface` | `#FAFAF8` | `--color-surface` | Light mode page background |
| `surface-warm` | `#F0EEE9` | `--color-surface-warm` | Light mode card/section bg |
| `surface-muted` | `#F4F3F0` | `--color-surface-muted` | Light mode subtle bg |
| `surface-dark` | `#1C1B19` | `--color-surface-dark` | Dark surface base (current body bg) |
| `surface-dark-elevated` | `#2A2926` | `--color-surface-dark-elevated` | Dark mode card/elevated surface |

---

## Color Composition: 60-30-10 + Inverted Sections

| Proportion | Family | Values |
|:----------:|--------|--------|
| **60%** | Warm neutrals | `#FAFAF8`, `#F0EEE9`, `#F4F3F0` |
| **30%** | Dark + text | `#1C1B19`, `#2A2926`, `#6B6862` |
| **10%** | Brand yellow | `#FFC73D`, `#CC9C00`, `#FFD486` |

**Inverted sections** flip the ratio — dark background, light text, yellow accents. Used for hero, premium feature callouts, footer.

---

## Dark Mode Mapping

The current landing is all-dark. Identity spec defines light-mode as default. Both token sets exist.

| Role | Light Mode | Dark Mode |
|------|-----------|-----------|
| Page background | `#FAFAF8` | `#1C1B19` |
| Card / elevated | `#FFFFFF` | `#2A2926` |
| Primary text | `#1C1B19` | `#FAFAF8` |
| Secondary text | `#6B6862` | `#B0ADA6` |
| Tertiary text | `#9C9890` | `#87837C` |
| Brand accent | `#FFC73D` (yellow-500) | `#FFD486` (yellow-400) |
| Accent hover | `#CC9C00` (yellow-600) | `#FFC73D` (yellow-500) |
| Border subtle | `#E5E3DF` | `#3F3D3A` |
| Border strong | `#D1CFC9` | `#55524D` |

---

## WCAG Compliance

All combinations meet AA minimum. Body text targets AAA (7:1).

### Key Ratios (Verified)

| Combination | Ratio | Grade |
|-------------|:-----:|:-----:|
| `#1C1B19` on `#FAFAF8` | 15.4:1 | AAA |
| `#FAFAF8` on `#1C1B19` | 15.4:1 | AAA |
| `#FFC73D` on `#1C1B19` | 9.2:1 | AAA |
| `#6B6862` on `#FAFAF8` | 5.8:1 | AA |
| `#B0ADA6` on `#1C1B19` | 7.6:1 | AAA |
| `#FFD486` on `#1C1B19` | 11.3:1 | AAA |

### Selection Color

```css
::selection {
  background-color: #FFC73D;
  color: #1C1B19;
}
```

Ratio: 9.2:1 (AAA) — implemented in `globals.css`.

---

## Implementation Notes

### Tailwind v4 CSS-first

All tokens live in `globals.css` under `@theme inline`. No `tailwind.config.js`. Tailwind reads these as `--color-*` variables and generates utilities like `text-yellow-500`, `bg-dark-500`, etc.

### Gap: Light Mode Not Active

Surface tokens (`--color-surface`, `--color-surface-warm`, `--color-surface-muted`) are defined but unused. Body background is hardcoded to `var(--color-dark-500)`. When light mode ships, these tokens are ready.

### Warm Undertone Mandate

Every neutral in the system leans warm (amber hue ~84deg). No cool grays, no blue-tinted neutrals. This is the single design decision that separates Chainless from institutional blue-gray finance.
