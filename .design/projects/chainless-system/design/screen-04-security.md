# Screen 04 — Security Section

> Phase: design | Project: chainless-system | Generated: 2026-04-05
> Position: After Philosophy, before YieldSection (between sovereignty message and product sections)

---

## Purpose

Establish trust and technical credibility before the conversion funnel. Security is the critical gap between "we believe in sovereignty" (Philosophy) and "here's what you can do" (Yield/Spend/Borrow). Without it, the sovereignty claim is unsubstantiated.

Two personas need different things from this section:
- **Ricardo (HNW, 40-55):** Reassurance that his wealth is safe. Wealth language, not crypto jargon. "Quiet confidence."
- **Marina (crypto-native, 28-38):** Technical credibility. She knows what MPC is — she wants proof Chainless does it right.

## Page Flow Position

```
Hero -> ProofBar -> Philosophy -> [SECURITY] -> Editorial -> Yield -> Spend -> Borrow -> ...
```

The section bridges philosophy (why) to product (what) with architecture (how).

---

## Layout

### Section Container

```
<section> bg-dark-500 px-4 py-32 md:py-44
  Atmospheric glows (left + right, standard pattern)
  max-w-[var(--container-content)] mx-auto
```

### Section Header (standard pattern)

```
Flex row: left (Eyebrow + Heading) | right (Subtitle)

Eyebrow: "Seguranca" (glass pill, yellow text, standard Eyebrow component)
Heading: serif, --text-section-heading, text-text-primary
  "Sua riqueza. Sua arquitetura."
Subtitle: text-small, text-warm-300/60, max-w-[320px], right-aligned on md+
  "Quatro camadas de protecao que operam em silencio - para que voce nao precise pensar nelas."
```

### Primary Content: 4-Layer Security Stack

The core visual metaphor is a **vertical stack of security layers** — each layer builds on the one below, creating a sense of depth and compounding protection. This mirrors the actual architecture: biometric > hardware enclave > MPC > recoverability.

#### Layout: 2-column asymmetric grid

```
md:grid-cols-12 gap-6
  Left column (md:col-span-7): Security layers stack
  Right column (md:col-span-5): "Como funciona o MPC" deep-dive card
```

On mobile: single column, layers stack first, MPC card below.

---

### Left Column: Security Layers (md:col-span-7)

A single tall DoppelrandCard containing 4 stacked layers. Each layer is a horizontal row separated by subtle hairline dividers (`border-warm-700/[0.12]`).

```
<DoppelrandCard gradientAngle={165}>
  <div class="p-8 md:p-10">
    [Layer 1]
    ---hairline---
    [Layer 2]
    ---hairline---
    [Layer 3]
    ---hairline---
    [Layer 4]
  </div>
</DoppelrandCard>
```

#### Layer 1: Biometric Lock

```
Row: icon-area | content
  Icon: Shield with fingerprint concept
    - 40x40 container, rounded-xl, bg-yellow-500/[0.07], border border-yellow-500/20
    - Phosphor icon: Fingerprint (weight: duotone, 24px, text-yellow-500/80)
  Content:
    Label: text-caption uppercase tracking-[0.2em] text-yellow-500/70
      "Biometria obrigatoria"
    Title: text-base font-medium text-text-primary/90 mt-1
      "Cada transacao exige sua digital ou Face ID."
    Detail: text-caption text-warm-300/50 mt-1.5
      "Verificacao executada no hardware do dispositivo, nao por software."
```

#### Layer 2: Hardware Enclave

```
Row: icon-area | content
  Icon: Cpu concept
    - Same container style as Layer 1
    - Phosphor icon: Cpu (weight: duotone, 24px, text-yellow-500/80)
  Content:
    Label: "Armazenamento no hardware"
    Title: "Sua chave privada nunca sai do processador seguro."
    Detail: two-line with platform specifics:
      "Apple Secure Enclave · Android StrongBox — coprocessadores dedicados com memoria criptografada propria."
```

#### Layer 3: MPC (Multi-Party Computation)

```
Row: icon-area | content
  Icon: GitBranch or Shapes concept (representing distributed shards)
    - Same container style
    - Phosphor icon: ShareNetwork (weight: duotone, 24px, text-yellow-500/80)
  Content:
    Label: "Computacao multipartidaria"
    Title: "Ninguem possui sua chave. Nem nos."
    Detail: "Fragmentos criptografados, distribuidos e continuamente regenerados. Nenhuma pessoa — nem a equipe Chainless — sabe onde todos os fragmentos estao."
```

#### Layer 4: Recoverability

```
Row: icon-area | content
  Icon: ArrowCounterClockwise or ShieldCheck concept
    - Same container style
    - Phosphor icon: ArrowCounterClockwise (weight: duotone, 24px, text-yellow-500/80)
  Content:
    Label: "Recuperacao integrada"
    Title: "Auto-custodia sem o medo de perder tudo."
    Detail: "Diferente de carteiras tradicionais, sua conta pode ser recuperada via sua conta Google ou Apple. Soberania com rede de seguranca."
```

#### Layer Visual Treatment

Each layer row:
```
flex items-start gap-5 py-6
  first:pt-0 last:pb-0
  border-b border-warm-700/[0.12] last:border-b-0
```

Stagger entrance: each layer fades in with 0.08s delay offset (StaggerContainer + StaggerItem wrapping each row).

---

### Right Column: MPC Deep-Dive Card (md:col-span-5)

A standalone DoppelrandCard with deeper technical content for Marina. This card has a distinct treatment — slightly more elevated, with a subtle shield/lock motif.

```
<DoppelrandCard
  className="h-full md:sticky md:top-32"
  innerClassName="flex flex-col p-8 md:p-10"
  variant="light"
  gradientAngle={195}
>
```

**Sticky behavior:** On desktop, this card is `md:sticky md:top-32` so it stays visible as the user scrolls through the layers on the left. The left column is naturally taller, so the sticky card tracks alongside.

#### Card Content

```
Overline: text-xs uppercase tracking-[0.2em] text-yellow-500/80
  "Tecnologia MPC"

Heading: font-serif text-xl md:text-2xl font-normal leading-[1.15] tracking-[-0.01em] text-text-primary
  "Como o MPC protege sua chave."

Body: text-sm leading-relaxed text-warm-300/60 mt-4
  "Sua chave privada e dividida em fragmentos criptografados usando um protocolo de assinatura por limiar. Esses fragmentos sao armazenados em locais separados e nao divulgados — e regenerados continuamente."

Visual: MPC Shard Diagram (CSS-only)
  A minimal diagram showing 3 nodes connected by dashed lines, with a central
  "key" icon. Each node is a small circle (w-3 h-3 rounded-full) with different
  positions, connected by thin dashed borders. The entire diagram sits in a
  bg-dark-600/50 rounded-2xl p-6 container.

  Node colors:
    - yellow-500/40 (primary shard)
    - yellow-500/25 (secondary shard)
    - yellow-500/15 (tertiary shard)

  Dashed connection lines: border-dashed border-warm-700/20

  Center icon: Lock (Phosphor, 20px, text-yellow-500/50)

  This diagram is decorative but aids comprehension. Not an SVG illustration —
  pure Tailwind divs with absolute positioning.

  Subtle animation: nodes pulse at different rates (1.5s, 2.2s, 3s) with
  opacity 0.3->0.6->0.3 cycle. Use CSS @keyframes, not Framer Motion, to avoid
  JS overhead for decorative animation. Respect prefers-reduced-motion.

Credential badges: mt-6 flex flex-wrap gap-2
  Small pill badges for trust signals:
  - "Codigo aberto" — rounded-full border border-warm-700/20 bg-warm-800/25 px-3 py-1 text-caption text-warm-300/60
  - "Zero vulnerabilidades" — same style
  - "Auditado" — same style

CTA link: mt-auto pt-8
  "Veja como o MPC funciona" with right arrow icon
  text-sm font-medium text-yellow-500/90 hover:text-yellow-500 transition
  Inline link style (not button) — underline-offset-4 decoration-yellow-500/30 hover:decoration-yellow-500/60
  Links to a future /security or /mpc page (href="#mpc" as placeholder)
```

---

### Bottom Trust Strip (optional reinforcement)

Below the 2-column grid, a subtle stats row providing social proof for the security claims. Separated by `mt-16`.

```
<FadeUp delay={0.4}>
  <div class="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
    Stat 1: "0" + "vulnerabilidades MPC descobertas" (font-mono text-2xl text-text-primary + text-caption text-warm-400/45)
    Stat 2: "24/7" + "regeneracao de fragmentos" (same style)
    Stat 3: "100%" + "transacoes com biometria" (same style)
  </div>
</FadeUp>
```

Stats use `font-mono` (IBM Plex Mono) for the numbers — "Architecture is the Brand" principle. The `tabular-nums` class ensures even spacing.

---

## Components Used

| Component | Source | Usage |
|-----------|--------|-------|
| `DoppelrandCard` | `doppelrand-card.tsx` | Layers card (default), MPC card (light variant) |
| `Eyebrow` | `eyebrow.tsx` | Section label |
| `FadeUp` | `motion.tsx` | Section header, trust strip |
| `StaggerContainer` + `StaggerItem` | `motion.tsx` | Layer rows entrance |
| `EASE_PREMIUM` | `motion.tsx` | Hairline animation |
| Phosphor Icons | `@phosphor-icons/react` | Fingerprint, Cpu, ShareNetwork, ArrowCounterClockwise, Lock, ArrowRight |

---

## States

### Default
Full content visible with all 4 layers and MPC card. Animations trigger on scroll into viewport.

### Loading
Not applicable — this is static content, no data fetching.

### Empty
Not applicable — content is editorial, not data-driven.

### Error
Not applicable — no dynamic data source.

---

## Interactions

| Trigger | Element | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Scroll into viewport | Eyebrow | FadeUp (opacity 0->1, y 40->0, blur 10->0) | 0.9s | EASE_PREMIUM |
| Scroll into viewport | Heading | FadeUp, delay 0.1s | 0.9s | EASE_PREMIUM |
| Scroll into viewport | Subtitle | FadeUp, delay 0.2s | 0.9s | EASE_PREMIUM |
| Scroll into viewport | Layer rows | Stagger entrance, 0.08s between items | 0.8s each | EASE_PREMIUM |
| Scroll into viewport | MPC card | FadeUp, delay 0.3s | 0.9s | EASE_PREMIUM |
| Scroll into viewport | Trust strip | FadeUp, delay 0.4s | 0.9s | EASE_PREMIUM |
| Scroll into viewport | Gold hairline (bottom of layers card) | scaleX 0->1, originX 0 | 1s, delay 0.5s | EASE_PREMIUM |
| Continuous (CSS) | MPC shard nodes | opacity pulse (0.3->0.6->0.3) at different rates | 1.5s / 2.2s / 3s | ease-in-out |
| Hover | "Veja como o MPC funciona" link | underline opacity increase, text color brighten | 200ms | ease |
| Hover | DoppelrandCard outer ring | ring-white/[0.05] -> ring-white/[0.07], -translate-y-px | 700ms | ease-premium |

### Reduced Motion

When `prefers-reduced-motion: reduce` is active:
- All FadeUp/Stagger animations are disabled (elements render in final state)
- MPC shard node pulsing stops (nodes at static 0.4 opacity)
- Hover transitions on link and cards remain (they're interaction feedback, not decorative)

---

## Accessibility

### Semantic HTML

```html
<section id="seguranca" aria-labelledby="security-heading">
  <h2 id="security-heading">Sua riqueza. Sua arquitetura.</h2>
  <!-- Layers use a definition list for semantic structure -->
  <dl>
    <div> <!-- Layer group -->
      <dt>Biometria obrigatoria</dt>
      <dd>Cada transacao exige sua digital ou Face ID. Verificacao executada no hardware...</dd>
    </div>
    ...
  </dl>
</section>
```

### VoiceOver / Screen Reader Order

1. Eyebrow: "Seguranca"
2. Heading: "Sua riqueza. Sua arquitetura."
3. Subtitle paragraph
4. Layers card heading (implicit via dl structure)
5. Layer 1: label, title, detail
6. Layer 2: label, title, detail
7. Layer 3: label, title, detail
8. Layer 4: label, title, detail
9. MPC card: overline, heading, body, credential badges, CTA link
10. Trust strip: stat 1, stat 2, stat 3

### Focus Management

- CTA link ("Veja como o MPC funciona") receives standard focus ring (2px yellow-500, offset 2px)
- All decorative elements (atmospheric glows, shard diagram, hairlines) have `aria-hidden="true"`
- Phosphor icons in layer rows have `aria-hidden="true"` (labels carry the meaning)

### Contrast

All text combinations verified against brand WCAG audit:
- `text-text-primary` (#FAFAF8) on dark gradient: 16.5:1 (AAA)
- `text-warm-300/60` on dark gradient: ~5.2:1 (AA) — acceptable for supplementary text at 15px+
- `text-yellow-500/80` on dark gradient: ~8.9:1 (AAA) — overline/labels
- `text-yellow-500/90` on dark gradient: ~10:1 (AAA) — CTA link
- Trust strip `text-warm-400/45` on dark-500: check at build — may need opacity bump to /50 for 4.5:1

### Language

All copy in Portuguese (PT-BR). `lang="pt-BR"` inherited from root html element.

---

## Responsive Behavior

### Mobile (< 768px)

- Section: `py-32 px-4`
- Header: stacked vertically (flex-col), subtitle left-aligned
- Grid collapses to single column
- Layers card: full width, `p-8`
- MPC card: full width below layers card, `mt-6`
- MPC card loses sticky behavior
- Trust strip: stacked vertically, centered text
- Shard diagram scales down proportionally (container `p-4`)

### Tablet (768px - 1023px)

- Section: `py-36 px-4`
- Header: flex-row with subtitle right-aligned
- Grid: `md:grid-cols-12` applies — 7/5 split
- MPC card sticky kicks in at `md:top-32`
- Trust strip: horizontal row

### Desktop (1024px+)

- Section: `py-44 px-4`
- Full 7/5 asymmetric grid with generous gap-6
- MPC card sticky scroll-tracking
- Atmospheric glows fully visible
- Maximum breathing room between layers (py-6 per row)

---

## Image Resources

No photography in this section. The security theme calls for **architectural clarity**, not stock imagery. All visual communication through:

1. **Phosphor icons** (duotone weight) — consistent with existing icon usage across the landing
2. **CSS-only shard diagram** — pure divs, no external assets
3. **Typographic hierarchy** — the layer structure itself is the visual
4. **Atmospheric glows** — standard section treatment from the brand system

This aligns with the "quiet confidence" direction: the architecture speaks for itself.

---

## Copy (PT-BR, final)

### Section Header

- **Eyebrow:** Seguranca
- **Heading:** Sua riqueza. Sua arquitetura.
- **Subtitle:** Quatro camadas de protecao que operam em silencio -- para que voce nao precise pensar nelas.

### Layer 1: Biometric

- **Label:** Biometria obrigatoria
- **Title:** Cada transacao exige sua digital ou Face ID.
- **Detail:** Verificacao executada no hardware do dispositivo, nao por software.

### Layer 2: Hardware Enclave

- **Label:** Armazenamento no hardware
- **Title:** Sua chave privada nunca sai do processador seguro.
- **Detail:** Apple Secure Enclave. Android StrongBox. Coprocessadores dedicados com memoria criptografada propria.

### Layer 3: MPC

- **Label:** Computacao multipartidaria
- **Title:** Ninguem possui sua chave. Nem nos.
- **Detail:** Fragmentos criptografados, distribuidos e continuamente regenerados. Nenhuma pessoa -- nem a equipe Chainless -- sabe onde todos os fragmentos estao.

### Layer 4: Recoverability

- **Label:** Recuperacao integrada
- **Title:** Auto-custodia sem o medo de perder tudo.
- **Detail:** Diferente de carteiras tradicionais, sua conta pode ser recuperada via sua conta Google ou Apple. Soberania com rede de seguranca.

### MPC Card

- **Overline:** Tecnologia MPC
- **Heading:** Como o MPC protege sua chave.
- **Body:** Sua chave privada e dividida em fragmentos criptografados usando um protocolo de assinatura por limiar. Esses fragmentos sao armazenados em locais separados e nao divulgados -- e regenerados continuamente.
- **Badges:** Codigo aberto / Zero vulnerabilidades / Auditado
- **CTA:** Veja como o MPC funciona ->

### Trust Strip

- **Stat 1:** 0 / vulnerabilidades MPC descobertas
- **Stat 2:** 24/7 / regeneracao de fragmentos
- **Stat 3:** 100% / transacoes com biometria

---

## Voice Notes

The copy follows the Magician 70% / Ruler 30% split:

- **Magician (transformation):** "Sua riqueza. Sua arquitetura." — your wealth transforms into something you architect. "Auto-custodia sem o medo de perder tudo" — the impossible becomes possible.
- **Ruler (authority):** The layer structure itself is Ruler energy — organized, systematic, authoritative. The trust strip's hard numbers (0, 24/7, 100%) are Ruler proof points.
- **Bold, defiant:** "Ninguem possui sua chave. Nem nos." — direct confrontation of the custody norm.
- **Warm:** "para que voce nao precise pensar nelas" — the complexity serves you, you don't serve it.

No crypto jargon in the primary layer titles (Ricardo-friendly). Technical depth lives in the MPC card and detail lines (Marina-friendly). The split layout lets both personas find their content without either feeling alienated.
