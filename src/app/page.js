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
  },
  {
    title: "Cartografia de la selva",
    detail: "Mitos que explican caminos, limites y pactos con la tierra.",
    tone: "Selva y bruma",
  },
  {
    title: "Bestiario colombiano",
    detail: "Criaturas que advierten, transforman y cuidan territorios.",
    tone: "Sombras y fuego",
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
    { value: `${stats.myths_with_images || 23}`, label: "Con imagenes" },
  ];
  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-12 h-72 w-72 rounded-full bg-jungle-500/30 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-river-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-10 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-ember-400/25 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <Header />

      <section className="container-shell mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-6 animate-fade-up">
          <div>
            <p className="eyebrow">Biblioteca editorial</p>
            <h1 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl">
              Relatos que nacen del territorio y se leen como un atlas vivo.
            </h1>
            <p className="section-body mt-4 max-w-xl">
              Una coleccion digital de mitos colombianos con navegacion por
              region, tema y tono. Disenado para descubrir historias con
              contexto, fuentes y un lenguaje visual contemporaneo.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              className="input-glass"
              placeholder="Buscar mito, region o tema"
              type="text"
            />
            <ButtonLink href="/mitos" className="whitespace-nowrap">
              Explorar
            </ButtonLink>
          </div>

          <div className="flex flex-wrap gap-2">
            {quickTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {displayStats.map((stat) => (
              <GlassCard key={stat.label} className="p-4">
                <p className="font-display text-2xl text-ink-900">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up-2">
          {heroMyth ? (
            <GlassCard className="p-6">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-ember-500">Mito destacado del dia</p>
                <Badge className="border-ember-400/30 bg-ember-400/15 text-ember-500">
                  {heroMyth.region}
                </Badge>
              </div>
              <h2 className="mt-4 font-display text-3xl text-ink-900">
                {heroMyth.title}
              </h2>
              <p className="mt-3 text-sm text-ink-700 line-clamp-3">
                {heroMyth.excerpt}
              </p>
              {heroMyth.category_path && (
                <div className="mt-4">
                  <p className="text-xs text-ink-500">{heroMyth.category_path}</p>
                </div>
              )}
              {heroMyth.image_url && (
                <div className="mt-6 h-44 overflow-hidden rounded-2xl border border-white/60">
                  <img
                    src={heroMyth.image_url}
                    alt={heroMyth.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <ButtonLink href={`/mitos/${heroMyth.slug}`} className="mt-6 w-full">
                Leer mito
              </ButtonLink>
            </GlassCard>
          ) : (
            <GlassCard className="p-6">
              <p className="eyebrow text-ember-500">Mito destacado</p>
              <h2 className="mt-4 font-display text-3xl text-ink-900">
                Cargando contenido...
              </h2>
            </GlassCard>
          )}
          <GlassCard className="absolute -bottom-10 left-6 right-6 p-4">
            <p className="eyebrow">Explora la coleccion</p>
            <p className="mt-2 text-sm text-ink-700">
              Descubre mitos conectados por region, tema y simbolos compartidos.
            </p>
          </GlassCard>
        </div>
      </section>

      <section className="container-shell mt-24 animate-fade-up-3">
        <SectionHeader
          eyebrow="Rutas de exploracion"
          title="Curaduria para leer con contexto y ritmo."
          description="Listas tematicas pensadas para descubrir patrones, conexiones y
            simbolos que se repiten en distintas regiones."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {routes.map((route) => (
            <GlassCard
              key={route.title}
              className="p-5 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-river-600">
                {route.tone}
              </p>
              <h3 className="mt-3 font-display text-xl text-ink-900">
                {route.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{route.detail}</p>
              <button
                type="button"
                className="mt-4 text-xs uppercase tracking-[0.3em] text-ink-500"
              >
                Ver ruta
              </button>
            </GlassCard>
          ))}
        </div>
      </section>

      {galleryMyths.length > 0 && (
        <section className="container-shell mt-24 animate-fade-up-3">
          <SectionHeader
            eyebrow="Galeria visual"
            title="Mitos ilustrados con IA generativa"
            description="Cada imagen es generada especialmente para capturar la esencia y simbolismo del mito."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryMyths.map((myth) => (
              <MythCard key={myth.id} myth={myth} featured />
            ))}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/mitos">Ver todos los mitos</ButtonLink>
          </div>
        </section>
      )}

      {diverseMyths.length > 0 && (
        <section className="container-shell mt-24 animate-fade-up-3">
          <SectionHeader
            eyebrow="Descubre mas"
            title="Exploracion diaria desde distintas regiones"
            description="Una seleccion rotativa que cambia cada dia para descubrir nuevos relatos."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {diverseMyths.map((myth) => (
              <MythCard key={myth.id} myth={myth} />
            ))}
          </div>
        </section>
      )}

      <section className="container-shell mt-24 animate-fade-up-3">
        <SectionHeader
          eyebrow="Atlas de regiones"
          title="La geografia mitica de Colombia en seis territorios."
          description="Cada region tiene sus propios relatos, guardianes y ritmos. Esta
            vista abre la puerta a navegaciones locales."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {taxonomy.regions.map((region) => (
            <a
              key={region.slug}
              href={`/mitos?region=${region.slug}`}
              className="block"
            >
              <GlassCard className="p-5 transition hover:-translate-y-1 hover:shadow-lift h-full">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-xl text-ink-900 group-hover:text-river-600">
                    {region.name}
                  </h3>
                  <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                    {region.myth_count}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-ink-700">
                  {regionDescriptions[region.name] || "Explora los mitos de esta region."}
                </p>
              </GlassCard>
            </a>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24 animate-fade-up-4">
        <SectionHeader
          eyebrow="Colecciones curatoriales"
          title="Recorridos tematicos para leer en profundidad."
          description="Listas editoriales para seguir simbolos, personajes y paisajes con
            continuidad narrativa."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {collections.map((collection) => (
            <GlassCard
              key={collection.title}
              className="p-5 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-display text-xl text-ink-900">
                {collection.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{collection.detail}</p>
              <button
                type="button"
                className="mt-4 text-xs uppercase tracking-[0.3em] text-ink-500"
              >
                Abrir coleccion
              </button>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24">
        <GlassCard className="p-8">
          <p className="eyebrow text-ember-500">Biblioteca viva</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900">
            {stats.total_myths}+ mitos colombianos con ilustraciones generadas por IA.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-700">
            Esta coleccion crece constantemente. Cada dia descubriras nuevos mitos destacados
            con un sistema de rotacion inteligente que prioriza contenido visual y distribucion
            geografica equilibrada.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/mitos" variant="subtle">
              Explorar coleccion completa
            </ButtonLink>
            <ButtonLink href="/mitos?region=amazonas" variant="outline">
              Ver mitos del Amazonas
            </ButtonLink>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
