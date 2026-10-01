"use client";

import { useEffect, useState } from "react";
import styles from "./home-journey.module.css";

const CHAPTERS = [
  ["portada", "Portada"],
  ["mesa", "Mesa"],
  ["comunidades", "Comunidades"],
  ["mestizos-mixtos", "Mestizos y mixtos"],
  ["rutas", "Rutas"],
  ["territorios", "Territorios"],
  ["oraculo", "Oráculo"],
];

/** Un índice del recorrido. Sólo observa las secciones: no hay listeners de
 * scroll, parallax ni animaciones que dependan de cada píxel desplazado. */
export function HomeJourney() {
  const [current, setCurrent] = useState("portada");
  useEffect(() => {
    const elements = CHAPTERS.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const entering = entries.filter((entry) => entry.isIntersecting);
      if (entering.length) setCurrent(entering[entering.length - 1].target.id);
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.chapterNav} aria-label="Recorrido del home">
      {CHAPTERS.map(([id, label], index) => (
        <a key={id} href={`#${id}`} aria-current={current === id ? "location" : undefined} onClick={() => setCurrent(id)}>
          <span aria-hidden="true">0{index + 1}</span>{label}
        </a>
      ))}
    </nav>
  );
}
