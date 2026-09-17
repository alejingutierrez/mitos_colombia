function source({
  title,
  author,
  year,
  type,
  url,
  summary,
  limitation,
}) {
  return {
    title,
    author,
    ...(year ? { year } : {}),
    type,
    url,
    summary,
    limitation,
  };
}

export const chamiSources = {
  reichel1953: source({
    title: "Algunos mitos de los indios Chamí (Colombia)",
    author: "Gerardo Reichel-Dolmatoff",
    year: 1953,
    type: "recolección etnográfica primaria",
    url: "https://redaprende.colombiaaprende.edu.co/recursos/colecciones/34UDQKC25D1/T5RZEZ6LF62/1226",
    summary:
      "Transcribe catorce relatos narrados en castellano por integrantes de un grupo Chamí asentado en Corozal, municipio de Río Frío, Valle del Cauca, durante el reconocimiento de 1945.",
    limitation:
      "El propio autor advierte que no pudo estudiar el contexto cultural de las narraciones; la transcripción en castellano tampoco conserva la ejecución oral en emberá bedea.",
  }),
  redAprendeMetadata: source({
    title: "Ficha de Algunos mitos de los indios chamí",
    author: "Ministerio de Educación Nacional y Biblioteca Nacional de Colombia",
    type: "ficha archivística institucional",
    url: "https://redaprende.colombiaaprende.edu.co/metadatos/recurso/algunos-mitos-de-los-indios-chami/",
    summary:
      "Acredita autoría, rango de páginas, procedencia en Río Frío y licencia del facsímil conservado por la Biblioteca Nacional.",
    limitation:
      "Describe y da acceso al artículo de Reichel-Dolmatoff; no constituye un testimonio narrativo independiente.",
  }),
  chaves1945: source({
    title: "Mitos, tradiciones y cuentos de los indios Chamí",
    author: "Milcíades Chaves Ch.",
    year: 1945,
    type: "recolección etnográfica primaria con informantes identificados",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/235",
    summary:
      "Publica nueve relatos de la expedición de 1945 e identifica por separado cuatro narraciones de Nicolás Henao, Chamí de Balboa, y cinco de Rafael Bailarín, narrador Katío.",
    limitation:
      "El título del artículo puede inducir a atribuir los nueve relatos a Chamí; la introducción obliga a conservar la frontera explícita entre los dos narradores.",
  }),
  onicChami: source({
    title: "Embera Chamí",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos",
    summary:
      "Sitúa territorio, lengua, jaibanismo y diversidad regional Chamí y distingue a los Chamí y Katío dentro del ámbito Eyábida.",
    limitation:
      "Es un perfil panorámico y contemporáneo; no fija una versión canónica ni prueba detalles de cada relato local.",
  }),
  procuraduriaChami: source({
    title: "Caracterización del pueblo Emberá Chamí",
    author: "Procuraduría General de la Nación",
    type: "caracterización institucional",
    url: "https://www.procuraduria.gov.co/portal/media/docs/CaracterizacionCHAMI.pdf",
    summary:
      "Describe asentamientos, organización, lengua y la relación entre los mundos de arriba, humano y subterráneo en una síntesis institucional.",
    limitation:
      "Resume bibliografía previa y no reemplaza las voces localizadas ni las transcripciones primarias.",
  }),
  minInteriorPlan: source({
    title:
      "Diagnóstico unificado de los pueblos Emberá Chamí, Katío, Dóbida y Eperara Siapidara",
    author: "Ministerio del Interior de Colombia y organizaciones Emberá",
    type: "diagnóstico y plan de salvaguarda",
    url: "https://www.mininterior.gov.co/wp-content/uploads/2022/08/pueblos_embera_chami_katio_dobida_eperara_siapidara_-_diagnostico_unificado.pdf",
    summary:
      "Recoge territorio, diferenciación interna, memoria, riesgos y propuestas de salvaguarda construidas en espacios de participación Emberá.",
    limitation:
      "Su escala es interregional y política; sirve para contexto y límites, no como fuente primaria de todos los episodios narrativos.",
  }),
  vascoChami: source({
    title: "Chamí: Literatura de Colombia aborigen, en pos de la palabra",
    author: "Clemente Nengarabe y Luis Guillermo Vasco Uribe",
    year: 1978,
    type: "edición e interpretación etnográfica",
    url: "https://www.luguiva.net/libros/detalle1.aspx?id=227&l=3",
    summary:
      "Relaciona agua, jepá, jenené, Jentserá, mundos y madres de los animales con movimientos territoriales y prácticas Chamí.",
    limitation:
      "La página es una edición digital parcial y su interpretación no debe sustituir la procedencia particular de cada narración.",
  }),
  cardona2026: source({
    title:
      "Tejidos de transformación: oraliteratura y oralitegrafía en la memoria emberá chamí",
    author: "Ana Lucía Cardona Colorado",
    year: 2026,
    type: "investigación académica contemporánea",
    url: "https://revistas.udea.edu.co/index.php/elc/article/view/361435",
    summary:
      "Analiza relatos Chamí del Eje Cafetero y explica la transformación como principio relacional, además de rastrear mediaciones coloniales, cristianas y patriarcales.",
    limitation:
      "Es un estudio interpretativo desde una posición externa y trabaja también fuentes Katío y Emberá de otras regiones con diferencias declaradas.",
  }),
  ferrari2023: source({
    title:
      "Jinu Potó, ¿mito o historia? Desplazamientos del saber y cuestionamientos epistémicos",
    author: "Simone Ferrari",
    year: 2023,
    type: "estudio de narraciones orales y variantes regionales",
    url: "https://dialnet.unirioja.es/descarga/articulo/9145820.pdf",
    summary:
      "Compara versiones recientes del ciclo de Jinu Potó y cartografía sus variantes Dóbida, Katío y Chamí: nacimiento de la pantorrilla, búsqueda de la madre, viaje entre mundos y desenlaces múltiples.",
    limitation:
      "Las dos narraciones centrales del artículo son Dóbida; su utilidad para Chamí es comparativa y no autoriza fusionar variantes regionales.",
  }),
  fernandezJepa: source({
    title: "Matemáticas en la cosmovisión de los indígenas Emberá-Chamí",
    author: "Oscar Fernández Sánchez",
    type: "investigación académica con relato Chamí acreditado",
    url: "https://repositorio.utp.edu.co/bitstreams/05e6f0e7-9219-46da-8847-5552251144bc/download",
    summary:
      "Reproduce la versión de la culebra Jepá narrada por Jaime Wasorna en Santa Cecilia y publicada por Víctor Zuluaga, además de contextualizar universo y territorio Chamí.",
    limitation:
      "Depende de la publicación de Zuluaga de 1991 para el relato de Jaime Wasorna y no contiene el registro sonoro original.",
  }),
  oralitecaJepa2025: source({
    title: "Jepá, historia tradicional Emberá de Mistrató",
    author:
      "Oraliteca de Risaralda, con narración y traducción de Jhon Jairo Siágama",
    year: 2025,
    type: "registro sonoro contemporáneo de voz comunitaria",
    url: "https://www.ivoox.com/jepa-historia-tradicional-embera-de-mistrato-audios-mp3_rf_161732241_1.html",
    summary:
      "Conserva una narración y traducción del docente Jhon Jairo Siágama, de la vereda Jeguadas de Mistrató, y sitúa a Jepá en los ríos y parajes de Alto Jebanía y Jeguadas.",
    limitation:
      "La ficha pública no ofrece una transcripción crítica completa y el audio debe escucharse como una versión local contemporánea, no como sustituto de la narración de Jaime Wasorna.",
  }),
  kienykeUniverse2015: source({
    title:
      "El origen del universo, actuado y narrado por indígenas Embera-Chamí",
    author: "KienyKe, con Alicia Guasorna, Noralba Siagama y Delfina Wazorna",
    year: 2015,
    type: "memoria periodística de una obra en emberá bedea",
    url: "https://www.kienyke.com/entretenimiento/el-origen-del-universo-actuado-y-narrado-por-indigenas-embera-chami",
    summary:
      "Acredita a tres sabedoras de Pueblo Rico y Mistrató y registra el comienzo de una versión en la que Dachicore crea ocho mundos y a Karabi.",
    limitation:
      "La nota resume una puesta en escena y no publica la obra completa ni una transcripción crítica.",
  }),
  dabraccioChami: source({
    title: "La mitología Chamí: el origen",
    author: "Guillermo Alejandro D'Abbraccio Kreutzer",
    type: "estudio académico de cosmovisión y sistema jurídico",
    url: "https://repositorio.pucp.edu.pe/bitstreams/c705b229-5dba-45fc-9e10-451e7f6928a2/download",
    summary:
      "Sintetiza fuentes de Víctor Zuluaga sobre ocho y nueve mundos, el origen de los animales, la reciprocidad y la relación entre control social, espíritus y territorio.",
    limitation:
      "Es una reconstrucción analítica basada en bibliografía anterior; algunas categorías morales requieren contraste con estudios contemporáneos.",
  }),
  acunaSevenHeads2015: source({
    title:
      "De la conservación del suelo al cuidado de la tierra: una propuesta ético-afectiva",
    author: "Iván Acuña Navarro y colaboradores",
    year: 2015,
    type: "artículo académico con transcripción territorial",
    url: "https://doi.org/10.1590/1809-4422ASOC802V1832015",
    summary:
      "Publica la leyenda de la serpiente de siete cabezas conservada por Emberá Chamí de La Montaña, Caldas, y la relaciona con la erosión de El Salado.",
    limitation:
      "La narración se reproduce desde Julián Bueno Rodríguez (1988); la lectura ecológica posterior pertenece a los autores del artículo.",
  }),
  improntaLomaprieta2009: source({
    title: "Occidente de Caldas: composición étnica y formación regional",
    author: "Albeiro Valencia Llano",
    year: 2009,
    type: "historia regional con tradición de Lomaprieta",
    url: "https://filedn.com/ld7H5po5QNfB2tIYyyCQhm7/Gonzalo-public/Repositorio%20Revista%20Impronta%20ACH/Academia%20Caldense%20de%20Historia-%20Revista%20Impronta%2007%20de%202009.pdf",
    summary:
      "Reproduce desde Bueno Rodríguez la leyenda de Lomaprieta en la que gotas de las manos de Dios se vuelven ángeles y espíritus terrestres, acuáticos, aéreos y selváticos.",
    limitation:
      "Es una fuente regional secundaria; conserva una versión cristianizada y no acredita el nombre de la persona que la narró originalmente.",
  }),
};

export const defaultChamiSourceKeys = [
  "reichel1953",
  "redAprendeMetadata",
  "chaves1945",
  "cardona2026",
  "onicChami",
  "procuraduriaChami",
  "vascoChami",
];

export function pickChamiSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = chamiSources[key];
    if (!selected) {
      throw new Error(`Fuente Chamí desconocida: ${key}`);
    }
    return selected;
  });
}
