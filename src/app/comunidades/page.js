import { TaxonomyIndexTemplate } from "../../components/templates";
import { Container, Heading, Text } from "../../components/atoms";
import { filterAllowedCommunities } from "../../lib/communityFilters";
import { getTaxonomy, listMythLinksByTaxon } from "../../lib/myths";
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

export default async function ComunidadesPage() {
  const taxonomy = await getTaxonomy();

  // Filtrar comunidades con suficiente cantidad de mitos y ordenar por volumen.
  const allowedCommunities = filterAllowedCommunities(taxonomy.communities).sort(
    (a, b) => b.myth_count - a.myth_count
  );

  const items = allowedCommunities.map((c) => ({
    title: c.name,
    href: `/comunidades/${c.slug}`,
    count: c.myth_count,
    motif: "condor",
    imageUrl: c.image_url,
    description: c.region,
  }));

  // Enlaces de mitos representativos de las comunidades con más mitos
  // (índice rastreable, SEO).
  const topCommunities = allowedCommunities.slice(0, 9);
  const links = await Promise.all(
    topCommunities.map((c) => listMythLinksByTaxon("community", c.slug))
  );
  const mythIndex = topCommunities
    .map((c, i) => ({
      title: c.name,
      href: `/comunidades/${c.slug}`,
      myths: (links[i] || []).slice(0, 6),
    }))
    .filter((g) => g.myths.length > 0);

  return (
    <TaxonomyIndexTemplate
      eyebrow="Pueblos y comunidades"
      title="Comunidades que preservan la tradición oral"
      description="Cada pueblo tiene su propia cosmovisión y mitología. Explora las narrativas ancestrales de las comunidades que sostienen la memoria oral de Colombia."
      items={items}
      mythIndex={mythIndex}
      active="/comunidades"
      accent="river"
      heroMotif="condor"
      columns={3}
    >
      <Container size="atlas" className="border-t border-line-100 py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Heading level={2}>Voces, linajes y memoria compartida</Heading>
          <div className="space-y-4">
            <Text>
              Explorar por comunidad ayuda a seguir los hilos culturales que
              sostienen cada relato: nombres propios, territorios, seres tutelares
              y formas distintas de explicar el origen del mundo. Algunas
              comunidades concentran ciclos completos de creación; otras conservan
              relatos de animales, ancestros, castigos o pactos con el agua.
            </Text>
            <Text>
              El archivo presenta estas voces como un punto de partida editorial.
              Cada página enlaza mitos relacionados para que la lectura pueda
              avanzar desde una comunidad hacia su región, sus temas y sus
              personajes recurrentes dentro de la tradición oral colombiana.
            </Text>
          </div>
        </div>
      </Container>
    </TaxonomyIndexTemplate>
  );
}
