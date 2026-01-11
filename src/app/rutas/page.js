import Link from "next/link";
import Header from "../../components/Header";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { ButtonLink } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { MythCard } from "../../components/MythCard";
import { getRoutePreviews } from "../../lib/routes";
import { getFeaturedMythsWithImages, getHomeStats } from "../../lib/myths";

export const metadata = {
  title: "Rutas",
  description:
    "Rutas editoriales para explorar mitos colombianos por simbolos, territorios y resonancias culturales.",
};

export const revalidate = 86400;

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-river-600 underline decoration-river-200 decoration-2 underline-offset-4 transition hover:text-river-700"
  >
    {children}
  </Link>
);

const guideSteps = [
  {
    title: "Lee el territorio como archivo",
    detail:
      "Cada ruta agrupa mitos que comparten paisajes, guardianes o tensiones similares. Puedes recorrer el territorio como si fuese una biblioteca viva.",
  },
  {
    title: "Cruza simbolos y resonancias",
    detail:
      "Las rutas ayudan a descubrir motivos que se repiten: agua, montes, pactos o apariciones. Es una lectura comparada que revela conexiones.",
  },
  {
    title: "Vuelve al mito original",
    detail:
      "Cuando un relato te llama, vuelve a su pagina completa para profundizar en su origen, su comunidad y su contexto.",
  },
];

export default async function RutasPage() {
  const seed = getDailySeed();
  const [routePreviews, featuredMyths, stats] = await Promise.all([
    getRoutePreviews(seed),
    getFeaturedMythsWithImages(6, seed),
    getHomeStats(),
  ]);

  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-12 left-10 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-12 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <main className="relative min-h-screen pb-24">
        <section className="container-shell mt-12 space-y-10">
          <SectionHeader
            eyebrow="Rutas editoriales"
            title="Cartografias para leer el mito como territorio."
            description="Colecciones curadas que conectan relatos, paisajes y simbolos para leer la memoria colombiana en secuencia."
          />

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Un atlas para navegar la memoria
            </h2>
            <p className="text-sm leading-relaxed text-ink-600">
              Las rutas editoriales nacen de la necesidad de leer los mitos como
              un tejido. Cada relato existe en un lugar, pero tambien conversa
              con otros mitos que comparten guardianes, paisajes y dilemas
              similares. Las rutas permiten moverse entre esas conexiones sin
              perder la profundidad de cada historia. Puedes iniciar en una
              ruta y luego abrir el <InlineLink href="/mapa">Mapa</InlineLink>{" "}
              para ubicar esos relatos en el territorio real.
            </p>
            <p className="text-sm leading-relaxed text-ink-600">
              Este trabajo se apoya en la{" "}
              <InlineLink href="/metodologia">Metodologia</InlineLink>, donde
              explicamos como organizamos el archivo. Las rutas sirven como
              lectura guiada para quienes buscan contexto, comparaciones o una
              experiencia mas editorial. Cuando termines una ruta, puedes seguir
              explorando en <InlineLink href="/mitos">Mitos</InlineLink> o en
              <InlineLink href="/categorias">Categorias</InlineLink>.
            </p>
          </GlassCard>
        </section>

        <section className="container-shell mt-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {routePreviews.map((route) => (
              <a
                key={route.slug}
                href={`/rutas/${route.slug}`}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/60 shadow-glass transition hover:-translate-y-2 hover:shadow-2xl">
                  {route.preview?.image_url ? (
                    <img
                      src={route.preview.image_url}
                      alt={route.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-jungle-600 via-river-600 to-ember-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-900/45 to-transparent" />
                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 text-white">
                    <div className="max-w-[90%] rounded-2xl bg-ink-950/70 p-4 backdrop-blur-sm shadow-lg">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                        {route.tone}
                      </p>
                      <h3 className="mt-3 font-display text-2xl">
                        {route.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/85 line-clamp-3">
                        {route.detail}
                      </p>
                    </div>
                    <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
                      <span>Ver ruta</span>
                      <span className="transition group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="container-shell mt-20">
          <GlassCard className="p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-river-500/30 bg-river-500/10 text-river-700">
                Guia de lectura
              </Badge>
              <Badge className="border-ember-400/30 bg-ember-400/10 text-ember-600">
                {stats.total_myths || 505} relatos en el archivo
              </Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {guideSteps.map((step) => (
                <GlassCard key={step.title} className="p-6 space-y-3">
                  <h3 className="font-display text-xl text-ink-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-600">
                    {step.detail}
                  </p>
                </GlassCard>
              ))}
            </div>
          </GlassCard>
        </section>

        {featuredMyths.length > 0 && (
          <section className="container-shell mt-20">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Relatos destacados</p>
                <h2 className="mt-3 font-display text-3xl text-ink-900 md:text-4xl">
                  Historias para iniciar tu ruta
                </h2>
                <p className="section-body mt-3 max-w-2xl">
                  Una seleccion rotativa de mitos con imagenes listas para
                  explorar. Cada tarjeta conecta con su region y comunidad.
                </p>
              </div>
              <ButtonLink href="/mitos" variant="subtle">
                Explorar todos los mitos
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredMyths.map((myth) => (
                <MythCard key={myth.id} myth={myth} />
              ))}
            </div>
          </section>
        )}

        <section className="container-shell mt-20">
          <GlassCard className="p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow">Sigue explorando</p>
                <h2 className="mt-3 font-display text-3xl text-ink-900">
                  Cruza rutas, mapa y comunidades
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  El archivo crece con cada lectura. Recorre el{" "}
                  <InlineLink href="/mapa">Mapa</InlineLink> para ubicar los
                  relatos en su paisaje y visita las{" "}
                  <InlineLink href="/comunidades">Comunidades</InlineLink> para
                  entender las voces que los mantienen vivos.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/mapa">Explorar mapa</ButtonLink>
                <ButtonLink href="/comunidades" variant="outline">
                  Ver comunidades
                </ButtonLink>
              </div>
            </div>
          </GlassCard>
        </section>
      </main>
    </>
  );
}
