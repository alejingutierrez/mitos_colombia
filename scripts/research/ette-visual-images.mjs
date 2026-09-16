import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const root = path.resolve('output/references/chimila/visual-01');
const capture = JSON.parse(await fs.readFile(path.join(root, 'capture.v1.json'), 'utf8'));
const decode = s => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
const attr = (tag, name) => decode(tag.match(new RegExp('(?:^|\\s)' + name + '\\s*=\\s*["\x27]([^"\x27]*)["\x27]', 'i'))?.[1] || '');
const selected = [];
let existing = [];
try { existing = JSON.parse(await fs.readFile(path.join(root, 'web-images.v1.json'), 'utf8')).records; } catch {}
const additionalIDs = new Set(['V14-IMG14','V14-IMG16','V14-IMG20','V15-IMG12','V15-IMG13','V15-IMG18','V15-IMG25','V16-IMG01','V16-IMG02','V16-IMG03','V16-IMG04','V17-IMG03']);
for (const source of capture.records.filter(s => s.kind === 'html' && s.status === 'captured')) {
  const html = await fs.readFile(source.file, 'utf8');
  const tags = [...html.matchAll(/<img\b[^>]*>/gi)].map(m => m[0]);
  for (const c of source.candidates) {
    if (existing.some(r => r.id === c.id)) continue;
    const approved = /^V0[1-4]$/.test(source.id) ? c.url.includes('/sites/default/files/') : source.id === 'V05' ? c.url.includes('/noticias/PublishingImages/') : source.id === 'V08' ? Number(c.id.slice(-2)) >= 3 : source.id === 'V10' ? c.url.includes('pueblo-ette-enakka') : false;
    if (!approved && !additionalIDs.has(c.id)) continue;
    const tag = tags.find(t => new URL(attr(t, 'data-src') || attr(t, 'src') || '/', source.final_url).href === c.url);
    const variants = (attr(tag || '', 'data-srcset') || attr(tag || '', 'srcset')).split(',').map(v => v.trim().split(/\s+/)).filter(v => v[0]?.startsWith('http')).sort((a, b) => parseInt(b[1] || '0') - parseInt(a[1] || '0'));
    selected.push({ id: c.id, source_id: source.id, source_url: source.url, url: variants[0]?.[0] || c.url, source_image_url: c.url, publisher: source.publisher, period: source.period, rights: source.rights, source_alt: c.alt, use: 'internal_visual_reference_only_not_publishable_by_default', reviewed: false });
  }
}
await fs.mkdir(path.join(root, 'images'), { recursive: true });
let next = 0;
async function worker() {
  while (next < selected.length) {
    const ref = selected[next++];
    try {
      const response = await fetch(ref.url, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const data = Buffer.from(await response.arrayBuffer());
      const meta = await sharp(data).metadata();
      const file = path.join(root, 'images', ref.id + '.' + (meta.format === 'jpeg' ? 'jpg' : meta.format));
      await fs.writeFile(file, data);
      Object.assign(ref, { status: 'downloaded', file, sha256: crypto.createHash('sha256').update(data).digest('hex'), bytes: data.length, width: meta.width, height: meta.height, fetched_at: new Date().toISOString(), final_url: response.url });
      console.log(ref.id + ': ' + meta.width + 'x' + meta.height);
    } catch (error) { Object.assign(ref, { status: 'failed', error: error.message }); console.log(ref.id + ': ' + error.message); }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
const records = [...existing, ...selected].sort((a, b) => a.id.localeCompare(b.id));
await fs.writeFile(path.join(root, 'web-images.v1.json'), JSON.stringify({ records }, null, 2) + '\n');
