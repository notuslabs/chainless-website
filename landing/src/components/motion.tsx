"use client";

import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

/* ── Premium easing — custom cubic-bezier per soft-skill ── */
export const EASE_PREMIUM = [0.32, 0.72, 0, 1] as const;

/* ── Spring configs ── */
const SPRING_SNAPPY = { type: "spring" as const, stiffness: 200, damping: 20 };
const SPRING_SMOOTH = { type: "spring" as const, stiffness: 120, damping: 24 };

/* ── Magnetic Button — cursor-tracking hover with spring physics ── */
export function MagneticButton({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.div;

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement & HTMLAnchorElement>}
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      transition={SPRING_SNAPPY}
    >
      {children}
    </Component>
  );
}

/* ── FadeUp — blur-fade-up scroll entry ── */
export function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: EASE_PREMIUM,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerContainer — orchestrated child reveal ── */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerItem — child within a StaggerContainer ── */
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: EASE_PREMIUM },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── CountUp — spring-in number reveal ── */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: {
  value: string;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ ...SPRING_SMOOTH, delay: 0.2 }}
    >
      {prefix}
      {value}
      {suffix}
    </motion.span>
  );
}

/* ── ParallaxSection — subtle depth shift on scroll ── */
export function ParallaxSection({
  children,
  className = "",
  speed = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/* ── TextReveal — word-by-word reveal for editorial headlines ── */
export function TextReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const words = children.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.6,
                delay: delay + i * 0.06,
                ease: EASE_PREMIUM,
              },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ── ScrollProgress — thin golden line at top of viewport ── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-yellow-500/60"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
