# Brand Applications

> Phase: identity | Brand: chainless | Reflects: shipped implementation as of 2026-04-07

---

## Design Philosophy

Every touchpoint is a brand moment. The shipped identity system is **dark-first, atmospheric, and cinematic** — built around warm espresso backgrounds, gold accents, glassmorphism, and the Doppelrand card system.

The governing formula: **dark surfaces + Switzer/Zodiak typography + warm gold accents + atmospheric effects = the Chainless feel.**

---

## Digital Touchpoints (Shipped)

### 1. Website — Hero Section

The most important 5 seconds of brand experience. Full viewport height, cinematic atmosphere.

| Element | Shipped Specification |
|---------|----------------------|
| **Background** | `bg-dark-500` (`#1C1B19`), sepia-filtered mirrored video, mesh gradient (4 animated blur orbs), noise overlay |
| **Headline** | "Torne-se Chainless" in Zodiak Regular, `--text-hero-heading` (56–104px), `#FAFAF8`, `tracking-[-0.02em]`, `leading-[1.03]`, warm gold text-shadow halo |
| **Subheadline** | Switzer Light, `clamp(1.1rem, 1rem + 0.45vw, 1.25rem)` (17.6–20px), `#B0ADA6` (`text-secondary`) |
| **Primary CTA** | Glass store buttons (App Store + Google Play) with specular highlights, backdrop-blur, `rounded-2xl` |
| **Trust strip** | "Sem custódia · Sem lock-up · Sem intermediários" with gold accent dot, bottom of hero |
| **Motion** | FadeUp (0.9s, EASE_PREMIUM), mesh gradient infinite orbit, yield curve SVG draw-on (3.5s) |

### 2. Website — ProofBar (Metrics Strip)

| Element | Specification |
|---------|---------------|
| **Background** | `bg-dark-500`, full-width, hairline borders top and bottom |
| **Metrics** | 3-column grid: "30,000+" / "R$300M+" / "100%" |
| **Typography** | AnimatedCounter values in Switzer SemiBold, labels in Switzer with `tracking-wide` |
| **Animation** | Scroll-triggered cubic ease-out counters, 2s duration |

### 3. Website — Philosophy Section

| Element | Specification |
|---------|---------------|
| **Background** | `bg-dark-500` |
| **Cards** | Full-width DoppelrandCards, 5/7 grid (image left, text right) |
| **Photography** | Dark tint + sepia overlay, contained in left column |
| **Heading** | Zodiak Regular, `--text-section-heading` (32–52px), `tracking-[-0.02em]` |
| **Body** | Switzer Regular, `text-base`/`text-lg`, `leading-[1.7]`, `text-secondary` |
| **Accent** | Gold hairline hallmark on cards |

### 4. Website — Yield Section

| Element | Specification |
|---------|---------------|
| **Background** | `bg-dark-600` (`#181716`) |
| **Layout** | Two DoppelrandCards in 5/7 asymmetric grid |
| **"Proteger" card** | Bitcoin coin photo background, glassmorphism overlay, token icon stacks |
| **"Crescer" card** | Live pool APY ticker with animated values, official token logos |
| **Eyebrow** | Glass pill with gold text, `tracking-[0.25em]`, `text-overline` (9px) |

### 5. Website — Spend/Credit Section

| Element | Specification |
|---------|---------------|
| **Background** | `bg-black` (`#000000`) — the one section that breaks the warm-dark rule |
| **Layout** | 5/7 grid: copy left, video right |
| **IOF card** | Glassmorphism with "3.5%" strikethrough → "0%" in gold |
| **Video** | 4-sided edge fades, auto-playing |
| **Atmosphere** | Heavy yellow glows surrounding video container |

### 6. Website — Security Section

| Element | Specification |
|---------|---------------|
| **Background** | `bg-dark-500` |
| **Layout** | 7/5 grid: 4-layer list left, MPC diagram right |
| **Icons** | Phosphor duotone, 26px: Fingerprint, Cpu, ShareNetwork, ArrowCounterClockwise |
| **MPC diagram** | Animated SVG with draw-on lines, pulsing shard nodes, center Lock icon |
| **Trust badges** | Rounded-full pills at bottom |

### 7. Website — Social Proof

| Element | Specification |
|---------|---------------|
| **Background** | `bg-dark-600` |
| **Cards** | 3-column DoppelrandCards, ping-pong blurred video background |
| **Avatars** | Conic-gradient glow rings, photo or gradient+initials fallback |
| **Quote marks** | Decorative at 10rem size |
| **Mobile** | Horizontal scroll |

### 8. Website — CTA Section

| Element | Specification |
|---------|---------------|
| **Background** | `bg-dark-500` with multi-layered atmospheric glows |
| **Headline** | Zodiak Regular, `clamp(2.5rem, 1.8rem + 2.8vw, 4rem)` (40–64px) |
| **Button** | MagneticButton — `bg-yellow-500`, `text-dark-500`, Switzer Bold, ArrowUpRight bold 15px |
| **Decoration** | Animated concentric SVG circles (2s, 2.5s, 3s), gold accent |
| **Transitions** | 280px top fade, 320px bottom fade dissolves |

### 9. Website — Footer

| Element | Specification |
|---------|---------------|
| **Background** | `bg-black` with gradient divider |
| **Layout** | 4/2/2/2/2 grid: brand column + 4 link columns |
| **Typography** | Switzer Regular `text-sm`, `tracking-wide` for links |
| **Accent** | Animated gold hairlines under category headings |
| **Legal** | Disclaimer text, `text-xs`, `text-muted` |

### 10. Website — Transparency Page (Light Context)

| Element | Specification |
|---------|---------------|
| **Background** | `bg-surface` (`#FAFAF8`) — the only light page |
| **Typography** | Switzer body, `leading-[1.85]` for legal prose |
| **Heading** | `text-primary-light` (`#1C1B19`) |
| **Overline** | `tracking-[0.25em]` |

---

## Signature Patterns

### Doppelrand Card

The signature visual element. Double-shell card with:
- Outer shell: `rounded-[1.125rem]`, `bg-white/[0.03]`, `ring-1 ring-white/[0.05]`, `p-1.5` (6px gap)
- Inner shell: `rounded-[calc(1.125rem-0.375rem)]`, inner-highlight-dark
- Gold hallmark accent (top 1px gradient)
- Hover: outer ring → `white/[0.07]`, subtle Y-translate

### Glassmorphism Buttons

Store buttons in hero and navbar:
- `backdrop-filter: blur(12px) saturate(1.4)`
- Multi-layer background gradient (white at 4–12% opacity)
- Specular highlight (radial gradient "refraction")
- `rounded-2xl` (16px)

### Eyebrow Pills

Section labels:
- Glass background
- Gold text (`text-yellow-500`)
- Extreme letter-spacing (`0.25em`)
- `text-overline` (9px)
- `rounded-lg` (8px)

### Gold Hairline Rules

Animated horizontal accents:
- `h-px w-16`
- Gradient from `yellow-500/25` to transparent
- ScaleX animation from 0 to 1, origin left
- Duration 1s, delay 0.5s

---

## Component Card Styles (Available via Switcher)

The DoppelrandCard component supports 5 rendering modes:

| Style | Description |
|-------|-------------|
| **Doppelrand** (default) | Double-shell with gold hallmark, glass outer |
| **Modern Dark** | Single surface, `rounded-2xl`, subtle border |
| **Minimal Dark** | `rounded-xl`, minimal styling |
| **Luxury** | Premium dark with multiple shadow layers |
| **Frosted Glass** | Heavy backdrop-blur glassmorphism |

---

## "Torne-se Chainless" Across Contexts (Shipped)

| Context | Treatment |
|---------|-----------|
| **Website hero** | Zodiak Regular, 56–104px, `#FAFAF8` on dark, gold text-shadow, no period |
| **CTA section** | Zodiak Regular, 40–64px, `#FAFAF8` on dark |
| **Editorial break** | Zodiak Light, 20–36px, crossfading couplets |

---

## Related

- [Logo System](./logo-directions.md) — Logo usage rules
- [Color System](./color-system.md) — Color composition
- [Typography](./typography.md) — Type pairing rules
- [Imagery Style](./imagery-style.md) — Photography and atmospheric direction
