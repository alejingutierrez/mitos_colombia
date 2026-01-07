import Header from "../../components/Header";
import { Badge } from "../../components/ui/Badge";
import { ButtonLink } from "../../components/ui/Button";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { getTaxonomy } from "../../lib/myths";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Departamentos y ciudades a excluir (no son comunidades indígenas)
const EXCLUDED_COMMUNITIES = [
  "Antioquia", "Bogota", "Boyacá", "Caldas", "Cartagena", "Casanare",
  "Córdoba", "Huila", "Leticia", "Llanos orientales", "Magdalena",
  "Nariño", "San Andrés", "Santander", "Tolima", "Tumaco",
  "Andino", "Caribe", "Orinoquía", "Pacifico", "Varios"
];

export default async function ComunidadesPage() {
  const taxonomy = await getTaxonomy();

  // Filtrar solo comunidades indígenas
  const communities = taxonomy.communities
    .filter((c) => !EXCLUDED_COMMUNITIES.includes(c.name))
    .sort((a, b) => b.myth_count - a.myth_count);

  // Agrupar por región
  const communitiesByRegion = communities.reduce((acc, community) => {
    const region = community.region || "Otros";
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(community);
    return acc;
  }, {});

  const regionOrder = [
    "Amazonas",
    "Andina",
    "Caribe",
    "Pacífico",
    "Orinoquía",
    "Otros",
  ];
  const sortedRegions = regionOrder.filter((r) => communitiesByRegion[r]);

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header />

      <section className="container-shell mt-12">
        <SectionHeader
          eyebrow="Pueblos indígenas"
          title="Comunidades que preservan la tradición oral de Colombia."
          description="Cada pueblo indígena tiene su propia cosmovisión, mitología y forma de entender el mundo. Explora sus narrativas ancestrales."
        />

        <div className="mt-8 space-y-10">
          {sortedRegions.map((regionName) => (
            <div key={regionName}>
              <div className="mb-4 flex items-center gap-3">
                <h2 className="font-display text-2xl text-ink-900">{regionName}</h2>
                <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                  {communitiesByRegion[regionName].length}{" "}
                  {communitiesByRegion[regionName].length === 1
                    ? "comunidad"
                    : "comunidades"}
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {communitiesByRegion[regionName].map((community) => (
                  <GlassCard
                    key={community.slug}
                    className="flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-display text-xl text-ink-900">
                          {community.name}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-ink-500">
                          {community.region}
                        </p>
                        <p className="mt-2 text-sm text-ink-500">
                          {community.myth_count}{" "}
                          {community.myth_count === 1 ? "mito" : "mitos"}
                        </p>
                      </div>
                      <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                        {community.myth_count}
                      </Badge>
                    </div>
                    <div className="mt-auto">
                      <ButtonLink
                        href={`/comunidades/${community.slug}`}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        Explorar comunidad
                      </ButtonLink>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-ink-600">
            Total: {communities.length} comunidades indígenas preservando{" "}
            {communities.reduce((sum, c) => sum + c.myth_count, 0)} mitos
          </p>
        </div>
      </section>
    </main>
  );
}
