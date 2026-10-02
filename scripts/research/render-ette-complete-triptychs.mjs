import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
const plan=JSON.parse(await fs.readFile(process.argv[2],"utf8"));
const folder=path.resolve(process.argv[3]);await fs.mkdir(folder,{recursive:true});
const escape=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
for(let start=0;start<plan.myths.length;start+=4){
 const group=plan.myths.slice(start,start+4),layers=[];
 for(let i=0;i<group.length;i++){
  const myth=group[i],top=i*614;
  const label=escape(myth.id+" · "+myth.title);
  layers.push({input:Buffer.from('<svg width="1600" height="52"><rect width="100%" height="100%" fill="#eee5d5"/><text x="24" y="35" font-family="Arial" font-size="25" fill="#263629">'+label+'</text></svg>'),left:0,top});
  layers.push({input:await sharp(myth.review_file).resize(1600,562,{fit:"contain",background:"#eee5d5"}).png().toBuffer(),left:0,top:top+52});
 }
 const file=path.join(folder,"tanda-"+(Math.floor(start/4)+1)+"-v1.png");
 try{await fs.access(file);throw new Error("Refusing existing output");}catch(e){if(e.code!=="ENOENT")throw e;}
 await sharp({create:{width:1600,height:group.length*614,channels:3,background:"#eee5d5"}}).composite(layers).png().toFile(file);
 console.log(JSON.stringify({file,myths:group.map(m=>m.id),full_artworks_without_crop:group.length*3}));
}

