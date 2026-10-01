// Preserve historical pg scripts while enforcing the owned RDS/TLS path in AWS.
import pg from 'pg';
import {postgresOptions} from './postgres.mjs';
export function workshopPostgresOptions(input={},env=process.env) {
 if(env.MITOS_RUNTIME!=='aws')return input;
 const connectionString=input.connectionString||env.POSTGRES_URL||env.DATABASE_URL;
 const url=new URL(connectionString);
 const expected='mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com';
 if(url.hostname!==expected||url.pathname!=='/mitos'||!['mitos_app','mitos_backup','mitos_migrator'].includes(url.username))throw new Error('Workshop database ownership mismatch.');
 const own={...input,...postgresOptions({...env,POSTGRES_URL:connectionString})};
 const port=env.MITOS_OPERATOR_TUNNEL_PORT;
 if(port){
  if(env.MITOS_PROCESS!=='workshop'||!/^\d{4,5}$/.test(port)||Number(port)>65535)throw new Error('Invalid workshop tunnel.');
  delete own.connectionString;
  Object.assign(own,{host:'127.0.0.1',port:Number(port),user:url.username,password:decodeURIComponent(url.password),database:'mitos',ssl:{...own.ssl,servername:expected}});
 }
 return own;
}
export class Client extends pg.Client {constructor(options){super(workshopPostgresOptions(options));}}
export class Pool extends pg.Pool {constructor(options){super(workshopPostgresOptions(options));}}
const workshopPg={...pg,Client,Pool};
export default workshopPg;
