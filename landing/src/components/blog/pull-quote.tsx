interface PullQuoteProps {
  children: React.ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="pull-quote my-10 border-l-[3px] border-yellow-500 pl-6 font-serif font-light text-text-primary/70 text-[21px] leading-[1.55]">
      {children}
    </blockquote>
  );
}
