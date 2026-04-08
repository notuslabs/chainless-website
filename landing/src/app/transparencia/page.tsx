import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TransparencyContent } from "@/components/transparency-content";

export const metadata: Metadata = {
  title: "Chainless | Regulamentação",
  description:
    "Como a Chainless se posiciona perante a Resolução BCB nº 520/2025. Autocustódia integral, sem intermediação nem custódia de ativos virtuais.",
};

export default function TransparenciaPage() {
  return (
    <>
      <Navbar />
      <TransparencyContent />
      <Footer />
    </>
  );
}
