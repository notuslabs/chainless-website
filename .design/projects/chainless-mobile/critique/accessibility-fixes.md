# Accessibility Fixes
> Phase: critique | Project: chainless-mobile | Date: 2026-04-08
> Standard: WCAG 2.2 AA

---

## Violations

| # | Issue | Severity | WCAG Criterion | Screen | Remediation |
|---|-------|----------|----------------|--------|-------------|
| 1 | Missing skip navigation link | **Critical** | SC 2.4.1 (A) | Global | Add `<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-yellow-500 focus:text-dark-500 focus:px-4 focus:py-2 focus:rounded-lg">Pular para o conteudo</a>` as first child of `<body>` or layout wrapper. Add `id="main-content"` to the `<main>` element. |
| 2 | Carousel ARIA pattern incomplete | **Major** | SC 4.1.2 (A) | [Screen 07](../design/screen-07-social-proof.md) | Add `aria-label="Depoimentos de clientes"` to scroll container. Wrap each testimonial card in `<div role="group" aria-label="Depoimento {n} de {total}">`. Keep dots as `aria-hidden="true"` (already spec'd). |
| 3 | Footer link touch targets below 44px | **Major** | SC 2.5.8 (AA) | [Screen 08](../design/screen-08-footer.md) | Increase footer link vertical padding: `py-2` (8px) on each `<a>` tag. With `text-sm` (14px) line-height (21px) + 16px padding = 37px. Still below 44px. Alternative: add `min-h-[44px] flex items-center` to each link. |
| 4 | Security MPC diagram reduced-motion treatment unspecified | **Minor** | SC 2.3.3 (AAA) | [Screen 11](../design/screen-11-security.md) | Add `@media (prefers-reduced-motion: reduce) { .mpc-diagram { animation: none; } }` to disable pulsing nodes and draw-on line animations. Show static completed diagram. |
| 5 | Text spacing override untested | **Minor** | SC 1.4.12 (AA) | Global | During build, test with bookmarklet applying: `line-height: 1.5em; letter-spacing: 0.12em; word-spacing: 0.16em; p { margin-bottom: 2em; }`. Verify no content clipping or overlap. |

---

## Summary

- **Critical:** 1 (skip navigation -- Level A requirement)
- **Major:** 2 (carousel ARIA, footer touch targets)
- **Minor:** 2 (MPC reduced-motion, text spacing testing)

The Critical issue (skip navigation) is a Level A failure that prevents full WCAG 2.2 AA conformance. It is a simple implementation fix (~5 lines of code) that should be addressed in the build phase.

---

## Cross-References

- Prioritized fixes: [prioritized-fixes.md](./prioritized-fixes.md) (item 4: skip navigation)
- Full audit: [accessibility-audit.md](./accessibility-audit.md)
- Design specs: [../design/INDEX.md](../design/INDEX.md)
