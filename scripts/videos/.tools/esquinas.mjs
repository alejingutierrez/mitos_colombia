import sharp from 'sharp';
const [,,F,OUT,...rest]=process.argv;
const corners=JSON.parse(rest[0]);
const tiles=[];
for (const [k,[cx,cy]] of Object.entries(corners)){
  const left=Math.max(0,cx-100), top=Math.max(0,cy-100);
  const base=await sharp(F).extract({left,top,width:200,height:200}).resize(600,600,{kernel:'nearest'}).toBuffer();
  let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">`;
  for(let i=0;i<=10;i++){ const p=i*60;
    svg+=`<line x1="${p}" y1="0" x2="${p}" y2="600" stroke="#ff0066" stroke-width="${i%2?0.6:1.4}" opacity="0.6"/>`;
    svg+=`<line x1="0" y1="${p}" x2="600" y2="${p}" stroke="#ff0066" stroke-width="${i%2?0.6:1.4}" opacity="0.6"/>`;
    if(i%2===0){ svg+=`<text x="${p+2}" y="13" font-family="Helvetica" font-size="14" fill="#ff0066">${left+i*20}</text>`;
                 svg+=`<text x="2" y="${p+15}" font-family="Helvetica" font-size="14" fill="#ff0066">${top+i*20}</text>`; } }
  svg+=`<text x="480" y="585" font-family="Helvetica" font-size="26" fill="#00ffcc">${k}</text></svg>`;
  const ov=await sharp(Buffer.from(svg),{density:72}).resize(600,600).png().toBuffer();
  tiles.push(await sharp(base).composite([{input:ov}]).png().toBuffer());
}
await sharp({create:{width:1200,height:1200,channels:3,background:'#000'}})
  .composite([{input:tiles[0],left:0,top:0},{input:tiles[1],left:600,top:0},
              {input:tiles[3],left:0,top:600},{input:tiles[2],left:600,top:600}]).toFile(OUT);
console.log('ok');
