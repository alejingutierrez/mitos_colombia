import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Un hombre había comprado una olla y la llevaba cargada a la espalda. Regresaba de noche después de beber cuando encontró a un hombre muy flaco sentado junto al camino. Comprendió que era un alma.

El viajero perdió el equilibrio y estuvo a punto de caer a una zanja. El hombre flaco lo sostuvo. Siguió caminando a su lado, como si fuera un hermano, y cada vez que el miedo o la bebida hacían tropezar al hombre, el alma impedía la caída.

El acompañante no habló. Llevaba consigo una luz que volvía clara la noche. El narrador decía que era muy blanco y que se parecía a las Madres.

La aparición no atacó, pidió algo ni trató de desviar al viajero. Su extrañeza estaba en el silencio, el cuerpo delgado y la claridad; su acción fue proteger hasta la llegada a casa.

Otros caminos nocturnos de Calderas no eran tan seguros. Un hombre borracho golpeó a un perro flaco y después vio a una persona con el corazón colgando. Corrió, azotó flores creyendo defenderse y despertó al amanecer. Otra historia contaba una cabeza con un diente y una oreja que perseguía por el olor hasta que cantaba el gallo.

En la bajada de El Tablón, un jinete vestido de negro desaparecía junto a una puerta en la quebrada. Quienes lo habían visto pensaron que era el diablo. En Semana Santa, animales invisibles recorrían el monte y solo una brasa encendida lograba apartarlos.

El hombre flaco pertenece a ese mundo de caminos, alcohol, oscuridad y percepciones inciertas, pero ocupa un lugar distinto. El viajero sabe que está ante un alma y siente miedo; aun así, la presencia evita que se lastime.

Cuando llegan a la casa, el relato no cuenta una recompensa ni una revelación. La compañía termina. Queda la memoria de una luz silenciosa y de un ser que, en vez de aprovechar la vulnerabilidad de quien iba cargado y borracho, lo sostuvo como pariente.`;

const historia = composeNasaHistory({
  informants:
    "Bernal registra la narración en primera persona familiar —“mi papá”—, pero no consigna un informante individual al final de la entrada.",
  sourceDetail:
    "El relato ocupa pocas líneas y diferencia a esta alma de otras presencias nocturnas por su conducta protectora. La olla, la bebida, la zanja, la luz y la comparación con las Madres son los detalles disponibles.",
  editorialDecision:
    "Para evitar invención, la edición sitúa el fragmento dentro del ciclo documentado de encuentros nocturnos y marca los otros episodios como contraste. No identifica a las Madres, no da nombre al alma y no convierte el encuentro en castigo por beber.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "No hay una segunda versión del hombre flaco. La fuente dice que era un alma, no hablaba, iluminaba y sostenía al viajero. “El hombre y el perro flaco” es otra entrada: allí la aparición tiene el corazón colgando y el episodio termina entre flores golpeadas.",
  relationDetail:
    "La distinción entre ambos relatos se conserva pese a los títulos parecidos. La cabeza, los animales y el diablo comparten noche y camino, pero no la protección silenciosa.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Las narraciones de aparecidos suelen presentar almas que acompañan, advierten o desorientan a caminantes. El hombre flaco comparte la figura del acompañante nocturno, pero su luz, la olla, la zanja y el trato “como hermano” forman una combinación específica del testimonio de Calderas.",
  internalDetail:
    "El dalo describe el viaje de un alma hacia una morada luminosa; aquí el alma permanece en el camino y protege a un vivo. El hombre y el perro flaco invierte esa seguridad, mientras la candela muestra otra luz capaz de resguardar durante la noche.",
});

export default defineNasaMyth({
  slug: "el-hombre-flaco",
  title: "El hombre flaco",
  mito,
  historia,
  versiones,
  leccion:
    "La ayuda puede llegar en silencio y desde una presencia que primero causa miedo.",
  similitudes,
  excerpt:
    "Un alma delgada y luminosa acompaña a un viajero borracho, evita que caiga y lo conduce de noche hasta su casa.",
  seoTitle: "El hombre flaco: alma protectora de Calderas",
  seoDescription:
    "Lee el relato Nasa del hombre flaco, un alma silenciosa que ilumina el camino y protege a un viajero hasta llegar a casa.",
  focusKeywords: [
    "El hombre flaco Nasa",
    "alma protectora Calderas",
    "relatos nocturnos Nasa",
    "mitos de Tierradentro",
    "aparecidos de Colombia",
    "mitología Nasa",
  ],
  tags: ["Nasa", "hombre", "alma", "luz", "protección"],
  researchNotes: `NÚCLEO: fragmento familiar sin informante individual consignado.
DECISIÓN: contextualizar con el ciclo nocturno sin fusionar entradas.
CAUTELA: no definir “las Madres” sin otra fuente.
GEOGRAFÍA: Calderas aproximado.
IMAGEN: se conserva el par publicado y auditado.`,
});
