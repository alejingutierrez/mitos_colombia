import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import {pathToFileURL} from 'node:url';
export function verifySnapshot(receipt,manifest,digest) {
 if(receipt.kind!=='public-build-snapshot'||receipt.sha256!==digest||!receipt.tables.myths?.count||!/^build-input\/snapshots\/[a-f0-9-]{36}$/.test(manifest.prefix)||manifest.sha256!==digest||manifest.at!==receipt.at||typeof receipt.sourceVerified!=='boolean'||manifest.sourceVerified!==receipt.sourceVerified)throw new Error('Build snapshot/manifest failed integrity checks.');
 return {snapshot:digest,myths:receipt.tables.myths.count,sourceVerified:receipt.sourceVerified};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 const receipt=JSON.parse(await readFile('build-input/receipt.json','utf8'));
 const manifest=JSON.parse(await readFile('build-input/manifest.json','utf8'));
 const digest=createHash('sha256').update(await readFile('build-input/catalog.sqlite')).digest('hex');
 console.log(JSON.stringify(verifySnapshot(receipt,manifest,digest)));
}
