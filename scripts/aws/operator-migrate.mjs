// Explicit operator task. Never used at application startup; credentials stay in memory.
import pg from 'pg';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {SecretsManagerClient,GetSecretValueCommand} from '@aws-sdk/client-secrets-manager';
import {STSClient,GetCallerIdentityCommand} from '@aws-sdk/client-sts';
const region='us-east-1',host='mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com';
const cli=process.argv.slice(2);if(cli.length!==1||cli[0]!=='apply-owned-migrations')throw new Error('Explicit migration task required.');
if((await new STSClient({region}).send(new GetCallerIdentityCommand({}))).Account!=='907264907058')throw new Error('Account mismatch.');
const result=await new SecretsManagerClient({region}).send(new GetSecretValueCommand({SecretId:'mitos-colombia/prod/mitos_migrator'}));
const url=new URL(JSON.parse(result.SecretString).POSTGRES_URL);
if(url.hostname!==host||url.pathname!=='/mitos'||decodeURIComponent(url.username)!=='mitos_migrator')throw new Error('Dedicated migration role required.');
const tunnel=process.env.MITOS_OPERATOR_TUNNEL_PORT; if(tunnel&&!/^\d{4,5}$/.test(tunnel))throw new Error('Invalid private tunnel port.');
const client=new pg.Client({host:tunnel?'127.0.0.1':host,port:tunnel?Number(tunnel):5432,database:'mitos',user:'mitos_migrator',password:decodeURIComponent(url.password),ssl:{rejectUnauthorized:true,ca:await readFile('infra/aws/certs/us-east-1-bundle.pem','utf8'),servername:host},connectionTimeoutMillis:10000,statement_timeout:60000});
const applied=[];await client.connect();try{
 await client.query('SELECT pg_advisory_lock(77413001)');
 await client.query('CREATE TABLE IF NOT EXISTS schema_migrations(version TEXT PRIMARY KEY,digest TEXT NOT NULL,applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW())');
 for(const file of (await readdir('runtime/migrations')).filter(f=>f.endsWith('.sql')).sort()){
  const text=await readFile('runtime/migrations/'+file,'utf8'),digest=createHash('sha256').update(text).digest('hex');const old=(await client.query('SELECT digest FROM schema_migrations WHERE version=$1',[file])).rows[0];
  if(old){if(old.digest!==digest)throw new Error('Applied migration changed.');continue;}
  await client.query('BEGIN');try{await client.query(text);await client.query('INSERT INTO schema_migrations(version,digest) VALUES($1,$2)',[file,digest]);await client.query('COMMIT');applied.push({version:file,digest});}catch(e){await client.query('ROLLBACK');throw e;}
 }
 await client.query('REVOKE INSERT,UPDATE,DELETE ON schema_migrations FROM mitos_app');
 await client.query('GRANT SELECT ON schema_migrations TO mitos_app');
 await client.query('GRANT SELECT ON ALL TABLES IN SCHEMA public TO mitos_backup');
 const role=(await client.query("SELECT has_schema_privilege('mitos_app','public','CREATE') AS app_can_create")).rows[0];
 if(role.app_can_create)throw new Error('Application role has DDL privileges.');
 console.log(JSON.stringify({at:new Date().toISOString(),database:'mitos',applied,applicationCanCreateSchemaObjects:false}));
}finally{await client.query('SELECT pg_advisory_unlock(77413001)').catch(()=>{});await client.end();}
