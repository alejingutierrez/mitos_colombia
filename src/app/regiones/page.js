import { TaxonomyIndexTemplate } from "../../components/templates";
import { getTaxonomy, listMythLinksByTaxon } from "../../lib/myths";
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

const REGION_DESCRIPTIONS = {
  Amazonas: "Selva, ríos y cosmogonías amazónicas.",
  Andina: "Páramos, lagunas y seres de la cordillera.",
  Caribe: "Mar, manglar y relatos de la costa.",
  Pacífico: "Manglares, ritmo y memoria afro del litoral.",
  Orinoquía: "Llanos, sabanas y ánimas errantes.",
  Insular: "Islas del Caribe y su memoria raizal.",
  Varios: "Historias que cruzan varios territorios.",
};

const REGION_MOTIFS = {
  Amazonas: "hoja",
  Andina: "montana",
  Caribe: "agua",
  Pacífico: "delfin",
  Orinoquía: "luna",
  Insular: "sol",
  Varios: "condor",
};

export default async function RegionesPage() {
  const taxonomy = await getTaxonomy();
  const regions = [...(taxonomy.regions || [])].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Enlaces de mitos representativos por región (índice rastreable, SEO).
  const regionMyths = await Promise.all(
    regions.map((region) => listMythLinksByTaxon("region", region.slug))
  );

  const items = regions.map((region) => ({
    title: region.name,
    href: `/regiones/${region.slug}`,
    count: region.myth_count,
    motif: REGION_MOTIFS[region.name] || "hoja",
    imageUrl: region.image_url,
    description:
      REGION_DESCRIPTIONS[region.name] || "Explora los mitos de esta región.",
  }));

  const mythIndex = regions
    .map((region, i) => ({
      title: region.name,
      href: `/regiones/${region.slug}`,
      myths: (regionMyths[i] || []).slice(0, 6),
    }))
    .filter((g) => g.myths.length > 0);

  return (
    <TaxonomyIndexTemplate
      eyebrow="Explora por territorio"
      title="Regiones culturales de Colombia"
      description="Cada región tiene sus propias tradiciones, pueblos y narrativas. Recorre los mitos según la geografía de donde provienen, de la selva amazónica al mar Caribe."
      items={items}
      mythIndex={mythIndex}
      active="/regiones"
      heroMotif="montana"
      columns={3}
    />
  );
}
