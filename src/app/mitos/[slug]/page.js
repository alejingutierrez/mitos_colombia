import { notFound } from "next/navigation";
import {
  getMythBySlug,
  getRecommendedMyths,
  listAllMythSlugs,
} from "../../../lib/myths";
import { Comments } from "../../../components/Comments";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { resolveRouteParams } from "../../../lib/next-route-props";
import MythLocationMapClient from "../../../components/MythLocationMapClient";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../../components/StructuredData";
import { regionSlugFromName, communitySlugFromName } from "../../../lib/taxonomy-slug";
import { MythDetailTemplate } from "../../../components/templates";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await listAllMythSlugs();
  return slugs.map((slug) => ({ slug }));
}

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
)
  .trim()
  .replace(/\/+$/, "");

const COLOMBIA_CENTER = { lat: 4.5709, lng: -74.2973 };

export async function generateMetadata({ params }) {
  const { slug } = await resolveRouteParams(params);
  const myth = await getMythBySlug(slug);
  if (!myth) {
    return {
      title: "Mito no encontrado | Mitos de Colombia",
      description: "El mito solicitado no esta disponible.",
    };
  }

  const keywords = [myth.focus_keyword, ...(myth.keywords || [])].filter(Boolean);
  const seo = await getSeoEntry("myth", slug);

  return buildSeoMetadata({
    fallback: {
      title: myth.seo_title || myth.title,
      description: myth.seo_description || myth.excerpt,
      keywords,
    },
    seo,
    canonicalPath: `/mitos/${slug}`,
    openGraphType: "article",
    imageUrl: myth.image_url || undefined,
  });
}

function parseCoord(value) {
  if (value === null || value === undefined) return null;
  const normalized = String(value).trim().replace(/,/g, ".");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

export default async function MythDetailPage({ params }) {
  const { slug } = await resolveRouteParams(params);
  const myth = await getMythBySlug(slug);
  if (!myth) {
    notFound();
  }

  const recommended = await getRecommendedMyths(myth, 6);
  const related = recommended.map((r) => ({
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    region: r.region,
    community: r.community,
    imageUrl: r.image_url,
  }));

  const lat = parseCoord(myth.latitude);
  const lng = parseCoord(myth.longitude);
  const hasGeo = lat !== null && lng !== null;
  const regionSlug = myth.region_slug || (myth.region ? regionSlugFromName(myth.region) : undefined);

  // Objeto de mito normalizado para la plantilla (soporta esquema viejo `content`
  // y el nuevo con columnas separadas mito/historia/...).
  const mythProps = {
    slug: myth.slug,
    title: myth.title,
    region: myth.region,
    region_slug: regionSlug,
    community: myth.community,
    excerpt: myth.excerpt,
    imageUrl: myth.image_url,
    content: myth.content,
    category_path: myth.category_path,
    keywords: myth.keywords,
    focus_keyword: myth.focus_keyword,
    latitude: lat,
    longitude: lng,
    showTerritorio: true,
    mito: myth.mito,
    historia: myth.historia,
    versiones: myth.versiones,
    leccion: myth.leccion,
    similitudes: myth.similitudes,
    tags: myth.tags,
  };

  const map = (
    <div className="h-[360px] overflow-hidden rounded border border-line-100 md:h-[440px]">
      <MythLocationMapClient
        title={myth.title}
        latitude={hasGeo ? lat : COLOMBIA_CENTER.lat}
        longitude={hasGeo ? lng : COLOMBIA_CENTER.lng}
        isApproximate={!hasGeo}
      />
    </div>
  );

  const breadcrumb = [
    { label: "Mitos", href: "/mitos" },
    ...(myth.region ? [{ label: myth.region, href: `/regiones/${regionSlug}` }] : []),
    { label: myth.title },
  ];

  return (
    <>
      <ArticleJsonLd
        title={myth.title}
        description={myth.excerpt}
        url={SITE_URL ? `${SITE_URL}/mitos/${myth.slug}` : undefined}
        imageUrl={myth.image_url}
        keywords={myth.keywords?.length ? myth.keywords.join(", ") : undefined}
        siteUrl={SITE_URL}
        datePublished={myth.created_at ? new Date(myth.created_at).toISOString() : undefined}
        dateModified={myth.updated_at ? new Date(myth.updated_at).toISOString() : undefined}
      />
      {SITE_URL && (
        <BreadcrumbJsonLd
          items={[
            { name: "Inicio", url: `${SITE_URL}/` },
            { name: "Mitos", url: `${SITE_URL}/mitos` },
            ...(myth.region
              ? [{ name: myth.region, url: `${SITE_URL}/regiones/${regionSlug}` }]
              : []),
            { name: myth.title, url: `${SITE_URL}/mitos/${myth.slug}` },
          ]}
        />
      )}
      <MythDetailTemplate
        myth={mythProps}
        related={related}
        breadcrumb={breadcrumb}
        map={map}
        commentsSlot={<Comments mythId={myth.id} />}
      />
    </>
  );
}
