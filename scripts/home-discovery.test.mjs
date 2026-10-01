import assert from 'node:assert/strict';
import test from 'node:test';
import { communityCatalog, communitySelection, discoveryPick, DISCOVERY_THEMES } from '../src/lib/home-discovery.js';
import { assignThemeChips, buildMesaFilters, toMesaCard } from '../src/lib/home-rotation.js';

const pool = Array.from({ length: 5 }, (_, region) => DISCOVERY_THEMES.flatMap((slug, topic) => Array.from({ length: 3 }, (_, copy) => ({ slug: `r${region}-t${topic}-c${copy}`, region: `Región ${region}`, region_slug: `r${region}`, community: `Pueblo ${copy}`, tags: [{ slug, name: slug }], image_url: '/obra.jpg' })))).flat();

test('la mesa ofrece 24 relatos únicos, temas diversos y reparto territorial', () => {
  const picked = discoveryPick({ items: pool, seed: 700, count: 24 });
  assert.equal(picked.length, 24);
  assert.equal(new Set(picked.map(item => item.slug)).size, 24);
  const regions = Array.from({ length: 5 }, (_, r) => picked.filter(item => item.region_slug === `r${r}`).length);
  assert.ok(Math.max(...regions) - Math.min(...regions) <= 1);
  assert.equal(new Set(picked.flatMap(item => item.tags.map(tag => tag.slug))).size, 8);
  assert.deepEqual(picked, discoveryPick({ items: pool, seed: 700 }));
});
test('barajar cambia la mano, respeta exclusiones y tolera un filtro pequeño', () => {
  const first = discoveryPick({ items: pool, seed: 700 });
  const exclude = first.map(item => item.slug);
  const next = discoveryPick({ items: pool, seed: 701, exclude });
  assert.ok(next.every(item => !exclude.includes(item.slug)));
  assert.equal(discoveryPick({ items: pool.slice(0,2), seed: 1 }).length, 2);
});
test('los temas conservan nombres reales y sus conteos corresponden a las tarjetas', () => {
  const items = discoveryPick({ items: pool, seed: 700 });
  const { chips, themeOf } = assignThemeChips({ items, tagsOf: item => item.tags });
  assert.equal(chips.length,8);
  const cards = items.map(item => toMesaCard(item, { tags:item.tags, theme:themeOf.get(item.slug) }));
  for (const filter of buildMesaFilters(cards,chips).slice(1)) assert.equal(filter.count,cards.filter(card => card.theme === filter.key).length);
});
test('comunidades pequeñas siguen visibles, filas homónimas se reúnen y las obras no se repiten', () => {
  const rows = [{slug:'uno',name:'Uno',regionSlug:'r1',mythCount:1,myths:[{slug:'a',imageUrl:'/a'}]}, {slug:'uno',name:'Uno',regionSlug:'r2',mythCount:2,myths:[{slug:'b',imageUrl:'/b'},{slug:'a',imageUrl:'/a'}]}, {slug:'mixto',generic:true,myths:[{slug:'c',imageUrl:'/c'}]}];
  const catalog = communityCatalog(rows);
  assert.equal(catalog.length,1);
  assert.equal(catalog[0].mythCount,3);
  assert.deepEqual(catalog[0].myths.map(item=>item.slug),['a','b']);
  assert.deepEqual(communityCatalog(rows,['a'])[0].myths.map(item=>item.slug),['b','a']);
  assert.equal(communityCatalog(rows,['a','b'])[0].myths.length,2);
});
test('cambiar comunidades ofrece otro conjunto sin repetir el anterior', () => {
  const items = Array.from({length:18},(_,i)=>({slug:`pueblo-${i}`,regionSlug:`r${i%5}`}));
  const first = communitySelection(items,300);
  const next = communitySelection(items,301,first.map(item=>item.slug));
  assert.equal(next.length,6);
  assert.ok(next.every(item=>!first.some(previous=>previous.slug===item.slug)));
});
