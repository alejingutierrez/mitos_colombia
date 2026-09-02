import Link from "next/link";
import { getImageAspect } from "../../lib/myth-images";
import { Container, ImageFrame, Motif } from "../atoms";

/**
 * Template · MythHero
 * Portada de la interna del mito. Una sola sección para los dos tramos: hay
 * un único h1 en el documento (el audit de indexabilidad exige exactamente
 * uno) y sólo cambian la obra, la altura y la posición del texto.
 *
 * Móvil — la obra manda. Se usa la vertical del archivo a sangre completa y la
 * altura de la portada ES la altura natural de la pieza, así que no queda ni
 * una banda muerta a los lados ni un hueco debajo. Lo que sobra de pantalla lo
 * ocupa la entrada del artículo (`MythIntroMobile`), que además delata que hay
 * más abajo.
 *
 *   --avail  alto libre = pantalla − header (4rem)
 *   --art    alto REAL de la obra a ancho completo (2:3 ⇒ 150vw, 9:16 ⇒ 177,78vw)
 *   --peek   mínimo de artículo asomando, para que no quede una rendija
 *
 *   alto = min(--avail, max(--art, 2·--art + --peek − --avail))
 *
 * Con holgura (iPhone 15: 788 libres, obra 589) gana `--art`: encaje exacto,
 * cero recorte, 199px de artículo asomando. Cuando la obra casi llena la
 * pantalla y sólo dejaría una rendija (iPhone SE: 603 libres, obra 562 ⇒ 41px)
 * gana el segundo término, la portada toma todo el alto y `cover` recorta ~7%
 * por los costados en vez de dejar el sobrante colgando. Los dos ejemplos son
 * de una obra 2:3; con una 9:16 el mismo iPhone 15 mide 698 de obra, la
 * portada se queda en 737 y el recorte cae del 15,6 % (cuando se le imponía
 * 2:3 a todo) al 5,3 %, y por los costados.
 *
 * Escritorio — sin cambios: la apaisada llena la ventana, scrim suave y el
 * texto apoyado abajo a la izquierda.
 */

// El grueso de las verticales del archivo es 1024×1536 (`IMAGE_PRESETS.vertical`),
// o sea 2:3 — no 9:16 —, y es el respaldo cuando no conocemos la medida real.
// Si un mito sólo tiene apaisada, 4:5 recorta menos que forzarla al retrato
// completo.
const PORTRAIT_ART = "150vw";
const FALLBACK_ART = "125vw";
// 1:2. Más allá la obra no cabe en ninguna pantalla y el segundo término de la
// fórmula dejaría de significar nada.
const MAX_ART_VW = 200;

/**
 * Alto de la obra a ancho completo, medido y no supuesto.
 *
 * `PORTRAIT_ART` daba 2:3 a TODAS las verticales, pero 207 de las 596 son 9:16
 * (177,78vw): a esas la portada les recortaba el 15,6 % por arriba y por abajo
 * con `object-cover`. Con la medida real la caja es la de la obra y el recorte
 * desaparece salvo que la pantalla no dé para más, que es justo lo que decide
 * la fórmula de abajo.
 *
 * Se mide en el servidor —esta plantilla no es un componente de cliente—, así
 * que el mapa de dimensiones no viaja al navegador: sólo el número resultante.
 */
function mobileArtHeight(verticalImageUrl) {
  if (!verticalImageUrl) return FALLBACK_ART;
  const aspect = getImageAspect(verticalImageUrl);
  if (!aspect || !(aspect.ratio > 0)) return PORTRAIT_ART;
  // La ranura vertical con una obra apaisada dentro: no es una portada de
  // retrato y forzarla a 2:3 sería recortarle media escena.
  if (aspect.ratio >= 1) return FALLBACK_ART;
  const vw = Math.min(MAX_ART_VW, Math.round((aspect.h / aspect.w) * 10000) / 100);
  return `${vw}vw`;
}

const isLongTitle = (title) => String(title || "").length > 26;

export function MythHero({ myth }) {
  const mobileSrc = myth.verticalImageUrl || myth.imageUrl;
  const desktopSrc = myth.imageUrl || myth.verticalImageUrl;
  const long = isLongTitle(myth.title);

  return (
    <section
      className="relative w-full overflow-hidden bg-[rgb(var(--atlas-night))] md:h-auto md:min-h-[calc(100svh-4rem)]"
      style={{
        "--avail": "calc(100svh - 4rem)",
        "--art": mobileArtHeight(myth.verticalImageUrl),
        "--peek": "8rem",
        height:
          "min(var(--avail), max(var(--art), calc(2 * var(--art) + var(--peek) - var(--avail))))",
      }}
    >
      {/* Una sola imagen con dos fuentes (`<picture>` con art direction): en
          móvil la vertical, en escritorio la apaisada. Con dos elementos y el
          otro oculto por CSS el navegador se bajaría las dos —`display:none`
          no lo impide— y taparlo con un píxel transparente deja la portada en
          blanco al rotar el teléfono, porque al cruzar el breakpoint no
          reevalúa el `<source>` ya resuelto. Con una sola imagen no hay
          descarga de más ni estado vacío posible. */}
      {mobileSrc ? (
        <ImageFrame
          src={desktopSrc}
          mobileSrc={mobileSrc}
          alt={myth.title}
          ratio={null}
          priority
          sizes="100vw"
          mobileSizes="100vw"
          className="absolute inset-0 rounded-none border-0 bg-transparent"
          imgClassName="object-cover object-center"
          data-image-role="cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center opacity-25">
          <Motif name={myth.motif} size={320} />
        </span>
      )}

      {/* Móvil: cartela en degradado largo, no barra opaca — la obra se apaga
          hacia el pie y el halo de `atlas-on-image` hace el resto.
          Escritorio: el scrim de siempre, que nunca pasa del 15%. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[15rem] bg-gradient-to-t from-[rgb(var(--atlas-night)/0.94)] via-[rgb(var(--atlas-night)/0.55)] to-transparent md:hidden"
      />
      <span className="atlas-scrim-myth pointer-events-none absolute inset-0 hidden md:block" />

      <Container
        size="atlas"
        // `md:relative` y no `static`: las obras van posicionadas y pintarían
        // encima de un contenedor sin posicionar, tapando el título.
        className="atlas-on-image absolute inset-x-0 bottom-0 pb-[calc(1.15rem+env(safe-area-inset-bottom))] pt-4 text-white md:relative md:flex md:min-h-[calc(100svh-4rem)] md:items-end md:py-8 md:pb-14 md:pt-24"
      >
        <div className="max-w-3xl">
          <p className="atlas-kicker text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/85 md:text-xs md:tracking-[0.18em] md:text-white/75">
            {[myth.region, myth.community].filter(Boolean).join(" · ")}
          </p>
          <h1
            className={`mt-1.5 font-editorial font-semibold tracking-[-0.03em] !text-white md:mt-4 md:tracking-[-0.035em] ${
              long
                ? "!text-[1.5rem] !leading-[1.06]"
                : "!text-[2rem] !leading-[0.96]"
            } md:!text-[6.4rem] md:!leading-[0.92]`}
          >
            {myth.title}
          </h1>
          {/* En móvil el resumen y la llamada viven en `MythIntroMobile`, justo
              debajo de la portada: dentro del hero le comían la obra. */}
          {myth.excerpt ? (
            <p className="mt-5 hidden max-w-2xl text-base leading-relaxed text-white/85 md:block">
              {myth.excerpt}
            </p>
          ) : null}
          <Link
            href="#relato"
            className="mt-6 hidden min-h-11 items-center gap-2 border-b border-ember-500 text-sm font-semibold text-white md:inline-flex"
          >
            Leer el relato
          </Link>
        </div>
      </Container>
    </section>
  );
}

/**
 * Entrada móvil: lo que asoma bajo la portada. Lleva el resumen —que antes
 * competía con la obra dentro del hero— y la llamada al relato.
 */
export function MythIntroMobile({ myth }) {
  return (
    <Container size="atlas" className="pb-2 pt-5 md:hidden">
      {myth.excerpt ? (
        <p className="text-[1rem] leading-relaxed text-ink-700">{myth.excerpt}</p>
      ) : null}
      <Link
        href="#relato"
        className="mt-4 inline-flex min-h-11 items-center gap-2 border-b border-ember-500 text-sm font-semibold text-jungle-700"
      >
        Leer el relato
      </Link>
    </Container>
  );
}
