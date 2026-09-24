#!/usr/bin/env node
/**
 * Cuanto cuesta emitir una biblia, con tarifas medidas y no estimadas.
 *
 * La unica cifra medida del repo es
 * `content/videos/muiscas/lab-stopmotion/ledger.jsonl`: 387 llamadas reales de
 * gpt-image-2.5-sunburst con el `usage` que devolvio la API. De ahi sale la
 * densidad de tokens por pixel, que es lo unico que hace falta para pasar de
 * un tamano de lamina a un precio:
 *
 *   1088x1920 = 2.088.960 px -> 1.325 tokens de salida  =>  ~1.577 px/token
 *
 * Con eso, y con PRECIOS de `scripts/videos/stopmotion/img.mjs`, el costo de
 * una lamina es aritmetica, no adivinanza.
 *
 *   node scripts/mitos/costo-biblia.mjs --fichas 900
 *   node scripts/mitos/costo-biblia.mjs --censo <dir-del-censo>
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

/** USD por millon de tokens. Igual que PRECIOS en scripts/videos/stopmotion/img.mjs. */
export const RATES = {
  "gpt-image-2.5-sunburst": { text_in: 5, image_in: 8, image_out: 30 },
  "gpt-image-2": { text_in: 2.5, image_in: 4, image_out: 15 },
};

/** Medido en el ledger: 2.088.960 px / 1.325 tokens. */
export const PIXELS_PER_TOKEN = 1577;

/** Las fichas instaladas son 1024x1024 (wayuu) y 1024x1536 (nasa). */
export const SHEET_SIZES = { cuadrada: [1024, 1024], vertical: [1024, 1536] };

/** Un prompt de biblia ronda los 5.000 caracteres: ~1.400 tokens. */
export const PROMPT_TOKENS = 1400;

/**
 * Cuantos intentos cuesta una ficha aceptada. No es un margen inventado: en
 * nasa, `selection.v2.json` registra 60 aceptaciones y 16 rechazos, y a eso
 * hay que sumarle los pilotos —la tanda 01 wayuu, catorce laminas, se tiro
 * entera por salir fotorrealista—.
 */
export const ATTEMPTS = { optimista: 1.15, central: 1.35, pesimista: 1.6 };

export function costPerAttempt({
  model = "gpt-image-2.5-sunburst",
  size = "cuadrada",
  refs = 0,
} = {}) {
  const rate = RATES[model];
  const [width, height] = SHEET_SIZES[size] || SHEET_SIZES.cuadrada;
  const outTokens = (width * height) / PIXELS_PER_TOKEN;
  const refTokens = refs * ((1024 * 1024) / PIXELS_PER_TOKEN);
  return (
    (outTokens * rate.image_out + PROMPT_TOKENS * rate.text_in + refTokens * rate.image_in) / 1e6
  );
}

/**
 * Una biblia se emite en cuatro capas y no todas cuestan lo mismo: las
 * personas salen de texto, y animales, atrezo y paisajes heredan referencias
 * de la capa anterior para que la continuidad se sostenga.
 */
export const LAYER_MIX = [
  { layer: "personas", share: 0.34, size: "cuadrada", refs: 0 },
  { layer: "animales", share: 0.2, size: "cuadrada", refs: 1 },
  { layer: "atrezo", share: 0.26, size: "cuadrada", refs: 1 },
  { layer: "paisajes", share: 0.2, size: "vertical", refs: 2 },
];

export function blendedCostPerSheet(model = "gpt-image-2.5-sunburst") {
  return LAYER_MIX.reduce(
    (total, { share, size, refs }) => total + share * costPerAttempt({ model, size, refs }),
    0,
  );
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    const key = argv[i].slice(2);
    const next = argv[i + 1];
    out[key] = !next || next.startsWith("--") ? true : next;
  }
  return out;
}

function readCensus(dir) {
  const rows = [];
  for (const file of readdirSync(dir).filter((name) => name.endsWith(".json")).sort()) {
    const data = JSON.parse(readFileSync(join(dir, file), "utf8"));
    rows.push({
      id: data.id || file.replace(/\.json$/, ""),
      label: data.label || data.id,
      pages: data.pages ?? 0,
      sheets: data.totals?.sheets ?? 0,
      entities: data.totals?.entities ?? 0,
      required: data.totals?.required ?? 0,
      embedded: data.totals?.embedded ?? 0,
      excluded: data.totals?.excluded ?? 0,
    });
  }
  return rows;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const model = String(args.model || "gpt-image-2.5-sunburst");
  const perSheet = blendedCostPerSheet(model);

  console.log(`tarifa medida - ${model}`);
  for (const { layer, share, size, refs } of LAYER_MIX) {
    console.log(
      `  ${layer.padEnd(10)} ${String(Math.round(share * 100) + "%").padStart(4)} ${size.padEnd(9)} refs:${refs}  $${costPerAttempt({ model, size, refs }).toFixed(4)}`,
    );
  }
  console.log(`  mezcla: $${perSheet.toFixed(4)} por intento`);
  for (const [name, factor] of Object.entries(ATTEMPTS)) {
    console.log(`  ${name.padEnd(10)} x${factor} intentos -> $${(perSheet * factor).toFixed(4)} por ficha entregada`);
  }
  console.log();

  if (args.censo) {
    const dir = resolve(String(args.censo));
    if (!existsSync(dir)) throw new Error(`no existe el censo: ${dir}`);
    const rows = readCensus(dir);
    let sheets = 0;
    let pages = 0;
    console.log("corpus".padEnd(30), "pag".padStart(4), "ent".padStart(5), "fichas".padStart(7), "f/pag".padStart(6), "USD".padStart(8));
    for (const row of rows.sort((a, b) => b.sheets - a.sheets)) {
      sheets += row.sheets;
      pages += row.pages;
      const usd = row.sheets * perSheet * ATTEMPTS.central;
      console.log(
        row.id.padEnd(30),
        String(row.pages).padStart(4),
        String(row.entities).padStart(5),
        String(row.sheets).padStart(7),
        (row.pages ? (row.sheets / row.pages).toFixed(1) : "-").padStart(6),
        usd.toFixed(2).padStart(8),
      );
    }
    console.log("-".repeat(65));
    console.log(
      "TOTAL".padEnd(30),
      String(pages).padStart(4),
      "".padStart(5),
      String(sheets).padStart(7),
      (pages ? (sheets / pages).toFixed(1) : "-").padStart(6),
      (sheets * perSheet * ATTEMPTS.central).toFixed(2).padStart(8),
    );
    console.log(
      `  rango: $${(sheets * perSheet * ATTEMPTS.optimista).toFixed(2)} (optimista) a $${(sheets * perSheet * ATTEMPTS.pesimista).toFixed(2)} (pesimista)`,
    );
    console.log(`  corpus censado: ${rows.length} de los 34 pendientes`);
    return;
  }

  const sheets = Number(args.fichas || 0);
  if (!sheets) {
    console.log("pasa --fichas <n> o --censo <dir> para el total");
    return;
  }
  console.log(`${sheets} fichas:`);
  for (const [name, factor] of Object.entries(ATTEMPTS)) {
    console.log(`  ${name.padEnd(10)} $${(sheets * perSheet * factor).toFixed(2)}`);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
