// Preserve the exact user-provided originals; no renaming in Downloads or image editing.
import { readFile, readdir, mkdir, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
const names = ['ette-ennaka-imagen-principal.avif','default.jpg','images.jpeg','chimilas.jpg','chimilla1.jpg','Muiscas-0.jpg','R (2).jpeg','OIP (1).webp','150.jpg','R (1).jpeg','INDIOS-DE-TRENZAS-CHIMILA-INFANTIL-1-768x512.jpg','maxresdefault-1200x675.webp','R.jpeg','OIP.webp','chaman3.jpg','Río_Guatapurí,_Valledupar.JPG','Rio_Guatapuri.jpeg'];
const input = '/Users/alegut/Downloads';
const out = path.resolve('output/references/chimila/visual-01/user-originals');
await mkdir(out, {recursive:true});
const inventory = await readdir(input);
const records = [];
for (const [index,name] of names.entries()) {
    const actual = inventory.find(n => n.normalize('NFC') === name.normalize('NFC'));
    if (!actual) throw new Error('User-provided file not found: '+name);
    const file = path.join(input, actual);
    const bytes = await readFile(file);
    const id = 'U'+String(index+1).padStart(2,'0');
    const target = path.join(out, id+path.extname(actual));
    try { await copyFile(file, target, 1); }
    catch (e) {
        if(e.code !== 'EEXIST') throw e;
        const prior = await readFile(target);
        if(!bytes.equals(prior)) throw new Error('Existing archive differs; will not overwrite: '+target);
    }
    records.push({id,original_file:file,file:target,original_name:actual,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex'),provided_by:'user',original_preserved:true});
}
console.log(JSON.stringify(records));
