import { MitosArchiveContent } from "../../components/MitosArchiveContent";
import { archiveRobots } from "../../lib/archive-seo";
import { resolveSearchParams } from "../../lib/next-route-props";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export const runtime = "nodejs";
export const revalidate = 300;

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await resolveSearchParams(searchParams);
  const seo = await getSeoEntry("page", "mitos");
  const metadata = buildSeoMetadata({
    fallback: {
      title: "Archivo de mitos",
      description:
        "Archivo completo de mitos colombianos para explorar por región, comunidad, categorías y palabras clave.",
      keywords: ["mitos", "archivo", "Colombia", "relatos", "folclor"],
    },
    seo,
    canonicalPath: "/mitos",
  });
  metadata.robots = archiveRobots(resolvedSearchParams);
  return metadata;
}

export default async function MitosPage({ searchParams }) {
  return <MitosArchiveContent page={1} searchParams={searchParams} />;
}
