# Screen 07: SocialProof — Scroll Affordance
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Purpose

Add visible scroll affordance to the horizontal testimonial carousel on mobile. Currently the carousel uses `overflow-x-auto` with hidden scrollbar (`[scrollbar-width:none]`), making the horizontal scroll interaction invisible.

## Current Issues

- Cards: `w-[85vw]` on mobile — user sees one card plus a tiny sliver
- Scrollbar hidden: `[scrollbar-width:none]` + `[&::-webkit-scrollbar]:hidden`
- No visual indicator that more cards exist
- Snap: `snap-x snap-mandatory` + `snap-start` per card — snapping works but isn't discoverable
- Section padding: `px-4` instead of `px-6`
- Section spacing: `py-32` excessive on mobile

## Mobile Design (320px-640px)

### Strategy: Peek + Dots

Two changes to make the carousel discoverable:

#### 1. Card Width Reduction (Peek)

Reduce card width from `w-[85vw]` to `w-[80vw]` so the next card peeks in more visibly:

```
Cards:
  Before: className="w-[85vw] shrink-0 snap-start md:w-auto"
  After:  className="w-[78vw] shrink-0 snap-start sm:w-[85vw] md:w-auto"
```

At 320px: `78vw` = ~250px card width. With `gap-5` (20px) between cards, the next card shows ~50px of its left edge. This is enough to signal "swipe for more."

At 375px (iPhone): ~293px card width, ~62px peek.

#### 2. Scroll Indicator Dots

Add a dot indicator row below the carousel. 3 dots (one per card), the active one highlighted:

```
┌─────────────────────────────────────────┐
│  [Testimonial Card 1]    │ [Card 2 peek │
│                           │              │
└─────────────────────────────────────────┘
              ● ○ ○
```

Implementation: 

```tsx
// Track active card via IntersectionObserver on each card
const [activeIndex, setActiveIndex] = useState(0);

// Dots below carousel (mobile only)
<div className="mt-6 flex justify-center gap-2 sm:hidden">
  {testimonials.map((_, i) => (
    <div
      key={i}
      className={`h-1.5 rounded-full transition-all duration-300 ${
        i === activeIndex
          ? "w-6 bg-yellow-500/60"
          : "w-1.5 bg-warm-500/30"
      }`}
    />
  ))}
</div>
```

Active dot: elongated pill (6x24px), `bg-yellow-500/60`
Inactive dots: circle (6x6px), `bg-warm-500/30`
Transition: width + color animate over 300ms

#### 3. Padding + Spacing

```
Section:
  Before: className="relative overflow-hidden bg-dark-600 px-4 py-32 md:py-44"
  After:  className="relative overflow-hidden bg-dark-600 px-6 py-20 md:py-32 lg:py-44"
```

Carousel margin hack: the carousel uses `-mx-4` and `px-4` to allow cards to bleed to edges. Update to `-mx-6` and `px-6`:

```
Carousel container:
  Before: className="-mx-4 mt-20 flex ... px-4 ..."
  After:  className="-mx-6 mt-16 flex ... px-6 ... sm:-mx-4 sm:px-4 md:mx-0 md:px-0"
```

The `mt-20` (80px) gap between header and cards is generous on mobile. Reduce to `mt-16` (64px) for mobile, keep `mt-20` on sm+.

### Desktop (Unchanged)

At `md:` breakpoint, the carousel becomes a 3-column grid. Dots are hidden (`sm:hidden`). No changes to desktop layout.

## States

| State | Behavior |
|-------|----------|
| Default | 3 cards in horizontal scroll, first card visible, peek of second, dots below |
| Scrolled | Dot indicator updates as cards snap into view |
| Loading | Cards fade in via StaggerContainer/StaggerItem (existing animation) |
| Error | N/A — static testimonial content |
| Empty | N/A — hardcoded testimonials |

## Accessibility

- Carousel: `role="region"` with `aria-label="Testimonials"` (add if missing)
- Each card: `role="article"` or semantic `<blockquote>` (existing)
- Dot indicators: `aria-hidden="true"` (decorative — screen readers get all cards in DOM)
- `aria-roledescription="carousel"` on the scroll container
- Cards accessible via swipe gesture (native scroll) — no custom gesture handling needed
- All cards always in DOM — screen reader reads all three regardless of visual position

## Image Resources

No changes. Avatar images (`testimonial-renato.jpg`, etc.) and ping-pong video background are unchanged. Reducing card width doesn't affect the avatar or quote layout.
