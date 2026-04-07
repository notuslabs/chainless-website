# Brand Book Outline

> Phase: identity | Brand: chainless | Reflects: shipped implementation as of 2026-04-07

---

## Overview

A brand book for Chainless documenting the shipped visual identity: dark-first atmospheric aesthetic, Switzer + Zodiak typography, warm espresso palette with gold accents, Doppelrand card system, and cinematic motion. The book is designed with the same visual system it documents.

---

## Page-by-Page Outline

### Pages 1–2: Cover + Brand Platform

**Cover (Page 1)**
- Full-bleed `#FFC73D` background
- Chainless logo centered, `#1C1B19`
- "Brand Guidelines" in Switzer Light, small, bottom-center

**Brand Platform (Page 2)**
- "Torne-se Chainless" in Zodiak Regular, Display size, `#FAFAF8` on `#1C1B19`
- Purpose statement below: "We believe your wealth should answer to you — and only you."
- Maximum whitespace. The brand platform gets a page to itself.

### Pages 3–4: Brand Story + Strategy Recap

**Brand Story (Page 3)**
- Narrative: the origin of Chainless, the problem it solves, the future it envisions
- Written in the brand voice (confident, warm, clear)
- Pull quote in Zodiak: "Self-custody isn't a feature. It's the architecture."

**Strategy at a Glance (Page 4)**
- Archetype blend: Magician (70%) + Ruler (30%)
- Positioning: Premium x Self-Custody quadrant map
- Brand platform: "Torne-se Chainless"
- Values: five values listed with one-line descriptions

### Pages 5–6: Voice & Tone

**Voice Overview (Page 5)**
- The 60/40 split: premium warmth vs. defiant counter-positioning
- Four voice attributes: Confident, Defiant, Warm, Clear

**Do's and Don'ts — Copy (Page 6)**
- Side-by-side headline examples (do/don't) in PT-BR and EN
- Forbidden words list with alternatives
- Microcopy examples

### Pages 7–8: Logo System

**Logo Lockups (Page 7)**
- Approved lockups: primary horizontal, icon only, monochrome variations
- Clear space diagram
- Minimum sizes table

**Logo in Context (Page 8)**
- Logo on dark backgrounds (shipped default)
- Logo on light backgrounds (transparency page)
- Logo on brand yellow (premium moments)

### Pages 9–11: Color System

**Primary Palette (Page 9)**
- Brand Yellow scale (50–950) as color swatches with hex values
- Dark Neutral scale (50–950)
- Source indicators on `#FFC73D` (yellow-500) and `#1C1B19` (dark-500)

**Extended Palette + Semantics (Page 10)**
- Warm Neutral scale
- Semantic colors: success `#3DA66A`, warning `#D4890D`, error `#E05555`, info `#4A90DA`
- Surface tokens and text color tokens

**Atmospheric Color System (Page 11)**
- Glassmorphism color values
- Gold glow/hallmark family with opacity levels
- Doppelrand card color tokens
- Noise overlay specification
- Page background distribution chart

### Pages 12–13: Typography

**Type System (Page 12)**
- Switzer specimen: alphabet, weights (Light through Bold)
- Zodiak specimen: alphabet, weights (Light through ExtraBold), "Torne-se Chainless" set in its shipped style
- No monospace in shipped implementation

**Type Scale + Pairing Rules (Page 13)**
- Tokenized sizes: hero-heading, section-heading, small, caption, overline
- Pairing decision: "Is it a display heading? → Zodiak. Everything else → Switzer."
- Weight strategy: headings at 400, body at 400–500, buttons at 600
- Letter spacing chart

### Pages 14–15: Imagery & Atmosphere

**Atmospheric System (Page 14)**
- Mesh gradient specification and orb sizes
- Noise overlay details
- Section transition elements (SectionGlow, SectionFade)
- Glow size tokens

**Photography & Video Treatment (Page 15)**
- Dark-first rule: always overlayed, always contained
- Video treatments: sepia hero, frame scrubber editorial, ping-pong social proof
- Photography don'ts: no stock clichés, no crypto clichés, no luxury signaling

### Pages 16–17: Iconography & Data Viz

**Iconography (Page 16)**
- Phosphor Icons: duotone (primary), light (nav chrome), bold (emphasis arrows)
- Size grid: 14px, 15px, 20px, 22px, 26px
- Color inheritance rule
- Inline SVG exceptions (App Store, Google Play)

**Data Visualization (Page 17)**
- Animated counters (ProofBar)
- Yield curve SVG (hero)
- Token logo stacks
- MPC shard diagram

### Pages 18–19: Component Patterns

**Doppelrand Card System (Page 18)**
- Anatomy: outer shell + inner shell + hallmark
- 5 rendering modes (Doppelrand, Modern Dark, Minimal Dark, Luxury, Frosted Glass)
- Token values for ring, background, gap, radius

**Signature Patterns (Page 19)**
- Glassmorphism buttons with specular highlights
- Eyebrow pills with extreme letter-spacing
- Gold hairline rules with scale animation
- Concentric circle decorations (CTA)
- Section transition elements

### Page 20: Motion System

**Motion Signature**
- EASE_PREMIUM: `cubic-bezier(0.32, 0.72, 0, 1)`
- SPRING_SNAPPY: `stiffness: 200, damping: 20`
- SPRING_SMOOTH: `stiffness: 120, damping: 24`
- FadeUp: blur-fade-up from `y:40, blur:10px` over 0.9s
- StaggerItem: blur-fade from `y:30, blur:8px`, 0.12s stagger
- MagneticButton: 15% cursor tracking, SPRING_SNAPPY
- `prefers-reduced-motion` support

### Page 21: Closing

- "Torne-se Chainless" in Zodiak Regular, centered, `#FAFAF8` on `#1C1B19`
- Version: "v2.0 — April 2026 (reflects shipped implementation)"

---

## Production Notes

| Spec | Value |
|------|-------|
| **Format** | A4 landscape for digital distribution |
| **Digital format** | PDF + interactive Figma file |
| **Typefaces in book** | Switzer (body), Zodiak (display) |
| **Version control** | Semantic versioning (v2.0 = shipped identity sync) |

---

## Related

- [Logo System](./logo-directions.md)
- [Color System](./color-system.md)
- [Typography](./typography.md)
- [Imagery Style](./imagery-style.md)
- [Brand Applications](./brand-applications.md)
