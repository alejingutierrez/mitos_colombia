import sharp from 'sharp';
import { contrastRatio } from '../../../src/lib/instagram-story.js';

// Measure the actual backing at opaque glyph pixels. With a text halo this is
// the rendered halo + photograph; without one it is the unaltered photograph.
// A second, isolated ink mask excludes spaces and antialiased glyph edges.
export async function verifyPhotoText(page, frame) {
  const text = await frame.evaluate(element => {
    const area = element.getBoundingClientRect();
    return [...element.querySelectorAll('[data-photo-text]')].map(slot => {
      const chars = [];
      const walker = document.createTreeWalker(slot, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const color = getComputedStyle(node.parentElement).color;
        for (let i = 0; i < node.length; i++) {
          if (!node.data[i].trim()) continue;
          const range = document.createRange(); range.setStart(node, i); range.setEnd(node, i + 1);
          const r = range.getBoundingClientRect();
          if (r.width && r.height) chars.push({ x:r.left-area.left, y:r.top-area.top, w:r.width, h:r.height, color });
        }
      }
      return { text:slot.textContent.slice(0,80), chars };
    });
  });
  if (!text.length) return [];
  // Keep explicit stroke/shadow colors intact while hiding only the glyph fill.
  const hideInk = await page.addStyleTag({content:'[data-photo-text], [data-photo-text] * { -webkit-text-fill-color:transparent!important; }'});
  let backing;
  try { backing = await frame.screenshot({animations:'disabled'}); }
  finally { await hideInk.evaluate(el=>el.remove()); }
  const maskStyle = await page.addStyleTag({content:`
    [data-story-slide] { background:#000!important; }
    [data-story-slide] * { visibility:hidden!important; }
    [data-photo-text], [data-photo-text] * { visibility:visible!important; color:#fff!important; -webkit-text-fill-color:#fff!important; -webkit-text-stroke:0!important; text-shadow:none!important; background:transparent!important; border-color:transparent!important; }
  `});
  let mask;
  try { mask = await frame.screenshot({animations:'disabled'}); }
  finally { await maskStyle.evaluate(el=>el.remove()); }
  const {data,info}=await sharp(backing).removeAlpha().raw().toBuffer({resolveWithObject:true});
  const maskData=await sharp(mask).removeAlpha().raw().toBuffer();
  const hex = values => '#'+values.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('');
  return text.map(slot=>{
    let min=21, samples=0;
    for(const char of slot.chars) {
      const rgb=char.color.match(/[\d.]+/g)?.slice(0,3).map(Number);
      if(!rgb || rgb.length!==3) throw new Error('No se pudo medir la tinta de la fotografía.');
      const foreground=hex(rgb);
      for(let y=Math.max(0,Math.ceil(char.y)); y<Math.min(info.height,char.y+char.h); y++) {
        for(let x=Math.max(0,Math.ceil(char.x)); x<Math.min(info.width,char.x+char.w); x++) {
          const offset=(y*info.width+x)*info.channels;
          if(maskData[offset]<250) continue;
          samples++;
          min=Math.min(min,contrastRatio(foreground,hex([...data.subarray(offset,offset+3)])));
        }
      }
    }
    return {text:slot.text,method:'opaque-glyph-backing',samples,minimum:Number(min.toFixed(2)),ok:samples>0 && min>=4.5};
  });
}
