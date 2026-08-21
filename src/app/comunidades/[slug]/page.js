import { notFound } from "next/navigation";
import { filterAllowedCommunities, MIN_COMMUNITY_MYTHS } from "../../../lib/communityFilters";
import { COMMUNITY_INFO, communitySections } from "../../../lib/community-info";
import { REGION_MOTIFS } from "../../../lib/region-info";
import { getTaxonomy, listMyths, listMythLinksByTaxon } from "../../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { resolveRouteParams } from "../../../lib/next-route-props";
import { withMythImageVariants } from "../../../lib/myth-images";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "../../../components/StructuredData";
import { CommunityDetailTemplate } from "../../../components/templates";

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
  return filterAllowedCommunities(taxonomy.communities, MIN_COMMUNITY_MYTHS)
    .map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();
  const community = taxonomy.communities.find((c) => c.slug === slug);

  if (!community) {
    return {
      title: "Comunidad no encontrada | Mitos de Colombia",
      description: "La comunidad solicitada no está disponible.",
    };
  }

  const communityInfo = COMMUNITY_INFO[slug] || {};
  const title = communityInfo.title || community.name;
  const description =
    communityInfo.description || `Explora los mitos del pueblo ${community.name}`;
  const seo = await getSeoEntry("community", slug);

  return buildSeoMetadata({
    fallback: {
      title: `Mitos ${title} | Mitos de Colombia`,
      description,
      keywords: [community.name, "pueblo indígena", "Colombia", "mitología", "tradición oral"],
    },
    seo,
    canonicalPath: `/comunidades/${slug}`,
    imageUrl: community.image_url || undefined,
  });
}

export default async function CommunityDetailPage({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();
  const allowedCommunities = filterAllowedCommunities(
    taxonomy.communities,
    MIN_COMMUNITY_MYTHS
  );
  const community = allowedCommunities.find((c) => c.slug === slug);

  if (!community) {
    notFound();
  }

  const info = COMMUNITY_INFO[slug];
  const nombre = info?.title || community.name;

  // Texto en bloques con título. Si el pueblo todavía no tiene `sections`
  // escritas cae a su texto largo como un solo bloque, y si tampoco lo tiene,
  // al párrafo de respaldo. Lo que ya no se hace es rellenar: los dos párrafos
  // genéricos que se añadían cuando el texto era corto eran intercambiables
  // entre los veinte pueblos y no decían nada de ninguno.
  const respaldo = `El pueblo ${community.name} es parte del patrimonio cultural de Colombia y preserva su tradición oral en la región ${community.region}. Sus mitos transmiten conocimientos, valores y cosmovisiones heredados de generación en generación.`;
  const sections = communitySections(slug, respaldo);

  const region = (taxonomy.regions || []).find(
    (r) => r.slug === community.region_slug
  );
  const siblings = allowedCommunities
    .filter((c) => c.region_slug === community.region_slug && c.slug !== slug)
    .sort((a, b) => (b.myth_count || 0) - (a.myth_count || 0))
    .map((c) => ({ slug: c.slug, name: c.name, count: c.myth_count }));

  // Cuatro relatos para empezar. Antes esta consulta traía 24 para el archivo
  // filtrable y los mismos títulos volvían a salir en el índice de abajo.
  const result = await listMyths({ community: community.slug, limit: 4, offset: 0 });
  const featured = (result?.items || []).map((m) =>
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

  // Índice completo, rastreable, de todos los mitos de la comunidad.
  const allMythLinks = await listMythLinksByTaxon("community", community.slug);
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
              { name: "Comunidades", url: `${SITE_URL}/comunidades` },
              { name: community.name, url: `${SITE_URL}/comunidades/${community.slug}` },
            ]}
          />
          <CollectionPageJsonLd
            name={`Mitos de la comunidad ${community.name}`}
            description={info?.description}
            url={`${SITE_URL}/comunidades/${community.slug}`}
            items={collectionItems}
          />
        </>
      )}
      <CommunityDetailTemplate
        community={{
          name: nombre,
          count: Number(community.myth_count) || 0,
          imageUrl: community.image_url,
          kicker: `Pueblo · ${community.region}`,
        }}
        region={
          region
            ? {
                slug: region.slug,
                name: region.name,
                count: Number(region.myth_count) || 0,
              }
            : null
        }
        siblings={siblings}
        sections={sections}
        featured={featured}
        mythIndex={allMythLinks}
        motif={REGION_MOTIFS[community.region_slug] || "condor"}
      />
    </>
  );
}
