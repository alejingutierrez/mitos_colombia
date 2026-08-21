import { notFound } from "next/navigation";
import { filterAllowedCommunities } from "../../../lib/communityFilters";
import { getTaxonomy, listMyths, listMythLinksByTaxon } from "../../../lib/myths";
import { REGION_INFO, REGION_MOTIFS, RIVER_REGIONS } from "../../../lib/region-info";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { resolveRouteParams } from "../../../lib/next-route-props";
import { withMythImageVariants } from "../../../lib/myth-images";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "../../../components/StructuredData";
import { TaxonomyDetailTemplate } from "../../../components/templates";
import { FilterableArchive } from "../../../components/organisms";

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

  const regionInfo = REGION_INFO[slug] || {
    title: region.name,
    description: "Región cultural de Colombia con rica tradición mitológica.",
    longDescription: `La región ${region.name} es una de las áreas culturales de Colombia, hogar de diversos pueblos y tradiciones que han preservado mitos ancestrales sobre el origen del mundo, la naturaleza y la sociedad.`,
    characteristics: [],
  };

  const accent = RIVER_REGIONS.includes(slug) ? "river" : "jungle";
  const motif = REGION_MOTIFS[slug] || "hoja";

  // Muestra para exploración interactiva (filtrable en cliente, SSR = rastreable).
  const result = await listMyths({ region: region.slug, limit: 24, offset: 0 });
  const exploreMyths = (result?.items || []).map((m) =>
    withMythImageVariants({
      slug: m.slug,
      title: m.title,
      excerpt: m.excerpt,
      region: m.region,
      community: m.community,
      image_url: m.image_url,
      vertical_image_url: m.vertical_image_url,
    })
  );

  // Comunidades de esta región → facetas de filtro.
  const regionCommunities = filterAllowedCommunities(taxonomy.communities).filter(
    (c) => c.region_slug === region.slug
  );
  const communityOptions = regionCommunities
    .map((c) => ({ value: c.name, label: c.name }))
    .filter((o) => exploreMyths.some((m) => m.community === o.value));
  const filters = communityOptions.length
    ? [{ key: "community", label: "Comunidad", options: communityOptions }]
    : [];

  // Índice completo, rastreable, de TODOS los mitos de la región (SEO).
  const allMythLinks = await listMythLinksByTaxon("region", region.slug);
  const collectionItems = allMythLinks.slice(0, 30).map((m) => ({
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
            description={regionInfo.description}
            url={`${SITE_URL}/regiones/${region.slug}`}
            items={collectionItems}
          />
        </>
      )}
      <TaxonomyDetailTemplate
        taxonomy={{
          name: regionInfo.title || region.name,
          description: regionInfo.description,
          imageUrl: region.image_url,
          motif,
          count: region.myth_count,
          kind: "Región cultural",
        }}
        accent={accent}
        breadcrumb={[
          { label: "Regiones", href: "/regiones" },
          { label: region.name },
        ]}
        intro={regionInfo.longDescription}
        characteristics={regionInfo.characteristics}
        filterable={
          <FilterableArchive
            myths={exploreMyths}
            filters={filters}
            totalCount={region.myth_count}
          />
        }
        mythIndex={allMythLinks}
        indexTitle={`Todos los mitos de la región ${region.name}`}
      />
    </>
  );
}
