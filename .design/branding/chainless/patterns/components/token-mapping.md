# Token Mapping: Brand Tokens → Tailwind v4

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Overview

This file maps brand design tokens to Tailwind v4 `@theme inline` declarations. Copy-paste ready for `globals.css`.

The current `globals.css` already defines color tokens correctly. This document adds the **missing tokens** that should be added to formalize patterns currently expressed as hardcoded values.

---

## Current Tokens (Already in `@theme inline`)

These are already implemented and correct. No changes needed.

```css
@theme inline {
  /* Typography — ✓ correct */
  --font-sans: 'Satoshi', 'General Sans', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-serif: 'Fraunces', 'Newsreader', 'Georgia', 'Times New Roman', serif;
  --font-mono: 'IBM Plex Mono', 'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace;

  /* Brand Yellow — ✓ all 11 stops correct */
  --color-yellow-50 through --color-yellow-950

  /* Warm Neutrals — ✓ all 11 stops correct */
  --color-warm-50 through --color-warm-950

  /* Dark Neutrals — ✓ all 11 stops correct */
  --color-dark-50 through --color-dark-950

  /* Semantic — ✓ correct */
  --color-success, --color-warning, --color-error, --color-info

  /* Surface — ✓ correct */
  --color-surface, --color-surface-warm, --color-surface-muted,
  --color-surface-dark, --color-surface-dark-elevated
}
```

---

## Delta Tokens (To Add)

These tokens formalize patterns that are currently hardcoded across components. Add to the `@theme inline` block in `globals.css`.

### Semantic Text Colors

Addresses the `text-[#FAFAF8]` problem (13 files).

```css
@theme inline {
  /* Semantic text colors */
  --color-text-primary: #FAFAF8;           /* body text on dark surfaces */
  --color-text-primary-light: #1C1B19;     /* body text on light surfaces */
  --color-text-secondary: #B0ADA6;         /* secondary on dark */
  --color-text-secondary-light: #6B6862;   /* secondary on light */
  --color-text-tertiary: #87837C;          /* tertiary on dark */
  --color-text-muted: #6B6862;             /* muted on dark */
}
```

**Usage**: Replace `text-[#FAFAF8]` → `text-text-primary` across all components.

### Easing

Addresses the `ease-[cubic-bezier(0.32,0.72,0,1)]` repetition (8 files).

```css
@theme inline {
  /* Easing */
  --ease-premium: cubic-bezier(0.32, 0.72, 0, 1);
}
```

**Usage**: Replace `ease-[cubic-bezier(0.32,0.72,0,1)]` → `ease-premium` in Tailwind transitions. In Framer Motion, import `EASE_PREMIUM` from `motion.tsx`.

### Container Width

Addresses the `max-w-[1200px]` repetition (10 files).

```css
@theme inline {
  /* Layout */
  --container-content: 1200px;
}
```

**Usage**: Replace `max-w-[1200px]` → `max-w-[var(--container-content)]` or define a utility class `.container-content { max-width: var(--container-content); }`.

Note: `max-w-7xl` (1280px) is the Tailwind container; `1200px` is the content container used within sections. Both are valid — 1200px is the tighter content width.

### Micro Type Sizes

Addresses hardcoded `text-[10px]`, `text-[11px]`, `text-[13px]`, `text-[15px]` (11 files).

These map to the type scale from the identity spec:

```css
@theme inline {
  /* Micro type sizes (extend Tailwind's scale) */
  --text-overline: 0.75rem;    /* 12px — overline (identity spec) */
  --text-caption: 0.8125rem;   /* 13px — caption */
  --text-small: 0.9375rem;     /* 15px — body small / code */
}
```

**Note**: `text-[10px]` and `text-[11px]` are below the identity spec's minimum (12px overline). These should be reviewed:
- `10px` is used for overline labels — consider bumping to 12px per spec
- `11px` is used for secondary metadata — consider bumping to 13px (caption)

### Doppelrand Tokens

Addresses the repeated Doppelrand pattern (6 files, identical classes).

```css
@theme inline {
  /* Doppelrand card system */
  --doppelrand-radius-outer: 2.25rem;   /* 36px */
  --doppelrand-radius-inner: calc(2.25rem - 0.375rem);  /* ~30px */
  --doppelrand-gap: 0.375rem;           /* 6px (p-1.5) */
  --doppelrand-ring-color: rgba(255, 255, 255, 0.04);
  --doppelrand-ring-hover: rgba(255, 255, 255, 0.08);
  --doppelrand-bg: rgba(255, 255, 255, 0.02);
}
```

### Doppelrand Inner Gradient

The inner card background gradient is copy-pasted across 6 files:

```css
/* Standard Doppelrand inner gradient */
.doppelrand-inner-gradient {
  background: linear-gradient(
    145deg,
    rgba(42, 41, 38, 0.7) 0%,
    rgba(28, 27, 25, 0.9) 50%,
    rgba(24, 23, 22, 0.95) 100%
  );
}
```

### Atmospheric Glow Tokens

Addresses the repeated glow orb patterns (7 files).

```css
@theme inline {
  /* Atmospheric glow sizes */
  --glow-lg: 500px;
  --glow-md: 400px;
  --glow-sm: 200px;
  --glow-blur-lg: 200px;
  --glow-blur-md: 180px;
  --glow-blur-sm: 80px;
}
```

---

## Heading Clamp Formulas

These fluid type sizes are used across section headers (7 files). They should map to the type scale:

| Current Hardcoded | Identity Spec Level | Recommended Token |
|-------------------|--------------------|-|
| `clamp(2.75rem, 2rem+3.3vw, 5.25rem)` | Display (custom, hero-only) | Keep as-is (hero-specific) |
| `clamp(2.5rem, 1.8rem+2.8vw, 4rem)` | Between H1 and Display | CTA section specific |
| `clamp(2rem, 1.5rem+2vw, 3.25rem)` | ~H2 | Section header default |
| `clamp(1.5rem, 1.17rem+1.4vw, 2.25rem)` | H3 | Subsection header |

The most-repeated is `clamp(2rem, 1.5rem+2vw, 3.25rem)` — used in 5+ section headers. This should be a CSS custom property:

```css
@theme inline {
  --text-section-heading: clamp(2rem, 1.5rem + 2vw, 3.25rem);
}
```

---

## Full Delta Summary

| Token Category | Count | Impact |
|----------------|:-----:|--------|
| Semantic text colors | 6 | Eliminates `text-[#FAFAF8]` in 13 files |
| Easing | 1 | Eliminates inline cubic-bezier in 8 files |
| Container width | 1 | Eliminates `max-w-[1200px]` in 10 files |
| Micro type sizes | 3 | Formalizes 11 files of inline sizes |
| Doppelrand system | 6 | Formalizes 6 files of copy-pasted pattern |
| Doppelrand gradient | 1 class | Eliminates inline style in 6 files |
| Atmospheric glow | 6 | Formalizes 7 files of glow values |
| Section heading | 1 | Eliminates repeated clamp in 5+ files |
| **Total delta** | **25** | |

---

## Implementation Priority

1. **`text-[#FAFAF8]` → `text-text-primary`** — highest impact, easiest change
2. **`EASE_PREMIUM` consolidation** — stop redeclaring in 7 files, import from `motion.tsx`
3. **`ease-premium` CSS token** — for Tailwind transition classes
4. **Doppelrand tokens** — extract to shared component (see `doppelrand.md`)
5. **Container width** — simple token addition
6. **Micro type sizes** — audit against identity spec minimums
7. **Atmospheric glow** — lower priority, decorative values
