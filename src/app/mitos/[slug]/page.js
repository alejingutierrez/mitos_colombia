import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { Badge } from "../../../components/ui/Badge";
import { ButtonLink } from "../../../components/ui/Button";
import { GlassCard } from "../../../components/ui/GlassCard";
import { getMythBySlug, getRecommendedMyths } from "../../../lib/myths";
import { getComments } from "../../../lib/comments";
import { RecommendedMyths } from "../../../components/RecommendedMyths";
import { Comments } from "../../../components/Comments";
import Link from "next/link";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const myth = await getMythBySlug(params.slug);
  if (!myth) {
    return {
      title: "Mito no encontrado | Mitos de Colombia",
      description: "El mito solicitado no esta disponible.",
    };
  }

  const keywords = [myth.focus_keyword, ...(myth.keywords || [])].filter(Boolean);

  return {
    title: myth.seo_title || myth.title,
    description: myth.seo_description || myth.excerpt,
    keywords,
  };
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

export default async function MythDetailPage({ params }) {
  const myth = await getMythBySlug(params.slug);
  if (!myth) {
    notFound();
  }

  const blocks = splitContent(myth.content);
  const recommendedMyths = await getRecommendedMyths(myth, 8);
  const comments = await getComments(myth.id);

  return (
    <>
      <Header />
      <main className="relative min-h-screen pb-24">

      <section className="container-shell mt-12">
        <GlassCard className="overflow-hidden p-0">
          <div className="grid md:grid-cols-[1.5fr_1.5fr]">
            {/* Columna izquierda: Contenido */}
            <div className="order-2 p-8 md:order-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                  {myth.region}
                </Badge>
                {myth.community ? (
                  <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
                    {myth.community}
                  </Badge>
                ) : null}
                <Badge>{myth.focus_keyword}</Badge>
              </div>
              <h1 className="mt-4 font-display text-4xl text-ink-900 md:text-5xl">
                {myth.title}
              </h1>
              <p className="mt-4 text-sm text-ink-700 md:text-base">
                {myth.excerpt}
              </p>
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
                <h3
                  key={`${block}-${index}`}
                  className="mt-8 first:mt-0 mb-4 font-display text-2xl font-bold text-ink-900 border-b border-white/60 pb-2"
                >
                  {block}
                </h3>
              ) : (
                <p key={`${block}-${index}`} className="text-sm md:text-base leading-relaxed">
                  {block}
                </p>
              );
            })}
          </div>

          {myth.keywords && myth.keywords.length > 0 && (
            <div className="mt-12 border-t border-white/60 pt-8">
              <h3 className="font-display text-lg font-bold text-ink-900 mb-4">
                Palabras clave
              </h3>
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
        <Comments mythId={myth.id} initialComments={comments} />
      </section>
      </main>
    </>
  );
}
