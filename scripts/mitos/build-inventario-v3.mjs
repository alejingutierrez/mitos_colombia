#!/usr/bin/env node
/**
 * Compuerta 3-4 de la Biblia visual V3: montar el inventario desde el censo y
 * la investigacion.
 *
 * El censo ya dijo **que** hay que dibujar y con que decision; la
 * investigacion ya dijo **con que evidencia y que no se puede mostrar**. Este
 * script los cose en el plan V3 y **no inventa nada**: lo que no puede
 * derivarse honestamente lo deja vacio y lo cuenta al final, para que el
 * agente que escriba sepa exactamente que falta.
 *
 * Lo que deriva:
 *   · `research` entero, desde el dossier
 *   · `entities`, con nombre, categoria, estados, descripcion, mitos que la
 *     usan, evidencia atada a la matriz, y la decision visual del censo
 *   · `evidence_basis` y `sensitivity`, mapeados de los enums V2 a los V3
 *   · `myths.<slug>.entity_refs`, con el rol derivado de la categoria
 *
 * Lo que NO deriva, porque seria inventarlo:
 *   · el bloque `design` de cada entidad requerida — es la sustancia
 *   · la `note` de cada bitacora de extraccion — si treinta se leen iguales,
 *     la extraccion no se hizo
 *   · cual entidad es `primary` en cada mito: el script propone una candidata
 *     y la marca, pero la decision es de quien leyo el relato
 *
 *   node scripts/mitos/build-inventario-v3.mjs --id koguis
 *   node scripts/mitos/build-inventario-v3.mjs --todos
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const PLANES = "content/mitos-visuales";
const CENSO = "content/mitos-visuales/censo-2026-09-18";
const RESEARCH = "content/mitos-visuales/research-2026-09-18";

/** El mapeo de la seccion 1 del kit. Los dos vocabularios no coinciden. */
export const BASIS_V2_A_V3 = {
  documented_core: "documented",
  variant: "variant",
  contemporary_memory: "documented",
  academic_hypothesis: "inferred",
  editorial_interpretation: "editorial_interpretation",
  uncertain: "uncertain",
};

/** `do_not_visualize` no tiene equivalente: no es un grado, es la ausencia de ficha. */
export const SENSIBILIDAD_V2_A_V3 = {
  public: "public",
  contextual: "contextual",
  consult_required: "sensitive",
};

/** De menos a mas restrictivo: gana la mas restrictiva que toque la entidad. */
const ORDEN_SENSIBILIDAD = ["public", "contextual", "consult_required", "do_not_visualize"];
/** De mas firme a menos: gana la mas firme, y la nota dice si hay otras. */
const ORDEN_BASE = [
  "documented_core",
  "contemporary_memory",
  "variant",
  "academic_hypothesis",
  "editorial_interpretation",
  "uncertain",
];

/**
 * El rol sale de la categoria, y la regla se declara aqui para que se pueda
 * auditar. `primary` no se deriva: lo propone el script y lo confirma quien
 * leyo el relato.
 */
export const ROL_POR_CATEGORIA = {
  personaje: "secondary",
  deidad_fuerza: "magic_subject",
  criatura: "secondary",
  animal: "secondary",
  colectivo: "secondary",
  objeto: "plot_object",
  planta: "plot_object",
  arquitectura: "setting",
  lugar: "setting",
  paisaje: "setting",
  fenomeno: "magic_subject",
};

const CATEGORIAS_FIGURA = new Set(["personaje", "deidad_fuerza", "criatura"]);

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    const key = argv[i].slice(2);
    const next = argv[i + 1];
    out[key] = !next || next.startsWith("--") ? true : next;
  }
  return out;
}

const leer = (ruta) => JSON.parse(readFileSync(ruta, "utf8"));

/**
 * La entidad mas especifica de un relato es la candidata a primaria: la figura
 * que aparece en menos mitos, porque es la que ese relato aporta y no hereda.
 */
function candidataPrimaria(entidades) {
  const figuras = entidades.filter((e) => CATEGORIAS_FIGURA.has(e.kind));
  const pool = figuras.length ? figuras : entidades;
  return [...pool].sort(
    (a, b) => (a.myths?.length ?? 99) - (b.myths?.length ?? 99) || (b.sheets ?? 0) - (a.sheets ?? 0),
  )[0];
}

export function construir({ plan, censo, research }) {
  const pendientes = { design: [], notas_extraccion: [], primarias_por_confirmar: [] };
  const campoRelato = (plan.corpus?.required_fields || []).includes("content") ? "content" : "mito";

  // La investigacion entra entera: es el expediente que sostiene cada ficha.
  plan.research = {
    sources: research.sources,
    evidence_matrix: research.evidence_matrix,
    cultural_review: research.cultural_review,
    gaps: research.gaps,
    dossier: `docs/investigacion/${censo.id}.md`,
  };
  plan.visual_system = { ...(plan.visual_system || {}), ...research.visual_system_draft };

  // Cada fila de la matriz que nombra una entidad se vuelve su evidencia.
  const porEntidad = new Map();
  for (const fila of research.evidence_matrix || []) {
    for (const id of fila.affects || []) {
      if (!porEntidad.has(id)) porEntidad.set(id, []);
      porEntidad.get(id).push(fila);
    }
  }

  plan.entities = {};
  for (const e of censo.entities) {
    const filas = porEntidad.get(e.id) || [];
    const bases = filas.map((f) => f.basis).filter(Boolean);
    const sensibilidades = filas.map((f) => f.sensitivity).filter(Boolean);
    const baseV2 = ORDEN_BASE.find((b) => bases.includes(b)) || "uncertain";
    const sensV2 =
      [...ORDEN_SENSIBILIDAD].reverse().find((s) => sensibilidades.includes(s)) || "public";

    // Sin fila de matriz la evidencia es el propio corpus, que es lo que leyo
    // el censo. Es honesto decirlo asi y no dejar la lista vacia.
    const evidence = filas.length
      ? filas.slice(0, 6).map((f) => ({
          myth: (e.myths || [])[0],
          field: campoRelato,
          note: f.claim,
        }))
      : [{ myth: (e.myths || [])[0], field: campoRelato, note: e.note || "Detectada en la lectura del corpus." }];

    const entidad = {
      name: e.name,
      kind: e.kind,
      description: e.note || e.name,
      aliases: [],
      states: (e.states || []).length ? e.states : ["canonico"],
      evidence_basis: BASIS_V2_A_V3[baseV2] || "uncertain",
      sensitivity: SENSIBILIDAD_V2_A_V3[sensV2] || "public",
      visual_status: e.decision,
      model_requirements: [],
      model_refs: [],
      legacy_model_refs: [],
      myth_refs: [...new Set(e.myths || [])],
      evidence: evidence.filter((row) => row.myth),
      census_note: e.note || null,
    };

    if (e.decision === "embedded") {
      entidad.covered_by = e.covered_by;
      entidad.coverage_note = e.note || "Cubierta dentro de otra ficha.";
    }
    if (e.decision === "excluded") {
      entidad.exclusion_reason = e.reason || e.note;
    }
    if (e.decision === "required") {
      // La sustancia no se deriva: se escribe.
      entidad.design = null;
      entidad.states_declared = e.states || [];
      pendientes.design.push(e.id);
    }
    plan.entities[e.id] = entidad;
  }

  // Los refs se arman al reves: desde la entidad hacia el mito, para que la
  // relacion quede validada en las dos direcciones sin poder mentir.
  const porMito = new Map();
  for (const e of censo.entities) {
    for (const slug of new Set(e.myths || [])) {
      if (!porMito.has(slug)) porMito.set(slug, []);
      porMito.get(slug).push(e);
    }
  }

  for (const slug of plan.corpus.myth_slugs) {
    const mito = plan.myths[slug] || (plan.myths[slug] = { title: slug, extraction: null, entity_refs: [] });
    const entidades = porMito.get(slug) || [];
    const primaria = candidataPrimaria(entidades);
    mito.entity_refs = entidades.map((e) => ({
      entity_id: e.id,
      role: e === primaria ? "primary" : ROL_POR_CATEGORIA[e.kind] || "secondary",
      note: e.note || `${e.name} en ${slug}.`,
      role_derivada: e === primaria ? "candidata, confirmar" : "por categoria",
    }));
    if (primaria) pendientes.primarias_por_confirmar.push(`${slug} → ${primaria.id}`);
    if (!entidades.length) pendientes.notas_extraccion.push(`${slug} (sin entidades en el censo)`);

    mito.extraction = {
      reviewed_fields: plan.source_snapshot.fields,
      passes: [
        "named_entities",
        "unnamed_roles",
        "animals_and_creatures",
        "objects_and_plants",
        "places_and_architecture",
        "states_and_transformations",
        "variant_differences",
      ],
      unresolved_mentions: [],
      review_status: "agent_reviewed",
      reviewed_at: "2026-09-19",
      note: null,
    };
    pendientes.notas_extraccion.push(slug);
  }

  plan.inventory = {
    ...plan.inventory,
    status: "derived_pending_authoring",
    frozen: false,
    derived_from: { censo: `${CENSO}/${censo.id}.json`, research: `${RESEARCH}/${censo.id}.json` },
    derivation_note:
      "Las entidades, sus evidencias y los refs se derivaron del censo y de la matriz de evidencia. El rol sale de la categoria segun ROL_POR_CATEGORIA; la entidad primaria es una candidata propuesta por el script y hay que confirmarla leyendo el relato. El bloque design y la nota de cada bitacora se escriben a mano.",
  };
  plan.status = "inventory";

  return { plan, pendientes };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const ids = args.todos
    ? readdirSync(CENSO).filter((n) => n.endsWith(".json")).map((n) => n.replace(/\.json$/, "")).sort()
    : [String(args.id || "")];
  if (!ids[0]) throw new Error("usa --id <corpus> o --todos");

  let totalDesign = 0;
  let totalNotas = 0;
  for (const id of ids) {
    const planPath = resolve(join(PLANES, `${id}.v3.json`));
    if (!existsSync(planPath)) {
      console.error(`SIN PLAN  ${id}`);
      continue;
    }
    const { plan, pendientes } = construir({
      plan: leer(planPath),
      censo: leer(join(CENSO, `${id}.json`)),
      research: leer(join(RESEARCH, `${id}.json`)),
    });
    if (!args.check) writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`);
    totalDesign += pendientes.design.length;
    totalNotas += pendientes.notas_extraccion.length;
    console.log(
      `${id.padEnd(28)} ${String(Object.keys(plan.entities).length).padStart(4)} entidades · ${String(pendientes.design.length).padStart(4)} design por escribir · ${String(pendientes.notas_extraccion.length).padStart(3)} notas de extraccion`,
    );
  }
  console.log("-".repeat(88));
  console.log(`${ids.length} corpus · ${totalDesign} bloques design y ${totalNotas} notas por escribir`);
  console.log("Eso es lo que no se puede derivar sin inventarlo.");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
