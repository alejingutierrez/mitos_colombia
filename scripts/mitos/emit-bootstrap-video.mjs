#!/usr/bin/env node
/**
 * Emite helpers conservadores para la sesión web de Seedance 2.5.
 *
 * Se pega en la consola de higgsfield.ai/ai/video después de cada recarga.
 * El arnés nunca elige archivos locales: el operador adjunta un único
 * keyframe por clip y luego llama `hfVideoSend(prompt)`.
 */

const salida = String.raw`(function(){
var sleep=function(ms){return new Promise(function(resolve){setTimeout(resolve,ms);});};
var text=function(el){return (el&&el.innerText||'').replace(/\s+/g,' ').trim();};
var visible=function(el){if(!el)return false;var r=el.getBoundingClientRect();return r.width>0&&r.height>0;};

window.hfVideoButton=function(){
 return [...document.querySelectorAll('button')].find(function(el){
  return visible(el)&&/Generate/.test(text(el));
 });
};

window.hfVideoUnlim=async function(){
 var button=window.hfVideoButton();
 if(button&&/Unlimited/.test(text(button))) return 'Unlimited activo';
 var toggle=[...document.querySelectorAll('[role="switch"]')].find(function(el){
  var parent=el.parentElement;
  return visible(el)&&/Unlimited mode/i.test(text(parent)||document.body.innerText);
 });
 if(!toggle) throw new Error('No se encontró el toggle Unlimited');
 toggle.click();
 await sleep(900);
 button=window.hfVideoButton();
 if(!button||!/Unlimited/.test(text(button))) throw new Error('Unlimited no quedó activo: '+text(button));
 return 'Unlimited activo';
};

window.hfVideoAudioOff=async function(){
 var checkbox=[...document.querySelectorAll('input[type="checkbox"],[role="checkbox"]')]
  .find(function(el){return visible(el);});
 if(!checkbox) return 'sin toggle de audio';
 var checked=checkbox.checked===true||checkbox.getAttribute('aria-checked')==='true';
 if(checked){checkbox.click();await sleep(300);}
 checked=checkbox.checked===true||checkbox.getAttribute('aria-checked')==='true';
 if(checked) throw new Error('El audio nativo sigue encendido');
 return 'audio nativo apagado';
};

window.hfVideoSetText=async function(prompt){
 var editor=document.querySelector('[contenteditable="true"][data-lexical-editor="true"], [contenteditable="true"]');
 if(!editor) throw new Error('No se encontró el editor del prompt');
 var lines=prompt.split('\n');
 if(editor.__lexicalEditor){
  var children=lines.map(function(line){return {
   children:line.length?[{detail:0,format:0,mode:'normal',style:'',text:line,type:'text',version:1}]:[],
   direction:null,format:'',indent:0,type:'paragraph',version:1,textFormat:0,textStyle:''
  };});
  var state={root:{children:children,direction:null,format:'',indent:0,type:'root',version:1}};
  editor.__lexicalEditor.setEditorState(editor.__lexicalEditor.parseEditorState(state));
 }else{
  editor.focus();
  editor.replaceChildren.apply(editor,lines.map(function(line){
   var p=document.createElement('p');
   if(line.length) p.appendChild(document.createTextNode(line));
   else p.appendChild(document.createElement('br'));
   return p;
  }));
  editor.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:prompt}));
 }
 await sleep(700);
 editor.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',code:'Escape',keyCode:27,which:27,bubbles:true,cancelable:true}));
 editor.blur();
 await sleep(150);
 var actual=[...editor.querySelectorAll('p')].map(function(p){return p.textContent;});
 var exact=actual.length===lines.length&&actual.every(function(line,index){return line===lines[index];});
 if(!exact) throw new Error('Prompt no quedó exacto: párrafos '+actual.length+'/'+lines.length);
 var mentions=editor.querySelectorAll('[data-beautiful-mention="@image_1"]').length;
 var expectedMentions=(prompt.match(/@Image 1/g)||[]).length;
 if(mentions!==expectedMentions)
  throw new Error('La referencia @Image 1 no quedó enlazada: '+mentions+'/'+expectedMentions);
 return {paragraphs:actual.length,characters:prompt.length,mentions:mentions};
};

window.hfVideoState=function(){
 var body=document.body.innerText;
 var active=body.match(/Generating|Processing|Queued/g)||[];
 var rejected=/1 unlimited video, image & audio generation at a time/i.test(body);
 var moderated=/(moderation|content[^\n]{0,50}(blocked|rejected|not allowed)|violat(?:e|ion))/i.test(body);
 return {active:active.length,statuses:active,rejected:rejected,moderated:moderated};
};

window.hfVideoIds=function(){
 var seen={},out=[];
 [...document.querySelectorAll('video[src],video[poster],source[src],img[src]')].forEach(function(el){
  [el.src,el.poster].filter(Boolean).forEach(function(url){
   var match=String(url).match(/hf_(\d{8})_(\d{6})_([0-9a-f-]{36})/i);
   if(match){var id=match[1]+'|'+match[2]+'|'+match[3];if(!seen[id]){seen[id]=1;out.push(id);}}
  });
 });
 return out;
};

window.hfVideoPreflight=function(){
 var body=document.body.innerText;
 var button=window.hfVideoButton();
 var editor=document.querySelector('[contenteditable="true"]');
 var refs=editor?editor.querySelectorAll('[data-beautiful-mention="@image_1"]').length:0;
 return {
  model:/Seedance 2\.5/.test(body),duration:/\b5s\b/.test(body),ratio:/9:16/.test(body),
  resolution:/1080p/.test(body),unlimited:!!button&&/Unlimited/.test(text(button)),
  paragraphs:editor?editor.querySelectorAll('p').length:0,references:refs,
  audioOff:/\bOff\b/.test(body)
 };
};

window.hfVideoSend=async function(prompt,opts){
 opts=opts||{};
 await window.hfVideoUnlim();
 await window.hfVideoAudioOff();
 var written=await window.hfVideoSetText(prompt);
 var pre=window.hfVideoPreflight();
 if(!pre.model||!pre.duration||!pre.ratio||!pre.resolution||!pre.unlimited||!pre.audioOff||pre.references<1)
  throw new Error('Preflight incompleto: '+JSON.stringify(pre));
 var button=window.hfVideoButton();
 button.click();
 var acceptUntil=Date.now()+(opts.acceptTimeoutMs||120000),state;
 while(Date.now()<acceptUntil){
  await sleep(500);
  state=window.hfVideoState();
  if(state.rejected) return {ok:false,reason:'concurrencia',preflight:pre,written:written};
  if(state.moderated) return {ok:false,reason:'moderación',preflight:pre,written:written};
  if(state.active>0) break;
 }
 if(!state||state.active===0) return {ok:false,reason:'sin confirmación',preflight:pre,written:written};
 var finishUntil=Date.now()+(opts.finishTimeoutMs||2700000);
 while(Date.now()<finishUntil){
  await sleep(1000);
  state=window.hfVideoState();
  if(state.moderated) return {ok:false,reason:'moderación',preflight:pre,written:written};
  if(state.active===0){await sleep(opts.respiro||7000);return {ok:true,preflight:pre,written:written,ids:window.hfVideoIds()};}
 }
 return {ok:false,reason:'timeout',preflight:pre,written:written};
};

return 'arnés de video listo';
})();`;

try {
  new Function(salida);
} catch (error) {
  console.error(`\nEL ARNÉS DE VIDEO NO COMPILA: ${error.message}\n`);
  process.exit(1);
}

console.log(
  process.argv.includes("--min")
    ? salida.split("\n").filter((line) => !/^\s*\/\//.test(line)).join("\n")
    : salida,
);
