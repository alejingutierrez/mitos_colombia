import assert from "node:assert/strict";
import test from "node:test";
import { coverSampleRect, relativeLuminance, titleTone } from "../src/lib/home-contrast.js";

test("los fondos claros piden tinta y los oscuros piden blanco", () => {
  assert.equal(relativeLuminance([0, 0, 0]), 0);
  assert.equal(relativeLuminance([255, 255, 255]), 1);
  assert.equal(titleTone(Array(100).fill(1)), "ink");
  assert.equal(titleTone(Array(100).fill(0)), "light");
});

test("una escena mitad blanca y mitad negra no se resuelve promediando", () => {
  assert.equal(titleTone([...Array(50).fill(0), ...Array(50).fill(1)]), "paper");
  assert.equal(titleTone([]), "paper");
});

test("ramas y cercas que ocupan una parte pequeña del titular también cuentan", () => {
  assert.equal(titleTone([...Array(8).fill(0), ...Array(92).fill(0.7)]), "paper");
  assert.equal(titleTone([...Array(92).fill(0.02), ...Array(8).fill(0.8)]), "paper");
});

test("el texto pequeño exige más contraste; el grande elige el mejor de ambos colores", () => {
  const mid = Array(100).fill(0.27);
  assert.equal(titleTone(mid, [16, 53, 36], 4.5), "paper");
  assert.equal(titleTone(mid, [16, 53, 36], 3), "ink");
  assert.equal(titleTone(Array(100).fill(0.2), [16, 53, 36], 3), "light");
});

test("el titular inferior lee su zona real después del recorte horizontal", () => {
  const image = { left: 0, top: 0, width: 600, height: 600, naturalWidth: 600, naturalHeight: 400 };
  const line = { left: 120, top: 510, right: 420, bottom: 570 };
  assert.deepEqual(coverSampleRect(image, line), { x: 180, y: 340, width: 200, height: 40 });
});

test("la variante vertical respeta object-position y cambia la zona muestreada", () => {
  const image = { left: 0, top: 0, width: 600, height: 600, naturalWidth: 400, naturalHeight: 600 };
  const line = { left: 120, top: 510, right: 420, bottom: 570 };
  assert.deepEqual(coverSampleRect(image, line), { x: 80, y: 370, width: 200, height: 40 });
  assert.deepEqual(coverSampleRect(image, line, [0.5, 0.5]), { x: 80, y: 440, width: 200, height: 40 });
});

test("se omiten líneas fuera de la obra y las imágenes que no han cargado", () => {
  const image = { left: 0, top: 0, width: 600, height: 600, naturalWidth: 400, naturalHeight: 600 };
  assert.equal(coverSampleRect(image, { left: 0, top: 610, right: 100, bottom: 630 }), null);
  assert.equal(coverSampleRect({ ...image, naturalWidth: 0 }, { left: 0, top: 0, right: 100, bottom: 30 }), null);
});
