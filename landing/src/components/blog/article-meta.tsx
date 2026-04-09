interface ArticleMetaProps {
  author: string;
  date: string;
  readingTime: number;
  className?: string;
}

/**
 * Renders author, date, and reading time in a compact inline row.
 *
 * Note: `font-mono` maps to the system monospace stack unless IBM Plex Mono
 * is added to the font pipeline (--font-mono is not currently loaded).
 */
export function ArticleMeta({
  author,
  date,
  readingTime,
  className = "",
}: ArticleMetaProps) {
  return (
    <div
      className={`flex items-center gap-2 text-[13px] ${className}`}
      role="group"
      aria-label="Metadados do artigo"
    >
      <span className="font-normal text-warm-300">{author}</span>
      <span className="text-warm-500" aria-hidden="true">&middot;</span>
      <span className="font-normal text-warm-400">{date}</span>
      <span className="text-warm-500" aria-hidden="true">&middot;</span>
      <span
        className="font-mono font-normal text-warm-400"
        aria-label={`${readingTime} minutos de leitura`}
      >
        {readingTime} min de leitura
      </span>
    </div>
  );
}
