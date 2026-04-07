# Color System

> Phase: identity | Brand: chainless | Reflects: shipped implementation as of 2026-04-07

---

## Design Philosophy

Chainless uses color with the restraint of a premium brand and the confidence of one that doesn't need to shout. The system is built on three principles derived from the brand strategy:

1. **Warm undertones everywhere** — Every neutral, every background, every dark surface leans warm (yellow-amber undertone), never cool (blue-gray). This is the single micro-decision that separates "warm authority" (our Magician+Ruler blend) from "cold institution." Banks are blue-gray. We are warm amber.

2. **Accent sparingly, neutral generously** — The brand yellow `#FFC73D` is our 10% accent. It appears on primary CTAs, key data highlights, active states, and brand moments — never as a background fill for large areas.

3. **Dark-first atmosphere** — The shipped site is dark-dominant (`#1C1B19` as body background). Dark surfaces create cinematic depth for the hero video, atmospheric glows, and glassmorphism effects. Light surfaces (`#FAFAF8`) are defined as tokens but reserved for specific contexts (transparency/legal pages).

---

## Brand Colors

### Primary — Brand Yellow

| Stop | Hex | CSS Token | Usage |
|------|-----|-----------|-------|
| 50 | `#FFF8F0` | `--color-yellow-50` | Tinted backgrounds, yellow wash |
| 100 | `#FFF5E8` | `--color-yellow-100` | Hover backgrounds, subtle highlights |
| 200 | `#FFE8C6` | `--color-yellow-200` | Light accent fills, selection backgrounds |
| 300 | `#FFDEA9` | `--color-yellow-300` | Decorative elements, progress bars |
| 400 | `#FFD486` | `--color-yellow-400` | Secondary buttons, icons, hover yellow |
| **500** | **`#FFC73D`** | **`--color-yellow-500`** | **Primary accent — CTAs, links, key data, active states** |
| 600 | `#CC9C00` | `--color-yellow-600` | Hover on primary buttons |
| 700 | `#967200` | `--color-yellow-700` | Active/pressed primary buttons |
| 800 | `#634A00` | `--color-yellow-800` | High-contrast yellow text on light backgrounds |
| 900 | `#372800` | `--color-yellow-900` | Darkest yellow — text emphasis on yellow tints |
| 950 | `#201600` | `--color-yellow-950` | Near-black warm — extreme contrast |

**Source:** `#FFC73D` is the preserved Chainless brand yellow. The 500 step preserves it exactly. Used throughout: CTA buttons, eyebrow labels, gold hairlines, selection highlight, yield curve stroke.

### Primary — Dark Neutrals (Warm Espresso)

| Stop | Hex | CSS Token | Usage |
|------|-----|-----------|-------|
| 50 | `#E8E5DF` | `--color-dark-50` | Borders, subtle dividers |
| 100 | `#D1CBC1` | `--color-dark-100` | Input borders, card strokes |
| 200 | `#9F9B93` | `--color-dark-200` | Disabled text, placeholders |
| 300 | `#706D67` | `--color-dark-300` | Tertiary text, metadata |
| 400 | `#44423E` | `--color-dark-400` | Secondary text on dark |
| **500** | **`#1C1B19`** | **`--color-dark-500`** | **Body background, primary dark surface** |
| 600 | `#181716` | `--color-dark-600` | Deeper dark surface (yield, borrow, social proof sections) |
| 700 | `#141312` | `--color-dark-700` | Dark card elevated |
| 800 | `#0F0E0D` | `--color-dark-800` | Near-black dark |
| 900 | `#080706` | `--color-dark-900` | Deepest dark |
| 950 | `#040403` | `--color-dark-950` | Absolute dark |

**Strategic rationale:** Warm blacks (not pure `#000`) prevent the cold, clinical feel of institutional finance. The warm undertone at ~84° hue places these in the amber family — related to our yellow, creating subliminal harmony.

### Extended Palette — Warm Neutrals

The backbone of the light-surface system. Defined as tokens, used primarily on the transparency page and as semantic text colors.

| Stop | Hex | CSS Token | Usage |
|------|-----|-----------|-------|
| 50 | `#F0EEE9` | `--color-warm-50` | Surface warm (= `--color-surface-warm`) |
| 100 | `#E3DFD7` | `--color-warm-100` | Secondary background, card surfaces |
| 200 | `#C6C0B6` | `--color-warm-200` | Scrollbar thumb, tertiary borders |
| 300 | `#A4A097` | `--color-warm-300` | Scrollbar hover, disabled elements |
| 400 | `#87837C` | `--color-warm-400` | Tertiary text, captions |
| 500 | `#6B6862`` | `--color-warm-500` | Secondary text (light mode) |
| 600 | `#55524D` | `--color-warm-600` | Strong secondary text |
| 700 | `#3F3D3A` | `--color-warm-700` | Emphasis text on light, Doppelrand ring hover |
| 800 | `#2D2C29` | `--color-warm-800` | Elevated dark surfaces |
| 900 | `#1A1917` | `--color-warm-900` | Dark mode background |
| 950 | `#0F0E0D` | `--color-warm-950` | Deepest dark mode surface |

---

## Surface Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-surface` | `#FAFAF8` | Light page background (transparency page) |
| `--color-surface-warm` | `#F0EEE9` | Warm secondary surface |
| `--color-surface-muted` | `#F4F3F0` | Muted tertiary surface |
| `--color-surface-dark` | `#1C1B19` | Primary dark surface (= body bg) |
| `--color-surface-dark-elevated` | `#2A2926` | Elevated dark surface (tooltips, overlays) |

---

## Semantic Text Colors

| Token | Value | Context |
|-------|-------|---------|
| `--color-text-primary` | `#FAFAF8` | Primary text on dark backgrounds |
| `--color-text-primary-light` | `#1C1B19` | Primary text on light backgrounds |
| `--color-text-secondary` | `#B0ADA6` | Secondary text on dark |
| `--color-text-secondary-light` | `#6B6862` | Secondary text on light |
| `--color-text-tertiary` | `#9E9A93` | Tertiary text, metadata |
| `--color-text-muted` | `#9A9590` | Muted text, placeholders |

---

## Semantic Colors

Tuned for WCAG AA (4.5:1) contrast on the dark-500 (`#1C1B19`) body background.

| Role | Hex | CSS Token | Usage |
|------|-----|-----------|-------|
| **Success** | `#3DA66A` | `--color-success` | Positive yields, confirmations, growth indicators |
| **Warning** | `#D4890D` | `--color-warning` | Caution states, pending transactions, risk alerts |
| **Error** | `#E05555` | `--color-error` | Failed transactions, errors, negative returns |
| **Info** | `#4A90DA` | `--color-info` | Informational states, external links, neutral data |

**Note:** These were adjusted from the original spec values to pass contrast on the shipped dark background. The original spec assumed light-mode default.

**Additional semantic accent:** `emerald-400` (Tailwind built-in) is used for positive metric accents in component-level contexts (e.g., "+2.4%" in BorrowCredit, live pulse dot).

---

## Doppelrand Card Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--doppelrand-ring-color` | `rgba(255, 255, 255, 0.05)` | Outer ring border |
| `--doppelrand-ring-hover` | `rgba(255, 255, 255, 0.07)` | Outer ring hover |
| `--doppelrand-bg` | `rgba(255, 255, 255, 0.03)` | Outer shell background |

---

## Gold Glow / Hallmark Family

The atmospheric gold system uses `rgba(255, 199, 61, *)` at varying opacities for ambient glows and the Doppelrand hallmark accent:

| Opacity | Usage |
|---------|-------|
| 0.12 | Ambient section glow, button hover halo |
| 0.18 | Hallmark narrow variant center peak |
| 0.25 | Hallmark tiny variant center peak |
| 0.35 | Hallmark standard variant center peak |
| 0.40 | Hallmark hover state |

### Hallmark System

Three variants of the gold foil edge accent (top `1px` pseudo-element with centered gradient):

| Variant | Left/Right inset | Peak opacity |
|---------|-----------------|--------------|
| `.doppelrand-hallmark` | 24px | 35% |
| `.doppelrand-hallmark-narrow` | 12px | 18% |
| `.doppelrand-hallmark-tiny` | 6px | 25% |

---

## Glassmorphism Color System

Consistent glass treatment for interactive elements on dark backgrounds:

| Layer | Value |
|-------|-------|
| Background | `linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08))` |
| Border | `1px solid rgba(255,255,255,0.12)` |
| Inset highlight (top) | `inset 0 1px 0 rgba(255,255,255,0.18)` |
| Inset shadow (bottom) | `inset 0 -1px 0 rgba(255,255,255,0.03)` |
| Drop shadow | `0 4px 20px -4px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)` |
| Backdrop | `blur(12px) saturate(1.4)` |

---

## Page Background Distribution (Shipped)

| Background | Sections |
|------------|----------|
| `bg-dark-500` (`#1C1B19`) | Hero, ProofBar, Philosophy, Security, HowItWorks, CTA, Footer |
| `bg-dark-600` (`#181716`) | YieldSection, BorrowCredit, SocialProof |
| `bg-black` (`#000000`) | SpendCredit |
| `bg-surface` (`#FAFAF8`) | TransparencyContent (legal page only) |

---

## Selection & Focus

| Context | Value |
|---------|-------|
| Selection background | `#FFC73D` (yellow-500) |
| Selection text | `#1C1B19` (dark-500) |
| Focus visible outline | `2px solid var(--color-yellow-500)` |
| Focus visible offset | `2px` |
| Focus visible radius | `4px` |

---

## WCAG Contrast Ratios (Key Combinations)

### Dark Mode (Shipped Default)

| Combination | Ratio | Grade |
|-------------|:-----:|:-----:|
| `#FAFAF8` on `#1C1B19` | 15.4:1 | AAA |
| `#B0ADA6` on `#1C1B19` | 7.6:1 | AAA |
| `#9E9A93` on `#1C1B19` | 5.6:1 | AA |
| `#FFC73D` on `#1C1B19` | 9.2:1 | AAA |
| `#3DA66A` on `#1C1B19` | 5.3:1 | AA |
| `#E05555` on `#1C1B19` | 5.0:1 | AA |
| `#4A90DA` on `#1C1B19` | 4.6:1 | AA |
| `#D4890D` on `#1C1B19` | 5.5:1 | AA |
| `#FAFAF8` on `#181716` | 16.0:1 | AAA |
| `#FAFAF8` on `#000000` | 19.3:1 | AAA |

### Light Mode (Transparency Page)

| Combination | Ratio | Grade |
|-------------|:-----:|:-----:|
| `#1C1B19` on `#FAFAF8` | 15.4:1 | AAA |
| `#6B6862` on `#FAFAF8` | 5.8:1 | AA |

---

## Related

- [Typography](./typography.md) — Type system paired with this color system
- [Imagery Style](./imagery-style.md) — Photography and atmospheric treatment
- [Brand Applications](./brand-applications.md) — Color in context
- [../patterns/foundations/color-system.md](../patterns/foundations/color-system.md) — Token implementation
