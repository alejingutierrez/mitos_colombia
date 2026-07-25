import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import {
  getDiverseMyths,
  getFeaturedMythsWithImages,
  getSourceCoverageStats,
} from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "metodologia");
  return buildSeoMetadata({
    fallback: {
      title: "Metodología editorial en prueba",
      description:
        "Conoce el método piloto para investigar, contrastar y reescribir mitos colombianos con fuentes visibles, contexto cultural y una prosa más clara.",
      keywords: [
        "metodología editorial",
        "investigación de mitos",
        "fuentes",
        "antropología",
        "reescritura",
        "Bachué",
      ],
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
  return Math.floor(diff / oneDay);
}

const sections = [
  {
    title: "Una metodología en prueba, no una fórmula cerrada",
    body: (
      <>
        <p>
          Estamos validando este método con un solo caso:{" "}
          <TextLink href="/mitos/bachue">Bachué</TextLink>. No lo aplicaremos
          en serie hasta comprobar que la investigación, la voz y la extensión
          funcionan juntas. El objetivo es sencillo de decir y difícil de
          cumplir: narrar con claridad y emoción sin inventar certezas ni
          convertir una comunidad en una etiqueta.
        </p>
        <p>
          La prueba también es pública: la ficha muestra sus fuentes, fecha de
          revisión, versiones y dudas. Si el resultado no convence, se corrige
          el método antes de ampliar el archivo.
        </p>
      </>
    ),
  },
  {
    title: "1. Al menos cinco fuentes con funciones distintas",
    body: (
      <>
        <p>
          Cinco enlaces que repiten la misma crónica no son cinco fuentes
          suficientes. Cada investigación busca cubrir cinco funciones: una voz
          comunitaria o memoria viva; una fuente primaria histórica; estudios
          académicos recientes; una fuente territorial o institucional; y
          referencias directas para la comparación con otras mitologías.
        </p>
        <p>
          Las fuentes coloniales se leen con especial cautela: pueden conservar
          un relato y deformarlo al mismo tiempo. Las voces comunitarias
          contemporáneas explican continuidad y sentido actual, pero no se
          proyectan automáticamente al pasado. Cada una responde una pregunta
          diferente.
        </p>
      </>
    ),
  },
  {
    title: "2. Separar hecho, variante, memoria e interpretación",
    body: (
      <>
        <p>
          Antes de escribir construimos una matriz. Un dato puede ser núcleo
          documentado, variante atribuida, memoria contemporánea, interpretación
          académica, lectura editorial o duda. Estas categorías no se mezclan.
          Si un nombre aparece en una versión tardía, se presenta allí; no se
          introduce en el relato principal como si siempre hubiera estado.
        </p>
        <p>
          La duda no es un defecto que deba ocultarse. Es una señal editorial.
          Preferimos decir que una fuente no permite decidir antes que completar
          el vacío con una explicación atractiva.
        </p>
      </>
    ),
  },
  {
    title: "3. Preguntas antropológicas, no diagnósticos sobre una gente",
    body: (
      <>
        <p>
          Buscamos qué necesidad humana organiza el relato: origen, cuidado,
          duelo, justicia, alimento, territorio, peligro o continuidad. También
          observamos cómo relaciona personas, antepasados, animales, paisaje y
          fuerzas no humanas; y qué permite pensar sobre parentesco, autoridad,
          trabajo o convivencia.
        </p>
        <p>
          Esa lectura no autoriza frases totales como “los muiscas pensaban”.
          Distinguimos periodos, comunidades y tipos de evidencia. También
          usamos con precisión conceptos como matrilinealidad, que no equivale
          por sí sola a matriarcado.
        </p>
      </>
    ),
  },
  {
    title: "4. El relato es literatura; la investigación lo sostiene",
    body: (
      <>
        <p>
          En la sección Relato solo ocurre la historia. No aparecen cronistas,
          fuentes, diferencias entre versiones ni explicaciones sobre cómo debe
          interpretarse. Todo ese trabajo sostiene la narración desde fuera y
          queda disponible en Contexto, Versiones y Fuentes.
        </p>
        <p>
          La prosa usa escenas concretas, ritmo y detalles sensoriales capaces de
          convocar la imaginación de un niño y de un adulto. La fantasía procede
          de las acciones extraordinarias del mito; el territorio, el clima, los
          materiales y los gestos cotidianos la anclan en la realidad. La emoción
          nace de lo que sucede, no de fórmulas solemnes ni de acumular adjetivos.
        </p>
      </>
    ),
  },
  {
    title: "5. Publicar significa dejar evidencia y posibilidad de corrección",
    body: (
      <>
        <p>
          Antes de publicar verificamos que los cinco campos coincidan con el
          contenido completo, que haya al menos cinco fuentes únicas, que los
          nombres tengan respaldo, que el texto reduzca redundancias y que exista
          una copia recuperable del registro anterior. La ficha pública debe
          mostrar fuentes, fecha de revisión y citas en sus datos estructurados.
        </p>
        <p>
          Clasificación, etiquetas, coordenadas, imagen y SEO también se revisan.
          Solo se reutilizan taxonomías que ya existen en el archivo; una revisión
          editorial no puede crear categorías improvisadas para un solo caso.
        </p>
        <p>
          Ninguna revisión es definitiva. Si tienes una fuente, perteneces a la
          comunidad vinculada o identificas un error, puedes escribir desde{" "}
          <TextLink href="/contacto">Contacto</TextLink>. La corrección
          documentada tiene prioridad sobre la consistencia aparente del archivo.
        </p>
      </>
    ),
  },
];

export default async function MetodologiaPage() {
  const seed = getDailySeed();
  const [featuredMyths, diverseMyths, sourceCoverage] = await Promise.all([
    getFeaturedMythsWithImages(6, seed),
    getDiverseMyths(6, seed),
    getSourceCoverageStats(),
  ]);

  const sourceCoverageSection = {
    title: "Fuentes, adaptación y estado de verificación",
    body: (
      <>
        <p>
          El archivo distingue la procedencia cultural de una referencia
          bibliográfica. Región y comunidad ayudan a situar el relato, pero no
          reemplazan una fuente documental. En este momento, {sourceCoverage.mythsWithSources}{" "}
          de {sourceCoverage.totalMyths} fichas públicas cuentan con referencias
          editoriales enlazadas; las demás muestran de forma visible que su
          bibliografía está pendiente de publicación.
        </p>
        <p>
          Los textos del sitio son adaptaciones editoriales para lectura digital.
          Algunas etapas de organización, resumen e ilustración utilizan
          herramientas de asistencia digital, siempre sujetas a revisión humana.
          Las fuentes enlazadas permiten volver al documento de origen y no deben
          confundirse con la adaptación narrativa que presenta el archivo.
        </p>
        <p>
          Si una ficha contiene una atribución incompleta o una versión local que
          necesita contexto, puedes enviar la referencia desde{" "}
          <TextLink href="/contacto">Contacto</TextLink>. Priorizamos correcciones
          provenientes de comunidades, bibliotecas, archivos y publicaciones
          académicas identificables.
        </p>
      </>
    ),
  };

  // En producción prioriza mitos con imagen; si no hay, cae a una muestra diversa.
  const relatedPool =
    (featuredMyths || []).length >= 6 ? featuredMyths : diverseMyths;
  const related = (relatedPool || []).slice(0, 6).map((m) => ({
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  }));

  return (
    <DocumentTemplate
      eyebrow="Metodología editorial · piloto"
      title="Investigar antes de volver a contar"
      description="Un método en prueba para distinguir fuentes, versiones y lecturas; escribir con claridad; y publicar cada mito con evidencia visible."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Metodología" }]}
      sections={[sourceCoverageSection, ...sections]}
      related={related}
      accent="river"
    />
  );
}
