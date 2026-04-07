import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TransparencyContent } from "@/components/transparency-content";

export const metadata: Metadata = {
  title: "Chainless — Enquadramento Regulatório",
  description:
    "Enquadramento regulatório da Notus Labs Ltda. perante a Resolução BCB nº 520/2025. Provedor de tecnologia — art. 9º, §6º.",
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
