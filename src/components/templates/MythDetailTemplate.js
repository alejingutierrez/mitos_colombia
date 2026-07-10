import {
  Container,
  Heading,
  Text,
  Eyebrow,
  Motif,
  ImageFrame,
} from "../atoms";
import { Breadcrumb, ShareBar } from "../molecules";
import { Header, MythGrid, CommentThread } from "../organisms";
import {
  RelatoBlock,
  HistoriaBlock,
  VersionesBlock,
  LeccionBlock,
  SimilitudesBlock,
  ProcedenciaBlock,
  FuentesBlock,
  TerritorioBlock,
  PalabrasClaveBlock,
  deriveSections,
  mythMotif,
  toParagraphs,
  CornerTicks,
  CuratorialCaption,
  CreamMedallion,
  acc,
  GOLD,
  CREAM,
  NIGHT,
} from "./MythSections";

/**
 * Template · MythDetailTemplate — sala de museo
 * Abrir un mito se siente como entrar a una sala: la imagen se trata como OBRA
 * (enmarcada, con marcas de esquina y cartela), los motivos a escala, una
 * columna vertebral numerada en la lectura, y un único pico ceremonial oscuro y
 * dorado ("La enseñanza"). Variantes de hero: immersive · editorial · feature.
 */

const VARIANTS = ["immersive", "editorial", "feature"];
const RIVER_REGIONS = ["Caribe", "Pacífico"];

function hashStr(s = "") {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}
const pickVariant = (slug) => VARIANTS[hashStr(slug) % VARIANTS.length];
const pickAccent = (region) => (RIVER_REGIONS.includes(region) ? "river" : "jungle");

const kickerOf = (myth) => [myth.region, myth.community].filter(Boolean).join(" · ");

/* Banda ceremonial de cierre (oscura y dorada) + compartir. */
function ClosingBand({ myth, accent, shareUrl }) {
  const dark = acc(accent).dark;
  return (
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${NIGHT} 0%, ${dark} 60%, ${NIGHT} 100%)` }}>
      <Motif name={myth.motif} size={340} className="pointer-events-none absolute -left-16 -bottom-12 opacity-[0.05]" aria-hidden="true" />
      <Container size="wide" className="relative py-16 text-center md:py-20">
        <CreamMedallion motif={myth.motif} size={40} className="mx-auto mb-6" />
        <p className="mx-auto max-w-xl text-balance font-display text-xl font-bold leading-snug md:text-2xl" style={{ color: CREAM }}>
          {myth.title}
        </p>
        <p className="mt-2.5 text-xs uppercase tracking-[0.2em]" style={{ color: GOLD }}>
          De la tradición oral colombiana
        </p>
        <div className="mt-7 inline-flex rounded-full bg-white px-4 py-1.5 shadow-sm">
          <ShareBar url={shareUrl} title={myth.title} />
        </div>
      </Container>
    </section>
  );
}

/* Cuerpo completo del mito: lectura → pico ceremonial → origen → cierre → relacionados → comunidad */
function MythBody({ myth, accent, related }) {
  const shareUrl = myth.slug ? `https://www.mitosdecolombia.com/mitos/${myth.slug}` : undefined;
  const hasGeo = myth.latitude != null && myth.longitude != null;
  const showTerritorio = hasGeo || myth._map || myth.showTerritorio;

  // Numeración secuencial sólo entre los bloques numerados que existen.
  const numbered = [];
  if (toParagraphs(myth.historia).length) numbered.push("historia");
  if (toParagraphs(myth.versiones).length) numbered.push("versiones");
  if (toParagraphs(myth.similitudes).length) numbered.push("similitudes");
  const idx = (k) => {
    const i = numbered.indexOf(k);
    return i >= 0 ? i + 1 : null;
  };

  return (
    <>
      {/* Lectura protagonista (medida angosta) */}
      <Container size="wide" className="py-12 md:py-16">
        <div className="mx-auto max-w-[42rem] space-y-14">
          <RelatoBlock text={myth.mito} accent={accent} motif={myth.motif} />
          <HistoriaBlock text={myth.historia} accent={accent} index={idx("historia")} />
          <VersionesBlock text={myth.versiones} accent={accent} index={idx("versiones")} />
        </div>
      </Container>

      {/* Pico ceremonial: la enseñanza (banda oscura a sangre) */}
      <LeccionBlock text={myth.leccion} accent={accent} motif={myth.motif} />

      {/* Resonancias + origen + palabras clave */}
      <Container size="wide" className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-14">
          <div className="mx-auto max-w-[42rem]">
            <SimilitudesBlock text={myth.similitudes} accent={accent} index={idx("similitudes")} />
          </div>

          {/* De dónde viene: procedencia + territorio como un solo movimiento */}
          <div>
            <Eyebrow withRule tone={accent} className="mb-6">
              De dónde viene
            </Eyebrow>
            <div className="grid gap-6">
              <ProcedenciaBlock
                region={myth.region}
                community={myth.community}
                categoryPath={myth.category_path}
              />
              <FuentesBlock
                sources={[...(myth.keySources || []), ...(myth.sources || [])]}
                updatedAt={myth.editorialUpdatedAt || myth.updatedAt}
              />
              {showTerritorio ? (
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
              ) : null}
            </div>
          </div>

          <div className="mx-auto max-w-[42rem]">
            <PalabrasClaveBlock keywords={myth.keywords} />
          </div>
        </div>
      </Container>

      {/* Cierre ceremonial + compartir */}
      <ClosingBand myth={myth} accent={accent} shareUrl={shareUrl} />

      {/* Sigue explorando (banda tenue con motivo fantasma) */}
      {related && related.length > 0 ? (
        <div className="relative overflow-hidden bg-mist-50">
          <Motif name={myth.motif} size={420} className="pointer-events-none absolute -right-24 top-4 opacity-[0.04]" aria-hidden="true" />
          <Container size="wide" className="relative py-14">
            <MythGrid eyebrow="Sigue explorando" title="También te puede interesar" myths={related} />
          </Container>
        </div>
      ) : null}

      {/* Voces de la comunidad */}
      <Container size="wide" className="border-t border-line-100 py-14">
        <div className="mb-8 flex items-center gap-3">
          <Motif name="condor" size={28} className="shrink-0" />
          <div>
            <Eyebrow tone={accent}>Comunidad</Eyebrow>
            <Heading level={3} className="mt-1">
              Voces de la comunidad
            </Heading>
          </div>
        </div>
        {myth._comments ? myth._comments : <CommentThread comments={myth.comments} />}
      </Container>
    </>
  );
}

/* ---------- Variante A · Immersive (imagen-obra a sangre sobre banda oscura) ---------- */
function ImmersiveLayout({ myth, accent, breadcrumb, related }) {
  const dark = acc(accent).dark;
  const scrim = `linear-gradient(to top, ${NIGHT} 2%, rgba(10,15,12,0.55) 32%, transparent 78%)`;
  return (
    <article>
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${NIGHT} 0%, ${dark} 100%)` }}>
        <Motif name={myth.motif} size={520} className="pointer-events-none absolute -right-24 -top-16 opacity-[0.07]" aria-hidden="true" />
        {myth.imageUrl ? (
          <ImageFrame
            src={myth.imageUrl}
            alt={myth.title}
            ratio="16 / 9"
            priority
            sizes="100vw"
            className="rounded-none border-0"
            imgClassName="object-cover"
          />
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center">
            <CreamMedallion motif={myth.motif} size={96} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0" style={{ background: scrim }} />
        <div className="absolute inset-x-0 bottom-0">
          <Container size="wide" className="pb-8 md:pb-12">
            <div className="max-w-3xl">
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/75">{kickerOf(myth)}</p>
              <span className="mt-3 block h-px w-12" style={{ background: GOLD }} aria-hidden="true" />
              <h1 className="mt-4 text-balance font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-white md:text-[3.25rem]">
                {myth.title}
              </h1>
            </div>
          </Container>
        </div>
      </div>

      <Container size="wide" className="pt-8">
        <Breadcrumb items={breadcrumb} />
        {myth.excerpt ? (
          <Text size="lg" tone="strong" className="mx-auto mt-6 max-w-2xl font-medium">
            {myth.excerpt}
          </Text>
        ) : null}
      </Container>
      <MythBody myth={myth} accent={accent} related={related} />
    </article>
  );
}

/* ---------- Variante B · Editorial (dos columnas, imagen-obra enmarcada) ---------- */
function EditorialLayout({ myth, accent, breadcrumb, related }) {
  return (
    <article>
      <Container size="wide" className="pt-10 md:pt-14">
        <Breadcrumb items={breadcrumb} className="mb-8" />
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div>
            <Eyebrow withRule tone={accent} className="mb-4">
              {kickerOf(myth) || myth.region}
            </Eyebrow>
            <Heading level={0} accent={accent}>
              {myth.title}
            </Heading>
            {myth.excerpt ? (
              <Text size="xl" tone="strong" className="mt-6 max-w-xl font-medium">
                {myth.excerpt}
              </Text>
            ) : null}
          </div>
          <div className="relative md:pt-2">
            <Motif name={myth.motif} size={240} className="pointer-events-none absolute -right-8 -top-10 -z-10 opacity-[0.05]" aria-hidden="true" />
            <div className="relative">
              <ImageFrame
                src={myth.imageUrl}
                alt={myth.title}
                ratio="4 / 5"
                priority
                sizes="(max-width: 768px) 100vw, 38vw"
                placeholderMotif={myth.motif}
                placeholderSize={180}
              />
              <CornerTicks accent={accent} />
            </div>
            <CuratorialCaption region={myth.region} community={myth.community} title={myth.title} className="mt-3.5" />
          </div>
        </div>
        <div className="mt-10 h-px w-full bg-line-100" aria-hidden="true" />
      </Container>
      <MythBody myth={myth} accent={accent} related={related} />
    </article>
  );
}

/* ---------- Variante C · Feature (tipográfica, imagen como figura editorial) ---------- */
function FeatureLayout({ myth, accent, breadcrumb, related }) {
  return (
    <article>
      <Container size="wide" className="pt-10 md:pt-16">
        <Breadcrumb items={breadcrumb} className="mb-10" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Motif
            name={myth.motif}
            size={260}
            className="pointer-events-none absolute left-1/2 -top-14 -z-10 -translate-x-1/2 opacity-[0.06]"
            aria-hidden="true"
          />
          <Eyebrow tone={accent} className="justify-center">
            {kickerOf(myth)}
          </Eyebrow>
          <Heading level={0} className="mt-4">
            {myth.title}
          </Heading>
          <span className={`mx-auto mt-5 block h-[3px] w-14 ${acc(accent).bar}`} aria-hidden="true" />
          {myth.excerpt ? (
            <Text size="lg" className="mx-auto mt-6 max-w-xl">
              {myth.excerpt}
            </Text>
          ) : null}
        </div>
      </Container>

      {/* La imagen no es cabecero: se usa como figura editorial (obra) */}
      {myth.imageUrl ? (
        <Container size="wide" className="pt-12">
          <figure className="mx-auto max-w-4xl">
            <div className="relative">
              <ImageFrame
                src={myth.imageUrl}
                alt={myth.title}
                ratio="16 / 9"
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                placeholderMotif={myth.motif}
                placeholderSize={180}
              />
              <CornerTicks accent={accent} />
            </div>
            <figcaption className="mt-4 text-center">
              <CuratorialCaption region={myth.region} community={myth.community} title={myth.title} className="[&>p]:mx-auto" />
            </figcaption>
          </figure>
        </Container>
      ) : (
        <Container size="wide" className="pt-8">
          <div className="mx-auto flex max-w-4xl justify-center">
            <Motif name={myth.motif} size={150} />
          </div>
        </Container>
      )}

      <MythBody myth={myth} accent={accent} related={related} />
    </article>
  );
}

const LAYOUTS = {
  immersive: ImmersiveLayout,
  editorial: EditorialLayout,
  feature: FeatureLayout,
};

export function MythDetailTemplate({
  myth: rawMyth,
  variant,
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
  const chosen = variant && LAYOUTS[variant] ? variant : pickVariant(myth?.slug || myth?.title || "");
  const Layout = LAYOUTS[chosen];
  const acccent = accent || pickAccent(myth?.region);

  const crumbs =
    breadcrumb || [
      { label: "Mitos", href: "/mitos" },
      ...(myth?.region
        ? [{ label: myth.region, href: myth.region_slug ? `/regiones/${myth.region_slug}` : "/regiones" }]
        : []),
      { label: myth?.title },
    ];

  const rel = (related || []).map((r) => ({ ...r, motif: mythMotif(r) }));
  const article = <Layout myth={myth} accent={acccent} breadcrumb={crumbs} related={rel} />;

  if (!chrome) return article;

  return (
    <>
      <Header active="/mitos" />
      <main className="min-h-[100dvh] overflow-x-clip bg-paper">{article}</main>
    </>
  );
}
