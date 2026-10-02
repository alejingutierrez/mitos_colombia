import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';

const root = path.resolve('output/references/chimila/visual-01');
const capture = JSON.parse(await fs.readFile(path.join(root, 'capture.v1.json'), 'utf8'));
const selectedPages = {
  V06: [32,33,34,35,38,40,48,49,50,59,90,94,97,99,107,108,109,110,111,112,113,116,117,120,121,126,127,128,129,130,131,135,146,147,148,149,150,151,152,153,154,155],
  V07: [10,13,14,15],
  V11: Array.from({length:20}, (_,i) => i+62)
};
await fs.mkdir(path.join(root, 'pdf-images'), { recursive: true });
const records = [];
for (const source of capture.records.filter(s => s.kind === 'pdf' && s.status === 'captured')) {
  const output = execFileSync('pdfimages', ['-list', source.file], {encoding:'utf8'});
  const list = output.split('\n').slice(2).map(line => line.trim().split(/\s+/)).filter(x => x[2] === 'image' && Number(x[3]) > 180 && Number(x[4]) > 120 && selectedPages[source.id].includes(Number(x[0])));
  const pages = (await fs.readFile(source.file.replace(/\.pdf$/, '.txt'), 'utf8')).split('\f');
  for (const page of [...new Set(list.map(x => Number(x[0])))]) {
    const prefix = path.join(root, 'pdf-images', source.id + '-P' + String(page).padStart(3, '0'));
    execFileSync('pdfimages', ['-f', String(page), '-l', String(page), '-png', source.file, prefix]);
    const all = output.split('\n').slice(2).map(line => line.trim().split(/\s+/)).filter(x => Number(x[0]) === page);
    for (let i = 0; i < all.length; i++) {
      const x = all[i];
      if (!list.some(row => row[1] === x[1])) continue;
      const file = prefix + '-' + String(i).padStart(3, '0') + '.png';
      const data = await fs.readFile(file);
      records.push({ id: source.id + '-P' + String(page).padStart(3, '0') + '-I' + String(i).padStart(2, '0'), source_id: source.id, source_url: source.url, source_page: page, publisher: source.publisher, period: source.period, rights: source.rights, file, width: Number(x[3]), height: Number(x[4]), bytes: data.length, sha256: crypto.createHash('sha256').update(data).digest('hex'), context_text_file: source.file.replace(/\.pdf$/, '.txt'), reviewed: false, use: 'internal_reference_only_original_pdf_retained', extraction: 'unaltered_embedded_image; original source PDF retained', source_has_illustration_caption: /Ilustración/.test(pages[page-1] || '') });
    }
  }
  console.log(source.id + ': ' + list.length + ' reference candidates extracted');
}
await fs.writeFile(path.join(root, 'pdf-images.v1.json'), JSON.stringify({ records }, null, 2) + '\n');
