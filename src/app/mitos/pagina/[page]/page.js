import { notFound, redirect } from "next/navigation";
import {
  DEFAULT_LIMIT,
  MitosArchiveContent,
  parsePageParam,
} from "../../../../components/MitosArchiveContent";
import { listMyths } from "../../../../lib/myths";
import { archiveRobots } from "../../../../lib/archive-seo";
import { buildSeoMetadata, getSeoEntry } from "../../../../lib/seo";
import {
  resolveRouteParams,
  resolveSearchParams,
} from "../../../../lib/next-route-props";

export const runtime = "nodejs";
export const revalidate = 300;
export const dynamicParams = true;

async function getTotalPageCount() {
  const result = await listMyths({ limit: 1, offset: 0 });
  return Math.max(1, Math.ceil((result?.total || 0) / DEFAULT_LIMIT));
}

export async function generateStaticParams() {
  const totalPages = await getTotalPageCount();
  const params = [];
  // Skip page 1 (lives at /mitos)
  for (let page = 2; page <= totalPages; page++) {
    params.push({ page: String(page) });
  }
  return params;
}

export async function generateMetadata({ params, searchParams }) {
  const { page: pageParam } = await resolveRouteParams(params);
  const resolvedSearchParams = await resolveSearchParams(searchParams);
  const page = parsePageParam(pageParam);
  if (page < 2) return null;

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
  const page = parsePageParam(pageParam);
  if (page < 1) notFound();
  if (page === 1) redirect("/mitos");

  const totalPages = await getTotalPageCount();
  if (page > totalPages) notFound();

  return <MitosArchiveContent page={page} searchParams={searchParams} />;
}
