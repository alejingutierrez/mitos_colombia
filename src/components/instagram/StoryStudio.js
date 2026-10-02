"use client";

import { useEffect, useRef, useState } from "react";
import { ABSTRACT_MOTIFS, ABSTRACT_GROUPS, upgradeStoryMotifs } from "../../lib/instagram-abstract-motifs";
import { STORY_VARIANTS, STORY_TYPES, slideType } from "../../lib/instagram-story-variants";
import { StorySlide } from "./StorySlide";
import { STORY_ROLES, STORY_TEMPLATES, STORY_PALETTES, layoutForScene, templateFits, paletteForScene, motifForScene, motifSrc, validateStory, wordCount } from "../../lib/instagram-story";
import styles from "./story.module.css";

const imageUrl = (catalog, asset) => `/api/instagram/story-assets/${catalog.community}/${catalog.slug}/${encodeURIComponent(asset.id)}`;
function Arrow({ back = false }) { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" style={{ transform: back ? "rotate(180deg)" : undefined }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }

function ScaledSlide({ width, children }) {
  return <div className={styles.scaled} style={{ "--preview-width": `${width}px`, "--preview-scale": width / 1080 }}><div className={styles.scaledInner}>{children}</div></div>;
}

export default function StoryStudio({ initialStory, catalog, library }) {
  const [story, setStory] = useState(initialStory);
  const [index, setIndex] = useState(0);
  const [tab, setTab] = useState("design");
  const [filter, setFilter] = useState("");
  const [motifGroup, setMotifGroup] = useState("all");
  const [assetFilter, setAssetFilter] = useState("");
  const [width, setWidth] = useState(400);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [legacyDraft, setLegacyDraft] = useState(null);
  const [saved, setSaved] = useState(false);
  const preview = useRef(null);
  const oldStorageKey = `mitos:story:${catalog.community}:${catalog.slug}`;
  const storageKey = `${oldStorageKey}:ten-v1`;
  const hasStory = Boolean(story);
  useEffect(() => {
    try {
      const draft = JSON.parse(localStorage.getItem(storageKey));
      const previous = JSON.parse(localStorage.getItem(oldStorageKey));
      if (previous && previous.slides?.length !== 10) { setLegacyDraft(previous); setMessage("La edición anterior sigue guardada. Esta versión tiene 10 láminas, con cierre e invitación separados."); }
      if (draft?.schema === "carousel-story-v1" && draft.slug === catalog.slug && draft.community === catalog.community && Array.isArray(draft.slides) && draft.slides.length === 10) {
        setStory(upgradeStoryMotifs(draft)); setMessage("Borrador recuperado de este navegador.");
      }
    } catch { /* Private browsing can disable storage. Downloads still work. */ }
    setSaved(true);
  }, [storageKey, oldStorageKey, catalog.slug, catalog.community]);
  useEffect(() => {
    if (!saved || !story) return;
    try { localStorage.setItem(storageKey, JSON.stringify(story)); }
    catch { setMessage("El navegador no permite guardar el borrador. Descarga el guion para conservarlo."); }
  }, [story, saved, storageKey]);
  useEffect(() => {
    if (!preview.current) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.max(180, Math.min(440, entry.contentRect.width))));
    observer.observe(preview.current);
    return () => observer.disconnect();
  }, [hasStory]);
  const slide = story?.slides[index];
  const asset = catalog.assets.find((item) => item.id === slide?.asset_id);
  const templateAsset = asset || catalog.assets.find((item) => item.id === slide?.image_backup?.asset_id);
  const layout = slide ? layoutForScene(slide, asset, index) : null;
  const type = slide ? slideType(slide, index) : null;
  const qa = story ? validateStory(story, catalog) : null;
  const edit = (patch) => setStory((current) => ({ ...current, slides: current.slides.map((item, i) => i === index ? { ...item, ...patch } : item) }));
  function chooseTemplate(id) {
    const template = STORY_TEMPLATES[id];
    if (templateAsset && template.image === true && !templateFits(id, slide, templateAsset, index)) return;
    if (template.image === false && asset) {
      edit({ layout: id, asset_id: null, image_backup: { asset_id: slide.asset_id, alt: slide.alt, visual_reason: slide.visual_reason },
        alt: `Lámina tipográfica: ${slide.headline}. ${slide.body}`, visual_reason: "Este momento se cuenta con palabras y un adorno de papel recortado.", motif: motifForScene(slide) });
    } else if (template.image === true && !asset) {
      if (slide.image_backup) edit({ ...slide.image_backup, image_backup: undefined, layout: id });
      else { setTab("images"); setMessage("Elige una imagen para esta composición."); }
    } else edit({ layout: id });
  }
  const choose = (next) => { setIndex(next); setAssetFilter(""); };
  async function generate() {
    setBusy(true); setMessage("Preparando el arco narrativo con el acta y las imágenes del mito…");
    try {
      const response = await fetch("/api/instagram/story-plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ community: catalog.community, slug: catalog.slug }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStory(result.story); setIndex(0); setMessage("Borrador preparado. Revisa las escenas y sus fuentes antes de exportar.");
    } catch (error) { setMessage(error.message || "No se pudo preparar el relato."); }
    finally { setBusy(false); }
  }
  function downloadStory(value = story) {
    const url = URL.createObjectURL(new Blob([`${JSON.stringify(value, null, 2)}\n`], { type: "application/json" }));
    const link = document.createElement("a"); link.href = url; link.download = `${catalog.slug}-relato.json`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage("Guion descargado. Incluye textos, selección de imágenes y anclajes en el acta.");
  }
  async function exportSlides() {
    setBusy(true); setMessage("Componiendo los PNG y verificando imágenes y textos. Puede tardar un minuto…");
    try {
      const response = await fetch("/api/instagram/story-export", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(story) });
      if (!response.ok) { const result = await response.json(); throw new Error(result.error); }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement("a"); link.href = url; link.download = `${catalog.slug}-carrusel.zip`; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setMessage("Paquete descargado: PNG, hoja de revisión, caption, textos alternativos y manifiesto. Borrador para revisión editorial.");
    } catch (error) { setMessage(error.message || "No se pudo exportar el carrusel."); }
    finally { setBusy(false); }
  }
  return <main id="contenido" className={styles.studio} data-story-studio>
    <header className={styles.toolbar}><div className={styles.brand}><strong>Mitos de Colombia</strong><span>Taller de carruseles</span></div>
      <select className={`${styles.search} ${styles.mobileSelector}`} aria-label="Elegir mito" value={catalog.slug} onChange={(e) => { window.location.href = `?myth=${e.target.value}&community=${catalog.community}`; }}>{library.map((m) => <option key={m.slug} value={m.slug}>{m.title}</option>)}</select>
      <div className={styles.actions}><a className={styles.button} href={`?myth=${catalog.slug}&community=${catalog.community}&variants=1`}>Ver las 25 versiones</a>{story && <><button className={styles.button} onClick={() => downloadStory()}>Descargar guion</button><button className={`${styles.button} ${styles.primary}`} disabled={!qa.ok || busy} onClick={exportSlides}>{busy ? "Preparando…" : "Exportar carrusel"}<Arrow /></button></>}</div>
    </header>
    <div className={styles.workspace}>
      <aside className={styles.library} aria-label="Biblioteca de mitos"><h2>La colección {catalog.community === "muiscas" ? "muisca" : catalog.community}</h2><p>{library.length} relatos · actas y archivo visual</p><input className={styles.search} aria-label="Buscar mito" placeholder="Buscar un mito…" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <nav className={styles.myths}>{library.filter((m) => m.title.toLowerCase().includes(filter.toLowerCase())).map((m) => <a className={styles.myth} key={m.slug} href={`?myth=${m.slug}&community=${catalog.community}`} aria-current={m.slug === catalog.slug ? "page" : undefined}><span>{m.title}</span><span>{m.ready ? "Editado" : "Archivo"}</span></a>)}</nav>
      </aside>
      {story && slide ? <>
        <section className={styles.stage} aria-label="Previsualización del carrusel"><div className={styles.stageTitle}><div><h1>{story.title}</h1><p>{qa.imageCount} imágenes · {story.slides.length} momentos · {story.territory || catalog.community}</p></div><span className={styles.counter}>{String(index + 1).padStart(2, "0")} / {story.slides.length}</span></div>
          <div className={styles.preview} ref={preview}><ScaledSlide width={width}><StorySlide story={story} slide={slide} asset={asset} index={index} imageSrc={asset && imageUrl(catalog, asset)} /></ScaledSlide></div>
          <div className={styles.navigation}><button aria-label="Lámina anterior" disabled={index === 0} onClick={() => choose(index - 1)}><Arrow back /></button><span>{STORY_ROLES[slide.role]}</span><button aria-label="Lámina siguiente" disabled={index === story.slides.length - 1} onClick={() => choose(index + 1)}><Arrow /></button></div>
          <div className={styles.filmstrip} aria-label="Secuencia del relato">{story.slides.map((item, i) => {
            const art = catalog.assets.find((a) => a.id === item.asset_id);
            return <button className={styles.thumbnail} aria-label={`Ir a lámina ${i + 1}: ${item.headline}`} aria-pressed={index === i} key={i} onClick={() => choose(i)}><ScaledSlide width={76}><StorySlide story={story} slide={item} asset={art} index={i} imageSrc={art && imageUrl(catalog, art)} /></ScaledSlide><span>{String(i + 1).padStart(2, "0")}</span></button>;
          })}</div>
          <p className={styles.message} role="status">{message || "Borrador editorial · los cambios se guardan en este navegador."}</p>{legacyDraft && <button className={styles.button} onClick={() => downloadStory(legacyDraft)}>Descargar borrador anterior ({legacyDraft.slides.length} láminas)</button>}
        </section>
        <aside className={styles.inspector} aria-label="Edición de la lámina">
          <div className={styles.tabs} role="tablist" aria-label="Herramientas de edición">{[["design", "Diseño"], ["story", "Relato"], ["images", "Imágenes"], ["source", "Fuentes"]].map(([id, label]) => <button role="tab" id={`tab-${id}`} aria-controls="inspector-panel" aria-selected={tab === id} key={id} onClick={() => setTab(id)}>{label}</button>)}</div>
          <div id="inspector-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          {tab === "design" && <>
            <h2 style={{ marginTop: 0 }}>{STORY_TYPES[type].label} · 5 versiones</h2><p>{STORY_TYPES[type].description}</p>
            <div className={styles.designGrid}>{Object.entries(STORY_VARIANTS).filter(([, t]) => t.kind === type).map(([id, t]) => {
              const previewAsset = t.image === false ? undefined : templateAsset;
              const previewSlide = { ...slide, layout: id, asset_id: previewAsset?.id || null };
              return <button className={styles.designOption} key={id} aria-label={`Versión ${t.version}: ${t.label}`} aria-pressed={layout === id} onClick={() => chooseTemplate(id)}>
                <span className={styles.variantPreview} aria-hidden="true"><ScaledSlide width={120}><StorySlide story={story} slide={previewSlide} asset={previewAsset} index={index} imageSrc={previewAsset && imageUrl(catalog, previewAsset)} /></ScaledSlide></span><strong>{t.version}. {t.label}</strong><small>{t.description}</small>
              </button>;
            })}</div>
            <h2>Papel y tinta</h2><div className={styles.paletteOptions}>{Object.entries(STORY_PALETTES).map(([id, p]) => <button key={id} aria-label={`Paleta ${id}`} aria-pressed={(slide.palette || paletteForScene(slide)) === id} style={{ background: p.background, color: p.foreground }} onClick={() => edit({ palette: id })}>{p.label}</button>)}</div>
            {Boolean(asset) && <><h2>Encuadre de la imagen</h2><label><span>Ajuste</span><select className={styles.search} aria-label="Ajuste de imagen" value={slide.image_fit || "cover"} onChange={(e) => edit({ image_fit: e.target.value })}><option value="cover">Llenar el espacio</option><option value="contain">Conservar imagen completa</option></select></label><p>La imagen llena el lienzo. Ajusta el foco para conservar lo importante, o usa una composición editorial para verla completa.</p>{["Horizontal", "Vertical"].map((label, axis) => <label key={label}><span>{label}</span><input type="range" aria-label={`Encuadre ${label.toLowerCase()}`} min="0" max="100" value={slide.focal?.[axis] ?? 50} onChange={(e) => { const focal = [...(slide.focal || [50, 50])]; focal[axis] = Number(e.target.value); edit({ focal }); }} /></label>)}</>}
            {type !== "portada" && <><h2>Formas abstractas · 50 PNG</h2><p>Origen, flujo, memoria y encuentro. Una colección compartida entre comunidades.</p>
            <select className={styles.search} aria-label="Familia de iconos" value={motifGroup} onChange={(e) => setMotifGroup(e.target.value)}><option value="all">Todas las formas</option>{Object.entries(ABSTRACT_GROUPS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select>
            <label className={styles.inkToggle}><input type="checkbox" checked={slide.motif_ink ?? (slide.palette || paletteForScene(slide)) !== "paper"} onChange={(e) => edit({ motif_ink: e.target.checked })} />Usar tinta de la paleta</label>
            <div className={styles.motifGrid}><button aria-pressed={!motifForScene(slide)} onClick={() => edit({ motif: null })}>Sin adorno</button>{Object.entries(ABSTRACT_MOTIFS).filter(([, m]) => motifGroup === "all" || m.group === motifGroup).map(([id, { label }]) => <button key={id} aria-label={`Adorno ${label}`} aria-pressed={motifForScene(slide) === id} onClick={() => edit({ motif: id })}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={motifSrc(id)} alt="" loading="lazy" />{label}</button>)}</div></>}
          </>}
          {tab === "story" && <>{type === "portada" ? <><label><span>Título del carrusel</span><textarea aria-label="Título del carrusel" value={story.title} onChange={(e) => setStory(current => ({ ...current, title:e.target.value }))} /></label><p>La portada muestra únicamente el título. El relato continúa en la siguiente lámina.</p></> : <><label><span>Titular <small>{wordCount(slide.headline)} / 10 palabras</small></span><textarea aria-label="Titular de la lámina" value={slide.headline} onChange={(e) => edit({ headline: e.target.value })} /></label>
            <label><span>Lo que sucede <small>{wordCount(slide.body)} / 38 palabras</small></span><textarea aria-label="Texto de la lámina" rows={6} value={slide.body} onChange={(e) => edit({ body: e.target.value })} /></label></>}
            <h2>Intención de esta escena</h2><p>{slide.visual_reason || "Describe por qué esta imagen cuenta el momento."}</p><div className={styles.note}><h2>Ritmo del relato</h2><p>{story.thesis}</p><p>Portada, siete momentos de relato, cierre e invitación. En Diseño puedes dar protagonismo a la imagen o a las palabras.</p></div></>}
          {tab === "images" && <><p>{catalog.assets.length} imágenes del archivo de este mito. {catalog.assets.filter((a) => a.status === "excluded").length} descartadas editorialmente.</p><input className={styles.search} placeholder="Buscar escena, personaje, detalle…" aria-label="Buscar imagen" value={assetFilter} onChange={(e) => setAssetFilter(e.target.value)} />
            <div className={styles.assetGrid}>{catalog.assets.filter((a) => `${a.id} ${a.description}`.toLowerCase().includes(assetFilter.toLowerCase())).map((a) => <button className={styles.assetButton} disabled={a.status === "excluded" || (story.slides.some((s, i) => i !== index && s.asset_id === a.id))} aria-label={`Usar ${a.id}`} aria-pressed={slide.asset_id === a.id} title={a.review || a.description} key={a.id} onClick={() => edit({ asset_id: a.id, visual_reason: "", alt: "", layout: undefined, image_backup: undefined })}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl(catalog, a)} alt={a.description} loading="lazy" /><span>{a.status === "excluded" ? "Descartada · " : ""}{a.description.slice(0, 85)}{a.description.length > 85 ? "…" : ""}</span></button>)}</div>
            <h2>Relación con el relato</h2><label><span>Por qué esta imagen</span><textarea value={slide.visual_reason} onChange={(e) => edit({ visual_reason: e.target.value })} /></label><label><span>Texto alternativo</span><textarea value={slide.alt} onChange={(e) => edit({ alt: e.target.value })} /></label></>}
          {tab === "source" && <><h2>Esta escena conserva</h2>{slide.covers.map((id) => { const node = catalog.acta.nudos.find((n) => n.id === id); return <div className={styles.source} key={id}><strong>{node?.nudo || id}</strong>{node?.evidencia}</div>; })}<h2>Límites del relato</h2><ul>{catalog.acta.deslindes.map((d, i) => <li key={i}>{d}</li>)}</ul><div className={styles.note}><p>{qa.coverage.covered} de {qa.coverage.total} nudos cubiertos · {qa.coverage.omitted} descartes declarados.</p><p>La trazabilidad ayuda a revisar. La fidelidad se comprueba leyendo el relato y mirando las imágenes.</p></div></>}
          {!qa.ok && <div className={styles.warning} role="alert"><strong>Antes de exportar</strong><ul>{qa.errors.map((error, i) => <li key={i}>{error}</li>)}</ul></div>}
          </div>
        </aside>
      </> : <section className={styles.stage} style={{ gridColumn: "span 2" }}><div className={styles.empty}><h1>{catalog.title}</h1><p>El archivo reúne {catalog.assets.length} imágenes y un acta con {catalog.acta.nudos.length} momentos. Construye un relato que los conecte, con una selección visual para cada escena.</p><p>La preparación usa Bedrock: envía el acta, el guion y las descripciones de las imágenes. Las imágenes permanecen en este equipo.</p><button className={`${styles.button} ${styles.primary}`} disabled={busy} onClick={generate}>{busy ? "Preparando relato…" : "Preparar relato ilustrado"}<Arrow /></button><p className={styles.message} role="status">{message}</p></div></section>}
    </div>
  </main>;
}
