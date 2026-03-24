# Component Classification

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Classification Key

| Status | Meaning |
|--------|---------|
| **KEEP** | Works as-is. Needs only token extraction (no structural or design changes). |
| **RESTYLE** | Design changes needed. Token values are wrong (e.g., `black` instead of `dark-500`). |
| **REFACTOR** | Code structure changes needed. Too large, responsibilities mixed, or bypasses shared systems. |
| **REPLACE** | Dead code. Remove entirely. |

---

## Classification Table

| # | Component | File | Lines | Doppelrand | EASE_PREMIUM | Class | Notes |
|---|-----------|------|:-----:|:----------:|:------------:|:-----:|-------|
| 1 | `MagneticButton` et al | `motion.tsx` | 244 | — | Defines | **KEEP** | Canonical motion system. Source of truth. |
| 2 | `Hero` | `hero.tsx` | 139 | — | Via imports | **KEEP** | Heavy inline values but structurally sound. |
| 3 | `Navbar` | `navbar.tsx` | 163 | — | Inline 6x | **REFACTOR** | Bypasses motion.tsx entirely. Imports framer-motion direct. |
| 4 | `ProofBar` | `proof-bar.tsx` | 69 | — | Via imports | **KEEP** | Simple, clean. Minor token needs. |
| 5 | `BorrowCredit` | `borrow-credit.tsx` | 228 | Yes | Redeclares | **KEEP** | Needs EASE_PREMIUM import fix + tokens. |
| 6 | `CTASection` | `cta-section.tsx` | 150 | — | Redeclares | **KEEP** | Needs EASE_PREMIUM import fix + tokens. |
| 7 | `HowItWorks` | `how-it-works.tsx` | 314 | Yes | Redeclares | **KEEP** | Solid bento. Needs import fix + tokens. |
| 8 | `SocialProof` | `social-proof.tsx` | 272 | Yes | Via imports | **REFACTOR** | PingPongVideo + Avatar should be extracted. |
| 9 | `SpendCredit` | `spend-credit.tsx` | 158 | — | Via imports | **RESTYLE** | Uses `bg-black` / `black` — violates warm palette. |
| 10 | `SpendCreditLegacy` | `spend-credit-legacy.tsx` | 194 | Yes | Redeclares (unused) | **REPLACE** | Dead code. Not imported in page.tsx. Delete. |
| 11 | `YieldSection` | `yield-section.tsx` | 428 | Yes | Redeclares | **REFACTOR** | Largest file. PoolTicker/TokenIcon should extract. |
| 12 | `EditorialBreak` | `editorial-break.tsx` | 243 | — | Neither | **REFACTOR** | Complex imperative scroll. Extract hook + renderer. Uses `bg-black`. |
| 13 | `Philosophy` | `philosophy.tsx` | 210 | Yes | Redeclares | **KEEP** | Well-structured. Import fix + tokens. |
| 14 | `AnimatedCounter` | `animated-counter.tsx` | 81 | — | Neither | **KEEP** | Clean utility. Minor token needs. |
| 15 | `Footer` | `footer.tsx` | 86 | — | Redeclares | **KEEP** | Simple. Import fix + tokens. |
| 16 | `ChainlessLogo` | `chainless-logo.tsx` | 107 | — | Neither | **KEEP** | Clean brand asset. No changes. |
| 17 | `MeshGradient` | `mesh-gradient.tsx` | 113 | — | Inline 2x | **KEEP** | Decorative. Minor import fix. |
| — | `page.tsx` | `page.tsx` | 91 | — | Neither | **REFACTOR** | Extract SectionGlow/Fade/Rule. Raw hex values. |
| — | `layout.tsx` | `layout.tsx` | 38 | — | Neither | **KEEP** | Clean, minimal. No changes. |

---

## Summary

| Classification | Count | Action |
|:---:|:---:|--------|
| **KEEP** | 11 | Token extraction only |
| **RESTYLE** | 1 | Fix `black` → `dark-500` warm palette |
| **REFACTOR** | 5 | Structural changes (extract sub-components, consolidate imports) |
| **REPLACE** | 1 | Delete `spend-credit-legacy.tsx` |

---

## Cross-Cutting Fixes (Apply to All)

### 1. EASE_PREMIUM Consolidation

**Problem**: Redeclared in 7 files, used inline in 2 more.

**Fix**: Export `EASE_PREMIUM` from `motion.tsx` (already defined there). All other files should `import { EASE_PREMIUM } from './motion'` and delete their local declarations.

### 2. `text-[#FAFAF8]` → Token

**Problem**: 13 files use `text-[#FAFAF8]` as inline arbitrary value.

**Fix**: Add `--color-text-primary: #FAFAF8` to `@theme inline`. Replace all instances with `text-text-primary`.

### 3. Doppelrand Pattern → Shared Component

**Problem**: 6 files copy-paste identical outer/inner shell markup.

**Fix**: Create `<DoppelrandCard>` component (see `doppelrand.md` spec).

### 4. Section Header Clamp

**Problem**: `text-[clamp(2rem,1.5rem+2vw,3.25rem)]` copy-pasted in 5+ section headers.

**Fix**: Add `--text-section-heading: clamp(2rem, 1.5rem + 2vw, 3.25rem)` to `@theme inline`. Use `text-[length:var(--text-section-heading)]` or a utility class.

---

## RESTYLE Spec: `spend-credit.tsx`

**Issue**: Uses `bg-black` and `linear-gradient(to bottom, black, transparent)` for edge fades.

**Fix**:
- Replace `bg-black` → `bg-dark-950` (or `bg-dark-500`)
- Replace `black` in gradients → `#1C1B19` (dark-500) or `#0F0E0D` (dark-800)
- This maintains the warm espresso undertone instead of cold pure black

---

## REFACTOR Specs

### `navbar.tsx`

1. Import `EASE_PREMIUM` from `motion.tsx` — delete 6 inline `[0.32, 0.72, 0, 1]`
2. Consider using `MagneticButton` for nav hover instead of custom inline motion
3. Extract backdrop-filter rgba values to CSS custom properties

### `social-proof.tsx`

1. Extract `PingPongVideo` to its own file (60+ lines of rAF logic)
2. Extract `Avatar` component (SVG + image fallback)
3. Move conic-gradient border effect to a reusable utility or Doppelrand variant

### `yield-section.tsx`

1. Extract `PoolTicker` sub-component (~80 lines including interval logic)
2. Extract `TokenIcon` sub-component
3. Import `EASE_PREMIUM` from motion.tsx
4. APY simulation logic (random delta, floor/ceiling) could be a custom hook

### `editorial-break.tsx`

1. Extract `useFrameSequence` custom hook (frame preloading, canvas painting, scroll-driven playback)
2. Extract `CoupletLine` renderer
3. Replace `bg-black` → `bg-dark-950`
4. The lerp breakpoint arrays should be documented as intentional (they map to content timing)

### `page.tsx`

1. Extract `SectionGlow`, `SectionFade`, `SectionRule` to a shared `section-primitives.tsx` file
2. Replace raw hex `#181716` → `var(--color-dark-600)`, `#1C1B19` → `var(--color-dark-500)`
3. Replace inline `rgba(255,199,61,...)` → CSS custom properties referencing yellow-500

---

## Dead Code

### `spend-credit-legacy.tsx` — DELETE

- Not imported in `page.tsx`
- Replaced by `spend-credit.tsx`
- Contains unused `motion` import and dead `EASE_PREMIUM` redeclaration
- Action: Delete file

### Unused Exports in `motion.tsx`

- `CountUp` — not imported anywhere (ProofBar uses its own `AnimatedCounter`)
- `ParallaxSection` — not imported anywhere

These are not dead code per se — they're library primitives available for future use. Keep them.
