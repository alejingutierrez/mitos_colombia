import Link from "next/link";
import { Badge } from "./ui/Badge";
import { GlassCard } from "./ui/GlassCard";

export function MythCard({ myth, featured = false }) {
  if (!myth) return null;

  const hasImage = myth.image_url != null;

  if (featured) {
    return (
      <Link href={`/mitos/${myth.slug}`}>
        <GlassCard className="group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-lift">
          {hasImage && (
            <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
              <img
                src={myth.image_url}
                alt={myth.title}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
              {myth.region}
            </Badge>
          </div>
          <h3 className="mt-3 font-display text-2xl text-ink-900 line-clamp-2">
            {myth.title}
          </h3>
          {myth.excerpt && (
            <p className="mt-2 text-sm text-ink-700 line-clamp-3">
              {myth.excerpt}
            </p>
          )}
        </GlassCard>
      </Link>
    );
  }

  return (
    <Link href={`/mitos/${myth.slug}`}>
      <GlassCard className="group p-5 transition hover:-translate-y-1 hover:shadow-lift">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-river-600">
            {myth.region}
          </p>
          {hasImage && (
            <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600 text-xs">
              Con imagen
            </Badge>
          )}
        </div>
        <h3 className="mt-2 font-display text-xl text-ink-900 line-clamp-2 group-hover:text-river-600 transition">
          {myth.title}
        </h3>
        {myth.excerpt && (
          <p className="mt-2 text-sm text-ink-700 line-clamp-2">
            {myth.excerpt}
          </p>
        )}
      </GlassCard>
    </Link>
  );
}
