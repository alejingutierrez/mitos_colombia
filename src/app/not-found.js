import {
  ButtonLink,
  Container,
  Eyebrow,
  Heading,
  Icon,
  Motif,
  StatusDot,
  Surface,
  Text,
} from "../components/atoms";
import { MythCard, SectionHeader } from "../components/molecules";
import { Header } from "../components/organisms";
import { mythMotif } from "../components/templates/MythSections";
import { listMyths } from "../lib/myths";

export const runtime = "nodejs";
export const revalidate = 300;

export const metadata = {
  title: "Página no encontrada",
  description:
    "El enlace solicitado no existe o cambió de lugar en Mitos de Colombia.",
  robots: {
    index: false,
    follow: false,
  },
};

function mapMyth(myth) {
  return {
    slug: myth.slug,
    title: myth.title,
    excerpt: myth.excerpt || "Relato de la tradición oral colombiana.",
    region: myth.region,
    community: myth.community,
    imageUrl: null,
    motif: mythMotif(myth),
  };
}

export default async function NotFound() {
  const result = await listMyths({ limit: 8, offset: 0 });
  const recommendations = (result.items || []).map(mapMyth);

  return (
    <>
      <Header />
      <main className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section className="relative overflow-hidden border-b border-line-100">
          <Motif
            name="hoja"
            size={520}
            className="pointer-events-none absolute -left-28 -top-24 z-0 hidden opacity-[0.04] lg:block"
            aria-hidden="true"
          />
          <Motif
            name="luna"
            size={360}
            className="pointer-events-none absolute -bottom-24 right-0 z-0 hidden opacity-[0.035] lg:block"
            aria-hidden="true"
          />

          <Container size="wide" className="relative z-10 py-12 md:py-20">
            <Surface className="relative overflow-hidden p-6 md:p-10">
              <div className="grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <StatusDot tone="jungle" />
                    <Eyebrow tone="jungle">Error 404</Eyebrow>
                  </div>
                  <Heading level={0} accent="jungle" className="max-w-3xl">
                    Esta página se perdió en la selva de mitos
                  </Heading>
                  <Text size="lg" className="mt-6 max-w-2xl">
                    El enlace que sigues no existe o cambió de lugar. Mientras
                    tanto, puedes volver al archivo o navegar por las categorías
                    para retomar el recorrido.
                  </Text>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink href="/mitos" variant="primary" size="lg">
                      Ver todos los mitos
                    </ButtonLink>
                    <ButtonLink href="/categorias" variant="secondary" size="lg">
                      Navegar categorías
                    </ButtonLink>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="relative aspect-square w-full max-w-[280px] border border-line-100 bg-mist-50 p-6">
                    <span
                      className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 border-r border-t border-jungle-500/35"
                      aria-hidden="true"
                    />
                    <span
                      className="pointer-events-none absolute -bottom-2 -left-2 h-8 w-8 border-b border-l border-river-500/35"
                      aria-hidden="true"
                    />
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <Motif name="jaguar" size={156} className="opacity-80" />
                      <p className="mt-4 font-display text-5xl font-extrabold leading-none text-ink-900">
                        404
                      </p>
                      <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                        Ruta no encontrada
                        <Icon name="map-pin" size={14} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Surface>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container size="wide">
            <SectionHeader
              eyebrow="Recomendaciones"
              title="Lecturas sugeridas"
              description="Relatos del archivo para seguir explorando sin perder el hilo."
              action={
                <ButtonLink href="/mitos" variant="secondary" size="sm">
                  Explorar más
                </ButtonLink>
              }
            />

            {recommendations.length ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {recommendations.map((myth) => (
                  <MythCard
                    key={myth.slug}
                    myth={myth}
                    motif={myth.motif}
                    className="h-full"
                  />
                ))}
              </div>
            ) : null}
          </Container>
        </section>
      </main>
    </>
  );
}
