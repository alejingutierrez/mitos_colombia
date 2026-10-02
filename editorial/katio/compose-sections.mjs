export function composeArchiveHistory({
  sourceFocus,
  evidenceDetail,
  editorialDecision,
}) {
  return `${sourceFocus}

La base histórica es la síntesis que Fray Severino de Santa Teresa publicó en 1924 sobre los llamados entonces “Catíos de Urabá”. Para varios episodios existe además un paralelo en las notas de campo editadas por Henri Rochereau en 1929, reunidas por religiosas en el occidente de Antioquia. Esas fuentes permiten recuperar secuencias, nombres y diferencias, pero no son una voz comunitaria transparente: pasaron por traducción, selección misionera y categorías cristianas, y casi nunca acreditan a la persona que narró. ${evidenceDetail}

La palabra “Catío” tampoco puede proyectarse sin cautela desde esos libros hacia toda comunidad Emberá Katío actual. Estudios históricos muestran que la misión ayudó a consolidar una regionalización amplia en Urabá, el occidente antioqueño y Chocó. Por eso la página habla de corpus histórico Katío cuando la atribución de la fuente lo permite, distingue los relatos actuales del Alto Andágueda y evita convertir una variante localizada en doctrina común.

${editorialDecision} La edición conserva la URL y vuelve legible la narración, pero retira episodios inventados, moralizaciones posteriores y detalles visuales que no aparecen en el registro. Las caracterizaciones de organizaciones indígenas e instituciones se usan para territorio y contexto contemporáneo, no para rellenar los silencios del relato antiguo.`;
}

export function composeCommunityHistory({
  sourceFocus,
  evidenceDetail,
  editorialDecision,
}) {
  return `${sourceFocus}

La fuente principal es Dachi Chiuu, un proceso de memoria realizado con comunidades Emberá Katío del Alto Andágueda y publicado por el Centro Nacional de Memoria Histórica. Su valor no reside solamente en resumir un argumento: acredita un territorio, ofrece audio en emberá y español y presenta el relato dentro de una memoria colectiva contemporánea. ${evidenceDetail}

Esta procedencia se mantiene separada del archivo misionero de 1924 y 1929. Que ciertos nombres dialoguen con Caragabí, el jaibanismo o los mundos Emberá no autoriza a combinar escenas de Urabá, Río Verde y el Alto Andágueda. Las organizaciones indígenas y el diagnóstico de salvaguarda ayudan a reconocer la diversidad territorial Katío y a evitar que una versión local sea presentada como credo uniforme.

${editorialDecision} La reescritura conserva la secuencia pública y evita fingir una transcripción literal cuando solo se dispone de la pieza editorial multimedia. No añade ceremonias, diálogos ni explicaciones cosmológicas para completar los silencios. También distingue la voz comunitaria del encuadre institucional del micrositio, de modo que el lector pueda saber qué se narra, dónde se narra y cómo llegó esa versión a esta página.`;
}

export function composeVersions({
  mainVariant,
  contrastVariant,
  boundary,
}) {
  return `La versión principal de esta página mantiene una procedencia concreta. ${mainVariant}

${contrastVariant}

Las diferencias se describen en personajes, acciones, lugares, objetos y desenlaces. No se mezclan para fabricar una versión supuestamente completa, porque la variación puede conservar decisiones de narradores y comunidades diferentes. ${boundary}

También cambian las grafías: Caragabí o Karagabí, Tutruicá o Tutruicá, Baha o Bajía y otros nombres fueron escritos por oídos y sistemas ortográficos distintos. Esta edición mantiene la forma más reconocible del expediente y explica las alternativas cuando importan, sin tratarlas automáticamente como seres diferentes.

Las comparaciones históricas están limitadas por la mediación. Las notas de 1929 registran contradicciones entre grupos; el libro de 1924 tiende a armonizarlas y a traducirlas al vocabulario cristiano. Las fuentes contemporáneas del Alto Andágueda, en cambio, tienen autoría colectiva y otro contexto político. Presentarlas juntas sirve para mostrar movimiento y frontera, no para decidir que una versión antigua invalida a una actual.`;
}

export function composeSimilarities({
  internalComparison,
  broaderComparison,
}) {
  return `Dentro del corpus revisado, ${internalComparison} Esa cercanía permite recorrer personajes, lugares y motivos compartidos, pero no demuestra que dos títulos sean duplicados ni que una historia complete automáticamente a la otra.

${broaderComparison}

Las semejanzas externas se limitan a motivos narrativos como creación, viaje al cielo, transformación, parentesco, memoria de guerra, origen de alimentos o relación con la tormenta. Encontrar uno de esos motivos en otra tradición no prueba un origen común, una influencia directa ni una mitología universal. La diferencia permanece en la lengua, el territorio, los nombres, la organización social y la situación en que cada historia fue narrada o escrita.

Por eso la comparación comienza por las resonancias internas y conserva las fronteras. Dabeiba no se vuelve Dobaida por compartir fenómenos atmosféricos; Herupotoarra no se fusiona con todas las versiones Emberá del nacido de la pierna; y una escalera al cielo no convierte el relato en una copia bíblica. El paralelo ayuda a leer, no reemplaza la procedencia.`;
}
