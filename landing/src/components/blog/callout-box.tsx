import { Info, Warning } from "@phosphor-icons/react/dist/ssr";

interface CalloutBoxProps {
  type: "info" | "warning";
  title?: string;
  children: React.ReactNode;
}

const config = {
  info: {
    border: "#4A90DA",
    iconColor: "text-info",
    Icon: Info,
  },
  warning: {
    border: "#D4890D",
    iconColor: "text-warning",
    Icon: Warning,
  },
} as const;

export function CalloutBox({ type, title, children }: CalloutBoxProps) {
  const { border, iconColor, Icon } = config[type];

  return (
    <div
      className="bg-dark-700 rounded-lg p-5 border-l-[3px]"
      style={{ borderLeftColor: border }}
      role="note"
      aria-label={title ?? (type === "info" ? "Informação" : "Aviso")}
    >
      <div className="flex gap-3">
        {/* Icon */}
        <div className={`mt-0.5 shrink-0 ${iconColor}`}>
          <Icon size={18} weight="duotone" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-sans font-semibold text-text-primary mb-1.5" style={{ fontSize: "15px" }}>
              {title}
            </p>
          )}
          <div className="font-sans text-text-primary/75" style={{ fontSize: "15px", lineHeight: 1.6 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
