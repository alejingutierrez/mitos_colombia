// Public build input only. No orders, accounts, sessions, unapproved comments, contacts or research dossiers.
import Database from 'better-sqlite3';
import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { sql } from '../../runtime/postgres.mjs';
const tables = ['regions','communities','tags','myths','myth_tags','myth_keywords','vertical_images','tarot_cards','home_banners','myth_narrations','narration_beds','seo_pages','comments'];
const editorialFields = ['id','source_myth_id','sources_json','key_sources_json','research_notes','updated_at'];
const quote = name => '"' + name.replaceAll('"','""') + '"';
await mkdir('build-input', { recursive: true });
const { rm } = await import('node:fs/promises');
await rm('build-input/catalog.sqlite', { force: true });
const db = new Database('build-input/catalog.sqlite');
const receipt = { at: new Date().toISOString(), kind: 'public-build-snapshot', sourceVerified: process.env.MITOS_SNAPSHOT_SOURCE_VERIFIED === '1', tables: {} };
const client = await sql.connect();
try {
  await client.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
  for (const table of [...tables, 'editorial_myths']) {
    const info = (await client.query('SELECT column_name,data_type FROM information_schema.columns WHERE table_schema=$1 AND table_name=$2 ORDER BY ordinal_position',['public',table])).rows;
    const visible = table === 'editorial_myths' ? editorialFields : table === 'comments' ? ['id','myth_id','status','author_name','content','created_at'] : null;
    const columns = visible ? info.filter(c => visible.includes(c.column_name)) : info;
    if (!columns.length) throw new Error('Public table missing: ' + table);
    db.exec('CREATE TABLE '+quote(table)+' ('+columns.map(c => quote(c.column_name)+' '+(c.data_type.includes('integer')||c.data_type==='boolean'?'INTEGER':c.data_type==='double precision'||c.data_type==='real'?'REAL':'TEXT')).join(',')+')');
    const rows = (await client.query('SELECT '+columns.map(c => quote(c.column_name)).join(',')+' FROM public.'+quote(table)+(table === 'comments' ? " WHERE status='approved'" : '')+' ORDER BY '+(columns.some(c=>c.column_name==='id')?'id':columns.map(c=>quote(c.column_name)).join(',')))).rows;
    const insert = db.prepare('INSERT INTO '+quote(table)+' VALUES ('+columns.map(()=>'?').join(',')+')');
    db.transaction(() => { for (const row of rows) insert.run(...columns.map(c => {
      const v=row[c.column_name];
      if(v==null)return null; if(v instanceof Date)return v.toISOString(); if(typeof v==='boolean')return Number(v);
      if(typeof v==='object')return JSON.stringify(v); return v;
    })); })();
    receipt.tables[table] = { count: rows.length, columns: columns.map(c => c.column_name), digest: createHash('sha256').update(JSON.stringify(rows)).digest('hex') };
  }
  await client.query('COMMIT');
  db.close();
  const { readFile } = await import('node:fs/promises');
  receipt.sha256 = createHash('sha256').update(await readFile('build-input/catalog.sqlite')).digest('hex');
  await writeFile('build-input/receipt.json', JSON.stringify(receipt,null,2));
  console.log(JSON.stringify({ sha256: receipt.sha256, counts: Object.fromEntries(Object.entries(receipt.tables).map(([k,v])=>[k,v.count])) }));
} catch(e) { await client.query('ROLLBACK').catch(()=>{}); throw e; }
finally { client.release(); await sql.end(); }
