import Header from "../../components/Header";
import { Badge } from "../../components/ui/Badge";
import { ButtonLink } from "../../components/ui/Button";
import { GlassCard } from "../../components/ui/GlassCard";
import { ImageSlot } from "../../components/ui/ImageSlot";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { getTaxonomy } from "../../lib/myths";

export const runtime = "nodejs";
export const revalidate = 3600;

export default async function CategoriasPage() {
  const taxonomy = await getTaxonomy();

  // Filtrar tags excluyendo regiones y "ninguno"
  const regionNames = taxonomy.regions.map((r) => r.name.toLowerCase());
  const tags = taxonomy.tags.filter(
    (tag) =>
      !regionNames.includes(tag.name.toLowerCase()) &&
      tag.name.toLowerCase() !== "ninguno"
  );

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header />

      <section className="container-shell mt-12">
        <SectionHeader
          eyebrow="Categorías temáticas"
          title="Explora los mitos por temas y motivos narrativos."
          description="Cada tag representa un tema, motivo o característica común entre los mitos."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tags.map((tag) => (
            <GlassCard
              key={tag.slug}
              className="group flex flex-col overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <ImageSlot size="compact" className="rounded-none transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-ink-900">
                      {tag.name}
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
      </section>
    </main>
  );
}
