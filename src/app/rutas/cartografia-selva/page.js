import Header from "../../../components/Header";
import { Badge } from "../../../components/ui/Badge";
import { GlassCard } from "../../../components/ui/GlassCard";
import { ButtonLink } from "../../../components/ui/Button";

export const metadata = {
  title: "Cartografia de la selva",
  description: "Mitos que explican caminos, limites y pactos con la tierra.",
};

export default function CartografiaSelva() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-12 h-72 w-72 rounded-full bg-jungle-500/30 blur-3xl motion-safe:animate-float-slow" />
          <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-ember-400/25 blur-3xl motion-safe:animate-float-slow" />
        </div>

      <section className="container-shell mt-16">
        <div className="text-center">
          <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
            Ruta tematica
          </Badge>
          <h1 className="mt-6 font-display text-5xl leading-tight text-ink-900 md:text-6xl">
            Cartografia de la selva
          </h1>
          <p className="section-body mx-auto mt-6 max-w-2xl text-lg">
            Mitos que explican caminos, limites y pactos con la tierra.
            Relatos que mapean territorios invisibles y ensenan a leer
            los signos de la naturaleza.
          </p>
        </div>

        <div className="mt-16">
          <GlassCard className="p-12 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-display text-3xl text-ink-900">
                Proximamente
              </h2>
              <p className="mt-4 text-lg text-ink-600">
                Estamos preparando una coleccion de relatos sobre territorios
                sagrados, caminos ancestrales y la geografia mitica de Colombia.
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
              La Madremonte
            </h3>
            <p className="mt-3 text-sm text-ink-600">
              Guardiana de los bosques que marca los limites
              entre lo domestico y lo salvaje.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="font-display text-xl text-ink-900">
              El Duende
            </h3>
            <p className="mt-3 text-sm text-ink-600">
              Ser que extravía a quienes no conocen
              el territorio o rompen los pactos.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="font-display text-xl text-ink-900">
              Cerros encantados
            </h3>
            <p className="mt-3 text-sm text-ink-600">
              Montanas que son puertas a otros mundos
              y puntos de referencia sagrados.
            </p>
          </GlassCard>
        </div>
      </section>
      </main>
    </>
  );
}
