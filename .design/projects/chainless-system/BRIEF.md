# Project Brief

## Project
- **Name:** chainless-system
- **Type:** Design system extraction & formalization
- **Date:** 2026-03-24
- **Brand:** chainless

## What We're Building
- **Description:** Formalize the design system from the existing Chainless landing page — extract tokens, document component patterns, codify the motion system, and reconcile brand identity specifications with code implementation. Audit-first approach: document what exists, then refine.
- **Platforms:** Web (Next.js 16)
- **Key screens/flows:** N/A — this is a system project, not a screen project. Scope covers the design foundations, component library, and token architecture used across the landing page.

## Audience
- **Primary:** Engineering team building on the Chainless platform — needs reliable tokens, documented patterns, consistent components
- **Secondary:** Design team extending the brand — needs clear foundations, composition rules, accessibility guidelines

## Goals
- **Business goal:** Enable consistent, on-brand UI development across new pages and features without re-inventing patterns
- **Design goal:** Codify the premium quality of the existing landing into reusable, documented system primitives
- **Success metrics:** Token coverage (all hardcoded values → tokens), component documentation completeness, brand-code alignment score (identity spec vs implementation)

## Constraints
- **Platform:** Web — Next.js 16 App Router
- **Tech stack:** Next.js 16.2.1, React 19, Tailwind CSS v4 (CSS-first), Framer Motion 12, Phosphor Icons, TypeScript
- **Timeline:** —
- **Accessibility:** WCAG 2.2 AA (default)

## Scope
- **Design scope:** full
- **Target screens:** All (system-level, not screen-level)
- **Codebase type:** existing
- **Implementation target:** existing (Tailwind v4 @theme inline + CSS custom properties)

## Deliverables
- [x] Design system + tokens
- [ ] UI/UX screens
- [ ] Implementation specs
- [ ] Design review
- [ ] Code components
- [ ] Marketing assets

## System Scope (project-specific)

### Design Tokens
- Color scales (yellow, warm, dark) — OKLCH palettes from identity spec
- Semantic surface tokens (surface, surface-warm, surface-muted, surface-dark, surface-dark-elevated)
- Semantic colors (success, warning, error, info)
- Typography scale (Satoshi/Sohne, Fraunces, IBM Plex Mono) — 18px base, Major Third 1.25 ratio
- Spacing system (4px grid, 28px body line-height anchor)
- Shadow system (diffuse-warm, diffuse-dark, ambient-warm, ambient-dark)
- Border radius system (including 2.25rem Doppelrand outer)
- Animation tokens (EASE_PREMIUM, SPRING_SNAPPY, SPRING_SMOOTH)

### Component Patterns
- Doppelrand card (outer shell + inner core double-border luxury pattern)
- Navbar (floating glass-pill, scroll-aware)
- Hero (cinematic layering: video + mesh + vignettes)
- Section transitions (SectionGlow, SectionFade, SectionRule)
- ProofBar / metrics strip
- Editorial scroll-driven video (canvas frame scrubber)
- Testimonial cards with ping-pong video
- Bento grid layouts (7/5 + 5/7 asymmetric)
- Form states (idle/loading/success/error)
- Motion primitives (MagneticButton, FadeUp, StaggerContainer, TextReveal, ScrollProgress, ParallaxSection)

### Motion System
- EASE_PREMIUM cubic-bezier [0.32, 0.72, 0, 1]
- Spring configs (SPRING_SNAPPY, SPRING_SMOOTH)
- Scroll-triggered animations (viewport: { once: true })
- Canvas frame scrubbing (lerp interpolation)
- Ping-pong video playback (rAF reverse)
- Reduced motion support (useReducedMotion)

### Brand-Code Alignment
- Font: Identity spec (Sohne/Klim) vs implementation (Satoshi/FontShare) — licensing gap
- Color mode: Identity spec (light-mode default) vs implementation (all dark) — strategic divergence
- Color values: Confirm OKLCH palette stops match implementation hex values
- Typography scale: Verify 18px base / Major Third ratio in both spec and code
- Icon system: Phosphor Icons integration (weight, size grid, color inheritance)

## Notes
Audit-first priority: document the existing system faithfully before proposing changes. The landing page is actively built and shipping — the system should serve it, not disrupt it.
