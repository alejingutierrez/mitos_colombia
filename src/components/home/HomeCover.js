"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Icon, ImageFrame } from "../atoms";
import { coverSampleRect, relativeLuminance, titleTone } from "../../lib/home-contrast";
import styles from "./home-journey.module.css";

const ROTATION_MS = 8000;
const SWIPE_PX = 44;

/** Lee la luz de la zona del titular; no modifica ni exporta la imagen.
 * En una obra muy irregular, el papel se limita a las líneas de texto.
 * La ilustración nunca recibe un velo para resolver el contraste. */
function titleContrast(image, title) {
  try {
    if (!title || !image.naturalWidth) return "paper";
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return "paper";
    const bounds = image.getBoundingClientRect();
    const position = getComputedStyle(image).objectPosition.split(" ").map((value) => parseFloat(value) / 100);
    const range = document.createRange();
    range.selectNodeContents(title.firstElementChild || title);
    const light = [];
    for (const line of range.getClientRects()) {
      const crop = coverSampleRect({ left: bounds.left, top: bounds.top, width: bounds.width, height: bounds.height, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight }, line, position);
      if (!crop) continue;
      canvas.width = Math.min(200, Math.ceil(line.width));
      canvas.height = Math.min(48, Math.ceil(line.height));
      ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      for (let i = 0; i < pixels.length; i += 16) light.push(relativeLuminance([pixels[i], pixels[i + 1], pixels[i + 2]]));
    }
    const ink = getComputedStyle(title).getPropertyValue("--jungle-700").trim().split(/\s+/).map(Number);
    // El display tiene trazos finos: mantener 4.5 también en tamaños grandes
    // evita que un título técnicamente válido se pierda entre ramas o cercas.
    return titleTone(light, ink, 4.5);
  } catch { /* La lectura de píxeles puede bloquearse: el papel es la salida segura. */ }
  return "paper";
}

export function HomeCover({ hero, slides = [] }) {
  const items = slides.filter((slide) => slide?.imageUrl).slice(0, 5);
  const count = items.length;
  // La escena elegida en las referencias abre cuando pertenece al sorteo del
  // día. El resto del reparto diario y sus cinco territorios se conservan.
  const [index, setIndex] = useState(() => Math.max(0, items.findIndex((slide) => slide.slug === "la-puerta-del-perdon")));
  const [paused, setPaused] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [compact, setCompact] = useState(false);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(true);
  const [visible, setVisible] = useState(true);
  const [clock, setClock] = useState(0);
  const [contrast, setContrast] = useState("paper");
  const sectionRef = useRef(null);
  const artworkRef = useRef(null);
  const titleRef = useRef(null);
  const gesture = useRef(null);
  const activeIndex = Math.min(index, Math.max(0, count - 1));
  const active = items[activeIndex];
  const rotating = count > 1 && !compact && !paused && !reduced && !held && inView && visible;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const screen = window.matchMedia("(max-width: 767px)");
    const syncMotion = () => setReduced(query.matches);
    const syncScreen = () => setCompact(screen.matches);
    const syncVisibility = () => setVisible(!document.hidden);
    syncMotion();
    syncScreen();
    syncVisibility();
    query.addEventListener("change", syncMotion);
    screen.addEventListener("change", syncScreen);
    document.addEventListener("visibilitychange", syncVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      query.removeEventListener("change", syncMotion);
      screen.removeEventListener("change", syncScreen);
      document.removeEventListener("visibilitychange", syncVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const image = artworkRef.current?.querySelector("img");
    if (!image) return undefined;
    let frame;
    let disposed = false;
    const sync = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!disposed && image.complete && image.naturalWidth) setContrast(titleContrast(image, titleRef.current));
      });
    };
    sync();
    image.addEventListener("load", sync);
    image.addEventListener("animationend", sync);
    const observer = new ResizeObserver(sync);
    observer.observe(image);
    if (titleRef.current) observer.observe(titleRef.current);
    document.fonts.ready.then(sync);
    return () => { disposed = true; cancelAnimationFrame(frame); image.removeEventListener("load", sync); image.removeEventListener("animationend", sync); observer.disconnect(); };
  }, [active?.slug, active?.imageUrl, active?.title]);

  const goTo = useCallback((next) => {
    if (!count) return;
    const destination = ((next % count) + count) % count;
    if (destination !== activeIndex) setContrast("paper");
    setIndex(destination);
    setClock((value) => value + 1);
  }, [count, activeIndex]);

  useEffect(() => {
    if (!rotating) return undefined;
    const timer = setTimeout(() => { setContrast("paper"); setIndex((value) => (value + 1) % count); }, ROTATION_MS);
    return () => clearTimeout(timer);
  }, [rotating, count, activeIndex, clock]);

  return (
    <section id="portada" ref={sectionRef} aria-label="Portada del archivo" aria-roledescription={count > 1 ? "carrusel" : undefined} className={styles.cover}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={(event) => setHeld(event.currentTarget.contains(document.activeElement))}
      onFocus={() => setHeld(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHeld(event.currentTarget.matches(":hover")); }}
      onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault(); goTo(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
      }}>
      <div className={styles.heroScene} data-contrast={contrast}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" || event.target.closest("a,button")) return;
          gesture.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerUp={(event) => {
          const start = gesture.current; gesture.current = null;
          if (!start) return;
          const dx = event.clientX - start.x; const dy = event.clientY - start.y;
          if (Math.abs(dx) >= SWIPE_PX && Math.abs(dx) > Math.abs(dy)) goTo(activeIndex + (dx < 0 ? 1 : -1));
        }}
        onPointerCancel={() => { gesture.current = null; }}>
        <div ref={artworkRef} className={styles.heroArt}>
          {active ? <ImageFrame key={active.slug} src={active.imageUrl} mobileSrc={active.portraitImageUrl || null} alt="" ratio={null} sizes="100vw" mobileSizes="100vw" quality={90} unoptimized mobileUnoptimized crossOrigin="anonymous" priority preloadArtDirection className="absolute inset-0 h-full w-full rounded-none border-0" imgClassName="object-cover object-center" /> : null}
        </div>
        <Container size="atlas" className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <h1 ref={titleRef} className={styles.heroTitle} data-long={Boolean(active?.title?.length > 42)}><span>{active?.title || "Mitos de Colombia"}</span></h1>
            <Link href={active?.slug ? `/mitos/${active.slug}` : "/mitos"} className={`group ${styles.heroCta}`}>Leer este mito <Icon name="arrow-right" size={17} className="mc-arrow" /></Link>
          </div>

        </Container>
      </div>
      {count ? <div className={styles.contactSheet}>
        {items.map((slide, position) => <button key={slide.slug || position} type="button" aria-label={`Ver portada ${position + 1}: ${slide.title}`} aria-pressed={position === activeIndex} onClick={() => goTo(position)} className={styles.contact}>
          <span className={styles.contactArt}>
            <Image src={slide.imageUrl} alt="" fill loading={position === activeIndex ? "eager" : undefined} sizes="(max-width: 767px) 42vw, (max-width: 1460px) 19vw, 270px" quality={90} className="object-cover object-[50%_35%]" />
          </span>
          <span className={styles.contactCaption}><span className={styles.contactTitle}>{slide.title}</span><span className={styles.contactMeta}>{slide.meta}</span><span key={`${activeIndex}-${clock}-${rotating}`} className={styles.contactMark} data-rotating={position === activeIndex && rotating} style={{ "--cover-duration": `${ROTATION_MS}ms` }} aria-hidden="true" /></span>
        </button>)}
        {count > 1 ? <button type="button" className={styles.coverPlayback} aria-label={paused ? "Reproducir portadas" : "Pausar portadas"} aria-pressed={!paused} onClick={() => setPaused((value) => !value)}><Icon name={paused ? "play" : "pause"} size={18} /></button> : null}
      </div> : null}
      <p className="sr-only" aria-live={rotating ? "off" : "polite"} aria-atomic="true">{active ? `Portada ${activeIndex + 1} de ${count}: ${active.title}. ${active.meta}` : hero?.description}</p>
    </section>
  );
}
