import Link from "next/link";
import { Container } from "../atoms";

/**
 * El censo de la ruta, agrupado por territorio.
 *
 * Los movimientos cuentan el recorrido; esto muestra el dato que hay debajo:
 * los relatos completos, una vez cada uno, repartidos por la región de la que
 * vienen y con el pueblo en cuyo registro figura cada uno. Es también la capa
 * de enlace interno de la ruta hacia el resto del archivo.
 *
 * El pueblo va enlazado sólo cuando tiene ficha propia —el archivo se la da a
 * partir de seis relatos— y nunca cuando el registro es una bolsa del
 * importador («Mestizo», «Mixto»): esas no son pueblos y no se nombran como si
 * lo fueran.
 */
export function RouteCensus({
  myths = [],
  regions = [],
  communityPageSlugs = [],
  peopleSlugs = [],
}) {
  if (!myths.length || !regions.length) return null;

  const linkable = new Set(communityPageSlugs);
  const peoples = new Set(peopleSlugs);

  const groups = regions
    .map((region) => ({
      ...region,
      myths: myths.filter((myth) => myth.regionSlug === region.slug),
    }))
    .filter((group) => group.myths.length);

  return (
    <section className="border-t border-line-100 bg-mist-50">
      <Container size="atlas" className="py-14 md:py-20">
        <div className="max-w-[56ch]">
          <h2 className="atlas-section-heading">El archivo debajo</h2>
          <span className="atlas-rule" />
          <p className="mt-5 leading-[1.72] text-ink-700">
            Los {myths.length} relatos de la ruta, una vez cada uno, por el
            territorio del que vienen y el pueblo en cuyo registro figuran.
          </p>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <section key={group.slug}>
              <h3 className="atlas-title-sm">{group.name}</h3>
              <p className="atlas-figure mt-1 text-[0.8125rem] text-ink-500">
                {group.myths.length}{" "}
                {group.myths.length === 1 ? "relato" : "relatos"} en esta ruta
              </p>
              <ul className="mt-3.5 list-none border-t border-line-200 pt-3.5">
                {group.myths.map((myth) => {
                  const isPeople = myth.communitySlug && peoples.has(myth.communitySlug);
                  return (
                    <li
                      key={myth.slug}
                      className="border-b border-line-100 py-2.5 last:border-b-0"
                    >
                      <Link
                        href={`/mitos/${myth.slug}`}
                        className="block text-[0.9375rem] leading-[1.4] text-ink-900 transition-colors hover:text-jungle-700"
                      >
                        {myth.title}
                      </Link>
                      {isPeople ? (
                        <span className="mt-1 block text-[0.8125rem] text-ink-500">
                          {linkable.has(myth.communitySlug) ? (
                            <Link
                              href={`/comunidades/${myth.communitySlug}`}
                              className="border-b border-line-200 transition-colors hover:text-jungle-700"
                            >
                              {myth.community}
                            </Link>
                          ) : (
                            myth.community
                          )}
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
