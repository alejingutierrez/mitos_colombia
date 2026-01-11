import { Suspense } from "react";
import Header from "../../components/Header";
import MapaExplorer from "../../components/MapaExplorer";
import { GlassCard } from "../../components/ui/GlassCard";

export const metadata = {
  title: "Mapa",
  description:
    "Mapa interactivo de mitos colombianos. Explora relatos por ubicacion y territorio.",
};

export default function MapaPage() {
  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-16 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-12 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>
      <main className="relative min-h-screen pb-24">
        <Suspense
          fallback={
            <section className="container-shell mt-12">
              <GlassCard className="p-8">
                <p className="text-sm text-ink-600">Cargando mapa...</p>
                <div className="mt-6 h-[420px] w-full rounded-2xl bg-ink-100/60" />
              </GlassCard>
            </section>
          }
        >
          <MapaExplorer />
        </Suspense>
      </main>
    </>
  );
}
