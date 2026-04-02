"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";

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

/* Two couplets that crossfade — same position, one replaces the other */
const couplet1: Line[] = [
  { segments: [{ text: "O sistema financeiro" }] },
  {
    segments: [
      { text: "foi construído para " },
      { text: "eles.", highlight: true, bold: true },
    ],
  },
];

const couplet2: Line[] = [
  {
    segments: [
      { text: "A " },
      { text: "Chainless", highlight: true, bold: true },
      { text: " foi construída para " },
      { text: "você.", highlight: true, bold: true },
    ],
  },
];

/* (couplet transforms driven via refs in scroll listener) */

/* ── Preload image sequence into memory ── */
function useFrameSequence(total: number) {
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
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
  }, [total]);

  return frames;
}

/* ── Main component ── */
export function EditorialBreak() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const couplet1Ref = useRef<HTMLDivElement>(null);
  const couplet2Ref = useRef<HTMLDivElement>(null);
  const currentFrameRef = useRef(-1);
  const frames = useFrameSequence(TOTAL_FRAMES);

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

    canvas.width = 1280;
    canvas.height = 720;

    if (frames.length > 0) {
      ctx.drawImage(frames[0], 0, 0);
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
          ctx.drawImage(frames[index], 0, 0);
        }
      }
    });

    return unsubscribe;
  }, [frames, scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      aria-label="Declaração sobre soberania financeira"
      className="relative h-[320vh]"
    >
      {/* Sticky viewport — pinned for 200vh of scroll travel */}
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
                {couplet1.map((line, i) => (
                  <CoupletLine key={i} line={line} />
                ))}
              </div>
              <div ref={couplet2Ref} className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0, visibility: "hidden" }}>
                {couplet2.map((line, i) => (
                  <CoupletLine key={i} line={line} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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
      {line.segments.map((seg, j) =>
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
