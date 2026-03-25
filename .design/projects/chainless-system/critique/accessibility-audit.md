# Accessibility Audit — Chainless Design System

**Project:** chainless-system
**Standard:** WCAG 2.2 Level AA
**Date:** 2026-03-24
**Auditor:** Automated design-system audit
**Platform:** Web (Next.js 16, Tailwind v4, Framer Motion 12)
**Scope:** Design tokens, component patterns, motion system, layout primitives

---

## Overall Compliance Level

**Rating: Conditional AA — 7 failures require remediation**

The system demonstrates strong accessibility foundations (semantic HTML, focus management, reduced-motion support, touch targets) but carries concrete WCAG AA failures in color contrast for status colors, muted text tiers, border/UI-component visibility, and minimum font size violations.

---

## Summary Table

| # | Criterion | Level | Status | Notes |
|---|-----------|-------|--------|-------|
| 1.1.1 | Non-text Content | A | Needs Verification | aria-label present; image audit needed |
| 1.3.1 | Info and Relationships | A | Pass | Semantic HTML, landmarks, heading hierarchy |
| 1.3.2 | Meaningful Sequence | A | Pass | Reading order matches visual order |
| 1.3.3 | Sensory Characteristics | A | Needs Verification | Color-only status indicators need review |
| 1.4.1 | Use of Color | A | Needs Verification | Status colors may rely on hue alone |
| 1.4.3 | Contrast (Minimum) | AA | **Fail** | 6 text-color pairs below 4.5:1 |
| 1.4.4 | Resize Text | AA | Pass | clamp() with rem; zoom-safe |
| 1.4.5 | Images of Text | AA | Pass | No images of text detected |
| 1.4.10 | Reflow | AA | Pass | 320px reflow, no horizontal scroll |
| 1.4.11 | Non-text Contrast | AA | **Fail** | Borders and Doppelrand rings below 3:1 |
| 1.4.12 | Text Spacing | AA | Pass | Relative units; 65ch max-width |
| 1.4.13 | Content on Hover/Focus | AA | Needs Verification | Tooltip/popover behavior unconfirmed |
| 2.1.1 | Keyboard | A | Needs Verification | focus-visible present; full path untested |
| 2.1.2 | No Keyboard Trap | A | Needs Verification | Single-page; modal behavior unconfirmed |
| 2.2.2 | Pause, Stop, Hide | A | Pass | No auto-playing loops; scroll-triggered fire-once |
| 2.3.1 | Three Flashes | A | Pass | No content flashes above 3/sec |
| 2.4.1 | Bypass Blocks | A | Needs Verification | Skip-link not confirmed |
| 2.4.2 | Page Titled | A | Needs Verification | Single page; document.title not confirmed |
| 2.4.3 | Focus Order | A | Pass | Sequential section order, no reordering |
| 2.4.6 | Headings and Labels | AA | Pass | Heading hierarchy present |
| 2.4.7 | Focus Visible | AA | Pass | Global focus-visible ring styles |
| 2.5.5 | Target Size (Enhanced) | AAA | Pass | 44x44px with 8px spacing (exceeds AA 24px) |
| 2.5.8 | Target Size (Minimum) | AA | Pass | 44x44px documented and enforced |
| 3.1.1 | Language of Page | A | Needs Verification | lang attribute not confirmed |
| 3.2.1 | On Focus | A | Pass | No context changes on focus |
| 3.2.2 | On Input | A | Pass | No auto-submission behavior |
| 3.3.1 | Error Identification | A | **Fail** | Email form lacks real validation feedback |
| 3.3.2 | Labels or Instructions | A | Needs Verification | Form label markup not confirmed |
| 3.3.3 | Error Suggestion | AA | **Fail** | No error correction suggestions |
| 4.1.1 | Parsing | A | N/A | Obsolete in WCAG 2.2 |
| 4.1.2 | Name, Role, Value | A | Pass | ARIA labels, roles, sr-only present |
| 4.1.3 | Status Messages | AA | Pass | aria-live and role="status" detected |

**Pass:** 17 | **Fail:** 4 | **Needs Verification:** 9 | **N/A:** 1

---

## Detailed Findings

### 1. Perceivable

#### 1.1.1 Non-text Content (Level A)

**Status:** Needs Verification

**Evidence:** The codebase uses `aria-label`, `aria-labelledby`, and `sr-only` classes, indicating awareness of text-alternative requirements. However, a full inventory of decorative vs. informative images was not performed.

**Recommendation:** Audit all `<img>`, `<svg>`, and background-image elements. Decorative images must have `alt=""` or `aria-hidden="true"`. Informative images must have descriptive alt text. The ASCII/emoji logo marks should have meaningful aria-labels.

---

#### 1.3.1 Info and Relationships (Level A)

**Status:** Pass

**Evidence:** Semantic HTML is in use. The 12-section single-page layout uses proper heading hierarchy, landmarks, and structural elements. `sr-only` classes provide supplementary structure.

**Recommendation:** None required. Verify that data tables (if any in portfolio views) use `<th scope>` correctly.

---

#### 1.3.2 Meaningful Sequence (Level A)

**Status:** Pass

**Evidence:** Reading order matches visual order. No CSS techniques (flexbox `order`, grid placement) disrupt the DOM sequence.

---

#### 1.3.3 Sensory Characteristics (Level A)

**Status:** Needs Verification

**Evidence:** Status colors (success, warning, error, info) may communicate meaning through color alone. Without inspecting each component instance, cannot confirm whether icons or text labels supplement color.

**Recommendation:** Every status indicator must pair color with at least one non-color cue: icon, text label, or pattern. Audit all instances of success/warning/error/info token usage.

---

#### 1.4.1 Use of Color (Level A)

**Status:** Needs Verification

**Evidence:** The yellow-500 brand accent is used for emphasis and interactive affordance. If any interactive elements (links, buttons) rely solely on the yellow color to distinguish them from surrounding text, this criterion fails.

**Recommendation:** Verify that all interactive elements have at least one non-color differentiator (underline, border, icon, shape change). Verify status states use icons alongside color.

---

#### 1.4.3 Contrast (Minimum) (Level AA)

**Status:** **FAIL**

This is the most significant finding. Calculated contrast ratios using the WCAG relative-luminance formula:

##### Text Contrast — Primary Surfaces

| Foreground | Background | Context | Ratio | AA Normal (4.5:1) | AA Large (3:1) |
|-----------|-----------|---------|------:|:------------------:|:---------------:|
| #1C1B19 | #FAFAF8 | Primary text on light | 16.47:1 | PASS | PASS |
| #FAFAF8 | #1C1B19 | Primary text on dark | 16.47:1 | PASS | PASS |
| #FFC73D | #1C1B19 | Brand accent on dark | 11.05:1 | PASS | PASS |
| #FFD486 | #1C1B19 | Yellow-400 on dark | 12.30:1 | PASS | PASS |
| #B0ADA6 | #1C1B19 | Secondary text on dark | 7.68:1 | PASS | PASS |
| #6B6862 | #FAFAF8 | Warm-500 on light | 5.31:1 | PASS | PASS |
| #44423E | #FAFAF8 | Dark-400 on light | 9.59:1 | PASS | PASS |
| #706D67 | #FAFAF8 | Dark-300 on light | 4.93:1 | PASS | PASS |
| #A4A097 | #1C1B19 | Warm-300 on dark | 6.60:1 | PASS | PASS |

##### Text Contrast — Elevated Dark Surfaces

| Foreground | Background | Context | Ratio | AA Normal (4.5:1) | AA Large (3:1) |
|-----------|-----------|---------|------:|:------------------:|:---------------:|
| #FAFAF8 | #2A2926 | Primary on elevated | 13.92:1 | PASS | PASS |
| #B0ADA6 | #2A2926 | Secondary on elevated | 6.49:1 | PASS | PASS |
| #FFC73D | #2A2926 | Yellow-500 on elevated | 9.34:1 | PASS | PASS |
| #87837C | #2A2926 | Tertiary on elevated | 3.86:1 | **FAIL** | PASS |
| #6B6862 | #2A2926 | Muted on elevated | 2.62:1 | **FAIL** | **FAIL** |

##### Text Contrast — FAILURES

| Foreground | Background | Context | Ratio | Required | Verdict |
|-----------|-----------|---------|------:|:--------:|:-------:|
| #87837C | #1C1B19 | Text-tertiary on dark | 4.56:1 | 4.5:1 | PASS (marginal) |
| #6B6862 | #1C1B19 | Text-muted on dark | 3.10:1 | 4.5:1 | **FAIL** |
| #87837C | #2A2926 | Tertiary on elevated | 3.86:1 | 4.5:1 | **FAIL** |
| #6B6862 | #2A2926 | Muted on elevated | 2.62:1 | 4.5:1 | **FAIL** |
| #87837C | #FAFAF8 | Warm-400 on light | 3.61:1 | 4.5:1 | **FAIL** |
| #A4A097 | #FAFAF8 | Warm-300 on light | 2.50:1 | 4.5:1 | **FAIL** |

##### Status Color Contrast

| Color | On Dark #1C1B19 | On Light #FAFAF8 | Notes |
|-------|:---------------:|:----------------:|-------|
| Success #2D8A56 | 4.00:1 **FAIL** | 4.12:1 **FAIL** | Fails normal text on both surfaces |
| Warning #D4890D | 6.05:1 PASS | 2.72:1 **FAIL** | Fails on light backgrounds |
| Error #C93B3B | 3.42:1 **FAIL** | 4.82:1 PASS | Fails normal text on dark |
| Info #3B7FC9 | 4.15:1 **FAIL** | 3.97:1 **FAIL** | Fails normal text on both surfaces |

##### Brand Accent on Light (Decorative only)

| Foreground | Background | Ratio | Notes |
|-----------|-----------|------:|-------|
| #FFC73D | #FAFAF8 | 1.49:1 | Never use for text on light backgrounds |
| #FFC73D | #F0EEE9 | 1.34:1 | Never use for text on warm light backgrounds |

These are acceptable only if yellow-500 is never used as text on light surfaces. If it is, this is a critical failure.

##### Claimed vs. Actual Ratios

| Pair | Claimed | Actual | Delta |
|------|--------:|-------:|------:|
| #1C1B19 on #FAFAF8 | 15.4:1 | 16.47:1 | +1.07 |
| #FFC73D on #1C1B19 | 9.2:1 | 11.05:1 | +1.85 |
| #6B6862 on #FAFAF8 | 5.8:1 | 5.31:1 | -0.49 |
| #B0ADA6 on #1C1B19 | 7.6:1 | 7.68:1 | +0.08 |
| #FFD486 on #1C1B19 | 11.3:1 | 12.30:1 | +1.00 |

Note: The claimed ratio for Warm-500 on Surface was 5.8:1 but actual is 5.31:1. The value still passes AA but the documentation should be corrected. All other claimed values are conservative or slightly off — none cause a pass/fail change.

---

#### 1.4.4 Resize Text (Level AA)

**Status:** Pass

**Evidence:** Typography uses `clamp()` with `rem` units for fluid scaling. The 13-level type scale has an 18px (1.125rem) base with Major Third ratio. `rem`-based sizing ensures browser zoom to 200% works correctly. `font-display: swap` prevents invisible text during load.

**Recommendation:** Verify that at 200% zoom, no content is clipped or overlaps. The `max-width: 65ch` constraint helps prevent horizontal overflow.

---

#### 1.4.5 Images of Text (Level AA)

**Status:** Pass

**Evidence:** No images of text detected in the design system. All text content is rendered as actual text.

---

#### 1.4.10 Reflow (Level AA)

**Status:** Pass

**Evidence:** Mobile-first responsive layout. Content reflows at 320px viewport width. No horizontal scrolling. Container max-width of 1280px with 24px gutters.

---

#### 1.4.11 Non-text Contrast (Level AA)

**Status:** **FAIL**

UI components and their boundaries must meet 3:1 contrast against adjacent colors.

| Element | Foreground | Background | Ratio | Required (3:1) |
|---------|-----------|-----------|------:|:---------------:|
| Border-subtle on dark | #3F3D3A | #1C1B19 | 1.59:1 | **FAIL** |
| Border-strong on dark | #55524D | #1C1B19 | 2.21:1 | **FAIL** |
| Doppelrand ring | rgba(255,255,255,0.04) → #252422 | #1C1B19 | 1.11:1 | **FAIL** |
| Doppelrand ring:hover | rgba(255,255,255,0.08) → #2E2D2B | #1C1B19 | 1.25:1 | **FAIL** |
| Border-subtle on elevated | #3F3D3A | #2A2926 | 1.34:1 | **FAIL** |
| Border-strong on elevated | #55524D | #2A2926 | 1.87:1 | **FAIL** |

All border and ring tokens fail the 3:1 non-text contrast minimum. The Doppelrand card pattern — a key design element — is essentially invisible to users with low vision.

**Note:** Decorative borders that don't convey information or indicate component boundaries are exempt. If these borders are purely aesthetic and the component is identifiable without them (e.g., through background color difference, shadow, or content grouping), this may be acceptable. However, if the border/ring is the primary visual indicator of a card, input field, or interactive boundary, this is a clear failure.

---

#### 1.4.12 Text Spacing (Level AA)

**Status:** Pass

**Evidence:** The type system uses relative units (`rem`, `em`). Line-height is 1.56 for body text (exceeds the 1.5 WCAG guideline). Max line length is 65ch. Users can override letter-spacing, word-spacing, and line-height without breaking layout.

---

#### 1.4.13 Content on Hover/Focus (Level AA)

**Status:** Needs Verification

**Evidence:** No tooltip or popover components were explicitly documented. If any hover-triggered content exists (e.g., on Doppelrand cards, info icons), it must be dismissible (Escape), hoverable (pointer can move to it), and persistent (stays until dismissed).

**Recommendation:** Audit all `:hover` and `:focus` states that reveal additional content.

---

### 2. Operable

#### 2.1.1 Keyboard (Level A)

**Status:** Needs Verification

**Evidence:** Global `focus-visible` ring styles are present. Semantic HTML (`<button>`, `<a>`, `<input>`) provides baseline keyboard access. ARIA roles are used appropriately.

**Recommendation:** Perform full keyboard walkthrough: Tab through all 12 sections, verify every interactive element is reachable and operable. Verify custom scroll-triggered animations don't trap focus.

---

#### 2.1.2 No Keyboard Trap (Level A)

**Status:** Needs Verification

**Evidence:** Single-page layout with 12 sequential sections suggests straightforward tab order. No modal dialogs were documented.

**Recommendation:** If the email capture form or any card pattern creates a focus context, verify Escape returns focus to the trigger.

---

#### 2.2.2 Pause, Stop, Hide (Level A)

**Status:** Pass

**Evidence:** All 7 animation components are scroll-triggered and fire once. No auto-playing loops. No content that auto-updates. The ScrollProgress golden line is informational and persistent (not auto-moving independent of user action — it responds to user scroll).

---

#### 2.3.1 Three Flashes or Below Threshold (Level A)

**Status:** Pass

**Evidence:** No content flashes more than 3 times per second. Animation durations range from 150ms to 900ms. No strobe or rapid-flash effects.

---

#### 2.4.1 Bypass Blocks (Level A)

**Status:** Needs Verification

**Evidence:** Single-page with 12 sections. A skip-to-content link or section-skip mechanism was not confirmed.

**Recommendation:** Add a skip-navigation link as the first focusable element. For a 12-section single page, consider a skip-to-section mechanism or landmark-based navigation.

---

#### 2.4.2 Page Titled (Level A)

**Status:** Needs Verification

**Evidence:** Being a design system, the consuming application controls `<title>`. The system should document the requirement.

---

#### 2.4.3 Focus Order (Level A)

**Status:** Pass

**Evidence:** Reading order matches visual order. No CSS `order` property or grid reordering disrupts the DOM sequence. The 12 sections flow sequentially.

---

#### 2.4.6 Headings and Labels (Level AA)

**Status:** Pass

**Evidence:** Heading hierarchy is present and semantic. `aria-labelledby` is used for labeling sections.

---

#### 2.4.7 Focus Visible (Level AA)

**Status:** Pass

**Evidence:** Global `focus-visible` ring styles are implemented. This is a system-wide default, not per-component — which is the correct approach.

---

#### 2.5.5 Target Size (Enhanced) (Level AAA)

**Status:** Pass (exceeds AA)

**Evidence:** 44x44px minimum touch targets with 8px spacing between adjacent targets. This exceeds the AA minimum of 24x24px (SC 2.5.8) and meets the AAA enhanced target of 44x44px.

---

#### 2.5.8 Target Size (Minimum) (Level AA)

**Status:** Pass

**Evidence:** Documented minimum of 44x44px. WCAG 2.2 AA requires only 24x24px. The system exceeds this.

---

### 3. Understandable

#### 3.1.1 Language of Page (Level A)

**Status:** Needs Verification

**Evidence:** The design system does not control the root `<html lang>` attribute — that's the consuming application's responsibility.

**Recommendation:** Document that consuming applications must set `<html lang="en">` (or appropriate language). If the design system provides a layout wrapper or `<html>` template, add the `lang` attribute.

---

#### 3.2.1 On Focus (Level A)

**Status:** Pass

**Evidence:** No components change context on focus. Scroll-triggered animations activate on scroll position, not focus.

---

#### 3.2.2 On Input (Level A)

**Status:** Pass

**Evidence:** The email capture form does not auto-submit. No context changes on input.

---

#### 3.3.1 Error Identification (Level A)

**Status:** **FAIL**

**Evidence:** The email capture form simulates submission with `setTimeout` and provides no real validation feedback. When a user submits invalid input, there is no accessible error message identifying what went wrong.

**Recommendation:**
- Add client-side email validation with descriptive error messages
- Associate errors with the input using `aria-describedby`
- Use `aria-invalid="true"` on the input when validation fails
- Announce errors with `aria-live="assertive"` or `role="alert"`

---

#### 3.3.2 Labels or Instructions (Level A)

**Status:** Needs Verification

**Evidence:** The email input's label/placeholder association was not confirmed.

**Recommendation:** Verify the email input has a visible `<label>` or `aria-label`. Placeholder text alone is insufficient — it disappears on input.

---

#### 3.3.3 Error Suggestion (Level AA)

**Status:** **FAIL**

**Evidence:** Since the form has no validation feedback at all (3.3.1 failure), it necessarily also fails to suggest corrections.

**Recommendation:** When email validation fails, provide a suggestion: "Please enter a valid email address (e.g., name@example.com)".

---

### 4. Robust

#### 4.1.1 Parsing (Level A)

**Status:** N/A

**Evidence:** This criterion was deprecated in WCAG 2.2. It is always considered satisfied.

---

#### 4.1.2 Name, Role, Value (Level A)

**Status:** Pass

**Evidence:** The codebase uses `aria-label`, `aria-labelledby`, `aria-live`, `role="status"`, and `sr-only` classes. Semantic HTML provides baseline name/role/value for standard elements.

**Recommendation:** Verify that all custom interactive components (if any beyond standard HTML elements) expose correct ARIA roles, states, and properties.

---

#### 4.1.3 Status Messages (Level AA)

**Status:** Pass

**Evidence:** `aria-live` regions and `role="status"` are detected in the codebase, indicating status messages are announced to assistive technology.

**Recommendation:** Verify the email form's success state uses `role="status"` or `aria-live="polite"` to announce submission confirmation.

---

## Minimum Font Size Violation

**Status:** **FAIL** (not a named WCAG SC, but relates to 1.4.4 and general readability)

**Evidence:** The design system documents a 12px minimum but components use 10px and 11px text. Text below 12px:
- Becomes illegible at standard viewing distances for many users
- Cannot reliably meet contrast requirements when anti-aliased
- Fails to scale meaningfully at 200% zoom (10px × 2 = 20px, still small)

**Recommendation:** Enforce the documented 12px minimum. Replace all 10px and 11px instances with 12px (0.75rem). If the content requires visual de-emphasis, use color weight (lighter foreground within passing contrast) rather than size reduction.

---

## Hardcoded Color Values

**Status:** Advisory

**Evidence:** `text-[#FAFAF8]` is hardcoded in 13 files. While the value itself passes contrast (16.47:1 on dark-500, 13.92:1 on elevated), hardcoded values:
- Bypass the token system, making future accessibility fixes harder
- Cannot be overridden by user stylesheets or forced-colors mode
- Risk becoming stale if the surface color changes

**Recommendation:** Replace all `text-[#FAFAF8]` with the semantic token `text-surface` or equivalent. This is a maintainability issue, not a current WCAG failure.

---

## SpendCredit Pure Black Background

**Status:** Advisory

**Evidence:** SpendCredit uses `bg-black` (#000000) instead of the warm dark palette. Contrast against pure black is higher than necessary (20.09:1 for text, 13.49:1 for yellow), which is not a failure but:
- Creates visual inconsistency with the rest of the dark UI
- Pure black on OLED screens can cause "black smear" during scrolling
- Breaks the warm, cohesive dark-mode aesthetic

**Recommendation:** Replace `bg-black` with `bg-dark-500` (#1C1B19) or the appropriate warm dark token.

---

## Reduced Motion Compliance

**Status:** Pass

**Evidence:** The system uses Framer Motion's `useReducedMotion()` hook. All 7 scroll-triggered animations fire once and respect the preference. The ScrollProgress indicator (2px golden line) is correctly identified as informational and should remain visible even with reduced motion — it tracks scroll position rather than animating autonomously.

**Recommendation:** Verify that `useReducedMotion()` is applied consistently to all 7 animation components. When reduced motion is active:
- Replace entrance animations with instant appearance (opacity: 1, no transform)
- Keep ScrollProgress bar (it's user-driven, not autonomous)
- Keep micro-interactions under 150ms (these are generally acceptable)

---

## Dark Mode Only

**Status:** Advisory (not a WCAG AA requirement)

**Evidence:** The system implements dark mode only with no light mode toggle. WCAG does not require a light mode, but:
- Some users with photosensitivity prefer light backgrounds
- `prefers-color-scheme: light` is ignored
- Windows High Contrast Mode compatibility was not tested

**Recommendation:** Not required for AA compliance. If pursued later, the warm-50 through surface token range already provides a light-mode foundation. Prioritize `forced-colors` media query support for Windows High Contrast Mode, which is an accessibility concern.
