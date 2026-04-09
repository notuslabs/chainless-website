"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  ShieldCheck,
  GitFork,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import { type ElementType } from "react";
import { FadeUp, StaggerContainer, StaggerItem, EASE_PREMIUM } from "./motion";
import { Eyebrow } from "./eyebrow";
import { DoppelrandCard } from "./doppelrand-card";
import { useDictionary } from "./dictionary-provider";

const layerIcons = [Fingerprint, ShieldCheck, GitFork, ArrowsClockwise];
const layerNumbers = ["01", "02", "03", "04"];

/* ── Layer icon ── */

function LayerIcon({ icon: Icon, index }: { icon: ElementType; index: number }) {
  return (
    <motion.div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-yellow-500/15 bg-yellow-500/[0.06] sm:h-10 sm:w-10"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.08,
        ease: EASE_PREMIUM,
      }}
    >
      <Icon size={20} weight="duotone" className="text-yellow-500/70" />
    </motion.div>
  );
}

/* ── Security Section ── */

export function Security() {
  const { dict } = useDictionary();
  const t = dict.security;

  return (
    <section
      id="seguranca"
      aria-labelledby="security-heading"
      className="relative bg-dark-500 px-6 py-20 md:py-32 lg:py-44"
    >
      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[var(--glow-lg)] w-[var(--glow-lg)] rounded-full bg-yellow-500/[0.02] blur-[var(--glow-blur-lg)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/3 right-0 h-[var(--glow-md)] w-[var(--glow-md)] rounded-full bg-yellow-600/[0.015] blur-[var(--glow-blur-md)]"
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
                id="security-heading"
                className="max-w-[520px] font-serif text-[length:var(--text-section-heading)] font-normal leading-[1.06] tracking-[-0.02em] text-text-primary"
              >
                {t.heading}
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-[300px] text-small leading-[1.7] text-warm-300/60 md:text-right">
              {t.subtitle}
            </p>
          </FadeUp>
        </div>

        {/* ── Asymmetric bento — 7/5 top row + 5/7 bottom row ── */}
        <StaggerContainer className="mt-16 grid gap-4 sm:mt-20 sm:gap-5 md:grid-cols-12 md:grid-rows-[1fr_1fr] md:gap-6">
          {t.layers.map((layer: any, i: number) => {
            const colSpan =
              i === 0 ? "md:col-span-7"
              : i === 1 ? "md:col-span-5"
              : i === 2 ? "md:col-span-5"
              : "md:col-span-7";

            return (
              <StaggerItem key={layerNumbers[i]} className={`${colSpan}${i === 2 ? " mt-4 sm:mt-0" : ""}`}>
                <DoppelrandCard
                  className="h-full"
                  innerClassName="flex h-full flex-col p-5 sm:p-8 md:p-10"
                  gradientAngle={150 + i * 20}
                >
                  {/* Header: icon + number */}
                  <div className="flex items-start justify-between">
                    <LayerIcon icon={layerIcons[i]} index={i} />
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-500/40">
                        {t.layerLabel}
                      </span>
                      <span className="font-serif text-[2rem] font-bold leading-none tracking-[-0.04em] text-white/[0.05] transition-colors duration-700 ease-premium group-hover:text-white/[0.08]">
                        {layerNumbers[i]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 font-serif text-lg font-normal tracking-[-0.01em] text-text-primary md:text-xl">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-small leading-[1.7] text-warm-300/60">
                    {layer.description}
                  </p>

                  {/* Technical detail tag */}
                  <div className="mt-auto flex items-center gap-2 pt-8">
                    <motion.div
                      className="h-px flex-1 bg-gradient-to-r from-warm-700/20 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      style={{ originX: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + i * 0.08,
                        ease: EASE_PREMIUM,
                      }}
                    />
                    <span className="shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-warm-300/40">
                      {layer.detail}
                    </span>
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
