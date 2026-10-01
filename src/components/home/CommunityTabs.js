"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Container, Icon, ImageFrame } from "../atoms";
import { communitySelection } from "../../lib/home-discovery";
import styles from "./home-journey.module.css";

/**
 * Home · una comunidad, muchas voces.
 *
 * Índice de pueblos + panel de relatos. Las pestañas son pueblos, no temas: el
 * archivo guarda quién sostiene cada relato y entrar por ahí cambia por
 * completo lo que se lee.
 *
 * Qué se arregló, y no se debe deshacer:
 *
 *  · ANTES sólo existía el panel activo: los otros cuatro no llegaban al HTML.
 *    El rastreador veía UN enlace de relato en toda la sección. Ahora se sirven
 *    TODOS los paneles y los inactivos se ocultan con el atributo `hidden`.
 *    Por eso el nodo raíz de cada panel NO puede llevar una clase de display
 *    (`grid`, `flex`, `block`): le ganaría al `display:none` del navegador y los
 *    ocho paneles quedarían apilados. La retícula va siempre en un hijo.
 *
 *  · ANTES cada pueblo aportaba un solo relato (había un LIMIT 1 en la
 *    consulta). Ahora llegan cuatro: uno de entrada y tres al lado. Con cinco
 *    pueblos la sección daba acceso a cinco relatos; con ocho por cuatro, a 32.
 *
 *  · El índice es horizontal en todos los anchos. Las flechas, Home y End
 *    mueven selección y foco, manteniendo visible la pestaña activa.
 *
 *  · La obra de cada pueblo es la del primer relato: `communities[]` no trae
 *    portada propia. Si llegara vacía, `ImageFrame` cae a un motivo
 *    tenue sobre fondo de bruma — nunca a una caja rota. Lo mismo con la
 *    entradilla: si el relato no la tiene, no se pinta el párrafo.
 */

/* Techo del índice horizontal; la home ofrece seis pueblos por selección. */
const MAX_PUEBLOS = 10;

/** «4 de los 27 relatos…» / «Los 4 relatos…» / «El único relato…». Las cifras
 *  van en `atlas-figure` (caja alta, ancho fijo), así que la frase se arma en
 *  JSX y no por interpolación. */
function Recuento({ mostrados, guardados }) {
  if (guardados > mostrados) {
    return (
      <>
        <span className="atlas-figure">{mostrados}</span> de los{" "}
        <span className="atlas-figure">{guardados}</span> relatos ilustrados que el archivo guarda
        de este pueblo.
      </>
    );
  }
  if (guardados === 1) return <>El relato ilustrado que el archivo guarda de este pueblo.</>;
  return (
    <>
      Los <span className="atlas-figure">{guardados}</span> relatos que el archivo
      guarda ilustrados de este pueblo.
    </>
  );
}

export function CommunityTabs({ communities = [], pool = [], seed = 0 }) {
  const uid = useId();
  const [batch, setBatch] = useState(communities);
  const [turn, setTurn] = useState(0);
  const [artworkReady, setArtworkReady] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setArtworkReady(true); observer.disconnect(); }
    }, { rootMargin: "600px" });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const items = (batch || [])
    .map((item) => {
      if (!item?.name) return null;
      /* `myth` es el campo de compatibilidad de cuando la consulta traía uno
         solo. Se conserva como red: si `myths` volviera vacío, la sección sigue
         de pie con una tarjeta en vez de desaparecer. */
      const myths = (
        item.myths?.length ? item.myths : item.myth ? [item.myth] : []
      ).filter((myth) => myth?.slug && myth?.title);
      return myths.length ? { ...item, myths } : null;
    })
    .filter(Boolean)
    .slice(0, MAX_PUEBLOS);

  const [active, setActive] = useState(0);
  const railRef = useRef(null);
  const tabRefs = useRef([]);
  const reduce = useReducedMotion();

  const total = items.length;

  /* Mueve el foco sin arrastrar la página (`preventScroll`) y después corrige
     el scroll horizontal del propio índice, sólo si está en modo carrusel. */
  const focusTab = useCallback(
    (index) => {
      if (!total) return;
      const next = ((index % total) + total) % total;
      setActive(next);
      const el = tabRefs.current[next];
      if (!el) return;
      el.focus({ preventScroll: true });
      const rail = railRef.current;
      if (!rail || rail.scrollWidth <= rail.clientWidth + 1) return;
      const railBox = rail.getBoundingClientRect();
      const elBox = el.getBoundingClientRect();
      const margen = 16;
      if (elBox.left < railBox.left) {
        rail.scrollLeft -= railBox.left - elBox.left + margen;
      } else if (elBox.right > railBox.right) {
        rail.scrollLeft += elBox.right - railBox.right + margen;
      }
    },
    [total, setActive]
  );

  const onKeyDown = useCallback(
    (event, index) => {
      let destino = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") destino = index + 1;
      else if (event.key === "ArrowLeft" || event.key === "ArrowUp") destino = index - 1;
      else if (event.key === "Home") destino = 0;
      else if (event.key === "End") destino = total - 1;
      if (destino === null) return;
      event.preventDefault();
      focusTab(destino);
    },
    [focusTab, total]
  );

  if (!total) return null;

  const activo = Math.min(active, total - 1);
  const idDe = (index) => `${uid}-pueblo-${index}`;

  return (
    <div ref={sectionRef}>
      <Container size="atlas">
        <div className={styles.communityToolbar}>
        <div ref={railRef} role="tablist" aria-label="Pueblos del archivo" aria-orientation="horizontal" className={styles.communityIndex}>
          {items.map((item, index) => {
            const on = index === activo;
            return (
              <button key={item.slug || index} type="button" role="tab" id={`${idDe(index)}-tab`} aria-selected={on} aria-controls={`${idDe(index)}-panel`} tabIndex={on ? 0 : -1}
                ref={(node) => { tabRefs.current[index] = node; }} onClick={() => focusTab(index)} onKeyDown={(event) => onKeyDown(event,index)} className={styles.communityTab}>
                {item.name}
              </button>
            );
          })}
        </div>
        {pool.length > items.length ? <button type="button" className={styles.communityShuffle} onClick={() => { const next = turn + 1; let selected = communitySelection(pool, seed + next, items.map((item) => item.slug)); if (!selected.length) selected = communitySelection(pool, seed + next); setBatch(selected); setActive(0); setTurn(next); }}><Icon name="shuffle" size={17} />Cambiar comunidades</button> : null}
        </div>
        <p className="sr-only" role="status">{turn ? "Nueva selección de comunidades." : ""}</p>
      </Container>
      {items.map((item,index) => {
        const on = index === activo;
        const [lead,...resto] = item.myths;
        return (
          <div key={item.slug || index} id={`${idDe(index)}-panel`} role="tabpanel" aria-labelledby={`${idDe(index)}-tab`} hidden={!on} className={styles.communityPanel}>
            <div className={`${styles.communityScene} ${styles.panorama}`}>
              <div className={styles.communityCopy}>
                <p className="atlas-kicker !text-ember-400">{item.region}</p>
                <h3 className="atlas-title-lg mt-3 !text-white">{item.name}</h3>
                <p className="mt-4 text-base leading-relaxed"><Recuento mostrados={item.myths.length} guardados={item.mythCount || item.myths.length} /></p>
                <Link href={`/comunidades/${item.slug}`} className="atlas-link-invert mt-5">Explorar la comunidad<Icon name="arrow-right" size={17} className="mc-arrow" /></Link>
              </div>
              <Link href={`/mitos/${lead.slug}`} className={styles.communityArt} aria-label={lead.title}>
                <ImageFrame src={lead.imageUrl} alt="" ratio={null} sizes="(max-width: 767px) 100vw, 70vw" quality={90} unoptimized loading={on && artworkReady ? "eager" : undefined} className="absolute inset-0 h-full w-full rounded-none border-0" imgClassName={cn("object-cover", !reduce && "atlas-image-zoom")} />
              </Link>
            </div>
            <Container size="atlas" className={styles.communityStories}>
              <Link href={`/mitos/${lead.slug}`} className={styles.communityLeadCaption}>
                <h4 className="atlas-title-md">{lead.title}</h4>
              </Link>
              <ul className={styles.communityOther} aria-label={`Más mitos de ${item.name}`}>
                {resto.map((myth) => <li key={myth.slug}><Link href={`/mitos/${myth.slug}`} className={`group ${styles.communityStory}`}>
                  <ImageFrame src={myth.imageUrl} alt="" ratio="3 / 2" sizes="(max-width: 767px) 74vw, (max-width: 1023px) 38vw, 450px" quality={90} loading={on && artworkReady ? "eager" : undefined} className="rounded-none border-0" imgClassName="atlas-image-zoom object-cover" />
                  <h4 className="atlas-title-sm">{myth.title}</h4>
                </Link></li>)}
              </ul>
            </Container>
          </div>
        );
      })}
    </div>
  );
}
