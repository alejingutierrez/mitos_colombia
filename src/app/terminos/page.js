import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import { getFeaturedMythsWithImages } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "terminos");
  return buildSeoMetadata({
    fallback: {
      title: "Términos | Mitos de Colombia",
      description: "Términos de uso del archivo editorial Mitos de Colombia.",
      keywords: ["términos", "condiciones", "mitos colombianos", "uso"],
    },
    seo,
    canonicalPath: "/terminos",
  });
}

export const revalidate = 86400;

const sections = [
  {
    title: "Propósito del sitio",
    body: (
      <>
        <p>
          Mitos de Colombia es un archivo editorial con fines culturales,
          educativos y de divulgación. El contenido busca preservar y
          visibilizar relatos ancestrales. Invitamos a recorrer el archivo
          con respeto, reconociendo que estas historias pertenecen a
          comunidades que las han transmitido durante generaciones. Si
          deseas conocer el enfoque editorial, visita{" "}
          <TextLink href="/sobre-el-proyecto">Sobre el proyecto</TextLink>.
        </p>
        <p>
          El sitio está organizado para facilitar la exploración: puedes
          navegar por <TextLink href="/regiones">Regiones</TextLink>,{" "}
          <TextLink href="/comunidades">Comunidades</TextLink>,{" "}
          <TextLink href="/categorias">Categorías</TextLink> y el{" "}
          <TextLink href="/mapa">Mapa</TextLink>. Cada sección ofrece
          rutas de lectura y contexto territorial.
        </p>
      </>
    ),
  },
  {
    title: "Uso del contenido",
    body: (
      <>
        <p>
          Los textos e imágenes pueden ser citados con fines educativos o
          culturales, siempre mencionando la fuente. Si deseas reutilizar
          contenidos en publicaciones, proyectos editoriales o productos
          comerciales, escríbenos mediante el formulario de{" "}
          <TextLink href="/contacto">Contacto</TextLink>. Evaluaremos
          cada solicitud para proteger la integridad del archivo y el
          contexto cultural.
        </p>
        <p>
          La reproducción masiva sin autorización no está permitida. Tampoco
          está permitido alterar el sentido de los relatos o usarlos para
          desinformar. El archivo existe para preservar, no para distorsionar.
        </p>
      </>
    ),
  },
  {
    title: "Atribución y licencias culturales",
    body: (
      <>
        <p>
          Cuando compartes un relato, la atribución es un acto de cuidado.
          Si publicas un fragmento del archivo en redes sociales, medios o
          proyectos culturales, incluye un enlace directo al mito original y
          menciona a la comunidad o región de la que proviene. Esto ayuda a
          preservar el contexto y evita que la historia se desconecte de su
          territorio. Puedes encontrar rutas y referencias en{" "}
          <TextLink href="/mapa">Mapa</TextLink> o en{" "}
          <TextLink href="/regiones">Regiones</TextLink>.
        </p>
        <p>
          Algunos relatos pueden contener nombres o términos propios de
          pueblos originarios. No los uses fuera de contexto ni los emplees
          con fines comerciales sin una consulta previa. Nuestra visión es
          que el archivo sirva como puente cultural, no como extracto de
          contenido. Si tienes dudas sobre el uso de un relato, escríbenos a
          través de <TextLink href="/contacto">Contacto</TextLink>.
        </p>
        <p>
          En el futuro podremos ofrecer licencias específicas para
          proyectos educativos o de investigación. Por ahora, la regla
          general es citar, contextualizar y respetar. Esta práctica protege
          tanto a quienes cuentan como a quienes escuchan.
        </p>
      </>
    ),
  },
  {
    title: "Aportes de usuarios",
    body: (
      <>
        <p>
          Al enviar un aporte aceptas que el equipo editorial puede revisar
          el texto para mejorar claridad y coherencia, siempre conservando
          el sentido original. Los aportes pueden publicarse en el archivo
          con edición mínima y se incorporan a la estructura de mitos del
          sitio. Para conocer este proceso, consulta la{" "}
          <TextLink href="/metodologia">Metodología</TextLink>.
        </p>
        <p>
          Si el aporte incluye información sensible, el equipo evaluará cómo
          proteger la identidad de las personas involucradas. En todos los
          casos, cuidamos la privacidad según lo establecido en{" "}
          <TextLink href="/privacidad">Privacidad</TextLink>.
        </p>
      </>
    ),
  },
  {
    title: "Comentarios y participación",
    body: (
      <>
        <p>
          Los comentarios en mitos específicos son bienvenidos siempre que
          respeten el propósito cultural del archivo. Nos reservamos el
          derecho de moderar mensajes ofensivos, discriminatorios o fuera
          de contexto. Queremos que el archivo sea un espacio seguro y
          respetuoso para comunidades y lectores.
        </p>
      </>
    ),
  },
  {
    title: "Cambios y disponibilidad",
    body: (
      <>
        <p>
          El sitio puede cambiar, actualizarse o pausarse por motivos
          técnicos. También podemos ajustar la estructura editorial o la
          navegación. Si ocurre una actualización relevante, lo
          comunicaremos en la sección editorial o en el boletín del sitio.
        </p>
      </>
    ),
  },
  {
    title: "Responsabilidad cultural",
    body: (
      <>
        <p>
          La tradición oral es diversa y cambiante. Los relatos pueden tener
          variantes en diferentes territorios. Reconocemos esa diversidad y
          trabajamos para que el archivo refleje múltiples voces. Si
          encuentras una versión distinta, te invitamos a compartirla desde{" "}
          <TextLink href="/contacto">Contacto</TextLink>.
        </p>
        <p>
          Al navegar por el sitio aceptas que los mitos pueden contener
          elementos simbólicos, relatos de advertencia o narrativas de
          transformación cultural. Estas historias se presentan con respeto
          y en su contexto, y hacen parte del patrimonio cultural
          colombiano.
        </p>
      </>
    ),
  },
  {
    title: "Preguntas frecuentes de uso",
    body: (
      <>
        <p>
          ¿Puedo usar un mito en una clase o taller? Sí. Los relatos pueden
          ser utilizados con fines educativos siempre que se cite la fuente
          y se mantenga el contexto cultural. Te recomendamos enlazar al
          mito original en <TextLink href="/mitos">Mitos</TextLink> y
          mencionar la región o comunidad asociada. Esto ayuda a que los
          estudiantes comprendan el origen del relato y no lo interpreten
          fuera de lugar.
        </p>
        <p>
          ¿Puedo adaptar un relato en una obra artística? Las adaptaciones
          son posibles, pero deben realizarse con cuidado. Si tu obra es
          pública o comercial, necesitas autorización previa. En ese caso,
          escribe a <TextLink href="/contacto">Contacto</TextLink> con
          detalles sobre el proyecto. Evaluaremos cada solicitud para
          proteger la integridad cultural de los relatos.
        </p>
        <p>
          ¿Qué sucede si encuentro un error? Los errores son parte de un
          archivo vivo. Puedes enviarnos correcciones con contexto y
          referencias. Nuestro equipo revisará la información y actualizará
          el mito si corresponde. Revisa la sección de{" "}
          <TextLink href="/metodologia">Metodología</TextLink> para
          conocer cómo gestionamos esas revisiones.
        </p>
        <p>
          ¿Puedo compartir los mitos en redes sociales? Sí, siempre y cuando
          incluyas la atribución y un enlace al sitio. Esto fortalece el SEO
          del archivo y ayuda a que más lectores encuentren las historias en
          su contexto completo.
        </p>
        <p>
          Si tu proyecto busca financiarse con recursos públicos o privados,
          puedes incluir el archivo como referencia cultural. En ese caso
          menciona claramente el origen de los relatos y respeta las
          comunidades asociadas a cada mito.
        </p>
      </>
    ),
  },
  {
    title: "Licencias educativas y proyectos institucionales",
    body: (
      <>
        <p>
          Para universidades, bibliotecas y centros culturales ofrecemos la
          posibilidad de establecer acuerdos de uso. Estos acuerdos permiten
          reproducir extractos del archivo con fines pedagógicos, siempre
          acompañados de atribución y contexto. Las solicitudes deben
          incluir objetivos claros, alcance del proyecto y público
          beneficiario. Puedes iniciar la conversación en{" "}
          <TextLink href="/contacto">Contacto</TextLink>.
        </p>
        <p>
          Si tu proyecto implica investigación académica, puedes solicitar
          información sobre la taxonomía, el sistema de rutas y el mapa. La
          estructura editorial del sitio puede ser útil para análisis
          culturales, antropológicos o narrativos. En ese caso, te
          recomendamos revisar primero la sección de{" "}
          <TextLink href="/sobre-el-proyecto">Sobre el proyecto</TextLink>{" "}
          para entender los principios que guían el archivo.
        </p>
        <p>
          Estas licencias no implican propiedad sobre los relatos. Los mitos
          pertenecen a la memoria cultural colectiva. Nuestro rol es
          proteger su difusión con respeto. Cualquier uso debe asegurar que
          la historia no se descontextualice ni se convierta en mercancía
          sin autorización. Esta es una condición esencial de este archivo.
        </p>
      </>
    ),
  },
  {
    title: "Enlaces externos y responsabilidad",
    body: (
      <>
        <p>
          El sitio puede contener enlaces hacia recursos externos, bibliografías
          o instituciones aliadas. Estos enlaces se incluyen como referencia
          cultural y no implican aprobación directa del contenido externo.
          Recomendamos revisar las políticas de cada sitio antes de usar sus
          recursos. Si detectas un enlace desactualizado o inapropiado, puedes
          reportarlo en <TextLink href="/contacto">Contacto</TextLink>.
        </p>
        <p>
          Mitos de Colombia no se responsabiliza por los cambios en sitios
          externos, pero sí procura mantener una curaduría rigurosa dentro del
          archivo propio. Nuestra prioridad es la precisión cultural, por eso
          revisamos de forma periódica las fuentes internas y actualizamos los
          relatos cuando aparecen nuevas evidencias o contextos.
        </p>
        <p>
          Al navegar por el archivo aceptas que algunas narrativas puedan
          contener representaciones simbólicas fuertes. Estos relatos son
          testimonios culturales y deben leerse en su contexto histórico. Si
          necesitas acompañamiento editorial o deseas conversar sobre un mito
          en particular, puedes escribirnos; nos interesa que la lectura sea
          respetuosa y consciente.
        </p>
        <p>
          El archivo también puede ser citado en investigaciones, crónicas o
          trabajos académicos. En esos casos recomendamos incluir enlaces
          internos para mantener la trazabilidad del relato y facilitar que
          los lectores encuentren las rutas relacionadas. Esta práctica ayuda
          a que el conocimiento circule con su contexto intacto y fortalece
          la red de lecturas que el sitio propone.
        </p>
        <p>
          Mantener enlaces internos activos es parte del compromiso cultural
          del proyecto y contribuye a que los mitos sigan siendo descubiertos.
          Gracias por respetar estas condiciones.
        </p>
      </>
    ),
  },
];

export default async function TerminosPage() {
  const featuredMyths = await getFeaturedMythsWithImages(3, 3);

  const related = (featuredMyths || []).slice(0, 3).map((m) => ({
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  }));

  return (
    <DocumentTemplate
      eyebrow="Términos de uso"
      title="Un acuerdo para cuidar la memoria colectiva."
      description="Estas condiciones rigen el uso del sitio, sus contenidos y las colaboraciones que recibimos."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Términos" }]}
      sections={sections}
      related={related}
      accent="jungle"
    />
  );
}
