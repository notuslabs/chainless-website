# Imagery Style

> Phase: identity | Brand: chainless | Generated: 2026-03-22

---

## Design Philosophy

Chainless imagery serves the Magician+Ruler blend: it should simultaneously feel **aspirational** (Magician — "imagine this life of sovereignty") and **credible** (Ruler — "this is real, not a fantasy"). Every image answers the unspoken question: "Is this platform for someone like me?"

The 70/30 rule applies to imagery: 70% of images should communicate premium warmth (refined environments, crafted compositions, warm light). 30% should carry a subtle edge — an unexpected crop, a composition that suggests independence rather than compliance, a moment of quiet rebellion.

---

## Photography Direction

### Subjects

| Subject | Direction | Never |
|---------|-----------|-------|
| **People** | Hands on devices, over-shoulder views, people in their environments — never direct-to-camera hero shots | Stock model headshots, corporate group photos, obvious lifestyle casting |
| **Environments** | Clean desks, considered home offices, contemporary architecture, warm interiors with city views | Yachts, champagne, luxury goods, marble lobbies |
| **Devices** | Real devices in real contexts — phone on a wooden desk, laptop in a sunlit room | Floating phone mockups on gradient backgrounds, device in a void |
| **Details** | Hands holding a phone showing the app, fingers on a keyboard, a warm coffee beside a screen | Staged product shots with prop styling |
| **Architecture** | Modern, warm materials (wood, brass, concrete), generous spaces | Cold glass-and-steel corporate towers, sterile interiors |

### Compositions

- **Rule of thirds with generous negative space.** Let subjects breathe — the whitespace in our photography mirrors the whitespace in our layouts.
- **Shallow depth of field** for people/detail shots — creates intimacy and focus.
- **Wide establishing shots** for environments — shows the world the user inhabits.
- **Asymmetric framing** — the subject doesn't need to be centered. Off-center composition creates editorial tension.
- **Vertical rhythm in photography** — when multiple images are on a page, they should feel like they share a visual grammar, not a template.

### Lighting

| Directive | Specification |
|-----------|---------------|
| **Primary** | Warm natural light — golden hour, indirect window light, overcast warmth |
| **Color temperature** | 3800K–5000K range (warm daylight to golden hour) |
| **Direction** | Side-lit or back-lit preferred — creates depth and dimension |
| **Shadows** | Soft, present but not harsh — no clipped shadows, no flash-killed flatness |
| **Never** | Studio flash, ring light, blue-tinted office fluorescents, neon |

### Color Grading

All photography should receive consistent post-processing to align with the brand palette:

| Parameter | Direction |
|-----------|-----------|
| **White balance** | Warm — shift toward amber, away from blue |
| **Saturation** | Slightly desaturated (-10 to -15% from camera default) — editorial, not consumer-tech vibrant |
| **Contrast** | Medium — avoid both flat/washed-out and high-contrast/dramatic |
| **Blacks** | Lifted slightly (fade) — black point at ~5-10% creates the editorial/film look |
| **Highlights** | Warm — highlights roll off into warm cream, not hot white |
| **Skin tones** | Natural, warm — never orange, never pale. Represents diverse Brazilian skin tones authentically |
| **Overall mood** | "Warm afternoon in a well-designed space" — contemplative, confident, unhurried |

### Photography Do's and Don'ts

**Do:**
- Show environments that suggest success through taste, not display — a well-designed home office, a quality leather notebook beside a laptop
- Capture candid moments — someone checking their portfolio with a subtle smile, hands confidently navigating an interface
- Include Brazilian environmental cues subtly — tropical plants, warm light quality, contemporary Brazilian architecture
- Show diversity naturally — Brazilian demographic diversity without tokenism
- Use the app UI as a design element within lifestyle context

**Don't:**
- Stock photo clichés: handshake, group pointing at whiteboard, woman celebrating with fist pump
- Crypto visual clichés: physical Bitcoin coins, blockchain node graphics, matrix-style code, laser eyes
- Luxury signaling: watches, sports cars, designer goods, wealth-flaunting imagery
- Overly casual/young: skateboarding, festivals, street-style photography
- Fear-based imagery: worried faces looking at screens, red charts crashing
- Generic fintech: blue-tinted dashboards, anonymous business person silhouettes

---

## Illustration Style

Chainless uses illustration sparingly — photography carries the primary visual weight. When illustration appears, it serves a specific function.

### When to Use Illustration

- **Data visualization** — portfolio growth charts, allocation wheels, yield curves
- **Process diagrams** — how self-custody works, onboarding flow visualization
- **Empty states** — app screens with no data yet (warm, encouraging, minimal)
- **Error/loading states** — brand moments during wait times

### Illustration Principles

- **Minimal, geometric, warm.** Not playful cartoons, not complex hand-drawn, not 3D renders.
- **Line weight:** Consistent 1.5–2px strokes, rounded caps and joins
- **Color:** Use only the brand palette. Primary illustrations in `#1C1B19` with `#FFC73D` accent highlights.
- **No gradients, no shadows, no dimensional effects.** Flat, confident, precise.
- **Grid-based:** All illustrations sit on an 8px grid, maintaining the same spatial discipline as the UI.

---

## Iconography

### Style

| Property | Specification |
|----------|---------------|
| **Style** | Line-based, consistent stroke weight |
| **Stroke weight** | 1.5px (at 24px icon size) — scales proportionally |
| **Corners** | Rounded (2px radius at 24px size) |
| **Caps & Joins** | Round caps, round joins |
| **Grid** | 24×24px base with 2px padding (20×20px active area) |
| **Optical sizes** | 16px, 20px, 24px, 32px |
| **Fill** | Outline only for default state; filled variant for active/selected states |
| **Color** | Inherits from text color context (`currentColor`) — never hard-coded |

### Recommended Library

**Primary: Phosphor Icons** (phosphoricons.com)
- Clean, consistent line weight
- Excellent coverage for fintech/finance use cases
- Multiple weights (Thin, Light, Regular, Bold, Fill, Duotone)
- Available as React components, Vue, SVG sprites
- Open source (MIT license)

**Fallback: Lucide** (lucide.dev)
- If Phosphor lacks a specific icon, Lucide is the secondary source
- Similar line-based aesthetic, compatible visual weight
- Fork of Feather Icons with expanded set

### Icon Usage Rules

1. **Never mix icon libraries on the same page.** Choose Phosphor OR Lucide per context.
2. **Use the Regular weight** as default. Light for decorative contexts, Bold for emphasis.
3. **Icons always accompany text** for accessibility — never icon-only navigation without labels.
4. **Maintain 8px minimum gap** between icon and accompanying text.
5. **Icon color matches its text context** — never colored icons unless semantic (success green, error red).

---

## Data Visualization

Inspired by Stripe's approach to making data beautiful — data viz in Chainless is a design element, not just a chart.

### Principles

1. **Data is beautiful.** Portfolio growth curves, yield charts, and allocation wheels should be visually compelling enough to screenshot and share. This is the Ruler's domain — structured, precise, confident.
2. **Brand palette only.** Charts use the yellow scale, warm neutrals, and semantic colors. No rainbow pie charts, no default Chart.js colors.
3. **Generous whitespace in charts.** Charts have the same premium spacing as the rest of the brand.
4. **Animation is earned.** Charts animate on scroll-enter with smooth easing (ease-out, 800ms). Numbers count up. Lines draw progressively. But never gratuitous — animation serves comprehension.

### Visual Specifications

| Element | Specification |
|---------|---------------|
| **Line charts** | 2px stroke, rounded joins, `#FFC73D` for primary metric, `#6B6862` for secondary |
| **Area fills** | 8% opacity of the line color — subtle, not saturated |
| **Bar charts** | Rounded top corners (4px radius), `#FFC73D` primary, warm neutral secondary |
| **Pie/donut charts** | 2px gap between segments, brand palette colors, labels outside |
| **Grid lines** | `#E5E3DF` at 0.5px — visible but barely, letting data dominate |
| **Axis labels** | IBM Plex Mono, 13px, `#9C9890` — precise but unobtrusive |
| **Data labels** | IBM Plex Mono, 15px, `#1C1B19` — the data speaks clearly |
| **Tooltip** | Warm dark bg (`#1C1B19`), white text, yellow accent for key value, 8px radius, subtle shadow |

---

## UI Screenshot Treatment

When showing the Chainless app in marketing materials:

1. **In context, always.** Phone on a desk, laptop in an environment, tablet in hands. Never a floating device on a gradient.
2. **The UI is the proof.** If the app is well-designed, showing it IS the premium signal. Don't obscure it with heavy filters or small sizes.
3. **Perspective shots for hero moments.** Slight angle adds dimension and editorial quality.
4. **Flat/frontal for feature explanations.** When the user needs to read the UI, show it straight-on at a readable size.
5. **Device frames optional.** Browser chrome or device frame can add realism but shouldn't distract. Use minimal, contemporary frame styles.
6. **Screen content must be real (or realistic).** Never use lorem ipsum in marketing screenshots. Show real yield numbers, real portfolio structures, real UI states.

---

## Related

- [Color System](./color-system.md) — Photography color grading aligns with the brand palette
- [Typography](./typography.md) — Type treatment in imagery contexts
- [Brand Applications](./brand-applications.md) — Imagery applied to specific touchpoints
