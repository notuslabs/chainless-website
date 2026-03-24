"use client";

import { MagneticButton, FadeUp, TextReveal } from "./motion";
import { MeshGradient } from "./mesh-gradient";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-dark-500 px-4 py-32 md:px-0">
      {/* Animated mesh gradient — sits behind video, ambient accent */}
      <MeshGradient />

      {/* Cinematic video background — full-bleed, high opacity */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{
            opacity: 0.85,
            filter: "saturate(0.75) sepia(0.08)",
            transform: "scaleX(-1)",
          }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Bottom fade — dissolves video into dark surface below */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%]"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(28,27,25,0.6) 40%, rgba(28,27,25,0.95) 70%, #1C1B19 100%)",
          }}
        />
      </div>

      {/* Soft left vignette — wide, feathered, no visible edge */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.3) 35%, transparent 65%)",
        }}
      />

      {/* Content — text floats directly, no container */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <div className="max-w-[600px]">

          {/* Eyebrow — pill badge */}
          <FadeUp delay={0.1}>
            <span className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-dark-500/55 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-warm-200 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/70" />
              Patrimonio digital soberano
            </span>
          </FadeUp>

          {/* Headline — Fraunces, massive, left-aligned */}
          <FadeUp delay={0.2}>
            <h1
              className="font-serif text-[clamp(2.75rem,2rem+3.3vw,5.25rem)] font-bold leading-[1.03] tracking-[-0.03em] text-[#FAFAF8]"
              style={{
                textShadow:
                  "0 0 60px rgba(10,9,8,0.45), 0 0 120px rgba(10,9,8,0.3), 0 0 200px rgba(10,9,8,0.2)",
              }}
            >
              <TextReveal delay={0.3}>
                Torne-se Chainless.
              </TextReveal>
            </h1>
          </FadeUp>

          {/* Subheadline */}
          <FadeUp delay={0.4}>
            <p
              className="mt-8 max-w-[460px] text-[clamp(1.1rem,1rem+0.45vw,1.25rem)] font-normal leading-[1.7] text-white/90"
              style={{
                textShadow:
                  "0 1px 16px rgba(10,9,8,0.9), 0 2px 40px rgba(10,9,8,0.6)",
              }}
            >
              Construído para quem exige controle.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.55}>
            <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              {/* Primary CTA — Button-in-Button trailing icon */}
              <MagneticButton
                href="#comecar"
                className="group flex items-center gap-3 rounded-full bg-yellow-500 py-4 pl-8 pr-4 text-base font-semibold text-dark-500 shadow-[0_4px_30px_rgba(255,199,61,0.25)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-yellow-400 hover:shadow-[0_4px_40px_rgba(255,199,61,0.35)] active:scale-[0.97]"
              >
                Comecar agora
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark-500/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-110">
                  <ArrowUpRight size={15} weight="bold" />
                </span>
              </MagneticButton>

              {/* Secondary CTA */}
              <a
                href="#sobre"
                className="text-[15px] font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-yellow-500 hover:decoration-yellow-500/60 active:scale-[0.98]"
                style={{
                  textShadow: "0 1px 12px rgba(10,9,8,0.9)",
                }}
              >
                Entenda autocustódia
              </a>
            </div>
          </FadeUp>

          {/* Trust signal strip */}
          <FadeUp delay={0.7}>
            <div
              className="mt-20 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium tracking-wide text-white/60"
              style={{
                textShadow: "0 1px 10px rgba(10,9,8,0.9)",
              }}
            >
              <span className="flex items-center gap-2">
                <span className="font-mono font-semibold text-yellow-500/80">150+</span>
                ativos digitais
              </span>
              <span className="h-3 w-px bg-white/25" />
              <span className="flex items-center gap-2">
                <span className="font-mono font-semibold text-yellow-500/80">Até 60%</span>
                APY em DeFi
              </span>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
