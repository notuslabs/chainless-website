# Evolution Map

> Phase: audit | Brand: chainless | Generated: 2026-04-01

---

This is the primary deliverable. Every downstream phase (identity, strategy, guidelines, build) consumes this map as its starting constraint set.

## Reading the Map

- **PRESERVE** --- Do not change. This element has genuine equity or is foundational infrastructure. Downstream phases must work around it.
- **EVOLVE** --- Keep the intent, refine the execution. The element is directionally right but needs sharpening, formalization, or extension.
- **REPLACE** --- Remove and substitute. The element is misaligned, dead weight, or actively harmful.

Each entry includes:
- The specific element
- The action (PRESERVE / EVOLVE / REPLACE)
- Rationale tied to personas (Ricardo: HNW 40-55, Marina: crypto-native 28-38) and brand positioning
- Priority (P1 = blocks downstream work, P2 = significant impact, P3 = quality improvement)

---

## Identity Foundation

### Name: "Chainless"
**PRESERVE** | Priority: --

The name is the brand's most valuable asset. It works in Portuguese and English, encodes the sovereignty thesis, and has no competitor confusion. Non-negotiable.

### Logo: Parallelogram Chain-Link Mark + Wordmark
**PRESERVE** | Priority: --

The mark is architecturally distinctive and strategically aligned. Its monochrome versatility supports the premium restraint ethos. No changes needed.

### Tagline: "Torne-se Chainless"
**PRESERVE** | Priority: --

The imperative-as-transformation line is the best single piece of brand copy. Its dual use as headline and CTA reinforces recognition. Protect from dilution --- don't add qualifiers, don't append feature descriptions.

---

## Color System

### Yellow-500 (#FFC73D) Brand Gold
**PRESERVE** | Priority: --

The specific warmth and desaturation of this gold is calibrated. Ricardo reads it as "discreet wealth." Marina reads it as "not a crypto bro." Don't shift cooler or more saturated.

### Dark-500 (#1C1B19) Espresso Base
**PRESERVE** | Priority: --

The warm-not-cool black is the canvas everything else is painted on. The ~84deg hue warmth is load-bearing. Changing this changes everything.

### Warm Neutral Scale (warm-50 through warm-950)
**PRESERVE** | Priority: --

The warm undertone mandate (no cool grays, no blue-tinted neutrals) is non-negotiable infrastructure. Individual values may shift by a few points during guidelines phase, but the warmth direction is fixed.

### 60-30-10 Composition Rule
**PRESERVE** | Priority: --

The ratio works. Warm neutrals dominate, espresso anchors, gold accents. This prevents the gold from becoming overwhelming and keeps the interface feeling restrained.

### Semantic Colors (success, warning, error, info)
**PRESERVE** | Priority: --

Already a11y-fixed for 4.5:1 on dark-500. Functional, correct, done.

### Light-Mode Surface Tokens
**EVOLVE** | Priority: P3

Tokens are defined (#FAFAF8, #F0EEE9, #F4F3F0) but untested. When the product UI or documentation needs light backgrounds, these will need validation against the full component set. Not urgent --- the landing page is correctly dark-only --- but don't let them drift further from reality.

*Persona connection:* Ricardo will encounter light-mode in documentation, onboarding, and support contexts. Marina will expect dark-mode everywhere.

---

## Typography

### Body Sans: Geist -> Resolve
**EVOLVE** | Priority: P1

Geist is functional but arrived through drift, not strategy. It doesn't encode warmth or premium distinctiveness. The original spec (Satoshi) has more personality and warmth. Options:

1. **Adopt Satoshi** (original spec): warmer, more distinctive, still highly legible. Better fit for "Warm Authority."
2. **Adopt Geist deliberately**: document the rationale, commit to it, and align the spec. At least resolve the contradiction.
3. **Evaluate alternatives**: General Sans, Plus Jakarta Sans, or another humanist sans with warmth.

The decision must happen before guidelines phase. Every downstream component inherits this choice.

*Persona connection:* Ricardo won't consciously identify the font, but he'll feel the difference between a cold geometric sans and a warm humanist sans. Marina won't care as long as it's legible in data-dense contexts.

### Display Serif: Zodiak -> Formalize or Replace
**EVOLVE** | Priority: P1

Zodiak's ink-trap details and slightly unconventional letterforms support the "rebel" half of the 60/40 split. It's a more interesting choice than Fraunces at display sizes. But it was arrived at experimentally.

Decision required:
1. **Adopt Zodiak**: document the strategic rationale ("ink traps as metaphor for precision engineering"), formalize weight usage (Light for hero, Regular for section headings, Bold for emphasis), and commit.
2. **Revert to Fraunces** (original spec): safer, more established, Google Fonts hosted. Less distinctive but more predictable.
3. **Evaluate Zodiak vs. Fraunces** side-by-side at all use cases (hero, section headings, pull quotes, editorial couplets) and decide once.

*Persona connection:* The serif is the primary Magician voice. Ricardo encounters it in the hero, philosophy, and CTA --- the transformation moments. It needs to feel like the voice of an institution that could manage R$2M, not a trendy startup.

### Unused Font Families (Lora, Playfair, Cormorant, Source Serif, Barlow, Oswald, Fraunces-as-import)
**REPLACE (remove)** | Priority: P1

Remove all 7 unused font imports from layout.tsx. This is:
- ~800KB+ of wasted bandwidth
- A source of confusion for any developer touching the codebase
- A signal of unresolved decisions that blocks downstream work

This is the single easiest, highest-impact change available. Do it before anything else.

*Persona connection:* Ricardo and Marina both experience this as slower page load. Ricardo on his iPhone during his Faria Lima commute. Marina on her home setup with 47 browser tabs open.

### Type Scale (fluid clamp values)
**PRESERVE** | Priority: --

The fluid type scale with clamp() is well-calibrated. The hero heading (clamp 3.5rem-6.5rem), section headings (clamp 2rem-3.25rem), and micro sizes (overline 9px, caption 13px, small 15px) create appropriate hierarchy.

### Dual-Voice Type Strategy (serif = Magician, sans = Ruler)
**EVOLVE** | Priority: P2

The principle is correct but inconsistently applied. Formalize the rules:
- **Serif:** Hero headlines, section headings for emotional/transformational content, editorial couplets, pull quotes
- **Sans:** Navigation, CTAs, body text, data values, technical content, footer
- **Mono:** Addresses, contract hashes, numerical data (currently undocumented, IBM Plex Mono not imported)

Document this mapping explicitly in guidelines phase.

---

## Messaging & Voice

### Sovereignty-First Positioning
**PRESERVE** | Priority: --

The messaging hierarchy (sovereignty > control > growth > features) is correct and well-executed. Every section leads with what you own, not what the platform does.

### Hero Trust Stats ("150+ ativos", "Ate 60% APY")
**EVOLVE** | Priority: P2

These are feature-first metrics that contradict sovereignty-first positioning. Evolve to sovereignty-proof framing:
- Instead of "150+ ativos digitais" -> something like "100% suas chaves" or "Zero custodia"
- Instead of "Ate 60% APY em DeFi" -> "Yield direto na sua carteira" or a sovereignty-framed stat

*Persona connection:* Ricardo doesn't compare platforms by token count. He compares by "can they freeze my assets?" Marina cares about APY but wants to see it in the yield section, not the hero.

### Trust Triptych ("Sem custodia / Sem lock-up / Sem intermediarios")
**PRESERVE** | Priority: --

The three-negation structure is a verbal trademark. Preserve the pattern even if individual items evolve. The rhythm (Sem X / Sem Y / Sem Z) is as important as the content.

### Editorial Couplet ("construido para eles" / "construida para voce")
**PRESERVE** | Priority: --

The brand thesis in two lines. The defiant warmth is perfectly calibrated --- it points at the system without aggression.

### Hero CTA: "Comecar agora" vs. "Torne-se Chainless"
**EVOLVE** | Priority: P2

The hero CTA ("Comecar agora") is generic. The closing CTA ("Torne-se Chainless") is brand-specific. Swap them: lead with the brand action in the hero, use the utility action in secondary position.

### Footer Tagline: "Patrimonio digital soberano"
**PRESERVE** | Priority: --

Clean, terminal, definitive. Works as a verbal logo.

### Category Language
**EVOLVE** | Priority: P2

The evolution from "crypto wallet with Pix" to "sovereign digital wealth platform" is underway but not complete. Ensure all copy avoids:
- "Carteira" (wallet) --- implies commodity utility
- "Exchange" --- implies custodial trading
- "Plataforma crypto" --- implies commodity exchange

Prefer: "plataforma de patrimonio digital", "patrimonio soberano", "autocustodia."

---

## Visual System

### Doppelrand Card System
**EVOLVE** | Priority: P2

The system is Chainless's most distinctive visual asset. Currently it's implemented but not fully formalized:
- Tokens exist in globals.css (radius, gap, ring colors, bg) --- good
- DoppelrandCard component exists with variants (default, light) --- good
- Gold hallmark (gradient hairline top edge) --- good
- Missing: documented rules for when to use Doppelrand vs. plain containers, maximum nesting depth, responsive behavior documentation

Formalize in guidelines phase. Extend to product UI as the primary card primitive.

*Persona connection:* Both Ricardo and Marina experience this as "Chainless feels different from every other crypto platform." The double-shell construction is subliminal luxury.

### Atmospheric Glows
**PRESERVE** | Priority: --

The low-opacity (0.02-0.05) warm radial gradients create depth without distraction. The tokenized sizing (glow-lg/md/sm, glow-blur-lg/md/sm) allows systematic application. Preserve.

### Noise Overlay
**PRESERVE** | Priority: --

0.022 opacity fractal noise. Adds analog materiality. Preserve at this exact opacity --- higher would be gritty, lower would be pointless.

### Cinematic Video Backgrounds
**EVOLVE** | Priority: P3

The hero video (0.85 opacity, desaturated, sepia) and social-proof video (0.12, blurred) are effective but performance-heavy. Evaluate:
- WebM/AV1 encoding for smaller payloads
- Lazy loading for below-fold videos
- Poster frame fallbacks for slow connections

*Persona connection:* Ricardo on mobile cellular data. The hero video is above-fold and must load fast.

### Editorial Frame Sequence (121 webp frames)
**EVOLVE** | Priority: P3

The scroll-driven canvas scrubber is the most memorable interaction on the page. However, 121 webp frames at any reasonable quality = significant download. Evaluate:
- Can this be reduced to 60 frames without visible quality loss?
- Can frames be progressively loaded?
- Is there a video-based alternative that achieves the same effect?

The interaction pattern is worth preserving. The implementation may need optimization.

### Concentric SVG Circles (CTA section)
**PRESERVE** | Priority: --

Architectural gravitas. Animated pathLength on scroll. Low-cost, high-impact decorative element.

### Gold Hairline Accents
**PRESERVE** | Priority: --

The gradient-from-yellow-500/25-to-transparent hairlines are a consistent micro-detail across the entire page. They're the visual equivalent of the trust triptych's "Sem" prefix --- a small repeated element that builds recognition.

---

## Motion

### Blur-Fade-Up Entrance (FadeUp)
**PRESERVE** | Priority: --

The signature entrance. Consistent, premium, not overdone.

### EASE_PREMIUM Timing
**PRESERVE** | Priority: --

cubic-bezier(0.32, 0.72, 0, 1) is well-tuned. Fast start, long settle. Feels considered.

### MagneticButton
**PRESERVE** | Priority: --

Spring physics on CTAs. Appropriate for the primary action.

### TextReveal (Hero)
**PRESERVE** | Priority: --

Character-level reveal for the hero headline. Appropriate for the most important text on the page.

### Stagger Timing (0.12s intervals)
**PRESERVE** | Priority: --

The stagger interval feels natural. Not too fast (mechanical), not too slow (sluggish).

---

## Component Patterns

### Eyebrow Pill Pattern
**PRESERVE** | Priority: --

Remarkably consistent across all sections. The pattern (rounded-full, border warm-700/25, bg warm-800/30, text-overline uppercase tracking-[0.25em], text yellow-500/90, backdrop-blur-sm) is a de facto component standard.

### Primary Button (rounded-full, yellow-500, button-in-button icon)
**PRESERVE** | Priority: --

Distinctive and consistent. The button-in-button trailing icon (ArrowUpRight in dark circle) is a micro-signature.

### Section Layout Pattern
**PRESERVE** | Priority: --

The header pattern (eyebrow + heading left, description right) with mt-20 content offset creates rhythm across the page. Preserve this grid.

---

## Architecture

### Dark-Mode-Only Landing
**PRESERVE** | Priority: --

The landing page should remain dark. The warm espresso palette is the brand's strongest visual signature. Don't introduce light-mode on the landing page.

### Next.js + Tailwind + Framer Motion Stack
**PRESERVE** | Priority: --

The technical stack is sound. Tailwind's utility classes enable the precise opacity/color control the brand requires. Framer Motion provides the scroll-driven and spring physics capabilities. No reason to change.

### Performance
**EVOLVE** | Priority: P2

The font bloat (9 families) and media weight (video + 121 frames) are performance concerns. Address in this order:
1. Remove unused fonts (P1, immediate)
2. Optimize video encoding (P3, during build)
3. Evaluate frame sequence optimization (P3, during build)

---

## Priority Summary

| Priority | Action | Element |
|----------|--------|---------|
| P1 | REPLACE | Remove 7 unused font imports from layout.tsx |
| P1 | EVOLVE | Resolve body sans (Geist vs. Satoshi vs. alternative) |
| P1 | EVOLVE | Formalize display serif (adopt Zodiak deliberately or revert to Fraunces) |
| P2 | EVOLVE | Hero trust stats: sovereignty-first framing |
| P2 | EVOLVE | Hero CTA: swap "Comecar agora" for "Torne-se Chainless" |
| P2 | EVOLVE | Category language: purge wallet/exchange/crypto framing |
| P2 | EVOLVE | Dual-voice type mapping: document serif vs. sans rules |
| P2 | EVOLVE | Doppelrand card system: formalize usage rules |
| P2 | EVOLVE | Performance: font weight reduction |
| P3 | EVOLVE | Light-mode surface tokens: validate when needed |
| P3 | EVOLVE | Video/media optimization |
| P3 | EVOLVE | Frame sequence optimization |

---

## Related

- [Brand Inventory](./01-inventory.md)
- [Coherence Assessment](./02-coherence.md)
- [Market Fit Analysis](./03-market-fit.md)
- [Equity Analysis](./04-equity.md)
