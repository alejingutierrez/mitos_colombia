// Operator access to the dedicated migration/backup roles. Secret values remain in memory.
import pg from 'pg';
import {readFile} from 'node:fs/promises';
import {SecretsManagerClient,GetSecretValueCommand} from '@aws-sdk/client-secrets-manager';
import {STSClient,GetCallerIdentityCommand} from '@aws-sdk/client-sts';
export async function operatorClient(role) {
  if (!['mitos_migrator','mitos_backup'].includes(role)) throw new Error('Unsupported operator role.');
  const region='us-east-1', host='mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com';
  if ((await new STSClient({region}).send(new GetCallerIdentityCommand({}))).Account !== '907264907058') throw new Error('Account mismatch.');
  const result=await new SecretsManagerClient({region}).send(new GetSecretValueCommand({SecretId:'mitos-colombia/prod/'+role}));
  const url=new URL(JSON.parse(result.SecretString).POSTGRES_URL);
  if (url.hostname!==host || url.pathname!=='/mitos' || url.username!==role) throw new Error('Operator database ownership mismatch.');
  const tunnel=process.env.MITOS_OPERATOR_TUNNEL_PORT;
  if (tunnel && !/^\d{4,5}$/.test(tunnel)) throw new Error('Invalid private tunnel.');
  const client=new pg.Client({host:tunnel?'127.0.0.1':host,port:tunnel?Number(tunnel):5432,user:role,password:decodeURIComponent(url.password),database:'mitos',ssl:{rejectUnauthorized:true,ca:await readFile('infra/aws/certs/us-east-1-bundle.pem','utf8'),servername:host},connectionTimeoutMillis:10000,statement_timeout:60000});
  await client.connect(); return client;
}
