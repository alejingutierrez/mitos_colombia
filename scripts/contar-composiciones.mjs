#!/usr/bin/env node

/**
 * Cuenta en qué se está atascando la composición del archivo.
 *
 * El catálogo de esquemas sólo sirve si alguien mira el reparto: la primera
 * auditoría encontró que las tres veces que un prompt fijó posición dijo
 * "tercio derecho", y nadie lo vio porque no había con qué verlo. Esto lo hace
 * visible: qué esquemas se usan, cuáles llevan cero, y en qué formato se
 * concentra el sesgo.
 *
 * Uso: node scripts/contar-composiciones.mjs [--dir <carpeta de mitos>]
 */

import { readdir, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { COMPOSITION_SCHEMAS } from "../src/lib/visual-direction.js";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const dirFlag = process.argv.indexOf("--dir");
const MITOS_DIR =
  dirFlag > -1
    ? resolve(process.argv[dirFlag + 1])
    : join(REPO_ROOT, "content", "videos", "muiscas", "mitos");

const FORMATOS = ["horizontal", "vertical", "cuadrada"];
const bar = (n, max) => "█".repeat(n) + "·".repeat(Math.max(0, max - n));

async function main() {
  let dirs;
  try {
    dirs = await readdir(MITOS_DIR);
  } catch {
    console.error(`No pude leer ${MITOS_DIR}. Pasa --dir <carpeta>.`);
    process.exitCode = 1;
    return;
  }

  const uso = Object.fromEntries(Object.keys(COMPOSITION_SCHEMAS).map((k) => [k, 0]));
  const porFormato = Object.fromEntries(FORMATOS.map((f) => [f, {}]));
  const heredadas = [];
  let total = 0;

  for (const dir of dirs) {
    let manifest;
    try {
      manifest = JSON.parse(await readFile(join(MITOS_DIR, dir, "manifest.json"), "utf8"));
    } catch {
      continue;
    }
    for (const [formato, item] of Object.entries(manifest.items || {})) {
      total += 1;
      const esquema = item.composicion;
      if (!esquema) {
        heredadas.push({ mito: dir, formato, nota: item.composicion_nota || "sin esquema declarado" });
        continue;
      }
      if (!(esquema in uso)) {
        console.warn(`  ⚠ ${dir}/${formato}: esquema desconocido "${esquema}"`);
        continue;
      }
      uso[esquema] += 1;
      porFormato[formato][esquema] = (porFormato[formato][esquema] || 0) + 1;
    }
  }

  const max = Math.max(1, ...Object.values(uso));
  console.log(`\n  ${total} escenas · ${Object.keys(COMPOSITION_SCHEMAS).length} esquemas en el catálogo\n`);
  for (const [key, schema] of Object.entries(COMPOSITION_SCHEMAS)) {
    const n = uso[key];
    const marca = n === 0 ? "  ← sin usar" : "";
    console.log(`  ${schema.label.padEnd(22)} ${String(n).padStart(2)}  ${bar(n, max)}${marca}`);
  }

  if (heredadas.length) {
    console.log(`\n  ${heredadas.length} heredadas (compuestas antes del catálogo):`);
    for (const h of heredadas) console.log(`    · ${h.mito}/${h.formato} — ${h.nota}`);
  }

  console.log("\n  Reparto por formato:");
  for (const formato of FORMATOS) {
    const entradas = Object.entries(porFormato[formato]);
    const sinEsquema = heredadas.filter((h) => h.formato === formato).length;
    const detalle = entradas.length
      ? entradas.map(([k, n]) => `${COMPOSITION_SCHEMAS[k].label}×${n}`).join(", ")
      : "—";
    console.log(
      `    ${formato.padEnd(11)} ${detalle}${sinEsquema ? `  (+${sinEsquema} heredada${sinEsquema > 1 ? "s" : ""})` : ""}`
    );
  }

  const sinUsar = Object.entries(uso).filter(([, n]) => n === 0).map(([k]) => COMPOSITION_SCHEMAS[k].label);
  if (sinUsar.length) {
    console.log(`\n  Pendientes de estrenar: ${sinUsar.join(", ")}.`);
  }
  console.log("");
}

main().catch((error) => {
  console.error(`\n✖ ${error.message}\n`);
  process.exitCode = 1;
});
