import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Eyebrow,
  Heading,
  Text,
  Motif,
  Icon,
  ButtonLink,
  Marquee,
  Spotlight,
  IndexNumber,
  StatusDot,
  Blockquote,
  ImageFrame,
  CountUp,
  Divider,
} from "../atoms";
import { SearchBox } from "../molecules";
import { Header, MythGrid, RouteGrid } from "../organisms";

/**
 * Template · HomeTemplate — "Sala de los Mitos"
 * La home como una galería/museo: los motivos dibujados a escala hero, una obra
 * de portada, y un recorrido por salas blancas iluminadas y bandas OSCURAS
 * atmosféricas (Territorio y Oráculo en #0a0f0c/dorado) en vez de apilar cajas.
 */

const GOLD = "#bd8642";
const CREAM = "#f6e9cf";
const NIGHT = "#0a0f0c";

const DEFAULT_LEAD = {
  slug: "la-madre-de-agua",
  title: "La Madre de Agua",
  excerpt: "Guardiana de ríos y lagunas del Pacífico que seduce a los caminantes hacia la corriente.",
  region: "Pacífico",
  community: "Afrocolombiana",
  motif: "agua",
  imageUrl: "/samples/pacifico.jpg",
};
const DEFAULT_FEATURED = [
  { slug: "el-mohan", title: "El Mohán", excerpt: "Ser de los remansos que enreda las atarrayas y seduce a las lavanderas.", region: "Andina", community: "Río Magdalena", motif: "anaconda" },
  { slug: "el-silbon", title: "El Silbón", excerpt: "Ánima errante que anuncia la muerte con un silbido en los llanos.", region: "Orinoquía", community: "Los Llanos", motif: "luna" },
  { slug: "la-patasola", title: "La Patasola", excerpt: "Espíritu de una sola pierna que acecha a cazadores en la montaña.", region: "Andina", community: "Campesina", motif: "montana" },
  { slug: "el-dorado", title: "El Dorado", excerpt: "El cacique cubierto de oro que se ofrenda a la laguna de Guatavita.", region: "Andina", community: "Muisca", motif: "sol" },
];
const DEFAULT_REGIONS = [
  { title: "Amazonas", href: "/regiones/amazonas", count: 242, motif: "hoja" },
  { title: "Andina", href: "/regiones/andina", count: 277, motif: "montana" },
  { title: "Caribe", href: "/regiones/caribe", count: 251, motif: "agua" },
  { title: "Pacífico", href: "/regiones/pacifico", count: 39, motif: "delfin" },
  { title: "Orinoquía", href: "/regiones/orinoquia", count: 19, motif: "luna" },
  { title: "Varios", href: "/regiones/varios", count: 54, motif: "condor" },
];
const DEFAULT_ROUTES = [
  { title: "Guardianes del agua", href: "/rutas/guardianes-del-agua", motif: "agua", tone: "river", description: "Ríos sagrados, lagunas encantadas y pactos con el agua." },
  { title: "Cartografía de la selva", href: "/rutas/cartografia-selva", motif: "hoja", tone: "jungle", description: "Mapas vivos, límites sagrados y guardianes del monte." },
];
const DEFAULT_TAROT = [
  { card_name: "El Loco", roman: "0", myth_slug: "los-meneses", motif: "condor" },
  { card_name: "La Sacerdotisa", roman: "II", myth_slug: "la-madre-de-agua", motif: "luna" },
  { card_name: "La Muerte", roman: "XIII", myth_slug: "el-silbon", motif: "jaguar" },
];
const DEFAULT_QUOTE = {
  text: "Cada mito existe porque alguien lo escuchó, lo contó, y lo sostuvo en el tiempo.",
  cite: "Tradición oral colombiana",
};

/* Encabezado de sección con numeral editorial (salas claras) */
function SectionSpine({ num, eyebrow, title, description, accent = "jungle", action }) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex items-start gap-5">
        <IndexNumber value={num} size="lg" className="mt-1 text-[2.75rem] leading-none" />
        <div>
          <Eyebrow tone={accent} withRule className="mb-2">
            {eyebrow}
          </Eyebrow>
          <Heading level={1} as="h2">{title}</Heading>
          {description ? (
            <Text className="mt-3 max-w-xl" tone="muted">
              {description}
            </Text>
          ) : null}
        </div>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

/* Encabezado para bandas oscuras (crema + dorado) */
function DarkSpine({ num, eyebrow, title, description }) {
  return (
    <div className="mb-12 flex items-start gap-5">
      <span
        className="mt-1 font-display text-[2.75rem] font-semibold leading-none tabular-nums"
        style={{ color: "rgba(246,233,207,0.5)" }}
        aria-hidden="true"
      >
        {String(num).padStart(2, "0")}
      </span>
      <div>
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-7" style={{ background: GOLD }} aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
            {eyebrow}
          </span>
        </div>
        <h2 className="text-balance font-display text-[1.9rem] font-extrabold leading-[1.05] tracking-[-0.02em] md:text-[2.6rem]" style={{ color: CREAM }}>
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-xl font-body text-[0.98rem]" style={{ color: "rgba(246,233,207,0.7)" }}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* Obra de portada del hero (mito líder) */
function HeroArtwork({ myth }) {
  return (
    <Link href={myth.slug ? `/mitos/${myth.slug}` : "#"} className="group relative block">
      <span className="pointer-events-none absolute -right-6 -top-2 z-20 hidden h-8 w-8 border-r border-t md:block" style={{ borderColor: "rgba(28,92,63,0.35)" }} aria-hidden="true" />
      <span className="pointer-events-none absolute -bottom-2 -left-6 z-20 hidden h-8 w-8 border-b border-l md:block" style={{ borderColor: "rgba(28,92,63,0.35)" }} aria-hidden="true" />
      <div className="relative overflow-hidden rounded border border-line-100">
        <ImageFrame
          src={myth.imageUrl}
          alt={myth.title}
          ratio="4 / 5"
          priority
          quality={68}
          sizes="(max-width: 768px) 100vw, 42vw"
          placeholderMotif={myth.motif}
          placeholderSize={200}
          className="rounded-none border-0"
          imgClassName="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
          <div className="min-w-0">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/75">
              {myth.region}
              {myth.community ? ` · ${myth.community}` : ""}
            </p>
            <p className="mt-1 truncate font-display text-xl font-bold italic">{myth.title}</p>
          </div>
          <span className="ml-3 font-display text-3xl font-semibold text-white/35">01</span>
        </div>
      </div>
    </Link>
  );
}

/* Card grande de la galería (destacado líder) */
function FeatureCard({ myth }) {
  return (
    <Link
      href={myth.slug ? `/mitos/${myth.slug}` : "#"}
      className="group relative flex h-full flex-col overflow-hidden rounded border border-line-100 bg-white transition duration-300 ease-editorial hover:-translate-y-0.5 hover:border-line-200 hover:shadow-float sm:flex-row"
    >
      <div className="relative sm:w-[55%]">
        <ImageFrame
          src={myth.imageUrl}
          alt={myth.title}
          ratio="4 / 3"
          placeholderMotif={myth.motif}
          placeholderSize={168}
          className="h-full rounded-none border-0 border-b border-line-100 sm:border-b-0 sm:border-r"
          imgClassName="h-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {myth.region ? <span className="rounded-sm bg-jungle-tint px-2 py-0.5 text-xs font-medium text-jungle-700">{myth.region}</span> : null}
          {myth.community ? <span className="rounded-sm bg-mist-100 px-2 py-0.5 text-xs font-medium text-ink-500">{myth.community}</span> : null}
        </div>
        <Heading level={2} className="mb-2">{myth.title}</Heading>
        {myth.excerpt ? <Text tone="muted" className="line-clamp-3">{myth.excerpt}</Text> : null}
        <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-jungle-600">
          Leer la obra completa
          <Icon name="arrow-right" size={16} className="mc-arrow" />
        </div>
      </div>
    </Link>
  );
}

/* Card compacta de galería */
function GalleryCard({ myth }) {
  return (
    <Link
      href={myth.slug ? `/mitos/${myth.slug}` : "#"}
      className="group flex h-full flex-col overflow-hidden rounded border border-line-100 bg-white transition duration-300 ease-editorial hover:-translate-y-0.5 hover:border-line-200 hover:shadow-float"
    >
      <ImageFrame
        src={myth.imageUrl}
        alt={myth.title}
        ratio="16 / 10"
        placeholderMotif={myth.motif}
        placeholderSize={92}
        className="rounded-none border-0 border-b border-line-100"
        imgClassName="object-cover transition-transform duration-500 ease-editorial group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-[0.7rem] uppercase tracking-[0.16em] text-ink-500">
          {myth.region}
          {myth.community ? ` · ${myth.community}` : ""}
        </p>
        <Heading level={3} className="text-base font-semibold">
          {myth.title}
        </Heading>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500">Leer</span>
          <Icon name="arrow-up-right" size={16} className="mc-arrow text-jungle-600" />
        </div>
      </div>
    </Link>
  );
}

/* Card de región en la sala oscura (atlas) */
function AtlasCard({ region }) {
  return (
    <Link
      href={region.href}
      className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded"
      style={{ background: "#111712", border: "1px solid rgba(246,233,207,0.12)" }}
    >
      {region.imageUrl ? (
        <Image
          src={region.imageUrl}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 ease-editorial group-hover:scale-105 group-hover:opacity-90"
        />
      ) : (
        <span className="pointer-events-none absolute -right-6 -top-8 opacity-[0.12]" aria-hidden="true">
          <Motif name={region.motif} size={220} />
        </span>
      )}
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,15,12,0.92), rgba(10,15,12,0.25) 55%, transparent)" }} />
      <div className="relative flex items-end justify-between p-5">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.2em]" style={{ color: "rgba(246,233,207,0.6)" }}>Región</p>
          <p className="mt-1 font-display text-2xl font-bold" style={{ color: CREAM }}>{region.title}</p>
        </div>
        <div className="text-right">
          <span className="font-display text-3xl font-extrabold tabular-nums" style={{ color: GOLD }}>
            <CountUp to={region.count} />
          </span>
          <p className="text-[0.62rem] uppercase tracking-[0.18em]" style={{ color: "rgba(246,233,207,0.5)" }}>mitos</p>
        </div>
      </div>
    </Link>
  );
}

/* Carta de tarot dorada en la sala oscura (teaser) */
function OracleCard({ card, tilt }) {
  return (
    <Link
      href={card.myth_slug ? `/mitos/${card.myth_slug}` : "/tarot"}
      className="group relative block transition-transform duration-500 ease-editorial hover:!rotate-0 hover:-translate-y-2"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div
        className="relative flex aspect-[2/3] flex-col items-center justify-between overflow-hidden rounded p-4"
        style={{ background: "#12100b", border: `1px solid ${GOLD}`, boxShadow: "0 20px 45px -20px rgba(0,0,0,0.7)" }}
      >
        <span
          className="pointer-events-none absolute inset-1.5 rounded"
          style={{ border: "1px solid rgba(189,134,66,0.4)" }}
          aria-hidden="true"
        />
        <span className="relative font-display text-sm font-semibold tabular-nums" style={{ color: GOLD }}>
          {card.roman || "·"}
        </span>
        <span
          className="relative flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: CREAM, boxShadow: `0 0 0 1px ${GOLD}, 0 0 0 5px rgba(189,134,66,0.15)` }}
          aria-hidden="true"
        >
          <Motif name={card.motif || "luna"} size={42} />
        </span>
        <span className="relative text-center font-display text-sm font-bold leading-tight" style={{ color: CREAM }}>
          {card.card_name}
        </span>
      </div>
    </Link>
  );
}

export function HomeTemplate({
  hero,
  lead = DEFAULT_LEAD,
  featured = DEFAULT_FEATURED,
  regions = DEFAULT_REGIONS,
  routes = DEFAULT_ROUTES,
  tarot = DEFAULT_TAROT,
  quote = DEFAULT_QUOTE,
  taxonomyWords = ["Amazonas", "Andina", "Caribe", "Orinoquía", "Pacífico", "Cosmogonía", "Criaturas", "Agua", "Memoria"],
}) {
  const heroDescription =
    hero?.description ||
    "Un archivo vivo de la tradición oral: 882 relatos, criaturas y territorios que dan forma a la memoria de los pueblos de Colombia.";
  const gallery = featured.slice(0, 6);
  const feature = gallery[0] || DEFAULT_FEATURED[0];
  const sideCards = gallery.slice(1, 3);
  const rowCards = gallery.slice(3, 6);

  return (
    <>
      <Header active="/" />
      <main className="min-h-[100dvh] bg-paper">
        {/* ---------- Sala 00 · Muro de apertura ---------- */}
        <section className="relative overflow-hidden">
          <Motif
            name="jaguar"
            size={560}
            className="pointer-events-none absolute -right-24 -top-28 z-0 hidden opacity-[0.05] lg:block"
            aria-hidden="true"
          />
          <Container size="wide" className="relative z-10 py-14 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_1.35fr] md:gap-14">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <StatusDot tone="jungle" />
                  <Eyebrow tone="jungle">Archivo vivo del imaginario colombiano</Eyebrow>
                </div>
                <h1 className="text-balance font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink-900 md:text-[3.6rem]">
                  Las historias que Colombia{" "}
                  <span className="text-jungle-600">se cuenta a sí misma</span>
                </h1>
                <span className="mt-6 block h-[3px] w-16 bg-jungle-500" aria-hidden="true" />
                <Text size="lg" className="mt-6 max-w-md">
                  {heroDescription}
                </Text>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <SearchBox className="w-full flex-1 sm:max-w-xs" />
                  <div className="group shrink-0">
                    <ButtonLink href="/mitos" size="lg" variant="primary">
                      Entrar al archivo
                      <Icon name="arrow-right" size={18} className="mc-arrow" />
                    </ButtonLink>
                  </div>
                </div>
              </div>
              <HeroArtwork myth={lead} />
            </div>
          </Container>

          {/* Cenefa cinética de títulos (etiqueta de muro) */}
          <div className="border-y border-line-100 bg-white/60 py-4">
            <Marquee speed={34} itemClassName="text-ink-900">
              {[...featured, lead].map((m, i) => (
                <span key={`${m.slug}-${i}`} className="mx-8 inline-flex items-center gap-4 font-display text-xl font-bold md:text-2xl">
                  {m.title}
                  <span className="h-1.5 w-1.5 rounded-full bg-jungle-500" />
                </span>
              ))}
            </Marquee>
          </div>
        </section>

        {/* ---------- Sala 01 · Destacados (galería iluminada) ---------- */}
        <Container size="wide" className="py-20 md:py-24">
          <SectionSpine
            num={1}
            eyebrow="Sala de destacados"
            title="Obras para empezar el recorrido"
            description="Una selección curada del archivo. Pasa el cursor: la sala se ilumina."
            action={<ButtonLink href="/mitos" variant="secondary">Ver todo el archivo</ButtonLink>}
          />
          <Spotlight className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2 lg:row-span-2">
              <FeatureCard myth={feature} />
            </div>
            {sideCards.map((m) => (
              <GalleryCard key={m.slug} myth={m} />
            ))}
          </Spotlight>
          {rowCards.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rowCards.map((m) => (
                <GalleryCard key={m.slug} myth={m} />
              ))}
            </div>
          ) : null}
        </Container>

        {/* ---------- Respiro · cita ---------- */}
        <Container size="wide" className="pb-20">
          <figure className="mx-auto max-w-3xl border-y border-line-100 py-12 text-center">
            <blockquote className="text-balance font-display text-2xl font-bold leading-snug tracking-tight text-ink-900 md:text-[2rem]">
              <span className="text-jungle-500">“</span>
              {quote.text}
              <span className="text-jungle-500">”</span>
            </blockquote>
            {quote.cite ? (
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-500">
                {quote.cite}
              </figcaption>
            ) : null}
          </figure>
        </Container>

        {/* ---------- Sala 02 · Territorio (atlas oscuro) ---------- */}
        <section style={{ background: NIGHT }}>
          <Container size="wide" className="py-20 md:py-28">
            <DarkSpine
              num={2}
              eyebrow="Territorio"
              title="El país, región por región"
              description="Cada relato pertenece a un paisaje. Recorre el archivo desde su geografía."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {regions.map((r) => (
                <AtlasCard key={r.href} region={r} />
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/regiones"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: CREAM }}
              >
                Todas las regiones y comunidades
                <Icon name="arrow-right" size={16} className="mc-arrow" style={{ color: GOLD }} />
              </Link>
            </div>
          </Container>
        </section>

        {/* ---------- Sala 03 · Rutas editoriales ---------- */}
        <Container size="wide" className="py-20 md:py-24">
          <SectionSpine
            num={3}
            eyebrow="Rutas editoriales"
            title="Colecciones que hilan varios mitos"
            description="Recorridos temáticos que leen la memoria colombiana en secuencia."
            action={<ButtonLink href="/rutas" variant="secondary">Ver rutas</ButtonLink>}
          />
          <RouteGrid routes={routes} eyebrow={null} className="!px-0" />
        </Container>

        {/* ---------- Sala 04 · Oráculo (tarot dorado, oscuro) ---------- */}
        <section style={{ background: NIGHT }}>
          <Container size="wide" className="py-20 md:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <DarkSpine
                  num={4}
                  eyebrow="Oráculo mitológico"
                  title="Cada mito, un arcano del territorio"
                  description="No es adivinación: es leer los arquetipos de Colombia a través de sus relatos. 78 cartas, 78 caminos al archivo."
                />
                <ButtonLink href="/tarot" size="lg" variant="primary">
                  Consultar el oráculo
                  <Icon name="arrow-right" size={18} className="mc-arrow" />
                </ButtonLink>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-end">
                {tarot.slice(0, 3).map((c, i) => (
                  <div key={c.card_name} className="w-1/3 max-w-[150px]">
                    <OracleCard card={c} tilt={[-6, 0, 6][i] ?? 0} />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
