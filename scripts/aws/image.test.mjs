import test from 'node:test';
import assert from 'node:assert/strict';
import { verifyImageLabels } from './verify-image.mjs';

const env = { GITHUB_SHA: 'a'.repeat(40), NEXT_PUBLIC_GA_ID: 'G-FIXTURE', NEXT_PUBLIC_GTM_ID: 'GTM-FIXTURE' };
const snapshot = { sha256: 'b'.repeat(64), sourceVerified: false };
const labels = { 'org.opencontainers.image.revision': env.GITHUB_SHA, 'com.mitos.snapshot.sha256': snapshot.sha256, 'com.mitos.snapshot.verified': 'false', 'com.mitos.public.ga': env.NEXT_PUBLIC_GA_ID, 'com.mitos.public.gtm': env.NEXT_PUBLIC_GTM_ID };
test('retry can resume publication only for the identical immutable image', () => {
  assert.doesNotThrow(() => verifyImageLabels(labels, snapshot, env));
  for (const mutation of [
    [labels, { ...snapshot, sha256: 'c'.repeat(64) }, env],
    [labels, { ...snapshot, sourceVerified: true }, env],
    [labels, snapshot, { ...env, GITHUB_SHA: 'd'.repeat(40) }],
    [labels, snapshot, { ...env, NEXT_PUBLIC_GA_ID: 'G-OTHER' }],
    [labels, snapshot, { ...env, NEXT_PUBLIC_GTM_ID: 'GTM-OTHER' }],
    [null, snapshot, env],
  ]) assert.throws(() => verifyImageLabels(...mutation), /immutable image differs/);
});
