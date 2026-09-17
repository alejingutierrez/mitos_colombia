import Link from "next/link";
import { Container, Icon, ImageFrame } from "../atoms";

/**
 * Home · piezas sin estado.
 *
 * Todo lo que no necesita cliente vive aquí: la banda de ruta, las fichas de las
 * otras cartografías, los medallones de territorio, la banda del mapa, la nube
 * de categorías y el cierre.
 */

function Arrow() {
  return <Icon name="arrow-right" size={17} className="mc-arrow" />;
}

function relatos(count) {
  return count === 1 ? "relato" : "relatos";
}

/* Ruta destacada, a sangre completa. El texto arranca en la misma columna que
   el resto de la página: con padding propio quedaba desalineado del gutter. */
export function RouteBanner({ route }) {
  if (!route) return null;
  return (
    <Link
      href={`/rutas/${route.slug}`}
      className="group relative block overflow-hidden bg-[rgb(var(--atlas-night))]"
    >
      {route.imageUrl ? (
        <ImageFrame
          src={route.imageUrl}
          mobileSrc={route.portraitImageUrl || null}
          alt=""
          ratio={null}
          sizes="(max-width: 767px) 780px, 100vw"
          mobileSizes="100vw"
          quality={68}
          className="absolute inset-0 h-full w-full rounded-none border-0"
          imgClassName="atlas-image-zoom object-cover object-[50%_44%]"
        />
      ) : null}
      <span className="atlas-scrim-cover pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container
        size="atlas"
        className="atlas-on-image relative z-[1] flex min-h-[23rem] flex-col justify-center py-14 text-white md:min-h-[29rem] md:py-20"
      >
        <p className="atlas-kicker !text-white">
          {route.index ? `Ruta ${route.index} · ` : null}historias unidas por un
          mismo paisaje
        </p>
        <h2 className="atlas-title-xl mt-4 max-w-[14ch] !text-white">{route.title}</h2>
        {route.detail ? (
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-white/90">
            {route.detail}
          </p>
        ) : null}
        <span className="atlas-link-invert mt-6">
          Recorrer esta ruta
          <Arrow />
        </span>
      </Container>
    </Link>
  );
}

/* Las otras cartografías → RouteAtlas.js.
   Era una rejilla de fichas tipográficas: el bloque menos gráfico del sitio,
   con la obra de cada ruta sin usar. Ahora es un pliego de láminas. */
export { RouteCards } from "./RouteAtlas";

/* Territorios en medallón. En móvil van en carril horizontal: con una rejilla
   de tres columnas los dos últimos quedaban huérfanos y desalineados. */
export function TerritoryMedallions({ regions = [] }) {
  if (!regions.length) return null;
  return (
    <ul className="atlas-rail flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
      {regions.map((region) => (
        <li key={region.slug} className="w-[9.5rem] shrink-0 snap-start lg:w-auto">
          <Link href={`/regiones/${region.slug}`} className="group flex flex-col items-center text-center">
            <span className="relative block aspect-square w-full max-w-[13rem] overflow-hidden rounded-full bg-[rgb(var(--atlas-night))] shadow-[0_0_0_1px_rgb(var(--line-200)),0_0_0_6px_rgb(var(--mist-50)),0_0_0_7px_rgba(189,134,66,0.5)] transition-all duration-500 ease-editorial group-hover:-translate-y-1.5 group-hover:shadow-[0_0_0_1px_rgb(var(--line-200)),0_0_0_6px_rgb(var(--mist-50)),0_0_0_7px_rgb(var(--ember-500))]">
              <ImageFrame
                src={region.imageUrl}
                alt=""
                ratio={null}
                sizes="(max-width: 1023px) 152px, 14vw"
                quality={68}
                placeholderMotif={region.motif || "hoja"}
                className="absolute inset-0 h-full w-full rounded-full border-0"
                imgClassName="object-cover"
              />
            </span>
            <span className="atlas-title-sm mt-4 transition-colors group-hover:text-jungle-500">
              {region.title}
            </span>
            {region.count ? (
              <span className="atlas-figure mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                {region.count} {relatos(region.count)}
              </span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* El territorio como mapa. Bloque partido en noche con filo de oro: rompe la
   seguidilla de secciones claras sin repetir la mecánica de la portada. */
export function TerritoryBanner({ imageUrl, motif }) {
  return (
    <Link
      href="/mapa"
      className="group grid overflow-hidden border border-ember-500/30 bg-[#0b1a1c] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
    >
      <span className="order-2 flex flex-col justify-center gap-4 p-7 text-white md:p-12 lg:order-1">
        <span className="atlas-kicker !text-ember-400">Mapa vivo</span>
        <span className="atlas-title-lg block !text-white">
          Cada punto es una historia
        </span>
        <span className="max-w-[40ch] text-base leading-relaxed text-white/85">
          Busca por región o comunidad y descubre qué relatos habitan cerca de un
          río, una montaña o una ciudad.
        </span>
        <span className="atlas-link-invert">
          Abrir el mapa
          <Arrow />
        </span>
      </span>
      <span className="relative order-1 block min-h-[14rem] overflow-hidden lg:order-2 lg:min-h-[22rem]">
        <ImageFrame
          src={imageUrl}
          alt=""
          ratio={null}
          sizes="(max-width: 1023px) 100vw, 52vw"
          quality={68}
          placeholderMotif={motif || "montana"}
          className="absolute inset-0 h-full w-full rounded-none border-0"
          imgClassName="atlas-image-zoom object-cover"
        />
      </span>
    </Link>
  );
}

/* Los hilos del archivo → ArchiveThreads.js.
   Era una nube de etiquetas escalada por conteo: honesta pero inerte. Ahora es
   una madeja — nombre, hilo y medida teñida — con la cifra real de cada tema. */
export { CategoryCloud } from "./ArchiveThreads";

export function HomeClosing({ totalMyths }) {
  return (
    <div className="border-t border-line-200 pt-10 text-center md:pt-14">
      <p className="atlas-kicker">El archivo continúa</p>
      <p className="atlas-title-lg mx-auto mt-4 max-w-[26ch]">
        La memoria no termina en una selección.{" "}
        {totalMyths ? (
          <>
            Quedan <span className="atlas-figure text-jungle-700">{totalMyths}</span>{" "}
            relatos por recorrer.
          </>
        ) : (
          "Quedan muchos relatos por recorrer."
        )}
      </p>
      <div className="mt-7 flex flex-col items-center gap-x-9 gap-y-1 md:flex-row md:flex-wrap md:justify-center">
        <Link href="/mitos" className="atlas-link group">
          Abrir el archivo completo
          <Arrow />
        </Link>
        <Link href="/rutas" className="atlas-link group">
          Explorar las rutas
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
