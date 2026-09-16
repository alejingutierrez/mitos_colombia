#!/usr/bin/env node
// Offline only: validates and freezes plans. Never calls a media provider.
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, relative, join, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildNarrativeMagicLines, validateNarrativeMagic, PAPER_CHARACTER_LINES } from '../../src/lib/narrative-magic.js';

export const ROOT = resolve(import.meta.dirname, '../..');
export const digest = value => createHash('sha256').update(value).digest('hex');
const required = (value, message) => { if (!value) throw new Error(message); };
const text = value => typeof value === 'string' && value.trim().length > 0;
const words = value => value.trim().split(/\s+/u).filter(Boolean).length;
const json = async path => JSON.parse(await readFile(path, 'utf8'));
const safePath = (root, path) => {
  required(text(path) && !isAbsolute(path), 'Ruta debe ser relativa al proyecto');
  const full = resolve(root, path), rel = relative(root, full);
  required(rel && !rel.startsWith('..') && !isAbsolute(rel), 'Ruta fuera del proyecto');
  return full;
};
const V3_STYLE_ID = 'wayuu-paper-magic-v3-prior-keyframe-continuity';
const V3_INPUT_KINDS = new Set(['canonical_model', 'triptych', 'prior_keyframe']);

function isV3(plan, style) {
  return style?.id === V3_STYLE_ID || plan.style.endsWith('/channel-dna.v3.json');
}

function validateFrozenInput(input) {
  required(input && text(input.path) && !isAbsolute(input.path), 'Entrada visual sin ruta relativa');
  required(/^[a-f0-9]{64}$/.test(input.sha256 || ''), 'Entrada visual sin SHA-256');
  required(V3_INPUT_KINDS.has(input.kind), 'Tipo de entrada visual desconocido');
  required(input.approved === true && text(input.role), 'Entrada visual no aprobada o sin rol');
}

export function validateV3Inputs(plan, shots, index, { requireReady = false } = {}) {
  const shot = shots[index], inputs = shot.generation_inputs;
  required(Array.isArray(inputs), shot.id + ': generation_inputs debe ser una lista');
  if (!inputs.length && !requireReady) return;
  required(inputs.length >= 2, shot.id + ': faltan al menos dos entradas visuales');
  inputs.forEach(validateFrozenInput);
  required(inputs.every(input => input.myth === plan.slug), shot.id + ': referencia de otro mito');
  if (index === 0) {
    required(inputs.every(input => ['canonical_model', 'triptych'].includes(input.kind)), shot.id + ': el arranque sólo acepta Biblia o tríptico');
    return;
  }
  const prior = inputs.filter(input => input.kind === 'prior_keyframe');
  if (index === 1) {
    required(prior.some(input => input.frame_id === shots[0].id), shot.id + ': falta el keyframe 1 aprobado');
    required(inputs.some(input => ['canonical_model', 'triptych'].includes(input.kind)), shot.id + ': falta una referencia canónica de arranque');
    return;
  }
  const expected = shots.slice(index - 2, index).map(previous => previous.id);
  required(prior.length >= 2, shot.id + ': faltan los dos keyframes anteriores aprobados');
  required(JSON.stringify(prior.slice(0, 2).map(input => input.frame_id)) === JSON.stringify(expected), shot.id + ': antecedentes fuera de orden o no inmediatos');
  for (const previous of shots.slice(index - 2, index)) {
    required(previous.asset?.status === 'approved_keyframe', shot.id + ': antecedente no aprobado: ' + previous.id);
    required(prior.some(input => input.frame_id === previous.id && input.path === previous.asset.path && input.sha256 === previous.asset.sha256), shot.id + ': ruta o hash no coincide con ' + previous.id);
  }
}

export function validatePlan(plan) {
  required(plan.schema === 'wayuu-video-preproduction/v1', 'Schema incorrecto');
  required(/^[a-z0-9-]+$/.test(plan.slug), 'Slug inválido');
  required(plan.generation?.quality === 'medium', 'Keyframes deben ser medium');
  required(plan.generation?.size === '864x1536', 'Keyframes deben ser 9:16 nativo 864x1536');
  required(plan.generation?.output_format === 'jpeg', 'Modelo o formato incorrecto');
  const v3 = plan.style.endsWith('/channel-dna.v3.json');
  if (v3) {
    required(['gpt-image-2.5-sunburst','gpt-image-2.5-flare','gpt-image-2'].includes(plan.generation.model), 'Modelo V3 no permitido');
    required(plan.generation.mode === 'image_edit_with_prior_keyframes', 'V3 requiere edición con memoria visual');
    required(plan.generation.input_images === 'declared_per_keyframe_and_frozen_with_sha256', 'V3 requiere entradas congeladas por keyframe');
    required(plan.generation.api_request_size === '1024x1536' && plan.generation.delivery_size === '864x1536', 'Tamaños API/entrega Sunburst incorrectos');
    required(plan.generation.delivery_transform === 'center_crop_864x1536', 'Falta transformación de entrega 9:16');
  } else {
    required(plan.generation?.model === 'gpt-image-2', 'Modelo histórico incorrecto');
    required(plan.generation.mode === 'text_only' && Array.isArray(plan.generation.input_images) && !plan.generation.input_images.length, 'No subir referencias en este flujo');
  }
  required(plan.duration?.measured === false, 'Esta etapa sólo contiene duración estimada');
  required(text(plan.story_thesis) && plan.continuity_rules?.length && plan.shared_scene_continuity?.length, 'Falta tesis o continuidad');
  required(text(plan.palette), 'Falta paleta propia del mito');
  required(plan.narrative?.events?.length && plan.inventory?.length, 'Faltan eventos o inventario previo');
  const entities = new Set(plan.inventory.map(e => e.id));
  const events = new Set(plan.narrative.events.map(e => e.id));
  required(entities.size === plan.inventory.length && events.size === plan.narrative.events.length, 'IDs repetidos en inventario/eventos');
  for (const e of plan.inventory) required(text(e.desc) && text(e.type), 'Entidad sin descripción o tipo');
  for (const e of plan.narrative.events) required(text(e.source) && ['historical_core','published_editorial_expansion'].includes(e.provenance), 'Evento sin procedencia');
  required(plan.blocks?.length > 0, 'Guion vacío');
  let cursor = 0, totalWords = 0;
  const ids = new Set(), covered = new Set(), shots = [], warnings = [];
  for (const b of plan.blocks) {
    required(text(b.voice_over) && text(b.voice_provenance), 'Bloque sin voz o procedencia');
    required(b.time_seconds?.[0] === cursor && b.time_seconds[1] > cursor, 'Timeline de bloques no continua');
    required(b.event_ids?.length && b.event_ids.every(id => events.has(id)), 'Bloque apunta a evento inexistente');
    b.event_ids.forEach(id => covered.add(id));
    totalWords += words(b.voice_over);
    required(b.word_count === words(b.voice_over), 'Conteo VO incorrecto');
    let frameCursor = cursor;
    required(b.keyframes?.length > 0, 'Bloque sin keyframes');
    for (const k of b.keyframes) {
      required(/^[a-z0-9-]+$/.test(k.id) && !ids.has(k.id), 'Keyframe inválido o duplicado');
      required(k.time_seconds?.[0] === frameCursor && k.time_seconds[1] > frameCursor && k.time_seconds[1] <= b.time_seconds[1], 'Timeline keyframe no continua');
      required(k.entity_ids?.length && k.entity_ids.every(id => entities.has(id)), 'Keyframe sin inventario válido');
      required(k.event_ids?.length && k.event_ids.every(id => b.event_ids.includes(id)), 'Keyframe fuera del evento del bloque');
      required(k.depth_planes?.length >= 3 && text(k.visual) && text(k.angle) && text(k.shot_scale), 'Falta diseño visual/cámara/capas');
      required(k.continuity_from === (shots.at(-1)?.id || null), 'Continuidad rota');
      required(text(k.transition_to_next) && text(k.motion_contract?.camera) && text(k.motion_contract?.forbidden), 'Falta contrato de movimiento o corte');
      required(['visible_magic','ordinary_consequence'].includes(k.scene_role), 'Función de plano desconocida');
      if (k.scene_role === 'visible_magic') {
        validateNarrativeMagic(k.magic_in_the_ordinary);
        required(k.magic_in_the_ordinary.event_ids.every(id => k.event_ids.includes(id)), 'Magia de otro episodio');
      } else required(k.magic_in_the_ordinary === null, 'Pausa cotidiana no debe arrastrar prodigio');
      required(['not_generated','existing_pilot_candidate_not_final','approved_keyframe'].includes(k.asset?.status), 'Estado de asset no válido para preproducción');
      if (k.asset.status !== 'not_generated') required(text(k.asset.path) && /^[a-f0-9]{64}$/.test(k.asset.sha256), 'Candidato sin evidencia');
      if (k.asset.qa_notes?.length) warnings.push(k.id + ': candidato piloto con notas visuales; no aprobación final');
      ids.add(k.id); shots.push(k); frameCursor = k.time_seconds[1];
    }
    required(frameCursor === b.time_seconds[1], 'Bloque con hueco');
    cursor = b.time_seconds[1];
  }
  required(cursor === plan.duration.target_seconds && totalWords === plan.duration.voice_words, 'Duración o palabras globales incorrectas');
  required(plan.narrative.events.filter(e => e.required).every(e => covered.has(e.id)), 'Faltan eventos necesarios del relato');
  if (v3) shots.forEach((_, index) => validateV3Inputs(plan, shots, index));
  return { shots: shots.length, words: totalWords, estimated_seconds: cursor, generated: shots.filter(k => k.asset.status !== 'not_generated').length, pending: shots.filter(k => k.asset.status === 'not_generated').length, warnings };
}

export async function verifyFiles(plan, root = ROOT) {
  const snapshot = await json(safePath(root, plan.narrative.snapshot));
  required(snapshot.slug === plan.slug && digest(snapshot.content) === plan.narrative.content_sha256, 'Relato local cambió');
  const refs = [...plan.canonical_models, ...plan.reference_review.sources, ...plan.blocks.flatMap(b => b.keyframes).filter(k => k.asset.path).map(k => k.asset), ...plan.blocks.flatMap(b => b.keyframes).flatMap(k => k.generation_inputs || [])];
  for (const ref of refs) required(digest(await readFile(safePath(root, ref.path))) === ref.sha256, 'Referencia o asset cambió: ' + ref.path);
  required(plan.reference_review.sources.every(r => r.reviewed && r.role === 'same_myth_direction_reference'), 'Referentes sin revisar o rol incorrecto');
  const modelIds = new Set(plan.canonical_models.map(m => m.model_id));
  required(plan.inventory.every(e => (e.model_ids || []).every(id => modelIds.has(id))), 'Modelo de inventario ausente');
  return { narrative_snapshot_verified: true, reference_checks: refs.length, public_freshness: 'not_checked_by_offline_preparer' };
}

export function buildPrompt(plan, shot, style) {
  if (['wayuu-paper-magic-v2-locked-material', V3_STYLE_ID].includes(style.id)) required(text(style.paper_lock), 'Falta contrato material invariable papercut');
  const block = plan.blocks.find(b => b.keyframes.some(k => k.id === shot.id));
  const hasPeople = shot.entity_ids.some(id => ['person','supporting_people'].includes(plan.inventory.find(e => e.id === id).type));
  return [
    'Use case: illustration-story',
    style.paper_lock || '',
    'Asset type: UN keyframe cinematográfico vertical 9:16; ' + plan.title,
    'Contexto narrativo, NO escribir en pantalla: ' + block.voice_over,
    'Instante ' + shot.id + ': ' + shot.visual,
    'Cámara: ' + shot.shot_scale + '; ' + shot.angle,
    'Material: ' + style.material, style.composition, ...(hasPeople ? PAPER_CHARACTER_LINES : ['Este plano no contiene personas. No añadir figuras por las reglas generales de estilo.']),
    'Color y luz: ' + (plan.palette || style.palette),
    'Reparto y utilería exclusivos de este plano:',
    ...shot.entity_ids.map(id => { const e = plan.inventory.find(e => e.id === id); return e.id + ': ' + e.desc; }),
    ...buildNarrativeMagicLines(shot.magic_in_the_ordinary),
    shot.scene_role === 'ordinary_consequence' ? 'Pausa de consecuencia cotidiana: no añadir otro fenómeno imposible, auras o estrellas. La acción y las ausencias sostienen la relación con el relato.' : '',
    'Capas en profundidad: ' + shot.depth_planes.join('; '),
    'Continuidad de mundo, no reparto adicional: ' + plan.shared_scene_continuity.join(' '),
    ...(isV3(plan, style) && shot.generation_inputs?.length ? ['Entradas visuales, EN ESTE ORDEN:', ...shot.generation_inputs.map((input, index) => `Imagen ${index + 1} · ${input.kind}${input.frame_id ? ' ' + input.frame_id : ''}: ${input.role}`), style.continuity_reference_policy.reference_role] : []),
    'Capturar un solo instante estable apto para movimiento posterior; no ilustrar toda la secuencia ni añadir trazos de movimiento.',
    'Evitar: ' + style.avoid.join('; '),
    'Sin texto, subtítulos, rótulos, marcas de agua, diagramas, paneles ni bordes externos de maqueta.',
  ].filter(Boolean).join('\n\n') + '\n';
}

export async function prepare(planPath, outPath, root = ROOT) {
  const planBytes = await readFile(safePath(root, planPath));
  const plan = JSON.parse(planBytes), checks = validatePlan(plan);
  const files = await verifyFiles(plan, root);
  const styleBytes = await readFile(safePath(root, plan.style)), style = JSON.parse(styleBytes);
  required(JSON.stringify(plan.generation) === JSON.stringify(style.generation), 'Plan y DNA discrepan');
  const out = safePath(root, outPath);
  await mkdir(resolve(out, '..'), { recursive: true });
  await mkdir(out); // EEXIST deliberately prevents overwriting frozen packages.
  await mkdir(join(out, 'prompts'));
  const jobs = [], shots = plan.blocks.flatMap(b => b.keyframes);
  const pending = shots.filter(k => k.asset.status === 'not_generated');
  const selected = isV3(plan, style) ? pending.slice(0, 1) : pending;
  for (const k of selected) {
    if (k.asset.status !== 'not_generated') continue;
    if (isV3(plan, style)) validateV3Inputs(plan, shots, shots.indexOf(k), { requireReady: true });
    const prompt = buildPrompt(plan, k, style), promptFile = join(outPath, 'prompts', k.id + '.txt');
    await writeFile(safePath(root, promptFile), prompt, { flag: 'wx' });
    const visualInputs = k.generation_inputs || [];
    jobs.push({ id: k.id, prompt_file: promptFile, prompt_sha256: digest(prompt), ...plan.generation, input_images: visualInputs, api_method: visualInputs.length ? 'images.edit' : 'images.generate', source_output: 'output/imagegen/wayuu/keyframes/' + plan.slug + '-' + plan.version + '/' + k.id + '.sunburst-master.jpeg', output: 'output/imagegen/wayuu/keyframes/' + plan.slug + '-' + plan.version + '/' + k.id + '.jpeg', status: 'prepared_not_generated' });
  }
  const freeze = { schema: 'wayuu-video-freeze/v1', created_at: new Date().toISOString(), plan: planPath, plan_sha256: digest(planBytes), style: plan.style, style_sha256: digest(styleBytes), checks, files, jobs, prior_candidates: plan.blocks.flatMap(b => b.keyframes).filter(k => k.asset.path).map(k => ({ id: k.id, ...k.asset })), no_api_calls: true };
  await writeFile(join(out, 'freeze.json'), JSON.stringify(freeze, null, 2) + '\n', { flag: 'wx' });
  await writeFile(join(out, 'plan.snapshot.json'), planBytes, { flag: 'wx' });
  await writeFile(join(out, 'style.snapshot.json'), styleBytes, { flag: 'wx' });
  return freeze;
}

async function main() {
  const args = process.argv.slice(2), command = args.shift();
  required(['validate','prepare'].includes(command), 'Uso: wayuu-preproduction.mjs validate|prepare --plan ruta [--out ruta]');
  const options = {};
  while (args.length) { const key = args.shift(); required(['--plan','--out'].includes(key), 'Argumento desconocido: ' + key); options[key] = args.shift(); }
  required(options['--plan'], 'Falta --plan');
  if (command === 'prepare') {
    required(options['--out'], 'Falta --out');
    const r = await prepare(options['--plan'], options['--out']);
    console.log(JSON.stringify({ status: 'prepared_not_generated', ...r.checks, jobs: r.jobs.length, package: options['--out'], no_api_calls: true }, null, 2));
  } else { const p = await json(safePath(ROOT, options['--plan'])); console.log(JSON.stringify({ ...validatePlan(p), ...await verifyFiles(p) }, null, 2)); }
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main().catch(e => { console.error(e.message); process.exitCode = 1; });
