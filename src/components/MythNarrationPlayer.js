"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Icon } from "./atoms";
import { cn } from "../lib/utils";
import { formatClock, formatNarrationLength } from "../lib/narration";

/** Sin tocar el scroll durante este rato, la página vuelve a la lectura. */
const SEGUIMIENTO_PAUSA_MS = 8000;

/**
 * Cintillo de narración: el botón de escuchar, en la cabecera de «El relato».
 *
 * Suena SÓLO el título y el relato — es lo que se mandó a narrar, así que la
 * promesa del botón es literal y no hay que matizarla en ningún lado.
 *
 * `preload="none"` es deliberado: el MP3 de un relato pesa unos 4 MB y la
 * enorme mayoría de las visitas viene a leer. Nada se descarga hasta que
 * alguien pulsa play. Por eso la duración llega medida desde la base de datos y
 * no de los metadatos del archivo: el cintillo puede decir «3 min» sin bajar un
 * byte.
 *
 * Mientras suena va resaltando la palabra que se lee. Las marcas de tiempo son
 * las que devuelve la alineación de ElevenLabs para el propio audio —no una
 * estimación—, y se comprobó que ni `loudnorm` ni la codificación a MP3 mueven
 * el reloj: los cortes de silencio coinciden antes y después del proceso con un
 * desfase de una diezmilésima de segundo.
 */
export function MythNarrationPlayer({ narration, title, className }) {
  const audioRef = useRef(null);
  const sliderId = useId();
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  // Arranca con la duración de la base y se corrige sola con la del archivo en
  // cuanto el navegador lo abre.
  const [duration, setDuration] = useState(narration?.durationSeconds || 0);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [scrubbing, setScrubbing] = useState(false);

  const audioUrl = narration?.audioUrl;
  const timings = narration?.wordTimings || null;

  // Palabra activa. Vive en una ref y no en el estado: se actualiza en cada
  // fotograma y pasarla por React haría re-renderizar 400 spans sesenta veces
  // por segundo. Lo que cambia es un atributo del DOM sobre dos elementos.
  const palabraRef = useRef(-1);
  const spansRef = useRef(null);
  const rafRef = useRef(0);
  // Seguimiento del scroll: `siguiendo` manda, y se apaga en cuanto la persona
  // toma el control con la rueda, el dedo o el teclado.
  const siguiendoRef = useRef(true);
  const temporizadorRef = useRef(0);

  /** Búsqueda binaria de la palabra que suena en el segundo `t`. */
  const palabraEn = useCallback(
    (t) => {
      if (!timings?.length) return -1;
      let lo = 0;
      let hi = timings.length - 1;
      let encontrada = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (timings[mid][0] <= t) {
          encontrada = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
      // Pasado el final de la palabra y antes de la siguiente (una pausa) se
      // mantiene la última: el ojo se queda donde estaba en vez de parpadear.
      return encontrada;
    },
    [timings]
  );

  const spans = useCallback(() => {
    if (!spansRef.current) {
      spansRef.current = Array.from(
        document.querySelectorAll("[data-narration-word]")
      );
    }
    return spansRef.current;
  }, []);

  /**
   * Deja la palabra activa en una banda cómoda de la pantalla, con aire arriba
   * y abajo. Sólo se mueve cuando se sale de esa banda: corregir en cada
   * palabra convertiría la lectura en un carrusel tembloroso.
   */
  const seguirConLaVista = useCallback((el) => {
    if (!siguiendoRef.current || !el) return;
    const r = el.getBoundingClientRect();
    const alto = window.innerHeight;
    const arriba = alto * 0.3;   // por encima de esto, falta aire arriba
    const abajo = alto * 0.62;   // por debajo, falta aire abajo
    if (r.top >= arriba && r.bottom <= abajo) return;
    const destino = window.scrollY + r.top - alto * 0.4;
    const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: Math.max(0, destino), behavior: suave ? "smooth" : "auto" });
  }, []);

  const pintar = useCallback(
    (t) => {
      const i = palabraEn(t);
      if (i === palabraRef.current) return;
      const lista = spans();
      const antes = lista[palabraRef.current];
      if (antes) antes.removeAttribute("data-narration-active");
      const ahora = lista[i];
      if (ahora) {
        ahora.setAttribute("data-narration-active", "true");
        seguirConLaVista(ahora);
      }
      palabraRef.current = i;
    },
    [palabraEn, seguirConLaVista, spans]
  );

  const limpiarResaltado = useCallback(() => {
    const antes = spans()[palabraRef.current];
    if (antes) antes.removeAttribute("data-narration-active");
    palabraRef.current = -1;
  }, [spans]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || failed) return;
    if (audio.paused) {
      setLoading(true);
      const started = audio.play();
      // Safari devuelve undefined; sólo las promesas se pueden encadenar.
      if (started?.catch) {
        started.catch(() => {
          setFailed(true);
          setLoading(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [failed]);

  const seek = useCallback((seconds) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(seconds)) return;
    audio.currentTime = seconds;
    setCurrent(seconds);
  }, []);

  // La barra espaciadora sobre el botón dispara `click` en un `<button>`, así
  // que no hace falta atajo propio; lo que sí hace falta es que las flechas
  // salten 10 s como en cualquier reproductor.
  const onKeyDown = useCallback(
    (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const audio = audioRef.current;
      if (!audio) return;
      const step = event.key === "ArrowRight" ? 10 : -10;
      seek(Math.min(Math.max(0, audio.currentTime + step), duration || audio.duration || 0));
    },
    [duration, seek]
  );

  /**
   * El resaltado se refresca por fotograma y no con `timeupdate`, que sólo
   * dispara unas cuatro veces por segundo: a esa cadencia la palabra iría
   * medio segundo por detrás de la voz y el seguimiento se sentiría roto.
   */
  useEffect(() => {
    if (!timings?.length) return undefined;
    if (!playing) {
      cancelAnimationFrame(rafRef.current);
      return undefined;
    }
    const paso = () => {
      const audio = audioRef.current;
      if (audio) pintar(audio.currentTime);
      rafRef.current = requestAnimationFrame(paso);
    };
    rafRef.current = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing, pintar, timings]);

  /**
   * Quién manda sobre el scroll.
   *
   * Se escuchan los gestos de la persona (rueda, dedo, teclas de navegación) y
   * NO el evento `scroll`: ese lo dispara también el desplazamiento automático,
   * así que el reproductor se interpretaría a sí mismo como intromisión y se
   * apagaría solo a la primera palabra. Tras ocho segundos sin tocar nada, la
   * página vuelve por donde va la lectura.
   */
  useEffect(() => {
    if (!timings?.length) return undefined;
    const soltarElMando = () => {
      siguiendoRef.current = false;
      clearTimeout(temporizadorRef.current);
      temporizadorRef.current = setTimeout(() => {
        siguiendoRef.current = true;
        const activa = spans()[palabraRef.current];
        if (activa) {
          // Al retomar se centra siempre, aunque la palabra estuviera dentro de
          // la banda: es el gesto que devuelve a la persona al hilo del relato.
          const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          const r = activa.getBoundingClientRect();
          window.scrollTo({
            top: Math.max(0, window.scrollY + r.top - window.innerHeight * 0.4),
            behavior: suave ? "smooth" : "auto",
          });
        }
      }, SEGUIMIENTO_PAUSA_MS);
    };
    const teclas = new Set([
      "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Spacebar",
    ]);
    const porTecla = (e) => {
      if (teclas.has(e.key)) soltarElMando();
    };
    window.addEventListener("wheel", soltarElMando, { passive: true });
    window.addEventListener("touchmove", soltarElMando, { passive: true });
    window.addEventListener("keydown", porTecla);
    return () => {
      window.removeEventListener("wheel", soltarElMando);
      window.removeEventListener("touchmove", soltarElMando);
      window.removeEventListener("keydown", porTecla);
      clearTimeout(temporizadorRef.current);
    };
  }, [spans, timings]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onPlay = () => {
      setPlaying(true);
      setLoading(false);
    };
    const onPause = () => setPlaying(false);
    const onTime = () => {
      if (!scrubbing) setCurrent(audio.currentTime);
    };
    const onMeta = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };
    const onEnded = () => {
      setPlaying(false);
      setCurrent(0);
      audio.currentTime = 0;
      limpiarResaltado();
    };
    // Al saltar con el riel el resaltado salta con él, aunque esté en pausa.
    const onSeeked = () => pintar(audio.currentTime);
    const onError = () => {
      setFailed(true);
      setLoading(false);
      setPlaying(false);
    };
    const onWaiting = () => setLoading(true);
    const onPlaying = () => setLoading(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("seeked", onSeeked);
    audio.addEventListener("error", onError);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("playing", onPlaying);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("seeked", onSeeked);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("playing", onPlaying);
    };
  }, [scrubbing, limpiarResaltado, pintar]);

  if (!audioUrl) return null;

  const total = duration || narration.durationSeconds || 0;
  const lengthLabel = formatNarrationLength(narration.durationSeconds || total);
  const started = playing || current > 0;
  const progress = total > 0 ? Math.min(100, (current / total) * 100) : 0;

  return (
    /* Sin borde inferior: el riel de avance ES el cierre del cintillo. Una
       línea menos en un bloque de dos dedos de alto. */
    <div className={cn("border-t border-line-200/80", className)}>
      <div className="flex items-center gap-3.5 py-3 sm:gap-4">
        <button
          type="button"
          onClick={toggle}
          onKeyDown={onKeyDown}
          disabled={failed}
          aria-label={
            failed
              ? "La narración no se pudo cargar"
              : playing
                ? `Pausar la narración de ${title}`
                : `Escuchar el relato de ${title}`
          }
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500 focus-visible:ring-offset-2",
            failed
              ? "cursor-not-allowed border-line-200 text-ink-500"
              : "border-jungle-500 text-jungle-600 hover:bg-jungle-500 hover:text-white active:scale-[0.97]"
          )}
        >
          {loading && !playing ? (
            <span
              className="h-4 w-4 animate-spin rounded-full border-[1.75px] border-current border-t-transparent"
              aria-hidden="true"
            />
          ) : (
            // El triángulo óptico no está centrado en su caja: 1px a la
            // derecha lo asienta dentro del círculo.
            <Icon name={playing ? "pause" : "play"} size={18} className={playing ? "" : "translate-x-[1px]"} />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-[0.95rem] font-medium text-ink-900">
            {failed ? "La narración no está disponible" : "Escuchar el relato"}
            {!failed ? (
              <span className="atlas-figure font-normal tabular-nums text-ink-500">
                {started ? ` · ${formatClock(current)} / ${formatClock(total)}` : lengthLabel ? ` · ${lengthLabel}` : ""}
              </span>
            ) : null}
          </p>
        </div>
      </div>

      {/* Riel de avance. Es un `range` de verdad, no un div pintado: se maneja
          con el teclado y lo anuncia el lector de pantalla solo. */}
      <div className="relative h-4">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line-200"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 h-px -translate-y-1/2 bg-jungle-500 transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
        <label className="sr-only" htmlFor={sliderId}>
          Avanzar en la narración de {title}
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={Math.max(1, Math.round(total))}
          step={1}
          value={Math.round(current)}
          disabled={failed || !total}
          onChange={(event) => {
            setCurrent(Number(event.target.value));
            if (!scrubbing) seek(Number(event.target.value));
          }}
          onPointerDown={() => setScrubbing(true)}
          onPointerUp={(event) => {
            setScrubbing(false);
            seek(Number(event.currentTarget.value));
          }}
          className="narration-range absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent focus-visible:outline-none disabled:cursor-not-allowed"
        />
      </div>

      {/* `preload="none"`: el MP3 no se toca hasta que alguien pulsa play. */}
      <audio ref={audioRef} src={audioUrl} preload="none" className="hidden" />
    </div>
  );
}
