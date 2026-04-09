"use client";

import { motion } from "framer-motion";
import { FadeUp, TextReveal, EASE_PREMIUM } from "@/components/motion";
import { Eyebrow } from "@/components/eyebrow";

interface BlogHeroProps {
  articleCount: number;
  pillarCounts: { sovereignty: number; wealth: number; practical: number };
}

export function BlogHero({ articleCount, pillarCounts }: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark-500 pt-32 pb-0">
      {/* Atmospheric warm wash — left side */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full bg-yellow-500/[0.025] blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
      />
      {/* Right-side glow — lower */}
      <div
        className="pointer-events-none absolute right-[-10%] bottom-0 h-[var(--glow-md)] w-[var(--glow-md)] rounded-full bg-yellow-600/[0.018] blur-[var(--glow-blur-md)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[var(--container-content)] px-6">
        {/* Asymmetric layout — editorial voice left, data right */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[640px]">
            <FadeUp>
              <Eyebrow className="mb-6">Blog</Eyebrow>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1
                className="font-serif font-normal leading-[1.06] tracking-[-0.02em] text-text-primary"
                style={{
                  fontSize: "clamp(2.5rem, 2rem + 2.5vw, 4rem)",
                }}
              >
                <TextReveal delay={0.15}>
                  Soberania financeira começa com conhecimento.
                </TextReveal>
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-6 max-w-[460px] text-[clamp(0.9375rem,0.9rem+0.2vw,1.0625rem)] font-normal leading-[1.7] text-warm-300/70">
                Análises, guias e insights sobre autocustódia, rendimentos DeFi
                e o futuro do dinheiro.
              </p>
            </FadeUp>
          </div>

          {/* Right column — proof-bar style stats */}
          <FadeUp delay={0.4}>
            <div className="flex items-center gap-6 md:gap-8">
              <StatBlock
                value={String(articleCount).padStart(2, "0")}
                label={articleCount === 1 ? "artigo" : "artigos"}
                accent
              />
              <div className="h-8 w-px bg-warm-700/20" aria-hidden="true" />
              <StatBlock
                value={String(pillarCounts.sovereignty).padStart(2, "0")}
                label="soberania"
              />
              <div className="h-8 w-px bg-warm-700/20" aria-hidden="true" />
              <StatBlock
                value={String(pillarCounts.wealth).padStart(2, "0")}
                label="crescimento"
              />
              <div className="hidden h-8 w-px bg-warm-700/20 sm:block" aria-hidden="true" />
              <StatBlock
                value={String(pillarCounts.practical).padStart(2, "0")}
                label="prática"
                className="hidden sm:flex"
              />
            </div>
          </FadeUp>
        </div>

        {/* Gold hairline — animated */}
        <motion.div
          className="mt-14 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,199,61,0.15) 20%, rgba(255,199,61,0.15) 80%, transparent 100%)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE_PREMIUM }}
        />
      </div>
    </section>
  );
}

function StatBlock({
  value,
  label,
  accent = false,
  className = "",
}: {
  value: string;
  label: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <span
        className={`font-mono text-lg font-semibold tabular-nums tracking-tight md:text-xl ${
          accent ? "text-yellow-500/90" : "text-text-primary/80"
        }`}
      >
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-[0.15em] text-warm-500">
        {label}
      </span>
    </div>
  );
}
