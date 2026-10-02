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

/**
 * Usa un PNG monocromático como máscara para que el motivo herede `currentColor`.
 * Permite reutilizar un solo asset transparente sobre todas las paletas editoriales.
 */
export function MotifMask({
  src,
  width,
  height = width,
  alt = "",
  className,
  style,
  ...props
}) {
  if (!src) return null;
  return (
    <span
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={cn("inline-block shrink-0 select-none", className)}
      role={alt ? "img" : undefined}
      style={{
        ...(width ? { width, height } : {}),
        backgroundColor: "currentColor",
        maskImage: `url("${src}")`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        ...style,
      }}
      {...props}
    />
  );
}
