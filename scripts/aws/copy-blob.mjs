// Source read-only; destination private/versioned. Never prints credentials or payloads.
import {readFile,writeFile,appendFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import dotenv from 'dotenv';
import {resolve} from 'node:path';
import {S3Client,PutObjectCommand,HeadObjectCommand} from '@aws-sdk/client-s3';
import {STSClient,GetCallerIdentityCommand} from '@aws-sdk/client-sts';
import {list} from '@vercel/blob';
import {safeObjectKey,mediaContentType} from '../../runtime/storage.mjs';
const [bindingPath,ledgerPath,manifestPath,sourceRoot]=process.argv.slice(2);
if(!bindingPath||!ledgerPath||!manifestPath||!sourceRoot)throw new Error('Private receipt paths required.');
const binding=JSON.parse(await readFile(bindingPath));
if(!binding.localBlobTokenMatches||!binding.localDatabaseIdentityMatches||Date.now()-Date.parse(binding.at)>86400000)throw new Error('Fresh production source binding required.');
let env={};for(const p of ['.env','.env.local'])env={...env,...dotenv.parse(await readFile(resolve(sourceRoot,p)))};
const region='us-east-1',Bucket='mitos-colombia-907264907058-media',s3=new S3Client({region,maxAttempts:4});
if((await new STSClient({region}).send(new GetCallerIdentityCommand({}))).Account!=='907264907058')throw new Error('Destination account mismatch');
const inventory=async()=>{const rows=[];let cursor;do{const p=await list({token:env.BLOB_READ_WRITE_TOKEN,cursor,limit:1000});rows.push(...p.blobs.map(b=>({pathname:b.pathname,url:b.url,size:b.size,uploadedAt:new Date(b.uploadedAt).toISOString()})));cursor=p.hasMore?p.cursor:undefined;}while(cursor);return rows.sort((a,b)=>a.pathname.localeCompare(b.pathname));};
const before=await inventory();await writeFile(manifestPath,JSON.stringify(before),{mode:0o600});
let prior=new Map();try{for(const l of (await readFile(ledgerPath,'utf8')).trim().split('\n').filter(Boolean)){const r=JSON.parse(l);if(r.status==='VERIFIED')prior.set(r.pathname,r)}}catch(e){if(e.code!=='ENOENT')throw e;}
let cursor=0,done=0,bytes=0,errors=0;
await Promise.all(Array.from({length:8},async()=>{while(cursor<before.length){const b=before[cursor++];try{
 const Key='blob/'+safeObjectKey(b.pathname),old=prior.get(b.pathname);if(old&&old.bytes===b.size&&old.uploadedAt===b.uploadedAt){const h=await s3.send(new HeadObjectCommand({Bucket,Key,VersionId:old.versionId,ChecksumMode:'ENABLED'}));if(h.Metadata?.sha256===old.sha256&&h.ContentLength===b.size){done++;bytes+=b.size;continue;}}
 const url=new URL(b.url);if(url.protocol!=='https:'||url.hostname!=='c5htob7za0dl3b5x.public.blob.vercel-storage.com')throw new Error('Unowned source host.');
 const response=await fetch(b.url,{signal:AbortSignal.timeout(120000)});if(!response.ok)throw new Error('Source HTTP '+response.status);const body=Buffer.from(await response.arrayBuffer());if(body.length!==b.size)throw new Error('Source size changed.');
 const hash=createHash('sha256').update(body).digest(),sha256=hash.toString('hex');
 const put=await s3.send(new PutObjectCommand({Bucket,Key,Body:body,ChecksumSHA256:hash.toString('base64'),ContentType:mediaContentType(Key,body,response.headers.get('content-type')),CacheControl:'public,max-age=31536000,immutable',ServerSideEncryption:'AES256',Metadata:{sha256,source_uploaded_at:b.uploadedAt}}));
 const head=await s3.send(new HeadObjectCommand({Bucket,Key,VersionId:put.VersionId,ChecksumMode:'ENABLED'}));if(head.ContentLength!==body.length||head.ChecksumSHA256!==hash.toString('base64')||!put.VersionId)throw new Error('Destination verification failed');
 await appendFile(ledgerPath,JSON.stringify({pathname:b.pathname,uploadedAt:b.uploadedAt,bytes:body.length,sha256,versionId:put.VersionId,key:Key,newUrl:'https://media.mitosdecolombia.com/'+Key.split('/').map(encodeURIComponent).join('/'),status:'VERIFIED'})+'\n',{mode:0o600});done++;bytes+=body.length;
 if(done%250===0)console.log(JSON.stringify({verified:done,total:before.length,bytes,errors}));
 }catch(e){errors++;await appendFile(ledgerPath,JSON.stringify({pathname:b.pathname,status:'FAILED',code:e.code||e.name})+'\n',{mode:0o600});}}}));
const after=await inventory(),stable=JSON.stringify(before)===JSON.stringify(after);const receipt={at:new Date().toISOString(),sourceDeployment:binding.productionDeployment,sourceVerified:true,kind:'initial-blob-copy',objects:done,expected:before.length,bytes,errors,sourceInventoryStable:stable,inventorySha256:createHash('sha256').update(JSON.stringify(before)).digest('hex'),note:'Initial copy only; final writer freeze and parity still required.'};
await writeFile(manifestPath+'.receipt.json',JSON.stringify(receipt,null,2)+'\n',{mode:0o600});console.log(JSON.stringify(receipt));if(errors||!stable)process.exitCode=1;
