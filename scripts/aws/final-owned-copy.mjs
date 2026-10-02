// Prepared final scope restore. Execution requires frozen source and verified stopped destination writers.
import {readFile,writeFile,open} from 'node:fs/promises';
import {createHash} from 'node:crypto';import{spawn,spawnSync}from'node:child_process';
import pg from 'pg';
import {SecretsManagerClient,GetSecretValueCommand} from '@aws-sdk/client-secrets-manager';
import {S3Client,PutObjectCommand,HeadObjectCommand} from '@aws-sdk/client-s3';
import {sourceProduction} from './source-production.mjs';
import {operatorClient} from './operator-postgres.mjs';
import {OWNED_TABLES,assertSourceFrozen,tableDigest,canonical} from '../../runtime/cutover-parity.mjs';
const [mode,stoppedReceiptPath,receiptPath]=process.argv.slice(2);
if(!['plan','apply-frozen-owned-copy'].includes(mode)||!stoppedReceiptPath||!receiptPath)throw Error('Explicit scope and private receipt paths required');
const region='us-east-1',Bucket='mitos-colombia-907264907058-archive',host='mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com';
const tools=process.env.MITOS_PG_TOOL_DIR,ca='infra/aws/certs/us-east-1-bundle.pem';
if(!tools?.startsWith('/')||!tools.endsWith('/'))throw Error('Absolute PostgreSQL 17 tool directory ending in / required');
if(process.env.MITOS_OPERATOR_TUNNEL_PORT!=='15432')throw Error('Reviewed own TLS tunnel on 15432 required');
const q=n=>'"'+n.replaceAll('"','""')+'"';const libs=process.env.MITOS_PG_LIBRARY_PATH||process.env.DYLD_LIBRARY_PATH||'';
async function tool(name,args,env={},capture=false){return new Promise((resolve,reject)=>{let output='';const child=spawn(tools+name,args,{env:{...process.env,DYLD_LIBRARY_PATH:libs,...env},stdio:['ignore',capture?'pipe':'ignore','pipe']});if(capture)child.stdout.on('data',b=>output+=b);child.stderr.on('data',()=>{});child.on('error',()=>reject(Error('PG tool could not start')));child.on('close',code=>code===0?resolve(output):reject(Error(name+' refused; private data omitted')));});}
async function newPrivate(path){const f=await open(path,'wx',0o600);await f.close();}
async function assertDestinationInactive(){
 for(const Key of['cutover/accepted.json','cutover/writer-opened.json']){try{await s3.send(new HeadObjectCommand({Bucket:'mitos-colombia-907264907058-operations',Key}));throw Error('Activated destination cannot be overwritten');}catch(e){if(e.name!=='NotFound'&&e.$metadata?.httpStatusCode!==404)throw e;}}
 if((await target.query("SELECT count(*)::int n FROM pg_stat_activity WHERE datname='mitos' AND usename='mitos_app'")).rows[0].n!==0)throw Error('Destination application connections remain');
}
const sm=new SecretsManagerClient({region}),s3=new S3Client({region});
const {url,binding}=await sourceProduction('5eda812b19f82d706130a21fca4c4698c6ce58c5');
const sourceHost=url.hostname.replace('-pooler.','.');
const source=new pg.Client({host:sourceHost,port:Number(url.port)||5432,user:decodeURIComponent(url.username),password:decodeURIComponent(url.password),database:decodeURIComponent(url.pathname.slice(1)),ssl:{rejectUnauthorized:true},connectionTimeoutMillis:15000,statement_timeout:60000});
const target=await operatorClient('mitos_migrator');await source.connect();
async function sequenceNames(client){return (await client.query("SELECT DISTINCT s.relname name FROM pg_class s JOIN pg_depend d ON d.objid=s.oid JOIN pg_class t ON t.oid=d.refobjid JOIN pg_namespace n ON n.oid=t.relnamespace WHERE s.relkind='S' AND n.nspname='public' AND t.relname=ANY($1) ORDER BY name",[OWNED_TABLES])).rows.map(r=>r.name);}
async function fingerprints(client){const out={};for(const t of OWNED_TABLES)out[t]=tableDigest((await client.query('SELECT * FROM public.'+q(t))).rows,{normalizeMedia:false});return out;}
async function archive(path,key){const body=await readFile(path),hash=createHash('sha256').update(body).digest();const p=await s3.send(new PutObjectCommand({Bucket,Key:key,Body:body,ChecksumSHA256:hash.toString('base64'),ServerSideEncryption:'AES256',IfNoneMatch:'*'}));const h=await s3.send(new HeadObjectCommand({Bucket,Key:key,VersionId:p.VersionId,ChecksumMode:'ENABLED'}));if(!p.VersionId||h.ChecksumSHA256!==hash.toString('base64')||h.ContentLength!==body.length)throw Error('Versioned database backup verification failed');return{bucket:Bucket,key,versionId:p.VersionId,bytes:body.length,sha256:hash.toString('hex')};}
try{
 for(const client of[source,target]){await client.query("SET TIME ZONE 'UTC'");await client.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');}
 const sourceSequences=await sequenceNames(source),targetSequences=await sequenceNames(target);
 const dependencies=(await target.query("SELECT c.relname source,r.relname target FROM pg_constraint f JOIN pg_class c ON c.oid=f.conrelid JOIN pg_class r ON r.oid=f.confrelid WHERE f.contype='f' AND r.relname=ANY($1) AND NOT c.relname=ANY($1)",[OWNED_TABLES])).rows;
 if(dependencies.length)throw Error('Destination has an unclassified FK into owned scope');
 const sourceOutside=(await source.query("SELECT c.relname source,r.relname target FROM pg_constraint f JOIN pg_class c ON c.oid=f.conrelid JOIN pg_class r ON r.oid=f.confrelid WHERE f.contype='f' AND c.relname=ANY($1) AND NOT r.relname=ANY($1)",[OWNED_TABLES])).rows;if(sourceOutside.length)throw Error('Source has an unclassified FK outside owned scope');
 const checks={ownedTables:OWNED_TABLES.length,sourceSequenceCount:sourceSequences.length,targetSequenceCount:targetSequences.length,externalDependencies:0};
 if(mode==='plan'){await writeFile(receiptPath,JSON.stringify({at:new Date().toISOString(),kind:'final-owned-copy-plan',binding,checks,sourceMutated:false,targetMutated:false,productionAccepted:false},null,2),{mode:0o600});console.log(JSON.stringify(checks));}
 else{
  const stopped=JSON.parse(await readFile(stoppedReceiptPath));if(stopped.kind!=='target-writers-stopped'||stopped.instanceId!=='i-042678e0b71dbefaa'||stopped.productionAccepted!==false||(!Number.isFinite(Date.parse(stopped.at))||Date.now()-Date.parse(stopped.at)<0||Date.now()-Date.parse(stopped.at)>600000))throw Error('Fresh own stopped-writer receipt required');
  if(!/^[a-f0-9-]{36}$/.test(stopped.commandId||''))throw Error('Invalid stopped command identity');const command=spawnSync('aws',['--profile','colombiaprojects','--region',region,'ssm','get-command-invocation','--command-id',stopped.commandId,'--instance-id',stopped.instanceId],{encoding:'utf8'});if(command.status!==0)throw Error('Stopped command unavailable');const verify=JSON.parse(command.stdout);if(verify.Status!=='Success'||!verify.StandardOutputContent.includes('MITOS_TARGET_WRITERS_STOPPED'))throw Error('Stopped writer command is not verified');
  await assertDestinationInactive();
  if((await target.query("SELECT count(*)::int n FROM admin_jobs WHERE status IN ('queued','running')")).rows[0].n!==0)throw Error('Destination editorial job remains active');
  if((await target.query("SELECT count(*)::int n FROM tarot_orders WHERE email='mitos-migration-qa-20261002@example.com'")).rows[0].n!==0)throw Error('Sandbox order must be cleaned before final restore');
  await assertSourceFrozen(source);
  if(!(await target.query('SELECT pg_try_advisory_lock(77413002) acquired')).rows[0].acquired)throw Error('Another own final copy is active');
  const stamp=new Date().toISOString().replace(/[^0-9]/g,''),targetDump='/private/tmp/mitos-target-before-final-'+stamp+'.dump',sourceDump='/private/tmp/mitos-source-final-'+stamp+'.dump',toc='/private/tmp/mitos-source-final-'+stamp+'.toc';
  const beforeSource=await fingerprints(source),beforeTarget=await fingerprints(target);
  const srcSnapshot=(await source.query('SELECT pg_export_snapshot() id')).rows[0].id,dstSnapshot=(await target.query('SELECT pg_export_snapshot() id')).rows[0].id;
  const migrate=JSON.parse((await sm.send(new GetSecretValueCommand({SecretId:'mitos-colombia/prod/mitos_migrator'}))).SecretString);const targetUrl=new URL(migrate.POSTGRES_URL);if(targetUrl.hostname!==host||targetUrl.username!=='mitos_migrator'||targetUrl.pathname!=='/mitos')throw Error('Destination role changed');
  const targetEnv={PGHOST:host,PGHOSTADDR:'127.0.0.1',PGPORT:'15432',PGDATABASE:'mitos',PGUSER:'mitos_migrator',PGPASSWORD:decodeURIComponent(targetUrl.password),PGSSLMODE:'verify-full',PGSSLROOTCERT:ca,PGOPTIONS:'-c timezone=UTC'};
  const sourceEnv={PGHOST:sourceHost,PGPORT:url.port||'5432',PGDATABASE:decodeURIComponent(url.pathname.slice(1)),PGUSER:decodeURIComponent(url.username),PGPASSWORD:decodeURIComponent(url.password),PGSSLMODE:'require',PGOPTIONS:'-c timezone=UTC -c default_transaction_read_only=on'};
  await newPrivate(targetDump);await tool('pg_dump',['--format=custom','--no-owner','--no-acl','--snapshot='+dstSnapshot,...[...OWNED_TABLES,...targetSequences,'payment_events','admin_jobs','auth_rate_limits','schema_migrations'].map(t=>'--table=public.'+t),'--file='+targetDump],targetEnv);
  const targetBackup=await archive(targetDump,'database/final-'+stamp+'/target-before-final.dump');
  await newPrivate(sourceDump);await tool('pg_dump',['--format=custom','--no-owner','--no-acl','--snapshot='+srcSnapshot,...[...OWNED_TABLES,...sourceSequences].map(t=>'--table=public.'+t),'--file='+sourceDump],sourceEnv);
  const rawToc=await tool('pg_restore',['--list',sourceDump],{},true),guards=rawToc.split('\n').filter(l=>l.includes(' TRIGGER ')&&l.includes(' mitos_cutover_write_guard_v1 '));if(guards.length!==21)throw Error('Expected exactly the 21 own source freeze TOC entries');
  const safeToc=rawToc.split('\n').filter(l=>!guards.includes(l)).join('\n');await writeFile(toc,safeToc,{flag:'wx',mode:0o600});
  const sourceBackup=await archive(sourceDump,'database/final-'+stamp+'/source-owned-with-freeze.dump');
  const freezeSql=await readFile('infra/aws/source/freeze.sql','utf8'),functionEnd=freezeSql.indexOf('\nDO $$');
  if(functionEnd<0)throw Error('Canonical source freeze recovery definition missing');
  const freezeRecoveryPath='/private/tmp/mitos-source-freeze-recovery-'+stamp+'.sql';
  await writeFile(freezeRecoveryPath,freezeSql.slice(0,functionEnd)+'\nCOMMIT;\n',{flag:'wx',mode:0o600});
  const sourceFreezeRecovery=await archive(freezeRecoveryPath,'database/final-'+stamp+'/source-freeze-schema-function.sql');
  await source.query('COMMIT');await target.query('COMMIT');await assertSourceFrozen(source);
  await assertDestinationInactive();
  await tool('pg_restore',['--clean','--if-exists','--no-owner','--no-acl','--exit-on-error','--single-transaction','--use-list='+toc,'--dbname=mitos',sourceDump],targetEnv);
  for(const t of OWNED_TABLES){await target.query('GRANT SELECT,INSERT,UPDATE,DELETE ON public.'+q(t)+' TO mitos_app');await target.query('GRANT SELECT ON public.'+q(t)+' TO mitos_backup');}
  for(const s of sourceSequences){await target.query('GRANT USAGE,SELECT ON public.'+q(s)+' TO mitos_app');await target.query('GRANT SELECT ON public.'+q(s)+' TO mitos_backup');}
  const after=await fingerprints(target);if(JSON.stringify(canonical(beforeSource,false))!==JSON.stringify(canonical(after,false)))throw Error('Raw source restore parity failed');
  const receipt={at:new Date().toISOString(),kind:'final-owned-database-restore',binding,checks,tables:after,targetBeforeRestore:beforeTarget,targetBackup,sourceBackup,sourceFreezeRecovery,excludedFreezeTriggers:21,writer:'source-frozen',targetWriterActive:false,productionAccepted:false,mediaRewritePending:true};await writeFile(receiptPath,JSON.stringify(receipt,null,2)+'\n',{mode:0o600});console.log(JSON.stringify({kind:receipt.kind,tables:21,excludedFreezeTriggers:21,sourceBackupSha:sourceBackup.sha256,targetBackupSha:targetBackup.sha256,productionAccepted:false}));
 }
}finally{await source.query('ROLLBACK').catch(()=>{});await target.query('ROLLBACK').catch(()=>{});await source.end();await target.end();}
