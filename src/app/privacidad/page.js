import Link from "next/link";
import Header from "../../components/Header";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { MythCard } from "../../components/MythCard";
import { getFeaturedMythsWithImages } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "privacidad");
  return buildSeoMetadata({
    fallback: {
      title: "Privacidad | Mitos de Colombia",
      description:
        "Política de privacidad de Mitos de Colombia y uso responsable de datos.",
      keywords: ["privacidad", "datos", "mitos colombianos", "política"],
    },
    seo,
    canonicalPath: "/privacidad",
  });
}

export const revalidate = 86400;

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-river-600 underline decoration-river-200 decoration-2 underline-offset-4 transition hover:text-river-700"
  >
    {children}
  </Link>
);

export default async function PrivacidadPage() {
  const featuredMyths = await getFeaturedMythsWithImages(3, 2);

  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-12 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-12 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <main className="relative min-h-screen pb-24">
        <section className="container-shell mt-12 space-y-12">
          <SectionHeader
            eyebrow="Privacidad"
            title="Protegemos la memoria y los datos de quienes la comparten."
            description="Esta política explica qué datos recopilamos, por qué los usamos y cómo cuidamos tu información."
          />

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              1. Información que recopilamos
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Mitos de Colombia recopila únicamente la información que entregas
              de forma voluntaria. Esto incluye nombre, correo electrónico y el
              contenido del mensaje cuando usas el formulario de
              <InlineLink href="/contacto"> Contacto</InlineLink> o cuando
              compartes un comentario en un mito específico. No solicitamos datos
              sensibles ni registros innecesarios. Nuestro objetivo es mantener
              la comunicación abierta con quienes aportan relatos, referencias o
              correcciones al archivo editorial.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              En algunos casos también registramos datos técnicos básicos, como
              el tipo de navegador o la página desde la que se envió un mensaje,
              con el fin de resolver errores o mejorar la experiencia de
              navegación. Esta información es agregada y no se utiliza para
              identificar a personas específicas.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              2. Uso de la información
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Utilizamos los datos para responder solicitudes, verificar aportes
              y mantener una conversación editorial transparente. Por ejemplo,
              cuando alguien comparte un mito o una corrección, usamos el correo
              para solicitar aclaraciones o confirmar la publicación. No usamos
              la información con fines publicitarios ni la compartimos con
              terceros sin autorización.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              También usamos algunos datos para entender qué secciones del sitio
              son más visitadas. Esto nos ayuda a mejorar páginas como
              <InlineLink href="/mitos">Mitos</InlineLink>,
              <InlineLink href="/mapa">Mapa</InlineLink> y las rutas temáticas.
              Los datos se analizan de forma agregada y sirven para fortalecer
              la lectura editorial del archivo.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              3. Conservación y seguridad
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              La información se almacena en una base de datos protegida. Los
              datos de contacto se conservan el tiempo necesario para responder
              solicitudes y realizar seguimiento editorial. Puedes solicitar la
              eliminación o anonimización de tus datos en cualquier momento
              escribiendo a través del formulario de
              <InlineLink href="/contacto"> contacto</InlineLink>.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Implementamos buenas prácticas de seguridad como el uso de
              conexiones seguras, validación de datos y acceso restringido a las
              herramientas de administración. Estos controles protegen la
              confidencialidad de los aportes y ayudan a preservar el contenido
              cultural con respeto.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              3.1. Dónde se almacenan los datos
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Los mensajes de contacto y comentarios se guardan en una base de
              datos administrada en infraestructura segura. Esta infraestructura
              cumple estándares de disponibilidad y respaldo. Aunque los datos
              pueden alojarse en servicios en la nube, el acceso está restringido
              al equipo editorial. No compartimos la información con terceros ni
              la vendemos. Si una integración futura requiriera compartir datos,
              solicitaremos consentimiento explícito.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Nuestro objetivo es mantener el archivo disponible y protegido.
              Por eso realizamos copias de seguridad y revisiones periódicas.
              Cualquier cambio importante en esta política será comunicado a
              través del sitio. Te recomendamos revisar periódicamente esta
              sección si participas activamente en el archivo.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              La información que aportas puede quedar asociada al mito si decides
              que tu nombre aparezca como fuente. En ese caso, cuidamos la forma
              en que se presenta la referencia para evitar usos indebidos. Si no
              deseas que tu nombre aparezca, indícalo en el mensaje.
            </p>
          </GlassCard>

          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-6 space-y-3">
              <h3 className="font-display text-xl text-ink-900">
                4. Cookies y analítica
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                Usamos cookies esenciales para el funcionamiento básico del
                sitio. Algunas métricas de navegación se registran de manera
                anónima para entender cómo se exploran las secciones de
                <InlineLink href="/regiones">Regiones</InlineLink> y
                <InlineLink href="/categorias">Categorías</InlineLink>. No
                rastreamos actividades fuera del sitio ni vendemos información.
              </p>
            </GlassCard>
            <GlassCard className="p-6 space-y-3">
              <h3 className="font-display text-xl text-ink-900">
                5. Derechos de los usuarios
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                Puedes solicitar acceso, corrección o eliminación de tus datos.
                También puedes solicitar información sobre cómo se usó tu aporte
                en el archivo editorial. Para ejercer estos derechos, escribe a
                través del formulario en <InlineLink href="/contacto">Contacto</InlineLink>.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              6. Relación con el contenido cultural
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              La privacidad es parte del cuidado cultural. Cuando una comunidad
              comparte un relato, también comparte contexto, territorio y
              memoria. Por eso cuidamos los datos personales y evitamos la
              explotación comercial de la información. Si quieres conocer el
              enfoque editorial del archivo, visita
              <InlineLink href="/sobre-el-proyecto"> Sobre el proyecto</InlineLink>
              o la sección de <InlineLink href="/metodologia">Metodología</InlineLink>.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Esta política puede actualizarse para reflejar mejoras en el
              proyecto. Te recomendamos revisarla periódicamente, especialmente
              si participas activamente enviando aportes.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              7. Preguntas frecuentes sobre privacidad
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Qué ocurre si comparto un mito y no quiero que mi nombre se vea?
              Puedes indicarlo en tu mensaje. En ese caso, tu aporte se integra
              con una referencia general y no publicamos datos personales. El
              objetivo es proteger la identidad de quienes comparten relatos y
              evitar que la información salga de contexto.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Quién puede acceder a mis datos? Sólo el equipo editorial tiene
              acceso a los mensajes, y lo utiliza para responder, verificar y
              organizar la información. No utilizamos estos datos para campañas
              de marketing ni para envío de correos masivos. Si en el futuro
              habilitamos un boletín, solicitaremos tu consentimiento explícito.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Puedo solicitar que mi mensaje sea eliminado? Sí. Puedes escribir
              a través del formulario de <InlineLink href="/contacto">Contacto</InlineLink>
              para solicitar la eliminación de tu mensaje o la corrección de
              información. Respondemos en un plazo razonable y confirmamos cuando
              la solicitud es atendida.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Cómo se protegen los datos técnicos? Los registros técnicos se
              almacenan con fines de análisis y resolución de errores. No se
              combinan con datos personales y se eliminan de forma periódica.
              Esta información sirve para mejorar la experiencia en páginas como
              <InlineLink href="/mapa">Mapa</InlineLink> o <InlineLink href="/mitos">Mitos</InlineLink>.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Guardan información sobre mi navegación? No creamos perfiles
              individuales. Las métricas son generales: nos dicen qué secciones
              son más visitadas o cuánto tiempo permanece la gente en una ruta.
              Estos datos nos ayudan a mejorar la lectura editorial, pero no se
              usan para seguimiento personalizado ni para segmentación.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Puedo navegar sin enviar datos? Sí. Puedes recorrer el archivo sin
              enviar información personal. Sólo solicitamos datos cuando decides
              escribirnos o comentar. Si prefieres mantenerte anónimo, puedes
              explorar libremente todas las secciones del sitio sin registrarte.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              8. Memoria, respeto y consentimiento
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              En un archivo cultural, la privacidad es también una forma de
              respeto. Cuando una persona comparte un relato, comparte una
              memoria que no le pertenece únicamente a ella, sino a una comunidad.
              Por eso cuidamos cómo se registra la información y evitamos
              exponer datos que puedan afectar a terceros.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Si deseas conocer cómo presentamos las fuentes y los contextos,
              te invitamos a revisar la sección de <InlineLink href="/metodologia">Metodología</InlineLink>.
              Allí explicamos cómo integramos relatos, cómo usamos las etiquetas
              y por qué la transparencia editorial es parte esencial del archivo.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Esta política también aplica a las imágenes que compartes. Si envías
              fotografías o documentos, los tratamos con el mismo cuidado que los
              textos: respetamos la autoría, solicitamos autorización para usos
              públicos y evitamos publicarlos sin contexto cultural.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Si deseas retirar un aporte, puedes hacerlo en cualquier momento.
              Nuestro equipo confirmará la solicitud y te informará cuando el
              contenido haya sido removido o anonimizado.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Valoramos la confianza de quienes aportan y cuidamos cada mensaje
              como parte de la memoria colectiva del archivo.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              9. Servicios digitales y herramientas externas
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              El sitio puede utilizar servicios de infraestructura para alojar
              contenido, almacenar bases de datos y procesar imágenes. Estos
              proveedores cumplen estándares de seguridad y permiten que el
              archivo sea estable. Sin embargo, eso no implica que compartamos
              datos personales con terceros. Los datos enviados en formularios
              permanecen en nuestras bases internas y se usan sólo con fines
              editoriales.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Si en el futuro integramos herramientas de análisis avanzadas o
              sistemas de apoyo editorial basados en inteligencia artificial,
              informaremos explícitamente y describiremos qué datos se utilizan.
              Nuestro compromiso es mantener la transparencia y solicitar
              consentimiento cuando sea necesario. Esta política se actualizará
              para reflejar cualquier cambio relevante.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Puedes conocer más sobre la visión tecnológica del proyecto en
              <InlineLink href="/sobre-el-proyecto">Sobre el proyecto</InlineLink>.
              Allí explicamos cómo combinamos investigación cultural y diseño
              editorial para mantener un archivo vivo y accesible.
            </p>
          </GlassCard>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-ink-900">
                Relatos en el archivo
              </h2>
              <Link
                href="/mitos"
                className="text-xs uppercase tracking-[0.3em] text-ink-500 hover:text-ink-700"
              >
                Explorar mitos
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredMyths.map((myth) => (
                <MythCard key={myth.slug} myth={myth} />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
