import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { Badge } from "../../../components/ui/Badge";
import { ButtonLink } from "../../../components/ui/Button";
import { GlassCard } from "../../../components/ui/GlassCard";
import {
  getMythBySlug,
  getRecommendedMyths,
  listAllMythSlugs,
} from "../../../lib/myths";
import { RecommendedMyths } from "../../../components/RecommendedMyths";
import { Comments } from "../../../components/Comments";
import { buildSeoMetadata, getSeoEntry } from "../../../lib/seo";
import Link from "next/link";
import ShareBar from "../../../components/ShareBar";
import MythLocationMapClient from "../../../components/MythLocationMapClient";
import { ArticleJsonLd, BreadcrumbJsonLd } from "../../../components/StructuredData";
import { regionSlugFromName, communitySlugFromName } from "../../../lib/taxonomy-slug";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await listAllMythSlugs();
  return slugs.map((slug) => ({ slug }));
}

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
)
  .trim()
  .replace(/\/+$/, "");

const COLOMBIA_CENTER = { lat: 4.5709, lng: -74.2973 };

export async function generateMetadata({ params }) {
  const myth = await getMythBySlug(params.slug);
  if (!myth) {
    return {
      title: "Mito no encontrado | Mitos de Colombia",
      description: "El mito solicitado no esta disponible.",
    };
  }

  const keywords = [myth.focus_keyword, ...(myth.keywords || [])].filter(Boolean);
  const seo = await getSeoEntry("myth", params.slug);

  return buildSeoMetadata({
    fallback: {
      title: myth.seo_title || myth.title,
      description: myth.seo_description || myth.excerpt,
      keywords,
    },
    seo,
    canonicalPath: `/mitos/${params.slug}`,
    openGraphType: "article",
    imageUrl: myth.image_url || undefined,
  });
}

function splitContent(content) {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  // Process blocks to separate headings from their content
  const processedBlocks = [];
  const sectionHeadings = ["Mito", "Historia", "Versiones", "Lección", "Similitudes"];

  blocks.forEach((block) => {
    // Check if block starts with a section heading followed by newline
    const firstLineEnd = block.indexOf('\n');
    if (firstLineEnd !== -1) {
      const firstLine = block.substring(0, firstLineEnd).trim();
      if (sectionHeadings.includes(firstLine)) {
        // Skip "Mito" heading
        if (firstLine !== "Mito") {
          processedBlocks.push(firstLine); // Add heading as separate block
        }
        const restOfContent = block.substring(firstLineEnd + 1).trim();
        if (restOfContent) {
          processedBlocks.push(restOfContent); // Add content
        }
        return;
      }
    }
    processedBlocks.push(block);
  });

  return processedBlocks;
}

function isHeading(block) {
  const sectionHeadings = ["Historia", "Versiones", "Lección", "Similitudes"];
  return sectionHeadings.includes(block);
}

function parseCoord(value) {
  if (value === null || value === undefined) return null;
  const normalized = String(value).trim().replace(/,/g, ".");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function resolveMythLocation(myth) {
  const lat = parseCoord(myth.latitude);
  const lng = parseCoord(myth.longitude);
  if (lat !== null && lng !== null) {
    return { lat, lng, isApproximate: false };
  }
  return {
    lat: COLOMBIA_CENTER.lat,
    lng: COLOMBIA_CENTER.lng,
    isApproximate: true,
  };
}

export default async function MythDetailPage({ params }) {
  const myth = await getMythBySlug(params.slug);
  if (!myth) {
    notFound();
  }

  const blocks = splitContent(myth.content);
  const recommendedMyths = await getRecommendedMyths(myth, 8);
  const location = resolveMythLocation(myth);

  return (
    <>
      <ArticleJsonLd
        title={myth.title}
        description={myth.excerpt}
        url={SITE_URL ? `${SITE_URL}/mitos/${myth.slug}` : undefined}
        imageUrl={myth.image_url}
        keywords={myth.keywords?.length ? myth.keywords.join(", ") : undefined}
        siteUrl={SITE_URL}
        datePublished={
          myth.created_at ? new Date(myth.created_at).toISOString() : undefined
        }
        dateModified={
          myth.updated_at ? new Date(myth.updated_at).toISOString() : undefined
        }
      />
      {SITE_URL && (
        <BreadcrumbJsonLd
          items={[
            { name: "Inicio", url: `${SITE_URL}/` },
            { name: "Mitos", url: `${SITE_URL}/mitos` },
            ...(myth.region
              ? [
                  {
                    name: myth.region,
                    url: `${SITE_URL}/regiones/${regionSlugFromName(myth.region)}`,
                  },
                ]
              : []),
            { name: myth.title, url: `${SITE_URL}/mitos/${myth.slug}` },
          ]}
        />
      )}
      <Header />
      <main className="relative min-h-screen pb-24">

      <section className="container-shell mt-12">
        <GlassCard className="overflow-hidden p-0">
          <div className="grid md:grid-cols-[1.5fr_1.5fr]">
            {/* Columna izquierda: Contenido */}
            <div className="order-2 p-8 md:order-1">
              <nav
                aria-label="Breadcrumb"
                className="text-xs uppercase tracking-[0.25em] text-ink-500"
              >
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-ink-900">
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden>›</li>
                  <li>
                    <Link href="/mitos" className="hover:text-ink-900">
                      Mitos
                    </Link>
                  </li>
                  {myth.region && (
                    <>
                      <li aria-hidden>›</li>
                      <li>
                        <Link
                          href={`/regiones/${regionSlugFromName(myth.region)}`}
                          className="hover:text-ink-900"
                        >
                          {myth.region}
                        </Link>
                      </li>
                    </>
                  )}
                </ol>
              </nav>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {myth.region && (
                  <Link href={`/regiones/${regionSlugFromName(myth.region)}`}>
                    <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600 hover:bg-jungle-500/20">
                      {myth.region}
                    </Badge>
                  </Link>
                )}
                {myth.community ? (
                  <Link href={`/comunidades/${communitySlugFromName(myth.community)}`}>
                    <Badge className="border-river-500/30 bg-river-500/10 text-river-600 hover:bg-river-500/20">
                      {myth.community}
                    </Badge>
                  </Link>
                ) : null}
                {myth.focus_keyword && <Badge>{myth.focus_keyword}</Badge>}
              </div>
              <h1 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl">
                {myth.title}
              </h1>
              {myth.updated_at && (
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-ink-500">
                  Actualizado el{" "}
                  <time dateTime={new Date(myth.updated_at).toISOString()}>
                    {new Date(myth.updated_at).toLocaleDateString("es-CO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
              )}
              <p className="mt-4 text-sm text-ink-700 md:text-base">
                {myth.excerpt}
              </p>
              <ShareBar
                title={myth.title}
                excerpt={myth.excerpt}
                slug={myth.slug}
                variant="inline"
              />
            </div>

            {/* Columna derecha: Imagen */}
            <div className="order-1 md:order-2">
              <div className="relative h-full min-h-[300px] overflow-hidden border-white/60 bg-white/40 md:min-h-0 md:border-l">
                {myth.image_url ? (
                  <>
                    <Image
                      src={myth.image_url}
                      alt={`Ilustración de ${myth.title}`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 20% 20%, rgba(30, 120, 94, 0.35), transparent 60%), radial-gradient(circle at 80% 10%, rgba(35, 98, 158, 0.3), transparent 55%), linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(234, 240, 235, 0.55))",
                      }}
                    />
                    <div className="absolute inset-0 border border-white/50" />
                    <div className="relative flex h-full items-end justify-between px-4 pb-3 text-[10px] uppercase tracking-[0.3em] text-ink-500">
                      <span>Imagen en proceso</span>
                      <span>AI</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="container-shell mt-10">
        <article className="glass-panel p-8">
          <div className="space-y-6 text-ink-700">
            {blocks.map((block, index) => {
              // Skip "Mito" heading
              if (block === "Mito") {
                return null;
              }

              return isHeading(block) ? (
                <h2
                  key={`${block}-${index}`}
                  className="mt-8 first:mt-0 mb-4 font-display text-2xl font-bold text-ink-900 border-b border-white/60 pb-2"
                >
                  {block}
                </h2>
              ) : (
                <p key={`${block}-${index}`} className="text-sm md:text-base leading-relaxed">
                  {block}
                </p>
              );
            })}
          </div>

          <div className="mt-10">
            <GlassCard className="p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="eyebrow">Territorio</p>
                  <h2 className="mt-2 font-display text-2xl text-ink-900">
                    Ubicacion geografica del mito
                  </h2>
                  <p className="mt-2 text-sm text-ink-600">
                    {location.isApproximate
                      ? "Ubicacion aproximada dentro del territorio colombiano."
                      : "Ubicacion registrada para este mito en el territorio."}
                  </p>
                </div>
                <ButtonLink href="/mapa" variant="outline" size="sm">
                  Ver mapa completo
                </ButtonLink>
              </div>
              <div className="mt-6 h-[320px] overflow-hidden rounded-2xl border border-white/60 md:h-[420px]">
                <MythLocationMapClient
                  title={myth.title}
                  latitude={location.lat}
                  longitude={location.lng}
                  isApproximate={location.isApproximate}
                />
              </div>
            </GlassCard>
          </div>

          {myth.keywords && myth.keywords.length > 0 && (
            <div className="mt-12 border-t border-white/60 pt-8">
              <h2 className="font-display text-lg font-bold text-ink-900 mb-4">
                Palabras clave
              </h2>
              <div className="flex flex-wrap gap-2">
                {myth.keywords.slice(0, 20).map((keyword) => (
                  <Link
                    key={keyword}
                    href={`/mitos?q=${encodeURIComponent(keyword)}`}
                    className="transition hover:scale-105"
                  >
                    <Badge className="cursor-pointer hover:bg-jungle-500/20 hover:border-jungle-500/50">
                      {keyword}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <ShareBar
              title={myth.title}
              excerpt={myth.excerpt}
              slug={myth.slug}
            />
          </div>

          <div className="mt-8">
            <ButtonLink href="/mitos" variant="outline">
              Volver al archivo
            </ButtonLink>
          </div>
        </article>
      </section>

      {recommendedMyths.length > 0 && (
        <section className="container-shell mt-10">
          <RecommendedMyths myths={recommendedMyths} />
        </section>
      )}

      <section className="container-shell mt-10">
        <Comments mythId={myth.id} />
      </section>
      </main>
    </>
  );
}
