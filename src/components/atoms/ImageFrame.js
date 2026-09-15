import Image, { getImageProps } from "next/image";
import ReactDOM from "react-dom";
import { cn } from "../../lib/utils";
import { Motif } from "./Motif";

/**
 * Atom · ImageFrame
 * Contenedor de imagen con relación de aspecto fija y esquinas editoriales.
 * Si no hay `src`, muestra un placeholder sobrio con un motivo tenue.
 *
 * Con `mobileSrc` hace art direction real: sirve otra obra por debajo de 768px
 * en vez de recortar la misma. Es lo que evita pedir una fuente enorme cuando
 * la caja es vertical y la obra apaisada (o al revés).
 */

// El corte de la art direction. Vive en una constante porque lo usan tres
// sitios —el `<source>`, y los dos `<link rel="preload">`— y si se separan el
// navegador precarga una obra y pinta la otra.
const MOBILE_MEDIA = "(max-width: 767px)";
const DESKTOP_MEDIA = "(min-width: 768px)";

export function ImageFrame({
  src,
  mobileSrc,
  alt = "",
  ratio = "4 / 3",
  // "md" | "lg": conserva `ratio` hasta ese punto y a partir de ahí llena la
  // celda. Lo usan las piezas cuya altura la fija la retícula. Siempre debe
  // quedar al menos una celda de la fila con proporción propia — es la que
  // aporta la altura de referencia.
  fillFrom = null,
  sizes = "(max-width: 768px) 100vw, 400px",
  mobileSizes = "100vw",
  priority = false,
  quality = 75,
  // Devuelve la precarga a una imagen con art direction. Es opt-in y no
  // automático con `priority` a propósito: quien rota obras en el cliente
  // (la portada del home) monta varias capas con `priority` y precargarlas
  // todas sería pedir obras que aún no se ven.
  preloadArtDirection = false,
  fetchPriority = priority ? "high" : undefined,
  placeholderMotif = "jaguar",
  placeholderSize = 56,
  className,
  imgClassName,
  ...props
}) {
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

  /*
   * Con art direction, `next/image` se queda sin precarga: su `<link>` no
   * lleva `media`, así que en un teléfono precargaría la obra de escritorio y
   * el navegador acabaría bajando las dos. Por eso abajo `priority` se apaga
   * y sólo queda `loading="eager"` —y el resultado es que la portada de las
   * 596 internas no tenía ni un `preload`, siendo la LCP de todas ellas.
   *
   * La emitimos aquí con el `media` que sí distingue las dos obras: cada
   * navegador precarga exactamente la que va a pintar. `getImageProps` da el
   * mismo `srcSet` que monta `<Image>` internamente, así que la precarga y la
   * imagen coinciden y no hay descarga doble.
   */
  if (src && priority && hasMobileArtDirection && preloadArtDirection) {
    const desktopSource = getImageProps({
      src,
      alt,
      fill: true,
      sizes,
      quality,
    }).props;
    ReactDOM.preload(mobileSource.src, {
      as: "image",
      imageSrcSet: mobileSource.srcSet,
      imageSizes: mobileSource.sizes,
      fetchPriority: "high",
      media: MOBILE_MEDIA,
    });
    ReactDOM.preload(desktopSource.src, {
      as: "image",
      imageSrcSet: desktopSource.srcSet,
      imageSizes: desktopSource.sizes,
      fetchPriority: "high",
      media: DESKTOP_MEDIA,
    });
  }

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
        <picture className="absolute inset-0 block h-full w-full">
          {mobileSource ? (
            <source
              media={MOBILE_MEDIA}
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
            loading={priority && hasMobileArtDirection ? "eager" : undefined}
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
