import Link from "next/link";
import { RegionExplorer } from "../organisms/RegionExplorer";
import { Container, Icon, ImageFrame } from "../atoms";
import styles from "./home-journey.module.css";

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

/* La ruta une un panel de lectura sólido con la escena a sangre. */
export function RouteBanner({ route }) {
  if (!route) return null;
  return (
    <Link href={`/rutas/${route.slug}`} className={`group ${styles.routeScene}`}>
      <div className={styles.routeSceneArt}>
        <ImageFrame
          src={route.imageUrl}
          mobileSrc={route.portraitImageUrl || null}
          alt=""
          ratio={null}
          sizes="(max-width: 767px) 100vw, 72vw"
          mobileSizes="100vw"
          quality={90}
          unoptimized mobileUnoptimized
          className="absolute inset-0 h-full w-full rounded-none border-0"
          imgClassName="atlas-image-zoom object-cover object-[50%_44%]"
        />
      </div>
      <Container size="atlas" className={styles.routeSceneCaption}>
        <div>
          <p className="atlas-kicker !text-ember-400">
            {route.index ? `Ruta ${route.index} · ` : null}historias unidas por un mismo paisaje
          </p>
          <h2 className="atlas-title-xl !text-white">{route.title}</h2>
        </div>
        <div className={styles.routeSceneDetail}>
          {route.detail ? <p>{route.detail}</p> : null}
          <span className="atlas-link-invert">Recorrer esta ruta<Arrow /></span>
        </div>
      </Container>
    </Link>
  );
}

/* Las otras cartografías → RouteAtlas.js.
   Era una rejilla de fichas tipográficas: el bloque menos gráfico del sitio,
   con la obra de cada ruta sin usar. Ahora es un pliego de láminas. */
export { RouteCards } from "./RouteAtlas";

/* Cinco ventanas continuas. Se conserva el nombre público del componente
   para no romper sus consumidores; las imágenes ya no viven en medallones. */
export function TerritoryMedallions({ regions = [] }) {
  return <Container size="atlas"><RegionExplorer regions={regions} /></Container>;
}

/* El territorio como mapa. Bloque partido en noche con filo de oro: rompe la
   seguidilla de secciones claras sin repetir la mecánica de la portada. */
export function TerritoryBanner({ imageUrl, motif }) {
  return (
    <Link
      href="/mapa"
      className="group grid overflow-hidden bg-jungle-700"
    >
      <span className="order-2 flex flex-col justify-center gap-3 p-6 text-white">
        <span className="atlas-kicker !text-ember-400">Mapa vivo</span>
        <span className="atlas-title-md block !text-white">
          Cada punto es una historia
        </span>
        <span className="max-w-[40ch] text-sm leading-relaxed text-white">
          Busca por región o comunidad y descubre qué relatos habitan cerca de un
          río, una montaña o una ciudad.
        </span>
        <span className="atlas-link-invert">
          Abrir el mapa
          <Arrow />
        </span>
      </span>
      <span className="relative order-1 block min-h-[12rem] overflow-hidden">
        <ImageFrame
          src={imageUrl}
          alt=""
          ratio={null}
          sizes="(max-width: 1023px) 100vw, 52vw"
          quality={90}
          unoptimized
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
    <div>
      <h2 className="atlas-title-lg">La memoria no termina en una selección.</h2>
      <p className="mt-4 text-sm leading-relaxed text-ink-700">
        {totalMyths ? `${totalMyths} relatos, ` : "Relatos, "}mitos y comunidades. El archivo sigue abierto para explorar, conectar y descubrir.
      </p>
      <Link href="/mitos" className="mt-6 inline-flex min-h-12 items-center gap-4 rounded-sm bg-jungle-700 px-5 py-3 text-sm font-semibold text-white hover:bg-jungle-500">Abrir el archivo completo<Arrow /></Link>
      <Link href="/rutas" className="atlas-link mt-4">Explorar las rutas<Arrow /></Link>
    </div>
  );
}
