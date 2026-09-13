// Los tres prompts del carril de interpolación. Un solo lugar para que el
// bloque de estilo, escena e invariantes salga BYTE A BYTE igual en todos los
// fotogramas de un plano: si cambia una coma entre fotograma y fotograma, el
// modelo se toma la licencia de cambiar la luz o el fondo, y el parpadeo entre
// fotogramas es el defecto que mata esta técnica.

const bloque = (titulo, lineas) => `${titulo}\n${lineas.map((l) => `- ${l}`).join("\n")}`;

function base(plano) {
  return [
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    "",
    bloque("TÉCNICA (idéntica en todos los fotogramas):", plano.estilo),
    "",
    bloque("ESCENA (idéntica en todos los fotogramas de este plano):", plano.escena),
    "",
    bloque("MANTENER IDÉNTICO:", plano.invariantes),
  ].join("\n");
}

export function promptInicio(plano) {
  return [
    base(plano),
    "",
    "La imagen de referencia es la FICHA DE PERSONAJE de la biblia: copia de ella la identidad, el peinado, la manta, las franjas tejidas, la vasija y los materiales de papel. NO copies su fondo crema ni su pose frontal: la figura va integrada al diorama nocturno descrito arriba.",
    "",
    bloque("FOTOGRAMA A (primer fotograma del plano) — POSE:", [plano.poses.inicio]),
  ].join("\n");
}

export function promptFin(plano) {
  return [
    base(plano),
    "",
    "La imagen de referencia 1 es el FOTOGRAMA A de este mismo plano, ya fotografiado. La referencia 2 es la ficha de personaje.",
    `Genera el FOTOGRAMA B: el mismo plano ${plano.duracion_s} segundos después. Cambia SÓLO la pose de la figura y lo que el movimiento arrastra (manta, pelo, polvo). Todo lo demás —encuadre, fondo, piedras, cielo, luz, sombras, materiales, identidad— se copia exacto del fotograma A, pieza por pieza.`,
    "",
    bloque("FOTOGRAMA B (último fotograma del plano) — POSE:", [plano.poses.fin]),
  ].join("\n");
}

/**
 * Fotograma intermedio por bisección: siempre entre DOS fotogramas que ya
 * existen, nunca en cadena desde uno solo. Así el error no se acumula: cada
 * nuevo fotograma está anclado por sus dos vecinos reales.
 */
export function promptMedio(plano, { msA, msB, nota = "" }) {
  const dt = Math.round(msB - msA);
  return [
    base(plano),
    "",
    `Las referencias son DOS FOTOGRAMAS CONSECUTIVOS del mismo plano de stop-motion, separados por ${dt} milisegundos: la referencia 1 es el fotograma A (antes) y la referencia 2 es el fotograma B (después).`,
    "Genera el FOTOGRAMA EXACTAMENTE INTERMEDIO entre los dos: la figura queda a MITAD DE CAMINO entre la pose de A y la pose de B (cada extremidad, la manta y el pelo a mitad de su recorrido), y el resto del cuadro se copia idéntico de A.",
    "No es una mezcla ni un fundido de las dos imágenes: es la fotografía de la maqueta en el instante intermedio, con la misma nitidez y el mismo grano de papel que A y B.",
    nota ? `Nota del plano: ${nota}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/** Cadena: el siguiente fotograma a partir SÓLO del anterior (prueba de deriva). */
export function promptCadena(plano, { paso, total, avance }) {
  return [
    base(plano),
    "",
    `La imagen de referencia es el fotograma ${paso - 1} de ${total} de este plano de stop-motion.`,
    `Genera el fotograma ${paso}: ${avance}`,
    "Copia exacto del anterior el encuadre, el fondo, la luz y la identidad; cambia sólo lo que avanza el movimiento.",
  ].join("\n");
}

/**
 * Pose CLAVE escrita por nosotros. La bisección pura falla porque el modelo no
 * sabe qué es "la mitad" de un gesto: salta al gesto terminado y deja el resto
 * del plano congelado (medido: el brazo llegaba arriba en el 12% del clip).
 * La solución es la de siempre en animación: las claves las escribe el
 * animador, y la máquina sólo rellena entre claves vecinas y parecidas.
 */
export function promptClave(plano, { i, total, pose, ms }) {
  return [
    base(plano),
    "",
    "La referencia 1 es el fotograma anterior de este mismo plano y la referencia 2 es el primer fotograma del plano. Copia de ellas el encuadre, el fondo, la luz y la identidad, pieza por pieza.",
    `Genera la POSE CLAVE ${i} de ${total} del plano, en el segundo ${(ms / 1000).toFixed(2)}. Cambia SÓLO lo que describe la pose; el resto del cuadro es idéntico al de las referencias.`,
    "La pose debe quedar EXACTAMENTE en el punto descrito, ni un grado más adelantada: es un paso intermedio de un gesto que todavía no ha terminado.",
    "",
    bloque("POSE DE ESTE FOTOGRAMA:", [pose]),
  ].join("\n");
}
