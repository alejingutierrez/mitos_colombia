import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import ContactForm from "./ContactForm";
import { getFeaturedMythsWithImages, getDiverseMyths } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "contacto");
  return buildSeoMetadata({
    fallback: {
      title: "Contacto | Mitos de Colombia",
      description:
        "Escríbenos para compartir mitos, correcciones o colaboraciones editoriales.",
      keywords: ["contacto", "mitos colombianos", "colaboraciones", "archivo"],
    },
    seo,
    canonicalPath: "/contacto",
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
    title: "Por qué escribirnos",
    body: (
      <>
        <p>
          Mitos de Colombia es un archivo vivo. Cada relato existe porque alguien
          lo escuchó, lo contó y lo sostuvo en el tiempo. Si tienes una versión
          local, una variante familiar o una historia que aún no aparece en el
          archivo, este es el lugar para compartirla. Nos interesa conocer la
          geografía del relato, la comunidad que lo guarda y el contexto que lo
          acompaña. La conversación es tan valiosa como el relato mismo.
        </p>
        <p>
          También recibimos correcciones editoriales, referencias bibliográficas,
          documentos orales y sugerencias sobre cómo mejorar la navegación. Cuando
          nos escribes, nos ayudas a ampliar el mapa y a fortalecer la relación
          entre las historias y el territorio. Puedes explorar primero el archivo
          en <TextLink href="/mitos">Mitos</TextLink> o recorrer el{" "}
          <TextLink href="/mapa">Mapa</TextLink> para encontrar relatos cercanos.
        </p>
      </>
    ),
  },
  {
    title: "Qué información nos ayuda",
    body: (
      <>
        <p>
          Cuando compartes un mito, es útil mencionar la región, la comunidad y
          cualquier referencia sobre el origen del relato. Si conoces palabras en
          lengua originaria, nombres de lugares o personas que custodian la
          tradición, inclúyelos en tu mensaje. Todo esto enriquece la curaduría y
          nos permite ubicar el mito con mayor precisión en las secciones de{" "}
          <TextLink href="/regiones">Regiones</TextLink> y{" "}
          <TextLink href="/comunidades">Comunidades</TextLink>.
        </p>
        <p>
          Si tu aporte es una corrección, cuéntanos qué parte del texto debe
          ajustarse y por qué. Si tienes una fuente escrita, agrega el nombre del
          autor o el documento. Si tu aporte es oral, menciona quién transmitió la
          historia y en qué contexto la escuchaste. La transparencia ayuda a
          cuidar la memoria.
        </p>
      </>
    ),
  },
  {
    title: "Tiempo de respuesta y cuidado",
    body: (
      <>
        <p>
          Nuestro equipo revisa cada mensaje con atención. Respondemos en un plazo
          estimado de 3 a 5 días hábiles. Cuando un aporte se integra al archivo,
          lo revisamos con el mismo cuidado editorial que aplicamos al resto del
          contenido. Puedes revisar nuestra{" "}
          <TextLink href="/metodologia">Metodología</TextLink> para conocer el
          proceso completo.
        </p>
        <p>
          Los datos personales se usan únicamente para responder tu mensaje. Para
          más detalles, consulta la política de{" "}
          <TextLink href="/privacidad">Privacidad</TextLink> y los{" "}
          <TextLink href="/terminos">Términos</TextLink> de uso.
        </p>
      </>
    ),
  },
  {
    title: "Antes de escribir",
    body: (
      <>
        <p>
          Te invitamos a recorrer algunas rutas temáticas para encontrar
          inspiración y evitar duplicados. Las rutas editoriales como{" "}
          <TextLink href="/rutas/guardianes-del-agua">
            Guardianes del agua
          </TextLink>{" "}
          o{" "}
          <TextLink href="/rutas/bestiario-colombiano">
            Bestiario colombiano
          </TextLink>{" "}
          muestran cómo las historias dialogan entre sí. También puedes visitar{" "}
          <TextLink href="/categorias">Categorías</TextLink> si deseas ver los
          motivos narrativos más frecuentes.
        </p>
        <p>
          Recuerda que cada mito es una memoria colectiva. Si compartes un relato
          que pertenece a una comunidad específica, intenta incluir el nombre con
          respeto y precisión. Nuestra prioridad es proteger la identidad cultural
          de quienes han sostenido estas historias.
        </p>
      </>
    ),
  },
  {
    title: "Guía para compartir un mito",
    body: (
      <>
        <p>
          Si tienes un relato completo, puedes contar la historia tal como la
          recuerdas. No necesitas pulir la redacción: nuestro equipo se encarga de
          la edición respetuosa. Lo más importante es la estructura básica:
          ¿dónde ocurre?, ¿quiénes son los personajes?, ¿qué hechos marcan la
          historia? Cuando estos elementos están claros, podemos ubicar el mito en
          el territorio y relacionarlo con otros relatos del archivo. Esa lectura
          contextual se refleja en el <TextLink href="/mapa">Mapa</TextLink> y en
          las rutas editoriales.
        </p>
        <p>
          También puedes enviar fragmentos, versiones incompletas o apenas una
          referencia. En ese caso, indica qué falta, de dónde proviene la historia
          y qué dudas tienes. Nos interesa especialmente el contexto: la
          comunidad, el paisaje, las prácticas culturales que acompañan el relato.
          Esa información es clave para organizar el mito en las secciones de{" "}
          <TextLink href="/categorias">Categorías</TextLink> y{" "}
          <TextLink href="/comunidades">Comunidades</TextLink>.
        </p>
        <p>
          Si el mito está asociado a un lugar específico, describe el sitio con
          detalle. Puede ser un río, una laguna, un bosque o una montaña. Incluso
          si la ubicación es aproximada, nos ayuda a ubicar la historia en la
          geografía del país. Esta información enriquece la experiencia de quienes
          exploran el territorio desde el mapa y refuerza la conexión entre el
          relato y el paisaje.
        </p>
        <p>
          Otra información útil es la ocasión en la que se cuenta el mito: ¿se
          narra durante una celebración?, ¿aparece en contextos de aprendizaje o
          advertencia?, ¿está asociado a un oficio o a un ritual? Estos detalles
          ayudan a comprender el rol social del relato y a ubicarlo en una ruta
          temática. Si deseas, puedes indicar si el mito está relacionado con el
          agua, la noche, el bosque o la transformación, lo cual nos permite
          conectarlo con rutas como{" "}
          <TextLink href="/rutas/guardianes-del-agua">
            Guardianes del agua
          </TextLink>
          .
        </p>
      </>
    ),
  },
  {
    title: "Colaboraciones y alianzas",
    body: (
      <>
        <p>
          Mitos de Colombia está abierto a alianzas con bibliotecas,
          universidades, centros culturales y colectivos comunitarios. Si deseas
          integrar una colección, proponer una investigación o desarrollar un
          proyecto conjunto, escríbenos con detalles claros sobre el objetivo y el
          alcance. Respondemos con una propuesta editorial y con los pasos
          necesarios para asegurar un trabajo cuidadoso y respetuoso.
        </p>
        <p>
          También recibimos propuestas de visualización, diseño y producción
          audiovisual. Las ilustraciones del archivo buscan interpretar los
          relatos con sensibilidad contemporánea. Si deseas colaborar en esa
          dimensión, comparte tu portafolio y un resumen de cómo entiendes la
          estética del archivo. Puedes conocer el enfoque editorial en{" "}
          <TextLink href="/sobre-el-proyecto">Sobre el proyecto</TextLink>.
        </p>
        <p>
          Finalmente, si representas una comunidad y deseas revisar cómo aparecen
          sus relatos en el archivo, estamos abiertos a dialogar. Nuestro
          compromiso es construir una memoria compartida y transparente. Esa
          conversación nos ayuda a mejorar la precisión y la sensibilidad cultural
          del archivo.
        </p>
      </>
    ),
  },
  {
    title: "Preguntas frecuentes",
    body: (
      <>
        <p>
          ¿Puedo enviar varios mitos en un solo mensaje? Sí, pero te recomendamos
          incluirlos separados por secciones claras para que podamos identificar
          el contexto de cada uno. Si los relatos son de regiones distintas,
          indícalo en cada bloque. Esto nos ayuda a ubicar correctamente cada
          historia y a relacionarla con rutas temáticas o categorías específicas.
        </p>
        <p>
          ¿Qué pasa con los relatos incompletos? También son valiosos. Si sólo
          recuerdas una escena, un personaje o un fragmento, envíalo y cuéntanos
          todo lo que puedas sobre el contexto. Muchas veces esos fragmentos
          funcionan como pistas para reconectar un mito con su versión completa o
          con relatos similares que ya están en el archivo. En ese caso, nuestro
          equipo comparará tu aporte con los mitos existentes en{" "}
          <TextLink href="/mitos">Mitos</TextLink>.
        </p>
        <p>
          ¿Recibiré una respuesta? Sí. Siempre confirmamos la recepción y te
          contamos el estado de revisión. Si el relato requiere más información, te
          escribiremos con preguntas específicas. Nuestro objetivo es mantener una
          conversación abierta y respetuosa con quienes sostienen la memoria oral
          del país.
        </p>
        <p>
          ¿Puedo corregir un mito que ya está publicado? Claro. En ese caso
          describe el mito con precisión, indica el fragmento que debería ajustarse
          y comparte la fuente o el contexto. Nuestra prioridad es conservar la
          verdad cultural del relato, por lo que toda corrección es bienvenida y
          revisada con cuidado.
        </p>
        <p>
          ¿Puedo enviar fotografías o documentos? Sí, pero indícalo claramente en
          tu mensaje. Si los archivos requieren un enlace externo, compártenos la
          URL y una breve descripción. Evaluamos cada material para verificar su
          pertinencia y su relación con la historia antes de integrarlo al archivo.
        </p>
      </>
    ),
  },
  {
    title: "Una red de voces",
    body: (
      <>
        <p>
          Este proyecto se fortalece con cada aporte. Al escribirnos, no sólo sumas
          un relato; también trazas puentes entre regiones, comunidades y tiempos.
          La memoria oral se mantiene viva cuando se comparte con cuidado. Si
          quieres conocer más sobre la visión del proyecto, visita{" "}
          <TextLink href="/sobre-el-proyecto">Sobre el proyecto</TextLink>.
        </p>
        <p>
          Gracias por confiar en este archivo. Estamos construyendo una cartografía
          colectiva de mitos, y cada mensaje es una señal que ilumina el camino. Tu
          aporte sostiene la memoria y abre nuevas rutas. Gracias por cuidar la
          memoria.
        </p>
      </>
    ),
  },
];

export default async function ContactoPage() {
  const seed = getDailySeed();
  const [featuredMyths, diverseMyths] = await Promise.all([
    getFeaturedMythsWithImages(6, seed),
    getDiverseMyths(6, seed),
  ]);

  const relatedPool =
    (featuredMyths || []).length >= 6 ? featuredMyths : diverseMyths;
  const related = (relatedPool || []).slice(0, 3).map((m) => ({
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  }));

  return (
    <DocumentTemplate
      eyebrow="Contacto editorial"
      title="Hablemos del territorio, los relatos y la memoria"
      description="Este espacio es para quienes desean compartir un mito, corregir un dato o sumarse a la conversación cultural."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
      sections={sections}
      aside={<ContactForm />}
      related={related}
      accent="jungle"
    />
  );
}
