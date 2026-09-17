import Link from "next/link";
import { Icon, ImageFrame } from "../atoms";
import { cn } from "../../lib/utils";
import styles from "./rutas.module.css";

/**
 * La ficha de una ruta en un índice.
 *
 * Antes las rutas se listaban como bandas de 24rem de alto con una foto de
 * fondo al 32% de opacidad: con nueve ya era una página larguísima y con
 * diecinueve no se podía comparar una ruta con otra. Aquí la obra va entera y
 * arriba, y debajo va lo que permite escoger —la idea en una línea, cuántos
 * relatos y de qué territorios—, que es lo que una banda de fondo no dejaba
 * leer.
 *
 * Es la misma familia que el pliego de la portada (obra + rótulo + filo de
 * oro), pero al revés: allá manda la imagen y el texto va encima; aquí manda
 * la comparación y el texto va sobre papel.
 */

const MOTIF_BY_ACCENT = {
  river: "agua",
  jungle: "hoja",
  ember: "sol",
  ink: "luna",
};

export function RoutePlate({
  slug,
  index,
  title,
  detail,
  tone,
  accent = "river",
  imageUrl,
  mythCount = 0,
  regions = [],
  priority = false,
  sizes = "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 31vw",
}) {
  const folio = Number.isFinite(index) ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      href={`/rutas/${slug}`}
      className={cn(
        styles.card,
        "group relative flex h-full flex-col overflow-hidden border border-line-200 bg-paper"
      )}
    >
      <span className={styles.thread} aria-hidden="true" />
      <ImageFrame
        src={imageUrl}
        alt=""
        ratio="16 / 9"
        sizes={sizes}
        /* `images.qualities` de next.config.js es lista blanca: 68 · 75 · 90. */
        quality={68}
        priority={priority}
        placeholderMotif={MOTIF_BY_ACCENT[accent] || "hoja"}
        placeholderSize={72}
        className="rounded-none border-0"
        imgClassName="atlas-image-zoom object-cover"
      />

      <span className="flex flex-1 flex-col border-t border-line-200 p-5 md:p-6">
        <span className="atlas-kicker">
          {folio ? `Ruta ${folio}` : "Ruta"}
          {tone ? ` · ${tone}` : ""}
        </span>
        <span className="atlas-title-md mt-2.5 block">{title}</span>
        {detail ? (
          <span className="mt-3 block text-[0.9375rem] leading-[1.6] text-ink-700">
            {detail}
          </span>
        ) : null}

        <span className="mt-auto flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-6">
          <span className="atlas-figure text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-jungle-700">
            {mythCount} {mythCount === 1 ? "relato" : "relatos"}
          </span>
          {regions.length ? (
            <span className="text-[0.8125rem] leading-[1.5] text-ink-500">
              {regions.join(" · ")}
            </span>
          ) : null}
        </span>

        <span className="atlas-link mt-5">
          Recorrer la ruta
          <Icon name="arrow-right" size={17} className="mc-arrow" />
        </span>
      </span>
    </Link>
  );
}
