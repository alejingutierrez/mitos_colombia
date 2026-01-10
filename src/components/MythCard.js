import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import { GlassCard } from "./ui/GlassCard";

export function MythCard({ myth, featured = false }) {
  if (!myth) return null;

  const hasImage = myth.image_url != null;

  if (featured) {
    return (
      <Link href={`/mitos/${myth.slug}`} className="group block">
        <GlassCard className="relative h-full overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl p-0">
          {hasImage && (
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={myth.image_url}
                alt={myth.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          )}
          <div className="p-6">
            <Badge className="border-river-500/30 bg-river-500/10 text-river-600">
              {myth.region}
            </Badge>
            <h3 className="mt-4 font-display text-2xl leading-tight text-ink-900 transition group-hover:text-river-600 line-clamp-2">
              {myth.title}
            </h3>
            {myth.excerpt && (
              <p className="mt-3 text-sm leading-relaxed text-ink-600 line-clamp-3">
                {myth.excerpt}
              </p>
            )}
            <div className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-river-600 opacity-0 transition group-hover:opacity-100">
              <span>Leer mas</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </div>
        </GlassCard>
      </Link>
    );
  }

  return (
    <Link href={`/mitos/${myth.slug}`} className="group block">
      <GlassCard className="relative h-full overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl p-0">
        {hasImage && (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={myth.image_url}
              alt={myth.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-river-600">
              {myth.region}
            </p>
            {hasImage && (
              <Badge className="border-jungle-500/30 bg-jungle-500/10 text-jungle-600 text-xs">
                Ilustrado
              </Badge>
            )}
          </div>
          <h3 className="mt-4 font-display text-xl leading-tight text-ink-900 transition group-hover:text-river-600 line-clamp-2">
            {myth.title}
          </h3>
          {myth.excerpt && (
            <p className="mt-3 text-sm leading-relaxed text-ink-600 line-clamp-3">
              {myth.excerpt}
            </p>
          )}
          <div className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-river-600 opacity-0 transition group-hover:opacity-100">
            <span>Leer mas</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
