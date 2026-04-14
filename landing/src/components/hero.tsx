"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FadeUp, TextReveal, EASE_PREMIUM, useMotionReady } from "./motion";
import { MeshGradient } from "./mesh-gradient";
import { useMessages } from "next-intl";

/* Defer hero video load until after first paint so the poster image
   + text render instantly. When the video has its first frame ready
   we cross-fade from poster → video. */
function useDeferredHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onCanPlay = () => {
      setVideoReady(true);
      v.play().catch(() => {});
    };
    v.addEventListener("canplay", onCanPlay, { once: true });

    const start = () => {
      v.preload = "auto";
      // Force the browser to re-evaluate <source> children with the new preload
      v.load();
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const ric: typeof window.requestIdleCallback | undefined =
      typeof window !== "undefined" ? (window as any).requestIdleCallback : undefined;
    if (ric) {
      idleId = ric(start, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(start, 300);
    }

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      const cic: typeof window.cancelIdleCallback | undefined =
        typeof window !== "undefined" ? (window as any).cancelIdleCallback : undefined;
      if (idleId !== undefined && cic) cic(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return { videoRef, videoReady };
}

export function Hero() {
  const dict = useMessages() as any;
  const t = dict.hero;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const { videoRef, videoReady } = useDeferredHeroVideo();
  /* Hold hero animations at initial state until fonts load + small buffer
     — avoids the text-animating-while-browser-is-hydrating jitter. */
  const motionReady = useMotionReady(100);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-dark-500 py-20 md:py-32 [@media(max-height:820px)]:!justify-start [@media(max-height:820px)]:pt-40 [@media(max-height:820px)]:pb-12 [@media(max-height:700px)]:pt-32 [@media(max-height:700px)]:pb-8">
      {/* Animated mesh gradient — sits behind video, ambient accent */}
      <MeshGradient />

      {/* Cinematic video background — poster-first, video fades in once loaded */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        {/* Poster — first frame of hero-bg.mp4, paints with SSR */}
        <picture>
          <source srcSet={`${base}/hero-bg-poster.avif`} type="image/avif" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${base}/hero-bg-poster.webp`}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: videoReady ? 0 : 0.85,
              filter: "saturate(0.75) sepia(0.08)",
              transform: "scaleX(-1)",
              transition: "opacity 500ms ease-out",
            }}
          />
        </picture>
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: videoReady ? 0.85 : 0,
            filter: "saturate(0.75) sepia(0.08)",
            transform: "scaleX(-1)",
            transition: "opacity 500ms ease-out",
          }}
        >
          <source src={`${base}/hero-bg.av1.mp4`} type='video/mp4; codecs="av01.0.05M.08"' />
          <source src={`${base}/hero-bg.webm`} type="video/webm" />
          <source src={`${base}/hero-bg.mp4`} type="video/mp4" />
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
      <div className="relative z-10 mx-auto w-full max-w-[var(--container-content)] px-6 md:px-8">
        <div className="max-w-[600px]">

          {/* Headline — Lora, massive, left-aligned */}
          <FadeUp delay={0.2} enabled={motionReady}>
            <h1
              data-weight-tier="hero"
              className="font-serif text-[length:var(--text-hero-heading)] font-normal leading-[1.03] tracking-[-0.02em] text-text-primary"
              style={{
                textShadow:
                  "0 0 40px rgba(10,9,8,0.4), 0 0 80px rgba(10,9,8,0.3), 0 0 160px rgba(10,9,8,0.25), 0 0 300px rgba(10,9,8,0.2)",
              }}
            >
              <TextReveal delay={0.3} enabled={motionReady}>
                {t.headline}
              </TextReveal>
            </h1>
          </FadeUp>

          {/* Subheadline */}
          <FadeUp delay={0.4} enabled={motionReady}>
            <p
              className="mt-8 ml-[0.3em] max-w-[460px] text-[clamp(1.1rem,1rem+0.45vw,1.25rem)] font-normal leading-[1.7] text-white/90 [@media(max-height:820px)]:mt-5 [@media(max-height:700px)]:mt-4"
              style={{
                textShadow:
                  "0 1px 16px rgba(10,9,8,0.9), 0 2px 40px rgba(10,9,8,0.6)",
              }}
            >
              {t.subheadline}
            </p>
          </FadeUp>

          {/* Store buttons */}
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 [@media(max-height:820px)]:mt-8 [@media(max-height:700px)]:mt-6">
              {/* App Store */}
              <motion.a
                href="https://apps.apple.com/br/app/chainless-cripto-com-pix/id6476666418"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.appStoreLabel}
                className="doppelrand-hallmark-narrow group relative inline-flex items-center justify-center gap-3.5 overflow-hidden rounded-2xl px-6 py-3.5 transition-all duration-500 ease-premium active:scale-[0.97] sm:justify-start"
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={motionReady ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(8px)" }}
                transition={{ duration: 0.8, delay: 0.55, ease: EASE_PREMIUM }}
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.03), 0 4px 20px -4px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px) saturate(1.4)",
                  WebkitBackdropFilter: "blur(12px) saturate(1.4)",
                }}
              >
                {/* Specular highlight — top-left refraction */}
                <div
                  className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
                />
                <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-8 w-8 shrink-0 text-yellow-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="relative flex flex-col">
                  <span className="text-xs font-medium leading-none tracking-wide text-white/70">{t.availableOn}</span>
                  <span className="text-base font-semibold leading-tight text-text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">App Store</span>
                </div>
              </motion.a>

              {/* Google Play */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=team.notus.chainless&hl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.googlePlayLabel}
                className="doppelrand-hallmark-narrow group relative inline-flex items-center justify-center gap-3.5 overflow-hidden rounded-2xl px-6 py-3.5 transition-all duration-500 ease-premium active:scale-[0.97] sm:justify-start"
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={motionReady ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(8px)" }}
                transition={{ duration: 0.8, delay: 0.7, ease: EASE_PREMIUM }}
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.03), 0 4px 20px -4px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px) saturate(1.4)",
                  WebkitBackdropFilter: "blur(12px) saturate(1.4)",
                }}
              >
                {/* Specular highlight — top-left refraction */}
                <div
                  className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }}
                />
                <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-8 w-8 shrink-0 text-yellow-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm.46-.374L14.5 7.5l-2.5 2.5L4.07 1.44zM14.5 16.5L4.07 22.56 12 14.5l2.5 2zm.5-.5l5.4-3.06c.36-.2.6-.56.6-.94s-.24-.74-.6-.94L15 8l-3 4 3 4z"/>
                </svg>
                <div className="relative flex flex-col">
                  <span className="text-xs font-medium leading-none tracking-wide text-white/70">{t.availableAt}</span>
                  <span className="text-base font-semibold leading-tight text-text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">Google Play</span>
                </div>
              </motion.a>
            </div>

          {/* Trust signal strip */}
          <FadeUp delay={0.7} enabled={motionReady}>
            <div
              className="mt-20 flex flex-wrap items-center gap-x-7 gap-y-3 [@media(max-height:820px)]:mt-10 [@media(max-height:700px)]:mt-6"
              style={{
                textShadow: "0 1px 10px rgba(10,9,8,0.9)",
              }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg font-semibold tabular-nums text-yellow-500/90">{t.trustAssets}</span>
                <span className="text-sm font-medium tracking-wide text-white/70">{t.trustAssetsLabel}</span>
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="flex items-center gap-2">
                <span className="text-lg font-semibold tabular-nums text-yellow-500/90">{t.trustApy}</span>
                <span className="text-sm font-medium tracking-wide text-white/70">{t.trustApyLabel}</span>
              </span>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
