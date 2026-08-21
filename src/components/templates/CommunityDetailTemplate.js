import Image from "next/image";
import Link from "next/link";
import { Container, Icon, Motif } from "../atoms";
import { MythCard } from "../molecules";
import { Header } from "../organisms";

/**
 * Plantilla · CommunityDetailTemplate — dirección "Cédula" para
 * /comunidades/[slug].
 *
 * Sustituye a `TaxonomyDetailTemplate` en la interna de un pueblo, donde el
 * texto llegaba como un párrafo corrido sin subtítulos y los mismos relatos se
 * mostraban tres veces (tarjetas, lista de 24 e índice completo).
 *
 * Aquí el texto va en bloques con título, una columna fija sostiene los datos
 * duros —territorio, cifra, pueblos vecinos— y los relatos aparecen una sola
 * vez: cuatro para empezar y el índice completo debajo.
 */

function Aside({ region, count, siblings, motif }) {
  return (
    <aside className="flex flex-col gap-7 lg:sticky lg:top-24">
      {region ? (
        <div>
          <p className="atlas-kicker">Territorio</p>
          <Link
            href={`/regiones/${region.slug}`}
            className="atlas-title-md group mt-2 flex items-center gap-2"
          >
            {region.name}
            <Icon name="arrow-right" size={17} className="mc-arrow" />
          </Link>
          {region.count ? (
            <p className="atlas-figure mt-1 text-[length:var(--step--1)] text-ink-500">
              {region.count} relatos en la región
            </p>
          ) : null}
        </div>
      ) : null}

      <div>
        <p className="atlas-kicker">Relatos de este pueblo</p>
        <p className="atlas-figure mt-1.5 font-editorial text-[length:var(--step-4)] leading-none text-jungle-700">
          {count}
        </p>
      </div>

      {siblings?.length ? (
        <div>
          <p className="atlas-kicker">
            Otros pueblos de {region?.name || "este territorio"}
          </p>
          <ul className="mt-2 border-t border-line-100">
            {siblings.map((sibling) => (
              <li key={sibling.slug}>
                <Link
                  href={`/comunidades/${sibling.slug}`}
                  className="flex min-h-11 items-baseline justify-between gap-3 border-b border-line-100 py-2 text-[length:var(--step--1)] text-ink-900 transition-colors hover:text-jungle-700"
                >
                  <span className="min-w-0">{sibling.name}</span>
                  <span className="atlas-figure shrink-0 text-xs text-ink-500">
                    {sibling.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p className="atlas-kicker">Otros pueblos</p>
          <p className="mt-2 text-[length:var(--step--1)] leading-relaxed text-ink-500">
            Ningún otro pueblo de este territorio supera todavía el umbral de
            relatos que da página propia.
          </p>
          {motif ? (
            <span className="mt-4 block opacity-25">
              <Motif name={motif} size={52} />
            </span>
          ) : null}
        </div>
      )}
    </aside>
  );
}

export function CommunityDetailTemplate({
  community,
  region,
  siblings = [],
  sections = [],
  featured = [],
  mythIndex = [],
  motif = "condor",
  children,
}) {
  const { name, count, imageUrl, kicker } = community || {};

  return (
    <>
      <Header active="/comunidades" />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        <section className="relative min-h-[26rem] overflow-hidden bg-[rgb(var(--atlas-night))] md:min-h-[28rem]">
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
            <span className="absolute inset-0 flex items-center justify-center opacity-20">
              <Motif name={motif} size={220} />
            </span>
          )}
          <span className="atlas-scrim-deep absolute inset-0" />
          <Container
            size="atlas"
            className="atlas-on-image relative flex min-h-[26rem] items-end pb-9 text-white md:min-h-[28rem] md:pb-12"
          >
            <div className="min-w-0">
              <nav
                aria-label="Ruta de navegación"
                className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/76"
              >
                <Link
                  href="/comunidades"
                  className="border-b border-white/40 transition-colors hover:text-white"
                >
                  Comunidades
                </Link>
                {region ? (
                  <>
                    <span aria-hidden className="opacity-60">
                      /
                    </span>
                    <Link
                      href={`/regiones/${region.slug}`}
                      className="border-b border-white/40 transition-colors hover:text-white"
                    >
                      {region.name}
                    </Link>
                  </>
                ) : null}
                <span aria-hidden className="opacity-60">
                  /
                </span>
                <span aria-current="page">{name}</span>
              </nav>

              {kicker ? (
                <p className="atlas-kicker mt-5 !text-white/78">{kicker}</p>
              ) : null}
              <h1 className="atlas-h1 mt-3 !text-white">{name}</h1>
              <span className="atlas-rule bg-ember-500" />
              <p className="mt-5 flex items-baseline gap-2.5">
                <span className="atlas-figure font-editorial text-[length:var(--step-4)] leading-none">
                  {count}
                </span>
                <span className="atlas-kicker !text-white/74">
                  {Number(count) === 1 ? "relato" : "relatos"} en el archivo
                </span>
              </p>
            </div>
          </Container>
        </section>

        <Container size="atlas" className="pt-11 md:pt-14">
          <div className="grid gap-10 lg:grid-cols-[268px_minmax(0,1fr)] lg:gap-14">
            <Aside
              region={region}
              count={count}
              siblings={siblings}
              motif={motif}
            />

            <div className="flex flex-col gap-7">
              {sections.map((section) => (
                <section key={section.title} className="border-t border-line-100 pt-5">
                  <h2 className="atlas-title-md">{section.title}</h2>
                  {String(section.body || "")
                    .split(/\n{1,}/)
                    .map((paragraph) => paragraph.trim())
                    .filter(Boolean)
                    .map((paragraph, i) => (
                      <p
                        key={i}
                        className="mt-2.5 max-w-prose leading-[1.75] text-ink-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                </section>
              ))}
            </div>
          </div>
        </Container>

        <Container size="atlas" className="py-12 md:py-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="atlas-section-heading">
                {count === 1 ? "Su relato" : `Los ${count} relatos`}
              </h2>
              <span className="atlas-rule" />
            </div>
            <p className="atlas-figure shrink-0 text-[0.8125rem] text-ink-500">
              Índice completo
            </p>
          </div>

          {featured.length ? (
            <div className="mb-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((myth) => (
                <MythCard key={myth.slug} myth={myth} motif={motif} />
              ))}
            </div>
          ) : null}

          {mythIndex.length ? (
            <ul className="columns-1 gap-11 border-t border-line-100 pt-1.5 sm:columns-2 lg:columns-3">
              {mythIndex.map((myth, index) => (
                <li
                  key={myth.slug}
                  className="break-inside-avoid border-b border-line-100"
                >
                  <Link
                    href={`/mitos/${myth.slug}`}
                    className="group grid min-h-11 grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-2.5 py-2.5 text-ink-900 transition-colors hover:text-jungle-700"
                  >
                    <span className="atlas-figure font-editorial text-[0.9375rem] text-ink-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[length:var(--step--1)] leading-relaxed">
                      {myth.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </Container>

        {children}
      </main>
    </>
  );
}
