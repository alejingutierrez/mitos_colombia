import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { Badge } from "../../../components/ui/Badge";
import { ButtonLink } from "../../../components/ui/Button";
import { GlassCard } from "../../../components/ui/GlassCard";
import { getMythBySlug } from "../../../lib/myths";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
  return content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
}

function isHeading(block) {
  if (block.length > 70) {
    return false;
  }
  return !/[.!?]/.test(block);
}

export default async function MythDetailPage({ params }) {
  const myth = await getMythBySlug(params.slug);
  if (!myth) {
    notFound();
  }

  const blocks = splitContent(myth.content);

  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <Header />

      <section className="container-shell mt-12">
        <GlassCard className="p-8">
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
          <p className="mt-4 max-w-2xl text-sm text-ink-700 md:text-base">
            {myth.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-ink-500">
            <span>{myth.category_path}</span>
            <span>Fuente: archivo editorial</span>
          </div>
        </GlassCard>
      </section>

      <section className="container-shell mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="glass-panel p-8">
          <div className="space-y-5 text-ink-700">
            {blocks.map((block, index) =>
              isHeading(block) ? (
                <h2
                  key={`${block}-${index}`}
                  className="font-display text-2xl text-ink-900"
                >
                  {block}
                </h2>
              ) : (
                <p key={`${block}-${index}`} className="text-sm md:text-base">
                  {block}
                </p>
              )
            )}
          </div>
        </article>

        <aside className="flex flex-col gap-5">
          <GlassCard className="p-6">
            <p className="eyebrow text-ember-500">Resumen SEO</p>
            <p className="mt-3 text-sm text-ink-700">{myth.seo_description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {myth.tags.map((tag) => (
                <Badge key={tag.slug}>{tag.name}</Badge>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="eyebrow">Palabras clave</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {myth.keywords.slice(0, 12).map((keyword) => (
                <Badge key={keyword}>{keyword}</Badge>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="eyebrow">Prompt de ilustracion</p>
            <details className="mt-3 text-sm text-ink-700">
              <summary className="cursor-pointer text-xs uppercase tracking-[0.3em] text-ink-500">
                Ver prompt
              </summary>
              <p className="mt-3 whitespace-pre-line">{myth.image_prompt}</p>
            </details>
          </GlassCard>

          <ButtonLink href="/mitos" variant="outline">
            Volver al archivo
          </ButtonLink>
        </aside>
      </section>
    </main>
  );
}
