"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Icon } from "./atoms";
import { cn } from "../lib/utils";
import { formatClock, formatNarrationLength } from "../lib/narration";

/**
 * Cintillo de narración: el botón de escuchar, en la cabecera de «El relato».
 *
 * Suena SÓLO el título y el relato — es lo que se mandó a narrar, así que la
 * promesa del botón es literal y no hay que matizarla en ningún lado.
 *
 * `preload="none"` es deliberado: el MP3 de un relato pesa ~2 MB y la enorme
 * mayoría de las visitas viene a leer. Nada se descarga hasta que alguien pulsa
 * play. Por eso la duración llega medida desde la base de datos y no de los
 * metadatos del archivo: el cintillo puede decir «3 min» sin bajar un byte.
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
    };
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
      audio.removeEventListener("error", onError);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("playing", onPlaying);
    };
  }, [scrubbing]);

  if (!audioUrl) return null;

  const total = duration || narration.durationSeconds || 0;
  const lengthLabel = formatNarrationLength(narration.durationSeconds || total);
  const started = playing || current > 0;
  const progress = total > 0 ? Math.min(100, (current / total) * 100) : 0;

  const credit = `voz ${narration.voiceName} · generada con IA`;

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
          {/* En móvil no cabe a la derecha, así que el crédito baja aquí. */}
          <p className="mt-0.5 text-[0.78rem] text-ink-500 sm:hidden">{credit}</p>
        </div>

        {/* Crédito de voz. Una narración hecha con IA se dice, no se disimula. */}
        <p className="hidden shrink-0 text-[0.78rem] text-ink-500 sm:block">{credit}</p>
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
