import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeesContent } from "@/components/fees-content";

export const metadata: Metadata = {
  title: "Chainless | Taxas",
  description:
    "Todas as taxas cobradas pela Chainless. Sem taxas ocultas, sem surpresas.",
};

export default function TaxasPage() {
  return (
    <>
      <Navbar />
      <FeesContent />
      <Footer />
    </>
  );
}
