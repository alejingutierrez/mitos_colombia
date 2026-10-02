"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Icon } from "../atoms";
import styles from "./home-journey.module.css";

/**
 * Home · banda del oráculo.
 *
 * Las 78 cartas ya están ligadas a un mito real: es el mismo catálogo ordenado
 * por símbolo en vez de por territorio. El abanico centra siempre la carta
 * activa y reparte las otras a lado y lado — con un desplazamiento lineal las
 * dos restantes se iban ambas a la derecha y el conjunto quedaba descolgado.
 */

const OFFSET_Y = 26;
const ROTATION = 10;

export function TarotBand({ cards = [], children }) {
  const items = cards.filter((card) => card?.imageUrl).slice(0, 3);
  const [active, setActive] = useState(0);

  if (!items.length) return null;

  const current = items[Math.min(active, items.length - 1)];

  return (
    <section id="oraculo" data-home-chapter className={`${styles.oracle} relative overflow-hidden`}>

      <Container
        size="atlas"
        className={styles.oracleLayout}
      >
        <div>
          <p className="atlas-kicker">Pregunta al oráculo</p>
          <h2 className="atlas-section-heading mt-4">
            La otra puerta del archivo: 78 cartas
          </h2>
          <span className="atlas-rule !bg-ember-500" />
          <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-ink-700">
            Un oráculo para seguir preguntando. Cada carta está ligada a un mito del archivo.
          </p>
          {current?.mythTitle ? (
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-ink-700" aria-live="polite" aria-atomic="true">
              <span className="text-jungle-700">{current.name}</span> abre «
              {current.mythTitle}».
            </p>
          ) : null}
          {current?.mythSlug ? (
            <Link href={`/mitos/${current.mythSlug}`} className="atlas-link mt-3">
              Leer este mito <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          ) : null}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={() => setActive((value) => (value + 1) % items.length)}
              className="inline-flex h-12 items-center gap-2.5 rounded bg-jungle-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-jungle-500 active:translate-y-px"
            >
              <Icon name="shuffle" size={17} />
              Barajar y consultar
            </button>
            <Link href="/tarot" className="atlas-link">
              Ver las 78 cartas
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          </div>
        </div>

        <div className={`${styles.oracleFan} relative h-[20rem]`}>
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
                aria-pressed={isActive}
                className="home-card absolute left-1/2 top-3 -ml-[4.5rem] h-[16.5rem] w-[9rem] overflow-hidden rounded bg-jungle-700"
                style={{
                  transform: `translateX(calc(${slot} * var(--oracle-offset))) translateY(${away * OFFSET_Y}px) rotate(${slot * ROTATION}deg) scale(${1 - away * 0.07})`,
                  zIndex: 9 - away,
                  outline: isActive ? "2px solid rgb(var(--ember-400))" : "1px solid rgb(var(--jungle-500))",
                  outlineOffset: "3px",
                }}
              >
                <Image
                  src={card.imageUrl}
                  alt=""
                  fill
                  sizes="144px"
                  quality={90}
                  className="object-cover"
                />
              </button>
            );
          })}
          <p className="absolute inset-x-0 bottom-0 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-700">
            Toca una carta para que se abra
          </p>
        </div>
        {children ? <div className={styles.closing}>{children}</div> : null}
      </Container>
    </section>
  );
}
