"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function MapPlaceholder({ onLoad }) {
  return (
    <section
      className="grid min-h-[calc(100svh-4rem)] border-b border-line-100 lg:grid-cols-[27rem_1fr]"
      aria-labelledby="mapa-interactivo"
    >
      <div className="flex items-center border-b border-line-100 p-7 lg:border-b-0 lg:border-r lg:p-10">
        <div>
          <h1
            id="mapa-interactivo"
            className="font-editorial text-[3.4rem] font-semibold leading-[0.9] text-ink-900"
          >
            El mapa de los mitos de Colombia
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-ink-700">
            Cada relato anclado a su geografía.
          </p>
          <button
            type="button"
            onClick={onLoad}
            className="mt-7 inline-flex min-h-11 items-center justify-center bg-jungle-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-jungle-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jungle-700"
          >
            Cargar mapa interactivo
          </button>
        </div>
      </div>
      <div className="relative grid min-h-[65svh] place-items-center overflow-hidden bg-river-tint">
        <span className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_45%)]" />
        <p className="relative text-sm text-river-700">Preparando la cartografía…</p>
      </div>
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
