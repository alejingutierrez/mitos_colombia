import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import sharp from 'sharp';
const base='content/videos/nasa-paeces/videos/el-trueno';
const out='output/imagegen/nasa-paeces/keyframes/el-trueno-produccion-01';
const planFile=`${base}/preproduccion-01/plan.json`;
const selectionFile=`${base}/produccion-01/selection.json`;
const revisionName=process.argv.find(a=>a.startsWith('--revision='))?.slice('--revision='.length);
assert(!revisionName||/^[a-z0-9-]+$/.test(revisionName),'Invalid revision name');
const revisionFile=revisionName?`${base}/${revisionName}/selection.json`:null;
const read=p=>JSON.parse(fs.readFileSync(p));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const hashFile=p=>sha(fs.readFileSync(p));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const plan=read(planFile),selection=read(selectionFile),freeze=read(`${base}/preproduccion-01/freeze.json`);
assert.equal(hashFile(planFile),freeze.plan_sha256);
assert.equal(hashFile(plan.source_snapshot),freeze.source_sha256);
for(const p of freeze.prompts)assert.equal(hashFile(p.path),p.sha256);
for(const r of Object.values(freeze.references))assert.equal(hashFile(r.path),r.sha256);
const shots=plan.blocks.flatMap(b=>b.keyframes.map(k=>({...k,voice:b.voice_over,purpose:b.purpose})));
assert.equal(selection.selected.length,shots.length);
assert.equal(new Set(selection.selected.map(x=>x.id)).size,shots.length);
const rejected=new Set(selection.rejected.map(x=>path.resolve(x.path)));
let lastTime=0,refChecks=0;
const assets=[];
for(const [i,s] of shots.entries()){
 assert.equal(s.time_seconds[0],lastTime);lastTime=s.time_seconds[1];
 const a=selection.selected.find(x=>x.id===s.id);assert(a?.reviewed);
 assert.equal(hashFile(a.path),a.sha256);assert(!rejected.has(path.resolve(a.path)));
 const m=await sharp(a.path).metadata();assert.equal(m.width,a.width);assert.equal(m.height,a.height);
 assert(Math.abs(m.width/m.height-9/16)<.005);assert.equal(m.format,'png');
 const req=read(a.request_file);if(req.prompt_sha256)assert.equal(sha(req.request.prompt),req.prompt_sha256);
 for(const r of req.references||[]){assert.equal(hashFile(r.path),r.sha256);assert(!rejected.has(path.resolve(r.path)));refChecks++;}
 for(const prior of shots.slice(Math.max(0,i-2),i)){
  const selectedPrior=selection.selected.find(a=>a.id===prior.id);
  assert(req.request.referenced_image_paths.includes(path.resolve(selectedPrior.path)),`Missing preceding ${prior.id} in ${s.id}`);
 }
 const thumb=`${s.id}-preview.jpg`;
 await sharp(a.path).resize({width:470}).jpeg({quality:90}).toFile(`${out}/${thumb}`);
 assets.push({...s,...a,src:path.basename(a.path),thumb});
}
assert.equal(lastTime,plan.duration.target_seconds);
// Verify the original generation lineage above, then apply reviewed display replacements.
// Later original frames retain the references they actually used during generation.
const revision=revisionFile?read(revisionFile):null;
let revisionRefChecks=0;
const revisionRejected=new Set((revision?.rejected||[]).map(a=>path.resolve(a.path)));
for(const a of revision?.rejected||[])assert.equal(hashFile(a.path),a.sha256);
if(revision){
 assert.equal(revision.base_selection,selectionFile);
 assert.equal(revision.base_selection_sha256,hashFile(selectionFile));
 assert.deepEqual(revision.selected.map(a=>a.id),revision.scope);
 assert.equal(new Set(revision.scope).size,revision.scope.length);
 for(const a of revision.selected){
  const i=assets.findIndex(s=>s.id===a.id);assert(i>=0&&a.reviewed);
  assert.equal(a.supersedes.sha256,assets[i].sha256);
  assert.equal(hashFile(a.path),a.sha256);
  assert.equal(hashFile(a.request_file),a.request_sha256);
  assert.equal(path.resolve(path.dirname(a.path)),path.resolve(out));
  const revisedRequest=read(a.request_file);
  if(revisedRequest.prompt_sha256)assert.equal(sha(revisedRequest.request.prompt),revisedRequest.prompt_sha256);
  assert.deepEqual(revisedRequest.request.referenced_image_paths,a.references.map(r=>r.path));
  for(const r of a.references){assert.equal(hashFile(r.path),r.sha256);assert(!rejected.has(path.resolve(r.path)));assert(!revisionRejected.has(path.resolve(r.path)));revisionRefChecks++;}
  const m=await sharp(a.path).metadata();
  assert.equal(m.width,a.width);assert.equal(m.height,a.height);
  assert.equal(m.format,'png');assert(Math.abs(m.width/m.height-9/16)<.005);
  const thumb=path.basename(a.path,'.png')+'-preview.jpg';
  await sharp(a.path).resize({width:470}).jpeg({quality:90}).toFile(`${out}/${thumb}`);
  assets[i]={...assets[i],...a,src:path.basename(a.path),thumb};
 }
}
const layers=[],cellW=240,cellH=471,cols=7,rows=2;
for(let i=0;i<assets.length;i++){
 const a=assets[i],left=(i%cols)*cellW,top=Math.floor(i/cols)*cellH;
 layers.push({input:await sharp(a.path).resize(232,412,{fit:'contain',background:'#111c24'}).toBuffer(),left:left+4,top});
 layers.push({input:Buffer.from(`<svg width="240" height="59"><rect width="240" height="59" fill="#111c24"/><text x="8" y="21" font-family="Arial" font-size="14" fill="#e9d6b4">${esc(a.id+' · '+a.time_seconds.join('–')+' s')}</text><text x="8" y="44" font-family="Arial" font-size="13" fill="#ffffff">${esc(a.title)}</text></svg>`),left,top:top+412});
}
await sharp({create:{width:cols*cellW,height:rows*cellH,channels:3,background:'#111c24'}}).composite(layers).jpeg({quality:92}).toFile(`${out}/secuencia-completa.jpeg`);
const frames=JSON.stringify(assets.map(a=>({id:a.id,title:a.title,src:a.src,voice:a.voice,time:a.time_seconds}))).replaceAll('<','\\u003c');
const sections=plan.blocks.map(b=>`<section id="${b.id}"><div class="blockhead"><span>${b.id} / ${b.time_seconds.join('–')} s</span><h2>${esc(b.voice_over)}</h2></div><div class="pair">${b.keyframes.map(k=>{const a=assets.find(x=>x.id===k.id);return `<figure><button class="frame" data-shot="${assets.indexOf(a)}" aria-label="Abrir ${esc(a.title)}"><img src="${a.thumb}" width="470" height="835" alt="${esc(a.title)}" loading="lazy"></button><figcaption><b>${esc(a.id+' · '+a.title)}</b><span>${esc(a.camera)}</span>${a.supersedes?`<a href="${esc(path.basename(a.supersedes.path))}" target="_blank" rel="noopener">Ver versión anterior</a>`:""}</figcaption></figure>`;}).join('')}</div><p class="purpose">${esc(b.purpose)}</p></section>`).join('');
const html=`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>El Trueno · Guion y keyframes</title><style>
:root{color-scheme:dark;--bg:#101b22;--ink:#f0e9da;--muted:#aab8bd;--accent:#d7b77e}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.6 system-ui}main{max-width:1120px;margin:auto;padding:48px 32px}.eyebrow{font-size:12px;letter-spacing:.15em;color:var(--accent);text-transform:uppercase}header{display:grid;grid-template-columns:1.35fr 1fr;gap:44px;align-items:center;padding-bottom:60px}h1{font:clamp(48px,7vw,90px)/.95 Georgia;margin:20px 0}header img{width:100%;max-height:620px;object-fit:contain}h1 em{display:block;color:var(--accent);font-size:.49em;line-height:1.3;margin-top:16px}p{max-width:760px}.muted,.purpose{color:var(--muted)}button,a{font:inherit}button{cursor:pointer}button:focus-visible,a:focus-visible{outline:3px solid var(--accent);outline-offset:4px}.primary{background:var(--accent);color:#18252b;border:0;border-radius:3px;padding:12px 20px;font-weight:650}.links{display:flex;gap:22px;margin-top:20px;flex-wrap:wrap}a{color:var(--accent)}.facts{display:flex;flex-wrap:wrap;gap:10px;margin:25px 0}.facts span{padding:6px 12px;border:1px solid #46565a;border-radius:2px;font-size:14px}section{border-top:1px solid #425157;padding-top:28px;margin-bottom:64px}.blockhead span{color:var(--accent);font-size:13px;letter-spacing:.09em}.blockhead h2{font:28px/1.4 Georgia;max-width:860px;margin:12px 0 28px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:28px}figure{margin:0}.frame{display:block;width:100%;padding:0;border:0;background:transparent}.frame img{width:100%;height:auto;display:block}figcaption{padding:15px 0;font-size:15px}figcaption span{display:block;color:var(--muted);font-size:13px}.purpose{font-size:14px}details{margin:30px 0;padding:20px;border:1px solid #425157}summary{cursor:pointer}footer{font-size:13px;color:var(--muted);border-top:1px solid #425157;padding-top:24px}dialog{width:min(1100px,96vw);max-height:96vh;border:1px solid #5b6a6e;background:#101b22;color:var(--ink);padding:20px}dialog::backdrop{background:#000c}.viewer{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:center}.viewer img{width:100%;height:78vh;object-fit:contain}.viewer p{font:25px/1.5 Georgia}.controls{display:flex;gap:12px;flex-wrap:wrap}.controls button,.close{padding:9px 14px;border:1px solid #5b6a6e;background:#1c2d36;color:var(--ink)}.close{float:right}.counter{color:var(--accent);font-size:13px}#fullScript p{font:23px/1.55 Georgia}@media(max-width:680px){main{padding:24px 18px}header{grid-template-columns:1fr;gap:24px;padding-bottom:35px}header img{max-height:430px}.pair{gap:12px}.blockhead h2{font-size:24px}figcaption{font-size:13px}.viewer{grid-template-columns:1fr;gap:8px}.viewer img{height:52vh}.viewer p{font-size:19px}.facts{gap:6px}.facts span{font-size:12px}dialog{padding:12px}.purpose{font-size:13px}}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto}}</style></head><body><main>
${fs.existsSync(`${out}/comunidad-nasa/index.html`)?'<nav aria-label="Colección Nasa"><p><a href="comunidad-nasa/">← Ver los 26 mitos Nasa · 270 keyframes</a></p></nav>':''}
<header><div><div class="eyebrow">Nasa · Piloto audiovisual 01</div><h1>El Trueno<em>La laguna y las varas</em></h1><p>Una visita nocturna. Una petición de cuidado. Una fuerza a la que hay que saber acercarse.</p><div class="facts"><span>135 palabras</span><span>14 keyframes</span><span>84 s provisionales</span></div>${revision?`<p class="eyebrow">${esc(revision.label)}</p><p class="muted">${esc(revision.description || "Primeros dos cuadros recreados con pliegues, grosor y sombras entre capas. Los otros doce conservan su versión anterior.")}</p>`:""}<p class="muted">Guion y secuencia de imágenes para revisar juntos. El recorrido es silencioso; la voz y la animación vendrán después.</p><button class="primary" id="playStory">Recorrer storyboard</button><div class="links"><a href="#fullScript">Leer guion completo</a><a href="secuencia-completa.jpeg">Ver lámina completa</a></div></div><img src="${assets[0].thumb}" alt="Una mano sostiene la vara frente a la laguna nocturna" width="470" height="835"></header>
<details id="fullScript"><summary>Guion completo · lectura de corrido</summary>${plan.blocks.map(b=>`<p>${esc(b.voice_over)}</p>`).join('')}</details>${sections}
<details><summary>Qué mejoramos en este piloto</summary><p>El inicio entra en la acción y abre un riesgo. Cada bloque tiene una causa y una consecuencia. La petición de que muera menos gente concentra el sentido humano. El agua con varas y el agua vacía forman el retorno visual del cierre.</p><p>Las referencias mantienen personajes y material; la cámara se revisa por separado. Se corrigieron dos cuadros que repetían demasiado el paisaje. La generación original utilizó hasta dos antecedentes seleccionados editorialmente y las identidades necesarias; el cierre añadió el encuadre anterior al que debía volver.${revision?" "+esc(revision.lineage_description || "Esta revisión sustituye únicamente B1A y B1B en el visor, conservando el registro de referencias original de los otros cuadros."):""}</p><p>La duración es provisional. La eficacia del gancho y la retención todavía no están medidas con audiencia.</p></details>
<footer><p>Versión de Martín Kuskue, intérprete Marco Antonio Penkue; Bernal 1953, cotejada en Villa Posse 1993. <a href="https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=58546">Fuente narrativa</a> · <a href="https://www.mitosdecolombia.com/mitos/el-trueno">Mito publicado</a>.</p><p>Adaptación editorial: apariencia, vestuario, reparto, puesta en escena y cierre; no certificación comunitaria. 14 cuadros en el visor y ${selection.rejected.length+(revision?.rejected?.length||0)} candidatos rechazados conservados entre ambas producciones.${revision?" "+esc(revision.footer_description || "Dos cuadros recreados para esta revisión; sus originales se conservan para comparar. Pendiente de revisión del usuario."):""} Las imágenes se generaron con la herramienta integrada image_gen. Sin voz, animación ni publicación audiovisual.</p></footer>
</main><dialog id="viewer"><button class="close" id="closeViewer" aria-label="Cerrar storyboard">Cerrar</button><div class="viewer"><img id="viewImage" alt=""><div><div class="counter" id="counter"></div><h2 id="viewTitle"></h2><p id="viewVoice"></p><div class="controls"><button id="previous" aria-label="Cuadro anterior">← Anterior</button><button id="toggle">Pausar</button><button id="next" aria-label="Cuadro siguiente">Siguiente →</button></div><p style="font:13px system-ui;color:#aab8bd">Storyboard sin audio · tiempos provisionales</p></div></div></dialog><script>
const frames=${frames};let current=0,playing=false,timer=null;const viewer=document.getElementById('viewer');function stop(){clearTimeout(timer);timer=null}function show(){stop();const f=frames[current];document.getElementById('viewImage').src=f.src;document.getElementById('viewImage').alt=f.title;document.getElementById('viewTitle').textContent=f.title;document.getElementById('viewVoice').textContent=f.voice;document.getElementById('counter').textContent=(current+1)+' / '+frames.length+' · '+f.id+' · '+f.time.join('–')+' s';document.getElementById('toggle').textContent=playing?'Pausar':'Continuar';document.getElementById('previous').disabled=current===0;document.getElementById('next').disabled=current===frames.length-1;if(playing)timer=setTimeout(()=>{if(current<frames.length-1){current++;show()}else{playing=false;show()}},(f.time[1]-f.time[0])*1000)}function openAt(i,play){current=i;playing=play;viewer.showModal();show()}document.getElementById('playStory').onclick=()=>openAt(0,true);document.querySelectorAll('[data-shot]').forEach(b=>b.onclick=()=>openAt(Number(b.dataset.shot),false));document.getElementById('closeViewer').onclick=()=>viewer.close();viewer.addEventListener('close',()=>{playing=false;stop()});document.getElementById('previous').onclick=()=>{current=Math.max(0,current-1);show()};document.getElementById('next').onclick=()=>{current=Math.min(frames.length-1,current+1);show()};document.getElementById('toggle').onclick=()=>{playing=!playing;show()};viewer.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();document.getElementById('next').click()}if(e.key==='ArrowLeft'){e.preventDefault();document.getElementById('previous').click()}});document.querySelector('a[href="#fullScript"]').onclick=()=>document.getElementById('fullScript').open=true;
</script></body></html>`;
fs.writeFileSync(`${out}/index.html`,html);
const report={schema:'nasa-pilot-verification/v1',revision:revision?{file:revisionFile,sha256:hashFile(revisionFile),scope:revision.scope,base_lineage_preserved:true}:null,displayed_assets:assets.map(a=>({id:a.id,path:a.path,sha256:a.sha256})),verified_at:new Date().toISOString(),myth_id:429,plan:planFile,plan_sha256:hashFile(planFile),selection:selectionFile,selection_sha256:hashFile(selectionFile),expected:shots.length,selected:assets.length,rejected_preserved:selection.rejected.length,reference_hash_checks:refChecks,revision_reference_hash_checks:revisionRefChecks,revision_rejected_preserved:revisionRejected.size,source_and_prompt_freeze_verified:true,timeline_contiguous:true,voice_words:plan.duration.voice_words,estimated_seconds:lastTime,dimensions:[...new Set(assets.map(a=>a.width+'x'+a.height))],format:'png',aspect_tolerance:.005,originals_uncropped:true,exact_model:'not_exposed_by_tool',quality:'not_exposed_by_tool',generation_tool:'image_gen.imagegen',narration:false,animation:false,final_video:false,publication:false,review_html:`${out}/index.html`,contact_sheet:`${out}/secuencia-completa.jpeg`};
fs.writeFileSync(`${out}/verification.json`,JSON.stringify(report,null,2)+'\n');
if(revision)fs.writeFileSync(`${base}/${revisionName}/verification.json`,JSON.stringify(report,null,2)+'\n');
if(!revision)fs.writeFileSync(`${base}/produccion-01/ESTADO.md`,`# El Trueno · piloto de guion y keyframes\n\n14/14 imágenes seleccionadas editorialmente; dos candidatos rechazados conservados. Guion de 135 palabras; storyboard de 84 segundos provisionales, pendiente de medir voz. Sin video final.\n\nEntrega: ${out}/index.html. Verificación: ${out}/verification.json.\n\nGeneración integrada image_gen, modelo/calidad no expuestos. PNG originales de ${report.dimensions.join(', ')}, proporción cercana a 9:16, sin recortes.\n\nAprendizajes comprobados: fijar ángulo de cámara para evitar repetición; acercar la pausa humana; usar referencia específica del encuadre al que vuelve el cierre, además de los dos antecedentes. Las correcciones de b4a y b6a conservan prompt y versión previa. Primera llamada registrada después de ejecutarse con sus argumentos exactos; las posteriores se congelaron antes.\n\nFase completada para 1 de los 26 mitos Nasa; los otros 25 no se han iniciado en esta sesión. No se modificó el corpus ni la selección de biblia/trípticos.\n`);
console.log(JSON.stringify(report,null,2));
