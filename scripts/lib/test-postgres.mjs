/**
 * ¿Hay una conexión Postgres utilizable para las pruebas de integración?
 *
 * Varias pruebas lanzan scripts que hablan con la base (los verificadores
 * editoriales, los preflight de sincronización, la publicación de trípticos).
 * Sin conexión esos scripts salen con error y la prueba fallaba, que es la
 * respuesta equivocada: la prueba no ha encontrado un defecto, ha encontrado
 * una máquina sin base de datos. Lo correcto es SALTARLA, igual que ya se hace
 * en este repo con `{ skip: !fs.existsSync(provenancePath) }`.
 *
 * Se resuelve igual que `run-community-editorial-verifier.mjs`: primero lo que
 * ya venga en el entorno, y si no, el `.env` del repo, que es de donde lo saca
 * el script hijo cuando la prueba lo lanza con spawnSync.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

const KEYS = [
  "POSTGRES_URL_NON_POOLING",
  "DATABASE_URL_UNPOOLED",
  "POSTGRES_URL",
  "DATABASE_URL",
];

function fromEnvFile(file) {
  const full = path.resolve(REPO_ROOT, file);
  if (!fs.existsSync(full)) return null;
  let raw;
  try {
    raw = fs.readFileSync(full, "utf8");
  } catch {
    return null;
  }
  for (const key of KEYS) {
    const match = raw.match(new RegExp(`^${key}=(.*)$`, "m"));
    const value = match?.[1]?.trim().replace(/^["']|["']$/g, "");
    if (value) return value;
  }
  return null;
}

/** La cadena de conexión que usarían los scripts, o `null` si no hay ninguna. */
export function postgresConnectionString(envFile = ".env") {
  for (const key of KEYS) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return fromEnvFile(envFile) || fromEnvFile(".env.local");
}

/** `true` cuando hay conexión. Para usar directamente en `{ skip: ... }`. */
export function hasPostgres(envFile = ".env") {
  return Boolean(postgresConnectionString(envFile));
}

/**
 * Motivo de salto, o `false` si no hay que saltar. `node --test` acepta una
 * cadena en `skip` y la imprime, así que el informe dice por qué se saltó en
 * vez de dejar un hueco mudo.
 */
export const skipWithoutPostgres = hasPostgres()
  ? false
  : "requiere una conexión Postgres (POSTGRES_URL o DATABASE_URL, en el entorno o en .env)";
