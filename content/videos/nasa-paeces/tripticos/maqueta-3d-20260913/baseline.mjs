import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import dotenv from 'dotenv';
import {sql} from '@vercel/postgres';
const base='content/videos/nasa-paeces/tripticos/maqueta-3d-20260913';
const manifest=JSON.parse(fs.readFileSync(`${base}/manifest.json`));
dotenv.config({path:'.env.local',quiet:true});dotenv.config({path:'.env',quiet:true});
if(!process.env.POSTGRES_URL)process.env.POSTGRES_URL=process.env.DATABASE_URL;
for(const name of ['POSTGRES_URL','BLOB_READ_WRITE_TOKEN','ADMIN_USERNAME','ADMIN_PASSWORD'])assert(process.env[name],`Missing ${name}`);
const rows=(await sql.query(`SELECT m.id,m.slug,m.title,m.content,m.mito,m.image_url,m.square_image_url,m.updated_at,
 v.id AS vertical_id,v.image_url AS vertical_image_url FROM myths m LEFT JOIN LATERAL
 (SELECT id,image_url FROM vertical_images WHERE entity_type='myth' AND entity_id=m.id ORDER BY updated_at DESC,id DESC LIMIT 1) v ON TRUE
 WHERE m.id=ANY($1::int[]) ORDER BY m.id`,[manifest.scope])).rows;
assert.deepEqual(rows.map(r=>r.id),manifest.scope);
for(const r of rows)assert.equal(crypto.createHash('sha256').update(r.content).digest('hex'),manifest.myths.find(m=>m.id===r.id).narrative_target_sha256,`Narrative drift ${r.slug}`);
const p=`${base}/production-baseline.json`;assert(!fs.existsSync(p));fs.writeFileSync(p,JSON.stringify({read_only:true,created_at:new Date().toISOString(),scope:manifest.scope,rows},null,2)+'\n');
await sql.end();console.log(JSON.stringify({status:'PASS',rows:rows.length,narratives_unchanged:true,publication_configuration_available:true,baseline:p}));
