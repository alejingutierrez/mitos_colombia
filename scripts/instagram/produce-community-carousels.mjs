import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { promisify } from "node:util";
import dotenv from "dotenv";
import { loadCommunityMythsForInstagram } from "./lib/myth-source.mjs";

const run = promisify(execFile);

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
  override: true,
});

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function execute(script, args) {
  return run(process.execPath, [script, ...args], {
    cwd: process.cwd(),
    env: process.env,
    maxBuffer: 1024 * 1024 * 12,
  });
}

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, "utf8"));
}

function historyEntry(composition) {
  return {
    composed_at: composition.composed_at,
    myth_slug: composition.myth?.slug || null,
    seed: composition.seed,
    template_ids: composition.slides.map((slide) => slide.template_id),
    graphic_ids: composition.slides
      .flatMap((slide) => [
        slide.graphic_motif?.id,
        slide.graphic_decoration?.id,
      ])
      .filter(Boolean),
    draft_batch_only: true,
  };
}

const community = argument("community", "Muiscas");
const edition = argument("edition", "v1");
const provider = argument("provider", "local");
const baseUrl = argument("base-url", "http://localhost:3003");
const requestedSlugs = new Set(
  argument("slugs")
    .split(",")
    .map((slug) => slug.trim())
    .filter(Boolean)
);
const artifactRoot = path.resolve(
  argument("root", path.join(process.cwd(), "artifacts/instagram"))
);
const refreshSource = process.argv.includes("--refresh-source");
const resume = process.argv.includes("--resume");
const introBriefPath = path.resolve(
  argument(
    "intro-brief",
    path.join(
      process.cwd(),
      "content/instagram/community-briefs",
      `${slugify(community)}.json`
    )
  )
);
const includeIntroduction =
  !process.argv.includes("--no-intro") &&
  (await fs.access(introBriefPath).then(() => true).catch(() => false));

if (!/^v[0-9]+$/.test(edition)) {
  throw new Error(`Edición inválida: ${edition}.`);
}
if (!new Set(["local", "bedrock"]).has(provider)) {
  throw new Error(`Proveedor inválido: ${provider}.`);
}

const communitySlug = slugify(community);
const reportPath = path.join(
  artifactRoot,
  `${communitySlug}-instagram-${edition}-production-report.json`
);
const draftHistoryPath = path.join(
  artifactRoot,
  `${communitySlug}-instagram-${edition}-draft-history.jsonl`
);
const snapshotPath = path.resolve(
  argument(
    "snapshot",
    path.join(
      artifactRoot,
      `${communitySlug}-instagram-${edition}-source-snapshot.json`
    )
  )
);
await fs.mkdir(path.dirname(snapshotPath), { recursive: true });
let snapshot;
try {
  snapshot = refreshSource ? null : await readJson(snapshotPath);
} catch {
  snapshot = null;
}
if (!snapshot) {
  let myths;
  let sourceError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      myths = await loadCommunityMythsForInstagram(community);
      break;
    } catch (error) {
      sourceError = error;
      if (attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
      }
    }
  }
  if (!myths) throw sourceError;
  snapshot = {
    schema_version: 1,
    captured_at: new Date().toISOString(),
    community,
    total: myths.length,
    myths,
  };
  await fs.writeFile(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`);
}
const universe = (snapshot.myths || [])
  .filter(
    (myth) =>
      String(myth.community || "").toLocaleLowerCase("es-CO") ===
      community.toLocaleLowerCase("es-CO")
  )
  .filter((myth) => !requestedSlugs.size || requestedSlugs.has(myth.slug))
  .sort((left, right) => left.slug.localeCompare(right.slug));

if (!universe.length) {
  throw new Error(`No se encontraron mitos para ${community}.`);
}
if (requestedSlugs.size && universe.length !== requestedSlugs.size) {
  const found = new Set(universe.map((myth) => myth.slug));
  const missing = [...requestedSlugs].filter((slug) => !found.has(slug));
  throw new Error(`Slugs fuera del universo: ${missing.join(", ")}.`);
}

await fs.mkdir(artifactRoot, { recursive: true });
let previousReport = null;
if (resume) {
  try {
    previousReport = await readJson(reportPath);
  } catch {
    previousReport = null;
  }
}
if (!resume || !previousReport) {
  await fs.writeFile(draftHistoryPath, "");
}

const passedBySlug = new Map(
  (previousReport?.myths || [])
    .filter((item) => item.status === "qa_passed")
    .map((item) => [item.slug, item])
);
const carriedPassed = universe.filter((myth) =>
  passedBySlug.has(myth.slug)
).length;

const report = {
  schema_version: 1,
  started_at: new Date().toISOString(),
  completed_at: null,
  community,
  edition,
  provider,
  universe_total: universe.length,
  publishable_posts_total: universe.length + (includeIntroduction ? 1 : 0),
  introduction: includeIntroduction
    ? {
        slug: `${communitySlug}-introduccion`,
        status: "pending",
        plan: path.relative(
          process.cwd(),
          path.join(
            artifactRoot,
            `${communitySlug}-introduccion`,
            `plan-${edition}.json`
          )
        ),
        composition: path.relative(
          process.cwd(),
          path.join(
            artifactRoot,
            `${communitySlug}-introduccion`,
            `composition-${edition}.json`
          )
        ),
        output: path.relative(
          process.cwd(),
          path.join(
            artifactRoot,
            `${communitySlug}-introduccion`,
            `editorial-${edition}`
          )
        ),
        error: null,
      }
    : null,
  policy: {
    approved_history_mutated: false,
    draft_history: path.relative(process.cwd(), draftHistoryPath),
    source_snapshot: path.relative(process.cwd(), snapshotPath),
    source_captured_at: snapshot.captured_at || null,
    final_cta_required: true,
    third_image: "optional_and_never_synthesized_from_another_myth",
  },
  totals: {
    planned: carriedPassed,
    needs_third_image: 0,
    composed: carriedPassed,
    rendered: carriedPassed,
    qa_passed: carriedPassed,
    failed: 0,
  },
  myths: [],
};

async function persist() {
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
}

await persist();

if (includeIntroduction) {
  const introDirectory = path.join(
    artifactRoot,
    `${communitySlug}-introduccion`
  );
  const introPlanPath = path.join(introDirectory, `plan-${edition}.json`);
  const introCompositionPath = path.join(
    introDirectory,
    `composition-${edition}.json`
  );
  const introOutputDirectory = path.join(
    introDirectory,
    `editorial-${edition}`
  );
  const carriedIntroduction =
    resume && previousReport?.introduction?.status === "qa_passed";
  if (carriedIntroduction) {
    report.introduction = previousReport.introduction;
  } else {
    report.introduction.status = "planning";
    await persist();
    try {
      await execute("scripts/instagram/plan-community-introduction.mjs", [
        "--edition",
        edition,
        "--base-url",
        baseUrl,
        "--brief",
        introBriefPath,
        "--snapshot",
        snapshotPath,
        "--out",
        introPlanPath,
      ]);
      await execute("scripts/instagram/prepare-editorial-assets.mjs", [
        "--plan",
        introPlanPath,
      ]);
      await execute("scripts/instagram/compose-editorial-carousel.mjs", [
        "--plan",
        introPlanPath,
        "--assets",
        path.join(introDirectory, "media.json"),
        "--output",
        introCompositionPath,
        "--history",
        draftHistoryPath,
        "--seed",
        `${communitySlug}-introduccion-${edition}-1`,
      ]);
      await execute("scripts/instagram/render-editorial-composition.mjs", [
        "--slug",
        `${communitySlug}-introduccion`,
        "--edition",
        edition,
        "--composition",
        introCompositionPath,
        "--output",
        introOutputDirectory,
        "--base-url",
        baseUrl,
      ]);
      await execute("scripts/instagram/qa-editorial-carousel.mjs", [
        "--plan",
        introPlanPath,
        "--composition",
        introCompositionPath,
        "--slides",
        introOutputDirectory,
      ]);
      const composition = await readJson(introCompositionPath);
      await fs.appendFile(
        draftHistoryPath,
        `${JSON.stringify(historyEntry(composition))}\n`
      );
      report.introduction.status = "qa_passed";
    } catch (error) {
      report.introduction.status = "failed";
      report.introduction.error =
        error.stderr?.trim() || error.stdout?.trim() || error.message;
    }
    await persist();
  }
}

for (const [index, myth] of universe.entries()) {
  const mythDirectory = path.join(artifactRoot, myth.slug);
  const planPath = path.join(mythDirectory, `plan-${edition}.json`);
  const compositionPath = path.join(
    mythDirectory,
    `composition-${edition}.json`
  );
  const outputDirectory = path.join(mythDirectory, `editorial-${edition}`);
  const carriedItem = passedBySlug.get(myth.slug);
  const item = carriedItem
    ? { ...carriedItem, index: index + 1 }
    : {
        index: index + 1,
        slug: myth.slug,
        title: myth.title,
        status: "planning",
        plan: path.relative(process.cwd(), planPath),
        composition: path.relative(process.cwd(), compositionPath),
        output: path.relative(process.cwd(), outputDirectory),
        sequence_count: null,
        generated_third_needed: null,
        error: null,
      };
  report.myths.push(item);
  if (carriedItem) {
    console.log(
      JSON.stringify({
        progress: `${index + 1}/${universe.length}`,
        slug: myth.slug,
        status: "qa_passed_carried",
      })
    );
    continue;
  }
  await persist();
  console.log(
    JSON.stringify({
      progress: `${index + 1}/${universe.length}`,
      slug: myth.slug,
      status: item.status,
    })
  );

  try {
    await fs.mkdir(mythDirectory, { recursive: true });
    await execute("scripts/instagram/plan-carousel.mjs", [
      "--slug",
      myth.slug,
      "--out",
      planPath,
      "--provider",
      provider,
      "--snapshot",
      snapshotPath,
      "--feed-index",
      String(index + 1),
    ]);
    const planDocument = await readJson(planPath);
    item.sequence_count = planDocument.plan?.sequence_count || null;
    item.generated_third_needed = Boolean(
      planDocument.plan?.generated_image?.needed
    );
    report.totals.planned += 1;

    await execute("scripts/instagram/prepare-editorial-assets.mjs", [
      "--plan",
      planPath,
    ]);
    if (item.generated_third_needed) {
      item.status = "needs_third_image";
      report.totals.needs_third_image += 1;
      await persist();
      continue;
    }

    await execute("scripts/instagram/compose-editorial-carousel.mjs", [
      "--plan",
      planPath,
      "--assets",
      path.join(mythDirectory, "media.json"),
      "--output",
      compositionPath,
      "--history",
      draftHistoryPath,
      "--seed",
      `${myth.slug}-${edition}-1`,
    ]);
    report.totals.composed += 1;

    await execute("scripts/instagram/render-editorial-composition.mjs", [
      "--slug",
      myth.slug,
      "--edition",
      edition,
      "--composition",
      compositionPath,
      "--output",
      outputDirectory,
      "--base-url",
      baseUrl,
    ]);
    report.totals.rendered += 1;

    await execute("scripts/instagram/qa-editorial-carousel.mjs", [
      "--plan",
      planPath,
      "--composition",
      compositionPath,
      "--slides",
      outputDirectory,
    ]);
    const composition = await readJson(compositionPath);
    await fs.appendFile(
      draftHistoryPath,
      `${JSON.stringify(historyEntry(composition))}\n`
    );
    item.status = "qa_passed";
    report.totals.qa_passed += 1;
  } catch (error) {
    item.status = "failed";
    item.error = error.stderr?.trim() || error.stdout?.trim() || error.message;
    report.totals.failed += 1;
  }
  await persist();
}

report.completed_at = new Date().toISOString();
await persist();
console.log(JSON.stringify({ report: reportPath, ...report.totals }, null, 2));
if (
  report.introduction?.status === "failed" ||
  report.totals.failed ||
  report.totals.needs_third_image
) {
  process.exit(1);
}
