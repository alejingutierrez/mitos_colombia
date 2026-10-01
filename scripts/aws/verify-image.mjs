import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function verifyImageLabels(labels, snapshot, env) {
  const expected = {
    'org.opencontainers.image.revision': env.GITHUB_SHA,
    'com.mitos.snapshot.sha256': snapshot.sha256,
    'com.mitos.snapshot.verified': String(snapshot.sourceVerified === true),
    'com.mitos.public.ga': env.NEXT_PUBLIC_GA_ID || '',
    'com.mitos.public.gtm': env.NEXT_PUBLIC_GTM_ID || '',
  };
  if (!/^[a-f0-9]{40}$/.test(env.GITHUB_SHA) || !/^[a-f0-9]{64}$/.test(snapshot.sha256)) throw new Error('Invalid immutable build identity.');
  if (!labels || Object.entries(expected).some(([key, value]) => labels[key] !== value)) {
    throw new Error('Existing immutable image differs from the requested source, snapshot or public config. Use a new commit; do not replace its tag.');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const labels = JSON.parse(await readFile('build-input/image-labels.json', 'utf8'));
  const snapshot = JSON.parse(await readFile('build-input/receipt.json', 'utf8'));
  verifyImageLabels(labels, snapshot, process.env);
  console.log('Immutable image matches its source, snapshot and public config.');
}
