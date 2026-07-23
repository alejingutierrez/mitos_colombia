import Link from "next/link";
import { Container, Heading, ImageFrame, Motif } from "../atoms";
import { Breadcrumb, ShareBar } from "../molecules";
import { CommentThread, Header, MythGrid } from "../organisms";
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

function ImagePause({ myth, ratio = "16 / 7", caption, className = "" }) {
  if (!myth.imageUrl) return null;
  return (
    <figure className={className}>
      <ImageFrame
        src={myth.imageUrl}
        alt=""
        ratio={ratio}
        sizes="(max-width: 768px) 100vw, 1100px"
        placeholderMotif={myth.motif}
        placeholderSize={180}
        className="rounded-none border-0"
        imgClassName="object-cover"
      />
      {caption ? (
        <figcaption className="mt-3 text-center font-editorial text-lg italic text-ink-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ReadingIndex({ myth }) {
  const items = [
    ["relato", "Relato", Boolean(toParagraphs(myth.mito).length)],
    ["contexto", "Contexto", Boolean(toParagraphs(myth.historia).length)],
    ["versiones", "Versiones", Boolean(toParagraphs(myth.versiones).length)],
    ["ensenanza", "Enseñanza", Boolean(String(myth.leccion || "").trim())],
    ["fuentes", "Fuentes", true],
  ].filter(([, , visible]) => visible);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p className="atlas-kicker">En esta página</p>
        <nav className="mt-5 border-l border-line-200" aria-label="Índice del mito">
          {items.map(([href, label], index) => (
            <Link
              key={href}
              href={`#${href}`}
              className="group relative block py-3 pl-6 text-sm text-ink-700 hover:text-jungle-700"
            >
              <span className="absolute -left-[4.5px] top-[1.05rem] h-2 w-2 rounded-full border border-line-300 bg-white group-hover:border-jungle-600 group-hover:bg-jungle-600" />
              {label}
              <span className="ml-2 font-editorial text-ink-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>
        {myth.latitude != null && myth.longitude != null ? (
          <p className="mt-16 text-xs leading-relaxed text-ink-500">
            {myth.latitude}° · {myth.longitude}°
          </p>
        ) : null}
      </div>
    </aside>
  );
}

function MythReading({ myth, accent, related }) {
  const hasGeo = myth.latitude != null && myth.longitude != null;
  const showTerritory = hasGeo || myth._map || myth.showTerritorio;
  const shareUrl = myth.slug
    ? `https://www.mitosdecolombia.com/mitos/${myth.slug}`
    : undefined;

  return (
    <>
      <Container size="atlas" className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[10rem_1fr]">
          <ReadingIndex myth={myth} />
          <div className="min-w-0">
            <section
              id="relato"
              className="scroll-mt-24 grid items-start gap-10 md:grid-cols-[1fr_0.72fr]"
            >
              <RelatoBlock text={myth.mito} accent={accent} motif={myth.motif} />
              <ImagePause myth={myth} ratio="4 / 5" className="md:sticky md:top-24" />
            </section>

            <ImagePause
              myth={myth}
              ratio="16 / 6"
              caption={
                myth.community
                  ? `${myth.community}, lugar de encuentro y memoria.`
                  : `${myth.region || "Colombia"}, territorio y memoria.`
              }
              className="mt-16"
            />

            {toParagraphs(myth.historia).length ? (
              <section
                id="contexto"
                className="scroll-mt-24 mt-16 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]"
              >
                <ImagePause myth={myth} ratio="4 / 3" />
                <HistoriaBlock
                  text={myth.historia}
                  accent={accent}
                  index={1}
                  motif={myth.motif}
                />
              </section>
            ) : null}

            {toParagraphs(myth.versiones).length ? (
              <section
                id="versiones"
                className="scroll-mt-24 mt-16 grid items-start gap-10 md:grid-cols-[1fr_0.9fr]"
              >
                <VersionesBlock text={myth.versiones} accent={accent} index={2} />
                <ImagePause myth={myth} ratio="4 / 3" />
              </section>
            ) : null}

            {toParagraphs(myth.similitudes).length ? (
              <section className="mt-16 max-w-3xl">
                <SimilitudesBlock
                  text={myth.similitudes}
                  accent={accent}
                  index={3}
                  motif={myth.motif}
                />
              </section>
            ) : null}
          </div>
        </div>
      </Container>

      <div id="ensenanza" className="scroll-mt-24">
        <LeccionBlock text={myth.leccion} accent={accent} motif={myth.motif} />
      </div>

      <Container size="atlas" className="py-14 md:py-20">
        <div id="fuentes" className="scroll-mt-24 grid gap-8 lg:grid-cols-2">
          <ProcedenciaBlock
            region={myth.region}
            community={myth.community}
            categoryPath={myth.category_path}
          />
          <FuentesBlock
            sources={[...(myth.keySources || []), ...(myth.sources || [])]}
            updatedAt={myth.editorialUpdatedAt || myth.updatedAt}
          />
          {showTerritory ? (
            <div className="lg:col-span-2">
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
            </div>
          ) : null}
          <div className="lg:col-span-2">
            <PalabrasClaveBlock keywords={myth.keywords} />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <ShareBar url={shareUrl} title={myth.title} />
        </div>
      </Container>

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
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[rgb(var(--atlas-night))]">
        {myth.imageUrl ? (
          <ImageFrame
            src={myth.imageUrl}
            alt={myth.title}
            ratio="16 / 9"
            priority
            sizes="100vw"
            className="absolute inset-0 min-h-full rounded-none border-0 [&]:aspect-auto"
            imgClassName="object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center opacity-25">
            <Motif name={myth.motif} size={320} />
          </span>
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
        <Container
          size="atlas"
          className="relative flex min-h-[calc(100svh-4rem)] items-end pb-10 text-white md:pb-14"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              {[myth.region, myth.community].filter(Boolean).join(" · ")}
            </p>
            <h1 className="mt-4 font-editorial text-[4.2rem] font-semibold leading-[0.86] tracking-[-0.04em] md:text-[6.4rem]">
              {myth.title}
            </h1>
            {myth.excerpt ? (
              <p className="mt-5 hidden max-w-2xl text-base leading-relaxed text-white/82 sm:block">
                {myth.excerpt}
              </p>
            ) : null}
            <Link
              href="#relato"
              className="mt-6 inline-flex items-center gap-2 border-b border-ember-500 pb-1 text-sm font-semibold"
            >
              Leer este mito
            </Link>
          </div>
        </Container>
      </section>
      <Container size="atlas" className="pt-8">
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
      <main className="min-h-[100dvh] overflow-x-clip bg-paper">{article}</main>
    </>
  );
}
