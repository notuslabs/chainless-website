# Identity — Phase 3

> Brand: chainless | Completed: 2026-03-22

## Chunks

| File | Description | ~Lines |
|------|-------------|--------|
| [logo-directions.md](./logo-directions.md) | Logo system — usage rules, clear space, variations, co-branding, responsive sizing | ~165 |
| [color-system.md](./color-system.md) | Full color palette (yellow + neutral + warm neutral + semantic), dark mode mapping, WCAG contrast ratios, 60-30-10 composition strategy | ~195 |
| [typography.md](./typography.md) | Söhne + Fraunces + IBM Plex Mono type system with scale, pairing rules, responsive behavior | ~175 |
| [imagery-style.md](./imagery-style.md) | Photography direction, color grading, iconography (Phosphor), data visualization, UI screenshot treatment | ~145 |
| [brand-applications.md](./brand-applications.md) | Digital + physical touchpoints — website, dashboard, email, social, business cards, presentations, merchandise | ~145 |
| [brand-book.md](./brand-book.md) | 20-page brand book outline with page-by-page content and design notes | ~115 |
| [palettes.json](./palettes.json) | Machine-readable OKLCH 11-stop color scales for all brand and semantic colors | — |

## Decisions

### Logo
- **Preserved** existing logo mark — built a system (usage rules, clear space, variations, responsive sizing) rather than redesigning
- Logo pairs with "Torne-se Chainless." in Fraunces italic — the serif/sans contrast embodies the Magician/Ruler blend

### Color
- **Preserved** `#FFC73D` as yellow-500 (exact match at the 500 stop of the tints.dev-generated scale)
- **Preserved** `#1C1B19` as neutral-500 (warm dark, not pure black)
- Built warm neutral system (`#F0EEE9` → `#0F0E0D`) with consistent amber undertone at ~85° hue
- 60-30-10 composition + Inverted Sections as governing color strategy
- Dark mode uses warm dark (`#1C1B19`) not pure black — maintains warmth mandate
- All primary text combinations pass WCAG AAA (15.4:1 for `#1C1B19` on `#FAFAF8`)

### Typography
- **Söhne** (Klim) as primary — the Ruler's voice. Warm precision, Stripe reference, humanist sans-serif
- **Fraunces** (Google Fonts) as accent — the Magician's flourish. Wonky serif for brand moments only
- **IBM Plex Mono** preserved from existing site — architect's precision for data/code contexts
- 18px body base (not 16px) — premium readability signal
- Major Third (1.25) ratio — clear hierarchy without drama
- Fraunces restricted to brand moments: hero headlines, "Torne-se Chainless.", pull quotes, campaign titles

### Imagery
- Warm natural light photography, slightly desaturated, editorial color grading
- People shown through hands/environments/over-shoulder — not direct-to-camera hero portraits
- Phosphor Icons as primary icon library (line-based, 1.5px stroke, rounded)
- Data visualization as design element (Stripe-inspired) — charts as beautiful objects
- No crypto clichés, no stock clichés, no luxury signaling

### Composition
- The 70/30 brand split (premium/rebel) materializes as: Söhne/Fraunces typography, light/dark section rhythm, editorial restraint/unexpected crop
- The 60-30-10 color composition ensures yellow never overwhelms — it's the 10% that makes everything else feel premium by contrast

## Downstream

The **System/Patterns** phase needs from this output:

1. **`palettes.json`** — Machine-readable color tokens for CSS custom properties and Tailwind theme extension
2. **Color composition rules** — 60-30-10 ratios + Inverted Sections as component-level guidance (which components get dark variants)
3. **Typography scale** — All px/rem/clamp values ready for `@theme` tokens. Söhne licensing status determines whether to use Söhne or General Sans fallback
4. **Pairing rules** — The Fraunces/Söhne decision tree drives component-level typography (which components use which font)
5. **Semantic color mapping** — Both light and dark mode semantic tokens ready for CSS variable generation
6. **Spacing scale** — 4px grid with 28px body line-height as anchor, vertical rhythm tokens
7. **Icon specifications** — Phosphor Icons integration parameters (weight, size grid, color inheritance)
8. **Dark mode token pairs** — Every light token has a dark equivalent for `prefers-color-scheme` or class-based toggling
