import test from 'node:test';
import assert from 'node:assert/strict';
import {computeTargetSize} from '../apply-myth-triptych.mjs';

const wide = {outputWidth:16,outputHeight:9};
const tall = {outputWidth:9,outputHeight:16};
test('preserve-original publica un maestro horizontal 3:2 completo',()=>{
  assert.deepEqual(computeTargetSize({sourceWidth:1536,sourceHeight:1024,preset:wide,preserveOriginal:true}),{width:1536,height:1024});
});
test('preserve-original publica un maestro vertical 2:3 completo',()=>{
  assert.deepEqual(computeTargetSize({sourceWidth:1024,sourceHeight:1536,preset:tall,preserveOriginal:true}),{width:1024,height:1536});
});
test('el reencuadre previo sigue siendo optativo y no cambia',()=>{
  assert.deepEqual(computeTargetSize({sourceWidth:1536,sourceHeight:1024,preset:wide}),{width:1536,height:864});
  assert.deepEqual(computeTargetSize({sourceWidth:1024,sourceHeight:1536,preset:tall}),{width:864,height:1536});
});
