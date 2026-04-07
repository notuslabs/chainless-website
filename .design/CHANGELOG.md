# Design Changelog
> One entry per completed project. Scan this for quick codebase history.

<!-- newest first -->

## [chainless-system] — 2026-04-07
> Brand: chainless | Scope: Design system QA review + Security section + Transparency page

**Added:** Security section (security.tsx), Transparency page (transparencia/page.tsx, transparency-content.tsx), legal-prose CSS, doppelrand hallmark variants (narrow, tiny)
**Modified:** footer.tsx (regulatory disclaimer), globals.css (legal prose styles), security.tsx (copy refinements)
**Patterns:** Legal prose typography, regulatory disclosure footer pattern
**PR:** --
**Files:** 5 files touched -> [manifest pending]

## 2026-03-24 — Brand Patterns Phase Complete

**Phase**: Branding > Patterns (Phase 4 of 4)
**Brand**: Chainless
**Strategy**: EXTEND (evolve existing implementation)

### Delivered
- 7 foundation documents: color system, typography, spacing, grid, elevation, border-radius, motion
- 3 component documents: token mapping (25 delta tokens), classification (17 components audited), Doppelrand card spec
- 5 design principles: Warm Authority, Restraint as Luxury, Reveal Don't Announce, Architecture is the Brand, Dual Voice One System
- Machine-readable: tokens.json (W3C), chainless.yml (preset), chainless.md (AI prompt)
- INDEX.md system index

### Key Findings
- Existing implementation is well-aligned with identity spec (11 of 17 components = KEEP)
- `EASE_PREMIUM` redeclared in 7 files — should be single import from motion.tsx
- `text-[#FAFAF8]` hardcoded in 13 files — needs semantic text token
- Doppelrand pattern copy-pasted in 6 files — needs shared component
- `spend-credit-legacy.tsx` is dead code (replaced by spend-credit.tsx)
- `spend-credit.tsx` uses `bg-black` violating warm palette mandate

### Status
All 4 branding phases complete. Design system documented and ready for project-level work.
