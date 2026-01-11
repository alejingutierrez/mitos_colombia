import Link from "next/link";
import Header from "../../components/Header";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { GlassCard } from "../../components/ui/GlassCard";
import ContactForm from "./ContactForm";
import { MythCard } from "../../components/MythCard";
import { getFeaturedMythsWithImages, getDiverseMyths } from "../../lib/myths";

export const metadata = {
  title: "Contacto",
  description:
    "Escríbenos para compartir mitos, correcciones o colaboraciones editoriales.",
};

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

export default async function ContactoPage() {
  const seed = getDailySeed();
  const [featuredMyths, diverseMyths] = await Promise.all([
    getFeaturedMythsWithImages(3, seed),
    getDiverseMyths(3, seed),
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
            eyebrow="Contacto editorial"
            title="Hablemos del territorio, los relatos y la memoria."
            description="Este espacio es para quienes desean compartir un mito, corregir un dato o sumarse a la conversación cultural."
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div className="space-y-6">
              <GlassCard className="p-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                  Por qué escribirnos
                </p>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Mitos de Colombia es un archivo vivo. Cada relato existe porque
                  alguien lo escuchó, lo contó y lo sostuvo en el tiempo. Si
                  tienes una versión local, una variante familiar o una historia
                  que aún no aparece en el archivo, este es el lugar para
                  compartirla. Nos interesa conocer la geografía del relato, la
                  comunidad que lo guarda y el contexto que lo acompaña. La
                  conversación es tan valiosa como el relato mismo.
                </p>
                <p className="text-sm text-ink-600 leading-relaxed">
                  También recibimos correcciones editoriales, referencias
                  bibliográficas, documentos orales y sugerencias sobre cómo
                  mejorar la navegación. Cuando nos escribes, nos ayudas a
                  ampliar el mapa y a fortalecer la relación entre las historias
                  y el territorio. Puedes explorar primero el archivo en
                  <InlineLink href="/mitos">Mitos</InlineLink> o recorrer el
                  <InlineLink href="/mapa">Mapa</InlineLink> para encontrar
                  relatos cercanos.
                </p>
              </GlassCard>

              <GlassCard className="p-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                  Qué información nos ayuda
                </p>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Cuando compartes un mito, es útil mencionar la región, la
                  comunidad y cualquier referencia sobre el origen del relato. Si
                  conoces palabras en lengua originaria, nombres de lugares o
                  personas que custodian la tradición, inclúyelos en tu mensaje.
                  Todo esto enriquece la curaduría y nos permite ubicar el mito
                  con mayor precisión en las secciones de
                  <InlineLink href="/regiones">Regiones</InlineLink> y
                  <InlineLink href="/comunidades">Comunidades</InlineLink>.
                </p>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Si tu aporte es una corrección, cuéntanos qué parte del texto
                  debe ajustarse y por qué. Si tienes una fuente escrita, agrega
                  el nombre del autor o el documento. Si tu aporte es oral,
                  menciona quién transmitió la historia y en qué contexto la
                  escuchaste. La transparencia ayuda a cuidar la memoria.
                </p>
              </GlassCard>

              <GlassCard className="p-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                  Tiempo de respuesta y cuidado
                </p>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Nuestro equipo revisa cada mensaje con atención. Respondemos en
                  un plazo estimado de 3 a 5 días hábiles. Cuando un aporte se
                  integra al archivo, lo revisamos con el mismo cuidado editorial
                  que aplicamos al resto del contenido. Puedes revisar nuestra
                  <InlineLink href="/metodologia">Metodología</InlineLink> para
                  conocer el proceso completo.
                </p>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Los datos personales se usan únicamente para responder tu
                  mensaje. Para más detalles, consulta la política de
                  <InlineLink href="/privacidad">Privacidad</InlineLink> y los
                  <InlineLink href="/terminos">Términos</InlineLink> de uso.
                </p>
              </GlassCard>
            </div>

            <ContactForm />
          </div>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Antes de escribir
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Te invitamos a recorrer algunas rutas temáticas para encontrar
              inspiración y evitar duplicados. Las rutas editoriales como
              <InlineLink href="/rutas/guardianes-del-agua">Guardianes del agua</InlineLink>
              o <InlineLink href="/rutas/bestiario-colombiano">Bestiario colombiano</InlineLink>
              muestran cómo las historias dialogan entre sí. También puedes
              visitar <InlineLink href="/categorias">Categorías</InlineLink> si
              deseas ver los motivos narrativos más frecuentes.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Recuerda que cada mito es una memoria colectiva. Si compartes un
              relato que pertenece a una comunidad específica, intenta incluir
              el nombre con respeto y precisión. Nuestra prioridad es proteger
              la identidad cultural de quienes han sostenido estas historias.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Guía para compartir un mito
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Si tienes un relato completo, puedes contar la historia tal como
              la recuerdas. No necesitas pulir la redacción: nuestro equipo se
              encarga de la edición respetuosa. Lo más importante es la
              estructura básica: ¿dónde ocurre?, ¿quiénes son los personajes?,
              ¿qué hechos marcan la historia? Cuando estos elementos están
              claros, podemos ubicar el mito en el territorio y relacionarlo con
              otros relatos del archivo. Esa lectura contextual se refleja en el
              <InlineLink href="/mapa">Mapa</InlineLink> y en las rutas
              editoriales.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              También puedes enviar fragmentos, versiones incompletas o apenas
              una referencia. En ese caso, indica qué falta, de dónde proviene
              la historia y qué dudas tienes. Nos interesa especialmente el
              contexto: la comunidad, el paisaje, las prácticas culturales que
              acompañan el relato. Esa información es clave para organizar el
              mito en las secciones de <InlineLink href="/categorias">Categorías</InlineLink>
              y <InlineLink href="/comunidades">Comunidades</InlineLink>.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Si el mito está asociado a un lugar específico, describe el sitio
              con detalle. Puede ser un río, una laguna, un bosque o una montaña.
              Incluso si la ubicación es aproximada, nos ayuda a ubicar la
              historia en la geografía del país. Esta información enriquece la
              experiencia de quienes exploran el territorio desde el mapa y
              refuerza la conexión entre el relato y el paisaje.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Otra información útil es la ocasión en la que se cuenta el mito:
              ¿se narra durante una celebración?, ¿aparece en contextos de
              aprendizaje o advertencia?, ¿está asociado a un oficio o a un
              ritual? Estos detalles ayudan a comprender el rol social del
              relato y a ubicarlo en una ruta temática. Si deseas, puedes indicar
              si el mito está relacionado con el agua, la noche, el bosque o la
              transformación, lo cual nos permite conectarlo con rutas como
              <InlineLink href="/rutas/guardianes-del-agua">Guardianes del agua</InlineLink>.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Colaboraciones y alianzas
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Mitos de Colombia está abierto a alianzas con bibliotecas,
              universidades, centros culturales y colectivos comunitarios. Si
              deseas integrar una colección, proponer una investigación o
              desarrollar un proyecto conjunto, escríbenos con detalles claros
              sobre el objetivo y el alcance. Respondemos con una propuesta
              editorial y con los pasos necesarios para asegurar un trabajo
              cuidadoso y respetuoso.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              También recibimos propuestas de visualización, diseño y
              producción audiovisual. Las ilustraciones del archivo buscan
              interpretar los relatos con sensibilidad contemporánea. Si deseas
              colaborar en esa dimensión, comparte tu portafolio y un resumen de
              cómo entiendes la estética del archivo. Puedes conocer el enfoque
              editorial en <InlineLink href="/sobre-el-proyecto">Sobre el proyecto</InlineLink>.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Finalmente, si representas una comunidad y deseas revisar cómo
              aparecen sus relatos en el archivo, estamos abiertos a dialogar.
              Nuestro compromiso es construir una memoria compartida y
              transparente. Esa conversación nos ayuda a mejorar la precisión y
              la sensibilidad cultural del archivo.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Preguntas frecuentes
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Puedo enviar varios mitos en un solo mensaje? Sí, pero te
              recomendamos incluirlos separados por secciones claras para que
              podamos identificar el contexto de cada uno. Si los relatos son
              de regiones distintas, indícalo en cada bloque. Esto nos ayuda a
              ubicar correctamente cada historia y a relacionarla con rutas
              temáticas o categorías específicas.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Qué pasa con los relatos incompletos? También son valiosos. Si
              sólo recuerdas una escena, un personaje o un fragmento, envíalo y
              cuéntanos todo lo que puedas sobre el contexto. Muchas veces esos
              fragmentos funcionan como pistas para reconectar un mito con su
              versión completa o con relatos similares que ya están en el
              archivo. En ese caso, nuestro equipo comparará tu aporte con los
              mitos existentes en <InlineLink href="/mitos">Mitos</InlineLink>.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Recibiré una respuesta? Sí. Siempre confirmamos la recepción y
              te contamos el estado de revisión. Si el relato requiere más
              información, te escribiremos con preguntas específicas. Nuestro
              objetivo es mantener una conversación abierta y respetuosa con
              quienes sostienen la memoria oral del país.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Puedo corregir un mito que ya está publicado? Claro. En ese caso
              describe el mito con precisión, indica el fragmento que debería
              ajustarse y comparte la fuente o el contexto. Nuestra prioridad
              es conservar la verdad cultural del relato, por lo que toda
              corrección es bienvenida y revisada con cuidado.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              ¿Puedo enviar fotografías o documentos? Sí, pero indícalo claramente
              en tu mensaje. Si los archivos requieren un enlace externo,
              compártenos la URL y una breve descripción. Evaluamos cada material
              para verificar su pertinencia y su relación con la historia antes
              de integrarlo al archivo.
            </p>
          </GlassCard>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-ink-900">
                Relatos que inspiran
              </h2>
              <Link
                href="/mitos"
                className="text-xs uppercase tracking-[0.3em] text-ink-500 hover:text-ink-700"
              >
                Explorar archivo
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[...featuredMyths, ...diverseMyths].slice(0, 3).map((myth) => (
                <MythCard key={myth.slug} myth={myth} />
              ))}
            </div>
          </section>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Una red de voces
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Este proyecto se fortalece con cada aporte. Al escribirnos, no sólo
              sumas un relato; también trazas puentes entre regiones, comunidades
              y tiempos. La memoria oral se mantiene viva cuando se comparte con
              cuidado. Si quieres conocer más sobre la visión del proyecto, visita
              <InlineLink href="/sobre-el-proyecto">Sobre el proyecto</InlineLink>.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Gracias por confiar en este archivo. Estamos construyendo una
              cartografía colectiva de mitos, y cada mensaje es una señal que
              ilumina el camino. Tu aporte sostiene la memoria y abre nuevas rutas.
              Gracias por cuidar la memoria.
            </p>
          </GlassCard>
        </section>
      </main>
    </>
  );
}
