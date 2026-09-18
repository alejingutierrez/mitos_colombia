import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Una cabeza andaba sola por la noche. No tenía cuerpo. Conservaba un solo diente y una sola oreja, y podía levantarse lejos de su casa.

Un hombre estaba sentado sobre una piedra, apoyado en un bordón, cuando la vio. Le pegó y la lanzó hacia el río. Después corrió.

La cabeza salió de la quebrada y comenzó a perseguirlo. El hombre se adelantó y subió a un árbol muy alto. La aparición pasó de largo, pero regresó: podía buscarlo por el olor.

Llegó al pie del árbol y lo reconoció arriba. No alcanzaba a subir. Se golpeó una y otra vez contra el tronco o el suelo mientras esperaba. Cuando cantó el gallo tuvo que abandonar la persecución.

La cabeza tenía parientes y una casa. Si el amanecer la sorprendía lejos, pedía posada donde familiares y continuaba la noche siguiente hasta regresar. No era una cosa sin relaciones: fuera de su cuerpo conservaba orientación, olfato y vínculos domésticos.

El hombre bajó del árbol y volvió asustado. Avisó a esposas, hermanas, hijos, padres y demás parientes que había visto la cabeza.

La narración advertía que podía aparecérsele a cualquier hombre, hubiera bebido o no. Bajaba pendientes con facilidad, pero le costaba subir. También podía avanzar por debajo de la tierra y salir en el campo.

En otros caminos de Calderas, una aparición flaca protegía a un borracho, mientras un hombre con el corazón colgando surgía después de golpear a un perro. Animales invisibles rodeaban a quien disparaba en la oscuridad. La cabeza comparte la noche y la persecución, pero la fuente descarta que todo dependa del alcohol.

El cuento termina con una noticia que pasa del testigo a su red familiar. Sobrevivir no basta: debe comunicar por dónde anda la cabeza y cómo se detiene al amanecer. La palabra comunitaria se convierte en forma de cuidado frente a una presencia que también tiene parientes y busca volver a casa.`;

const historia = composeNasaHistory({
  informants:
    "Bernal no consigna un informante individual ni intérprete al final de esta entrada.",
  sourceDetail:
    "El texto ofrece una descripción precisa del movimiento: río, árbol, olfato, canto del gallo, pendientes, recorrido subterráneo y regreso a parientes. La revisión conserva esos límites y no le atribuye un origen perdido.",
  editorialDecision:
    "La ficha anterior convertía la aparición en emblema abstracto de culpa. La nueva edición mantiene la lógica concreta de persecución y parentesco, evita afirmar que solo aparece a borrachos y no la identifica con figuras de otras regiones colombianas.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "Bernal publica una sola narración y luego añade observaciones sobre a quién puede aparecer, cómo se desplaza y dónde pasa el amanecer. No se registra el nombre del testigo, de la cabeza ni de sus familiares.",
  relationDetail:
    "El hombre y el perro flaco también incluye un corazón separado del cuerpo, pero no una cabeza autónoma. “Los animales” comparte el horario nocturno y el aviso a parientes. Son relatos vecinos, no variantes intercambiables.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "El Popol Vuh contiene una cabeza separada que conserva voz y capacidad de actuar. El parecido formal es notable, pero la cabeza de Calderas tiene un diente, una oreja, olfato, dificultad para subir y una casa con parientes. No hay evidencia de dependencia entre las dos tradiciones.",
  internalDetail:
    "El dalo sigue a un alma que vuelve para contar; el hombre flaco es un alma que acompaña. La cabeza introduce otra posibilidad de cuerpo y parentesco después de la separación. El gallo y el amanecer delimitan su movimiento, mientras la candela protege en otros episodios nocturnos.",
});

export default defineNasaMyth({
  slug: "la-cabeza",
  title: "La cabeza",
  mito,
  historia,
  versiones,
  leccion:
    "Compartir una advertencia protege a la comunidad cuando el peligro recorre caminos conocidos.",
  similitudes,
  excerpt:
    "Una cabeza de un diente y una oreja persigue por el olor, espera bajo un árbol y regresa con sus parientes al amanecer.",
  seoTitle: "La cabeza: relato nocturno Nasa",
  seoDescription:
    "Lee el relato Nasa de la cabeza que anda sola, persigue por el olor, teme al amanecer y conserva una casa y parientes.",
  focusKeywords: [
    "La cabeza mito Nasa",
    "cabeza errante Calderas",
    "relatos nocturnos Nasa",
    "mitología de Tierradentro",
    "aparecidos de Colombia",
    "cuentos de Calderas",
  ],
  tags: ["Nasa", "cabeza", "miedo", "sobrenatural", "encuentros sobrenaturales"],
  researchNotes: `NÚCLEO: una sola entrada sin informante individual consignado.
CAUTELA: no reducir a borrachera; la fuente lo niega expresamente.
GEOGRAFÍA: Calderas aproximado.
COMPARACIÓN: Popol Vuh solo por cabeza actuante, sin equivalencia.
IMAGEN: se conserva el par publicado y auditado.`,
});
