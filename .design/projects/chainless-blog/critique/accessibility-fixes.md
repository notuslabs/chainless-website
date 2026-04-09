# Accessibility Fixes
> Phase: critique | Project: chainless-blog | Generated: 2026-04-08
> Standard: WCAG 2.2 AA

---

## Violations

| # | Issue | Severity | WCAG Criterion | Screen |
|---|-------|:--------:|----------------|--------|
| 1 | `warm-400` metadata text fails contrast | Major | 1.4.3 Contrast (Minimum) | Both |
| 2 | Mobile TOC drawer missing focus trap | Major | 2.1.2 No Keyboard Trap / 2.4.3 Focus Order | [Article](../design/screen-01-article-page.md) |
| 3 | Sticky elements may obscure focused content | Minor | 2.4.11 Focus Not Obscured (AA) | [Article](../design/screen-01-article-page.md) |
| 4 | TOC sidebar link targets may be too small | Minor | 2.5.8 Target Size (AA) | [Article](../design/screen-01-article-page.md) |

---

## Remediation

### Issue 1: `warm-400` metadata contrast (Major)

**Problem:** `warm-400` (`#87837C`) on `dark-500` (`#1C1B19`) produces a contrast ratio of 3.9:1. This is used for:
- Article card metadata (date, reading time) at 13px — Caption scale
- Inactive TOC headings at 15px
- Blog listing article count ("30 artigos") at 15px
- Figure captions at 13px

WCAG 1.4.3 requires 4.5:1 for normal text (<18pt / <14pt bold). All these uses are normal-size text.

**Fix options (choose one):**
1. **Upgrade to `warm-300`** (`#A4A097`): Contrast on dark-500 = 5.6:1 (AA pass). Slightly more visible but still clearly secondary. **Recommended.**
2. **Bump text to 18pt (24px) or 14pt bold (18.67px):** Would qualify as "large text" (3:1 threshold). Not practical — metadata text should stay small.
3. **Use `text-secondary` (`#B0ADA6`):** Contrast = 7.6:1 (AAA). More visible than needed for metadata — would reduce the hierarchy differential between body and metadata text.

**Recommendation:** Replace `warm-400` with `warm-300` for all metadata text contexts. Update the following design spec references:
- `screen-01-article-page.md`: ArticleMeta date color, TOC inactive headings, figure captions
- `screen-02-blog-listing.md`: Article count, inactive pagination, card metadata

---

### Issue 2: Mobile TOC focus trap (Major)

**Problem:** The collapsible TOC drawer on mobile/tablet opens as a disclosure widget below the TL;DR section. When open, it expands to show all heading links. However, no focus management is specified. A keyboard user could:
1. Open the TOC (Enter/Space on trigger)
2. Tab through heading links
3. Tab past the last link and into the article body, with the drawer still open
4. Lose context of where they are

**Fix:** Add to the TOC mobile specification:
```
Focus management:
- When drawer opens: focus moves to the first heading link
- Tab cycles within the drawer (focus trap)
- Escape key: close drawer, return focus to trigger
- Selecting a heading link: close drawer, scroll to heading, focus heading
- When drawer closes: focus returns to the trigger element
```

Implementation note: The `<details>/<summary>` native element does NOT provide focus trapping. Enhancement JavaScript is needed. Consider `@radix-ui/react-dialog` or a custom focus trap hook.

---

### Issue 3: Sticky element focus obscuring (Minor)

**Problem:** The navbar is sticky (implied). The TOC sidebar uses `sticky top-24` (96px). When a user tabs to a link near the top of the viewport, the navbar could overlap the focused element.

**Fix:** Add `scroll-padding-top` to the `<html>` element:
```css
html {
  scroll-padding-top: 96px; /* navbar height + buffer */
}
```

This ensures that when clicking TOC links (smooth scroll to heading), the heading appears below the navbar. Also ensures that when tabbing, focused elements are not obscured by sticky elements.

---

### Issue 4: TOC sidebar link target size (Minor)

**Problem:** Desktop TOC sidebar heading links are text-only with no explicit padding or minimum height. At 15px font with ~1.4 line-height, each link is approximately 21px tall. WCAG 2.5.8 requires 24x24 CSS pixels minimum.

**Fix:** Add vertical padding to TOC links:
```css
.toc-link {
  display: block;
  padding: 4px 0; /* creates ~29px total height (21px text + 8px padding) */
  min-height: 24px;
}
```

This also improves touch accuracy on hybrid devices (tablets with TOC sidebar visible at >=1024px).

---

## Cross-References

- Design critique prioritized fixes: [prioritized-fixes.md](./prioritized-fixes.md) — issues 1, 3, 5 overlap with accessibility concerns
- Article page design: [screen-01-article-page.md](../design/screen-01-article-page.md)
- Blog listing design: [screen-02-blog-listing.md](../design/screen-02-blog-listing.md)
