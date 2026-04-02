# Brand Sync Report
> Brand: chainless | Project: landing/ | Generated: 2026-04-01

---

## Tokens

| Token | Brand Value | Project Value | Status |
|-------|------------|---------------|--------|
| `font-family-primary` | Satoshi | **Geist** (`--font-geist`) | **Changed** |
| `font-family-accent` | Fraunces | **Zodiak** (local woff2) | **Changed** |
| `font-family-mono` | IBM Plex Mono | *(not imported)* | **Removed** |
| `doppelrand-outer` | 36px (`rounded-[2.25rem]`) | **18px** (`rounded-[1.125rem]`) | **Changed** |
| `doppelrand-inner` | 30px | **~13.5px** (`calc(1.125rem-0.375rem)`) | **Changed** |
| `doppelrand-ring-color` | `rgba(255,255,255,0.04)` | `rgba(255,255,255,0.05)` | **Changed** |
| `doppelrand-ring-hover` | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.07)` | **Changed** |
| `doppelrand-bg` | `rgba(255,255,255,0.02)` | `rgba(255,255,255,0.03)` | **Changed** |
| `doppelrand-gradient` | 3-stop, 145deg | **2-stop, 160deg** | **Changed** |
| `container-content` | 1280px (`max-w-7xl`) | **1200px** (`--container-content`) | **Changed** |
| `--font-serif` CSS var | Fraunces stack | **Zodiak** (`var(--font-zodiak)`) | **Changed** |
| `--font-sans` CSS var | Satoshi stack | **Geist** (`var(--font-geist)`) | **Changed** |
| `color-yellow-*` | as spec'd | as spec'd | Aligned |
| `color-warm-*` | as spec'd | as spec'd | Aligned |
| `color-dark-*` | as spec'd | as spec'd | Aligned |
| `color-semantic` | as spec'd | as spec'd | Aligned |
| `color-surface` | as spec'd | as spec'd | Aligned |
| `color-text-*` | as spec'd | as spec'd | Aligned |
| `ease-premium` | `cubic-bezier(0.32,0.72,0,1)` | same | Aligned |
| `shadow-diffuse-warm` | as spec'd | as spec'd | Aligned |
| `shadow-ambient-warm` | as spec'd | as spec'd | Aligned |
| `shadow-diffuse-dark` | as spec'd | as spec'd | Aligned |
| `shadow-ambient-dark` | as spec'd | as spec'd | Aligned |
| `inner-highlight-dark` | as spec'd | as spec'd | Aligned |
| `noise-opacity` | 0.022 | 0.022 | Aligned |
| `glow-lg/md/sm` | as spec'd | as spec'd | Aligned |
| `text-overline/caption/small` | as spec'd | as spec'd | Aligned |
| `text-section-heading` | *(not tokenized)* | `clamp(2rem,1.5rem+2vw,3.25rem)` | **Added** |
| `text-hero-heading` | *(not tokenized)* | `clamp(3.5rem,2.5rem+4vw,6.5rem)` | **Added** |
| Unused font imports | — | Lora, Playfair, Cormorant, Source Serif, Barlow, Oswald, Fraunces (7 families) | **Added (dead weight)** |

**Summary:** 11 changed · 3 added · 1 removed (IBM Plex Mono)

---

## Voice & Tone

### Divergences

- **Sovereignty-first hierarchy** — aligned
  - Brand: "Lead with sovereignty, not features"
  - Project: Hero says "Torne-se Chainless" + "Cresça seu patrimônio com total controle" — sovereignty leads
  - Evidence: `hero.tsx:63`, `hero.tsx:77`

- **Hero trust stats** — drifted (feature-first)
  - Brand: Sovereignty-proof framing | Project: "150+ ativos digitais" + "Até 60% APY em DeFi"
  - Direction: Feature-first metrics contradict sovereignty positioning
  - Evidence: `hero.tsx:117-124`

- **Hero CTA** — drifted (generic)
  - Brand: "Torne-se Chainless" as primary CTA | Project: "Comecar agora" in hero, "Torne-se Chainless" in CTA section
  - Direction: The brand's strongest action is buried in a later section
  - Evidence: `hero.tsx:89` vs `cta-section.tsx:107`

- **Editorial couplet** — aligned (strong)
  - Brand: Defiant warmth | Project: "O sistema financeiro foi construído para eles / A Chainless foi construída para você"
  - Evidence: `editorial-break.tsx:22-40`

- **Trust triptych** — aligned
  - Brand: Negation structure | Project: "Sem custódia · Sem lock-up · Sem intermediários"
  - Evidence: `cta-section.tsx:126-131`

- **Category language** — mostly aligned, minor drift
  - Brand: Avoid "carteira", "exchange", "plataforma crypto"
  - Project: "Crie sua carteira" in how-it-works step 1 — uses "carteira" (wallet)
  - Evidence: `how-it-works.tsx:18`

- **Testimonial voice** — drifted (old language)
  - Brand: Sovereignty-first | Project: Renato's quote mentions "Pix" and "stables" (feature-first, old positioning)
  - Note: This is a real user quote — can't be changed, but framing around it matters
  - Evidence: `social-proof.tsx:13-14`

- **Footer tagline** — aligned
  - Brand: "Patrimônio digital soberano" | Project: Same
  - Evidence: `footer.tsx:75`

### Overall: 5/8 attributes aligned, 3 drifted (hero stats, hero CTA, "carteira" usage)

---

## Visual Patterns

### Divergences

- **Doppelrand radius: "Old Money" refinement** — evolved (intentional)
  - Brand: 36px outer / 30px inner (pillowy, generous)
  - Project: 18px outer / ~13.5px inner (architectural, tighter)
  - Code comment: "Old Money refinement: 18px radius (architectural, not pillowy)"
  - Evidence: `doppelrand-card.tsx:25-26`, `globals.css:88-89`
  - Assessment: Deliberate evolution toward more restrained, institutional feel. Aligns with Ruler archetype.

- **Doppelrand gradient: simplified** — evolved (intentional)
  - Brand: 3-stop gradient at 145deg (richer dimensionality)
  - Project: 2-stop gradient at 160deg (quieter, Old Money)
  - Code comment: "Quieter 2-stop gradient"
  - Evidence: `doppelrand-card.tsx:39-40`, `globals.css:162-176`

- **Doppelrand opacity values: subtle shift** — evolved (minor)
  - Brand: bg 0.02, ring 0.04/0.08 | Project: bg 0.03, ring 0.05/0.07
  - Direction: Slightly more visible shell, slightly less dramatic hover
  - Evidence: `doppelrand-card.tsx:44`

- **Gold hallmark accent** — new (not in brand spec)
  - Project adds `.doppelrand-hallmark::before` — a gold gradient hairline at the inner top edge
  - Adds "foil edge" luxury detail. Not documented in brand patterns.
  - Evidence: `globals.css:179-194`, `doppelrand-card.tsx:51`

- **Doppelrand hover: -translate-y-px** — new
  - Brand: Ring opacity change only | Project: Adds subtle 1px upward lift on hover
  - Code comment: "Hover: subtle 1px lift, barely perceptible"
  - Evidence: `doppelrand-card.tsx:47`

- **Container width: 1200px** — changed
  - Brand: 1280px (`max-w-7xl`) | Project: 1200px (`--container-content`)
  - Tighter reading area. More editorial.
  - Evidence: `globals.css:74`

- **Section transition patterns** — new (not in brand)
  - `SectionGlow` — radial warm glow bridging section boundaries
  - `SectionFade` — directional gradient between bg colors
  - `SectionRule` — gold hairline separator
  - Evidence: `page.tsx:21-66`

- **Font loading: 9 families** — drifted (bloat)
  - Brand: 3 families max | Project: 9 font families loaded, 7 unused
  - Evidence: `layout.tsx:1-68`

- **FontSelector dev tool on page** — noise
  - `<FontSelector />` rendered in production page — development artifact
  - Evidence: `page.tsx:93`

- **Eyebrow pill pattern** — aligned (consistent)
  - Brand: pill with border/bg/tracking/overline | Project: identical across all sections
  - Evidence: all section components

- **Button-in-button CTA** — aligned
  - Brand: rounded-full yellow-500, trailing icon in dark circle | Project: identical
  - Evidence: `hero.tsx:85-93`, `navbar.tsx:80-88`

- **Motion primitives** — aligned
  - All FadeUp, StaggerContainer, TextReveal, MagneticButton match spec exactly
  - Evidence: `motion.tsx` matches brand motion spec line-for-line

---

## Personality

- **Archetype:** shifted — **stronger Ruler** than 70/30 Magician/Ruler
  - The "Old Money refinement" across Doppelrand (tighter radius, quieter gradient, 1px lift) strengthens the Ruler/institutional side. The original 36px "pillowy" radius was more Magician (warm, inviting). The 18px "architectural" radius is more Ruler (precise, structural).
  - This shift is consistent and intentional — every Doppelrand comment references "Old Money."
  - Evidence: `doppelrand-card.tsx` comments, `globals.css:87` comments

- **Positioning:** holds — sovereignty-first is maintained
  - The core positioning ("sovereign digital wealth") is intact throughout. The "Old Money" visual evolution actually reinforces it — the design now looks more like a private wealth platform and less like a premium crypto app.

- **Visual personality direction:** The project has evolved the brand's visual personality from "warm luxury tech" toward **"quiet institutional wealth."** This is a valid evolution of the Magician/Ruler balance — it leans the 70/30 split closer to 60/40 or even 55/45. Whether this is the right direction depends on whether Ricardo (HNW 40-55) or Marina (crypto-native 28-38) is the priority audience.

---

## Update Map

| # | Dimension | File to Update | Change |
|---|-----------|---------------|--------|
| 1 | Token | `patterns/chainless.yml` → `shape.doppelrand-outer` | 36px → 18px |
| 2 | Token | `patterns/chainless.yml` → `shape.doppelrand-inner` | 30px → ~13.5px |
| 3 | Token | `patterns/chainless.yml` → `shape.doppelrand-gap` | keep 6px |
| 4 | Token | `patterns/chainless.yml` → `shape.border-color` | 0.04 → 0.05 |
| 5 | Token | `patterns/chainless.yml` → typography tokens | Geist + Zodiak (pending font decision) |
| 6 | Token | `patterns/foundations/typography.md` | Update font stacks if font decision made |
| 7 | Token | `patterns/chainless.yml` → container width | add `container-content: 1200px` |
| 8 | Visual | `patterns/components/doppelrand.md` | Update radius, gradient, hallmark, hover spec |
| 9 | Visual | `patterns/foundations/elevation.md` | Add gold hallmark spec |
| 10 | Visual | `patterns/foundations/spacing.md` | Update container to 1200px |
| 11 | Visual | *(new)* page-transition patterns | Document SectionGlow, SectionFade, SectionRule |
| 12 | Token | `patterns/chainless.yml` → add fluid type tokens | `text-section-heading`, `text-hero-heading` |
| 13 | Voice | *(note only)* | Hero stats + CTA swap = evolution decision, not sync |
