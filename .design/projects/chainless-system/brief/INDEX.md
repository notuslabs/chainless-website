# Project Brief — chainless-system

> Project: chainless-system | Brand: chainless | Created: 2026-03-24

---

## Summary

Formalize the design system from the existing Chainless landing page — extract tokens, document component patterns, codify the motion system, and reconcile brand identity specifications with code implementation.

## Type

Design system extraction & formalization

## Platforms

Web (Next.js 16)

## Audience

| Segment | Need |
|---------|------|
| **Engineering team** | Reliable tokens, documented patterns, consistent components |
| **Design team** | Clear foundations, composition rules, accessibility guidelines |

## Goals

| Category | Goal |
|----------|------|
| **Business** | Enable consistent, on-brand UI development across new pages and features |
| **Design** | Codify the premium quality of the existing landing into reusable system primitives |
| **Success metrics** | Token coverage (all hardcoded values → tokens), component documentation completeness, brand-code alignment |

## Tech Stack

- **Framework:** Next.js 16.2.1, React 19
- **Styling:** Tailwind CSS v4 (CSS-first `@theme inline`)
- **Motion:** Framer Motion 12
- **Icons:** Phosphor Icons
- **Language:** TypeScript

## Scope

| Area | Description |
|------|-------------|
| **Design tokens** | Color scales (OKLCH palettes), semantic surfaces, typography scale, spacing, shadows, border radius, animation tokens |
| **Component patterns** | Doppelrand card, Navbar, Hero, Section transitions, ProofBar, Editorial scroll video, Testimonials, Bento grids, Form states, Motion primitives |
| **Motion system** | EASE_PREMIUM, spring configs, scroll-triggered animations, canvas frame scrubbing, ping-pong video, reduced motion |
| **Brand-code alignment** | Font spec vs. implementation, color mode divergence, OKLCH vs. hex, icon variant usage |

## Constraints

- **Accessibility:** WCAG 2.2 AA
- **Approach:** Audit-first — document what exists, then refine
- **Implementation:** Tailwind v4 `@theme inline` + CSS custom properties

## Deliverables

- [x] Design system + tokens
- [ ] UI/UX screens
- [ ] Implementation specs
- [ ] Design review
- [ ] Code components
- [ ] Marketing assets

## Notes

Audit-first priority: document the existing system faithfully before proposing changes. The landing page is actively built and shipping — the system should serve it, not disrupt it.

---

## Related

- [../BRIEF.md](../BRIEF.md) — Full project brief document
- [../../branding/chainless/patterns/INDEX.md](../../branding/chainless/patterns/INDEX.md) — Design system output
- [../../branding/chainless/identity/IDENTITY.md](../../branding/chainless/identity/IDENTITY.md) — Visual identity reference
