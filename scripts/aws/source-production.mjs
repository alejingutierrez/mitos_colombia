// Scoped read of the live source database Config, bound to this Vercel project and SHA.
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
export async function sourceProduction(expectedSha){
 if(!/^[a-f0-9]{40}$/.test(expectedSha||''))throw new Error('Expected live source SHA required.');
 const project='prj_DAxmdB0trnBDWBpR6mmfwHIUzHVz',team='team_GEudrG1hM2OstdVOLSsJbj4G';
 const auth=JSON.parse(await readFile(join(process.env.HOME,'Library/Application Support/com.vercel.cli/auth.json'),'utf8'));
 async function api(path){const r=await fetch('https://api.vercel.com'+path+(path.includes('?')?'&':'?')+'teamId='+team,{headers:{Authorization:'Bearer '+auth.token},signal:AbortSignal.timeout(20000)});if(!r.ok)throw new Error('Scoped source read failed: HTTP '+r.status);return r.json();}
 const metadata=await api('/v9/projects/'+project);
 const d=metadata.targets?.production;if(d?.meta?.githubCommitSha!==expectedSha)throw new Error('Live source deployment changed.');
 const list=await api('/v10/projects/'+project+'/env');
 const configs=list.envs.filter(e=>e.target.includes('production')&&e.key==='POSTGRES_URL'&&e.visibility!=='secret'&&!(e.visibility==null&&e.type==='sensitive'));
 if(configs.length!==1)throw new Error('Source database Config must have one retrievable production binding.');
 const result=await api('/v1/projects/'+project+'/env/'+configs[0].id),url=new URL(result.value);
 if(!url.hostname.endsWith('.neon.tech')||!['postgresql:','postgres:'].includes(url.protocol))throw new Error('Source database is outside the audited Neon origin.');
 return {url,binding:{project,productionDeployment:d.id,productionSha:expectedSha,verifiedAt:new Date().toISOString()}};
}
