import test from 'node:test';
import assert from 'node:assert/strict';
import { promoteTriptych, readTriptychSelection } from '../apply-myth-triptych.mjs';

const myth={id:1,updated_at:'2026-09-05T00:00:00Z',slug:'test',title:'Test'};
function mock({changed=false,failInsert=false,vertical=7}={}) {
  const calls=[];
  return {calls, async query(q) {
    calls.push(q);
    if(q.includes('FOR UPDATE'))return {rows:[{updated_at:changed?'2026-09-06T00:00:00Z':myth.updated_at}]};
    if(q.includes('SELECT id, image_url'))return {rows:[{id:vertical}]};
    if(q.includes('INSERT INTO')) { if(failInsert)throw new Error('insert failed'); return {rows:[{id:8}]}; }
    return {rows:[]};
  }};
}
const input=client=>({client,myth,verticalBefore:{id:7},uploaded:{horizontal:'new-h',vertical:'new-v',cuadrada:'new-s'},scenes:{}});
test('promoción atómica: dos punteros nuevos y nueva versión vertical antes de COMMIT',async()=>{
  const client=mock(); assert.equal((await promoteTriptych(input(client))).id,8);
  assert.equal(client.calls[0],'BEGIN'); assert.equal(client.calls.at(-1),'COMMIT');
  assert.equal(client.calls.filter(q=>q.startsWith('UPDATE myths')).length,1);
  assert.equal(client.calls.filter(q=>q.includes('INSERT INTO vertical_images')).length,1);
  assert.ok(client.calls.every(q=>!q.includes('DELETE')&&!q.includes('UPDATE vertical_images')));
});
test('fallo vertical revierte también los punteros horizontales',async()=>{
  const client=mock({failInsert:true}); await assert.rejects(promoteTriptych(input(client)),/insert failed/);
  assert.equal(client.calls.at(-1),'ROLLBACK'); assert.ok(!client.calls.includes('COMMIT'));
});
test('cambio concurrente del mito aborta antes de escribir',async()=>{
  const client=mock({changed:true}); await assert.rejects(promoteTriptych(input(client)),/cambió/);
  assert.ok(!client.calls.some(q=>q.startsWith('UPDATE')));assert.equal(client.calls.at(-1),'ROLLBACK');
});
test('cambio concurrente de vertical aborta antes de escribir',async()=>{
  const client=mock({vertical:9}); await assert.rejects(promoteTriptych(input(client)),/vertical cambió/);
  assert.ok(!client.calls.some(q=>q.startsWith('UPDATE')));
});
test('las selecciones reales preservan hashes, formatos y prompt simbólico',async()=>{
  for(const [slug,file] of [
    ['aramai','content/mitos-visuales/_openai/wayuu/aramai/wayuu-aramai-symbolic-16-01/selection.json'],
    ['el-indio-kuriruputa','content/mitos-visuales/_openai/wayuu/el-indio-kuriruputa/wayuu-kuriruputa-triptych-01/selection.json'],
  ]) { const result=await readTriptychSelection(file,slug);assert.equal(Object.keys(result.files).length,3); }
});
