"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Icon, ImageFrame, Spinner } from "../atoms";
import { MESA_COUNT } from "../../lib/home-discovery";
import styles from "./home-journey.module.css";

/** La mesa conserva su filtro y su consulta al archivo. La mano ahora forma
 * un carril de escenas grandes, con desplazamiento nativo y controles de
 * avance; filtrar o barajar vuelve al comienzo de la mano. */

/* ------------------------------------------------------------------ *
 * Barajar
 * ------------------------------------------------------------------ */

const EXCLUDE_MAX = 40; // el tope que declara `/api/mesa`.
const MAX_SLOTS = MESA_COUNT;
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

export function TodayTable({ myths = [], filters = [], exclude = [] }) {
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
  const [edges, setEdges] = useState({ start: true, end: false });

  const railRef = useRef(null);
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
      runSwap(() => {
        setFilter(key);
        railRef.current?.scrollTo({ left: 0, behavior: "instant" });
      });
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
    const protectedSlugs = exclude.slice(0, EXCLUDE_MAX);
    const recentSlugs = restart ? [] : seenRef.current.slice(-(EXCLUDE_MAX - protectedSlugs.length));
    const excluir = [...new Set([...protectedSlugs, ...recentSlugs])];

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
      railRef.current?.scrollTo({ left: 0, behavior: "instant" });
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
  }, [busy, chips, exclude, filter, raiseVeil, reduce, spent, turn]);

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

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;
    const sync = () => {
      const start = rail.scrollLeft <= 2;
      const end = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
      setEdges((previous) => previous.start === start && previous.end === end ? previous : { start, end });
    };
    sync();
    rail.addEventListener("scroll", sync, { passive: true });
    const observer = new ResizeObserver(sync);
    observer.observe(rail);
    return () => { rail.removeEventListener("scroll", sync); observer.disconnect(); };
  }, [visible]);

  if (!hand.length) return null;

  return (
    <>
      <div className={styles.tableToolbar}>
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
                  "inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-[13px] font-semibold transition-colors disabled:opacity-60",
                  active
                    ? "border-jungle-700 bg-jungle-700 text-white"
                    : "border-line-200 text-ink-700 hover:border-line-300 hover:text-ink-900"
                )}
              >
                {item.label}
                <b
                  className={cn(
                    "atlas-figure text-xs font-semibold",
                    active ? "text-white" : "text-ink-700"
                  )}
                >
                  {item.count}
                </b>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={shuffle}
          disabled={busy}
          aria-busy={busy}
          className="inline-flex h-11 min-w-0 flex-1 items-center justify-center gap-2.5 rounded bg-jungle-500 px-3 text-[13px] font-semibold text-white transition-colors hover:bg-jungle-600 disabled:cursor-progress disabled:bg-jungle-600 active:translate-y-px lg:flex-none lg:px-5 lg:text-sm"
        >
          {busy ? (
            <Spinner size={17} className="text-white" label="Barajando" />
          ) : (
            <Icon name="shuffle" size={17} />
          )}
          {busy ? "Barajando…" : spent ? "Empezar de nuevo" : "Barajar la mesa"}
        </button>
        <div className={styles.tableControls}>
          <button type="button" aria-label="Relatos anteriores" disabled={busy || edges.start} onClick={() => railRef.current?.scrollBy({ left: -railRef.current.clientWidth * 0.9, behavior: reduce ? "instant" : "smooth" })}><Icon name="chevron-left" size={20} /></button>
          <button type="button" aria-label="Más relatos de la mesa" disabled={busy || edges.end} onClick={() => railRef.current?.scrollBy({ left: railRef.current.clientWidth * 0.9, behavior: reduce ? "instant" : "smooth" })}><Icon name="chevron-right" size={20} /></button>
        </div>
        </div>
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
        <div ref={railRef} className={styles.tableRail}>
          {visible.map((myth, index) => {
            return (
              <Link
                key={myth.slug || index}
                href={myth.slug ? `/mitos/${myth.slug}` : "/mitos"}
                className={cn(
                  styles.artwork,
                  "group relative",
                  "transition-[opacity,transform] duration-300 ease-editorial motion-reduce:!transition-none",
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
                  ratio="3 / 2"
                  sizes="(max-width: 767px) 82vw, (max-width: 1023px) 48vw, 32vw"
                  quality={90}
                  unoptimized
                  placeholderMotif={myth.motif || "jaguar"}
                  className={styles.artworkImage}
                  imgClassName="atlas-image-zoom object-cover"
                />
                <div className={styles.artworkCaption}>
                  {myth.why ? (
                    <span className={styles.artworkWhy}>
                      {myth.why}
                    </span>
                  ) : null}
                  <h3
                    className={cn(
                      "mt-1.5",
                      "atlas-title-md"
                    )}
                  >
                    {myth.title}
                  </h3>
                  {myth.meta ? (
                    <span className={styles.artworkMeta}>
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
