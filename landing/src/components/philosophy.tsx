"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_PREMIUM, FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { Eyebrow } from "./eyebrow";
import { DoppelrandCard } from "./doppelrand-card";
import { useDictionary } from "./dictionary-provider";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const pillarImages = [
  `${BASE}/philosophy-1.jpg`,
  `${BASE}/philosophy-2.jpg`,
];

export function Philosophy() {
  const { dict } = useDictionary();
  const t = dict.philosophy;

  return (
    <section
      id="sobre"
      aria-labelledby="philosophy-heading"
      className="relative bg-dark-500 px-6 py-20 md:py-32 lg:py-44"
    >
      {/* Atmospheric warm wash — left side */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full bg-yellow-500/[0.02] blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
      />
      {/* Right-side glow */}
      <div
        className="pointer-events-none absolute right-0 bottom-1/3 h-[var(--glow-md)] w-[var(--glow-md)] rounded-full bg-yellow-600/[0.015] blur-[var(--glow-blur-md)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[var(--container-content)]">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow className="mb-5">{t.eyebrow}</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="philosophy-heading"
                className="max-w-[520px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary"
              >
                {t.heading}
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[320px] text-small leading-[1.7] text-warm-300/70 md:text-right">
              {t.subtitle}
            </p>
          </FadeUp>
        </div>

        {/* ── Pillar cards ── */}
        <StaggerContainer className="mt-20 space-y-6">
          {t.pillars.map((pillar: any, i: number) => {
            return (
              <StaggerItem key={pillar.title}>
                <DoppelrandCard
                  gradientAngle={i === 0 ? 165 : 195}
                  variant={i === 0 ? "default" : "light"}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Image area — always left */}
                    <div className="relative h-[200px] sm:h-[280px] md:col-span-5 md:h-full md:min-h-[420px]">
                      <Image
                        src={pillarImages[i]}
                        alt={pillar.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 42vw"
                      />
                      {/* Dark warm tint */}
                      <div className="absolute inset-0 bg-dark-500/30 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-yellow-900/8" />
                      {/* Inner edge refraction */}
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
                      {/* Fade into card content on right */}
                      <div
                        className="absolute inset-0 hidden md:block"
                        style={{
                          background:
                            "linear-gradient(to right, transparent 0%, transparent 50%, rgba(28,27,25,0.7) 85%, rgba(28,27,25,0.95) 100%)",
                        }}
                      />
                      {/* Mobile bottom fade */}
                      <div
                        className="absolute inset-x-0 bottom-0 h-24 md:hidden"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent 0%, rgba(28,27,25,0.9) 100%)",
                        }}
                      />
                    </div>

                    {/* Content area — always right */}
                    <div className="relative flex flex-col justify-center p-6 sm:p-8 md:col-span-7 md:p-12 lg:p-16">
                      {/* Overline */}
                      <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-yellow-500/80">
                        {pillar.overline}
                      </span>

                      {/* Title */}
                      <h3 className="mb-5 font-serif text-2xl font-normal leading-[1.1] tracking-[-0.01em] text-text-primary md:text-[1.75rem]">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="max-w-[42ch] text-small leading-[1.7] text-warm-300/70">
                        {pillar.description}
                      </p>

                      {/* Bottom accent hairline */}
                      <motion.div
                        className="mt-8 h-px w-16 bg-gradient-to-r from-yellow-500/25 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        style={{ originX: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.5,
                          ease: EASE_PREMIUM,
                        }}
                      />
                    </div>
                  </div>
                </DoppelrandCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
