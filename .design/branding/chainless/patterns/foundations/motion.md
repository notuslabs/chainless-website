# Motion

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Source of Truth

- Implementation: `landing/src/components/motion.tsx`
- Library: Framer Motion 12

## Status: KEEP

The motion system is fully implemented with brand-specific primitives. Seven reusable components cover all current animation needs. No changes required.

---

## Core Constants

### Premium Easing

```typescript
const EASE_PREMIUM = [0.32, 0.72, 0, 1];
```

Custom cubic-bezier that starts with moderate acceleration, peaks early, then decelerates slowly to rest. Creates a "confident arrival" feel — elements don't bounce or overshoot, they land with authority. Used for all opacity/transform transitions.

CSS equivalent: `cubic-bezier(0.32, 0.72, 0, 1)`

### Spring Configs

```typescript
const SPRING_SNAPPY = { type: "spring", stiffness: 200, damping: 20 };
const SPRING_SMOOTH = { type: "spring", stiffness: 120, damping: 24 };
```

| Config | Feel | Usage |
|--------|------|-------|
| `SPRING_SNAPPY` | Quick, responsive | Buttons, magnetic interactions, tap feedback |
| `SPRING_SMOOTH` | Gentle, organic | Number reveals, scale-in effects |

---

## Animation Components

### `<FadeUp>`

Scroll-triggered fade + translate + blur entrance.

| Property | Initial | Final | Duration |
|----------|---------|-------|:--------:|
| opacity | 0 | 1 | 0.9s |
| translateY | 40px | 0 | 0.9s |
| blur | 10px | 0 | 0.9s |

- Easing: `EASE_PREMIUM`
- Viewport trigger: `once: true`, margin `-80px`
- Supports `delay` prop for sequencing

### `<StaggerContainer>` + `<StaggerItem>`

Orchestrated child reveal with configurable stagger delay.

| Property | Value |
|----------|-------|
| Default stagger | 0.12s between children |
| Child animation | opacity 0→1, y 30→0, blur 8→0 |
| Child duration | 0.8s |
| Easing | `EASE_PREMIUM` |
| Viewport trigger | `once: true`, margin `-60px` |

### `<MagneticButton>`

Cursor-tracking hover with spring physics.

| Property | Value |
|----------|-------|
| Follow strength | 0.15 (15% of cursor offset) |
| Spring | `SPRING_SNAPPY` |
| Tap feedback | `scale: 0.97` |
| Supports | `href` prop for anchor variant |

### `<CountUp>`

Spring-in number reveal.

| Property | Initial | Final |
|----------|---------|-------|
| opacity | 0 | 1 |
| scale | 0.85 | 1 |

- Spring: `SPRING_SMOOTH`
- Delay: 0.2s
- Viewport trigger: `once: true`

### `<ParallaxSection>`

Subtle depth shift on scroll.

| Property | Value |
|----------|-------|
| Default speed | 0.15 |
| Y range | ±9px (60 * 0.15) at scroll extremes |
| Driven by | `scrollYProgress` of target element |

### `<TextReveal>`

Word-by-word entrance for editorial headlines.

| Property | Value |
|----------|-------|
| Word delay | 0.06s between words |
| Per-word animation | opacity 0→1, y 20→0, blur 6→0 |
| Duration | 0.6s per word |
| Easing | `EASE_PREMIUM` |

### `<ScrollProgress>`

Thin golden progress line at top of viewport.

| Property | Value |
|----------|-------|
| Height | 2px |
| Color | `yellow-500/60` (60% opacity) |
| Position | `fixed top-0 left-0 right-0 z-[60]` |
| Animation | `scaleX` driven by `scrollYProgress` |

---

## Motion Principles

1. **Every animation serves comprehension or delight** — no gratuitous movement. If removing the animation doesn't reduce understanding, it shouldn't exist.
2. **Scroll-triggered, once** — elements animate on first viewport entry and stay. No re-triggering on scroll back.
3. **Blur-fade is the signature** — the combination of opacity + translateY + blur creates the "emerging from depth" feel that maps to the Magician archetype (transformation, revelation).
4. **Springs for interaction, easing for presentation** — user-initiated motion (hover, tap) uses springs. Scroll-triggered reveals use `EASE_PREMIUM`.
5. **Reduced motion respected** — `useReducedMotion` hook is available from Framer Motion. Components should check this and disable motion when the user preference is set.

---

## Duration Guidelines

| Context | Duration | Rationale |
|---------|:--------:|-----------|
| Micro-interaction (hover, focus) | 150-250ms | Immediate feedback |
| Element entrance | 600-900ms | Enough to register, not enough to wait |
| Stagger delay | 80-150ms | Perceivable sequence without slowness |
| Page transition | 300-500ms | Smooth but not sluggish |

---

## Accessibility

- `prefers-reduced-motion: reduce` should disable all transform/opacity animations
- `ScrollProgress` can remain (it's informational, not decorative motion)
- No auto-playing animations that can't be paused (WCAG SC 2.2.2)
- No flashing content above 3 flashes per second (WCAG SC 2.3.1)
