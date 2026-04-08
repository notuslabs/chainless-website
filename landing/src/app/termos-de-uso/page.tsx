import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TermsContent } from "@/components/terms-content";

export const metadata: Metadata = {
  title: "Chainless | Termos de Uso",
  description:
    "Termos de Uso do aplicativo Chainless, carteira de ativos digitais desenvolvida pela Notus Labs Ltda.",
};

export default function TermosDeUsoPage() {
  return (
    <>
      <Navbar />
      <TermsContent />
      <Footer />
    </>
  );
}
