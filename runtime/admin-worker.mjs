import {spawn} from 'node:child_process';
import {sql} from './postgres.mjs';
import {verifyRuntimeIdentity} from './guard.mjs';
await verifyRuntimeIdentity();
let stopping=false;for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>{stopping=true;});
const run=mode=>new Promise((resolve,reject)=>{
 const args=['-n','/var/lib/mitos/locks/work.lock',process.execPath,'/app/runtime/admin-job.mjs'];if(mode)args.push(mode);
 const child=spawn('/usr/bin/flock',args,{env:process.env,stdio:'inherit'});
 child.on('error',reject);child.on('exit',code=>resolve(code));
});
while(!stopping) {
 try {
  const state=(await sql.query("SELECT EXISTS(SELECT 1 FROM admin_jobs WHERE status='queued') AS queued,EXISTS(SELECT 1 FROM admin_jobs WHERE status='running') AS running")).rows[0];
  if(state.running)await run('recover');
  if(state.queued&&!stopping)await run();
 }catch(error){console.error('Editorial worker unavailable',{code:error.code||error.name});}
 if(!stopping)await new Promise(r=>setTimeout(r,3000));
}
await sql.end();
