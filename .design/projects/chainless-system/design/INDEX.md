# Design — Security Section

> Phase: design | Project: chainless-system | Generated: 2026-04-05
> Scope: Single section addition (Security) to existing landing page

---

## Screens

| # | Screen | File | Components Used |
|---|--------|------|-----------------|
| 04 | Security | [screen-04-security.md](./screen-04-security.md) | DoppelrandCard, Eyebrow, FadeUp, StaggerContainer, StaggerItem, Phosphor Icons |

## Shared

| Chunk | File | ~Lines |
|-------|------|--------|
| Component Plan | [component-plan.md](./shared/component-plan.md) | ~60 |

## Context

This is a targeted section design, not a full-page redesign. The security section fills a critical gap in the landing page flow between Philosophy (sovereignty message) and the product sections (Yield/Spend/Borrow).

### Page Placement

```
Hero -> ProofBar -> Philosophy -> [SECURITY] -> Editorial -> Yield -> Spend -> Borrow -> ...
```

### Integration

The section uses the same structural patterns as all existing sections:
- Dark bg (`bg-dark-500`)
- Atmospheric glows (yellow-500/[0.02] + yellow-600/[0.015])
- Standard header: Eyebrow + serif heading + subtitle
- DoppelrandCard for content areas
- FadeUp/Stagger entrance animations
- Gold hairline accents
