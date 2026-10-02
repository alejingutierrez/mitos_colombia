import {readAdminJob} from "../../../../../../runtime/admin-jobs.mjs";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(request,{params}) {return readAdminJob(request,(await params).id);}
