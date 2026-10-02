// Copied only into a surgical source deployment based on its published SHA.
// Until a deliberate source env change, existing routes are untouched.
import {bridgeHeaders} from './bridge-address.mjs';
export const AWS_WEB='https://d1ufovyt065ux1.cloudfront.net';
export const AWS_CALLBACK=AWS_WEB+'/api/tarot/bold/events';
const readApis=/^\/api\/(?:myths(?:\/[^/]+)?|taxonomy|search|mapa|comments)$/;
export function sourceDecision(request,env=process.env){
 const mode=env.MITOS_SOURCE_BRIDGE_MODE;
 if(env.MITOS_RUNTIME==='aws'||!mode)return {kind:'next'};
 if(env.VERCEL!=='1'||env.VERCEL_ENV!=='production'||!['freeze','aws'].includes(mode))return {kind:'maintenance'};
 const u=new URL(request.url);
 if(mode==='freeze'){
  if(u.pathname==='/api/tarot/bold/events'&&request.method==='POST')return {kind:'callback',url:AWS_CALLBACK};
  if(u.pathname.startsWith('/admin')||u.pathname.startsWith('/api/')&&(!['GET','HEAD'].includes(request.method)||!readApis.test(u.pathname)))return {kind:'maintenance'};
  return {kind:'next'};
 }
 // Previous HTML may still need the previous immutable chunks. They never write DB.
 if(u.pathname.startsWith('/_next/static/'))return {kind:'next'};
 if(u.hostname==='mitosdecolombia.com')return {kind:'redirect',url:'https://www.mitosdecolombia.com'+u.pathname+u.search};
 try{return {kind:'rewrite',url:AWS_WEB+u.pathname+u.search,headers:bridgeHeaders(request,env.MITOS_SOURCE_BRIDGE_KEY)};}catch{return {kind:'maintenance'};}
}
export async function forwardCallback(request,fetcher=fetch){
 const size=Number(request.headers.get('content-length')||0);if(size>200000)return {status:413,body:{error:'event_too_large'}};
 const rawBody=await request.text();if(Buffer.byteLength(rawBody)>200000)return {status:413,body:{error:'event_too_large'}};
 try{
  const r=await fetcher(AWS_CALLBACK,{method:'POST',headers:{'content-type':'application/json','x-bold-signature':request.headers.get('x-bold-signature')||''},body:rawBody,redirect:'manual',signal:AbortSignal.timeout(10000)});
  const result=await r.json();
  if(r.status!==200||result.received!==true||!(result.queued===true||result.handled===false))throw Error('Durable receipt missing');
  return {status:200,body:result};
 }catch{return {status:503,body:{error:'durable_receipt_failed'}};}
}
