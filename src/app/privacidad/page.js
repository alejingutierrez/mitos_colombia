import { DocumentTemplate } from "../../components/templates";
import { TextLink } from "../../components/atoms";
import { getFeaturedMythsWithImages } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "privacidad");
  return buildSeoMetadata({
    fallback: {
      title: "Privacidad",
      description:
        "Política de privacidad de Mitos de Colombia y uso responsable de datos.",
      keywords: ["privacidad", "datos", "mitos colombianos", "política"],
    },
    seo,
    canonicalPath: "/privacidad",
  });
}

export const revalidate = 86400;

const sections = [
  {
    title: "Información que recopilamos",
    body: (
      <>
        <p>
          Mitos de Colombia recopila únicamente la información que entregas de
          forma voluntaria. Esto incluye nombre, correo electrónico y el
          contenido del mensaje cuando usas el formulario de{" "}
          <TextLink href="/contacto">Contacto</TextLink> o cuando compartes un
          comentario en un mito específico. No solicitamos datos sensibles ni
          registros innecesarios. Nuestro objetivo es mantener la comunicación
          abierta con quienes aportan relatos, referencias o correcciones al
          archivo editorial.
        </p>
        <p>
          En algunos casos también registramos datos técnicos básicos, como el
          tipo de navegador o la página desde la que se envió un mensaje, con el
          fin de resolver errores o mejorar la experiencia de navegación. Esta
          información es agregada y no se utiliza para identificar a personas
          específicas.
        </p>
      </>
    ),
  },
  {
    title: "Uso de la información",
    body: (
      <>
        <p>
          Utilizamos los datos para responder solicitudes, verificar aportes y
          mantener una conversación editorial transparente. Por ejemplo, cuando
          alguien comparte un mito o una corrección, usamos el correo para
          solicitar aclaraciones o confirmar la publicación. No usamos la
          información con fines publicitarios ni la compartimos con terceros sin
          autorización.
        </p>
        <p>
          También usamos algunos datos para entender qué secciones del sitio son
          más visitadas. Esto nos ayuda a mejorar páginas como{" "}
          <TextLink href="/mitos">Mitos</TextLink>,{" "}
          <TextLink href="/mapa">Mapa</TextLink> y las rutas temáticas. Los
          datos se analizan de forma agregada y sirven para fortalecer la
          lectura editorial del archivo.
        </p>
      </>
    ),
  },
  {
    title: "Conservación y seguridad",
    body: (
      <>
        <p>
          La información se almacena en una base de datos protegida. Los datos
          de contacto se conservan el tiempo necesario para responder
          solicitudes y realizar seguimiento editorial. Puedes solicitar la
          eliminación o anonimización de tus datos en cualquier momento
          escribiendo a través del formulario de{" "}
          <TextLink href="/contacto">contacto</TextLink>.
        </p>
        <p>
          Implementamos buenas prácticas de seguridad como el uso de conexiones
          seguras, validación de datos y acceso restringido a las herramientas
          de administración. Estos controles protegen la confidencialidad de los
          aportes y ayudan a preservar el contenido cultural con respeto.
        </p>
      </>
    ),
  },
  {
    title: "Dónde se almacenan los datos",
    body: (
      <>
        <p>
          Los mensajes de contacto y comentarios se guardan en una base de datos
          administrada en infraestructura segura. Esta infraestructura cumple
          estándares de disponibilidad y respaldo. Aunque los datos pueden
          alojarse en servicios en la nube, el acceso está restringido al equipo
          editorial. No compartimos la información con terceros ni la vendemos.
          Si una integración futura requiriera compartir datos, solicitaremos
          consentimiento explícito.
        </p>
        <p>
          Nuestro objetivo es mantener el archivo disponible y protegido. Por
          eso realizamos copias de seguridad y revisiones periódicas. Cualquier
          cambio importante en esta política será comunicado a través del sitio.
          Te recomendamos revisar periódicamente esta sección si participas
          activamente en el archivo.
        </p>
        <p>
          La información que aportas puede quedar asociada al mito si decides que
          tu nombre aparezca como fuente. En ese caso, cuidamos la forma en que
          se presenta la referencia para evitar usos indebidos. Si no deseas que
          tu nombre aparezca, indícalo en el mensaje.
        </p>
      </>
    ),
  },
  {
    title: "Cookies y analítica",
    body: (
      <p>
        Usamos cookies esenciales para el funcionamiento básico del sitio.
        Algunas métricas de navegación se registran de manera anónima para
        entender cómo se exploran las secciones de{" "}
        <TextLink href="/regiones">Regiones</TextLink> y{" "}
        <TextLink href="/categorias">Categorías</TextLink>. No rastreamos
        actividades fuera del sitio ni vendemos información.
      </p>
    ),
  },
  {
    title: "Derechos de los usuarios",
    body: (
      <p>
        Puedes solicitar acceso, corrección o eliminación de tus datos. También
        puedes solicitar información sobre cómo se usó tu aporte en el archivo
        editorial. Para ejercer estos derechos, escribe a través del formulario
        en <TextLink href="/contacto">Contacto</TextLink>.
      </p>
    ),
  },
  {
    title: "Relación con el contenido cultural",
    body: (
      <>
        <p>
          La privacidad es parte del cuidado cultural. Cuando una comunidad
          comparte un relato, también comparte contexto, territorio y memoria.
          Por eso cuidamos los datos personales y evitamos la explotación
          comercial de la información. Si quieres conocer el enfoque editorial
          del archivo, visita{" "}
          <TextLink href="/sobre-el-proyecto">Sobre el proyecto</TextLink> o la
          sección de <TextLink href="/metodologia">Metodología</TextLink>.
        </p>
        <p>
          Esta política puede actualizarse para reflejar mejoras en el proyecto.
          Te recomendamos revisarla periódicamente, especialmente si participas
          activamente enviando aportes.
        </p>
      </>
    ),
  },
  {
    title: "Preguntas frecuentes sobre privacidad",
    body: (
      <>
        <p>
          ¿Qué ocurre si comparto un mito y no quiero que mi nombre se vea?
          Puedes indicarlo en tu mensaje. En ese caso, tu aporte se integra con
          una referencia general y no publicamos datos personales. El objetivo
          es proteger la identidad de quienes comparten relatos y evitar que la
          información salga de contexto.
        </p>
        <p>
          ¿Quién puede acceder a mis datos? Sólo el equipo editorial tiene
          acceso a los mensajes, y lo utiliza para responder, verificar y
          organizar la información. No utilizamos estos datos para campañas de
          marketing ni para envío de correos masivos. Si en el futuro
          habilitamos un boletín, solicitaremos tu consentimiento explícito.
        </p>
        <p>
          ¿Puedo solicitar que mi mensaje sea eliminado? Sí. Puedes escribir a
          través del formulario de <TextLink href="/contacto">Contacto</TextLink>{" "}
          para solicitar la eliminación de tu mensaje o la corrección de
          información. Respondemos en un plazo razonable y confirmamos cuando la
          solicitud es atendida.
        </p>
        <p>
          ¿Cómo se protegen los datos técnicos? Los registros técnicos se
          almacenan con fines de análisis y resolución de errores. No se combinan
          con datos personales y se eliminan de forma periódica. Esta información
          sirve para mejorar la experiencia en páginas como{" "}
          <TextLink href="/mapa">Mapa</TextLink> o{" "}
          <TextLink href="/mitos">Mitos</TextLink>.
        </p>
        <p>
          ¿Guardan información sobre mi navegación? No creamos perfiles
          individuales. Las métricas son generales: nos dicen qué secciones son
          más visitadas o cuánto tiempo permanece la gente en una ruta. Estos
          datos nos ayudan a mejorar la lectura editorial, pero no se usan para
          seguimiento personalizado ni para segmentación.
        </p>
        <p>
          ¿Puedo navegar sin enviar datos? Sí. Puedes recorrer el archivo sin
          enviar información personal. Sólo solicitamos datos cuando decides
          escribirnos o comentar. Si prefieres mantenerte anónimo, puedes
          explorar libremente todas las secciones del sitio sin registrarte.
        </p>
      </>
    ),
  },
  {
    title: "Memoria, respeto y consentimiento",
    body: (
      <>
        <p>
          En un archivo cultural, la privacidad es también una forma de respeto.
          Cuando una persona comparte un relato, comparte una memoria que no le
          pertenece únicamente a ella, sino a una comunidad. Por eso cuidamos
          cómo se registra la información y evitamos exponer datos que puedan
          afectar a terceros.
        </p>
        <p>
          Si deseas conocer cómo presentamos las fuentes y los contextos, te
          invitamos a revisar la sección de{" "}
          <TextLink href="/metodologia">Metodología</TextLink>. Allí explicamos
          cómo integramos relatos, cómo usamos las etiquetas y por qué la
          transparencia editorial es parte esencial del archivo.
        </p>
        <p>
          Esta política también aplica a las imágenes que compartes. Si envías
          fotografías o documentos, los tratamos con el mismo cuidado que los
          textos: respetamos la autoría, solicitamos autorización para usos
          públicos y evitamos publicarlos sin contexto cultural.
        </p>
        <p>
          Si deseas retirar un aporte, puedes hacerlo en cualquier momento.
          Nuestro equipo confirmará la solicitud y te informará cuando el
          contenido haya sido removido o anonimizado.
        </p>
        <p>
          Valoramos la confianza de quienes aportan y cuidamos cada mensaje como
          parte de la memoria colectiva del archivo.
        </p>
      </>
    ),
  },
  {
    title: "Servicios digitales y herramientas externas",
    body: (
      <>
        <p>
          El sitio puede utilizar servicios de infraestructura para alojar
          contenido, almacenar bases de datos y procesar imágenes. Estos
          proveedores cumplen estándares de seguridad y permiten que el archivo
          sea estable. Sin embargo, eso no implica que compartamos datos
          personales con terceros. Los datos enviados en formularios permanecen
          en nuestras bases internas y se usan sólo con fines editoriales.
        </p>
        <p>
          Si en el futuro integramos herramientas de análisis avanzadas o
          sistemas de apoyo editorial basados en inteligencia artificial,
          informaremos explícitamente y describiremos qué datos se utilizan.
          Nuestro compromiso es mantener la transparencia y solicitar
          consentimiento cuando sea necesario. Esta política se actualizará para
          reflejar cualquier cambio relevante.
        </p>
        <p>
          Puedes conocer más sobre la visión tecnológica del proyecto en{" "}
          <TextLink href="/sobre-el-proyecto">Sobre el proyecto</TextLink>. Allí
          explicamos cómo combinamos investigación cultural y diseño editorial
          para mantener un archivo vivo y accesible.
        </p>
      </>
    ),
  },
];

export default async function PrivacidadPage() {
  const featuredMyths = await getFeaturedMythsWithImages(3, 2);

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
      eyebrow="Privacidad"
      title="Protegemos la memoria y los datos de quienes la comparten."
      description="Esta política explica qué datos recopilamos, por qué los usamos y cómo cuidamos tu información."
      breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Privacidad" }]}
      sections={sections}
      related={related}
      accent="jungle"
    />
  );
}
