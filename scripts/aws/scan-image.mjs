import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { setTimeout } from 'node:timers/promises';
import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const DAY = 24 * 60 * 60 * 1000;
const run = promisify(execFile);
const timestamp = scan => Date.parse(scan?.imageScanFindings?.imageScanCompletedAt);

// Scan-on-push can lag image registration. Never change registry-wide scan rules.
export async function waitForScan({ describe, start, sleep = setTimeout, now = Date.now, attempts = 60, grace = 6, delay = 10000 }) {
  let requested = false;
  for (let i = 0; i < attempts; i++) {
    const scan = await describe();
    const status = scan?.imageScanStatus?.status;
    if (status === 'COMPLETE') {
      const completed = timestamp(scan);
      if (!Number.isFinite(completed)) throw new Error('Completed ECR scan has no timestamp.');
      if (completed > now() + 60000) throw new Error('ECR scan timestamp is in the future.');
      if (now() - completed <= DAY) return scan;
      if (!requested) { await start(); requested = true; }
    } else if (status === 'NOT_FOUND') {
      if (i >= grace && !requested) { await start(); requested = true; }
    } else if (status !== 'IN_PROGRESS' && status !== 'PENDING') {
      throw new Error('ECR scan did not complete: ' + (status || 'missing status'));
    }
    if (i + 1 < attempts) await sleep(delay);
  }
  throw new Error('Timed out waiting for a fresh completed ECR scan. No release published.');
}

export function assertScanSafe(scan, now = Date.now()) {
  if (scan?.imageScanStatus?.status !== 'COMPLETE') throw new Error('ECR scan is incomplete.');
  const completed = timestamp(scan);
  if (!Number.isFinite(completed) || now - completed > DAY || completed > now + 60000) throw new Error('ECR scan is not fresh.');
  const counts = scan?.imageScanFindings?.findingSeverityCounts;
  if (!counts || Object.values(counts).some(n => !Number.isSafeInteger(n) || n < 0)) throw new Error('ECR scan severity counts are invalid.');
  if ((counts.CRITICAL || 0) > 0 || (counts.HIGH || 0) > 0) throw new Error('ECR scan blocks release: ' + JSON.stringify(counts));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const digest = process.argv[2];
  const { AWS_ACCOUNT_ID: account, AWS_REGION: region, ECR_REPOSITORY: repository } = process.env;
  if (account !== '907264907058' || region !== 'us-east-1' || repository !== 'mitos-colombia' || !/^sha256:[a-f0-9]{64}$/.test(digest || '')) throw new Error('Invalid owned ECR scan target.');
  const args = ['--registry-id', account, '--repository-name', repository, '--image-id', 'imageDigest=' + digest, '--region', region, '--output', 'json'];
  const request = async action => JSON.parse((await run('aws', ['ecr', action, ...args], { timeout: 30000, maxBuffer: 16 * 1024 * 1024 })).stdout);
  const scan = await waitForScan({
    describe: async () => {
      try { return await request('describe-image-scan-findings'); }
      catch (error) { if (String(error.stderr).includes('ScanNotFoundException')) return { imageScanStatus: { status: 'NOT_FOUND' } }; throw error; }
    },
    start: async () => {
      try { await request('start-image-scan'); }
      catch (error) { if (!String(error.stderr).includes('LimitExceededException')) throw error; /* A simultaneous scan-on-push may already have consumed the daily scan. Still require its completed result. */ }
    },
  });
  if (scan.registryId !== account || scan.repositoryName !== repository || scan.imageId?.imageDigest !== digest) throw new Error('ECR scan identity differs from the release.');
  await writeFile('build-input/image-scan.json', JSON.stringify(scan, null, 2) + '\n');
  console.log(JSON.stringify({scanStatus: scan.imageScanStatus.status, completedAt: scan.imageScanFindings.imageScanCompletedAt, findingSeverityCounts: scan.imageScanFindings.findingSeverityCounts}));
  assertScanSafe(scan);
}
