import crypto from "node:crypto";
import fs from "node:fs";

const root = "/Users/alegut/MyApps/Personal/mitos_colombia";
process.chdir(root);

const newMyths = [
  "los-dominios-de-juya",
  "los-dos-hermanos",
  "los-mellizos-transformadores",
  "maleiwa",
  "serranias-de-la-guajira",
  "ulepala",
  "umarala",
  "waleker-el-origen-del-tejido"
];
const hash = (file) => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
const json = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);

for (const slug of newMyths) {
  const planPath = `content/videos/wayuu/videos/${slug}/preproduccion-01/plan.json`;
  const plan = json(planPath);
  const frames = plan.blocks.flatMap((block) => block.keyframes);
  const selected = frames.map((frame) => {
    if (frame.asset?.status !== "approved_keyframe" || !fs.existsSync(frame.asset.path)) {
      throw new Error(`Missing approved asset ${slug}:${frame.id}`);
    }
    if (hash(frame.asset.path) !== frame.asset.sha256) throw new Error(`Hash mismatch ${slug}:${frame.id}`);
    const prompt = `content/videos/wayuu/videos/${slug}/preproduccion-01/prepared-${frame.id}-01/prompts/${frame.id}.txt`;
    if (!fs.existsSync(prompt)) throw new Error(`Missing prompt ${prompt}`);
    return {
      id: frame.id,
      version: "01",
      camera: `${frame.angle}; ${frame.shot_scale}`,
      path: frame.asset.path,
      sha256: frame.asset.sha256,
      width: 864,
      height: 1536,
      format: "jpeg",
      reviewed: true,
      notes: [`${frame.title}: ${frame.angle}; composición revisada dentro de la secuencia completa.`],
      prompt_file: prompt,
      prompt_sha256: hash(prompt)
    };
  });
  const prod = `content/videos/wayuu/videos/${slug}/produccion-01`;
  fs.mkdirSync(prod, { recursive: true });
  const selection = {
    schema: "wayuu-keyframe-selection/v1",
    slug,
    title: plan.title,
    status: "complete_pending_user_approval",
    plan: planPath,
    script: `content/videos/wayuu/videos/${slug}/preproduccion-01/GUION-TECNICO.md`,
    research: `content/videos/wayuu/videos/${slug}/preproduccion-01/INVESTIGACION.md`,
    quality: "medium",
    generation: {
      provider: "OpenAI API",
      model: "gpt-image-2.5-sunburst",
      mode: "image_edit_with_two_prior_approved_keyframes_and_camera_breaks",
      api_request_size: "1024x1536",
      delivery_size: "864x1536",
      delivery_transform: "center_crop_864x1536",
      output_format: "jpeg",
      total_unique_generations: 16,
      selected_generations: 16,
      superseded_generations: 0,
      notes: [
        "Matriz de dieciséis familias de cámara y ruptura obligatoria de altura, eje, escala o profundidad.",
        "Los dos keyframes previos se usan sólo como continuidad causal; los descartes no alimentan la cadena.",
        "Revisión visual realizada sobre la secuencia completa; no equivale a certificación etnográfica."
      ]
    },
    selected,
    superseded: []
  };
  writeJson(`${prod}/selection.json`, selection);
  fs.writeFileSync(`${prod}/ESTADO.md`, `# ${plan.title} · estado de producción\n\nFecha: 9 de septiembre de 2026.\n\n- Paquete completo para revisión del usuario.\n- Guion: ${plan.duration.voice_words} palabras, ${plan.duration.target_seconds} segundos estimados; duración todavía no medida con voz.\n- Keyframes: 16 seleccionados, JPEG medium de 864×1536.\n- Generación: 16 imágenes únicas con gpt-image-2.5-sunburst, todas vigentes.\n- Selección y hashes: selection.json.\n- Sin voz, música, animación, montaje ni publicación de video.\n`);
}

{
  const slug = "el-incesto";
  const planPath = `content/videos/wayuu/videos/${slug}/preproduccion-02/plan.json`;
  const plan = json(planPath);
  const progress = json(`content/videos/wayuu/videos/${slug}/produccion-01/progress-02.json`);
  const candidates = new Map(progress.candidates.map((candidate) => [candidate.id, candidate]));
  for (const id of ["b5a", "b5b"]) {
    const path = `output/imagegen/wayuu/keyframes/el-incesto-corrections-03/${id}.jpeg`;
    candidates.set(id, {
      id,
      path,
      sha256: hash(path),
      width: 864,
      height: 1536,
      format: "jpeg",
      reviewed: true,
      notes: [id === "b5a"
        ? "Escena ordinaria: tres figuras adultas pequeñas y físicamente separadas sobre patio llano; sin peligro ni reconstrucción sensible."
        : "Elipsis arquitectónica: patio completamente vacío, umbral abierto y cero objetos ambiguos."
      ]
    });
  }
  const frames = plan.blocks.flatMap((block) => block.keyframes);
  const selected = frames.map((frame) => {
    const candidate = candidates.get(frame.id);
    if (!candidate || !fs.existsSync(candidate.path)) throw new Error(`Missing El incesto candidate ${frame.id}`);
    if (hash(candidate.path) !== candidate.sha256) throw new Error(`Hash mismatch El incesto:${frame.id}`);
    frame.asset = { status: "approved_keyframe", path: candidate.path, sha256: candidate.sha256 };
    frame.qa_status = "approved_in_full_sequence";
    const prompt = ["b5a", "b5b"].includes(frame.id)
      ? `content/videos/wayuu/videos/el-incesto/preproduccion-02/prompts-safe/${frame.id}.txt`
      : `content/videos/wayuu/videos/el-incesto/preproduccion-02/prepared-01/prompts/${frame.id}.txt`;
    return {
      id: frame.id,
      version: ["b5a", "b5b"].includes(frame.id) ? "safe-01" : "legacy-selected",
      camera: `${frame.angle}; ${frame.shot_scale}`,
      path: candidate.path,
      sha256: candidate.sha256,
      width: 864,
      height: 1536,
      format: "jpeg",
      reviewed: true,
      notes: candidate.notes,
      prompt_file: prompt,
      prompt_sha256: hash(prompt)
    };
  });
  plan.status = "keyframes_complete_pending_user_approval";
  writeJson(planPath, plan);
  const selection = {
    schema: "wayuu-keyframe-selection/v1",
    slug,
    title: plan.title,
    status: "complete_pending_user_approval",
    plan: planPath,
    script: `content/videos/wayuu/videos/${slug}/preproduccion-02/GUION-TECNICO.md`,
    research: `content/videos/wayuu/videos/${slug}/preproduccion-02/INVESTIGACION.md`,
    quality: "medium",
    generation: {
      provider: "OpenAI API",
      model: "gpt-image-2",
      mode: "legacy_text_to_image_completion_exception",
      api_request_size: "1024x1536",
      delivery_size: "864x1536",
      delivery_transform: "center_crop_864x1536",
      output_format: "jpeg",
      total_unique_generations: 21,
      selected_generations: 16,
      superseded_generations: 5,
      notes: [
        "Se conserva un solo modelo dentro del mito; los dos cuadros finales usan el mismo gpt-image-2 del lote histórico.",
        "Los prompts b5a y b5b contienen sólo el instante visual ordinario; el contexto sensible permanece en el guion y no se reconstruye.",
        "Los cinco intentos superados quedan preservados fuera de la selección vigente."
      ]
    },
    selected,
    superseded: []
  };
  writeJson(`content/videos/wayuu/videos/${slug}/produccion-01/selection.json`, selection);
  fs.writeFileSync(`content/videos/wayuu/videos/${slug}/produccion-01/ESTADO.md`, `# ${plan.title} · estado de producción\n\nFecha: 9 de septiembre de 2026.\n\n- Paquete completo para revisión del usuario.\n- Keyframes: 16 seleccionados, JPEG medium de 864×1536.\n- Generación histórica: 21 imágenes únicas con gpt-image-2; 16 vigentes y 5 versiones superadas preservadas.\n- b5a y b5b se cerraron con dos escenas visuales ordinarias, sin reconstrucción sensible.\n- Sin voz, música, animación, montaje ni publicación de video.\n`);
}

const campaignPath = "content/videos/wayuu/campaign.v1.json";
const campaign = json(campaignPath);
for (const myth of campaign.myths) {
  if (newMyths.includes(myth.slug)) {
    myth.video_plan = `content/videos/wayuu/videos/${myth.slug}/preproduccion-01/plan.json`;
    myth.status = "script_keyframes_complete_with_notes";
    myth.research = "live_narrative_hash_primary_sources_variants_and_visual_references_reviewed";
    myth.generated_this_stage = 16;
    myth.selection = `content/videos/wayuu/videos/${myth.slug}/produccion-01/selection.json`;
    myth.review = `output/imagegen/wayuu/keyframes/${myth.slug}-delivery-01/index.html`;
    myth.progress = `content/videos/wayuu/videos/${myth.slug}/produccion-01/ESTADO.md`;
  }
  if (myth.slug === "el-incesto") {
    myth.status = "script_keyframes_complete_with_sensitive_context_notes";
    myth.generated_this_stage = 21;
    myth.selection = "content/videos/wayuu/videos/el-incesto/produccion-01/selection.json";
    myth.review = "output/imagegen/wayuu/keyframes/el-incesto-delivery-01/index.html";
    myth.progress = "content/videos/wayuu/videos/el-incesto/produccion-01/ESTADO.md";
  }
}
campaign.status = "script_and_keyframe_production_complete_pending_user_approval";
campaign.current_stage = "all_27_wayuu_script_keyframe_packages_complete";
campaign.counts.new_generations = 674;
campaign.counts.completed_script_keyframe_packages = 27;
campaign.counts.selected_keyframes = 496;
campaign.next_myth = null;
campaign.next_required_actions = [];
campaign.pending_provider_review = [];
writeJson(campaignPath, campaign);

console.log("FINALIZED 27/27 packages, 496 selected keyframes, 674 new generations");
