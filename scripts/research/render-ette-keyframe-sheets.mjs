import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const manifest = JSON.parse(await fs.readFile(process.argv[2], 'utf8'));
const folder = path.resolve(process.argv[3]);
const frames = manifest.selected;
if (!Array.isArray(frames) || !frames.length) throw new Error('Missing selected keyframes');
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
await fs.mkdir(folder, {recursive:true});
const outputs = [];
for (let start=0; start<frames.length; start+=4) {
  const group = frames.slice(start,start+4);
  const width=1200, rows=Math.ceil(group.length/2), height=72+rows*914;
  const layers=[];
  const title=escape(manifest.myth_title || 'La Gran Cacica');
  const header=Buffer.from(`<svg width="1200" height="58"><text x="20" y="35" font-family="sans-serif" font-size="24" fill="#394838">${title} · keyframes ${start+1}–${start+group.length}</text></svg>`);
  layers.push({input:header,left:0,top:0});
  for (let n=0;n<group.length;n++) {
    const frame=group[n],left=20+(n%2)*590,top=64+Math.floor(n/2)*914;
    const label=Buffer.from(`<svg width="570" height="38"><text x="0" y="25" font-family="sans-serif" font-size="20" fill="#394838">${escape(frame.frame_id)} · ${escape(frame.title || frame.frame_id)}</text></svg>`);
    const image=await sharp(frame.file).resize(570,855,{fit:'contain',background:'#eee7d6'}).png().toBuffer();
    layers.push({input:label,left,top},{input:image,left,top:top+39});
  }
  const file=path.join(folder,`secuencia-${Math.floor(start/4)+1}-v1.png`);
  try {await fs.access(file);throw new Error('Refusing to overwrite '+file);} catch(error){if(error.code!=='ENOENT')throw error;}
  await sharp({create:{width,height,channels:3,background:'#eee7d6'}}).composite(layers).png().toFile(file);
  outputs.push(file);
}
console.log(JSON.stringify({review_sheets:outputs,selected_frames:frames.length,source_images_unchanged:true,no_crop:true}));
