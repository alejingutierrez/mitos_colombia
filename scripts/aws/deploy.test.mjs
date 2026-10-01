import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const sha='a'.repeat(40), digest='sha256:'+ 'b'.repeat(64);
const image='907264907058.dkr.ecr.us-east-1.amazonaws.com/mitos-colombia@'+digest;
const old={sha:'c'.repeat(40),digest:'sha256:'+'d'.repeat(64),container:'mitos-web-old',port:3102};
const cli=String.raw`
import fs from 'node:fs';
import path from 'node:path';
const [cmd,...a]=process.argv.slice(2), root=process.env.MITOS_TEST_ROOT;
const stateFile=root+'/state.json',s=JSON.parse(fs.readFileSync(stateFile));
const conf=root+'/etc/nginx/mitos-upstream.conf';
const port=()=>Number(fs.readFileSync(conf,'utf8').match(/127\.0\.0\.1:(\d+)/)[1]);
const end=(code=0,out='')=>{fs.writeFileSync(stateFile,JSON.stringify(s));if(out)process.stdout.write(out);process.exit(code)};
s.calls.push([cmd,...a]);
if(['flock','sleep'].includes(cmd))end();
if(cmd==='awk')end(0,'1500000\n');
if(cmd==='install'){
 const args=[];for(let i=0;i<a.length;i++){if(['-o','-g','-m'].includes(a[i])){i++;continue}if(a[i]!=='-d')args.push(a[i])}
 if(a.includes('-d')){for(const p of args)fs.mkdirSync(p,{recursive:true})}else{fs.copyFileSync(args[0],args[1])}end();
}
if(cmd==='aws'){
 if(a[0]==='sts')end(0,'907264907058\n');
 if(a[0]==='ecr')end(0,'fixture-only\n');
 if(a[0]==='s3'&&a[1]==='cp'){
  if(a[2].startsWith('s3:'))fs.writeFileSync(a[3],JSON.stringify(s.release));
  else if(['receipt','rollback'].includes(s.failure))end(1);
  end();
 }
}
if(cmd==='docker'){
 const action=a[0],name=a.at(-1);
 if(action==='login'){fs.readFileSync(0);end()}
 if(['logout','pull'].includes(action))end();
 if(action==='inspect'){const c=s.containers[name];end(c?0:1,c?JSON.stringify([{State:{Running:c.running},RestartCount:0,Config:{Image:c.image}}]):'')}
 if(action==='run'){
  const n=a[a.indexOf('--name')+1];
  if(n==='mitos-payment-worker'&&s.failure==='worker')end(1);
  if(s.containers[n])end(1);
  const binding=a.includes('-p')?a[a.indexOf('-p')+1]:'';
  s.containers[n]={running:true,port:binding?Number(binding.split(':')[1]):null,image:a.at(-2)};end(0,'fixture-container\n');
 }
 if(action==='stop'||action==='start'){if(!s.containers[name])end(1);s.containers[name].running=action==='start';end()}
 if(action==='rm'){delete s.containers[name];end()}
 if(action==='rename'){if(!s.containers[a[1]]||s.containers[a[2]])end(1);s.containers[a[2]]=s.containers[a[1]];delete s.containers[a[1]];end()}
}
if(cmd==='nginx'){
 if(s.failure==='nginx'&&port()===3101&&!s.nginxFailed){s.nginxFailed=true;end(1)}end();
}
if(cmd==='systemctl'){
 const p=port(),healthy=s.firstRelease&&p===3102||Object.values(s.containers).some(c=>c.port===p&&c.running);
 s.reloads.push({port:p,healthy});if(!healthy)end(1);s.proxy=p;end();
}
if(cmd==='curl'){
 const url=a.at(-1);
 if(url.startsWith('https:')){if(s.failure==='public')end(22);end(0,JSON.stringify({sha:s.release.sha}))}
 let p=Number(new URL(url).port);if(p===3080)p=s.proxy;
 if(s.failure==='rollback'&&p===3102)end(22);
 const c=Object.values(s.containers).find(c=>c.port===p&&c.running);
 if(!c)end(22);end(0,JSON.stringify({sha:s.release.sha}));
}
end(1,'Unhandled fake command: '+cmd+' '+a.join(' '));
`;

async function scenario(failure='',firstRelease=false,retry=false){
 const root=await mkdtemp(path.join(os.tmpdir(),'mitos-deploy-test-'));
 try{
  for(const p of ['bin','opt/mitos','etc/nginx','var/lib/mitos','var/lock'])await mkdir(path.join(root,p),{recursive:true});
  await writeFile(root+'/opt/mitos/cutover-complete','fixture');
  await writeFile(root+'/opt/mitos/runtime.env','fixture-only');
  await writeFile(root+'/etc/nginx/mitos-upstream.conf','upstream mitos_web { server 127.0.0.1:3102; }\n');
  if(!firstRelease)await writeFile(root+'/var/lib/mitos/active.json',JSON.stringify(old));
  const containers=firstRelease?{}:{[old.container]:{running:true,port:3102,image:'old'},'mitos-payment-worker':{running:true,port:null,image:'old'}};
  if(retry)containers['mitos-web-'+sha]={running:false,port:3101,image};
  await writeFile(root+'/state.json',JSON.stringify({failure,firstRelease,containers,proxy:3102,calls:[],reloads:[],release:{sha,digest,sourceVerified:true,schemaVersion:'001-operations'}}));
  await writeFile(root+'/cli.mjs',cli);
  const quote=s=>"'"+s.replaceAll("'","'\\''")+"'";
  for(const cmd of ['flock','sleep','awk','install','aws','docker','nginx','systemctl','curl']){
   await writeFile(root+'/bin/'+cmd,'#!/bin/sh\nexec '+quote(process.execPath)+' '+quote(root+'/cli.mjs')+' '+quote(cmd)+' "$@"\n',{mode:0o755});
  }
  // Redirect host paths only in the test copy; the production script has no bypass flags.
  const source=await readFile(new URL('../../infra/aws/host/deploy.sh',import.meta.url),'utf8');
  const redirected=source.replaceAll('/opt/mitos',root+'/opt/mitos').replaceAll('/var/lib/mitos',root+'/var/lib/mitos').replaceAll('/var/lock/mitos',root+'/var/lock/mitos').replaceAll('/etc/nginx',root+'/etc/nginx');
  await writeFile(root+'/deploy.sh',redirected);
  const result=spawnSync('bash',[root+'/deploy.sh',sha,digest],{env:{...process.env,PATH:root+'/bin:'+process.env.PATH,MITOS_TEST_ROOT:root},encoding:'utf8',timeout:60000});
  const state=JSON.parse(await readFile(root+'/state.json','utf8'));
  let active=null;try{active=JSON.parse(await readFile(root+'/var/lib/mitos/active.json','utf8'))}catch{ /* A failed initial release has no active metadata. */ }
  return {result,state,active};
 }finally{await rm(root,{recursive:true,force:true})}
}

for(const failure of ['public','nginx','worker','receipt']){
 test('failed '+failure+' restores a healthy previous upstream and worker',async()=>{
  const {result,state,active}=await scenario(failure);
  assert.notEqual(result.status,0,result.stderr);
  assert.equal(state.proxy,old.port);
  assert.equal(state.containers[old.container].running,true);
  assert.equal(state.containers['mitos-payment-worker'].running,true);
  assert.equal(state.containers['mitos-payment-worker'].image,'old');
  assert.ok(state.containers['mitos-web-'+sha],result.stderr);
  assert.equal(state.containers['mitos-web-'+sha].running,false);
  assert.deepEqual(active,old);
  assert.ok(state.reloads.every(r=>r.healthy),'never reload traffic to a stopped predecessor');
 });
}
test('failed first release returns to maintenance and removes its active metadata',async()=>{
 const {result,state,active}=await scenario('worker',true);
 assert.notEqual(result.status,0);
 assert.equal(state.proxy,3102);assert.equal(active,null);
 assert.ok(state.containers['mitos-web-'+sha],result.stderr);
  assert.equal(state.containers['mitos-web-'+sha].running,false);
});
test('retry removes only its abandoned candidate and completes a new release',async()=>{
 const {result,state,active}=await scenario('',false,true);
 assert.equal(result.status,0,result.stderr);
 assert.equal(active.sha,sha);assert.equal(state.proxy,3101);
 assert.equal(state.containers['mitos-payment-worker'].image,image);
 assert.equal(state.containers[old.container].running,false);
});
test('an unhealthy predecessor prevents teardown of the still serving candidate',async()=>{
 const {result,state,active}=await scenario('rollback');
 assert.notEqual(result.status,0,result.stderr);
 assert.match(result.stderr,/candidate retained for recovery/);
 assert.equal(state.proxy,3101);
 assert.equal(active.sha,sha);assert.equal(state.containers['mitos-web-'+sha].running,true);
});
