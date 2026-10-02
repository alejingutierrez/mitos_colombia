import { readdir, stat, realpath } from 'node:fs/promises';
import path from 'node:path';
const root=process.argv[2] || '.next/standalone';
const resolvedRoot=await realpath(root);
const forbidden=new Set(['content','docs','output','artifacts','editorial','build-input','infra','.git','.claude','.aws','.vercel']);
let bytes=0,files=0;
async function walk(dir,relative='') {
  for(const entry of await readdir(dir,{withFileTypes:true})) {
    const rel=path.join(relative,entry.name);
    if(forbidden.has(rel.split(path.sep)[0]) || /(^|\/)\.env(?:\.|$)/.test(rel)) throw new Error('Standalone contains forbidden source/configuration files.');
    if(entry.isSymbolicLink()) {
      const target=await realpath(path.join(dir,entry.name));
      if(!target.startsWith(resolvedRoot+path.sep))throw new Error('Standalone symlink escapes the package.');
      continue;
    }
    if(entry.isDirectory()) await walk(path.join(dir,entry.name),rel);
    else {bytes+=(await stat(path.join(dir,entry.name))).size;files++;}
  }
}
await walk(root);
if(bytes>800*1024*1024)throw new Error('Standalone exceeds its reviewed size limit.');
console.log(JSON.stringify({kind:'standalone-audit',bytes,files,excludedWorkshopAndSecrets:true}));
