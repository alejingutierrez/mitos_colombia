// Preserve existing admin forms while the owned worker performs long tasks.
export async function adminFetch(input,init) {
 const response=await globalThis.fetch(input,init);
 if(response.status!==202)return response;
 let queued;try{queued=await response.clone().json();}catch{return response;}
 const id=queued.mitosJob?.id;if(!id||!/^[-a-f0-9]{36}$/.test(id))return response;
 const headers=init?.headers||(input instanceof Request?input.headers:undefined),signal=init?.signal;
 for(let attempt=0;attempt<1200;attempt++){
  if(signal?.aborted)throw signal.reason;
  await new Promise(resolve=>setTimeout(resolve,1500));
  const poll=await globalThis.fetch('/api/admin/jobs/'+id,{headers,signal,cache:'no-store',credentials:init?.credentials||'same-origin'});
  if(!poll.ok)return poll;
  const job=await poll.json();
  if(['succeeded','failed','needs_review'].includes(job.status))return Response.json(job.result||{error:'El trabajo requiere revisión.'},{status:job.result_status||500});
 }
 return Response.json({error:'El trabajo continúa en proceso. Consulta su estado antes de repetirlo.',jobId:id},{status:504});
}
