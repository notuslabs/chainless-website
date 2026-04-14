"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { DoppelrandCard } from "@/components/doppelrand-card";
import { MagneticButton } from "@/components/motion";
import { useTranslations } from "next-intl";

const DEFAULT_APP_STORE_HREF = "https://apps.apple.com/br/app/chainless-cripto-com-pix/id6476666418";

interface SoftCtaProps {
  heading?: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function SoftCta({
  heading,
  description,
  ctaText,
  ctaHref = DEFAULT_APP_STORE_HREF,
}: SoftCtaProps) {
  const t = useTranslations("blog.softCta");
  const resolvedHeading = heading ?? t("defaultHeading");
  const resolvedCtaText = ctaText ?? t("defaultCta");
  return (
    <div className="mt-16 mb-12 relative">
      {/* Atmospheric glow orb — top-right */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none -translate-y-1/4 translate-x-1/4"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(255,199,61,0.015) 0%, transparent 70%)",
          filter: "blur(180px)",
        }}
      />

      <DoppelrandCard hover={false}>
        <div className="flex flex-col items-center text-center px-8 py-10 gap-6">
          {/* Heading */}
          <h4 className="font-sans font-semibold text-text-primary text-[1.75rem] leading-[1.2]">
            {resolvedHeading}
          </h4>

          <p className="font-sans text-text-primary/75 max-w-lg text-[18px] leading-[1.6]">
            {description}
          </p>

          {/* CTA Button */}
          <MagneticButton href={ctaHref}>
            <span className="inline-flex items-center gap-2 bg-yellow-500 text-dark-500 rounded-2xl px-6 py-3 font-semibold text-[15px] transition-opacity hover:opacity-90">
              {resolvedCtaText}
              <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </span>
          </MagneticButton>
        </div>
      </DoppelrandCard>
    </div>
  );
}
