// K3 del spec del cierre: un nombre propio en el título es un hecho, y tiene
// que estar en alguna cita literal del acta. Se comprueba sobre el caso que lo
// destapó —«Villaquirá», que no está en la crónica de 1924— y sobre los setenta
// del Caribe, que no deben dar ni un falso positivo.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import test from "node:test";

const importar = path.join(import.meta.dirname, "importar-texto.mjs");
const correr = (args) => spawnSync(process.execPath, [importar, ...args], { encoding: "utf8" });
const avisos = (salida) => salida.split("\n").filter((l) => /el título «/.test(l));

test("avisa del apellido que ninguna cita literal sostiene", () => {
  const r = correr([
    "--comunidad=mestizo",
    "--modulos=bogota-mestizo-memoria",
    "--reescrituras=content/editorial/bogota-mestizo/reescritura-2026-09-21",
  ]);
  const lineas = avisos(r.stdout);
  assert.equal(lineas.length, 1, r.stdout);
  assert.match(lineas[0], /la-loca-margarita: el título «[^»]+» nombra «Villaquirá»/);
});

test("no da falsos positivos en los setenta del Caribe", () => {
  const r = correr([
    "--comunidad=mestizo",
    "--modulos=caribe-mestizo-final",
    "--reescrituras=content/editorial/caribe-mestizo-final/reescritura-2026-09-19",
  ]);
  assert.deepEqual(avisos(r.stdout), []);
});
