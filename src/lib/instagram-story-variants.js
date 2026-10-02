// Visual families are independent of the narrative role (origin, turn, climax…).
export const STORY_TYPES = {
  portada: { label: "Portada", description: "La puerta de entrada al relato" },
  "slide-1": { label: "Slide 1 · Escena", description: "Acciones, personajes y territorio" },
  "slide-2": { label: "Slide 2 · Detalle", description: "Acercamientos y pausas del relato" },
  cierre: { label: "Cierre", description: "Lo que la historia deja resonando" },
  invitacion: { label: "Invitación a leer", description: "Continuar en el archivo" },
};
const definitions = {
  portada: [
    ["A sangre", "Escena completa y nombre superpuesto", true],
    ["Cielo abierto", "Título oscuro en el espacio claro del paisaje", true],
    ["Tipográfica", "Solo el nombre, centrado en un campo de color", false],
    ["Lateral", "Título oscuro en la esquina superior del paisaje", true],
    ["Manifiesto", "Solo el nombre, amplio y alineado al pie", false],
  ],
  "slide-1": [
    ["Cinemática", "Fotografía completa y texto al pie"],
    ["Luz lateral", "Escena completa y lectura a la derecha"],
    ["Contracampo", "Imagen a sangre y lectura a la izquierda"],
    ["Horizonte", "Titular arriba y lectura en la esquina"],
    ["Nota de campo", "Lectura lateral sobre una escena luminosa"],
  ],
  "slide-2": [
    ["Acercamiento", "Imagen completa y lectura en contrapunto"],
    ["Nota al pie", "Escena abierta y lectura al pie"],
    ["Revelación", "Imagen abierta y título en el tercio inferior"],
    ["Diagonal", "Título y relato en esquinas opuestas"],
    ["Resonancia", "Lectura reunida en el tercio inferior"],
  ],
  cierre: [
    ["Pregunta", "Pregunta amplia y forma a gran escala", false],
    ["Contrapunto", "Forma amplia y lectura asimétrica", false],
    ["Umbral", "Reflexión centrada y forma al pie", false],
    ["Colofón", "Lectura arriba, símbolo amplio abajo", false],
    ["Memoria", "Forma protagonista y última idea al pie", false],
  ],
  invitacion: [
    ["Continúa", "Invitación directa y ruta de lectura", false],
    ["Señal", "Símbolo y dirección del archivo", false],
    ["Índice", "Título, nota de lectura y enlace", false],
    ["Postal", "Forma central y llamada al pie", false],
    ["Puerta abierta", "Dos columnas para seguir leyendo", false],
  ],
};
export const STORY_VARIANTS = Object.fromEntries(Object.entries(definitions).flatMap(([type, variants]) => variants.map(([label, description, image = "optional"], i) => [`${type}-${i + 1}`, { label, description, image, kind: type, version: i + 1 }])));
export function slideType(slide, index = 0) {
  if (slide.role === "hook") return "portada";
  if (slide.role === "closing") return "cierre";
  if (slide.role === "invitation") return "invitacion";
  return slide.slide_type === "slide-1" || slide.slide_type === "slide-2" ? slide.slide_type : index % 2 ? "slide-1" : "slide-2";
}
export function defaultVariant(slide, asset, index = 0) {
  const type = slideType(slide, index);
  return `${type}-${type === "portada" && !asset ? 3 : 1}`;
}
