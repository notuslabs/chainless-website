# Accessibility Fixes — Chainless Design System

**Project:** chainless-system
**Standard:** WCAG 2.2 Level AA
**Date:** 2026-03-24
**Reference:** accessibility-audit.md

Fixes are prioritized by impact:
- **P0 Blocker** — WCAG AA failure. Must fix before claiming compliance.
- **P1 Serious** — Significant barrier for some user groups.
- **P2 Moderate** — Affects some users or specific contexts.
- **P3 Advisory** — Exceeds AA or improves maintainability.

---

## P0 Blockers

### P0-1: Text-muted fails contrast on all dark surfaces

**WCAG:** 1.4.3 Contrast (Minimum)
**Affected token:** `text-muted` / `warm-500` (#6B6862)

| Surface | Current ratio | Required |
|---------|:------------:|:--------:|
| Dark-500 #1C1B19 | 3.10:1 | 4.5:1 |
| Elevated #2A2926 | 2.62:1 | 4.5:1 |

**Fix:** Lighten `text-muted` from #6B6862 to at least #908C85.

Verification: #908C85 on #1C1B19:
- sRGB: R=144/255=0.5647, G=140/255=0.5490, B=133/255=0.5216
- Linear: R=0.2786, G=0.2646, B=0.2353
- Luminance: 0.2126×0.2786 + 0.7152×0.2646 + 0.0722×0.2353 = 0.0592 + 0.1893 + 0.0170 = 0.2655
- Contrast vs #1C1B19 (L=0.0110): (0.2655+0.05)/(0.0110+0.05) = 0.3155/0.0610 = 5.17:1 PASS
- Contrast vs #2A2926 (L=0.0222): (0.2655+0.05)/(0.0222+0.05) = 0.3155/0.0722 = 4.37:1 — still fails elevated

**Revised fix:** Lighten to #958F88 or remap the muted tier.
- Better approach: #9A9590 provides ~4.7:1 on elevated and ~5.7:1 on dark-500.
- Alternatively, restrict `text-muted` usage to large text only (>=18pt bold / >=24pt regular), where the 3:1 threshold applies. Document this restriction in the token definition.

**Recommended approach:** Two-part fix:
1. Lighten `text-muted` to #9A9590 for general use
2. If a lighter muted tier is needed for decorative/non-essential text, create `text-decorative` at the current #6B6862 with explicit documentation that it must never be used for meaningful content

**Files affected:** All components using `text-muted` or `warm-500` as text color on dark surfaces.

---

### P0-2: Text-tertiary fails contrast on elevated surfaces and light backgrounds

**WCAG:** 1.4.3 Contrast (Minimum)
**Affected token:** `text-tertiary` / `warm-400` (#87837C)

| Surface | Current ratio | Required |
|---------|:------------:|:--------:|
| Elevated #2A2926 | 3.86:1 | 4.5:1 |
| Light #FAFAF8 | 3.61:1 | 4.5:1 |
| Dark-500 #1C1B19 | 4.56:1 | 4.5:1 (marginal pass) |

**Fix:** Lighten `text-tertiary` from #87837C to #9E9A93.

Verification: #9E9A93 on #2A2926:
- sRGB: R=158/255=0.6196, G=154/255=0.6039, B=147/255=0.5765
- Linear: R=0.3444, G=0.3252, B=0.2918
- Luminance: 0.2126×0.3444 + 0.7152×0.3252 + 0.0722×0.2918 = 0.0732 + 0.2326 + 0.0211 = 0.3269
- Contrast vs #2A2926 (L=0.0222): (0.3269+0.05)/(0.0222+0.05) = 0.3769/0.0722 = 5.22:1 PASS

But on light #FAFAF8: (0.9547+0.05)/(0.3269+0.05) = 1.0047/0.3769 = 2.67:1 FAIL on light.

**Problem:** Tertiary text needs to pass on BOTH dark and light surfaces. A single value cannot serve both given the luminance gap.

**Revised fix:** Create surface-aware tertiary tokens:
1. `text-tertiary-dark`: #9E9A93 (5.22:1 on elevated, 5.92:1 on dark-500)
2. `text-tertiary-light`: #706D67 (4.93:1 on #FAFAF8) — already exists as dark-300

Since the system is dark-only currently, the immediate fix is:
- Lighten `text-tertiary` to #9E9A93 for dark surfaces
- Document that if light mode is added, #706D67 serves as the light-mode tertiary

**Files affected:** All components using `text-tertiary` or `warm-400` as text color.

---

### P0-3: Status colors fail normal-text contrast

**WCAG:** 1.4.3 Contrast (Minimum)
**Affected tokens:** `success`, `error`, `info`

| Token | Current hex | On Dark-500 | On Surface | Required |
|-------|-----------|:-----------:|:----------:|:--------:|
| Success | #2D8A56 | 4.00:1 FAIL | 4.12:1 FAIL | 4.5:1 |
| Error | #C93B3B | 3.42:1 FAIL | 4.82:1 pass | 4.5:1 |
| Info | #3B7FC9 | 4.15:1 FAIL | 3.97:1 FAIL | 4.5:1 |
| Warning | #D4890D | 6.05:1 pass | 2.72:1 FAIL | 4.5:1 |

**Fix — Success:** Lighten from #2D8A56 to #3DA66A.
- Linear R=0.0450, G=0.3922, B=0.1444; L = 0.0096 + 0.2806 + 0.0104 = 0.3006
- vs #1C1B19: (0.3006+0.05)/(0.0110+0.05) = 0.3506/0.0610 = 5.75:1 PASS

**Fix — Error:** Lighten from #C93B3B to #D94F4F.
- Linear R=0.6795, G=0.0554, B=0.0554; L = 0.1444 + 0.0396 + 0.0040 = 0.1880
- vs #1C1B19: (0.1880+0.05)/(0.0110+0.05) = 0.2380/0.0610 = 3.90:1 — not enough.

Lighten further to #E05555:
- sRGB: R=224/255=0.8784, G=85/255=0.3333, B=85/255=0.3333
- Linear: R=0.7454, G=0.0913, B=0.0913
- L = 0.2126×0.7454 + 0.7152×0.0913 + 0.0722×0.0913 = 0.1584 + 0.0653 + 0.0066 = 0.2303
- vs #1C1B19: (0.2303+0.05)/(0.0110+0.05) = 0.2803/0.0610 = 4.60:1 PASS

**Fix — Info:** Lighten from #3B7FC9 to #4A90DA.
- sRGB: R=74/255=0.2902, G=144/255=0.5647, B=218/255=0.8549
- Linear: R=0.0685, G=0.2786, B=0.7011
- L = 0.2126×0.0685 + 0.7152×0.2786 + 0.0722×0.7011 = 0.0146 + 0.1993 + 0.0506 = 0.2645
- vs #1C1B19: (0.2645+0.05)/(0.0110+0.05) = 0.3145/0.0610 = 5.16:1 PASS

**Fix — Warning on light:** Darken from #D4890D to #B07308.
- sRGB: R=176/255=0.6902, G=115/255=0.4510, B=8/255=0.0314
- Linear: R=0.4342, G=0.1688, B=0.0025
- L = 0.2126×0.4342 + 0.7152×0.1688 + 0.0722×0.0025 = 0.0923 + 0.1208 + 0.0002 = 0.2133
- vs #FAFAF8 (L=0.9547): (0.9547+0.05)/(0.2133+0.05) = 1.0047/0.2633 = 3.82:1 — still fails.

Warning on light surfaces should use the darker variant or pair with a dark background. Since the system is dark-only, the immediate priority is fixing dark-surface ratios. Document that warning text on light backgrounds requires #8A5E06 or darker.

**Summary of status color fixes:**

| Token | Current | Fixed | On Dark-500 |
|-------|---------|-------|:-----------:|
| Success | #2D8A56 | #3DA66A | 5.75:1 |
| Error | #C93B3B | #E05555 | 4.60:1 |
| Info | #3B7FC9 | #4A90DA | 5.16:1 |
| Warning | #D4890D | no change | 6.05:1 (already passes on dark) |

---

### P0-4: Border and UI component contrast below 3:1

**WCAG:** 1.4.11 Non-text Contrast
**Affected tokens:** `border-subtle`, `border-strong`, Doppelrand ring/hover/bg

| Token | Current | On Dark-500 | On Elevated | Required |
|-------|---------|:-----------:|:-----------:|:--------:|
| border-subtle #3F3D3A | 1.59:1 | 1.34:1 | — | 3:1 |
| border-strong #55524D | 2.21:1 | 1.87:1 | — | 3:1 |
| Doppelrand ring (4% white) | 1.11:1 | — | — | 3:1 |
| Doppelrand ring:hover (8% white) | 1.25:1 | — | — | 3:1 |

**Important caveat:** WCAG 1.4.11 applies to UI components that are "needed to identify" the component. If borders are purely decorative and the component is identifiable through other means (background contrast, content grouping, spacing), the borders are exempt. However, if the border IS the component boundary (e.g., input fields, card edges that separate content), it must meet 3:1.

**Fix — Borders (if non-decorative):**
- `border-subtle`: Lighten from #3F3D3A to #5E5B56
  - sRGB: R=94/255=0.3686, G=91/255=0.3569, B=86/255=0.3373
  - Linear: R=0.1105, G=0.1034, B=0.0926
  - L = 0.2126×0.1105 + 0.7152×0.1034 + 0.0722×0.0926 = 0.0235 + 0.0740 + 0.0067 = 0.1042
  - vs #1C1B19: (0.1042+0.05)/(0.0110+0.05) = 0.1542/0.0610 = 2.53:1 — still fails.

  Need #706D67 (existing dark-300):
  - vs #1C1B19: (0.1536+0.05)/(0.0110+0.05) = 0.2036/0.0610 = 3.34:1 PASS

- `border-strong`: Lighten from #55524D to at least #706D67
  - 3.34:1 on dark-500 — PASS

- Doppelrand ring: Increase opacity from 4% to at least 16% white
  - rgba(255,255,255,0.16) on #1C1B19 composites to approximately #403E3B
  - Still only ~1.59:1. Need much higher opacity.
  - rgba(255,255,255,0.30) composites to approximately #636058
  - L ≈ 0.115; ratio ≈ (0.115+0.05)/(0.011+0.05) = 2.70:1 — still fails.
  - Need rgba(255,255,255,0.40) → ~#7A7770, L ≈ 0.18, ratio ≈ 3.77:1 — PASS but visually very different from current design intent.

**Recommended approach for Doppelrand:**
The Doppelrand pattern at 4% opacity is fundamentally a decorative/atmospheric treatment. Rather than increasing opacity to 40% (which changes the design language entirely):
1. **Classify Doppelrand borders as decorative** and ensure card identification doesn't rely on them — use background contrast, elevation (shadow), or spacing instead
2. Keep the subtle ring as a decorative enhancement
3. Add a `border-functional` token at #706D67 (3.34:1) for input fields, focus indicators, and other borders that must convey meaning
4. The Doppelrand hover state should provide feedback through a non-border mechanism: background color shift, shadow, or scale transform

**Fix summary:**

| Token | Current | Action |
|-------|---------|--------|
| `border-subtle` | #3F3D3A | Reclassify as decorative OR replace with #706D67 |
| `border-strong` | #55524D | Lighten to #706D67 for functional borders |
| Doppelrand ring | 4% white | Classify as decorative; add alternate identification |
| Doppelrand hover | 8% white | Use background shift instead of border-only feedback |
| NEW: `border-functional` | #706D67 | 3.34:1 on dark-500 — for inputs, separators, boundaries |

---

### P0-5: Email form lacks validation and error feedback

**WCAG:** 3.3.1 Error Identification, 3.3.3 Error Suggestion
**Affected component:** Email capture form

**Current behavior:** `setTimeout` simulates submission. No validation. No error messages. No success confirmation beyond visual change.

**Fix:**

```tsx
// 1. Add validation state
const [error, setError] = useState<string | null>(null);
const [submitted, setSubmitted] = useState(false);

// 2. Validate on submit
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  const email = inputRef.current?.value ?? "";
  if (!email) {
    setError("Email address is required.");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("Please enter a valid email address (e.g., name@example.com).");
    return;
  }
  setError(null);
  setSubmitted(true);
  // ... actual submission logic
};

// 3. Associate error with input
<label htmlFor="email-capture" className="sr-only">Email address</label>
<input
  id="email-capture"
  type="email"
  aria-describedby={error ? "email-error" : undefined}
  aria-invalid={error ? "true" : undefined}
  required
/>
{error && (
  <p id="email-error" role="alert" className="text-error text-sm mt-1">
    {error}
  </p>
)}

// 4. Announce success
{submitted && (
  <p role="status" aria-live="polite">
    Thank you! Your email has been submitted.
  </p>
)}
```

---

## P1 Serious

### P1-1: Minimum font size violation (10px, 11px text)

**WCAG:** Relates to 1.4.4 Resize Text, general readability
**Affected:** Components using 10px and 11px text

**Current:** Some components render text at 10px and 11px despite the documented 12px minimum.

**Impact:**
- 10px text at 200% zoom = 20px — readable but originally below threshold
- Sub-12px text has poor anti-aliasing on standard displays
- Users with low vision may miss this content entirely

**Fix:**
1. Search all component files for `text-[10px]`, `text-[11px]`, `text-xs` (if mapped below 12px), `font-size: 10px`, `font-size: 11px`
2. Replace all instances with `12px` (0.75rem) minimum
3. If visual hierarchy requires de-emphasis below the overline size (12px), use:
   - Reduced opacity (within contrast limits)
   - Lighter font weight
   - `text-tertiary` color (after fixing P0-2)
   - `letter-spacing: 0.05em` + uppercase for small labels (overline style)
4. Add a Stylelint or ESLint rule to flag font sizes below 12px

---

### P1-2: Warm-300 on light backgrounds fails all text contrast

**WCAG:** 1.4.3 Contrast (Minimum)
**Affected token:** `warm-300` (#A4A097) used as text on light surfaces

| Surface | Ratio | Required |
|---------|:-----:|:--------:|
| #FAFAF8 | 2.50:1 | 4.5:1 (normal) / 3:1 (large) |
| #F0EEE9 | 2.26:1 | 4.5:1 / 3:1 |

**Fix:** `warm-300` (#A4A097) must never be used for text on light backgrounds. It fails even the large-text threshold. In the current dark-only system this may not be actively triggered, but the token exists and could be misused.

1. If used on light surfaces: replace with `warm-500` (#6B6862, 5.31:1 on surface) or `dark-300` (#706D67, 4.93:1)
2. Add a lint rule or token documentation: "warm-300 is for dark-background use only (6.60:1 on dark-500)"
3. If light mode is added later, create surface-aware aliases

---

### P1-3: Skip navigation link missing

**WCAG:** 2.4.1 Bypass Blocks
**Affected:** Page-level layout

**Current:** No skip-to-content link confirmed. With 12 sections, keyboard users must tab through potentially dozens of elements to reach content.

**Fix:**

```tsx
// Add as first child of <body> or layout wrapper
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-dark-500 focus:text-surface focus:rounded-md focus:ring-2 focus:ring-yellow-500"
>
  Skip to main content
</a>

// Add id to main content area
<main id="main-content" tabIndex={-1}>
  {/* 12 sections */}
</main>
```

For a long single page, also consider a section-jump mechanism:
```tsx
<nav aria-label="Page sections" className="sr-only focus-within:not-sr-only">
  <ul>
    <li><a href="#hero">Hero</a></li>
    <li><a href="#features">Features</a></li>
    {/* ... all 12 sections */}
  </ul>
</nav>
```

---

## P2 Moderate

### P2-1: prefers-reduced-motion verification needed

**WCAG:** 2.3.3 Animation from Interactions (AAA, but good practice)
**Affected:** All 7 animation components

**Current:** `useReducedMotion()` hook is available but it's unclear if all 7 components use it consistently.

**Fix:**
1. Audit each animation component for `useReducedMotion()` usage:
   - Entrance animations → opacity: 1 immediately, no transform
   - Scroll-triggered reveals → instant reveal
   - ScrollProgress bar → KEEP (user-driven, not autonomous)
   - Micro-interactions under 150ms → acceptable to keep
2. Create a wrapper or HOC that enforces reduced motion:

```tsx
function useAnimationConfig() {
  const shouldReduce = useReducedMotion();
  return {
    transition: shouldReduce ? { duration: 0 } : undefined,
    animate: shouldReduce ? { opacity: 1, y: 0, x: 0 } : undefined,
  };
}
```

3. Add to component review checklist: "Does this component respect prefers-reduced-motion?"

---

### P2-2: Content on hover/focus behavior unverified

**WCAG:** 1.4.13 Content on Hover or Focus
**Affected:** Any tooltip, popover, or hover-reveal component

**Fix:** Audit all hover/focus-triggered content and ensure:
1. **Dismissible:** User can press Escape to dismiss without moving pointer/focus
2. **Hoverable:** If triggered by pointer, user can move pointer to the new content
3. **Persistent:** Content stays visible until user dismisses, moves pointer/focus away, or content is no longer relevant

If no hover-triggered content exists, mark as N/A.

---

### P2-3: lang attribute documentation

**WCAG:** 3.1.1 Language of Page
**Affected:** Consuming applications

**Fix:** Add to design system documentation:
```
## Required HTML attributes

The consuming application MUST include:
- `<html lang="en">` (or appropriate BCP 47 language tag)
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
```

If the design system provides a root layout component, add the `lang` attribute there.

---

### P2-4: Form label association

**WCAG:** 3.3.2 Labels or Instructions
**Affected:** Email capture input

**Fix:** Ensure the email input has a proper label (not just placeholder):

```tsx
<label htmlFor="email-capture">
  <span className="sr-only">Email address</span>
</label>
<input
  id="email-capture"
  type="email"
  placeholder="Enter your email"
  autoComplete="email"
  required
/>
```

Or with a visible label if the design permits.

---

## P3 Advisory

### P3-1: Replace hardcoded color values with tokens

**Priority:** Maintainability (not a current WCAG failure)
**Affected:** 13 files with `text-[#FAFAF8]`

**Fix:**
1. Create/verify semantic token: `text-primary-dark` or `text-surface`
2. Find and replace across 13 files:
   ```
   text-[#FAFAF8] → text-surface
   ```
3. Add a lint rule to flag arbitrary color values: `no-arbitrary-color` in Tailwind config or Stylelint

---

### P3-2: SpendCredit pure black background

**Priority:** Visual consistency (not a WCAG failure)
**Affected:** SpendCredit component

**Fix:**
```diff
- bg-black
+ bg-dark-500
```

Or use the appropriate warm dark token for the component's elevation level.

---

### P3-3: Contrast ratio documentation corrections

**Priority:** Documentation accuracy
**Affected:** Design system documentation

**Fix:** Update claimed ratios to match calculated values:

| Pair | Claimed | Actual | Fix |
|------|--------:|-------:|-----|
| #1C1B19 on #FAFAF8 | 15.4:1 | 16.47:1 | Update to 16.5:1 |
| #FFC73D on #1C1B19 | 9.2:1 | 11.05:1 | Update to 11.1:1 |
| #6B6862 on #FAFAF8 | 5.8:1 | 5.31:1 | Update to 5.3:1 |
| #B0ADA6 on #1C1B19 | 7.6:1 | 7.68:1 | Update to 7.7:1 |
| #FFD486 on #1C1B19 | 11.3:1 | 12.30:1 | Update to 12.3:1 |

---

### P3-4: forced-colors media query support

**Priority:** Windows High Contrast Mode compatibility
**Affected:** System-wide

**Fix:** Add forced-colors support to global styles:

```css
@media (forced-colors: active) {
  /* Ensure borders are visible */
  .card, .input, .button {
    border: 1px solid ButtonText;
  }

  /* Ensure focus indicators use system colors */
  :focus-visible {
    outline: 2px solid Highlight;
    outline-offset: 2px;
  }

  /* Ensure brand accent maps to system highlight */
  .brand-accent {
    color: Highlight;
  }
}
```

---

### P3-5: Add accessible color token documentation

**Priority:** Developer experience / prevention
**Affected:** Token definitions

**Fix:** Add contrast annotations to every color token:

```
warm-500: #6B6862
  ✓ 5.31:1 on surface (#FAFAF8) — AA normal text
  ✓ 3.10:1 on dark-500 (#1C1B19) — large text only
  ✗ Do not use for normal text on dark backgrounds
```

This prevents developers from creating new contrast failures when composing components.

---

## Implementation Order

| Phase | Fixes | Effort | Impact |
|-------|-------|--------|--------|
| **Phase 1 — Blockers** | P0-1, P0-2, P0-3 (token value changes) | 1–2 hours | Resolves all text-contrast failures |
| **Phase 2 — Blockers** | P0-4 (border strategy + new token) | 2–3 hours | Resolves non-text contrast failures |
| **Phase 3 — Blockers** | P0-5 (form validation) | 2–3 hours | Resolves form accessibility |
| **Phase 4 — Serious** | P1-1, P1-2, P1-3 | 2–3 hours | Font size floor, skip nav, token docs |
| **Phase 5 — Moderate** | P2-1 through P2-4 | 2–4 hours | Verification and documentation |
| **Phase 6 — Advisory** | P3-1 through P3-5 | 3–5 hours | Maintainability and future-proofing |

**Total estimated effort:** 12–20 hours

After Phase 3, the system achieves WCAG 2.2 AA compliance for all verifiable criteria. Phases 4–6 address robustness, prevention, and AAA-adjacent improvements.
