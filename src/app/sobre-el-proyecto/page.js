import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import { getDiverseMyths, getFeaturedMythsWithImages } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "sobre-el-proyecto");
  return buildSeoMetadata({
    fallback: {
      title: "Sobre el proyecto | Mitos de Colombia",
      description:
        "Conoce la visión editorial detrás de Mitos de Colombia y la curaduría del archivo.",
      keywords: ["proyecto", "mitos colombianos", "archivo", "visión editorial"],
    },
    seo,
    canonicalPath: "/sobre-el-proyecto",
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

const sections = [
  {
    title: "Manifiesto editorial",
    body: (
      <>
        <p>
          Este archivo nace de una intuición simple: Colombia se entiende mejor
          cuando se escucha a sus relatos. Cada mito es una brújula cultural; no
          sólo explica el origen de un río o la memoria de una montaña, también
          revela cómo se ordenan los vínculos entre la comunidad, la naturaleza
          y el tiempo. Nuestro propósito es convertir esa oralidad en una
          experiencia legible, contemporánea y respetuosa. Por eso trabajamos
          con una estructura editorial que no simplifica el relato, sino que lo
          acompaña con contexto, pistas de lectura y rutas que conectan
          historias entre sí.
        </p>
        <p>
          Mitos de Colombia es un archivo abierto. Cada página está pensada para
          una lectura lenta, pero también para la exploración libre: si un
          lector llega por una criatura nocturna, puede saltar a la colección
          completa en <TextLink href="/mitos">Mitos</TextLink>; si prefiere
          navegar por territorio, puede recorrer{" "}
          <TextLink href="/regiones">Regiones</TextLink> o el{" "}
          <TextLink href="/mapa">Mapa</TextLink>. La curaduría editorial utiliza
          etiquetas, comunidades y rutas temáticas para que cada mito dialogue
          con otros, como si el archivo fuera una conversación en la plaza del
          pueblo.
        </p>
        <p>
          Esta conversación también vive en los cruces: un mito puede ser leído
          junto a otro, incluso si provienen de regiones distintas. Por eso nos
          interesan las conexiones internas y los enlaces que multiplican
          lecturas. Cada link es una invitación a seguir caminando, a descubrir
          otra voz, a reconocer un símbolo común y a ampliar la memoria del
          territorio.
        </p>
        <p>
          Cuando hablamos de archivo vivo hablamos de un sistema que se
          actualiza con nuevas voces y nuevos hallazgos. Esta es una invitación
          a recorrer, pero también a aportar. Si deseas sumar una versión de un
          mito, proponer una corrección o compartir una referencia, visita el
          espacio de <TextLink href="/contacto">Contacto</TextLink> y cuéntanos
          el relato desde tu territorio.
        </p>
      </>
    ),
  },
  {
    title: "Arquitectura del archivo",
    body: (
      <>
        <p>
          Cada mito se organiza por región, comunidad y tema. Esto permite
          comparar versiones locales y reconocer patrones narrativos. Explora
          los relatos por{" "}
          <TextLink href="/categorias">categorías</TextLink> o por{" "}
          <TextLink href="/comunidades">comunidades</TextLink> para descubrir
          cómo una misma historia cambia según el territorio.
        </p>
      </>
    ),
  },
  {
    title: "Geografía narrativa",
    body: (
      <>
        <p>
          El mapa no es un adorno: es una forma de leer el país. La
          geolocalización aproxima cada relato a su paisaje y nos recuerda que
          la memoria se ancla en ríos, montañas y caminos. Recorre el{" "}
          <TextLink href="/mapa">mapa</TextLink> para entender cómo las
          historias se distribuyen por el territorio.
        </p>
      </>
    ),
  },
  {
    title: "Rutas temáticas",
    body: (
      <>
        <p>
          Las rutas son curadurías que conectan mitos por afinidad. Desde
          guardianes del agua hasta bestiarios, cada ruta propone una lectura
          continua y editorial. Puedes entrar directo desde{" "}
          <TextLink href="/rutas/guardianes-del-agua">
            Guardianes del agua
          </TextLink>{" "}
          o elegir otras rutas en la sección principal.
        </p>
      </>
    ),
  },
  {
    title: "Una biblioteca para leer en capas",
    body: (
      <>
        <p>
          Cada mito tiene una estructura editorial propia: título, resumen,
          contenido extendido, palabras clave y contexto territorial. Esta
          estructura permite que el lector pueda entrar por distintos niveles de
          profundidad. Algunas personas quieren leer de corrido; otras buscan
          una visión rápida. En ambos casos, el archivo ofrece una lectura
          cómoda y un recorrido intuitivo. En la{" "}
          <TextLink href="/metodologia">Metodología</TextLink> puedes ver cómo
          organizamos cada campo y por qué elegimos esa taxonomía.
        </p>
        <p>
          Además de los textos, la dimensión visual también construye
          significado. Las ilustraciones creadas para el archivo buscan dialogar
          con los mitos sin convertirlos en caricatura. Son una interpretación
          contemporánea, inspirada en técnicas como el paper cut y el paper
          quilling. Esa estética ayuda a que el archivo se sienta actual,
          elegante y respetuoso con la memoria cultural.
        </p>
      </>
    ),
  },
  {
    title: "Cómo leer este archivo sin perderte",
    body: (
      <>
        <p>
          La lectura puede comenzar en cualquier punto. Quienes prefieren una
          entrada directa suelen abrir un mito específico y desde allí seguir
          las conexiones que propone el texto. Esa forma de lectura es ideal si
          te interesa un relato puntual y quieres conocer sus versiones o
          motivos narrativos relacionados. En ese caso, puedes iniciar desde{" "}
          <TextLink href="/mitos">Mitos</TextLink> y usar los filtros por región,
          comunidad o tags para ajustar la búsqueda.
        </p>
        <p>
          Si prefieres una lectura territorial, el archivo ofrece rutas visuales
          en el <TextLink href="/mapa">Mapa</TextLink>. Allí descubrirás cómo los
          relatos se agrupan alrededor de ríos, llanos, costas y selvas. Ese
          recorrido sugiere una lectura geográfica: la historia y el paisaje
          avanzan juntos. También puedes explorar desde{" "}
          <TextLink href="/regiones">Regiones</TextLink> para encontrar relatos
          concentrados por macroterritorios culturales.
        </p>
        <p>
          La lectura temática se apoya en{" "}
          <TextLink href="/categorias">Categorías</TextLink>. Allí verás cómo
          temas como el castigo, la transformación o la relación con el agua se
          repiten y cambian según el lugar. Estas rutas temáticas se
          complementan con las colecciones de{" "}
          <TextLink href="/rutas/cartografia-selva">Rutas</TextLink>, pensadas
          como recorridos editoriales que te permiten leer en secuencia, como si
          cada mito fuera un capítulo de una misma historia mayor.
        </p>
        <p>
          Finalmente, una lectura comunitaria pone el foco en las voces
          específicas. En{" "}
          <TextLink href="/comunidades">Comunidades</TextLink> podrás ver cómo
          los relatos varían entre pueblos y tradiciones. Esta lectura es
          importante porque evita homogenizar la cultura: cada mito aparece con
          su nombre, sus símbolos y sus contextos propios. Elegir una sola ruta
          o combinarlas todas depende de tu forma de leer; el archivo está
          diseñado para acompañarte en cada paso.
        </p>
      </>
    ),
  },
  {
    title: "Señales editoriales y glosario vivo",
    body: (
      <>
        <p>
          En cada mito encontrarás pequeñas señales que te ayudan a orientarte.
          El resumen editorial resume el tono del relato, mientras que las
          palabras clave señalan símbolos recurrentes como agua, montaña o
          transformación. Las etiquetas no son etiquetas vacías: funcionan como
          un mapa conceptual que conecta relatos de regiones distintas. Si notas
          un símbolo que se repite, puedes explorarlo desde{" "}
          <TextLink href="/categorias">Categorías</TextLink> para ver cómo se
          expresa en otras voces del territorio.
        </p>
        <p>
          Otro indicador importante es la ruta temática. Cuando un mito aparece
          en una ruta, significa que comparte un hilo narrativo con otras
          historias. Esto es útil si quieres leer de manera secuencial: por
          ejemplo, en{" "}
          <TextLink href="/rutas/cartografia-selva">
            Cartografía de la selva
          </TextLink>{" "}
          puedes recorrer relatos que hablan de guardianes, límites y señales
          del monte. Las rutas hacen visible una lectura editorial que no
          depende de un solo mito, sino del conjunto.
        </p>
        <p>
          También encontrarás información sobre comunidad y región. Estos dos
          campos son esenciales para entender el origen del relato. Un mito
          puede compartir símbolos con otro, pero su contexto territorial y
          cultural lo transforma. Por eso animamos a leer con cuidado: cada mito
          es una voz específica. Si deseas profundizar en esa relación, visita{" "}
          <TextLink href="/regiones">Regiones</TextLink> y luego contrasta con{" "}
          <TextLink href="/comunidades">Comunidades</TextLink>. La lectura se
          vuelve más rica cuando se consideran ambas capas.
        </p>
      </>
    ),
  },
  {
    title: "Participa en el archivo",
    body: (
      <>
        <p>
          Este proyecto no pretende cerrar una versión definitiva del mito.
          Sabemos que una misma historia puede variar entre familias,
          comunidades o regiones. Por eso invitamos a compartir versiones,
          referencias y contextos. Si tienes un relato de tu territorio, puedes
          escribirnos desde el formulario de{" "}
          <TextLink href="/contacto">contacto</TextLink>. También puedes
          consultar la política de{" "}
          <TextLink href="/privacidad">privacidad</TextLink> o los{" "}
          <TextLink href="/terminos">términos</TextLink> para conocer cómo
          cuidamos la información que recibimos.
        </p>
        <p>
          Al compartir una historia estás aportando al mapa cultural del país.
          Imagina cada mito como una señal en el camino: juntos forman rutas,
          conectan paisajes y recuerdan la memoria de quienes han habitado estas
          tierras. Ese es el corazón de Mitos de Colombia: un archivo que respira
          con cada nuevo relato.
        </p>
        <p>
          Si quieres iniciar un recorrido más profundo antes de escribirnos, te
          sugerimos visitar <TextLink href="/rutas">Rutas</TextLink> y
          seleccionar una colección temática. Ese viaje te permitirá ver cómo se
          combinan región, comunidad y tema en la práctica. Cuando vuelvas a
          este formulario, tendrás un panorama más claro de cómo describir tu
          aporte y en qué lugar del archivo podría resonar.
        </p>
      </>
    ),
  },
];

export default async function SobreElProyectoPage() {
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
      eyebrow="Archivo editorial"
      title="Una cartografía viva de mitos colombianos."
      description="Mitos de Colombia es un proyecto editorial y visual que recoge relatos ancestrales, rutas culturales y memoria territorial en un solo archivo narrativo."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Sobre el proyecto" }]}
      sections={sections}
      related={related}
      accent="jungle"
    />
  );
}
