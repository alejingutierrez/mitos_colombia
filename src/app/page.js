import Header from "../components/Header";
import { Badge } from "../components/ui/Badge";
import { ButtonLink } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeader } from "../components/ui/SectionHeader";
import { MythCard } from "../components/MythCard";
import {
  getFeaturedMythsWithImages,
  getDiverseMyths,
  getHomeStats,
  getTaxonomy,
} from "../lib/myths";

// Generate a seed based on the current day to rotate content daily
function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}

const quickTags = [
  "Guardianes del agua",
  "Bosques y niebla",
  "Criaturas nocturnas",
  "Ritos del mar",
  "Fronteras y caminos",
  "Voces urbanas",
];

const routes = [
  {
    title: "Guardianes del agua",
    detail: "Relatos que protegen rios, lagunas y corrientes invisibles.",
    tone: "Rios y neblina",
    href: "/rutas/guardianes-del-agua",
  },
  {
    title: "Cartografia de la selva",
    detail: "Mitos que explican caminos, limites y pactos con la tierra.",
    tone: "Selva y bruma",
    href: "/rutas/cartografia-selva",
  },
  {
    title: "Bestiario colombiano",
    detail: "Criaturas que advierten, transforman y cuidan territorios.",
    tone: "Sombras y fuego",
    href: "/rutas/bestiario-colombiano",
  },
];

const collections = [
  {
    title: "Relatos de frontera",
    detail: "Lugares liminales y pactos invisibles.",
  },
  {
    title: "Mitos de cosecha",
    detail: "Ciclos de tierra, trabajo y ofrenda.",
  },
  {
    title: "Noches de pueblo",
    detail: "Historias urbanas que cruzan generaciones.",
  },
];

const regionDescriptions = {
  Amazonas: "Guardianes de selva, origenes y ciclos rituales.",
  Orinoquía: "Llanos abiertos, fuego y relatos de madrugada.",
  Andina: "Montanas, paramos y memorias del camino.",
  Caribe: "Mareas, viento y cantos del puerto.",
  Pacífico: "Manglares, ritmo y memoria afro.",
  Varios: "Historias diversas que cruzan territorios.",
};

export default async function Home() {
  const seed = getDailySeed();

  // Fetch dynamic data
  const [featuredMyths, diverseMyths, stats, taxonomy] = await Promise.all([
    getFeaturedMythsWithImages(9, seed),
    getDiverseMyths(6, seed),
    getHomeStats(),
    getTaxonomy(),
  ]);

  // Get the main featured myth (first one with image)
  const heroMyth = featuredMyths[0];

  // Get remaining featured myths for gallery
  const galleryMyths = featuredMyths.slice(1, 7);

  // Prepare stats for display
  const displayStats = [
    { value: `${stats.total_myths || 505}`, label: "Mitos curados" },
    { value: `${stats.total_regions || 6}`, label: "Regiones culturales" },
    { value: `${taxonomy.communities.length || 50}+`, label: "Comunidades" },
  ];
  return (
    <>
      <Header />
      <main className="relative min-h-screen pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-12 h-72 w-72 rounded-full bg-jungle-500/30 blur-3xl motion-safe:animate-float-slow" />
          <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-river-500/25 blur-3xl motion-safe:animate-float-slow" />
          <div className="absolute bottom-10 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-ember-400/25 blur-[140px] motion-safe:animate-float-slow" />
        </div>

      <section className="container-shell mt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="flex flex-col justify-center gap-8 animate-fade-up">
            <div>
              <p className="eyebrow">Biblioteca editorial</p>
              <h1 className="mt-4 font-display text-5xl leading-tight text-ink-900 md:text-6xl">
                Relatos que nacen del territorio
              </h1>
              <p className="section-body mt-6 max-w-xl text-lg">
                Una coleccion digital de mitos colombianos organizados por region,
                comunidad y tematica. Descubre historias ancestrales con contexto
                cultural y visuales contemporaneas.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                className="input-glass flex-1"
                placeholder="Buscar mito, region o tema"
                type="text"
              />
              <ButtonLink href="/mitos" className="whitespace-nowrap">
                Explorar coleccion
              </ButtonLink>
            </div>

            <div className="flex flex-wrap gap-2">
              {quickTags.map((tag) => (
                <Badge key={tag} className="border-river-500/20 bg-river-500/5 text-river-700">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up-2">
            {heroMyth ? (
              <div className="relative">
                {heroMyth.image_url && (
                  <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-2xl">
                    <img
                      src={heroMyth.image_url}
                      alt={heroMyth.title}
                      className="aspect-[4/5] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <Badge className="mb-3 border-white/60 bg-white/95 text-ink-900 backdrop-blur-md shadow-lg">
                        {heroMyth.region}
                      </Badge>
                      <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
                        {heroMyth.title}
                      </h2>
                      <p className="mt-3 text-sm text-white/90 line-clamp-2">
                        {heroMyth.excerpt}
                      </p>
                      <ButtonLink
                        href={`/mitos/${heroMyth.slug}`}
                        className="mt-6"
                        variant="subtle"
                      >
                        Leer relato completo
                      </ButtonLink>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <GlassCard className="p-8">
                <p className="eyebrow text-ember-500">Cargando</p>
                <div className="mt-4 h-64 animate-pulse rounded-2xl bg-ink-100/50" />
              </GlassCard>
            )}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16">
          {displayStats.map((stat) => (
            <GlassCard key={stat.label} className="p-6 text-center">
              <p className="font-display text-4xl text-ink-900">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-ink-500">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24 animate-fade-up-3">
        <SectionHeader
          eyebrow="Rutas de exploracion"
          title="Curaduria para leer con contexto y ritmo."
          description="Listas tematicas pensadas para descubrir patrones, conexiones y
            simbolos que se repiten en distintas regiones."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {routes.map((route) => (
            <a
              key={route.title}
              href={route.href}
              className="group block"
            >
              <GlassCard className="h-full p-8 transition hover:-translate-y-2 hover:shadow-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-river-600">
                  {route.tone}
                </p>
                <h3 className="mt-4 font-display text-2xl text-ink-900 transition group-hover:text-river-600">
                  {route.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{route.detail}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-river-600 transition group-hover:gap-3">
                  <span>Ver ruta</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </section>

      {galleryMyths.length > 0 && (
        <section className="container-shell mt-32">
          <div className="text-center">
            <p className="eyebrow">Galeria ilustrada</p>
            <h2 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl">
              Relatos con memoria visual
            </h2>
            <p className="section-body mx-auto mt-4 max-w-2xl">
              Cada ilustracion captura la esencia, simbolismo y atmosfera
              de los relatos ancestrales colombianos.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryMyths.map((myth) => (
              <MythCard key={myth.id} myth={myth} featured />
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/mitos" variant="subtle">
              Explorar coleccion completa
            </ButtonLink>
          </div>
        </section>
      )}

      {diverseMyths.length > 0 && (
        <section className="container-shell mt-32">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Rotacion diaria</p>
              <h2 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl">
                Descubre relatos de todas las regiones
              </h2>
              <p className="section-body mt-4">
                Una seleccion diversa que cambia cada dia, pensada para explorar
                la riqueza geografica y cultural de Colombia.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diverseMyths.map((myth) => (
              <MythCard key={myth.id} myth={myth} />
            ))}
          </div>
        </section>
      )}

      <section className="container-shell mt-32">
        <div className="text-center">
          <p className="eyebrow">Atlas territorial</p>
          <h2 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl">
            Seis territorios, cientos de historias
          </h2>
          <p className="section-body mx-auto mt-4 max-w-2xl">
            Cada region de Colombia tiene sus propios relatos, guardianes y ritmos.
            Explora la diversidad cultural del pais a traves de sus mitos.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {taxonomy.regions.map((region) => (
            <a
              key={region.slug}
              href={`/mitos?region=${region.slug}`}
              className="group block"
            >
              <GlassCard className="h-full p-8 transition hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-ink-900 transition group-hover:text-river-600">
                    {region.name}
                  </h3>
                  <Badge className="shrink-0 border-river-500/30 bg-river-500/10 text-river-600">
                    {region.myth_count}
                  </Badge>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  {regionDescriptions[region.name] || "Explora los mitos de esta region."}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-river-600 transition group-hover:gap-3">
                  <span>Explorar</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </section>

      <section className="container-shell mt-32">
        <div className="mb-12 text-center">
          <p className="eyebrow">Rutas tematicas</p>
          <h2 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl">
            Colecciones para explorar en profundidad
          </h2>
          <p className="section-body mx-auto mt-4 max-w-2xl">
            Recorridos editoriales que conectan simbolos, personajes y paisajes
            a traves de diferentes territorios.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {collections.map((collection) => (
            <GlassCard
              key={collection.title}
              className="group p-8 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="font-display text-2xl text-ink-900 transition group-hover:text-jungle-600">
                {collection.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                {collection.detail}
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-jungle-600 opacity-0 transition group-hover:opacity-100">
                <span>Proximamente</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="container-shell mt-32 mb-12">
        <GlassCard className="overflow-hidden bg-gradient-to-br from-white/95 via-river-50/50 to-jungle-50/30 p-12 md:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-ember-500">Biblioteca viva</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 md:text-5xl">
              {stats.total_myths}+ relatos colombianos
            </h2>
            <p className="section-body mx-auto mt-6 max-w-2xl text-lg">
              Una coleccion en constante crecimiento que preserva y celebra
              la riqueza narrativa de Colombia. Cada dia descubriras nuevos
              relatos destacados con contenido visual que rota inteligentemente.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/mitos">
                Explorar coleccion completa
              </ButtonLink>
              <ButtonLink href="/mitos?region=amazonas" variant="outline">
                Ver mitos del Amazonas
              </ButtonLink>
            </div>
          </div>
        </GlassCard>
      </section>
      </main>
    </>
  );
}
