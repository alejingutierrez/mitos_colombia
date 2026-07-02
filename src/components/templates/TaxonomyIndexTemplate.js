import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Eyebrow,
  Motif,
  StatusDot,
  IndexNumber,
  Icon,
} from "../atoms";
import { Header, TaxonomyGrid, RouteGrid } from "../organisms";

/**
 * Template · TaxonomyIndexTemplate — sala de acceso
 * Hero editorial con motivo a escala + grilla de tarjetas-obra + índice rastreable
 * de mitos representativos (SEO: acerca cada mito a un salto del hub) + footer.
 * `kind="routes"` usa RouteGrid; el resto TaxonomyGrid.
 *
 * Props: { eyebrow, title, description, items, kind?, active?, accent?, columns?,
 *          heroMotif?, mythIndex?: [{ title, href, myths: [{slug,title}] }], footer? }
 */
export function TaxonomyIndexTemplate({
  eyebrow = "Explora",
  title,
  description,
  items = [],
  kind = "taxonomy",
  active,
  accent = "jungle",
  columns = 3,
  heroMotif = "jaguar",
  mythIndex,
  footer,
  children,
}) {
  const hasMythIndex = Array.isArray(mythIndex) && mythIndex.length > 0;

  return (
    <>
      <Header active={active} />
      <main className="min-h-[100dvh] bg-paper">
        {/* Hero con motivo a escala */}
        <section className="relative overflow-hidden">
          <Motif
            name={heroMotif}
            size={480}
            className="pointer-events-none absolute -right-24 -top-16 z-0 hidden opacity-[0.05] lg:block"
            aria-hidden="true"
          />
          <Container size="wide" className="relative z-10 py-14 md:py-20">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <StatusDot tone={accent} />
                <Eyebrow tone={accent}>{eyebrow}</Eyebrow>
              </div>
              <Heading level={0} accent={accent}>
                {title}
              </Heading>
              {description ? (
                <Text size="lg" className="mt-6 max-w-xl">
                  {description}
                </Text>
              ) : null}
            </div>
          </Container>
        </section>

        <Container size="wide" className="pb-4">
          {kind === "routes" ? (
            <RouteGrid routes={items} eyebrow={null} />
          ) : (
            <TaxonomyGrid items={items} columns={columns} />
          )}
          {footer ? <div className="mt-10 flex justify-center">{footer}</div> : null}
        </Container>

        {children}

        {/* Índice rastreable de mitos representativos por taxón (SEO) */}
        {hasMythIndex ? (
          <div className="border-t border-line-100">
            <Container size="wide" className="py-16">
              <div className="mb-10 flex items-center gap-3">
                <Motif name={heroMotif} size={30} className="shrink-0" />
                <Eyebrow tone={accent} withRule>
                  Mitos para empezar
                </Eyebrow>
              </div>
              <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
                {mythIndex.map((group, i) => (
                  <div key={group.href} className="group">
                    <div className="mb-3 flex items-baseline gap-2.5 border-b border-line-100 pb-2">
                      <IndexNumber value={i + 1} size="sm" />
                      <Link
                        href={group.href}
                        className={`link-underline font-display text-base font-semibold text-ink-900`}
                      >
                        {group.title}
                      </Link>
                      <Icon
                        name="arrow-up-right"
                        size={14}
                        className={`mc-arrow ml-auto ${accent === "river" ? "text-river-600" : "text-jungle-600"}`}
                      />
                    </div>
                    <ul className="space-y-1.5">
                      {(group.myths || []).map((m) => (
                        <li key={m.slug}>
                          <Link
                            href={`/mitos/${m.slug}`}
                            className={`text-sm leading-snug text-ink-600 transition-colors ${accent === "river" ? "hover:text-river-600" : "hover:text-jungle-600"}`}
                          >
                            {m.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        ) : null}
      </main>
    </>
  );
}
