import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const root = path.resolve('output/references/chimila/visual-01');
const tasks = [
  ['danta','Tapirus terrestris'],['felino','Panthera onca'],['caiman','Caiman crocodilus'],
  ['mono','Cebus capucinus'],['sapo','Rhinella marina'],['karau_posible','Aramus guarauna'],
  ['rabipelado_posible','Didelphis marsupialis'],['lechuza','Tyto alba'],
  ['ceiba','Ceiba pentandra'],['totumo','Crescentia cujete'],['maiz','Zea mays cob'],['algodon','Gossypium hirsutum']
];
const records = [], searches = [];
let next = 0;
const plain = s => String(s || '').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
async function worker() {
  while(next < tasks.length) {
    const [label, term] = tasks[next++];
    const url = new URL('https://commons.wikimedia.org/w/api.php');
    for(const [k,v] of Object.entries({action:'query',format:'json',generator:'search',gsrsearch:term,gsrnamespace:'6',gsrlimit:'2',prop:'imageinfo',iiprop:'url|size|mime|extmetadata'}))url.searchParams.set(k,v);
    try {
      const response = await fetch(url, {signal:AbortSignal.timeout(20000),headers:{'User-Agent':'EtteVisualReferenceResearch/1.0 (noncommercial research)'}});
      if(!response.ok)throw new Error('HTTP '+response.status);
      const data = await response.json();
      const pages = Object.values(data.query?.pages || {});
      searches.push({label,term,url:url.href,status:'queried',results:pages.length});
      for(const [i,p] of pages.entries()) {
        const info = p.imageinfo?.[0];
        if(!info || !/image\/(jpeg|png|webp)/.test(info.mime) || info.width<350 || info.height<200)continue;
        const responseImage = await fetch(info.url,{signal:AbortSignal.timeout(20000)});
        if(!responseImage.ok)throw new Error('Image HTTP '+responseImage.status);
        const bytes = Buffer.from(await responseImage.arrayBuffer());
        const meta = await sharp(bytes).metadata();
        const id='NAT-'+label+'-'+(i+1);
        const file = path.join(root,'images',id+'.'+(meta.format==='jpeg'?'jpg':meta.format));
        await fs.writeFile(file,bytes);
        const ex=info.extmetadata || {};
        records.push({id,source_id:'NAT',subject:label,scientific_reference_candidate:term,source_url:info.descriptionurl,image_url:info.url,file,publisher:'Wikimedia Commons / fotógrafo identificado en el registro',photographer:plain(ex.Artist?.value),license:plain(ex.LicenseShortName?.value),license_url:ex.LicenseUrl?.value || null,credit:plain(ex.Credit?.value),date:plain(ex.DateTimeOriginal?.value),width:meta.width,height:meta.height,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),status:'downloaded',reviewed:false,use:'morphology_reference_only_not_ette_territorial_or_lexical_identification',warning:'Ni identificación definitiva del animal del relato ni prueba de presencia en territorio Ette; comprobar que es fotografía, no mapa o ilustración.'});
      }
      console.log(label+': '+pages.length+' results');
    } catch(error) { searches.push({label,term,url:url.href,status:'failed',error:error.message});console.log(label+': '+error.message); }
  }
}
await Promise.all(Array.from({length:2},worker));
await fs.writeFile(path.join(root,'natural-images.v1.json'),JSON.stringify({searches,records},null,2)+'\n');
