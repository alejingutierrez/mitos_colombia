import Header from "../../../components/Header";
import { Badge } from "../../../components/ui/Badge";
import { GlassCard } from "../../../components/ui/GlassCard";
import { ButtonLink } from "../../../components/ui/Button";

export const metadata = {
  title: "Bestiario colombiano",
  description: "Criaturas que advierten, transforman y cuidan territorios.",
};

export default function BestiarioColombianoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-12 h-72 w-72 rounded-full bg-ember-400/30 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-river-500/25 blur-3xl motion-safe:animate-float-slow" />
      </div>

      <Header />

      <section className="container-shell mt-16">
        <div className="text-center">
          <Badge className="border-ember-400/30 bg-ember-400/10 text-ember-600">
            Ruta tematica
          </Badge>
          <h1 className="mt-6 font-display text-5xl leading-tight text-ink-900 md:text-6xl">
            Bestiario colombiano
          </h1>
          <p className="section-body mx-auto mt-6 max-w-2xl text-lg">
            Criaturas que advierten, transforman y cuidan territorios.
            Un catalogo de seres miticos que habitan entre lo humano
            y lo animal, guardianes de equilibrios ancestrales.
          </p>
        </div>

        <div className="mt-16">
          <GlassCard className="p-12 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-display text-3xl text-ink-900">
                Proximamente
              </h2>
              <p className="mt-4 text-lg text-ink-600">
                Estamos compilando un bestiario completo de criaturas miticas
                colombianas, desde seres acuaticos hasta guardianes de la selva.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href="/mitos">
                  Explorar todos los mitos
                </ButtonLink>
                <ButtonLink href="/" variant="outline">
                  Volver al inicio
                </ButtonLink>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <GlassCard className="p-8">
            <h3 className="font-display text-xl text-ink-900">
              La Patasola
            </h3>
            <p className="mt-3 text-sm text-ink-600">
              Mujer transformada que castiga la infidelidad
              y protege los bosques de intrusos.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="font-display text-xl text-ink-900">
              El Sombrerón
            </h3>
            <p className="mt-3 text-sm text-ink-600">
              Figura misteriosa que seduce y extravía,
              especialmente a mujeres en caminos solitarios.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="font-display text-xl text-ink-900">
              La Llorona
            </h3>
            <p className="mt-3 text-sm text-ink-600">
              Espiritu que llora por sus hijos perdidos,
              advirtiendo sobre tragedias y peligros.
            </p>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
