"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { ImageFrame } from "../atoms";

/**
 * Organismo · CommunityMesa — dirección "Mesa de pueblos".
 *
 * Los veinte pueblos en una sola superficie: el tamaño de cada pieza dice
 * cuántos relatos guarda, y la búsqueda, el filtro por territorio y el orden
 * recomponen la mesa sin cambiar de página.
 *
 * Todas las piezas se sirven en el HTML: filtrar sólo oculta con CSS y ordenar
 * sólo mueve `order`, así que el rastreador ve siempre los veinte enlaces.
 *
 * Props: `communities` = [{ slug, name, count, imageUrl, motif, regionName,
 * regionSlug, accent }]; `regions` = [{ slug, name, count }].
 */

function normaliza(valor) {
  return String(valor || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Reparto de superficie en la retícula de 12 columnas (escritorio).
function tramo(count, escalaPorVolumen) {
  if (!escalaPorVolumen) return { c: 3, r: 2 };
  if (count >= 25) return { c: 4, r: 3 };
  if (count >= 14) return { c: 3, r: 3 };
  return { c: 3, r: 2 };
}

const ORDENES = [
  { id: "relatos", label: "Por relatos" },
  { id: "alfabetico", label: "A · Z" },
];

export function CommunityMesa({
  communities = [],
  regions = [],
  escalaPorVolumen = true,
}) {
  const [q, setQ] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [orden, setOrden] = useState("relatos");

  const total = useMemo(
    () => communities.reduce((t, c) => t + (c.count || 0), 0),
    [communities]
  );

  const visibles = useMemo(() => {
    const busqueda = normaliza(q).trim();
    const filtradas = communities.filter((c) => {
      if (filtro !== "todos" && c.regionSlug !== filtro) return false;
      if (busqueda && !normaliza(c.name).includes(busqueda)) return false;
      return true;
    });
    return filtradas.sort((a, b) =>
      orden === "alfabetico"
        ? normaliza(a.name).localeCompare(normaliza(b.name))
        : (b.count || 0) - (a.count || 0)
    );
  }, [communities, filtro, orden, q]);

  const rango = useMemo(() => {
    const mapa = new Map();
    visibles.forEach((c, i) => mapa.set(c.slug, i + 1));
    return mapa;
  }, [visibles]);

  const relatosVisibles = visibles.reduce((t, c) => t + (c.count || 0), 0);
  const chips = [{ slug: "todos", name: "Todos", count: total }, ...regions];

  return (
    <>
      {/* Barra de exploración. Se queda pegada arriba: con veinte piezas y una
          mesa alta, perder el filtro al bajar obliga a volver. */}
      <div className="sticky top-[7.5rem] z-30 mx-[calc(var(--gutter)*-1)] border-b border-line-200 bg-paper px-[var(--gutter)] pb-3 pt-4 lg:top-16">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
          <div className="relative min-w-0 flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-500">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.6-3.6" />
              </svg>
            </span>
            <input
              type="search"
              value={q}
              onChange={(event) => setQ(event.target.value)}
              placeholder="Buscar un pueblo…"
              aria-label="Buscar un pueblo"
              className="h-11 w-full rounded border border-line-200 bg-white pl-11 pr-4 font-body text-[0.9375rem] text-ink-900 transition-colors placeholder:text-ink-500 hover:border-line-300 focus:border-jungle-500 focus:outline-none focus:ring-2 focus:ring-jungle-500/20"
            />
          </div>

          <div className="flex shrink-0 overflow-hidden rounded border border-line-200">
            {ORDENES.map((opcion, i) => (
              <button
                key={opcion.id}
                type="button"
                onClick={() => setOrden(opcion.id)}
                aria-pressed={orden === opcion.id}
                className={cn(
                  // En móvil el control ocupa el ancho: sin `flex-1` los dos
                  // botones se apilan a la izquierda y queda una caja vacía.
                  "h-11 flex-1 whitespace-nowrap px-4 text-sm font-medium transition-colors lg:flex-none",
                  i < ORDENES.length - 1 && "border-r border-line-200",
                  orden === opcion.id
                    ? "bg-jungle-700 text-white"
                    : "bg-white text-ink-700 hover:bg-mist-50"
                )}
              >
                {opcion.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-5">
          <div className="atlas-rail flex min-w-0 gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
            {chips.map((chip) => (
              <button
                key={chip.slug}
                type="button"
                onClick={() => setFiltro(chip.slug)}
                aria-pressed={filtro === chip.slug}
                className={cn(
                  "inline-flex h-9 shrink-0 items-center gap-2 rounded-sm border px-3 text-sm font-medium transition-colors",
                  filtro === chip.slug
                    ? "border-jungle-500 bg-jungle-500 text-white"
                    : "border-line-200 bg-white text-ink-700 hover:border-line-300"
                )}
              >
                <span>{chip.name}</span>
                <span className="atlas-figure text-[0.8125rem] opacity-70">
                  {chip.count}
                </span>
              </button>
            ))}
          </div>
          <p
            aria-live="polite"
            className="atlas-figure hidden shrink-0 whitespace-nowrap text-[0.8125rem] text-ink-500 lg:block"
          >
            {visibles.length} de {communities.length} pueblos ·{" "}
            {relatosVisibles} relatos
          </p>
        </div>
      </div>

      <div className="mt-7 grid auto-rows-[172px] grid-cols-2 gap-2.5 lg:auto-rows-[112px] lg:grid-cols-12 lg:gap-3 lg:[grid-auto-flow:dense]">
        {communities.map((community) => {
          const posicion = rango.get(community.slug);
          const { c, r } = tramo(community.count || 0, escalaPorVolumen);
          const mayor = posicion === 1;
          return (
            <Link
              key={community.slug}
              href={`/comunidades/${community.slug}`}
              style={{ order: posicion || 0, "--c": c, "--r": r }}
              className={cn(
                "group relative block min-w-0 overflow-hidden text-white no-underline",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ember-400",
                "lg:[grid-column:span_var(--c)] lg:[grid-row:span_var(--r)]",
                mayor ? "col-span-2" : "col-span-1",
                !posicion && "hidden"
              )}
            >
              <ImageFrame
                src={community.imageUrl}
                alt={community.name}
                ratio={null}
                sizes="(max-width: 1024px) 50vw, 33vw"
                placeholderMotif={community.motif}
                placeholderSize={54}
                className="absolute inset-0 h-full w-full rounded-none border-0"
                imgClassName="atlas-image-zoom object-cover"
              />
              {community.imageUrl ? (
                <span className="atlas-scrim pointer-events-none absolute inset-0" />
              ) : null}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ backgroundColor: community.accent }}
              />
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 px-4 pb-4 pt-3",
                  community.imageUrl ? "atlas-on-image" : ""
                )}
              >
                <span
                  className={cn(
                    "atlas-kicker block !text-[0.6875rem]",
                    community.imageUrl ? "!text-white/75" : ""
                  )}
                >
                  {community.regionName}
                </span>
                <span
                  className={cn(
                    "atlas-title-md mt-1.5 block",
                    community.imageUrl ? "!text-white" : ""
                  )}
                >
                  {community.name}
                </span>
                <span
                  className={cn(
                    "atlas-figure mt-1 block text-[0.8125rem]",
                    community.imageUrl ? "text-white/78" : "text-ink-500"
                  )}
                >
                  {community.count} relatos
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      {visibles.length === 0 ? (
        <div className="mt-7 border border-line-100 bg-mist-50 p-12 text-center">
          <p className="atlas-title-md">Ningún pueblo con ese nombre</p>
          <p className="mt-2.5 text-ink-700">
            Prueba con otro nombre o quita el filtro de territorio.
          </p>
        </div>
      ) : null}
    </>
  );
}
