#!/usr/bin/env node
// Congela alcance y respaldo. Sólo lee PostgreSQL; no genera ni publica.
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, join } from 'node:path';
import dotenv from 'dotenv';
import { sql } from '@vercel/postgres';

const root = resolve('content/mitos-visuales/production/wayuu-2026-09-05');
if (existsSync(join(root, 'scope.json'))) throw new Error('Alcance ya congelado; no sobrescribir.');
dotenv.config({ path: '.env', quiet: true });
if (!process.env.POSTGRES_URL) process.env.POSTGRES_URL = process.env.DATABASE_URL;
const hash = (value) => createHash('sha256').update(value).digest('hex');
const client = await sql.connect();
let rows, verticals;
try {
  await client.query('BEGIN READ ONLY');
  rows = (await client.query(`SELECT m.* FROM myths m JOIN communities c ON c.id=m.community_id
    WHERE c.slug=$1 AND m.category_path=$2 ORDER BY m.slug`, ['wayuu', 'Caribe > Guajira > Wayúu'])).rows;
  verticals = (await client.query(`SELECT * FROM vertical_images WHERE entity_type=$1
    AND entity_id=ANY($2::int[]) ORDER BY entity_id, updated_at DESC, id DESC`, ['myth', rows.map(r=>r.id)])).rows;
  await client.query('ROLLBACK');
} finally { client.release(); await sql.end(); }
const bible=JSON.parse(await fs.readFile('content/mitos-visuales/wayuu.v3.json','utf8'));
const slugs=rows.map(r=>r.slug);
if (JSON.stringify([...bible.corpus.myth_slugs].sort())!==JSON.stringify(slugs)) throw new Error('Reconciliar inventario vivo y Biblia antes de congelar.');
await fs.mkdir(join(root,'narratives'),{recursive:true});
const save=(path,value)=>fs.writeFile(path,JSON.stringify(value,null,2)+'\n',{flag:'wx'});
const now=new Date().toISOString();
await save(join(root,'database-before.json'),{captured_at:now,origin:'PostgreSQL READ ONLY',myths:rows,vertical_images:verticals});
for(const row of rows) await save(join(root,'narratives',row.slug+'.json'),{
  schema:'mitos-narrative-snapshot/v1',origin:'PostgreSQL myths.content read-only',captured_at:now,
  slug:row.slug,title:row.title,updated_at:row.updated_at,content_sha256:hash(row.content),content:row.content,
  mito:row.mito,historia:row.historia,versiones:row.versiones,leccion:row.leccion,similitudes:row.similitudes,
});
const entries=rows.map(r=>({id:r.id,slug:r.slug,title:r.title,content_sha256:hash(r.content)}));
const scope={schema:'wayuu-triptych-campaign/v1',campaign_id:'wayuu-2026-09-05',created_at:now,
  authorization:'Usuario autoriza todos los trípticos Wayúu y su publicación progresiva como principales; conservar imágenes existentes.',
  community:'wayuu',category_path:'Caribe > Guajira > Wayúu',myth_count:rows.length,required_final_images:rows.length*3,
  corpus_sha256:hash(JSON.stringify(entries)),myths:entries,
  quality:{entrada:'high',acto:'medium',huella:'medium'},sizes:{entrada:'1536x864',acto:'864x1536',huella:'1024x1024'},
  preservation:'Nuevos blobs con nombres únicos; originales no sobrescritos o borrados; filas verticales anteriores intactas; recibos con valores anteriores y nuevos.',
  completion:'27 trípticos únicos revisados, subidos y seleccionados; base, blobs nuevos y anteriores, páginas públicas y evidencia visual verificadas. No basta generar o registrar published.',
};
await save(join(root,'scope.json'),scope);
await save(join(root,'status.json'),{schema:'wayuu-triptych-campaign-status/v1',updated_at:now,scope_sha256:scope.corpus_sha256,status:'in_progress',myths:entries.map(e=>({slug:e.slug,stage:['aramai','el-indio-kuriruputa'].includes(e.slug)?'existing_triptych_ready_for_publication':'pending_story_direction',selection:null,publication_receipt:null,verification:null}))});
console.log(JSON.stringify({root,myths:rows.length,images:rows.length*3,vertical_versions_preserved_in_backup:verticals.length,digest:scope.corpus_sha256}));
