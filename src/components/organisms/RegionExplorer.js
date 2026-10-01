"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Icon, ImageFrame } from "../atoms";
import { ArtworkLink } from "../molecules/ArtworkLink";
import styles from "./RegionExplorer.module.css";

/** Hover, foco y clic seleccionan; el enlace a cada región sigue separado y
 * todos los paneles se sirven en HTML. También funciona en pantallas táctiles. */
export function RegionExplorer({ regions = [] }) {
  const uid = useId();
  const [selected, setSelected] = useState(regions[0]?.slug);
  const [previewsReady, setPreviewsReady] = useState(false);
  const explorerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setPreviewsReady(true); observer.disconnect(); }
    }, { rootMargin: "600px" });
    if (explorerRef.current) observer.observe(explorerRef.current);
    return () => observer.disconnect();
  }, []);
  if (!regions.length) return null;
  return <div ref={explorerRef} className={styles.explorer}>
    <ul className={styles.regions} aria-label="Explorar territorios">
      {regions.map((region) => <li key={region.slug} onMouseEnter={() => setSelected(region.slug)}>
        <button type="button" onClick={() => setSelected(region.slug)} onFocus={() => setSelected(region.slug)} aria-pressed={selected === region.slug} aria-controls={`${uid}-${region.slug}`} className={styles.regionButton}>
          <ImageFrame src={region.imageUrl} alt="" ratio="3 / 2" sizes="(max-width: 767px) 44vw, 260px" quality={90} className="rounded-none border-0" imgClassName="atlas-image-zoom object-cover" />
          <span className={styles.caption}><strong>{region.name || region.title}</strong><small>{region.count} relatos</small></span>
        </button>
      </li>)}
    </ul>
    {regions.map((region) => <section key={region.slug} id={`${uid}-${region.slug}`} hidden={selected !== region.slug} className={styles.panel} aria-label={`Mitos de ${region.name || region.title}`}>
      <div className={styles.panelBody}>
        <div className={styles.panelHeading}><h3>{region.name || region.title}</h3><Link href={`/regiones/${region.slug}`} className="atlas-link">Ver los {region.count} relatos<Icon name="arrow-right" size={17} /></Link></div>
        <ul className={styles.myths}>{(region.myths || []).map((myth) => <li key={myth.slug}><ArtworkLink myth={myth} compact loading={previewsReady ? "eager" : undefined} /></li>)}</ul>
      </div>
    </section>)}
  </div>;
}
