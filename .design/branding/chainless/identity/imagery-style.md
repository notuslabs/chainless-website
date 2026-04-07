# Imagery Style

> Phase: identity | Brand: chainless | Reflects: shipped implementation as of 2026-04-07

---

## Design Philosophy

Chainless imagery serves the Magician+Ruler blend: it should simultaneously feel **aspirational** (Magician — "imagine this life of sovereignty") and **credible** (Ruler — "this is real, not a fantasy").

The shipped site is **dark-dominant and atmospheric**. Imagery exists within a cinematic environment of dark surfaces, warm glows, glass effects, and ambient motion. Photography is not the primary visual driver — the atmospheric system is.

---

## Atmospheric Visual System (Shipped)

The dominant visual language is not photography but **atmospheric effects on dark surfaces**:

### Mesh Gradient System

Animated blur orbs behind the hero section create a warm, living background:

| Orb | Size | Duration | Color |
|-----|------|----------|-------|
| Primary amber | 700x700px | 22s | Yellow-amber at low opacity |
| Secondary warm | 550x550px | 28s | Warm neutral |
| Tertiary center | 900px wide | 18s | Subtle pulse |
| Warm accent | 300x300px | 16s | Gold accent |

All orbit using linear easing with infinite repeat. Creates a subtle, living atmosphere behind the hero.

### Noise Overlay

Applied globally on `<body>`: `feTurbulence` SVG filter at `baseFrequency: 0.75`, `numOctaves: 4`. Opacity `0.022`. Fixed position, pointer-events none. Adds analog texture to the dark surfaces.

### Atmospheric Glow Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--glow-lg` | 500px | Large section glows |
| `--glow-md` | 400px | Medium accent glows |
| `--glow-sm` | 200px | Small focused glows |
| `--glow-blur-lg` | 200px | Large blur radius |
| `--glow-blur-md` | 180px | Medium blur radius |
| `--glow-blur-sm` | 80px | Small blur radius |

### Section Transitions

| Element | Height | Effect |
|---------|--------|--------|
| SectionGlow | 48–64px | Warm amber glow between sections |
| SectionFade | 32–48px | Dark gradient blend between sections |
| CTA top fade | 280px | Dissolve into CTA section |
| CTA bottom fade | 320px | Dissolve out of CTA section |

---

## Photography (Shipped Usage)

Photography appears in specific, controlled contexts — always within dark-tinted or overlayed containers:

### Philosophy Section
- Editorial photography inside Doppelrand cards
- Dark tint + sepia overlay on images
- Images fill 5 columns of a 12-column grid, text fills 7
- Subject matter: lifestyle environments suggesting financial sovereignty

### Editorial Break
- Canvas-based frame scrubber (121 frames)
- Cinematic scroll-driven reveal
- Dark overlay that peels back to reveal video content on scroll
- 320vh tall sticky section

### Social Proof
- Ping-pong blurred video backgrounds in testimonial cards
- Conic-gradient avatar glow rings around profile photos
- Fallback: gradient + initials when no photo available

### Yield Section
- Bitcoin coin photograph as card background
- Glassmorphism overlay on top of photography
- Dark atmospheric treatment

### Spend Credit
- Video with 4-sided edge fades (top, bottom, left, right)
- Heavy atmospheric yellow glows surrounding the video container

### Photography Treatment Rules (Derived from Implementation)

1. **Always on dark.** Photography never appears on light backgrounds in the shipped site.
2. **Always overlayed.** No raw photography — always has a dark tint, sepia filter, blur, or glassmorphism overlay.
3. **Contained.** Photography lives inside cards or defined regions, never full-bleed.
4. **Atmospheric.** Surrounding glow effects integrate photography into the dark environment.

---

## Video Usage (Shipped)

| Context | Treatment |
|---------|-----------|
| **Hero background** | Sepia-filtered, mirrored (`scaleX(-1)`), behind mesh gradient |
| **Editorial break** | Canvas frame scrubber, scroll-driven, 121 frames |
| **Spend credit** | Auto-playing with 4-sided edge fades |
| **Social proof** | Ping-pong playback (rAF reverse), blurred background |

---

## Iconography (Shipped)

### Library

**Phosphor Icons** (`@phosphor-icons/react`)

### Variants Used

| Weight | Context | Example |
|--------|---------|---------|
| `"duotone"` | Primary icon variant. Security layers, how-it-works steps | Fingerprint, Cpu, ShareNetwork, Wallet, Lightning, ChartLineUp, CreditCard, Lock |
| `"light"` | Navigation chrome — hamburger and close | List, X |
| `"bold"` | Emphasis arrows — CTAs, action links | ArrowUpRight, ArrowRight |

### Icon Sizes

| Size | Usage |
|------|-------|
| 26px | Section feature icons (security layers, how-it-works steps) |
| 22px | MPC diagram center lock, close button |
| 20px | Hamburger menu |
| 15px | CTA button arrow |
| 14px | Inline link arrows |

### Icon Color

Icons inherit from their text color context (`currentColor` or explicit Tailwind color class). Never hard-coded icon colors unless semantic (success green, gold accent).

### Inline SVGs

Apple App Store and Google Play store logos are rendered as inline SVG paths (not from Phosphor). These appear in the hero, navbar, and influencer page.

---

## Data Visualization (Shipped)

### Yield Curve SVG (Hero Mesh Gradient)

An animated SVG yield curve drawn behind the hero:
- Stroke: `#FFC73D` (yellow-500)
- Animated draw-on over 3.5s
- Lives within the mesh gradient layer

### Animated Counters (ProofBar)

Three scroll-triggered counters:
- Cubic ease-out easing: `1 - Math.pow(1 - progress, 3)`
- Default duration: 2000ms
- Respects `prefers-reduced-motion`

### Token Icons / Logos

Official cryptocurrency token logos (BTC, USDC, ETH, etc.) rendered as images within yield cards. Stacked with z-index overlap.

### MPC Shard Diagram (Security)

Animated SVG with:
- Draw-on connection lines between shards
- Pulsing nodes at varying frequencies (1.5s, 2.2s, 3s)
- Lock icon at center

---

## Visual Don'ts (Derived)

1. **No raw photography on light backgrounds.** All imagery is dark-first.
2. **No stock photo clichés.** No handshakes, group shots, fist pumps.
3. **No crypto visual clichés.** No physical coins (except the Bitcoin coin in yield section), no blockchain node graphics, no matrix code.
4. **No luxury signaling.** No yachts, champagne, watches.
5. **No uncontained imagery.** Photography always lives inside a card or overlay system.
6. **No cool-toned imagery.** Everything should feel warm — sepia, amber, gold.

---

## Related

- [Color System](./color-system.md) — Atmospheric glow and glass color values
- [Typography](./typography.md) — Text shadow atmospheric treatment
- [Brand Applications](./brand-applications.md) — Imagery applied to specific touchpoints
- [../patterns/foundations/elevation.md](../patterns/foundations/elevation.md) — Shadow and glass implementation
- [../patterns/foundations/motion.md](../patterns/foundations/motion.md) — Animation specs
