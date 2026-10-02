import { chmod, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";

function arg(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const sourcePath = path.resolve(
  arg("--from", path.join(process.cwd(), "../../oda_storefront/.env"))
);
const targetPath = path.resolve(arg("--to", path.join(process.cwd(), ".env")));
const force = process.argv.includes("--force");
const profileOnly = process.argv.includes("--profile-only");
const profile = arg("--profile", "");
const model = arg("--model", "");

const sourceText = await readFile(sourcePath, "utf8");
const rawTargetText = await readFile(targetPath, "utf8").catch(() => "");
const removedKeys = [];
const targetText = profileOnly
  ? rawTargetText
      .split(/\r?\n/)
      .filter((line) => {
        const match = line.match(
          /^(INSTAGRAM_BEDROCK_(?:ACCESS_KEY_ID|SECRET_ACCESS_KEY|SESSION_TOKEN))=/
        );
        if (match) removedKeys.push(match[1]);
        return !match;
      })
      .join("\n")
  : rawTargetText;
const source = dotenv.parse(sourceText);
const target = dotenv.parse(targetText);

const mappings = [
  {
    target: "INSTAGRAM_BEDROCK_ACCESS_KEY_ID",
    sources: ["BEDROCK_AWS_ACCESS_KEY_ID", "AWS_ACCESS_KEY_ID"],
  },
  {
    target: "INSTAGRAM_BEDROCK_SECRET_ACCESS_KEY",
    sources: ["BEDROCK_AWS_SECRET_ACCESS_KEY", "AWS_SECRET_ACCESS_KEY"],
  },
  {
    target: "INSTAGRAM_BEDROCK_SESSION_TOKEN",
    sources: ["AWS_SESSION_TOKEN"],
  },
  {
    target: "INSTAGRAM_BEDROCK_REGION",
    sources: ["BEDROCK_REGION", "AWS_REGION", "AWS_DEFAULT_REGION"],
  },
  {
    target: "INSTAGRAM_BEDROCK_MODEL_ID",
    sources: ["BEDROCK_INFERENCE_PROFILE_ID", "BEDROCK_MODEL_ID"],
  },
];

const additions = [];
if (profile && (force || !target.INSTAGRAM_BEDROCK_PROFILE)) {
  additions.push(`INSTAGRAM_BEDROCK_PROFILE=${JSON.stringify(profile)}`);
}
if (model) {
  additions.push(`INSTAGRAM_BEDROCK_MODEL_ID=${JSON.stringify(model)}`);
}
for (const mapping of mappings) {
  if (
    profileOnly &&
    [
      "INSTAGRAM_BEDROCK_ACCESS_KEY_ID",
      "INSTAGRAM_BEDROCK_SECRET_ACCESS_KEY",
      "INSTAGRAM_BEDROCK_SESSION_TOKEN",
    ].includes(mapping.target)
  ) {
    continue;
  }
  if (!force && target[mapping.target]) continue;
  const value = mapping.sources
    .map((key) => source[key])
    .find((candidate) => String(candidate || "").trim());
  if (!value) continue;
  additions.push(`${mapping.target}=${JSON.stringify(value)}`);
}

if (!additions.length && !removedKeys.length) {
  console.log(
    JSON.stringify({
      status: "unchanged",
      target: targetPath,
      copied_keys: [],
      removed_keys: [],
    })
  );
  process.exit(0);
}

let nextText = targetText.replace(/\s*$/, "");
if (nextText) nextText += "\n";
nextText += `\n# Instagram carousel planner (copied locally; never commit)\n${additions.join(
  "\n"
)}\n`;
await writeFile(targetPath, nextText, { mode: 0o600 });
await chmod(targetPath, 0o600);

console.log(
  JSON.stringify({
    status: "updated",
    target: targetPath,
    copied_keys: additions.map((line) => line.split("=")[0]),
    removed_keys: [...new Set(removedKeys)],
  })
);
