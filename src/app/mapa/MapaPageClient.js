"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GlassCard } from "../../components/ui/GlassCard";

function MapPlaceholder({ onLoad }) {
  return (
    <section className="container-shell mt-12" aria-labelledby="mapa-interactivo">
      <GlassCard className="overflow-hidden p-0">
        <div className="grid min-h-[420px] place-items-center bg-[radial-gradient(circle_at_top_left,rgba(28,92,63,0.16),transparent_45%),linear-gradient(135deg,rgba(245,241,232,0.95),rgba(226,235,229,0.95))] p-8 text-center">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-jungle-600">
              Exploración geográfica
            </p>
            <h2 id="mapa-interactivo" className="mt-3 font-display text-2xl font-bold text-ink-900">
              Mapa interactivo de los mitos
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Carga el mapa cuando quieras explorar relatos por territorio. Así evitamos transferir la cartografía antes de que la necesites.
            </p>
            <button
              type="button"
              onClick={onLoad}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-jungle-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-jungle-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jungle-700"
            >
              Cargar mapa interactivo
            </button>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}

export default function MapaPageClient() {
  const [MapComponent, setMapComponent] = useState(null);
  const [loadRequested, setLoadRequested] = useState(false);
  const loaderRef = useRef(null);

  const requestMap = useCallback(() => {
    setLoadRequested(true);
  }, []);

  useEffect(() => {
    const node = loaderRef.current;
    if (!node || loadRequested || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoadRequested(true);
          observer.disconnect();
        }
      },
      // Do not start cartography while it still competes with the page hero.
      // It becomes automatic once the visitor scrolls the map into the upper
      // third of the viewport; the explicit button remains available sooner.
      { rootMargin: "0px 0px -65% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loadRequested]);

  useEffect(() => {
    if (!loadRequested || MapComponent) return undefined;

    let active = true;
    import("../../components/MapaExplorer").then((module) => {
      if (active) setMapComponent(() => module.default);
    });

    return () => {
      active = false;
    };
  }, [MapComponent, loadRequested]);

  return (
    <div ref={loaderRef}>
      {MapComponent ? <MapComponent /> : <MapPlaceholder onLoad={requestMap} />}
    </div>
  );
}
