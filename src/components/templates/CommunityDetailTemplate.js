import { Icon, Motif } from "../atoms";
import { CedulaBlock, CedulaTemplate } from "./CedulaTemplate";

/**
 * Plantilla · CommunityDetailTemplate — la cédula de un pueblo.
 *
 * Compone la columna fija propia del pueblo —su territorio, su cifra y los
 * otros pueblos del mismo territorio— y delega el resto en `CedulaTemplate`.
 */
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

  const aside = (
    <aside className="flex flex-col gap-7 lg:sticky lg:top-24">
      {region ? (
        <CedulaBlock
          label="Territorio"
          href={`/regiones/${region.slug}`}
          title={
            <>
              {region.name}
              <Icon name="arrow-right" size={17} className="mc-arrow ml-2 inline" />
            </>
          }
          meta={region.count ? `${region.count} relatos en la región` : null}
        />
      ) : null}

      <CedulaBlock label="Relatos de este pueblo" value={count} />

      {siblings.length ? (
        <CedulaBlock
          label={`Otros pueblos de ${region?.name || "este territorio"}`}
          items={siblings.map((s) => ({
            href: `/comunidades/${s.slug}`,
            name: s.name,
            count: s.count,
          }))}
        />
      ) : (
        <CedulaBlock
          label="Otros pueblos"
          text="Ningún otro pueblo de este territorio supera todavía el umbral de relatos que da página propia."
        >
          {motif ? (
            <span className="mt-4 block opacity-25">
              <Motif name={motif} size={52} />
            </span>
          ) : null}
        </CedulaBlock>
      )}
    </aside>
  );

  return (
    <CedulaTemplate
      active="/comunidades"
      kicker={kicker}
      name={name}
      count={count}
      imageUrl={imageUrl}
      motif={motif}
      breadcrumb={[
        { label: "Comunidades", href: "/comunidades" },
        ...(region ? [{ label: region.name, href: `/regiones/${region.slug}` }] : []),
        { label: name },
      ]}
      aside={aside}
      sections={sections}
      featured={featured}
      mythIndex={mythIndex}
    >
      {children}
    </CedulaTemplate>
  );
}
