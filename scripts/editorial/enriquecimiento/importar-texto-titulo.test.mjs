// K3 del spec del cierre: un nombre propio en el título es un hecho, y tiene
// que estar en alguna cita literal del acta o en el Relato, que ya pasó el
// cotejo. Es el caso que lo destapó —«Margarita Villaquirá», cuyo apellido no
// está en la crónica de 1924—, reconstruido en un módulo de prueba para que el
// test no dependa de un título que ya se corrigió. Y los setenta del Caribe,
// que no deben dar ni un falso positivo.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const importar = path.join(import.meta.dirname, "importar-texto.mjs");
const avisos = (salida) => salida.split("\n").filter((l) => /el título «/.test(l));

const RELATO =
  "Llevaba quince días desaparecida de las calles del centro cuando el periodista salió a buscarla. " +
  "Margarita, a la que llamaban la loca, vestía de rojo y gritaba vivas al partido liberal. ".repeat(20);

function fixture(titulo) {
  const raiz = fs.mkdtempSync(path.join(os.tmpdir(), "titulo-"));
  const mod = path.join(raiz, "editorial", "prueba");
  fs.mkdirSync(mod, { recursive: true });
  fs.writeFileSync(
    path.join(mod, "records.mjs"),
    `export default [${JSON.stringify({ slug: "la-loca-margarita", title: titulo, mito: "x", historia: "x", versiones: "x", leccion: "x.", similitudes: "x" })}];\n`,
  );
  const ciclo = path.join(raiz, "content", "editorial", "prueba");
  fs.mkdirSync(path.join(ciclo, "actas-2026-09-21"), { recursive: true });
  fs.mkdirSync(path.join(ciclo, "reescritura-2026-09-21"), { recursive: true });
  fs.writeFileSync(
    path.join(ciclo, "actas-2026-09-21", "la-loca-margarita.json"),
    JSON.stringify({ slug: "la-loca-margarita", nudos: [{ hecho: "nombre", literal: "María Margarita Josefa Mogollón Leiva" }] }),
  );
  fs.writeFileSync(
    path.join(ciclo, "reescritura-2026-09-21", "la-loca-margarita.json"),
    JSON.stringify({ slug: "la-loca-margarita", mito: RELATO, historia: "h", versiones: "v", leccion: "l.", similitudes: "s" }),
  );
  return raiz;
}

const correr = (raiz) =>
  spawnSync(
    process.execPath,
    [importar, "--comunidad=prueba", "--modulos=prueba", "--reescrituras=content/editorial/prueba/reescritura-2026-09-21"],
    { cwd: raiz, encoding: "utf8" },
  );

test("avisa del apellido que ninguna cita literal ni el Relato sostienen", () => {
  const lineas = avisos(correr(fixture("Margarita Villaquirá, la Loca Margarita")).stdout);
  assert.equal(lineas.length, 1);
  assert.match(lineas[0], /nombra «Villaquirá»/);
  assert.doesNotMatch(lineas[0], /«Margarita»|«Loca»/);
});

test("no avisa cuando el título sólo usa lo que el Relato o el acta sostienen", () => {
  assert.deepEqual(avisos(correr(fixture("Margarita, la Loca Margarita")).stdout), []);
});

test("no da falsos positivos en los setenta del Caribe", () => {
  const r = spawnSync(
    process.execPath,
    [
      importar,
      "--comunidad=mestizo",
      "--modulos=caribe-mestizo-final",
      "--reescrituras=content/editorial/caribe-mestizo-final/reescritura-2026-09-19",
    ],
    { encoding: "utf8" },
  );
  assert.deepEqual(avisos(r.stdout), []);
});
