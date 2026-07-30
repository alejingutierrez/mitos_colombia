export const IMAGE_GENERATION_MODEL =
  process.env.IMAGE_GENERATION_MODEL || "gpt-image-2";

export const IMAGE_GENERATION_QUALITY =
  process.env.IMAGE_GENERATION_QUALITY || "high";

export const IMAGE_GENERATION_FORMAT =
  process.env.IMAGE_GENERATION_FORMAT || "jpeg";

export const IMAGE_STYLE_PROFILES = {
  fullPaperCutIllustration: {
    label: "Ilustración full paper cut",
    lines: [
      "Ilustración editorial digital 2D de borde a borde: siluetas planas recortadas, capas gráficas limpias y filigrana paper quilling dibujada como formas vectoriales.",
      "Usar superficies de color mate uniforme, contornos nítidos y separación gráfica mínima entre planos; no simular fibras, dobleces, volumen físico, relieve material ni sombras proyectadas reales.",
      "Debe leerse inmediatamente como ilustración digital plana, nunca como papel real fotografiado, maqueta física, diorama, collage artesanal, CGI o render 3D.",
      "Acabado adulto, preciso y culturalmente situado; evitar caricatura infantil, fantasía genérica y ornamentos culturales inventados.",
    ],
  },
  editorialPaperPhoto: {
    label: "Compatibilidad: ilustración paper cut editorial",
    lines: [
      "Ilustración editorial full paper cut, sobria, táctil y precisa, con profundidad gráfica por capas.",
      "Balancear mito, territorio y materialidad sin convertir la escena en una fotografía de una pieza física.",
    ],
  },
  documentaryPaperArtifact: {
    label: "Ilustración paper cut documental",
    lines: [
      "Tratamiento ilustrado más documental: composición paper cut serena, detalles territoriales verificables y huella gráfica artesanal.",
      "Menos fantasía y brillo; más cercanía a archivo cultural, sin mesa de estudio, artefacto físico ni objeto fotografiado.",
    ],
  },
  studioPaperMaquette: {
    label: "Compatibilidad: ilustración full paper cut",
    lines: [
      "Tratamiento full paper cut ilustrado: recortes, bordes, capas y tiras de quilling claramente visibles dentro de la imagen, no fuera de ella.",
      "Menos épica y fantasía genérica; más composición gráfica, territorio y textura de papel ilustrada.",
      "La escena debe leerse como ilustración acabada, nunca como maqueta física, diorama, mesa de trabajo, fotografía ni render plástico.",
      "Personajes estilizados como formas recortadas dentro de la composición; evitar drama facial hiperrealista, máscaras sobredimensionadas, violencia explícita y fantasía teatral.",
    ],
  },
  cinematicPaperRelief: {
    label: "Ilustración paper cut dramática",
    lines: [
      "Tratamiento ilustrado más dramático: contraste cromático controlado, sombras entre capas de papel y una escena central impactante.",
      "Mantener lectura gráfica frontal; no convertirlo en render cinematográfico, fotografía ni maqueta 3D.",
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
  process.env.IMAGE_STYLE_PROFILE || "fullPaperCutIllustration";

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
};

const REGION_CRAFT = {
  Andina:
    "paramo altoandino, laguna sagrada, frailejones, piedra gris humeda, niebla fria, oro mate y geometria muisca sobria cuando aplique",
  Catatumbo:
    "selva humeda tropical del Catatumbo, piedemonte de la Serrania del Perija, rios caudalosos, bejucos, dosel denso y bohios; sin paramo, frailejones ni geometria muisca",
  "Territorio U'wa":
    "Sierra Nevada del Cocuy, lagunas altas, bosque nublado, piedemonte, rios, caminos entre pisos termicos y casas ceremoniales; sin geometria muisca ni postal generica de paramo",
  "Territorio Anserma":
    "Guacuma y montanas de Quinchia: cerros Karamba o Batero y Opirama, rio Mapura, rocas con huellas, cascadas, maiz, chontaduro y niebla; sin paramo, frailejones, piramides ni geometria muisca",
  "Territorio Cuy-Cuy/Arma":
    "montanas entre Sonsón, Aguadas y Pacora, cañon del rio Cauca, casas redondas de paja, caminos de piedra, cascadas, flores pequenas, vasijas de barro y niebla; sin paramo, frailejones, piramides ni geometria muisca",
  "Cauca Medio Quimbaya":
    "valles y laderas del Cauca medio, guaduales, casas de hojas de cana, fuentes salobres, rios, caminos hacia los nevados, tambores y plazas; sin piramides, palacios, estetica azteca, maya o muisca",
  "Territorio Umbra":
    "Guacuma y Quinchia: cerro Batero, montanas con niebla, bosque, quebradas, rio Cauca, caminos discretos, sal y oro como oficios; sin paramo, frailejones, piramides ni geometria muisca",
  Caribe:
    "luz de luna o sol costero, caminos de arena, cardones, salinas, mar lejano, arquitectura costera y patrones textiles caribenos o Wayuu cuando aplique",
  Amazonas:
    "rio profundo, chagra, maloca, hojas grandes, fibras de cumare, canoa, semillas, canastos y niebla verde de selva humeda",
  Amazonia:
    "rio profundo, chagra, maloca, hojas grandes, fibras de cumare, canoa, semillas, canastos y niebla verde de selva humeda",
  "Orinoquia":
    "sabana abierta, rios espejo, cerros antiguos, palma de moriche, flor de Inirida, garzas y cielo amplio",
  "Orinoquía":
    "sabana abierta, rios espejo, cerros antiguos, palma de moriche, flor de Inirida, garzas y cielo amplio",
  Pacifico:
    "montana humeda, rio vivo, manglar o selva lluviosa segun el relato, neblina, vegetacion densa, madera, fibras y agua oscura",
  "Pacífico":
    "montana humeda, rio vivo, manglar o selva lluviosa segun el relato, neblina, vegetacion densa, madera, fibras y agua oscura",
  Varios:
    "geografia colombiana sintetizada con verde selva, azul rio, dorado tierra, piedra, agua y vegetacion nativa",
};

const COMMUNITY_CRAFT = {
  Muiscas:
    "lenguaje visual muisca: agua ceremonial, oro mate, piedra, tunjos sugeridos y textiles geometricos discretos",
  Wayuu:
    "lenguaje visual Wayuu: tramas de mochila y manta reinterpretadas como capas de papel, arena, indigo, cardon y oro nocturno",
  Yukuna:
    "lenguaje visual amazonico Yukuna: maloca, fibras vegetales, canastos, semillas, rutas de rio y signos de viaje sin exotizar",
  Nasa:
    "lenguaje visual Nasa: montana, agua, carrizo, bastones, tejido geometrico sobrio y territorio vivo",
  Kogui:
    "lenguaje visual serrano Kogui: Sierra Nevada, terrazas verdes, caminos de piedra, mochilas y equilibrio cosmico sobrio",
  Sikuani:
    "lenguaje visual Sikuani: sabana, vivienda tradicional, maraca, fauna de llanura y transformacion ritual sugerida",
  Barí:
    "lenguaje visual Bari: Ishtana y selva del Catatumbo, bohio comunal, rios, bejucos, canastos y fauna local; sin tocados panindigenas, coronas, halos, cosmogramas ni ornamentos inventados",
  "U'wa":
    "lenguaje visual Uwa: territorio vertical de la Sierra Nevada del Cocuy, lagunas, rios, bosque y mochilas de fique; animales, caracola, tambor o corona ceremonial solo cuando la escena los documente, sin tocados panindigenas ni ornamentos inventados",
  Ansermas:
    "lenguaje visual historicamente cauto para Guacuma: cerros, rio Mapura, cultivos, cascadas y huellas en roca; sin inventar vestuario o regalia, sin tocados panindigenas ni simbolos aztecas, mayas o muiscas",
  Cuycuyes:
    "lenguaje visual historicamente cauto para Cuy-Cuy o Arma: casas redondas, esteras, vasijas, flores, resinas, caminos y paisaje del norte de Caldas; sin demonios, regalia inventada, tocados panindigenas ni simbolos aztecas, mayas o muiscas",
  Pirsa:
    "lenguaje visual historicamente cauto para Pirsa o Pirza: montanas del occidente de Caldas, caminos hacia Anserma, casas de paja, aves auras y una iglesia humilde; sin demonios literales, Diablo del Carnaval, regalia inventada, tocados panindigenas ni simbolos aztecas, mayas o muiscas",
  Quimbaya:
    "lenguaje visual historicamente cauto para la provincia Quimbaya del siglo XVI y el Cauca medio: guaduales, casas de hojas de cana, caminos, rios, fuentes de sal, plazas, tambores y nevados cuando la escena los documente; sin reducir la identidad al oro, sin regalia inventada, tocados panindigenas, palacios ni simbolos aztecas, mayas o muiscas",
  Umbra:
    "lenguaje visual historicamente cauto para Guacuma y Quinchia: cerro Batero, niebla, casas sobrias, caminos, rio Cauca, sal, pigmento bee y lengua protegida solo cuando la escena los documente; sin regalia inventada, tocados panindigenas, palacios ni simbolos aztecas, mayas o muiscas",
  Tumaco:
    "lenguaje visual del Pacifico narinense: manglar, madera, marea, canoas, lluvia y brillo marino contenido",
};

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
    .replace(
      /\bmaqueta\s+f[ií]sica\s+de\s+papel\s+fotografiada\s+de\s+frente\b/gi,
      "ilustración full paper cut en composición frontal",
    )
    .replace(
      /\b(?:fotograf[ií]a|foto)\s+(?:editorial\s+)?(?:frontal\s+)?(?:de\s+)?(?:una\s+)?(?:maqueta|pieza|trabajo|objeto)[^.]*\.?/gi,
      "Ilustración editorial full paper cut. ",
    )
    .replace(/\bmaqueta\s+(?:artesanal|f[ií]sica)\b/gi, "ilustración paper cut")
    .replace(/\bpieza\s+f[ií]sica\b/gi, "escena ilustrada")
    .replace(/\bpapel\s+f[ií]sico\b/gi, "capas ilustradas de papel")
    .replace(/\b(?:fibras|hilos)\s+reales\b/gi, "texturas ilustradas de fibras")
    .replace(/\bmicro-?sombras\s+reales\b/gi, "sombras suaves entre capas")
    .replace(/\bluz\s+de\s+estudio\b/gi, "luz integrada en la ilustración")
    .replace(/\bfotografiad[oa]\s+(?:en\s+estudio|de\s+frente)\b/gi, "")
    .replace(/\bno\s+una?\s+ilustraci[oó]n\s+digital(?:\s+plana)?\b/gi, "")
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

function getRegionCraft(region) {
  return REGION_CRAFT[region] || REGION_CRAFT.Varios;
}

function getCommunityCraft(community) {
  return COMMUNITY_CRAFT[community] || "";
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
    return "Formato vertical 9:16, composicion frontal y estable, llena de borde a borde para uso editorial movil; mantener rostros, manos y objetos esenciales lejos de los extremos laterales para el recorte tecnico final.";
  }
  if (orientation === "homeBanner") {
    return "Formato horizontal panoramico para home, composicion frontal y estable, llena de borde a borde sin zonas vacias.";
  }
  return "Formato horizontal 16:9, composicion frontal y estable, llena de borde a borde; mantener rostros, manos y objetos esenciales lejos de los extremos superior e inferior para el recorte tecnico final.";
}

function getStyleProfileLines(styleProfile) {
  const profile =
    IMAGE_STYLE_PROFILES[styleProfile] ||
    IMAGE_STYLE_PROFILES[APPROVED_IMAGE_STYLE_PROFILE] ||
    IMAGE_STYLE_PROFILES.fullPaperCutIllustration;
  return profile.lines;
}

export function buildCraftImagePrompt({
  entity = {},
  orientation = "horizontal",
  styleProfile = APPROVED_IMAGE_STYLE_PROFILE,
}) {
  const name = normalizeText(entity.name || entity.title || entity.slug || "");
  const region = normalizeText(entity.region || "Varios");
  const community = normalizeText(entity.community || "");
  const sourcePrompt = softenLegacyImagePrompt(entity.prompt || entity.image_prompt || "");
  const excerpt = normalizeText(entity.excerpt || entity.description || "");
  const communityCraft = getCommunityCraft(community);
  const styleProfileLines = getStyleProfileLines(styleProfile);

  return [
    `Direccion de arte para una imagen editorial de ${getEntityLabel(entity)} colombiano.`,
    "",
    "Tecnica central:",
    "- Ilustracion digital completa 2D en estilo full paper cut y paper quilling grafico, no fotografia ni reproduccion de un objeto fisico.",
    "- Construir la escena con formas planas recortadas, color mate uniforme, bordes vectoriales nitidos y espirales de quilling dibujadas; la tecnica debe ser visual, no material.",
    "- Prohibido simular fibras de papel, dobleces, grosor, relieve fisico, sombras proyectadas reales, pegamento, textura fotografica o iluminacion de estudio.",
    "- La escena debe sentirse como una ilustracion editorial plana de borde a borde, nunca como maqueta, diorama, collage artesanal, tableau, objeto fotografiado, CGI o render 3D.",
    "- Profundidad solo por superposicion grafica y cambios de escala, con separaciones suaves y uniformes entre planos; sin perspectiva de camara sobre una pieza fisica.",
    `- ${getOrientationLine(orientation)}`,
    "- Sin texto, sin letras, sin logos, sin marcas de agua, sin marco, sin borde decorativo.",
    "",
    "Perfil de ronda visual:",
    ...styleProfileLines.map((line) => `- ${line}`),
    "",
    "Identidad colombiana:",
    `- Nombre: ${name || "pieza editorial"}.`,
    `- Region: ${region}.`,
    community ? `- Comunidad / territorio: ${community}.` : null,
    `- Refuerzo visual regional: ${getRegionCraft(region)}.`,
    communityCraft ? `- Refuerzo cultural: ${communityCraft}.` : null,
    "- Paleta editorial: verde selva, azul rio, dorado tierra y ocres minerales en tintas planas mate; usar acentos regionales, no una bandera literal.",
    "",
    "Contenido narrativo:",
    excerpt ? `- Resumen: ${excerpt}.` : null,
    sourcePrompt
      ? `- Materia narrativa del catalogo, solo como simbolos y escena base, no como instruccion de ilustracion literal: ${sourcePrompt}.`
      : null,
    "",
    "Composicion deseada:",
    "- Una sola composicion ilustrada, limpia y poderosa, con jerarquia clara entre escena principal, geografia y simbolos culturales.",
    "- Priorizar geografia, objetos, fauna/flora, arquitectura y simbolos del territorio sobre retratos genericos.",
    "- Si hay personajes, deben ser respetuosos, estilizados, secundarios a la escena material y sin disfraces anacronicos.",
    "- Acabado gráfico plano de revista cultural, con luz sugerida por bloques de color y sin volumen fotográfico.",
    "- Evitar aspecto infantil, caricatura, fantasy generico, fotorrealismo, fotografia de maqueta, papel fisico, textura tactil, render 3D, plastico, neones y saturacion excesiva.",
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
    preset === "vertical" && entityType
      ? `${selectedPreset.blobPrefix}/${entityType}`
      : selectedPreset.blobPrefix;
  return `${folder}/${safeSlug || "image"}-${Date.now()}.${selectedPreset.extension}`;
}
