import {
  Container,
  Eyebrow,
  Heading,
  Text,
  Prose,
  TextLink,
  IndexNumber,
  Divider,
  ButtonLink,
} from "../../components/atoms";
import { Header, RouteGrid, MythGrid } from "../../components/organisms";
import { getRoutePreviews } from "../../lib/routes";
import { getFeaturedMythsWithImages, getDiverseMyths } from "../../lib/myths";
import { buildSeoMetadata, getSeoEntry } from "../../lib/seo";

export async function generateMetadata() {
  const seo = await getSeoEntry("page", "rutas");
  return buildSeoMetadata({
    fallback: {
      title: "Rutas | Mitos de Colombia",
      description:
        "Rutas editoriales para explorar mitos colombianos por símbolos, territorios y resonancias culturales.",
      keywords: ["rutas", "mitos colombianos", "curaduría", "territorio"],
    },
    seo,
    canonicalPath: "/rutas",
  });
}

export const revalidate = 86400;

function getDailySeed() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

const guideSteps = [
  {
    title: "Lee el territorio como archivo",
    detail:
      "Cada ruta agrupa mitos que comparten paisajes, guardianes o tensiones similares. Puedes recorrer el territorio como si fuese una biblioteca viva.",
  },
  {
    title: "Cruza símbolos y resonancias",
    detail:
      "Las rutas ayudan a descubrir motivos que se repiten: agua, montes, pactos o apariciones. Es una lectura comparada que revela conexiones.",
  },
  {
    title: "Vuelve al mito original",
    detail:
      "Cuando un relato te llama, vuelve a su página completa para profundizar en su origen, su comunidad y su contexto.",
  },
];

export default async function RutasPage() {
  const seed = getDailySeed();
  const [routePreviews, featuredMyths, diverseMyths] = await Promise.all([
    getRoutePreviews(seed),
    getFeaturedMythsWithImages(6, seed),
    getDiverseMyths(6, seed),
  ]);

  const routes = (routePreviews || []).map((r) => ({
    title: r.title,
    href: `/rutas/${r.slug}`,
    description: r.detail || r.description,
    tone: r.accent === "river" ? "river" : "jungle",
    motif: r.accent === "river" ? "agua" : "hoja",
  }));

  const featuredPool =
    (featuredMyths || []).length >= 6 ? featuredMyths : diverseMyths;
  const featured = (featuredPool || []).slice(0, 6).map((m) => ({
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  }));

  return (
    <>
      <Header active="/rutas" />
      <main className="min-h-[100dvh] bg-paper">
        {/* Hero */}
        <Container size="wide" className="py-12 md:py-16">
          <div className="max-w-2xl">
            <Eyebrow tone="jungle" withRule className="mb-4">
              Rutas editoriales
            </Eyebrow>
            <Heading level={0} accent="jungle">
              Cartografías para leer el mito como territorio
            </Heading>
            <Text size="lg" className="mt-5">
              Colecciones curadas que conectan relatos, paisajes y símbolos para
              leer la memoria colombiana en secuencia.
            </Text>
          </div>
        </Container>

        {/* Intro editorial */}
        <Container size="wide" className="pb-6">
          <div className="mx-auto max-w-2xl">
            <Prose>
              <p>
                Las rutas editoriales nacen de la necesidad de leer los mitos
                como un tejido. Cada relato existe en un lugar, pero también
                conversa con otros mitos que comparten guardianes, paisajes y
                dilemas similares. Las rutas permiten moverse entre esas
                conexiones sin perder la profundidad de cada historia. Puedes
                iniciar en una ruta y luego abrir el{" "}
                <TextLink href="/mapa">Mapa</TextLink> para ubicar esos relatos
                en el territorio real.
              </p>
              <p>
                Este trabajo se apoya en la{" "}
                <TextLink href="/metodologia">Metodología</TextLink>, donde
                explicamos cómo organizamos el archivo. Cuando termines una ruta,
                puedes seguir explorando en{" "}
                <TextLink href="/mitos">Mitos</TextLink> o en{" "}
                <TextLink href="/categorias">Categorías</TextLink>.
              </p>
            </Prose>
          </div>
        </Container>

        {/* Grilla de rutas */}
        <RouteGrid routes={routes} eyebrow={null} className="pb-4" />

        {/* Guía de lectura */}
        <div className="border-t border-line-100">
          <Container size="wide" className="py-14">
            <Eyebrow tone="river" withRule className="mb-8">
              Guía de lectura
            </Eyebrow>
            <div className="grid gap-8 md:grid-cols-3">
              {guideSteps.map((step, i) => (
                <div key={step.title}>
                  <div className="flex items-baseline gap-3">
                    <IndexNumber value={i + 1} size="sm" />
                    <Heading level={4}>{step.title}</Heading>
                  </div>
                  <Text size="sm" tone="muted" className="mt-2">
                    {step.detail}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Mitos destacados */}
        {featured.length > 0 ? (
          <div className="border-t border-line-100">
            <Container size="wide" className="py-14">
              <MythGrid
                eyebrow="Relatos destacados"
                title="Historias para iniciar tu ruta"
                description="Una selección rotativa de mitos con imágenes listas para explorar. Cada tarjeta conecta con su región y comunidad."
                action={
                  <ButtonLink href="/mitos" variant="secondary">
                    Explorar todos los mitos
                  </ButtonLink>
                }
                myths={featured}
              />
            </Container>
          </div>
        ) : null}

        {/* Cierre: cruce con mapa y comunidades */}
        <div className="border-t border-line-100">
          <Container size="wide" className="py-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <Eyebrow tone="jungle" className="mb-2">
                  Sigue explorando
                </Eyebrow>
                <Heading level={2}>Cruza rutas, mapa y comunidades</Heading>
                <Text className="mt-3">
                  El archivo crece con cada lectura. Recorre el{" "}
                  <TextLink href="/mapa">Mapa</TextLink> para ubicar los relatos
                  en su paisaje y visita las{" "}
                  <TextLink href="/comunidades">Comunidades</TextLink> para
                  entender las voces que los mantienen vivos.
                </Text>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/mapa" variant="primary">
                  Explorar mapa
                </ButtonLink>
                <ButtonLink href="/comunidades" variant="secondary">
                  Ver comunidades
                </ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
