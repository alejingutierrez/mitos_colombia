"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Container, Icon, ImageFrame } from "../atoms";

/**
 * Home · portada viva.
 *
 * La rotación es el argumento de la sección: la obra a sangre cambia sola cada
 * 7 s y la tira de contactos deja ver de dónde viene y hacia dónde va. El H1 del
 * sitio se queda quieto encima — lo que rota es el archivo, no la voz.
 *
 * Tres decisiones que conviene no deshacer:
 *  · El buscador NO vive aquí (está en el header). Sobre la obra tapaba la
 *    ilustración, que es el mejor activo del archivo.
 *  · El titular usa .home-cover-title (--step-4) y no .atlas-h1 (--step-6): a
 *    72px el texto cubría media obra.
 *  · El velo es .home-cover-scrim, mucho más liviano que .atlas-scrim-cover. El
 *    contraste lo sostiene el halo de .atlas-on-image; por eso la tira de
 *    contactos lleva su propia banda (.home-rail-veil), que es donde el texto
 *    pequeño se perdía sobre las zonas claras.
 */

const ROTATION_MS = 7000;

export function HomeCover({ hero, slides = [] }) {
  const items = slides.filter((slide) => slide?.imageUrl).slice(0, 5);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    if (items.length < 2 || !playing) return undefined;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }
    timer.current = setInterval(
      () => setIndex((value) => (value + 1) % items.length),
      ROTATION_MS
    );
    return () => clearInterval(timer.current);
  }, [items.length, playing]);

  if (!items.length) return null;

  const active = items[index] || items[0];
  const go = (next) => {
    setIndex(((next % items.length) + items.length) % items.length);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[rgb(var(--atlas-night))] text-white">
      {items.map((slide, position) => (
        <span
          key={slide.slug || position}
          aria-hidden={position === index ? undefined : "true"}
          className="absolute inset-0 transition-opacity duration-1000 ease-editorial"
          style={{ opacity: position === index ? 1 : 0 }}
        >
          <ImageFrame
            src={slide.imageUrl}
            // Por debajo de 768px se sirve la obra vertical, no un recorte de la
            // apaisada: en una caja de 390x600 el recorte pierde el sujeto.
            mobileSrc={slide.portraitImageUrl || null}
            alt=""
            ratio={null}
            sizes="(max-width: 1023px) 1200px, 100vw"
            mobileSizes="100vw"
            quality={72}
            priority={position === 0}
            className="absolute inset-0 h-full w-full rounded-none border-0"
            imgClassName="object-cover object-[50%_38%]"
          />
        </span>
      ))}

      <span
        className="home-cover-scrim pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Ciclo de rotación: decorativo, el estado real lo llevan las miniaturas. */}
      <span
        className="absolute inset-x-0 top-0 z-[3] h-0.5 bg-white/15"
        aria-hidden="true"
      >
        {playing ? <span className="home-rot-fill block h-full bg-ember-500" /> : null}
      </span>

      <Container
        size="atlas"
        className="atlas-on-image relative z-[2] flex min-h-[29rem] flex-col justify-end pb-6 pt-16 md:min-h-[38rem] md:justify-between md:pb-9 md:pt-20"
      >
        <div className="max-w-[39rem]">
          <p className="atlas-kicker !text-white">{hero?.kicker}</p>
          <h1 className="home-cover-title mt-3">
            Las historias que Colombia{" "}
            <span className="text-ember-400">se cuenta a sí misma</span>
          </h1>
          {hero?.description ? (
            <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-white/90 md:text-[15px]">
              {hero.description}
            </p>
          ) : null}
          {active?.slug ? (
            <Link href={`/mitos/${active.slug}`} className="atlas-link-invert mt-3">
              Leer la portada de hoy
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          ) : null}
        </div>

        <CoverRail
          items={items}
          index={index}
          playing={playing}
          onPick={go}
          onToggle={() => setPlaying((value) => !value)}
        />
      </Container>
    </section>
  );
}

function CoverRail({ items, index, playing, onPick, onToggle }) {
  return (
    <div className="relative mt-8 md:mt-10">
      <span
        className="home-rail-veil pointer-events-none absolute -inset-x-[var(--gutter)] -top-8 bottom-[-1.5rem]"
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 border-b border-white/25 pb-3">
          <p className="atlas-kicker !text-[11px] !text-white">
            Portada de hoy · la selección rota cada día
          </p>
          <div className="flex shrink-0 items-center gap-0.5">
            <RailButton label="Portada anterior" icon="chevron-left" onClick={() => onPick(index - 1)} />
            <RailButton
              label={playing ? "Pausar la rotación" : "Reanudar la rotación"}
              icon={playing ? "pause" : "arrow-right"}
              onClick={onToggle}
            />
            <RailButton label="Portada siguiente" icon="chevron-right" onClick={() => onPick(index + 1)} />
          </div>
        </div>

        <ul className="atlas-rail mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] md:grid md:grid-cols-5 md:gap-4 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {items.map((item, position) => {
            const current = position === index;
            return (
              <li
                key={item.slug || position}
                className="w-[13rem] shrink-0 snap-start md:w-auto"
              >
                <button
                  type="button"
                  onClick={() => onPick(position)}
                  aria-current={current ? "true" : undefined}
                  className={cn(
                    "block w-full text-left transition-opacity duration-500 ease-editorial",
                    current ? "opacity-100" : "opacity-[0.66] hover:opacity-90"
                  )}
                >
                  <span className="group relative block aspect-[16/9] overflow-hidden bg-[#0b1a1c] md:aspect-[16/6]">
                    <ImageFrame
                      src={item.thumbUrl || item.imageUrl}
                      alt=""
                      ratio={null}
                      sizes="(max-width: 767px) 208px, 18vw"
                      quality={62}
                      className="absolute inset-0 h-full w-full rounded-none border-0"
                      imgClassName="atlas-image-zoom object-cover object-[50%_40%]"
                    />
                    <span className="atlas-figure absolute left-2.5 top-1.5 font-editorial text-sm text-ember-400">
                      {String(position + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "absolute inset-x-0 bottom-0 h-[3px]",
                        current ? "bg-ember-500" : "bg-transparent"
                      )}
                    />
                  </span>
                  {/* El rótulo va DEBAJO: varias obras llevan el nombre impreso
                      y el sobreimpreso lo duplicaba encima. */}
                  <span className="mt-2.5 block font-editorial text-sm leading-tight text-white">
                    {item.title}
                  </span>
                  {item.meta ? (
                    <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                      {item.meta}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function RailButton({ label, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      <Icon name={icon} size={16} />
    </button>
  );
}
