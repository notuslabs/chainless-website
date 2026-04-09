# Accessibility Patterns
> Phase: research | Project: chainless-blog | Generated: 2026-04-08

---

## Long-Form Article Accessibility

### Heading Hierarchy (WCAG 1.3.1, 2.4.6)

Article pages must follow strict heading hierarchy without skipping levels:

```
<h1> Article title (one per page)
  <h2> Section heading
    <h3> Sub-section heading
      <h4> Detail heading (rare in blog content)
  <h2> Next section heading
```

- **Never skip levels** — no H1 -> H3 without an H2 between them
- MDX content should only use H2-H4. The H1 is rendered by `ArticleHero`, not within the MDX body.
- Headings must be "informative and clearly describe the topic that follows" (WCAG 2.4.6)
- Screen readers use heading hierarchy to build a page outline — broken hierarchy breaks this navigation

### Landmark Regions (WCAG 1.3.1, 2.4.1)

Article page landmark structure:

```html
<header>  <!-- Navbar -->
<main>
  <article>
    <header>  <!-- ArticleHero: title, meta, pillar tag -->
    <aside>   <!-- TableOfContents sidebar -->
    <section> <!-- Article body prose -->
    <section> <!-- "Como a Chainless resolve isso" CTA -->
    <section> <!-- FAQ accordion -->
    <section> <!-- Related posts -->
  </article>
</main>
<footer>  <!-- Global footer -->
```

- Use `<article>` as the primary content container — it tells assistive technology "this is a self-contained composition"
- TOC belongs in `<aside>` — it's supplementary navigation related to the main content
- Each major section should be a `<section>` with an `aria-labelledby` pointing to its heading

### Skip Links (WCAG 2.4.1)

Add a skip link as the first focusable element on the page:

```html
<a href="#article-content" class="sr-only focus:not-sr-only ...">
  Pular para o conteudo
</a>
```

This lets keyboard and screen reader users bypass the navbar and TOC to reach article content directly. Translating to PT-BR is important for the target audience.

---

## Table of Contents Accessibility

### Keyboard Navigation

The TOC sidebar should be navigable via keyboard:

- **Tab** moves focus to the TOC nav, then to each link sequentially
- **Enter/Space** activates the focused TOC link (scrolls to heading)
- Wrap in `<nav aria-label="Sumario do artigo">` to identify it as a navigation landmark
- Active state must be communicated to screen readers via `aria-current="true"` on the active link

### Screen Reader Behavior

- TOC links should have descriptive text matching the heading text exactly
- The `<nav>` landmark with `aria-label` lets screen reader users find it via landmark navigation (JAWS: Insert+F5, NVDA: D key)
- Do NOT use `aria-live` on TOC active state changes — it would interrupt reading with every scroll

### Mobile Collapsible TOC

On mobile, the TOC collapses into a disclosure widget:

```html
<details>
  <summary>Sumario</summary>
  <nav aria-label="Sumario do artigo">
    <!-- TOC links -->
  </nav>
</details>
```

The native `<details>/<summary>` pattern is accessible by default — no ARIA required. Screen readers announce it as "Sumario, collapsed" or "Sumario, expanded."

---

## FAQ Accordion Accessibility (WCAG 4.1.2)

Following the W3C WAI ARIA Authoring Practices Guide (APG) accordion pattern:

### Required ARIA Attributes

```html
<div role="heading" aria-level="3">
  <button
    aria-expanded="false"
    aria-controls="faq-panel-1"
    id="faq-header-1"
  >
    O que e autocustodia cripto?
  </button>
</div>
<div
  id="faq-panel-1"
  role="region"
  aria-labelledby="faq-header-1"
  hidden
>
  <p>Answer content...</p>
</div>
```

### Keyboard Interaction

| Key | Behavior |
|-----|----------|
| Enter / Space | Toggle the focused accordion panel |
| Tab | Move to next focusable element |
| Shift+Tab | Move to previous focusable element |

Advanced (optional): Arrow Up/Down to move between accordion headers, Home/End to jump to first/last header.

### Implementation Notes

- Use real `<button>` elements for triggers — never `<div>` or `<span>` with click handlers
- Mark decorative icons (chevrons) as `aria-hidden="true"`
- Use the `hidden` attribute on collapsed panels to remove them from the accessibility tree
- Visible focus indicator is a WCAG 2.2 requirement (2.4.13 Focus Appearance) — do not override `:focus-visible`

Source: [W3C WAI APG - Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

---

## Dark Theme Readability (WCAG 1.4.3, 1.4.6)

### Contrast Requirements

| Element | Minimum Ratio (AA) | Chainless Target |
|---------|-------------------|-----------------|
| Body text (18px) | 4.5:1 | ~7:1 (rgba(255,248,240,0.82) on #1C1B19) |
| Large text (>=24px bold or >=18.66px bold) | 3:1 | ~8:1 |
| UI components (borders, icons) | 3:1 | Check yellow #FFC73D on #1C1B19 = ~8.5:1 |
| Link text | 4.5:1 + distinguishable from body | Yellow #FFC73D provides color distinction |

### Font Sizing

- 18px body text exceeds the "large text" threshold only when bold. Regular weight 18px still requires 4.5:1 contrast.
- Never go below 16px for any readable content on dark backgrounds — dark themes amplify the readability penalty of small text
- IBM Plex Mono at code block sizes (14-16px) must maintain 4.5:1 contrast

### Warm Undertone Validation

Chainless uses warm off-whites (rgba(255, 248, 240, ...)) instead of pure white. Verify that at the chosen alpha values (0.82 for body, 0.95 for headings), contrast ratios still pass AA on #1C1B19.

Calculated: rgba(255,248,240,0.82) composited on #1C1B19 yields approximately #D8D1C8, which against #1C1B19 gives ~8.2:1 ratio. This passes AAA.

---

## Reduced Motion (WCAG 2.3.3)

### Framer Motion Integration

The codebase uses Framer Motion. Use `MotionConfig` with `reducedMotion="user"` at the layout level:

```tsx
// app/layout.tsx
import { MotionConfig } from "framer-motion";

export default function Layout({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
```

When `reducedMotion="user"` is set:
- Transform and layout animations (x, y, scale, rotate) are **disabled** automatically
- Opacity and color transitions are **preserved** (these don't cause vestibular issues)
- The existing FadeUp animation (y: 40->0, blur: 10->0) would strip the y and blur, keeping only the opacity fade

This is the correct behavior — content still appears gracefully via opacity, but motion-sensitive users don't experience the spatial movement.

### useReducedMotion Hook

For bespoke cases (e.g., the ScrollProgress bar, reading time animations):

```tsx
import { useReducedMotion } from "framer-motion";

function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null; // Hide progress bar entirely
  // ... normal implementation
}
```

Source: [Motion.dev - React Accessibility](https://motion.dev/docs/react-accessibility), [Framer - useReducedMotion](https://www.framer.com/motion/use-reduced-motion/)

---

## Focus Management for Listing Page Filters

When a user activates a pillar filter tab:

- Do NOT move focus to the first result — the user may want to browse other filters
- Keep focus on the active filter tab
- Use `role="tablist"` / `role="tab"` / `role="tabpanel"` pattern for the filter bar
- Announce the filter result to screen readers: `aria-live="polite"` region with "Mostrando N artigos sobre Soberania"
- Arrow keys should move between tabs, Enter/Space activates

```html
<div role="tablist" aria-label="Filtrar por pilar">
  <button role="tab" aria-selected="true" aria-controls="panel-all">Todos</button>
  <button role="tab" aria-selected="false" aria-controls="panel-sovereignty">Soberania</button>
  ...
</div>
<div role="tabpanel" id="panel-all" aria-labelledby="tab-all">
  <!-- Article grid -->
</div>
```
