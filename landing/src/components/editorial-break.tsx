"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useReducedMotion } from "framer-motion";
import { useMessages } from "next-intl";

const TOTAL_FRAMES = 121;
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const FRAME_PATH = `${BASE}/editorial-frames/frame-`;

interface Segment {
  text: string;
  highlight?: boolean;
  bold?: boolean;
}

interface Line {
  segments: Segment[];
}

/* ── Preload image sequence into memory, but only when section is near viewport ── */
function useFrameSequence(total: number, triggerRef: React.RefObject<HTMLElement | null>) {
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Defer the actual network load until the section is within ~2 viewports of view
  useEffect(() => {
    if (total === 0) return;
    const el = triggerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [total, triggerRef]);

  useEffect(() => {
    if (!shouldLoad || total === 0) return;
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(total);
    let loaded = 0;

    for (let i = 0; i < total; i++) {
      const img = new Image();
      img.src = `${FRAME_PATH}${String(i + 1).padStart(3, "0")}.webp`;
      img.onload = () => {
        images[i] = img;
        loaded++;
        if (loaded === total && !cancelled) {
          setFrames([...images]);
        }
      };
    }

    return () => {
      cancelled = true;
    };
  }, [shouldLoad, total]);

  return frames;
}

/* ── Main component ── */
export function EditorialBreak() {
  const dict = useMessages() as any;
  const t = dict.editorial;
  const shouldReduceMotion = useReducedMotion();

  const couplet1: Line[] = t.couplet1;
  const couplet2: Line[] = t.couplet2;

  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const couplet1Ref = useRef<HTMLDivElement>(null);
  const couplet2Ref = useRef<HTMLDivElement>(null);
  const currentFrameRef = useRef(-1);
  const frames = useFrameSequence(shouldReduceMotion ? 0 : TOTAL_FRAMES, sectionRef);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Paint frames on canvas + drive overlay + couplet crossfade via refs */
  useEffect(() => {
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    const c1 = couplet1Ref.current;
    const c2 = couplet2Ref.current;
    if (!canvas || !overlay || !c1 || !c2) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* Size canvas to match the viewport so we get 1:1 pixel mapping */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Draw a frame centered/cropped like object-fit: cover */
    function drawCover(img: HTMLImageElement) {
      const cw = canvas!.width;
      const ch = canvas!.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;
      ctx!.drawImage(img, sx, sy, sw, sh);
    }

    if (frames.length > 0) {
      drawCover(frames[0]);
    }

    // Initial state
    overlay.style.opacity = "0.98";
    c1.style.opacity = "1";
    c1.style.transform = "translateY(0px)";
    c2.style.opacity = "0";
    c2.style.transform = "translateY(20px)";

    function lerp(stops: [number, number][], progress: number): number {
      if (progress <= stops[0][0]) return stops[0][1];
      if (progress >= stops[stops.length - 1][0]) return stops[stops.length - 1][1];
      for (let i = 0; i < stops.length - 1; i++) {
        const [x0, y0] = stops[i];
        const [x1, y1] = stops[i + 1];
        if (progress >= x0 && progress <= x1) {
          const t = (progress - x0) / (x1 - x0);
          return y0 + t * (y1 - y0);
        }
      }
      return stops[stops.length - 1][1];
    }

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Overlay: near-black → clear
      overlay.style.opacity = String(
        lerp([[0, 0.98], [0.15, 0.88], [0.40, 0.4], [0.58, 0.15]], progress)
      );

      // Couplet 1: visible → fully gone
      const c1Opacity = lerp([[0, 1], [0.22, 1], [0.32, 0]], progress);
      const c1Y = lerp([[0, 0], [0.22, 0], [0.32, -20]], progress);
      c1.style.opacity = String(c1Opacity);
      c1.style.transform = `translateY(${c1Y}px)`;
      // Hard-hide when fully faded to prevent any bleed
      c1.style.visibility = c1Opacity <= 0.01 ? "hidden" : "visible";

      // Couplet 2: hidden → appears after gap
      const c2Opacity = lerp([[0, 0], [0.45, 0], [0.53, 1]], progress);
      const c2Y = lerp([[0, 20], [0.45, 20], [0.53, 0]], progress);
      c2.style.opacity = String(c2Opacity);
      c2.style.transform = `translateY(${c2Y}px)`;
      c2.style.visibility = c2Opacity <= 0.01 ? "hidden" : "visible";

      // Canvas frames — delay video start
      if (frames.length > 0) {
        const videoProgress = Math.max(0, (progress - 0.15) / 0.85);
        const index = Math.min(
          frames.length - 1,
          Math.max(0, Math.round(videoProgress * (frames.length - 1)))
        );
        if (index !== currentFrameRef.current) {
          currentFrameRef.current = index;
          drawCover(frames[index]);
        }
      }
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", resize);
    };
  }, [frames, scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      aria-label={t.ariaLabel}
      className={shouldReduceMotion ? "relative" : "relative h-[200vh] md:h-[320vh]"}
    >
      {shouldReduceMotion ? (
        /* Reduced motion: static layout, both couplets visible, no scroll hijack */
        <div className="bg-dark-950 px-6 py-32">
          <div className="mx-auto max-w-4xl space-y-12 text-center">
            <div className="mx-auto h-px w-16 bg-yellow-500/40" aria-hidden="true" />
            <div>
              {couplet1.map((line: Line, i: number) => (
                <CoupletLine key={i} line={line} />
              ))}
            </div>
            <div>
              {couplet2.map((line: Line, i: number) => (
                <CoupletLine key={i} line={line} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Sticky viewport — pinned for 200vh of scroll travel */
        <div className="sticky top-0 h-[100dvh] overflow-hidden">
          {/* Canvas frame scrubber — zero decode latency */}
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{ filter: "saturate(0.8) sepia(0.06)" }}
          />

          {/* Scroll-driven dark overlay — starts near-black, reveals video as you scroll */}
          <div ref={overlayRef} className="absolute inset-0 bg-dark-950" style={{ opacity: 0.98 }} />

          {/* Edge blending — dissolve hard edges into adjacent sections */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32"
            style={{ background: "linear-gradient(to bottom, #1C1B19, transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32"
            style={{ background: "linear-gradient(to top, #1C1B19, transparent)" }}
          />

          {/* Crossfading couplets — same position, ref-driven for precise control */}
          <div className="relative flex h-full items-center justify-center px-6">
            <div className="relative max-w-4xl text-center">
              {/* Gold hairline */}
              <div className="mx-auto mb-10 h-px w-16 bg-yellow-500/40" aria-hidden="true" />

              {/* Couplet container — both occupy the same space */}
              <div className="relative">
                <div ref={couplet1Ref} style={{ opacity: 1 }}>
                  {couplet1.map((line: Line, i: number) => (
                    <CoupletLine key={i} line={line} />
                  ))}
                </div>
                <div ref={couplet2Ref} className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0, visibility: "hidden" }}>
                  {couplet2.map((line: Line, i: number) => (
                    <CoupletLine key={i} line={line} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ── Static line renderer ── */
function CoupletLine({ line }: { line: Line }) {
  return (
    <p
      className="pull-quote font-serif text-xl font-light leading-[1.35] tracking-[-0.02em] md:text-3xl lg:text-[2.25rem]"
      style={{
        textShadow:
          "0 2px 40px rgba(10,9,8,0.5), 0 4px 80px rgba(10,9,8,0.3)",
      }}
    >
      {line.segments.map((seg: Segment, j: number) =>
        seg.highlight ? (
          <span
            key={j}
            className={`text-yellow-500 ${seg.bold ? "font-bold not-italic" : ""}`}
          >
            {seg.text}
          </span>
        ) : (
          <span key={j} className="text-text-primary">
            {seg.text}
          </span>
        )
      )}
    </p>
  );
}
