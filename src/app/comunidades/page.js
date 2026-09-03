import Link from "next/link";
import { CommunityIndexTemplate } from "../../components/templates";
import { Container, Heading, Text } from "../../components/atoms";
import { AtlasSectionHeader } from "../../components/editorial/AtlasEditorial";
import {
  collectUnattributed,
  filterAllowedCommunities,
  listEmptyCommunities,
} from "../../lib/communityFilters";
import { getTaxonomy, listMythLinksByTaxon } from "../../lib/myths";
import { REGION_MOTIFS, regionAccent } from "../../lib/region-info";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "comunidades");
  return buildSeoMetadata({
    fallback: {
      title: "Comunidades del archivo | Mitos de Colombia",
      description:
        "Las comunidades que preservan la tradición oral colombiana y los relatos que el archivo conserva de cada una, con los que llegaron sin pueblo identificado.",
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

  // Todas las comunidades con al menos un relato. El listón bajó de seis a uno
  // —ver `communityFilters`—: con seis se escondían diecisiete comunidades con
  // treinta y ocho relatos, y una comunidad con tres relatos sigue siendo la
  // única puerta a esos tres.
  const allowed = filterAllowedCommunities(taxonomy.communities).sort(
    (a, b) => (b.myth_count || 0) - (a.myth_count || 0)
  );

  const communities = allowed.map((c) => {
    const acento = regionAccent(c.region_slug);
    return {
      slug: c.slug,
      name: c.name,
      count: Number(c.myth_count) || 0,
      imageUrl: c.image_url,
      motif: REGION_MOTIFS[c.region_slug] || "condor",
      regionName: c.region,
      regionSlug: c.region_slug,
      accent: ACENTO[acento],
      accentKey: acento,
    };
  });

  // Los relatos que entraron sin pueblo atribuido. No son una comunidad y no
  // van en la mesa: tienen su propio registro, y desde aquí su puerta.
  const unattributed = collectUnattributed(taxonomy.communities);

  // Lo que queda fuera, dicho con nombre y apellido en vez de con un umbral.
  const sinRelatos = listEmptyCommunities(taxonomy.communities);

  // Chips de filtro: sólo territorios que tienen comunidades, con la suma de
  // los relatos de esas comunidades (no la de la región entera, que incluiría
  // los relatos sin pueblo identificado y no cuadraría con el contador).
  const regions = (taxonomy.regions || [])
    .map((region) => {
      const suyas = communities.filter((c) => c.regionSlug === region.slug);
      return {
        slug: region.slug,
        name: region.name,
        count: suyas.reduce((t, c) => t + (c.count || 0), 0),
      };
    })
    .filter((region) => region.count > 0)
    .sort((a, b) => b.count - a.count);

  // Índice rastreable: relatos representativos de las comunidades con más
  // material.
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
  const alcanzables = totalRelatos + (unattributed?.total || 0);
  const totalArchivo = (taxonomy.regions || []).reduce(
    (t, region) => t + (Number(region.myth_count) || 0),
    0
  );

  const nota = [
    `Están las ${communities.length} comunidades que tienen al menos un relato en el archivo, sin umbral: las de tres relatos y las de uno también aparecen, porque su página es la única puerta a esos relatos.`,
    sinRelatos.length
      ? `${
          sinRelatos.length === 1 ? "Queda fuera una" : `Quedan fuera ${sinRelatos.length}`
        } comunidad registrada sin ningún relato asociado todavía —${sinRelatos
          .map((c) => c.name)
          .join(", ")}—: su ficha estaría vacía.`
      : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <CommunityIndexTemplate
      eyebrow="Las comunidades del archivo"
      title="Comunidades que preservan la tradición oral"
      description={`${communities.length} comunidades con página propia y ${totalRelatos} relatos entre todas, a la vista de entrada. El tamaño de cada pieza dice cuántos relatos guarda; la búsqueda y los filtros recomponen la mesa sin cambiar de página. Más abajo entran los ${
        unattributed?.total || 0
      } relatos que llegaron sin pueblo identificado${
        totalArchivo ? `: entre unos y otros, ${alcanzables} de los ${totalArchivo} del archivo` : ""
      }.`}
      communities={communities}
      regions={regions}
      unattributed={unattributed}
      note={nota}
      active="/comunidades"
    >
      {mythIndex.length ? (
        <section className="border-b border-line-100">
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
              editorial, y también dice lo que no sabe: de casi la mitad de los
              relatos no consta quién los contó, y esos van aparte. Cada página
              enlaza relatos relacionados para que la lectura pueda avanzar
              desde una comunidad hacia su región, sus temas y sus personajes
              recurrentes dentro de la tradición oral colombiana.
            </Text>
          </div>
        </div>
      </Container>
    </CommunityIndexTemplate>
  );
}
