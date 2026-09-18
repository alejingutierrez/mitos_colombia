/**
 * ¿Está en disco el árbol de artefactos que una prueba necesita?
 *
 * `output/` está en `.gitignore`: ahí viven los maestros generados, que pesan
 * y no se versionan. De esos directorios git sólo lleva el `LEEME.md`. Varias
 * pruebas leen los ficheros de al lado —maestros canónicos, selecciones de
 * tríptico, planes de preproducción— y por eso sólo pasan en la máquina que
 * generó el lote: en un clon nuevo, en otro worktree o en CI fallan siempre.
 *
 * Fallar ahí es la respuesta equivocada: la prueba no ha encontrado un defecto,
 * ha encontrado una máquina sin los artefactos. Lo correcto es SALTARLA
 * diciendo cuál falta, como ya se hace en este repo con
 * `{ skip: !fs.existsSync(provenancePath) }`.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

/**
 * `false` cuando están todas las rutas —y entonces la prueba corre—, o el
 * motivo del salto nombrando la primera que falta. `node --test` imprime esa
 * cadena, así que el informe dice qué falta en vez de dejar un hueco mudo.
 */
export function skipWithoutArtifacts(...rutas) {
  const falta = rutas.find((ruta) => !fs.existsSync(path.resolve(REPO_ROOT, ruta)));
  return falta
    ? `requiere artefactos que no se versionan: falta ${falta} (output/ está en .gitignore)`
    : false;
}
