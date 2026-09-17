import { notFound, redirect } from "next/navigation";
import {
  filterAllowedCommunities,
  isUnattributedBucket,
  MIN_COMMUNITY_MYTHS,
  UNATTRIBUTED_PATH,
} from "../../../lib/communityFilters";
import { COMMUNITY_INFO, communitySections } from "../../../lib/community-info";
import { REGION_MOTIFS } from "../../../lib/region-info";
import { getTaxonomy, listMythPlatesByTaxon } from "../../../lib/myths";
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

/**
 * `mestizo` y `mixto` no son pueblos: son las etiquetas con las que entraron
 * al archivo los relatos sin procedencia atribuida, y además están repetidas
 * en cinco territorios cada una, así que `/comunidades/mestizo` nunca podría
 * decir de cuál de las cinco habla. En vez de un 404 —que castigaría a
 * cualquier enlace viejo—, van al registro donde esos relatos sí viven.
 */
function esBolsaDelImportador(taxonomy, slug) {
  return (taxonomy.communities || []).some(
    (community) => community.slug === slug && isUnattributedBucket(community)
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await resolveRouteParams(params);
  const taxonomy = await getTaxonomy();

  if (esBolsaDelImportador(taxonomy, slug)) {
    return {
      title: "Relatos sin pueblo identificado | Mitos de Colombia",
      description:
        "Los relatos del archivo que llegaron sin constancia de qué pueblo los contaba.",
    };
  }

  const community = filterAllowedCommunities(
    taxonomy.communities,
    MIN_COMMUNITY_MYTHS
  ).find((c) => c.slug === slug);

  if (!community) {
    return {
      title: "Comunidad no encontrada | Mitos de Colombia",
      description: "La comunidad solicitada no está disponible.",
    };
  }

  const communityInfo = COMMUNITY_INFO[slug] || {};
  const title = communityInfo.title || community.name;
  const description =
    communityInfo.description ||
    `Los ${community.myth_count} relatos que el archivo conserva de la comunidad ${community.name}, en la región ${community.region}.`;
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

  if (esBolsaDelImportador(taxonomy, slug)) {
    redirect(UNATTRIBUTED_PATH);
  }

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
  const relatos = Number(community.myth_count) || 0;

  // Texto en bloques con título. Si la comunidad todavía no tiene `sections`
  // escritas cae a su texto largo como un solo bloque, y si tampoco lo tiene,
  // al párrafo de respaldo.
  //
  // Ese respaldo describe el ARCHIVO, no a la comunidad. El que había antes
  // afirmaba que el pueblo «preserva su tradición oral» y que «sus mitos
  // transmiten conocimientos, valores y cosmovisiones heredados de generación
  // en generación»: frases intercambiables entre veinte pueblos, escritas sin
  // fuente, sobre comunidades vivas. Diecisiete de las treinta y ocho
  // comunidades del índice no tienen ficha escrita, y para todas ellas la
  // respuesta honesta es decir qué guarda el archivo y admitir que la ficha
  // está por escribir — no rellenar con etnografía inventada.
  const respaldo = `El archivo reúne ${relatos} ${
    relatos === 1 ? "relato" : "relatos"
  } de ${community.name}, recogidos en la región ${community.region}. La ficha editorial de esta comunidad todavía está por escribir: lo que sigue son sus relatos, tal como se conservan.`;
  const sections = communitySections(slug, respaldo);

  const region = (taxonomy.regions || []).find(
    (r) => r.slug === community.region_slug
  );
  const siblings = allowedCommunities
    .filter((c) => c.region_slug === community.region_slug && c.slug !== slug)
    .sort((a, b) => (b.myth_count || 0) - (a.myth_count || 0))
    .map((c) => ({ slug: c.slug, name: c.name, count: c.myth_count }));

  // Todos los relatos de la comunidad, cada uno con su obra: es lo que dibuja
  // el muro. La consulta empareja por slug o por nombre, es decir la unión de
  // las filas homónimas — la misma unión que suma `myth_count` desde que las
  // comunidades se pliegan por slug, así que la cifra y el muro coinciden.
  const mythPlates = (
    await listMythPlatesByTaxon("community", community.slug)
  ).map((m) =>
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
          count: relatos,
          imageUrl: community.image_url,
          kicker: `Comunidad · ${community.region}`,
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
        lead={info?.description}
        myths={mythPlates}
        motif={REGION_MOTIFS[community.region_slug] || "condor"}
      />
    </>
  );
}
