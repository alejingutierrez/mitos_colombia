// Launch existing workshop scripts with owned credentials in memory, never an env dump.
import {readFile,realpath} from 'node:fs/promises';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {STSClient,GetCallerIdentityCommand} from '@aws-sdk/client-sts';
import {SecretsManagerClient,GetSecretValueCommand} from '@aws-sdk/client-secrets-manager';
import {S3Client,GetObjectCommand} from '@aws-sdk/client-s3';
const root=fileURLToPath(new URL('../../',import.meta.url));
const [mode,script,...args]=process.argv.slice(2);
const reads=new Set(['scripts/mitos/dump-corpus-census.mjs','scripts/mitos/lint-acta-mito.mjs','scripts/videos/lint-acta.mjs','scripts/aws/workshop-check.mjs']);
try{
 if(!['read','write'].includes(mode)||!script)throw Error('Usage: node scripts/aws/workshop.mjs read|write scripts/path.mjs [args].');
 const target=await realpath(path.resolve(root,script));
 if(!target.startsWith(path.join(root,'scripts')+path.sep)||!target.endsWith('.mjs')||target.includes('import-mitos'))throw Error('Unsupported workshop script.');
 if(mode==='read'&&!reads.has(script))throw Error('Read mode accepts only audited read-only scripts.');
 const region='us-east-1';
 if((await new STSClient({region}).send(new GetCallerIdentityCommand({}))).Account!=='907264907058')throw Error('Workshop AWS account mismatch.');
 if(mode==='write'){
  const accepted=JSON.parse(await(await new S3Client({region}).send(new GetObjectCommand({Bucket:'mitos-colombia-907264907058-operations',Key:'cutover/accepted.json'}))).Body.transformToString());
  if(accepted.account!=='907264907058'||accepted.writer!=='rds'||accepted.productionAccepted!==true)throw Error('Workshop writer acceptance gate is closed.');
 }
 const sm=new SecretsManagerClient({region});
 const runtime=JSON.parse((await sm.send(new GetSecretValueCommand({SecretId:'mitos-colombia/prod/runtime'}))).SecretString);
 const db=mode==='read'?JSON.parse((await sm.send(new GetSecretValueCommand({SecretId:'mitos-colombia/prod/mitos_backup'}))).SecretString).POSTGRES_URL:runtime.POSTGRES_URL;
 const role=new URL(db).username;if(role!==(mode==='read'?'mitos_backup':'mitos_app'))throw Error('Workshop role mismatch.');
 const env={...process.env};
 for(const k of ['POSTGRES_URL','POSTGRES_URL_NON_POOLING','DATABASE_URL','DATABASE_URL_UNPOOLED','BLOB_READ_WRITE_TOKEN','AWS_BEARER_TOKEN_BEDROCK'])delete env[k];
 for(const k of ['OPENAI_API_KEY','ELEVENLABS_API_KEY'])if(runtime[k])env[k]=runtime[k];
 Object.assign(env,{MITOS_RUNTIME:'aws',MITOS_PROCESS:'workshop',AWS_REGION:region,MITOS_RDS_HOST:new URL(db).hostname,POSTGRES_URL:db,POSTGRES_URL_NON_POOLING:db,DATABASE_URL:db,DATABASE_URL_UNPOOLED:db,PGSSLROOTCERT:path.join(root,'infra/aws/certs/us-east-1-bundle.pem'),MITOS_STORAGE_BACKEND:'s3',MITOS_MEDIA_BUCKET:'mitos-colombia-907264907058-media',MITOS_MEDIA_BASE_URL:'https://media.mitosdecolombia.com'});
 const child=spawn(process.execPath,[target,...args],{cwd:root,env,stdio:'inherit'});
 for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
 child.on('error',()=>{console.error('Workshop process could not start.');process.exitCode=1;});
 child.on('exit',code=>{process.exitCode=code??1;});
}catch(error){console.error('Workshop launch refused',{code:error.code||error.name,reason:error.message.startsWith('Workshop')||error.message.startsWith('Usage')||error.message.startsWith('Read')||error.message.startsWith('Unsupported')?error.message:undefined});process.exitCode=1;}
