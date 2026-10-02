/* eslint-disable @next/next/no-img-element */
import { STORY_PALETTES, STORY_ROLES, paletteForScene, motifForScene, motifSrc } from "../../lib/instagram-story";
import { STORY_VARIANTS } from "../../lib/instagram-story-variants";
import styles from "./variants.module.css";

export function StoryVariant({ story, slide, asset, index, imageSrc, layout }) {
  const variant = STORY_VARIANTS[layout];
  const photo = Boolean(asset);
  const paletteId = slide.palette || paletteForScene(slide);
  const palette = STORY_PALETTES[paletteId] || STORY_PALETTES.paper;
  const type = variant.kind;
  const cover = type === "portada", invitation = type === "invitacion";
  const motif = motifForScene(slide);
  const ink = slide.motif_ink ?? paletteId !== "paper";
  const glyph = motif ? <><img src={motifSrc(motif)} alt="" aria-hidden="true" style={ink ? { opacity: 0 } : undefined} />{ink && <span className={styles.ink} style={{ maskImage: `url("${motifSrc(motif)}")` }} />}</> : null;
  return <article className={styles.slide} data-story-slide={index + 1} data-layout={layout} data-family={type} data-version={variant.version} data-image-fit={slide.image_fit || "cover"} data-has-image={photo}
    style={{ "--paper": palette.background, "--ink": photo ? "#ffffff" : palette.foreground, "--muted": palette.secondary, "--accent": palette.accent, "--motif-ink": palette.accent, "--image-fit": slide.image_fit || "cover", "--focal": `${slide.focal?.[0] ?? 50}% ${slide.focal?.[1] ?? 50}%` }}>
    {!cover && <header className={styles.header} data-text-slot data-photo-text={photo || undefined}><span>MITOS DE COLOMBIA</span><span>{story.community.replaceAll("-", " ")}</span></header>}
    {cover && <div className={styles.identity} data-text-slot data-photo-text={photo || undefined}><h2>{story.title}</h2></div>}
    {!cover && <div className={styles.eyebrow} data-text-slot data-photo-text={photo || undefined}>{invitation ? "El relato continúa" : type === "cierre" ? "Lo que permanece" : STORY_ROLES[slide.role]}</div>}
    {!cover && <h3 className={styles.headline} data-text-slot data-photo-text={photo || undefined}>{slide.headline}</h3>}
    {!cover && <p className={styles.body} data-text-slot data-photo-text={photo || undefined}>{slide.body}</p>}
    {asset ? <div className={styles.art} data-art-slot data-background-art><img src={imageSrc || asset.src} alt={slide.alt} width={asset.width} height={asset.height} /></div>
      : !cover && type !== "cierre" && !invitation && motif ? <div className={`${styles.art} ${styles.abstract}`} data-decoration-slot>{glyph}</div> : null}
    {!cover && (type === "cierre" || invitation || asset) && motif && <div className={styles.motif} data-decoration-slot>{glyph}</div>}
    {invitation && <div className={styles.destination} data-text-slot data-photo-text={photo || undefined}><span>Historia completa y fuentes</span><strong>mitosdecolombia.com</strong><span>/mitos/{story.slug}</span><b aria-hidden="true">↗</b></div>}
    {!cover && <footer className={styles.footer} data-text-slot data-photo-text={photo || undefined}><span>{cover ? "Desliza para entrar al relato" : story.title}</span><span>{String(index + 1).padStart(2, "0")} / {String(story.slides.length).padStart(2, "0")}</span></footer>}
  </article>;
}
