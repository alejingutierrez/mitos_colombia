/**
 * Home · la retícula de «la mesa de hoy».
 *
 * Vive aparte de `TodayTable` por una razón: es la única pieza del mosaico que
 * se puede demostrar. `scripts/mesa-mosaic.test.mjs` lee estas MISMAS cadenas de
 * clases y comprueba que las columnas cierran exacto en los tres anchos —que es
 * justo lo que fallaba antes (un cuadrado vacío permanente en móvil)—. Si el
 * módulo trajera JSX o `next/link`, la prueba no podría importarlo.
 *
 * El patrón tiene período 5 —una pieza que abre y cuatro que la acompañan— y las
 * columnas están elegidas para que la suma del período sea múltiplo del número
 * de columnas en los tres puntos de quiebre:
 *
 *      columnas:      2 (base)     4 (md)      12 (lg)
 *      pieza que abre     2           4            4
 *      cuatro piezas      1 c/u       1 c/u        2 c/u
 *      suma del período   6 ✓         8 ✓         12 ✓
 *
 * Como cierra en los tres, ningún período deja huecos y el siguiente arranca en
 * fila limpia. El resto (1 a 4 tarjetas) tiene su propia cola, también
 * embaldosada en los tres anchos.
 *
 * Las proporciones de cada fila están elegidas para que las alturas coincidan:
 * en `lg` una pieza de 4/12 en 3/2 mide 291 px sobre un contenedor de 1.348 px,
 * y una de 2/12 en 5/7 mide 291 px también. El mosaico usa `items-start`, así
 * que cualquier descuadre queda como borde irregular abajo y no como estirón.
 */

/** Techo de `/api/mesa` y lo que aguanta el mosaico sin crecer más que el viejo. */
export const MAX_SLOTS = 12;

export const PERIOD = 5;

/** Pieza que abre el período: banda ancha en móvil y tablet, 4/12 en escritorio. */
export const LEAD = {
  cell: "col-span-2 aspect-[16/9] md:col-span-4 md:aspect-[3/1] lg:col-span-4 lg:aspect-[3/2]",
  sizes: "(max-width: 1023px) 94vw, 32vw",
  lead: true,
};

/** Las cuatro que la acompañan. */
export const SMALL = {
  cell: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-[3/4] lg:col-span-2 lg:aspect-[5/7]",
  sizes: "(max-width: 767px) 47vw, (max-width: 1023px) 24vw, 16vw",
  lead: false,
};

/* Colas: lo que sobra al dividir entre cinco. Cada una embaldosa exacto en 2, 4
   y 12 columnas — es la condición para que no reaparezca el hueco de móvil. */
const TAIL_1 = {
  cell: "col-span-2 aspect-[16/9] md:col-span-4 md:aspect-[3/1] lg:col-span-12 lg:aspect-[24/5]",
  sizes: "94vw",
  lead: true,
};

const TAIL_2 = {
  cell: "col-span-1 aspect-[4/3] md:col-span-2 md:aspect-[3/2] lg:col-span-6 lg:aspect-[3/1]",
  sizes: "(max-width: 767px) 47vw, 47vw",
  lead: false,
};

const TAIL_3_WIDE = {
  cell: "col-span-2 aspect-[16/9] md:col-span-2 md:aspect-[16/9] lg:col-span-6 lg:aspect-[21/9]",
  sizes: "(max-width: 767px) 94vw, 47vw",
  lead: true,
};

const TAIL_3_SMALL = {
  cell: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-[6/7] lg:col-span-3 lg:aspect-[9/8]",
  sizes: "(max-width: 767px) 47vw, 24vw",
  lead: false,
};

const TAIL_4 = {
  cell: "col-span-1 aspect-[4/3] md:col-span-1 md:aspect-[3/4] lg:col-span-3 lg:aspect-[1/1]",
  sizes: "(max-width: 767px) 47vw, 24vw",
  lead: false,
};

export const TAILS = {
  1: [TAIL_1],
  2: [TAIL_2, TAIL_2],
  3: [TAIL_3_WIDE, TAIL_3_SMALL, TAIL_3_SMALL],
  4: [TAIL_4, TAIL_4, TAIL_4, TAIL_4],
};

/**
 * Las formas de las `count` tarjetas visibles. Depende SÓLO de cuántas hay y no
 * de qué posición ocupaban: así el filtro y la baraja recomponen el mosaico
 * entero en vez de dejar reservados los huecos de lo que ya no se pinta.
 */
export function mosaicSlots(count) {
  const total = Math.max(0, Math.min(Number(count) || 0, MAX_SLOTS));
  const whole = Math.floor(total / PERIOD) * PERIOD;
  const slots = [];
  for (let index = 0; index < whole; index += 1) {
    slots.push(index % PERIOD === 0 ? LEAD : SMALL);
  }
  const rest = total - whole;
  if (rest) slots.push(...TAILS[rest]);
  return slots;
}
