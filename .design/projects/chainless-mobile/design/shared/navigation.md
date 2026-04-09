# Navigation
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Type

Floating glass pill navbar (fixed position). No changes to navigation pattern — only touch target sizing adjustments.

## Mobile Behavior

- Pill shows: Logo + Language switcher + Hamburger
- Hamburger opens fullscreen overlay menu
- Menu items: Rendimentos, Cartao, Emprestimo, Seguranca
- CTAs: "Baixar app" (download buttons)

## Touch Target Changes

| Element | Before | After | WCAG Ref |
|---------|--------|-------|----------|
| Logo link | ~40px height | 44px min-height | SC 2.5.8 |
| Hamburger | implicit sizing | 44x44px explicit | SC 2.5.8 |
| Internal gap | 4px (gap-1) | 8px (gap-2) | SC 2.5.8 |

## Desktop (Unchanged)

Full pill with logo + 4 nav links + language switcher + CTAs. No touch target changes needed for pointer devices.

## Related

- [screen-01-navbar.md](../screen-01-navbar.md) — detailed touch target specifications
