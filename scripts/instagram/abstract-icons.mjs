// Validate and archive paid generation outputs. Originals are never redrawn or flattened.
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';

const root = process.cwd();
const source = path.join(root, 'content/instagram/iconography/abstract-v4');
const generated = path.join(root, 'output/imagegen/instagram-abstract-v4');
const output = path.join(root, 'output/instagram/iconography/abstract-v4');
const brief = JSON.parse(await fs.readFile(path.join(source, 'brief.json'), 'utf8'));
const seen = new Set(), assets = [];
await fs.mkdir(output, { recursive: true });
for (const asset of brief.assets) {
  const file = path.join(generated, `${asset.id}.png`);
  const bytes = await fs.readFile(file);
  const sha256 = createHash('sha256').update(bytes).digest('hex');
  if (seen.has(sha256)) throw new Error(`Duplicate image: ${asset.id}`);
  seen.add(sha256);
  const meta = await sharp(bytes).metadata();
  if (meta.width !== 1024 || meta.height !== 1024 || !meta.hasAlpha) throw new Error(`Invalid PNG: ${asset.id}`);
  const { data } = await sharp(bytes).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let transparent = 0, minX = 1024, minY = 1024, maxX = -1, maxY = -1;
  for (let y = 0; y < 1024; y++) for (let x = 0; x < 1024; x++) {
    const alpha = data[(y * 1024 + x) * 4 + 3];
    if (alpha < 8) transparent++;
    if (alpha > 32) { minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y); }
  }
  const transparentRatio = transparent / (1024 * 1024);
  if (transparentRatio < .15 || transparentRatio > .95 || minX < 12 || minY < 12 || maxX > 1011 || maxY > 1011) throw new Error(`Transparency or safe padding failed: ${asset.id}`);
  const destination = path.join(root, asset.file);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  try { await fs.writeFile(destination, bytes, { flag: 'wx' }); }
  catch (error) { if (error.code !== 'EEXIST' || !bytes.equals(await fs.readFile(destination))) throw error; }
  assets.push({ id: asset.id, label: asset.label, group: asset.group, file: asset.file, sha256, width: meta.width, height: meta.height, transparentRatio, bounds: [minX, minY, maxX, maxY], prompt_sha256: createHash('sha256').update(asset.prompt).digest('hex') });
}
if (assets.length !== 50) throw new Error('Expected all 50 assets.');
const manifest = { schema: 'abstract-icon-manifest-v1', provider: brief.provider, model: brief.model, quality: 'medium', background: 'transparent', count: assets.length, source: 'content/instagram/iconography/abstract-v4/jobs.jsonl', assets };
await fs.writeFile(path.join(source, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
const cols = 5, cell = 220, heading = 110, rows = Math.ceil(assets.length / cols);
const layers = await Promise.all(assets.map(async (a, i) => ({ input: await sharp(path.join(root, a.file)).resize(176, 176).png().toBuffer(), left: 22 + (i % cols) * cell, top: heading + Math.floor(i / cols) * cell })));
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const labels = assets.map((a,i) => `<text x="${20 + (i % cols) * cell}" y="${heading + Math.floor(i/cols)*cell+195}" font-size="14">${String(i+1).padStart(2,'0')} · ${escape(a.label)}</text>`).join('');
const svg = `<svg width="1100" height="${heading + rows*cell}" xmlns="http://www.w3.org/2000/svg"><g fill="#173c2f" font-family="Arial"><text x="22" y="40" font-size="28">50 formas para contar · Mitos de Colombia</text><text x="22" y="74" font-size="15">Colección abstracta · GPT Image 2.5 Sunburst · PNG transparentes 1024 × 1024</text>${labels}</g></svg>`;
await sharp({ create: { width: cols*cell, height: heading+rows*cell, channels:3, background:'#f5f1e7' } }).composite([...layers,{input:Buffer.from(svg),left:0,top:0}]).png().toFile(path.join(output,'contact-sheet.png'));
await promisify(execFile)('zip',['-q','-j',path.join(output,'50-iconos-abstractos.zip'),...assets.map(a=>path.join(root,a.file)),path.join(source,'manifest.json'),path.join(output,'contact-sheet.png')]);
console.log(JSON.stringify({ count: assets.length, verifiedAlpha:true, uniqueImages:seen.size, output }));
