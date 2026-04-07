# IDENTITY.md — Chainless Visual Identity

> Brand: chainless | Phase: identity | Reflects: shipped implementation as of 2026-04-07
> This document is the single authoritative identity reference. It synthesizes all identity sub-documents into one spec.

---

## Identity Summary

Chainless is a **dark-first, atmospheric, cinematic** brand built on warm espresso surfaces, restrained gold accents, editorial serif/sans typography, glassmorphism, and the signature Doppelrand double-shell card system.

**Archetype:** Magician 70% / Ruler 30%
**Platform:** "Torne-se Chainless"
**Voice:** Confident, Defiant, Warm, Clear

---

## 1. Color

### Brand Palette

| Scale | Key Stop | Hex | Role |
|-------|----------|-----|------|
| Yellow | 500 | `#FFC73D` | Primary accent — CTAs, links, key data, gold glows, hallmarks |
| Dark | 500 | `#1C1B19` | Body background, primary dark surface |
| Dark | 600 | `#181716` | Secondary dark surface (yield, borrow, social proof) |
| Warm | 50 | `#F0EEE9` | Light surface (reserved) |
| Surface | — | `#FAFAF8` | Light page background (transparency page only) |

Full 11-stop scales for yellow, dark, and warm neutrals — see [color-system.md](./color-system.md).

### Semantic Colors (A11y-Tuned for Dark)

| Role | Hex | Token |
|------|-----|-------|
| Success | `#3DA66A` | `--color-success` |
| Warning | `#D4890D` | `--color-warning` |
| Error | `#E05555` | `--color-error` |
| Info | `#4A90DA` | `--color-info` |

### Text Colors

| Token | Value | Context |
|-------|-------|---------|
| `--color-text-primary` | `#FAFAF8` | Primary on dark |
| `--color-text-secondary` | `#B0ADA6` | Secondary on dark |
| `--color-text-tertiary` | `#9E9A93` | Tertiary on dark |
| `--color-text-muted` | `#9A9590` | Muted/placeholder |
| `--color-text-primary-light` | `#1C1B19` | Primary on light |
| `--color-text-secondary-light` | `#6B6862` | Secondary on light |

### Composition

The shipped site is dark-dominant:
- **Body:** `bg-dark-500` (`#1C1B19`)
- **Sections:** `bg-dark-500`, `bg-dark-600`, or `bg-black`
- **Light pages:** `bg-surface` (`#FAFAF8`) — transparency/legal only
- **Yellow:** 10% accent — CTAs, eyebrows, hallmarks, glows. Never a section background.

### Selection & Focus

- Selection: `#FFC73D` background, `#1C1B19` text
- Focus ring: `2px solid var(--color-yellow-500)`, `2px` offset, `4px` radius

---

## 2. Typography

### Font Stack

| Role | Family | Source | CSS Variable |
|------|--------|--------|-------------|
| **Body** | Switzer | Fontshare (self-hosted woff2) | `--font-sans` |
| **Display** | Zodiak | Fontshare (self-hosted woff2) | `--font-serif` |

No monospace font is loaded in the shipped implementation.

### Scale

| Token | Value | Usage | Font |
|-------|-------|-------|------|
| `--text-hero-heading` | `clamp(3.5rem, 2.5rem + 4vw, 6.5rem)` (56–104px) | Hero headline | Zodiak |
| `--text-section-heading` | `clamp(2rem, 1.5rem + 2vw, 3.25rem)` (32–52px) | Section headings | Zodiak |
| `--text-small` | `0.9375rem` (15px) | Secondary text | Switzer |
| `--text-caption` | `0.8125rem` (13px) | Labels, helper text | Switzer |
| `--text-overline` | `0.5625rem` (9px) | Eyebrow labels | Switzer |
| (body default) | `1rem` (16px) | Body text | Switzer |

### Weight Strategy

- **Display headings:** Weight 400 (Regular) — Zodiak's character comes from its forms, not boldness
- **Body text:** Weight 400 (Regular)
- **Emphasis/nav:** Weight 500 (Medium)
- **Buttons/stats:** Weight 600 (SemiBold)
- **Bold accents:** Weight 700 (editorial highlights, ghost numbers)

### Key Type Treatments

| Element | Font | Weight | Size | Leading | Tracking |
|---------|------|--------|------|---------|----------|
| Hero headline | Zodiak | 400 | 56–104px (clamp) | 1.03 | -0.02em |
| Section heading | Zodiak | 400 | 32–52px (clamp) | 1.06 | -0.02em |
| Card title | Zodiak | 400 | varies | 1.15 | -0.01em |
| Body text | Switzer | 400 | 16px | 1.7 | default |
| Eyebrow | Switzer | 600 | 9px | — | 0.2–0.25em |
| Button | Switzer | 600 | 16px | tight | default |
| Nav link | Switzer | 500 | 14–15px | — | default |

### Pairing Rule

If it's a **display heading or brand moment** → Zodiak. **Everything else** → Switzer.

---

## 3. Logo

The Chainless logo is **preserved** — a 3-element geometric logomark (top bar, bottom bar, center diamond) with "chainless" wordmark as SVG paths. Implemented as a React component.

| Context | Color |
|---------|-------|
| On dark (default) | `#FAFAF8` |
| On light | `#1C1B19` |
| On yellow (premium) | `#1C1B19` |

Clear space: 2x cap-height minimum. Minimum width: 120px.

---

## 4. Imagery & Atmosphere

### Atmospheric System (Primary Visual Language)

The shipped site's dominant visual language is atmospheric effects, not photography:

- **Mesh gradient:** 4 animated blur orbs (yellow/amber) behind hero, infinite orbit
- **Noise overlay:** SVG feTurbulence, `opacity: 0.022`, applied globally
- **Section glows:** SectionGlow (48–64px) and SectionFade (32–48px) between sections
- **Gold hallmarks:** 1px top gradient accents on Doppelrand cards

### Photography Rules

1. Always on dark backgrounds
2. Always overlayed (dark tint, sepia, blur, or glassmorphism)
3. Always contained in cards or defined regions
4. Never full-bleed, never on light surfaces

### Video Treatments

- Hero: sepia-filtered, mirrored, behind mesh gradient
- Editorial: canvas frame scrubber (121 frames), scroll-driven
- Spend credit: auto-playing with 4-sided edge fades
- Social proof: ping-pong playback, blurred backgrounds

### Iconography

**Phosphor Icons** — duotone (primary), light (nav chrome), bold (emphasis arrows). Sizes: 14–26px. Color: `currentColor` inheritance.

---

## 5. Motion

### Core Tokens

| Name | Value |
|------|-------|
| `EASE_PREMIUM` | `cubic-bezier(0.32, 0.72, 0, 1)` / `[0.32, 0.72, 0, 1]` |
| `SPRING_SNAPPY` | `{ stiffness: 200, damping: 20 }` |
| `SPRING_SMOOTH` | `{ stiffness: 120, damping: 24 }` |

### Signature Animation: Blur-Fade-Up

```
initial: { opacity: 0, y: 40, filter: "blur(10px)" }
animate: { opacity: 1, y: 0, filter: "blur(0px)" }
duration: 0.9s, ease: EASE_PREMIUM
viewport: { once: true, margin: "-80px" }
```

### Motion Components

| Component | Behavior |
|-----------|----------|
| **FadeUp** | Blur-fade-up, 0.9s, scroll-triggered |
| **StaggerContainer/Item** | Staggered reveal, 0.12s delay, 0.8s per item |
| **TextReveal** | Word-by-word, 0.06s stagger per word |
| **MagneticButton** | 15% cursor tracking, SPRING_SNAPPY, `scale: 0.97` on tap |
| **ParallaxSection** | Scroll-linked Y offset, `speed: 0.15` default |
| **CountUp** | Scroll-triggered counter, cubic ease-out, 2s |
| **ScrollProgress** | Scroll position as 0–1 value |

### Reduced Motion

`prefers-reduced-motion: reduce` — shard pulses stop (`animation: none`), AnimatedCounter respects preference.

---

## 6. Surfaces & Elevation

### Doppelrand Card (Signature)

| Property | Value |
|----------|-------|
| Outer radius | `1.125rem` (18px) |
| Inner radius | `calc(1.125rem - 0.375rem)` = `0.75rem` (12px) |
| Gap | `0.375rem` (6px) |
| Outer ring | `ring-1 ring-white/[0.05]` |
| Outer bg | `bg-white/[0.03]` |
| Hallmark | 1px top gradient, gold at 35% center opacity |

### Shadow System

| Class | Context |
|-------|---------|
| `.shadow-diffuse-warm` | Light surface cards |
| `.shadow-diffuse-dark` | Dark surface cards |
| `.shadow-ambient-warm` | Premium light elevation (5-layer) |
| `.shadow-ambient-dark` | Premium dark elevation (5-layer) |
| `.inner-highlight` | Light inner card (inset white top + border) |
| `.inner-highlight-dark` | Dark inner card (inset subtle white) |

### Glassmorphism

- `backdrop-filter: blur(12px) saturate(1.4)`
- Multi-layer white gradient background (4–12% opacity)
- Specular highlight: radial-gradient white spot
- Used on: store buttons, nav pill, overlay cards

### Other Radius Values

| Value | Usage |
|-------|-------|
| `rounded-2xl` (16px) | Buttons, nav pill, non-Doppelrand cards |
| `rounded-xl` (12px) | Nav elements, icon containers |
| `rounded-lg` (8px) | Nav links, eyebrow pills |
| `rounded-full` | Avatars, token icons, badges, status dots |

---

## 7. Layout

| Token | Value |
|-------|-------|
| `--container-content` | `1200px` |
| Section padding | `py-32 md:py-44` (128–176px) |
| CTA padding | `py-40 md:py-52` (extra generous) |
| Card inner padding | `p-8 md:p-10` (32–40px) |
| Standard grid gap | `gap-5 md:gap-6` (20–24px) |
| Horizontal padding | `px-4` (16px) |

### Grid Patterns

- **Asymmetric bento:** 5/7 and 7/5 splits (Philosophy, Yield, Spend, Security)
- **Equal thirds:** 3-column (BorrowCredit, SocialProof)
- **Centered:** Single column (Hero, CTA, ProofBar)

---

## Divergences from Original Spec

This identity document reflects what shipped. Key differences from the original 2026-03-22 identity spec:

| Area | Original Spec | Shipped |
|------|--------------|---------|
| Body font | Söhne (Klim, commercial) | **Switzer** (Fontshare, free) |
| Display font | Fraunces (Google Fonts) | **Zodiak** (Fontshare) |
| Monospace | IBM Plex Mono | **Not loaded** |
| Base font size | 18px | **16px** (Tailwind default) |
| Heading weight | Bold/SemiBold (600–700) | **Regular (400)** |
| Color mode | Light-mode default, strategic dark sections | **100% dark** |
| Semantic success | `#2D8A56` | **`#3DA66A`** (a11y-tuned for dark) |
| Semantic error | `#C93B3B` | **`#E05555`** (a11y-tuned for dark) |
| Semantic info | `#3B7FC9` | **`#4A90DA`** (a11y-tuned for dark) |
| Hero heading max | 72px (4.5rem) | **104px (6.5rem)** |
| Button radius | Pill (full radius) | **`rounded-2xl` (16px)** |
| Phosphor weight | Line-based (Regular) | **Duotone (primary)** |
| "Torne-se Chainless." | Fraunces Bold Italic, with period | **Zodiak Regular, no period** |

---

## File Index

| File | Description |
|------|-------------|
| [color-system.md](./color-system.md) | Full color palette, surfaces, semantics, glassmorphism, WCAG ratios |
| [typography.md](./typography.md) | Font stacks, type scale, weights, pairing rules, responsive behavior |
| [logo-directions.md](./logo-directions.md) | Logo lockups, clear space, minimum sizes, usage rules |
| [imagery-style.md](./imagery-style.md) | Atmospheric system, photography treatment, video, iconography, data viz |
| [brand-applications.md](./brand-applications.md) | Every section of the shipped site documented with specifications |
| [brand-book.md](./brand-book.md) | 21-page brand book outline for the shipped identity |

---

## Related

- [../audit/INDEX.md](../audit/INDEX.md) — Brand audit (typography crisis, coherence scoring)
- [../patterns/INDEX.md](../patterns/INDEX.md) — Design system tokens and components
- [../strategy/INDEX.md](../strategy/INDEX.md) — Brand strategy (positioning, archetype, platform)
- [../verbal/INDEX.md](../verbal/INDEX.md) — Voice, tone, and messaging
