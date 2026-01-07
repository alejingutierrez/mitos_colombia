"use client";

import { useState } from "react";
import { GlassCard } from "./ui/GlassCard";
import { ImageSlot } from "./ui/ImageSlot";
import { Badge } from "./ui/Badge";
import { ButtonLink } from "./ui/Button";

export function RecommendedMyths({ myths = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!myths || myths.length === 0) {
    return null;
  }

  const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 4 : 3;
  const maxIndex = Math.max(0, myths.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleMyths = myths.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-ink-900">Mitos relacionados</h2>
        {myths.length > itemsPerPage && (
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="rounded-full border border-white/60 bg-white/40 p-2 shadow-sm transition hover:bg-white/60 disabled:opacity-30 disabled:hover:bg-white/40"
              aria-label="Anterior"
            >
              <svg
                className="h-5 w-5 text-ink-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="rounded-full border border-white/60 bg-white/40 p-2 shadow-sm transition hover:bg-white/60 disabled:opacity-30 disabled:hover:bg-white/40"
              aria-label="Siguiente"
            >
              <svg
                className="h-5 w-5 text-ink-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {visibleMyths.map((myth) => (
          <GlassCard
            key={myth.slug}
            className="flex flex-col gap-3 p-4 transition hover:-translate-y-1 hover:shadow-lift"
          >
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
              {myth.title}
            </h3>
            <p className="text-xs text-ink-700 line-clamp-2">{myth.excerpt}</p>
            <ButtonLink href={`/mitos/${myth.slug}`} size="sm" className="mt-auto">
              Leer mito
            </ButtonLink>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
