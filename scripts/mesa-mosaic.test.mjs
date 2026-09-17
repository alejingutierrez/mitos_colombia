import assert from "node:assert/strict";
import test from "node:test";

import { MAX_SLOTS, PERIOD, mosaicSlots } from "../src/components/home/mesa-mosaic.js";

/**
 * La retícula de «la mesa de hoy».
 *
 * El mosaico viejo tenía diez formas fijas por posición: en móvil la quinta
 * pedía dos columnas con una sola libre, así que la retícula dejaba SIEMPRE un
 * cuadrado vacío, y al filtrar los huecos quedaban reservados para tarjetas que
 * ya no se pintaban. Estas pruebas leen las MISMAS cadenas de clases que se
 * despachan y simulan la colocación del navegador: si alguien toca un
 * `col-span` y las columnas dejan de cerrar, el hueco vuelve y esto lo caza.
 */

const BREAKPOINTS = [
  { name: "base (2 columnas)", prefix: "", columns: 2 },
  { name: "md (4 columnas)", prefix: "md:", columns: 4 },
  { name: "lg (12 columnas)", prefix: "lg:", columns: 12 },
];

/** El `col-span` que manda en ese punto de quiebre (con herencia del anterior). */
function spanAt(cell, prefix) {
  const matches = [...cell.matchAll(/(?:^|\s)(md:|lg:)?col-span-(\d+)/g)];
  const found = matches.filter((match) => (match[1] || "") === prefix);
  assert.equal(
    found.length <= 1,
    true,
    `«${cell}» declara ${found.length} col-span para «${prefix || "base"}»: dos clases del mismo grupo colisionan`
  );
  if (found.length === 1) return Number(found[0][2]);
  // Sin clase propia hereda el punto de quiebre anterior.
  if (prefix === "lg:") return spanAt(cell, "md:");
  if (prefix === "md:") return spanAt(cell, "");
  throw new Error(`«${cell}» no declara col-span base`);
}

function aspectAt(cell, prefix) {
  const matches = [...cell.matchAll(/(?:^|\s)(md:|lg:)?aspect-\[[^\]]+\]/g)];
  return matches.filter((match) => (match[1] || "") === prefix).length;
}

/**
 * Coloca las piezas como lo haría CSS grid (fila a fila, sin `dense`) y devuelve
 * el número de huecos: los que quedan al romper fila antes de tiempo más los de
 * la última fila incompleta.
 */
function holes(spans, columns) {
  let used = 0;
  let gaps = 0;
  spans.forEach((span) => {
    assert.equal(span <= columns, true, `un span de ${span} no cabe en ${columns} columnas`);
    if (used + span > columns) {
      gaps += columns - used;
      used = 0;
    }
    used += span;
    if (used === columns) used = 0;
  });
  return gaps + (used === 0 ? 0 : columns - used);
}

test("el mosaico embaldosa sin huecos en los tres anchos, con 1 a 12 tarjetas", () => {
  for (let count = 1; count <= MAX_SLOTS; count += 1) {
    const slots = mosaicSlots(count);
    assert.equal(slots.length, count, `con ${count} tarjetas salieron ${slots.length} formas`);
    BREAKPOINTS.forEach(({ name, prefix, columns }) => {
      const spans = slots.map((slot) => spanAt(slot.cell, prefix));
      assert.equal(
        holes(spans, columns),
        0,
        `${count} tarjetas dejan huecos en ${name} (spans: ${spans.join(",")})`
      );
    });
  }
});

test("cada forma declara una sola proporción por punto de quiebre", () => {
  const seen = new Set();
  for (let count = 1; count <= MAX_SLOTS; count += 1) {
    mosaicSlots(count).forEach((slot) => {
      if (seen.has(slot.cell)) return;
      seen.add(slot.cell);
      assert.equal(aspectAt(slot.cell, ""), 1, `«${slot.cell}» sin proporción base`);
      assert.equal(aspectAt(slot.cell, "md:") <= 1, true, `«${slot.cell}»: dos proporciones en md`);
      assert.equal(aspectAt(slot.cell, "lg:") <= 1, true, `«${slot.cell}»: dos proporciones en lg`);
      assert.equal(typeof slot.sizes, "string", `«${slot.cell}» sin sizes para next/image`);
      assert.equal(typeof slot.lead, "boolean", `«${slot.cell}» sin marca de pieza que abre`);
    });
  }
});

test("una mano completa abre con pieza grande cada cinco tarjetas", () => {
  const slots = mosaicSlots(PERIOD * 2);
  assert.deepEqual(
    slots.map((slot) => slot.lead),
    [true, false, false, false, false, true, false, false, false, false]
  );
});

test("sin tarjetas no hay formas, y nunca se pasa del techo", () => {
  assert.deepEqual(mosaicSlots(0), []);
  assert.deepEqual(mosaicSlots(-3), []);
  assert.equal(mosaicSlots(40).length, MAX_SLOTS);
  assert.deepEqual(mosaicSlots(undefined), []);
});
