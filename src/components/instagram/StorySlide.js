import { StoryVariant } from "./StoryVariant";
import { STORY_VARIANTS } from "../../lib/instagram-story-variants";
import { STORY_PALETTES, STORY_ROLES, layoutForScene, paletteForScene, motifForScene, motifSrc } from "../../lib/instagram-story";
import styles from "./story.module.css";

export function StorySlide({ story, slide, asset, index = 0, imageSrc }) {
  const layout = layoutForScene(slide, asset, index);
  if (STORY_VARIANTS[layout]) return <StoryVariant story={story} slide={slide} asset={asset} index={index} imageSrc={imageSrc} layout={layout} />;
  const palette = STORY_PALETTES[slide.palette || paletteForScene(slide)] || STORY_PALETTES.paper;
  const motif = motifForScene(slide);
  const immersive = ["cover-full", "immersive", "square"].includes(layout);
  const inkMotif = slide.motif_ink ?? (slide.palette || paletteForScene(slide)) !== "paper";
  const isCover = slide.role === "hook";
  const folio = `${String(index + 1).padStart(2, "0")} / ${String(story.slides.length).padStart(2, "0")}`;
  return (
    <article className={`${styles.slide} ${styles[layout]}`} data-story-slide={index + 1} data-layout={layout} data-image-fit={slide.image_fit || "cover"} data-title-size={story.title.length > 24 ? "long" : story.title.length > 13 ? "medium" : "short"} data-image-shape={asset && asset.width / asset.height > 1.22 ? "landscape" : "portrait"}
      style={{ "--paper": palette.background, "--ink": palette.foreground, "--muted": palette.secondary, "--accent": palette.accent, "--image-fit": slide.image_fit, "--focal": `${slide.focal?.[0] ?? 50}% ${slide.focal?.[1] ?? 50}%` }}>
      <header className={styles.slideHeader} data-text-slot data-ink-panel={immersive || undefined}>
        <span>MITOS DE COLOMBIA</span><span>{story.community.replace(/-/g, " ")}</span>
      </header>
      {isCover && <div className={styles.coverHeading} data-text-slot data-ink-panel={immersive || undefined}><p>{story.territory || "Una historia de nuestra memoria"}</p><h2>{story.title}</h2></div>}
      {asset && <div className={styles.art} data-art-slot data-background-art={immersive || undefined}>
        {/* Full-image templates expose focal controls; editorial templates preserve the entire frame. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc || asset.src} alt={slide.alt} width={asset.width} height={asset.height} loading="eager" />
      </div>}
      {motif && <div className={`${styles.motif} ${inkMotif ? styles.inkMotif : ""}`} data-decoration-slot style={{ "--motif-url": `url("${motifSrc(motif)}")` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={motifSrc(motif)} alt="" aria-hidden="true" />
        {inkMotif && <span className={styles.motifInk} aria-hidden="true" />}
      </div>}
      <div className={styles.copy} data-copy-slot data-ink-panel={immersive || undefined}>
        {!isCover && <span className={styles.chapter} data-text-slot>{STORY_ROLES[slide.role]}</span>}
        <h3 data-text-slot>{slide.headline}</h3>
        <p data-text-slot>{slide.body}</p>
      </div>
      {slide.role === "closing" && <div className={styles.invitation} data-text-slot>
        <p>El relato continúa.</p><span>Lee la historia completa y sus fuentes en</span><strong>mitosdecolombia.com</strong>
      </div>}
      <footer className={styles.slideFooter} data-text-slot data-ink-panel={immersive || undefined}><span>{isCover ? "Desliza para entrar al relato" : story.title}</span><span>{folio}</span></footer>
    </article>
  );
}
