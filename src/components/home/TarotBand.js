"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Icon } from "../atoms";

/**
 * Home · banda del oráculo.
 *
 * Las 78 cartas ya están ligadas a un mito real: es el mismo catálogo ordenado
 * por símbolo en vez de por territorio. El abanico centra siempre la carta
 * activa y reparte las otras a lado y lado — con un desplazamiento lineal las
 * dos restantes se iban ambas a la derecha y el conjunto quedaba descolgado.
 */

const OFFSET_X = 122;
const OFFSET_Y = 26;
const ROTATION = 10;

export function TarotBand({ cards = [] }) {
  const items = cards.filter((card) => card?.imageUrl).slice(0, 3);
  const [active, setActive] = useState(0);

  if (!items.length) return null;

  const current = items[Math.min(active, items.length - 1)];

  return (
    <section className="relative overflow-hidden bg-[rgb(var(--atlas-night))] text-white">
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(96%_86%_at_76%_40%,rgba(189,134,66,0.22)_0%,rgba(189,134,66,0.06)_40%,rgba(8,18,20,0)_72%)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-6 border border-ember-500/35"
        aria-hidden="true"
      />

      <Container
        size="atlas"
        className="atlas-section-y relative z-[1] grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:items-center lg:gap-14"
      >
        <div>
          <p className="atlas-kicker !text-ember-400">Pregunta al oráculo</p>
          <h2 className="atlas-section-heading mt-4 !text-white">
            La otra puerta del archivo: 78 cartas
          </h2>
          <span className="atlas-rule !bg-ember-500" />
          <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-white/80">
            Cada carta está ligada a un mito real. Es el mismo catálogo, ordenado
            por símbolo en vez de por territorio: otra forma de dejar que el
            relato te encuentre.
          </p>
          {current?.mythTitle ? (
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-white/60">
              <span className="text-ember-400">{current.name}</span> abre «
              {current.mythTitle}».
            </p>
          ) : null}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={() => setActive((value) => (value + 1) % items.length)}
              className="inline-flex h-12 items-center gap-2.5 rounded border border-ember-500 px-6 text-sm font-semibold text-ember-400 transition-colors hover:bg-ember-500 hover:text-[rgb(var(--atlas-night))] active:translate-y-px"
            >
              <Icon name="shuffle" size={17} />
              Barajar y consultar
            </button>
            <Link href="/tarot" className="atlas-link-invert">
              Ver las 78 cartas
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          </div>
        </div>

        <div className="relative h-[19rem] md:h-[25rem]">
          {items.map((card, index) => {
            // Reparto circular: la activa al centro, las otras a lado y lado.
            const slot = ((index - active + 1 + items.length) % items.length) - 1;
            const away = Math.abs(slot);
            const isActive = away === 0;
            return (
              <button
                key={card.name || index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={card.name}
                className="home-card absolute left-1/2 top-3 -ml-[4.5rem] h-[16.5rem] w-[9rem] overflow-hidden rounded bg-[#0b1a1c] md:-ml-[6.5rem] md:h-[19.5rem] md:w-[13rem]"
                style={{
                  transform: `translateX(${slot * OFFSET_X}px) translateY(${away * OFFSET_Y}px) rotate(${slot * ROTATION}deg) scale(${1 - away * 0.07})`,
                  zIndex: 9 - away,
                  filter: `brightness(${1 - away * 0.28})`,
                  boxShadow: isActive
                    ? "0 0 0 1px rgb(var(--ember-500)), 0 26px 56px -26px rgba(0,0,0,.9)"
                    : "0 0 0 1px rgba(255,255,255,.12), 0 16px 36px -22px rgba(0,0,0,.8)",
                }}
              >
                <Image
                  src={card.imageUrl}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 144px, 208px"
                  quality={70}
                  className="object-cover"
                />
              </button>
            );
          })}
          <p className="absolute inset-x-0 bottom-0 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
            Toca una carta para que se abra
          </p>
        </div>
      </Container>
    </section>
  );
}
