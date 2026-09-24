// Export all five versions against the real ten-slide story, with the same QA as production.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { loadStoryCatalog, readJson, mapLimit } from './lib/story-catalog.mjs';
import { prepareStoryEdition, renderPreparedStory } from './lib/story-renderer.mjs';
import { STORY_TYPES, STORY_VARIANTS, slideType } from '../../src/lib/instagram-story-variants.js';
const community = 'muiscas', slug = 'bachue';
const catalog = await loadStoryCatalog({ community, slug });
const original = await readJson(`content/instagram/stories/${community}/${slug}.json`);
const results = await mapLimit([1, 2, 3, 4, 5], 2, async version => {
  const story = structuredClone(original);
  story.slides.forEach((slide, index) => {
    slide.layout = `${slideType(slide, index)}-${version}`;
    if (STORY_VARIANTS[slide.layout].image === false) slide.asset_id = null;
  });
  const prepared = await prepareStoryEdition(story, catalog);
  try {
    const result = await renderPreparedStory(prepared);
    console.log(JSON.stringify({ version, edition: prepared.edition, ok:true }));
    return { version, edition: prepared.edition, output:result.output, story };
  } catch(error) {
    console.log(JSON.stringify({ version, edition:prepared.edition, error:error.message }));
    return { version, edition:prepared.edition, error:error.message };
  }
});
if (results.some(r=>r.error)) process.exitCode = 1;
else {
  const output = path.join(process.cwd(), 'output/instagram/variants', `atlas-${results[0].edition}`);
  await fs.mkdir(output, {recursive:true});
  const rows = [];
  for (const [type, family] of Object.entries(STORY_TYPES)) {
    const index = original.slides.findIndex((slide,i)=>slideType(slide,i)===type);
    const layers = await Promise.all(results.map(async r => ({input: await sharp(path.join(r.output, `${String(index+1).padStart(2,'0')}-${original.slides[index].role}.png`)).resize(260,325).toBuffer(),left:20+(r.version-1)*280,top:75})));
    const labels = results.map(r=>`<text x="${20+(r.version-1)*280}" y="428" font-size="16">${r.version}. ${STORY_VARIANTS[`${type}-${r.version}`].label}</text>`).join('');
    const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="1420" height="455"><g fill="#173c2f" font-family="Arial"><text x="20" y="40" font-size="30">${family.label}</text>${labels}</g></svg>`;
    const file=path.join(output,`${type}.png`);
    await sharp({create:{width:1420,height:455,channels:3,background:'#e8ece2'}}).composite([...layers,{input:Buffer.from(overlay),left:0,top:0}]).png().toFile(file);
    rows.push(file);
  }
  await sharp({create:{width:1420,height:rows.length*455,channels:3,background:'#e8ece2'}}).composite(rows.map((input,i)=>({input,left:0,top:i*455}))).png().toFile(path.join(output,'25-versiones.png'));
  await fs.writeFile(path.join(output,'manifest.json'),JSON.stringify(results.map(({story,...r})=>r),null,2));
  console.log(JSON.stringify({atlas:output,versions:25,slidesChecked:50}));
}
