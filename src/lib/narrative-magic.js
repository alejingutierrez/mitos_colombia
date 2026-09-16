// Reglas reutilizables: los vehículos concretos se deciden para cada relato.
// Este módulo no convierte noche, agua ni otra licencia de Arámai en plantilla.
export const PAPER_CHARACTER_LINES = [
  "Personajes como recortes casi planos de papel: proporciones naturales según su edad, rostro resuelto con pocas piezas y ojo mínimo; en perfil, nariz en el contorno de una silueta. Sin cabeza modelada ni facetada.",
  "Cabello y manos como pocas piezas recortadas; ropa en hojas amplias con pocos dobleces. Identidad por silueta, edad, vestuario y postura, no por gesticulación o detalle de piel.",
  "La profundidad pertenece a la separación física entre planos del mundo; una figura plana puede habitar un espacio profundo. Evitar caras de animación infantil, muñecos y retratos cerrados por defecto.",
];

export const MAGIC_IN_THE_ORDINARY_LINES = [
  "REALISMO MÁGICO EN LO COTIDIANO: un lugar, objeto o acción del relato adquiere un comportamiento imposible que cambia una relación humana o revela una consecuencia.",
  "Conservar la credibilidad material del mundo y hacer visible una contradicción concreta; decir mágico, místico o añadir brillo no describe una acción.",
  "Distinguir hecho narrado y licencia plástica editorial. La licencia puede alterar luz, tiempo, espacio o materia sin atribuir símbolos o episodios nuevos a la tradición.",
  "La escala y el contraste sirven al relato: no exigir gigantismo, primer plano ni oscuridad uniforme. Cada mito necesita su propio vehículo; no copiar el de otra historia.",
];

const FIELDS = {
  ordinary_anchor: "ANCLA COTIDIANA",
  impossible_behavior: "COMPORTAMIENTO IMPOSIBLE",
  narrative_effect: "EFECTO EN EL RELATO",
  agency: "QUIÉN ACTÚA Y QUÉ NO CONTROLA EL HUMANO",
  physical_translation: "FABRICACIÓN EN PAPEL",
  visible_test: "CONTRADICCIÓN QUE DEBE VERSE",
};

export function validateNarrativeMagic(contract) {
  if (!contract || typeof contract !== "object") throw new Error("falta contrato de magia cotidiana");
  for (const field of Object.keys(FIELDS)) {
    if (typeof contract[field] !== "string" || !contract[field].trim()) {
      throw new Error(`magia cotidiana: falta ${field}`);
    }
  }
  if (!["narrated_fact", "editorial_metaphor"].includes(contract.provenance)) {
    throw new Error("magia cotidiana: procedencia no declarada");
  }
  if (!["present", "anticipation", "memory"].includes(contract.temporal_role)) {
    throw new Error("magia cotidiana: función temporal no declarada");
  }
  if (!Array.isArray(contract.event_ids) || !contract.event_ids.length) {
    throw new Error("magia cotidiana: faltan acciones del relato");
  }
}

export function buildNarrativeMagicLines(contract) {
  if (contract == null) return [];
  validateNarrativeMagic(contract);
  return [
    ...MAGIC_IN_THE_ORDINARY_LINES,
    ...Object.entries(FIELDS).map(([field, label]) => `${label}: ${contract[field]}`),
    `FUNCIÓN TEMPORAL: ${{ present: "acción presente", anticipation: "anticipación editorial", memory: "memoria o consecuencia persistente" }[contract.temporal_role]}.`,
    `ALCANCE: ${contract.provenance === "editorial_metaphor" ? "metáfora editorial, no episodio o símbolo tradicional certificado" : "hecho narrado, con procedencia registrada en el expediente"}.`,
  ];
}
