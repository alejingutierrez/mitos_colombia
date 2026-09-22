import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";
import { communitySlugs, loadStoryCatalog, mapLimit, readJson } from "./lib/story-catalog.mjs";
import { planStoryWithBedrock } from "./lib/story-planner.mjs";
import { prepareStoryEdition, renderPreparedStory } from "./lib/story-renderer.mjs";

dotenv.config({ path: ".env", quiet: true });
dotenv.config({ path: ".env.local", override: true, quiet: true });
const arg = (name, fallback) => { const index = process.argv.indexOf(`--${name}`); return index >= 0 ? process.argv[index + 1] : fallback; };
const command = process.argv[2];
const community = arg("community", "muiscas");
const slug = arg("slug");
if (command === "inventory") {
  const slugs = slug ? [slug] : await communitySlugs(community);
  const inventory = await mapLimit(slugs, 4, async (item) => {
    const c = await loadStoryCatalog({ community, slug: item });
    return { slug: item, title: c.title, source: c.source, nodes: c.acta.nudos.length, assets: c.assets.length,
      kinds: c.assets.reduce((a, v) => ({ ...a, [v.kind]: (a[v.kind] || 0) + 1 }), {}), missing: c.missing, unreadable: c.unreadable, excluded: c.assets.filter((a) => a.status === "excluded").map((a) => a.id) };
  });
  const output = arg("out", `output/instagram/${community}/inventory.json`);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, JSON.stringify({ community, myths: inventory.length, inventory }, null, 2) + "\n");
  console.log(JSON.stringify({ output, myths: inventory.length, assetReferences: inventory.reduce((sum, i) => sum + i.assets, 0) }));
} else if (["plan", "compose", "render"].includes(command)) {
  if (!slug) throw new Error("Falta --slug <mito>.");
  const catalog = await loadStoryCatalog({ community, slug });
  let story;
  if (command === "plan") {
    const result = await planStoryWithBedrock(catalog);
    story = result.story;
    console.log(JSON.stringify({ provider: "bedrock", attempts: result.attempts, qa: result.qa }));
  } else story = await readJson(arg("story", `content/instagram/stories/${community}/${slug}.json`));
  const prepared = await prepareStoryEdition(story, catalog);
  console.log(JSON.stringify({ edition: prepared.edition, source: prepared.directory, qa: prepared.composition.qa }));
  if (command === "render" || process.argv.includes("--render")) {
    console.log(JSON.stringify(await renderPreparedStory(prepared, { baseUrl: arg("base-url", "http://127.0.0.1:3111") })));
  }
} else throw new Error("Uso: npm run instagram:story -- inventory|plan|compose|render [--community muiscas] [--slug bachue] [--story archivo.json] [--render]");
