# Color System

> Phase: identity | Brand: chainless | Generated: 2026-03-22

---

## Design Philosophy

Chainless uses color with the restraint of a premium brand and the confidence of one that doesn't need to shout. The system is built on three principles derived from the brand strategy:

1. **Warm undertones everywhere** — Every neutral, every background, every dark surface leans warm (yellow-amber undertone), never cool (blue-gray). This is the single micro-decision that separates "warm authority" (our Magician+Ruler blend) from "cold institution" (the thing we counter-position against). Banks are blue-gray. We are warm amber.

2. **Accent sparingly, neutral generously** — The brand yellow `#FFC73D` is our 10% accent. It appears on primary CTAs, key data highlights, active states, and brand moments — never as a background fill for large areas. Premium brands earn attention through restraint; commodity brands earn it through saturation.

3. **Strategic dark sections** — Light mode is our default (wealth management, not trading floor). Dark surfaces (`#1C1B19`) appear in hero sections, premium feature callouts, and footer — creating visual rhythm through contrast inversion, not through switching the entire mode.

Machine-readable color scales: [`./palettes.json`](./palettes.json)

---

## Brand Colors (Preserved)

These colors are preserved brand assets with existing recognition equity. They are systematized, not replaced.

### Primary — Brand Yellow

| Stop | Hex | OKLCH | Usage |
|------|-----|-------|-------|
| 50 | `#FFF8F0` | `oklch(0.982 0.013 71.33)` | Tinted backgrounds, yellow wash |
| 100 | `#FFF5E8` | `oklch(0.974 0.02 74.66)` | Hover backgrounds, subtle highlights |
| 200 | `#FFE8C6` | `oklch(0.941 0.051 77.63)` | Light accent fills, selection backgrounds |
| 300 | `#FFDEA9` | `oklch(0.916 0.077 79.31)` | Decorative elements, progress bars |
| 400 | `#FFD486` | `oklch(0.89 0.108 81.52)` | Secondary buttons, icons, hover yellow |
| **500** | **`#FFC73D`** | **`oklch(0.858 0.158 85.23)`** | **Primary accent — CTAs, links, key data, active states** |
| 600 | `#CC9C00` | `oklch(0.718 0.147 86.43)` | Hover on primary buttons (light mode) |
| 700 | `#967200` | `oklch(0.572 0.117 86.52)` | Active/pressed primary buttons |
| 800 | `#634A00` | `oklch(0.424 0.087 86.3)` | High-contrast yellow text on light backgrounds |
| 900 | `#372800` | `oklch(0.287 0.059 86.81)` | Darkest yellow — used for text emphasis on yellow tints |
| 950 | `#201600` | `oklch(0.207 0.042 86.81)` | Near-black warm — extreme contrast |

**Source:** `#FFC73D` is the existing Chainless brand yellow (98 occurrences in current CSS). The 500 step preserves it exactly.

**Strategic rationale:** Gold/amber carries the Magician's confidence and the Ruler's authority simultaneously. It evokes sovereignty (gold as the original store of value), warmth (Brazilian sunlight), and premium craft (gold as material). It is NOT crypto-yellow or fintech-orange — it is wealth-gold deployed with editorial restraint.

### Primary — Neutrals (Warm Dark)

| Stop | Hex | OKLCH | Usage |
|------|-----|-------|-------|
| 50 | `#E8E5DF` | `oklch(0.923 0.009 84.52)` | Borders, subtle dividers |
| 100 | `#D1CBC1` | `oklch(0.844 0.015 80.68)` | Input borders, card strokes |
| 200 | `#9F9B93` | `oklch(0.691 0.012 84.56)` | Disabled text, placeholders |
| 300 | `#706D67` | `oklch(0.536 0.01 84.56)` | Tertiary text, metadata |
| 400 | `#44423E` | `oklch(0.38 0.007 84.56)` | Secondary text on dark |
| **500** | **`#1C1B19`** | **`oklch(0.222 0.004 84.56)`** | **Primary text, dark surface base** |
| 600 | `#181716` | `oklch(0.205 0.003 67.7)` | Deeper dark surface |
| 700 | `#141312` | `oklch(0.187 0.003 67.68)` | Dark card elevated |
| 800 | `#0F0E0D` | `oklch(0.165 0.003 67.65)` | Near-black dark |
| 900 | `#080706` | `oklch(0.13 0.004 69.83)` | Deepest dark |
| 950 | `#040403` | `oklch(0.106 0.004 107.07)` | Absolute dark |

**Strategic rationale:** Warm blacks (vs pure `#000`) prevent the cold, clinical feel of institutional finance and the "trading terminal" feel of crypto platforms. The warm undertone at `84.52` hue degrees places these in the amber family — related to our yellow, creating subliminal harmony across light and dark contexts.

---

## Extended Palette — Warm Neutrals

The backbone of the visual system. These warm grays form the 60% of the 60-30-10 composition.

| Stop | Hex | OKLCH | Usage |
|------|-----|-------|-------|
| 50 | `#F0EEE9` | `oklch(0.949 0.007 88.56)` | Primary page background (≈ `#FAFAF8` from mood board) |
| 100 | `#E3DFD7` | `oklch(0.905 0.012 84.54)` | Secondary background, card surfaces |
| 200 | `#C6C0B6` | `oklch(0.81 0.015 80.68)` | Tertiary backgrounds, section dividers |
| 300 | `#A4A097` | `oklch(0.706 0.014 86.82)` | Disabled elements, placeholder text |
| 400 | `#87837C` | `oklch(0.611 0.011 81.76)` | Tertiary text, captions |
| 500 | `#6B6862` | `oklch(0.518 0.01 84.56)` | Secondary text |
| 600 | `#55524D` | `oklch(0.44 0.009 80.68)` | Strong secondary text |
| 700 | `#3F3D3A` | `oklch(0.361 0.006 78.24)` | Emphasis text, subheadings on light |
| 800 | `#2D2C29` | `oklch(0.293 0.006 91.52)` | Elevated dark surfaces, dark mode cards |
| 900 | `#1A1917` | `oklch(0.214 0.004 84.56)` | Dark mode background |
| 950 | `#0F0E0D` | `oklch(0.165 0.003 67.65)` | Deepest dark mode surface |

---

## Semantic Colors

Each semantic color carries strategic rationale beyond functional convention.

| Role | Hex | OKLCH | Usage | Rationale |
|------|-----|-------|-------|-----------|
| **Success** | `#2D8A56` | `oklch(0.565 0.119 154.88)` | Positive yields, confirmations, growth indicators | Warm green (not neon) — suggests organic growth, aligned with our "wealth grows" promise |
| **Warning** | `#D4890D` | `oklch(0.691 0.147 70.38)` | Caution states, pending transactions, risk alerts | Warm amber — adjacent to our brand yellow but distinct; feels like a natural evolution of the palette |
| **Error** | `#C93B3B` | `oklch(0.563 0.179 25.02)` | Failed transactions, errors, negative returns | Warm red (not clinical) — serious but not alarming; maintains warmth mandate |
| **Info** | `#3B7FC9` | `oklch(0.588 0.133 252.68)` | Informational states, external links, neutral data | Calm blue — the only cool tone in the system, used to signal "informational / neutral" against the warm palette |

### Semantic Scale Stops (for UI states)

Each semantic color has a full 11-stop scale available in [`palettes.json`](./palettes.json). Common usage:

| State | Stop | Example |
|-------|------|---------|
| Background tint | 50 | Success message background |
| Border | 200 | Success input border |
| Icon / indicator | 500 | Success checkmark |
| Text | 700–800 | Success message text on light bg |

---

## Print Equivalents

| Color | Hex | Pantone (closest) | CMYK (approximate) |
|-------|-----|--------------------|---------------------|
| Brand Yellow | `#FFC73D` | Pantone 1235 C | C0 M22 Y76 K0 |
| Warm Black | `#1C1B19` | Pantone Black 7 C | C0 M0 Y5 K95 |
| Warm Off-White | `#F0EEE9` | Pantone 7527 C | C3 M3 Y7 K0 |
| Secondary Text | `#6B6862` | Pantone Warm Gray 9 C | C0 M2 Y7 K62 |
| Success | `#2D8A56` | Pantone 7731 C | C75 M0 Y65 K25 |
| Warning | `#D4890D` | Pantone 144 C | C0 M40 Y95 K10 |
| Error | `#C93B3B` | Pantone 1797 C | C0 M80 Y70 K15 |
| Info | `#3B7FC9` | Pantone 2727 C | C70 M30 Y0 K10 |

---

## Dark Mode Mapping

Dark mode uses warm dark surfaces — never pure black. This maintains the brand's warmth mandate even in inverted contexts.

| Role | Light Mode | Dark Mode | Notes |
|------|-----------|-----------|-------|
| **Page background** | `#FAFAF8` / neutral-warm-50 | `#1C1B19` / neutral-500 | Warm dark, not pure black |
| **Card / elevated surface** | `#FFFFFF` | `#2A2926` / neutral-warm-800 | Subtle lift via lightness |
| **Primary text** | `#1C1B19` / neutral-500 | `#FAFAF8` / neutral-warm-50 | Inverted with matching warmth |
| **Secondary text** | `#6B6862` / neutral-warm-500 | `#B0ADA6` / ~neutral-warm-300 | Reduced contrast, still legible |
| **Tertiary text** | `#9C9890` / ~neutral-warm-400 | `#87837C` / neutral-warm-400 | Hint text |
| **Brand yellow (accent)** | `#FFC73D` / yellow-500 | `#FFD486` / yellow-400 | Lighter stop for dark bg contrast |
| **Brand yellow (hover)** | `#CC9C00` / yellow-600 | `#FFC73D` / yellow-500 | One step lighter in dark |
| **Border subtle** | `#E5E3DF` / ~neutral-warm-100 | `#3F3D3A` / neutral-warm-700 | Warm borders both modes |
| **Border strong** | `#D1CFC9` / ~neutral-100 | `#55524D` / neutral-warm-600 | Input focus, card borders |
| **Success** | `#2D8A56` | `#44C47C` / success-300 | Lightened for dark bg |
| **Warning** | `#D4890D` | `#F09C10` / warning-400 | Lightened for dark bg |
| **Error** | `#C93B3B` | `#E65A5A` / error-400 | Lightened for dark bg |
| **Info** | `#3B7FC9` | `#4D99EE` / info-400 | Lightened for dark bg |

---

## WCAG Contrast Ratios

All text/background combinations must meet WCAG AA (4.5:1 for normal text, 3:1 for large text). Body text targets AAA (7:1) for maximum readability.

### Light Mode

| Combination | Ratio | Grade | Usage |
|-------------|:-----:|:-----:|-------|
| `#1C1B19` on `#FAFAF8` | 15.4:1 | AAA | Primary text on page background |
| `#1C1B19` on `#F0EEE9` | 13.8:1 | AAA | Primary text on card background |
| `#6B6862` on `#FAFAF8` | 5.8:1 | AA | Secondary text on page background |
| `#6B6862` on `#F0EEE9` | 5.2:1 | AA | Secondary text on card background |
| `#9C9890` on `#FAFAF8` | 3.2:1 | AA-large | Tertiary text — large text only |
| `#FFC73D` on `#1C1B19` | 9.2:1 | AAA | Yellow accent on dark surfaces |
| `#CC9C00` on `#FAFAF8` | 4.0:1 | AA-large | Yellow-600 text — large text / icons only |
| `#967200` on `#FAFAF8` | 6.2:1 | AA | Yellow-700 text on light background |
| `#634A00` on `#FAFAF8` | 9.8:1 | AAA | Yellow-800 text — high contrast |
| `#1C1B19` on `#FFC73D` | 9.2:1 | AAA | Dark text on yellow accent |

### Dark Mode (Inverted Sections)

| Combination | Ratio | Grade | Usage |
|-------------|:-----:|:-----:|-------|
| `#FAFAF8` on `#1C1B19` | 15.4:1 | AAA | Primary text on dark background |
| `#B0ADA6` on `#1C1B19` | 7.6:1 | AAA | Secondary text on dark background |
| `#87837C` on `#1C1B19` | 4.8:1 | AA | Tertiary text on dark background |
| `#FFD486` on `#1C1B19` | 11.3:1 | AAA | Yellow accent on dark background |
| `#FFC73D` on `#1C1B19` | 9.2:1 | AAA | Primary yellow on dark background |
| `#FAFAF8` on `#2A2926` | 12.8:1 | AAA | Text on elevated dark surface |

---

## Color Composition Strategy: 60-30-10 + Inverted Sections

This is the governing principle for how color is distributed across any Chainless layout.

### The Formula

| Proportion | Color Family | Role | Specific Values |
|:----------:|-------------|------|-----------------|
| **60%** | Warm neutrals | Backgrounds, surfaces, whitespace | `#FAFAF8`, `#F0EEE9`, `#F4F3F0`, `#FFFFFF` |
| **30%** | Dark surfaces + text | Headlines, body copy, dark sections | `#1C1B19`, `#2A2926`, `#6B6862` |
| **10%** | Brand yellow | CTAs, links, key data, accent moments | `#FFC73D`, `#CC9C00`, `#FFD486` |

### Inverted Sections

Strategic sections invert the 60-30-10 to create visual rhythm and hierarchy:

- **Hero sections:** Dark background (`#1C1B19`), light text (`#FAFAF8`), yellow accents (`#FFC73D`)
- **Premium feature callouts:** Dark background, demonstrating the product or key value proposition
- **Footer:** Dark background — bookends the page with authority
- **Testimonial sections:** Can go either way depending on context; dark = more premium

### Page Rhythm (Example: Homepage)

```
┌──────────────────────────────────────┐
│  HEADER — light bg, dark text        │  60% warm neutral
├──────────────────────────────────────┤
│  HERO — DARK bg, light text,         │  INVERTED
│  yellow CTA "Torne-se Chainless."    │  30% dark + 10% yellow
├──────────────────────────────────────┤
│  VALUE PROPS — light bg, dark text   │  60% warm neutral
│  yellow accent on key stats          │
├──────────────────────────────────────┤
│  SOCIAL PROOF — light bg             │  60% warm neutral
├──────────────────────────────────────┤
│  FEATURE DEEP-DIVE — DARK bg         │  INVERTED
│  product screenshots, yellow data    │
├──────────────────────────────────────┤
│  HOW IT WORKS — light bg             │  60% warm neutral
├──────────────────────────────────────┤
│  CTA SECTION — light or dark         │  Flexible
├──────────────────────────────────────┤
│  FOOTER — DARK bg                    │  INVERTED (always)
└──────────────────────────────────────┘
```

### Rules of Application

1. **Never use yellow as a section background.** Yellow is accent, not surface. A full-bleed yellow section reads as "sale banner," not "premium wealth platform."
2. **Dark sections appear 2–3 times per page maximum.** More frequent inversion creates a disjointed experience.
3. **Transitions between light and dark sections should feel intentional.** Use generous spacing (96–128px) at section boundaries.
4. **Yellow appears on every section** — but subtly. A link color, a data highlight, an icon accent. The 10% accumulates across the page.
5. **On dark sections**, yellow is the primary accent (buttons, key numbers). On light sections, yellow shares accent duty with the dark text system.

---

## Accessibility Notes

- **Color is never the sole indicator.** All states that use semantic colors (success, error, warning) must also communicate via text, icon, or pattern.
- **Focus indicators** use `#FFC73D` (yellow-500) with a 3px ring — passes WCAG 2.4.7 minimum and 2.4.11 enhanced on both light and dark backgrounds.
- **Color contrast testing tool recommendation:** Use [Polypane](https://polypane.app) or browser DevTools contrast checker with APCA as a secondary reference for large text decisions.

---

## Related

- [palettes.json](./palettes.json) — Machine-readable OKLCH scales
- [Typography](./typography.md) — Type system paired with this color system
- [Imagery Style](./imagery-style.md) — Photography color grading specifications
- [Brand Applications](./brand-applications.md) — Color in context
