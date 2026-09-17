"use client";

import { useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { CommunityPlate } from "./CommunityPlate";

/**
 * Organismo · CommunityIndexBoard — la mesa completa de /comunidades.
 *
 * Continúa la dirección «Mesa de pueblos» de `CommunityMesa` —una sola
 * superficie, el tamaño de cada pieza dice cuántos relatos guarda, y la
 * búsqueda y los filtros recomponen la mesa sin cambiar de página— pero
 * dejando de esconder. La mesa anterior servía veinte comunidades; ésta sirve
 * las treinta y ocho que tienen al menos un relato, incluidas las diecisiete
 * que el listón de seis dejaba fuera.
 *
 * Con dieciocho piezas más hacen falta cuatro escalones de superficie y no
 * tres: si el escalón pequeño se comparte entre una comunidad de once relatos
 * y otra de uno, la mesa deja de decir la verdad sobre el reparto del archivo,
 * que es lo único que justifica que las piezas midan distinto.
 *
 * Todas las piezas se sirven en el HTML: filtrar sólo oculta con CSS y ordenar
 * sólo mueve `order`, así que el rastreador ve siempre los treinta y ocho
 * enlaces, haya filtro puesto o no.
 *
 * Props: `communities` = [{ slug, name, count, imageUrl, motif, regionName,
 * regionSlug, accent, accentKey }]; `regions` = [{ slug, name, count }].
 */

function normaliza(valor) {
  return String(valor || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Reparto de superficie en la retícula de doce columnas (escritorio).
 *
 * Cuatro escalones. Los dos grandes se quedan como estaban para no mover las
 * comunidades que ya tenían su sitio; los dos pequeños reparten la cola larga:
 * media pieza para las de cuatro relatos o más, y un tercio para las que
 * tienen menos, que siguen siendo una lámina legible con nombre, territorio y
 * cifra.
 */
function tramo(count) {
  if (count >= 25) return { c: 4, r: 3, title: "atlas-title-md", motif: 168 };
  if (count >= 12) return { c: 4, r: 2, title: "atlas-title-md", motif: 132 };
  if (count >= 4) return { c: 3, r: 2, title: "atlas-title-md", motif: 112 };
  return { c: 2, r: 2, title: "atlas-title-sm", motif: 88 };
}

const ORDENES = [
  { id: "relatos", label: "Por relatos" },
  { id: "alfabetico", label: "A · Z" },
];

export function CommunityIndexBoard({ communities = [], regions = [] }) {
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
  const chips = [{ slug: "todos", name: "Todas", count: total }, ...regions];

  return (
    <>
      {/* Barra de exploración. Se queda pegada arriba: con la mesa completa a
          la vista, perder el filtro al bajar obliga a volver. */}
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
              placeholder="Buscar una comunidad…"
              aria-label="Buscar una comunidad"
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
            {visibles.length} de {communities.length} comunidades ·{" "}
            {relatosVisibles} relatos
          </p>
        </div>
      </div>

      <div className="mt-7 grid auto-rows-[172px] grid-cols-2 gap-2.5 lg:auto-rows-[112px] lg:grid-cols-12 lg:gap-3 lg:[grid-auto-flow:dense]">
        {communities.map((community) => {
          const posicion = rango.get(community.slug);
          const { c, r, title, motif } = tramo(community.count || 0);
          const mayor = posicion === 1;
          return (
            <CommunityPlate
              key={community.slug}
              href={`/comunidades/${community.slug}`}
              name={community.name}
              count={community.count}
              regionName={community.regionName}
              imageUrl={community.imageUrl}
              motif={community.motif}
              accent={community.accent}
              accentKey={community.accentKey}
              titleClass={title}
              motifSize={motif}
              style={{ order: posicion || 0, "--c": c, "--r": r }}
              className={cn(
                "lg:[grid-column:span_var(--c)] lg:[grid-row:span_var(--r)]",
                mayor ? "col-span-2" : "col-span-1",
                !posicion && "hidden"
              )}
            />
          );
        })}
      </div>

      {visibles.length === 0 ? (
        <div className="mt-7 border border-line-100 bg-mist-50 p-12 text-center">
          <p className="atlas-title-md">Ninguna comunidad con ese nombre</p>
          <p className="mt-2.5 text-ink-700">
            Prueba con otro nombre o quita el filtro de territorio.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default CommunityIndexBoard;
