# Accessibility Patterns: Fee Schedule
> Phase: research | Project: chainless-system | Generated: 2026-04-07
---

## 1. Table Accessibility (WCAG 2.1 AA)

### Required Elements

**Caption:** Every data table must have a `<caption>` element describing its purpose. Source: W3C WAI Tables Tutorial.
```html
<caption>Taxas cobradas pela Chainless</caption>
```
The caption allows screen reader users to understand the table's purpose before navigating its cells.

**Header cells with scope:** All `<th>` elements must include a `scope` attribute. Source: WebAIM Creating Accessible Tables.
```html
<th scope="col">Servico</th>
<th scope="col">Taxa</th>
```
This explicitly associates header cells with their data columns, removing ambiguity for assistive technologies.

**Thead/tbody separation:** Semantic grouping of header and body rows.

### Screen Reader Behavior
When properly marked up, screen readers navigate data tables cell-by-cell, announcing column headers as context. For example, NVDA/JAWS would announce: "Servico: Deposito PIX. Taxa: Sem taxa." Source: MDN HTML Table Accessibility.

### Keep Tables Simple
A simple table (one header row, no merged cells, no nested tables) provides the best screen reader experience. Chainless's fee schedule is inherently simple — two columns, no merges, no nesting. Source: Yale University Web Accessibility.

## 2. Content Structure

### Heading Hierarchy
The page must maintain a logical heading hierarchy:
```
h1: Taxas (page title)
  h2: Taxas da plataforma (or similar category heading)
    table with fees
  h2: Taxa de gas (gas fee section)
    paragraph explanation
```

Screen readers use heading navigation (H key in NVDA/JAWS) to jump between sections. Skipping heading levels (e.g., h1 to h3) creates confusion. Source: WCAG 1.3.1 Info and Relationships.

### Landmark Regions
The content component already uses `<main>` as the wrapping element (established in transparency-content.tsx). This provides a landmark for screen reader navigation.

## 3. "Free" Item Accessibility

### Do Not Rely on Color Alone
If "Sem taxa" items are visually differentiated (e.g., green text, a badge), the text "Sem taxa" itself must convey the meaning — color cannot be the sole indicator. Source: WCAG 1.4.1 Use of Color.

Chainless's approach (displaying the text "Sem taxa") inherently satisfies this — the text IS the information, not a color or icon.

### Screen Reader Announcement
"Sem taxa" is clear, unambiguous text. No `aria-label` override needed. Avoid aria-label on table cells unless the visible text is insufficient.

## 4. Motion Accessibility

### Reduced Motion
The existing FadeUp component uses Framer Motion's `whileInView` animation. Users with `prefers-reduced-motion: reduce` should see instant content without animation.

Current implementation does NOT check for reduced motion preference in FadeUp. This should be addressed project-wide, not just for this page. The existing `@media (prefers-reduced-motion: reduce)` rule in globals.css only covers shard-pulse animations.

**Recommendation:** Add a `useReducedMotion()` hook check to FadeUp or set Framer Motion's global `MotionConfig reducedMotion="user"`.

## 5. Color Contrast

### Light Background Context
On `bg-surface` (#FAFAF8):
- `text-text-primary-light` (#1C1B19): contrast ratio ~18:1 — passes AAA.
- `text-text-secondary-light` (#6B6862): contrast ratio ~4.7:1 — passes AA for body text.
- `warm-400` (#87837C) for decorative elements: ~4.1:1 — passes AA for large text only. Avoid using for small body text.

Fee values (especially monetary amounts) should use `text-text-primary-light` for maximum contrast, not secondary color.

## 6. Language Attribute

The page is in Brazilian Portuguese. The existing `<html lang="pt-BR">` (assumed from layout.tsx) ensures screen readers use Portuguese pronunciation rules. Verify this is set.

## 7. Link Accessibility

If the gas fee section links to an external resource or the in-app transaction details screen, links must:
- Have descriptive text (not "clique aqui").
- Be visually distinguishable (underlined or with sufficient contrast).
- Include `target="_blank"` with `rel="noopener noreferrer"` if opening externally.

## 8. Testing Checklist

- [ ] Table is navigable with NVDA/JAWS — headers announced per cell.
- [ ] Heading hierarchy is logical (no skipped levels).
- [ ] All text passes 4.5:1 contrast on bg-surface.
- [ ] Page is usable with keyboard only (tab order through interactive elements).
- [ ] prefers-reduced-motion is respected (FadeUp does not animate).
- [ ] Page has a `<main>` landmark.
- [ ] `<html lang="pt-BR">` is set.
