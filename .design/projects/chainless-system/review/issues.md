# Issues — Chainless Design System QA Review

**Project:** chainless-system
**Date:** 2026-04-07
**Reviewer:** GSP QA Reviewer

---

## Issues Table

| # | Issue | Severity | File | Line | Expected | Actual | Remediation |
|---|-------|----------|------|:----:|----------|--------|-------------|
| 1 | Pure `bg-black` violates warm palette | Major | `landing/src/components/spend-credit.tsx` | 17 | `bg-dark-500` or warm dark token | `bg-black` (#000000) | Replace with `bg-dark-500` — single line change |
| 2 | Sub-12px shard labels | Major | `landing/src/components/security.tsx` | 147 | `text-xs` (12px) minimum | `text-[10px]` | Increase to `text-xs` or `text-caption` |
| 3 | Sub-12px store badge text | Major | `landing/src/components/hero.tsx` | 109, 140 | `text-xs` (12px) minimum | `text-[11px]` | Increase to `text-xs` |
| 4 | Sub-12px store badge text | Major | `landing/src/components/influencer-page.tsx` | 153, 176 | `text-xs` (12px) minimum | `text-[10px]` | Increase to `text-xs` |
| 5 | `chainless.yml` semantic colors stale | Minor | `.design/branding/chainless/patterns/chainless.yml` | 13-18 | A11y-fixed values (e.g., error: #E05555) | Pre-fix values (e.g., error: #C93B3B) | Update error, success, info, muted in YAML to match globals.css |
| 6 | Security section missing `<dl>` semantics | Minor | `landing/src/components/security.tsx` | 210-235 | `<dl>/<dt>/<dd>` per design spec | `<div>/<span>/<p>` structure | Refactor to definition list for better screen reader experience |
| 7 | Security trust strip not implemented | Minor | `landing/src/components/security.tsx` | — | 3-stat row below grid (design spec) | Missing | Add if desired — design simplification is acceptable |
| 8 | MPC card not sticky on desktop | Minor | `landing/src/components/security.tsx` | 257 | `md:sticky md:top-32` per design | Static card | Add sticky positioning if left column is taller |
| 9 | Sub-12px text in dev tools | Low | `landing/src/components/font-selector.tsx` | 137, 146, 165, 173, 195, 263, 264 | 12px minimum | `text-[10px]`, `text-[11px]` | Lower priority — dev-only component, not user-facing |
| 10 | Sub-12px text in dev tools | Low | `landing/src/components/card-style-switcher.tsx` | 29 | 12px minimum | `text-[11px]` | Lower priority — dev-only component |

---

## Severity Definitions

- **Critical:** Blocks acceptance. Must fix before shipping. _(None found)_
- **Major:** Significant deviation from design intent or brand rules. Should fix soon.
- **Minor:** Polish items, documentation gaps, missed optimizations.
- **Low:** Development tools or non-user-facing concerns.

---

## Issue Context

### Issues 1-4: Pre-existing from Critique Phase

These issues were identified in `critique/prioritized-fixes.md` (C3: bg-black, C4: sub-12px text) and `critique/accessibility-fixes.md` (P0-4, P1-1). The BUILD-LOG.md claims they were resolved in prior sessions, but grep confirms they persist in specific files. The bulk of instances were fixed — these are stragglers.

### Issue 5: Brand YAML Sync

The `tokens.json` was correctly updated with a11y-fixed values, but `chainless.yml` was missed. This file is consumed by tooling integrations, so stale values could propagate incorrect colors to downstream tools.

### Issues 6-8: Design Simplifications

The Security section implements the core design intent well. The missing `<dl>` semantics, trust strip, and sticky card are reasonable simplifications. The `<dl>` would improve screen reader navigation of the security layers. The trust strip and sticky card are nice-to-haves.

---

## Remediation Effort

| Priority | Issues | Estimated Effort |
|----------|--------|:----------------:|
| Fix now | #1 (bg-black) | 5 minutes |
| Fix now | #2-4 (sub-12px text) | 15 minutes |
| Fix now | #5 (YAML sync) | 10 minutes |
| Next iteration | #6 (dl semantics) | 30 minutes |
| Optional | #7-8 (trust strip, sticky) | 1-2 hours |
| Low priority | #9-10 (dev tools) | 15 minutes |

**Total for "fix now" items:** ~30 minutes
