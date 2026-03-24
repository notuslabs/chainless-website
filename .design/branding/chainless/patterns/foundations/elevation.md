# Elevation & Shadows

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Source of Truth

- Implementation: `landing/src/app/globals.css` (custom shadow classes)

## Status: KEEP

The shadow system is fully custom — multi-layer, tinted shadows using warm rgba values (not black). This is a brand-distinctive pattern that reinforces the warm undertone mandate.

---

## Design Principle

Chainless shadows are **warm-tinted and multi-layered**. Each elevation level uses 3-5 box-shadow layers to create realistic depth. The tinting uses `rgba(28, 27, 25, ...)` (dark-500) for warm contexts and `rgba(0, 0, 0, ...)` for dark surface contexts. No blue-tinted or cool shadows.

---

## Shadow Scale

### Warm Context (Light Surfaces)

For cards and elements on light backgrounds (`#FAFAF8`, `#F0EEE9`).

#### Diffuse Warm — `.shadow-diffuse-warm`

Subtle, everyday elevation. Cards, inputs, dropdowns.

```css
box-shadow:
  0 1px 2px rgba(28, 27, 25, 0.04),
  0 4px 8px rgba(28, 27, 25, 0.02),
  0 20px 40px -15px rgba(28, 27, 25, 0.06);
```

#### Ambient Warm — `.shadow-ambient-warm`

Premium elevation. Elevated cards, modals, featured content.

```css
box-shadow:
  0 0 0 1px rgba(28, 27, 25, 0.02),
  0 1px 2px rgba(28, 27, 25, 0.03),
  0 4px 12px rgba(28, 27, 25, 0.04),
  0 16px 32px -8px rgba(28, 27, 25, 0.06),
  0 32px 64px -16px rgba(28, 27, 25, 0.04);
```

### Dark Context (Dark Surfaces)

For cards and elements on dark backgrounds (`#1C1B19`, `#2A2926`).

#### Diffuse Dark — `.shadow-diffuse-dark`

Everyday elevation on dark surfaces.

```css
box-shadow:
  0 1px 2px rgba(0, 0, 0, 0.08),
  0 4px 12px rgba(0, 0, 0, 0.06),
  0 40px 80px -20px rgba(0, 0, 0, 0.4);
```

#### Ambient Dark — `.shadow-ambient-dark`

Premium elevation on dark surfaces.

```css
box-shadow:
  0 0 0 1px rgba(0, 0, 0, 0.06),
  0 2px 4px rgba(0, 0, 0, 0.06),
  0 8px 24px rgba(0, 0, 0, 0.08),
  0 24px 48px -12px rgba(0, 0, 0, 0.2),
  0 48px 96px -24px rgba(0, 0, 0, 0.15);
```

---

## Inner Highlights (Doppelrand Pattern)

The Doppelrand card pattern uses `inset` shadows for an inner glow effect that simulates a subtle border-less edge.

#### Light Inner — `.inner-highlight`

```css
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
```

#### Dark Inner — `.inner-highlight-dark`

```css
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06),
            inset 0 0 0 1px rgba(255, 255, 255, 0.03);
```

---

## Elevation Levels (Semantic)

| Level | Shadow Class | Use Case |
|:-----:|-------------|----------|
| **0** | none | Flat content, inline elements |
| **1** | `shadow-diffuse-warm` / `shadow-diffuse-dark` | Cards, inputs, dropdowns |
| **2** | `shadow-ambient-warm` / `shadow-ambient-dark` | Featured cards, modals, overlays |
| **Inset** | `inner-highlight` / `inner-highlight-dark` | Doppelrand inner core |

---

## Noise Texture

A fixed noise overlay adds analog grain to the entire viewport:

```css
.noise-overlay::after {
  opacity: 0.022;
  background-image: url("data:image/svg+xml,...feTurbulence...");
  background-size: 256px 256px;
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
}
```

This is applied to `<body>` via the `noise-overlay` class. Opacity at 2.2% is barely perceptible but adds texture that prevents digital flatness.

---

## Gradient Wash

Subtle warm gradient for section depth:

```css
.gradient-wash-warm::before {
  background: radial-gradient(
    ellipse 70% 50% at 20% 50%,
    rgba(255, 199, 61, 0.025) 0%,
    transparent 70%
  );
}
```

A nearly invisible yellow-gold radial gradient positioned off-center. Creates warmth without visible color.

---

## Usage Guidelines

1. **Never use Tailwind default shadows** (`shadow-sm`, `shadow-md`, etc.) — they are cool-tinted and break the warm mandate
2. **Always match shadow context to surface** — warm shadows on light bg, dark shadows on dark bg
3. **Doppelrand cards combine outer shadow + inner highlight** — the ring (`ring-1 ring-white/[0.04]`) plus the inset shadow creates the double-border luxury effect
4. **Noise overlay is global** — do not add additional noise per-component
