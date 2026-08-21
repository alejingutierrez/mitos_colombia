import { Container } from "../atoms";
import { Header, RegionMosaic } from "../organisms";

/**
 * Plantilla · RegionIndexTemplate — dirección "Proporción" para /regiones.
 *
 * Seis territorios repartidos por lo que pesan. Sustituye al mosaico
 * alfabético de `TaxonomyIndexTemplate`, que daba la pieza mayor a Amazonas y
 * mandaba Andina —un tercio del archivo— a una banda lateral.
 *
 * Props: `regions` = [{ slug, name, count, imageUrl, motif, paragraph, myths }].
 * `paragraph` es el párrafo editorial de `region-info.js`, que hasta ahora sólo
 * se veía dentro de la región.
 */
export function RegionIndexTemplate({
  eyebrow,
  title,
  description,
  regions = [],
  active = "/regiones",
  children,
}) {
  return (
    <>
      <Header active={active} />
      <main id="contenido" className="min-h-[100dvh] overflow-x-clip bg-paper">
        <Container size="atlas" className="pb-7 pt-10 md:pt-14">
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

        {/* El mosaico sangra a los bordes del contenedor atlas, no de la
            pantalla: mantiene el canal de aire del sistema. */}
        <Container size="atlas" className="pb-14 md:pb-20">
          <RegionMosaic regions={regions} />
        </Container>

        {children}
      </main>
    </>
  );
}
