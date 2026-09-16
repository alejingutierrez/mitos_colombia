#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { validateBibleV3 } from "./biblia-v3.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((entries, arg, index, all) => {
    if (arg.startsWith("--")) entries.push([arg.slice(2), all[index + 1]?.startsWith("--") ? true : all[index + 1]]);
    return entries;
  }, []),
);

const stage = String(args.stage || "inventory");
const planPath = resolve(String(args.plan || "content/mitos-visuales/wayuu.v3.json"));
if (!existsSync(planPath)) throw new Error(`no existe el plan: ${planPath}`);

const plan = JSON.parse(readFileSync(planPath, "utf8"));
const report = validateBibleV3(plan, { stage });

if (args.json) {
  console.log(JSON.stringify({ plan: planPath, ...report }, null, 2));
} else {
  console.log(`Biblia visual V3 · ${stage} · ${report.ok ? "PASS" : "BLOCKED"}`);
  console.log(`plan: ${planPath}`);
  console.log(`corpus: ${report.summary.myths || 0} mitos · ${report.summary.entities || 0} entidades · ${report.summary.required_entities || 0} requieren modelo`);
  console.log(`cobertura: ${report.summary.modeled_entities || 0}/${report.summary.required_entities || 0} entidades · ${report.summary.required_assets || 0} activos requeridos`);
  for (const [kind, count] of Object.entries(report.summary.by_kind || {})) console.log(`  ${kind}: ${count}`);
  for (const warning of report.warnings) console.log(`WARN ${warning.path}: ${warning.message}`);
  for (const error of report.errors) console.error(`ERROR ${error.path}: ${error.message}`);
}

if (!report.ok) process.exitCode = 1;
