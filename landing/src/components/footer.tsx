"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE_PREMIUM, FadeUp } from "./motion";
import { ChainlessLogo } from "./chainless-logo";

const footerLinks = {
  Produto: [
    { label: "Rendimento DeFi", href: "/#rendimentos" },
    { label: "Cartão", href: "/#cartao" },
    { label: "Empréstimo BTC", href: "/#credito" },
    { label: "Segurança", href: "/#seguranca" },
  ],
  Recursos: [
    { label: "Central de ajuda", href: "https://support.devrev.ai/pt-BR/chainless" },
    { label: "Taxas", href: "/taxas" },
  ],
  Legal: [
    { label: "Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de uso", href: "/termos-de-uso" },
    { label: "Política AML", href: "/politica-aml" },
    { label: "Regulamentação", href: "/transparencia" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-dark-500 px-4 pb-16 pt-32" id="sobre">
      {/* Subtle top bleed from CTA section */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        <div className="h-[var(--glow-sm)] w-[var(--glow-md)] rounded-full bg-yellow-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[var(--container-content)]">
        <FadeUp>
          <div className="grid gap-14 md:grid-cols-12">
            {/* Brand column — generous breathing room */}
            <div className="md:col-span-6">
              <ChainlessLogo color="#FAFAF8" size={24} />
              <p className="mt-6 max-w-[260px] text-sm leading-[1.75] text-warm-300/70">
                Plataforma de patrimônio digital com autocustódia. Seu
                patrimônio cresce. Suas chaves continuam suas.
              </p>
              {/* Brand tagline — editorial serif treatment */}
              <p className="mt-8 text-small italic text-warm-400/50">
                Patrimônio digital soberano.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="md:col-span-2">
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
                    const className = "text-sm text-warm-300/60 transition-all duration-500 ease-premium hover:text-text-primary active:scale-[0.98]";
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a href={link.href} className={className}>
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className={className}>
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
        </FadeUp>

        {/* Premium divider — gradient fade */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-warm-700/25 to-transparent" />

        {/* Bottom bar — refined spacing */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-medium tracking-wide text-warm-400/50">
            &copy; {new Date().getFullYear()} Chainless. Patrimônio digital soberano.
          </p>
          <p className="max-w-[520px] text-sm leading-relaxed tracking-wide text-warm-400/50 md:text-right">
            Chainless é um produto da Notus Labs Ltda. (CNPJ 41.212.785/0001-43). Não é instituição
            autorizada pelo Banco Central do Brasil, não custodia ativos
            virtuais nem possui acesso a chaves privadas de usuários.
            Provedor de tecnologia nos termos do art. 9º, §6º da Resolução
            BCB nº 520/2025.
          </p>
        </div>
      </div>
    </footer>
  );
}
