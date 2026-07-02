import Link from "next/link";
import { cn } from "../../lib/utils";
import { Icon } from "../atoms/Icon";

/**
 * Molécula · Pagination
 * Navegación de páginas con elipsis. `makeHref(page)` construye el enlace de
 * cada página (server-friendly).
 */

function pageRange(current, total) {
  const delta = 1;
  const range = [];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);
  range.push(1);
  if (left > 2) range.push("…");
  for (let i = left; i <= right; i++) range.push(i);
  if (right < total - 1) range.push("…");
  if (total > 1) range.push(total);
  return range;
}

const arrowCls =
  "inline-flex h-9 items-center gap-1 rounded px-2.5 text-sm text-ink-700 transition-colors hover:bg-mist-50";
const disabledArrowCls = "inline-flex h-9 items-center gap-1 rounded px-2.5 text-sm text-line-300 pointer-events-none";

export function Pagination({ page = 1, totalPages = 1, makeHref = () => "#", className }) {
  if (totalPages <= 1) return null;
  const pages = pageRange(page, totalPages);

  return (
    <nav aria-label="Paginación" className={cn("flex items-center gap-1", className)}>
      {page > 1 ? (
        <Link href={makeHref(page - 1)} className={arrowCls} rel="prev">
          <Icon name="chevron-left" size={16} /> Anterior
        </Link>
      ) : (
        <span className={disabledArrowCls} aria-hidden="true">
          <Icon name="chevron-left" size={16} /> Anterior
        </span>
      )}

      <div className="mx-1 flex items-center gap-1">
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`e${i}`} className="px-1.5 text-sm text-ink-500">
              …
            </span>
          ) : (
            <Link
              key={p}
              href={makeHref(p)}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "inline-flex h-9 min-w-9 items-center justify-center rounded px-2 text-sm tabular-nums transition-colors",
                p === page ? "bg-jungle-500 text-white" : "text-ink-700 hover:bg-mist-50"
              )}
            >
              {p}
            </Link>
          )
        )}
      </div>

      {page < totalPages ? (
        <Link href={makeHref(page + 1)} className={arrowCls} rel="next">
          Siguiente <Icon name="chevron-right" size={16} />
        </Link>
      ) : (
        <span className={disabledArrowCls} aria-hidden="true">
          Siguiente <Icon name="chevron-right" size={16} />
        </span>
      )}
    </nav>
  );
}
