# Typography

> Phase: identity | Brand: chainless | Reflects: shipped implementation as of 2026-04-07

---

## Design Philosophy

Chainless typography expresses the Magician+Ruler archetype blend at the letterform level: **Switzer** is the Ruler — precise, authoritative, warm but structured. **Zodiak** is the Magician — unexpected, transformative, warm but rebellious. The system deploys them in a display/body split that mirrors the brand's visual duality.

The typographic system communicates three things simultaneously:
1. **"This is a serious wealth platform"** — Switzer's humanist precision signals competence and premium craft (Ruler)
2. **"This is not a bank"** — Zodiak's editorial warmth disrupts expectations, signaling that Chainless is something new (Magician)
3. **"These people care about craft"** — The generous sizing, considered spacing, and atmospheric text-shadow treatments signal the "Craft Over Speed" value

---

## Font Families (Shipped)

| Role | Family | Classification | Source | CSS Variable | Fallback Stack |
|------|--------|---------------|--------|-------------|----------------|
| **Body** | Switzer | Humanist sans-serif | Fontshare (self-hosted woff2) | `--font-switzer` | ui-sans-serif, system-ui, -apple-system, sans-serif |
| **Display** | Zodiak | Transitional serif | Fontshare (self-hosted woff2) | `--font-zodiak` | Georgia, serif |

### CSS Custom Properties

```css
--font-sans: var(--font-switzer), ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-serif: var(--font-zodiak), Georgia, serif;
```

### Switzer — The Ruler's Voice

**Why Switzer:** A contemporary humanist sans-serif from Fontshare. It has the warmth and openness of premium geometric sans-serifs without the coldness of purely geometric designs. Free for commercial use, eliminating the licensing dependency of the originally spec'd Söhne.

**Weights loaded:** Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)

**Usage:** All body text, navigation, buttons, labels, metadata, form inputs — everything that isn't a display heading.

### Zodiak — The Magician's Flourish

**Why Zodiak:** A transitional serif from Fontshare with editorial warmth and distinctive character. It brings display gravitas to hero headlines and section headings without the "wonky" personality of Fraunces. Its vertical proportions and sharp contrast create a premium editorial feel on dark backgrounds.

**Weights loaded:** Light (300), Regular (400), Bold (700), ExtraBold (800)

**Critical rule: Zodiak is for display headings ONLY.** It appears in:
- Hero headline ("Torne-se Chainless")
- Section headings (h2) — "Proteger," "Crescer," "Gastar," etc.
- Card titles (h3) — within Doppelrand cards
- Editorial break couplets
- CTA section headline
- Pull quotes and testimonials

**Never:** body text, navigation, buttons, form inputs, labels, metadata.

### Additional Fonts Loaded (FontSelector Dev Tool)

The layout loads several additional fonts for the FontSelector design tool. These are NOT part of the shipped identity — they are exploration options:

| Font | Variable | Source | Status |
|------|----------|--------|--------|
| Satoshi | `--font-satoshi` | Fontshare (self-hosted) | Available for switching |
| General Sans | `--font-general-sans` | Fontshare (self-hosted) | Available for switching |
| Geist | `--font-geist` | Google Fonts (variable) | Available for switching |
| Lora | `--font-lora` | Google Fonts (variable) | Available for switching |
| Playfair Display | `--font-playfair` | Google Fonts (variable) | Available for switching |
| Cormorant Garamond | `--font-cormorant` | Google Fonts | Available for switching |
| Source Serif 4 | `--font-source-serif` | Google Fonts (variable) | Available for switching |
| Barlow | `--font-barlow` | Google Fonts | Available for switching |
| Oswald | `--font-oswald` | Google Fonts (variable) | Available for switching |
| Fraunces | `--font-fraunces` | Google Fonts (variable) | Available for switching |

**Production note:** These additional fonts add ~800KB of dead weight. The audit recommends removing all except Switzer and Zodiak for production.

---

## Type Scale (Shipped)

### Tokenized Sizes

| Token | Value | Approx px | Usage |
|-------|-------|-----------|-------|
| `--text-hero-heading` | `clamp(3.5rem, 2.5rem + 4vw, 6.5rem)` | 56px → 104px | Hero headline |
| `--text-section-heading` | `clamp(2rem, 1.5rem + 2vw, 3.25rem)` | 32px → 52px | Section headings (h2) |
| `--text-small` | `0.9375rem` | 15px | Secondary text, metadata |
| `--text-caption` | `0.8125rem` | 13px | Labels, helper text |
| `--text-overline` | `0.5625rem` | 9px | Overline/eyebrow text |

### Non-Tokenized Sizes (Used in Components)

| Size | Context | Font |
|------|---------|------|
| `clamp(2.5rem, 1.8rem + 2.8vw, 4rem)` (40–64px) | CTA section heading | Zodiak |
| `clamp(1.1rem, 1rem + 0.45vw, 1.25rem)` (17.6–20px) | Hero subheadline | Switzer |
| `text-xl md:text-3xl lg:text-[2.25rem]` (20/30/36px) | Editorial break couplets | Zodiak |
| `text-base` (16px) | Default body text | Switzer |
| `text-lg` (18px) | Larger body text, descriptions | Switzer |
| `text-sm` (14px) | Small labels, footer links | Switzer |
| `text-xs` (12px) | Legal text, fine print | Switzer |

**Note:** The shipped base font size is the Tailwind default 16px (1rem), not the originally spec'd 18px.

---

## Line Heights (Shipped)

| Value | Context |
|-------|---------|
| `leading-[1.03]` | Hero headline |
| `leading-[1.04]` | CTA headline |
| `leading-[1.06]` | Section headings (h2) |
| `leading-[1.15]` | Card titles (h3) |
| `leading-[1.35]` | Editorial break couplets |
| `leading-[1.6]` | Security detail text, social proof quotes |
| `leading-[1.7]` | Primary body/description text |
| `leading-[1.75]` | How-it-works step descriptions, footer body |
| `leading-[1.85]` | Legal prose body text |
| `leading-tight` | Store button text, metric labels |
| `leading-snug` | Security layer titles |
| `leading-relaxed` | Disclaimers, CTA link text |
| `leading-none` | Store button small labels, large ghost numbers |

---

## Letter Spacing (Shipped)

| Value | Context |
|-------|---------|
| `tracking-[-0.04em]` | Ghost watermark numbers |
| `tracking-[-0.02em]` | All serif headings (hero, section, CTA, editorial) |
| `tracking-[-0.01em]` | Card titles (h3, serif) |
| `tracking-tight` | Name attributions, metrics, token names |
| `tracking-wide` | Stat labels, icon badge labels, footer links |
| `tracking-wider` | Protocol names under token pairs |
| `tracking-[0.15em]` | Video caption, shard labels |
| `tracking-[0.2em]` | Overlines/eyebrow labels |
| `tracking-[0.25em]` | Eyebrow component, transparency page overline |

---

## Weight Strategy (Shipped)

| Weight | Name | Usage |
|:------:|------|-------|
| 300 | Light | CTA body text, mobile nav links, editorial couplets |
| 400 | Regular | **Serif headings (hero, section, card titles)** — the display text default. Also body text default. |
| 500 | Medium | Body emphasis, nav links, token pair names, metric values, footer brand |
| 600 | SemiBold | Buttons, stats, eyebrow labels, testimonial names, legal headings |
| 700 | Bold | Editorial highlight words, ghost numbers, CTA button, arrow icons |

**Key departure from original spec:** Display headings use weight 400 (Regular), not 700 (Bold). This gives the Zodiak serif a lighter, more editorial feel — the weight contrast comes from size, not boldness.

---

## Pairing Rules — Zodiak vs. Switzer

| Context | Font | Weight | Tracking |
|---------|------|--------|----------|
| Hero headline | **Zodiak** | 400 (Regular) | -0.02em |
| Section headings (h2) | **Zodiak** | 400 (Regular) | -0.02em |
| Card titles (h3) | **Zodiak** | 400 (Regular) | -0.01em |
| CTA headline | **Zodiak** | 400 (Regular) | -0.02em |
| Editorial couplets | **Zodiak** | 300 (Light) | -0.02em |
| Pull quotes | **Zodiak** | 400 (Regular) | -0.02em |
| Navigation labels | **Switzer** | 500 (Medium) | default |
| Button text | **Switzer** | 600 (SemiBold) | default |
| Body text | **Switzer** | 400 (Regular) | default |
| Eyebrow/overline | **Switzer** | 600 (SemiBold) | 0.2–0.25em |
| Stat values | **Switzer** | 600 (SemiBold) | tight |
| Footer links | **Switzer** | 400 (Regular) | wide |
| Legal text | **Switzer** | 400 (Regular) | default |

**The rule of thumb:** If it's a display heading or brand moment (the Magician speaks), use Zodiak. Everything else is Switzer.

---

## Text Shadow — Atmospheric Halo

The hero headline uses a multi-layer text shadow to create an atmospheric glow effect on dark backgrounds. This is a signature treatment:

```css
text-shadow:
  0 0 80px rgba(255, 199, 61, 0.08),
  0 0 40px rgba(255, 199, 61, 0.04);
```

This creates a subtle warm halo around display text, reinforcing the gold accent system at the atmospheric level.

---

## Responsive Behavior

### Mobile (< 640px)

- Hero headline drops to ~56px via clamp (from 104px desktop)
- Section headings drop to ~32px via clamp (from 52px desktop)
- Body text stays at 16px — never reduced on mobile
- All serif display text remains present on mobile

### Desktop (> 1280px)

- Max content width: `--container-content: 1200px`
- Hero heading reaches full 104px (6.5rem)
- Body text max-width should follow `max-w-prose` (65ch) for readability

---

## Performance (Current)

| Asset | Approx Size | Notes |
|-------|:-----------:|-------|
| Switzer (5 weights, woff2) | ~100KB | Self-hosted, body font |
| Zodiak (4 weights, woff2) | ~80KB | Self-hosted, display font |
| **Additional fonts (dev tool)** | **~800KB** | **Dead weight — remove for production** |
| **Production total** | **~180KB** | After cleanup |

---

## Accessibility

- Body line-height 1.7 > 1.5 minimum (WCAG SC 1.4.12) ✓
- All fluid clamp() values use rem-based min/max — preserves zoom (WCAG SC 1.4.4) ✓
- Minimum text size: 9px (overline) — small but used only as decorative label ✓
- Max line length should target `max-w-prose` (65ch) for body text

---

## Related

- [Color System](./color-system.md) — Color paired with this type system
- [Brand Applications](./brand-applications.md) — Typography in context
- [Imagery Style](./imagery-style.md) — How typography interacts with imagery
- [../patterns/foundations/typography.md](../patterns/foundations/typography.md) — Token implementation
