"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useReducedMotion } from "framer-motion";
import { useMessages } from "next-intl";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const FRAME_PATH = `${BASE}/editorial-frames/frame-`;

/* Subsample the 121-frame source sequence to 61 frames (every 2nd).
   At scroll-scrub speed the eye can't distinguish 61 from 121, and
   network + decode work drops ~50%. */
const FRAME_NUMBERS: number[] = (() => {
  const out: number[] = [];
  for (let n = 1; n <= 121; n += 2) out.push(n);
  return out;
})();
const TOTAL_FRAMES = FRAME_NUMBERS.length;

/* How many frames to fetch in parallel. Low enough that the network/decode
   queue never stalls the main thread, high enough to make progress quickly. */
const LOAD_CONCURRENCY = 3;

interface Segment {
  text: string;
  highlight?: boolean;
  bold?: boolean;
}

interface Line {
  segments: Segment[];
}

type Frame = ImageBitmap | HTMLImageElement;

interface FrameSource {
  get(index: number): Frame | null;
  /** Returns the closest loaded frame index to `target`, or -1 if nothing loaded. */
  nearestLoaded(target: number): number;
  subscribe(fn: () => void): () => void;
}

/* ── Lazy, sequential frame loader ── */
function useFrameSequence(
  triggerRef: React.RefObject<HTMLElement | null>,
  enabled: boolean
): { source: FrameSource; hasFirstFrame: boolean } {
  const framesRef = useRef<(Frame | null)[]>(
    Array.from({ length: TOTAL_FRAMES }, () => null)
  );
  const loadedMaskRef = useRef<Uint8Array>(new Uint8Array(TOTAL_FRAMES));
  const subscribersRef = useRef<Set<() => void>>(new Set());
  const [hasFirstFrame, setHasFirstFrame] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  /* Intersection trigger — start loading when the section approaches viewport */
  useEffect(() => {
    if (!enabled) return;
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
  }, [enabled, triggerRef]);

  /* Sequential loader with limited concurrency */
  useEffect(() => {
    if (!shouldLoad || !enabled) return;
    let cancelled = false;
    const supportsBitmap = typeof createImageBitmap === "function";
    let nextIndex = 0;

    async function loadOne(slot: number): Promise<Frame> {
      const n = FRAME_NUMBERS[slot];
      const url = `${FRAME_PATH}${String(n).padStart(3, "0")}.webp`;
      if (supportsBitmap) {
        const res = await fetch(url);
        const blob = await res.blob();
        return await createImageBitmap(blob);
      }
      return await new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    }

    async function worker() {
      while (!cancelled) {
        const slot = nextIndex++;
        if (slot >= TOTAL_FRAMES) return;
        try {
          const frame = await loadOne(slot);
          if (cancelled) {
            if (frame instanceof (globalThis.ImageBitmap || class {})) {
              (frame as ImageBitmap).close?.();
            }
            return;
          }
          framesRef.current[slot] = frame;
          loadedMaskRef.current[slot] = 1;
          subscribersRef.current.forEach((fn) => fn());
          setHasFirstFrame((prev) => prev || true);
        } catch {
          // Drop this frame; continue to next
        }
      }
    }

    const workers: Promise<void>[] = [];
    for (let i = 0; i < LOAD_CONCURRENCY; i++) workers.push(worker());

    return () => {
      cancelled = true;
      // Close any ImageBitmaps to free GPU memory
      for (const f of framesRef.current) {
        if (f && typeof (f as ImageBitmap).close === "function") {
          (f as ImageBitmap).close();
        }
      }
      framesRef.current = Array.from({ length: TOTAL_FRAMES }, () => null);
      loadedMaskRef.current = new Uint8Array(TOTAL_FRAMES);
      setHasFirstFrame(false);
    };
  }, [shouldLoad, enabled]);

  const source: FrameSource = {
    get(index: number) {
      return framesRef.current[index] ?? null;
    },
    nearestLoaded(target: number): number {
      const mask = loadedMaskRef.current;
      if (target >= 0 && target < TOTAL_FRAMES && mask[target]) return target;
      // Fan out from target
      const maxR = Math.max(target, TOTAL_FRAMES - 1 - target);
      for (let r = 1; r <= maxR; r++) {
        const lo = target - r;
        if (lo >= 0 && mask[lo]) return lo;
        const hi = target + r;
        if (hi < TOTAL_FRAMES && mask[hi]) return hi;
      }
      return -1;
    },
    subscribe(fn) {
      subscribersRef.current.add(fn);
      return () => {
        subscribersRef.current.delete(fn);
      };
    },
  };

  return { source, hasFirstFrame };
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

  const { source, hasFirstFrame } = useFrameSequence(sectionRef, !shouldReduceMotion);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Paint canvas + overlay + couplets in a single rAF batch per frame */
  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    const c1 = couplet1Ref.current;
    const c2 = couplet2Ref.current;
    if (!canvas || !overlay || !c1 || !c2) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);

    function frameDims(img: Frame): [number, number] {
      if (typeof ImageBitmap !== "undefined" && img instanceof ImageBitmap) {
        return [img.width, img.height];
      }
      const el = img as HTMLImageElement;
      return [el.naturalWidth, el.naturalHeight];
    }

    function drawCover(img: Frame) {
      const cw = canvas!.width;
      const ch = canvas!.height;
      const [iw, ih] = frameDims(img);
      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;
      ctx!.drawImage(img as CanvasImageSource, sx, sy, sw, sh);
    }

    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const idx = currentFrameRef.current;
      if (idx >= 0) {
        const f = source.get(idx);
        if (f) drawCover(f);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    overlay.style.opacity = "0.98";
    c1.style.opacity = "1";
    c1.style.transform = "translateY(0px)";
    c2.style.opacity = "0";
    c2.style.transform = "translateY(20px)";
    c2.style.visibility = "hidden";

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

    let pendingRaf = 0;
    let latestProgress = scrollYProgress.get();

    function apply() {
      pendingRaf = 0;
      const progress = latestProgress;

      overlay!.style.opacity = String(
        lerp([[0, 0.98], [0.15, 0.88], [0.40, 0.4], [0.58, 0.15]], progress)
      );

      const c1Opacity = lerp([[0, 1], [0.22, 1], [0.32, 0]], progress);
      const c1Y = lerp([[0, 0], [0.22, 0], [0.32, -20]], progress);
      c1!.style.opacity = String(c1Opacity);
      c1!.style.transform = `translateY(${c1Y}px)`;
      c1!.style.visibility = c1Opacity <= 0.01 ? "hidden" : "visible";

      const c2Opacity = lerp([[0, 0], [0.45, 0], [0.53, 1]], progress);
      const c2Y = lerp([[0, 20], [0.45, 20], [0.53, 0]], progress);
      c2!.style.opacity = String(c2Opacity);
      c2!.style.transform = `translateY(${c2Y}px)`;
      c2!.style.visibility = c2Opacity <= 0.01 ? "hidden" : "visible";

      // Map scroll progress to frame slot (video delays start by 15%)
      const videoProgress = Math.max(0, (progress - 0.15) / 0.85);
      const targetSlot = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(videoProgress * (TOTAL_FRAMES - 1)))
      );
      const drawSlot = source.nearestLoaded(targetSlot);
      if (drawSlot >= 0 && drawSlot !== currentFrameRef.current) {
        const f = source.get(drawSlot);
        if (f) {
          currentFrameRef.current = drawSlot;
          drawCover(f);
        }
      }
    }

    function schedule() {
      if (pendingRaf) return;
      pendingRaf = requestAnimationFrame(apply);
    }

    const unsubscribeScroll = scrollYProgress.on("change", (p) => {
      latestProgress = p;
      schedule();
    });

    // Redraw when new frames arrive (covers the "user stops mid-section" case
    // where no scroll event would otherwise fire)
    const unsubscribeFrames = source.subscribe(schedule);

    // Initial paint
    schedule();

    return () => {
      unsubscribeScroll();
      unsubscribeFrames();
      if (pendingRaf) cancelAnimationFrame(pendingRaf);
      window.removeEventListener("resize", resize);
    };
    // hasFirstFrame re-runs the effect once the first frame is available so
    // the initial draw call actually has something to render.
  }, [hasFirstFrame, scrollYProgress, shouldReduceMotion, source]);

  return (
    <section
      ref={sectionRef}
      aria-label={t.ariaLabel}
      className={shouldReduceMotion ? "relative" : "relative h-[200vh] md:h-[320vh]"}
    >
      {shouldReduceMotion ? (
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
        <div className="sticky top-0 h-[100dvh] overflow-hidden">
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{ filter: "saturate(0.8) sepia(0.06)" }}
          />

          <div ref={overlayRef} className="absolute inset-0 bg-dark-950" style={{ opacity: 0.98 }} />

          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32"
            style={{ background: "linear-gradient(to bottom, #1C1B19, transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32"
            style={{ background: "linear-gradient(to top, #1C1B19, transparent)" }}
          />

          <div className="relative flex h-full items-center justify-center px-6">
            <div className="relative max-w-4xl text-center">
              <div className="mx-auto mb-10 h-px w-16 bg-yellow-500/40" aria-hidden="true" />

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
