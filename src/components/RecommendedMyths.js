import { GlassCard } from "./ui/GlassCard";
import { ImageSlot } from "./ui/ImageSlot";
import { Badge } from "./ui/Badge";
import { ButtonLink } from "./ui/Button";

export function RecommendedMyths({ myths = [] }) {
  if (!myths || myths.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-ink-900">Mitos relacionados</h2>
      </div>

      <ul
        className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Mitos relacionados"
      >
        {myths.map((myth) => {
          const href = `/mitos/${myth.slug}`;
          return (
            <li key={myth.slug}>
              <GlassCard className="flex h-full flex-col gap-3 p-4 transition hover:-translate-y-1 hover:shadow-lift">
                <ImageSlot
                  src={myth.image_url}
                  alt={`Ilustración de ${myth.title}`}
                  size="compact"
                />
                <div className="flex flex-wrap gap-1">
                  <Badge className="text-xs border-jungle-500/30 bg-jungle-500/10 text-jungle-600">
                    {myth.region}
                  </Badge>
                </div>
                <h3 className="font-display text-lg text-ink-900 line-clamp-2">
                  <a href={href} className="hover:text-river-600">
                    {myth.title}
                  </a>
                </h3>
                <p className="text-xs text-ink-700 line-clamp-2">{myth.excerpt}</p>
                <ButtonLink href={href} size="sm" className="mt-auto">
                  Leer mito
                </ButtonLink>
              </GlassCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
