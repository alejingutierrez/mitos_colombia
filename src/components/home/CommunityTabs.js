"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Icon, ImageFrame } from "../atoms";

/**
 * Home · una comunidad, muchas voces.
 *
 * Las pestañas son pueblos, no temas: el archivo guarda quién sostiene cada
 * relato y entrar por ahí cambia por completo lo que se lee. Cada panel muestra
 * un relato con obra propia de esa comunidad.
 *
 * El estado activo usa tinte verde (jungle-tint + borde jungle-500) en vez de
 * relleno oscuro: así el nombre de la región dentro de la pestaña sigue siendo
 * legible sin repintar cada hijo.
 */

export function CommunityTabs({ communities = [] }) {
  const items = communities.filter((item) => item?.myth?.imageUrl).slice(0, 5);
  const [active, setActive] = useState(0);

  if (!items.length) return null;

  const current = items[Math.min(active, items.length - 1)];

  return (
    <>
      <div
        role="tablist"
        aria-label="Comunidades"
        className="atlas-rail mb-6 flex gap-2 overflow-x-auto [scrollbar-width:none] md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const on = index === active;
          return (
            <button
              key={item.slug || index}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(index)}
              className={cn(
                "inline-flex min-h-[3.5rem] shrink-0 flex-col gap-1 rounded border px-4 py-2.5 text-left transition-colors md:px-[18px]",
                on
                  ? "border-jungle-500 bg-jungle-tint"
                  : "border-line-200 hover:border-line-300"
              )}
            >
              <span className="font-editorial text-[17px] leading-none text-jungle-700">
                {item.name}
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.16em]",
                  on ? "text-jungle-600" : "text-ink-500"
                )}
              >
                {item.region}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
        <Link
          href={`/comunidades/${current.slug}`}
          className="group relative block overflow-hidden bg-[rgb(var(--atlas-night))] lg:col-span-7"
        >
          <ImageFrame
            src={current.myth.imageUrl}
            alt=""
            ratio="3 / 2"
            sizes="(max-width: 1023px) 100vw, 52vw"
            quality={72}
            placeholderMotif={current.myth.motif || "hoja"}
            className="rounded-none border-0"
            imgClassName="atlas-image-zoom object-cover"
          />
        </Link>

        <div className="lg:col-span-5">
          <p className="atlas-kicker">
            Pueblo {current.name} · {current.region}
          </p>
          <p className="mt-2 font-editorial text-[length:var(--step-4)] leading-none text-jungle-700">
            {current.name}
          </p>
          <h3 className="atlas-title-sm mt-4">{current.myth.title}</h3>
          {current.myth.excerpt ? (
            <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
              {current.myth.excerpt}
            </p>
          ) : null}
          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-1">
            <Link href={`/mitos/${current.myth.slug}`} className="atlas-link group">
              Leer este relato
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
            {current.mythCount ? (
              <Link href={`/comunidades/${current.slug}`} className="atlas-link group">
                {current.mythCount === 1 ? "Ver su" : "Ver sus"}{" "}
                <span className="atlas-figure">{current.mythCount}</span>{" "}
                {current.mythCount === 1 ? "relato" : "relatos"}
                <Icon name="arrow-right" size={17} className="mc-arrow" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
