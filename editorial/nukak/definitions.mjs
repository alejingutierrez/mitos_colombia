import { defineNukakMyth } from "./define-editorial-myth.mjs";

const narrativeBoundary =
  "Esta versión editorial parafrasea la narración publicada de Embe. No añade diálogos, vestuario, ceremonias, coordenadas precisas ni explicaciones espirituales ausentes; tampoco presenta la traducción académica como la única voz Nɨkak.";

const records = [
  defineNukakMyth({
    slug: "creacion-nukak-maku",
    title: "Machoroko y el nacimiento Nɨkak",
    summary:
      "Machoroko abre un paso desde bak; Aukurɨbo y los grupos Nɨkak salen, se separan junto a los grandes ríos y vuelven a formar territorio.",
    excerpt:
      "Machoroko abre un paso desde bak; Aukurɨbo y los grupos Nɨkak salen, se separan junto a los grandes ríos y vuelven a formar territorio.",
    tags: ["Machoroko", "Aukurɨbo", "bak", "nacimiento Nɨkak"],
    mito: `Antes de vivir en este mundo, los Nɨkak habitaban bak, el mundo de abajo. Allí se movían con sus familias, sembraban y cuidaban semillas, de una manera semejante a la vida que después llevarían en la selva. Pero otros seres los perseguían, los atacaban y querían impedirles continuar.

Machoroko vivía en yê, este mundo. Escuchó el ruido que venía desde abajo y buscó su origen. Cerca de la unión de los grandes ríos Guaviare e Inírida escarbó la tierra con uñas de oso hormiguero hasta abrir un paso entre bak y yê. Los Nɨkak no salieron de inmediato. Se ocultaban de sus perseguidores y prepararon la entrada para dificultar que estos pudieran seguirlos.

El primero que atravesó el paso fue Aukurɨbo, la Gente de Árbol, recordado como un mayor y jefe verdadero. Al llegar sintió frío y trató de calentarse, pero no tenía fuerza para continuar el camino. Se transformó primero en oruga y luego en mariposa. Así pudo regresar a bak con parte de su familia. Su episodio recuerda que la apertura del paso no obligó a todos a quedarse en el mismo mundo.

Después salieron pequeños grupos. Algunos permanecieron abajo y otros se reunieron en yê. La Gente Tucán abrió camino y orientó el avance. Cerca de la confluencia de los ríos descansaron juntos; luego llegó el momento de separarse. Unos siguieron el curso del Inírida y otros avanzaron por el Guaviare. En el recorrido, distintos mayores guiaron a sus familias, eligieron caños, lagunas y sectores donde detenerse, y dieron nombre a lugares asociados con sus pasos.

Los grupos llevaron semillas desde bak: chontaduro, tabaco, caña, totumo, plátano, yuca dulce y amarga, maíz y ñame. Las cargaban con canastos y las sembraban cuando decidían quedarse en un territorio. Así, salir a este mundo no fue un acto instantáneo de creación. Fue abrir un camino, proteger a la familia, separarse sin dejar de reconocerse, sembrar y volver a formar la vida.

Más adelante, la llegada y la violencia de otros pobladores obligaron a varios grupos a apartarse de nuevo. Los mayores escogieron lugares donde pudieran vivir con tranquilidad y recuperar sus familias. Por eso el nacimiento Nɨkak también es una memoria de movimiento, decisión colectiva y continuidad.`,
    historyCore:
      "La ficha heredada se titulaba «Creación» y atribuía a Idn Kamni una creación con saliva, tierra y Río de Leche. Dany Mahecha demuestra que esos rasgos pertenecen al origen Kakua, no al Nɨkak. La URL se conserva para no romper enlaces, pero el relato, el título, el resumen y la iconografía se corrigen por completo.",
    versionCore:
      "Embe enlaza trece momentos desde la vida en bak hasta el establecimiento territorial. Kerayi narró otra versión con diferencias en algunos nombres de quienes guiaron la migración. Esta edición no fuerza concordancias ni decide cuál nombre es más auténtico; sigue a Embe y registra la variante.",
    similarityCore:
      "No se presenta el ciclo como equivalente al de la Anaconda-Canoa, el Río de Leche o Idn Kamni. Esos elementos estaban en la ficha anterior por una conflación entre Nɨkak y Kakua que la fuente de 2024 permite corregir.",
    leccion:
      "Nacer como pueblo es abrir caminos, proteger la familia y volver habitable el territorio.",
    sceneHorizontal:
      "familias avanzan desde una abertura entre capas de mundo hacia dos ríos que se separan",
    sceneVertical:
      "Aukurɨbo pasa de figura humana a oruga y mariposa entre bak y yê mientras Machoroko abre el camino",
    researchNotes:
      "CORRECCIÓN INTEGRAL: se conserva el slug histórico, se retira la atribución Kakua a Idn Kamni y se reemplazan las dos imágenes físicas y semánticamente incorrectas.",
    seoTitle: "Machoroko y el nacimiento Nɨkak | Guaviare",
    seoDescription:
      "Relato Nɨkak documentado sobre Machoroko, Aukurɨbo, la salida desde bak y los caminos por los ríos Guaviare e Inírida.",
    focusKeywords: [
      "Machoroko y el nacimiento Nɨkak",
      "mito Nɨkak",
      "Aukurɨbo",
      "mundo bak",
      "Guaviare e Inírida",
    ],
  }),
];

for (const record of records) {
  record.mito = `${record.mito}\n\n${narrativeBoundary}`;
  record.content = [
    `Mito\n${record.mito}`,
    `Historia\n${record.historia}`,
    `Versiones\n${record.versiones}`,
    `Lección\n${record.leccion}`,
    `Similitudes\n${record.similitudes}`,
  ].join("\n\n");
}

export default records;
