import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Santo Tomás era hermano de María Santísima. El relato lo describía como pícaro y de aspecto desagradable. Se presentaba con piojos y sarna para escuchar lo que las personas decían de él. Cuando alguien murmuraba, lo convertía en piedra.

María le reclamaba. Si continuaba así, terminaría por petrificar el mundo. A Santo Tomás se atribuían riscos, peñas y piedras de formas ásperas. Con una pisada podía mover la tierra, y su poder alcanzaba a quienes eran llamados hijos de María.

Las faltas se acumularon hasta que María se marchó al cielo para no verlas. Santo Tomás la siguió. Ella le ordenó volver al mundo y él descendió dentro de un viento fuerte. Después lo envió al fin del mundo.

Allí fue encerrado mediante un ardid. María lo puso en cajones de bronce para impedir que saliera. Cuando se enojaba o intentaba cambiar de posición, la tierra temblaba.

Otra versión situaba su captura en Lame. Santo Tomás dejó señales sobre una piedra donde apoyó el rejo y se sentó. Mientras descansaba vio un pájaro hermoso y quedó concentrado en él. Entonces lo sorprendieron, lo hicieron dormir y lo metieron en un cajón. Lo enterraron y sembraron encima un árbol llamado tachi o tachuelo. Los temblores ocurrían cuando, cansado de permanecer igual, movía el cuerpo.

En Uikuet aparece bajo otra forma. Durante una fiesta, un niño harapiento pidió comida. Una mujer se quejó de que no debían atenderlo cuando ya había tanta gente. El niño salió, anunció que veía piedra y toda la casa quedó petrificada. Después creció: era Santo Tomás.

Las escenas reúnen prueba, palabra y encierro. El personaje escucha cómo lo tratan cuando parece repulsivo o pobre; responde convirtiendo personas y espacios en roca; finalmente él mismo queda dentro de una caja bajo tierra. El movimiento que no puede realizar libremente se convierte en temblor.`;

const historia = composeNasaHistory({
  informants:
    "La narración principal procede de Agustín Muse; la variante de Lame y la casa de fiesta fueron contadas por Corpus Guagás.",
  sourceDetail:
    "La publicación combina nombres católicos con topónimos, cajas, petrificación y explicaciones locales de los temblores. Bernal advierte además que Chautéh y Santo Tomás podían identificarse en algunas voces, aunque conserva entradas separadas.",
  editorialDecision:
    "La edición no presenta esta figura como el apóstol bíblico trasladado sin cambios a Tierradentro. La trata como personaje de una tradición Nasa colonial y poscolonial donde elementos católicos fueron reconfigurados en una geografía y una memoria propias.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "En la primera versión, María envía a Santo Tomás al fin del mundo y lo encierra en bronce. En Lame, lo capturan mientras mira un pájaro, lo entierran en una caja y plantan tachi. Ambas explican los temblores por sus movimientos, pero difieren en lugar, procedimiento y agentes.",
  relationDetail:
    "La casa petrificada desarrolla el mismo poder bajo apariencia infantil. Pedro Dimales intenta petrificar a Tomás sin lograrlo; Chautéh también queda en un baúl y convierte personas en piedra. Las relaciones se registran sin colapsar nombres e informantes.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Las Metamorfosis contienen castigos en que una falta de hospitalidad termina fijada en piedra. Uikuet comparte la prueba al visitante pobre, pero Santo Tomás forma parte de un ciclo local de cajas, sismos y paisaje. La semejanza moral no demuestra que el relato dependa de Ovidio.",
  internalDetail:
    "Piedra Alta, Chaikin y la casa de fiesta forman una geografía de petrificaciones. Chautéh es el paralelo más estrecho por daño, engaño y encierro. El Trueno y Llíban ofrecen otro vínculo con fuerzas capaces de sacudir, sonar y defender o castigar.",
});

export default defineNasaMyth({
  slug: "santo-tomas",
  title: "Santo Tomás",
  mito,
  historia,
  versiones,
  leccion:
    "Quien usa el poder para humillar termina prisionero de sus propias transformaciones.",
  similitudes,
  excerpt:
    "Santo Tomás convierte en piedra a quienes murmuran, hasta que María lo encierra; sus movimientos explican los temblores.",
  seoTitle: "Santo Tomás: personaje de los relatos Nasa",
  seoDescription:
    "Lee las versiones Nasa de Santo Tomás: petrificaciones, captura en Lame, cajones de bronce y movimientos que hacen temblar la tierra.",
  focusKeywords: [
    "Santo Tomás Nasa",
    "mito Nasa de los temblores",
    "petrificación en Calderas",
    "relatos de Lame",
    "Chautéh y Santo Tomás",
    "mitología de Tierradentro",
  ],
  tags: ["Nasa", "Santo Tomás", "piedra", "castigo", "sobrenatural"],
  researchNotes: `NÚCLEO: relato de Agustín Muse, variante de Corpus Guagás y episodio de Uikuet.
CAUTELA: personaje sincrético; no equiparar sin más con el apóstol histórico.
GEOGRAFÍA: se conserva el punto aproximado previo para Lame, sin afirmar el lugar del encierro.
IMAGEN: se conserva el par publicado y auditado.`,
});
