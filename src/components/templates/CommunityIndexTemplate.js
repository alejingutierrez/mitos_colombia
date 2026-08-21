import { Container } from "../atoms";
import { CommunityMesa, Header } from "../organisms";

/**
 * Plantilla · CommunityIndexTemplate — dirección "Mesa de pueblos" para
 * /comunidades.
 *
 * Los veinte pueblos a la vista de entrada, con búsqueda, filtro por
 * territorio y orden. Sustituye a la retícula plana de `TaxonomyIndexTemplate`,
 * donde de la quinta tarjeta en adelante todas pesaban lo mismo y no había
 * forma de encontrar un pueblo por su nombre.
 */
export function CommunityIndexTemplate({
  eyebrow,
  title,
  description,
  communities = [],
  regions = [],
  note,
  active = "/comunidades",
  children,
}) {
  return (
    <>
      <Header active={active} />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        <Container size="atlas" className="pb-8 pt-10 md:pt-14">
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-16">
            <div>
              {eyebrow ? <p className="atlas-kicker">{eyebrow}</p> : null}
              <h1 className="atlas-h1 mt-4">{title}</h1>
              <span className="atlas-rule" />
            </div>
            {description ? (
              <p className="max-w-prose leading-relaxed text-ink-700">
                {description}
              </p>
            ) : null}
          </div>
        </Container>

        <Container size="atlas" className="pb-12">
          <CommunityMesa communities={communities} regions={regions} />
          {note ? (
            <p className="mt-8 max-w-[46rem] border-t border-line-100 pt-5 text-[length:var(--step--1)] leading-relaxed text-ink-500">
              {note}
            </p>
          ) : null}
        </Container>

        {children}
      </main>
    </>
  );
}
