# Micro-interactions
> Phase: design | Project: chainless-mobile | Generated: 2026-04-08

---

## Mobile-Specific Interactions

No new micro-interactions are introduced. This audit modifies existing interactions for mobile:

| Trigger | Animation | Duration | Easing | Mobile Change |
|---------|-----------|:--------:|--------|---------------|
| Scroll into ProofBar | AnimatedCounter count-up | 2000ms | Cubic ease-out | No change — animation is lightweight |
| Scroll into EditorialBreak | Frame scrubber + couplet crossfade | Scroll-driven | Linear (scroll) | **Replace with static image + CSS crossfade on mobile** |
| Swipe testimonial carousel | Snap to next card | Native scroll | Native snap | **Add dot indicator state update** |
| Scroll indicator dots | Active dot width transition | 300ms | ease-out | **New: dot width 6px→24px + color change** |
| Navbar scroll threshold | Pill position + blur change | 600ms | EASE_PREMIUM | No change |

## Reduced Motion Fallback

| Component | Normal | Reduced Motion |
|-----------|--------|----------------|
| EditorialBreak | Scroll-driven reveal | Static frame, both couplets visible |
| FadeUp | opacity + translateY + blur | Instant visibility, no transform |
| StaggerContainer | Sequential child reveal | All children visible immediately |
| AnimatedCounter | Number count-up | Final value shown immediately |
| MagneticButton | Cursor follow + scale | No cursor follow, standard hover |

## Performance Notes

All existing Framer Motion animations are GPU-accelerated (`transform` + `opacity`). The only CPU-intensive animation on mobile is the EditorialBreak canvas rendering, which this design replaces with a static image.

## Related

- [screen-05-editorial-break.md](../screen-05-editorial-break.md) — detailed mobile optimization
- [screen-07-social-proof.md](../screen-07-social-proof.md) — scroll indicator implementation
