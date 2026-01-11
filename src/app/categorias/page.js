import Header from "../../components/Header";
import { Badge } from "../../components/ui/Badge";
import { ButtonLink } from "../../components/ui/Button";
import { GlassCard } from "../../components/ui/GlassCard";
import { ImageSlot } from "../../components/ui/ImageSlot";
import { Pagination } from "../../components/ui/Pagination";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { formatCategoryName } from "../../lib/formatters";
import { getTaxonomy } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

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
  const taxonomy = await getTaxonomy();

  // Filtrar tags excluyendo regiones y "ninguno"
  const regionNames = taxonomy.regions.map((r) => r.name.toLowerCase());
  const tags = taxonomy.tags.filter(
    (tag) =>
      Number(tag.myth_count || 0) >= MIN_CATEGORY_MYTHS &&
      !regionNames.includes(tag.name.toLowerCase()) &&
      tag.name.toLowerCase() !== "ninguno"
  );

  const limit = clampNumber(searchParams?.limit, 12, 48, 24);
  const offset = clampNumber(searchParams?.offset, 0, 5000, 0);
  const paginatedTags = tags.slice(offset, offset + limit);

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header taxonomy={taxonomy} />

      <section className="container-shell mt-12">
        <SectionHeader
          eyebrow="Categorías temáticas"
          title="Explora los mitos por temas y motivos narrativos."
          description="Cada tag representa un tema, motivo o característica común entre los mitos."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedTags.map((tag) => (
            <GlassCard
              key={tag.slug}
              className="group flex flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <ImageSlot
                  src={tag.image_url}
                  alt={`Ilustracion de la categoria ${tag.name}`}
                  size="compact"
                  className="rounded-none transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-ink-900">
                      {formatCategoryName(tag.name)}
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">
                      {tag.myth_count} {tag.myth_count === 1 ? "mito" : "mitos"}
                    </p>
                  </div>
                  <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                    {tag.myth_count}
                  </Badge>
                </div>
                <div className="mt-auto">
                  <ButtonLink
                    href={`/categorias/${tag.slug}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Explorar categoría
                  </ButtonLink>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10">
          <Pagination
            total={tags.length}
            limit={limit}
            offset={offset}
            pathname="/categorias"
            searchParams={{}}
            limitOptions={[12, 24, 48]}
          />
        </div>
      </section>
    </main>
  );
}
