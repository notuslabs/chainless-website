import { Link } from "@/i18n/navigation";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  pillar?: string | null;
}

function buildPageUrl(
  basePath: string,
  page: number,
  pillar?: string | null
): string {
  const params = new URLSearchParams();
  if (pillar) params.set("pillar", pillar);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `${basePath}?${query}` : basePath;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  pillar,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex items-center justify-center gap-1 py-12"
      aria-label="Paginação"
    >
      {/* Prev arrow */}
      {prevDisabled ? (
        <span
          className="flex h-10 w-10 items-center justify-center rounded-lg opacity-30 text-warm-400 cursor-not-allowed"
          aria-disabled="true"
          aria-label="Página anterior"
        >
          <CaretLeft weight="bold" size={18} />
        </span>
      ) : (
        <Link
          href={buildPageUrl(basePath, currentPage - 1, pillar)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-warm-400 transition-colors duration-200 hover:bg-white/[0.04] hover:text-[#FAFAF8]"
          aria-label="Página anterior"
        >
          <CaretLeft weight="bold" size={18} />
        </Link>
      )}

      {/* Page numbers */}
      {pages.map((page) => {
        const isActive = page === currentPage;

        if (isActive) {
          return (
            <span
              key={page}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500 text-[15px] font-semibold text-dark-500"
              aria-current="page"
              aria-label={`Página ${page}, atual`}
            >
              {page}
            </span>
          );
        }

        return (
          <Link
            key={page}
            href={buildPageUrl(basePath, page, pillar)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[15px] text-warm-400 transition-colors duration-200 hover:bg-white/[0.04] hover:text-[#FAFAF8]"
            aria-label={`Ir para página ${page}`}
          >
            {page}
          </Link>
        );
      })}

      {/* Next arrow */}
      {nextDisabled ? (
        <span
          className="flex h-10 w-10 items-center justify-center rounded-lg opacity-30 text-warm-400 cursor-not-allowed"
          aria-disabled="true"
          aria-label="Próxima página"
        >
          <CaretRight weight="bold" size={18} />
        </span>
      ) : (
        <Link
          href={buildPageUrl(basePath, currentPage + 1, pillar)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-warm-400 transition-colors duration-200 hover:bg-white/[0.04] hover:text-[#FAFAF8]"
          aria-label="Próxima página"
        >
          <CaretRight weight="bold" size={18} />
        </Link>
      )}
    </nav>
  );
}
