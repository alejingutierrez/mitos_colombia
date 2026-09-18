import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';

const base = 'content/videos/nasa-paeces/tripticos/maqueta-3d-20260913';
const out = 'output/imagegen/nasa-paeces/tripticos/maqueta-3d-20260913';
const read = p => JSON.parse(fs.readFileSync(p));
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const manifest = read(`${base}/manifest.json`);
const verificationFile = `${base}/verification-all-26.json`;
const verification = read(verificationFile);
assert.equal(verification.status, 'passed');
assert.equal(verification.summary.public_pages_matching, 26);
assert.equal(verification.summary.new_blobs_online, 78);
assert.equal(manifest.myths.length, 26);
const formats = { entrada: 'horizontal', acto: 'vertical', huella: 'cuadrada' };
const myths = manifest.myths.map(m => {
  assert.equal(hash(m.source_selection), m.source_selection_sha256);
  const receiptFile = `${base}/publication-receipts/nasa-maqueta-3d-20260913/${m.slug}.json`;
  const receipt = read(receiptFile);
  assert.equal(receipt.status, 'published');
  assert.equal(receipt.myth.id, m.id);
  assert.equal(receipt.narrative_target_sha256, m.narrative_target_sha256);
  const images = Object.entries(formats).map(([role, format]) => {
    const recordFile = `${base}/accepted/${m.slug}-${role}.json`;
    const a = read(recordFile);
    assert.equal(a.myth_id, m.id);
    assert(a.qa.length > 25);
    for (const [file, expected] of [[a.path,a.sha256], [a.request_file,a.request_sha256], [a.prompt_file,a.prompt_sha256], [a.publication_derivative.path,a.publication_derivative.sha256]]) assert.equal(hash(file), expected, file);
    const request = read(a.request_file);
    for (const ref of request.references) assert.equal(hash(ref.path), ref.sha256, ref.path);
    assert.equal(receipt.local[format].sha256, a.publication_derivative.sha256);
    assert.equal(receipt.local[format].published.width, a.width);
    assert.equal(receipt.local[format].published.height, a.height);
    return { role, original: a.path, original_sha256: a.sha256, published_file: a.publication_derivative.path, published_sha256: a.publication_derivative.sha256, width:a.width, height:a.height, qa_record:recordFile, qa_record_sha256:hash(recordFile) };
  });
  return { id:m.id, slug:m.slug, title:receipt.myth.title, url:`https://www.mitosdecolombia.com/mitos/${m.slug}`, receipt:receiptFile, receipt_sha256:hash(receiptFile), images };
});
const cards = myths.map((m,i) => `<article data-title="${esc(m.title.toLocaleLowerCase('es'))}"><header><span class="number">${String(i+1).padStart(2,'0')}</span><h2>${esc(m.title)}</h2><a class="visit" href="${m.url}" target="_blank" rel="noopener">Ver en el sitio ↗</a></header><div class="triptych">${m.images.map(a=>`<figure class="${a.role}"><a href="${esc(path.relative(out,a.original))}" target="_blank" rel="noopener" title="Abrir original de ${a.role}"><img src="${esc(path.relative(out,a.published_file))}" width="${a.width}" height="${a.height}" loading="lazy" alt="${esc(m.title)} — ${a.role}, maqueta de papel cortado"></a><figcaption><span>${a.role}</span><a href="${esc(path.relative(out,a.original))}" download>PNG original ↓</a></figcaption></figure>`).join('')}</div></article>`).join('\n');
const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Nasa · Los 26 trípticos en papel</title><style>
:root{color-scheme:light;font-family:system-ui,-apple-system,sans-serif;color:#26362e;background:#f6f3e9}*{box-sizing:border-box}body{margin:0}.intro{max-width:1440px;margin:auto;padding:64px 32px 36px}.eyebrow{text-transform:uppercase;letter-spacing:.15em;font-size:12px;color:#687467}h1{font:clamp(36px,5vw,64px)/1.08 Georgia,serif;font-weight:400;max-width:820px;margin:18px 0}p{line-height:1.6;max-width:780px;color:#526255}.status{display:inline-block;border:1px solid #bdcbbb;border-radius:30px;padding:8px 14px;font-size:13px}.toolbar{max-width:1440px;margin:auto;padding:12px 32px 28px;display:flex;align-items:center;gap:20px;flex-wrap:wrap}label{display:flex;align-items:center;gap:12px;font-size:14px}input{font:inherit;max-width:100%;width:320px;border:1px solid #bec8b8;background:#fffdf8;border-radius:8px;padding:12px}#count{font-size:13px;color:#66735f}main{max-width:1440px;margin:auto;padding:0 32px 64px}article{border-top:1px solid #cbd1c2;padding:28px 0 48px}article[hidden]{display:none}article header{display:flex;align-items:baseline;gap:16px;margin-bottom:24px}.number{font:14px ui-monospace,monospace;color:#74816e}h2{font:28px/1.25 Georgia,serif;margin:0;flex:1}a{color:inherit;text-underline-offset:4px}.visit{font-size:13px;white-space:nowrap}.triptych{display:grid;grid-template-columns:1.5fr .67fr 1fr;gap:18px;align-items:center}figure{margin:0;min-width:0}img{display:block;width:100%;height:auto;box-shadow:0 5px 20px #2835270b}figcaption{display:flex;justify-content:space-between;gap:10px;padding-top:12px;font-size:11px;color:#677261}figcaption span{text-transform:uppercase;letter-spacing:.1em}footer{padding:20px 32px 40px;max-width:1440px;margin:auto;color:#697460;font-size:12px}@media(max-width:750px){.intro{padding:36px 20px 20px}.toolbar,main{padding-left:20px;padding-right:20px}.triptych{grid-template-columns:1fr 1fr}.entrada{grid-column:1/-1}article header{flex-wrap:wrap}h2{font-size:24px}.visit{margin-left:36px}label{flex-wrap:wrap}input{width:min(320px,80vw)}}@media print{.toolbar,.visit,figcaption a{display:none}article{break-inside:avoid;padding:20px 0}h1{font-size:34px}.intro{padding:20px 32px}.triptych{grid-template-columns:1.5fr .67fr 1fr}.entrada{grid-column:auto}}
</style></head><body><div class="intro"><div class="eyebrow">Mitos de Colombia · Nasa–Paeces</div><h1>Historias construidas<br>en papel.</h1><p>26 trípticos y 78 imágenes rehechas con el estilo reforzado: cartulina cortada y plegada, capas separadas, volumen y sombras de una maqueta fotografiada.</p><span class="status">Colección completa · Publicada el 13 de septiembre de 2026</span></div><div class="toolbar"><label for="filter">Buscar mito <input id="filter" type="search" placeholder="El Trueno, Juan Tama…"></label><span id="count" aria-live="polite">26 de 26 trípticos</span></div><main>${cards}<p id="empty" hidden>No hay mitos que coincidan con esta búsqueda.</p></main><footer>Entrada · Acto · Huella. Cada imagen conserva su composición completa. Pulsa una imagen para abrir el PNG original.</footer><script>const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();document.querySelector('#filter').addEventListener('input',e=>{let n=0;for(const card of document.querySelectorAll('article')){card.hidden=!norm(card.dataset.title).includes(norm(e.target.value));if(!card.hidden)n++}document.querySelector('#count').textContent=n+' de 26 trípticos';document.querySelector('#empty').hidden=n>0});</script></body></html>`;
fs.writeFileSync(`${out}/index.html`,html);
const closure={ schema:'nasa-maquette-closure/v1',closed_at:new Date().toISOString(),publication_id:'nasa-maqueta-3d-20260913',status:'passed',generation_tool:manifest.generation_tool,exact_model:manifest.exact_model,quality:manifest.quality,manifest_file:`${base}/manifest.json`,manifest_sha256:hash(`${base}/manifest.json`),verification_file:verificationFile,verification_sha256:hash(verificationFile),summary:{myths:myths.length,images:myths.flatMap(m=>m.images).length,...verification.summary},gallery:`${out}/index.html`,gallery_sha256:hash(`${out}/index.html`),myths};
fs.writeFileSync(`${base}/closure.json`,JSON.stringify(closure,null,2)+'\n');
console.log(JSON.stringify({status:closure.status,summary:closure.summary,gallery:closure.gallery,closure:`${base}/closure.json`}));
