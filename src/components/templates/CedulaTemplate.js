import Image from "next/image";
import Link from "next/link";
import { Container, Motif } from "../atoms";
import { MythCard } from "../molecules";
import { Header } from "../organisms";

/**
 * Plantilla · CedulaTemplate — el armazón de las internas de taxonomía.
 *
 * Sustituye a `TaxonomyDetailTemplate` en las páginas de pueblo y de región,
 * donde el texto llegaba como un párrafo corrido sin subtítulos y los mismos
 * relatos se mostraban dos veces: veinticuatro en el archivo filtrable y todos
 * otra vez en el índice de abajo.
 *
 * Aquí el texto va en bloques con título, una columna fija sostiene los datos
 * duros —cada página compone la suya en `aside`— y los relatos aparecen una
 * sola vez: cuatro para empezar y el índice completo debajo.
 */
export function CedulaTemplate({
  kicker,
  name,
  count,
  imageUrl,
  motif = "hoja",
  breadcrumb = [],
  aside,
  sections = [],
  featured = [],
  mythIndex = [],
  countLabel,
  children,
  active,
}) {
  const total = Number(count) || 0;

  return (
    <>
      <Header active={active} />
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
              {breadcrumb.length ? (
                <nav
                  aria-label="Ruta de navegación"
                  className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/76"
                >
                  {breadcrumb.map((crumb, i) => (
                    <span key={crumb.label} className="flex items-center gap-2">
                      {i > 0 ? (
                        <span aria-hidden className="opacity-60">
                          /
                        </span>
                      ) : null}
                      {crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="border-b border-white/40 transition-colors hover:text-white"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span aria-current="page">{crumb.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
              ) : null}

              {kicker ? (
                <p className="atlas-kicker mt-5 !text-white/78">{kicker}</p>
              ) : null}
              <h1 className="atlas-h1 mt-3 !text-white">{name}</h1>
              <span className="atlas-rule bg-ember-500" />
              <p className="mt-5 flex items-baseline gap-2.5">
                <span className="atlas-figure font-editorial text-[length:var(--step-4)] leading-none">
                  {total}
                </span>
                <span className="atlas-kicker !text-white/74">
                  {total === 1 ? "relato" : "relatos"} en el archivo
                </span>
              </p>
            </div>
          </Container>
        </section>

        <Container size="atlas" className="pt-11 md:pt-14">
          <div className="grid gap-10 lg:grid-cols-[268px_minmax(0,1fr)] lg:gap-14">
            {aside}
            <div className="flex flex-col gap-7">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="border-t border-line-100 pt-5"
                >
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
                {countLabel || (total === 1 ? "Su relato" : `Los ${total} relatos`)}
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
                    className="group grid min-h-11 grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-2.5 py-2.5 text-ink-900 transition-colors hover:text-jungle-700"
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

/**
 * Bloque de la columna fija. `items` son enlaces con cifra al margen —los
 * pueblos de un territorio, los vecinos de un pueblo—; `value` es una cifra
 * suelta; `text` una nota cuando no hay ni lo uno ni lo otro.
 */
export function CedulaBlock({ label, href, title, meta, value, items, text, children }) {
  return (
    <div>
      <p className="atlas-kicker">{label}</p>

      {title ? (
        href ? (
          <Link href={href} className="atlas-title-md group mt-2 block">
            {title}
          </Link>
        ) : (
          <p className="atlas-title-md mt-2">{title}</p>
        )
      ) : null}

      {meta ? (
        <p className="atlas-figure mt-1 text-[length:var(--step--1)] text-ink-500">
          {meta}
        </p>
      ) : null}

      {value != null ? (
        <p className="atlas-figure mt-1.5 font-editorial text-[length:var(--step-4)] leading-none text-jungle-700">
          {value}
        </p>
      ) : null}

      {items?.length ? (
        <ul className="mt-2 border-t border-line-100">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 items-baseline justify-between gap-3 border-b border-line-100 py-2 text-[length:var(--step--1)] text-ink-900 transition-colors hover:text-jungle-700"
              >
                <span className="min-w-0">{item.name}</span>
                {item.count != null ? (
                  <span className="atlas-figure shrink-0 text-xs text-ink-500">
                    {item.count}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {text ? (
        <p className="mt-2 text-[length:var(--step--1)] leading-relaxed text-ink-500">
          {text}
        </p>
      ) : null}

      {children}
    </div>
  );
}
