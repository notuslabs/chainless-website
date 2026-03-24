# Typography

> Phase: identity | Brand: chainless | Generated: 2026-03-22

---

## Design Philosophy

Chainless typography expresses the Magician+Ruler archetype blend at the letterform level: **Söhne** is the Ruler — precise, authoritative, warm but structured. **Fraunces** is the Magician — unexpected, transformative, warm but rebellious. The system deploys them at a 70/30 ratio that mirrors the brand's visual split.

The typographic system must communicate three things simultaneously:
1. **"This is a serious wealth platform"** — Söhne's humanist precision signals competence and premium craft (Ruler)
2. **"This is not a bank"** — Fraunces' wonky serifs disrupt expectations, signaling that Chainless is something new (Magician)
3. **"These people care about craft"** — The weight contrast, generous sizing, and considered spacing signal the "Craft Over Speed" value

---

## Font Families

| Role | Family | Classification | Source | Fallback Stack |
|------|--------|---------------|--------|----------------|
| **Primary** | Söhne | Humanist sans-serif | Klim Type Foundry (commercial license) | 'General Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif |
| **Accent** | Fraunces | Old-style soft serif (variable) | Google Fonts (open source) | 'Newsreader', 'Georgia', 'Times New Roman', serif |
| **Monospace** | IBM Plex Mono | Monospace (preserved) | Google Fonts / IBM | 'JetBrains Mono', 'Fira Code', ui-monospace, 'SFMono-Regular', monospace |

### Söhne — The Ruler's Voice

**Why Söhne:** Designed by Kris Sowersby at Klim Type Foundry, Söhne references Akzidenz-Grotesk's warmth without its roughness. It has the precision of a geometric sans (confidence, authority) with the warmth of a humanist design (approachability, care). Used by Stripe — a brand admired for exactly the "warm precision" aesthetic we're building. Söhne says "we thought about this" without saying "look at our typeface."

**Connection to voice:** The brand voice is "confident, defiant, warm, clear." Söhne is all four: its letterforms convey confidence through geometric structure, warmth through humanist curves, and clarity through generous spacing and open counters. The defiance comes from what Söhne is *not* — it's not Inter (safe), not Helvetica (corporate), not Roboto (Google). It's a considered choice.

**Weights in use:** Extralight (200), Light (300), Regular (400), Medium (500), Semibold (600), Bold (700), Extrabold (800)

**If licensing is constrained:** General Sans by Radomir Tinkov is the approved fallback. Similar warmth, strong weight range, geometric base with humanist details. Available on Fontshare (free for commercial use).

### Fraunces — The Magician's Flourish

**Why Fraunces:** A "wonky" old-style soft serif by Undercase Type, available as a variable font on Google Fonts. Its optical axis creates beautiful variation from text to display sizes. The slight quirkiness — the "wonk" — introduces the 30% rebel energy at the typographic level. In a world of fintech sans-serifs, a warm serif is a counter-position.

**Connection to voice:** Fraunces carries the "defiant warmth" attribute. Where Söhne is the 60% premium confidence, Fraunces is the 40% defiant personality. It appears at brand moments: "Torne-se Chainless." set in Fraunces italic is the typographic expression of the Magician's invitation.

**Weights in use:** Light (300), Regular (400), Medium (500), Semibold (600), Bold (700) — all with corresponding italics

**Critical rule: Fraunces is for brand moments ONLY.** Never body text, never UI labels, never buttons, never form inputs. It appears in:
- The "Torne-se Chainless." brand platform
- Hero headlines (when the Magician leads — 80/20 contexts)
- Campaign headlines
- Pull quotes and testimonials
- Section titles that deserve editorial gravity (e.g., "Seu patrimônio. Suas chaves.")

### IBM Plex Mono — The Architect's Precision

**Why preserved:** IBM Plex Mono is already in use on the current site. It carries equity with the crypto-native audience (Marina) and signals technical credibility. In the evolved brand, it appears in code contexts, data tables, wallet addresses, transaction hashes, and yield percentages — anywhere the "Radical Transparency" value manifests as visible architecture.

**Weights in use:** Regular (400), Medium (500), Bold (700)

---

## Type Scale

Base: 18px | Ratio: 1.25 (Major Third) | Grid: 4px

The 18px base (not the startup-standard 16px) signals premium — "we value your reading comfort." The Major Third ratio creates clear hierarchy without drama, appropriate for a wealth platform that needs both editorial impact and data-dense readability.

| Level | px | rem | Fluid (clamp) | Weight | Line Height | Letter Spacing | Font | Use |
|-------|---:|----:|---------------|--------|:-----------:|:--------------:|------|-----|
| **Display** | 72px | 4.5rem | `clamp(2.75rem, 2.1rem + 2.7vw, 4.5rem)` | 700 | 76px / 1.06 | -0.025em | Fraunces | Hero headlines, campaign moments |
| **H1** | 56px | 3.5rem | `clamp(2.25rem, 1.7rem + 2.2vw, 3.5rem)` | 700 | 60px / 1.07 | -0.025em | Söhne or Fraunces | Page titles |
| **H2** | 44px | 2.75rem | `clamp(1.875rem, 1.45rem + 1.7vw, 2.75rem)` | 600 | 48px / 1.09 | -0.025em | Söhne | Section headings |
| **H3** | 36px | 2.25rem | `clamp(1.5rem, 1.17rem + 1.4vw, 2.25rem)` | 600 | 40px / 1.11 | -0.015em | Söhne | Subsection headings |
| **H4** | 28px | 1.75rem | `clamp(1.25rem, 1.03rem + 0.9vw, 1.75rem)` | 600 | 32px / 1.14 | -0.01em | Söhne | Minor headings, card titles |
| **H5** | 22px | 1.375rem | — | 600 | 28px / 1.27 | 0 | Söhne | UI section headers |
| **Body Large** | 21px | 1.3125rem | — | 400 | 32px / 1.52 | 0 | Söhne | Lead paragraphs, intros |
| **Body** | 18px | 1.125rem | — | 400 | 28px / 1.56 | 0 | Söhne | Default body text |
| **Body Small** | 15px | 0.9375rem | — | 400 | 24px / 1.6 | 0.01em | Söhne | Secondary text, metadata |
| **Caption** | 13px | 0.8125rem | — | 400 | 20px / 1.54 | 0.015em | Söhne | Labels, helper text |
| **Overline** | 12px | 0.75rem | — | 600 | 16px / 1.33 | 0.1em | Söhne (uppercase) | Category labels, eyebrows |
| **Code** | 15px | 0.9375rem | — | 400 | 24px / 1.6 | 0 | IBM Plex Mono | Code blocks, addresses, hashes |
| **Data** | 18px | 1.125rem | — | 500 | 24px / 1.33 | -0.01em | IBM Plex Mono | Yield percentages, amounts |

---

## Pairing Rules — When to Use Fraunces vs. Söhne

| Context | Magician Energy | Font Choice | Example |
|---------|:--------------:|-------------|---------|
| Homepage hero headline | 80% | **Fraunces** (italic or regular) | "Torne-se Chainless." |
| Campaign hero | 75% | **Fraunces** | "Seu patrimônio. Suas chaves." |
| Product page section headings | 20% | **Söhne** | "Estratégias de rendimento" |
| Dashboard headings | 10% | **Söhne** | "Seu portfólio" |
| Blog/editorial article titles | 50% | **Fraunces** | "Por que autocustódia importa" |
| Pull quotes | 70% | **Fraunces** (italic) | "O sistema foi construído para eles." |
| Testimonials | 60% | **Fraunces** (italic) | "Eu me tornei Chainless." |
| Navigation labels | 0% | **Söhne** (Medium) | "Sobre", "Produto", "Segurança" |
| Button text | 0% | **Söhne** (Semibold) | "Começar agora" |
| Form labels | 0% | **Söhne** (Medium) | "E-mail", "Senha" |
| Footer content | 0% | **Söhne** (Regular) | Links, legal text |
| Data values in cards | 0% | **IBM Plex Mono** (Medium) | "8.2%", "R$ 42.350" |

**The rule of thumb:** If it's a brand moment (the Magician is speaking), use Fraunces. If it's a product moment (the Ruler is governing), use Söhne. If it's data (the Architect is showing work), use IBM Plex Mono.

---

## Responsive Behavior

### Mobile (< 640px)

| Change | Rationale |
|--------|-----------|
| Display drops to ~44px via clamp | Maintains impact without overflow |
| H1 drops to ~36px via clamp | Readable on small screens |
| Body stays at 18px | Never reduce body size on mobile — readability is premium |
| Fraunces display reduced but still present | Brand moments must persist on mobile |
| Line lengths naturally constrain to ~40-60 characters | Within optimal range |

### Desktop (> 1280px)

| Change | Rationale |
|--------|-----------|
| Max content width: 1200px | Prevents ultra-wide line lengths |
| Display reaches full 72px | Maximum editorial impact |
| Body text max-width: 65ch (`max-w-prose`) | Optimal reading line length |
| Generous whitespace increases | Premium breathing room at large viewports |

### Fluid Viewport (640–1280px)

All heading levels scale fluidly via `clamp()`. Body text and below remain static — they don't need viewport-responsive sizing because 18px is comfortable at all widths.

---

## Vertical Rhythm

Grid unit: 4px | Body line-height: 28px (7 × 4px)

All spacing derives from the body line-height as anchor:

| Token | Value | Lines | Usage |
|-------|------:|:-----:|-------|
| `space-xs` | 4px | — | Inline gaps, icon-to-text spacing |
| `space-sm` | 8px | — | Related element gaps, padding-tight |
| `space-md` | 14px | 0.5 | Compact section spacing |
| `space-lg` | 28px | 1 | Default paragraph spacing, component gaps |
| `space-xl` | 42px | 1.5 | Section breaks within a content area |
| `space-2xl` | 56px | 2 | Major section breaks |
| `space-3xl` | 84px | 3 | Page section spacing |
| `space-4xl` | 112px | 4 | Hero-to-content transition |

---

## Weight Strategy

| Weight | Name | Usage |
|:------:|------|-------|
| 200 | Extralight | Display numerals, decorative large text (rare) |
| 300 | Light | Bylines, metadata emphasis, elegant large text |
| 400 | Regular | Body text, descriptions, default |
| 500 | Medium | Emphasized body, nav items, labels, form inputs |
| 600 | Semibold | H2–H5 headings, button text, overlines |
| 700 | Bold | H1, Display, key CTAs, "Torne-se Chainless." in Fraunces |
| 800 | Extrabold | Campaign headlines, maximum impact moments (rare) |

---

## Performance Budget

| Asset | Max Size | Notes |
|-------|:--------:|-------|
| Söhne (4 weights: 400, 500, 600, 700) | ~120KB | WOFF2, self-hosted |
| Fraunces Variable | ~80KB | WOFF2, variable font single file |
| IBM Plex Mono (2 weights: 400, 500) | ~40KB | WOFF2, self-hosted |
| **Total** | **~240KB** | Under 250KB budget for all fonts |

**Loading strategy:**
- `font-display: swap` for Söhne (prevent invisible text)
- `font-display: optional` for Fraunces (it's accent — if it doesn't load, Söhne + fallback is fine)
- Preload Söhne Regular (400) as the critical path font
- Subset to Latin + Latin Extended for Brazilian Portuguese support

---

## Accessibility

- Body line-height ≥ 1.5× font size: 28px / 18px = 1.56 ✓ (WCAG SC 1.4.12)
- All fluid clamp() values use rem-based min/max — preserves zoom functionality (WCAG SC 1.4.4)
- Minimum text size: 12px (overline) — above 12px practical floor ✓
- Layout must survive text spacing overrides: line-height ≥ 1.5×, letter-spacing ≥ 0.12em, word-spacing ≥ 0.16em, paragraph-spacing ≥ 2× font size
- Max line length: `max-w-prose` (65ch) — within 45–80ch optimal range ✓

---

## Related

- [Color System](./color-system.md) — Color paired with this type system
- [Brand Applications](./brand-applications.md) — Typography in context
- [Imagery Style](./imagery-style.md) — How typography interacts with imagery
