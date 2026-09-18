import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validatePlan, validateV3Inputs, verifyFiles, buildPrompt, prepare } from './wayuu-preproduction.mjs';
import { skipWithoutArtifacts } from "../lib/test-artifacts.mjs";

const SIN_ARTEFACTOS = skipWithoutArtifacts(
  "output/imagegen/wayuu-v3-production",
);
const path = 'content/videos/wayuu/videos/aramai/preproduccion-01/plan.json';
const source = JSON.parse(await readFile(path, 'utf8'));
const style = JSON.parse(await readFile(source.style, 'utf8'));
const fresh = () => structuredClone(source);
test('guion completo: 18 instantes, 5 candidatos, 13 pendientes, 169 palabras', () => {
  const r = validatePlan(source);
  assert.equal(r.shots,18); assert.equal(r.generated,5); assert.equal(r.pending,13); assert.equal(r.words,169);
});
for (const [name, mutate, error] of [
  ['high en keyframe',p=>p.generation.quality='high',/medium/],
  ['2:3 disfrazado de 9:16',p=>p.generation.size='1024x1536',/9:16/],
  ['referencia subida sin decisión',p=>p.generation.input_images=['local.jpg'],/referencias/],
  ['duración no medida declarada medida',p=>p.duration.measured=true,/estimada/],
  ['evento desconocido',p=>p.blocks[0].event_ids=['inventado'],/evento/],
  ['personaje sin inventario',p=>p.blocks[0].keyframes[0].entity_ids=['nuevo'],/inventario/],
  ['hueco temporal',p=>p.blocks[1].time_seconds[0]=12,/Timeline/],
  ['keyframe duplicado',p=>p.blocks[0].keyframes[1].id='b1a',/duplicado/],
  ['continuidad rota',p=>p.blocks[1].keyframes[0].continuity_from='b9b',/Continuidad/],
  ['magia vaga',p=>p.blocks[0].keyframes[0].magic_in_the_ordinary.visible_test='',/visible_test/],
  ['magia de otro episodio',p=>p.blocks[0].keyframes[0].magic_in_the_ordinary.event_ids=['cierre'],/otro episodio/],
  ['conteo de VO falso',p=>p.blocks[0].word_count=99,/Conteo/],
  ['paleta heredada sin decisión propia',p=>p.palette='',/paleta propia/],
]) test('rechaza '+name,()=>{const p=fresh();mutate(p);assert.throws(()=>validatePlan(p),error);});
test('fuentes, modelos y cinco candidatos conservan hashes', { skip: SIN_ARTEFACTOS },async()=>assert.equal((await verifyFiles(source)).narrative_snapshot_verified,true));
test('detecta cambio en contenido fuente',async()=>{const p=fresh();p.narrative.content_sha256='0'.repeat(64);await assert.rejects(verifyFiles(p),/Relato local cambió/);});
test('plano de pausa no recibe contrato mágico ni vestuario de Arámai',()=>{
  const p=buildPrompt(source,source.blocks[3].keyframes[0],style);
  assert.match(p,/Pausa de consecuencia cotidiana/); assert.doesNotMatch(p,/COMPORTAMIENTO IMPOSIBLE:/); assert.doesNotMatch(p,/Kemiisa/);
});
test('solo los instantes faltantes entran al congelado y no se sobrescribe', { skip: SIN_ARTEFACTOS },async()=>{
  const out='content/videos/wayuu/videos/aramai/preproduccion-01/prepared-03';
  const frozen=JSON.parse(await readFile(out+'/freeze.json','utf8'));
  assert.equal(frozen.jobs.length,13);assert.equal(frozen.jobs[0].id,'b3b');
  assert.equal(frozen.no_api_calls,true);
  await assert.rejects(prepare(path,out),{code:'EEXIST'});
});
test('el reflejo de apertura anticipa y el de cierre recuerda sin forzar función global',()=>{
  assert.equal(source.blocks[0].keyframes[0].magic_in_the_ordinary.temporal_role,'anticipation');
  assert.equal(source.blocks[8].keyframes[1].magic_in_the_ordinary.temporal_role,'memory');
  assert.doesNotMatch(source.inventory.find(e=>e.id==='jaguey').desc,/sólo una anticipación/);
  assert.doesNotMatch(source.inventory.find(e=>e.id==='mujeres').desc,/Hombres con/);
});
test('V2 conserva el mismo contrato material en todos los planos, incluidos los de pausa',async()=>{
  const v2=JSON.parse(await readFile('content/videos/wayuu/channel-dna.v2.json','utf8'));
  for(const k of source.blocks.flatMap(b=>b.keyframes)) assert.ok(buildPrompt(source,k,v2).includes(v2.paper_lock));
  const broken={...v2,paper_lock:''};
  assert.throws(()=>buildPrompt(source,source.blocks[0].keyframes[0],broken),/contrato material/);
});
test('V3 fija dos antecedentes aprobados y modelos nuevos sin reescribir paquetes históricos',async()=>{
  const v3=JSON.parse(await readFile('content/videos/wayuu/channel-dna.v3.json','utf8'));
  assert.equal(v3.effective_from_myth,'la-majayura-que-pierde-a-los-hombres');
  assert.equal(v3.generation.model,'gpt-image-2.5-sunburst');
  assert.equal(v3.generation.fast_iteration_model,'gpt-image-2.5-flare');
  assert.equal(v3.generation.quality,'medium');
  assert.equal(v3.generation.api_request_size,'1024x1536');
  assert.equal(v3.generation.delivery_size,'864x1536');
  assert.equal(v3.generation.delivery_transform,'center_crop_864x1536');
  assert.equal(v3.generation.mode,'image_edit_with_prior_keyframes');
  assert.equal(v3.continuity_reference_policy.minimum_prior_keyframes,2);
  assert.equal(v3.continuity_reference_policy.applies_from_frame_index,3);
  assert.equal(v3.continuity_reference_policy.approved_only,true);
  assert.equal(v3.continuity_reference_policy.same_myth_only,true);
  assert.match(v3.continuity_reference_policy.bootstrap.frame_1,/Biblia o tríptico/);
  assert.match(v3.continuity_reference_policy.bootstrap.frame_2,/keyframe 1/);
  assert.match(v3.historical_assets_remain_bound_to,/channel-dna\.v[12]\.json/);
});
test('La majayura conserva 16 keyframes aprobados y entradas Sunburst congeladas',async()=>{
  const path='content/videos/wayuu/videos/la-majayura-que-pierde-a-los-hombres/preproduccion-01/plan.json';
  const plan=JSON.parse(await readFile(path,'utf8'));
  const result=validatePlan(plan);
  assert.equal(result.shots,16); assert.equal(result.words,236); assert.equal(result.generated,16); assert.equal(result.pending,0);
  assert.equal(plan.blocks[0].keyframes[0].generation_inputs.length,2);
  assert.ok(plan.blocks.flatMap(block=>block.keyframes).every(frame=>frame.asset.status==='approved_keyframe'));
  const style=JSON.parse(await readFile(plan.style,'utf8'));
  const prompt=buildPrompt(plan,plan.blocks[0].keyframes[0],style);
  assert.match(prompt,/Imagen 1 · canonical_model/); assert.match(prompt,/Imagen 2 · canonical_model/);
});
test('V3 bloquea preparar el segundo keyframe sin b1a aprobado',async()=>{
  const path='content/videos/wayuu/videos/la-majayura-que-pierde-a-los-hombres/preproduccion-01/plan.json';
  const plan=JSON.parse(await readFile(path,'utf8'));
  const shots=plan.blocks.flatMap(block=>block.keyframes);
  shots[0].asset={status:'not_generated'};
  shots[1].generation_inputs=[];
  assert.throws(()=>validateV3Inputs(plan,shots,1,{requireReady:true}),/faltan al menos dos entradas visuales/);
});
