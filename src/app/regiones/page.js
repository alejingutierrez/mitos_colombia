import { RegionIndexTemplate } from "../../components/templates";
import { Container, Heading, Text } from "../../components/atoms";
import { getTaxonomy, listMythLinksByTaxon } from "../../lib/myths";
import { REGION_INFO, REGION_MOTIFS } from "../../lib/region-info";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "regiones");
  return buildSeoMetadata({
    fallback: {
      title: "Regiones culturales | Mitos de Colombia",
      description:
        "Explora los mitos colombianos organizados por regiones culturales y territorios ancestrales.",
      keywords: ["regiones", "mitos colombianos", "territorio", "cultura"],
    },
    seo,
    canonicalPath: "/regiones",
  });
}

export default async function RegionesPage() {
  const taxonomy = await getTaxonomy();

  // Orden por volumen: es el que manda en la composición. El reparto de área
  // de `RegionMosaic` lo recalcula de todas formas, pero así el HTML servido
  // ya viene de mayor a menor.
  const regions = [...(taxonomy.regions || [])].sort(
    (a, b) => (b.myth_count || 0) - (a.myth_count || 0)
  );

  // Cuatro relatos por región para el panel. Van servidos en el HTML para las
  // seis, no sólo para la abierta: es índice rastreable, no adorno.
  const regionMyths = await Promise.all(
    regions.map((region) => listMythLinksByTaxon("region", region.slug))
  );

  const items = regions.map((region, i) => {
    const info = REGION_INFO[region.slug] || {};
    return {
      slug: region.slug,
      name: region.name,
      count: Number(region.myth_count) || 0,
      imageUrl: region.image_url,
      motif: REGION_MOTIFS[region.slug] || "hoja",
      // El párrafo editorial vivía sólo en la interna; aquí es lo que sostiene
      // el panel de la región abierta.
      paragraph: info.description || null,
      myths: (regionMyths[i] || []).slice(0, 4),
    };
  });

  return (
    <RegionIndexTemplate
      eyebrow="El archivo por territorio"
      title="Regiones culturales de Colombia"
      description="Seis territorios repartidos por lo que pesan: cada pieza ocupa el área que le corresponde entre todos los relatos del archivo. Andina es más de un tercio; Varios, apenas un filo."
      regions={items}
      active="/regiones"
    >
      <Container size="atlas" className="border-t border-line-100 py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Heading level={2}>Leer el territorio como archivo oral</Heading>
          <div className="space-y-4">
            <Text>
              La organización regional permite reconocer cómo cambian los
              personajes, los paisajes y las advertencias morales de un relato a
              otro. En la Amazonía dominan las genealogías del agua y la selva;
              en los Andes aparecen lagunas, páramos y caminos de montaña; en el
              Caribe y el Pacífico, la costa, los ríos y la memoria comunitaria
              abren otras formas de narrar.
            </Text>
            <Text>
              Esta lectura no encierra los mitos en fronteras rígidas. Muchas
              historias viajan, se mezclan y vuelven con nombres distintos. Por
              eso cada región funciona como una puerta de entrada: ayuda a
              encontrar afinidades geográficas sin perder de vista que la
              tradición oral colombiana es móvil, compartida y cambiante.
            </Text>
          </div>
        </div>
      </Container>
    </RegionIndexTemplate>
  );
}
