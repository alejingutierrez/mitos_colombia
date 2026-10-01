"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ImageFrame } from "../atoms";
import styles from "../editorial/archive-pages.module.css";
const normalize = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function VisualIndex({ items = [], regions = [], label = "el archivo", sortByCount = false }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [order, setOrder] = useState(sortByCount ? "count" : "original");
  const visible = useMemo(() => {
    const matches = items.filter((item) => (!region || item.regionSlug === region) && normalize([item.title,item.regionName,item.detail].filter(Boolean).join(" ")).includes(normalize(query).trim()));
    return order === "alpha" ? matches.sort((a,b) => a.title.localeCompare(b.title,"es")) : order === "count" ? matches.sort((a,b) => Number(b.count) - Number(a.count)) : matches;
  },[items,query,region,order]);
  const renderItems = [...visible, ...items.filter((item) => !visible.some((match) => match.href === item.href))];
  const positions = new Map(visible.map((item,index) => [item.href,index]));
  return <section aria-label={label}>
    <div className={styles.toolbar}>
      <input type="search" aria-label={`Buscar en ${label}`} placeholder={`Buscar en ${label}…`} value={query} onChange={(event) => setQuery(event.target.value)} className={styles.search} />
      <select aria-label={`Ordenar ${label}`} value={order} onChange={(event) => setOrder(event.target.value)} className={styles.select}>
        <option value="original">Orden del archivo</option><option value="alpha">A · Z</option><option value="count">Más relatos</option>
      </select>
      <p className={styles.count} aria-live="polite">{visible.length} de {items.length}</p>
    </div>
    {regions.length ? <div className={styles.filters}>{[{slug:"",name:"Todas"},...regions].map((item) => <button key={item.slug} type="button" aria-pressed={region === item.slug} className={styles.chip} onClick={() => setRegion(item.slug)}>{item.name}</button>)}</div> : null}
    <ul className={styles.grid}>{renderItems.map((item) => {
      const position = positions.get(item.href);
      return <li key={item.href} hidden={position == null}>
        <Link href={item.href} className={`group ${styles.card}`}>
          <ImageFrame src={item.imageUrl} alt="" ratio="3 / 2" quality={90} priority={position === 0} loading={position != null && position < 3 ? "eager" : undefined} sizes="(max-width: 767px) 47vw, 33vw" placeholderMotif={item.motif || "hoja"} className="border-0 rounded-none" imgClassName="atlas-image-zoom object-cover" />
          <div className={styles.caption}><h2>{item.title}</h2>{item.detail ? <p>{item.detail}</p> : null}<p>{[item.regionName,item.count != null ? `${item.count} ${Number(item.count) === 1 ? "relato" : "relatos"}` : null].filter(Boolean).join(" · ")}</p></div>
        </Link>
      </li>;
    })}</ul>
    {!visible.length ? <div className={styles.empty}><h2 className="atlas-title-md">Sin resultados</h2><p className="mt-3 text-sm text-ink-700">Prueba otro nombre o cambia el territorio.</p><button type="button" onClick={() => { setQuery(""); setRegion(""); }} className="atlas-link mt-4 min-h-11">Mostrar todo</button></div> : null}
  </section>;
}
