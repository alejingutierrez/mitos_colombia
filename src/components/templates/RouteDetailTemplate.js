import Image from "next/image";
import Link from "next/link";
import { Container, Icon, Motif } from "../atoms";
import { Header } from "../organisms";
import { MuralCell, MuralInlineList } from "./MuralTemplate";
import { RouteCensus, RouteMovements, RoutePlate } from "../rutas";
import { cn } from "../../lib/utils";

/**
 * Plantilla · RouteDetailTemplate — una ruta editorial completa.
 *
 * La versión anterior era una portada, tres titulares en fila y una lista
 * plana de relatos. Servía cuando una ruta era un título y una frase; desde
 * que la curaduría escribe cada ruta como una tesis y una secuencia de
 * movimientos —cada uno con su nombre, su prosa y los relatos que le tocan—,
 * esa forma perdía justo lo que se escribió.
 *
 * El orden aquí sigue el del recorrido:
 *
 *   portada      la obra de la ruta, su nombre y su medida
 *   ficha        movimientos, territorios y pueblos — la capa de enlace
 *   tesis        por qué estos relatos van juntos
 *   movimientos  cada etapa con su prosa y su obra
 *   cierre       la advertencia o el matiz con que termina la curaduría
 *   censo        los relatos completos, por territorio
 *   otras rutas  la salida
 */

const MOTIF_BY_ACCENT = {
  river: "agua",
  jungle: "hoja",
  ember: "sol",
  ink: "luna",
};

/** Reparte los párrafos en dos columnas conservando el orden de lectura. */
function splitInTwo(paragraphs = []) {
  const half = Math.ceil(paragraphs.length / 2);
  return [paragraphs.slice(0, half), paragraphs.slice(half)];
}

const EMPTY_SUMMARY = {
  mythCount: 0,
  momentCount: 0,
  regions: [],
  peoples: [],
  buckets: [],
  unattributed: 0,
};

export function RouteDetailTemplate({
  route,
  index,
  heroImage,
  summary: rawSummary,
  communityPageSlugs = [],
  unattributedHref = null,
  otherRoutes = [],
}) {
  const summary = { ...EMPTY_SUMMARY, ...(rawSummary || {}) };
  const motif = MOTIF_BY_ACCENT[route.accent] || "hoja";
  const folio = Number.isFinite(index) ? String(index + 1).padStart(2, "0") : null;
  const linkableCommunities = new Set(communityPageSlugs);
  const [leadParagraph, ...restParagraphs] = route.introParagraphs || [];
  const [columnA, columnB] = splitInTwo(restParagraphs);

  return (
    <>
      <Header active="/rutas" />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        {/* ---------- Portada ---------- */}
        <section className="relative min-h-[26rem] overflow-hidden bg-[rgb(var(--atlas-night))] md:min-h-[36rem]">
          {heroImage ? (
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              quality={68}
              className="object-cover"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center opacity-20">
              <Motif name={motif} size={240} />
            </span>
          )}
          <span className="atlas-scrim-portada absolute inset-0" aria-hidden="true" />
          <Container
            size="atlas"
            className="atlas-on-image relative flex min-h-[26rem] items-end pb-9 text-white md:min-h-[36rem] md:pb-14"
          >
            <div className="min-w-0 max-w-[42ch]">
              <nav
                aria-label="Ruta de navegación"
                className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/76"
              >
                <Link
                  href="/"
                  className="border-b border-white/40 transition-colors hover:text-white"
                >
                  Inicio
                </Link>
                <span aria-hidden className="opacity-60">
                  /
                </span>
                <Link
                  href="/rutas"
                  className="border-b border-white/40 transition-colors hover:text-white"
                >
                  Rutas
                </Link>
                <span aria-hidden className="opacity-60">
                  /
                </span>
                <span aria-current="page">{route.title}</span>
              </nav>

              <p className="atlas-kicker mt-5 !text-ember-400">
                {folio ? `Ruta ${folio}` : "Ruta editorial"}
                {route.tone ? ` · ${route.tone}` : ""}
              </p>
              <h1 className="atlas-h1 mt-3 !text-white">{route.title}</h1>
              <span className="atlas-rule bg-ember-500" />
              {route.detail ? (
                <p className="mt-5 max-w-[46ch] leading-[1.6] text-white/85">
                  {route.detail}
                </p>
              ) : null}
              <p className="atlas-figure mt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-white/70">
                {summary.mythCount} relatos · {summary.momentCount}{" "}
                {summary.momentCount === 1 ? "movimiento" : "movimientos"}
              </p>
            </div>
          </Container>
        </section>

        {/* ---------- Ficha: el recorrido y de dónde viene ---------- */}
        <section className="border-b border-line-100">
          <Container size="atlas" className="py-6 md:py-7">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1.4fr] lg:items-start lg:gap-0">
              <MuralCell label="El recorrido" first>
                {/* Los títulos de los movimientos pueden llegar a 42 caracteres;
                    `MuralInlineList` los mantendría en una sola línea y en un
                    teléfono estrecho se saldrían de la celda. Aquí se dejan
                    partir. */}
                {route.momentos?.length ? (
                  <ol className="mt-2.5 list-none space-y-1 text-[0.8125rem] leading-[1.7] text-ink-700">
                    {route.momentos.map((momento, i) => (
                      <li key={momento.slug} className="flex gap-2">
                        <span className="atlas-figure shrink-0 text-ink-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Link
                          href={`#movimiento-${momento.slug}`}
                          className="underline decoration-line-300 underline-offset-4 transition-colors hover:text-jungle-700 hover:decoration-jungle-500"
                        >
                          {momento.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-500">
                    {summary.mythCount} relatos en un solo tramo.
                  </p>
                )}
              </MuralCell>

              <MuralCell label="Territorios">
                <MuralInlineList>
                  {summary.regions.map((region) => (
                    <span key={region.slug}>
                      <Link
                        href={`/regiones/${region.slug}`}
                        className="border-b border-line-200 transition-colors hover:text-jungle-700"
                      >
                        {region.name}
                      </Link>{" "}
                      <span className="atlas-figure text-ink-500">{region.count}</span>
                    </span>
                  ))}
                </MuralInlineList>
              </MuralCell>

              <MuralCell label="Pueblos">
                {summary.peoples.length ? (
                  <MuralInlineList>
                    {summary.peoples.map((people) => (
                      <span key={people.slug}>
                        {linkableCommunities.has(people.slug) ? (
                          <Link
                            href={`/comunidades/${people.slug}`}
                            className="border-b border-line-200 transition-colors hover:text-jungle-700"
                          >
                            {people.name}
                          </Link>
                        ) : (
                          people.name
                        )}{" "}
                        <span className="atlas-figure text-ink-500">{people.count}</span>
                      </span>
                    ))}
                  </MuralInlineList>
                ) : null}
                {/* «Mestizo» y «Mixto» no son pueblos: son la etiqueta que
                    quedó cuando la fuente no registró la procedencia. Decirlo
                    —y enlazar a donde esos relatos viven— es más honesto que
                    pintarlas entre los pueblos o callarlas. */}
                {summary.unattributed ? (
                  <p className="mt-2.5 text-[0.8125rem] leading-[1.6] text-ink-500">
                    {summary.unattributed}{" "}
                    {summary.unattributed === 1
                      ? "relato figura en el archivo"
                      : "relatos figuran en el archivo"}{" "}
                    {unattributedHref ? (
                      <Link
                        href={unattributedHref}
                        className="border-b border-line-200 transition-colors hover:text-jungle-700"
                      >
                        sin pueblo identificado
                      </Link>
                    ) : (
                      "sin pueblo identificado"
                    )}
                    .
                  </p>
                ) : null}
              </MuralCell>
            </div>
          </Container>
        </section>

        {/* ---------- La tesis ---------- */}
        {leadParagraph ? (
          <Container size="atlas" className="py-12 md:py-16">
            <p className="max-w-[44ch] text-[length:var(--step-2)] leading-[1.45] tracking-[-0.005em] text-ink-900">
              {leadParagraph}
            </p>
            {restParagraphs.length ? (
              <div className="mt-9 grid gap-x-11 gap-y-5 border-t border-line-100 pt-8 md:grid-cols-2">
                <div>
                  {columnA.map((paragraph, i) => (
                    <p
                      key={i}
                      className={cn("leading-[1.72] text-ink-700", i > 0 && "mt-4")}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div>
                  {columnB.map((paragraph, i) => (
                    <p
                      key={i}
                      className={cn("leading-[1.72] text-ink-700", i > 0 && "mt-4")}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </Container>
        ) : null}

        {/* ---------- Los movimientos ---------- */}
        {route.momentos?.length ? (
          <Container
            id="recorrido"
            size="atlas"
            className="scroll-mt-20 border-t border-line-100 py-12 md:py-16"
          >
            <h2 className="atlas-section-heading">
              {summary.momentCount === 1
                ? "El recorrido"
                : `El recorrido en ${summary.momentCount} movimientos`}
            </h2>
            <span className="atlas-rule" />
            {route.galleryIntro ? (
              <p className="mt-5 max-w-[56ch] leading-[1.72] text-ink-700">
                {route.galleryIntro}
              </p>
            ) : null}
            <RouteMovements momentos={route.momentos} motif={motif} />
          </Container>
        ) : null}

        {/* ---------- Cierre ---------- */}
        {route.closingParagraphs?.length ? (
          <section className="relative border-t border-line-100 bg-paper">
            <Container size="atlas" className="relative py-12 md:py-16">
              <span
                className="pointer-events-none absolute right-0 top-8 opacity-[0.07] md:right-10"
                aria-hidden="true"
              >
                <Motif name={motif} size={168} />
              </span>
              <div className="relative max-w-[62ch]">
                <p className="atlas-kicker">Para cerrar</p>
                {route.closingParagraphs.map((paragraph, i) => (
                  <p key={i} className="mt-4 leading-[1.72] text-ink-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        {/* ---------- El censo, por territorio ---------- */}
        <RouteCensus
          myths={route.myths}
          regions={summary.regions}
          communityPageSlugs={communityPageSlugs}
          peopleSlugs={summary.peoples.map((people) => people.slug)}
        />

        {/* ---------- Otras rutas ---------- */}
        {otherRoutes.length ? (
          <Container size="atlas" className="py-14 md:py-20">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <h2 className="atlas-section-heading">Seguir por otra ruta</h2>
                <span className="atlas-rule" />
              </div>
              <Link href="/rutas" className="atlas-link">
                Ver el índice completo
                <Icon name="arrow-right" size={17} className="mc-arrow" />
              </Link>
            </div>
            <ul className="mt-9 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherRoutes.map((other) => (
                <li key={other.slug}>
                  <RoutePlate {...other} />
                </li>
              ))}
            </ul>
          </Container>
        ) : null}
      </main>
    </>
  );
}
