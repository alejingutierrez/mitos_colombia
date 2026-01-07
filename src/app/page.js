import Header from "../components/Header";
import { Badge } from "../components/ui/Badge";
import { ButtonLink } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeader } from "../components/ui/SectionHeader";

const quickTags = [
  "Guardianes del agua",
  "Bosques y niebla",
  "Criaturas nocturnas",
  "Ritos del mar",
  "Fronteras y caminos",
  "Voces urbanas",
];

const stats = [
  { value: "120+", label: "Mitos curados" },
  { value: "6", label: "Regiones culturales" },
  { value: "18", label: "Ejes tematicos" },
];

const featured = [
  {
    title: "El Mohan y las voces del rio",
    region: "Magdalena",
    theme: "Guardianes del agua",
    readTime: "6 min",
  },
  {
    title: "La Madremonte",
    region: "Andina",
    theme: "Bosques y limites",
    readTime: "5 min",
  },
  {
    title: "La Tunda",
    region: "Pacifico",
    theme: "Manglar y hechizo",
    readTime: "7 min",
  },
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

const atlas = [
  {
    title: "Amazonia",
    detail: "Guardianes de selva, origenes y ciclos rituales.",
  },
  {
    title: "Orinoquia",
    detail: "Llanos abiertos, fuego y relatos de madrugada.",
  },
  {
    title: "Andina",
    detail: "Montanas, paramos y memorias del camino.",
  },
  {
    title: "Caribe",
    detail: "Mareas, viento y cantos del puerto.",
  },
  {
    title: "Pacifico",
    detail: "Manglares, ritmo y memoria afro.",
  },
  {
    title: "Insular",
    detail: "Islas, navegantes y mares abiertos.",
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

export default function Home() {
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
            {stats.map((stat) => (
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
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-ember-500">Mito destacado</p>
              <Badge className="border-ember-400/30 bg-ember-400/15 text-ember-500">
                Lectura 6 min
              </Badge>
            </div>
            <h2 className="mt-4 font-display text-3xl text-ink-900">
              El Mohan y las voces del rio
            </h2>
            <p className="mt-3 text-sm text-ink-700">
              Un guardian ambivalente del Magdalena que seduce, protege y marca
              los limites del agua.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                Rio Magdalena
              </Badge>
              <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                Guardian
              </Badge>
              <Badge className="border-ember-400/30 bg-ember-400/10 text-ember-500">
                Agua y pacto
              </Badge>
            </div>
            <div
                className="mt-6 h-44 rounded-2xl border border-white/60"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 15% 20%, rgba(30, 120, 94, 0.35), transparent 60%), radial-gradient(circle at 85% 0%, rgba(35, 98, 158, 0.35), transparent 55%), linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(234, 240, 235, 0.4))",
                }}
            />
          </GlassCard>
          <GlassCard className="absolute -bottom-10 left-6 right-6 p-4">
            <p className="eyebrow">Ruta sugerida</p>
            <p className="mt-2 text-sm text-ink-700">
              Explora mitos conectados por rios, ofrendas y guardianes
              invisibles.
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

      <section className="container-shell mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="animate-fade-up-2">
          <SectionHeader
            eyebrow="Guia editorial"
            title="Cada mito se cuenta con capas: origen, simbolos y resonancia."
            description="La lectura incluye contexto, fuentes y visuales que evocan papel
              cortado y texturas artesanales."
          />
          <div className="mt-6 space-y-3">
            <GlassCard className="p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500">
                SEO listo
              </p>
              <p className="mt-2 text-sm text-ink-700">
                Metadata, rutas limpias y jerarquia semantica en cada pagina.
              </p>
            </GlassCard>
            <GlassCard className="p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500">
                Lectura comoda
              </p>
              <p className="mt-2 text-sm text-ink-700">
                Tipografia editorial, contraste suave y ritmo visual.
              </p>
            </GlassCard>
            <GlassCard className="p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500">
                Assets vivos
              </p>
              <p className="mt-2 text-sm text-ink-700">
                Ilustraciones paper cut y recursos de archivo en cada mito.
              </p>
            </GlassCard>
          </div>
        </div>

        <div className="grid gap-4 animate-fade-up-3">
          {featured.map((item) => (
            <GlassCard
              key={item.title}
              className="p-5 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-river-600">
                  {item.region}
                </p>
                <Badge className="border-white/60 bg-white/80 text-ink-700">
                  {item.readTime}
                </Badge>
              </div>
              <h3 className="mt-2 font-display text-2xl text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{item.theme}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24 animate-fade-up-3">
        <SectionHeader
          eyebrow="Atlas de regiones"
          title="La geografia mitica de Colombia en seis territorios."
          description="Cada region tiene sus propios relatos, guardianes y ritmos. Esta
            vista abre la puerta a navegaciones locales."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {atlas.map((item) => (
            <GlassCard
              key={item.title}
              className="p-5 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-display text-xl text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700">{item.detail}</p>
            </GlassCard>
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
          <p className="eyebrow text-ember-500">Proximamente</p>
          <h2 className="mt-3 font-display text-3xl text-ink-900">
            Ilustraciones paper cut y contenido enriquecido con IA.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-700">
            Integraremos OpenAI para expandir los relatos con cuidado editorial y
            generar imagenes con un estilo artesanal.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/manifiesto" variant="subtle">
              Ver manifiesto
            </ButtonLink>
            <ButtonLink href="/contacto" variant="outline">
              Contacto
            </ButtonLink>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
