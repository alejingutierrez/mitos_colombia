import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Eyebrow,
  Motif,
  Icon,
  Prose,
  Divider,
  CountUp,
} from "../atoms";
import { Breadcrumb } from "../molecules";
import { Header, MythGrid } from "../organisms";

/**
 * Template · TaxonomyDetailTemplate — sala de museo
 * Cabecero atmosférico oscuro (con acento por región + motivo a escala + conteo
 * dorado animado), cuerpo editorial (descripción larga con capitular +
 * características), la exploración filtrable, y el índice completo rastreable.
 *
 * Props: {
 *   taxonomy: { name, description, imageUrl?, motif?, count?, kind? },
 *   intro?: string | JSX, characteristics?: string[], filterable?: JSX,
 *   myths?, pagination?, breadcrumb?, accent?,
 *   mythIndex?: [{ slug, title }], indexTitle?, children?,
 * }
 */

const GOLD = "#bd8642";
const CREAM = "#f6e9cf";

const HERO_BG = {
  jungle: "linear-gradient(135deg, #0a0f0c 0%, #0e2018 55%, #0a0f0c 100%)",
  river: "linear-gradient(135deg, #0a0f0c 0%, #0c1c29 55%, #0a0f0c 100%)",
};

const dropCap = {
  jungle:
    "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[3.6rem] first-letter:font-extrabold first-letter:leading-[0.72] first-letter:text-jungle-600",
  river:
    "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[3.6rem] first-letter:font-extrabold first-letter:leading-[0.72] first-letter:text-river-600",
};

function introParagraphs(intro) {
  if (typeof intro !== "string") return null;
  return intro
    .split(/\n{1,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export function TaxonomyDetailTemplate({
  taxonomy = {},
  intro,
  characteristics = [],
  filterable,
  myths = [],
  pagination,
  breadcrumb,
  accent = "jungle",
  mythIndex,
  indexTitle,
  children,
}) {
  const { name, description, imageUrl, motif = "hoja", count, kind } = taxonomy;
  const crumbs =
    breadcrumb || [
      { label: "Regiones", href: "/regiones" },
      { label: name },
    ];
  const hasChars = Array.isArray(characteristics) && characteristics.length > 0;
  const hasIndex = Array.isArray(mythIndex) && mythIndex.length > 0;
  const heroBg = HERO_BG[accent] || HERO_BG.jungle;
  const paragraphs = introParagraphs(intro);

  return (
    <>
      <Header />
      <main className="min-h-[100dvh] bg-paper">
        {/* ---------- Cabecero atmosférico (sala oscura) ---------- */}
        <section className="relative overflow-hidden" style={{ background: heroBg }}>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
            />
          ) : null}
          <span className="pointer-events-none absolute -right-16 -top-12 opacity-[0.08]" aria-hidden="true">
            <Motif name={motif} size={440} />
          </span>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(10,15,12,0.78), rgba(10,15,12,0.25) 60%, rgba(10,15,12,0.4))" }}
          />
          <Container size="wide" className="relative py-16 md:py-24">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded" style={{ background: "rgba(246,233,207,0.92)" }}>
                  <Motif name={motif} size={22} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: GOLD }}>
                  {kind || "Taxonomía"}
                </span>
              </div>
              <h1 className="text-balance font-display text-[2.4rem] font-extrabold leading-[1.02] tracking-[-0.03em] md:text-[3.6rem]" style={{ color: CREAM }}>
                {name}
              </h1>
              {count != null ? (
                <div className="mt-6 flex items-baseline gap-2.5">
                  <span className="font-display text-4xl font-extrabold tabular-nums md:text-5xl" style={{ color: GOLD }}>
                    <CountUp to={Number(count) || 0} />
                  </span>
                  <span className="text-sm uppercase tracking-[0.16em]" style={{ color: "rgba(246,233,207,0.6)" }}>
                    {Number(count) === 1 ? "mito en el archivo" : "mitos en el archivo"}
                  </span>
                </div>
              ) : null}
              {description ? (
                <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed" style={{ color: "rgba(246,233,207,0.82)" }}>
                  {description}
                </p>
              ) : null}
            </div>
          </Container>
        </section>

        {/* ---------- Migas ---------- */}
        <Container size="wide" className="pt-8">
          <Breadcrumb items={crumbs} />
        </Container>

        {/* ---------- Descripción larga + características ---------- */}
        {paragraphs || intro || hasChars ? (
          <Container size="wide" className="py-10 md:py-12">
            <div className={hasChars ? "grid gap-10 lg:grid-cols-[1.6fr_1fr]" : ""}>
              {intro ? (
                <div className="max-w-3xl">
                  {paragraphs ? (
                    <Prose className="prose-p:text-[1.02rem] prose-p:leading-[1.75]">
                      {paragraphs.map((p, i) => (
                        <p key={i} className={i === 0 ? dropCap[accent] : undefined}>
                          {p}
                        </p>
                      ))}
                    </Prose>
                  ) : (
                    <Prose>{intro}</Prose>
                  )}
                </div>
              ) : null}

              {hasChars ? (
                <aside className="relative overflow-hidden rounded border border-line-100 bg-mist-50 p-6 lg:sticky lg:top-24 lg:self-start">
                  <span className="pointer-events-none absolute -right-6 -top-6 opacity-[0.06]" aria-hidden="true">
                    <Motif name={motif} size={140} />
                  </span>
                  <div className="relative mb-4 flex items-center gap-2.5">
                    <span className={`h-px w-6 ${accent === "river" ? "bg-river-500" : "bg-jungle-500"}`} aria-hidden="true" />
                    <Eyebrow tone={accent}>Rasgos característicos</Eyebrow>
                  </div>
                  <ul className="relative space-y-3">
                    {characteristics.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Icon
                          name="arrow-up-right"
                          size={15}
                          className={`mt-1 shrink-0 ${accent === "river" ? "text-river-500" : "text-jungle-500"}`}
                        />
                        <Text size="sm" as="span">
                          {c}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </aside>
              ) : null}
            </div>
          </Container>
        ) : null}

        <Divider className="mx-auto max-w-[calc(100%-3rem)]" />

        {/* ---------- Exploración: filtrable o grilla ---------- */}
        {filterable ? (
          filterable
        ) : (
          <Container size="wide" className="py-12">
            <MythGrid
              eyebrow={count != null ? `${count} relatos` : "Relatos"}
              title={`Mitos de ${name}`}
              myths={myths}
              pagination={pagination}
            />
          </Container>
        )}

        {children}

        {/* ---------- Índice completo rastreable (SEO) ---------- */}
        {hasIndex ? (
          <Container size="wide" className="border-t border-line-100 py-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <Motif name={motif} size={30} className="shrink-0" />
                <div>
                  <Eyebrow tone={accent} withRule>
                    {indexTitle || `Todos los mitos de ${name}`}
                  </Eyebrow>
                  <Text size="sm" tone="muted" className="mt-1">
                    Índice completo · {mythIndex.length}{" "}
                    {mythIndex.length === 1 ? "mito" : "mitos"}
                  </Text>
                </div>
              </div>
            </div>
            <ul className="grid gap-x-6 gap-y-2 border-t border-line-100 pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {mythIndex.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/mitos/${m.slug}`}
                    className={`text-sm leading-relaxed text-ink-700 transition-colors hover:underline ${accent === "river" ? "hover:text-river-600" : "hover:text-jungle-600"}`}
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        ) : null}
      </main>
    </>
  );
}
