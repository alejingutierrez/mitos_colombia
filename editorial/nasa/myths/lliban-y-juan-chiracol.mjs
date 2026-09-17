import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Calderas tenía dos caciques vinculados a sus dos lados. Llíban estaba en la parte occidental. La primera casa de la bajada de Puelchí llevaba su nombre; después el lugar fue conocido como Eshufi Ik, la laguna del oso. Juan Chiracol pertenecía a la parte oriental y se relacionaba con El Caspe, una laguna grande situada hacia los linderos de Belalcázar.

Los dos defendieron el territorio frente a quienes entraban a atacarlo. Llíban llevaba la fuerza del Trueno. En otros relatos hacía girar una culebra-boleadora que sonaba como rayo y se retiraba a una laguna. Juan Chiracol, nacido de una mujer y un tigre, conocía el sufrimiento de su madre y combatía para que la tierra continuara en manos de su gente.

Cuando terminó la lucha, los caciques se encontraron. No disputaron entre sí ni intentaron ocupar el lugar del otro. Conversaron y reconocieron que Calderas quedaba libre del peligro. Después siguieron destinos distintos: Juan Chiracol fue hacia El Caspe y Llíban hacia los linderos de Chinas.

Antes de marcharse, Llíban dejó una advertencia. Había que gobernar bien, respetar a los mayores y cuidar que la tierra no pasara a manos extranjeras. Si los adversarios regresaban, los médicos podrían llamarlo. Juan Chiracol había dejado un consejo semejante: no vender las tierras por las que se había luchado.

Ninguno permaneció en una casa común. Ambos se alejaron hacia aguas y límites desde donde podían seguir vinculados al territorio. El relato dice que no se sabía cómo había aparecido Llíban y que no había recibido bautismo, aunque parecía cristiano. Esa observación no borra su relación con el Trueno; muestra la forma en que distintas memorias convivían en Calderas.

La historia conjunta no sustituye las vidas separadas de los dos caciques. Las reúne en un momento preciso: después de la defensa, cuando el territorio necesita palabra, reparto de responsabilidades y vigilancia duradera.`;

const historia = composeNasaHistory({
  informants:
    "La entrada conjunta fue narrada por Agustín Muse y traducida con la ayuda de Marco Antonio Penkue.",
  sourceDetail:
    "El texto es breve, pero fija una geografía política: Llíban al occidente, Juan Chiracol al oriente, dos lagunas y destinos separados. También conserva consejos territoriales que aparecen con mayor detalle en los relatos individuales.",
  editorialDecision:
    "Se mantiene esta página porque no es un duplicado literal: documenta cómo una voz de Calderas organizaba conjuntamente a los dos caciques. La edición amplía solo con episodios atribuidos a sus páginas fuentes y señala la unión como ciclo, no como una tercera biografía independiente.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Esta narración funciona como síntesis de dos ciclos. No ofrece otro nacimiento ni otro combate; sitúa a los caciques en lados complementarios de Calderas, resume la victoria y conserva su conversación final. Los relatos individuales añaden la creciente y la culebra de Llíban, y la madre, el tigre y El Caspe de Juan Chiracol.",
  relationDetail:
    "La página se conserva enlazada a las dos historias individuales para evitar repetición engañosa. Su valor específico es mostrar una autoridad distribuida y dos destinos acuáticos después de una acción común.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "El Popol Vuh presenta parejas de héroes cuyas capacidades se vuelven efectivas en relación y no como hazañas aisladas. La semejanza está en la cooperación; Llíban y Juan Chiracol no repiten la genealogía ni las pruebas de los gemelos k’iche’, y su misión se concentra en tierra, autoridad y lagunas de Tierradentro.",
  internalDetail:
    "Juan Tama reúne varios rasgos del ciclo: procede del agua, camina límites, defiende resguardos y retorna a una laguna. Bernal mismo observó semejanzas entre estos relatos. La edición conserva esa red sin convertir a los tres personajes en una sola figura.",
});

export default defineNasaMyth({
  slug: "lliban-y-juan-chiracol",
  title: "Llíban y Juan Chiracol",
  mito,
  historia,
  versiones,
  leccion:
    "El territorio se cuida mejor cuando la autoridad se comparte y deja consejos duraderos.",
  similitudes,
  excerpt:
    "Dos caciques defienden Calderas, conversan tras la victoria y parten hacia lagunas distintas dejando un mismo cuidado territorial.",
  seoTitle: "Llíban y Juan Chiracol: caciques Nasa",
  seoDescription:
    "Lee el relato Nasa que reúne a Llíban y Juan Chiracol, caciques del occidente y oriente de Calderas ligados a dos lagunas.",
  focusKeywords: [
    "Llíban y Juan Chiracol",
    "caciques Nasa",
    "mitos de Calderas",
    "lagunas de Tierradentro",
    "defensa del territorio Nasa",
    "relatos Nasa",
  ],
  tags: ["Nasa", "Llíban", "Juan Chiracol", "liderazgo", "resistencia"],
  researchNotes: `DECISIÓN: conservar como página de relación, no duplicado ni fusión total.
FUENTE: Agustín Muse; intérprete Marco Antonio Penkue.
GEOGRAFÍA: Calderas aproximado; El Caspe, Eshufi Ik y Chinas se mantienen como topónimos narrativos.
IMAGEN: el par publicado se considera candidato a corrección por vestuario guerrero genérico.`,
});
