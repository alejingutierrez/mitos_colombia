import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `En Uikuet había una casa donde se celebraba una fiesta. La gente se había reunido, había recipientes para servir y el lugar estaba lleno.

Llegó un niño vestido con harapos. No entró como invitado importante ni mostró poder. Solo pidió que le dieran comida.

Una mujer mayor protestó. Había tantas personas dentro, dijo, que no veía por qué también debían alimentar al pequeño. Nadie corrigió la negativa antes de que el niño saliera.

Desde afuera pronunció una frase breve: veía piedra. En ese momento la casa, la fiesta y quienes permanecían en ella quedaron petrificados. El niño creció ante la mirada de quienes podían reconocerlo. Era Santo Tomás.

La gente de Calderas decía que todavía se veían las ollas en el conjunto de piedra, como si continuaran cayendo durante la celebración detenida. El lugar no conservaba solo paredes: retenía el instante exacto en que la abundancia de una fiesta no alcanzó a convertirse en hospitalidad.

El episodio se une a otros relatos de Santo Tomás. Se presentaba con un aspecto desagradable para escuchar lo que decían de él y convertía en piedra a quienes murmuraban. María Santísima le reprochaba que, si seguía así, acabaría con el mundo. Finalmente fue engañado y encerrado en una caja para contener su poder.

También dialoga con las dos mujeres de Chaikin, petrificadas por no compartir caña con Chautéh. En ambos casos alguien pide una parte de lo que otros llevan o celebran. La negativa queda visible en el paisaje.

La casa de Uikuet no es una ruina explicada por un dato arqueológico en la fuente. Es una casa detenida por una palabra. Sus ollas y sus asistentes permanecen como memoria del contraste entre reunión y exclusión: una comunidad puede tener comida, música y muchas personas, pero la fiesta se vacía de sentido cuando quien llega con hambre no encuentra lugar.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye la historia a Corpus Guagás y, de manera excepcional en el corpus, registra a Avelino Penkue como intérprete.",
  sourceDetail:
    "La entrada consta de una escena compacta situada en Uikuet. No identifica una estructura arqueológica ni ofrece coordenadas. El detalle de las ollas visibles muestra que la petrificación explica un rasgo observado o recordado en el lugar.",
  editorialDecision:
    "La revisión amplía el relato con episodios documentados de Santo Tomás y Chaikin, marcados como relaciones del ciclo. No añade asistentes salvados, arrepentimiento posterior ni destrucción del sitio.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "No hay otra versión enumerada de la casa. El niño harapiento, la petición de comida, la negativa, la frase sobre la piedra y la revelación como Santo Tomás forman el único núcleo publicado. La edad exacta de la mujer y el tipo de fiesta no aparecen.",
  relationDetail:
    "Santo Tomás castiga también la murmuración; Chautéh petrifica a dos mujeres que niegan caña. Las escenas comparten una prueba de trato y reparto, pero conservan lugares, personajes y narradores distintos.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "Ovidio narra a Baucis y Filemón recibiendo a visitantes que otros rechazan; la hospitalidad determina el destino de las casas. Uikuet comparte la prueba al forastero, pero invierte el centro: un niño pobre pronuncia la petrificación y el lugar queda ligado al ciclo Nasa de Santo Tomás.",
  internalDetail:
    "Las piedras de Chaikin son el paralelo directo por la negativa a compartir. Piedra Alta surge de un señalamiento y no de una falta de hospitalidad. Juntas, estas páginas muestran que la piedra puede guardar memoria de palabra, reparto, castigo o creación territorial.",
});

export default defineNasaMyth({
  slug: "la-casa-de-fiesta-petrificada",
  title: "La casa de fiesta petrificada",
  mito,
  historia,
  versiones,
  leccion:
    "Una celebración pierde su sentido cuando la abundancia excluye a quien llega con hambre.",
  similitudes,
  excerpt:
    "Un niño harapiento pide comida en una fiesta de Uikuet; al ser rechazado, revela ser Santo Tomás y vuelve piedra la casa.",
  seoTitle: "La casa de fiesta petrificada: mito Nasa",
  seoDescription:
    "Lee el relato Nasa de Uikuet, donde una fiesta niega comida a un niño y Santo Tomás convierte la casa, las personas y las ollas en piedra.",
  focusKeywords: [
    "casa de fiesta petrificada",
    "mito Nasa de Uikuet",
    "Santo Tomás Nasa",
    "hospitalidad en mitos",
    "piedras de Calderas",
    "relatos de Tierradentro",
  ],
  tags: ["Nasa", "Uikuet", "Santo Tomás", "piedra", "hospitalidad"],
  researchNotes: `NÚCLEO: única versión de Corpus Guagás; intérprete Avelino Penkue.
GEOGRAFÍA: Uikuet se conserva como topónimo sin coordenada especulativa; mapa en Calderas.
AMPLIACIÓN: solo mediante relaciones documentadas con Santo Tomás y Chaikin.
IMAGEN: se conserva el par publicado y auditado.`,
});
