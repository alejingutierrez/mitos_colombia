// Paid OpenAI originals: source prompts and checksums in content/instagram/iconography/abstract-v4.
export const ABSTRACT_MOTIFS = {
  "abstract-nucleo": {
    "label": "Núcleo",
    "group": "origen"
  },
  "abstract-apertura": {
    "label": "Apertura",
    "group": "origen"
  },
  "abstract-emergencia": {
    "label": "Emergencia",
    "group": "origen"
  },
  "abstract-germen": {
    "label": "Germen",
    "group": "origen"
  },
  "abstract-primer-pliegue": {
    "label": "Primer pliegue",
    "group": "origen"
  },
  "abstract-meandro": {
    "label": "Meandro",
    "group": "flujo"
  },
  "abstract-confluencia": {
    "label": "Confluencia",
    "group": "flujo"
  },
  "abstract-onda": {
    "label": "Onda",
    "group": "flujo"
  },
  "abstract-descenso": {
    "label": "Descenso",
    "group": "flujo"
  },
  "abstract-marea": {
    "label": "Marea",
    "group": "flujo"
  },
  "abstract-nudo": {
    "label": "Nudo",
    "group": "vinculo"
  },
  "abstract-cruce": {
    "label": "Cruce",
    "group": "vinculo"
  },
  "abstract-trama": {
    "label": "Trama",
    "group": "vinculo"
  },
  "abstract-enlace": {
    "label": "Enlace",
    "group": "vinculo"
  },
  "abstract-constelacion": {
    "label": "Constelación",
    "group": "vinculo"
  },
  "abstract-despliegue": {
    "label": "Despliegue",
    "group": "cambio"
  },
  "abstract-muda": {
    "label": "Muda",
    "group": "cambio"
  },
  "abstract-transicion": {
    "label": "Transición",
    "group": "cambio"
  },
  "abstract-quiebre": {
    "label": "Quiebre",
    "group": "cambio"
  },
  "abstract-encuentro": {
    "label": "Encuentro",
    "group": "cambio"
  },
  "abstract-contorno": {
    "label": "Contorno",
    "group": "suelo"
  },
  "abstract-estratos": {
    "label": "Estratos",
    "group": "suelo"
  },
  "abstract-relieve": {
    "label": "Relieve",
    "group": "suelo"
  },
  "abstract-delta": {
    "label": "Delta",
    "group": "suelo"
  },
  "abstract-horizonte": {
    "label": "Horizonte",
    "group": "suelo"
  },
  "abstract-orbita": {
    "label": "Órbita",
    "group": "tiempo"
  },
  "abstract-ciclo": {
    "label": "Ciclo",
    "group": "tiempo"
  },
  "abstract-sedimento": {
    "label": "Sedimento",
    "group": "tiempo"
  },
  "abstract-pulso": {
    "label": "Pulso",
    "group": "tiempo"
  },
  "abstract-continuidad": {
    "label": "Continuidad",
    "group": "tiempo"
  },
  "abstract-eco": {
    "label": "Eco",
    "group": "memoria"
  },
  "abstract-palimpsesto": {
    "label": "Palimpsesto",
    "group": "memoria"
  },
  "abstract-rastro": {
    "label": "Rastro",
    "group": "memoria"
  },
  "abstract-resonancia": {
    "label": "Resonancia",
    "group": "memoria"
  },
  "abstract-retorno": {
    "label": "Retorno",
    "group": "memoria"
  },
  "abstract-pasaje": {
    "label": "Pasaje",
    "group": "paso"
  },
  "abstract-umbral": {
    "label": "Umbral",
    "group": "paso"
  },
  "abstract-espiral-abierta": {
    "label": "Espiral abierta",
    "group": "paso"
  },
  "abstract-bifurcacion": {
    "label": "Bifurcación",
    "group": "paso"
  },
  "abstract-puente": {
    "label": "Puente",
    "group": "paso"
  },
  "abstract-contrapeso": {
    "label": "Contrapeso",
    "group": "equilibrio"
  },
  "abstract-reciprocidad": {
    "label": "Reciprocidad",
    "group": "equilibrio"
  },
  "abstract-reunion": {
    "label": "Reunión",
    "group": "equilibrio"
  },
  "abstract-tension": {
    "label": "Tensión",
    "group": "equilibrio"
  },
  "abstract-balance": {
    "label": "Balance",
    "group": "equilibrio"
  },
  "abstract-ramificacion": {
    "label": "Ramificación",
    "group": "expansion"
  },
  "abstract-dispersion": {
    "label": "Dispersión",
    "group": "expansion"
  },
  "abstract-abrigo": {
    "label": "Abrigo",
    "group": "expansion"
  },
  "abstract-resguardo": {
    "label": "Resguardo",
    "group": "expansion"
  },
  "abstract-multiplicidad": {
    "label": "Multiplicidad",
    "group": "expansion"
  }
};
export const ABSTRACT_GROUPS = {"origen": "Origen", "flujo": "Flujo", "vinculo": "Vínculo", "cambio": "Cambio", "suelo": "Territorio", "tiempo": "Tiempo", "memoria": "Memoria", "paso": "Paso", "equilibrio": "Equilibrio", "expansion": "Expansión"};
const LEGACY_REPLACEMENTS = {"laguna": "abstract-onda", "rio": "abstract-meandro", "cordillera": "abstract-relieve", "espiral": "abstract-espiral-abierta", "remolino": "abstract-orbita", "serpiente": "abstract-continuidad", "fogon": "abstract-pulso", "refugio": "abstract-abrigo", "circulo": "abstract-reunion", "manos": "abstract-reciprocidad", "huella": "abstract-rastro", "sol": "abstract-nucleo", "luna": "abstract-ciclo", "lluvia": "abstract-descenso", "cascada": "abstract-confluencia", "curvas": "abstract-contorno", "rana": "abstract-emergencia", "tortuga": "abstract-resguardo", "felino": "abstract-tension", "div-agua": "abstract-meandro", "div-camino": "abstract-bifurcacion", "div-eco": "abstract-eco", "div-horizonte": "abstract-horizonte", "div-lluvia": "abstract-descenso", "div-montana": "abstract-relieve", "div-tejido": "abstract-trama", "div-cosecha": "abstract-multiplicidad"};
export function upgradeStoryMotifs(story) {
  return { ...story, slides: story.slides.map(slide => ({ ...slide, motif: LEGACY_REPLACEMENTS[slide.motif] || slide.motif })) };
}
