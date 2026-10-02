// First accepted build input, without declaring production or opening either writer.
// Never freezes, copies or changes source rows. Fails unless those steps are already complete.
import pg from 'pg';
import {readFile,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';import {join} from 'node:path';
import {randomUUID,createHash} from 'node:crypto';
import {S3Client,PutObjectCommand} from '@aws-sdk/client-s3';
import {operatorClient} from './operator-postgres.mjs';
import {sourceProduction} from './source-production.mjs';
import {verifyFrozenParity,assertSourceFrozen} from '../../runtime/cutover-parity.mjs';
import {exportPublicSnapshot} from '../../runtime/public-snapshot.mjs';
const [expectedSha,receiptPath]=process.argv.slice(2);
if(!receiptPath)throw new Error('Private parity receipt path required.');
const {url,binding}=await sourceProduction(expectedSha);
const source=new pg.Client({host:url.hostname,port:Number(url.port)||5432,user:decodeURIComponent(url.username),password:decodeURIComponent(url.password),database:decodeURIComponent(url.pathname.slice(1)),ssl:{rejectUnauthorized:true},connectionTimeoutMillis:15000,statement_timeout:60000,query_timeout:60000});
await source.connect();const target=await operatorClient('mitos_backup');
const directory=await mkdtemp(join(tmpdir(),'mitos-verified-snapshot-'));
try{
 await source.query("SET idle_in_transaction_session_timeout='60min'");await target.query("SET idle_in_transaction_session_timeout='60min'");
 await source.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');await target.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
 await source.query("SET LOCAL TIME ZONE 'UTC'");await target.query("SET LOCAL TIME ZONE 'UTC'");
 const parity=await verifyFrozenParity(source,target);
 await target.query('COMMIT');
 // Target writers remain closed operationally; repeat parity after exporting to detect drift.
 const snapshot=await exportPublicSnapshot(target,{directory,sourceVerified:true});
 await target.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
 const after=await verifyFrozenParity(source,target);
 if(JSON.stringify(parity.tables)!==JSON.stringify(after.tables)||parity.sequenceSha256!==after.sequenceSha256)throw new Error('Target drifted while exporting.');
 await assertSourceFrozen(source);
 await target.query('COMMIT');await source.query('COMMIT');
 const s3=new S3Client({region:'us-east-1'}),Bucket='mitos-colombia-907264907058-operations',prefix='build-input/snapshots/'+randomUUID();
 const receipt={...parity,binding,snapshotSha256:snapshot.sha256,prefix,productionAccepted:false};
 await writeFile(receiptPath,JSON.stringify(receipt,null,2)+'\n',{mode:0o600});
 for(const file of ['catalog.sqlite','receipt.json']){const Body=await readFile(join(directory,file));await s3.send(new PutObjectCommand({Bucket,Key:prefix+'/'+file,Body,ChecksumSHA256:createHash('sha256').update(Body).digest('base64'),IfNoneMatch:'*',ServerSideEncryption:'AES256'}));}
 await s3.send(new PutObjectCommand({Bucket,Key:prefix+'/parity.json',Body:JSON.stringify(receipt),ContentType:'application/json',IfNoneMatch:'*',ServerSideEncryption:'AES256'}));
 const manifest={prefix,sha256:snapshot.sha256,sourceVerified:true,at:snapshot.at};
 await s3.send(new PutObjectCommand({Bucket,Key:'build-input/current/manifest.json',Body:JSON.stringify(manifest),ContentType:'application/json',ServerSideEncryption:'AES256'}));
 console.log(JSON.stringify({prefix,snapshotSha256:snapshot.sha256,ownedTables:21,productionAccepted:false}));
}finally{await source.query('ROLLBACK').catch(()=>{});await target.query('ROLLBACK').catch(()=>{});await source.end();await target.end();await rm(directory,{recursive:true,force:true});}
