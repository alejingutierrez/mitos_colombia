import { notFound } from "next/navigation";
import { filterAllowedCommunities } from "../../../lib/communityFilters";
import { getTaxonomy, listMythPlatesByTaxon } from "../../../lib/myths";
import { REGION_INFO, REGION_MOTIFS, regionSections } from "../../../lib/region-info";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { resolveRouteParams } from "../../../lib/next-route-props";
import { withMythImageVariants } from "../../../lib/myth-images";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "../../../components/StructuredData";
import { RegionDetailTemplate } from "../../../components/templates";

export const runtime = "nodejs";
export const revalidate = 300;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
)
  .trim()
  .replace(/\/+$/, "");

export async function generateStaticParams() {
  const taxonomy = await getTaxonomy();
  return (taxonomy.regions || [])
    .filter((r) => r.slug)
    .map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();
  const region = taxonomy.regions.find((r) => r.slug === slug);

  if (!region) {
    return {
      title: "Región no encontrada | Mitos de Colombia",
      description: "La región solicitada no está disponible.",
    };
  }

  const regionInfo = REGION_INFO[slug] || {};
  const title = regionInfo.title || region.name;
  const description =
    regionInfo.description || `Explora los mitos de la región ${region.name}`;
  const seo = await getSeoEntry("region", slug);

  return buildSeoMetadata({
    fallback: {
      title: `${title} | Mitos de Colombia`,
      description,
      keywords: [region.name, "región cultural", "Colombia", "mitología", "tradición oral"],
    },
    seo,
    canonicalPath: `/regiones/${slug}`,
    imageUrl: region.image_url || undefined,
  });
}

export default async function RegionDetailPage({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();
  const region = taxonomy.regions.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  const info = REGION_INFO[slug] || {};
  const nombre = info.title || region.name;

  // Texto en bloques con título; si la región no tiene `sections` escritas cae
  // a su texto largo como un solo bloque.
  const respaldo = `La región ${region.name} es una de las áreas culturales de Colombia, hogar de diversos pueblos y tradiciones que han preservado mitos ancestrales sobre el origen del mundo, la naturaleza y la sociedad.`;
  const sections = regionSections(slug, respaldo);

  // Los pueblos de este territorio: el puente que faltaba entre /regiones y
  // /comunidades. Antes sólo servían como facetas de un filtro que no salía de
  // la página.
  const communities = filterAllowedCommunities(taxonomy.communities)
    .filter((c) => c.region_slug === region.slug)
    .sort((a, b) => (Number(b.myth_count) || 0) - (Number(a.myth_count) || 0))
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      count: Number(c.myth_count) || 0,
    }));

  // Todos los relatos del territorio, cada uno con su obra: es lo que dibuja
  // el muro, y sigue siendo el índice rastreable de siempre —el título va como
  // texto real dentro de cada pieza. Antes eran dos consultas: cuatro con
  // imagen y el resto como renglones, con esos cuatro repetidos en las dos.
  const mythPlates = (await listMythPlatesByTaxon("region", region.slug)).map((m) =>
    withMythImageVariants({
      slug: m.slug,
      title: m.title,
      image_url: m.image_url,
      vertical_image_url: m.vertical_image_url,
    })
  );

  const collectionItems = mythPlates.slice(0, 30).map((m) => ({
    url: `${SITE_URL}/mitos/${m.slug}`,
    name: m.title,
  }));

  return (
    <>
      {SITE_URL && (
        <>
          <BreadcrumbJsonLd
            items={[
              { name: "Inicio", url: `${SITE_URL}/` },
              { name: "Regiones", url: `${SITE_URL}/regiones` },
              { name: region.name, url: `${SITE_URL}/regiones/${region.slug}` },
            ]}
          />
          <CollectionPageJsonLd
            name={`Mitos de la región ${region.name}`}
            description={info.description}
            url={`${SITE_URL}/regiones/${region.slug}`}
            items={collectionItems}
          />
        </>
      )}
      <RegionDetailTemplate
        region={{
          name: nombre,
          count: Number(region.myth_count) || 0,
          imageUrl: region.image_url,
          kicker: "Región cultural",
        }}
        communities={communities}
        characteristics={info.characteristics || []}
        sections={sections}
        lead={info.description}
        myths={mythPlates}
        motif={REGION_MOTIFS[slug] || "hoja"}
      />
    </>
  );
}
