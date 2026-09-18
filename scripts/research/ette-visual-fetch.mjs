import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

// Public-source research capture. Never modifies myths, production assets or credentials.
const root = path.resolve('output/references/chimila/visual-01');
const config = JSON.parse(await fs.readFile('content/videos/chimila/visual-01/sources.v1.json', 'utf8'));
await fs.mkdir(path.join(root, 'originals'), { recursive: true });
const sha = data => crypto.createHash('sha256').update(data).digest('hex');
const decode = s => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
const attr = (tag, name) => decode(tag.match(new RegExp('(?:^|\\s)' + name + '\\s*=\\s*["\x27]([^"\x27]*)["\x27]', 'i'))?.[1] || '');
let records = [];
try { records = JSON.parse(await fs.readFile(path.join(root, 'capture.v1.json'), 'utf8')).records; } catch {}
let next = 0;
async function worker() {
  while (next < config.sources.length) {
    const s = config.sources[next++];
    if (records.some(r => r.id === s.id && r.status === 'captured')) continue;
    try {
      const response = await fetch(s.url, { signal: AbortSignal.timeout(45000), headers: { 'User-Agent': 'Ette-visual-reference-research/1.0' } });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const data = Buffer.from(await response.arrayBuffer());
      if (s.kind === 'pdf' && data.subarray(0, 5).toString() !== '%PDF-') throw new Error('Not a PDF');
      const file = path.join(root, 'originals', s.id + (s.kind === 'pdf' ? '.pdf' : '.html'));
      await fs.writeFile(file, data);
      const record = { ...s, status: 'captured', fetched_at: new Date().toISOString(), final_url: response.url, file, bytes: data.length, sha256: sha(data), candidates: [] };
      if (s.kind === 'html') {
        const html = data.toString();
        let index = 0;
        for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
          const tag = match[0];
          const src = attr(tag, 'data-src') || attr(tag, 'src');
          if (!src || src.startsWith('data:')) continue;
          const url = new URL(src, response.url).href;
          const context = html.slice(Math.max(0, match.index - 240), match.index + tag.length + 240).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 600);
          record.candidates.push({ id: s.id + '-IMG' + String(++index).padStart(2, '0'), url, alt: attr(tag, 'alt'), title: attr(tag, 'title'), context });
        }
      }
      records.push(record);
      console.log(s.id + ': captured ' + data.length + ' bytes; ' + record.candidates.length + ' image candidates');
    } catch (error) {
      records.push({ ...s, status: 'failed', error: String(error.message), fetched_at: new Date().toISOString() });
      console.log(s.id + ': ' + error.message);
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
records.sort((a, b) => a.id.localeCompare(b.id));
await fs.writeFile(path.join(root, 'capture.v1.json'), JSON.stringify({ records }, null, 2) + '\n');
console.log('Capture saved: ' + path.join(root, 'capture.v1.json'));
