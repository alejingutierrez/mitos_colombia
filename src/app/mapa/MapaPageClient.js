"use client";

import dynamic from "next/dynamic";

// La cartografía se resuelve sola. Antes vivía detrás de un IntersectionObserver
// que sólo tenía una oportunidad: su primer registro. El navegador no entrega
// registros de intersección mientras el documento no se pinta (pestaña oculta,
// ventana tapada, carga en segundo plano), así que esa oportunidad se perdía y
// el mapa quedaba pendiente para siempre; el botón de rescate tampoco podía
// reintentar porque la bandera ya estaba levantada. `next/dynamic` con
// `ssr: false` descarga Leaflet apenas hidrata la página —sin gestos ni
// observadores— y muestra este esqueleto mientras llega el bundle.
const MapaExplorer = dynamic(() => import("../../components/MapaExplorer"), {
  ssr: false,
  loading: MapaSkeleton,
});

// El esqueleto también es el HTML del servidor: `next/dynamic` renderiza el
// `loading` en el servidor aunque `ssr` sea false, así que el <h1> de la página
// viaja en la respuesta y no depende de que corra JavaScript.
function MapaSkeleton() {
  return (
    <section
      className="flex flex-col border-b border-line-100 bg-white lg:grid lg:h-[calc(100svh-4rem)] lg:grid-cols-[26rem_1fr]"
      aria-labelledby="mapa-interactivo"
    >
      <div className="relative order-1 h-[58svh] w-full overflow-hidden bg-river-tint lg:order-2 lg:h-full">
        <span className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_45%)]" />
        <p className="absolute inset-0 grid place-items-center text-sm text-river-700">
          Dibujando el mapa…
        </p>
      </div>

      <aside className="order-2 flex min-h-0 flex-col border-t border-line-100 lg:order-1 lg:border-r lg:border-t-0">
        <div className="min-h-0 flex-1 px-5 py-6 lg:px-9 lg:py-9">
          <h1
            id="mapa-interactivo"
            className="font-display text-[length:var(--step-4)] leading-[1.04] tracking-[-0.012em] text-balance text-ink-900"
          >
            El mapa de los mitos de Colombia
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-ink-700">
            Cada relato anclado a su geografía.
          </p>
          <div className="mt-7 space-y-3" aria-hidden="true">
            <div className="h-12 w-full animate-pulse bg-mist-50" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 animate-pulse bg-mist-50" />
              <div className="h-12 animate-pulse bg-mist-50" />
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default function MapaPageClient() {
  return <MapaExplorer />;
}
