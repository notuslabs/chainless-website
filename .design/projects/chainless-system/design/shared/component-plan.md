# Component Plan — Security Section

> Phase: design | Project: chainless-system | Generated: 2026-04-05

---

## Reuse (as-is)

| Component | Source | Usage in Security |
|-----------|--------|-------------------|
| `DoppelrandCard` | `doppelrand-card.tsx` | Layers card (default variant), MPC deep-dive card (light variant) |
| `Eyebrow` | `eyebrow.tsx` | "Seguranca" section label |
| `FadeUp` | `motion.tsx` | Header elements, MPC card, trust strip entrance |
| `StaggerContainer` | `motion.tsx` | Layer rows orchestration |
| `StaggerItem` | `motion.tsx` | Individual layer row entrance |
| `EASE_PREMIUM` | `motion.tsx` | Hairline animation easing |

## Refactor (needs changes)

None. All existing components serve this section without modification.

## New (shared)

| Component | Purpose | Reuse Potential |
|-----------|---------|----------------|
| `SecurityLayer` | Single layer row: icon container + label + title + detail | Could be generalized to an "IconFeatureRow" for future use in any feature list context |
| `TrustBadge` | Small pill badge with border + muted bg + caption text | Already similar to the StatusBadge in borrow-credit.tsx — could extract a shared `Badge` component with variants (status, trust, info) |

## New (local to Security section)

| Component | Purpose |
|-----------|---------|
| `MpcShardDiagram` | CSS-only decorative diagram showing 3 distributed nodes + center lock. Contains the pulsing keyframe animations. Self-contained, no props needed. |
| `SecurityStats` | Trust strip with 3 stat items (mono number + label). Could be a simple inline composition rather than a dedicated component if the pattern doesn't repeat. |

## Implementation Notes

- The Security section follows the exact same structural pattern as Philosophy and YieldSection: `<section>` with atmospheric glows, standard header (Eyebrow + serif heading + subtitle), DoppelrandCard content, FadeUp/Stagger animations.
- No new dependencies required. Phosphor Icons are already installed (`@phosphor-icons/react`).
- The MPC shard diagram uses CSS `@keyframes` for the node pulse animation, not Framer Motion. This avoids JS overhead for a purely decorative effect and ensures it respects `prefers-reduced-motion` via a CSS media query.
- The `md:sticky md:top-32` on the MPC card is standard CSS — no Framer Motion scroll tracking needed.

## File Structure

```
landing/src/components/
  security-section.tsx     <- New section component (follows existing naming: yield-section.tsx, etc.)
```

Single file. The `SecurityLayer`, `MpcShardDiagram`, and `SecurityStats` sub-components live inside `security-section.tsx` as non-exported functions (same pattern as `PoolTicker` inside `yield-section.tsx` and `StatusBadge` inside `borrow-credit.tsx`).
