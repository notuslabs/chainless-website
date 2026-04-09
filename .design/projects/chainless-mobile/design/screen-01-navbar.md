# Screen 01: Navbar — Mobile Touch Target Fixes
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Fix touch target compliance on the floating glass pill navbar at mobile viewports (320px-640px). All tappable elements must meet 44x44px minimum (WCAG SC 2.5.8).

## Current Issues

- Logo link area: `px-4 py-2` = ~40px height (below 44px)
- Hamburger button: `List` icon at 20px with tight padding
- Nav pill container: `px-2 py-2` leaves items cramped

## Mobile Design (320px-640px)

### Logo Link
- Increase tap area: `px-4 py-3` (min-h-[44px] min-w-[44px])
- Logo icon stays at 20px, but the hit area expands
- Implementation: add `min-h-[44px] flex items-center justify-center` to the `<a>` wrapping `ChainlessLogo`

### Hamburger Button
- Current: implicit sizing from icon + padding
- Fix: explicit `min-h-[44px] min-w-[44px] flex items-center justify-center`
- The `List` icon (20px) and `X` icon (22px) are fine visually — only the tap target needs expanding
- Add `rounded-xl` for consistent focus ring shape

### Nav Pill Container
- Mobile: the pill only shows logo + hamburger + language switcher
- Increase outer padding: `px-2 py-2` stays (sufficient since internal items have their own tap areas)
- Ensure gap between tappable items is minimum 8px (currently `gap-1` = 4px, increase to `gap-2` = 8px on mobile)

### Mobile Menu (Fullscreen Slide)
- Menu items already have generous sizing
- Verify each menu link has `min-h-[44px]` tap area
- CTA buttons ("Baixar app") already large enough

### Desktop (Unchanged)
- Desktop nav items (`px-4 py-2`) are mouse targets — no change needed
- Only apply touch target sizing below `md:` breakpoint

## Tailwind Changes Summary

```
Logo <a>:
  Before: className="relative flex items-center rounded-xl px-4 py-2"
  After:  className="relative flex items-center justify-center rounded-xl px-4 py-3 min-h-[44px]"

Hamburger <button>:
  Add: min-h-[44px] min-w-[44px] flex items-center justify-center

Pill container gap:
  Before: gap-1 (mobile implicit)
  After:  gap-2 md:gap-1 (or gap-2 everywhere — 8px is fine for desktop too)
```

## States

| State | Behavior |
|-------|----------|
| Default | Glass pill with logo + hamburger, tap targets at 44px |
| Scrolled | Pill shifts down to `top: 64px`, blur increases — no touch target change |
| Menu open | Fullscreen overlay — items already sized correctly |
| Loading | Nav appears with blur-fade entrance after 0.3s delay |

## Accessibility

- All tap targets: 44x44px minimum
- Focus rings visible on all interactive elements
- Hamburger: `aria-label` for "Open menu" / "Close menu" (already present)
- Focus trap in open menu (already implemented)
- Tab order: Logo → Hamburger → (when open) Menu items → Close

## Image Resources

No imagery changes — navbar uses ChainlessLogo SVG component and Phosphor icons only.
