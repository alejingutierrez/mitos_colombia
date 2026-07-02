import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import { getDiverseMyths, getFeaturedMythsWithImages } from "../../lib/myths";
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
  return Math.floor(diff / oneDay);
}

const sections = [
  {
    title: "Una estructura pensada para la lectura contemporánea",
    body: (
      <>
        <p>
          Cada mito del archivo se compone de varios campos que trabajan en
          conjunto. El título y el slug permiten identificar la historia; el
          resumen editorial ofrece una entrada rápida; el contenido completo
          conserva el cuerpo narrativo; las palabras clave y la ruta temática
          conectan el relato con otros mitos similares. Esta estructura es
          visible en la página de cada mito y también en los filtros de{" "}
          <TextLink href="/mitos">Mitos</TextLink>, donde puedes explorar por
          tema, región o comunidad. El objetivo es que cualquier lector
          encuentre el relato desde distintos caminos.
        </p>
        <p>
          La base de datos incluye campos como región, comunidad, tags,
          palabras foco y contexto SEO. También integra latitud y longitud para
          conectar la narrativa con el territorio. Esto permite que el{" "}
          <TextLink href="/mapa">Mapa</TextLink> sea una herramienta de lectura,
          no sólo de ubicación. Cuando agregamos un mito, evaluamos si su origen
          está en el Amazonas, el Caribe o la región Andina, y lo ubicamos con
          precisión para que el paisaje dialogue con el texto.
        </p>
      </>
    ),
  },
  {
    title: "Cómo se construye la taxonomía",
    body: (
      <>
        <p>
          En el archivo trabajamos con tres capas principales: regiones,
          comunidades y categorías temáticas. Las regiones agrupan grandes
          territorios culturales y se pueden explorar en{" "}
          <TextLink href="/regiones">Regiones</TextLink>. Las comunidades nos
          permiten reconocer narrativas particulares (muiscas, wayuu, sikuani,
          entre otras) y se pueden recorrer en{" "}
          <TextLink href="/comunidades">Comunidades</TextLink>. Las categorías,
          por su parte, organizan motivos narrativos: castigos, criaturas,
          relatos cosmogónicos o avisos nocturnos. Esta capa es visible en{" "}
          <TextLink href="/categorias">Categorías</TextLink>.
        </p>
        <p>
          La taxonomía no busca encerrar la tradición en etiquetas rígidas. Al
          contrario: funciona como un sistema de rutas que ayuda a descubrir
          conexiones. Un mito puede pertenecer a la vez a una región, a una
          comunidad y a varios temas. Esa multiplicidad es la que hace que el
          archivo se sienta vivo. Cuando el lector cruza una etiqueta, puede
          saltar a otra sección y continuar su exploración.
        </p>
      </>
    ),
  },
  {
    title: "Anatomía de un mito en la base de datos",
    body: (
      <>
        <p>
          La estructura técnica del mito refleja la estructura editorial. Cada
          registro contiene campos de identidad (título, slug, región,
          comunidad), campos narrativos (resumen, contenido completo) y campos
          de lectura (tags, palabras clave, ruta temática). Esa combinación
          permite búsquedas precisas y una navegación más rica. En la práctica,
          un mito puede aparecer en la sección principal de{" "}
          <TextLink href="/mitos">Mitos</TextLink>, pero también en una ruta
          temática específica o en el mapa, dependiendo de sus atributos.
        </p>
        <p>
          El campo de resumen es clave: resume el relato en pocas líneas,
          permitiendo que lectores nuevos decidan si quieren profundizar. Las
          palabras clave funcionan como brújulas internas; conectan el mito con
          otros relatos que comparten símbolos similares. El campo de ruta
          temática (category_path) se utiliza para construir colecciones
          editoriales como <TextLink href="/rutas">Rutas</TextLink>, que te
          permiten leer historias en secuencia, como si fueran capítulos de un
          mismo itinerario cultural.
        </p>
        <p>
          Los metadatos SEO no son un adorno; son una forma de traducir la
          tradición oral a los lenguajes de búsqueda contemporáneos. Cada mito
          tiene un título SEO y una descripción optimizada para ayudar a que
          lectores y buscadores entiendan el contexto. Esto también facilita la
          preservación: un relato que aparece en resultados de búsqueda tiene
          más probabilidades de seguir vivo.
        </p>
        <p>
          Finalmente, los campos de geolocalización permiten situar el mito en
          el territorio. La latitud y longitud no buscan precisión cartográfica
          absoluta; buscan ubicar el relato en su paisaje cultural. Esa
          ubicación se refleja en el <TextLink href="/mapa">Mapa</TextLink> y
          sirve para que un lector entienda cómo los mitos habitan el país,
          desde las montañas andinas hasta las orillas del Caribe.
        </p>
      </>
    ),
  },
  {
    title: "Lenguaje, ritmo y cuidado cultural",
    body: (
      <>
        <p>
          El proceso editorial busca claridad sin borrar el origen. Revisamos la
          sintaxis, ordenamos los párrafos y cuidamos los nombres propios de
          lugares y comunidades. Cuando existen versiones distintas de un mismo
          mito, las consideramos como capas de un mismo territorio. En este
          sentido, la edición se basa en la escucha y la revisión cuidadosa,
          siguiendo una ética de respeto cultural. Este enfoque también informa
          nuestras decisiones visuales y el tono editorial.
        </p>
        <p>
          Para mantener consistencia, cada mito cuenta con una descripción SEO,
          palabras foco y un extracto. Estos campos ayudan a que los buscadores
          comprendan el contexto y también permiten que el lector decida si
          quiere leer el texto completo. Es una forma de traducir la tradición
          oral a la experiencia digital sin perder su densidad.
        </p>
      </>
    ),
  },
  {
    title: "Revisión y consistencia editorial",
    body: (
      <>
        <p>
          Cada mito pasa por un proceso de revisión para asegurar que su
          información sea coherente con el resto del archivo. Revisamos nombres
          propios, referencias territoriales y coincidencias con mitos similares.
          Esta revisión no homogeniza las historias; busca que se presenten con
          la claridad suficiente para el lector sin borrar su identidad. Si hay
          dudas sobre un dato, lo registramos como nota editorial y buscamos una
          segunda fuente.
        </p>
        <p>
          También cuidamos la consistencia visual. Si un mito no cuenta con
          imagen, lo marcamos para futuras ilustraciones. Cuando una imagen
          existe, se integra con el resto del sistema visual y se evalúa su
          correspondencia con el relato. Ese cuidado se refleja en las rutas y
          en el mapa, donde la imagen ayuda a fijar una atmósfera narrativa.
        </p>
        <p>
          Esta revisión no ocurre una sola vez: el archivo se actualiza y se
          ajusta cuando aparecen nuevas fuentes o cuando una comunidad aporta una
          versión que amplía el contexto del relato. Siempre con cuidado.
        </p>
      </>
    ),
  },
  {
    title: "Participación y trazabilidad",
    body: (
      <>
        <p>
          Nuestra metodología también incluye una vía abierta para que el
          archivo crezca con el tiempo. Si tienes una referencia o quieres
          aportar una versión local, puedes escribirnos desde{" "}
          <TextLink href="/contacto">Contacto</TextLink>. El equipo revisa cada
          aporte, lo contextualiza y lo integra a la estructura editorial. En
          este proceso priorizamos la trazabilidad y la transparencia: cada nuevo
          mito se integra con su región, comunidad y palabras clave, y se
          actualiza el mapa de acuerdo con la información disponible.
        </p>
        <p>
          Nuestra meta es que el archivo siga creciendo sin perder claridad. Esa
          es la razón por la cual la metodología está documentada y disponible:
          queremos que los lectores comprendan por qué usamos ciertas etiquetas,
          por qué una historia aparece en una ruta y cómo la geografía fortalece
          el relato. La memoria cultural se cuida mejor cuando se comparte con
          contexto.
        </p>
      </>
    ),
  },
];

export default async function MetodologiaPage() {
  const seed = getDailySeed();
  const [featuredMyths, diverseMyths] = await Promise.all([
    getFeaturedMythsWithImages(6, seed),
    getDiverseMyths(6, seed),
  ]);

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
      eyebrow="Metodología editorial"
      title="De la memoria oral a un archivo navegable"
      description="Nuestro método combina investigación territorial, diseño editorial y tecnología para que cada relato conserve su profundidad y sea fácil de explorar."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Metodología" }]}
      sections={sections}
      related={related}
      accent="river"
    />
  );
}
