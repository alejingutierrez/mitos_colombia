import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Container, Icon, ImageFrame, Motif } from "../atoms";
import { getMythImage } from "../../lib/myth-images";

/**
 * Piezas editoriales del "Atlas vivo".
 *
 * Reglas del sistema que aplican a todo este archivo:
 *  · Asimovian (font-editorial/font-display) construye toda la jerarquía de
 *    títulos; Noto Sans Display resuelve lectura e interfaz.
 *  · Tallas por token — .atlas-title-{xl,lg,md,sm} y .atlas-section-heading.
 *    Nada de tamaños sueltos: la jerarquía vive en la escala, no en la pieza.
 *  · Texto sobre imagen — siempre .atlas-scrim*, nunca un gradiente ad hoc.
 *  · Los títulos de mito son <h3>: son el contenido real de la página y
 *    antes viajaban como <span> (invisibles para SEO y lectores de pantalla).
 */

function mythHref(myth) {
  return myth?.slug ? `/mitos/${myth.slug}` : "/mitos";
}

function mythMeta(myth) {
  return [myth?.region, myth?.community].filter(Boolean).join(" · ");
}

export function AtlasSectionHeader({
  title,
  description,
  actionHref,
  actionLabel,
  align = "start",
  id,
  className = "",
}) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-10",
        className
      )}
    >
      <div className={align === "center" ? "mx-auto text-center" : "max-w-2xl"}>
        <h2 id={id} className="atlas-section-heading">
          {title}
        </h2>
        <span className={`atlas-rule ${align === "center" ? "mx-auto" : ""}`} />
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            {description}
          </p>
        ) : null}
      </div>
      {actionHref && actionLabel ? (
        <Link href={actionHref} className="atlas-link group">
          {actionLabel}
          <Icon name="arrow-right" size={17} className="mc-arrow" />
        </Link>
      ) : null}
    </div>
  );
}

/**
 * Tarjeta con la imagen a sangre y el texto encima.
 * `fill` ("md" | "lg") deja que la celda de la retícula mande sobre la altura
 * a partir de ese punto. En cada fila tiene que quedar al menos una pieza con
 * proporción propia: es la que fija la altura de referencia.
 */
export function OverlayMythCard({
  myth,
  ratio = "4 / 3",
  fill = null,
  // Rol de la obra según la forma real del hueco: `landscape` para bandas y
  // tarjetas anchas, `portrait` para 3:4 y 4:5. Con `mobileImageRole` se sirve
  // otra obra por debajo de 768px en vez de recortar la misma.
  imageRole = "landscape",
  mobileImageRole,
  strictImageRole = false,
  priority = false,
  quality = 75,
  sizes,
  className = "",
  showExcerpt = true,
  titleClass = "atlas-title-lg",
  scrimClass = "atlas-scrim",
  contentClassName = "",
  headingLevel: Heading = "h3",
}) {
  if (!myth) return null;
  const meta = mythMeta(myth);
  const imageSrc = getMythImage(myth, imageRole, { fallback: !strictImageRole });
  const mobileImageSrc = mobileImageRole
    ? getMythImage(myth, mobileImageRole, { fallback: false })
    : null;
  return (
    <Link
      href={mythHref(myth)}
      className={cn(
        "group relative block overflow-hidden bg-[rgb(var(--atlas-night))]",
        fill === "md" && "md:h-full",
        fill === "lg" && "lg:h-full",
        className
      )}
    >
      <ImageFrame
        src={imageSrc}
        mobileSrc={mobileImageSrc}
        alt=""
        ratio={ratio}
        fillFrom={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholderMotif={myth.motif || "jaguar"}
        placeholderSize={160}
        className="rounded-none border-0"
        imgClassName="atlas-image-zoom object-cover"
      />
      <span
        className={cn("pointer-events-none absolute inset-0", scrimClass)}
        aria-hidden="true"
      />
      <div
        className={cn(
          "atlas-on-image absolute inset-x-0 bottom-0 p-5 text-white md:p-7",
          contentClassName
        )}
      >
        {meta ? (
          <span className="atlas-kicker block !text-white">{meta}</span>
        ) : null}
        <Heading className={cn(titleClass, "mt-2 !text-white")}>
          {myth.title}
        </Heading>
        {showExcerpt && myth.excerpt ? (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">
            {myth.excerpt}
          </p>
        ) : null}
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
          Leer este mito
          <Icon name="arrow-right" size={17} className="mc-arrow" />
        </span>
      </div>
    </Link>
  );
}

/**
 * Tarjeta compacta imagen + título.
 *
 * La celda de imagen es una caja de ancho fijo con la foto en `fill`. Antes
 * usaba un ImageFrame con `ratio="1 / 1"` y `h-full`: el aspect-ratio derivaba
 * el ANCHO de la altura de la fila, así que la imagen crecía hasta 174px dentro
 * de una columna de 112px y tapaba el título.
 */
export function CompactMythLink({ myth, imageSide = "left", className = "" }) {
  if (!myth) return null;
  const reversed = imageSide === "right";
  const meta = mythMeta(myth);
  return (
    <Link
      href={mythHref(myth)}
      className={cn(
        "group grid min-h-[7.5rem] items-stretch border border-line-100 bg-white transition-colors hover:border-line-300",
        reversed ? "grid-cols-[1fr_7rem]" : "grid-cols-[7rem_1fr]",
        className
      )}
    >
      <span
        className={cn(
          "relative block overflow-hidden bg-mist-50",
          reversed && "order-2"
        )}
      >
        {getMythImage(myth, "square") ? (
          <Image
            src={getMythImage(myth, "square")}
            alt=""
            fill
            sizes="300px"
            className="atlas-image-zoom object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center">
            <Motif
              name={myth.motif || "jaguar"}
              size={40}
              className="opacity-25"
            />
          </span>
        )}
      </span>
      <span className="flex min-w-0 flex-col justify-center gap-1.5 p-4">
        {meta ? <span className="atlas-kicker block">{meta}</span> : null}
        <h3 className="atlas-title-sm line-clamp-2 transition-colors group-hover:text-jungle-700">
          {myth.title}
        </h3>
      </span>
    </Link>
  );
}

/**
 * Mosaico de portada de sección.
 * Colocación explícita en lg para que las cuatro piezas cierren en dos filas
 * exactas; en md baja a un 6-columnas y solo debajo de 768px se apila.
 */
export function SelectionMosaic({ myths = [] }) {
  const [lead, second, third, ...rail] = myths;
  if (!lead) return null;
  return (
    <div className="grid gap-3 md:grid-cols-6 lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
      <OverlayMythCard
        myth={lead}
        ratio="4 / 5"
        fill="lg"
        imageRole="portrait"
        strictImageRole
        priority
        quality={68}
        sizes="(max-width: 767px) 800px, (max-width: 1024px) 900px, 67vw"
        className="md:col-span-3 md:row-span-2 lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-3"
        titleClass="atlas-title-lg"
      />
      <OverlayMythCard
        myth={second}
        ratio="16 / 9"
        fill="md"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
        className="md:col-span-3 lg:col-start-6 lg:col-end-10 lg:row-start-1"
        titleClass="atlas-title-md"
        showExcerpt={false}
      />
      <OverlayMythCard
        myth={third}
        ratio="16 / 9"
        fill="md"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
        className="md:col-span-3 lg:col-start-6 lg:col-end-10 lg:row-start-2"
        titleClass="atlas-title-md"
        showExcerpt={false}
      />
      <div className="grid gap-3 sm:grid-cols-2 md:col-span-6 lg:col-start-10 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:auto-rows-fr lg:grid-cols-1">
        {rail.slice(0, 4).map((myth) => (
          <CompactMythLink key={myth.slug} myth={myth} />
        ))}
      </div>
    </div>
  );
}

/**
 * Pieza destacada + índice numerado.
 * `reverse` intercambia lado Y proporción. Antes se emitían las dos clases
 * `lg:grid-cols-[...]` a la vez y ganaba la del CSS, no la del atributo: la
 * lista ocupaba la columna ancha y la imagen protagonista la estrecha.
 */
export function EditorialMythRow({ myths = [], reverse = false }) {
  const [lead, ...rest] = myths;
  if (!lead) return null;
  const items = rest.slice(0, 4);
  return (
    <div
      className={cn(
        "grid items-stretch gap-6 md:gap-8",
        reverse
          ? "lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
          : "lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]"
      )}
    >
      <OverlayMythCard
        myth={lead}
        // 4/3 y no 16/10: en móvil esta pieza lleva kicker + título + extracto
        // + CTA, y sobre una caja tan baja el bloque llegaba al 88% de la
        // altura, justo donde el scrim ya no sostiene el texto.
        ratio="4 / 3"
        fill="lg"
        sizes="(max-width: 767px) 520px, (max-width: 1024px) 100vw, 58vw"
        className={reverse ? "lg:order-2" : undefined}
      />
      <ol
        className={cn(
          "grid auto-rows-fr divide-y divide-line-100 border-y border-line-100",
          reverse && "lg:order-1"
        )}
      >
        {items.map((myth, index) => (
          <li key={myth.slug}>
            <Link
              href={mythHref(myth)}
              className="group grid h-full grid-cols-[4.5rem_1fr_auto] items-center gap-4 py-4"
            >
              <span className="relative block aspect-square overflow-hidden bg-mist-50">
                {getMythImage(myth, "square") ? (
                  <Image
                    src={getMythImage(myth, "square")}
                    alt=""
                    fill
                    sizes="144px"
                    className="atlas-image-zoom object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Motif
                      name={myth.motif || "hoja"}
                      size={32}
                      className="opacity-25"
                    />
                  </span>
                )}
              </span>
              <span className="min-w-0">
                <span className="atlas-kicker block">{mythMeta(myth)}</span>
                <h3 className="atlas-title-sm mt-1 transition-colors group-hover:text-jungle-700">
                  {myth.title}
                </h3>
              </span>
              <span
                aria-hidden="true"
                className="atlas-figure font-editorial text-lg text-ink-500"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Carrusel de retratos. En móvil/tablet sangra a los bordes de la pantalla
 * (`atlas-rail`) para que el recorte de la tarjeta siguiente lea como "hay
 * más" en vez de como un corte accidental, y reserva el gutter como
 * scroll-padding para que el snap no pegue las tarjetas al bisel.
 */
export function PortraitRail({ myths = [], label, className = "" }) {
  const items = myths
    .filter((myth) => getMythImage(myth, "portrait", { fallback: false }))
    .slice(0, 8);
  if (!items.length) return null;
  return (
    <div
      className={cn(
        "atlas-rail grid snap-x snap-mandatory auto-cols-[72%] grid-flow-col gap-4 overflow-x-auto pb-3 sm:auto-cols-[42%] lg:grid-flow-row lg:grid-cols-4 lg:gap-6 lg:overflow-visible",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/40",
        className
      )}
      tabIndex={0}
      role="group"
      aria-label={label || "Galería desplazable de mitos"}
    >
      {items.map((myth) => (
        <Link key={myth.slug} href={mythHref(myth)} className="group snap-start">
          <ImageFrame
            src={getMythImage(myth, "portrait", { fallback: false })}
            alt=""
            ratio="3 / 4"
            sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 24vw"
            placeholderMotif={myth.motif || "condor"}
            placeholderSize={120}
            className="rounded-none border-0"
            imgClassName="atlas-image-zoom object-cover"
          />
          <span className="atlas-kicker mt-4 block">{mythMeta(myth)}</span>
          <h3 className="atlas-title-md mt-1 transition-colors group-hover:text-jungle-700">
            {myth.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}

// Reparte N tarjetas en filas de `perRow` sobre una retícula de 6 columnas y
// estira la última fila para que nunca quede una celda vacía: con 5 regiones,
// la fila final son dos piezas a media página en vez de dos piezas y un hueco.
const SM_SPAN = { 1: "sm:col-span-6", 2: "sm:col-span-3" };
const LG_SPAN = { 1: "lg:col-span-6", 2: "lg:col-span-3", 3: "lg:col-span-2" };

function rowSpan(index, total, perRow) {
  const rowStart = Math.floor(index / perRow) * perRow;
  return Math.min(perRow, total - rowStart);
}

export function TerritoryStrip({ regions = [] }) {
  const items = regions.slice(0, 6);
  if (!items.length) return null;
  return (
    <div className="grid gap-px overflow-hidden bg-line-100 sm:grid-cols-6">
      {items.map((region, index) => (
        <Link
          key={region.href}
          href={region.href}
          className={cn(
            "group relative block min-h-[18rem] overflow-hidden bg-[rgb(var(--atlas-night))] md:min-h-[20rem]",
            SM_SPAN[rowSpan(index, items.length, 2)],
            LG_SPAN[rowSpan(index, items.length, 3)]
          )}
        >
          {region.imageUrl ? (
            <Image
              src={region.imageUrl}
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 720px"
              className="atlas-image-zoom object-cover"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center opacity-25">
              <Motif name={region.motif || "montana"} size={180} />
            </span>
          )}
          <span
            className="atlas-scrim pointer-events-none absolute inset-0"
            aria-hidden="true"
          />
          {/* items-end alinea ambos bloques por su base: la cifra dejó de
              flotar por encima del nombre de la región. */}
          <div className="atlas-on-image absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
            <span className="min-w-0">
              <span className="atlas-kicker block !text-white">
                Territorio
              </span>
              <h3 className="atlas-title-lg mt-1 !text-white">{region.title}</h3>
            </span>
            {region.count != null ? (
              <span className="atlas-kicker atlas-figure shrink-0 !text-white">
                {region.count} mitos
              </span>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
}

export function AtlasPageIntro({ title, description, count, children }) {
  return (
    <Container size="atlas" className="atlas-section-y-tight">
      <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
        <div>
          <h1 className="atlas-title atlas-title-xl">{title}</h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="md:justify-self-end">
          {count != null ? (
            <p className="atlas-figure font-editorial text-6xl font-semibold leading-none text-jungle-700 md:text-8xl">
              {count}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </Container>
  );
}
