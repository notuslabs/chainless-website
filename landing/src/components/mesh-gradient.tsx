"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "./motion";

/**
 * Animated mesh gradient background for the Hero section.
 * Uses warm amber orbs + SVG yield curve with draw-on animation.
 * All motion via transform/opacity only for GPU safety.
 */
export function MeshGradient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary amber orb — top right, large and diffuse */}
      <motion.div
        className="absolute -right-[10%] -top-[20%] h-[700px] w-[700px] rounded-full bg-yellow-500/[0.06] blur-[160px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary warm orb — bottom left */}
      <motion.div
        className="absolute -bottom-[15%] -left-[10%] h-[550px] w-[550px] rounded-full bg-yellow-600/[0.04] blur-[130px]"
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Tertiary center glow — very subtle, wide and horizontal */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[var(--glow-md)] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.025] blur-[120px]"
        animate={{
          scale: [1, 1.1, 0.93, 1],
          opacity: [0.025, 0.04, 0.02, 0.025],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Warm accent orb — mid-right, adds asymmetry */}
      <motion.div
        className="absolute right-[15%] top-[40%] h-[300px] w-[300px] rounded-full bg-yellow-400/[0.03] blur-[100px]"
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -10, 15, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Yield curve — animated SVG path drawing */}
      <svg
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 opacity-[0.05]"
        width="1000"
        height="200"
        viewBox="0 0 1000 200"
        fill="none"
      >
        <motion.path
          d="M0 170 C80 155, 150 130, 250 110 S400 50, 550 55 S700 75, 800 35 S900 20, 1000 12"
          stroke="#FFC73D"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 3.5, delay: 1.2, ease: EASE_PREMIUM },
            opacity: { duration: 1.2, delay: 1.2 },
          }}
        />
        {/* Glow duplicate for depth */}
        <motion.path
          d="M0 170 C80 155, 150 130, 250 110 S400 50, 550 55 S700 75, 800 35 S900 20, 1000 12"
          stroke="#FFC73D"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          className="blur-[3px]"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{
            pathLength: { duration: 3.5, delay: 1.2, ease: EASE_PREMIUM },
            opacity: { duration: 1.2, delay: 1.2 },
          }}
        />
      </svg>
    </div>
  );
}
