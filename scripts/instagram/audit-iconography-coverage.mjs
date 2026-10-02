import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import {
  INSTAGRAM_GRAPHIC_COVERAGE_ROUTES,
  INSTAGRAM_ICONOGRAPHY,
} from "../../src/lib/instagram-iconography.js";

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function usageSummary(ids) {
  const unique = new Set(ids);
  return {
    total: unique.size,
    by_kind: Object.fromEntries(
      ["glyph", "divider", "corner", "frame", "ornament", "pattern"].map(
        (kind) => [
          kind,
          INSTAGRAM_ICONOGRAPHY.filter(
            (asset) => asset.kind === kind && unique.has(asset.id)
          ).length,
        ]
      )
    ),
  };
}

async function readPublishedUsage(historyPath) {
  const contents = await fs.readFile(historyPath, "utf8").catch(() => "");
  return contents
    .split("\n")
    .filter(Boolean)
    .flatMap((line) => JSON.parse(line).graphic_ids || []);
}

async function readRenderedUsage(artifactsRoot) {
  const entries = await fs
    .readdir(artifactsRoot, { recursive: true })
    .catch(() => []);
  const compositions = entries.filter((entry) =>
    /(?:^|\/)composition-v[0-9]+\.json$/.test(entry)
  );
  const documents = await Promise.all(
    compositions.map(async (entry) => {
      const edition = path.basename(entry, ".json").replace("composition-", "");
      const contactSheet = path.join(
        artifactsRoot,
        path.dirname(entry),
        `editorial-${edition}`,
        "contact-sheet.png"
      );
      const wasRendered = await fs
        .access(contactSheet)
        .then(() => true)
        .catch(() => false);
      if (!wasRendered) return null;
      return fs
        .readFile(path.join(artifactsRoot, entry), "utf8")
        .then(JSON.parse)
        .catch(() => null);
    })
  );
  return documents
    .filter(Boolean)
    .flatMap((document) => document.slides || [])
    .flatMap((slide) => [
      slide.graphic_motif?.id,
      slide.graphic_decoration?.id,
    ])
    .filter(Boolean);
}

const historyPath = path.resolve(
  argument(
    "history",
    path.join(process.cwd(), "content/instagram/template-history.jsonl")
  )
);
const artifactsRoot = path.resolve(
  argument("artifacts", path.join(process.cwd(), "artifacts/instagram"))
);
const automaticIds = new Set([
  ...INSTAGRAM_GRAPHIC_COVERAGE_ROUTES.primary,
  ...INSTAGRAM_GRAPHIC_COVERAGE_ROUTES.support,
]);
const [publishedIds, renderedIds] = await Promise.all([
  readPublishedUsage(historyPath),
  readRenderedUsage(artifactsRoot),
]);
const rendered = new Set(renderedIds);
const published = new Set(publishedIds);
const report = {
  status:
    automaticIds.size === INSTAGRAM_ICONOGRAPHY.length
      ? "automatic-coverage-complete"
      : "automatic-coverage-incomplete",
  inventory: usageSummary(INSTAGRAM_ICONOGRAPHY.map(({ id }) => id)),
  automatic_routes: usageSummary([...automaticIds]),
  rendered_usage: usageSummary([...rendered]),
  published_usage: usageSummary([...published]),
  rendered_pending: INSTAGRAM_ICONOGRAPHY.filter(
    ({ id }) => !rendered.has(id)
  ).map(({ id }) => id),
  published_pending: INSTAGRAM_ICONOGRAPHY.filter(
    ({ id }) => !published.has(id)
  ).map(({ id }) => id),
};

console.log(JSON.stringify(report, null, 2));
if (report.status !== "automatic-coverage-complete") process.exit(1);
