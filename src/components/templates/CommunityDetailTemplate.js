import Link from "next/link";
import { Icon } from "../atoms";
import { MuralCell, MuralInlineList, MuralTemplate } from "./MuralTemplate";

/**
 * Plantilla · CommunityDetailTemplate — la ficha de un pueblo.
 *
 * Compone las tres celdas propias del pueblo —su territorio, su cifra y los
 * otros pueblos del mismo territorio— y delega el resto en `MuralTemplate`.
 */
export function CommunityDetailTemplate({
  community,
  region,
  siblings = [],
  sections = [],
  lead,
  myths = [],
  motif = "condor",
  children,
}) {
  const { name, count, imageUrl, kicker } = community || {};

  const strip = (
    <>
      {region ? (
        <MuralCell label="Territorio" first>
          <Link
            href={`/regiones/${region.slug}`}
            className="atlas-title-sm group mt-2 inline-block"
          >
            {region.name}
            <Icon name="arrow-right" size={16} className="mc-arrow ml-1.5 inline" />
          </Link>
          {region.count ? (
            <span className="atlas-figure mt-1 block text-[0.8125rem] text-ink-500">
              {region.count} relatos en la región
            </span>
          ) : null}
        </MuralCell>
      ) : null}

      <MuralCell label="Relatos de este pueblo" first={!region}>
        <span className="atlas-figure mt-1 block font-editorial text-[length:var(--step-4)] leading-none text-jungle-700">
          {Number(count) || 0}
        </span>
      </MuralCell>

      {siblings.length ? (
        <MuralCell label={`Otros pueblos de ${region?.name || "este territorio"}`}>
          <MuralInlineList>
            {siblings.map((s) => (
              <span key={s.slug}>
                <Link
                  href={`/comunidades/${s.slug}`}
                  className="border-b border-line-200 transition-colors hover:text-jungle-700"
                >
                  {s.name}
                </Link>{" "}
                <span className="atlas-figure text-ink-500">{s.count}</span>
              </span>
            ))}
          </MuralInlineList>
        </MuralCell>
      ) : (
        <MuralCell label="Otros pueblos">
          <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-500">
            Ningún otro pueblo de este territorio supera todavía el umbral de
            relatos que da página propia.
          </p>
        </MuralCell>
      )}
    </>
  );

  return (
    <MuralTemplate
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
      strip={strip}
      lead={lead}
      sections={sections}
      myths={myths}
    >
      {children}
    </MuralTemplate>
  );
}
