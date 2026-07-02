import { notFound } from "next/navigation";
import {
  Container,
  Eyebrow,
  Heading,
  Text,
  Tag,
  Motif,
  IndexNumber,
  ButtonLink,
  Icon,
} from "../../../components/atoms";
import { Header, MythGrid, RouteGrid } from "../../../components/organisms";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import { BreadcrumbJsonLd } from "../../../components/StructuredData";
import {
  ROUTES,
  getMythsByTitles,
  getRouteBySlug,
  resolveMythsByTitles,
} from "../../../lib/routes";

export const runtime = "nodejs";
export const revalidate = 86400;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
)
  .trim()
  .replace(/\/+$/, "");

export async function generateStaticParams() {
  return ROUTES.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }) {
  const route = getRouteBySlug(params.slug);
  if (!route) {
    return {};
  }
  const seo = await getSeoEntry("route", params.slug);
  return buildSeoMetadata({
    fallback: {
      title: route.title,
      description: route.description,
      keywords: route.keywords,
    },
    seo,
    canonicalPath: `/rutas/${params.slug}`,
  });
}

function mapMyth(m) {
  return {
    slug: m.slug,
    title: m.title,
    excerpt: m.excerpt,
    region: m.region,
    community: m.community,
    imageUrl: m.image_url,
  };
}

export default async function RutaPage({ params }) {
  const route = getRouteBySlug(params.slug);
  if (!route) {
    notFound();
  }

  const curatedHero = route.curated?.heroTitles || [];
  const curatedGallery = route.curated?.galleryTitles || [];
  const curatedTitles = Array.from(
    new Set([...curatedHero, ...curatedGallery].filter(Boolean))
  );
  const curatedMyths = curatedTitles.length
    ? await getMythsByTitles(curatedTitles)
    : [];
  const resolvedMap = resolveMythsByTitles(curatedTitles, curatedMyths);
  const orderedTitles = Array.from(new Set([...curatedHero, ...curatedGallery]));
  const routeMyths = orderedTitles
    .map((title) => resolvedMap.get(title))
    .filter(Boolean)
    .map(mapMyth);

  const accent = route.accent === "river" ? "river" : "jungle";
  const motif = accent === "river" ? "agua" : "hoja";
  const searchQuery = route.keywords?.[0] || route.title;

  const otherRoutes = ROUTES.filter((item) => item.slug !== route.slug)
    .slice(0, 4)
    .map((item) => ({
      title: item.title,
      href: `/rutas/${item.slug}`,
      description: item.detail || item.description,
      tone: item.accent === "river" ? "river" : "jungle",
      motif: item.accent === "river" ? "agua" : "hoja",
    }));

  return (
    <>
      {SITE_URL && (
        <BreadcrumbJsonLd
          items={[
            { name: "Inicio", url: `${SITE_URL}/` },
            { name: "Rutas", url: `${SITE_URL}/rutas` },
            { name: route.title, url: `${SITE_URL}/rutas/${params.slug}` },
          ]}
        />
      )}
      <Header active="/rutas" />
      <main className="min-h-[100dvh] bg-paper">
        {/* Hero */}
        <Container size="wide" className="py-12 md:py-16">
          <div className="grid items-start gap-8 md:grid-cols-[1.4fr_0.6fr] md:gap-12">
            <div>
              <Eyebrow tone={accent} withRule className="mb-4">
                Ruta editorial · {route.tone}
              </Eyebrow>
              <Heading level={0} accent={accent}>
                {route.title}
              </Heading>
              <Text size="lg" className="mt-6 max-w-xl">
                {route.intro || route.description}
              </Text>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {(route.keywords || []).slice(0, 6).map((keyword) => (
                  <Tag key={keyword} variant="outline">
                    {keyword}
                  </Tag>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={`/mitos?q=${encodeURIComponent(searchQuery)}`}
                  variant="primary"
                >
                  Explorar relatos
                  <Icon name="arrow-right" size={18} className="mc-arrow" />
                </ButtonLink>
                <ButtonLink href="/rutas" variant="secondary">
                  Todas las rutas
                </ButtonLink>
              </div>
            </div>
            <div className="hidden justify-end md:flex">
              <Motif name={motif} size={120} />
            </div>
          </div>
        </Container>

        {/* Itinerario / highlights */}
        {route.highlights?.length ? (
          <div className="border-t border-line-100">
            <Container size="wide" className="py-14">
              <Eyebrow tone={accent} withRule className="mb-8">
                Itinerario
              </Eyebrow>
              <div className="grid gap-8 md:grid-cols-3">
                {route.highlights.map((h, i) => (
                  <div key={h.title}>
                    <div className="flex items-baseline gap-3">
                      <IndexNumber value={i + 1} size="sm" />
                      <Heading level={4}>{h.title}</Heading>
                    </div>
                    <Text size="sm" tone="muted" className="mt-2">
                      {h.description}
                    </Text>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        ) : null}

        {/* Galería editorial: mitos curados de la ruta */}
        {routeMyths.length > 0 ? (
          <div className="border-t border-line-100">
            <Container size="wide" className="py-14">
              <MythGrid
                eyebrow="Galería editorial"
                title="Relatos que trazan la ruta"
                description={
                  route.galleryIntro ||
                  "Selección curada de mitos que dan forma a este itinerario. Cada relato conecta con su región y comunidad."
                }
                action={
                  <ButtonLink
                    href={`/mitos?q=${encodeURIComponent(searchQuery)}`}
                    variant="secondary"
                  >
                    Ver todos los mitos
                  </ButtonLink>
                }
                myths={routeMyths}
              />
            </Container>
          </div>
        ) : null}

        {/* Otras rutas */}
        <div className="border-t border-line-100 py-14">
          <RouteGrid
            eyebrow="Continuar explorando"
            title="Rutas conectadas por territorio y memoria"
            routes={otherRoutes}
          />
        </div>
      </main>
    </>
  );
}
