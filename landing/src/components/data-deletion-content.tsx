"use client";

import { useLocale } from "next-intl";
import { FadeUp } from "./motion";

const COPY = {
  pt: {
    eyebrow: "Gestão de Dados",
    title: "Gestão de Dados",
    lastUpdatedLabel: "Última atualização",
    lastUpdatedDate: "4 de maio de 2024",
    intro:
      "Esta página oferece informações e orientações sobre como você pode solicitar a exclusão de seus dados pessoais de nosso banco de dados. Estamos comprometidos com a proteção da sua privacidade e com o cumprimento das leis aplicáveis de proteção de dados. No entanto, é importante notar que dados registrados na blockchain são permanentes e não podem ser excluídos.",
    requestHeading: "Solicitação de Deleção de Dados",
    requestP1Before: "Se você deseja solicitar a exclusão de seus dados pessoais de nosso sistema, por favor, envie um e-mail para ",
    requestP1Middle: " com o assunto ",
    requestP1Subject: "\u201CSolicita\u00e7\u00e3o de Dele\u00e7\u00e3o de Dados\u201D",
    requestP1After: ". Certifique-se de enviar o e-mail do endereço de e-mail associado à sua conta para verificarmos sua identidade.",
    requestP2:
      "Após a verificação de sua identidade, confirmaremos o recebimento da sua solicitação e iniciaremos o processo de deleção dos dados dos nossos sistemas convencionais, o qual pode levar até 30 dias.",
    requestP3:
      "Você receberá uma notificação por e-mail assim que a deleção estiver concluída, exceto para dados na blockchain.",
    blockchainHeading: "Nota Sobre Dados na Blockchain",
    blockchainP:
      "Dados na blockchain são imutáveis. Portanto, qualquer dado pessoal registrado na blockchain como parte de nosso serviço permanecerá inalterado.",
  },
  en: {
    eyebrow: "Data Management",
    title: "Data Management",
    lastUpdatedLabel: "Last updated",
    lastUpdatedDate: "May 4, 2024",
    intro:
      "This page provides information and guidance on how to request the deletion of your personal data from our database. We are committed to protecting your privacy and complying with applicable data protection laws. However, please note that data recorded on blockchain networks is permanent and cannot be deleted.",
    requestHeading: "Data Deletion Request",
    requestP1Before: "If you would like to request the deletion of your personal data from our system, please send an email to ",
    requestP1Middle: " with the subject ",
    requestP1Subject: "\u201CData Deletion Request\u201D",
    requestP1After: ". Be sure to send the email from the address associated with your account so we can verify your identity.",
    requestP2:
      "Once your identity is verified, we will confirm receipt of your request and begin the process of deleting your data from our conventional systems, which may take up to 30 days.",
    requestP3:
      "You will receive an email notification once the deletion is complete, except for data stored on the blockchain.",
    blockchainHeading: "A Note on Blockchain Data",
    blockchainP:
      "Blockchain data is immutable. Therefore, any personal data recorded on the blockchain as part of our service will remain unchanged.",
  },
} as const;

export function DataDeletionContent() {
  const locale = useLocale();
  const t = COPY[locale === "en" ? "en" : "pt"];

  return (
    <main className="relative bg-dark-500 px-4 pb-32 pt-40">
      <div className="mx-auto max-w-[780px]">
        {/* Header */}
        <FadeUp>
          <p className="text-overline font-semibold uppercase tracking-[0.25em] text-text-secondary">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.15] tracking-tight text-text-primary md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-3 text-small text-text-secondary">
            {t.lastUpdatedLabel}: {t.lastUpdatedDate}
          </p>
          <div className="mt-8 h-px bg-white/[0.06]" />
        </FadeUp>

        {/* Body — legal prose */}
        <FadeUp>
          <div className="legal-prose mt-12 space-y-10 text-[0.9375rem] leading-[1.85] text-text-secondary">
            <section>
              <p>{t.intro}</p>
            </section>

            <section>
              <h2>{t.requestHeading}</h2>
              <p>
                {t.requestP1Before}
                <a href="mailto:support@chainless.finance">support@chainless.finance</a>
                {t.requestP1Middle}
                <strong>{t.requestP1Subject}</strong>
                {t.requestP1After}
              </p>
              <p>{t.requestP2}</p>
              <p>{t.requestP3}</p>
            </section>

            <section>
              <h2>{t.blockchainHeading}</h2>
              <p>{t.blockchainP}</p>
            </section>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
