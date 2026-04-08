import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AmlContent } from "@/components/aml-content";

export const metadata: Metadata = {
  title: "Chainless | Política AML",
  description:
    "Política de Prevenção e Combate à Lavagem de Dinheiro, ao Financiamento do Terrorismo e da Proliferação de Armas de Destruição em Massa.",
};

export default function PoliticaAmlPage() {
  return (
    <>
      <Navbar />
      <AmlContent />
      <Footer />
    </>
  );
}
