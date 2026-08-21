import { CedulaBlock, CedulaTemplate } from "./CedulaTemplate";

/**
 * Plantilla · RegionDetailTemplate — la cédula de un territorio.
 *
 * Misma pieza que la del pueblo, con la columna fija propia de la región: su
 * cifra, los pueblos que la sostienen —que es el puente que faltaba entre
 * /regiones y /comunidades— y los rasgos de su tradición.
 */
export function RegionDetailTemplate({
  region,
  communities = [],
  characteristics = [],
  sections = [],
  featured = [],
  mythIndex = [],
  motif = "hoja",
  children,
}) {
  const { name, count, imageUrl, kicker } = region || {};

  const aside = (
    <aside className="flex flex-col gap-7 lg:sticky lg:top-24">
      <CedulaBlock label="Relatos de este territorio" value={count} />

      {communities.length ? (
        <CedulaBlock
          label="Pueblos de este territorio"
          items={communities.map((c) => ({
            href: `/comunidades/${c.slug}`,
            name: c.name,
            count: c.count,
          }))}
        />
      ) : (
        <CedulaBlock
          label="Pueblos de este territorio"
          text="Ningún pueblo de esta región supera todavía el umbral de relatos que da página propia; sus historias se leen aquí, por territorio."
        />
      )}

      {characteristics.length ? (
        <CedulaBlock label="Rasgos de su tradición">
          <ul className="mt-2 flex flex-col gap-1.5 border-t border-line-100 pt-2.5">
            {characteristics.map((rasgo) => (
              <li
                key={rasgo}
                className="text-[length:var(--step--1)] leading-relaxed text-ink-700"
              >
                {rasgo}
              </li>
            ))}
          </ul>
        </CedulaBlock>
      ) : null}
    </aside>
  );

  return (
    <CedulaTemplate
      active="/regiones"
      kicker={kicker}
      name={name}
      count={count}
      imageUrl={imageUrl}
      motif={motif}
      breadcrumb={[{ label: "Regiones", href: "/regiones" }, { label: name }]}
      aside={aside}
      sections={sections}
      featured={featured}
      mythIndex={mythIndex}
    >
      {children}
    </CedulaTemplate>
  );
}
