// Public build input from the accepted runtime database; no payload/credentials in output.
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import {readFile} from 'node:fs/promises';
import {randomUUID,createHash} from 'node:crypto';
import {verifyRuntimeIdentity} from './guard.mjs';
import {mergeRuntimeSecret} from './environment.mjs';
import {exportPublicSnapshot} from './public-snapshot.mjs';
import {sql} from './postgres.mjs';
await verifyRuntimeIdentity();
if (process.env.MITOS_SNAPSHOT_ACCEPTED !== '1') throw new Error('Migration acceptance gate is closed.');
const region='us-east-1',Bucket='mitos-colombia-907264907058-operations';
const SecretId=process.env.MITOS_RUNTIME_SECRET_ARN;
if (!SecretId?.startsWith('arn:aws:secretsmanager:us-east-1:907264907058:secret:mitos-colombia/prod/runtime-')) throw new Error('Secret ownership mismatch.');
const result=await new SecretsManagerClient({region}).send(new GetSecretValueCommand({SecretId}));
Object.assign(process.env,mergeRuntimeSecret(JSON.parse(result.SecretString),process.env));
const client=await sql.connect();
try {
  const receipt=await exportPublicSnapshot(client,{directory:'/snapshot',sourceVerified:true});
  const s3=new S3Client({region}),prefix='build-input/snapshots/'+randomUUID();
  for (const file of ['catalog.sqlite','receipt.json']) {
    const Body=await readFile('/snapshot/'+file);
    await s3.send(new PutObjectCommand({Bucket,Key:prefix+'/'+file,Body,ChecksumSHA256:createHash('sha256').update(Body).digest('base64'),IfNoneMatch:'*',ServerSideEncryption:'AES256'}));
  }
  const manifest={prefix,sha256:receipt.sha256,sourceVerified:true,at:receipt.at};
  await s3.send(new PutObjectCommand({Bucket,Key:'build-input/current/manifest.json',Body:JSON.stringify(manifest),ContentType:'application/json',ServerSideEncryption:'AES256'}));
  console.log(JSON.stringify(manifest));
} finally {client.release();await sql.end();}
