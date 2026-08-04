import Image from "next/image";
import Link from "next/link";
import { Container, Icon, Motif, Prose } from "../atoms";
import { Breadcrumb } from "../molecules";
import { Header, MythGrid } from "../organisms";
import { AtlasSectionHeader } from "../editorial/AtlasEditorial";

function introParagraphs(intro) {
  if (typeof intro !== "string") return null;
  return intro
    .split(/\n{1,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

const INDEX_PREVIEW_SIZE = 36;

function MythIndexList({ myths, startIndex = 0 }) {
  return (
    <ul className="columns-1 gap-10 sm:columns-2 lg:columns-3">
      {myths.map((myth, index) => (
        <li
          key={myth.slug}
          className="break-inside-avoid border-b border-line-100"
        >
          <Link
            href={`/mitos/${myth.slug}`}
            className="group flex min-h-11 items-baseline gap-3 py-3 text-sm leading-relaxed text-ink-700 hover:text-jungle-700"
          >
            <span className="font-editorial text-lg text-ink-700">
              {String(startIndex + index + 1).padStart(2, "0")}
            </span>
            <span>{myth.title}</span>
            <Icon
              name="arrow-right"
              size={14}
              className="mc-arrow ml-auto shrink-0"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
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
  const paragraphs = introParagraphs(intro);
  const hasCharacteristics =
    Array.isArray(characteristics) && characteristics.length > 0;
  const hasIndex = Array.isArray(mythIndex) && mythIndex.length > 0;
  const visibleIndex = hasIndex ? mythIndex.slice(0, INDEX_PREVIEW_SIZE) : [];
  const remainingIndex = hasIndex ? mythIndex.slice(INDEX_PREVIEW_SIZE) : [];

  return (
    <>
      <Header />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section className="relative min-h-[32rem] overflow-hidden bg-[rgb(var(--atlas-night))] md:min-h-[38rem]">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt=""
              fill
              priority
              sizes="100vw"
              quality={68}
              className="object-cover"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center opacity-25">
              <Motif name={motif} size={320} />
            </span>
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
          <Container
            size="atlas"
            className="relative flex min-h-[32rem] min-w-0 items-end pb-10 text-white md:min-h-[38rem] md:pb-14"
          >
            <div className="w-full min-w-0 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/68">
                {kind || "Archivo territorial"}
              </p>
              <h1 className="mt-4 max-w-full text-balance font-editorial text-[clamp(3rem,15vw,4.2rem)] font-semibold leading-[0.9] tracking-[-0.035em] !text-white [overflow-wrap:anywhere] md:text-[6.2rem] md:leading-[0.88]">
                {name}
              </h1>
              {count != null ? (
                <p className="mt-5 text-base text-white/82">
                  <span className="font-editorial text-3xl">{count}</span>{" "}
                  {Number(count) === 1 ? "mito" : "mitos"} en el archivo
                </p>
              ) : null}
              <span className="mt-3 block h-0.5 w-14 bg-ember-500" />
              {description ? (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                  {description}
                </p>
              ) : null}
            </div>
          </Container>
        </section>

        <Container size="atlas" className="py-10">
          <Breadcrumb items={crumbs} />
          {intro || hasCharacteristics ? (
            <div
              className={`mt-10 grid gap-12 ${
                hasCharacteristics ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
              }`}
            >
              {intro ? (
                <div>
                  <h2 className="font-editorial text-4xl font-semibold leading-none text-ink-900 md:text-5xl">
                    Un territorio narrado por sus voces
                  </h2>
                  <div className="mt-6 max-w-3xl">
                    {paragraphs ? (
                      <Prose className="prose-p:text-[1rem] prose-p:leading-[1.75]">
                        {paragraphs.map((paragraph, index) => (
                          <p
                            key={paragraph}
                            className={
                              index === 0
                                ? "first-letter:float-left first-letter:mr-2 first-letter:font-editorial first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-jungle-700"
                                : undefined
                            }
                          >
                            {paragraph}
                          </p>
                        ))}
                      </Prose>
                    ) : (
                      <Prose>{intro}</Prose>
                    )}
                  </div>
                </div>
              ) : null}

              {hasCharacteristics ? (
                <aside>
                  <h2 className="font-editorial text-3xl font-semibold text-ink-900">
                    Rasgos característicos
                  </h2>
                  <ul className="mt-4 border-y border-line-100">
                    {characteristics.map((characteristic) => (
                      <li
                        key={characteristic}
                        className="flex items-start gap-4 border-b border-line-100 py-4 last:border-b-0"
                      >
                        <Motif
                          name={motif}
                          size={22}
                          className="mt-0.5 shrink-0 opacity-70"
                        />
                        <span className="text-sm leading-relaxed text-ink-700">
                          {characteristic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </aside>
              ) : null}
            </div>
          ) : null}
        </Container>

        <section className="border-t border-line-100">
          {filterable ? (
            filterable
          ) : (
            <Container size="atlas" className="py-14">
              <MythGrid
                eyebrow={count != null ? `${count} relatos` : "Relatos"}
                title={`Mitos de ${name}`}
                myths={myths}
                pagination={pagination}
              />
            </Container>
          )}
        </section>

        {children}

        {hasIndex ? (
          <section className="border-t border-line-100 bg-mist-50">
            <Container size="atlas" className="py-14">
              <AtlasSectionHeader
                title={indexTitle || `Todos los mitos de ${name}`}
                description={`Índice completo · ${mythIndex.length} ${
                  mythIndex.length === 1 ? "mito" : "mitos"
                }`}
              />
              <MythIndexList myths={visibleIndex} />
              {remainingIndex.length ? (
                <details className="group mt-8 border-y border-line-200">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-semibold text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle-500/35 [&::-webkit-details-marker]:hidden">
                    <span>Mostrar {remainingIndex.length} mitos más</span>
                    <Icon
                      name="chevron-right"
                      size={18}
                      className="transition-transform duration-200 group-open:rotate-90"
                    />
                  </summary>
                  <div className="border-t border-line-100 pb-4 pt-2">
                    <MythIndexList
                      myths={remainingIndex}
                      startIndex={INDEX_PREVIEW_SIZE}
                    />
                  </div>
                </details>
              ) : null}
            </Container>
          </section>
        ) : null}
      </main>
    </>
  );
}
