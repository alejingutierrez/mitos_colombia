"use client";

import dynamic from "next/dynamic";
import { GlassCard } from "../../components/ui/GlassCard";

const MapaExplorer = dynamic(() => import("../../components/MapaExplorer"), {
  ssr: false,
  loading: () => (
    <section className="container-shell mt-12">
      <GlassCard className="p-8">
        <p className="text-sm text-ink-600">Cargando mapa...</p>
        <div className="mt-6 h-[420px] w-full rounded-2xl bg-ink-100/60" />
      </GlassCard>
    </section>
  ),
});

export default function MapaPageClient() {
  return <MapaExplorer />;
}
