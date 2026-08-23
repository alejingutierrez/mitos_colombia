import { Container } from "../atoms";
import { MythPlate } from "../molecules/MythPlate";

/**
 * Organismo · MythWall — el muro de obra de una ficha.
 *
 * Sustituye al par «cuatro tarjetas destacadas + índice de renglones» que
 * tenía la ficha de pueblo. Ahí sólo cuatro relatos mostraban obra y esos
 * mismos cuatro volvían a salir como 01–04 del índice; aquí cada relato
 * aparece **una vez** y **con su obra**.
 *
 * Va sobre fondo noche y a sangre a propósito: es el único punto del sitio
 * donde el papel blanco cede, porque es donde manda la ilustración.
 *
 * Las tres primeras piezas se cargan con prioridad; el resto queda en carga
 * diferida (`next/image` la aplica por defecto), que es lo que hace viable
 * un muro de cuarenta piezas.
 */

const EAGER_PLATES = 3;

export function MythWall({ myths = [], heading, meta, motif = "jaguar" }) {
  if (!myths.length) return null;

  return (
    <section className="bg-[rgb(var(--atlas-night))] py-14 md:py-16">
      <Container size="atlas">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-9">
          <div>
            <h2 className="atlas-section-heading !text-white">{heading}</h2>
            <span className="atlas-rule bg-ember-500" />
          </div>
          {meta ? (
            <p className="atlas-kicker shrink-0 !text-white/60">{meta}</p>
          ) : null}
        </div>
      </Container>

      {/* A sangre y con juntas de 3px: el muro se lee como una sola pieza,
          no como una retícula de tarjetas separadas. */}
      <ul className="grid list-none grid-cols-2 gap-[3px] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {myths.map((myth, index) => (
          <li key={myth.slug}>
            <MythPlate
              myth={myth}
              index={index}
              motif={motif}
              priority={index < EAGER_PLATES}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
