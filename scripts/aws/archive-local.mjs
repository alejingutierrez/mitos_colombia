// Copies only a reviewed inventory into a private versioned archive. Never mutates sources.
import { readFile, stat, appendFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import { STSClient, GetCallerIdentityCommand } from '@aws-sdk/client-sts';
const [inventoryPath, prefix, ledgerPath] = process.argv.slice(2);
if (!inventoryPath || !/^local\/[a-zA-Z0-9-]+$/.test(prefix) || !ledgerPath) throw new Error('Reviewed inventory, unique prefix and private ledger required.');
const inventory = JSON.parse(await readFile(inventoryPath,'utf8'));
if (inventory.kind !== 'local-archive-preflight' || inventory.blockedPaths?.length) throw new Error('Archive preflight has unresolved sensitive files.');
const region='us-east-1', Bucket='mitos-colombia-907264907058-archive';
if ((await new STSClient({region}).send(new GetCallerIdentityCommand({}))).Account !== '907264907058') throw new Error('Archive account mismatch.');
const client = new S3Client({region,maxAttempts:4});
const completed = new Set();
try {for(const line of (await readFile(ledgerPath,'utf8')).trim().split('\n').filter(Boolean)) {const r=JSON.parse(line);if(r.status==='VERIFIED')completed.add(r.path);}} catch(e){if(e.code!=='ENOENT')throw e;}
let cursor=0,done=completed.size,errors=0,bytes=0;
const hashFile = async file => {const hash=createHash('sha256');for await(const chunk of createReadStream(file))hash.update(chunk);return hash.digest();};
async function copy(item) {
  if (completed.has(item.path)) return;
  if (item.path.includes('..') || path.isAbsolute(item.path)) throw new Error('Unsafe archive key.');
  const file=path.join(inventory.root,item.path), before=await stat(file);
  if(before.size>5*1024**3)throw new Error('File requires a separate multipart copy.');
  const checksum=await hashFile(file), afterHash=await stat(file);
  if(before.size!==afterHash.size || before.mtimeMs!==afterHash.mtimeMs)throw new Error('Source changed during hash.');
  const Key=prefix+'/'+item.path;
  const result=await client.send(new PutObjectCommand({Bucket,Key,Body:createReadStream(file),ContentLength:before.size,
    ChecksumSHA256:checksum.toString('base64'),ServerSideEncryption:'AES256',Metadata:{sha256:checksum.toString('hex'),source_mtime_ns:String(item.mtimeNs)},ContentType:'application/octet-stream'}));
  const head=await client.send(new HeadObjectCommand({Bucket,Key,VersionId:result.VersionId,ChecksumMode:'ENABLED'}));
  const after=await stat(file);
  if(head.ContentLength!==before.size || head.ChecksumSHA256!==checksum.toString('base64') || !result.VersionId) throw new Error('Destination failed checksum/version verification.');
  if(after.size!==before.size || after.mtimeMs!==before.mtimeMs)throw new Error('Source changed during copy; version retained, retry needed.');
  await appendFile(ledgerPath,JSON.stringify({path:item.path,bytes:before.size,sha256:checksum.toString('hex'),versionId:result.VersionId,key:Key,status:'VERIFIED'})+'\n',{mode:0o600});
  done++;bytes+=before.size;
  if(done%500===0)console.log(JSON.stringify({copied:done,total:inventory.items.length,bytesThisRun:bytes,errors}));
}
await Promise.all(Array.from({length:12},async()=>{
  while(cursor<inventory.items.length) {
    const item=inventory.items[cursor++];
    try {await copy(item);} catch(error){errors++;await appendFile(ledgerPath,JSON.stringify({path:item.path,status:'FAILED',code:error.code||error.name})+'\n',{mode:0o600});}
  }
}));
console.log(JSON.stringify({copied:done,total:inventory.items.length,bytesThisRun:bytes,errors,prefix}));
if(errors)process.exitCode=1;
