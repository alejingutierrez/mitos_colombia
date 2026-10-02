// X-Mitos-Stage is overwritten by CloudFront and only accepted behind the owned origin.
export function trustedAwsAuthOrigin(request,env=process.env) {
 const origin=request.headers.get('origin');if(!origin)return true;
 try{
  const value=new URL(origin).origin;
  if(value===new URL(env.NEXT_PUBLIC_SITE_URL).origin)return true;
  return request.headers.get('x-mitos-stage')==='1'&&value==='https://staging.mitosdecolombia.com';
 }catch{return false;}
}
