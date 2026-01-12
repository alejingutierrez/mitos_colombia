import Header from "../../components/Header";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { GlassCard } from "../../components/ui/GlassCard";
import { Badge } from "../../components/ui/Badge";
import { ButtonLink } from "../../components/ui/Button";
import { TarotCard } from "../../components/TarotCard";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";
import { getTarotCards } from "../../lib/tarot";
import Link from "next/link";

export const revalidate = 86400;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "tarot");
  return buildSeoMetadata({
    fallback: {
      title: "Tarot de la mitología colombiana | Mitos de Colombia",
      description:
        "Una baraja editorial que vincula arcanos del tarot con mitos colombianos para explorar símbolos, territorios y relatos ancestrales.",
      keywords: [
        "tarot",
        "mitología colombiana",
        "arcanos",
        "mitos",
        "paper quilling",
      ],
    },
    seo,
    canonicalPath: "/tarot",
  });
}

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-river-600 underline decoration-river-200 decoration-2 underline-offset-4 transition hover:text-river-700"
  >
    {children}
  </Link>
);

const sections = [
  {
    id: "arcanos-mayores",
    label: "Arcanos mayores",
    description: "Ejes narrativos y arquetipos que atraviesan el archivo mitológico.",
  },
  {
    id: "bastos",
    label: "Bastos",
    description: "Fuego creativo, deseo de avance y territorios en movimiento.",
  },
  {
    id: "copas",
    label: "Copas",
    description: "Mares emocionales, pactos de agua y memorias afectivas.",
  },
  {
    id: "espadas",
    label: "Espadas",
    description: "Decisiones, tensiones y claridad mental en relatos de conflicto.",
  },
  {
    id: "oros",
    label: "Oros",
    description: "Materia, cultivo y prosperidad en relatos de origen y legado.",
  },
];

export default async function TarotPage() {
  const tarotCards = await getTarotCards();
  const majorCards = tarotCards.filter((card) => card.arcana === "major");
  const bastosCards = tarotCards.filter((card) => card.suit === "Bastos");
  const copasCards = tarotCards.filter((card) => card.suit === "Copas");
  const espadasCards = tarotCards.filter((card) => card.suit === "Espadas");
  const orosCards = tarotCards.filter((card) => card.suit === "Oros");

  return (
    <main className="relative min-h-screen pb-24">
      <Header />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-16 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-12 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <section className="container-shell mt-12 space-y-8">
        <SectionHeader
          eyebrow="Tarot mitológico"
          title="Tarot de la mitología colombiana"
          description="Una baraja editorial que traduce relatos ancestrales en arcanos visuales. Cada carta es una puerta para entrar en un mito específico y leerlo desde su símbolo central."
        />

        <GlassCard className="p-8 space-y-6">
          <h2 className="font-display text-2xl text-ink-900">
            Una baraja para leer el territorio
          </h2>
          <p className="text-sm text-ink-600 leading-relaxed">
            El tarot mitológico conecta el lenguaje simbólico del tarot clásico
            con las voces de Colombia. Cada carta se construye con estética paper
            quilling y paper cut, siguiendo la estructura de las cartas Rider-Waite,
            pero alimentándose de mitos que hablan de selvas, montañas, aguas
            sagradas y pactos comunitarios. Al hacer clic sobre una carta,
            llegas directamente al mito que la inspira.
          </p>
          <p className="text-sm text-ink-600 leading-relaxed">
            Este ejercicio editorial no pretende reemplazar las lecturas
            tradicionales, sino proponer otro mapa de entrada. Las cartas son
            puentes: arquetipos universales que se reinterpretan desde nuestras
            geografías. Es una forma de leer el archivo desde la intuición, la
            imagen y la memoria oral.
          </p>
        </GlassCard>

        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard className="p-6 space-y-4">
            <h3 className="font-display text-xl text-ink-900">
              Cómo leer estas cartas
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed">
              Empieza por el arquetipo: la breve explicación bajo cada carta
              resume su energía. Luego abre el mito y compara símbolos, personajes
              y acciones. Verás cómo las historias del archivo dialogan con temas
              como el destino, la justicia o la abundancia. Puedes combinar esta
              lectura con el <InlineLink href="/mapa">Mapa</InlineLink> para ubicar
              el territorio, o recorrer rutas temáticas en <InlineLink href="/rutas">Rutas</InlineLink>.
            </p>
          </GlassCard>
          <GlassCard className="p-6 space-y-4">
            <h3 className="font-display text-xl text-ink-900">
              Criterio de selección
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed">
              Cada arcano fue elegido por su afinidad simbólica con un mito.
              Las notas que acompañan las cartas explican por qué se tomó esa
              decisión. La intención es transparente: mostrar el vínculo entre
              el relato y el arquetipo, para que puedas seguir explorando más
              mitos dentro del <InlineLink href="/mitos">Archivo</InlineLink>.
            </p>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Índice rápido</p>
              <h3 className="font-display text-2xl text-ink-900">
                Explora la baraja completa
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {sections.map((section) => (
                <ButtonLink key={section.id} href={`#${section.id}`} variant="subtle">
                  {section.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      <section id="arcanos-mayores" className="container-shell mt-16 space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <Badge className="border-ink-500/20 bg-ink-50/70 text-ink-700">
              Arcanos mayores
            </Badge>
            <h2 className="mt-4 font-display text-3xl text-ink-900">
              Los grandes arquetipos del archivo
            </h2>
            <p className="mt-3 text-sm text-ink-600 max-w-2xl">
              Veintidós cartas que hablan de origen, destino, muerte y renacimiento.
              Cada una está conectada a un mito que resume su energía principal.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {majorCards.map((card) => (
            <TarotCard key={card.slug} card={card} />
          ))}
        </div>
      </section>

      <section id="bastos" className="container-shell mt-16 space-y-6">
        <div>
          <Badge className="border-ember-400/30 bg-ember-400/10 text-ember-600">
            Bastos
          </Badge>
          <h2 className="mt-4 font-display text-3xl text-ink-900">
            Bastos: fuego, impulso y territorio
          </h2>
          <p className="mt-3 text-sm text-ink-600 max-w-2xl">
            Cartas asociadas al fuego y la voluntad. Aquí viven los mitos de
            conquista, viaje, competencia y creación que atraviesan el archivo.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {bastosCards.map((card) => (
            <TarotCard key={card.slug} card={card} />
          ))}
        </div>
      </section>

      <section id="copas" className="container-shell mt-16 space-y-6">
        <div>
          <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
            Copas
          </Badge>
          <h2 className="mt-4 font-display text-3xl text-ink-900">
            Copas: agua, afecto y memoria
          </h2>
          <p className="mt-3 text-sm text-ink-600 max-w-2xl">
            Las copas hablan de vínculos, pérdidas y reconciliaciones. Son mitos
            donde el agua es símbolo de emoción, transformación y cuidado.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {copasCards.map((card) => (
            <TarotCard key={card.slug} card={card} />
          ))}
        </div>
      </section>

      <section id="espadas" className="container-shell mt-16 space-y-6">
        <div>
          <Badge className="border-ink-500/30 bg-ink-500/10 text-ink-700">
            Espadas
          </Badge>
          <h2 className="mt-4 font-display text-3xl text-ink-900">
            Espadas: mente, conflicto y claridad
          </h2>
          <p className="mt-3 text-sm text-ink-600 max-w-2xl">
            Estas cartas reúnen relatos de tensión, justicia y decisión. Mitos
            donde la palabra, el ingenio y el juicio cambian el rumbo.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {espadasCards.map((card) => (
            <TarotCard key={card.slug} card={card} />
          ))}
        </div>
      </section>

      <section id="oros" className="container-shell mt-16 space-y-6">
        <div>
          <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-700">
            Oros
          </Badge>
          <h2 className="mt-4 font-display text-3xl text-ink-900">
            Oros: materia, cosecha y legado
          </h2>
          <p className="mt-3 text-sm text-ink-600 max-w-2xl">
            El palo de oros conecta mitos de origen, riqueza compartida y memoria
            material. Son relatos que hablan de semillas, oficios y herencias.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {orosCards.map((card) => (
            <TarotCard key={card.slug} card={card} />
          ))}
        </div>
      </section>

      <section className="container-shell mt-20">
        <GlassCard className="p-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Explorar el archivo</p>
            <h3 className="mt-3 font-display text-2xl text-ink-900">
              Sigue la lectura hacia los mitos
            </h3>
            <p className="mt-3 text-sm text-ink-600 max-w-2xl">
              Las cartas son un inicio: el archivo completo vive en cientos de
              relatos conectados por regiones, comunidades y símbolos. Explora
              las rutas temáticas, el mapa o el archivo completo para seguir la
              lectura.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/mitos" variant="subtle">
              Ver mitos
            </ButtonLink>
            <ButtonLink href="/mapa" variant="subtle">
              Explorar mapa
            </ButtonLink>
            <ButtonLink href="/rutas" variant="subtle">
              Ir a rutas
            </ButtonLink>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
