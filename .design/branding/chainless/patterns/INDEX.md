# Chainless Design System — Index

> Phase: patterns | Brand: chainless | Generated: 2026-03-24
> Strategy: EXTEND (evolve existing implementation)

---

## Foundations

Design primitives that govern every surface, text block, and interaction.

| Document | Description |
|----------|-------------|
| [principles.md](./principles.md) | 5 governing design principles |
| [foundations/color-system.md](./foundations/color-system.md) | 3 color scales + semantics + surfaces + dark mode mapping |
| [foundations/typography.md](./foundations/typography.md) | 13-level type scale, font stacks, pairing rules |
| [foundations/spacing.md](./foundations/spacing.md) | 8-token spacing scale anchored on 28px body line-height |
| [foundations/grid.md](./foundations/grid.md) | Layout system, breakpoints, grid patterns |
| [foundations/elevation.md](./foundations/elevation.md) | Multi-layer warm shadows, inner highlights, noise overlay |
| [foundations/border-radius.md](./foundations/border-radius.md) | 8-token radius scale including Doppelrand |
| [foundations/motion.md](./foundations/motion.md) | Easing, springs, 7 animation components, motion principles |

## Components

Component-level specifications and integration guides.

| Document | Description |
|----------|-------------|
| [components/token-mapping.md](./components/token-mapping.md) | Brand tokens → Tailwind v4 `@theme inline` mapping (25 delta tokens) |
| [components/classification.md](./components/classification.md) | All 17 components classified: 11 KEEP, 1 RESTYLE, 4 REFACTOR, 1 REPLACE |
| [components/doppelrand.md](./components/doppelrand.md) | Signature double-border card: anatomy, API spec, implementation guide |

## Machine-Readable

| File | Format | Description |
|------|--------|-------------|
| [tokens.json](./tokens.json) | W3C Design Tokens | All foundation + component tokens |
| [chainless.yml](./chainless.yml) | YAML style preset | Token values for tooling integration |
| [chainless.md](./chainless.md) | Markdown | AI-ready style prompt (feed to any LLM/agent) |

---

## Quick Reference

### Color Composition

```
60% warm neutrals (#FAFAF8, #F0EEE9)
30% dark + text   (#1C1B19, #6B6862)
10% brand yellow   (#FFC73D)
```

### Font Stack

```
Sans:  Satoshi → General Sans → system-ui
Serif: Fraunces → Newsreader → Georgia
Mono:  IBM Plex Mono → JetBrains Mono → monospace
```

### Spacing Scale

```
xs:4  sm:8  md:14  lg:28  xl:42  2xl:56  3xl:84  4xl:112
```

### Motion Signature

```
Blur-fade-up: opacity 0→1, y 40→0, blur 10→0, 0.9s, ease(0.32, 0.72, 0, 1)
```

### Doppelrand Pattern

```
Outer: rounded-[2.25rem] bg-white/[0.02] p-1.5 ring-1 ring-white/[0.04]
Inner: rounded-[calc(2.25rem-0.375rem)] inner-highlight-dark
```

---

## Cross-Cutting Issues (Action Items)

| Priority | Issue | Impact | Fix |
|:--------:|-------|:------:|-----|
| 1 | `EASE_PREMIUM` redeclared in 7 files | DRY violation | Import from `motion.tsx` |
| 2 | `text-[#FAFAF8]` hardcoded in 13 files | Token gap | Add `--color-text-primary` |
| 3 | Doppelrand pattern copy-pasted in 6 files | DRY violation | Create `<DoppelrandCard>` |
| 4 | `spend-credit.tsx` uses `black` not `dark-500` | Warm palette violation | Restyle to warm darks |
| 5 | `spend-credit-legacy.tsx` is dead code | Cleanup | Delete file |
| 6 | Section heading clamp repeated in 5+ files | Token gap | Add `--text-section-heading` |
| 7 | `max-w-[1200px]` in 10 files | Token gap | Add `--container-content` |

---

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind v4 (CSS-first `@theme inline`)
- **Motion**: Framer Motion 12
- **Icons**: Phosphor Icons
- **Fonts**: Satoshi (variable), Fraunces (variable), IBM Plex Mono
