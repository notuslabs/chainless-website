# Design
> Phase: design | Project: chainless-fees | Generated: 2026-04-07

## Screens

| Screen | File | Description |
|--------|------|-------------|
| Fees Page | [fees-page.md](./fees-page.md) | `/taxas` — fee schedule + gas fee explanation |

## Key Decisions

- Simplified fee model: 7 rows (collapsed LP operations into one line)
- Semantic `<table>` over `<dl>` for accessibility
- Gas fee section separate from platform fees (h2, 3 paragraphs: what/how/where)
- Follow existing content page pattern exactly (bg-surface, legal-prose, 780px, FadeUp)
- No tiers, no tabs, no calculator, no tooltips
- "Sem taxa" rendered with full visual weight (not muted)
