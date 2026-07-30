import Image, { getImageProps } from "next/image";
import { cn } from "../../lib/utils";
import { Motif } from "./Motif";

/**
 * Atom · ImageFrame
 * Contenedor de imagen con relación de aspecto fija y esquinas editoriales.
 * Si no hay `src`, muestra un placeholder sobrio con un motivo tenue.
 */

export function ImageFrame({
  src,
  mobileSrc,
  alt = "",
  ratio = "4 / 3",
  sizes = "(max-width: 768px) 100vw, 400px",
  mobileSizes = "100vw",
  priority = false,
  quality = 75,
  fetchPriority = priority ? "high" : undefined,
  placeholderMotif = "jaguar",
  placeholderSize = 56,
  className,
  imgClassName,
  ...props
}) {
  const ratioStyle = ratio ? { aspectRatio: ratio } : undefined;
  const hasMobileArtDirection = Boolean(mobileSrc && mobileSrc !== src);
  const mobileSource = hasMobileArtDirection
    ? getImageProps({
        src: mobileSrc,
        alt,
        fill: true,
        sizes: mobileSizes,
        quality,
      }).props
    : null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded border border-line-100 bg-mist-50",
        className
      )}
      style={ratioStyle}
      {...props}
    >
      {src ? (
        <picture className="absolute inset-0 block h-full w-full">
          {mobileSource ? (
            <source
              media="(max-width: 767px)"
              srcSet={mobileSource.srcSet || mobileSource.src}
              sizes={mobileSource.sizes || mobileSizes}
            />
          ) : null}
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority && !hasMobileArtDirection}
            quality={quality}
            fetchPriority={fetchPriority}
            className={cn("object-cover", imgClassName)}
          />
        </picture>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mist-50 to-mist-100">
          <Motif
            name={placeholderMotif}
            size={placeholderSize}
            className={placeholderSize >= 96 ? "opacity-20" : "opacity-15"}
          />
        </div>
      )}
    </div>
  );
}
