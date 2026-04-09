# Alternative Directions
> Phase: critique | Project: chainless-blog | Generated: 2026-04-08

---

## Direction A: "Editorial Magazine"

**Concept:** Lean harder into the Zodiak editorial identity. Instead of the current approach (Zodiak for H1 only, then Switzer takes over), use Zodiak for all article headings (H1-H3) and pull quotes, creating a more magazine-like reading experience. The article page feels like a premium print publication translated to web.

**Key changes:**
- H2 and H3 in Zodiak 400 (not Switzer 600) — editorial continuity through the entire article
- Larger pull quotes (28px Zodiak Light) with wider margins, used as visual breaks every 600 words
- Drop caps on the first paragraph of each article (Zodiak 700, 3-line drop)
- Featured article on listing uses a larger image (16:9 full-bleed within card) with text overlay
- Section dividers between major H2 sections (thin yellow-500 horizontal rule, 80px wide, centered)

**Trade-offs:**
- *Pro:* Stronger brand differentiation. No competitor uses a serif for body headings — this would be immediately recognizable.
- *Pro:* More visually varied reading experience, reducing scroll fatigue for 2,500-word articles.
- *Con:* Zodiak has no italic cuts — H3s in serif without italic creates a less flexible heading hierarchy.
- *Con:* Zodiak's weight gap (no 500/600) means H2 and H3 differentiation must come entirely from size, not weight.
- *Con:* More complex prose styling, harder to maintain. Every heading level is a font-switch context.

---

## Direction B: "Data-First Reader"

**Concept:** Lean into the technical audience (Rafael persona) and the comparative financial data that many articles will contain (CDI vs DeFi yields, fee structures, protocol comparisons). Redesign the article page around data visualization and structured comparison, rather than pure long-form prose.

**Key changes:**
- Article layout adds a "key metrics" sidebar on desktop (alongside or replacing the TOC) that shows the article's core data points (e.g., "CDI: 13.5% / Chainless Earn: 18.2% / Diferenca: +4.7%")
- Comparison tables become first-class components with branded styling: Doppelrand-bordered rows, yellow-500 highlight on the winning column, IBM Plex Mono for all numbers
- Inline "data cards" within the prose — small Doppelrand cards that highlight a single stat or comparison, floated right on desktop
- TL;DR box becomes a "Key Takeaways" card with numbered points and the primary data comparison
- Code blocks enhanced with copy-to-clipboard and language badges

**Trade-offs:**
- *Pro:* Differentiates from competitors who all do the same long-form prose layout. Addresses Rafael's need to "compare yield tables carefully."
- *Pro:* Better featured snippet capture — Google extracts structured data more effectively than prose.
- *Con:* Not all articles are data-heavy. Sovereignty/education articles are narrative, not comparative. This direction would feel forced on non-data content.
- *Con:* Significantly more complex component library (data cards, comparison tables, metric sidebars). Increases build scope.
- *Con:* Risks making the blog feel like a dashboard rather than an editorial publication. Moves away from the "premium editorial" positioning toward "fintech tool."

---

## Recommendation

The current design (Option C, the "Content-First Editorial") is the strongest direction for launch. It serves all three content pillars equally and maintains the premium brand feel. Direction A is a viable evolution if the blog establishes itself and wants stronger visual identity. Direction B should be considered selectively — data-heavy articles in the "Crescimento" pillar could use enhanced comparison components as a P2 addition without redesigning the entire article template.
