"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Container, Icon, ImageFrame, Input } from "../atoms";
import styles from "./TarotExplorer.module.css";

const GROUPS = [['todos','Toda la baraja'],['major','Mayores'],['Bastos','Bastos'],['Copas','Copas'],['Espadas','Espadas'],['Oros','Oros']];
function artwork(card) { return card.display_image_url || card.image_url || card.myth_image_url; }
function normalized(text) { return String(text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }
function inGroup(card, group) { return group === "todos" || card.arcana === group || card.suit === group; }
function readingCopy(card) { return String(card.reading_summary || card.meaning || "").replace(/\.{2,}/g, ".").replace(/\s+(Reverso:|Invertido:)/gi, "\n\n$1"); }
function CardArt({ card, original = false, priority = false, sizes }) {
  return <ImageFrame src={artwork(card)} alt="" ratio="2 / 3" sizes={sizes || "(max-width: 767px) 44vw, (max-width: 1023px) 30vw, 260px"} quality={90} unoptimized={original} priority={priority} loading={original ? "eager" : undefined} className={styles.cardArt} imgClassName="object-contain" placeholderMotif="luna" />;
}
function MythLink({ card, className }) {
  if (!card.myth_title) return null;
  return <Link href={card.myth_slug ? `/mitos/${card.myth_slug}` : `/mitos?q=${encodeURIComponent(card.myth_title)}`} className={className}>{card.myth_slug ? "Leer" : "Buscar"} «{card.myth_title}»<Icon name="arrow-right" size={17} className="mc-arrow" /></Link>;
}
export function TarotExplorer({ cards = [], daily, title }) {
  const [featured, setFeatured] = useState(daily || cards[0]);
  const [group, setGroup] = useState("todos");
  const [query, setQuery] = useState("");
  const [reading, setReading] = useState(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const visible = useMemo(() => cards.filter((card) => inGroup(card,group) && normalized(`${card.card_name} ${card.myth_title}`).includes(normalized(query))), [cards,group,query]);
  const fan = [cards.find((card) => card.arcana === "major" && card.slug !== featured?.slug && artwork(card)), featured, cards.find((card) => card.suit === "Bastos" && card.slug !== featured?.slug && artwork(card))].filter(Boolean);
  const consult = (card, opener) => { setReading(card); openerRef.current = opener; dialogRef.current?.showModal(); };
  const close = () => dialogRef.current?.close();
  const draw = () => { const pool = cards.filter((card) => card.slug !== featured?.slug); if (pool.length) setFeatured(pool[Math.floor(Math.random() * pool.length)]); };
  return <>
    <Container size="atlas" className={styles.intro}><h1>{title || "Tarot de Colombia"}</h1><p>Una baraja de {cards.length} cartas para encontrarte con los mitos del país.</p></Container>
    {featured ? <section className={styles.stage} aria-label="Carta para explorar">
      <Container size="atlas" className={styles.stageLayout}>
        <div className={styles.fan}>
          {fan.map((card,index) => <button key={`${card.slug}-${index}`} type="button" className={styles.fanCard} data-position={index} aria-label={`Consultar ${card.card_name}`} onClick={(event) => consult(card,event.currentTarget)}><CardArt card={card} original priority={index === 1} sizes="(max-width: 767px) 54vw, 290px" /></button>)}
        </div>
        <div className={styles.featuredCopy}>
          <p className={styles.featuredLabel}>{featured.arcana === "major" ? "Arcano mayor" : featured.suit}</p>
          <h2 key={featured.slug}>{featured.card_name}</h2>
          <p className={styles.mythName}>{featured.myth_title}</p>
          <div className={styles.featuredActions}><button type="button" className={styles.primary} onClick={draw}><Icon name="shuffle" size={18} />Sacar otra carta</button><button type="button" onClick={(event) => consult(featured,event.currentTarget)}>Leer la carta<Icon name="arrow-right" size={17} /></button></div>
          <MythLink card={featured} className={styles.mythLink} />
          <p className="sr-only" role="status">Carta seleccionada: {featured.card_name}.</p>
        </div>
      </Container>
    </section> : null}
    <Container size="atlas" className={styles.collection}>
      <div className={styles.collectionHeading}><h2>Las cartas del archivo</h2><label className={styles.search}><span className="sr-only">Buscar cartas</span><Input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca una carta o un mito…" /></label></div>
      <div className={styles.filters} role="group" aria-label="Filtrar la baraja">
        {GROUPS.map(([key,label]) => <button key={key} type="button" aria-pressed={group === key} onClick={() => setGroup(key)}>{label}<span>{cards.filter((card) => inGroup(card,key)).length}</span></button>)}
      </div>
      <p className={styles.resultCount} role="status">{visible.length} {visible.length === 1 ? "carta" : "cartas"}</p>
      <ul className={styles.gallery}>
        {visible.map((card) => <li key={card.slug}><button type="button" className={styles.cardButton} aria-label={`Consultar ${card.card_name}`} onClick={(event) => consult(card,event.currentTarget)}><CardArt card={card} /><h3>{card.card_name}</h3></button><MythLink card={card} className={styles.cardMyth} /></li>)}
      </ul>
      {!visible.length ? <div className={styles.empty}><p>No encontramos cartas con esa búsqueda.</p><button type="button" onClick={() => { setQuery(""); setGroup("todos"); }}>Ver toda la baraja</button></div> : null}
      <div className={styles.closing}><p>Cada carta abre un relato. Explora sus símbolos y continúa hacia el archivo.</p><Link href="/metodologia" className="atlas-link">Cómo se construye la baraja<Icon name="arrow-right" size={17} /></Link></div>
    </Container>
    <dialog ref={dialogRef} className={styles.dialog} onClick={(event) => { if (event.target === event.currentTarget) close(); }} onClose={() => openerRef.current?.focus({ preventScroll: true })} aria-labelledby="tarot-reading-title">
      <button type="button" className={styles.close} aria-label="Cerrar lectura" onClick={close}><Icon name="x" size={22} /></button>
      {reading ? <div className={styles.readingLayout}><CardArt card={reading} original sizes="(max-width: 767px) 74vw, 360px" /><div className={styles.readingCopy}><p className={styles.featuredLabel}>{reading.arcana === "major" ? "Arcano mayor" : `Arcano menor · ${reading.suit}`}</p><h2 id="tarot-reading-title">{reading.card_name}</h2><p className={styles.readingText}>{readingCopy(reading)}</p><MythLink card={reading} className={styles.mythLink} />{reading.selection_reason ? <details className={styles.editorial}><summary>La relación con el mito</summary><p>{reading.selection_reason}</p></details> : null}</div></div> : null}
    </dialog>
  </>;
}
