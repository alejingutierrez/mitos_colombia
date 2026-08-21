import Link from "next/link";
import { CommunityIndexTemplate } from "../../components/templates";
import { Container, Heading, Text } from "../../components/atoms";
import { AtlasSectionHeader } from "../../components/editorial/AtlasEditorial";
import { filterAllowedCommunities, MIN_COMMUNITY_MYTHS } from "../../lib/communityFilters";
import { getTaxonomy, listMythLinksByTaxon } from "../../lib/myths";
import { REGION_MOTIFS, regionAccent } from "../../lib/region-info";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "comunidades");
  return buildSeoMetadata({
    fallback: {
      title: "Comunidades indígenas | Mitos de Colombia",
      description:
        "Conoce las comunidades indígenas que preservan la tradición oral y explora sus mitos por región.",
      keywords: [
        "comunidades indígenas",
        "mitos colombianos",
        "tradición oral",
        "pueblos originarios",
      ],
    },
    seo,
    canonicalPath: "/comunidades",
  });
}

// El acento de cada pieza sale del territorio, igual que en la interna de la
// región: agua → río, resto → selva.
const ACENTO = {
  jungle: "rgb(var(--jungle-500))",
  river: "rgb(var(--river-500))",
};

export default async function ComunidadesPage() {
  const taxonomy = await getTaxonomy();

  const allowed = filterAllowedCommunities(taxonomy.communities).sort(
    (a, b) => (b.myth_count || 0) - (a.myth_count || 0)
  );

  const communities = allowed.map((c) => ({
    slug: c.slug,
    name: c.name,
    count: c.myth_count,
    imageUrl: c.image_url,
    motif: REGION_MOTIFS[c.region_slug] || "condor",
    regionName: c.region,
    regionSlug: c.region_slug,
    accent: ACENTO[regionAccent(c.region_slug)],
  }));

  // Chips de filtro: sólo territorios que tienen pueblos, con la suma de los
  // relatos de esos pueblos (no la de la región entera, que incluiría relatos
  // sin pueblo identificado y no cuadraría con el contador).
  const regions = (taxonomy.regions || [])
    .map((region) => {
      const suyos = communities.filter((c) => c.regionSlug === region.slug);
      return {
        slug: region.slug,
        name: region.name,
        count: suyos.reduce((t, c) => t + (c.count || 0), 0),
      };
    })
    .filter((region) => region.count > 0)
    .sort((a, b) => b.count - a.count);

  // Índice rastreable: mitos representativos de los pueblos con más relatos.
  const top = allowed.slice(0, 9);
  const links = await Promise.all(
    top.map((c) => listMythLinksByTaxon("community", c.slug))
  );
  const mythIndex = top
    .map((c, i) => ({
      title: c.name,
      href: `/comunidades/${c.slug}`,
      myths: (links[i] || []).slice(0, 4),
    }))
    .filter((group) => group.myths.length > 0);

  const totalRelatos = communities.reduce((t, c) => t + (c.count || 0), 0);

  return (
    <CommunityIndexTemplate
      eyebrow="Los pueblos del archivo"
      title="Comunidades que preservan la tradición oral"
      description={`${communities.length} pueblos con página propia y ${totalRelatos} relatos entre todos, a la vista de entrada. El tamaño de cada pieza dice cuántos relatos guarda; la búsqueda y los filtros recomponen la mesa sin cambiar de página.`}
      communities={communities}
      regions={regions}
      note={`Los pueblos con menos de ${MIN_COMMUNITY_MYTHS} relatos todavía no tienen página propia y por eso no aparecen en la mesa; sus historias sí se leen dentro de su territorio.`}
      active="/comunidades"
    >
      {mythIndex.length ? (
        <section className="border-y border-line-100 bg-mist-50">
          <Container size="atlas" className="py-14">
            <AtlasSectionHeader title="Mitos para empezar" />
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {mythIndex.map((group, index) => (
                <div key={group.href} className="grid grid-cols-[2.2rem_1fr] gap-3">
                  <span className="atlas-figure font-editorial text-2xl text-jungle-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <Link href={group.href} className="atlas-title-md">
                      {group.title}
                    </Link>
                    <ul className="mt-3 space-y-1.5">
                      {group.myths.map((myth) => (
                        <li key={myth.slug}>
                          <Link
                            href={`/mitos/${myth.slug}`}
                            className="text-sm text-ink-700 transition-colors hover:text-jungle-700"
                          >
                            {myth.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <Container size="atlas" className="py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Heading level={2}>Voces, linajes y memoria compartida</Heading>
          <div className="space-y-4">
            <Text>
              Explorar por comunidad ayuda a seguir los hilos culturales que
              sostienen cada relato: nombres propios, territorios, seres
              tutelares y formas distintas de explicar el origen del mundo.
              Algunas comunidades concentran ciclos completos de creación; otras
              conservan relatos de animales, ancestros, castigos o pactos con el
              agua.
            </Text>
            <Text>
              El archivo presenta estas voces como un punto de partida
              editorial. Cada página enlaza mitos relacionados para que la
              lectura pueda avanzar desde una comunidad hacia su región, sus
              temas y sus personajes recurrentes dentro de la tradición oral
              colombiana.
            </Text>
          </div>
        </div>
      </Container>
    </CommunityIndexTemplate>
  );
}
