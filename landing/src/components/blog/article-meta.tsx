import { useTranslations } from "next-intl";

interface ArticleMetaProps {
  author: string;
  date: string;
  readingTime: number;
  className?: string;
}

export function ArticleMeta({
  author,
  date,
  readingTime,
  className = "",
}: ArticleMetaProps) {
  const t = useTranslations("blog.meta");
  return (
    <div
      className={`flex items-center gap-2 text-[13px] ${className}`}
      role="group"
      aria-label={t("groupLabel")}
    >
      <span className="font-normal text-warm-300">{author}</span>
      <span className="text-warm-500" aria-hidden="true">&middot;</span>
      <span className="font-normal text-warm-400">{date}</span>
      <span className="text-warm-500" aria-hidden="true">&middot;</span>
      <span
        className="font-mono font-normal text-warm-400"
        aria-label={t("readingTimeAria", { minutes: readingTime })}
      >
        {t("readingTime", { minutes: readingTime })}
      </span>
    </div>
  );
}
