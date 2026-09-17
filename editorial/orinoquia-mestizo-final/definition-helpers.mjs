import { defineOrinoquiaMestizoFinalMyth } from "./define-editorial-myth.mjs";

const vargasMitoFrame = `El episodio pertenece a una serie literaria en la que Getulio Vargas Barón convierte paisajes, habla regional, recuerdos familiares y motivos folclóricos en cuentos propios. Esta atribución cambia la lectura: los diálogos, nombres, parentescos, fechas y desenlaces son elementos de una obra firmada, aunque aprovechen imaginarios reconocibles del Llano. No se presentan como transcripción literal de un informante ni como creencia uniforme de Casanare, Meta, Arauca y Vichada.

La revisión conserva la acción central porque explica la trayectoria editorial de la ruta, pero evita convertir una exageración humorística, una escena violenta o una invención sobrenatural en descripción de todas las personas llaneras. Cuando el cuento introduce comunidades indígenas, medicina, historia colonial, género o muerte, esas capas se nombran desde su condición autoral. El resultado es un relato de literatura llanera: dialoga con la región, pero no habla por cada comunidad que vive en ella.`;

const vargasHistoryFrame = `El texto apareció en 1996 dentro de Cuentos, mitos y leyendas del llano, libro de Getulio Vargas Barón publicado por CORPES Orinoquía. El ejemplar completo digitalizado por la Biblioteca Virtual del Banco de la República permite revisar la secuencia y la tabla de contenidos. Los catálogos del Banco, Cervantes, la Biblioteca Digital de Bogotá, WorldCat y Google Books controlan la identidad bibliográfica. Dos notas de El Tiempo documentan su recepción contemporánea como un conjunto de once cuentos, no como un archivo de testimonios anónimos.

Esa diferencia es decisiva. El libro puede reelaborar memorias, lugares y maneras de contar, pero la firma y la composición pertenecen al autor. Por eso la ficha no usa el argumento para probar rituales, genealogías, delitos, diagnósticos, accidentes ni apariciones. Los datos históricos internos requieren corroboración externa; las escenas que no la tienen se atribuyen al cuento. La ruta permanece porque la obra forma parte de la historia literaria del Llano y de la propia colección del sitio, ahora con una procedencia más clara.`;

const vargasVersionsFrame = `La versión de referencia es la publicada por Vargas Barón. Los otros siete recursos seleccionados son controles bibliográficos o reseñas del mismo libro; no son ocho narradores independientes. En consecuencia, la revisión no fabrica una falsa mayoría documental ni afirma que cada detalle se repita por toda la Orinoquía. El título, los personajes y la secuencia se conservan cuando pertenecen al impreso, mientras que las explicaciones históricas o culturales se limitan a lo que realmente puede sostenerse.

Una obra firmada también puede circular oralmente, ser adaptada en escuelas o confundirse después con folclor antiguo. Esa recepción futura no borra la autoría de 1996. Las variantes razonables son lecturas y resúmenes del cuento, cambios de énfasis en el humor o la moraleja y comparaciones con motivos más amplios; no autorizan a convertirlo retroactivamente en tradición prehispánica, crónica judicial o memoria colectiva sin informantes identificados.`;

const baqueroMitoFrame = `El relato pertenece a Los cuentos de Pascual, obra firmada por Alberto Baquero Nariño. Pascual habla con humor, exageración y crudeza, y el libro explora lo que su autor llama mitos de transición: figuras que cambian cuando circulan entre caminos, poblados, medios de transporte y nuevas relaciones sociales del piedemonte. Esa propuesta literaria ayuda a entender la transformación, pero no vuelve etnográfico cada diálogo ni convierte las conductas del narrador en reglas de la cultura llanera.

La revisión conserva el núcleo sobrenatural y su arraigo espacial, pero elimina insultos y reduce escenas degradantes. Coerción sexual, misoginia, homofobia, violencia, pseudociencia y remedios peligrosos se nombran como problemas del texto de 1988, no como picardía admirable. Los personajes y orígenes que Pascual explica pertenecen a la ficción hasta que otra fuente los documente. Así, la ruta permite leer cómo un escritor representó la imaginería del piedemonte y, al mismo tiempo, ofrece al lector una frontera clara entre circulación folclórica, sátira autoral y daño real.`;

const baqueroHistoryFrame = `Los cuentos de Pascual: mitos y leyendas del piedemonte llanero fue publicado en Villavicencio por Editorial Siglo XX en 1988. El ejemplar digitalizado por la Biblioteca Virtual del Banco de la República contiene ocho narraciones y un preámbulo sobre la imaginería popular. La ficha institucional las describe como cuentos y cuentería mediante los cuales Alberto Baquero Nariño explora conocimientos, creencias y lenguaje regional. Cervantes y WorldCat confirman la identidad bibliográfica; otras fuentes muestran la recepción del autor y de su obra.

La palabra “popular” no elimina la mediación. Baquero selecciona, organiza, fecha e inventa escenas, y Pascual funciona como narrador literario. El preámbulo reconoce que los relatos móviles combinan lugares y tiempos, pero no publica fichas de informantes para cada argumento. Por ello esta revisión atribuye la composición, distingue motivos reconocibles de explicaciones inventadas y evita presentar la voz masculina, sexualizada o violenta del libro como retrato total del piedemonte. El valor documental reside en cómo la literatura de 1988 representó ese imaginario, no en certificar cada episodio como sucedido.`;

const baqueroVersionsFrame = `La versión controlable es la del libro de 1988. La ficha del Banco, Cervantes y WorldCat prueban publicación; los perfiles y estudios regionales contextualizan a Baquero, pero no son recolecciones independientes del mismo argumento. La republicación digital del Tirapiedra confirma recepción posterior y muestra cómo un cuento puede volver a circular como “mito y leyenda”. Esa circulación se documenta sin ocultar el punto de partida impreso.

El propio preámbulo propone que una figura cambia al desplazarse del campo al pueblo o del camino antiguo a la carretera. La revisión conserva esa idea de transición, separando tres niveles: motivo folclórico, explicación que Pascual le atribuye y escena escrita por el autor. No hay base para declarar una fecha histórica exacta, una víctima real o un método eficaz de defensa. Las versiones se presentan como variaciones narrativas y no como instrucciones sobre salud, sexualidad, seguridad o justicia.`;

export function defineVargasLiteraryMyth(input) {
  return defineOrinoquiaMestizoFinalMyth({
    ...input,
    mito: `${input.plot}\n\n${vargasMitoFrame}`,
    historia: `${vargasHistoryFrame}\n\n${input.context}`,
    versiones: `${vargasVersionsFrame}\n\n${input.variants}`,
    researchNotes: `LITERATURA FIRMADA: Getulio Vargas Barón, 1996. ${input.boundary}`,
  });
}

export function defineBaqueroLiteraryMyth(input) {
  return defineOrinoquiaMestizoFinalMyth({
    ...input,
    mito: `${input.plot}\n\n${baqueroMitoFrame}`,
    historia: `${baqueroHistoryFrame}\n\n${input.context}`,
    versiones: `${baqueroVersionsFrame}\n\n${input.variants}`,
    researchNotes: `LITERATURA FIRMADA: Alberto Baquero Nariño, 1988. ${input.boundary}`,
  });
}
