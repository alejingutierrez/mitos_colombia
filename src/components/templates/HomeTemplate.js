import Image from "next/image";
import Link from "next/link";
import { Container, Icon, Motif } from "../atoms";
import { SearchBox } from "../molecules";
import { Header } from "../organisms";
import {
  AtlasSectionHeader,
  EditorialMythRow,
  PortraitRail,
  SelectionMosaic,
  TerritoryStrip,
} from "../editorial/AtlasEditorial";

/**
 * Home · plantilla.
 *
 * Ritmo de la página: cada sección usa una mecánica distinta (portada →
 * mosaico → mosaico de territorios → fila con índice → pieza a sangre →
 * carrusel → bloque partido → cartas → cierre). Antes había cuatro rejillas
 * de mitos con la misma mecánica y la página se leía como una sola lista
 * larga de 9.500px.
 *
 * Reparto del feed: cada sección consume un tramo propio mediante `take()`.
 * Los `slice` fijos anteriores se solapaban y 13 de los 23 mitos aparecían
 * dos veces en la misma página.
 */

const DEFAULT_LEAD = {
  slug: "la-madre-de-agua",
  title: "La Madre de Agua",
  excerpt:
    "Guardiana de ríos y lagunas que recuerda el pacto entre las comunidades y la corriente.",
  region: "Pacífico",
  community: "Tradición oral",
  motif: "agua",
  imageUrl: "/samples/pacifico.jpg",
};

/**
 * Portada. Reúne en una sola pieza lo que antes eran tres bloques sueltos:
 * la obra a sangre, el H1 enterrado debajo y el buscador huérfano. El mito
 * de portada aparece aquí como crédito de la obra, no como tarjeta — así deja
 * de repetirse en "Selección de hoy" dos pantallas más abajo.
 */
function CoverSection({ hero, lead }) {
  return (
    <section className="relative isolate overflow-hidden bg-[rgb(var(--atlas-night))] text-white">
      {lead?.imageUrl ? (
        <Image
          src={lead.imageUrl}
          alt=""
          fill
          // Relación variable: el recorte lo decide `object-position`, no un
          // aspect-ratio fijo que en móvil comía el 70% del ancho de la obra.
          sizes="(max-width: 900px) 140vh, 100vw"
          quality={72}
          priority
          fetchPriority="high"
          className="object-cover object-[50%_35%]"
        />
      ) : null}
      <span
        className="atlas-scrim-cover pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <Container
        size="atlas"
        // Más alta en móvil: con 36rem el bloque de texto llegaba al 88% de la
        // sección y el rótulo superior caía donde el scrim ya es débil.
        className="atlas-on-image relative flex min-h-[42rem] flex-col justify-end pb-10 pt-24 md:min-h-[40rem] md:pb-12 md:pt-32 lg:min-h-[44rem]"
      >
        <div className="max-w-3xl">
          <p className="atlas-kicker !text-white">
            Archivo vivo de la tradición oral
          </p>
          <h1 className="atlas-h1 mt-4 !text-white">
            Las historias que Colombia{" "}
            <span className="font-editorial font-semibold italic text-ember-400">
              se cuenta a sí misma
            </span>
          </h1>
          {hero?.description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {hero.description}
            </p>
          ) : null}
        </div>

        <div className="mt-8 flex flex-col gap-5 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-10">
          <SearchBox
            size="lg"
            placeholder="Buscar un mito, región o tema…"
            className="w-full md:max-w-xl"
          />
          {lead?.slug ? (
            <Link
              href={`/mitos/${lead.slug}`}
              className="group shrink-0 text-left md:text-right"
            >
              <span className="atlas-kicker block !text-white">
                Portada de hoy
              </span>
              <span className="atlas-title-sm mt-1 block !text-white transition-colors group-hover:text-ember-400">
                {lead.title}
                <Icon
                  name="arrow-right"
                  size={16}
                  className="mc-arrow ml-2 inline-block align-middle"
                />
              </span>
              {[lead.region, lead.community].filter(Boolean).length ? (
                <span className="atlas-kicker mt-1 block !text-white">
                  {[lead.region, lead.community].filter(Boolean).join(" · ")}
                </span>
              ) : null}
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/**
 * Ruta destacada a sangre completa. El texto vive dentro de un Container para
 * que arranque en la misma columna que el resto de la página; antes usaba
 * `p-12` y quedaba desalineado 16px respecto a todas las demás secciones.
 */
function RouteFeature({ route, fallbackMyth }) {
  if (!route) return null;
  const imageUrl = route.imageUrl || fallbackMyth?.imageUrl;
  return (
    <Link
      href={route.href}
      className="group relative block overflow-hidden bg-[rgb(var(--atlas-night))]"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt=""
          fill
          // En móvil la banda mide 390x416: con `100vw` Next servía una fuente
          // de 390x219 y object-cover la ampliaba 1,9x para cubrir el alto.
          sizes="(max-width: 900px) 190vw, 100vw"
          className="atlas-image-zoom object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center opacity-25">
          <Motif name={route.motif || "agua"} size={260} />
        </span>
      )}
      <span
        className="atlas-scrim-cover pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <Container
        size="atlas"
        className="atlas-on-image relative flex min-h-[26rem] flex-col justify-end py-14 text-white md:min-h-[32rem] md:py-20"
      >
        <span className="atlas-kicker !text-white">
          Historias unidas por un mismo paisaje
        </span>
        <h2 className="atlas-title-xl mt-4 max-w-3xl !text-white">
          {route.title}
        </h2>
        {route.description ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
            {route.description}
          </p>
        ) : null}
        <span className="atlas-link-invert mt-6">
          Recorrer esta ruta
          <Icon name="arrow-right" size={17} className="mc-arrow" />
        </span>
      </Container>
    </Link>
  );
}

function MapFeature({ myth }) {
  return (
    <Link
      href="/mapa"
      className="group grid overflow-hidden bg-[rgb(var(--atlas-night))] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
    >
      <span className="relative block min-h-[16rem] lg:min-h-[24rem]">
        {myth?.imageUrl ? (
          <Image
            src={myth.imageUrl}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="atlas-image-zoom object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center opacity-25">
            <Motif name="montana" size={200} />
          </span>
        )}
        <span
          className="pointer-events-none absolute inset-0 bg-[rgb(var(--atlas-night))]/25"
          aria-hidden="true"
        />
      </span>
      <span className="flex flex-col justify-center gap-5 p-8 text-white md:p-12">
        <span className="atlas-kicker !text-ember-400">Mapa vivo</span>
        <span className="atlas-title-lg block !text-white">
          Cada punto es una historia
        </span>
        <span className="max-w-md text-base leading-relaxed text-white/80">
          Busca por región o comunidad y descubre qué relatos habitan cerca de
          un río, una montaña o una ciudad.
        </span>
        <span className="atlas-link-invert">
          Abrir el mapa
          <Icon name="arrow-right" size={17} className="mc-arrow" />
        </span>
      </span>
    </Link>
  );
}

/**
 * Sala del oráculo. Muestra el arte real de cada carta (las 78 lo tienen);
 * antes pintaba un medallón genérico con el motivo del mito y dos de las tres
 * cartas acababan compartiendo icono. Sin rotación estática: el abanico de
 * ±3° hacía que la tercera carta se saliera del contenedor y que el aire
 * entre ellas cayera de 12px a 4px.
 */
function OracleSection({ tarot = [] }) {
  if (!tarot.length) return null;
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--atlas-night))] text-white">
      <Motif
        name="luna"
        size={420}
        className="pointer-events-none absolute -right-20 -top-24 opacity-[0.08]"
        aria-hidden="true"
      />
      <Container
        size="atlas"
        className="atlas-section-y relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16"
      >
        <div>
          <p className="atlas-kicker !text-ember-400">Pregunta al oráculo</p>
          <h2 className="atlas-section-heading mt-4 !text-white">
            ¿Qué historia necesita encontrarte hoy?
          </h2>
          <span className="atlas-rule !bg-ember-500" />
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
            Cruza el archivo desde sus símbolos. Cada carta abre un relato y una
            forma distinta de mirar el territorio.
          </p>
          <Link href="/tarot" className="atlas-link-invert mt-7">
            Consultar el oráculo
            <Icon name="arrow-right" size={17} className="mc-arrow" />
          </Link>
        </div>

        {/* El rótulo va DEBAJO de la carta: varias ilustraciones ya llevan el
            nombre impreso y el sobreimpreso lo duplicaba encima. Sin scrim,
            además, la obra se ve completa. */}
        <ul className="grid grid-cols-3 gap-3 sm:gap-5">
          {tarot.slice(0, 3).map((card) => (
            <li key={card.card_name}>
              <Link
                href={card.myth_slug ? `/mitos/${card.myth_slug}` : "/tarot"}
                className="group block transition-transform duration-500 ease-editorial hover:-translate-y-1.5"
              >
                <span className="relative block aspect-[2/3] overflow-hidden border border-ember-500/45 bg-black/40">
                  {card.imageUrl ? (
                    <Image
                      src={card.imageUrl}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 30vw, (max-width: 1024px) 28vw, 16vw"
                      className="atlas-image-zoom object-cover"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Motif name={card.motif || "luna"} size={64} />
                    </span>
                  )}
                </span>
                {/* Solo el nombre: la obra ya lleva impresos el palo y el
                    numeral, pero a 110px de ancho en móvil no se leen — y el
                    texto de una imagen no existe para un lector de pantalla. */}
                <span className="atlas-title-sm mt-3 block text-center !text-white transition-colors group-hover:text-ember-400">
                  {card.card_name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function ClosingSection({ totalMyths }) {
  return (
    <Container size="atlas" className="atlas-section-y">
      <div className="border-t border-line-200 pt-10 text-center md:pt-14">
        <p className="atlas-kicker">El archivo continúa</p>
        <p className="atlas-title-lg mx-auto mt-4 max-w-3xl">
          La memoria no termina en una selección.{" "}
          {totalMyths ? (
            <>
              Quedan{" "}
              <span className="atlas-figure text-jungle-700">{totalMyths}</span>{" "}
              relatos por recorrer.
            </>
          ) : (
            "Quedan muchos relatos por recorrer."
          )}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link href="/mitos" className="atlas-link">
            Abrir el archivo completo
            <Icon name="arrow-right" size={17} className="mc-arrow" />
          </Link>
          <Link href="/rutas" className="atlas-link">
            Explorar las rutas
            <Icon name="arrow-right" size={17} className="mc-arrow" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export function HomeTemplate({
  hero,
  lead = DEFAULT_LEAD,
  featured = [],
  regions = [],
  routes = [],
  tarot = [],
  totalMyths,
}) {
  // Reparto sin solapamientos: cada sección consume su propio tramo del feed.
  // `lead` no entra: vive solo en la portada.
  const feed = featured.filter(Boolean);
  let cursor = 0;
  const take = (n) => {
    const slice = feed.slice(cursor, cursor + n);
    cursor += slice.length;
    return slice;
  };

  const selection = take(7);
  const communityStories = take(5);
  const creatures = take(8);
  const route = routes[0];

  return (
    <>
      <Header active="/" />
      <main id="contenido" className="overflow-x-clip bg-paper">
        <CoverSection hero={hero} lead={lead} />

        <Container size="atlas" className="atlas-section-y">
          <AtlasSectionHeader
            title="Selección de hoy"
            description="Una entrada distinta al archivo cada día, entre relatos con obra propia."
            actionHref="/mitos"
            actionLabel="Ver todos los mitos"
          />
          <SelectionMosaic myths={selection} />
        </Container>

        <section className="atlas-section-y border-y border-line-100 bg-mist-50">
          <Container size="atlas">
            <AtlasSectionHeader
              title="Recorrer por territorio"
              description="Cada paisaje cambia la voz, los seres y los pactos de sus relatos."
              actionHref="/regiones"
              actionLabel="Ver todas las regiones"
            />
            <TerritoryStrip regions={regions} />
          </Container>
        </section>

        <Container size="atlas" className="atlas-section-y">
          <AtlasSectionHeader
            title="Una comunidad, muchas voces"
            description="Relatos que sobreviven porque una comunidad los cuenta, los transforma y los comparte."
            actionHref="/comunidades"
            actionLabel="Explorar comunidades"
          />
          <EditorialMythRow myths={communityStories} reverse />
        </Container>

        <section>
          <RouteFeature route={route} fallbackMyth={selection[0]} />
        </section>

        <section className="atlas-section-y border-y border-line-100 bg-mist-50">
          <Container size="atlas">
            <AtlasSectionHeader
              title="Criaturas y guardianes"
              description="Seres que custodian ríos, selvas, caminos y memorias."
              actionHref="/categorias"
              actionLabel="Explorar categorías"
            />
            <PortraitRail
              myths={creatures}
              label="Criaturas y guardianes: galería desplazable"
            />
          </Container>
        </section>

        <Container size="atlas" className="atlas-section-y">
          <AtlasSectionHeader
            title="El territorio también cuenta"
            description="Abre el mapa para encontrar las historias desde el lugar donde fueron ubicadas."
            actionHref="/mapa"
            actionLabel="Explorar el mapa"
          />
          <MapFeature myth={communityStories[0] || selection[1]} />
        </Container>

        <OracleSection tarot={tarot} />

        <ClosingSection totalMyths={totalMyths} />
      </main>
    </>
  );
}
