import { FontSelector } from "@/components/font-selector";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProofBar } from "@/components/proof-bar";
import { Philosophy } from "@/components/philosophy";
import { Security } from "@/components/security";
import { EditorialBreak } from "@/components/editorial-break";
import { YieldSection } from "@/components/yield-section";
import { SpendCredit } from "@/components/spend-credit";
import { BorrowCredit } from "@/components/borrow-credit";
import { SocialProof } from "@/components/social-proof";
import { HowItWorks } from "@/components/how-it-works";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/motion";

/**
 * Atmospheric glow bridge between sections.
 * A full-width warm radial haze that overlaps the boundary between two sections,
 * dissolving any hard edge. Positioned with negative margin to straddle the seam.
 */
function SectionGlow({ intensity = "normal" }: { intensity?: "subtle" | "normal" | "strong" }) {
  const opacityMap = { subtle: 0.015, normal: 0.025, strong: 0.04 };
  const opacity = opacityMap[intensity];
  return (
    <div
      className="pointer-events-none relative z-10 -my-24 h-48 w-full md:-my-32 md:h-64"
      aria-hidden="true"
      style={{
        background: `radial-gradient(ellipse 80% 100% at 50% 50%, rgba(255,199,61,${opacity}) 0%, transparent 70%)`,
      }}
    />
  );
}

/**
 * Directional gradient bridge — fades from one bg color to another.
 * Creates a visible tonal shift rather than a glow.
 */
function SectionFade({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="pointer-events-none relative z-10 -my-16 h-32 w-full md:-my-24 md:h-48"
      aria-hidden="true"
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}

/**
 * Gold hairline rule — a thin decorative separator for visual punctuation.
 */
function SectionRule() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[var(--container-content)] px-4" aria-hidden="true">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,199,61,0.15) 20%, rgba(255,199,61,0.15) 80%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <ProofBar />
        <SectionGlow intensity="subtle" />
        <Philosophy />
        <EditorialBreak />
        <SectionGlow intensity="normal" />
        <YieldSection />
        <SectionRule />
        <SpendCredit />
        <SectionRule />
        <BorrowCredit />
        <SectionRule />
        <Security />
        <SectionRule />
        <SocialProof />
        <SectionRule />
        {/* <HowItWorks /> */}
        <CTASection />
      </main>
      <Footer />
      <FontSelector />
    </>
  );
}
