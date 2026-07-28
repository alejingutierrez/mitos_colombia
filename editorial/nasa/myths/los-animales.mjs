import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Un hombre fue a visitar a un pariente que vivía lejos. Bebió chicha con un primo y, ya borracho, emprendió el camino de noche. Llevaba una peinilla y una escopeta con la que esperaba cazar guacharacas.

Disparó. Algo parecido a un cerdo se acercó entre la oscuridad, pero el hombre miraba y no conseguía ver un cuerpo. Sacó la peinilla para defenderse. Volvió a disparar, esta vez hacia el aire.

Entonces muchos animales comenzaron a moverse alrededor. Las hojas sonaban bajo sus pasos, aunque la noche no permitía distinguirlos. El hombre encendía fósforos, pero cada llama se apagaba demasiado pronto. Rodeado por ruidos sin forma, gritó.

Una pariente oyó la voz. Salió a buscarlo acompañada por su hija y llevó un pedazo de bagazo encendido. La brasa ahuyentó a los animales. Encontraron al hombre caído en un zanjón, lo ayudaron a salir y emprendieron juntos el regreso.

Las mujeres caminaron delante y él detrás. Al cruzar una quebrada pequeña, creyó ver que algo se movía dentro del agua. Miró hacia atrás y distinguió dos ojos brillantes. Gritó que venía otro animal y se adelantó. Las mujeres no vieron nada. Alumbraron el camino y las presencias se quedaron atrás.

El relato decía que los animales comenzaban a andar desde las nueve de la noche y que salían con mayor frecuencia durante Semana Santa. En esos momentos la gente evitaba caminar.

La historia no decide si todos vieron lo mismo. El hombre oye, dispara y percibe ojos; las mujeres reconocen su miedo, lo rescatan y usan fuego, pero no distinguen los cuerpos que él señala.

El bagazo encendido conecta el episodio con el origen de la candela. Aquello que en otro relato fue disputado y repartido sirve aquí como protección y guía. También corrige la fuerza inútil de la escopeta: los disparos multiplican el ruido, mientras una pequeña luz sostenida por dos familiares permite volver a casa.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye la entrada a Agustín Muse y registra a Marco Antonio Penkue como intérprete.",
  sourceDetail:
    "El episodio diferencia sonidos, visiones y acciones compartidas. Las mujeres constatan al hombre en el zanjón y llevan luz; no afirman ver todos los animales. Esa diferencia se preserva sin reducir el relato a engaño o alucinación.",
  editorialDecision:
    "La revisión elimina bestias inventadas por la ficha anterior y vuelve a los indicios exactos: algo como cerdo, hojas, dos ojos y movimiento en el agua. No presenta la advertencia de Semana Santa como norma Nasa contemporánea general.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal publica una sola voz. No se especifican especies, número de animales ni razón por la que aparecen. El horario de las nueve y la referencia a Semana Santa forman parte de la misma narración y se atribuyen a ese registro.",
  relationDetail:
    "La cabeza y el hombre con el perro flaco comparten noche, miedo y percepción inestable. El hombre flaco protector y las mujeres con bagazo muestran que las presencias y las respuestas no son todas hostiles.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Los cuentos de cacería nocturna suelen invertir la relación: quien sale a perseguir animales termina rodeado por aquello que no puede ver. Aquí la escopeta y la peinilla fallan, mientras una brasa familiar abre el regreso. Esa combinación concreta evita tratarlo como simple leyenda universal del bosque.",
  internalDetail:
    "La candela ofrece el paralelo principal porque una llama compartida hace habitable la noche. Chautéh explica que algunos animales fueron personas y conserva comportamientos humanos; “Los animales” no afirma esa procedencia, pero vuelve incierta la frontera entre ruido, mirada y presencia.",
});

export default defineNasaMyth({
  slug: "los-animales",
  title: "Los animales",
  mito,
  historia,
  versiones,
  leccion:
    "La fuerza desorientada agrava el miedo; una luz compartida puede abrir el regreso.",
  similitudes,
  excerpt:
    "Un cazador oye animales invisibles, cae en un zanjón y es rescatado por dos familiares que llevan bagazo encendido.",
  seoTitle: "Los animales: relato nocturno Nasa",
  seoDescription:
    "Lee el relato Nasa del cazador rodeado por animales invisibles y de las mujeres que lo rescatan con una pequeña brasa.",
  focusKeywords: [
    "Los animales mito Nasa",
    "relato nocturno Calderas",
    "bagazo encendido",
    "cuentos de cacería Nasa",
    "Agustín Muse",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "bestias", "miedo", "fuego", "protección"],
  researchNotes: `NÚCLEO: única versión de Agustín Muse; intérprete Marco Antonio Penkue.
CAUTELA: distinguir lo que ve el hombre de lo que ven las mujeres.
CAUTELA: Semana Santa se atribuye al registro de 1953, no a una regla actual general.
GEOGRAFÍA: Calderas aproximado.
IMAGEN: se conserva el par publicado y auditado.`,
});
