// La función editorial se decide antes que el encuadre o la decoración.
export const SYMBOLIC_HUELLA_LINES = [
  "HUELLA 1:1 — SÍNTESIS SIMBÓLICA: condensar el sentido del mito, no representar otra escena del desenlace.",
  "Un motivo dominante y una transformación o relación imposible expresan una consecuencia; el resto permanece subordinado. Debe conservar su lectura a tamaño pequeño.",
  "No basta quitar personajes de un paisaje. Evitar acumular episodios, objetos y acciones para explicar la historia. Si una persona resulta indispensable como símbolo, no convertirla en retrato o escena cotidiana.",
  "Símbolo editorial no significa símbolo tradicional certificado: conservar la procedencia y la especificidad del relato. Mantener papel recortado, aire entre planos y sombras físicas, sin marco ni soporte exterior.",
];

const SYMBOL_FIELDS = {
  thesis: "TESIS SIMBÓLICA",
  carrier: "MOTIVO DOMINANTE",
  operation: "OPERACIÓN VISUAL",
  story_connection: "RELACIÓN CON EL MITO",
  visible_test: "PRUEBA VISUAL DEL SÍMBOLO",
};

export function validateSymbolicContract(contract) {
  for (const field of Object.keys(SYMBOL_FIELDS)) {
    if (typeof contract?.[field] !== "string" || !contract[field].trim()) {
      throw new Error(`huella simbólica: falta ${field}`);
    }
  }
}

export function buildSymbolicLines(contract) {
  validateSymbolicContract(contract);
  return [
    ...SYMBOLIC_HUELLA_LINES,
    ...Object.entries(SYMBOL_FIELDS).map(([field, label]) => `${label}: ${contract[field]}`),
  ];
}
