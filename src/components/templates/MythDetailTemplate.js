import { Container, Heading, ImageFrame, Motif } from "../atoms";
import { Breadcrumb, ShareBar } from "../molecules";
import { CommentThread, Header, MythGrid } from "../organisms";
import { MythReadingRail } from "../MythReadingRail";
import { MythHero, MythIntroMobile } from "./MythHero";
import {
  FuentesBlock,
  HistoriaBlock,
  LeccionBlock,
  PalabrasClaveBlock,
  ProcedenciaBlock,
  RelatoBlock,
  SimilitudesBlock,
  TerritorioBlock,
  VersionesBlock,
  deriveSections,
  mythMotif,
  toParagraphs,
} from "./MythSections";

const RIVER_REGIONS = ["Caribe", "Pacífico"];
const pickAccent = (region) =>
  RIVER_REGIONS.includes(region) ? "river" : "jungle";

function InlineStoryImage({ myth, className = "" }) {
  if (!myth.verticalImageUrl) return null;
  return (
    <figure className={className}>
      <ImageFrame
        src={myth.verticalImageUrl}
        alt={`${myth.title}: segunda escena del relato`}
        ratio="9 / 16"
        sizes="(max-width: 768px) 100vw, 440px"
        placeholderMotif={myth.motif}
        placeholderSize={180}
        className="rounded border border-line-100 bg-[rgb(var(--atlas-night))]"
        imgClassName="object-contain"
        data-image-role="inline-scene"
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
  const readingItems = [
    { href: "relato", label: "Relato", visible: Boolean(toParagraphs(myth.mito).length) },
    { href: "ensenanza", label: "Enseñanza", visible: hasTeaching },
    { href: "territorio", label: "Territorio", visible: showTerritory },
    { href: "contexto", label: "Contexto", visible: hasContext },
    { href: "versiones", label: "Versiones", visible: hasVersions },
    { href: "fuentes", label: "Fuentes", visible: true },
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
            myth.verticalImageUrl
              ? "md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.68fr)]"
              : "max-w-3xl"
          }`}
        >
          <RelatoBlock text={myth.mito} accent={accent} motif={myth.motif} />
          <InlineStoryImage
            myth={myth}
            className="hidden md:sticky md:top-36 md:block"
          />
        </section>
      </Container>

      <div id="ensenanza" className="scroll-mt-36">
        <LeccionBlock text={myth.leccion} accent={accent} motif={myth.motif} />
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
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
          <ProcedenciaBlock
            region={myth.region}
            community={myth.community}
            categoryPath={myth.category_path}
          />
          <FuentesBlock
            sources={[...(myth.keySources || []), ...(myth.sources || [])]}
            updatedAt={myth.editorialUpdatedAt || myth.updatedAt}
          />
          </div>
          <div className="mt-10 grid gap-8 border-t border-line-200 pt-8 lg:grid-cols-[1fr_auto] lg:items-start">
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
