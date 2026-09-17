import Link from "next/link";
import { cn } from "../../lib/utils";
import styles from "./home-surfaces.module.css";

/**
 * Home · «Los hilos del archivo».
 *
 * La taxonomía es débil a propósito de la fuente: de 1108 etiquetas, 951 tienen
 * tres relatos o menos. El servidor sube sólo las 22 con peso real, así que la
 * sección no puede prometer un mapa de temas — puede prometer una medida.
 *
 * Cada categoría se dibuja como un hilo tendido entre su nombre y su cifra, y
 * el conteo se codifica tres veces:
 *
 *   · el cuerpo de la letra   (la escala se ve de un golpe)
 *   · el grosor del hilo      (los hilos gruesos sostienen el archivo)
 *   · el trecho teñido        (la medida exacta)
 *
 * La letra y el grosor van suavizados con una raíz —si no, con un tema de 138
 * relatos y el siguiente de 51, veinte de los veintidós quedarían ilegibles—.
 * El trecho teñido NO se suaviza: es proporción lineal sobre una pista de
 * ancho FIJO, así que el hilo que se ve el doble de largo tiene el doble de
 * relatos. Esa es la lectura honesta; el cuerpo de la letra sólo jerarquiza.
 *
 * La cifra que se imprime es el conteo real, sin redondear. Y el orden es
 * descendente aunque el servidor entregue la lista barajada: sin él la escala
 * queda repartida al azar y deja de leerse. La rotación del día se sigue viendo
 * en CUÁLES entran, que es donde el servidor la puso.
 */

/* Raíz 0.55: el hilo mayor (138 relatos) dobla al menor sin aplastarlo, que es
   lo que pasaba con una escala lineal — el segundo hilo tiene 51. La escala es
   fluida entre 390 y 1440px de ancho, como el resto del sistema. */
const SIZE_SMALL_MIN = 15;
const SIZE_SMALL_MAX = 25;
const SIZE_LARGE_MIN = 16;
const SIZE_LARGE_MAX = 36;

function threadSize(eased) {
  const small = SIZE_SMALL_MIN + eased * (SIZE_SMALL_MAX - SIZE_SMALL_MIN);
  const large = SIZE_LARGE_MIN + eased * (SIZE_LARGE_MAX - SIZE_LARGE_MIN);
  const slope = ((large - small) / 1050) * 100;
  const base = small - ((large - small) * 390) / 1050;
  return `clamp(${small.toFixed(1)}px, ${base.toFixed(2)}px + ${slope.toFixed(3)}vw, ${large.toFixed(1)}px)`;
}

function relatos(count) {
  return count === 1 ? "relato" : "relatos";
}

export function CategoryCloud({ categories = [] }) {
  if (!categories.length) return null;

  const max = categories.reduce(
    (top, item) => Math.max(top, Number(item.count) || 0),
    0
  );
  const ordered = [...categories].sort(
    (a, b) => (Number(b.count) || 0) - (Number(a.count) || 0)
  );

  return (
    <ul className="grid max-w-[76rem] gap-x-10 lg:grid-cols-2 lg:gap-x-14">
      {ordered.map((category) => {
        const count = Number(category.count) || 0;
        const ratio = max > 0 ? Math.min(count / max, 1) : 0;
        const eased = ratio ** 0.55;
        return (
          <li key={category.slug}>
            <Link
              href={`/categorias/${category.slug}`}
              aria-label={`${category.name} · ${count} ${relatos(count)}`}
              className={styles.hilo}
              style={{
                "--hilo-size": threadSize(eased),
                "--hilo-weight": `${(1 + eased * 2).toFixed(2)}px`,
                "--hilo-ink": (0.45 + eased * 0.5).toFixed(2),
                /* Mínimo del 4% para que un hilo delgado siga teniendo cabo
                   visible: cero teñido se leería como «sin relatos». */
                "--hilo-fill": `${Math.max(4, Math.round(ratio * 100))}%`,
              }}
            >
              <span className={styles.hiloName}>{category.name}</span>
              <span className={styles.hiloLead} aria-hidden="true" />
              <span className={styles.hiloTrack} aria-hidden="true" />
              <span
                className={cn(styles.hiloCount, "atlas-figure")}
                aria-hidden="true"
              >
                {count}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
