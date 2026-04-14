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

type Frame = ImageBitmap | HTMLImageElement;

/* ── Preload + decode image sequence to GPU-resident ImageBitmaps ── */
function useFrameSequence(total: number, triggerRef: React.RefObject<HTMLElement | null>) {
  const [frames, setFrames] = useState<Frame[]>([]);
  const [shouldLoad, setShouldLoad] = useState(false);

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
    const supportsBitmap = typeof createImageBitmap === "function";

    async function loadOne(i: number): Promise<Frame> {
      const url = `${FRAME_PATH}${String(i + 1).padStart(3, "0")}.webp`;
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

    (async () => {
      const out: Frame[] = new Array(total);
      // Load in small parallel batches so network doesn't stall the main thread
      const BATCH = 8;
      let publishedFirst = false;
      for (let start = 0; start < total; start += BATCH) {
        if (cancelled) return;
        const end = Math.min(start + BATCH, total);
        await Promise.all(
          Array.from({ length: end - start }, (_, k) =>
            loadOne(start + k).then((f) => {
              out[start + k] = f;
            }).catch(() => {})
          )
        );
        // Publish the first batch so the user sees something early,
        // then mutate the same array in place (avoids re-running the effect).
        if (!publishedFirst && !cancelled) {
          publishedFirst = true;
          setFrames(out);
        }
      }
    })();

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

    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      // Redraw current frame after resize
      const idx = currentFrameRef.current;
      if (idx >= 0 && frames[idx]) drawCover(frames[idx]);
    };

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

    resize();
    window.addEventListener("resize", resize);

    if (frames.length > 0) {
      drawCover(frames[0]);
      currentFrameRef.current = 0;
    }

    // Initial style state
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

      if (frames.length > 0) {
        const videoProgress = Math.max(0, (progress - 0.15) / 0.85);
        const index = Math.min(
          frames.length - 1,
          Math.max(0, Math.round(videoProgress * (frames.length - 1)))
        );
        if (index !== currentFrameRef.current && frames[index]) {
          currentFrameRef.current = index;
          drawCover(frames[index]);
        }
      }
    }

    const unsubscribe = scrollYProgress.on("change", (p) => {
      latestProgress = p;
      if (pendingRaf) return;
      pendingRaf = requestAnimationFrame(apply);
    });

    // Apply once on mount so initial visible frame matches current scroll
    pendingRaf = requestAnimationFrame(apply);

    return () => {
      unsubscribe();
      if (pendingRaf) cancelAnimationFrame(pendingRaf);
      window.removeEventListener("resize", resize);
    };
  }, [frames, scrollYProgress, shouldReduceMotion]);

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
