import Image from "next/image";
import { cn } from "../../lib/utils";
import { Motif } from "./Motif";

/**
 * Atom · ImageFrame
 * Contenedor de imagen con relación de aspecto fija y esquinas editoriales.
 * Si no hay `src`, muestra un placeholder sobrio con un motivo tenue.
 */

export function ImageFrame({
  src,
  alt = "",
  ratio = "4 / 3",
  // "md" | "lg": conserva `ratio` hasta ese punto y a partir de ahí llena la
  // celda. Lo usan las piezas cuya altura la fija la retícula. Siempre debe
  // quedar al menos una celda de la fila con proporción propia — es la que
  // aporta la altura de referencia.
  fillFrom = null,
  sizes = "(max-width: 768px) 100vw, 400px",
  priority = false,
  quality = 75,
  fetchPriority = priority ? "high" : undefined,
  placeholderMotif = "jaguar",
  placeholderSize = 56,
  className,
  imgClassName,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded border border-line-100 bg-mist-50",
        fillFrom === "md" && "atlas-frame-fill-md",
        fillFrom === "lg" && "atlas-frame-fill-lg",
        !fillFrom && !ratio && "h-full w-full",
        className
      )}
      style={
        fillFrom
          ? { "--atlas-ratio": ratio }
          : ratio
            ? { aspectRatio: ratio }
            : undefined
      }
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          fetchPriority={fetchPriority}
          className={cn("object-cover", imgClassName)}
        />
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
