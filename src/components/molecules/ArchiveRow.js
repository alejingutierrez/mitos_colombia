import Link from "next/link";
import { cn } from "../../lib/utils";
import { Icon } from "../atoms/Icon";
import { ImageFrame } from "../atoms/ImageFrame";
import { getMythImage } from "../../lib/myth-images";

/**
 * Molécula · ArchiveRow — el renglón del archivo.
 *
 * Una sola fila para los dos listados que antes la repetían: el archivo
 * completo (`/mitos`) y el explorador de una categoría (`FilterableArchive`).
 * Eran dos copias con medidas distintas (104px y 88px de miniatura) y con la
 * numeración calculada de forma distinta en cada una; ahora el folio llega por
 * props y la obra se mide en un solo lugar.
 *
 * ── La miniatura ──────────────────────────────────────────────────────────
 * Antes era un recuadro 4:3 de 104px de ancho **en todas las pantallas**: en
 * un monitor de 1440px la obra medía 104×78px mientras el resto del renglón
 * respiraba. Aquí la imagen NO tiene proporción propia: ocupa el alto entero
 * del renglón —bordes incluidos, sin el aire vertical que la encogía— y crece
 * a lo ancho con la pantalla. El alto lo fija la pista de la retícula
 * (`grid-rows-[minmax(…)]`), así que la obra puede triplicar su área sin que
 * el renglón crezca un píxel:
 *
 *     móvil   112 × 104  (antes 104 × 78 → +44 %)
 *     ≥640px  144 × 104            → +85 %
 *     ≥1024px 192 × 110            → +160 %
 *     ≥1280px 224 × 110            → +204 %
 *
 * El renglón mide 105px de alto en móvil y 111px desde `lg` — exactamente los
 * 111px que medía antes (16+16 de aire vertical, 78 de miniatura y el filo),
 * ni un píxel más.
 *
 * ── La franja ancha ───────────────────────────────────────────────────────
 * Con `showExcerpt` y a partir de 1280px aparece una quinta columna con el
 * resumen. Va AL LADO del título, nunca debajo: es la única forma de usar el
 * ancho sobrante sin añadir altura.
 */

/*
 * La retícula del renglón se EXPORTA porque el esqueleto de carga de `/mitos`
 * la necesita idéntica. Cuando estaban escritas dos veces se separaron sin que
 * nadie lo notara —el hueco medía 7,25rem en el esqueleto y 6,875rem en el
 * renglón real, así que el índice daba un salto de 6px al llegar— y el
 * esqueleto además se quedó en tres columnas cuando el renglón ya tenía cuatro
 * (cinco desde 1280px). Es el mismo defecto que este componente vino a cerrar.
 */
export const ARCHIVE_ROW_ROWS =
  "grid-rows-[minmax(6.5rem,auto)] lg:grid-rows-[minmax(6.875rem,auto)]";

/* Cuatro columnas: folio · obra · título · flecha. */
export const GRID_COMPACT =
  "grid-cols-[2.25rem_7rem_minmax(0,1fr)_auto] sm:grid-cols-[2.5rem_9rem_minmax(0,1fr)_auto] lg:grid-cols-[3rem_12rem_minmax(0,1fr)_auto]";

/* Igual, más la columna de resumen a partir de 1280px. El título se queda con
   el `1fr` y el resumen con una medida tope: al revés, el resumen acaparaba el
   ancho sobrante y el nombre del relato —que es lo que se viene a leer— se
   partía en dos líneas antes que él. */
export const GRID_WIDE =
  "grid-cols-[2.25rem_7rem_minmax(0,1fr)_auto] sm:grid-cols-[2.5rem_9rem_minmax(0,1fr)_auto] lg:grid-cols-[3rem_12rem_minmax(0,1fr)_auto] xl:grid-cols-[3rem_14rem_minmax(0,1fr)_minmax(0,24rem)_auto]";

/* Los anchos declarados arriba, para que el optimizador no baje un máster de
   2200px y lo pinte en 112. */
const THUMB_SIZES =
  "(min-width: 1280px) 224px, (min-width: 1024px) 192px, (min-width: 640px) 144px, 112px";

export function ArchiveRow({
  myth,
  folio,
  showExcerpt = false,
  motif = "jaguar",
  className,
}) {
  if (!myth || !myth.slug) return null;

  const meta = [myth.region, myth.community].filter(Boolean).join(" · ");
  const excerpt = showExcerpt ? String(myth.excerpt || "").trim() : "";

  return (
    <Link
      href={`/mitos/${myth.slug}`}
      className={cn(
        "group grid items-stretch gap-x-4 border-b border-line-100 transition-colors duration-200 ease-editorial hover:bg-mist-50 focus-visible:bg-mist-50 focus-visible:outline-none motion-reduce:transition-none sm:gap-x-5 lg:gap-x-6",
        ARCHIVE_ROW_ROWS,
        showExcerpt ? GRID_WIDE : GRID_COMPACT,
        className
      )}
    >
      <span className="atlas-figure self-center font-display text-[13px] leading-none text-ink-500 sm:text-sm">
        {folio}
      </span>

      <ImageFrame
        src={getMythImage(myth, "landscape")}
        alt=""
        /* Sin proporción: el marco toma el alto del renglón y crece a lo ancho. */
        ratio={null}
        sizes={THUMB_SIZES}
        quality={68}
        placeholderMotif={myth.motif || motif}
        placeholderSize={48}
        className="self-stretch rounded-none border-0 bg-mist-100"
        imgClassName="atlas-image-zoom object-cover motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      <span className="min-w-0 self-center py-3">
        {/* `line-clamp-2` ya declara su propio `display`: añadirle `block`
            deja la cortadura a merced del orden del CSS. */}
        <span className="atlas-title-sm line-clamp-2 text-ink-900 transition-colors duration-200 group-hover:text-jungle-700 motion-reduce:transition-none">
          {myth.title}
        </span>
        {meta ? (
          <span className="atlas-kicker mt-2 block truncate text-ink-500">
            {meta}
          </span>
        ) : null}
      </span>

      {/* La celda se dibuja aunque el relato no tenga resumen: si faltara, la
          flecha caería en su columna y el renglón quedaría descuadrado. */}
      {showExcerpt ? (
        <span className="hidden self-center text-sm leading-relaxed text-ink-700 xl:line-clamp-2">
          {excerpt}
        </span>
      ) : null}

      <Icon
        name="arrow-right"
        size={18}
        className="mc-arrow self-center text-jungle-700"
      />
    </Link>
  );
}
