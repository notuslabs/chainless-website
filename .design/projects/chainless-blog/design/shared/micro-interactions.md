# Micro-interactions
> Phase: design | Project: chainless-blog | Generated: 2026-04-08

---

## Interaction Table

| Trigger | Element | Animation | Duration | Easing | Notes |
|---------|---------|-----------|:--------:|--------|-------|
| Scroll enter | Article sections | FadeUp: opacity 0->1, y 40->0, blur 10->0 | 900ms | `EASE_PREMIUM` | `once: true`, viewport margin -80px |
| Scroll enter | Article cards (grid) | StaggerContainer: stagger 120ms between cards | 800ms per card | `EASE_PREMIUM` | `once: true` |
| Scroll enter | TOC sidebar (desktop) | FadeUp with 200ms delay | 900ms | `EASE_PREMIUM` | Only on first mount |
| Scroll progress | Reading progress bar | scaleX tied to scrollYProgress | Continuous | Linear | 2px golden line, fixed top-0 |
| Scroll position | TOC active heading | Left border + text color transition | 200ms | `ease-out` | Via IntersectionObserver |
| Hover | Article card (grid) | translateY -1px + ring glow brighten | 700ms | `ease-premium` | `ring-white/[0.05]` -> `ring-white/[0.08]` |
| Hover | Article card (related) | Same as grid card | 700ms | `ease-premium` | Consistent interaction language |
| Hover | Pillar filter tab | Background color fade-in | 300ms | `EASE_PREMIUM` | Ghost -> subtle fill |
| Hover | Pagination button | Text color shift | 200ms | `ease-out` | `warm-400` -> `#FAFAF8` |
| Hover | CTA button | MagneticButton: 15% cursor follow + glow | Spring `SPRING_SNAPPY` | Spring | Existing component |
| Tap | Pillar filter tab | Background fill to pillar accent | 300ms | `EASE_PREMIUM` | URL param update |
| Tap | TOC heading (mobile) | Scroll to heading + collapse TOC | 300ms scroll | `ease-out` | Smooth scroll behavior |
| Tap | FAQ accordion | Content height expand/collapse | 400ms | `EASE_PREMIUM` | `<details>` enhanced with JS |
| Tap | Pagination button | Page transition | — | — | Server navigation, no client transition |
| Click | TOC heading (desktop) | Smooth scroll to heading | 300ms | `ease-out` | `scrollIntoView({ behavior: 'smooth' })` |
| Focus | Any interactive element | Ring outline: `ring-2 ring-yellow-500 ring-offset-2 ring-offset-dark-500` | Instant | — | WCAG 2.4.7 + 2.4.13 |

---

## FAQ Accordion Animation

```
Open:  height 0 -> auto, opacity 0 -> 1, 400ms EASE_PREMIUM
Close: height auto -> 0, opacity 1 -> 0, 300ms EASE_PREMIUM
Icon:  ChevronDown rotates 0 -> 180deg on open, 300ms EASE_PREMIUM
```

Uses `<details>/<summary>` as base for native accessibility. JavaScript enhancement for smooth height animation (CSS `interpolate-size: allow-keywords` or JS measurement).

---

## TOC Scroll Tracking

```
Observer config:
  root: null (viewport)
  rootMargin: "-80px 0px -70% 0px"
  threshold: 0

On intersect:
  - Set active heading ID
  - Left border slides to active item (200ms ease-out)
  - Active text: #FAFAF8, inactive: warm-500
  - No aria-live announcement
```

---

## Reduced Motion Behavior

When `prefers-reduced-motion: reduce`:
- FadeUp: instant opacity 0->1, no translateY or blur
- StaggerContainer: all children appear simultaneously
- Reading progress bar: remains (informational, not decorative)
- Card hover lift: disabled, ring glow only
- FAQ accordion: instant show/hide, no height animation
- TOC scroll tracking: instant state change, no border slide
