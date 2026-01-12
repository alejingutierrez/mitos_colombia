import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/Badge";

export function TarotCard({ card, compact = false }) {
  const mythTitle = card.myth_title?.trim() || "";
  const mythHref = card.myth_slug
    ? `/mitos/${card.myth_slug}`
    : `/mitos?q=${encodeURIComponent(mythTitle)}`;
  const readingSummary = card.reading_summary?.trim() || card.meaning?.trim();

  const arcanaLabel =
    card.arcana === "major"
      ? "Arcano mayor"
      : `Arcano menor · ${card.suit}`;

  return (
    <Link
      href={mythHref}
      className="group block h-full"
      data-analytics-event="select_content"
      data-analytics-category="tarot_card"
      data-analytics-label={card.card_name}
    >
      <div className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/70 p-4 shadow-glass transition hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-ink-100">
          {card.image_url ? (
            <Image
              src={card.image_url}
              alt={card.card_name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
              className="object-contain"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ink-200 via-ink-100 to-ink-50" />
          )}
        </div>
        <div className="mt-4 flex flex-1 flex-col">
          <Badge className="w-fit border-ink-500/20 bg-ink-50/70 text-ink-700">
            {arcanaLabel}
          </Badge>
          <h3 className="mt-3 font-display text-xl text-ink-900">
            {card.card_name}
          </h3>
          <p className="mt-2 text-sm text-ink-600">{mythTitle}</p>
          {!compact && (
            <>
              {readingSummary ? (
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  {readingSummary}
                </p>
              ) : null}
              <span className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-river-600">
                Leer mito →
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
