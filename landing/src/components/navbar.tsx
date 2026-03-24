"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { ChainlessLogo } from "./chainless-logo";
import { EASE_PREMIUM } from "./motion";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Rendimentos", href: "#rendimentos" },
  { label: "Cartão", href: "#dolar" },
  { label: "Como funciona", href: "#como-funciona" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <>
      {/* Floating Glass Pill Nav */}
      <motion.nav
        className="fixed left-1/2 z-[55] -translate-x-1/2"
        initial={{ opacity: 0, y: -20, filter: "blur(10px)", top: 20 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", top: scrolled ? 64 : 20 }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE_PREMIUM }}
      >
        <motion.div
          className="flex items-center gap-1 rounded-full px-2 py-2"
          animate={{
            backgroundColor: scrolled
              ? "rgba(28, 27, 25, 0.85)"
              : "rgba(28, 27, 25, 0.55)",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0.06)",
            boxShadow: scrolled
              ? "0 20px 60px -15px rgba(0,0,0,0.5), 0 8px 24px -8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)"
              : "0 20px 40px -15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)",
            backdropFilter: scrolled
              ? "blur(40px) saturate(1.8)"
              : "blur(20px) saturate(1.4)",
          }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          style={{
            border: "1px solid",
            WebkitBackdropFilter: scrolled
              ? "blur(40px) saturate(1.8)"
              : "blur(20px) saturate(1.4)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center rounded-full px-4 py-2"
          >
            <ChainlessLogo color="#FAFAF8" size={20} />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-caption font-medium text-warm-300/80 transition-all duration-500 ease-premium hover:bg-white/[0.06] hover:text-text-primary active:scale-[0.98]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA — Button-in-Button trailing icon pattern */}
          <a
            href="#comecar"
            className="group ml-1.5 hidden items-center gap-2 rounded-full bg-yellow-500 py-2 pl-5 pr-2 text-caption font-semibold text-dark-500 transition-all duration-500 ease-premium hover:bg-yellow-400 active:scale-[0.97] md:flex"
          >
            Comecar agora
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-dark-500/10 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
              <ArrowUpRight size={13} weight="bold" />
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center rounded-full p-2.5 text-text-primary transition-colors duration-300 hover:bg-white/[0.06] md:hidden"
            aria-label="Abrir menu"
          >
            <List size={20} weight="light" />
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile full-screen overlay with staggered mask reveal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-500/95 backdrop-blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          >
            {/* Close button with border ring */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-warm-700/30 text-text-primary transition-colors duration-300 hover:bg-white/[0.06]"
              aria-label="Fechar menu"
            >
              <X size={22} weight="light" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-light tracking-tight text-text-primary/80 transition-colors duration-300 hover:text-text-primary"
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08 + i * 0.07,
                    ease: EASE_PREMIUM,
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              {/* Mobile CTA — Button-in-Button */}
              <motion.a
                href="#comecar"
                onClick={() => setOpen(false)}
                className="group mt-6 flex items-center gap-3 rounded-full bg-yellow-500 py-4 pl-8 pr-4 text-lg font-semibold text-dark-500"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                  ease: EASE_PREMIUM,
                }}
              >
                Comecar agora
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dark-500/10">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
