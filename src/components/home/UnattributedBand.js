"use client";

import Link from "next/link";
import { useState } from "react";
import { Container, Icon, ImageFrame } from "../atoms";
import styles from "./home-journey.module.css";

/** Conserva las clasificaciones reales; no cambia la atribución del relato. */
export function UnattributedBand({ data }) {
  const [kind, setKind] = useState("todos");
  if (!data?.myths?.length) return null;
  const myths = data.myths.filter((myth) => kind === "todos" || myth.community?.toLowerCase().startsWith(kind));
  return (
    <section id="mestizos-mixtos" className={styles.mixedSection}>
      <Container size="atlas">
        <div className={styles.mixedHeading}>
          <div><h2 className="atlas-section-heading">{data.label}</h2><p className="mt-3 max-w-xl text-sm text-ink-700">{data.description}</p></div>
          <p className="text-sm text-jungle-700"><span className="atlas-figure">{data.mythCount}</span> relatos del archivo</p>
        </div>
        <div className={styles.mixedFilters} role="group" aria-label="Explorar relatos mestizos y mixtos">
          {[['todos','Todos'],['mestiz','Mestizos'],['mixt','Mixtos']].map(([key,label]) => <button key={key} type="button" aria-pressed={kind === key} onClick={() => setKind(key)}>{label}</button>)}
          <Link href="/comunidades/sin-pueblo-identificado" className="atlas-link">Ver todos<Icon name="arrow-right" size={17} /></Link>
        </div>
        <ul className={styles.mixedRail}>
          {myths.map((myth) => <li key={myth.slug}><Link href={`/mitos/${myth.slug}`} className="group block">
            <ImageFrame src={myth.imageUrl} alt="" ratio="3 / 2" sizes="(max-width: 767px) 78vw, (max-width: 1023px) 40vw, 340px" quality={90} className="rounded-none border-0" imgClassName="atlas-image-zoom object-cover" />
            <h3 className="atlas-title-sm mt-3">{myth.title}</h3><p className="mt-2 text-xs text-ink-700">{myth.region} · {myth.community}</p>
          </Link></li>)}
        </ul>
        {!myths.length ? <p className="py-8 text-sm">Esta selección no tiene relatos de esa clasificación. Explora todos los relatos.</p> : null}
      </Container>
    </section>
  );
}

export default UnattributedBand;
