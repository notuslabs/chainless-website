import { DoppelrandCard } from "@/components/doppelrand-card";

interface TldrBoxProps {
  children: React.ReactNode;
}

export function TldrBox({ children }: TldrBoxProps) {
  return (
    <div className="mt-12 mb-16">
      <DoppelrandCard variant="tldr" hover={false}>
        {/* TL;DR label */}
        <p
          className="font-mono font-semibold uppercase text-yellow-500 mb-3"
          style={{
            fontSize: "13px",
            letterSpacing: "0.1em",
          }}
        >
          TL;DR
        </p>
        {/* Body content */}
        <div className="text-text-primary/75 text-[15px] leading-relaxed [&_ul]:space-y-2 [&_li]:flex [&_li]:gap-2">
          {children}
        </div>
      </DoppelrandCard>
    </div>
  );
}
