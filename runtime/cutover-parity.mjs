// Initial build acceptance derives from a frozen source and full owned-table parity.
// Row bodies, account/session data and database credentials never enter the receipt.
import {createHash} from 'node:crypto';
export const OWNED_TABLES=Object.freeze(['comments','communities','contact_messages','editorial_myth_keywords','editorial_myth_research','editorial_myth_tags','editorial_myths','home_banners','myth_keywords','myth_narrations','myth_tags','myths','narration_beds','regions','seo_pages','tags','tarot_cards','tarot_orders','tarot_user_sessions','tarot_users','vertical_images']);
const OLD='https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/',NEW='https://media.mitosdecolombia.com/blob/';
const q=x=>'"'+x.replaceAll('"','""')+'"';
export function canonical(value,rewriteMedia=true){
 if(value===null||value===undefined)return value;
 if(value instanceof Date)return value.toISOString();
 if(typeof value==='string')return rewriteMedia?value.replaceAll(OLD,NEW):value;
 if(Array.isArray(value))return value.map(v=>canonical(v,rewriteMedia));
 if(typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(k=>[k,canonical(value[k],rewriteMedia)]));
 return value;
}
export function tableDigest(rows,{normalizeMedia=true}={}){const normalized=rows.map(r=>JSON.stringify(canonical(r,normalizeMedia))).sort();return {count:rows.length,sha256:createHash('sha256').update(JSON.stringify(normalized)).digest('hex')};}
export async function assertSourceFrozen(source){
 const guards=(await source.query(`SELECT c.relname AS table_name,t.tgenabled,t.tgtype,n.nspname,p.proname,p.prosrc FROM pg_trigger t JOIN pg_class c ON c.oid=t.tgrelid JOIN pg_namespace s ON s.oid=c.relnamespace JOIN pg_proc p ON p.oid=t.tgfoid JOIN pg_namespace n ON n.oid=p.pronamespace WHERE s.nspname='public' AND t.tgname='mitos_cutover_write_guard_v1' AND NOT t.tgisinternal`)).rows;
 const body="BEGIN RAISE EXCEPTION 'Mitos migration writer freeze is active' USING ERRCODE='55000'; END;";
 for(const table of OWNED_TABLES){const g=guards.find(g=>g.table_name===table);if(!g||g.tgenabled!=='O'||Number(g.tgtype)!==62||g.nspname!=='mitos_cutover_v1'||g.proname!=='reject_write'||g.prosrc.replace(/\s+/g,' ').trim()!==body)throw new Error('Audited source writer freeze is missing or altered: '+table);}
 return OWNED_TABLES.length;
}
// Small wire responses keep operator transport bounded without omitting any field or row.
// Call only inside the held repeatable-read transaction; its relation lock stabilizes ctid order.
export async function ownedTableRows(client,table){
 if(!OWNED_TABLES.includes(table))throw new Error('Table outside owned parity scope.');
 const rows=[],limit=table==='editorial_myths'?25:100;
 for(let offset=0;;offset+=limit){
  const batch=(await client.query('SELECT * FROM public.'+q(table)+' ORDER BY ctid LIMIT $1 OFFSET $2',[limit,offset])).rows;
  if(batch.length>limit)throw new Error('Parity read exceeded its page limit.');
  rows.push(...batch);if(batch.length<limit)return rows;
 }
}
// Hash each complete JSONB row in PostgreSQL, then hash the sorted list of row hashes.
// No row bodies cross the operator tunnel. Count and duplicate hashes remain part of parity.
export async function ownedTableFingerprint(client,table,{normalizeMedia=false}={}){
 if(!OWNED_TABLES.includes(table))throw new Error('Table outside owned parity scope.');
 let doc='to_jsonb(t)',values=[];
 if(normalizeMedia){
  const info=await columns(client,table),text=info.filter(c=>['text','character varying'].includes(c.data_type));
  const other=info.filter(c=>!['text','character varying'].includes(c.data_type));
  if(other.length){
   const predicate=other.map(c=>"strpos(coalesce((to_jsonb(t)->"+"'"+c.column_name.replaceAll("'","''")+"')::text,''),$1)>0").join(' OR ');
   const found=(await client.query('SELECT count(*)::int n FROM public.'+q(table)+' t WHERE '+predicate,[OLD])).rows[0];
   if(found.n!==0)throw new Error('Unclassified non-text media reference: '+table);
  }
  values=text.length?[OLD,NEW]:[];
  for(let at=0;at<text.length;at+=40){const pairs=text.slice(at,at+40).map(c=>"'"+c.column_name.replaceAll("'","''")+"',replace(t."+q(c.column_name)+',$1,$2)');if(pairs.length)doc+=' || jsonb_build_object('+pairs.join(',')+')';}
 }
 const sql="SELECT count(*)::int count,encode(sha256(convert_to(coalesce(string_agg(h,chr(10) ORDER BY h COLLATE \"C\"),''),'UTF8')),'hex') sha256 FROM (SELECT encode(sha256(convert_to(("+doc+")::text,'UTF8')),'hex') h FROM public."+q(table)+" t) complete_rows";
 const row=(await client.query(sql,values)).rows[0];
 if(!Number.isInteger(row?.count)||row.count<0||!/^([a-f0-9]{64})$/.test(row.sha256||''))throw new Error('Invalid owned row fingerprint.');
 return{count:row.count,sha256:row.sha256};
}
async function columns(c,t){return (await c.query("SELECT column_name,data_type,udt_name,is_nullable,column_default FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position",[t])).rows;}
async function sequences(c){
 const names=(await c.query(`SELECT DISTINCT seq.relname AS name FROM pg_class seq JOIN pg_depend d ON d.objid=seq.oid JOIN pg_class tab ON tab.oid=d.refobjid JOIN pg_namespace n ON n.oid=tab.relnamespace WHERE seq.relkind='S' AND d.deptype IN ('a','i') AND n.nspname='public' AND tab.relname=ANY($1::text[]) ORDER BY name`,[OWNED_TABLES])).rows;
 const result=[];for(const {name} of names)result.push({name,...(await c.query('SELECT last_value::text,is_called FROM public.'+q(name))).rows[0]});return result;
}
export async function verifyFrozenParity(source,target){
 await assertSourceFrozen(source);
 const tables={};
 for(const name of OWNED_TABLES){
  const [sc,tc]=await Promise.all([columns(source,name),columns(target,name)]);
  if(!sc.length||JSON.stringify(canonical(sc))!==JSON.stringify(canonical(tc)))throw new Error('Owned schema differs: '+name);
  const [a,b]=await Promise.all([ownedTableFingerprint(source,name,{normalizeMedia:true}),ownedTableFingerprint(target,name)]);if(JSON.stringify(a)!==JSON.stringify(b))throw new Error('Owned rows differ: '+name);tables[name]=b;
 }
 const [s,t]=await Promise.all([sequences(source),sequences(target)]);if(JSON.stringify(s)!==JSON.stringify(t))throw new Error('Owned sequence state differs.');
 await assertSourceFrozen(source);
 return {kind:'frozen-owned-parity',tableDigestKind:'sorted-complete-jsonb-row-sha256-v1',at:new Date().toISOString(),writer:'source-frozen',tables,sequenceCount:s.length,sequenceSha256:createHash('sha256').update(JSON.stringify(s)).digest('hex')};
}
