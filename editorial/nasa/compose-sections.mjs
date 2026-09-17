export function composeNasaHistory({
  informants,
  sourceDetail,
  editorialDecision,
}) {
  return `El registro que sostiene esta página fue publicado por Segundo Bernal Villa en 1953 dentro de “Mitología y cuentos de la parcialidad de Calderas, Tierradentro”. La investigación no presenta un panteón cerrado: reúne relatos contados por habitantes concretos y distingue, cuando las hubo, varias versiones o modalidades de una misma narración. La compilación de Eugenia Villa Posse de 1993 permite cotejar el texto y conserva la atribución bibliográfica.

${informants} Bernal trabajó casi siempre con el intérprete Marco Antonio Penkue; esa mediación entre nasa yuwe y castellano debe permanecer visible. La prosa publicada es breve, a veces elíptica, y responde tanto a las voces de Calderas como a las decisiones de traducción y edición de mediados del siglo XX.

${sourceDetail}

${editorialDecision} Esta revisión no presenta el texto de 1953 como una descripción total del pueblo Nasa actual. Las fuentes del Ministerio de las Culturas, la ONIC, el CRIC y estudios recientes ayudan a situar lengua, territorio, memoria y continuidad, pero no se usan para completar con invenciones los silencios del cuento. Cuando la fuente no permite ubicar un episodio con precisión, el mapa señala de forma aproximada Calderas o Tierradentro y así se declara en las notas de investigación.`;
}

export function composeNasaVersions({
  variantDetail,
  relationDetail,
}) {
  return `${variantDetail}

Bernal advirtió que su corpus contiene “varias versiones de un mismo texto” y también modalidades diferentes de una misma versión. Por eso esta página no convierte cada divergencia en una secuencia continua ni escoge una como supuesta forma definitiva. Cuando el artículo identifica informantes distintos, la diferencia se atribuye; cuando solo ofrece un relato, se conserva ese límite y no se fabrican alternativas.

${relationDetail} La edición actual separa el núcleo narrativo, la historia documental y la comparación. Los nombres propios y topónimos siguen la grafía de la publicación consultada, con cautela ante erratas o castellanizaciones. Las conexiones con Juan Tama, el Trueno, Llíban, Juan Chiracol, Chautéh y Santo Tomás se explican como relaciones dentro del corpus de Calderas, no como identidades universales aceptadas por todas las comunidades Nasa.`;
}

export function composeNasaSimilarities({
  comparisonDetail,
  internalDetail,
}) {
  return `${comparisonDetail}

${internalDetail}

La comparación sirve para reconocer problemas narrativos compartidos —el origen del agua, la transformación, el fuego, la defensa del territorio o el encuentro nocturno— sin convertir personajes de tradiciones diferentes en equivalentes. No hay evidencia de copia ni de un origen único. La edición privilegia primero la red interna del corpus Nasa y usa fuentes externas únicamente para mostrar cómo otras sociedades han formulado preguntas parecidas con lenguas, historias y responsabilidades propias.`;
}
