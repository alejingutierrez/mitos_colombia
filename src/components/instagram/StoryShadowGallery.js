"use client";

import { useState } from "react";
import { StorySlide } from "./StorySlide";
import styles from "./shadows.module.css";

const OPTIONS = [
  { id: "a", label: "A · Suave", description: "Sombra corta, bordes suaves y poca presencia.", shadow: "0 2px 6px rgb(8 20 12 / .95), 0 2px 6px rgb(8 20 12 / .95), 0 2px 6px rgb(8 20 12 / .95), 0 4px 14px rgb(8 20 12 / .65)" },
  { id: "b", label: "B · Equilibrada", description: "Más separación del fondo, con una transición gradual.", shadow: "0 2px 8px rgb(8 20 12 / .95), 0 2px 8px rgb(8 20 12 / .95), 0 0 14px rgb(8 20 12 / .9), 0 0 14px rgb(8 20 12 / .9), 0 4px 24px rgb(8 20 12 / .55)" },
  { id: "c", label: "C · Amplia", description: "La sombra se dispersa más alrededor de las letras.", shadow: "0 0 10px rgb(8 20 12 / .95), 0 0 10px rgb(8 20 12 / .95), 0 2px 20px rgb(8 20 12 / .9), 0 2px 20px rgb(8 20 12 / .9), 0 4px 34px rgb(8 20 12 / .65)" },
  { id: "d", label: "D · Atmosférica", description: "Actualizada: dispersión más amplia, también en texto pequeño." },
];

export default function StoryShadowGallery({ story, catalog }) {
  const [selected, setSelected] = useState("d");
  const [scene, setScene] = useState(0);
  const [mobile, setMobile] = useState(true);
  const option = OPTIONS.find(o => o.id === selected);
  const scenes = story.slides.map((slide, index) => ({ slide, index })).filter(s => s.slide.asset_id);
  const index = scenes[scene]?.index ?? scenes[0]?.index;
  const slide = story.slides[index];
  const asset = catalog.assets.find(a => a.id === slide.asset_id);
  const renderSlide = () => <StorySlide story={story} slide={slide} asset={asset} index={index} imageSrc={`/api/instagram/story-assets/${catalog.community}/${catalog.slug}/${encodeURIComponent(asset.id)}`} />;
  const back = `?myth=${catalog.slug}&community=${catalog.community}&variants=1`;
  return <main id="contenido" className={styles.gallery}>
    <a href={back}>← Volver a las plantillas</a>
    <h1>Una sombra que acompañe la imagen.</h1>
    <p>Atmosférica aplicada al generador, con mayor dispersión en títulos y textos pequeños. Cuatro pruebas sin contorno. Cambia de escena para comparar sobre cielos, vegetación, ropa y agua. Solo varía la sombra; el tamaño y el peso del texto son idénticos.</p>
    <div className={styles.controls}>
      <label>Escena <select aria-label="Escena" value={scene} onChange={e => setScene(Number(e.target.value))}>{scenes.map(({slide, index}, i) => <option key={index} value={i}>{String(index + 1).padStart(2, "0")} · {slide.headline}</option>)}</select></label>
      <label className={styles.toggle}><input type="checkbox" checked={mobile} onChange={e => setMobile(e.target.checked)} />Comparar a tamaño de móvil</label>
    </div>
    <div className={styles.options} role="group" aria-label="Pruebas de sombra">{OPTIONS.map(o => <button key={o.id} aria-pressed={selected === o.id} onClick={() => setSelected(o.id)}><strong>{o.label}</strong><span>{o.description}</span></button>)}</div>
    <div className={`${styles.comparison} ${mobile ? styles.mobile : ""}`}>
      <figure><figcaption><strong>Aplicada · mayor dispersión</strong><span>Una transición más amplia alrededor de las letras</span></figcaption><div className={styles.frame}><div>{renderSlide()}</div></div></figure>
      <figure aria-live="polite" data-shadow-choice={selected}><figcaption><strong>{option.label}</strong><span>{option.description}</span></figcaption><div className={`${styles.frame} ${selected === "d" ? "" : styles.trial}`} style={{"--trial-shadow":option.shadow}}><div>{renderSlide()}</div></div></figure>
    </div>
    <p className={styles.note}>La izquierda y la opción D muestran la atmosférica actualizada. A, B y C conservan las pruebas anteriores para comparar. Tus textos e imágenes se conservan.</p>
  </main>;
}
