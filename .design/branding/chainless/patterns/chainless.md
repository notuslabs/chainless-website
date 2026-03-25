# Chainless Design System

> AI-ready style prompt for Chainless — sovereign digital wealth platform

---

## Identity

**Brand**: Chainless — sovereign digital wealth (self-custody crypto wealth management)
**Archetype**: Magician 70% / Ruler 30% — transformative + premium
**Voice**: Bold, Defiant, Warm — 60/40 premium/rebel in visuals
**Platform**: "Torne-se Chainless." (Become Chainless)

## Color

Warm undertones everywhere. No cool grays, no blue-tinted neutrals. Every surface leans amber.

- **60%** warm neutrals: `#FAFAF8` (light bg), `#F0EEE9` (card bg)
- **30%** dark + text: `#1C1B19` (warm black), `#6B6862` (secondary)
- **10%** brand yellow: `#FFC73D` (CTAs, links, key data)

Yellow is accent, never background. Selection color: `#FFC73D` on `#1C1B19`.

Semantic: Success `#3DA66A`, Warning `#D4890D`, Error `#E05555`, Info `#4A90DA`.

Dark mode uses `#1C1B19` base, `#2A2926` elevated. Yellow shifts to `#FFD486` for dark bg contrast.

## Typography

**Primary**: Geist (humanist sans-serif, clean geometry) — all UI, body, nav, buttons
**Accent**: Fraunces (wonky serif) — hero headlines, pull quotes, brand moments ONLY
**Mono**: IBM Plex Mono — data values, addresses, yields, code

Scale: 18px base, Major Third (1.25), 4px grid. Body line-height: 28px (1.56).

Fluid headings via `clamp()`. Display: 72px, H1: 56px, H2: 44px. Body never below 18px on any device.

Heading letter-spacing: `-0.025em` for Display/H1/H2, `-0.015em` for H3, `-0.01em` for H4.

Overline: 12px, uppercase, `0.1em` letter-spacing, semibold.

## Spacing

Anchor: 28px (body line-height). Grid: 4px.

Scale: 4, 8, 14, 28, 42, 56, 84, 112px.

Section padding: 96px default, 128px at light/dark transitions. Hero-to-content: 112px.

Content max-width: 1200px. Prose max-width: 65ch.

## Shape

Generous, soft radii. Large surfaces get larger radii.

Scale: 4, 8, 12, 16, 24, 36px + full (pill).

Buttons: pill (`rounded-full`). Cards: `rounded-2xl` (24px) or `rounded-3xl`. Inputs: `rounded-lg` (8px).

### Doppelrand Card (Signature Pattern)

Double-border luxury card. Outer shell: `rounded-[2.25rem]` + translucent bg + ring. Inner core: `rounded-[calc(2.25rem-0.375rem)]` + gradient + inner highlight shadow. Gap: 6px.

Outer: `rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04]`
Inner: `rounded-[calc(2.25rem-0.375rem)] inner-highlight-dark overflow-hidden relative`
Inner gradient: `linear-gradient(145deg, rgba(42,41,38,0.7), rgba(28,27,25,0.9) 50%, rgba(24,23,22,0.95))`

## Elevation

Multi-layer warm-tinted shadows. Never default Tailwind shadows (they're cool-tinted).

- **Light surfaces**: `shadow-diffuse-warm` (3 layers, rgba(28,27,25,...))
- **Dark surfaces**: `shadow-diffuse-dark` (3 layers, rgba(0,0,0,...))
- **Premium**: `shadow-ambient-warm` / `shadow-ambient-dark` (5 layers each)
- **Inner glow**: `inner-highlight-dark` (inset top + inset ring, white at low opacity)

Noise overlay: `opacity: 0.022`, fractalNoise SVG, fixed position, 256px tile.

## Motion

Library: Framer Motion 12.

**Easing**: `cubic-bezier(0.32, 0.72, 0, 1)` — confident arrival, no bounce.
**Springs**: Snappy (stiffness 200, damping 20) for interactions. Smooth (stiffness 120, damping 24) for reveals.

**Signature**: Blur-fade-up entrance. `opacity: 0→1, y: 40→0, blur: 10px→0px` over 0.9s.

Stagger: 0.12s between children. Word-by-word: 0.06s per word.

Scroll-triggered, once. No re-triggering on scroll back. No auto-playing loops.

`MagneticButton`: cursor-tracking at 15% offset, SPRING_SNAPPY, tap scale 0.97.

`ScrollProgress`: 2px golden line at top of viewport, 60% opacity.

Respect `prefers-reduced-motion`.

## Layout

Container: `max-w-7xl` (1280px) with `px-6` gutter. Content: `max-w-[1200px]`.

Mobile-first. Breakpoints: 640, 768, 1024, 1280, 1536px (Tailwind defaults).

Grids: 1-col mobile → 2-col tablet → 3-col desktop. Bento variants with `col-span-2`.

## Principles

1. **Warm Authority** — Premium without coldness. Amber undertones, not blue-gray.
2. **Restraint as Luxury** — 10% accent rule. Whitespace is breathing room.
3. **Reveal, Don't Announce** — Blur-fade entrance. Elements materialize, never slam.
4. **Architecture is the Brand** — Show structure. Monospace for data. Doppelrand reveals construction.
5. **Dual Voice** — Fraunces (serif) for brand moments. Sans for product. Mono for data.

## Anti-Patterns

- Never use pure `#000000` or `black` — always warm dark (`#1C1B19` or darker warm stops)
- Never use Tailwind default shadows — they break the warm tinting
- Never use Fraunces for body text, nav, buttons, or forms
- Never use yellow as a section background fill
- Never use more than 3 dark/inverted sections per page
- Never use bounce, elastic, or spring-overshoot easing
- Never auto-play animations that can't be paused
- Never use cool-tinted grays (blue undertone)

## Tech Stack

Next.js 16 + Tailwind v4 (CSS-first `@theme inline`) + Framer Motion 12 + Phosphor Icons

All tokens live in `@theme inline` in `globals.css`. No `tailwind.config.js`.
