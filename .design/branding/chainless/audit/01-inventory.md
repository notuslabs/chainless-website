# Brand Inventory

> Phase: audit | Brand: chainless | Generated: 2026-04-01

---

## Logo

| Attribute | Value |
|-----------|-------|
| Format | SVG monochrome (Logo_SVG_B.svg) |
| ViewBox | 0 0 967 136 |
| Construction | 3 stacked parallelogram bars (top, middle diamond, bottom) forming stylized "C" / chain-link motif |
| Wordmark | "chainless" in clean sans-serif vector paths, lowercase |
| Color modes | Single-color, currently rendered in #FAFAF8 on dark backgrounds |
| Usage | Footer brand column (ChainlessLogo component, size=24) |

The logomark's chain-link motif directly encodes the brand thesis (freedom from chains). The parallelogram construction has an architectural quality that aligns with the stated "Architecture is the Brand" principle.

## Color System

### Brand Yellow (10% composition target)
| Token | Hex | Role |
|-------|-----|------|
| yellow-500 | #FFC73D | Primary accent: CTAs, links, active states, eyebrow text |
| yellow-400 | #FFD486 | Hover states |
| yellow-600 | #CC9C00 | Secondary warm glow accents |
| yellow-50 | #FFF8F0 | Lightest tint (unused in dark mode) |
| yellow-950 | #201600 | Deepest shade |

Full 11-stop scale from 50 to 950. Warm gold, intentionally desaturated vs. pure yellow. Reads as "quiet wealth" rather than "attention-grabbing."

### Warm Neutrals (60% composition target)
| Token | Hex | Role |
|-------|-----|------|
| warm-50 | #F0EEE9 | Lightest (light-mode surface, scrollbar thumb) |
| warm-300 | #A4A097 | Secondary body text at reduced opacity |
| warm-400 | #87837C | Tertiary text, footer links at reduced opacity |
| warm-500 | #6B6862 | Anchor neutral |
| warm-700 | #3F3D3A | Borders, dividers at reduced opacity |
| warm-800 | #2D2C29 | Eyebrow pill backgrounds at reduced opacity |
| warm-950 | #0F0E0D | Near-black (overlay base) |

All warm-tinted at approximately 84deg hue. No cool grays anywhere in the system.

### Dark Neutrals / Espresso (30% composition target)
| Token | Hex | Role |
|-------|-----|------|
| dark-500 | #1C1B19 | Primary background (body, all sections) |
| dark-600 | #181716 | Social proof section bg, elevated contrast |
| dark-950 | #040403 | Deepest black (editorial overlay) |

Warm black, never cool. The `#1C1B19` base has visible warmth without being brown.

### Semantic Colors
| Token | Hex | Contrast on dark-500 |
|-------|-----|---------------------|
| success | #3DA66A | AA (4.5:1+) |
| warning | #D4890D | AA |
| error | #E05555 | AA |
| info | #4A90DA | AA |

### Key Contrast Ratios
- #FFC73D on #1C1B19 = 11.1:1 (AAA)
- #FAFAF8 on #1C1B19 = body text primary (AAA)
- Selection: #FFC73D bg + #1C1B19 text

### Surface Tokens (defined, largely unused)
- surface: #FAFAF8
- surface-warm: #F0EEE9
- surface-muted: #F4F3F0
- surface-dark: #1C1B19
- surface-dark-elevated: #2A2926

Light-mode surfaces are spec'd but the landing is entirely dark-mode.

## Typography

### Documented Spec
| Role | Font | Source |
|------|------|--------|
| Primary sans | Satoshi | Free alternative to Sohne |
| Accent serif | Fraunces | Brand moments only |
| Mono | IBM Plex Mono | Data values, addresses |

### Actual Implementation (layout.tsx)
| Role | Font | Source | CSS Variable |
|------|------|--------|-------------|
| Body sans | **Geist** | Google Fonts | `--font-geist` -> `--font-sans` |
| Display serif | **Zodiak** | Local woff2 (3 weights + bold) | `--font-zodiak` -> `--font-serif` |
| Unused serif 1 | Lora | Google Fonts | `--font-lora` |
| Unused serif 2 | Playfair Display | Google Fonts | `--font-playfair` |
| Unused serif 3 | Cormorant Garamond | Google Fonts (5 weights, 2 styles) | `--font-cormorant` |
| Unused serif 4 | Source Serif 4 | Google Fonts | `--font-source-serif` |
| Unused sans 1 | Barlow | Google Fonts (5 weights, 2 styles) | `--font-barlow` |
| Unused condensed | Oswald | Google Fonts | `--font-oswald` |
| Unused serif 5 | Fraunces | Google Fonts (2 styles) | `--font-fraunces` |

**9 font families loaded. Only 2 actively used.** The 7 unused fonts appear to be remnants of a font-pairing exploration (confirmed by existence of `font-pairing-preview.html` and `font-selector.tsx`).

### Type Scale
| Token | Value | Usage |
|-------|-------|-------|
| --text-hero-heading | clamp(3.5rem, 2.5rem + 4vw, 6.5rem) | Hero "Torne-se Chainless" |
| --text-section-heading | clamp(2rem, 1.5rem + 2vw, 3.25rem) | All section H2s |
| --text-overline | 0.5625rem (9px) | Eyebrow labels, uppercase |
| --text-caption | 0.8125rem (13px) | Footer links, attribution |
| --text-small | 0.9375rem (15px) | Section descriptions |
| Base | 18px implied (1rem on body) | Body text |

All headings use fluid clamp() with negative tracking (-0.02em). Body text uses generous leading (1.7).

## Voice & Messaging Samples

### Primary Messages
| Location | Text | Language |
|----------|------|----------|
| Hero headline | "Torne-se Chainless" | pt-BR |
| Hero subheadline | "Cresca seu patrimonio com total controle." | pt-BR |
| CTA primary (hero) | "Comecar agora" | pt-BR |
| CTA primary (close) | "Torne-se Chainless" | pt-BR |
| CTA secondary | "Entenda autocustodia" | pt-BR |
| Philosophy heading | "Construido para quem exige controle." | pt-BR |
| Philosophy pillar 1 | "Ninguem pode congelar seus ativos" | pt-BR |
| Social proof heading | "Vozes soberanas." | pt-BR |
| CTA section heading | "Seu patrimonio merece ser so seu." | pt-BR |
| Editorial couplet 1 | "O sistema financeiro foi construido para eles." | pt-BR |
| Editorial couplet 2 | "A Chainless foi construida para voce." | pt-BR |
| Footer tagline | "Patrimonio digital soberano." | pt-BR |
| Footer description | "Plataforma de patrimonio digital com autocustodia." | pt-BR |
| Trust strip | "Sem custodia . Sem lock-up . Sem intermediarios" | pt-BR |

### Messaging Themes
1. **Sovereignty** — "total controle", "so seu", "soberania dos ativos"
2. **Defiance** — "construido para eles" vs "para voce", "impossivel" (referring to custodial lock)
3. **Architecture** — "Construido para quem exige", structural language
4. **Warmth** — "Cresca seu patrimonio", growth-oriented, not fear-driven
5. **Anti-intermediary** — "Sem custodia / Sem lock-up / Sem intermediarios" as a repeated triptych

### Voice Characteristics
- First-person plural avoided (no "nos" / "we")
- Second-person direct ("seu", "voce")
- Short declarative sentences
- Portuguese-native, not translated from English
- Formal-warm register (voce, not tu)

## Motion System

| Element | Value |
|---------|-------|
| Signature entrance | blur-fade-up (FadeUp component) |
| Easing | cubic-bezier(0.32, 0.72, 0, 1) — EASE_PREMIUM |
| Entrance duration | ~0.9s |
| Stagger interval | 0.12s between items |
| CTA interaction | MagneticButton (spring physics) |
| Hero headline | TextReveal (character-level) |
| Scroll-driven | EditorialBreak frame scrubber (121 webp frames), ping-pong video |
| Hairline accents | scaleX from 0, origin left, 0.8-1s |

## Visual Patterns

| Pattern | Implementation |
|---------|----------------|
| Doppelrand cards | Double-shell: translucent outer (white/[0.02], ring white/[0.04]) + inner gradient core + 6px gap + gold hallmark hairline |
| Atmospheric glows | Soft yellow/gold radial gradients, 200-500px, blurred 80-200px |
| Noise overlay | 0.022 opacity fractal noise, fixed position, z-50 |
| Concentric circles | SVG, animated pathLength, CTA section |
| Cinematic video | Hero bg (0.85 opacity, desaturated), social-proof bg (0.12, blurred) |
| Gold hairlines | Gradient from yellow-500/25 to transparent, animated scaleX |
| Edge fades | Linear gradients dissolving sections into each other |
| Vignettes | Radial/linear gradients for depth and text readability |

## Component Patterns

### Eyebrow Pills (consistent across all sections)
```
rounded-full border border-warm-700/25 bg-warm-800/30
px-4 py-1.5 text-overline uppercase tracking-[0.25em]
text-yellow-500/90 backdrop-blur-sm
```

### Primary Button
```
rounded-full bg-yellow-500 py-4 pl-8 pr-4
text-base font-semibold text-dark-500
shadow-[0_4px_30px_rgba(255,199,61,0.25)]
+ button-in-button trailing icon (ArrowUpRight in dark circle)
```

### Section Layout
- Container: max-w-[1200px] centered
- Vertical rhythm: py-32 md:py-44 (generous)
- Header pattern: eyebrow + heading left, description right (md:flex-row justify-between)
- Content offset: mt-20 from header

## Page Metadata
- Title: "Chainless -- Patrimonio Digital Soberano"
- Description: "Seu patrimonio cresce. Suas chaves continuam suas. Plataforma de patrimonio digital com autocustodia."
- Lang: pt-BR

---

## Related

- [Coherence Assessment](./02-coherence.md)
- [Market Fit Analysis](./03-market-fit.md)
