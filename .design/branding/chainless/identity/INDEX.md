# Identity — Phase 3

> Brand: chainless | Reflects: shipped implementation as of 2026-04-07

## Chunks

| File | Description | ~Lines |
|------|-------------|--------|
| [IDENTITY.md](./IDENTITY.md) | **Single authoritative identity spec** — synthesized from all sub-documents. Start here. | ~230 |
| [color-system.md](./color-system.md) | Full color palette (yellow + dark + warm neutral + semantic), surface tokens, glassmorphism, gold hallmark system, WCAG contrast ratios | ~260 |
| [typography.md](./typography.md) | Switzer + Zodiak type system with shipped scale, weights, pairing rules, line heights, tracking values | ~240 |
| [logo-directions.md](./logo-directions.md) | Logo mark — usage rules, clear space, monochrome variations, platform text pairing | ~130 |
| [imagery-style.md](./imagery-style.md) | Atmospheric visual system (mesh gradients, noise, glows), photography treatment, video, iconography (Phosphor), data visualization | ~190 |
| [brand-applications.md](./brand-applications.md) | Every shipped section documented — hero, proofbar, philosophy, yield, spend, security, social proof, CTA, footer, transparency page | ~200 |
| [brand-book.md](./brand-book.md) | 21-page brand book outline updated for shipped identity | ~130 |

## Decisions (Shipped vs. Original Spec)

### Typography
- **Switzer** replaced Söhne as body sans-serif — free Fontshare alternative, no licensing dependency
- **Zodiak** replaced Fraunces as display serif — transitional serif with editorial warmth, no "wonk"
- **No monospace** loaded in shipped implementation (IBM Plex Mono was originally spec'd)
- **16px base** (Tailwind default) instead of spec'd 18px
- **Weight 400 headings** instead of spec'd 600–700 — editorial lightness over boldness
- **Hero heading reaches 104px** (6.5rem) instead of spec'd 72px (4.5rem)

### Color
- **Dark-first** — entire site is dark (`#1C1B19` body) instead of spec'd light-mode default
- **Semantic colors adjusted** for WCAG AA on dark backgrounds: success `#3DA66A`, error `#E05555`, info `#4A90DA`
- **Palette scales preserved** — all 11-stop yellow, dark, and warm scales match original spec exactly

### Visual System
- **Atmospheric** design language (mesh gradients, noise overlay, gold glows) emerged during implementation — not in original spec
- **Glassmorphism** as primary interactive surface treatment — not in original spec
- **Doppelrand card** as signature component pattern — not in original spec
- **Phosphor duotone** variant instead of spec'd line-based (Regular)
- **Buttons use `rounded-2xl`** (16px) instead of spec'd pill (full radius)
- **"Torne-se Chainless"** rendered without period, in Zodiak Regular (not Fraunces Bold Italic)

### What Survived Unchanged
- Logo mark — preserved exactly
- `#FFC73D` as yellow-500 — preserved exactly
- `#1C1B19` as dark-500 — preserved exactly
- All warm neutral scale values — preserved exactly
- Phosphor Icons as the icon library
- `EASE_PREMIUM` motion curve `[0.32, 0.72, 0, 1]`
- 60-30-10 accent restraint principle (yellow never dominates)
- Brand voice and messaging (Confident, Defiant, Warm, Clear)

## Downstream

The **Patterns** phase consumed this identity output to produce:

1. **`tokens.json`** — W3C format design tokens for all foundations + components
2. **Color token mapping** — `--color-*` CSS custom properties in `@theme`
3. **Typography tokens** — `--text-*` custom properties with clamp values
4. **Doppelrand specification** — Component anatomy, tokens, API
5. **Motion system** — EASE_PREMIUM, springs, 7 animation components
6. **Shadow/elevation system** — 4 shadow classes + 2 inner highlights

## Related

- [../audit/INDEX.md](../audit/INDEX.md) — Typography crisis identified here
- [../strategy/INDEX.md](../strategy/INDEX.md) — Positioning and archetype
- [../verbal/INDEX.md](../verbal/INDEX.md) — Voice, tone, messaging
- [../patterns/INDEX.md](../patterns/INDEX.md) — Design system implementation
