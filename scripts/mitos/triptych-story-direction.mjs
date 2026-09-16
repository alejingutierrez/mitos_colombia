import { createHash } from "node:crypto";
import { buildNarrativeMagicLines, validateNarrativeMagic } from "../../src/lib/narrative-magic.js";
import { buildSymbolicLines, validateSymbolicContract } from "../../src/lib/triptych-functions.js";

export const STORY_FIRST_PROFILE = "story_first_v1";
export const STORY_MAGIC_PROFILE = "story_first_v2_magic_in_the_ordinary";
export const STORY_SYMBOLIC_PROFILE = "story_first_v3_symbolic_huella";
export const isStoryFirstProfile = (profile) => [STORY_FIRST_PROFILE, STORY_MAGIC_PROFILE, STORY_SYMBOLIC_PROFILE].includes(profile);

export function validateVisualMemoryReview(myth, library) {
  const entry = library?.myths?.[myth.narrative_contract.target_slug];
  if (!entry) throw new Error("Mito ausente de la memoria visual");
  const review = myth.visual_memory_review;
  if (!review?.reviewer || !review?.reviewed_at || !review?.retained?.length || !review?.rejected?.length) {
    throw new Error("Falta revisión de memoria visual: qué rescatar y qué no trasladar");
  }
  const known = new Map(entry.references.map(ref => [ref.id, ref]));
  if (entry.references.length && !review.reviewed_reference_ids?.length) throw new Error("Hay imágenes previas, pero ninguna fue revisada");
  for (const id of review.reviewed_reference_ids || []) {
    if (!known.has(id)) throw new Error("Referencia visual de otro mito o inexistente");
    if (known.get(id).visual_review !== "inspected") throw new Error("Referencia visual inventariada pero aún no inspeccionada");
  }
  if (!entry.references.length && !review.no_references_found_reason) throw new Error("Documentar búsqueda sin referencias");
  for (const act of ['entrada','acto','huella']) if (!review.influence_by_act?.[act]?.trim()) throw new Error(`${act}: falta decisión sobre inspiración previa`);
}

export function validateNarrativePlan(plan, myth, snapshot) {
  const contract = myth.narrative_contract;
  if (!contract || !snapshot?.content) throw new Error("falta relato objetivo congelado");
  const hash = createHash("sha256").update(snapshot.content).digest("hex");
  if (hash !== contract.target_content_sha256 || hash !== snapshot.content_sha256) {
    throw new Error("el relato objetivo cambió: reconciliar el expediente antes de preparar");
  }
  if (snapshot.slug !== contract.target_slug) throw new Error("el relato corresponde a otro mito");
  const events = new Map(contract.events.map((event) => [event.id, event]));
  const covered = new Set();
  for (const [act, scene] of Object.entries(myth.escenas)) {
    if (scene.narrative_summary !== undefined && (typeof scene.narrative_summary !== "string" || !scene.narrative_summary.trim())) {
      throw new Error(`${act}: resumen narrativo de escena vacío o inválido`);
    }
    if (scene.continuity_contract !== undefined && (!Array.isArray(scene.continuity_contract) || !scene.continuity_contract.length || scene.continuity_contract.some(line => typeof line !== "string" || !line.trim()))) {
      throw new Error(`${act}: continuidad propia vacía o inválida`);
    }
    if (!scene.narrative_event_ids?.length) throw new Error(`${act}: escena sin acción narrativa`);
    for (const id of scene.narrative_event_ids) {
      if (!events.has(id)) throw new Error(`${act}: evento sin procedencia: ${id}`);
      covered.add(id);
    }
    if (!scene.editorial_translation || !scene.visual_question) {
      throw new Error(`${act}: falta distinguir puesta en escena y prueba visual`);
    }
    if ([STORY_MAGIC_PROFILE, STORY_SYMBOLIC_PROFILE].includes(plan.prompt_profile) || scene.magic_in_the_ordinary) {
      validateNarrativeMagic(scene.magic_in_the_ordinary);
      for (const id of scene.magic_in_the_ordinary.event_ids) {
        if (!scene.narrative_event_ids.includes(id)) {
          throw new Error(`${act}: magia desligada de la acción narrativa: ${id}`);
        }
      }
    }
    if (plan.prompt_profile === STORY_SYMBOLIC_PROFILE) {
      const expected = act === "huella" ? "symbolic_synthesis" : "narrative_scene";
      if (scene.visual_function !== expected) throw new Error(`${act}: función editorial debe ser ${expected}`);
    }
    if (scene.visual_function === "symbolic_synthesis") {
      if (act !== "huella") throw new Error("la síntesis simbólica corresponde a huella");
      validateSymbolicContract(scene.symbolic_contract);
      if (!scene.material_direction?.trim() || !scene.continuity_contract?.length) {
        throw new Error("huella: definir materialidad y continuidad propias sin arrastrar el reparto escénico");
      }
    }
    const [width, height] = String(plan.output_sizes?.[act] || "").split("x").map(Number);
    const [rw, rh] = { entrada: [16, 9], acto: [9, 16], huella: [1, 1] }[act] || [];
    if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0 ||
        width % 16 || height % 16 || width * rh !== height * rw ||
        Math.max(width, height) > 3840 || width * height < 655360 || width * height > 8294400) {
      throw new Error(`${act}: tamaño incompatible con el formato declarado`);
    }
  }
  for (const event of contract.events) {
    if (!['historical_core', 'published_editorial_expansion'].includes(event.provenance)) {
      throw new Error(`${event.id}: procedencia no declarada`);
    }
    if (event.required && !covered.has(event.id)) throw new Error(`acción narrativa omitida: ${event.id}`);
  }
}

// El prompt recibe una escena concreta; no arrastra prescripciones visuales de
// otros actos ni convierte decisiones anteriores de diseño en hechos del mito.
export function buildStoryFirstPrompt({ myth, act }) {
  const scene = myth.escenas[act];
  if (scene.visual_function === "symbolic_synthesis") {
    // La trama queda trazable en el expediente; no se pide volver a escenificar
    // todas sus acciones ni se hereda vestuario de personas ausentes.
    return [
      "Use case: stylized-concept",
      `Asset type: huella simbólica cuadrada del tríptico de ${myth.titulo}; una sola imagen completa.`,
      buildSymbolicLines(scene.symbolic_contract).join("\n"),
      `Composición simbólica: ${scene.escena}`,
      `Tratamiento: ${scene.material_direction}`,
      `Continuidad de esta pieza: ${scene.continuity_contract.join(" ")}`,
      `Color y luz: ${scene.light || myth.paleta}`,
      buildNarrativeMagicLines(scene.magic_in_the_ordinary).join("\n"),
      `Licencia visual editorial: ${scene.editorial_translation}`,
      `Control de lectura: ${scene.visual_question}`,
      `Evitar: ${(scene.avoid || myth.avoid).join("; ")}.`,
      "Generación desde texto, sin imágenes de referencia. Sin letras, rótulos ni marcas de agua.",
    ].join("\n\n");
  }
  return [
    "Use case: illustration-story",
    `Asset type: tríptico narrativo de ${myth.titulo}; ${act}. Una sola imagen completa, sin paneles.`,
    `Relato objetivo: ${scene.narrative_summary || myth.narrative_contract.summary}`,
    `Momento y emoción: ${scene.beat}`,
    ...(scene.magic_in_the_ordinary ? [buildNarrativeMagicLines(scene.magic_in_the_ordinary).join("\n")] : []),
    `Escena: ${scene.escena}`,
    `Tratamiento: ${myth.material_direction}`,
    `Continuidad: ${(scene.continuity_contract || myth.continuity_contract).join(" ")}`,
    `Color y luz: ${scene.light || myth.paleta}`,
    `Licencia visual editorial: ${scene.editorial_translation}`,
    `Control de lectura: ${scene.visual_question}`,
    `Evitar: ${myth.avoid.join("; ")}.`,
    "Generación desde texto, sin imágenes de referencia. Sin letras, rótulos ni marcas de agua.",
  ].join("\n\n");
}
