import {
  FALLBACK_IMAGE_ASPECT,
  getImageAspect,
} from "../../lib/myth-images";
import { cn } from "../../lib/utils";
import { Container, Heading, ImageFrame, Motif } from "../atoms";
import { Breadcrumb, ShareBar } from "../molecules";
import { CommentThread, Header, MythGrid } from "../organisms";
import { MythReadingRail } from "../MythReadingRail";
import { MythHero, MythIntroMobile } from "./MythHero";
import {
  ExpedienteBlock,
  HistoriaBlock,
  LeccionBlock,
  PalabrasClaveBlock,
  RelatoBlock,
  SimilitudesBlock,
  TerritorioBlock,
  VersionesBlock,
  deriveSections,
  mythMotif,
  toParagraphs,
} from "./MythSections";
import { buildSourceGroups } from "./myth-expediente";

const RIVER_REGIONS = ["Caribe", "Pacífico"];
const pickAccent = (region) =>
  RIVER_REGIONS.includes(region) ? "river" : "jungle";

/*
 * Hasta aquí la escena del relato vivía en una caja dura de 9/16 sobre un
 * fondo casi negro. Como sólo 207 de las 596 verticales del archivo son 9/16
 * y 389 son 2:3, el 65 % de los mitos se leía con dos franjas negras arriba y
 * abajo —el 15,6 % del alto de la caja—. La caja pasa a tomar la proporción
 * real de cada obra: nada se recorta y no queda ni una franja.
 */

/* Por encima de esto la obra ya no es un retrato y no puede ir en la columna
 * lateral: 0,95 deja pasar el cuadrado justo y ataja la apaisada. */
const PORTRAIT_MAX_RATIO = 0.95;

/*
 * Techo de la caja. La obra más alta del archivo (1512×2688) mediría 766 px a
 * lo ancho de la columna: más que el hueco visible bajo el riel en un portátil
 * de 13" (≈730 px), así que quedaría cortada justo cuando se pega al hacer
 * scroll. El tope se aplica al ANCHO —`alto × ancho/alto`—, de modo que la
 * caja encoge sin dejar de tener la proporción exacta de la obra: sigue sin
 * franjas, sólo más pequeña y centrada. De paso acota el ritmo vertical: entre
 * un mito 2:3 y uno 9:16 la diferencia de alto nunca pasa del 18 %, y ninguno
 * puede pasarse del alto de la ventana.
 */
const ART_HEIGHT_CAP = "max(20rem, 100svh - 11rem)";

export function mythArtAspect(url) {
  return getImageAspect(url) ?? FALLBACK_IMAGE_ASPECT;
}

/**
 * Segunda escena del tríptico —el acto— junto al relato en escritorio, donde la
 * portada ya mostró la entrada apaisada.
 *
 * `aspect` llega medido desde el servidor (`mythArtAspect`) para reservar el
 * hueco ANTES de que baje la imagen: no hay salto de maquetación. Cuando la
 * obra no está en el mapa se cae a 2:3, que es el formato mayoritario y por
 * tanto la caja que menos desentona; y como `object-contain` sigue puesto, un
 * dato equivocado deja un hilo de fondo en vez de recortar la obra.
 */
function InlineStoryImage({ myth, aspect, className = "" }) {
  if (!myth.verticalImageUrl) return null;
  const isPortrait = aspect.ratio <= PORTRAIT_MAX_RATIO;
  return (
    <figure
      className={cn("mx-auto w-full", className)}
      style={{
        aspectRatio: `${aspect.w} / ${aspect.h}`,
        maxWidth: `calc(${ART_HEIGHT_CAP} * ${aspect.w} / ${aspect.h})`,
      }}
    >
      <ImageFrame
        src={myth.verticalImageUrl}
        alt={`${myth.title}: ${isPortrait ? "el acto del relato" : "escena del relato"}`}
        ratio={null}
        // La de retrato vive en la columna lateral (≈440 px); la que no lo es
        // baja a la medida de lectura completa y necesita el doble de fuente.
        sizes={
          isPortrait
            ? "(max-width: 768px) 100vw, 440px"
            : "(max-width: 768px) 100vw, 768px"
        }
        placeholderMotif={myth.motif}
        placeholderSize={180}
        className="rounded border border-line-100 bg-mist-50"
        imgClassName="object-contain"
        data-image-role="inline-scene"
      />
    </figure>
  );
}

/**
 * Primera escena del tríptico —la entrada— al abrir el relato, sólo en móvil.
 * En móvil la portada usa la vertical a sangre (el acto), así que sin esto la
 * apaisada no se vería nunca en teléfono. En escritorio ya es la portada y
 * repetirla aquí sobraría, por eso el bloque es `md:hidden`.
 */
function MobileEntranceImage({ myth, className = "" }) {
  if (!myth.imageUrl || !myth.verticalImageUrl) return null;
  return (
    <figure className={className}>
      <ImageFrame
        src={myth.imageUrl}
        alt={`${myth.title}: la entrada del relato`}
        ratio="16 / 9"
        sizes="100vw"
        placeholderMotif={myth.motif}
        placeholderSize={120}
        className="rounded border border-line-100 bg-[rgb(var(--atlas-night))]"
        data-image-role="inline-entrance"
      />
    </figure>
  );
}

function MythReading({ myth, accent, related }) {
  const hasGeo = myth.latitude != null && myth.longitude != null;
  const showTerritory = hasGeo || myth._map || myth.showTerritorio;
  const hasContext = Boolean(
    toParagraphs(myth.historia).length || toParagraphs(myth.similitudes).length
  );
  const hasVersions = Boolean(toParagraphs(myth.versiones).length);
  const hasTeaching = Boolean(String(myth.leccion || "").trim());

  // La obra del relato se mide en el servidor: el mapa de dimensiones (56 KB)
  // no debe cruzar al cliente, así que lo que baja al navegador es sólo la
  // proporción ya resuelta dentro del `style` de la figura.
  const artAspect = mythArtAspect(myth.verticalImageUrl);
  // La ranura vertical a veces se llena con una obra que no lo es (una variante
  // que quedó vieja y cae en la apaisada). Antes se metía a la fuerza en una
  // columna de retrato; ahora, si no es retrato, la columna lateral no se abre
  // y la obra baja al ancho de la lectura con su propia proporción.
  const artIsPortrait =
    Boolean(myth.verticalImageUrl) && artAspect.ratio <= PORTRAIT_MAX_RATIO;
  const artBelowStory = Boolean(myth.verticalImageUrl) && !artIsPortrait;

  const sourceGroups = buildSourceGroups({
    keySources: myth.keySources,
    sources: myth.sources,
  });
  const hasSources = sourceGroups.total > 0;

  const readingItems = [
    { href: "relato", label: "Relato", visible: Boolean(toParagraphs(myth.mito).length) },
    { href: "ensenanza", label: "Enseñanza", visible: hasTeaching },
    { href: "territorio", label: "Territorio", visible: showTerritory },
    { href: "contexto", label: "Contexto", visible: hasContext },
    { href: "versiones", label: "Versiones", visible: hasVersions },
    // 218 de los 596 mitos no tienen ni una fuente publicada. El riel prometía
    // "Fuentes" en los 596 y en más de un tercio llevaba a un aviso de que no
    // las hay. La parada nombra lo que sí está en esa sección.
    { href: "fuentes", label: hasSources ? "Fuentes" : "Procedencia", visible: true },
  ].filter((item) => item.visible);
  const shareUrl = myth.slug
    ? `https://www.mitosdecolombia.com/mitos/${myth.slug}`
    : undefined;

  return (
    <>
      <MythReadingRail items={readingItems} />

      <Container size="atlas" className="py-14 md:py-20">
        <section
          id="relato"
          className={`scroll-mt-36 mx-auto grid max-w-[1120px] items-start gap-10 md:gap-14 ${
            artIsPortrait
              ? "md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.68fr)]"
              : "max-w-3xl"
          }`}
        >
          <div className="min-w-0">
            <MobileEntranceImage myth={myth} className="mb-9 md:hidden" />
            <RelatoBlock text={myth.mito} accent={accent} motif={myth.motif} />
            {artBelowStory ? (
              <InlineStoryImage
                myth={myth}
                aspect={artAspect}
                className="mt-12 hidden md:block"
              />
            ) : null}
          </div>
          {artIsPortrait ? (
            <InlineStoryImage
              myth={myth}
              aspect={artAspect}
              className="hidden md:sticky md:top-36 md:block"
            />
          ) : null}
        </section>
      </Container>

      <div id="ensenanza" className="scroll-mt-36">
        <LeccionBlock
          text={myth.leccion}
          accent={accent}
          motif={myth.motif}
          huellaUrl={myth.squareImageUrl}
          huellaAlt={`${myth.title}: lo que quedó del relato`}
        />
      </div>

      {showTerritory ? (
        <section id="territorio" className="scroll-mt-36">
          <Container size="atlas" className="py-16 md:py-24">
            <TerritorioBlock
              latitude={myth.latitude}
              longitude={myth.longitude}
              region={myth.region}
              community={myth.community}
              accent={accent}
              motif={myth.motif}
            >
              {myth._map}
            </TerritorioBlock>
          </Container>
        </section>
      ) : null}

      {hasContext ? (
        <Container size="narrow" className="py-14 md:py-20">
          <section id="contexto" className="scroll-mt-36">
            {toParagraphs(myth.historia).length ? (
              <HistoriaBlock
                text={myth.historia}
                accent={accent}
                motif={myth.motif}
              />
            ) : null}
            {toParagraphs(myth.similitudes).length ? (
              <div className="mt-14 md:mt-20">
                <SimilitudesBlock
                  text={myth.similitudes}
                  accent={accent}
                  motif={myth.motif}
                />
              </div>
            ) : null}
          </section>
          {hasVersions ? (
            <section id="versiones" className="scroll-mt-36 mt-14 [overflow-anchor:none] md:mt-20">
              <VersionesBlock text={myth.versiones} accent={accent} />
            </section>
          ) : null}
        </Container>
      ) : hasVersions ? (
        <Container size="narrow" className="py-14 md:py-20">
          <section id="versiones" className="scroll-mt-36 [overflow-anchor:none]">
            <VersionesBlock text={myth.versiones} accent={accent} />
          </section>
        </Container>
      ) : null}

      <section id="fuentes" className="scroll-mt-36 border-y border-line-100 bg-mist-50/55">
        <Container size="atlas" className="py-14 md:py-20">
          <ExpedienteBlock
            groups={sourceGroups}
            region={myth.region}
            community={myth.community}
            categoryPath={myth.category_path}
            updatedAt={myth.editorialUpdatedAt || myth.updatedAt}
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 border-t border-line-200 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            <PalabrasClaveBlock keywords={myth.keywords} />
            <ShareBar url={shareUrl} title={myth.title} />
          </div>
        </Container>
      </section>

      <div id="reading-end" aria-hidden="true" />

      {related.length ? (
        <section className="border-y border-line-100 bg-mist-50">
          <Container size="atlas" className="py-14">
            <MythGrid
              eyebrow="Sigue explorando"
              title="También te puede interesar"
              myths={related}
            />
          </Container>
        </section>
      ) : null}

      <Container size="atlas" className="py-14">
        <div className="mb-8 flex items-center gap-3">
          <Motif name="condor" size={30} />
          <Heading level={3}>Voces de la comunidad</Heading>
        </div>
        {myth._comments ? myth._comments : <CommentThread comments={myth.comments} />}
      </Container>
    </>
  );
}

function MythArticle({ myth, accent, breadcrumb, related }) {
  return (
    <article>
      <MythHero myth={myth} />
      <MythIntroMobile myth={myth} />
      <Container size="atlas" className="pt-6 md:pt-8">
        <Breadcrumb items={breadcrumb} />
      </Container>
      <MythReading myth={myth} accent={accent} related={related} />
    </article>
  );
}

export function MythDetailTemplate({
  myth: rawMyth,
  accent,
  related = [],
  breadcrumb,
  chrome = true,
  map,
  commentsSlot,
}) {
  const myth = {
    ...rawMyth,
    motif: mythMotif(rawMyth),
    ...deriveSections(rawMyth),
    _map: map,
    _comments: commentsSlot,
  };
  const selectedAccent = accent || pickAccent(myth?.region);
  const crumbs =
    breadcrumb || [
      { label: "Mitos", href: "/mitos" },
      ...(myth?.region
        ? [
            {
              label: myth.region,
              href: myth.region_slug
                ? `/regiones/${myth.region_slug}`
                : "/regiones",
            },
          ]
        : []),
      { label: myth?.title },
    ];
  const mappedRelated = related.map((item) => ({
    ...item,
    motif: mythMotif(item),
  }));
  const article = (
    <MythArticle
      myth={myth}
      accent={selectedAccent}
      breadcrumb={crumbs}
      related={mappedRelated}
    />
  );

  if (!chrome) return article;

  return (
    <>
      <Header active="/mitos" />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">{article}</main>
    </>
  );
}
