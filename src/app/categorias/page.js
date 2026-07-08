import { TaxonomyIndexTemplate } from "../../components/templates";
import { Pagination } from "../../components/molecules";
import { formatCategoryName } from "../../lib/formatters";
import { getTaxonomy, listMythLinksByTaxon } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";
import { resolveSearchParams } from "../../lib/next-route-props";

export const runtime = "nodejs";
export const revalidate = 3600;
const MIN_CATEGORY_MYTHS = 6;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "categorias");
  return buildSeoMetadata({
    fallback: {
      title: "Categorías | Mitos de Colombia",
      description:
        "Explora los mitos de Colombia por categorías temáticas y descubre relatos de creación, castigo, transformación y más.",
      keywords: ["categorías", "mitos colombianos", "temáticas", "folclor"],
    },
    seo,
    canonicalPath: "/categorias",
  });
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return fallback;
  }
  return Math.min(Math.max(parsed, min), max);
}

export default async function CategoriasPage({ searchParams }) {
  const resolvedSearchParams = await resolveSearchParams(searchParams);
  const taxonomy = await getTaxonomy();

  // Filtrar tags excluyendo regiones y "ninguno"
  const regionNames = taxonomy.regions.map((r) => r.name.toLowerCase());
  const tags = taxonomy.tags.filter(
    (tag) =>
      Number(tag.myth_count || 0) >= MIN_CATEGORY_MYTHS &&
      !regionNames.includes(tag.name.toLowerCase()) &&
      tag.name.toLowerCase() !== "ninguno"
  );

  const limit = clampNumber(resolvedSearchParams.limit, 12, 48, 24);
  const offset = clampNumber(resolvedSearchParams.offset, 0, 5000, 0);
  const paginatedTags = tags.slice(offset, offset + limit);

  // A few representative myth links per category for the hub cards.
  const categoryMythMap = Object.fromEntries(
    await Promise.all(
      paginatedTags.map(async (tag) => [
        tag.slug,
        await listMythLinksByTaxon("tag", tag.slug),
      ])
    )
  );

  const items = paginatedTags.map((tag) => ({
    title: formatCategoryName(tag.name),
    href: `/categorias/${tag.slug}`,
    count: tag.myth_count,
    motif: "sol",
    imageUrl: tag.image_url,
    description: undefined,
  }));

  // Índice rastreable de mitos representativos por categoría (SEO).
  const mythIndex = paginatedTags
    .map((tag) => ({
      title: formatCategoryName(tag.name),
      href: `/categorias/${tag.slug}`,
      myths: (categoryMythMap[tag.slug] || []).slice(0, 6),
    }))
    .filter((g) => g.myths.length > 0);

  const totalPages = Math.max(1, Math.ceil(tags.length / limit));
  const page = Math.floor(offset / limit) + 1;
  const makeHref = (p) => `/categorias?offset=${(p - 1) * limit}&limit=${limit}`;

  return (
    <TaxonomyIndexTemplate
      eyebrow="Categorías temáticas"
      title="Mitos por tema y motivo narrativo"
      description="Cada categoría reúne relatos que comparten un tema, un motivo o una característica común: creación, castigo, criaturas, transformación y más."
      items={items}
      mythIndex={mythIndex}
      active="/categorias"
      accent="jungle"
      heroMotif="sol"
      columns={3}
      footer={<Pagination page={page} totalPages={totalPages} makeHref={makeHref} />}
    />
  );
}
