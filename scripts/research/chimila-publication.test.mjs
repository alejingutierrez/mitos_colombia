import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { readTriptychSelection, computeTargetSize } from '../apply-myth-triptych.mjs';

test('Chimila: lote exacto de 23 trípticos íntegros y calidad alta real', async () => {
  const folder = 'content/videos/chimila/publication-selections/api09';
  const names = (await fs.readdir(folder)).filter(n => n.endsWith('.json'));
  const ids = [];
  const files = [];
  for (const name of names) {
    const file = path.join(folder, name);
    const selection = JSON.parse(await fs.readFile(file, 'utf8'));
    ids.push(selection.myth_id);
    assert.equal(selection.schema, 'ette-reviewed-triptych-publication/v1');
    assert.match(selection.narrative_target_sha256, /^[a-f0-9]{64}$/);
    assert.match(selection.mito_target_sha256, /^[a-f0-9]{64}$/);
    const resolved = await readTriptychSelection(file, selection.myth);
    assert.equal(Object.keys(resolved.files).length, 3);
    files.push(...Object.values(resolved.files));
    assert.ok(selection.selected.every(e => e.quality === 'high'));
  }
  assert.deepEqual(ids.sort((a,b)=>a-b), [...Array.from({length:21},(_,i)=>346+i),579,580]);
  assert.equal(new Set(files).size, 69);
});

test('Chimila: preservar el maestro no impone otra proporción', () => {
  for (const [sourceWidth, sourceHeight] of [[1536,1024],[1024,1536],[1024,1024]]) {
    assert.deepEqual(computeTargetSize({sourceWidth,sourceHeight,preset:{outputWidth:16,outputHeight:9},preserveOriginal:true}), {width:sourceWidth,height:sourceHeight});
  }
});
