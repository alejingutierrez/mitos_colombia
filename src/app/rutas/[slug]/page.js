import { notFound } from "next/navigation";
import { RouteDetailTemplate } from "../../../components/templates/RouteDetailTemplate";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { resolveRouteParams } from "../../../lib/next-route-props";
import {
  BreadcrumbJsonLd,
  CollectionPageJsonLd,
} from "../../../components/StructuredData";
import { ROUTES, getRouteBySlug, getRouteWithMyths } from "../../../lib/routes";
import { getMythImage } from "../../../lib/myth-images";
import {
  buildRouteFallbackSeo,
  getCommunityPageSlugs,
  getRoutesAtlas,
  summarizeRoute,
  UNATTRIBUTED_HREF,
} from "../route-data";

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

/** Posición de publicación: es el número con el que la ruta se nombra. */
function routeIndex(slug) {
  return ROUTES.findIndex((route) => route.slug === slug);
}

/**
 * Metadatos de una ruta.
 *
 * `seo_pages` sólo tiene fila para las nueve rutas originales; las diez nuevas
 * dependen por completo del respaldo que arma `buildRouteFallbackSeo` con el
 * archivo de curaduría y la ficha real del censo.
 *
 * La imagen de Open Graph sale del reparto de obra (`getRoutesAtlas`), que da
 * una obra distinta a cada ruta: antes se resolvía ruta por ruta y tres de las
 * nueve terminaban compartiendo la misma foto al compartirse en redes. Es la
 * misma obra que la portada de la página, así que el enlace y la página
 * coinciden.
 */
export async function generateMetadata({ params }) {
  const { slug } = await resolveRouteParams(params);
  const route = getRouteBySlug(slug);
  if (!route) {
    return {};
  }

  const [seo, atlas] = await Promise.all([
    getSeoEntry("route", slug),
    getRoutesAtlas(),
  ]);

  const hydrated = atlas.routes.find((item) => item.slug === slug) || route;
  const summary = summarizeRoute(hydrated);
  const imageUrl =
    atlas.art.get(slug)?.url || getMythImage(hydrated.cover, "landscape") || undefined;

  return buildSeoMetadata({
    fallback: buildRouteFallbackSeo(route, summary),
    seo,
    canonicalPath: `/rutas/${slug}`,
    imageUrl,
  });
}

export default async function RutaPage({ params }) {
  const { slug } = await resolveRouteParams(params);
  if (!getRouteBySlug(slug)) {
    notFound();
  }

  const [route, atlas, communityPageSlugs] = await Promise.all([
    getRouteWithMyths(slug),
    getRoutesAtlas(),
    getCommunityPageSlugs(),
  ]);

  if (!route) {
    notFound();
  }

  const summary = summarizeRoute(route);
  const heroImage =
    atlas.art.get(slug)?.url || getMythImage(route.cover, "landscape") || null;

  /* Las tres rutas siguientes en orden de publicación, dando la vuelta al
     final del índice: nadie queda sin rutas que ofrecer y todas reciben
     enlaces desde otra ruta, que era lo que faltaba —cuatro rutas no recibían
     ninguno—. */
  const index = routeIndex(slug);
  const otherRoutes = [1, 2, 3]
    .map((offset) => ROUTES[(index + offset) % ROUTES.length])
    .filter((item) => item && item.slug !== slug)
    .map((item) => {
      const hydrated = atlas.routes.find((entry) => entry.slug === item.slug);
      const itemSummary = hydrated ? summarizeRoute(hydrated) : null;
      return {
        slug: item.slug,
        index: routeIndex(item.slug),
        title: item.title,
        detail: item.detail || item.description,
        tone: item.tone,
        accent: item.accent,
        imageUrl: atlas.art.get(item.slug)?.url || null,
        mythCount: itemSummary?.mythCount || item.mythSlugs.length,
        regions: itemSummary?.regions.slice(0, 3).map((region) => region.name) || [],
      };
    });

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
            description={route.description || route.intro}
            url={`${SITE_URL}/rutas/${slug}`}
            items={route.myths.map((myth) => ({
              name: myth.title,
              url: `${SITE_URL}/mitos/${myth.slug}`,
            }))}
          />
        </>
      )}
      <RouteDetailTemplate
        route={route}
        index={index}
        heroImage={heroImage}
        summary={summary}
        communityPageSlugs={communityPageSlugs}
        unattributedHref={UNATTRIBUTED_HREF}
        otherRoutes={otherRoutes}
      />
    </>
  );
}
