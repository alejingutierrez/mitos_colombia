import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import dotenv from "dotenv";
import pg from "pg";

import {
  APPROVED_CONSERVED_VERTICAL_POLICY,
  buildMuiscaImageExecutionPlan,
  CONSERVED_VERTICAL_POLICIES,
} from "../../editorial/muisca/image-execution-plan.mjs";

const { Client } = pg;
const args = process.argv.slice(2);
const apply = args.includes("--apply");
const confirmation = args
  .find((arg) => arg.startsWith("--confirm="))
  ?.slice("--confirm=".length);
const confirmationPhrase = "34-images-keep-20-at-2x3";
const styleProfile = "studioPaperMaquette";
const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

dotenv.config({ path: path.join(rootDir, ".env"), quiet: true });

const connectionString =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL ||
  process.env.DATABASE_URL;

function assertPlan(plan) {
  if (
    APPROVED_CONSERVED_VERTICAL_POLICY !==
    CONSERVED_VERTICAL_POLICIES.KEEP_2_3
  ) {
    throw new Error(
      "La política aprobada debe conservar literalmente las 20 verticales 2:3.",
    );
  }
  if (
    plan.summary.totalGenerations !== 34 ||
    plan.summary.horizontalGenerations !== 13 ||
    plan.summary.verticalGenerations !== 21 ||
    plan.summary.keptAtTwoByThree !== 20 ||
    plan.summary.unresolved !== 0
  ) {
    throw new Error(
      `El plan no coincide con la aprobación: ${JSON.stringify(plan.summary)}`,
    );
  }
}

async function loadInventory(client, plan) {
  const result = await client.query(
    `
    SELECT m.id, m.slug, m.title,
           m.image_url AS horizontal_url,
           e.image_prompt_horizontal,
           e.image_prompt_vertical,
           vi.image_url AS vertical_url
    FROM myths m
    LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
    LEFT JOIN vertical_images vi
      ON vi.entity_type = 'myth' AND vi.entity_id = m.id
    WHERE m.slug = ANY($1::text[])
    ORDER BY m.slug
    `,
    [plan.operations.map((operation) => operation.slug)],
  );
  const bySlug = new Map(result.rows.map((row) => [row.slug, row]));
  const missing = plan.operations
    .map((operation) => operation.slug)
    .filter((slug) => !bySlug.has(slug));
  if (missing.length) {
    throw new Error(`Mitos ausentes en Neon: ${missing.join(", ")}`);
  }

  for (const slug of new Set(plan.operations.map((operation) => operation.slug))) {
    const row = bySlug.get(slug);
    if (
      !row.horizontal_url ||
      !row.vertical_url ||
      !row.image_prompt_horizontal ||
      !row.image_prompt_vertical
    ) {
      throw new Error(`${slug}: inventario visual o prompts incompletos.`);
    }
    if (row.image_prompt_horizontal === row.image_prompt_vertical) {
      throw new Error(`${slug}: la principal y la segunda escena se repiten.`);
    }
  }

  return bySlug;
}

async function loadFreshInventory(plan) {
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    return await loadInventory(client, plan);
  } finally {
    await client.end();
  }
}

function operationKey(operation) {
  return `${operation.slug}:${operation.orientation.toLowerCase()}`;
}

function buildOperation(plan, inventory) {
  return plan.operations
    .filter((operation) => operation.action === "GENERATE")
    .map((operation) => {
      const row = inventory.get(operation.slug);
      return {
        ...operation,
        key: operationKey(operation),
        id: row.id,
        title: row.title,
        target:
          operation.orientation === "HORIZONTAL" ? "myths" : "vertical",
        beforeUrl:
          operation.orientation === "HORIZONTAL"
            ? row.horizontal_url
            : row.vertical_url,
      };
    });
}

function runCraft(operation, dryRun) {
  const commandArgs = [
    path.join(rootDir, "scripts/regenerate-craft-images.mjs"),
    "--target",
    operation.target,
    "--ids",
    String(operation.id),
    "--force",
    "--style-profile",
    styleProfile,
  ];
  if (dryRun) commandArgs.push("--dry-run");

  return new Promise((resolve) => {
    const child = spawn(process.execPath, commandArgs, {
      cwd: rootDir,
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("close", (code) => {
      resolve({ code, stdout, stderr });
    });
  });
}

function comparableUrls(inventory, slugs) {
  return Object.fromEntries(
    slugs.map((slug) => {
      const row = inventory.get(slug);
      return [
        slug,
        {
          horizontal: row.horizontal_url,
          vertical: row.vertical_url,
        },
      ];
    }),
  );
}

async function run() {
  if (!connectionString) {
    throw new Error("No se encontró una conexión Postgres.");
  }
  if (apply && confirmation !== confirmationPhrase) {
    throw new Error(
      `La ejecución real exige --confirm=${confirmationPhrase}.`,
    );
  }

  const plan = buildMuiscaImageExecutionPlan();
  assertPlan(plan);

  const runId = new Date().toISOString().replace(/[:.]/g, "-");
  const outputDir = path.join(
    rootDir,
    "artifacts/approved-muisca-image-regeneration",
  );
  const reportPath = path.join(
    outputDir,
    `${runId}-${apply ? "apply" : "dry-run"}.json`,
  );
  await fs.mkdir(outputDir, { recursive: true });

  const beforeInventory = await loadFreshInventory(plan);
  const operations = buildOperation(plan, beforeInventory);
  if (operations.length !== 34) {
    throw new Error(
      `Se resolvieron ${operations.length} operaciones; se esperaban 34.`,
    );
  }

  const report = {
    mode: apply ? "apply" : "dry-run",
    styleProfile,
    approvedPolicy: APPROVED_CONSERVED_VERTICAL_POLICY,
    summary: plan.summary,
    protectedBefore: comparableUrls(
      beforeInventory,
      plan.conservedSlugs,
    ),
    operations: operations.map((operation) => ({
      ...operation,
      status: "PENDING",
    })),
    failures: [],
  };
  await fs.writeFile(
    reportPath,
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8",
  );

  console.log(
    `[approved-muisca] mode=${report.mode} total=34 horizontal=13 vertical=21 protected2x3=20`,
  );
  console.log(`[approved-muisca] report=${reportPath}`);

  for (let index = 0; index < operations.length; index += 1) {
    const operation = operations[index];
    console.log(
      `[approved-muisca] ${index + 1}/34 ${operation.key}`,
    );
    const result = await runCraft(operation, !apply);
    const reportOperation = report.operations[index];
    reportOperation.status = result.code === 0 ? "SUCCESS" : "FAILED";
    reportOperation.stdout = result.stdout.trim();
    reportOperation.stderr = result.stderr.trim();
    if (result.code !== 0) {
      report.failures.push({
        key: operation.key,
        exitCode: result.code,
        error: result.stderr.trim() || result.stdout.trim(),
      });
      console.error(
        `[approved-muisca] FAILED ${operation.key}: ${
          result.stderr.trim() || result.stdout.trim()
        }`,
      );
    }
    await fs.writeFile(
      reportPath,
      `${JSON.stringify(report, null, 2)}\n`,
      "utf8",
    );
  }

  const afterInventory = await loadFreshInventory(plan);
  const protectedAfter = comparableUrls(
    afterInventory,
    plan.conservedSlugs,
  );
  report.protectedAfter = protectedAfter;
  report.protectedUnchanged =
    JSON.stringify(report.protectedBefore) ===
    JSON.stringify(protectedAfter);
  if (!report.protectedUnchanged) {
    throw new Error(
      "Cambió una de las 20 parejas protegidas por CONSERVAR.",
    );
  }

  if (apply) {
    report.changed = operations.map((operation) => {
      const row = afterInventory.get(operation.slug);
      const afterUrl =
        operation.orientation === "HORIZONTAL"
          ? row.horizontal_url
          : row.vertical_url;
      return {
        key: operation.key,
        beforeUrl: operation.beforeUrl,
        afterUrl,
        changed: operation.beforeUrl !== afterUrl,
      };
    });
    const unchanged = report.changed.filter((item) => !item.changed);
    if (unchanged.length) {
      report.failures.push(
        ...unchanged.map((item) => ({
          key: item.key,
          error: "La URL no cambió tras la generación.",
        })),
      );
    }
  }

  report.completed = report.operations.filter(
    (operation) => operation.status === "SUCCESS",
  ).length;
  report.finishedAt = new Date().toISOString();
  await fs.writeFile(
    reportPath,
    `${JSON.stringify(report, null, 2)}\n`,
    "utf8",
  );

  console.log(
    `[approved-muisca] completed=${report.completed}/34 failures=${report.failures.length} protectedUnchanged=${report.protectedUnchanged}`,
  );
  if (report.failures.length) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(`[approved-muisca] error: ${error.message}`);
  process.exitCode = 1;
});
