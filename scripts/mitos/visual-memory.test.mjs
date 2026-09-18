import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {validateVisualMemoryReview} from './triptych-story-direction.mjs';
const plan=JSON.parse(fs.readFileSync('content/mitos-visuales/wayuu.ipuana.triptico.v1.1.json','utf8'));
const library=JSON.parse(fs.readFileSync('content/mitos-visuales/wayuu.visual-memory.v1.json','utf8'));
const myth=plan.mitos['el-indio-guerrero-ipuana'];
const clone=value=>JSON.parse(JSON.stringify(value));
test('memoria visual cubre los 27 mitos sin llamar histórica cultural a toda versión',()=>{
  assert.equal(Object.keys(library.myths).length,27);
  assert.ok(Object.values(library.myths).every(m=>m.references.length>0));
  assert.ok(Object.values(library.myths).flatMap(m=>m.references).every(r=>r.cultural_authority==='none_from_image_alone'));
});
test('Ipuana registra inspección y decisiones por función',()=>assert.doesNotThrow(()=>validateVisualMemoryReview(myth,library)));
test('no admite una referencia sin inspeccionar',()=>{
  const copy=clone(library);for(const r of copy.myths[myth.narrative_contract.target_slug].references)r.visual_review='not_yet_inspected';
  assert.throws(()=>validateVisualMemoryReview(myth,copy),/aún no inspeccionada/);
});
test('no admite referencia de otro mito',()=>{
  const copy=clone(myth);copy.visual_memory_review.reviewed_reference_ids=['another-myth'];
  assert.throws(()=>validateVisualMemoryReview(copy,library),/otro mito/);
});
test('no basta inventariar URLs sin interpretar la influencia',()=>{
  const copy=clone(myth);delete copy.visual_memory_review.influence_by_act.huella;
  assert.throws(()=>validateVisualMemoryReview(copy,library),/huella/);
});
