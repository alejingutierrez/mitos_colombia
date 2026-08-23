import Link from "next/link";
import { Tag } from "../atoms";
import { MuralCell, MuralInlineList, MuralTemplate } from "./MuralTemplate";

/**
 * Plantilla · RegionDetailTemplate — la ficha de un territorio.
 *
 * Misma pieza que la del pueblo, con las celdas propias de la región: su
 * cifra, los pueblos que la sostienen —que es el puente entre /regiones y
 * /comunidades— y los rasgos de su tradición.
 *
 * Los rasgos vivían en la columna fija como lista vertical; aquí van en
 * línea, separados por punto medio. Son cinco frases cortas y de un vistazo
 * dicen qué se va a encontrar en el muro.
 */
export function RegionDetailTemplate({
  region,
  communities = [],
  characteristics = [],
  sections = [],
  lead,
  myths = [],
  motif = "hoja",
  children,
}) {
  const { name, count, imageUrl, kicker } = region || {};

  const strip = (
    <>
      <MuralCell label="Relatos de este territorio" first>
        <span className="atlas-figure mt-1 block font-editorial text-[length:var(--step-4)] leading-none text-jungle-700">
          {Number(count) || 0}
        </span>
      </MuralCell>

      {communities.length ? (
        <MuralCell label="Pueblos de este territorio">
          <MuralInlineList>
            {communities.map((c) => (
              <span key={c.slug}>
                <Link
                  href={`/comunidades/${c.slug}`}
                  className="border-b border-line-200 transition-colors hover:text-jungle-700"
                >
                  {c.name}
                </Link>{" "}
                <span className="atlas-figure text-ink-500">{c.count}</span>
              </span>
            ))}
          </MuralInlineList>
        </MuralCell>
      ) : (
        <MuralCell label="Pueblos de este territorio">
          <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-500">
            Ningún pueblo de esta región supera todavía el umbral de relatos que
            da página propia; sus historias se leen aquí, por territorio.
          </p>
        </MuralCell>
      )}

      {characteristics.length ? (
        <MuralCell label="Rasgos de su tradición">
          {/* Etiquetas y no una lista separada por puntos: son rótulos, no
              prosa, y el borde de cada `Tag` los delimita al plegarse sin
              dejar separadores colgando al final de la línea. */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {characteristics.map((rasgo) => (
              <Tag key={rasgo} variant="neutral">
                {rasgo}
              </Tag>
            ))}
          </div>
        </MuralCell>
      ) : null}
    </>
  );

  return (
    <MuralTemplate
      active="/regiones"
      kicker={kicker}
      name={name}
      count={count}
      imageUrl={imageUrl}
      motif={motif}
      breadcrumb={[{ label: "Regiones", href: "/regiones" }, { label: name }]}
      strip={strip}
      stripColumns="lg:grid-cols-[0.9fr_1.5fr_1.6fr]"
      lead={lead}
      sections={sections}
      myths={myths}
    >
      {children}
    </MuralTemplate>
  );
}
