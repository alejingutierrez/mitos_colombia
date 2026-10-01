import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import Database from 'better-sqlite3';
import {exportPublicSnapshot} from '../../runtime/public-snapshot.mjs';

test('public snapshot excludes customer tables, comment email, unapproved text and unpublished editorial fields',async()=>{
  const directory=await mkdtemp(path.join(os.tmpdir(),'mitos-public-snapshot-'));
  const tables=[];
  const client={query:async(sql,params)=>{
    if(['BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY','COMMIT','ROLLBACK'].includes(sql))return {rows:[]};
    if(sql.startsWith('SELECT column_name')){
      const table=params[1];tables.push(table);
      return {rows:(table==='comments'?['id','myth_id','status','author_name','content','created_at','author_email']:table==='editorial_myths'?['id','source_myth_id','sources_json','draft_private']:['id','title']).map(column_name=>({column_name,data_type:column_name==='id'?'integer':'text'}))};
    }
    if(sql.includes('public."comments"')){
      assert.match(sql,/WHERE status='approved'/);assert.doesNotMatch(sql,/author_email/);
      return {rows:[{id:1,myth_id:'1',status:'approved',author_name:'Public author',content:'Approved public text',created_at:'2026-10-01'}]};
    }
    if(sql.includes('public."editorial_myths"')){assert.doesNotMatch(sql,/draft_private/);return {rows:[{id:1,source_myth_id:'1',sources_json:'[]'}]};}
    return {rows:[{id:1,title:'Public catalog'}]};
  }};
  try {
    const receipt=await exportPublicSnapshot(client,{directory});assert.equal(receipt.sourceVerified,false);
    for(const privateTable of ['tarot_orders','tarot_users','tarot_user_sessions','contact_messages','editorial_myth_research'])assert.equal(tables.includes(privateTable),false);
    const db=new Database(directory+'/catalog.sqlite',{readonly:true});
    try {assert.deepEqual(db.prepare('PRAGMA table_info(comments)').all().map(c=>c.name),['id','myth_id','status','author_name','content','created_at']);assert.equal(db.prepare('SELECT COUNT(*) AS n FROM comments').get().n,1);}finally{db.close();}
    assert.equal(JSON.parse(await readFile(directory+'/receipt.json','utf8')).sha256,receipt.sha256);
  } finally {await rm(directory,{recursive:true,force:true});}
});
test('atomic manifest binds snapshot digest, receipt time and acceptance without mixing builds',async()=>{
 const {verifySnapshot}=await import('./verify-snapshot.mjs');const digest='a'.repeat(64),at='2026-10-01T20:09:21.843Z';
 const receipt={kind:'public-build-snapshot',sha256:digest,at,sourceVerified:false,tables:{myths:{count:596}}},manifest={prefix:'build-input/snapshots/6d3a61ca-0826-4db8-8a52-a9e023dc0b25',sha256:digest,at,sourceVerified:false};
 assert.equal(verifySnapshot(receipt,manifest,digest).sourceVerified,false);
 for(const m of [{...manifest,sourceVerified:true},{...manifest,sha256:'b'.repeat(64)},{...manifest,at:'old'},{...manifest,prefix:'foreign'}])assert.throws(()=>verifySnapshot(receipt,m,digest),/integrity/);
});
