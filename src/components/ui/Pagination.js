"use client";

import { cn } from "../../lib/utils";

/**
 * Componente de paginación completo con números de página, navegación y selector de límite
 *
 * @param {Object} props
 * @param {number} props.total - Total de items
 * @param {number} props.limit - Items por página actual
 * @param {number} props.offset - Offset actual
 * @param {string} props.pathname - Ruta base para construir URLs (ej: "/regiones/andina")
 * @param {Object} props.searchParams - Parámetros de búsqueda actuales (sin offset/limit)
 * @param {number[]} [props.limitOptions=[12, 24, 48]] - Opciones para el selector de límite
 */
export function Pagination({
  total,
  limit,
  offset,
  pathname,
  searchParams = {},
  limitOptions = [12, 24, 48]
}) {
  // Función para construir URLs con nuevos offset/limit
  const buildUrl = ({ offset: newOffset, limit: newLimit }) => {
    const params = new URLSearchParams();

    // Agregar parámetros de búsqueda existentes
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, String(value));
      }
    });

    // Agregar nuevos offset y limit
    if (newOffset > 0) {
      params.set("offset", String(newOffset));
    }
    params.set("limit", String(newLimit));

    const queryString = params.toString();
    return queryString ? `${pathname}?${queryString}` : pathname;
  };

  // Calcular información de paginación
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);
  const hasNext = offset + limit < total;
  const hasPrev = offset > 0;

  // Calcular rango de items mostrados
  const itemStart = Math.min(offset + 1, total);
  const itemEnd = Math.min(offset + limit, total);

  // Generar números de página con ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 7; // Cantidad máxima de números visibles

    if (totalPages <= maxVisible) {
      // Mostrar todas las páginas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para mostrar con ellipsis
      if (currentPage <= 4) {
        // Cerca del inicio
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Cerca del final
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        // En medio
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1 && limitOptions.length === 0) {
    return null; // No mostrar paginación si solo hay una página y no hay opciones de límite
  }

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col gap-4">
      {/* Información de rango */}
      <div className="text-center text-sm text-ink-600">
        Mostrando <span className="font-semibold text-ink-900">{itemStart}-{itemEnd}</span> de{" "}
        <span className="font-semibold text-ink-900">{total}</span> resultados
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Botón primera página */}
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

        {/* Botón anterior */}
        {hasPrev && (
          <a
            href={buildUrl({ offset: Math.max(0, offset - limit), limit })}
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

        {/* Números de página */}
        {pageNumbers.map((page, idx) => {
          if (page === 'ellipsis') {
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
                  ? "border-jungle-600 bg-jungle-600 text-white shadow-md"
                  : "border-white/60 bg-white/40 text-ink-700 backdrop-blur-sm hover:bg-white/60 hover:shadow-md"
              )}
              aria-label={`Página ${page}`}
              aria-current={isActive ? "page" : undefined}
            >
              {page}
            </a>
          );
        })}

        {/* Botón siguiente */}
        {hasNext && (
          <a
            href={buildUrl({ offset: offset + limit, limit })}
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

        {/* Botón última página */}
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

      {/* Selector de límite */}
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
                  className={cn(
                    "flex h-8 w-12 items-center justify-center rounded-lg",
                    "border text-xs font-medium",
                    "transition hover:-translate-y-0.5",
                    isActive
                      ? "border-river-600 bg-river-600 text-white shadow-sm"
                      : "border-white/60 bg-white/40 text-ink-700 backdrop-blur-sm hover:bg-white/60"
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
