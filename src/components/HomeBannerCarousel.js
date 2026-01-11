"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { GlassCard } from "./ui/GlassCard";

const gradientStyles = [
  "from-jungle-700/40 via-ink-900/20 to-ink-900/70",
  "from-river-700/40 via-ink-900/20 to-ink-900/70",
  "from-ember-500/45 via-ink-900/20 to-ink-900/70",
];

const accentByIndex = [
  "text-jungle-600",
  "text-river-600",
  "text-ember-500",
];

export default function HomeBannerCarousel({ banners = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (banners.length <= 1) {
      return;
    }
    const timer = setInterval(() => {
      if (!paused) {
        setActiveIndex((prev) => (prev + 1) % banners.length);
      }
    }, 9000);
    return () => clearInterval(timer);
  }, [banners.length, paused]);

  useEffect(() => {
    if (activeIndex >= banners.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, banners.length]);

  const activeBanner = banners[activeIndex];
  const activeGradient = useMemo(
    () => gradientStyles[activeIndex % gradientStyles.length],
    [activeIndex]
  );
  const activeAccent = useMemo(
    () => accentByIndex[activeIndex % accentByIndex.length],
    [activeIndex]
  );

  if (!activeBanner) {
    return null;
  }

  return (
    <section
      className="container-shell mt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Convocatorias y novedades</p>
          <h2 className="mt-3 font-display text-4xl text-ink-900 md:text-5xl">
            Historias que se expanden
          </h2>
          <p className="section-body mt-3 max-w-2xl">
            Espacios abiertos para participar, descubrir rutas y seguir la vida
            editorial del archivo.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Banner anterior"
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-ink-700 shadow-sm transition hover:text-ink-900"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Banner siguiente"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % banners.length)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 text-ink-700 shadow-sm transition hover:text-ink-900"
          >
            →
          </button>
        </div>
      </div>

      <GlassCard className="mt-8 overflow-hidden p-0">
        <article
          key={activeBanner.slug}
          className="grid animate-fade-up gap-0 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative min-h-[240px] overflow-hidden lg:min-h-[380px]">
            {activeBanner.image_url ? (
              <Image
                src={activeBanner.image_url}
                alt={activeBanner.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority={activeIndex === 0}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-ink-200 via-ink-100 to-ink-50" />
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${activeGradient}`}
            />
            {!activeBanner.image_url && (
              <div className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-ink-700">
                Ilustracion en proceso
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between gap-6 p-8 lg:p-10">
            <div>
              {activeBanner.subtitle && (
                <Badge
                  className={`border-ink-500/20 bg-ink-50/70 ${activeAccent}`}
                >
                  {activeBanner.subtitle}
                </Badge>
              )}
              <h3 className="mt-4 font-display text-3xl text-ink-900 md:text-4xl">
                {activeBanner.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600 md:text-base">
                {activeBanner.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <ButtonLink href={activeBanner.cta_href} variant="subtle">
                {activeBanner.cta_label}
              </ButtonLink>
              <div className="flex items-center gap-2">
                {banners.map((banner, index) => (
                  <button
                    key={banner.slug}
                    type="button"
                    aria-label={`Ir al banner ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === activeIndex
                        ? "bg-ink-900"
                        : "bg-ink-300 hover:bg-ink-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </GlassCard>
    </section>
  );
}
