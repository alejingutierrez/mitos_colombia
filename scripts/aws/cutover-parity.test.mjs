import test from 'node:test';import assert from 'node:assert/strict';
import {OWNED_TABLES,canonical,tableDigest,assertSourceFrozen,verifyFrozenParity} from '../../runtime/cutover-parity.mjs';
const guards=OWNED_TABLES.map(table_name=>({table_name,tgenabled:'O',tgtype:62,nspname:'mitos_cutover_v1',proname:'reject_write',prosrc:"\nBEGIN\n RAISE EXCEPTION 'Mitos migration writer freeze is active' USING ERRCODE='55000';\nEND;\n"}));
function db({frozen=true,drift=false,seq='7',schema=false}={}){return {query:async(sql,params)=>{
 if(sql.includes('FROM pg_trigger'))return {rows:frozen?guards:[]};
 if(sql.includes('information_schema.columns'))return {rows:[{column_name:'id',data_type:schema?'text':'integer',udt_name:'int4',is_nullable:'NO',column_default:null}]};
 if(sql.includes('FROM pg_class seq'))return {rows:[{name:'myths_id_seq'}]};
 if(sql.startsWith('SELECT last_value'))return {rows:[{last_value:seq,is_called:true}]};
 if(sql.startsWith('SELECT *'))return {rows:[{id:1,private_notes:drift&&sql.includes('tarot_users')?'changed':'same'}]};
 throw Error('Unexpected query: '+sql+String(params));}};}
test('parity canonicalizes only the audited media prefix and order; private field drift remains visible',()=>{assert.deepEqual(canonical({z:'https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/a.jpg',a:2}),{a:2,z:'https://media.mitosdecolombia.com/blob/a.jpg'});assert.deepEqual(tableDigest([{b:2,a:1},{id:2}]),tableDigest([{id:2},{a:1,b:2}]));assert.notDeepEqual(tableDigest([{password_hash:'one'}]),tableDigest([{password_hash:'two'}]));});
test('freeze proof requires all 21 exact enabled statement triggers',async()=>{assert.equal(await assertSourceFrozen(db()),21);await assert.rejects(assertSourceFrozen(db({frozen:false})),/freeze/);await assert.rejects(assertSourceFrozen({query:async()=>({rows:guards.map(g=>({...g,tgenabled:'D'}))})}),/freeze/);});
test('first build gate rejects any owned row/schema/sequence mismatch; receipt has no row data',async()=>{const r=await verifyFrozenParity(db(),db());assert.equal(Object.keys(r.tables).length,21);assert.equal(r.writer,'source-frozen');assert.equal(JSON.stringify(r).includes('private_notes'),false);await assert.rejects(verifyFrozenParity(db(),db({drift:true})),/rows differ: tarot_users/);await assert.rejects(verifyFrozenParity(db(),db({seq:'6'})),/sequence/);await assert.rejects(verifyFrozenParity(db(),db({schema:true})),/schema/);});

test('target still using Blob cannot pass parity merely because the source uses that prefix',()=>{const row={image:'https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/a.jpg'};assert.notDeepEqual(tableDigest([row]),tableDigest([row],{normalizeMedia:false}));assert.deepEqual(tableDigest([row]),tableDigest([{image:'https://media.mitosdecolombia.com/blob/a.jpg'}],{normalizeMedia:false}));});
