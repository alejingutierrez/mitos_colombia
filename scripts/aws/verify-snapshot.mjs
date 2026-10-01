import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const receipt = JSON.parse(await readFile('build-input/receipt.json','utf8'));
const digest = createHash('sha256').update(await readFile('build-input/catalog.sqlite')).digest('hex');
if (receipt.kind !== 'public-build-snapshot' || receipt.sha256 !== digest || !receipt.tables.myths?.count) throw new Error('Build snapshot failed integrity checks.');
console.log(JSON.stringify({ snapshot: digest, myths: receipt.tables.myths.count, sourceVerified: receipt.sourceVerified === true }));
