import { MythPlate } from "../molecules/MythPlate";
import { cn } from "../../lib/utils";
import styles from "./rutas.module.css";

/**
 * Los movimientos de una ruta.
 *
 * Es la pieza que faltaba. La curaduría escribe cada ruta como una secuencia
 * de etapas —nombre, tesis de una línea, prosa y los relatos que le tocan— y
 * la página anterior sólo sabía pintar el título y la línea de cada etapa en
 * tres columnas, con los relatos aparte, en una lista plana que no decía a qué
 * momento pertenecía ninguno.
 *
 * Aquí cada movimiento ocupa su propio tramo: a la izquierda su rótulo (fijo
 * mientras se lee en escritorio), a la derecha su prosa y sus relatos con obra.
 *
 * El folio de cada relato es su posición de LECTURA, no la que ocupa en el
 * censo: la curaduría declara el censo en un orden y reparte los relatos por
 * movimientos en otro, así que numerar por el censo dejaba la página saltando
 * (04, 01, 05, 06, 02…). Aquí la cuenta corre 01…21 de arriba abajo.
 */

function folio(index) {
  return String(index + 1).padStart(2, "0");
}

export function RouteMovements({ momentos = [], motif = "hoja" }) {
  if (!momentos.length) return null;

  /* Posición de lectura de cada relato. El folio no se reinicia en cada
     movimiento: la ruta se lee como una sola secuencia. */
  const position = new Map();
  momentos.forEach((momento) => {
    momento.myths.forEach((myth) => {
      if (!position.has(myth.slug)) position.set(myth.slug, position.size);
    });
  });

  return (
    <ol className="mt-10 space-y-14 md:mt-12 md:space-y-16 lg:space-y-20">
      {momentos.map((momento, index) => (
        <li
          key={momento.slug}
          id={`movimiento-${momento.slug}`}
          className={cn(
            styles.movement,
            "relative scroll-mt-24 grid gap-7 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-12"
          )}
        >
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="atlas-kicker">Movimiento {folio(index)}</p>
            <h3 className="atlas-title-lg mt-3">{momento.title}</h3>
            <span className="atlas-rule bg-ember-500" />
            {momento.summary ? (
              <p className="mt-4 text-[length:var(--step-0)] leading-[1.6] text-ink-900">
                {momento.summary}
              </p>
            ) : null}
            {momento.myths.length ? (
              <p className="atlas-figure mt-4 text-[0.8125rem] text-ink-500">
                {momento.myths.length}{" "}
                {momento.myths.length === 1 ? "relato" : "relatos"}
              </p>
            ) : null}
          </div>

          <div className="min-w-0">
            {momento.proseParagraphs?.map((paragraph, i) => (
              <p
                key={i}
                className={cn(
                  "max-w-[62ch] leading-[1.72] text-ink-700",
                  i > 0 && "mt-4"
                )}
              >
                {paragraph}
              </p>
            ))}

            {momento.myths.length ? (
              <ul
                className={cn(
                  "grid list-none grid-cols-2 gap-[3px] sm:grid-cols-3 xl:grid-cols-4",
                  momento.proseParagraphs?.length ? "mt-7 md:mt-8" : ""
                )}
              >
                {momento.myths.map((myth) => (
                  <li key={myth.slug}>
                    <MythPlate
                      myth={myth}
                      index={position.get(myth.slug)}
                      motif={motif}
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
