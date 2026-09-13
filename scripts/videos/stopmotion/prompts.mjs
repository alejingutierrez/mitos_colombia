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

/**
 * Hoja de poses. Tres cosas la hacen funcionar, y las tres vienen del caso que
 * estudiamos: (1) una imagen MAESTRA que manda sobre identidad, materiales,
 * set, cámara y luz; (2) la rejilla pedida como rejilla —exacta, a sangre, sin
 * canales ni números—; (3) una pose por celda, NUMERADA Y MEDIDA, con los
 * anclajes quietos dichos por su nombre.
 */
export function promptHoja(plano, { filas, cols, celdas }) {
  return [
    `Usando la imagen adjunta como REFERENCIA MAESTRA y autoridad sobre identidad, materiales, colores, decorado, cámara y luz, genera UNA hoja de poses de exactamente ${filas} filas y ${cols} columnas.`,
    `Cada celda, todas del mismo tamaño, es una pose consecutiva del plan numerado de abajo. Ordena las celdas de izquierda a derecha y luego de arriba abajo.`,
    "Trata las celdas como muestras consecutivas de UNA SOLA acción continua de stop-motion: el movimiento sigue de una fila a la siguiente sin cortarse.",
    "Conserva proporciones, escala, posición de cámara, luz, fondo y los ANCLAJES QUIETOS que se nombran abajo. Lo que arrastra el movimiento (tela, pelo, polvo) cambia de forma coherente con la pose.",
    `Encuadre IDÉNTICO en todas las celdas: cada celda muestra la misma vista vertical 9:16 de la imagen maestra, con la figura en el mismo sitio y del mismo tamaño. Cada pose queda dentro de su celda.`,
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas, números de fotograma ni marcas de movimiento. Las celdas se tocan entre sí y llenan la imagen entera.",
    "",
    bloque("APARIENCIA Y DECORADO FIJOS (idénticos en todas las celdas):", [...plano.estilo, ...plano.escena]),
    "",
    bloque("ANCLAJES QUIETOS (no se mueven ni un milímetro en ninguna celda):", plano.invariantes),
    "",
    // Las hojas de un mismo plano se generan en paralelo y cada una sólo ve sus
    // nueve líneas: sin este enlace, cada hoja interpreta la escala del gesto a
    // su manera y en la costura entre hojas el brazo da un salto hacia atrás.
    antes ? `CONTINUIDAD: esta hoja NO empieza el gesto. La celda 1 va justo después de esta pose, y sigue desde ahí sin retroceder: ${antes}` : "",
    despues ? `La celda ${celdas.length} enlaza con la pose siguiente, que ya no está en esta hoja: ${despues}. No la adelantes ni la sobrepases.` : "",
    "",
    "PLAN DE POSES NUMERADO PARA ESTA HOJA:",
    ...celdas.map((c, i) => `Celda ${i + 1} (fotograma ${i + 1}): ${c}`),
  ].filter(Boolean).join("\n");
}

/**
 * Hoja de poses RECORTADA: la figura sola, sin decorado, sobre fondo
 * transparente. Nace de medir el límite de la hoja normal: el modelo redibuja
 * el decorado en cada celda y ningún registro lo cuadra (la deriva de fondo
 * subía a 4,8 y alinear no la bajaba). Una silueta, en cambio, SÍ se puede
 * normalizar en post —por su caja alfa— y se pega sobre un plató único que no
 * se mueve jamás. De paso resuelve el otro límite: si la figura va suelta, el
 * desplazamiento por el cuadro lo decidimos nosotros, no el modelo.
 */
export function promptHojaRecorte(plano, { filas, cols, celdas, antes = "", despues = "", conPlan = false }) {
  return [
    `Usando la imagen adjunta como REFERENCIA MAESTRA y autoridad sobre identidad, materiales, colores, proporciones y luz del personaje, genera UNA hoja de poses de exactamente ${filas} filas y ${cols} columnas.`,
    conPlan
      ? `La SEGUNDA imagen adjunta es la TIRA DE PLANIFICACIÓN de este mismo tramo: son estas ${celdas.length} poses, ya repartidas y en este mismo orden. Copia de ella el REPARTO EXACTO del gesto —el ángulo del brazo y la altura de la mano de cada celda, una por una— y de la primera imagen la identidad, los materiales y la luz. Si el plan y el texto no coinciden, manda el plan.`
      : "",
    "IMPORTANTE: en todas las celdas aparece ÚNICAMENTE LA FIGURA RECORTADA SOBRE FONDO COMPLETAMENTE TRANSPARENTE. Sin decorado, sin suelo, sin piedra, sin cielo, sin sombra proyectada, sin viñeta: sólo el personaje y transparencia alrededor.",
    `Cada celda, todas del mismo tamaño, es una pose consecutiva del plan numerado de abajo, de izquierda a derecha y luego de arriba abajo.`,
    "Trata las celdas como muestras consecutivas de UNA SOLA acción continua de stop-motion: el movimiento sigue de una fila a la siguiente sin cortarse.",
    "La figura está EXACTAMENTE en el mismo sitio y al MISMO TAMAÑO en todas las celdas: misma altura de cabeza, mismos pies a la misma altura, misma distancia de cámara. Lo único que cambia entre celdas es la pose descrita.",
    "La figura entera cabe dentro de su celda con aire de sobra: queda un margen transparente claro por encima de la cabeza y por debajo de los pies, y la figura ocupa alrededor de tres cuartos del alto de la celda. Ni un dedo, ni un pie, ni un mechón tocan el borde de la celda.",
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números. Cada figura queda entera dentro de su celda, sin tocar los bordes.",
    "",
    bloque("APARIENCIA FIJA DEL PERSONAJE (idéntica en todas las celdas):", [...plano.estilo, ...(plano.figura || [])]),
    "",
    bloque("LUZ (idéntica en todas las celdas, para que la figura encaje luego en su decorado):", plano.luz || []),
    "",
    // Las hojas de un mismo plano se generan en paralelo y cada una sólo ve sus
    // nueve líneas: sin este enlace, cada hoja interpreta la escala del gesto a
    // su manera y en la costura entre hojas el brazo da un salto hacia atrás.
    antes ? `CONTINUIDAD: esta hoja NO empieza el gesto. La celda 1 va justo después de esta pose, y sigue desde ahí sin retroceder: ${antes}` : "",
    despues ? `La celda ${celdas.length} enlaza con la pose siguiente, que ya no está en esta hoja: ${despues}. No la adelantes ni la sobrepases.` : "",
    "",
    "PLAN DE POSES NUMERADO PARA ESTA HOJA:",
    ...celdas.map((c, i) => `Celda ${i + 1} (fotograma ${i + 1}): ${c}`),
  ].filter(Boolean).join("\n");
}

/**
 * PLANCHA DE PLANIFICACIÓN: toda la acción del plano en una sola imagen, en
 * miniaturas. No es material de montaje, es el REPARTO del gesto.
 *
 * Idea del usuario, y coincide con lo medido: cuando el modelo ve la acción
 * entera de un golpe la reparte bien (irregularidad 1,29x en una hoja suelta),
 * y cuando la ve a trozos cada trozo interpreta la escala a su manera y en la
 * costura el brazo retrocede. La plancha se hace una vez, barata y pequeña, y
 * luego cada hoja de producción copia de ella el ángulo de cada celda.
 *
 * Se pide en FILAS COMPLETAS por hoja de producción: así una tira recortada de
 * la plancha son exactamente las 9 poses de esa hoja, en su orden, y no hay que
 * fiarse de que el modelo cuente celdas en una rejilla.
 */
export function promptPlancha(plano, { filas, cols, celdas }) {
  return [
    `Usando la imagen adjunta como referencia de identidad, materiales y proporciones del personaje, genera una PLANCHA DE PLANIFICACIÓN de animación: una rejilla de exactamente ${filas} filas y ${cols} columnas.`,
    `Cada celda es una pose consecutiva de UNA SOLA acción continua, en orden de izquierda a derecha y luego de arriba abajo: ${filas * cols} poses en total. El movimiento sigue de una fila a la siguiente sin cortarse ni retroceder.`,
    "En cada celda aparece SÓLO la figura, de cuerpo entero y pequeña, sobre un fondo mate liso gris medio, idéntico en todas las celdas. Sin decorado, sin suelo, sin sombra proyectada.",
    "La figura está en el mismo sitio, al mismo tamaño y a la misma distancia en todas las celdas, con aire por encima de la cabeza y por debajo de los pies. Lo único que cambia entre celdas es la pose.",
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números.",
    "",
    bloque("PERSONAJE (idéntico en todas las celdas):", plano.figura || []),
    "",
    "PLAN DE POSES NUMERADO:",
    ...celdas.map((c, i) => `Celda ${i + 1}: ${c}`),
  ].join("\n");
}

/** Puente entre dos recortes vecinos: el intermedio, también sobre alfa. */
export function promptPuenteRecorte(plano) {
  return [
    "Las dos imágenes adjuntas son dos poses CONSECUTIVAS del mismo personaje en una animación de stop-motion, recortadas sobre fondo transparente.",
    "Genera la pose EXACTAMENTE INTERMEDIA entre las dos: cada extremidad, la manta y el pelo a mitad de camino entre la primera y la segunda. No es una mezcla ni un fundido de las dos imágenes: es la fotografía del muñeco en el instante intermedio.",
    "Fondo COMPLETAMENTE TRANSPARENTE, sin decorado, sin suelo y sin sombra proyectada. La figura queda al mismo tamaño y en el mismo sitio del encuadre que en las dos referencias, con el mismo margen por encima de la cabeza y por debajo de los pies.",
    "",
    bloque("PERSONAJE (idéntico a las referencias):", plano.figura || []),
  ].join("\n");
}

/**
 * PLANCHA DE FONDO: los estados de lo que se mueve EN EL DECORADO.
 *
 * El plató fijo mató la deriva (0,00) pero también la vida: los fogones dejaron
 * de temblar y el humo de subir. En una maqueta de papel real el fuego SÍ se
 * anima —se cambian las llamas recortadas fotograma a fotograma—, así que aquí
 * se pide lo mismo: la misma imagen N veces, cambiando únicamente lo que arde,
 * humea o se mece. Lo demás se congela después con la mediana, así que da igual
 * que el modelo redibuje: sólo pasará lo que de verdad cambió.
 */
export function promptPlanchaFondo(plano, { filas, cols, celdas, mueve }) {
  return [
    `La imagen adjunta es el PLATÓ VACÍO de un plano de stop-motion y es la autoridad absoluta sobre encuadre, composición, distancia de cámara, luz, materiales y colores.`,
    `Genera una hoja de exactamente ${filas} filas y ${cols} columnas: ${filas * cols} versiones del MISMO plano, en orden de izquierda a derecha y luego de arriba abajo.`,
    "Las celdas son fotogramas consecutivos del decorado quieto: TODO está exactamente en el mismo sitio y al mismo tamaño en todas —los bohíos, las vasijas, la piedra, el suelo, el cielo y el encuadre son idénticos, píxel por píxel.",
    `LO ÚNICO QUE CAMBIA entre celdas es: ${mueve}. Cambia sólo eso, y de forma continua de una celda a la siguiente, como fotogramas seguidos de la misma toma.`,
    "En ninguna celda aparecen personas.",
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números.",
    "",
    bloque("TÉCNICA (idéntica en todas las celdas):", plano.estilo),
    "",
    // El bloque de escena describe a la figura: pasarlo aquí hace que el modelo
    // dibuje a la mujer en el plató vacío. La plancha de fondo sólo ve decorado.
    bloque("DECORADO (idéntico en todas las celdas, y SIN PERSONAS):", plano.decorado || []),
    "",
    "ESTADOS:",
    ...celdas.map((c, i) => `Celda ${i + 1}: ${c}`),
  ].join("\n");
}
