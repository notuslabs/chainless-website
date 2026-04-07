# Logo System

> Phase: identity | Brand: chainless | Reflects: shipped implementation as of 2026-04-07

---

## Existing Mark — Preserved

The Chainless logo is a preserved brand asset with proven recognition equity. The logo mark consists of three SVG elements: a top bar, a bottom bar, and a center diamond. The wordmark "chainless" is rendered as custom SVG paths.

**Strategic rationale for preservation:** The Chainless name and mark carry the brand's most valuable semantic asset — "without chains" — which maps directly to the sovereignty-first positioning.

---

## Logo Implementation

The logo is implemented as a React component (`chainless-logo.tsx`) with configurable color and size. It renders:

1. **Logomark** — 3-element geometric symbol (top bar, bottom bar, middle diamond)
2. **Wordmark** — "chainless" as SVG paths

### Color Behavior

| Context | Logo Color | Background |
|---------|-----------|------------|
| Navbar (transparent) | `#FAFAF8` | Transparent over dark hero |
| Navbar (scrolled) | `#FAFAF8` | Glass pill with backdrop-blur |
| Footer | `#FAFAF8` | `#000000` |
| Light page (transparency) | `#1C1B19` | `#FAFAF8` |

---

## Logo Lockups

### Primary Lockup (Horizontal)

Icon + "chainless" wordmark, arranged horizontally. Default placement: top-left of page in the navbar.

- **Minimum width:** 120px (digital), 30mm (print)
- **Color:** `#FAFAF8` on dark backgrounds (shipped default), `#1C1B19` on light backgrounds

### Icon Only

The symbol mark without wordmark. Use when brand context is already established.

- **Minimum size:** 24px (digital), 6mm (print)
- **Use cases:** Favicon (32x32), app icon, social profile pictures, loading states

### Monochrome Variations

| Variation | Usage | Color |
|-----------|-------|-------|
| **Light mono** | Dark backgrounds (shipped default) | `#FAFAF8` |
| **Dark mono** | Light backgrounds, print on white stock | `#1C1B19` |
| **Single-color** | One-color print, embossing, engraving | Any single brand color |

### On Brand Yellow

Logo in `#1C1B19` on a `#FFC73D` background. Highest-impact brand expression — use sparingly.

- **Use cases:** Business cards, brand merchandise, campaign hero moments
- **Rule:** Never place the yellow logo on a yellow background. Always dark mark on yellow ground.

---

## Clear Space

Measured using the **cap-height** of the "C" in "chainless" (referred to as **1x**).

| Context | Clear space (all sides) |
|---------|------------------------|
| **Primary lockup** | 2x minimum |
| **Icon only** | 1x minimum |
| **Hero placement** | 4x recommended |

---

## Minimum Sizes

| Lockup | Digital (px) | Print (mm) |
|--------|:------------:|:----------:|
| Primary horizontal | 120px wide | 30mm wide |
| Icon only | 24px | 6mm |

---

## Pairing with Brand Platform Text

"Torne-se Chainless" is the brand platform and frequently appears alongside the logo.

### Logo + "Torne-se Chainless"

- Platform text set in **Zodiak** Regular (not italic in shipped implementation)
- Placement: hero section, separate from navbar logo
- Size relationship: platform text at Display/Hero size, logo in navbar — they don't appear adjacent

### "Torne-se Chainless" Standalone (Hero)

- Set in **Zodiak** Regular, `--text-hero-heading` size (56–104px)
- Color: `#FAFAF8` on dark (`#1C1B19`) background
- Tracking: `-0.02em`
- Line height: `1.03`
- Text shadow: warm gold halo (`rgba(255, 199, 61, 0.08)` at 80px blur)
- **No period in shipped implementation** (original spec included period)

---

## Logo Don'ts

1. **Don't distort.** Never stretch, squeeze, rotate, or skew.
2. **Don't recolor.** Use only approved mono variations.
3. **Don't add elements.** No taglines or decorative elements within clear space.
4. **Don't place on busy backgrounds.** Ensure sufficient contrast.
5. **Don't recreate.** Always use the SVG component.
6. **Don't animate the logo mark.** The mark itself is static.
7. **Don't outline.** Never stroke-only treatment.

---

## Related

- [Color System](./color-system.md) — Logo color contexts
- [Typography](./typography.md) — Wordmark font context
- [Brand Applications](./brand-applications.md) — Logo in touchpoint contexts
