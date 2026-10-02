import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
const snapshot = JSON.parse(await readFile('build-input/receipt.json','utf8'));
const manifest = JSON.parse(await readFile('build-input/manifest.json','utf8'));
const digest = process.argv[2];
const sha = process.env.GITHUB_SHA;
if (!/^sha256:[a-f0-9]{64}$/.test(digest) || !/^[a-f0-9]{40}$/.test(sha)) throw new Error('Invalid immutable release identity.');
const hostHelpers = Object.fromEntries(await Promise.all(['deploy.sh','deploy-inbox.sh'].map(async name => [name, createHash('sha256').update(await readFile('infra/aws/host/'+name)).digest('hex')])));
console.log(JSON.stringify({ hostHelpers, at: new Date().toISOString(), sha, digest, snapshotSha256: snapshot.sha256, snapshotPrefix: manifest.prefix, sourceVerified: snapshot.sourceVerified === true, schemaVersion: '002-admin-jobs', runId: process.env.GITHUB_RUN_ID, publicBuild: { ga: process.env.NEXT_PUBLIC_GA_ID || '', gtm: process.env.NEXT_PUBLIC_GTM_ID || '' } },null,2));
