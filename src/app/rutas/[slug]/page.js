import Header from "../../../components/Header";
import Link from "next/link";
import { Badge } from "../../../components/ui/Badge";
import { GlassCard } from "../../../components/ui/GlassCard";
import { ButtonLink } from "../../../components/ui/Button";
import {
  ROUTES,
  getAccentStyles,
  getMythsByTitles,
  getRouteBySlug,
  resolveMythsByTitles,
} from "../../../lib/routes";
import { notFound } from "next/navigation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return ROUTES.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }) {
  const route = getRouteBySlug(params.slug);
  if (!route) {
    return {};
  }
  return {
    title: route.title,
    description: route.description,
  };
}

function HeroTile({ myth, className }) {
  return (
    <div className={className}>
      {myth?.image_url ? (
        <img
          src={myth.image_url}
          alt={myth.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-jungle-600 via-river-600 to-ember-500" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <Badge className="border-white/70 bg-white/90 text-ink-900">
          {myth?.region || "Territorio"}
        </Badge>
        <h3 className="mt-3 font-display text-2xl text-white">
          {myth?.title || "Ruta en construccion"}
        </h3>
      </div>
    </div>
  );
}

function RouteMythCard({ myth, accentText }) {
  return (
    <Link href={`/mitos/${myth.slug}`} className="group block">
      <GlassCard className="relative h-full overflow-hidden p-0 transition hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative aspect-[3/4] overflow-hidden">
          {myth.image_url ? (
            <img
              src={myth.image_url}
              alt={myth.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-ink-800 via-jungle-700 to-ember-500" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <Badge className="border-white/70 bg-white/90 text-ink-900">
              {myth.region}
            </Badge>
            <h3 className="mt-3 font-display text-xl text-white">
              {myth.title}
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70">
              {myth.community || myth.region}
            </p>
            <div className={`mt-4 text-xs uppercase tracking-[0.3em] ${accentText}`}>
              Leer relato
            </div>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}

export default async function RutaPage({ params }) {
  const route = getRouteBySlug(params.slug);
  if (!route) {
    notFound();
  }

  const curatedHero = route.curated?.heroTitles || [];
  const curatedGallery = route.curated?.galleryTitles || [];
  const curatedTitles = Array.from(
    new Set([...curatedHero, ...curatedGallery].filter(Boolean))
  );
  const curatedMyths = curatedTitles.length
    ? await getMythsByTitles(curatedTitles)
    : [];
  const resolvedMap = resolveMythsByTitles(curatedTitles, curatedMyths);
  const heroItems = curatedHero
    .map((title) => resolvedMap.get(title))
    .filter(Boolean);
  const galleryMyths = curatedGallery
    .map((title) => resolvedMap.get(title))
    .filter(Boolean);
  const accent = getAccentStyles(route.accent);
  const searchQuery = route.keywords[0] || route.title;

  return (
    <>
      <Header />
      <main className="relative min-h-screen pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className={`absolute -top-32 left-12 h-72 w-72 rounded-full ${accent.glow} blur-3xl motion-safe:animate-float-slow`} />
          <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-ink-500/20 blur-3xl motion-safe:animate-float-slow" />
        </div>

        <section className="container-shell mt-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <Badge className={accent.badge}>Ruta tematica</Badge>
              <h1 className="font-display text-5xl leading-tight text-ink-900 md:text-6xl">
                {route.title}
              </h1>
              <p className="section-body max-w-xl text-lg">
                {route.intro || route.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {route.keywords.slice(0, 5).map((keyword) => (
                  <Badge key={keyword} className="border-ink-500/20 bg-white/70 text-ink-600">
                    {keyword}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href={`/mitos?q=${encodeURIComponent(searchQuery)}`}>
                  Explorar relatos
                </ButtonLink>
                <ButtonLink href="/" variant="outline">
                  Volver al inicio
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard className="group relative aspect-[4/5] overflow-hidden p-0">
                <HeroTile myth={heroItems[0]} className="absolute inset-0" />
              </GlassCard>
              <div className="grid gap-4">
                <GlassCard className="group relative aspect-[16/9] overflow-hidden p-0">
                  <HeroTile myth={heroItems[1]} className="absolute inset-0" />
                </GlassCard>
                <GlassCard className="group relative aspect-[16/9] overflow-hidden p-0">
                  <HeroTile myth={heroItems[2]} className="absolute inset-0" />
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell mt-24">
          <div className="grid gap-6 md:grid-cols-3">
            {route.highlights.map((highlight) => (
              <GlassCard key={highlight.title} className="p-8">
                <p className={`text-xs font-medium uppercase tracking-[0.3em] ${accent.text}`}>
                  Itinerario
                </p>
                <h3 className="mt-4 font-display text-2xl text-ink-900">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm text-ink-600">
                  {highlight.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="container-shell mt-24">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Galeria editorial</p>
              <h2 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl">
                Imagenes que ya narran la ruta
              </h2>
              <p className="section-body mt-4 max-w-2xl">
                {route.galleryIntro ||
                  "Selección visual a partir de los mitos ya ilustrados. Cada pieza aporta textura, tono y contexto para leer esta ruta."}
              </p>
            </div>
            <ButtonLink href={`/mitos?q=${encodeURIComponent(searchQuery)}`} variant="subtle">
              Ver todos los mitos
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {galleryMyths.map((myth) => (
              <RouteMythCard key={myth.slug} myth={myth} accentText={accent.text} />
            ))}
          </div>
        </section>

        <section className="container-shell mt-24">
          <GlassCard className="grid gap-6 p-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <p className="eyebrow">Continuar explorando</p>
              <h2 className="mt-4 font-display text-3xl text-ink-900">
                Rutas conectadas por territorio y memoria
              </h2>
              <p className="section-body mt-4">
                Cruza a otras rutas para ampliar el mapa de simbolos y personajes.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {ROUTES.filter((item) => item.slug !== route.slug)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/rutas/${item.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-sm text-ink-700 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="font-medium">{item.title}</span>
                    <span className={`text-xs uppercase tracking-[0.3em] ${accent.text}`}>
                      Ruta
                    </span>
                  </Link>
                ))}
            </div>
          </GlassCard>
        </section>
      </main>
    </>
  );
}
