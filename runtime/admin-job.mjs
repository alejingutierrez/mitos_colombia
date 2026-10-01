// One bounded job container. A paid/ambiguous task is never retried automatically.
import {spawn} from 'node:child_process';
import {S3Client,PutObjectCommand,GetObjectCommand} from '@aws-sdk/client-s3';
import {createHash} from 'node:crypto';
import {sql} from './postgres.mjs';
import {verifyRuntimeIdentity} from './guard.mjs';
import {ADMIN_JOB_PATHS} from './admin-jobs.mjs';
await verifyRuntimeIdentity();
const delay=ms=>new Promise(r=>setTimeout(r,ms));
if(process.argv[2]==='recover') {
 await sql.query("UPDATE admin_jobs SET status='needs_review',result=$1,result_status=500,finished_at=NOW() WHERE status='running'",[JSON.stringify({error:'El worker se interrumpió; revisa el resultado antes de volver a generar.'})]);
 await sql.end();process.exit(0);
}
let job,child;

 try {
  const db=await sql.connect();try{
   await db.query('BEGIN');job=(await db.query("SELECT id,path,payload FROM admin_jobs WHERE status='queued' ORDER BY created_at FOR UPDATE SKIP LOCKED LIMIT 1")).rows[0];
   if(job)await db.query("UPDATE admin_jobs SET status='running',started_at=NOW() WHERE id=$1",[job.id]);await db.query('COMMIT');
  }catch(error){await db.query('ROLLBACK');throw error;}finally{db.release();}
  if(!job){await sql.end();process.exit(0);}
  let result,resultStatus=200;
  if(job.path==='@infrastructure-check') {
   const s3=new S3Client({region:'us-east-1'}),Bucket='mitos-colombia-907264907058-operations',Key='qa/jobs/'+job.id+'/probe.json',Body=Buffer.from(JSON.stringify({id:job.id,fixture:true}));
   const hash=createHash('sha256').update(Body).digest('hex');
   const saved=await s3.send(new PutObjectCommand({Bucket,Key,Body,IfNoneMatch:'*',ServerSideEncryption:'AES256',ChecksumSHA256:createHash('sha256').update(Body).digest('base64')}));
   const fetched=await s3.send(new GetObjectCommand({Bucket,Key,VersionId:saved.VersionId}));
   if(createHash('sha256').update(await fetched.Body.transformToByteArray()).digest('hex')!==hash)throw new Error('Storage verification failed.');
   result={success:true,fixture:true,database:(await sql.query('SELECT current_database() AS name')).rows[0].name,storageVersion:saved.VersionId,sha256:hash};
  } else {
   if(!ADMIN_JOB_PATHS.has(job.path))throw new Error('Unsupported job route.');
   child=spawn(process.execPath,['/app/server.js'],{env:{...process.env,MITOS_PROCESS:'job',HOSTNAME:'127.0.0.1',PORT:'3000',NODE_OPTIONS:'--max-old-space-size=256'},stdio:'ignore'});
   let ready=false;for(let n=0;n<30;n++){
    if(child.exitCode!==null)throw new Error('Job application failed.');
    try{ready=(await fetch('http://127.0.0.1:3000/api/health/ready',{signal:AbortSignal.timeout(2000)})).ok;}catch{/* wait for own server */}
    if(ready)break;await delay(500);
   }
   if(!ready)throw new Error('Job application unavailable.');
   const response=await fetch('http://127.0.0.1:3000'+job.path,{method:'POST',headers:{'Content-Type':'application/json',authorization:'Basic '+Buffer.from(process.env.ADMIN_USERNAME+':'+process.env.ADMIN_PASSWORD).toString('base64')},body:JSON.stringify(job.payload),signal:AbortSignal.timeout(1800000)});
   const text=await response.text();if(Buffer.byteLength(text)>4194304)throw new Error('Job result too large.');result=JSON.parse(text);resultStatus=response.status;
  }
  await sql.query('UPDATE admin_jobs SET status=$2,result=$3,result_status=$4,finished_at=NOW() WHERE id=$1',[job.id,resultStatus>=400?'failed':'succeeded',JSON.stringify(result),resultStatus]);
 }catch(error){
  if(job)await sql.query("UPDATE admin_jobs SET status='needs_review',result=$2,result_status=500,finished_at=NOW() WHERE id=$1",[job.id,JSON.stringify({error:'El trabajo requiere revisión. No se reintenta automáticamente para evitar duplicar generación.'})]).catch(()=>{});
  console.error('Editorial job requires attention',{code:error.code||error.name,jobId:job?.id});await delay(2000);
 }finally{
  if(child){child.kill('SIGTERM');for(let n=0;n<20&&child.exitCode===null;n++)await delay(250);if(child.exitCode===null)child.kill('SIGKILL');}
 }
await sql.end();
