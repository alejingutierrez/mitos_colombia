"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Icon, ImageFrame, Spinner } from "../atoms";
import { MAX_SLOTS, SMALL, mosaicSlots } from "./mesa-mosaic";

/**
 * Home · la mesa de hoy.
 *
 * Un mosaico editorial: una pieza que abre y cuatro que la acompañan, repetido
 * hasta llenar la mano. Cada tarjeta declara por qué está ahí («por comunidad ·
 * muiscas»), los chips cambian la lente y «Barajar» pide una mano NUEVA al
 * archivo entero.
 *
 * ── La retícula ──────────────────────────────────────────────────────────────
 * El mosaico anterior era una lista de diez formas fijas por posición, calibrada
 * para `lg` y aplicada en todos los anchos. Costaba caro:
 *
 *  · En móvil el hueco 5 pedía dos columnas y sólo quedaba una libre, así que la
 *    retícula dejaba SIEMPRE un cuadrado vacío de 169×169.
 *  · Entre 768 y 1023 px no había nada: seguían mandando las formas de móvil, o
 *    sea dos columnas de 348 px con proporción 16/9 y cuadrados de 348×348. La
 *    sección medía ahí unos 2.660 px.
 *  · Al filtrar, las tarjetas ocultas dejaban su forma reservada: el mosaico se
 *    convertía en un colador.
 *
 * Ahora la forma NO depende de la posición absoluta sino de un patrón de período
 * 5 que embaldosa exacto en los tres puntos de quiebre, elegido justamente para
 * que la suma de columnas de un período sea múltiplo del número de columnas:
 *
 *      columnas:      2 (base)     4 (md)      12 (lg)
 *      pieza que abre     2           4            4
 *      cuatro piezas      1 c/u       1 c/u        2 c/u
 *      suma del período   6 ✓         8 ✓         12 ✓
 *
 * Como la suma cierra en los tres, ningún período deja huecos y el siguiente
 * arranca en fila limpia. Lo que sobra (1 a 4 tarjetas) tiene su propia cola en
 * `TAILS`, también embaldosada en los tres anchos. Por eso `mosaicSlots` recibe
 * CUÁNTAS tarjetas hay que pintar y no dónde: al filtrar se recalculan las
 * formas sobre las visibles y el mosaico se recompone entero en vez de agujerearse.
 *
 * Medido con las mismas tarjetas (390 / 768 / 1460 px de ancho de ventana):
 *   diez piezas    1.338 → 946 px   ·   2.661 → 962 px   ·   863 → 602 px
 *   doce piezas            1.082 px           1.206 px           843 px
 * Es decir: DOCE relatos caben en menos alto del que ocupaban DIEZ, en los tres
 * anchos. Por eso «Barajar» pide doce (el techo de `/api/mesa`).
 *
 * Las proporciones de cada fila están elegidas para que las alturas coincidan
 * (una pieza de 4/12 en 3/2 mide lo mismo que una de 2/12 en 5/7): con
 * `items-start` cualquier descuadre queda como borde irregular abajo, y así el
 * error es de pocos píxeles.
 *
 * ── Barajar ──────────────────────────────────────────────────────────────────
 * Antes permutaba en memoria las diez tarjetas ya pintadas: el archivo entero
 * quedaba fuera del alcance del botón. Ahora pide `GET /api/mesa` con el turno,
 * el tema activo y los slugs ya vistos, y reemplaza mano y chips a la vez —los
 * conteos de los chips mienten si se cambia sólo uno de los dos—. Si hay un
 * tema activo, la mano nueva viene entera de ese tema: eso queda «fijado»
 * (`pinned`) y el filtro local se desactiva para no volver a colar el mismo tamiz.
 */

/* ------------------------------------------------------------------ *
 * Barajar
 * ------------------------------------------------------------------ */

const EXCLUDE_MAX = 40; // el tope que declara `/api/mesa`.
const MAX_TURN = 99;
const SWAP_MS = 220; // lo que dura el velo antes de cambiar la mano.

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function dedupe(list) {
  const seen = new Set();
  return (Array.isArray(list) ? list : []).filter((item) => {
    const slug = item?.slug;
    if (!slug || seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}

/**
 * Los chips de la mano nueva. Si se pidió un tema, TODAS las tarjetas lo llevan
 * aunque el servidor las haya repartido en otros chips: por eso ese chip cuenta
 * la mano entera, y se agrega si la respuesta no lo trae (si no, quedaría un
 * filtro activo sin botón donde apagarlo).
 */
function mergeFilters(incoming, pinned, total) {
  const list =
    Array.isArray(incoming) && incoming.length
      ? incoming
      : [{ key: "todos", label: "Todo el archivo", count: total }];
  if (!pinned?.key) return list;
  if (list.some((item) => item.key === pinned.key)) {
    return list.map((item) =>
      item.key === pinned.key ? { ...item, count: total } : item
    );
  }
  return [...list, { key: pinned.key, label: pinned.label || "Tema", count: total }];
}

/* ------------------------------------------------------------------ *
 * Componente
 * ------------------------------------------------------------------ */

export function TodayTable({ myths = [], filters = [] }) {
  const reduce = useReducedMotion();

  const [hand, setHand] = useState(() => dedupe(myths).slice(0, MAX_SLOTS));
  const [chips, setChips] = useState(() => filters);
  const [filter, setFilter] = useState("todos");
  // Tema que ya aplicó el servidor: mientras esté fijado, el tamiz local sobra.
  const [pinned, setPinned] = useState(null);
  const [turn, setTurn] = useState(0);
  const [busy, setBusy] = useState(false);
  const [spent, setSpent] = useState(false);
  const [notice, setNotice] = useState("");
  const [live, setLive] = useState("");
  // `veiled` = las tarjetas están bajando el telón; se levanta al pintar la mano.
  const [veiled, setVeiled] = useState(false);

  const seenRef = useRef(hand.map((myth) => myth.slug).filter(Boolean));
  const swapRef = useRef(null);
  const raiseRef = useRef(null);
  const abortRef = useRef(null);
  const aliveRef = useRef(true);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      if (swapRef.current) clearTimeout(swapRef.current);
      if (raiseRef.current) clearTimeout(raiseRef.current);
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  /**
   * Sube el telón un tick después de pintar la mano nueva, para que el navegador
   * alcance a dibujarla con el velo puesto y la transición se vea de verdad.
   *
   * Va en `setTimeout` y NO en `requestAnimationFrame`: con la pestaña en
   * segundo plano el navegador no ejecuta ningún rAF (medido: con
   * `document.hidden` el callback no llega nunca), así que quien barajara y se
   * fuera a otra pestaña volvía a una mesa en `opacity: 0`. El temporizador
   * dispara igual, esté la pestaña donde esté.
   */
  const raiseVeil = useCallback(() => {
    if (raiseRef.current) clearTimeout(raiseRef.current);
    raiseRef.current = setTimeout(() => {
      raiseRef.current = null;
      if (aliveRef.current) setVeiled(false);
    }, 32);
  }, []);

  /** Baja el telón, cambia lo que haya que cambiar y lo vuelve a subir. */
  const runSwap = useCallback(
    (apply) => {
      if (swapRef.current) {
        clearTimeout(swapRef.current);
        swapRef.current = null;
      }
      if (reduce) {
        apply();
        return;
      }
      setVeiled(true);
      swapRef.current = setTimeout(() => {
        swapRef.current = null;
        if (!aliveRef.current) return;
        apply();
        raiseVeil();
      }, SWAP_MS);
    },
    [raiseVeil, reduce]
  );

  const changeFilter = useCallback(
    (key) => {
      if (busy || key === filter) return;
      setNotice("");
      runSwap(() => setFilter(key));
    },
    [busy, filter, runSwap]
  );

  const shuffle = useCallback(async () => {
    if (busy) return;

    const restart = spent;
    const nextTurn = restart ? 0 : (turn + 1) % (MAX_TURN + 1);
    const tema = filter !== "todos" ? filter : null;
    const temaLabel = tema
      ? chips.find((item) => item.key === tema)?.label || null
      : null;
    const excluir = restart ? [] : seenRef.current.slice(-EXCLUDE_MAX);

    const params = new URLSearchParams();
    params.set("n", String(MAX_SLOTS));
    params.set("turno", String(nextTurn));
    if (excluir.length) params.set("excluir", excluir.join(","));
    if (tema) params.set("tema", tema);

    setBusy(true);
    setNotice("");
    setLive("Barajando la mesa…");
    if (!reduce) setVeiled(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      // El velo tiene un mínimo: si la respuesta llega en 40 ms, el cambio se
      // percibe como un parpadeo y no como una mesa que se rehace.
      const [response] = await Promise.all([
        fetch(`/api/mesa?${params.toString()}`, {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        }),
        reduce ? Promise.resolve() : wait(SWAP_MS),
      ]);
      if (!response.ok) throw new Error(`respuesta ${response.status}`);
      const data = await response.json();
      if (!aliveRef.current) return;

      const fresh = dedupe(data?.myths).slice(0, MAX_SLOTS);
      if (!fresh.length) {
        setSpent(true);
        setVeiled(false);
        setNotice(
          "Con este filtro ya recorriste todo el archivo de hoy. Empieza de nuevo para volver a repartirlo."
        );
        setLive("No quedan relatos nuevos con este filtro.");
        return;
      }

      const slugs = fresh.map((myth) => myth.slug).filter(Boolean);
      seenRef.current = restart
        ? slugs
        : [...seenRef.current, ...slugs].slice(-EXCLUDE_MAX * 3);

      const pin = tema ? { key: tema, label: temaLabel } : null;
      setHand(fresh);
      setChips(mergeFilters(data?.filtros, pin, fresh.length));
      setPinned(pin);
      setTurn(nextTurn);
      setSpent(Boolean(data?.agotado));
      setLive(`Mesa nueva: ${fresh.length} relatos.`);
      if (data?.agotado) {
        setNotice("Queda poco archivo nuevo por aquí: el próximo turno empieza de cero.");
      }

      if (!reduce) raiseVeil();
    } catch (error) {
      if (error?.name === "AbortError" || !aliveRef.current) return;
      setVeiled(false);
      setNotice("No se pudo rehacer la mesa. Revisa la conexión e inténtalo de nuevo.");
      setLive("No se pudo rehacer la mesa.");
    } finally {
      if (aliveRef.current) setBusy(false);
    }
  }, [busy, chips, filter, raiseVeil, reduce, spent, turn]);

  // Con el tema ya aplicado por el servidor, volver a tamizar en el cliente
  // escondería tarjetas que SÍ llevan la etiqueta pero cayeron en otro chip.
  const serverThemed = Boolean(pinned && pinned.key === filter);
  const visible = useMemo(
    () =>
      filter === "todos" || serverThemed
        ? hand
        : hand.filter((myth) => myth.theme === filter),
    [hand, filter, serverThemed]
  );
  const slots = useMemo(() => mosaicSlots(visible.length), [visible.length]);

  if (!hand.length) return null;

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 border-b border-line-200 pb-5 lg:flex-row lg:items-center lg:gap-5">
        <div
          role="group"
          aria-label="Filtrar la mesa"
          className="atlas-rail flex items-center gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] lg:flex-1 lg:flex-wrap lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {chips.map((item) => {
            const active = filter === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => changeFilter(item.key)}
                aria-pressed={active}
                disabled={busy}
                className={cn(
                  "inline-flex h-11 shrink-0 items-center gap-2 rounded border px-[18px] text-sm font-semibold transition-colors disabled:opacity-60",
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
        </div>

        <button
          type="button"
          onClick={shuffle}
          disabled={busy}
          aria-busy={busy}
          className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2.5 rounded bg-jungle-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-jungle-600 disabled:cursor-progress disabled:bg-jungle-600 active:translate-y-px lg:w-auto"
        >
          {busy ? (
            <Spinner size={17} className="text-white" label="Barajando" />
          ) : (
            <Icon name="shuffle" size={17} />
          )}
          {busy ? "Barajando…" : spent ? "Empezar de nuevo" : "Barajar la mesa"}
        </button>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {live}
      </p>

      {notice ? (
        <p className="mb-5 max-w-[62ch] border-l-2 border-ember-400 pl-3 text-[13px] leading-relaxed text-ink-700">
          {notice}
        </p>
      ) : null}

      {visible.length ? (
        <div className="grid grid-cols-2 items-start gap-2 md:grid-cols-4 md:gap-3 lg:grid-cols-12 lg:gap-5">
          {visible.map((myth, index) => {
            const slot = slots[index] || SMALL;
            return (
              <Link
                key={myth.slug || index}
                href={myth.slug ? `/mitos/${myth.slug}` : "/mitos"}
                className={cn(
                  "group relative block overflow-hidden bg-[rgb(var(--atlas-night))]",
                  "transition-[opacity,transform] duration-300 ease-editorial motion-reduce:!transition-none",
                  slot.cell,
                  veiled ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
                )}
                style={
                  reduce || veiled
                    ? undefined
                    : { transitionDelay: `${Math.min(index, MAX_SLOTS) * 26}ms` }
                }
              >
                <ImageFrame
                  src={myth.imageUrl}
                  alt=""
                  ratio={null}
                  sizes={slot.sizes}
                  // 70 no está en `images.qualities` de `next.config` ([68, 75,
                  // 90]): Next 16 responde 400 a esa variante en producción y
                  // la tarjeta se quedaba sin obra. La pieza que abre se lleva
                  // la calidad alta; las pequeñas, la barata.
                  quality={slot.lead ? 75 : 68}
                  placeholderMotif={myth.motif || "jaguar"}
                  className="absolute inset-0 h-full w-full rounded-none border-0"
                  imgClassName="atlas-image-zoom object-cover"
                />
                <span
                  className="atlas-scrim pointer-events-none absolute inset-0"
                  aria-hidden="true"
                />
                <div
                  className={cn(
                    "atlas-on-image absolute inset-x-0 bottom-0 text-white",
                    slot.lead ? "p-4 md:p-5" : "p-3 md:p-4"
                  )}
                >
                  {myth.why ? (
                    <span className="block truncate text-[9px] font-bold uppercase tracking-[0.16em] text-ember-400 md:text-[10px]">
                      {myth.why}
                    </span>
                  ) : null}
                  <h3
                    className={cn(
                      "mt-1.5 line-clamp-2 !text-white",
                      slot.lead ? "atlas-title-md" : "atlas-title-sm"
                    )}
                  >
                    {myth.title}
                  </h3>
                  {slot.lead && myth.meta ? (
                    <span className="mt-2 block truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                      {myth.meta}
                    </span>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded border border-dashed border-line-300 px-5 py-10 text-center">
          <p className="text-sm text-ink-700">
            Nada de la mesa de hoy lleva esa etiqueta.
          </p>
          <button
            type="button"
            onClick={() => changeFilter("todos")}
            className="atlas-link mx-auto mt-3"
          >
            Ver toda la mesa
            <Icon name="arrow-right" size={16} />
          </button>
        </div>
      )}
    </>
  );
}
