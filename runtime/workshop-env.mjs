// Local workshop only. The ignored marker is never part of a deployment.
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import dotenv from 'dotenv';
import path from 'node:path';
import {STSClient,GetCallerIdentityCommand} from '@aws-sdk/client-sts';
import {SecretsManagerClient,GetSecretValueCommand} from '@aws-sdk/client-secrets-manager';
import {S3Client,GetObjectCommand} from '@aws-sdk/client-s3';
let config;
try { config=JSON.parse(await readFile(new URL('./workshop-config.local.json',import.meta.url),'utf8')); }
catch(error) { if(error.code!=='ENOENT')throw error; }
if(config) {
  if(config.account!=='907264907058'||config.profile!=='colombiaprojects'||config.tunnelPort!==15433)throw Error('Invalid local workshop ownership.');
  if(!path.isAbsolute(config.primaryRoot||''))throw Error('Local workshop env root missing.');
  for(const name of ['.env','.env.local'])dotenv.config({path:path.join(config.primaryRoot,name),quiet:true});
  process.env.AWS_PROFILE=config.profile;
  const region='us-east-1';
  if((await new STSClient({region}).send(new GetCallerIdentityCommand({}))).Account!==config.account)throw Error('Local workshop AWS identity differs.');
  const accepted=JSON.parse(await(await new S3Client({region}).send(new GetObjectCommand({Bucket:'mitos-colombia-907264907058-operations',Key:'cutover/accepted.json'}))).Body.transformToString());
  if(accepted.account!==config.account||accepted.writer!=='rds'||accepted.productionAccepted!==true)throw Error('Workshop writer acceptance is closed.');
  const runtime=JSON.parse((await new SecretsManagerClient({region}).send(new GetSecretValueCommand({SecretId:'mitos-colombia/prod/runtime'}))).SecretString);
  const url=new URL(runtime.POSTGRES_URL);
  if(url.hostname!=='mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com'||url.pathname!=='/mitos'||url.username!=='mitos_app')throw Error('Workshop database differs.');
  for(const key of ['POSTGRES_URL','POSTGRES_URL_NON_POOLING','POSTGRES_PRISMA_URL','DATABASE_URL','DATABASE_URL_UNPOOLED'])process.env[key]=runtime.POSTGRES_URL;
  for(const key of ['OPENAI_API_KEY','ELEVENLABS_API_KEY'])if(!process.env[key]&&runtime[key])process.env[key]=runtime[key];
  delete process.env.BLOB_READ_WRITE_TOKEN;
  delete process.env.AWS_BEARER_TOKEN_BEDROCK;
  Object.assign(process.env,{MITOS_RUNTIME:'aws',MITOS_PROCESS:'workshop',MITOS_PG_POOL_MAX:'2',MITOS_OPERATOR_TUNNEL_PORT:String(config.tunnelPort),AWS_REGION:region,PGSSLROOTCERT:fileURLToPath(new URL('../infra/aws/certs/us-east-1-bundle.pem',import.meta.url)),MITOS_STORAGE_BACKEND:'s3',MITOS_MEDIA_BUCKET:'mitos-colombia-907264907058-media',MITOS_MEDIA_BASE_URL:'https://media.mitosdecolombia.com'});
  // Frozen paid editions retain their original URLs. Resolve only their audited
  // public host to the byte-identical S3 copy, without editing any freeze.
  if(config.legacyMediaHost&&config.legacyMediaHost!=='c5htob7za0dl3b5x.public.blob.vercel-storage.com')throw Error('Unexpected historical media origin.');
  if(config.legacyMediaHost&&globalThis.fetch){
    const original=globalThis.fetch;
    globalThis.fetch=(input,options)=>{
      const request=input instanceof Request?input:undefined;
      const url=new URL(request?request.url:String(input));
      const method=String(options?.method||request?.method||'GET').toUpperCase();
      if(url.protocol==='https:'&&url.hostname===config.legacyMediaHost&&['GET','HEAD'].includes(method)){
        const target=new URL('https://media.mitosdecolombia.com/blob'+url.pathname+url.search);
        return original(request?new Request(target,request):target,options);
      }
      return original(input,options);
    };
  }
}
