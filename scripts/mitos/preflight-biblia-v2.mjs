#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { validateBibleV2 } from "./biblia-v2.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((entries, arg, index, all) => {
    if (arg.startsWith("--")) entries.push([arg.slice(2), all[index + 1]?.startsWith("--") ? true : all[index + 1]]);
    return entries;
  }, [])
);

const community = String(args.comunidad || args.community || "").trim();
const stage = String(args.stage || "research");
const planPath = resolve(
  String(args.plan || (community ? `content/mitos-visuales/${community}.json` : ""))
);

if (!community && !args.plan) throw new Error("indica --plan <archivo> o --comunidad <slug>");
if (!existsSync(planPath)) throw new Error(`no existe el plan: ${planPath}`);

const plan = JSON.parse(readFileSync(planPath, "utf8"));
const report = validateBibleV2(plan, { stage });

if (args.json) {
  console.log(JSON.stringify({ plan: planPath, ...report }, null, 2));
} else {
  console.log(`Biblia visual V2 · ${stage} · ${report.ok ? "PASS" : "BLOCKED"}`);
  console.log(`plan: ${planPath}`);
  console.log(`corpus: ${report.summary.myths} mitos · ${report.summary.sources} fuentes · ${report.summary.models} modelos`);
  for (const warning of report.warnings) console.log(`WARN ${warning.path}: ${warning.message}`);
  for (const error of report.errors) console.error(`ERROR ${error.path}: ${error.message}`);
}

if (!report.ok) process.exitCode = 1;

