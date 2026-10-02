// Prepared, inactive source bridge. Place at src/proxy.js only on the source patch.
import {NextResponse} from 'next/server';
import {sourceDecision,forwardCallback} from '../runtime/source-cutover.mjs';
export async function proxy(request){
 const decision=sourceDecision(request);
 if(decision.kind==='next')return NextResponse.next();
 if(decision.kind==='redirect')return NextResponse.redirect(decision.url,308);
 if(decision.kind==='callback'){const r=await forwardCallback(request);return NextResponse.json(r.body,{status:r.status,headers:{'Cache-Control':'no-store'}});}
 if(decision.kind==='rewrite'){
  const headers=new Headers(request.headers);
  for(const [k,v] of Object.entries(decision.headers))headers.set(k,v);
  headers.delete('x-mitos-worker-token');headers.delete('x-mitos-origin');
  return NextResponse.rewrite(new URL(decision.url),{request:{headers}});
 }
 return NextResponse.json({error:'maintenance',message:'Estamos realizando una actualización. Inténtalo de nuevo en unos minutos.'},{status:503,headers:{'Retry-After':'60','Cache-Control':'no-store'}});
}
export const config={matcher:'/:path*'};
