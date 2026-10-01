import { readFile } from 'node:fs/promises';
const snapshot = JSON.parse(await readFile('build-input/receipt.json','utf8'));
const digest = process.argv[2];
const sha = process.env.GITHUB_SHA;
if (!/^sha256:[a-f0-9]{64}$/.test(digest) || !/^[a-f0-9]{40}$/.test(sha)) throw new Error('Invalid immutable release identity.');
console.log(JSON.stringify({ at: new Date().toISOString(), sha, digest, snapshotSha256: snapshot.sha256, sourceVerified: snapshot.sourceVerified === true, schemaVersion: '001-operations', runId: process.env.GITHUB_RUN_ID, publicBuild: { ga: process.env.NEXT_PUBLIC_GA_ID || '', gtm: process.env.NEXT_PUBLIC_GTM_ID || '' } },null,2));
