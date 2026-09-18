import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Tomás Dimales propuso a Pedro, su hermano, una prueba. Tomás haría salir un río y Pedro tendría que detenerlo. En aquel tiempo, decía el relato, nadie sabía dónde terminaban las aguas.

Pedro aceptó y echó a correr para adelantarse a la corriente. Antes de separarse, prometió avisar cuando hubiera encontrado una forma de atajarla. Tomás dejó salir el río y esperó la señal.

Cuando Pedro anunció que el agua estaba detenida, Santo Tomás caminó hasta el lugar. Allí no encontró una represa pequeña ni un cauce seco. Frente a Pedro se extendía el mar. Su hermano le pidió que observara con cuidado y comprobara si el río seguía corriendo. En ese punto había reunido y detenido las aguas.

La prueba pertenecía a un ciclo de recorridos de Pedro y Tomás por Calderas. En otro episodio caminaban juntos por los linderos de la Muralla, cuando la región todavía se recordaba como un terreno plano. Pedro habló de unos peñones. Tomás respondió que no podían existir, pero al señalar el sitio surgió la gran Piedra Alta.

Los dos también trabajaban juntos. Pedro se ofrecía a ayudar y al principio parecía cumplir. Cuando Tomás le encargó sembrar maíz, echó toda la semilla en un solo hueco. Cuando fue a desyerbar, cortó las plantas en lugar de limpiar alrededor. Enojado, trató de convertir a su hermano en piedra, pero no lo logró.

En estas historias, Pedro altera o desordena las tareas, mientras Tomás comprueba lo ocurrido. El mar aparece como resultado de una competencia entre hermanos: uno libera el agua y otro la ataja hasta formar una extensión cuyo límite ya no se ve.

El relato no afirma que el mar esté junto a Calderas ni que los dos hermanos hayan viajado a una costa identificable. Explica el destino de las aguas mediante una prueba de poder y palabra. Donde termina la carrera de Pedro comienza un espacio inmenso, y la pregunta de Tomás —si el río todavía corre— invita a mirar el movimiento dentro de aquello que parece detenido.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye “El mar” y “Piedra Alta” a Vicente Puchi; otros episodios de los hermanos proceden de Guillermo Guagás.",
  sourceDetail:
    "La entrada del mar ocupa pocas líneas y no ofrece una localización costera. Su sentido se entiende mejor dentro del ciclo de Pedro y Tomás Dimales, donde palabra, trabajo y paisaje se ponen a prueba sin que todos los episodios formen una cronología cerrada.",
  editorialDecision:
    "La revisión amplía el Relato únicamente con escenas publicadas en el mismo corpus y las identifica como episodios relacionados. Retira la coordenada genérica del Pacífico: el punto del mapa representa Calderas, lugar de recolección, no el sitio físico donde se habría formado el océano.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal no registra otra versión de la prueba del río. La forma “Santo Tomás” aparece al final aunque el inicio dice “Tomás Dimales”, señal de que los nombres se conectaban en el corpus. La edición conserva esa oscilación sin decidir que todo Tomás sea exactamente la figura católica.",
  relationDetail:
    "“Piedra Alta” y “Pedro y Tomás Dimales” aportan otras pruebas entre los hermanos; “Santo Tomás” desarrolla un personaje más peligroso y finalmente encerrado. Se mantienen páginas separadas para conservar informantes y episodios, pero todas enlazan el mismo ciclo.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Ovidio narra ríos y mares como potencias con voluntad y genealogía. La historia de Calderas comparte la idea de un agua activa, pero la organiza como prueba fraterna: un hermano suelta el río y otro lo detiene. No existe aquí el panteón acuático de la tradición grecorromana.",
  internalDetail:
    "“Formación del río Páez” explica un cauce por la carrera de Chautéh; “El Trueno” convierte un cultivo en laguna. El mar prolonga esa geografía narrativa: las aguas nacen, siguen, cubren o son detenidas según relaciones entre seres, autoridades y territorio.",
});

export default defineNasaMyth({
  slug: "el-mar",
  title: "El mar",
  mito,
  historia,
  versiones,
  leccion:
    "Toda fuerza detenida conserva movimiento y exige observar más allá de las apariencias.",
  similitudes,
  excerpt:
    "Tomás libera un río y Pedro corre a detenerlo; cuando se encuentran, las aguas reunidas ya forman el mar.",
  seoTitle: "El mar: relato Nasa de Pedro y Tomás",
  seoDescription:
    "Lee el relato Nasa del mar, una prueba entre Pedro y Tomás Dimales sobre el curso de un río y el lugar donde se detienen sus aguas.",
  focusKeywords: [
    "El mar mito Nasa",
    "Pedro y Tomás Dimales",
    "relatos de Calderas",
    "origen del mar Nasa",
    "mitología de Tierradentro",
    "Santo Tomás Nasa",
  ],
  tags: ["Nasa", "Pedro", "Tomás", "río", "desafío"],
  researchNotes: `NÚCLEO: entrada breve de Vicente Puchi ampliada solo con el ciclo documentado de los hermanos.
GEOGRAFÍA: mapa en Calderas; no se afirma una costa narrativa.
NOMBRES: se conserva la oscilación Tomás Dimales/Santo Tomás.
IMAGEN: se conserva el par publicado y auditado.`,
});
