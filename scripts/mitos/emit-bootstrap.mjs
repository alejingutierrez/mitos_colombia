#!/usr/bin/env node
/**
 * Emite el arnés completo para la pestaña de higgsfield.ai: la parte fija de la
 * dirección de arte más todos los helpers de la sesión.
 *
 * Se inyecta una vez por sesión, y OTRA VEZ despues de cada recarga — al
 * recargar se pierde el arnés y, peor, el toggle Unlimited vuelve a apagarse
 * solo, de modo que cada imagen empezaría a costar 7 créditos y lo único que lo
 * delata es que el botón diga `Generate 7` en vez de `Unlimited`.
 *
 * Sin esto, cada escena tendría que arrastrar sus ~3.000 caracteres de
 * preámbulo idéntico hasta el navegador. Con esto, la constante viaja una vez
 * por sesión y cada escena manda sólo lo suyo: `hf('entrada','umbral','...')`.
 * La fuente sigue siendo `art-direction.mjs`, así que la doctrina no se
 * bifurca — esto es una proyección, no una copia editable.
 */
import { TECNICA, PROHIBICIONES, ACTOS, FICHAS } from "./art-direction.mjs";
import { COMPOSITION_SCHEMAS, ERA_REGISTERS, getEraLines, getRegionCraft, getCommunityCraft, inferEra } from "../../src/lib/visual-direction.js";
import { readFileSync } from "node:fs";

const comunidadKey = process.argv[2] || "muiscas";
const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidadKey}.json`, "utf8"));
const { comunidad, region } = plan;

const cabecera = [
  `Dirección de arte para la biblia visual de mitos colombianos (${comunidad}, región ${region}).`,
  "",
  TECNICA,
  "",
  ...getEraLines(inferEra(comunidad)),
  "",
  `TERRITORIO: ${getRegionCraft(region)}.`,
  `COMUNIDAD: ${getCommunityCraft(comunidad)}.`,
].join("\n");

const ERAS = Object.fromEntries(Object.entries(ERA_REGISTERS).map(([k, v]) => [k, v.lines.join("\n")]));
const ERA_BASE = getEraLines(inferEra(comunidad)).join("\n");
const FICHAS_LINEAS = Object.fromEntries(Object.entries(FICHAS).map(([k, v]) => [k, v.linea]));
const actos = Object.fromEntries(Object.entries(ACTOS).map(([k, v]) => [k, v.lines.join("\n")]));
const comps = Object.fromEntries(Object.entries(COMPOSITION_SCHEMAS).map(([k, v]) => [k, v.lines.join("\n")]));

const salida = `window.__MITOS={C:${JSON.stringify(cabecera)},A:${JSON.stringify(actos)},K:${JSON.stringify(comps)},P:${JSON.stringify(PROHIBICIONES)},F:${JSON.stringify(FICHAS_LINEAS)},E:${JSON.stringify(ERAS)},EB:${JSON.stringify(ERA_BASE)},ASP:{personaje:"9:16",paisaje:"16:9",prop:"1:1"}};

// --- El toggle Unlimited: paso 0 de toda sesión ---------------------------
window.hfUnlim=async function(){
 var s=[...document.querySelectorAll('[role=switch]')].find(function(e){return e.getBoundingClientRect().width>0;});
 if(!s) return 'no encontré el toggle';
 var b=function(){var x=document.querySelector('button[type=submit]');return x?x.innerText.trim().replace(/\\s+/g,' '):'?';};
 if(b().indexOf('Unlimited')<0){ s.click(); await new Promise(function(r){setTimeout(r,900);}); }
 return 'botón="'+b()+'"';
};

// --- Proporción -----------------------------------------------------------
// Ojo: NO recorrer todos los divs leyendo innerText. Eso fuerza layout por
// elemento y, con la galería llena, tarda tanto que la tanda parece congelada
// (nos pasó a mitad de una corrida de 17). Se sale temprano si ya está puesta
// y se busca sólo dentro del menú abierto.
window.hfAspect=function(v){
 var VAL=/^(Auto|1:1|3:2|2:3|16:9|9:16|4:3|3:4|21:9)$/;
 var boton=function(){ return [...document.querySelectorAll('button')].find(function(b){return VAL.test((b.textContent||'').trim());}); };
 var b=boton();
 if(!b) return Promise.resolve('no encontré el botón de proporción');
 if((b.textContent||'').trim()===v) return Promise.resolve('proporción ya en '+v);
 b.click();
 return new Promise(function(res){ setTimeout(function(){
  var op=[...document.querySelectorAll('[role=option],[role=menuitem],button')]
    .filter(function(e){ return (e.textContent||'').trim()===v && e!==boton(); });
  if(!op.length){ document.body.click(); return res('no apareció la opción '+v); }
  op[op.length-1].click();
  setTimeout(function(){ var n=boton(); res('proporción → '+(n?(n.textContent||'').trim():'?')); },400);
 },450); });
};

// --- Escribir en el editor Lexical ---------------------------------------
// La caja no es un textarea: execCommand corta en el primer espacio y
// seleccionar por Range concatena en vez de reemplazar. Lo único fiable es
// reconstruir el estado del editor y dárselo entero.
window.hfSetText=function(t){
 var el=document.querySelector('[contenteditable="true"]'), ed=el.__lexicalEditor;
 var hijos=t.split("\\n").map(function(l){return {children:l.length?[{detail:0,format:0,mode:"normal",style:"",text:l,type:"text",version:1}]:[],direction:null,format:"",indent:0,type:"paragraph",version:1,textFormat:0,textStyle:""};});
 ed.setEditorState(ed.parseEditorState({root:{children:hijos,direction:null,format:"",indent:0,type:"root",version:1}}));
 return el.innerText.length;
};

// --- Referencias ----------------------------------------------------------
window.hfTira=function(){
 var b=[...document.querySelectorAll('button')].map(function(e){return {e:e,r:e.getBoundingClientRect()};});
 var slots=b.filter(function(o){return Math.round(o.r.width)===56&&Math.round(o.r.height)===56;});
 if(!slots.length) return {slots:[],cierres:[]};
 var y=slots[0].r.top;
 return {slots:slots, cierres:b.filter(function(o){return Math.round(o.r.width)===24&&Math.round(o.r.height)===24&&Math.abs(o.r.top-(y-12))<20;})};
};
window.hfNumRefs=function(){ return Math.max(0,window.hfTira().slots.length-1); };
window.hfClearRefs=async function(){
 var n=0;
 for(var g=0;g<12;g++){ var t=window.hfTira(); if(!t.cierres.length) break; t.cierres[0].e.click(); n++; await new Promise(function(r){setTimeout(r,400);}); }
 return 'quitadas '+n+' · quedan '+window.hfNumRefs();
};

// --- Resultados -----------------------------------------------------------
// La galería sirve las imágenes por un proxy con la URL firmada en el query
// string, que el navegador no deja leer; el nombre del archivo nativo sí, y es
// determinista.
window.hfIds=function(){
 var ids=[],vis={};
 [...document.querySelectorAll('img')].forEach(function(i){
  var m=(i.src||'').match(/hf_(\\d{8})_(\\d{6})_([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/);
  if(m){var s=m[1]+'|'+m[2]+'|'+m[3]; if(!vis[s]){vis[s]=1;ids.push(s);}}
 });
 return ids;
};
// El id que devuelve el POST de creación no coincide con el nombre del archivo
// final. Con dos generaciones en vuelo registramos el conjunto de ids nuevo de
// cada par; el detalle de cada asset conserva su prompt para resolver el orden
// exacto antes de ingestar.
window.hfNuevosIds=function(antes,desde){
 var a={}; (antes||[]).forEach(function(x){a[x]=1;});
 return window.hfIds().filter(function(x){
  if(a[x]) return false;
  if(!desde) return true;
  var p=x.split('|'), f=p[0]||'', h=p[1]||'';
  if(f.length!==8||h.length!==6) return false;
  var t=new Date(+f.slice(0,4),+f.slice(4,6)-1,+f.slice(6,8),+h.slice(0,2),+h.slice(2,4),+h.slice(4,6)).getTime();
  return t>=desde-120000;
 });
};

// --- Composición del prompt ----------------------------------------------
window.hfArma=function(it,o){
 o=o||{}; var M=window.__MITOS;
 var texto=it.texto+(o.sufijo||''), paleta=it.paleta||o.paleta;
 var C=M.C;
 if(it.era&&M.E[it.era]) C=C.split(M.EB).join(M.E[it.era]);
 if(it.tipo==='ficha') return C.replace(/\\n\\n(ÉPOCA|Materiales)/,'\\n'+M.F[it.kind]+'\\n\\n$1')+"\\n\\nEscena:\\n"+texto+"\\n\\nPaleta: "+paleta+"\\n"+M.P;
 var esVideo=Boolean(o.sufijo);
 var guia=esVideo
  ? "FOTOGRAMA DE VIDEO: es un plano de continuidad, no el acto principal del tríptico. La descripción de Escena manda literalmente sobre cualquier ejemplo genérico de composición. No añadir personas, animales, objetos, fuentes de luz ni fenómenos que la Escena no nombre; si dice sin personas, sin aves, nada figurativo o vacío, respetarlo de forma absoluta."
  : M.A[it.acto];
 return [C,"",guia,"",M.K[it.comp],"","Escena:",texto,"","Paleta: "+paleta,M.P].join("\\n");
};

// --- La tanda -------------------------------------------------------------
// Corre en segundo plano porque el puente de depuración corta a los 45 s.
// El bundle de imagen del Marketplace admite DOS generaciones simultáneas. No
// es la misma modalidad que el Unlimited promocional, que puede operar con una
// sola. El badge aparece con retraso, así que cada clic se confirma antes de
// preparar el siguiente prompt. Se lanzan pares y no se abre el par siguiente
// hasta que ambos terminaron.
// La pieza pasa por varios estados antes de terminar y no siempre dice
// "Generating": cuentan todos como en vuelo. textContent evita forzar layout.
window.hfEnVuelo=function(){ var m=(document.body.textContent||'').match(/Generating|Processing|Queued/g); return m?m.length:0; };
window.hfBanner=function(){
 return /You can generate\\s+\\d+\\s+unlimited[\\s\\S]{0,120}generation[\\s\\S]{0,80}at a time/i.test(document.body.textContent||'');
};
// NUNCA clickear a ciegas la franja superior: ahí viven el buscador y los
// controles de la galería. Una versión anterior lo hacía y abrió un modal que
// tapó la página —la tanda se quedó reintentando a ciegas— y además metió la
// galería en modo selección múltiple, con el botón de borrar a un clic.
// Se busca el NODO que contiene el texto del banner y se clickea sólo el botón
// que está DENTRO de él.
window.hfCerrarBanner=function(){
 if(!window.hfBanner()) return false;
 var re=/You can generate\\s+\\d+\\s+unlimited[\\s\\S]{0,120}generation[\\s\\S]{0,80}at a time/i;
 var nodos=[...document.querySelectorAll('div,section,aside')].filter(function(e){
  return e.textContent && re.test(e.textContent)
      && e.querySelectorAll('button').length<=2 && e.textContent.length<300;
 });
 if(!nodos.length) return window.hfBanner();
 var b=nodos[nodos.length-1].querySelector('button');
 if(b) try{ b.click(); }catch(x){}
 return window.hfBanner();
};
window.hfEnviarUno=async function(it,opts){
 opts=opts||{};
 var max=opts.maxVuelo||2, base=window.hfEnVuelo();
 if(base>=max) return {ok:false, motivo:'sin cupo: '+base+'/'+max+' en vuelo'};
 window.hfCerrarBanner();
 await new Promise(function(r){setTimeout(r,400);});
 await window.hfAspect(it.aspect);
 var t=window.hfArma(it,opts);
 window.hfSetText(t);
 await new Promise(function(r){setTimeout(r,400);});
 var ed=document.querySelector('[contenteditable="true"]').__lexicalEditor;
 var lin=ed.getEditorState().toJSON().root.children.length, esp=t.split("\\n").length;
 if(lin!==esp) return {ok:false, motivo:'párrafos '+lin+'/'+esp};
 var b=document.querySelector('button[type=submit]');
 if(!b||b.innerText.trim().indexOf('Unlimited')<0) return {ok:false, motivo:'botón dice "'+(b?b.innerText.trim().replace(/\\s+/g,' '):'?')+'"', abortar:true};
 b.click();
 // Confirmar aceptación antes de tocar el editor para la pieza siguiente.
 for(var i=0;i<240;i++){
  await new Promise(function(r){setTimeout(r,500);});
  if(window.hfBanner()) return {ok:false, motivo:'rechazada — límite de concurrencia'};
  if(window.hfEnVuelo()>base) return {ok:true,vuelo:window.hfEnVuelo()};
 }
 return {ok:false, motivo:'sin confirmación de arranque'};
};
window.hfEsperarVacio=async function(opts){
 opts=opts||{}; var estable=0;
 for(var j=0;j<900;j++){
  if(window.hfEnVuelo()===0){ estable++; if(estable>=5) return true; }
  else estable=0;
  await new Promise(function(r){setTimeout(r,1000);});
 }
 return false;
};
window.__HF=null;
window.hfStart=function(items,opts){
 opts=opts||{};
 opts.maxVuelo=Math.max(1,Math.min(2,opts.maxVuelo||2));
 var S={fase:'arrancando',total:items.length,enviados:0,ok:0,fallos:[],pendientes:[],pares:[],inicio:Date.now()};
 window.__HF=S;
 (async function(){
  try{
   if(window.hfEnVuelo()>0){ S.fase='ABORTADO · ya había '+window.hfEnVuelo()+' en vuelo'; return; }
   var cola=items.map(function(it){return {it:it,intento:0};}), nPar=0;
   while(cola.length){
    nPar++;
    var lote=cola.splice(0,opts.maxVuelo), antes=window.hfIds(), inicioPar=Date.now(), aceptadas=[];
    for(var q=0;q<lote.length;q++){
     var x=lote[q], it=x.it;
     S.fase='par '+nPar+' · '+it.tag+' ('+(S.ok+1)+'/'+items.length+')';
     var r=await window.hfEnviarUno(it,opts);
     S.enviados++;
     if(r.ok){ S.ok++; aceptadas.push(it.tag); }
     else if(r.abortar){ S.fase='ABORTADO en '+it.tag+' · '+r.motivo; return; }
     else if(x.intento<1){ cola.unshift({it:it,intento:x.intento+1}); }
     else { S.fallos.push({tag:it.tag,motivo:r.motivo}); S.pendientes.push(it.tag); }
     await new Promise(function(z){setTimeout(z,opts.pausa||6000);});
    }
    S.fase='esperando par '+nPar+' · '+aceptadas.join(' + ');
    if(!(await window.hfEsperarVacio(opts))){ S.fase='ABORTADO · el par '+nPar+' excedió la espera'; return; }
    await new Promise(function(z){setTimeout(z,opts.respiro||6000);});
    S.pares.push({n:nPar,tags:aceptadas,ids:window.hfNuevosIds(antes,inicioPar)});
   }
   S.fase='LISTO';
  }catch(e){ S.fase='ERROR: '+(e&&e.message||e); }
 })();
 return 'tanda arrancada: '+items.length+' piezas, en pares de hasta '+opts.maxVuelo+' con confirmación';
};
window.hfEstado=function(){ var S=window.__HF; if(!S) return 'sin tanda';
 return JSON.stringify({fase:S.fase,enviados:S.enviados,ok:S.ok,total:S.total,fallos:S.fallos,pendientes:S.pendientes,pares:S.pares}); };
// La galería desmonta lo que sale de pantalla: en tandas largas hay que
// barrerla para recoger todos los ids antes de ingestar.
window.hfBarrerBG=function(pasos){
 window.__BARRIDO={acc:{},orden:[],listo:false};
 (async function(){
  var B=window.__BARRIDO;
  var g=function(){ window.hfIds().forEach(function(s){ if(!B.acc[s]){B.acc[s]=1;B.orden.push(s);} }); };
  window.scrollTo(0,0); await new Promise(function(r){setTimeout(r,900);}); g();
  for(var i=0;i<(pasos||18);i++){ window.scrollBy(0, window.innerHeight*0.8); await new Promise(function(r){setTimeout(r,700);}); g(); }
  window.scrollTo(0,0); await new Promise(function(r){setTimeout(r,900);}); g();
  B.orden.sort().reverse(); B.listo=true;
 })();
 return 'barriendo';
};
"arnés listo"`;

// Los comentarios valen en ESTE archivo, que es el que se lee y se corrige.
// La copia que viaja al navegador no los necesita, y quitarlos recorta ~40%
// de un payload que se reinyecta en cada recarga.
// El arnés viaja dentro de un template literal, así que una barra invertida sin
// doblar la come Node y llega JavaScript roto al navegador — pasó con
// `t.split("\\n")`. Se verifica aquí, que es barato, y no allá, que es caro.
try {
  new Function(salida);
} catch (e) {
  console.error(`\nEL ARNÉS EMITIDO NO COMPILA: ${e.message}`);
  console.error("Suele ser una barra invertida sin doblar dentro del template literal.\n");
  process.exit(1);
}

console.log(
  process.argv.includes("--min")
    ? salida.split("\n").filter((l) => !/^\s*\/\//.test(l)).join("\n")
    : salida
);
