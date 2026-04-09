const PILLAR_CONFIG = {
  sovereignty: {
    classes: "bg-yellow-500/15 text-yellow-400",
    label: "Soberania Digital",
  },
  wealth: {
    classes: "bg-[#3DA66A]/15 text-[#3DA66A]",
    label: "Crescimento Patrimonial",
  },
  practical: {
    classes: "bg-[#4A90DA]/15 text-[#4A90DA]",
    label: "Vida Financeira Pratica",
  },
} as const;

export type Pillar = keyof typeof PILLAR_CONFIG;

interface PillarTagProps {
  pillar: Pillar;
  className?: string;
}

export function PillarTag({ pillar, className = "" }: PillarTagProps) {
  const { classes, label } = PILLAR_CONFIG[pillar];

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[13px] font-medium ${classes} ${className}`}
      aria-label={`Categoria: ${label}`}
    >
      {label}
    </span>
  );
}
