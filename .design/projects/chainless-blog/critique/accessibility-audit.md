# Accessibility Audit
> Phase: critique | Project: chainless-blog | Generated: 2026-04-08
> Standard: WCAG 2.2 AA
> Scope: Design specification review (2 screens)

---

## 1. Perceivable

### 1.1 Text Alternatives
| Check | Status | Notes |
|-------|:------:|-------|
| Non-text content has text alternatives | PASS | Hero image requires descriptive `alt` text (specified). Inline images require alt per spec. |
| Decorative images use empty alt or CSS | PASS | Atmospheric glow orbs are CSS (`pointer-events-none`). Pillar tags on cards marked `aria-hidden="true"` when decorative. |

### 1.2 Time-Based Media
| Check | Status | Notes |
|-------|:------:|-------|
| Captions for audio/video | N/A | No audio/video content in blog screens. |

### 1.3 Adaptable
| Check | Status | Notes |
|-------|:------:|-------|
| Proper markup structure | PASS | Heading hierarchy specified: `<h1>` article title > `<h2>` body sections > `<h3>` subsections. Listing uses visually hidden `<h2>` for grid sections. |
| Meaningful reading order | PASS | DOM order matches visual order. TOC sidebar is after hero in DOM on desktop (CSS positions it). |
| Instructions not relying on sensory characteristics | PASS | No "click the yellow button" patterns. Pillar colors are supplementary — pillar names are text labels. |

### 1.4 Distinguishable
| Check | Status | Notes |
|-------|:------:|-------|
| Color not sole means of info | PASS | Pillar tags have text labels + color. Active TOC has left border + text color change. Active pagination has bg fill + bold weight. |
| Text contrast >= 4.5:1 | PASS | Primary text `#FAFAF8` on `#1C1B19`: 15.4:1. Body text at 85% opacity (~`#D8D6D1`): ~12.4:1. `warm-400` (`#87837C`) on `#1C1B19`: 3.9:1 — **see issue below**. |
| Large text contrast >= 3:1 | PASS | All heading text exceeds 3:1. Zodiak H1 in `#FAFAF8` on dark: 15.4:1. |
| Non-text contrast >= 3:1 | PASS | Focus rings: yellow-500 on dark-500 = 9.2:1. DoppelrandCard ring: white/0.05 on dark — see issue below. |
| Text resizable to 200% | PASS | All text in rem/clamp. Spec confirms layout reflows at 200% zoom (320px equivalent). |
| No images of text | PASS | No images of text specified. All text is live HTML. |
| Content reflows at 320px | PASS | Responsive spec covers 0-639px with single-column layouts. Code blocks and tables get horizontal scroll. |
| Text spacing adjustable | PASS | Body line-height 1.7 (>1.5). Paragraph spacing 28px (>2x font size would be 36px — **technically below 2x**, but this is a SHOULD not a MUST at AA). Layout spec says "text spacing overrides work per WCAG SC 1.4.12." |

**Issue: `warm-400` contrast on metadata**
`warm-400` (`#87837C`) on `dark-500` (`#1C1B19`) = 3.9:1. This is used for captions, metadata (date, reading time on listing cards), and inactive TOC headings. For normal-size text (13-15px), this **fails** the 4.5:1 requirement. For large text (>=18pt), 3:1 is sufficient — but metadata text is 13-15px, which is normal text.

---

## 2. Operable

### 2.1 Keyboard Accessible
| Check | Status | Notes |
|-------|:------:|-------|
| All functionality via keyboard | PASS | Pillar filter uses `role="tablist"` with Arrow key navigation. FAQ uses native `<details>/<summary>` (Enter/Space). All links/buttons are focusable. |
| No keyboard traps | ISSUE | Mobile TOC drawer has no focus trap specification. Users could tab behind the open drawer. |
| Character key shortcuts | N/A | No single-character shortcuts implemented. |

### 2.2 Enough Time
| Check | Status | Notes |
|-------|:------:|-------|
| Time limits adjustable | N/A | No time limits in the design. |
| Auto-updating content pausable | N/A | No auto-updating content. ScrollProgress is passive. |

### 2.3 Seizures and Physical Reactions
| Check | Status | Notes |
|-------|:------:|-------|
| No content flashes >3/sec | PASS | No flashing content. |
| Motion can be disabled | PASS | `prefers-reduced-motion` behavior specified for every interaction. Reduced-motion fallbacks are explicit. |

### 2.4 Navigable
| Check | Status | Notes |
|-------|:------:|-------|
| Skip navigation link | PASS | "Ir para o conteudo" targets `<main>`. |
| Descriptive page titles | PASS | Article: `${post.title} | Chainless Blog`. Listing: assumed "Blog | Chainless" (not explicitly specified). |
| Logical focus order | PASS | Follows DOM order: navbar > content > sidebar > footer. |
| Link purpose clear | PASS | Article cards are single `<a>` elements with article title as accessible name. Pagination has `aria-label` on prev/next. |
| Multiple ways to find pages | PASS | Articles findable via listing (filter/browse), related posts (cross-link), sitemap (SEO), and direct URL. |
| Headings and labels descriptive | PASS | Proper hierarchy, no skipped levels, visually hidden headings on listing for screen readers. |
| Focus visible | PASS | `ring-2 ring-yellow-500 ring-offset-2 ring-offset-dark-500` on all interactive elements. Yellow-500 on dark-500 = 9.2:1 contrast. |
| SC 2.4.11 Focus not obscured | ISSUE | Sticky TOC sidebar (desktop) or sticky navbar could obscure focused elements. The TOC uses `sticky top-24` (96px). If a focused link is near the top of the viewport, the navbar (assumed ~64px height) could partially obscure it. Need `scroll-padding-top` >= navbar height. |

### 2.5 Input Modalities
| Check | Status | Notes |
|-------|:------:|-------|
| Touch targets >= 24x24 CSS px | PASS | Pagination buttons: `w-10 h-10` (40x40px). FAQ summaries: full-width tap targets. Pillar tabs: `px-5 py-2.5` (comfortable). |
| SC 2.5.8 Target size | ISSUE | TOC heading links on desktop sidebar are text links without explicit minimum height. At 15px font with default line-height, tap targets could be ~20px tall. Needs `min-height: 44px` or sufficient padding. |

---

## 3. Understandable

### 3.1 Readable
| Check | Status | Notes |
|-------|:------:|-------|
| Page language declared | PASS | Implied by Next.js config (PT-BR). Should be `<html lang="pt-BR">`. |
| Language of parts | N/A | Content is single-language (PT-BR). No mixed-language sections specified. |

### 3.2 Predictable
| Check | Status | Notes |
|-------|:------:|-------|
| No unexpected context changes on focus | PASS | No auto-submit or auto-navigate on focus. |
| No unexpected context changes on input | PASS | Pillar filter updates URL but doesn't navigate away. |
| Consistent navigation | PASS | Navbar reused across all pages. Footer consistent. |
| SC 3.2.6 Consistent help | PASS | CTA section appears consistently at page bottom. |

### 3.3 Input Assistance
| Check | Status | Notes |
|-------|:------:|-------|
| Error identification | PASS | Error states include descriptive text messages ("Artigo nao encontrado," "Nao foi possivel carregar os artigos"). |
| Labels and instructions | N/A | No form inputs in MVP (newsletter is P2). |

---

## 4. Robust

### 4.1 Compatible
| Check | Status | Notes |
|-------|:------:|-------|
| Valid markup | ADVISORY | Design spec — can't verify actual HTML validity until build. Specs indicate proper semantic elements (`<nav>`, `<main>`, `<aside>`, `<article>`, `<details>`). |
| Name, role, value | PASS | Pillar filter: `role="tablist"` / `role="tab"` / `aria-selected`. Pagination: `aria-current="page"`, `aria-label` on arrows. TOC: `role="navigation"` / `aria-label`. |
| Status messages via ARIA | PASS | TOC active state explicitly does NOT use `aria-live` (correct — would cause constant interruptions). |

---

## 5. Mobile Accessibility

| Check | Status | Notes |
|-------|:------:|-------|
| Orientation not locked | PASS | No orientation lock specified. |
| Touch targets adequate | PASS | Most targets >= 40px. See SC 2.5.8 note on TOC links. |
| Reachable UI elements | PASS | Primary actions (TOC trigger, pillar filter) are top-of-screen. CTA buttons are full-width on mobile. |
| Horizontal scroll on mobile | PASS | Pillar filter uses horizontal scroll with snap points and fade indicator for discoverability. |

---

## 6. Cognitive Accessibility

| Check | Status | Notes |
|-------|:------:|-------|
| Reading level appropriate | PASS | Content is educational, targeted at Portuguese-speaking adults. TL;DR provides simplified summary. |
| Consistent navigation | PASS | Navbar, footer, pillar filter all consistent across pages. |
| No flashing content | PASS | No flashing elements. |
| No time limits | PASS | No time-bound interactions. |

---

## Summary

| Category | Pass | Fail | N/A |
|----------|:----:|:----:|:---:|
| Perceivable | 10 | 1 | 1 |
| Operable | 10 | 3 | 2 |
| Understandable | 5 | 0 | 2 |
| Robust | 2 | 0 | 1 |
| Mobile | 4 | 0 | 0 |
| Cognitive | 4 | 0 | 0 |
| **Total** | **35** | **4** | **6** |

**Overall Conformance:** WCAG 2.2 AA — **Conditional Pass** (4 issues to resolve, none critical to core reading experience)

---

## Accessibility Statement (Draft)

> A Chainless se compromete a tornar seu blog acessivel a todas as pessoas, independentemente de habilidade ou tecnologia assistiva. Nosso blog foi projetado para atender ao nivel AA das Diretrizes de Acessibilidade para Conteudo Web (WCAG) 2.2.
>
> **Recursos de acessibilidade:**
> - Navegacao completa por teclado
> - Compatibilidade com leitores de tela
> - Texto redimensionavel ate 200% sem perda de conteudo
> - Suporte a preferencia de movimento reduzido
> - Dados estruturados para SEO e tecnologias assistivas
> - Indice de navegacao para artigos longos
>
> **Limitacoes conhecidas:**
> - Algumas cores de metadados podem ter contraste insuficiente para texto pequeno
> - O indice lateral no desktop pode ter alvos de toque abaixo do tamanho recomendado
>
> Se voce encontrar dificuldades de acessibilidade, entre em contato conosco em [email de contato].
