import test from 'node:test';
import assert from 'node:assert/strict';
import {workshopPostgresOptions} from '../../runtime/workshop-postgres.mjs';
import {postgresOptions} from '../../runtime/postgres.mjs';
const host='mitos-colombia-prod.c2v4uumucd2n.us-east-1.rds.amazonaws.com';
const connectionString='postgres://mitos_backup:fixture-only@'+host+'/mitos?sslmode=require';
const env={MITOS_RUNTIME:'aws',MITOS_PROCESS:'workshop',POSTGRES_URL:connectionString,PGSSLROOTCERT:new URL('../../infra/aws/certs/us-east-1-bundle.pem',import.meta.url).pathname,MITOS_OPERATOR_TUNNEL_PORT:'15432'};
test('workshop replaces legacy disabled TLS with verified CA and owned servername through SSM',()=>{
 const o=workshopPostgresOptions({connectionString,ssl:{rejectUnauthorized:false}},env);
 assert.equal(o.host,'127.0.0.1');assert.equal(o.port,15432);assert.equal(o.connectionString,undefined);assert.equal(o.ssl.rejectUnauthorized,true);assert.equal(o.ssl.servername,host);assert.match(o.ssl.ca,/BEGIN CERTIFICATE/);assert.equal(o.user,'mitos_backup');
 const tagged=postgresOptions(env);assert.equal(tagged.host,'127.0.0.1');assert.equal(tagged.ssl.servername,host);
});
test('workshop refuses source or foreign databases, privileged roles and runtime tunnel overrides',()=>{
 for(const c of ['postgres://mitos_backup:fixture@source.neon.tech/mitos','postgres://mitos_backup:fixture@'+host+'/foreign','postgres://mitos_admin:fixture@'+host+'/mitos'])assert.throws(()=>workshopPostgresOptions({connectionString:c},env),/ownership/);
 assert.throws(()=>workshopPostgresOptions({connectionString},{...env,MITOS_PROCESS:'web'}),/tunnel/);
 assert.throws(()=>workshopPostgresOptions({connectionString},{...env,MITOS_OPERATOR_TUNNEL_PORT:'99999'}),/tunnel/);
});
test('legacy script clients retain their existing options outside AWS',()=>{
 const old={connectionString:'postgres://fixture:fixture@localhost/local',ssl:false};assert.equal(workshopPostgresOptions(old,{}),old);
});
