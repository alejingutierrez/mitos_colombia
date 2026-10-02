#!/usr/bin/env node
// Inventario aditivo de referencias; no descarga, genera, promueve ni borra imágenes.
import fs from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve,join} from 'node:path';
import dotenv from 'dotenv';
import {list} from '@vercel/blob';
import {sql} from '@vercel/postgres';
dotenv.config({path:'.env',quiet:true});
if(!process.env.POSTGRES_URL)process.env.POSTGRES_URL=process.env.DATABASE_URL;
const campaign='content/mitos-visuales/production/wayuu-2026-09-05';
const target='content/mitos-visuales/wayuu.visual-memory.v1.json';
if(existsSync(target))throw new Error('La memoria visual ya existe. Conservar revisiones y abrir nueva versión para refrescar.');
const scope=JSON.parse(await fs.readFile(join(campaign,'scope.json'),'utf8'));
const baseline=JSON.parse(await fs.readFile(join(campaign,'database-before.json'),'utf8'));
const live=(await sql.query('SELECT id,slug,image_url,square_image_url FROM myths WHERE id=ANY($1::int[])',[scope.myths.map(m=>m.id)])).rows;
const vertical=(await sql.query(`SELECT * FROM vertical_images WHERE entity_type=$1 AND entity_id=ANY($2::int[]) ORDER BY updated_at DESC,id DESC`,['myth',scope.myths.map(m=>m.id)])).rows;
await sql.end();
const hash=v=>createHash('sha256').update(v).digest('hex');
const myths={};
for(const myth of scope.myths){
  const map=new Map();
  const add=(location,role,evidence,extra={})=>{
    if(!location)return;
    const entry=map.get(location)||{id:hash(myth.slug+'|'+location).slice(0,20),location,roles:[],evidence:[],visual_review:'not_yet_inspected',cultural_authority:'none_from_image_alone',...extra};
    if(!entry.roles.includes(role))entry.roles.push(role);
    entry.evidence.push(evidence);map.set(location,entry);
  };
  const current=live.find(x=>x.id===myth.id);
  const latest=vertical.find(x=>x.entity_id===myth.id);
  for(const [field,role] of [['image_url','horizontal'],['square_image_url','square']])add(current[field],'current_public',{source:'myths.'+field,format:role});
  add(latest?.image_url,'current_public',{source:'vertical_images',row_id:latest?.id,format:'vertical'});
  const before=baseline.myths.find(x=>x.id===myth.id);
  for(const field of ['image_url','square_image_url'])add(before[field],'public_at_campaign_start',{source:campaign+'/database-before.json',field});
  for(const row of vertical.filter(x=>x.entity_id===myth.id))add(row.image_url,'database_version',{source:'vertical_images',row_id:row.id,updated_at:row.updated_at});
  const failures=[];
  for(const prefix of [`mitos/${myth.slug}-`,`vertical/myth/${myth.slug}-`,`square/myth/${myth.slug}-`]){
    try {
      let cursor;
      do {
        const page=await list({prefix,limit:1000,cursor,token:process.env.BLOB_READ_WRITE_TOKEN});
        for(const blob of page.blobs)if(/\.(png|jpe?g|webp)$/i.test(blob.pathname))add(blob.url,'stored_version_candidate',{source:'Vercel Blob scoped prefix',prefix,pathname:blob.pathname,uploaded_at:blob.uploadedAt},{bytes:blob.size});
        cursor=page.hasMore?page.cursor:undefined;
      }while(cursor);
    }catch(error){failures.push({prefix,error:error.message});}
  }
  const localRoot=join('content/mitos-visuales/_openai/wayuu',myth.slug);
  const walk=async dir=>{
    if(!existsSync(dir))return;
    for(const ent of await fs.readdir(dir,{withFileTypes:true})){
      const path=join(dir,ent.name);
      if(ent.isDirectory())await walk(path);
      else if(ent.name==='jobs.json'){
        const data=JSON.parse(await fs.readFile(path,'utf8'));
        for(const job of data.jobs||[])if(job.output&&existsSync(job.output))add(job.output,'local_generation_history',{source:path,act:job.act,prompt_file:job.prompt_file},{sha256:hash(await fs.readFile(job.output))});
      }
    }
  };
  await walk(localRoot);
  myths[myth.slug]={title:myth.title,references:[...map.values()],discovery_failures:failures,review_status:'pending_visual_selection',review:null};
  console.log(`${myth.slug}: ${map.size} referencias, ${failures.length} errores de inventario`);
}
const library={schema:'mitos-visual-memory/v1',created_at:new Date().toISOString(),community:'wayuu',scope:campaign+'/scope.json',
  purpose:'Inspiración visual y contraste; no sustituye fuentes del relato, modelos canónicos ni decisiones de aprobación.',
  distinctions:['current_public','public_at_campaign_start','database_version','stored_version_candidate','local_generation_history','documented_historical_reference'],
  rules:['Almacenar una imagen no demuestra que fue publicada o aprobada.','Historial de producción no equivale a documento histórico cultural.','Conservar decisiones negativas y resolver propiedad antes de reusar.','Inspeccionar referencias pertinentes antes del próximo prompt, extraer aprendizajes por pieza y registrar exclusiones.','No subir imágenes a OpenAI automáticamente.'],
  prior_audit_decisions:{status:'not_located_in_current_checkout_or_known_prior_paths',preserved:true,note:'No se modificó ningún registro previo de decisiones. No atribuir aprobación a una referencia sin evidencia.'},
  myths,summary:{myths:Object.keys(myths).length,references:Object.values(myths).reduce((n,m)=>n+m.references.length,0),discovery_failures:Object.values(myths).reduce((n,m)=>n+m.discovery_failures.length,0)}};
await fs.writeFile(target,JSON.stringify(library,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({target,...library.summary}));
