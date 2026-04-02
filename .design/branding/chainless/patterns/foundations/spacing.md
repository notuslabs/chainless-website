# Spacing

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Source of Truth

- Identity spec: `identity/typography.md` (vertical rhythm section)
- Implementation: Tailwind v4 default spacing + custom section spacing in components

## Status: EXTEND

The spacing system is partially defined in the identity spec and used throughout the codebase via Tailwind utilities. This document formalizes the full scale and adds section-level spacing tokens that are currently hardcoded.

---

## Design Principle

All spacing derives from the **body line-height (28px)** as the anchor unit. The grid unit is **4px**. Every spacing value snaps to the 4px grid.

The 18px body text with 28px line-height (7 x 4px) creates the rhythmic foundation. Spacing tokens scale from this anchor in half-line, single-line, and multi-line increments.

---

## Spacing Scale

| Token | Value | Grid Units | Lines | Usage |
|-------|------:|:----------:|:-----:|-------|
| `space-xs` | 4px | 1 | — | Inline gaps, icon-to-text |
| `space-sm` | 8px | 2 | — | Related element gaps, tight padding |
| `space-md` | 14px | 3.5 | 0.5 | Compact section spacing |
| `space-lg` | 28px | 7 | 1 | Default paragraph spacing, component gaps |
| `space-xl` | 42px | 10.5 | 1.5 | Section breaks within content |
| `space-2xl` | 56px | 14 | 2 | Major section breaks |
| `space-3xl` | 84px | 21 | 3 | Page section spacing |
| `space-4xl` | 112px | 28 | 4 | Hero-to-content transition |

---

## Component Spacing Patterns (Extracted)

These patterns are observed in the existing codebase:

### Section Padding

| Pattern | Tailwind Classes | Computed | Used In |
|---------|-----------------|----------|---------|
| Section vertical | `py-24` / `py-32` | 96px / 128px | Most sections |
| Section horizontal | `px-6` | 24px | All sections (mobile) |
| Container max-width | `max-w-[var(--container-content)]` | 1200px centered | All sections |

### Card Padding

| Pattern | Tailwind Classes | Computed |
|---------|-----------------|----------|
| Card outer (Doppelrand) | `p-1.5` | 6px |
| Card inner | `p-8` / `p-10` | 32px / 40px |
| Card inner compact | `p-6` | 24px |

### Content Gaps

| Pattern | Tailwind Classes | Computed |
|---------|-----------------|----------|
| Heading to body | `mt-4` / `mt-6` | 16px / 24px |
| Body to CTA | `mt-8` / `mt-10` | 32px / 40px |
| Grid gap | `gap-6` / `gap-8` | 24px / 32px |
| Stack gap (tight) | `gap-3` / `gap-4` | 12px / 16px |
| Stack gap (default) | `gap-6` | 24px |

### Section Boundary Spacing

| Transition | Recommended | Rationale |
|------------|:-----------:|-----------|
| Light → Light | 96px (`py-24`) | Standard rhythm |
| Light → Dark | 128px (`py-32`) | Generous — inversion needs breathing room |
| Dark → Light | 128px (`py-32`) | Same principle |
| Hero → First section | 112px (`space-4xl`) | Premium transition |

---

## Tailwind Integration

Tailwind v4 provides a default spacing scale based on `4px` increments. The brand spacing tokens map to Tailwind utilities:

| Brand Token | Tailwind Utility | Value |
|-------------|-----------------|------:|
| `space-xs` | `gap-1` / `p-1` | 4px |
| `space-sm` | `gap-2` / `p-2` | 8px |
| `space-md` | `gap-3.5` / `p-3.5` | 14px |
| `space-lg` | `gap-7` / `p-7` | 28px |
| `space-xl` | `gap-10.5` | 42px |
| `space-2xl` | `py-14` | 56px |
| `space-3xl` | `py-20` (approx) | 84px → use `py-[84px]` |
| `space-4xl` | `py-28` | 112px |

**Note**: `space-md` (14px) and `space-3xl` (84px) don't map cleanly to Tailwind's default scale. Use arbitrary values `[14px]` and `[84px]` or define custom tokens in `@theme inline` if used frequently.

---

## Accessibility

- Touch targets: minimum 44x44px (WCAG SC 2.5.8)
- Interactive element spacing: minimum 8px between adjacent targets
- Content spacing survives user text-spacing overrides (WCAG SC 1.4.12)
