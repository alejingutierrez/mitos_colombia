import { notFound } from "next/navigation";
import { RouteDetailTemplate } from "../../../components/templates/RouteDetailTemplate";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { resolveRouteParams } from "../../../lib/next-route-props";
import {
  BreadcrumbJsonLd,
  CollectionPageJsonLd,
} from "../../../components/StructuredData";
import {
  ROUTES,
  getMythsByTitles,
  getRouteOgImage,
  getRouteBySlug,
  resolveMythsByTitles,
} from "../../../lib/routes";

export const runtime = "nodejs";
export const revalidate = 86400;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
)
  .trim()
  .replace(/\/+$/, "");

export async function generateStaticParams() {
  return ROUTES.map((route) => ({ slug: route.slug }));
}

function curatedTitlesForRoute(route) {
  return Array.from(
    new Set(
      [
        ...(route?.curated?.heroTitles || []),
        ...(route?.curated?.galleryTitles || []),
      ].filter(Boolean)
    )
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await resolveRouteParams(params);
  const route = getRouteBySlug(slug);
  if (!route) {
    return {};
  }
  const curatedTitles = curatedTitlesForRoute(route);
  const [seo, imageUrl] = await Promise.all([
    getSeoEntry("route", slug),
    getRouteOgImage(curatedTitles),
  ]);
  return buildSeoMetadata({
    fallback: {
      title: route.title,
      description: route.description,
      keywords: route.keywords,
    },
    seo,
    canonicalPath: `/rutas/${slug}`,
    imageUrl: imageUrl || undefined,
  });
}

function mapMyth(m) {
  return {
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  };
}

export default async function RutaPage({ params }) {
  const { slug } = await resolveRouteParams(params);
  const route = getRouteBySlug(slug);
  if (!route) {
    notFound();
  }

  const curatedHero = route.curated?.heroTitles || [];
  const curatedGallery = route.curated?.galleryTitles || [];
  const curatedTitles = curatedTitlesForRoute(route);
  const curatedMyths = curatedTitles.length
    ? await getMythsByTitles(curatedTitles)
    : [];
  const resolvedMap = resolveMythsByTitles(curatedTitles, curatedMyths);
  const orderedTitles = Array.from(new Set([...curatedHero, ...curatedGallery]));
  const routeMyths = orderedTitles
    .map((title) => resolvedMap.get(title))
    .filter(Boolean)
    .map(mapMyth);

  const otherRoutes = ROUTES.filter((item) => item.slug !== route.slug)
    .slice(0, 4)
    .map((item) => ({
      title: item.title,
      href: `/rutas/${item.slug}`,
      description: item.detail || item.description,
      tone: item.accent === "river" ? "river" : "jungle",
      motif: item.accent === "river" ? "agua" : "hoja",
    }));

  return (
    <>
      {SITE_URL && (
        <>
          <BreadcrumbJsonLd
            items={[
              { name: "Inicio", url: `${SITE_URL}/` },
              { name: "Rutas", url: `${SITE_URL}/rutas` },
              { name: route.title, url: `${SITE_URL}/rutas/${slug}` },
            ]}
          />
          <CollectionPageJsonLd
            name={route.title}
            description={route.intro || route.description}
            url={`${SITE_URL}/rutas/${slug}`}
            items={routeMyths.map((myth) => ({
              name: myth.title,
              url: `${SITE_URL}/mitos/${myth.slug}`,
            }))}
          />
        </>
      )}
      <RouteDetailTemplate
        route={route}
        myths={routeMyths}
        otherRoutes={otherRoutes}
      />
    </>
  );
}
