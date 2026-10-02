#!/usr/bin/env node
// Offline delivery: verifies selected originals and builds review sheets, never generates art.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, relative, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '../..');
const [selectionPath, outPath] = process.argv.slice(2);
assert(selectionPath && outPath, 'Usage: node render-wayuu-keyframe-review.mjs selection.json output-directory');
const safe = p => { const full=resolve(root,p); assert(!relative(root,full).startsWith('..'), 'Outside workspace'); return full; };
const hash = b => createHash('sha256').update(b).digest('hex');
const readJson = async p => JSON.parse(await readFile(safe(p),'utf8'));
const escape = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const selection = await readJson(selectionPath), plan = await readJson(selection.plan);
assert.equal(selection.slug,plan.slug);
const shots=plan.blocks.flatMap(b=>b.keyframes);
assert.equal(selection.selected.length,shots.length);
assert.equal(new Set(selection.selected.map(a=>a.id)).size,shots.length);
const assets=[];
for (const shot of shots) {
  const selected=selection.selected.find(a=>a.id===shot.id);
  assert(selected, 'Missing shot '+shot.id);
  assert.equal(selected.reviewed,true,'Not visually reviewed '+shot.id);
  const bytes=await readFile(safe(selected.path));
  assert.equal(hash(bytes),selected.sha256,'Hash changed '+shot.id);
  const m=await sharp(bytes).metadata();
  assert.equal(m.format,'jpeg'); assert.equal(m.width,864); assert.equal(m.height,1536);
  assets.push({...selected,title:shot.title,time:shot.time_seconds,bytes:bytes.length});
}
const out=safe(outPath); await mkdir(out,{recursive:false});
const sheetPaths=[];
for(let page=0;page<Math.ceil(assets.length/6);page++) {
  const part=assets.slice(page*6,page*6+6), cellW=288,cellH=556;
  const layers=[];
  for(let i=0;i<part.length;i++) {
    const a=part[i],left=(i%3)*cellW,top=Math.floor(i/3)*cellH;
    layers.push({input:await sharp(safe(a.path)).resize(288,512).toBuffer(),left,top});
    const label=Buffer.from(`<svg width="288" height="44"><rect width="288" height="44" fill="#17232b"/><text x="10" y="26" font-family="Arial" font-size="16" fill="#fff">${escape(a.id+' · '+a.time.join('–')+' s')}</text></svg>`);
    layers.push({input:label,left,top:top+512});
  }
  const file=`secuencia-${page+1}.jpeg`;
  await sharp({create:{width:864,height:Math.ceil(part.length/3)*cellH,channels:3,background:'#17232b'}}).composite(layers).jpeg({quality:92}).toFile(resolve(out,file));
  sheetPaths.push(relative(root,resolve(out,file)));
}
const sections=plan.blocks.map(b=>`<section><h2>${escape(b.id)} · ${b.time_seconds.join('–')} s</h2><p class="voice">${escape(b.voice_over)}</p><div class="pair">${b.keyframes.map(k=>{const a=assets.find(a=>a.id===k.id),src=relative(out,safe(a.path));return `<figure><a href="${escape(src)}"><img src="${escape(src)}" alt="${escape(k.title)}" loading="lazy"></a><figcaption><h3>${escape(k.id+' · '+k.title)}</h3><p>${escape(k.visual)}</p><details><summary>Notas de revisión</summary><p>${escape(a.notes.join(' '))}</p></details></figcaption></figure>`;}).join('')}</div></section>`).join('');
const html=`<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(plan.title)} · Guion y keyframes</title><style>body{margin:0;background:#111b22;color:#ede7db;font:17px/1.6 system-ui}main{max-width:1100px;margin:auto;padding:32px}h1{font:48px/1.1 Georgia}section{margin:60px 0;border-top:1px solid #475259}.voice{font:25px/1.5 Georgia;max-width:800px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:24px}figure{margin:0}img{width:100%;height:auto}h3{margin-bottom:4px}details{color:#aebcc4}a{color:#eec892}@media(max-width:650px){.pair{grid-template-columns:1fr}main{padding:18px}h1{font-size:36px}}</style><main><h1>${escape(plan.title)}</h1><p>${assets.length} keyframes seleccionados · medium · 864 × 1536 · ${plan.duration.voice_words} palabras · ${plan.duration.target_seconds} s estimados.</p><p>Guion e imágenes para video, no video animado. Duración pendiente de voz grabada. Selección editorial con notas, no certificación etnográfica ni aprobación final del usuario.</p>${sections}</main></html>`;
await writeFile(resolve(out,'index.html'),html,{flag:'wx'});
const report={schema:'wayuu-keyframe-delivery-verification/v1',slug:plan.slug,verified_at:new Date().toISOString(),selection:selectionPath,selection_sha256:hash(await readFile(safe(selectionPath))),plan:selection.plan,plan_sha256:hash(await readFile(safe(selection.plan))),expected_shots:shots.length,verified_originals:assets.length,all_medium_policy:selection.quality==='medium',dimensions:'864x1536',format:'jpeg',contact_sheets:sheetPaths,review_html:relative(root,resolve(out,'index.html')),animation:false,audio:false,publication:false};
assert.equal(report.all_medium_policy,true);
await writeFile(resolve(out,'verification.json'),JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(report,null,2));
