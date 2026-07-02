import Image from "next/image";
import { cn } from "../../lib/utils";

/**
 * Atom · Motif
 * Ícono-motivo decorativo (line-art verde selva) generado con gpt-image-2.
 * Los assets viven en /public/motifs/<name>-<px>.png en varios tamaños.
 * Siempre se usa "pelado" (sin caja/fondo de color detrás).
 */

const ASSET_SIZES = [32, 48, 64, 96, 128, 256, 512, 1024];

/**
 * Elige un asset ~2× el tamaño de despliegue para que el ícono se vea nítido
 * en pantallas de alta densidad (retina/2×), donde servir el PNG a 1:1 se ve borroso.
 */
function pickAsset(size) {
  const target = size * 2;
  return ASSET_SIZES.find((s) => s >= target) ?? ASSET_SIZES[ASSET_SIZES.length - 1];
}

export function Motif({ name = "jaguar", size = 56, alt = "", className, style, ...props }) {
  const asset = pickAsset(size);
  return (
    <Image
      src={`/motifs/${name}-${asset}.png`}
      width={size}
      height={size}
      quality={90}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      className={cn("inline-block select-none", className)}
      // Bloquea el tamaño para que nunca se deforme dentro de un flex/grid (evita el estiramiento vertical).
      style={{ width: size, height: size, ...style }}
      {...props}
    />
  );
}
