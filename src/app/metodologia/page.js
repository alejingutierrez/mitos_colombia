import Link from "next/link";
import Header from "../../components/Header";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { MythCard } from "../../components/MythCard";
import { RecommendedMyths } from "../../components/RecommendedMyths";
import { getDiverseMyths, getFeaturedMythsWithImages, getHomeStats } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "metodologia");
  return buildSeoMetadata({
    fallback: {
      title: "Metodología | Mitos de Colombia",
      description:
        "Cómo investigamos, organizamos y presentamos los mitos colombianos.",
      keywords: ["metodología", "curaduría", "mitos colombianos", "archivo"],
    },
    seo,
    canonicalPath: "/metodologia",
  });
}

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

const steps = [
  {
    title: "Investigación territorial",
    detail:
      "Trabajamos con fuentes orales, bibliográficas y registros culturales. El objetivo es reconocer cómo cada comunidad nombra, describe y transmite sus relatos.",
  },
  {
    title: "Estructura editorial",
    detail:
      "Cada mito se ordena por región, comunidad y tema. Además se redactan campos de resumen, palabras clave y contexto para apoyar distintos niveles de lectura.",
  },
  {
    title: "Curaduría y edición",
    detail:
      "Revisamos lenguaje, ritmo y claridad sin modificar el significado original. La edición se enfoca en una lectura fluida y respetuosa.",
  },
  {
    title: "Visualización y SEO",
    detail:
      "Las ilustraciones y metadatos ayudan a que el archivo sea encontrable y atractivo. Cada mito incluye títulos SEO, descripciones y palabras foco.",
  },
];

export default async function MetodologiaPage() {
  const seed = getDailySeed();
  const [featuredMyths, diverseMyths, stats] = await Promise.all([
    getFeaturedMythsWithImages(4, seed),
    getDiverseMyths(6, seed),
    getHomeStats(),
  ]);

  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-16 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-12 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <main className="relative min-h-screen pb-24">
        <section className="container-shell mt-12 space-y-12">
          <SectionHeader
            eyebrow="Metodología editorial"
            title="De la memoria oral a un archivo navegable."
            description="Nuestro método combina investigación territorial, diseño editorial y tecnología para que cada relato conserve su profundidad y sea fácil de explorar."
          />

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Una estructura pensada para la lectura contemporánea
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Cada mito del archivo se compone de varios campos que trabajan en
              conjunto. El título y el slug permiten identificar la historia;
              el resumen editorial ofrece una entrada rápida; el contenido
              completo conserva el cuerpo narrativo; las palabras clave y la
              ruta temática conectan el relato con otros mitos similares. Esta
              estructura es visible en la página de cada mito y también en los
              filtros de <InlineLink href="/mitos">Mitos</InlineLink>, donde
              puedes explorar por tema, región o comunidad. El objetivo es que
              cualquier lector encuentre el relato desde distintos caminos.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              La base de datos incluye campos como región, comunidad, tags,
              palabras foco y contexto SEO. También integra latitud y longitud
              para conectar la narrativa con el territorio. Esto permite que el
              <InlineLink href="/mapa">Mapa</InlineLink> sea una herramienta de
              lectura, no sólo de ubicación. Cuando agregamos un mito, evaluamos
              si su origen está en el Amazonas, el Caribe o la región Andina, y
              lo ubicamos con precisión para que el paisaje dialoge con el texto.
            </p>
          </GlassCard>

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <GlassCard key={step.title} className="p-6 space-y-3">
                <h3 className="font-display text-xl text-ink-900">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {step.detail}
                </p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Cómo se construye la taxonomía
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              En el archivo trabajamos con tres capas principales: regiones,
              comunidades y categorías temáticas. Las regiones agrupan grandes
              territorios culturales y se pueden explorar en
              <InlineLink href="/regiones">Regiones</InlineLink>. Las
              comunidades nos permiten reconocer narrativas particulares
              (muiscas, wayuu, sikuani, entre otras) y se pueden recorrer en
              <InlineLink href="/comunidades">Comunidades</InlineLink>. Las
              categorías, por su parte, organizan motivos narrativos: castigos,
              criaturas, relatos cosmogónicos o avisos nocturnos. Esta capa es
              visible en <InlineLink href="/categorias">Categorías</InlineLink>.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              La taxonomía no busca encerrar la tradición en etiquetas rígidas.
              Al contrario: funciona como un sistema de rutas que ayuda a
              descubrir conexiones. Un mito puede pertenecer a la vez a una
              región, a una comunidad y a varios temas. Esa multiplicidad es la
              que hace que el archivo se sienta vivo. Cuando el lector cruza una
              etiqueta, puede saltar a otra sección y continuar su exploración.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Anatomía de un mito en la base de datos
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              La estructura técnica del mito refleja la estructura editorial.
              Cada registro contiene campos de identidad (título, slug, región,
              comunidad), campos narrativos (resumen, contenido completo) y
              campos de lectura (tags, palabras clave, ruta temática). Esa
              combinación permite búsquedas precisas y una navegación más rica.
              En la práctica, un mito puede aparecer en la sección principal de
              <InlineLink href="/mitos">Mitos</InlineLink>, pero también en una
              ruta temática específica o en el mapa, dependiendo de sus
              atributos.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              El campo de resumen es clave: resume el relato en pocas líneas,
              permitiendo que lectores nuevos decidan si quieren profundizar.
              Las palabras clave funcionan como brújulas internas; conectan el
              mito con otros relatos que comparten símbolos similares. El campo
              de ruta temática (category_path) se utiliza para construir
              colecciones editoriales como <InlineLink href="/rutas">Rutas</InlineLink>,
              que te permiten leer historias en secuencia, como si fueran
              capítulos de un mismo itinerario cultural.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Los metadatos SEO no son un adorno; son una forma de traducir la
              tradición oral a los lenguajes de búsqueda contemporáneos. Cada
              mito tiene un título SEO y una descripción optimizada para ayudar
              a que lectores y buscadores entiendan el contexto. Esto también
              facilita la preservación: un relato que aparece en resultados de
              búsqueda tiene más probabilidades de seguir vivo.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Finalmente, los campos de geolocalización permiten situar el mito
              en el territorio. La latitud y longitud no buscan precisión
              cartográfica absoluta; buscan ubicar el relato en su paisaje
              cultural. Esa ubicación se refleja en el <InlineLink href="/mapa">Mapa</InlineLink>
              y sirve para que un lector entienda cómo los mitos habitan el
              país, desde las montañas andinas hasta las orillas del Caribe.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Lenguaje, ritmo y cuidado cultural
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              El proceso editorial busca claridad sin borrar el origen. Revisamos
              la sintaxis, ordenamos los párrafos y cuidamos los nombres propios
              de lugares y comunidades. Cuando existen versiones distintas de un
              mismo mito, las consideramos como capas de un mismo territorio. En
              este sentido, la edición se basa en la escucha y la revisión
              cuidadosa, siguiendo una ética de respeto cultural. Este enfoque
              también informa nuestras decisiones visuales y el tono editorial.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Para mantener consistencia, cada mito cuenta con una descripción
              SEO, palabras foco y un extracto. Estos campos ayudan a que los
              buscadores comprendan el contexto y también permiten que el lector
              decida si quiere leer el texto completo. Es una forma de traducir
              la tradición oral a la experiencia digital sin perder su densidad.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Revisión y consistencia editorial
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Cada mito pasa por un proceso de revisión para asegurar que su
              información sea coherente con el resto del archivo. Revisamos
              nombres propios, referencias territoriales y coincidencias con
              mitos similares. Esta revisión no homogeniza las historias; busca
              que se presenten con la claridad suficiente para el lector sin
              borrar su identidad. Si hay dudas sobre un dato, lo registramos
              como nota editorial y buscamos una segunda fuente.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              También cuidamos la consistencia visual. Si un mito no cuenta con
              imagen, lo marcamos para futuras ilustraciones. Cuando una imagen
              existe, se integra con el resto del sistema visual y se evalúa su
              correspondencia con el relato. Ese cuidado se refleja en las rutas
              y en el mapa, donde la imagen ayuda a fijar una atmósfera narrativa.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Esta revisión no ocurre una sola vez: el archivo se actualiza y se
              ajusta cuando aparecen nuevas fuentes o cuando una comunidad aporta
              una versión que amplía el contexto del relato. Siempre con cuidado.
            </p>
          </GlassCard>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-ink-900">
                Relatos para entender la metodología
              </h2>
              <Link
                href="/mitos"
                className="text-xs uppercase tracking-[0.3em] text-ink-500 hover:text-ink-700"
              >
                Ver todo
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredMyths.map((myth) => (
                <MythCard key={myth.slug} myth={myth} featured />
              ))}
            </div>
          </section>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              La lectura recomendada
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Cada mito sugiere otros relatos cercanos. Esa relación puede ser
              territorial, simbólica o temática. El componente de mitos
              sugeridos te permite leer una historia dentro de un tejido más
              amplio. Es una lectura en red que conecta ríos, montañas y rutas
              invisibles. Si quieres experimentar esa lectura conectada, visita
              cualquier mito en detalle y explora su sección de relacionados.
            </p>
            <RecommendedMyths myths={diverseMyths} />
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Participación y trazabilidad
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Nuestra metodología también incluye una vía abierta para que el
              archivo crezca con el tiempo. Si tienes una referencia o quieres
              aportar una versión local, puedes escribirnos desde
              <InlineLink href="/contacto"> Contacto</InlineLink>. El equipo
              revisa cada aporte, lo contextualiza y lo integra a la estructura
              editorial. En este proceso priorizamos la trazabilidad y la
              transparencia: cada nuevo mito se integra con su región, comunidad
              y palabras clave, y se actualiza el mapa de acuerdo con la
              información disponible.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Nuestra meta es que el archivo siga creciendo sin perder claridad.
              Esa es la razón por la cual la metodología está documentada y
              disponible: queremos que los lectores comprendan por qué usamos
              ciertas etiquetas, por qué una historia aparece en una ruta y cómo
              la geografía fortalece el relato. La memoria cultural se cuida
              mejor cuando se comparte con contexto.
            </p>
          </GlassCard>
        </section>
      </main>
    </>
  );
}
