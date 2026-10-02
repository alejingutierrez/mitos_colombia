"use client";

import { useRef, useState } from "react";
import { StorySlide } from "./StorySlide";
import { STORY_TYPES, STORY_VARIANTS, slideType } from "../../lib/instagram-story-variants";
import styles from "./variants.module.css";

export default function StoryVariantGallery({ story, catalog, byFamily = false }) {
  const dialog = useRef(null);
  const [selected, setSelected] = useState(0);
  const base = `?myth=${catalog.slug}&community=${catalog.community}&variants=1`;
  const entry = (source, index, version) => {
    const layout = `${slideType(source, index)}-${version}`;
    const variant = STORY_VARIANTS[layout];
    const asset = variant.image === false ? undefined : catalog.assets.find(a => a.id === source.asset_id);
    return { index, variant, asset, slide: { ...source, layout, asset_id: asset?.id || null } };
  };
  const sections = byFamily ? Object.entries(STORY_TYPES).map(([type, family]) => {
    const index = story.slides.findIndex((slide, i) => slideType(slide, i) === type);
    return { id:type, label:family.label, description:family.description, entries:index < 0 ? [] : [1,2,3,4,5].map(v => entry(story.slides[index], index, v)) };
  }) : [1,2,3,4,5].map(version => ({
    id:`version-${version}`, label:`Versión ${version}`, description:"Carrusel completo · 10 láminas",
    entries:story.slides.map((slide, index) => entry(slide, index, version)),
  }));
  const entries = sections.flatMap(section => section.entries);
  const render = ({ slide, asset, index }) => <StorySlide story={story} slide={slide} asset={asset} index={index} imageSrc={asset && `/api/instagram/story-assets/${catalog.community}/${catalog.slug}/${encodeURIComponent(asset.id)}`} />;
  const current = entries[selected];
  return <main id="contenido" className={styles.gallery}>
    <a href={`?myth=${catalog.slug}&community=${catalog.community}`}>← Volver al taller</a>
    <h1>{byFamily ? "Veinticinco plantillas, por tipo de lámina." : "Cinco versiones. El relato completo."}</h1>
    <p>{story.title} · {byFamily ? "Cinco alternativas por familia." : "50 láminas para comparar las cinco versiones de principio a fin."} Portadas con solo el título. Pulsa cualquier lámina para ampliarla.</p>
    <nav className={styles.galleryNav} aria-label="Vista de plantillas">
      <a href={base} aria-current={!byFamily ? "page" : undefined}>Cinco carruseles completos</a>
      <a href={`${base}&view=families`} aria-current={byFamily ? "page" : undefined}>25 plantillas por tipo</a>
      <a href={`?myth=${catalog.slug}&community=${catalog.community}&shadows=1`}>Comparar cuatro sombras difusas →</a>
    </nav>
    <nav className={styles.galleryNav} aria-label="Ir a una sección">{sections.map(section => <a href={`#${section.id}`} key={section.id}>{section.label}</a>)}</nav>
    {sections.map(section => <section key={section.id} id={section.id} aria-label={section.label}>
      <h2>{section.label}</h2><p>{section.description}</p><div className={styles.grid}>
        {section.entries.map(item => <figure className={styles.card} key={`${item.index}-${item.slide.layout}`}>
          <button className={styles.previewButton} aria-label={`Ampliar versión ${item.variant.version}, lámina ${item.index + 1}: ${item.variant.label}`} onClick={() => { setSelected(entries.indexOf(item)); dialog.current.showModal(); }}>
            <div className={styles.frame}><div>{render(item)}</div></div>
          </button>
          <figcaption>{String(item.index + 1).padStart(2,"0")} / 10 · {item.variant.label}</figcaption>
        </figure>)}
      </div>
    </section>)}
    <dialog ref={dialog} className={styles.detail} aria-label="Lámina ampliada">
      <div className={styles.detailControls}><p>Versión {current?.variant.version} · Lámina {(current?.index ?? 0) + 1} / 10</p><button onClick={() => dialog.current.close()}>Cerrar</button></div>
      {current && <div className={styles.frame}><div>{render(current)}</div></div>}
      <div className={styles.detailControls}><button disabled={selected === 0} onClick={() => setSelected(i => i - 1)}>← Anterior</button><button disabled={selected === entries.length - 1} onClick={() => setSelected(i => i + 1)}>Siguiente →</button></div>
    </dialog>
  </main>;
}
