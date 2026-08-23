import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Motif } from "../atoms/Motif";
import { getMythImage } from "../../lib/myth-images";

/**
 * Molécula · MythPlate
 * La pieza del muro: la obra vertical del mito a 4:5, con el folio y el
 * título encima. No lleva marco ni fondo propio — vive pegada a sus vecinas
 * sobre el fondo noche del muro, así que la legibilidad la dan el degradado
 * y el halo de `.atlas-on-image`, no una caja.
 *
 * El título va como texto real (no sólo `alt`): el muro sustituye al índice
 * de renglones que había antes y tiene que seguir siendo rastreable.
 */

export function MythPlate({ myth, index, motif = "jaguar", priority = false, className }) {
  const { slug, title } = myth || {};
  const src = getMythImage(myth, "portrait");
  const folio = Number.isFinite(index) ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      href={slug ? `/mitos/${slug}` : "#"}
      className={cn(
        "group relative block overflow-hidden bg-[rgb(var(--atlas-night))]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--atlas-night))]",
        className
      )}
      style={{ aspectRatio: "4 / 5" }}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          // La pieza mide ~195px en móvil (2 columnas) y ~210px en escritorio
          // (6 columnas de 1460px). Pedir más es pagar ancho de banda por
          // píxeles que nadie ve, y en un muro son decenas de imágenes.
          sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 240px"
          // 68 y no un valor más bajo porque `images.qualities` de
          // `next.config.js` es una lista blanca: [68, 75, 90].
          quality={68}
          priority={priority}
          className="atlas-image-zoom object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center opacity-20">
          <Motif name={motif} size={64} />
        </span>
      )}

      {/* Degradado propio de la pieza: sube hasta media altura porque el
          título puede ocupar tres líneas en las columnas estrechas. */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[rgba(8,18,20,0.92)] via-[rgba(8,18,20,0.34)] via-45% to-transparent"
      />

      <span className="atlas-on-image absolute inset-x-0 bottom-0 block p-3.5">
        {folio ? (
          <span className="atlas-figure block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ember-400">
            {folio}
          </span>
        ) : null}
        <span className="mt-1.5 block font-editorial text-[0.9375rem] leading-[1.18] tracking-[-0.01em] text-white">
          {title}
        </span>
      </span>
    </Link>
  );
}
