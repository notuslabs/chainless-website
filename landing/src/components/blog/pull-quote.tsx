interface PullQuoteProps {
  children: React.ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote
      className="pull-quote my-10 border-l-[3px] border-yellow-500 pl-6 font-serif font-light text-text-primary/70"
      style={{ fontSize: "21px", lineHeight: 1.55, fontWeight: 300 }}
    >
      {children}
    </blockquote>
  );
}
