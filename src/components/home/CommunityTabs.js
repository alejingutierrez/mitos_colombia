"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Icon, ImageFrame, Motif } from "../atoms";

/**
 * Home · una comunidad, muchas voces.
 *
 * Índice de pueblos + panel de relatos. Las pestañas son pueblos, no temas: el
 * archivo guarda quién sostiene cada relato y entrar por ahí cambia por
 * completo lo que se lee.
 *
 * Qué se arregló, y no se debe deshacer:
 *
 *  · ANTES sólo existía el panel activo: los otros cuatro no llegaban al HTML.
 *    El rastreador veía UN enlace de relato en toda la sección. Ahora se sirven
 *    TODOS los paneles y los inactivos se ocultan con el atributo `hidden`.
 *    Por eso el nodo raíz de cada panel NO puede llevar una clase de display
 *    (`grid`, `flex`, `block`): le ganaría al `display:none` del navegador y los
 *    ocho paneles quedarían apilados. La retícula va siempre en un hijo.
 *
 *  · ANTES cada pueblo aportaba un solo relato (había un LIMIT 1 en la
 *    consulta). Ahora llegan cuatro: uno de entrada y tres al lado. Con cinco
 *    pueblos la sección daba acceso a cinco relatos; con ocho por cuatro, a 32.
 *
 *  · El índice es carrusel horizontal en móvil y columna en escritorio.
 *    `aria-orientation` sigue al punto de quiebre real (matchMedia) y las
 *    cuatro flechas mueven el foco en los dos casos, así que lo que se le
 *    anuncia al lector de pantalla se cumple.
 *
 *  · La obra de cada pueblo es la del primer relato: `communities[]` no trae
 *    portada propia. Si llegara vacía, `Thumb` e `ImageFrame` caen a un motivo
 *    tenue sobre fondo de bruma — nunca a una caja rota. Lo mismo con la
 *    entradilla: si el relato no la tiene, no se pinta el párrafo.
 */

/* Techo del índice. La columna de escritorio crece hacia abajo y el carrusel de
   móvil se vuelve un pajar: por encima de diez pueblos hay que cambiar de
   mecánica, no seguir alargando la lista. Hoy la home manda ocho. */
const MAX_PUEBLOS = 10;

function plural(count, singular, many) {
  return Number(count) === 1 ? singular : many;
}

/** Miniatura del índice. Vive dentro de un `<button>`, que sólo admite
 *  contenido de frase: por eso se arma con `<span>` y no con `ImageFrame`,
 *  que monta un `<div>`. */
function Thumb({ src, motif = "hoja", size = 52 }) {
  return (
    <span
      className="relative block shrink-0 overflow-hidden rounded border border-line-100 bg-mist-50"
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes={`${size * 2}px`}
          quality={68}
          className="object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mist-50 to-mist-100">
          <Motif name={motif} size={Math.round(size * 0.5)} className="opacity-15" />
        </span>
      )}
    </span>
  );
}

/** «4 de los 27 relatos…» / «Los 4 relatos…» / «El único relato…». Las cifras
 *  van en `atlas-figure` (caja alta, ancho fijo), así que la frase se arma en
 *  JSX y no por interpolación. */
function Recuento({ mostrados, guardados }) {
  if (guardados > mostrados) {
    return (
      <>
        <span className="atlas-figure">{mostrados}</span> de los{" "}
        <span className="atlas-figure">{guardados}</span> relatos que el archivo guarda
        de este pueblo.
      </>
    );
  }
  if (guardados === 1) return <>El único relato que el archivo guarda de este pueblo.</>;
  return (
    <>
      Los <span className="atlas-figure">{guardados}</span> relatos que el archivo
      guarda de este pueblo.
    </>
  );
}

export function CommunityTabs({ communities = [] }) {
  const uid = useId();
  const items = (communities || [])
    .map((item) => {
      if (!item?.name) return null;
      /* `myth` es el campo de compatibilidad de cuando la consulta traía uno
         solo. Se conserva como red: si `myths` volviera vacío, la sección sigue
         de pie con una tarjeta en vez de desaparecer. */
      const myths = (
        item.myths?.length ? item.myths : item.myth ? [item.myth] : []
      ).filter((myth) => myth?.slug && myth?.title);
      return myths.length ? { ...item, myths } : null;
    })
    .filter(Boolean)
    .slice(0, MAX_PUEBLOS);

  const [active, setActive] = useState(0);
  const [vertical, setVertical] = useState(false);
  const railRef = useRef(null);
  const tabRefs = useRef([]);
  const reduce = useReducedMotion();

  /* El índice pasa a columna en lg. `aria-orientation` es estático, así que se
     sincroniza con el punto de quiebre de verdad; si no, el lector de pantalla
     anuncia «horizontal» sobre una lista vertical. */
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setVertical(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const total = items.length;

  /* Mueve el foco sin arrastrar la página (`preventScroll`) y después corrige
     el scroll horizontal del propio índice, sólo si está en modo carrusel. */
  const focusTab = useCallback(
    (index) => {
      if (!total) return;
      const next = ((index % total) + total) % total;
      setActive(next);
      const el = tabRefs.current[next];
      if (!el) return;
      el.focus({ preventScroll: true });
      const rail = railRef.current;
      if (!rail || rail.scrollWidth <= rail.clientWidth + 1) return;
      const railBox = rail.getBoundingClientRect();
      const elBox = el.getBoundingClientRect();
      const margen = 16;
      if (elBox.left < railBox.left) {
        rail.scrollLeft -= railBox.left - elBox.left + margen;
      } else if (elBox.right > railBox.right) {
        rail.scrollLeft += elBox.right - railBox.right + margen;
      }
    },
    [total]
  );

  const onKeyDown = useCallback(
    (event, index) => {
      let destino = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") destino = index + 1;
      else if (event.key === "ArrowLeft" || event.key === "ArrowUp") destino = index - 1;
      else if (event.key === "Home") destino = 0;
      else if (event.key === "End") destino = total - 1;
      if (destino === null) return;
      event.preventDefault();
      focusTab(destino);
    },
    [focusTab, total]
  );

  if (!total) return null;

  const activo = Math.min(active, total - 1);
  const idDe = (index) => `${uid}-pueblo-${index}`;

  return (
    /* Los dos `min-w-0` son estructurales, no cosméticos: NO se quitan. Por
       debajo de lg la retícula tiene una sola columna de ancho `auto`, y un
       hijo de grid mide por defecto su contenido mínimo. El carrusel del
       índice mide 2094px a contenido completo, así que la columna crecía a
       2094 y arrastraba con ella al panel. Y como `<main>` lleva
       `overflow-x-clip`, el desbordamiento no se veía como barra horizontal:
       simplemente se recortaba media sección en móvil. Medido: panel de
       2054px dentro de un contenedor de 335px. */
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      {/* ---- Índice de pueblos ------------------------------------------ */}
      <div className="min-w-0 lg:col-span-4">
        <p className="atlas-kicker mb-3 hidden lg:block">
          <span className="atlas-figure">{total}</span>{" "}
          {plural(total, "pueblo", "pueblos")} del archivo
        </p>
        <div
          ref={railRef}
          role="tablist"
          aria-label="Pueblos del archivo"
          aria-orientation={vertical ? "vertical" : "horizontal"}
          className="atlas-rail flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => {
            const on = index === activo;
            const portada = item.myths[0];
            const relatos = item.mythCount || item.myths.length;
            return (
              <button
                key={item.slug ? `${item.slug}-${index}` : index}
                type="button"
                role="tab"
                id={`${idDe(index)}-tab`}
                aria-selected={on}
                aria-controls={`${idDe(index)}-panel`}
                tabIndex={on ? 0 : -1}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  "flex w-[15.5rem] shrink-0 items-center gap-3 rounded border p-2.5 text-left transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40",
                  "lg:w-full lg:gap-3.5 lg:px-3 lg:py-2.5",
                  on
                    ? "border-jungle-500 bg-jungle-tint"
                    : "border-line-200 hover:border-line-300 lg:hover:bg-mist-50"
                )}
              >
                <Thumb src={portada?.imageUrl} motif={portada?.motif || "hoja"} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-editorial text-[length:var(--step-1)] leading-tight text-jungle-700">
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "mt-1 block truncate text-[11px] font-semibold uppercase tracking-[0.14em]",
                      on ? "text-jungle-600" : "text-ink-500"
                    )}
                  >
                    <span>{item.region}</span>
                    <span aria-hidden="true"> · </span>
                    <span className="atlas-figure">{relatos}</span>{" "}
                    {plural(relatos, "relato", "relatos")}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---- Paneles ----------------------------------------------------- *
          Se sirven todos; los inactivos van con `hidden`. El nodo raíz de cada
          panel no lleva clase de display a propósito — ver cabecera. */}
      <div className="min-w-0 lg:col-span-8 lg:border-l lg:border-line-100 lg:pl-10">
        {items.map((item, index) => {
          const on = index === activo;
          const [lead, ...resto] = item.myths;
          const paso = on ? undefined : -1;
          return (
            <div
              key={item.slug ? `${item.slug}-${index}` : index}
              id={`${idDe(index)}-panel`}
              role="tabpanel"
              aria-labelledby={`${idDe(index)}-tab`}
              hidden={!on}
            >
              <div className="border-b border-line-100 pb-5">
                <p className="atlas-kicker">{item.region}</p>
                <h3 className="atlas-title-lg mt-2">{item.name}</h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-8 gap-y-1">
                  <p className="max-w-prose text-[15px] leading-relaxed text-ink-700">
                    <Recuento
                      mostrados={item.myths.length}
                      guardados={item.mythCount || item.myths.length}
                    />
                  </p>
                  <Link
                    href={`/comunidades/${item.slug}`}
                    className="atlas-link group"
                    tabIndex={paso}
                  >
                    Ver el pueblo
                    <Icon name="arrow-right" size={17} className="mc-arrow" />
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-7">
                {/* Relato de entrada */}
                <Link
                  href={`/mitos/${lead.slug}`}
                  className={cn(
                    "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40",
                    !resto.length && "md:col-span-2"
                  )}
                  tabIndex={paso}
                >
                  <ImageFrame
                    src={lead.imageUrl}
                    alt=""
                    ratio={resto.length ? "4 / 3" : "16 / 9"}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 32vw"
                    quality={68}
                    placeholderMotif={lead.motif || "hoja"}
                    placeholderSize={72}
                    imgClassName={cn("object-cover", !reduce && "atlas-image-zoom")}
                  />
                  <h4 className="atlas-title-md mt-3.5 transition-colors group-hover:text-jungle-600">
                    {lead.title}
                  </h4>
                  {lead.excerpt ? (
                    <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-ink-700">
                      {lead.excerpt}
                    </p>
                  ) : null}
                </Link>

                {/* Los otros tres, como índice */}
                {resto.length ? (
                  <ul className="flex flex-col border-t border-line-100 md:border-t-0">
                    {resto.map((myth) => (
                      <li
                        key={myth.slug}
                        className="border-b border-line-100 md:first:border-t"
                      >
                        <Link
                          href={`/mitos/${myth.slug}`}
                          className="group flex items-start gap-4 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40"
                          tabIndex={paso}
                        >
                          <ImageFrame
                            src={myth.imageUrl}
                            alt=""
                            ratio="1 / 1"
                            sizes="112px"
                            quality={68}
                            placeholderMotif={myth.motif || "hoja"}
                            placeholderSize={26}
                            className="w-[4.5rem] shrink-0 md:w-[5rem]"
                            imgClassName={cn("object-cover", !reduce && "atlas-image-zoom")}
                          />
                          <span className="min-w-0 flex-1">
                            <span className="atlas-title-sm block transition-colors group-hover:text-jungle-600">
                              {myth.title}
                            </span>
                            {myth.excerpt ? (
                              <span className="mt-1 line-clamp-2 block text-[13px] leading-relaxed text-ink-500">
                                {myth.excerpt}
                              </span>
                            ) : null}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
