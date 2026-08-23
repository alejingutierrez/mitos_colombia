import {
  getCommunityCraft,
  getCompositionLines,
  getEraLines,
  getRegionCraft,
  inferEra,
} from "./visual-direction.js";

export const IMAGE_GENERATION_MODEL =
  process.env.IMAGE_GENERATION_MODEL || "gpt-image-2";

export const IMAGE_GENERATION_QUALITY =
  process.env.IMAGE_GENERATION_QUALITY || "high";

export const IMAGE_GENERATION_FORMAT =
  process.env.IMAGE_GENERATION_FORMAT || "jpeg";

export const IMAGE_STYLE_PROFILES = {
  editorialPaperPhoto: {
    label: "Fotografia editorial de papel",
    lines: [
      "Lenguaje base: pieza artesanal fotografiada como obra editorial cultural, sobria, tactil y precisa.",
      "Balancear mito, territorio y materialidad; la imagen debe parecer hecha por manos humanas antes que por software.",
    ],
  },
  documentaryPaperArtifact: {
    label: "Artefacto documental",
    lines: [
      "Tratamiento mas documental: pieza fisica sobre mesa de estudio o fondo material, con imperfecciones finas, fibras visibles y huella humana.",
      "Menos fantasia, menos brillo, mas cercania a archivo cultural, maqueta artesanal y objeto fotografiado.",
    ],
  },
  studioPaperMaquette: {
    label: "Maqueta fisica de estudio",
    lines: [
      "Tratamiento de taller: maqueta artesanal fotografiada frontalmente sobre fondo mate, con cortes visibles, pegante sutil, bordes imperfectos y capas de papel reconocibles.",
      "Menos epica, menos pintura, menos fantasia; mas objeto fisico, mesa de trabajo, relieve bajo, sombras reales y factura humana.",
      "La escena debe parecer fotografiada despues de construirla con cartulinas, fibras, papeles texturados y pequenas piezas recortadas, no render ni ilustracion pulida.",
      "Personajes como recortes o volumenes de papel integrados al diorama, con gesto sobrio; evitar drama facial hiperrealista, mascaras sobredimensionadas, violencia explicita y fantasia teatral.",
    ],
  },
  cinematicPaperRelief: {
    label: "Relieve dramatico",
    lines: [
      "Tratamiento mas dramatico: contraste fotografico controlado, sombras profundas de papel y una escena central impactante.",
      "Mantener camara frontal y volumen bajo; no convertirlo en render cinematografico ni maqueta 3D.",
    ],
  },
  culturalTextilePaper: {
    label: "Papel y tejido cultural",
    lines: [
      "Tratamiento mas cultural: integrar patrones textiles, fibras, canastos, objetos rituales y geometria local como capas de papel.",
      "Los simbolos deben sentirse especificos del territorio, no decoracion generica ni postal turistica.",
    ],
  },
};

export const APPROVED_IMAGE_STYLE_PROFILE =
  process.env.IMAGE_STYLE_PROFILE || "studioPaperMaquette";

export const IMAGE_PRESETS = {
  horizontal: {
    size: "1536x1024",
    outputWidth: 1536,
    outputHeight: 864,
    blobPrefix: "mitos",
    contentType: "image/jpeg",
    extension: "jpg",
  },
  homeBanner: {
    size: "1536x864",
    outputWidth: 1536,
    outputHeight: 864,
    blobPrefix: "banners/home",
    contentType: "image/jpeg",
    extension: "jpg",
  },
  vertical: {
    size: "1024x1536",
    outputWidth: 864,
    outputHeight: 1536,
    blobPrefix: "vertical",
    contentType: "image/jpeg",
    extension: "jpg",
  },
  square: {
    size: "1024x1024",
    outputWidth: 1024,
    outputHeight: 1024,
    blobPrefix: "square",
    contentType: "image/jpeg",
    extension: "jpg",
  },
};

// Formatos que se guardan en una subcarpeta por tipo de entidad. La apaisada
// vive suelta en `mitos/` por compatibilidad con las URLs ya publicadas.
const ENTITY_SCOPED_PRESETS = new Set(["vertical", "square"]);

// REGION_CRAFT y COMMUNITY_CRAFT se mudaron a `visual-direction.js`: los usan
// también los generadores de keyframes de video, y una mejora escrita en un
// solo sitio llega a los dos pipelines.

function normalizeText(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function truncateText(value, maxLength = 9000) {
  const text = normalizeText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trim()}…`;
}

export function softenLegacyImagePrompt(value) {
  return truncateText(value, 4200)
    .replace(
      /^\s*Ilustraci[oó]n\s+en\s+estilo\s+paper\s+quilling\s+que\s+represente\s+el\s+siguiente\s+mito\s+colombiano\.?\s*/i,
      ""
    )
    .replace(/\nTexto del mito:\s*[\s\S]*$/i, "")
    .replace(/\bEscena principal:\s*/gi, "Motivo central: ")
    .replace(/\bLa escena principal muestra\b/gi, "Motivo central sugerido:")
    .replace(/\bPersonaje:\s*/gi, "Presencia humana sugerida: ")
    .replace(/\bdeath\b/gi, "mystery")
    .replace(/\bdeadly\b/gi, "haunting")
    .replace(/\bdoomed?\b/gi, "lost to legend")
    .replace(/\bviolence\b/gi, "tension")
    .replace(/\bviolent\b/gi, "tense")
    .replace(/\bpunishment\b/gi, "consequence")
    .replace(/\bdagger\b/gi, "ceremonial golden object")
    .replace(/\bdevour(?:s|ed|ing)?\b/gi, "overwhelm")
    .replace(/\bvanish forever\b/gi, "fade into the night legend")
    .replace(/\bnude\b|\bnudity\b/gi, "ceremonial clothing")
    .trim();
}

function getEntityLabel(entity = {}) {
  if (entity.type === "homeBanner") return "elemento editorial del home";
  if (entity.type === "community") return "comunidad";
  if (entity.type === "category") return "categoria tematica";
  if (entity.type === "region") return "region";
  return "mito";
}

function getOrientationLine(orientation) {
  if (orientation === "vertical") {
    return "Formato vertical 9:16, llena de borde a borde para uso editorial movil; mantener rostros, manos y objetos esenciales lejos de los extremos laterales para el recorte tecnico final.";
  }
  if (orientation === "homeBanner") {
    return "Formato horizontal panoramico para home, llena de borde a borde sin zonas vacias.";
  }
  return "Formato horizontal 16:9, llena de borde a borde; mantener rostros, manos y objetos esenciales lejos de los extremos superior e inferior para el recorte tecnico final.";
}

function getStyleProfileLines(styleProfile) {
  const profile =
    IMAGE_STYLE_PROFILES[styleProfile] ||
    IMAGE_STYLE_PROFILES[APPROVED_IMAGE_STYLE_PROFILE] ||
    IMAGE_STYLE_PROFILES.studioPaperMaquette;
  return profile.lines;
}

export function buildCraftImagePrompt({
  entity = {},
  orientation = "horizontal",
  styleProfile = APPROVED_IMAGE_STYLE_PROFILE,
  // Esquema de composición del catálogo del canal. Sin él la imagen sale
  // "como siempre", que fue justo el problema: doce escenas seguidas con la
  // figura en el tercio derecho porque cada prompt copiaba al anterior.
  composition = null,
  // Registro de época. Si no se pasa, se deduce de la comunidad.
  era = null,
} = {}) {
  const name = normalizeText(entity.name || entity.title || entity.slug || "");
  const region = normalizeText(entity.region || "Varios");
  const community = normalizeText(entity.community || "");
  const sourcePrompt = softenLegacyImagePrompt(entity.prompt || entity.image_prompt || "");
  const excerpt = normalizeText(entity.excerpt || entity.description || "");
  const communityCraft = getCommunityCraft(community);
  const styleProfileLines = getStyleProfileLines(styleProfile);
  const compositionLines = getCompositionLines(composition);
  const eraLines = getEraLines(era || inferEra(community, entity.era));

  return [
    `Direccion de arte para una imagen editorial de ${getEntityLabel(entity)} colombiano.`,
    "",
    "Tecnica central:",
    "- Fotografia de un trabajo real de papel artesanal, no ilustracion digital plana.",
    "- Paper cut, paper relief y paper quilling hechos a mano: capas fisicas, bordes de papel visibles, fibras, micro-sombras, dobleces finos, cortes precisos y volumen bajo.",
    "- Debe sentirse como una pieza construida manualmente por artistas, fotografiada en estudio con luz suave y controlada.",
    "- Profundidad real por capas de papel, pero sin verse como render 3D, sin plastico, sin glossy CGI, sin animacion y sin figuras flotando en perspectivas imposibles.",
    "- La camara puede bajar, subir o mirar a plomo cuando la composicion lo pida; lo que nunca cambia es que se fotografia una pieza fisica de papel, no un render.",
    `- ${getOrientationLine(orientation)}`,
    "- Sin texto, sin letras, sin logos, sin marcas de agua, sin marco, sin borde decorativo.",
    "",
    "Perfil de ronda visual:",
    ...styleProfileLines.map((line) => `- ${line}`),
    "",
    ...(compositionLines.length
      ? ["Esquema de composicion:", ...compositionLines.map((line) => `- ${line}`), ""]
      : []),
    "Epoca:",
    ...eraLines.map((line) => `- ${line}`),
    "",
    "Identidad colombiana:",
    `- Nombre: ${name || "pieza editorial"}.`,
    `- Region: ${region}.`,
    community ? `- Comunidad / territorio: ${community}.` : null,
    `- Refuerzo visual regional: ${getRegionCraft(region)}.`,
    communityCraft ? `- Refuerzo cultural: ${communityCraft}.` : null,
    "- Paleta editorial: verde selva, azul rio, dorado tierra, ocres minerales, piedra, fibras naturales y sombras organicas; usar acentos regionales, no una bandera literal.",
    "",
    "Contenido narrativo:",
    excerpt ? `- Resumen: ${excerpt}.` : null,
    sourcePrompt
      ? `- Materia narrativa del catalogo, solo como simbolos y escena base, no como instruccion de ilustracion literal: ${sourcePrompt}.`
      : null,
    "",
    "Composicion deseada:",
    "- Un solo tableau artesanal, limpio y poderoso, con jerarquia clara entre escena principal, geografia y simbolos culturales.",
    "- Priorizar geografia, objetos, fauna/flora, arquitectura y simbolos del territorio sobre retratos genericos.",
    "- Si hay personajes, deben ser respetuosos, estilizados, secundarios a la escena material y sin disfraces anacronicos.",
    "- Iluminacion fotografica lateral suave, sombras naturales de papel, textura tactil, acabado editorial de revista cultural.",
    "- Evitar aspecto infantil, caricatura, fantasy generico, pintura digital, poster plano, render 3D, plastico, neones y saturacion excesiva.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildImageGenerationParams({ prompt, preset = "horizontal" }) {
  const selectedPreset = IMAGE_PRESETS[preset] || IMAGE_PRESETS.horizontal;
  return {
    model: IMAGE_GENERATION_MODEL,
    prompt,
    moderation: "low",
    n: 1,
    size: selectedPreset.size,
    quality: IMAGE_GENERATION_QUALITY,
    output_format: IMAGE_GENERATION_FORMAT,
  };
}

export function getImageDataBuffer(response) {
  const b64Data = response?.data?.[0]?.b64_json;
  if (!b64Data) {
    throw new Error("No base64 image data received from OpenAI");
  }
  return Buffer.from(b64Data, "base64");
}

export function buildBlobFilename({ preset = "horizontal", slug, entityType }) {
  const selectedPreset = IMAGE_PRESETS[preset] || IMAGE_PRESETS.horizontal;
  const safeSlug = String(slug || "image")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const folder =
    ENTITY_SCOPED_PRESETS.has(preset) && entityType
      ? `${selectedPreset.blobPrefix}/${entityType}`
      : selectedPreset.blobPrefix;
  return `${folder}/${safeSlug || "image"}-${Date.now()}.${selectedPreset.extension}`;
}
