import {enqueueAdminJob,isAdminRequest} from "../../../../../runtime/admin-jobs.mjs";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function POST(request) {
 if(!isAdminRequest(request))return Response.json({error:"Unauthorized"},{status:401});
 const body=await request.json();if(body.kind!=="infrastructure-check")return Response.json({error:"Trabajo desconocido"},{status:400});
 return enqueueAdminJob("@infrastructure-check",{fixture:true});
}
