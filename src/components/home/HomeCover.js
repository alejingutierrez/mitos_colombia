"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Container, Icon, ImageFrame, VisuallyHidden } from "../atoms";

/**
 * Home · portada viva.
 *
 * La rotación es el argumento de la sección: la obra a sangre cambia sola y la
 * tira de contactos deja ver de dónde viene y hacia dónde va. El H1 del sitio se
 * queda quieto encima — lo que rota es el archivo, no la voz.
 *
 * Decisiones que conviene no deshacer:
 *  · El buscador NO vive aquí (está en el header). Sobre la obra tapaba la
 *    ilustración, que es el mejor activo del archivo.
 *  · El titular usa .home-cover-title (--step-4) y no .atlas-h1 (--step-6): a
 *    72px el texto cubría media obra.
 *  · El velo es .home-cover-scrim, mucho más liviano que .atlas-scrim-cover. El
 *    contraste lo sostiene el halo de .atlas-on-image; por eso la tira de
 *    contactos lleva su propia banda (.home-rail-veil), que es donde el texto
 *    pequeño se perdía sobre las zonas claras.
 *
 * Contrato de altura (2026-09): la portada manda en pantalla. El corte va en
 * `lg` y no en `md` porque ahí es donde el header cambia de alto: por debajo de
 * 1024px lleva una segunda fila con el buscador y mide 121px medidos; de 1024px
 * en adelante, 65px.
 *  · ≥1024px: `100svh - 4rem`, la altura del header. En un 1440x900 la caja
 *    queda en 1440x836 → 1,72, casi la proporción del máster 16:9, así que el
 *    recorte es mínimo.
 *  · <1024px: `100svh - 11rem` = los 121px del header más ~55px del bloque
 *    siguiente asomando, que es lo que anuncia que la página continúa. La obra
 *    gana sitio recortando la tira de contactos, no empujando el contenido.
 * Siempre `svh` y nunca `vh`: con `vh` la barra del navegador móvil se come el
 * margen y el contenido se va abajo del pliegue.
 *
 * Sólo se monta la obra activa (más la saliente mientras dura el fundido). La
 * saliente se va ENCIMA de la entrante, no al revés: así el fundido lo dispara
 * un elemento que el navegador ya pintó (de opacidad 1 a 0), sin depender de un
 * `requestAnimationFrame` — que en una pestaña de fondo no se ejecuta y dejaría
 * la obra entrante congelada en opacidad 0. Si el fundido no llega a correr, lo
 * peor que pasa es un corte seco; nunca un hueco negro.
 */

const ROTATION_MS = 8000;
const FADE_MS = 900;
/* Umbral del gesto: por debajo de esto un roce al desplazar no cambia de obra. */
const SWIPE_PX = 44;

/**
 * `prefers-reduced-motion` propio y no el de framer-motion: aquel lee
 * `matchMedia` durante el primer render del cliente, así que el servidor pinta
 * una cosa y la hidratación otra. Este arranca en `false` (igual que el
 * servidor) y se corrige en un efecto, sin desajuste, y además escucha los
 * cambios de preferencia en vivo.
 */
function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!query) return undefined;
    const sync = () => setReduce(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return reduce;
}

export function HomeCover({ hero, slides = [] }) {
  const items = useMemo(
    () => slides.filter((slide) => slide?.imageUrl).slice(0, 5),
    [slides]
  );
  const count = items.length;

  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  // Obra saliente: se queda encima, desvaneciéndose, mientras dura el fundido.
  const [outgoing, setOutgoing] = useState(null);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  // Cualquier gesto manual reinicia el reloj: la obra que acabas de elegir no
  // puede desaparecer al instante porque el ciclo venía a punto de cumplirse.
  const [clock, setClock] = useState(0);

  const held = hovering || focused;
  const rotating = count > 1 && !reduce && !paused && !held;

  const goTo = useCallback(
    (next) => {
      if (count < 2) return;
      setIndex(((next % count) + count) % count);
      setClock((value) => value + 1);
    },
    [count]
  );

  /* Fundido de salida. La capa saliente ya estaba pintada en opacidad 1, así
     que basta con darle 0 en el commit siguiente para que la transición
     arranque sola; no hace falta esperar ningún cuadro. */
  const previousIndex = useRef(index);
  useEffect(() => {
    const previous = previousIndex.current;
    previousIndex.current = index;
    if (previous === index || reduce) {
      setOutgoing(null);
      return undefined;
    }
    setOutgoing(previous);
    const timer = setTimeout(() => setOutgoing(null), FADE_MS + 80);
    return () => clearTimeout(timer);
  }, [index, reduce]);

  /* Autorrotación. `index` y `clock` están en las dependencias a propósito: el
     temporizador se vuelve a crear entero en cada cambio, así que navegar a
     mano reinicia el ciclo en vez de heredar lo que quedaba del anterior. */
  useEffect(() => {
    if (!rotating) return undefined;
    const timer = setTimeout(() => {
      setIndex((current) => (current + 1) % count);
    }, ROTATION_MS);
    return () => clearTimeout(timer);
  }, [rotating, count, index, clock]);

  const gesture = useRef(null);

  const handlePointerDown = (event) => {
    // El arrastre con ratón no es un gesto esperado en una portada; y sobre la
    // tira de contactos el dedo está desplazando el carril, no cambiando de obra.
    if (event.pointerType === "mouse") return;
    if (event.target?.closest?.("[data-cover-rail]")) return;
    gesture.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event) => {
    const start = gesture.current;
    gesture.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) <= Math.abs(dy)) return;
    goTo(dx < 0 ? index + 1 : index - 1);
  };

  const handleKeyDown = (event) => {
    if (count < 2) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    goTo(event.key === "ArrowLeft" ? index - 1 : index + 1);
  };

  const handleBlur = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setFocused(false);
  };

  if (!count) return null;

  const active = items[index] || items[0];
  /* La saliente va PRIMERA en el DOM y sube por `z-index`: así React nunca
     mueve el nodo (sólo añade el nuevo detrás) y la transición no se corta. */
  const layers =
    outgoing !== null && outgoing !== index
      ? [
          { position: outgoing, leaving: true },
          { position: index, leaving: false },
        ]
      : [{ position: index, leaving: false }];

  return (
    <section
      aria-label="Portada del archivo"
      aria-roledescription={count > 1 ? "carrusel" : undefined}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        gesture.current = null;
      }}
      className={cn(
        "relative isolate flex flex-col overflow-hidden bg-[rgb(var(--atlas-night))] text-white",
        "min-h-[max(28rem,calc(100svh_-_11rem))] lg:min-h-[max(38rem,calc(100svh_-_4rem))]"
      )}
    >
      {layers.map(({ position, leaving }) => {
        // Red de seguridad: si `slides` cambia y encoge, el índice guardado
        // podría apuntar fuera de la lista.
        const slide = items[position] || items[0];
        return (
          <span
            key={slide.slug || position}
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              zIndex: leaving ? 1 : 0,
              opacity: leaving ? 0 : 1,
              transition: reduce
                ? "none"
                : `opacity ${FADE_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          >
            <ImageFrame
              src={slide.imageUrl}
              // Por debajo de 768px se sirve la obra vertical, no un recorte de
              // la apaisada: en una caja de 390x640 el recorte pierde el sujeto.
              mobileSrc={slide.portraitImageUrl || null}
              alt=""
              ratio={null}
              // La caja es a sangre en TODOS los anchos, así que `100vw` es la
              // única medida honesta. El `1200px` fijo que había aquí se quedaba
              // corto justo en la franja 768–1023 (una tableta a 2x necesita más
              // del doble) y era la causa de que la obra se viera blanda.
              sizes="100vw"
              mobileSizes="100vw"
              // 68 y no 72: `next.config.js` declara `qualities: [68, 75, 90]` y
              // el optimizador responde 400 a cualquier otro valor.
              quality={68}
              // `priority` en TODAS las capas montadas, no sólo en la primera:
              // como sólo existen una o dos y ambas están a la vista, sin esto
              // next/image les pone `loading="lazy"` y el navegador retrasa la
              // descarga de la obra que acaba de entrar — un parpadeo a negro
              // en cada giro. En la carga inicial no cambia nada: sólo hay una.
              priority
              // `bg-transparent` pisa el `bg-mist-50` de ImageFrame: mientras la
              // obra carga, lo que se ve es el fondo noche de la sección y no un
              // rectángulo casi blanco a pantalla completa.
              className="absolute inset-0 h-full w-full rounded-none border-0 bg-transparent"
              imgClassName="object-cover object-[50%_38%]"
            />
          </span>
        );
      })}

      {/* El velo va en z-[2] a propósito: las capas de obra usan z 0 y 1 para
          apilarse durante el fundido y sin esto la saliente lo taparía. */}
      <span
        className="home-cover-scrim pointer-events-none absolute inset-0 z-[2]"
        aria-hidden="true"
      />

      {/* Ciclo de rotación: decorativo, el estado real lo llevan las miniaturas.
          La `key` lo remonta en cada cambio para que la barra empiece de cero. */}
      {count > 1 && !reduce ? (
        <span
          className="pointer-events-none absolute inset-x-0 top-0 z-[4] h-0.5 bg-white/15"
          aria-hidden="true"
        >
          <span
            key={`${index}-${clock}`}
            className="home-rot-fill block h-full bg-ember-500"
            style={{
              animationDuration: `${ROTATION_MS}ms`,
              animationPlayState: rotating ? "running" : "paused",
            }}
          />
        </span>
      ) : null}

      <Container
        size="atlas"
        className="atlas-on-image relative z-[3] flex flex-1 flex-col justify-end pb-6 pt-20 md:pb-10 md:pt-24"
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
              {active.title ? <VisuallyHidden>: {active.title}</VisuallyHidden> : null}
              <Icon name="arrow-right" size={17} className="mc-arrow" />
            </Link>
          ) : null}
        </div>

        {count > 1 ? (
          <CoverRail
            items={items}
            index={index}
            paused={paused}
            onPick={goTo}
            onToggle={() => {
              setPaused((value) => !value);
              setClock((value) => value + 1);
            }}
          />
        ) : null}

        {/* El anuncio sólo tiene sentido cuando la obra cambió porque alguien lo
            pidió; con la rotación en marcha sería un lector interrumpido cada 8s. */}
        <VisuallyHidden aria-live={rotating ? "off" : "polite"}>
          {`Portada ${index + 1} de ${count}${active?.title ? `: ${active.title}` : ""}`}
        </VisuallyHidden>
      </Container>
    </section>
  );
}

function CoverRail({ items, index, paused, onPick, onToggle }) {
  return (
    <div className="relative mt-8 md:mt-10" data-cover-rail="">
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
            <RailButton
              label="Portada anterior"
              onClick={() => onPick(index - 1)}
            >
              <Icon name="chevron-left" size={16} />
            </RailButton>
            <RailButton
              label={paused ? "Reanudar la rotación" : "Pausar la rotación"}
              onClick={onToggle}
            >
              {paused ? <PlayGlyph /> : <Icon name="pause" size={16} />}
            </RailButton>
            <RailButton
              label="Portada siguiente"
              onClick={() => onPick(index + 1)}
            >
              <Icon name="chevron-right" size={16} />
            </RailButton>
          </div>
        </div>

        <ul className="atlas-rail mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] md:grid md:grid-cols-5 md:gap-4 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {items.map((item, position) => {
            const current = position === index;
            return (
              <li
                key={item.slug || position}
                // En móvil la tira va a dieta (10,5rem y sin la línea de
                // procedencia): cada píxel que suelta se lo queda la obra.
                className="w-[10.5rem] shrink-0 snap-start md:w-auto"
              >
                <button
                  type="button"
                  onClick={() => onPick(position)}
                  aria-current={current ? "true" : undefined}
                  aria-label={`Ver la portada ${position + 1} de ${items.length}: ${item.title}`}
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
                      sizes="(max-width: 767px) 168px, (max-width: 1459px) 19vw, 277px"
                      quality={68}
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
                  <span
                    aria-hidden="true"
                    // `line-clamp-2` acota la tira: un título de tres líneas le
                    // robaba a la obra los píxeles que esta dieta le devuelve.
                    className="mt-2.5 line-clamp-2 block font-editorial text-sm leading-tight text-white"
                  >
                    {item.title}
                  </span>
                  {item.meta ? (
                    <span
                      aria-hidden="true"
                      className="mt-1.5 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60 md:block"
                    >
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

function RailButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      {children}
    </button>
  );
}

/* El sistema de íconos no tiene «play» y no es este componente quien debe
   ampliarlo: el glifo vive aquí, junto a su único uso. */
function PlayGlyph({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="inline-block shrink-0"
    >
      <path d="M8 5.4v13.2L19 12z" />
    </svg>
  );
}
