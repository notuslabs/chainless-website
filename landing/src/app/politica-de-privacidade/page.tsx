import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PrivacyContent } from "@/components/privacy-content";

export const metadata: Metadata = {
  title: "Chainless | Política de Privacidade",
  description:
    "Política de Privacidade da Chainless. Como coletamos, usamos, compartilhamos e protegemos suas informações pessoais.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </>
  );
}
