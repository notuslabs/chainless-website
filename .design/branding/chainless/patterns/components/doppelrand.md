# Doppelrand Card — Component Spec

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Overview

The Doppelrand ("double border") card is Chainless's signature surface treatment. It creates a luxury packaging feel through a double-shell construction: an outer translucent shell containing an inner elevated core, separated by a visible gap.

The pattern appears in 6 components and is copy-pasted identically each time. This spec formalizes it as a shared component.

---

## Anatomy

```
┌─────────────────────────────────────────┐  ← Outer shell
│  ┌───────────────────────────────────┐  │  ← Gap (6px)
│  │                                   │  │  ← Inner core
│  │        Content goes here          │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Outer Shell

| Property | Value | Token |
|----------|-------|-------|
| Border radius | 18px | `--doppelrand-radius-outer` / `rounded-[1.125rem]` |
| Background | `rgba(255, 255, 255, 0.03)` | `--doppelrand-bg` / `bg-white/[0.03]` |
| Padding | 6px (gap) | `--doppelrand-gap` / `p-1.5` |
| Ring | 1px `rgba(255, 255, 255, 0.05)` | `ring-1 ring-white/[0.05]` |
| Ring hover | `rgba(255, 255, 255, 0.07)` | `ring-white/[0.07]` |
| Hover lift | `-translate-y-px` | Subtle 1px upward shift on hover |

### Inner Core

| Property | Value | Token |
|----------|-------|-------|
| Border radius | ~12px | `--doppelrand-radius-inner` / `rounded-[calc(1.125rem-0.375rem)]` |
| Background | Gradient (see below) | `.doppelrand-inner-gradient` |
| Inner highlight | `inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.03)` | `.inner-highlight-dark` |
| Padding | 32px or 40px | `p-8` or `p-10` |
| Overflow | hidden | `overflow-hidden` |
| Position | relative | `relative` (for glow positioning) |

### Inner Background Gradient

Old Money refinement — quieter 2-stop gradient replacing the original 3-stop:

```css
background: linear-gradient(
  160deg,
  rgba(38, 37, 34, 0.85) 0%,
  rgba(26, 25, 23, 0.95) 100%
);
```

Lighter variant:
```css
background: linear-gradient(
  160deg,
  rgba(38, 37, 34, 0.75) 0%,
  rgba(26, 25, 23, 0.92) 100%
);
```

### Gold Hallmark Accent

A foil-edge hairline at the inner top edge — `.doppelrand-hallmark::before`:

```css
background: linear-gradient(90deg,
  transparent 0%,
  rgba(255, 199, 61, 0.25) 30%,
  rgba(255, 199, 61, 0.35) 50%,
  rgba(255, 199, 61, 0.25) 70%,
  transparent 100%
);
```

Applied automatically via the `doppelrand-hallmark` class on the inner core.

---

## Component API

```tsx
interface DoppelrandCardProps {
  children: React.ReactNode;
  className?: string;           // Applied to outer shell
  innerClassName?: string;      // Applied to inner core
  variant?: 'default' | 'light'; // Gradient intensity
  hover?: boolean;              // Enable ring-hover effect
  glow?: boolean;               // Enable atmospheric glow orb
  as?: React.ElementType;       // Polymorphic element
}
```

### Usage

```tsx
<DoppelrandCard hover glow>
  <div className="p-8">
    <h3>Card Title</h3>
    <p>Card content</p>
  </div>
</DoppelrandCard>
```

---

## Atmospheric Glow (Optional)

Many Doppelrand cards include an atmospheric glow orb positioned behind or within:

```tsx
{/* Typical glow pattern */}
<div className="pointer-events-none absolute -top-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/[0.02] blur-[200px]" />
```

Standard glow sizes:

| Size | Dimensions | Blur | Opacity Pattern |
|------|:----------:|:----:|-----------------|
| Large | 500x500px | 200px | `bg-yellow-500/[0.02]` |
| Medium | 400x400px | 180px | `bg-yellow-600/[0.015]` |
| Small | 200x200px | 80px | `bg-yellow-500/[0.04]` |

---

## Current Implementations

| Component | Doppelrand Cards | Variant |
|-----------|:----------------:|---------|
| `borrow-credit.tsx` | 3 (steps) | default |
| `how-it-works.tsx` | 4 (bento grid) | default |
| `social-proof.tsx` | 3 (testimonials) | default + conic border variant |
| `yield-section.tsx` | 2 (protect + grow) | default |
| `philosophy.tsx` | 2 (pillars) | default + light variant |
| `spend-credit-legacy.tsx` | 1 (card visual) | default (DEAD CODE) |

### Social Proof Variant: Conic Border

`social-proof.tsx` adds a rotating conic-gradient border effect on the featured testimonial:

```css
conic-gradient(
  from 180deg,
  rgba(255, 199, 61, 0.3),
  rgba(255, 199, 61, 0.05) 50%,
  rgba(255, 199, 61, 0.3)
)
```

This could be a `variant="featured"` or `accent` prop on the shared component.

---

## Tailwind Classes (Copy-Paste Reference)

### Outer Shell

```
rounded-[1.125rem] bg-white/[0.03] p-1.5 ring-1 ring-white/[0.05]
```

With hover:
```
rounded-[1.125rem] bg-white/[0.03] p-1.5 ring-1 ring-white/[0.05] transition-all duration-700 ease-premium hover:ring-white/[0.07] hover:-translate-y-px
```

### Inner Core

```
doppelrand-hallmark inner-highlight-dark relative overflow-hidden rounded-[calc(1.125rem-0.375rem)]
```

With inline gradient style:
```tsx
style={{
  background: 'linear-gradient(160deg, rgba(38,37,34,0.85) 0%, rgba(26,25,23,0.95) 100%)'
}}
```

---

## Design Rationale

The Doppelrand pattern serves three purposes:

1. **Luxury packaging metaphor** — The double shell evokes physical product packaging (box within a box). Premium physical goods use this — Apple product boxes, watch cases, jewelry presentation. It signals "this content is precious."

2. **Depth without shadow** — On dark surfaces, traditional drop shadows are nearly invisible. The double-border construction creates depth through structural layering instead of shadow opacity.

3. **Brand distinctiveness** — No competitor uses this pattern. It's immediately recognizable as Chainless. The combination of translucent outer shell + inner highlight + gradient creates a surface treatment that can't be replicated with a single CSS property.
