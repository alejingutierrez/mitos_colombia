import test from 'node:test';
import assert from 'node:assert/strict';
import { waitForScan, assertScanSafe } from './scan-image.mjs';
const now = Date.parse('2026-10-01T12:00:00Z');
const complete = (counts = {}, age = 0) => ({imageScanStatus:{status:'COMPLETE'}, imageScanFindings:{imageScanCompletedAt:new Date(now - age).toISOString(), findingSeverityCounts:counts}});
const missing = {imageScanStatus:{status:'NOT_FOUND'}}, progress = {imageScanStatus:{status:'IN_PROGRESS'}};
const options = {now:()=>now, sleep:async()=>{}, attempts:5, grace:1};

test('scan-on-push registration lag is polled without publishing an incomplete result', async () => {
  const sequence=[missing,progress,complete({LOW:1})];let starts=0;
  const scan=await waitForScan({...options,describe:async()=>sequence.shift(),start:async()=>{starts++}});
  assert.equal(starts,0);assert.doesNotThrow(()=>assertScanSafe(scan,now));
});
test('missing automatic scan starts only the owned image scan once after grace', async () => {
  const sequence=[missing,missing,progress,complete()];let starts=0;
  await waitForScan({...options,describe:async()=>sequence.shift(),start:async()=>{starts++}});
  assert.equal(starts,1);
});
test('retry requires a fresh scan instead of accepting yesterday findings', async () => {
  const sequence=[complete({},25*3600000),progress,complete()];let starts=0;
  await waitForScan({...options,describe:async()=>sequence.shift(),start:async()=>{starts++}});
  assert.equal(starts,1);
});
test('failed, unsupported, expired and missing scan states block release', async () => {
  for(const status of ['FAILED','UNSUPPORTED_IMAGE','SCAN_ELIGIBILITY_EXPIRED',undefined]) {
    await assert.rejects(waitForScan({...options,describe:async()=>({imageScanStatus:{status}}),start:async()=>{}}),/did not complete/);
  }
});
test('unavailable findings time out even if starting a scan returns successfully', async () => {
  let starts=0;
  await assert.rejects(waitForScan({...options,describe:async()=>missing,start:async()=>{starts++}}),/Timed out/);
  assert.equal(starts,1);
});
test('authentication and permission failures propagate without scan retries', async () => {
  let starts=0;
  await assert.rejects(waitForScan({...options,describe:async()=>{throw new Error('AccessDeniedException')},start:async()=>{starts++}}),/AccessDenied/);
  assert.equal(starts,0);
});
test('complete scan with high or critical findings still blocks release', () => {
  for(const counts of [{HIGH:1},{CRITICAL:1},{HIGH:2,MEDIUM:4}]) assert.throws(()=>assertScanSafe(complete(counts),now),/blocks release/);
  assert.doesNotThrow(()=>assertScanSafe(complete({MEDIUM:2,LOW:1}),now));
});
test('invalid or stale scan evidence cannot masquerade as zero findings', async () => {
  for(const scan of [progress,complete({},25*3600000),complete({},-120000),complete({HIGH:-1}),{...complete(),imageScanFindings:{}},complete(null)]) assert.throws(()=>assertScanSafe(scan,now));
  await assert.rejects(waitForScan({...options,describe:async()=>({...complete(),imageScanFindings:{}}),start:async()=>{}}),/no timestamp/);
});
