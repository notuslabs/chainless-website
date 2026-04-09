# Responsive Behavior
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Breakpoint Strategy

Using Tailwind v4 defaults. This audit focuses on the **default (0px) to sm (640px)** range.

| Breakpoint | Width | Horizontal Padding | Section Vertical Padding |
|------------|------:|:-------------------:|:------------------------:|
| Default (mobile) | 0-639px | 24px (`px-6`) | 80px (`py-20`) |
| `sm` | 640-767px | 24px (`px-6`) | 80px (`py-20`) |
| `md` | 768-1023px | 24px-32px | 128px (`py-32`) |
| `lg` | 1024-1279px | 32px | 128-176px (`py-32` / `py-44`) |
| `xl+` | 1280px+ | 32px | 176px (`py-44`) |

## Component Responsive Summary

| Component | Mobile (< 640px) | Tablet (640-1023px) | Desktop (1024px+) |
|-----------|-------------------|--------------------|--------------------|
| Navbar | Logo + hamburger, 44px tap targets | Same as mobile | Full pill with all links |
| Hero | Single `px-6`, `py-20` | Existing layout | Existing layout |
| ProofBar | Stacked `grid-cols-1` | `grid-cols-3` (sm+) | `grid-cols-3` |
| Philosophy | `h-[200px]` images, `p-6` cards | `h-[280px]`, `p-8` | 12-col grid, side-by-side |
| EditorialBreak | Static keyframe, `h-[200vh]` | Full 121-frame scrubber | Full scrubber, `h-[320vh]` |
| YieldSection | `p-6` cards, `px-6` section | `p-8` cards | Full bento layout |
| SpendCredit | `bg-dark-500`, `px-6`, `py-20` | Existing layout | 12-col grid |
| BorrowCredit | `p-5` cards | `p-8` cards | Full card grid |
| Security | Compact stacked, visual break at midpoint | 2-col grid | 2-col grid |
| SocialProof | `w-[78vw]` cards + dots | `w-[85vw]` cards | 3-col grid |
| CTASection | Reduced fades, stacked buttons | Existing layout | Existing layout |
| Footer | 2-col link grid | Existing layout | 12-col grid |

## 320px Width Floor

Critical components tested at 320px:

| Component | 320px Status | Fix |
|-----------|:------------:|-----|
| ProofBar | Overflow (was) | Stacked layout eliminates overflow |
| Hero | Double padding (was) | Single `px-6` = 272px content width |
| SocialProof | Hidden scroll (was) | Peek + dots make carousel discoverable |
| All sections | 16px gutter (was) | 24px gutter matches brand spec |

## iOS Safari Specifics

- `100dvh` used in Hero — handles dynamic viewport height correctly
- Fixed navbar tested with elastic scroll
- `backdrop-filter: blur()` compositing monitored for older devices
- Video `playsInline muted` for autoplay compatibility

## Android Chrome Specifics

- Video autoplay with `playsInline muted` — compatible
- EditorialBreak static image fallback on mobile — eliminates canvas stutter risk
- `snap-x snap-mandatory` carousel — native scroll behavior

## Related

- [screen-13-global-padding.md](../screen-13-global-padding.md) — full padding/spacing change list
- [screen-05-editorial-break.md](../screen-05-editorial-break.md) — mobile performance strategy
