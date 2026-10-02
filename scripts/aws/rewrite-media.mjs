// Only the unpublished owned RDS copy. Historical source/freeze files stay intact.
import pg from 'pg';
import {readFile,writeFile} from 'node:fs/promises';
import {SecretsManagerClient,GetSecretValueCommand} from '@aws-sdk/client-secrets-manager';
import {S3Client,HeadObjectCommand} from '@aws-sdk/client-s3';
const [ledgerPath,receiptPath,mode='plan']=process.argv.slice(2);
if(!ledgerPath||!receiptPath||!['plan','apply-to-unpublished-copy'].includes(mode))throw new Error('Reviewed ledger and explicit mode required.');
const oldBase='https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/',newBase='https://media.mitosdecolombia.com/blob/';
const records=(await readFile(ledgerPath,'utf8')).trim().split('\n').filter(Boolean).map(JSON.parse).filter(r=>r.status==='VERIFIED');
const keys=new Set(records.map(r=>r.pathname));
const host='mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com';
const secret=await new SecretsManagerClient({region:'us-east-1'}).send(new GetSecretValueCommand({SecretId:'mitos-colombia/prod/mitos_migrator'}));const url=new URL(JSON.parse(secret.SecretString).POSTGRES_URL);
if(url.hostname!==host||url.pathname!=='/mitos'||url.username!=='mitos_migrator')throw new Error('Migration DB ownership mismatch.');
const tunnel=process.env.MITOS_OPERATOR_TUNNEL_PORT;if(tunnel&&!/^\d{4,5}$/.test(tunnel))throw new Error('Invalid private tunnel.');
const c=new pg.Client({host:tunnel?'127.0.0.1':host,port:tunnel?Number(tunnel):5432,user:url.username,password:decodeURIComponent(url.password),database:'mitos',ssl:{rejectUnauthorized:true,ca:await readFile('infra/aws/certs/us-east-1-bundle.pem','utf8'),servername:host},connectionTimeoutMillis:10000,statement_timeout:60000});
const owned=new Set(['comments','communities','contact_messages','editorial_myth_keywords','editorial_myth_research','editorial_myth_tags','editorial_myths','home_banners','myth_keywords','myth_narrations','myth_tags','myths','narration_beds','regions','seo_pages','tags','tarot_cards','tarot_orders','tarot_user_sessions','tarot_users','vertical_images']);const q=s=>'"'+s.replaceAll('"','""')+'"';
await c.connect();try{
 const assertUnpublished=async()=>{
  const s3=new S3Client({region:'us-east-1'});
  for(const Key of ['cutover/accepted.json','cutover/writer-opened.json']){
   try{await s3.send(new HeadObjectCommand({Bucket:'mitos-colombia-907264907058-operations',Key}));throw new Error('Activated destination cannot be rewritten');}
   catch(e){if(e.name!=='NotFound'&&e.$metadata?.httpStatusCode!==404)throw e;}
  }
  if((await c.query("SELECT count(*)::int n FROM pg_stat_activity WHERE datname='mitos' AND usename='mitos_app'")).rows[0].n!==0)throw new Error('Destination application connections remain');
 };
 if(mode==='apply-to-unpublished-copy')await assertUnpublished();
 await c.query('BEGIN ISOLATION LEVEL REPEATABLE READ');
 const columns=(await c.query("SELECT table_name,column_name FROM information_schema.columns WHERE table_schema='public' AND data_type IN ('text','character varying') ORDER BY table_name,ordinal_position")).rows.filter(r=>owned.has(r.table_name));
 const plan=[],missing=new Set();
 for(const {table_name:t,column_name:col} of columns){const rows=(await c.query('SELECT '+q(col)+' AS value FROM public.'+q(t)+' WHERE strpos('+q(col)+',$1)>0',[oldBase])).rows;if(!rows.length)continue;
  let refs=0;for(const r of rows)for(const match of r.value.matchAll(/https:\/\/c5htob7za0dl3b5x\.public\.blob\.vercel-storage\.com\/[^\s"'<>\\]+/g)){const u=new URL(match[0]),key=decodeURIComponent(u.pathname.slice(1));refs++;if(!keys.has(key))missing.add(key);}
  plan.push({table:t,column:col,rows:rows.length,references:refs});
 }
 const receipt={at:new Date().toISOString(),mode,ownedDatabase:'mitos',plan,missingCopiedKeys:[...missing].sort(),sourceBase:oldBase,destinationBase:newBase};
 if(missing.size)throw new Error('Some database references lack a verified S3 copy.');
 if(mode==='apply-to-unpublished-copy'){
  await assertUnpublished();
  for(const p of plan)await c.query('UPDATE public.'+q(p.table)+' SET '+q(p.column)+'=replace('+q(p.column)+',$1,$2) WHERE strpos('+q(p.column)+',$1)>0',[oldBase,newBase]);
  await c.query('COMMIT');receipt.applied=true;
 }else await c.query('ROLLBACK');
 await writeFile(receiptPath,JSON.stringify(receipt,null,2)+'\n',{mode:0o600});console.log(JSON.stringify({mode,columns:plan.length,references:plan.reduce((n,p)=>n+p.references,0),missing:missing.size,applied:receipt.applied===true}));
}finally{await c.query('ROLLBACK').catch(()=>{});await c.end();}
