// Owned database queue. Credentials never enter a job payload.
import {timingSafeEqual,randomUUID} from 'node:crypto';
import {sql} from './postgres.mjs';
export const ADMIN_JOB_PATHS=new Set(["/api/admin/format-content", "/api/admin/image-style-review", "/api/admin/tarot-descriptions", "/api/admin/generate-images", "/api/admin/editorial-myths", "/api/admin/seo-pages", "/api/admin/geo-locations", "/api/admin/myth-image-audit", "/api/admin/home-banners", "/api/admin/category-descriptions", "/api/admin/curacion-imagenes/regenerate", "/api/admin/vertical-images/regenerate", "/api/admin/vertical-images/generate-single", "/api/admin/vertical-images/generate", "/api/admin/tarot/regenerate", "/api/admin/tarot/generate"]);
export function isAdminRequest(request,env=process.env) {
 const expected='Basic '+Buffer.from((env.ADMIN_USERNAME||'')+':'+(env.ADMIN_PASSWORD||'')).toString('base64');
 const value=request.headers.get('authorization')||'';
 return Boolean(env.ADMIN_USERNAME&&env.ADMIN_PASSWORD&&Buffer.byteLength(value)===Buffer.byteLength(expected)&&timingSafeEqual(Buffer.from(value),Buffer.from(expected)));
}
const json=(body,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function enqueueAdminJob(path,body,db=sql) {
 if(!ADMIN_JOB_PATHS.has(path)&&path!=='@infrastructure-check')throw new Error('Unsupported job route.');
 if(Buffer.byteLength(JSON.stringify(body))>262144)throw new Error('Job body too large.');
 const id=randomUUID();await db.query('INSERT INTO admin_jobs(id,path,payload,status) VALUES($1,$2,$3,$4)',[id,path,JSON.stringify(body),'queued']);
 return json({mitosJob:{id}},202);
}
export async function maybeQueueAdminJob(request,env=process.env,db=sql) {
 if(env.MITOS_RUNTIME!=='aws'||env.MITOS_PROCESS==='job')return null;
 if(!isAdminRequest(request,env))return json({error:'Unauthorized'},401);
 const path=new URL(request.url).pathname;if(!ADMIN_JOB_PATHS.has(path))throw new Error('Unsupported job route.');
 let body;try{body=await request.clone().json();}catch{return json({error:'JSON inválido'},400);}
 try{return await enqueueAdminJob(path,body,db);}catch(error){if(error.message==='Job body too large.')return json({error:'Solicitud demasiado grande'},413);throw error;}
}
export async function readAdminJob(request,id,env=process.env,db=sql) {
 if(!isAdminRequest(request,env))return json({error:'Unauthorized'},401);
 if(!/^[a-f0-9-]{36}$/.test(id))return json({error:'Trabajo no encontrado'},404);
 const job=(await db.query('SELECT id,status,result,result_status,created_at,started_at,finished_at FROM admin_jobs WHERE id=$1',[id])).rows[0];
 return job?json(job):json({error:'Trabajo no encontrado'},404);
}
