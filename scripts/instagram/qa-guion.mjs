/**
 * QA del guion v10 · verifica las 7 reglas sobre un plan ya escrito.
 *
 * Uso: node scripts/instagram/qa-guion.mjs --plan artifacts/instagram/<slug>/plan-current.json
 * Sale con código 1 si alguna regla dura (1-4, 6) se incumple.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { validateGuionV10 } from "./lib/guion-v10.mjs";

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const planPath = argument("plan");
if (!planPath) {
  throw new Error("Uso: node scripts/instagram/qa-guion.mjs --plan <ruta al plan.json>");
}

const payload = JSON.parse(await fs.readFile(path.resolve(planPath), "utf8"));
const plan = payload.plan || payload;
const report = validateGuionV10(plan);

console.log(`guion v10 · ${plan.slides?.length ?? 0} láminas`);
if (report.errors.length) {
  console.log(`INCUMPLIMIENTOS (${report.errors.length}):`);
  for (const error of report.errors) console.log(`  ✗ ${error}`);
} else {
  console.log("reglas 1-4 y 6: cumplidas");
}
if (report.warnings.length) {
  console.log(`avisos (${report.warnings.length}):`);
  for (const warning of report.warnings) console.log(`  ~ ${warning}`);
}
process.exit(report.ok ? 0 : 1);
