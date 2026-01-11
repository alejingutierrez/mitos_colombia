import Header from "../../components/Header";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";

export const metadata = {
  title: "Sobre el proyecto",
  description:
    "Conoce la visión editorial detrás de Mitos de Colombia y la curaduría del archivo.",
};

export default function SobreElProyectoPage() {
  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-14 left-10 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-10 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <main className="relative min-h-screen pb-24">
        <section className="container-shell mt-12 space-y-10">
          <SectionHeader
            eyebrow="Archivo editorial"
            title="Una cartografía viva de mitos colombianos."
            description="Este proyecto busca conservar la memoria oral y revelar la diversidad de imaginarios que habitan el territorio."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <GlassCard className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-jungle-600">
                Visión
              </p>
              <p className="text-sm text-ink-600 leading-relaxed">
                Reunimos relatos, versiones y variantes para preservar la riqueza
                simbólica de Colombia en un formato moderno y accesible.
              </p>
            </GlassCard>
            <GlassCard className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-river-600">
                Curaduría
              </p>
              <p className="text-sm text-ink-600 leading-relaxed">
                Organizamos los mitos por región, comunidad y tema para facilitar
                la exploración, sin perder el contexto cultural.
              </p>
            </GlassCard>
            <GlassCard className="p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500">
                Futuro
              </p>
              <p className="text-sm text-ink-600 leading-relaxed">
                Integraremos herramientas de investigación, mapas y visuales que
                amplifiquen estas narrativas con respeto y rigor.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8">
            <h2 className="font-display text-2xl text-ink-900">
              Un archivo en movimiento
            </h2>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              Mitos de Colombia no es una colección cerrada: es un mapa que se
              expande con nuevas voces, fuentes y hallazgos. Invitamos a lectores,
              investigadores y comunidades a aportar y corregir, para que el relato
              colectivo se mantenga vivo.
            </p>
          </GlassCard>
        </section>
      </main>
    </>
  );
}
