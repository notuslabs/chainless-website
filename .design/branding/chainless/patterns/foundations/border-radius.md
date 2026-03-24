# Border Radius

> Phase: patterns | Brand: chainless | Generated: 2026-03-24

---

## Source of Truth

- Implementation: Tailwind v4 utilities across components

## Status: EXTEND

Border radius values are used consistently but not formally tokenized. This document extracts the observed scale and formalizes it.

---

## Radius Scale

| Token | Value | Tailwind | Usage |
|-------|------:|----------|-------|
| `radius-none` | 0px | `rounded-none` | Sharp edges (rare) |
| `radius-sm` | 4px | `rounded` | Focus rings, small badges |
| `radius-md` | 8px | `rounded-lg` | Buttons, inputs, chips |
| `radius-lg` | 12px | `rounded-xl` | Small cards, tooltips |
| `radius-xl` | 16px | `rounded-2xl` | Standard cards |
| `radius-2xl` | 24px | `rounded-3xl` | Large cards, modals |
| `radius-3xl` | 36px | `rounded-[2.25rem]` | Doppelrand outer shell |
| `radius-full` | 9999px | `rounded-full` | Pills, avatars, circular elements |

---

## Patterns (Extracted)

### Doppelrand Card

The brand-distinctive double-border card uses two radius levels:

```
Outer shell: rounded-[2.25rem] (36px)
Inner core:  rounded-3xl (24px, via Tailwind's default)
```

The outer shell is larger to accommodate the `p-1.5` (6px) gap between shells, maintaining visual concentricity.

### Buttons

```
Primary CTA: rounded-full (pill shape)
Secondary:   rounded-lg (8px)
```

### Inputs

```
Text inputs: rounded-lg (8px)
```

### Navigation

```
Nav container: rounded-full (pill shape on desktop)
Nav items:     rounded-full (pill hover states)
```

### Feature Cards

```
Standard card: rounded-2xl (16px) or rounded-3xl (24px)
Compact card:  rounded-xl (12px)
```

---

## Design Principle

Chainless uses **generous, soft radii** — never sharp corners on primary surfaces. The Doppelrand pattern's large radius (36px) is the most distinctive element. Buttons and nav use pill shapes (full radius) for a premium, approachable feel.

The radius scale increases with element size: small elements get smaller radii, large surfaces get larger radii. This creates visual consistency despite the numeric variation.
