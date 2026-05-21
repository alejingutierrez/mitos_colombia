"use client";

import { cn } from "../../lib/utils";

/**
 * Pagination component with numbered pages, prev/next, and optional limit selector.
 *
 * @param {Object} props
 * @param {number} props.total - Total items
 * @param {number} props.limit - Items per page
 * @param {number} props.offset - Current offset (0-based)
 * @param {string} props.pathname - Base path (e.g. "/mitos")
 * @param {Object} props.searchParams - Other search params to preserve (without offset/limit)
 * @param {number[]} [props.limitOptions=[12, 24, 48]] - Limit selector options ([] to hide)
 * @param {boolean} [props.pathPagination=false] - If true, emit /pathname/pagina/N URLs instead of ?offset=N
 */
export function Pagination({
  total,
  limit,
  offset,
  pathname,
  searchParams = {},
  limitOptions = [12, 24, 48],
  pathPagination = false,
}) {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);
  const hasNext = offset + limit < total;
  const hasPrev = offset > 0;

  const itemStart = Math.min(offset + 1, total);
  const itemEnd = Math.min(offset + limit, total);

  const hasSearchFilters = Object.values(searchParams).some(
    (value) => value !== undefined && value !== null && value !== ""
  );

  const buildSearchString = (extra = {}) => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, String(value));
      }
    });
    Object.entries(extra).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, String(value));
      }
    });
    return params.toString();
  };

  const buildUrl = ({ offset: newOffset, limit: newLimit }) => {
    if (pathPagination && !hasSearchFilters) {
      const page = Math.floor(newOffset / newLimit) + 1;
      const base = page <= 1 ? pathname : `${pathname}/pagina/${page}`;
      // Path pagination only used at default limit; if user changed limit, fall back to query.
      if (newLimit && newLimit !== limit) {
        const qs = buildSearchString({ limit: newLimit });
        return qs ? `${base}?${qs}` : base;
      }
      return base;
    }
    const qs = buildSearchString({
      ...(newOffset > 0 ? { offset: newOffset } : {}),
      ...(newLimit ? { limit: newLimit } : {}),
    });
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push("ellipsis");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push("ellipsis");
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push("ellipsis");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push("ellipsis");
      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages <= 1 && limitOptions.length === 0) {
    return null;
  }

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-sm text-ink-600">
        Mostrando <span className="font-semibold text-ink-900">{itemStart}-{itemEnd}</span> de{" "}
        <span className="font-semibold text-ink-900">{total}</span> resultados
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {hasPrev && currentPage > 2 && (
          <a
            href={buildUrl({ offset: 0, limit })}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg",
              "border border-white/60 bg-white/40 backdrop-blur-sm",
              "text-sm font-medium text-ink-700",
              "transition hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-md"
            )}
            aria-label="Primera página"
          >
            «
          </a>
        )}

        {hasPrev && (
          <a
            href={buildUrl({ offset: Math.max(0, offset - limit), limit })}
            rel="prev"
            className={cn(
              "flex h-10 items-center gap-1 rounded-lg px-4",
              "border border-white/60 bg-white/40 backdrop-blur-sm",
              "text-sm font-medium text-ink-700",
              "transition hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-md"
            )}
          >
            ‹ Anterior
          </a>
        )}

        {pageNumbers.map((page, idx) => {
          if (page === "ellipsis") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="flex h-10 w-10 items-center justify-center text-ink-500"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;
          const pageOffset = (page - 1) * limit;

          return (
            <a
              key={page}
              href={buildUrl({ offset: pageOffset, limit })}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg",
                "border text-sm font-medium",
                "transition hover:-translate-y-0.5",
                isActive
                  ? "border-ink-900 bg-ink-900 text-[#f1ede3] shadow-md"
                  : "border-[rgba(18,22,24,0.1)] bg-white/70 text-ink-700 backdrop-blur-sm hover:bg-white/90 hover:shadow-md"
              )}
              aria-label={`Página ${page}`}
              aria-current={isActive ? "page" : undefined}
            >
              {page}
            </a>
          );
        })}

        {hasNext && (
          <a
            href={buildUrl({ offset: offset + limit, limit })}
            rel="next"
            className={cn(
              "flex h-10 items-center gap-1 rounded-lg px-4",
              "border border-white/60 bg-white/40 backdrop-blur-sm",
              "text-sm font-medium text-ink-700",
              "transition hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-md"
            )}
          >
            Siguiente ›
          </a>
        )}

        {hasNext && currentPage < totalPages - 1 && (
          <a
            href={buildUrl({ offset: (totalPages - 1) * limit, limit })}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg",
              "border border-white/60 bg-white/40 backdrop-blur-sm",
              "text-sm font-medium text-ink-700",
              "transition hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-md"
            )}
            aria-label="Última página"
          >
            »
          </a>
        )}
      </div>

      {limitOptions.length > 0 && (
        <div className="flex items-center justify-center gap-2 text-sm text-ink-600">
          <span>Resultados por página:</span>
          <div className="flex gap-2">
            {limitOptions.map((option) => {
              const isActive = option === limit;
              return (
                <a
                  key={option}
                  href={buildUrl({ offset: 0, limit: option })}
                  rel="nofollow"
                  className={cn(
                    "flex h-8 w-12 items-center justify-center rounded-lg",
                    "border text-xs font-medium",
                    "transition hover:-translate-y-0.5",
                    isActive
                      ? "border-[#bd8642] bg-[#d8aa62] text-[#0a0f0c] shadow-sm"
                      : "border-[rgba(18,22,24,0.1)] bg-white/70 text-ink-700 backdrop-blur-sm hover:bg-white/90"
                  )}
                >
                  {option}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
