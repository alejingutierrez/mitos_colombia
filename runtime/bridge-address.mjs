import {createHmac,timingSafeEqual} from 'node:crypto';
import {isIP} from 'node:net';
const material=(request,ip,time)=>{const u=new URL(request.url);return [time,ip,request.method.toUpperCase(),u.pathname+u.search].join('\n');};
export function bridgeHeaders(request,key,now=Date.now()){
 if(!/^[a-f0-9]{64}$/.test(key||''))throw Error('Bridge key missing');
 const ip=(request.headers.get('x-vercel-forwarded-for')||'').trim();if(!isIP(ip))throw Error('Trusted source IP missing');
 const time=String(Math.floor(now/1000));return {'x-mitos-bridge-ip':ip,'x-mitos-bridge-time':time,'x-mitos-bridge-signature':createHmac('sha256',key).update(material(request,ip,time)).digest('hex')};
}
export function awsClientAddress(request,env=process.env,now=Date.now()){
 const fallback=request.headers.get('x-mitos-client-ip')||'unknown';
 const key=env.MITOS_SOURCE_BRIDGE_KEY,ip=request.headers.get('x-mitos-bridge-ip')||'',time=request.headers.get('x-mitos-bridge-time')||'',sig=request.headers.get('x-mitos-bridge-signature')||'';
 if(!/^[a-f0-9]{64}$/.test(key||'')||!isIP(ip)||!/^\d{10}$/.test(time)||Math.abs(now/1000-Number(time))>90||! /^[a-f0-9]{64}$/.test(sig))return fallback;
 const expected=createHmac('sha256',key).update(material(request,ip,time)).digest('hex');
 return timingSafeEqual(Buffer.from(expected,'hex'),Buffer.from(sig,'hex'))?ip:fallback;
}
