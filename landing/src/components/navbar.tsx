"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { ChainlessLogo } from "./chainless-logo";
import { EASE_PREMIUM } from "./motion";
import { useMessages } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";
import { Link, usePathname } from "@/i18n/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const dict = useMessages() as any;
  const pathname = usePathname();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const navItems: { label: string; hash: string }[] = [
    { label: dict.navbar.rendimentos, hash: "rendimentos" },
    { label: dict.navbar.cartao, hash: "cartao" },
    { label: dict.navbar.emprestimo, hash: "credito" },
    { label: dict.navbar.seguranca, hash: "seguranca" },
  ];

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
          className="doppelrand-hallmark-narrow relative flex items-center gap-2 overflow-hidden rounded-2xl px-2 py-2"
          animate={{
            background: scrolled
              ? "linear-gradient(135deg, rgba(28,27,25,0.88) 0%, rgba(28,27,25,0.75) 50%, rgba(28,27,25,0.85) 100%)"
              : "linear-gradient(135deg, rgba(28,27,25,0.65) 0%, rgba(28,27,25,0.50) 50%, rgba(28,27,25,0.60) 100%)",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(255, 255, 255, 0.06)",
            boxShadow: scrolled
              ? "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 8px 32px -4px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)"
              : "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 16px -4px rgba(0,0,0,0.15)",
            backdropFilter: scrolled
              ? "blur(24px) saturate(1.6)"
              : "blur(16px) saturate(1.3)",
          }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          style={{
            border: "1px solid",
            WebkitBackdropFilter: scrolled
              ? "blur(24px) saturate(1.6)"
              : "blur(16px) saturate(1.3)",
          }}
        >
          {/* Specular highlight — subtle top-left refraction */}
          <div
            className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
          />
          {/* Logo */}
          <Link
            href="/"
            className="relative flex min-h-[44px] items-center justify-center rounded-xl px-4 py-3"
            aria-label="Chainless"
          >
            <ChainlessLogo color="#FAFAF8" size={20} />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) =>
              isHome ? (
                <a
                  key={item.label}
                  href={`#${item.hash}`}
                  className="rounded-lg px-4 py-2 text-caption font-medium text-warm-300/80 transition-all duration-500 ease-premium hover:bg-white/[0.08] hover:text-text-primary active:scale-[0.98]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={{ pathname: "/", hash: item.hash }}
                  className="rounded-lg px-4 py-2 text-caption font-medium text-warm-300/80 transition-all duration-500 ease-premium hover:bg-white/[0.08] hover:text-text-primary active:scale-[0.98]"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Store icon buttons + language switcher */}
          <div className="ml-1.5 hidden items-center gap-1.5 md:flex">
            <LanguageSwitcher />
            <a
              href="https://apps.apple.com/br/app/chainless-cripto-com-pix/id6476666418"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.navbar.appStore}
              className="doppelrand-hallmark-tiny relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl text-yellow-500 transition-all duration-500 ease-premium hover:brightness-125 active:scale-[0.95]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=team.notus.chainless&hl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.navbar.googlePlay}
              className="doppelrand-hallmark-tiny relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl text-yellow-500 transition-all duration-500 ease-premium hover:brightness-125 active:scale-[0.95]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5">
                <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm.46-.374L14.5 7.5l-2.5 2.5L4.07 1.44zM14.5 16.5L4.07 22.56 12 14.5l2.5 2zm.5-.5l5.4-3.06c.36-.2.6-.56.6-.94s-.24-.74-.6-.94L15 8l-3 4 3 4z"/>
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-text-primary transition-colors duration-300 hover:bg-white/[0.08] md:hidden"
            aria-label={dict.navbar.openMenu}
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
              aria-label={dict.navbar.closeMenu}
            >
              <X size={22} weight="light" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => {
                const motionProps = {
                  className:
                    "text-3xl font-light tracking-tight text-text-primary/80 transition-colors duration-300 hover:text-text-primary",
                  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: { opacity: 0, y: 20, filter: "blur(4px)" },
                  transition: {
                    duration: 0.6,
                    delay: 0.08 + i * 0.07,
                    ease: EASE_PREMIUM,
                  },
                  onClick: () => setOpen(false),
                };
                const MotionLink = motion(Link);
                return isHome ? (
                  <motion.a key={item.label} href={`#${item.hash}`} {...motionProps}>
                    {item.label}
                  </motion.a>
                ) : (
                  <MotionLink
                    key={item.label}
                    href={{ pathname: "/", hash: item.hash }}
                    {...motionProps}
                  >
                    {item.label}
                  </MotionLink>
                );
              })}
              {/* Mobile language switcher */}
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: EASE_PREMIUM,
                }}
              >
                <LanguageSwitcher />
              </motion.div>
              {/* Mobile store buttons */}
              <motion.div
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                  ease: EASE_PREMIUM,
                }}
              >
                <a
                  href="https://apps.apple.com/br/app/chainless-cripto-com-pix/id6476666418"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  aria-label={dict.navbar.appStore}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.08] text-yellow-500 transition-all duration-500 ease-premium hover:bg-white/[0.14] active:scale-[0.95]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=team.notus.chainless&hl"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  aria-label={dict.navbar.googlePlay}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.08] text-yellow-500 transition-all duration-500 ease-premium hover:bg-white/[0.14] active:scale-[0.95]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm.46-.374L14.5 7.5l-2.5 2.5L4.07 1.44zM14.5 16.5L4.07 22.56 12 14.5l2.5 2zm.5-.5l5.4-3.06c.36-.2.6-.56.6-.94s-.24-.74-.6-.94L15 8l-3 4 3 4z"/>
                  </svg>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
