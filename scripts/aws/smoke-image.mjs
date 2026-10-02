// Exercise the actual final image, without credentials, database access or provider calls.
import { createRequire } from 'node:module';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const rootRequire = createRequire(path.join(process.cwd(), 'package.json'));
const runtimeRequire = createRequire(path.join(process.cwd(), 'runtime/entrypoint.mjs'));
if (process.arch !== 'arm64') throw new Error('Mitos image must execute native ARM64 code.');
if (typeof rootRequire('pg').Pool !== 'function') throw new Error('PostgreSQL driver missing.');
for (const [name, constructor] of [['sts','STSClient'], ['sqs','SQSClient'], ['s3','S3Client'], ['secrets-manager','SecretsManagerClient']]) {
  const Client = runtimeRequire('@aws-sdk/client-' + name)[constructor];
  const client = new Client({region:'us-east-1'});
  client.destroy();
}
const sharp = rootRequire('sharp');
const png = await sharp(Buffer.from([0,0,0,255]), {raw:{width:1,height:1,channels:4}}).png().toBuffer();
const dimensions = await sharp(png).metadata();
if (dimensions.width !== 1 || dimensions.height !== 1) throw new Error('Native image codec failed.');
const Database = rootRequire('better-sqlite3');
const fixture = new Database(':memory:');
if (fixture.prepare('SELECT 1 AS ok').get().ok !== 1) throw new Error('Native SQLite binding failed.');
fixture.close();
if (spawnSync('/usr/bin/flock',['--version']).status !== 0) throw new Error('Kernel job lock missing.');
await import(path.join(process.cwd(), 'runtime/admin-jobs.mjs'));
console.log(JSON.stringify({kernelJobLock:true, architecture:process.arch, postgresDriver:true, runtimeSdk:true, nativeImageCodec:true, nativeSnapshotBinding:true}));
