"use client";

import { motion } from "framer-motion";
import { FadeUp, MagneticButton, TextReveal, EASE_PREMIUM } from "./motion";
import { Eyebrow } from "./eyebrow";
import { ArrowUpRight } from "@phosphor-icons/react";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden bg-dark-500 px-4 py-40 md:py-52"
      id="comecar"
    >
      {/* Top fade — dissolves from plain bg-dark-500 into the atmospheric glows */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 w-full"
        aria-hidden="true"
        style={{
          height: "280px",
          background:
            "linear-gradient(to bottom, var(--color-dark-500) 0%, transparent 100%)",
        }}
      />

      {/* Multi-layered cinematic atmospheric glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[700px] w-[700px] rounded-full bg-yellow-500/[0.05] blur-[180px]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/3 top-1/3 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[350px] w-[350px] rounded-full bg-yellow-600/[0.04] blur-[120px]" />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 right-1/4"
        aria-hidden="true"
      >
        <div className="h-[250px] w-[400px] rounded-full bg-yellow-500/[0.025] blur-[140px]" />
      </div>

      {/* Architectural concentric circles — decorative, institutional gravitas */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <svg
          className="h-[600px] w-[600px] opacity-[0.03] md:h-[800px] md:w-[800px]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <motion.circle
            cx="200" cy="200" r="195"
            stroke="var(--color-text-primary)" strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: EASE_PREMIUM }}
          />
          <motion.circle
            cx="200" cy="200" r="150"
            stroke="var(--color-text-primary)" strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 0.75, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 0.3, ease: EASE_PREMIUM }}
          />
          <motion.circle
            cx="200" cy="200" r="105"
            stroke="var(--color-yellow-500)" strokeWidth="0.5" strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 0.5, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.6, ease: EASE_PREMIUM }}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center text-center">
        {/* Eyebrow */}
        <FadeUp>
          <Eyebrow className="mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/60" />
            Comece agora
          </Eyebrow>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-serif text-[clamp(2.5rem,1.8rem+2.8vw,4rem)] font-normal leading-[1.04] tracking-[-0.02em] text-text-primary">
            <TextReveal delay={0.15}>
              Seu patrimônio merece ser só seu.
            </TextReveal>
          </h2>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="mt-8 max-w-[460px] text-lg font-light leading-[1.7] text-warm-300/70">
            Toda plataforma de patrimônio pede que você entregue seus ativos a
            um custodiante. Chainless é a primeira onde isso é{" "}
            <span className="font-medium text-yellow-500/90">impossível</span>.
          </p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="mt-14">
            <MagneticButton
              href="#"
              className="group inline-flex items-center gap-3 rounded-2xl bg-yellow-500 py-4 pl-8 pr-4 text-base font-semibold text-dark-500 shadow-[0_4px_30px_rgba(255,199,61,0.2)] transition-all duration-500 ease-premium hover:bg-yellow-400 hover:shadow-[0_4px_50px_rgba(255,199,61,0.3)] active:scale-[0.97]"
            >
              Torne-se Chainless
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-500/10 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-110">
                <ArrowUpRight size={15} weight="bold" />
              </span>
            </MagneticButton>
          </div>
        </FadeUp>

        {/* Trust anchors — elevated with divider */}
        <FadeUp delay={0.55}>
          <div className="mt-20">
            <motion.div
              className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: EASE_PREMIUM }}
            />
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium tracking-wide text-warm-300/50">
              <span>Sem custódia</span>
              <span className="h-3 w-px bg-warm-700/15" />
              <span>Sem lock-up</span>
              <span className="h-3 w-px bg-warm-700/15" />
              <span>Sem intermediários</span>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Bottom fade — dissolves all atmospheric glows into plain bg-dark-500 for the footer */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        aria-hidden="true"
        style={{
          height: "320px",
          background:
            "linear-gradient(to bottom, transparent 0%, var(--color-dark-500) 100%)",
        }}
      />
    </section>
  );
}
