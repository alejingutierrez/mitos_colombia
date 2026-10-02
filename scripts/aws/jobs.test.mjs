import test from 'node:test';
import assert from 'node:assert/strict';
import {maybeQueueAdminJob,enqueueAdminJob,readAdminJob} from '../../runtime/admin-jobs.mjs';
import {adminFetch} from '../../src/lib/admin-fetch.js';
const env={MITOS_RUNTIME:'aws',ADMIN_USERNAME:'fixture-admin',ADMIN_PASSWORD:'fixture-only'};
const authorization='Basic '+Buffer.from('fixture-admin:fixture-only').toString('base64');
const request=(path='/api/admin/tarot/regenerate',auth=authorization,body={cardId:1})=>new Request('https://www.mitosdecolombia.com'+path,{method:'POST',headers:{authorization:auth,'Content-Type':'application/json'},body:JSON.stringify(body)});
test('unauthenticated editorial requests never create a paid job',async()=>{
 let calls=0;const db={query:async()=>{calls++;return {rows:[]}}};
 assert.equal((await maybeQueueAdminJob(request(undefined,'Basic bad'),env,db)).status,401);assert.equal(calls,0);
 assert.equal(await maybeQueueAdminJob(request(),{...env,MITOS_RUNTIME:'vercel'},db),null);assert.equal(calls,0);
});
test('queue accepts only known routes, bounds payload and persists no request authorization header',async()=>{
 const calls=[],db={query:async(...a)=>{calls.push(a);return {rows:[]}}};
 const response=await maybeQueueAdminJob(request(undefined,authorization,{cardId:1,notes:"x'; --"}),env,db);
 assert.equal(response.status,202);assert.match((await response.json()).mitosJob.id,/^[a-f0-9-]{36}$/);
 assert.match(calls[0][0],/VALUES\(\$1,\$2,\$3,\$4\)/);assert.deepEqual(JSON.parse(calls[0][1][2]),{cardId:1,notes:"x'; --"});assert.equal(calls[0][1][2].includes(authorization),false);
 await assert.rejects(enqueueAdminJob('https://foreign.example/steal',{},{query:()=>assert.fail('No SQL')}),/Unsupported/);
 await assert.rejects(enqueueAdminJob('/api/admin/tarot/regenerate',{notes:'a'.repeat(262145)},{query:()=>assert.fail('No SQL')}),/too large/);
});
test('job status requires admin credentials and hides private payload',async()=>{
 const id='12345678-1234-1234-1234-123456789abc',db={query:async(sql,args)=>{assert.equal(args[0],id);assert.doesNotMatch(sql,/SELECT.*payload/);return {rows:[{id,status:'needs_review',result:{error:'Review'},result_status:500}]}}};
 assert.equal((await readAdminJob(request(undefined,'bad'),id,env,db)).status,401);
 assert.equal((await readAdminJob(request(),id,env,db)).headers.get('cache-control'),'no-store');
});
test('existing forms poll an accepted job and receive its original result without submitting it twice',async()=>{
 const previousFetch=globalThis.fetch,previousTimeout=globalThis.setTimeout;const calls=[];
 globalThis.setTimeout=fn=>{queueMicrotask(fn);return 0};
 globalThis.fetch=async(input,init)=>{
  calls.push({input,init});
  if(calls.length===1)return Response.json({mitosJob:{id:'12345678-1234-1234-1234-123456789abc'}},{status:202});
  assert.equal(init.headers.authorization,authorization);assert.equal(init.body,undefined);
  return Response.json(calls.length===2?{status:'running'}:{status:'succeeded',result:{success:true,data:{image:'owned-cdn'}},result_status:200});
 };
 try{assert.deepEqual(await (await adminFetch('/api/admin/tarot/regenerate',{method:'POST',headers:{authorization},body:'{"cardId":1}'})).json(),{success:true,data:{image:'owned-cdn'}});assert.equal(calls.filter(c=>c.init.method==='POST').length,1);}finally{globalThis.fetch=previousFetch;globalThis.setTimeout=previousTimeout;}
});
