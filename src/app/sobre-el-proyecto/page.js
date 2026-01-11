import Link from "next/link";
import Header from "../../components/Header";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { MythCard } from "../../components/MythCard";
import { getFeaturedMythsWithImages, getHomeStats } from "../../lib/myths";
import { getRoutePreviews } from "../../lib/routes";
import { ImageSlot } from "../../components/ui/ImageSlot";

export const metadata = {
  title: "Sobre el proyecto",
  description:
    "Conoce la visión editorial detrás de Mitos de Colombia y la curaduría del archivo.",
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

export default async function SobreElProyectoPage() {
  const seed = getDailySeed();
  const [featuredMyths, stats, routePreviews] = await Promise.all([
    getFeaturedMythsWithImages(6, seed),
    getHomeStats(),
    getRoutePreviews(seed),
  ]);

  return (
    <>
      <Header />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-14 left-10 h-72 w-72 rounded-full bg-jungle-500/25 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-river-500/20 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute bottom-10 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-ember-400/20 blur-[140px] motion-safe:animate-float-slow" />
      </div>

      <main className="relative min-h-screen pb-24">
        <section className="container-shell mt-12 space-y-12">
          <SectionHeader
            eyebrow="Archivo editorial"
            title="Una cartografía viva de mitos colombianos."
            description="Mitos de Colombia es un proyecto editorial y visual que recoge relatos ancestrales, rutas culturales y memoria territorial en un solo archivo narrativo."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                label: "Mitos curados",
                value: stats?.total_myths || 0,
                tone: "text-jungle-600",
              },
              {
                label: "Regiones",
                value: stats?.total_regions || 0,
                tone: "text-river-600",
              },
              {
                label: "Tags activos",
                value: stats?.total_tags || 0,
                tone: "text-ember-500",
              },
              {
                label: "Ilustrados",
                value: stats?.myths_with_images || 0,
                tone: "text-ink-600",
              },
            ].map((item) => (
              <GlassCard key={item.label} className="p-5 text-center">
                <p className={`text-xs uppercase tracking-[0.3em] ${item.tone}`}>
                  {item.label}
                </p>
                <p className="mt-3 font-display text-3xl text-ink-900">
                  {item.value}
                </p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Manifiesto editorial
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Este archivo nace de una intuición simple: Colombia se entiende
              mejor cuando se escucha a sus relatos. Cada mito es una brújula
              cultural; no sólo explica el origen de un río o la memoria de una
              montaña, también revela cómo se ordenan los vínculos entre la
              comunidad, la naturaleza y el tiempo. Nuestro propósito es
              convertir esa oralidad en una experiencia legible, contemporánea y
              respetuosa. Por eso trabajamos con una estructura editorial que no
              simplifica el relato, sino que lo acompaña con contexto, pistas de
              lectura y rutas que conectan historias entre sí.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Mitos de Colombia es un archivo abierto. Cada página está pensada
              para una lectura lenta, pero también para la exploración libre: si
              un lector llega por una criatura nocturna, puede saltar a la
              colección completa en <InlineLink href="/mitos">Mitos</InlineLink>;
              si prefiere navegar por territorio, puede recorrer
              <InlineLink href="/regiones">Regiones</InlineLink> o el
              <InlineLink href="/mapa">Mapa</InlineLink>. La curaduría editorial
              utiliza etiquetas, comunidades y rutas temáticas para que cada
              mito dialogue con otros, como si el archivo fuera una conversación
              en la plaza del pueblo.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Esta conversación también vive en los cruces: un mito puede ser
              leído junto a otro, incluso si provienen de regiones distintas. Por
              eso nos interesan las conexiones internas y los enlaces que
              multiplican lecturas. Cada link es una invitación a seguir
              caminando, a descubrir otra voz, a reconocer un símbolo común y a
              ampliar la memoria del territorio.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Cuando hablamos de archivo vivo hablamos de un sistema que se
              actualiza con nuevas voces y nuevos hallazgos. Esta es una
              invitación a recorrer, pero también a aportar. Si deseas sumar una
              versión de un mito, proponer una corrección o compartir una
              referencia, visita el espacio de
              <InlineLink href="/contacto">Contacto</InlineLink> y cuéntanos el
              relato desde tu territorio.
            </p>
          </GlassCard>

          <div className="grid gap-6 lg:grid-cols-3">
            <GlassCard className="p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-jungle-600">
                Arquitectura del archivo
              </p>
              <p className="text-sm text-ink-600 leading-relaxed">
                Cada mito se organiza por región, comunidad y tema. Esto permite
                comparar versiones locales y reconocer patrones narrativos.
                Explora los relatos por
                <InlineLink href="/categorias"> categorías</InlineLink> o por
                <InlineLink href="/comunidades"> comunidades</InlineLink> para
                descubrir cómo una misma historia cambia según el territorio.
              </p>
            </GlassCard>
            <GlassCard className="p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-river-600">
                Geografía narrativa
              </p>
              <p className="text-sm text-ink-600 leading-relaxed">
                El mapa no es un adorno: es una forma de leer el país. La
                geolocalización aproxima cada relato a su paisaje y nos recuerda
                que la memoria se ancla en ríos, montañas y caminos. Recorre el
                <InlineLink href="/mapa"> mapa</InlineLink> para entender cómo
                las historias se distribuyen por el territorio.
              </p>
            </GlassCard>
            <GlassCard className="p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ember-500">
                Rutas temáticas
              </p>
              <p className="text-sm text-ink-600 leading-relaxed">
                Las rutas son curadurías que conectan mitos por afinidad. Desde
                guardianes del agua hasta bestiarios, cada ruta propone una
                lectura continua y editorial. Puedes entrar directo desde
                <InlineLink href="/rutas/guardianes-del-agua">Guardianes del agua</InlineLink>
                o elegir otras rutas en la sección principal.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Una biblioteca para leer en capas
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Cada mito tiene una estructura editorial propia: título, resumen,
              contenido extendido, palabras clave y contexto territorial. Esta
              estructura permite que el lector pueda entrar por distintos
              niveles de profundidad. Algunas personas quieren leer de corrido;
              otras buscan una visión rápida. En ambos casos, el archivo ofrece
              una lectura cómoda y un recorrido intuitivo. En la
              <InlineLink href="/metodologia"> Metodología</InlineLink> puedes
              ver cómo organizamos cada campo y por qué elegimos esa taxonomía.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Además de los textos, la dimensión visual también construye
              significado. Las ilustraciones creadas para el archivo buscan
              dialogar con los mitos sin convertirlos en caricatura. Son una
              interpretación contemporánea, inspirada en técnicas como el paper
              cut y el paper quilling. Esa estética ayuda a que el archivo se
              sienta actual, elegante y respetuoso con la memoria cultural.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Cómo leer este archivo sin perderte
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              La lectura puede comenzar en cualquier punto. Quienes prefieren
              una entrada directa suelen abrir un mito específico y desde allí
              seguir las conexiones que propone el texto. Esa forma de lectura
              es ideal si te interesa un relato puntual y quieres conocer sus
              versiones o motivos narrativos relacionados. En ese caso, puedes
              iniciar desde <InlineLink href="/mitos">Mitos</InlineLink> y usar
              los filtros por región, comunidad o tags para ajustar la búsqueda.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Si prefieres una lectura territorial, el archivo ofrece rutas
              visuales en el <InlineLink href="/mapa">Mapa</InlineLink>. Allí
              descubrirás cómo los relatos se agrupan alrededor de ríos, llanos,
              costas y selvas. Ese recorrido sugiere una lectura geográfica
             : la historia y el paisaje avanzan juntos. También puedes explorar
              desde <InlineLink href="/regiones">Regiones</InlineLink> para
              encontrar relatos concentrados por macroterritorios culturales.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              La lectura temática se apoya en <InlineLink href="/categorias">
              Categorías</InlineLink>. Allí verás cómo temas como el castigo, la
              transformación o la relación con el agua se repiten y cambian
              según el lugar. Estas rutas temáticas se complementan con las
              colecciones de <InlineLink href="/rutas/cartografia-selva">Rutas</InlineLink>,
              pensadas como recorridos editoriales que te permiten leer en
              secuencia, como si cada mito fuera un capítulo de una misma
              historia mayor.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Finalmente, una lectura comunitaria pone el foco en las voces
              específicas. En <InlineLink href="/comunidades">Comunidades</InlineLink>
              podrás ver cómo los relatos varían entre pueblos y tradiciones. Esta
              lectura es importante porque evita homogenizar la cultura: cada
              mito aparece con su nombre, sus símbolos y sus contextos propios.
              Elegir una sola ruta o combinarlas todas depende de tu forma de
              leer; el archivo está diseñado para acompañarte en cada paso.
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Señales editoriales y glosario vivo
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              En cada mito encontrarás pequeñas señales que te ayudan a orientarte.
              El resumen editorial resume el tono del relato, mientras que las
              palabras clave señalan símbolos recurrentes como agua, montaña o
              transformación. Las etiquetas no son etiquetas vacías: funcionan
              como un mapa conceptual que conecta relatos de regiones distintas.
              Si notas un símbolo que se repite, puedes explorarlo desde
              <InlineLink href="/categorias">Categorías</InlineLink> para ver cómo
              se expresa en otras voces del territorio.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Otro indicador importante es la ruta temática. Cuando un mito aparece
              en una ruta, significa que comparte un hilo narrativo con otras
              historias. Esto es útil si quieres leer de manera secuencial: por
              ejemplo, en <InlineLink href="/rutas/cartografia-selva">Cartografía de la selva</InlineLink>
              puedes recorrer relatos que hablan de guardianes, límites y señales
              del monte. Las rutas hacen visible una lectura editorial que no
              depende de un solo mito, sino del conjunto.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              También encontrarás información sobre comunidad y región. Estos dos
              campos son esenciales para entender el origen del relato. Un mito
              puede compartir símbolos con otro, pero su contexto territorial y
              cultural lo transforma. Por eso animamos a leer con cuidado: cada
              mito es una voz específica. Si deseas profundizar en esa relación,
              visita <InlineLink href="/regiones">Regiones</InlineLink> y luego
              contrasta con <InlineLink href="/comunidades">Comunidades</InlineLink>.
              La lectura se vuelve más rica cuando se consideran ambas capas.
            </p>
          </GlassCard>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-ink-900">
                Relatos destacados
              </h2>
              <Link
                href="/mitos"
                className="text-xs uppercase tracking-[0.3em] text-ink-500 hover:text-ink-700"
              >
                Ver archivo completo
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredMyths.map((myth) => (
                <MythCard key={myth.slug} myth={myth} />
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-ink-900">Rutas vivas</h2>
              <Link
                href="/rutas/guardianes-del-agua"
                className="text-xs uppercase tracking-[0.3em] text-ink-500 hover:text-ink-700"
              >
                Explorar rutas
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {routePreviews.slice(0, 3).map((route) => (
                <Link
                  key={route.slug}
                  href={`/rutas/${route.slug}`}
                  className="group block"
                >
                  <GlassCard className="overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-lift">
                    <ImageSlot
                      src={route.preview?.image_url}
                      alt={`Ruta ${route.title}`}
                      size="wide"
                      className="rounded-none"
                    />
                    <div className="p-5 space-y-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
                        {route.title}
                      </p>
                      <h3 className="font-display text-xl text-ink-900">
                        {route.detail}
                      </h3>
                      <p className="text-sm text-ink-600 line-clamp-2">
                        {route.description}
                      </p>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </section>

          <GlassCard className="p-8 space-y-6">
            <h2 className="font-display text-2xl text-ink-900">
              Participa en el archivo
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Este proyecto no pretende cerrar una versión definitiva del mito.
              Sabemos que una misma historia puede variar entre familias,
              comunidades o regiones. Por eso invitamos a compartir versiones,
              referencias y contextos. Si tienes un relato de tu territorio,
              puedes escribirnos desde el formulario de
              <InlineLink href="/contacto"> contacto</InlineLink>. También
              puedes consultar la política de
              <InlineLink href="/privacidad"> privacidad</InlineLink> o los
              <InlineLink href="/terminos"> términos</InlineLink> para conocer
              cómo cuidamos la información que recibimos.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Al compartir una historia estás aportando al mapa cultural del
              país. Imagina cada mito como una señal en el camino: juntos forman
              rutas, conectan paisajes y recuerdan la memoria de quienes han
              habitado estas tierras. Ese es el corazón de Mitos de Colombia: un
              archivo que respira con cada nuevo relato.
            </p>
            <p className="text-sm text-ink-600 leading-relaxed">
              Si quieres iniciar un recorrido más profundo antes de escribirnos,
              te sugerimos visitar <InlineLink href="/rutas">Rutas</InlineLink> y
              seleccionar una colección temática. Ese viaje te permitirá ver cómo
              se combinan región, comunidad y tema en la práctica. Cuando vuelvas
              a este formulario, tendrás un panorama más claro de cómo describir
              tu aporte y en qué lugar del archivo podría resonar.
            </p>
          </GlassCard>
        </section>
      </main>
    </>
  );
}
