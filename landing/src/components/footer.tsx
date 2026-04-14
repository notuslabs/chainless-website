"use client";

import { useMessages, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { EASE_PREMIUM, FadeUp } from "./motion";
import { ChainlessLogo } from "./chainless-logo";

export function Footer() {
  const dict = useMessages() as any;
  const t = dict.footer;
  const locale = useLocale();
  const feesHref = locale === "en" ? "/fees" : "/taxas";

  type FooterLink = {
    label: string;
    href: string;
    forceLocale?: "pt" | "en";
  };
  const footerLinks: Record<string, FooterLink[]> = {
    [t.categories.produto]: [
      { label: t.links.rendimento, href: "/#rendimentos" },
      { label: t.links.cartao, href: "/#cartao" },
      { label: t.links.emprestimo, href: "/#credito" },
      { label: t.links.seguranca, href: "/#seguranca" },
    ],
    [t.categories.recursos]: [
      { label: "Blog", href: "/blog" },
      { label: t.links.ajuda, href: "https://support.devrev.ai/pt-BR/chainless" },
      { label: t.links.taxas, href: feesHref },
    ],
    [t.categories.legal]: [
      { label: t.links.privacidade, href: "/politica-de-privacidade", forceLocale: "pt" },
      { label: t.links.termos, href: "/termos-de-uso", forceLocale: "pt" },
      { label: t.links.aml, href: "/politica-aml", forceLocale: "pt" },
    ],
  };

  return (
    <footer className="relative bg-dark-500 px-6 pb-12 pt-20 md:pb-16 md:pt-32" id="sobre">
      {/* Subtle top bleed from CTA section */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="h-[var(--glow-sm)] w-[var(--glow-md)] rounded-full bg-yellow-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[var(--container-content)]">
        <FadeUp>
          <div className="grid gap-10 md:gap-14 md:grid-cols-12">
            {/* Brand column — generous breathing room */}
            <div className="md:col-span-6">
              <ChainlessLogo color="#FAFAF8" size={24} />
              <p className="mt-6 max-w-[260px] text-sm leading-[1.75] text-warm-300/70">
                {t.brandDescription}
              </p>
              {/* Brand tagline — editorial serif treatment */}
              <p className="mt-8 text-small italic text-warm-400/50">
                {t.tagline}
              </p>
            </div>

            {/* Link columns — 2-col grid on mobile, dissolve into 12-col on md+ */}
            <div className="grid grid-cols-2 gap-8 md:contents">
            {Object.entries(footerLinks).map(([category, links], idx) => (
              <div key={category} className={`${idx === Object.keys(footerLinks).length - 1 ? "col-span-2" : ""} md:col-span-2`}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-300/60">
                  {category}
                </h4>
                <motion.div
                  className="mt-3 mb-5 h-px w-6 bg-yellow-500/15"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.8, ease: EASE_PREMIUM }}
                />
                <ul className="flex flex-col gap-3.5">
                  {links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    const className = "min-h-[44px] inline-flex items-center text-sm text-warm-300/60 transition-all duration-500 ease-premium hover:text-text-primary active:scale-[0.98]";
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a href={link.href} className={className}>
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            locale={link.forceLocale}
                            className={className}
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            </div>
          </div>
        </FadeUp>

        {/* Premium divider — gradient fade */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-warm-700/25 to-transparent" />

        {/* Bottom bar — refined spacing */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-medium tracking-wide text-warm-400/50">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
          <p className="max-w-[520px] text-sm leading-relaxed tracking-wide text-warm-400/50 md:text-right">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
