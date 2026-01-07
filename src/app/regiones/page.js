import Header from "../../components/Header";
import { Badge } from "../../components/ui/Badge";
import { ButtonLink } from "../../components/ui/Button";
import { GlassCard } from "../../components/ui/GlassCard";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { getTaxonomy } from "../../lib/myths";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function RegionesPage() {
  const taxonomy = await getTaxonomy();
  const regions = [...taxonomy.regions].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const regionDescriptions = {
    Amazonas: "La región amazónica colombiana alberga una rica tradición oral de pueblos indígenas como Yukuna, Tanimuka, Uitoto y Desano.",
    Andina: "Corazón cultural de Colombia, hogar de los Muiscas y heredera de tradiciones mestizas que fusionan lo indígena y lo español.",
    Caribe: "Territorio costero donde confluyen las tradiciones de pueblos como los Wayuu, Kogui y la rica cultura cartagenera.",
    Orinoquía: "Región de los llanos orientales con tradiciones ancestrales de pueblos como los Sikuani.",
    Pacífico: "Costa pacífica colombiana, tierra de los Nasa y comunidades afrodescendientes con profundas raíces mitológicas.",
    Varios: "Mitos que trascienden fronteras regionales o abarcan múltiples territorios."
  };

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header />

      <section className="container-shell mt-12">
        <SectionHeader
          eyebrow="Regiones culturales"
          title="Descubre los mitos organizados por regiones de Colombia."
          description="Cada región tiene sus propias tradiciones, pueblos y narrativas que conforman el imaginario colombiano."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {regions.map((region) => (
            <GlassCard
              key={region.slug}
              className="flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-display text-3xl text-ink-900">
                    {region.name}
                  </h3>
                  <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                    {regionDescriptions[region.name] ||
                      "Región con rica tradición mitológica."}
                  </p>
                </div>
                <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600 text-base px-3 py-1">
                  {region.myth_count}
                </Badge>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xs text-ink-500">
                  {region.myth_count}{" "}
                  {region.myth_count === 1 ? "mito" : "mitos"}
                </p>
                <ButtonLink
                  href={`/regiones/${region.slug}`}
                  variant="outline"
                  size="sm"
                >
                  Explorar región
                </ButtonLink>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </main>
  );
}
