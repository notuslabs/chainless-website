# Screen 11: Security — Spacing Rhythm Fix
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix the visual monotony of 4 sequential bento cards stacking on mobile with no rhythm variation. The security section feels long and repetitive on small screens.

## Current Issues

- 4 Doppelrand cards stack vertically on mobile — each with identical padding, spacing, and visual weight
- No visual break or rhythm variation between cards
- Section padding: `px-4` instead of `px-6`
- Section spacing: `py-32` excessive on mobile
- MPC shard diagram SVG animation may be CPU-intensive on mobile

## Mobile Design (320px-640px)

### Rhythm Variation Strategy

Instead of uniform card stacking, introduce visual hierarchy on mobile:

#### Option A: 2+2 Grid on Mobile

Use a 2-column grid on mobile for the 4 security cards:

```
┌─────────────┬─────────────┐
│   Card 1    │   Card 2    │
│  Biometric  │   MPC Keys  │
├─────────────┼─────────────┤
│   Card 3    │   Card 4    │
│  Insurance  │   Audited   │
└─────────────┴─────────────┘
```

```
Cards grid:
  Before: className="grid grid-cols-1 md:grid-cols-2 gap-6"
  After:  className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6"
```

This halves the vertical space and creates a more scannable grid. Cards become compact tiles on mobile.

#### Card Content Adaptation for 2-col

At 320px in a 2-col grid with 16px gap and 24px section padding:
- Each card: (320 - 48 - 16) / 2 = ~128px wide

That is tight. Cards would need:
- Icon: 32px (down from 40px)
- Title only, no description on mobile
- Description hidden below `sm:` breakpoint

```tsx
<p className="hidden sm:block text-sm ...">{layer.description}</p>
```

#### Option B (Safer): Compact Single Column with Visual Breaks

Keep single column but compress cards and add a divider midway:

```
┌─────────────────────────────────┐
│ 01  Biometric  ─ description    │
├─────────────────────────────────┤
│ 02  MPC Keys   ─ description    │
├─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┤ ← visual break (spacing increase)
│ 03  Insurance  ─ description    │
├─────────────────────────────────┤
│ 04  Audited    ─ description    │
└─────────────────────────────────┘
```

- Reduce card inner padding: `p-6 sm:p-8`
- Add `gap-4` between cards (down from `gap-6`)
- Insert extra spacing between cards 2 and 3: `mt-8` on the third card (or a decorative hairline divider)

**Recommendation:** Option B (compact single column with break) — preserves content readability, less risky than 2-col at 320px.

### Card Padding

```
Card inner:
  Before: p-8
  After:  p-5 sm:p-8
```

### Section Spacing + Padding

```
Section:
  Before: className="... px-4 py-32 md:py-44"
  After:  className="... px-6 py-20 md:py-32 lg:py-44"
```

### MPC Shard Diagram

The animated SVG with draw-on lines and pulsing nodes:
- At `prefers-reduced-motion`: disable pulsing, show static diagram
- On mobile: reduce animation complexity if performance issues arise
- The diagram is small enough to not be a major concern

### Layer Icons (LayerIcon Component)

Each card has a 40x40px icon container. On mobile with compact padding, reduce to 36px:

```
Icon container:
  Before: className="flex h-10 w-10 ..."
  After:  className="flex h-9 w-9 sm:h-10 sm:w-10 ..."
```

Icon size: `size={18}` on mobile vs `size={20}` on sm+.

## States

| State | Behavior |
|-------|----------|
| Default | 4 cards stacked with visual break at midpoint |
| Loading | Cards stagger in via StaggerContainer (existing animation) |
| Error | N/A — static content |
| Empty | N/A |

## Accessibility

- Card number labels ("01", "02", etc.) provide scannable structure
- Security layer descriptions remain visible (Option B preserves content)
- `aria-labelledby="security-heading"` on section (existing)
- MPC diagram: `aria-hidden="true"` (decorative) — actual security info is in text
- Focus order follows visual card order

## Image Resources

No imagery. Security section uses Phosphor icons (duotone weight) and SVG diagram only.
