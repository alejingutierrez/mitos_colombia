import Link from "next/link";
import { Icon, ImageFrame, Motif } from "../atoms";
import { cn } from "../../lib/utils";
import styles from "./home-surfaces.module.css";

/**
 * Home · «Las otras cartografías».
 *
 * Antes era el bloque menos gráfico del sitio: ocho fichas de texto con borde,
 * justo en la sección que promete un conjunto de viajes. Cada ruta tiene obra
 * real —horizontal y vertical— y no se estaba usando ninguna.
 *
 * Ahora es un pliego de láminas. La primera ruta del día ocupa una lámina de
 * 2×2 y las otras siete van en placas cuadradas; la celda que sobra es la
 * salida al índice, así la retícula cierra exacta:
 *
 *   lámina (4 celdas) + 7 placas + salida = 12 = 4 columnas × 3 filas
 *
 * El orden lo baraja el servidor con la semilla del día, de modo que la lámina
 * grande rota: ninguna ruta queda ascendida para siempre. En móvil la retícula
 * cae a dos columnas y la lámina cruza el ancho completo — sin carril: las ocho
 * rutas tienen que verse sin descubrir un scroll lateral.
 */

function Arrow() {
  return <Icon name="arrow-right" size={17} className="mc-arrow" />;
}

/* Dos rutas pueden resolver su lámina al MISMO mito: «El diablo del puente del
   Común» le sirve hoy a `criaturas-nocturnas` y a `fronteras-y-caminos` a la
   vez. Con fichas de texto eso no se notaba; con obra son dos placas idénticas
   pegadas. Cada mito del archivo tiene DOS obras distintas —apaisada y
   vertical—, así que la segunda ruta se queda con la otra. Si tampoco queda
   libre se repite: mejor repetida que muda. */
function takeArt(route, lead, taken) {
  /* La lámina grande es apaisada; las placas son cuadradas y un recorte
     cuadrado conserva mejor la figura si parte del vertical. */
  const options = (
    lead
      ? [route.imageUrl, route.portraitImageUrl]
      : [route.portraitImageUrl, route.imageUrl]
  ).filter(Boolean);
  const art = options.find((url) => !taken.has(url)) || options[0] || null;
  if (art) taken.add(art);
  /* La lámina sirve las dos versiones (vertical en teléfono), así que reserva
     las dos: si no, en móvil volvería a chocar con una placa. */
  const mobileArt = lead ? route.portraitImageUrl || null : null;
  if (mobileArt) taken.add(mobileArt);
  return { art, mobileArt };
}

function RoutePlate({ route, art, mobileArt, lead = false }) {
  if (!route) return null;

  return (
    <Link
      href={`/rutas/${route.slug}`}
      className={cn(
        styles.plate,
        "group relative block overflow-hidden bg-[rgb(var(--atlas-night))]",
        /* La lámina es cuadrada en teléfono —el rótulo, el sumario y el enlace
           necesitan alto y en 16:9 se salían por arriba— y a partir de `md`
           deja de tener proporción propia: la fija la retícula (2×2). */
        lead
          ? "aspect-square sm:aspect-[4/3] md:aspect-auto md:h-full"
          : "aspect-square"
      )}
    >
      <ImageFrame
        src={art}
        mobileSrc={mobileArt}
        alt=""
        ratio={null}
        sizes={
          lead
            ? "(max-width: 767px) 100vw, 46vw"
            : "(max-width: 767px) 46vw, 23vw"
        }
        /* Sólo 68 · 75 · 90 están declarados en `images.qualities`; cualquier
           otro valor es una calidad que Next no genera. */
        quality={lead ? 75 : 68}
        placeholderMotif={lead ? "montana" : "hoja"}
        className="absolute inset-0 h-full w-full rounded-none border-0"
        imgClassName="atlas-image-zoom object-cover"
      />
      <span
        className={cn(
          "pointer-events-none absolute inset-0",
          lead ? "atlas-scrim-cover" : "atlas-scrim"
        )}
        aria-hidden="true"
      />
      <span className={styles.thread} aria-hidden="true" />

      <span
        className={cn(
          "atlas-on-image absolute inset-0 flex flex-col justify-end text-white",
          lead ? "p-4 md:p-8" : "p-3 md:p-4"
        )}
      >
        <span className="atlas-kicker !text-ember-400">
          Ruta {route.index}
        </span>
        <span
          className={cn(
            "mt-2 block !text-white",
            lead ? "atlas-title-lg max-w-[16ch] md:mt-3" : "atlas-title-sm"
          )}
        >
          {route.title}
        </span>
        {/* El sumario sólo cabe donde hay alto: entero en la lámina, y en las
            placas a partir de `md` —en teléfono la placa mide 163px y el
            rótulo con el título ya la llenan—. */}
        {route.detail ? (
          <span
            className={cn(
              "leading-relaxed text-white/85",
              lead
                ? "mt-3 line-clamp-2 max-w-[42ch] text-sm"
                : "mt-2 hidden text-[13px] md:line-clamp-2"
            )}
          >
            {route.detail}
          </span>
        ) : null}
        {lead ? (
          <span className="atlas-link-invert mt-4 md:mt-6">
            Recorrer esta ruta
            <Arrow />
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function RouteCards({ routes = [] }) {
  if (!routes.length) return null;
  const taken = new Set();
  const plates = routes.map((route, index) => ({
    route,
    lead: index === 0,
    ...takeArt(route, index === 0, taken),
  }));
  const [lead, ...rest] = plates;

  return (
    <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-4">
      <li className="col-span-2 md:row-span-2">
        <RoutePlate {...lead} />
      </li>
      {rest.map((plate) => (
        <li key={plate.route.slug}>
          <RoutePlate {...plate} />
        </li>
      ))}
      <li>
        <Link
          href="/rutas"
          className={cn(
            styles.exit,
            "group relative flex aspect-square flex-col justify-between overflow-hidden border border-line-200 bg-paper p-3 md:p-4"
          )}
        >
          <span className="atlas-kicker relative">Índice</span>
          {/* Marca de agua: la celda es de papel entre ocho de obra y sin ella
              se lee como un hueco de la retícula, no como la salida. */}
          <span
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.13]"
            aria-hidden="true"
          >
            <Motif name="montana" size={112} />
          </span>
          <span className="relative">
            <span className="atlas-title-sm block">Todas las rutas</span>
            <span className="mt-2 flex items-center gap-2 text-xs font-semibold text-ink-700">
              Abrir el índice
              <Arrow />
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
}
