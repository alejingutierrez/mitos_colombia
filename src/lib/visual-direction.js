/**
 * Dirección visual del archivo: cómo se compone, en qué época ocurre y con qué
 * lenguaje se viste cada territorio.
 *
 * Vive aparte de `image-generation.js` porque lo usan dos pipelines: el que
 * genera las imágenes del sitio y el que genera los keyframes de video. Una
 * mejora escrita aquí llega a los dos.
 */

/* ------------------------------------------------------------------ *
 * 1 · Esquemas de composición
 * ------------------------------------------------------------------ *
 * Auditamos los primeros doce trípticos y las tres veces que el prompt fijó
 * una posición, dijo "tercio derecho". Cero izquierda, cero centro. No fue
 * gusto: fue que cada prompt nuevo se copió del anterior. El mismo reuso que
 * mantiene la cara de un personaje idéntica mantiene idéntico el encuadre.
 *
 * Contra eso no sirve pedir variedad, sirve nombrarla. Cada escena declara su
 * esquema, el esquema queda en el manifiesto, y `contar-composiciones.mjs`
 * puede decir en qué se está atascando el canal.
 *
 * `simetria` es deliberadamente la única que centra: hay que elegirla, no
 * caer en ella.
 */
export const COMPOSITION_SCHEMAS = {
  umbral: {
    label: "Umbral",
    hint: "alguien entra al mundo del cuadro",
    lines: [
      "COMPOSICIÓN «umbral»: la figura aparece en el BORDE del encuadre, entrando, con parte del cuerpo aún fuera de cuadro.",
      "El resto del ancho queda por delante de ella: el mundo al que llega, todavía vacío de su presencia.",
    ],
  },
  peso_contrario: {
    label: "Peso contrario",
    hint: "la figura a un lado, la masa del mundo al otro",
    lines: [
      "COMPOSICIÓN «peso contrario»: la figura ocupa el TERCIO IZQUIERDO y toda la masa visual del mundo (montaña, agua, poblado, multitud) pesa en el lado opuesto.",
      "El cuadro se sostiene por tensión entre los dos lados, no por centrar.",
    ],
  },
  simetria: {
    label: "Simetría de altar",
    hint: "centrada y frontal — se gana, no se usa por defecto",
    lines: [
      "COMPOSICIÓN «simetría de altar»: figura CENTRADA y frontal, el encuadre casi simétrico a lado y lado, el horizonte recto.",
      "Es una composición solemne y quieta: se usa sólo cuando la escena es una aparición, un juicio o una entrega, nunca por comodidad.",
    ],
  },
  figura_pequena: {
    label: "Figura pequeña",
    hint: "el mundo enorme, la persona diminuta",
    lines: [
      "COMPOSICIÓN «figura pequeña»: el paisaje ocupa casi todo el encuadre y la figura es PEQUEÑA, lejana y descentrada; se la encuentra al mirar, no salta a la vista.",
      "La escala del territorio es el asunto de la imagen; la persona da la medida.",
    ],
  },
  paisaje_abierto: {
    label: "Paisaje abierto",
    hint: "el territorio basta; ninguna figura compite con él",
    lines: [
      "COMPOSICIÓN «paisaje abierto»: el territorio ocupa todo el encuadre y no hay figuras humanas, animales ni utilería narrativa añadida.",
      "La forma del agua, sendero, roca o relieve conduce la mirada; la escala y la materia del lugar son el asunto de la imagen.",
    ],
  },
  diagonal: {
    label: "Diagonal",
    hint: "la acción cruza el encuadre subiendo o bajando",
    lines: [
      "COMPOSICIÓN «diagonal»: la acción principal cruza el encuadre en diagonal —una cuesta, un río, una vara en el aire, una fila de gente— de una esquina hacia la opuesta.",
      "Nada queda paralelo a los bordes: ni el horizonte ni la línea de la acción.",
    ],
  },
  primer_plano: {
    label: "Primer plano dominante",
    hint: "un objeto manda, la figura queda al fondo",
    lines: [
      "COMPOSICIÓN «primer plano dominante»: un OBJETO grande y nítido ocupa el primer plano —manos, semillas, una vasija, una herramienta— y la figura humana queda pequeña y desenfocada al fondo.",
      "El objeto es el sujeto; la persona, el contexto.",
    ],
  },
  contrapicado: {
    label: "Contrapicado",
    hint: "desde abajo, la figura contra el cielo",
    lines: [
      "COMPOSICIÓN «contrapicado»: cámara BAJA, mirando hacia arriba; la figura o la roca se recortan contra el cielo y el horizonte cae en el tercio inferior.",
      "Da altura y peso a lo que se mira desde abajo.",
    ],
  },
  cenital: {
    label: "Cenital",
    hint: "desde arriba, el objeto sobre la tierra",
    lines: [
      "COMPOSICIÓN «cenital»: cámara ALTA mirando a plomo hacia el suelo, sin cielo en el cuadro; el motivo se lee como una marca sobre la tierra o el agua.",
      "Aplana la profundidad a propósito y convierte la escena en signo.",
    ],
  },
  enfrentados: {
    label: "Enfrentados",
    hint: "dos figuras fuera del eje, el aire entre ellas",
    lines: [
      "COMPOSICIÓN «enfrentados»: DOS figuras a un lado y otro, ninguna centrada, mirándose; el vacío entre ellas es el centro real del cuadro.",
      "Lo que ocurre es el intercambio, no ninguno de los dos.",
    ],
  },
};

export const COMPOSITION_KEYS = Object.keys(COMPOSITION_SCHEMAS);

export function getCompositionLines(schema) {
  const found = COMPOSITION_SCHEMAS[schema];
  return found ? found.lines : [];
}

/* ------------------------------------------------------------------ *
 * 2 · Registro de época
 * ------------------------------------------------------------------ *
 * El corpus no es todo prehispánico: `Mestizo` (184 mitos) y `Mixto` (69) son
 * 42% del archivo y ocurren en la Colombia rural colonial y republicana —las
 * ánimas, los duendes, los caminos reales—. Vestirlos con lenguaje territorial
 * prehispánico es un error de época tan grave como ponerle una cruz a Bochica.
 */
export const ERA_REGISTERS = {
  // El corpus chamí se narra en tiempo mítico pero fue transcrito en 1945, y sus
  // propios relatos traen hacha, machete, serrucho y hasta pesos y centavos.
  // Forzarle el registro "prehispanico" sería prohibir el hacha con la que
  // Karagabí abre la palma de la que sale la gente.
  mitico_chami: {
    label: "Tiempo mítico chamí, narrado en 1945",
    lines: [
      "ÉPOCA: tiempo mítico chamí, cuando los animales eran gente y Karagabí hacía a las personas.",
      "Materiales: madera, guadua, palma, barro, fibra, bejuco, algodón y majagua; hacha y machete SÍ existen en este corpus, igual que la red, la bodoquera, la chicha y el tambor.",
      "Vestido: telas sencillas y falda de envolver, majagua blanca y chaquira blanca en la cabeza y en las manos SOLO cuando el relato lo nombre. NO okama de pechera ni chaquira contemporánea, NO raso ni encaje, NO tocado de plumas, orejeras de disco, nariguera ni corona.",
      "NO puede aparecer: páramo, frailejones, laguna de altura, geometría muisca, maloca amazónica, penacho, ni selva esmeralda con niebla como atmósfera general.",
    ],
  },
  prehispanico: {
    label: "Prehispánico",
    lines: [
      "ÉPOCA: mundo prehispánico, antes de cualquier contacto europeo.",
      "Materiales de la época: algodón hilado a mano, fique, barro, madera, piedra, caña, paja, oro martillado sólo donde el relato lo pide.",
      "NO puede aparecer: hierro ni herramientas de metal, rueda, cruz, iglesia, teja de barro, caballo, vaca, gallina, trigo, caña de azúcar, vela de sebo, sombrero de ala, ruana, botón, tijera, vidrio.",
    ],
  },
  colonial_rural: {
    label: "Colonial y republicano rural",
    lines: [
      "ÉPOCA: Colombia rural colonial o republicana, entre el siglo XVI y comienzos del XX.",
      "Materiales de la época: bahareque encalado, teja de barro, madera labrada, ruana de lana, sombrero de ala, alpargata, vela o quinqué, camino real empedrado, corral de palos, cerca de piedra.",
      "Puede haber capilla de pueblo, campanario, mula, caballo, perro, gallina — el mundo campesino mestizo, no un poblado indígena prehispánico.",
      "NO convertirlo en escena precolombina: nada de malocas, tunjos, penachos ni orfebrería ceremonial.",
    ],
  },
  indeterminado: {
    label: "Sin época marcada",
    lines: [
      "ÉPOCA: el relato no fija un tiempo. Mantener el mundo material sobrio y sin objetos que delaten un siglo concreto.",
      "Ante la duda, quitar el objeto en vez de inventarlo.",
    ],
  },
  contemporaneo_wayuu: {
    label: "Wayúu contemporáneo documentado",
    lines: [
      "ÉPOCA: vida Wayúu contemporánea documentada; no reconstrucción prehispánica ni escena campesina mestiza genérica.",
      "Usar únicamente materiales y relaciones espaciales autorizados por la ficha: yotojoro, madera liviana, paja, barro, enramada, corral y senderos de una piichipala.",
      "No añadir personas, vestuario, vehículos, antenas, plástico, lámina, concreto, símbolos, kanas o marcas claniles si la vista no los documenta expresamente.",
    ],
  },
  mitico_wayuu: {
    label: "Tiempo mítico Wayúu no fechado",
    lines: [
      "ÉPOCA: tiempo mítico Wayúu no fechado; no convertirlo automáticamente en reconstrucción prehispánica, escena colonial ni vida contemporánea.",
      "Usar sólo los seres, objetos, materiales y relaciones nombrados por el expediente y por esta vista; la falta de fecha no autoriza llenar el mundo con utilería histórica genérica.",
      "Caballo, mula, ganado, panela, metal, iglesia, vehículos, plástico o infraestructura moderna sólo pueden aparecer si el modelo los pide y usa un registro histórico o contemporáneo explícito.",
    ],
  },
  historico_wayuu: {
    label: "Wayúu histórico poscontacto",
    lines: [
      "ÉPOCA: mundo Wayúu histórico posterior al contacto, sin fijar un año que la fuente no entrega.",
      "Pueden aparecer caballo, mula, ganado, panela u otros elementos introducidos únicamente cuando el relato o la vista los nombran; conservar territorio, arquitectura y relaciones Wayúu, no una escena campesina mestiza genérica.",
      "No añadir por asociación iglesia, cruz, uniforme, armas de fuego, hacienda, carreta, pueblo colonial ni objetos modernos. Cada elemento fechado debe estar exigido por el expediente.",
    ],
  },
};

// Comunidades cuyo relato ocurre en el mundo campesino mestizo, no en el
// prehispánico. Todo lo demás cae en `prehispanico` salvo que el mito diga otra cosa.
const COLONIAL_COMMUNITIES = new Set([
  "mestizo",
  "mixto",
  "africano",
  "afrocolombianos",
]);

export function inferEra(community, override) {
  if (override && ERA_REGISTERS[override]) return override;
  const key = String(community || "")
    .trim()
    .toLowerCase();
  if (!key) return "indeterminado";
  return COLONIAL_COMMUNITIES.has(key) ? "colonial_rural" : "prehispanico";
}

export function getEraLines(era) {
  const found = ERA_REGISTERS[era] || ERA_REGISTERS.indeterminado;
  return found.lines;
}

/* ------------------------------------------------------------------ *
 * 3 · Territorio
 * ------------------------------------------------------------------ */

export const REGION_CRAFT = {
  // Los chamí figuran como "Andina" en la base, pero la línea andina de arriba es
  // de páramo muisca y les inyectaría frailejones y geometría ajena. Esta entrada
  // existe para la vertiente donde ocurre su corpus.
  "Cordillera Occidental":
    "vertiente de montaña sobre las fuentes del Calima: río de piedras, guadual, monte que se abre en roza, laderas y derrumbes, luz de día abierto; NUNCA páramo, frailejones, niebla fría ni geometría muisca",
  Andina:
    "paramo altoandino, laguna sagrada, frailejones, piedra gris humeda, niebla fria, oro mate y geometria muisca sobria cuando aplique",
  Caribe:
    "luz de luna o sol costero, caminos de arena, cardones, salinas y mar lejano; materiales, arquitectura y textiles sólo cuando estén documentados para la comunidad concreta, nunca por asociación regional",
  Amazonas:
    "rio profundo, chagra, maloca, hojas grandes, fibras de cumare, canoa, semillas, canastos y niebla verde de selva humeda",
  Amazonia:
    "rio profundo, chagra, maloca, hojas grandes, fibras de cumare, canoa, semillas, canastos y niebla verde de selva humeda",
  Orinoquia:
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

/**
 * Lenguaje visual por comunidad.
 *
 * Regla de honestidad: aquí sólo entra una comunidad cuando hay con qué
 * describirla sin inventar. Una entrada fabricada es peor que ninguna, porque
 * le pone a un pueblo real una iconografía que no es suya y además la vuelve
 * canon del archivo. Sin entrada, el prompt cae al lenguaje de la región y le
 * prohíbe explícitamente inventar símbolos — sobrio antes que falso.
 */
export const COMMUNITY_CRAFT = {
  "Wayúu":
    "lenguaje visual Wayúu documentado: planicie, costa y serranías de Alta Guajira; transición árido-húmeda de la Macuira; piichipala dispersa con vivienda baja, enramada y corral; yotojoro, madera, paja y barro. Cuando aparezca el cardón guajiro, usar varios tallos columnares acanalados nacidos en grupo desde la base; nunca tronco único con brazos simétricos levantados tipo saguaro. Textiles, kanas, marcas claniles, seres y gestos rituales sólo si el expediente del modelo los autoriza; nunca como decoración genérica",
  Muiscas:
    "lenguaje visual muisca: agua ceremonial, oro mate, piedra, tunjos sugeridos y textiles geometricos discretos",
  Yukuna:
    "lenguaje visual amazonico Yukuna: maloca, fibras vegetales, canastos, semillas, rutas de rio y signos de viaje sin exotizar",
  Nasa: "lenguaje visual Nasa: montana, agua, carrizo, bastones, tejido geometrico sobrio y territorio vivo",
  "Nasa - Paeces":
    "lenguaje visual Nasa: montana, agua, carrizo, bastones de mando, tejido geometrico sobrio y territorio vivo",
  "Kogui (Kággaba)":
    "lenguaje visual serrano Kogui: Sierra Nevada, terrazas verdes, caminos de piedra, mochilas de fique y equilibrio cosmico sobrio",
  Kogui:
    "lenguaje visual serrano Kogui: Sierra Nevada, terrazas verdes, caminos de piedra, mochilas y equilibrio cosmico sobrio",
  "Sikuani (Guahíbo)":
    "lenguaje visual Sikuani: sabana de llanura, vivienda tradicional, maraca, fauna de llano y transformacion ritual sugerida",
  Sikuani:
    "lenguaje visual Sikuani: sabana, vivienda tradicional, maraca, fauna de llanura y transformacion ritual sugerida",
  Tumaco:
    "lenguaje visual del Pacifico narinense: manglar, madera, marea, canoas, lluvia y brillo marino contenido",
  // Corregida el 2026-09-17 contra la investigación (docs/chami-investigacion-2026-09-17):
  // el corpus de los catorce relatos es de Corozal, Río Frío (Valle), no del eje
  // cafetero; el okama de chaquira es adorno CONTEMPORÁNEO y meterlo en un relato
  // mítico es anacronismo; y la pinta de jagua identifica al grupo, de modo que
  // «trazos geométricos» genéricos inventan una filiación.
  "Chamí":
    "lenguaje visual Embera Chami: vertiente oriental de la Cordillera Occidental sobre las fuentes del Calima, rio de piedras como eje del mundo, tambo de madera sobre pilotes con escalera de tronco con muescas, guadua, roza de maiz, chicha y tambor; la pinta de jagua identifica al grupo y NO se inventa un diseno; nada de okama ni chaquira de pechera contemporanea, ni tocado de plumas, orejeras de disco o nariguera",
  "Huitoto / Murui-Muina":
    "lenguaje visual Murui-Muina: maloca de techo conico, mambeadero, chagra abierta en la selva, canastos, manguare de dos troncos y penumbra verde de interior",
  "Katíos":
    "lenguaje visual Embera Katio: rio ancho del Pacifico y Uraba, canoa cavada, tambo de palma sobre pilotes, cesteria y selva lluviosa densa",
  "Andoque (Gente del Hacha)":
    "lenguaje visual Andoque: interior de maloca amazonica, hacha de piedra, chagra, fibras y la relacion con el arbol como eje del relato",
  "U’wa":
    "lenguaje visual U'wa: paramo y nieve de la Sierra Nevada del Cocuy, roca oscura, frailejones, mantas tejidas y cantos de territorio",
  Misak:
    "lenguaje visual Misak: altiplano de Cauca, ruana azul y sombrero de hongo, laguna de paramo, telar de chumbe y neblina",
  "Zenú":
    "lenguaje visual Zenu: sabana anegada del Caribe, canales de riego prehispanicos, cana flecha trenzada en espiral y filigrana de oro fina",
  "Ticuna":
    "lenguaje visual Ticuna: rio Amazonas, corteza de yanchama batida, mascaras rituales, ceiba enorme y ribera de barro",
  Wounaan:
    "lenguaje visual Wounaan: rio San Juan, cesteria de werregue en espiral, canoa, palma y agua oscura del Pacifico",
  "Barí":
    "lenguaje visual Bari: selva del Catatumbo, bohio comunal alargado, arco y flecha, rio de montana y dosel cerrado",
  Quillacingas:
    "lenguaje visual quillacinga: altiplano narinense, laguna de montana, barniz de Pasto en madera, chumbe tejido y volcan al fondo",
};

/** Lenguaje visual del mundo campesino mestizo — no es una comunidad indígena. */
const MESTIZO_CRAFT =
  "mundo campesino mestizo: bahareque encalado y teja de barro, ruana de lana, sombrero de ala, camino real entre cercas de piedra, vela o quinqué, capilla de pueblo al fondo, monte cerrado en la noche";

export function getRegionCraft(region) {
  return REGION_CRAFT[region] || REGION_CRAFT.Varios;
}

/**
 * Devuelve el refuerzo de comunidad y, cuando no hay entrada, la instrucción de
 * NO inventar. Es preferible una imagen sobria a una que le atribuya a un
 * pueblo una iconografía que nadie verificó.
 */
export function getCommunityCraft(community) {
  const key = String(community || "").trim();
  if (!key) return "";
  if (COMMUNITY_CRAFT[key]) return COMMUNITY_CRAFT[key];
  if (COLONIAL_COMMUNITIES.has(key.toLowerCase())) return MESTIZO_CRAFT;
  return (
    "sin lenguaje visual propio documentado para esta comunidad: apoyarse SOLO en la geografia de la region " +
    "y en objetos de uso cotidiano verificables; NO inventar simbolos, patrones textiles, mascaras, tocados " +
    "ni ornamentos atribuidos a este pueblo"
  );
}

export function hasCommunityCraft(community) {
  const key = String(community || "").trim();
  return Boolean(
    COMMUNITY_CRAFT[key] || COLONIAL_COMMUNITIES.has(key.toLowerCase())
  );
}
