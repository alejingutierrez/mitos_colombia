import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { postgresOptions, taggedClient } from '../../runtime/postgres.mjs';
import { authRateLimitKeys } from '../../runtime/auth-rate-limits.mjs';
import { createS3Storage, safeObjectKey, mediaContentType } from '../../runtime/storage.mjs';
import { enqueuePayment } from '../../runtime/payment-queue.mjs';
import { mergeRuntimeSecret } from '../../runtime/environment.mjs';
import { createLazyOpenAI } from '../../runtime/openai.mjs';
import { verifyRuntimeIdentity } from '../../runtime/guard.mjs';
const require = createRequire(import.meta.url);
const Cache = require('../../cache-handler.cjs');

test('SQL values remain parameters, including arrays and hostile strings; transaction client stays pinned', async () => {
  const calls=[];
  const client=taggedClient({query: async (...a)=>{calls.push(a);return {rows:[]}},release(){calls.push(['released'])}});
  const hostile="x'; DROP TABLE myths; --";
  await client`SELECT * FROM myths WHERE slug=${hostile} AND id=ANY(${[1,2]})`;
  assert.deepEqual(calls[0],['SELECT * FROM myths WHERE slug=$1 AND id=ANY($2)',[hostile,[1,2]]]);
  await client.query('BEGIN'); await client.query('ROLLBACK'); client.release();
  assert.equal(calls.length,4);
});
test('AWS rejects missing CA and foreign/non-RDS endpoints; a pool stays bounded', () => {
  assert.throws(()=>postgresOptions({MITOS_RUNTIME:'aws',POSTGRES_URL:'postgres://user:pass@localhost/db'}),/dedicated RDS/);
  assert.throws(()=>postgresOptions({MITOS_RUNTIME:'aws',POSTGRES_URL:'postgres://user:pass@own.rds.amazonaws.com/db'}),/CA/);
  assert.throws(()=>postgresOptions({POSTGRES_URL:'postgres://user:pass@localhost/db',MITOS_PG_POOL_MAX:'999'}),/Pool/);
  assert.equal(postgresOptions({POSTGRES_URL:'postgres://user:pass@localhost/db'}).max,5);
});
test('S3 versions are preserved and delete cannot cross host/prefix or traverse keys', async () => {
  const calls=[];const storage=createS3Storage({bucket:'mitos-owned',baseUrl:'https://media.example.com/media/',client:{send:async cmd=>{calls.push(cmd.input);return {VersionId:'v1'}}}});
  const result=await storage.put('mitos/niño.jpg',Buffer.from('image'),{access:'public',addRandomSuffix:false});
  assert.equal(result.url,'https://media.example.com/media/mitos/ni%C3%B1o.jpg');
  assert.equal(calls[0].IfNoneMatch,'*');
  await storage.del(result.url);assert.equal(calls[1].Key,'mitos/niño.jpg');assert.equal(calls[1].VersionId,undefined);
  await assert.rejects(storage.del('https://foreign.example/media/mitos/x.jpg'),/outside/);
  await assert.rejects(storage.del('https://media.example.com/other/x.jpg'),/outside/);
  assert.throws(()=>safeObjectKey('../secrets'),/Invalid/);
});
test('mutable assets do not get a year of immutable caching',async()=>{
  let input;const storage=createS3Storage({bucket:'mitos-owned',baseUrl:'https://media.example.com/',client:{send:async c=>{input=c.input;return {}}}});
  await storage.put('x.jpg',Buffer.from('image'),{addRandomSuffix:false,allowOverwrite:true});
  assert.equal(input.CacheControl,'public, max-age=60');assert.equal(input.IfNoneMatch,undefined);
});
test('S3 pagination preserves the provider continuation token',async()=>{
  let input;const storage=createS3Storage({bucket:'mitos-owned',baseUrl:'https://media.example.com/',client:{send:async c=>{input=c.input;return {IsTruncated:true,NextContinuationToken:'next',Contents:[{Key:'mitos/1.jpg',Size:12}]}}}});
  const result=await storage.list({prefix:'mitos/',cursor:'opaque',limit:1000});
  assert.equal(input.ContinuationToken,'opaque');assert.equal(result.cursor,'next');assert.equal(result.hasMore,true);assert.equal(result.blobs[0].size,12);
});
test('different releases share tag invalidation and preserve isolated buffers',async()=>{
  const dir=await mkdtemp(path.join(os.tmpdir(),'mitos-cache-test-'));
  const priorDir=process.env.MITOS_CACHE_DIR,priorSha=process.env.MITOS_DEPLOYMENT_SHA;process.env.MITOS_CACHE_DIR=dir;
  try {
    process.env.MITOS_DEPLOYMENT_SHA='old';const active=new Cache();
    await active.set('opaque-key',{kind:'IMAGE',buffer:Buffer.from('image')},{tags:['myths']});
    assert.equal((await active.get('opaque-key')).value.buffer.toString(),'image');
    process.env.MITOS_DEPLOYMENT_SHA='new';const candidate=new Cache();
    assert.equal(await candidate.get('opaque-key'),null);
    await candidate.set('opaque-key',{kind:'FETCH',data:{body:'candidate'}},{tags:['myths']});
    await candidate.revalidateTag('myths');
    assert.equal(await active.get('opaque-key'),null);assert.equal(await candidate.get('opaque-key'),null);
    await candidate.set('opaque-key',{kind:'FETCH',data:{body:'new'}},{tags:['myths']});
    assert.equal((await candidate.get('opaque-key')).value.data.body,'new');
    assert.equal(await active.get('opaque-key'),null);
  } finally {
    if(priorDir===undefined)delete process.env.MITOS_CACHE_DIR;else process.env.MITOS_CACHE_DIR=priorDir;
    if(priorSha===undefined)delete process.env.MITOS_DEPLOYMENT_SHA;else process.env.MITOS_DEPLOYMENT_SHA=priorSha;
    await rm(dir,{recursive:true,force:true});
  }
});
test('payment receipt succeeds only after the queue confirms durable acceptance',async()=>{
  const raw='{"id":"fixture","type":"SALE_APPROVED"}';let message;
  await assert.rejects(enqueuePayment(raw,'signature',{send:async()=>{throw new Error('unavailable')}},'queue'),/unavailable/);
  await assert.rejects(enqueuePayment(raw,'signature',{send:async()=>({})},'queue'),/confirm/);
  assert.equal(await enqueuePayment(raw,'signature',{send:async c=>{message=JSON.parse(c.input.MessageBody);return {MessageId:'confirmed'}}},'queue'),'confirmed');
  assert.equal(message.rawBody,raw);assert.equal(message.signature,'signature');
});
test('runtime must assume a Mitos role in the authorized account',async()=>{
  const env={MITOS_RUNTIME:'aws',AWS_REGION:'us-east-1'};
  await assert.rejects(verifyRuntimeIdentity(env,{send:async()=>({Account:'foreign',Arn:'arn:foreign'})}),/identity/);
  await verifyRuntimeIdentity(env,{send:async()=>({Account:'907264907058',Arn:'arn:aws:sts::907264907058:assumed-role/mitos-colombia-prod-instance/i-owned'})});
});

test('runtime config refuses process injection and foreign database users', () => {
  assert.throws(() => mergeRuntimeSecret({NODE_OPTIONS:'--inspect'},{}), /Unexpected/);
  const secret = { ADMIN_USERNAME:'fixture', ADMIN_PASSWORD:'fixture-only', POSTGRES_URL:'postgres://mitos_app:fixture@own.rds.amazonaws.com/mitos', MITOS_PAYMENT_WORKER_TOKEN:'fixture-only', NEXT_PUBLIC_SITE_URL:'https://www.mitosdecolombia.com' };
  assert.equal(mergeRuntimeSecret(secret,{MITOS_RDS_HOST:'own.rds.amazonaws.com'}).ADMIN_USERNAME,'fixture');
  assert.throws(() => mergeRuntimeSecret({...secret, POSTGRES_URL:'postgres://mitos_admin:fixture@own.rds.amazonaws.com/mitos'},{MITOS_RDS_HOST:'own.rds.amazonaws.com'}),/application account/);
});
test('build can import provider clients without a secret; invocation still requires credentials', () => {
  const client = createLazyOpenAI({apiKey:undefined});
  assert.ok(client);
  assert.throws(() => client.images, /Missing credentials/);
});

test('changing email cannot reset the IP limit, and changing IP cannot reset the account limit', () => {
  const a=authRateLimitKeys('login','2001:db8::1','one@example.invalid');
  const spray=authRateLimitKeys('login','2001:db8::1','two@example.invalid');
  const distributed=authRateLimitKeys('login','2001:db8::2','one@example.invalid');
  assert.equal(a[0],spray[0]); assert.equal(a[1],distributed[1]);
  assert.notEqual(a[0],distributed[0]); assert.notEqual(a[1],spray[1]);
});
test('media without an explicit type retains usable image, audio and font MIME types', () => {
  assert.equal(mediaContentType('mitos/x.jpg'),'image/jpeg');
  assert.equal(mediaContentType('narration/x.mp3'),'audio/mpeg');
  assert.equal(mediaContentType('x.woff2'),'font/woff2');
  assert.equal(mediaContentType('x.bin',null,'image/png'),'image/png');
});

// Next stores APP_PAGE/APP_ROUTE invalidation tags in the response headers.
// This mirrors the observed stage edit: PUT persisted while cached HTML stayed old.
test('route response tags invalidate prerendered HTML and RSC across processes',async()=>{
 const dir=await mkdtemp(path.join(os.tmpdir(),'mitos-page-cache-test-'));const before=process.env.MITOS_CACHE_DIR;process.env.MITOS_CACHE_DIR=dir;
 try{
  const reader=new Cache(),writer=new Cache();const routeTag='_N_T_/mitos/qa-cache';
  await reader.set('/mitos/qa-cache',{kind:'APP_PAGE',html:'old title',rscData:Buffer.from('old RSC'),headers:{'x-next-cache-tags':'_N_T_/layout,'+routeTag}},{kind:'APP_PAGE'});
  assert.equal((await reader.get('/mitos/qa-cache',{kind:'APP_PAGE'})).value.html,'old title');
  await writer.revalidateTag(routeTag,{expire:0});
  assert.equal(await reader.get('/mitos/qa-cache',{kind:'APP_PAGE'}),null);
  await writer.set('/mitos/qa-cache',{kind:'APP_PAGE',html:'new title',rscData:Buffer.from('new RSC'),headers:{'x-next-cache-tags':routeTag}},{kind:'APP_PAGE'});
  assert.equal((await reader.get('/mitos/qa-cache',{kind:'APP_PAGE'})).value.rscData.toString(),'new RSC');
 }finally{if(before===undefined)delete process.env.MITOS_CACHE_DIR;else process.env.MITOS_CACHE_DIR=before;await rm(dir,{recursive:true,force:true});}
});
