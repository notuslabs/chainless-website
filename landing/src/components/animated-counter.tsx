"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  ariaLabel?: string;
}

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
  decimals = 0,
  className = "",
  ariaLabel,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (shouldReduceMotion) {
      setDisplayValue(target);
      return;
    }

    const startTime = performance.now();
    let rafId: number;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setDisplayValue(current);

      if (progress < 1) {
        rafId = requestAnimationFrame(update);
      } else {
        setDisplayValue(target);
      }
    }

    rafId = requestAnimationFrame(update);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, target, duration, shouldReduceMotion]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString("pt-BR");

  return (
    <span
      ref={ref}
      className={`tabular-nums ${className}`}
      aria-label={ariaLabel}
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
