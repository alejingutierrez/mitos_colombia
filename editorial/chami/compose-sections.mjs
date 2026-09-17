export function composeRioFrioHistory({
  number,
  sourceFocus,
  chavesRelation,
  editorialDecision,
}) {
  return `${sourceFocus}

La fuente de control es el relato número ${number} de “Algunos mitos de los indios Chamí”, publicado por Gerardo Reichel-Dolmatoff en 1953 a partir de un reconocimiento realizado en 1945. El autor situó al grupo narrador en la vereda Corozal del municipio de Río Frío, Valle del Cauca. También dejó dos advertencias decisivas: las personas narraron en castellano y él transcribió sus palabras sin cambiarlas, pero no tuvo tiempo suficiente para comprender el contexto cultural completo de cada historia. Por eso esta edición distingue lo efectivamente contado de las explicaciones posteriores y no presenta la transcripción como una versión definitiva para todas las comunidades Chamí.

${chavesRelation}

${editorialDecision} La edición conserva la secuencia y las ambigüedades de la fuente, corrige adornos añadidos en la ficha anterior y evita atribuir pensamientos, ceremonias o símbolos que el registro no menciona. El perfil de la ONIC y la caracterización institucional ayudan a ubicar lengua, territorio y jaibanismo, pero se usan como contexto, no como prueba de los episodios. El artículo contemporáneo de Ana Lucía Cardona permite leer las transformaciones sin reducirlas automáticamente a una moraleja occidental.`;
}

export function composeRioFrioVersions({
  primaryVariant,
  comparativeVariant,
  boundary,
}) {
  return `La versión principal de esta página es la de Río Frío publicada en 1953. ${primaryVariant}

${comparativeVariant}

La comparación se limita a diferencias comprobables: personajes, orden de las acciones, objetos, lugares y desenlace. No se combinan episodios para fabricar una narración “más completa”, porque una variante breve también conserva una decisión narrativa propia. ${boundary}

La forma publicada pasó por el castellano de mediados del siglo XX y por la ortografía de quien transcribió. Esta edición normaliza puntuación y vuelve legible la secuencia, pero conserva los nombres registrados y señala cuando una traducción quedó pendiente. Tampoco convierte las notas comparativas de los investigadores en palabras de los narradores. Así se puede reconocer un ciclo compartido sin borrar qué versión proviene de Río Frío, cuál procede de otro narrador y qué interpretación pertenece a una lectura posterior.`;
}

export function composeSimilarities({
  internalComparison,
  broaderComparison,
}) {
  return `Dentro del corpus Chamí revisado, ${internalComparison} La semejanza sirve para recorrer el archivo, no para declarar que dos personajes son idénticos ni que una página completa a la otra.

${broaderComparison}

Las comparaciones externas se mantienen en el nivel de los motivos narrativos: viaje, transformación, astucia, reciprocidad, cautiverio, oscuridad o paso entre mundos. Compartir uno de esos motivos no demuestra parentesco histórico, influencia directa ni una supuesta mitología universal. La diferencia decisiva está en la lengua, el territorio, los nombres, las relaciones sociales y la situación concreta de cada narración. Por eso esta sección privilegia primero las resonancias internas del corpus Chamí y solo después señala paralelos más amplios con una advertencia explícita sobre sus límites.`;
}

export function composeRegionalHistory({
  sourceFocus,
  evidenceChain,
  editorialDecision,
}) {
  return `${sourceFocus}

${evidenceChain}

${editorialDecision}

La revisión aplica una jerarquía de evidencia: primero la voz o transcripción localizada; después la edición que permite identificar autor, narrador, lugar y fecha; luego los estudios que comparan variantes; finalmente las caracterizaciones territoriales que aportan contexto. Ninguna fuente panorámica se usa para rellenar silencios de la narración. Cuando el nombre del narrador original no está disponible, la página lo dice; cuando una versión llegó a través de una obra secundaria, también.

La ubicación geográfica identifica el territorio documentado y no un punto ceremonial exacto. Las fechas corresponden a la narración, publicación o investigación disponible, no al origen remoto del relato. Esta distinción importa porque una tradición puede ser antigua y, al mismo tiempo, llegar al archivo mediante una versión reciente, traducida o reelaborada. La transparencia permite conservarla sin convertir una interpretación editorial en tradición oral anónima.`;
}

export function composeRegionalVersions({
  versionDetail,
  boundaryDetail,
  editorialRelation,
}) {
  return `${versionDetail}

${boundaryDetail}

${editorialRelation}

La edición no busca escoger una versión como si invalidara las demás. Separa sus procedencias, mantiene los nombres con que cada fuente identifica a los personajes y evita trasladar episodios de una región a otra solo porque comparten una figura como Karagabí, Jinu Potó o la jepá.

Las diferencias de grafía se conservan cuando permiten reconocer la fuente y se explican cuando podrían sugerir personajes distintos. También se separa el relato de las lecturas antropológicas, ambientales o literarias construidas después. Esa separación hace visible el movimiento de la memoria sin fabricar una síntesis que nadie narró ni convertir la variación en un error que deba corregirse.`;
}
