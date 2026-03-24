# Design Principles

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

These five principles govern every design decision in the Chainless system. When two options seem equally valid, these principles break the tie.

---

## 1. Warm Authority

> Premium without coldness. Confident without arrogance.

Every surface, every shadow, every neutral carries warm undertones. Blue-gray is institutional finance. Cool black is trading terminal. Chainless is warm amber — the color of gold, of Brazilian sunlight, of a platform built by people who care about craft.

**In practice:** Warm-tinted shadows (`rgba(28,27,25,...)` not `rgba(0,0,0,...)`). Amber-hue neutrals (~84deg OKLCH). `#1C1B19` not `#000000`. `#FAFAF8` not `#FFFFFF`.

---

## 2. Restraint as Luxury

> The 10% accent rule. Whitespace is not empty — it's breathing room.

Brand yellow appears at 10% of any composition. The remaining 90% is warm neutrals and dark surfaces. Premium brands earn attention through what they leave out, not what they add. Every element on screen must justify its presence.

**In practice:** Yellow on CTAs, key data, active states — never as a section background. Generous padding (96-128px section spacing). `max-w-prose` for body text. If a section doesn't need an element, remove it.

---

## 3. Reveal, Don't Announce

> The Magician's entrance — elements emerge from depth, not slam into view.

Motion serves comprehension and delight. The blur-fade-up signature creates a "materializing" feel that maps to the Magician archetype — transformation made visible. Animations trigger once on scroll entry and stay. Springs for interaction, easing for presentation.

**In practice:** `FadeUp` with `EASE_PREMIUM` easing, not bounce or elastic. 0.9s duration (enough to register, not enough to wait). `StaggerContainer` at 0.12s intervals. No auto-playing loops, no attention-grabbing pulses.

---

## 4. Architecture is the Brand

> Self-custody is not a feature checkbox — it's the structural truth that makes everything else possible.

The design system mirrors the product philosophy: transparent, user-sovereign, architecturally honest. Show the structure. Let the Doppelrand card's double border reveal its construction. Let data values appear in monospace — the Architect showing their work. No decorative dishonesty.

**In practice:** IBM Plex Mono for data values. Visible spacing structure. The Doppelrand outer shell is not hidden — it's a design choice you can see. Semantic HTML. Accessibility built in, not bolted on.

---

## 5. Dual Voice, One System

> The Magician writes the headlines. The Ruler builds the interface.

Fraunces (serif) appears at brand moments — hero headlines, pull quotes, the "Torne-se Chainless." invitation. Satoshi/Sohne (sans) governs everything else — navigation, buttons, body text, form labels. The 70/30 archetype ratio manifests at the typographic level. Both fonts coexist because the brand contains both energies.

**In practice:** If the context is aspirational (homepage hero, campaign), Fraunces leads. If the context is functional (dashboard, form, nav), sans-serif governs. If the context is data (yields, portfolio, addresses), monospace speaks. Never mix fonts within a single element.
