import { notFound, redirect } from "next/navigation";
import {
  MitosArchiveContent,
  archiveTotalFromTaxonomy,
} from "../../../../components/MitosArchiveContent";
import { getTaxonomy } from "../../../../lib/myths";
import { archiveRobots } from "../../../../lib/archive-seo";
import { buildSeoMetadata, getSeoEntry } from "../../../../lib/seo";
import {
  resolveRouteParams,
  resolveSearchParams,
} from "../../../../lib/next-route-props";
import {
  ARCHIVE_DEFAULT_LIMIT,
  parseArchiveLimit,
  parseArchivePage,
  readArchiveParams,
  totalArchivePages,
} from "../../../../lib/archive-params";

export const runtime = "nodejs";
export const revalidate = 300;
export const dynamicParams = true;

/**
 * El tope de páginas sale de la taxonomía, no de una consulta propia.
 *
 * Antes esta ruta llamaba a `listMyths({ limit: 1 })` en CADA petición sólo
 * para saber cuántas páginas hay, y encima lo hacía con el límite fijo de 24
 * aunque la URL trajera otro `?limit=`: la ruta creía que había 25 páginas y
 * el contenido calculaba 100. `getTaxonomy()` ya está cacheada una hora y la
 * portada la necesita de todos modos, así que la cuenta sale gratis y las dos
 * mitades usan por fin el mismo límite.
 */
async function getArchiveTotal() {
  const taxonomy = await getTaxonomy();
  return archiveTotalFromTaxonomy(taxonomy);
}

export async function generateStaticParams() {
  const total = await getArchiveTotal();
  if (!total) return [];
  const totalPages = totalArchivePages(total, ARCHIVE_DEFAULT_LIMIT);
  const params = [];
  // La página 1 vive en /mitos.
  for (let page = 2; page <= totalPages; page++) {
    params.push({ page: String(page) });
  }
  return params;
}

export async function generateMetadata({ params, searchParams }) {
  const { page: pageParam } = await resolveRouteParams(params);
  const resolvedSearchParams = await resolveSearchParams(searchParams);
  const page = parseArchivePage(pageParam);
  if (page === null || page < 2) return null;

  const seo = await getSeoEntry("page", "mitos");
  const metadata = buildSeoMetadata({
    fallback: {
      title: `Archivo de mitos — página ${page}`,
      description: `Continuación del archivo de mitos colombianos. Página ${page} de la colección.`,
      keywords: ["mitos", "archivo", "Colombia", "relatos", "folclor"],
    },
    seo,
    canonicalPath: `/mitos/pagina/${page}`,
  });
  metadata.robots = archiveRobots(resolvedSearchParams);
  return metadata;
}

export default async function MitosPageByPage({ params, searchParams }) {
  const { page: pageParam } = await resolveRouteParams(params);
  const page = parseArchivePage(pageParam);
  if (page === null) notFound();
  if (page === 1) redirect("/mitos");

  const resolvedSearchParams = await resolveSearchParams(searchParams);
  const archiveParams = readArchiveParams(resolvedSearchParams, page);

  /*
    El 404 tiene que resolverse ACÁ, antes de que empiece a transmitirse la
    respuesta: `notFound()` dentro del `<Suspense>` del índice pintaría la
    pantalla de "no encontrado" con un HTTP 200, que para un buscador es una
    página válida y vacía.

    Sólo se aplica al archivo sin filtros, que es el que tiene URLs canónicas y
    rastreables. Una vista filtrada fuera de rango no es un 404: es una
    selección que se quedó corta, y el índice lo explica con el número de
    páginas que sí tiene.
  */
  if (!archiveParams.hasAnyFilter) {
    const total = await getArchiveTotal();
    const limit = parseArchiveLimit(resolvedSearchParams.limit);
    if (total && page > totalArchivePages(total, limit)) notFound();
  }

  return <MitosArchiveContent page={page} searchParams={searchParams} />;
}
