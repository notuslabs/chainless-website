# Prioritized Fixes — Chainless Design System

**Date:** 2026-03-24
**System:** chainless-system
**Method:** Critical / Important / Nice-to-have (triage against premium fintech standard)

---

## Critical — Must Resolve Before Build Phase

These issues will cause compounding problems if carried into component development. Fix them first.

---

### C1. Resolve the Sohne vs. Satoshi Font Decision

**Problem:** The spec documents Sohne (Klim Foundry, paid license) but the implementation uses Satoshi (Fontshare, free). These fonts have different metrics — x-height, letter spacing, weight distribution, and character width differ meaningfully. Every typographic token (font sizes, line heights, letter spacing) was calibrated against one of these fonts. Using the other invalidates those calibrations.

**Why critical:** A design system's typography tokens are its most-used tokens. If the font is wrong, every component renders with incorrect proportions. This cannot be deferred.

**Fix:**
1. **Decide:** Either license Sohne and commit to the paid font, or officially adopt Satoshi and update the spec. There is no middle ground.
2. If choosing Satoshi: Audit all type tokens against Satoshi renders. Specifically check that `clamp()` heading sizes produce the intended visual weight at each breakpoint with Satoshi's actual metrics.
3. If choosing Sohne: Purchase license, install, verify metrics match spec assumptions.
4. Update all documentation (chainless.md, chainless.yml, tokens.json) to reflect the decision.
5. Remove all references to the unchosen font.

**Effort:** 2-4 hours (decision + audit + documentation update)

---

### C2. Extract Hardcoded `text-[#FAFAF8]` to a Semantic Token

**Problem:** The hex value `#FAFAF8` appears as a raw Tailwind arbitrary value in 13 component files. This is the system's primary text color — arguably its most-used token — and it exists outside the token system entirely.

**Why critical:** If this color needs to change (light mode, brand refresh, accessibility adjustment), 13 files need manual updates. More importantly, this signals that the token system is not authoritative — developers are bypassing it for the most basic value. This pattern will spread.

**Fix:**
1. Add `--color-text-primary: oklch(...)` to the token system (convert #FAFAF8 to OKLCH for consistency with the rest of the palette).
2. Register it as a Tailwind v4 theme token so it's available as `text-primary` (or whatever the naming convention dictates).
3. Find-and-replace all 13 instances of `text-[#FAFAF8]` with the semantic class.
4. Add a Stylelint or ESLint rule that flags raw hex values in component files.

**Effort:** 1-2 hours (token definition + find-replace + lint rule)

---

### C3. Remove `bg-black` and Map to Warm Dark Neutral

**Problem:** Raw `bg-black` (#000000) is used somewhere in the codebase. Pure black contradicts the "Warm Authority" principle — it's the coldest possible dark value and sits outside the warm dark neutral scale.

**Why critical:** A single `bg-black` creates a visible temperature discontinuity. On any display, the eye notices the jump from warm dark (#1a1a18 or similar) to pure black (#000000). This is a brand violation that undermines the warm palette at a perceptual level.

**Fix:**
1. Identify all `bg-black` usages.
2. Replace with the appropriate dark neutral token (likely `dark-950` or `surface-primary`).
3. If true black is needed for specific contexts (e.g., image overlays), create a named token `--color-surface-true-black` with documentation explaining when it's appropriate.

**Effort:** 30 minutes

---

### C4. Remove Sub-12px Type Sizes

**Problem:** 10px and 11px font sizes exist in the type scale despite a documented 12px minimum. The system contradicts its own spec.

**Why critical:** Sub-12px text is:
- Inaccessible (fails WCAG for users with low vision)
- Illegible on many displays (especially non-Retina)
- A spec violation that signals the system doesn't enforce its own rules

For a fintech product handling real money, illegible text is a liability issue, not a design preference.

**Fix:**
1. Remove the 10px and 11px entries from the type scale.
2. If these sizes are used for specific UI elements (labels, badges, captions), redesign those elements at 12px minimum.
3. If they exist only in the scale definition but aren't used, simply delete them.
4. Add a comment in the type scale definition: `/* Minimum: 12px. No exceptions. */`

**Effort:** 1 hour

---

### C5. Extract 25 Delta Tokens to the Token System

**Problem:** 25 hardcoded values have been identified across the codebase that should be tokens but aren't. These include colors, spacing values, and other design decisions that are embedded in component code rather than centralized.

**Why critical:** Every hardcoded value is a token system gap. Each one means the system is not the single source of truth. Collectively, 25 gaps mean roughly 25% of design decisions are ungoverned. This percentage will only grow as new components are built.

**Fix:**
1. Categorize the 25 delta tokens by type (color, spacing, radius, shadow, motion, layout).
2. For each, determine: Is this a new token, or a misuse of an existing token?
3. Add new tokens where needed. Replace hardcoded values with token references where existing tokens already cover the value.
4. Verify the token count stays manageable — if adding 25 tokens bloats the system, some may need to be consolidated under existing semantic categories.

**Effort:** 4-6 hours (audit + categorization + extraction + replacement)

---

## Important — Resolve During Build Phase

These issues should be addressed as components are built or refactored. They cause friction and inconsistency but won't cascade if deferred slightly.

---

### I1. Extract Doppelrand to a Shared Component

**Problem:** The signature Doppelrand card pattern is copy-pasted across 6 components. Each instance manually implements the outer shell, inner core, visible gap, and radius relationship.

**Impact:** Copy-paste components drift. Over time, the 6 instances will diverge in subtle ways (different gap widths, slightly different radii, inconsistent padding). The signature pattern becomes inconsistent at exactly the places users look most carefully.

**Fix:**
1. Create a `DoppelrandCard` component with a documented API:
   - Props: `variant` (default/elevated/minimal), `padding`, `gap`, `children`
   - Internal: Handles outer radius (36px), inner radius (30px), gap rendering, background colors, inner highlight
2. Define the outer/inner radius relationship as a named token pair: `--radius-doppelrand-outer: 36px`, `--radius-doppelrand-inner: 30px`
3. Migrate all 6 existing usages to the shared component.
4. Document the component with anatomy diagram and usage guidelines.

**Effort:** 4-6 hours (component creation + migration + documentation)

---

### I2. Centralize EASE_PREMIUM and Motion Tokens

**Problem:** The `EASE_PREMIUM` cubic-bezier value is defined in 7 separate files. The two spring configs are presumably duplicated similarly.

**Impact:** If the easing curve needs adjustment (common during motion refinement), 7 files need updating. More importantly, any new component must know to copy this value rather than importing it.

**Fix:**
1. Create a central motion config file (e.g., `lib/motion.ts` or `styles/motion.css`):
   ```
   --ease-premium: cubic-bezier(...);
   --spring-content-stiffness: ...;
   --spring-content-damping: ...;
   --spring-whip-stiffness: ...;
   --spring-whip-damping: ...;
   ```
2. For Framer Motion components, export JS constants from a single `motion-config.ts`.
3. For CSS animations, register as custom properties.
4. Replace all 7 file-local definitions with imports from the central source.

**Effort:** 2-3 hours

---

### I3. Centralize Container Width

**Problem:** `max-w-[1200px]` appears as a Tailwind arbitrary value in 10 files. The 1280px container + 24px gutter = 1200px content width relationship is implicit.

**Impact:** If the content width changes (larger displays, different contexts), 10 files need updating. The mathematical relationship between container, gutter, and content is undocumented in code.

**Fix:**
1. Register as a Tailwind theme token: `--container-content: 1200px` (available as `max-w-content`).
2. Optionally create a `SectionContainer` layout component that handles the full section setup (max-width + centering + horizontal padding).
3. Replace all 10 instances of `max-w-[1200px]` with the token or component.

**Effort:** 1-2 hours

---

### I4. Consolidate Section Heading Clamp Pattern

**Problem:** A fluid heading `clamp()` pattern is duplicated across 5+ files. These likely have slight parameter variations.

**Impact:** Inconsistent heading sizes across sections. A user scrolling the page may see section headings at slightly different scales, which breaks visual rhythm.

**Fix:**
1. Audit all 5+ instances and identify the intended pattern (or patterns, if intentional variation exists).
2. Define 2-3 named fluid heading classes: `text-heading-section`, `text-heading-subsection`, etc.
3. Register these in the type scale with their `clamp()` definitions.
4. Replace all instances with the named classes.

**Effort:** 2-3 hours

---

### I5. Register Arbitrary-Value Spacing Tokens in Tailwind

**Problem:** Spacing values 14px and 84px require Tailwind arbitrary values (`p-[14px]`, `gap-[84px]`).

**Impact:** Arbitrary values are a signal that the system and the framework are misaligned. They also bypass Tailwind's utility class deduplication, potentially producing slightly larger CSS output.

**Fix:**
1. In Tailwind v4 CSS config, register the full spacing scale:
   ```css
   @theme {
     --spacing-3_5: 14px;   /* or --spacing-gap-sm */
     --spacing-21: 84px;    /* or --spacing-section */
   }
   ```
2. Choose meaningful names rather than raw numbers if the values have semantic roles.
3. Replace arbitrary values with the new utility classes.

**Effort:** 30 minutes

---

### I6. Document Error State Compositions

**Problem:** The system has 4 status colors but no documented error state patterns. For a fintech product, error states are among the most critical UI moments.

**Impact:** Without system-level error patterns, every developer will invent their own. Error toasts, validation messages, and failure states will be visually inconsistent — precisely when the user needs the most visual clarity and confidence.

**Fix:**
1. Document at minimum these error compositions:
   - **Inline validation:** Input border color, error text placement, icon usage
   - **Form-level error:** Error summary banner, styling, motion (shake? highlight?)
   - **Transaction failure:** Full-width error state with action (retry, contact support)
   - **Empty/loading/error states:** Skeleton → Content → Error fallback patterns
   - **Toast/notification:** Error toast styling, position, auto-dismiss behavior
2. Define which status colors map to which severity levels.
3. Show correct and incorrect examples.

**Effort:** 4-6 hours (design + documentation)

---

### I7. Remove Dead Code Component

**Problem:** 1 component is flagged as REPLACE (dead code) but still exists in the codebase.

**Impact:** Dead code in a design system is an attractive nuisance. Someone will import it, build against it, and then discover it's unsupported.

**Fix:**
1. Delete the component file.
2. Remove any imports or references.
3. Verify the build still compiles.

**Effort:** 15 minutes

---

## Nice-to-Have — Future Enhancement

These improve the system's maturity but aren't blocking current work.

---

### N1. Build a Token Preview Page

Create a static HTML page (or simple Next.js route) that renders every token visually:
- Color swatches with values, contrast ratios, and WCAG pass/fail
- Typography specimens at each scale step
- Spacing visualization (boxes at each spacing value)
- Shadow examples on cards
- Border radius examples
- Motion previews (animated examples of each motion component)

This is the single highest-leverage documentation improvement for developer adoption. Effort: 6-8 hours.

---

### N2. Reduce Type Scale from 13 to 9-10 Levels

13 type sizes is excessive for most design systems. Premium systems (Apple HIG, Material 3, Vercel's Geist) typically use 8-10 levels. Audit actual usage — at least 3-4 levels are likely unused or redundant. Reducing the scale simplifies decisions without reducing capability.

---

### N3. Plan Light Mode Token Activation

Light-mode tokens exist but are unused. Before activating:
1. Verify all light-mode values have been tested for WCAG compliance
2. Define the switching mechanism (CSS custom property swap, class toggle, media query)
3. Test Doppelrand card rendering in light mode (the warm-tinted shadows need light-mode equivalents)
4. Test the noise overlay — 2.2% noise on light surfaces may need different opacity than on dark

---

### N4. Add Anti-Pattern Documentation

Create a "Don't" page showing:
- Raw hex values vs. token usage
- `bg-black` vs. dark neutral tokens
- Doppelrand manual construction vs. shared component
- Accent color overuse (>10% surface coverage)
- Missing reduced-motion alternatives

Each with a bad example and corrected good example.

---

### N5. Add Versioning to Machine-Readable Outputs

Add `"version": "0.1.0"` to tokens.json and chainless.yml. Follow semver:
- Major: breaking token changes (renamed, removed)
- Minor: new tokens added
- Patch: value adjustments within existing tokens

---

### N6. Establish Contribution Guidelines

Document the process for:
- Proposing a new token (PR template, naming conventions, required documentation)
- Adding a new component (must use shared primitives, must support reduced motion)
- Modifying an existing token (impact assessment, migration guide requirement)

---

## Fix Sequence (Recommended Order)

```
Phase 0 — Foundation (before any build work)
├── C1. Resolve Sohne/Satoshi decision
├── C2. Extract text-[#FAFAF8] to token
├── C3. Replace bg-black
├── C4. Remove sub-12px sizes
└── C5. Extract 25 delta tokens

Phase 1 — Shared Primitives (start of build)
├── I1. Doppelrand shared component
├── I2. Centralize EASE_PREMIUM
├── I3. Centralize container width
├── I4. Consolidate heading clamp
├── I5. Register spacing tokens
└── I7. Remove dead code

Phase 2 — Patterns & Documentation (during build)
├── I6. Error state compositions
├── N1. Token preview page
└── N4. Anti-pattern docs

Phase 3 — Maturity (after initial build)
├── N2. Reduce type scale
├── N3. Light mode activation
├── N5. Versioning
└── N6. Contribution guidelines
```

**Estimated total effort:** 25-40 hours across all phases
**Critical path (Phase 0) effort:** 8-14 hours
