"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Icon, ImageFrame } from "../atoms";

/**
 * Home · la mesa de hoy.
 *
 * La curaduría se lee, no se adivina: cada pieza declara por qué está ahí
 * («por comunidad · muiscas», «por lugar · Cartagena») y el bloque dice arriba
 * cómo se armó la selección y cuándo rota. Los chips filtran y «Barajar»
 * reordena — no trae mitos nuevos, sólo cambia la entrada al archivo.
 *
 * El reparto de formas es fijo por posición (no por mito): así el mosaico
 * conserva su ritmo aunque el feed cambie cada día. Por eso «Barajar» permuta el
 * CONTENIDO entre huecos en vez de reordenar las tarjetas con `order`: moviendo
 * las tarjetas se movían también sus proporciones y la retícula quedaba con
 * huecos. Cada tarjeta recibe una sola clase por grupo de Tailwind — las
 * condicionales del mismo grupo colisionan según el orden del CSS generado, no
 * el del atributo.
 */

const SHAPES = [
  "col-span-2 aspect-video lg:col-span-4 lg:aspect-[4/3]",
  "col-span-2 aspect-video lg:col-span-5 lg:aspect-video",
  "col-span-1 aspect-square lg:col-span-3 lg:aspect-square",
  "col-span-1 aspect-square lg:col-span-3 lg:aspect-square",
  "col-span-1 aspect-square lg:col-span-4 lg:aspect-[4/3]",
  "col-span-2 aspect-video lg:col-span-5 lg:aspect-video",
  "col-span-1 aspect-square lg:col-span-3 lg:aspect-video",
  "col-span-1 aspect-square lg:col-span-3 lg:aspect-video",
  "col-span-1 aspect-square lg:col-span-3 lg:aspect-video",
  "col-span-1 aspect-square lg:col-span-3 lg:aspect-video",
];

// Las piezas grandes sostienen un título mayor y una bajada; las pequeñas, no.
const LEAD_SLOTS = new Set([0, 1, 4, 5]);

function shuffled(list) {
  const next = list.slice();
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function TodayTable({ myths = [], filters = [], criterio }) {
  const items = myths.slice(0, SHAPES.length);
  const [filter, setFilter] = useState("todos");
  const [order, setOrder] = useState(() => items.map((_, index) => index));
  // `order` dice qué mito ocupa cada hueco; los huecos no se mueven.
  const arranged = order.map((position) => items[position]).filter(Boolean);

  if (!items.length) return null;

  return (
    <>
      {criterio ? (
        <p className="mb-6 max-w-[68ch] text-[13px] leading-relaxed text-ink-500">
          <b className="font-semibold text-ink-900">Cómo se armó:</b> {criterio}
        </p>
      ) : null}

      <div
        role="group"
        aria-label="Filtrar la mesa"
        className="atlas-rail mb-6 flex items-center gap-2.5 overflow-x-auto border-b border-line-200 pb-5 [scrollbar-width:none] md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {filters.map((item) => {
          const active = filter === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              aria-pressed={active}
              className={cn(
                "inline-flex h-11 shrink-0 items-center gap-2 rounded border px-[18px] text-sm font-semibold transition-colors",
                active
                  ? "border-jungle-500 bg-jungle-tint text-jungle-700"
                  : "border-line-200 text-ink-700 hover:border-line-300 hover:text-ink-900"
              )}
            >
              {item.label}
              <b
                className={cn(
                  "atlas-figure text-xs font-semibold",
                  active ? "text-jungle-600" : "text-ink-500"
                )}
              >
                {item.count}
              </b>
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => setOrder(shuffled(order))}
          className="ml-auto hidden h-11 shrink-0 items-center gap-2.5 rounded bg-jungle-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-jungle-600 active:translate-y-px md:inline-flex"
        >
          <Icon name="shuffle" size={17} />
          Barajar la mesa
        </button>
      </div>

      <button
        type="button"
        onClick={() => setOrder(shuffled(order))}
        className="mb-4 inline-flex h-11 w-full items-center justify-center gap-2.5 rounded bg-jungle-500 text-sm font-semibold text-white transition-colors hover:bg-jungle-600 md:hidden"
      >
        <Icon name="shuffle" size={17} />
        Barajar la mesa
      </button>

      <div className="grid grid-cols-2 items-start gap-3 lg:grid-cols-12 lg:gap-6">
        {arranged.map((myth, index) => {
          const hidden = filter !== "todos" && myth.theme !== filter;
          const lead = LEAD_SLOTS.has(index);
          return (
            <Link
              key={myth.slug || index}
              href={myth.slug ? `/mitos/${myth.slug}` : "/mitos"}
              style={hidden ? { display: "none" } : undefined}
              className={cn(
                "group relative block overflow-hidden bg-[rgb(var(--atlas-night))]",
                SHAPES[index]
              )}
            >
              <ImageFrame
                src={myth.imageUrl}
                alt=""
                ratio={null}
                sizes="(max-width: 767px) 50vw, (max-width: 1023px) 45vw, 40vw"
                quality={70}
                placeholderMotif={myth.motif || "jaguar"}
                className="absolute inset-0 h-full w-full rounded-none border-0"
                imgClassName="atlas-image-zoom object-cover"
              />
              <span className="atlas-scrim pointer-events-none absolute inset-0" aria-hidden="true" />
              <div
                className={cn(
                  "atlas-on-image absolute inset-x-0 bottom-0 text-white",
                  lead ? "p-4 md:p-6" : "p-3.5 md:p-5"
                )}
              >
                {myth.why ? (
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-ember-400 md:text-[10px]">
                    {myth.why}
                  </span>
                ) : null}
                <h3
                  className={cn(
                    "mt-2 !text-white",
                    lead ? "atlas-title-md" : "atlas-title-sm"
                  )}
                >
                  {myth.title}
                </h3>
                {lead && myth.meta ? (
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    {myth.meta}
                  </span>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
