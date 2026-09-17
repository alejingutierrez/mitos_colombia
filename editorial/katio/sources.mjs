function source({ title, author, year, type, url, summary, limitation }) {
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

export const katioSources = {
  severino1924: source({
    title:
      "Creencias, ritos, usos y costumbres de los indios Catíos de la Prefectura Apostólica de Urabá",
    author: "Fray Severino de Santa Teresa",
    year: 1924,
    type: "síntesis misionera histórica",
    url: "https://www.luguiva.net/libros/detalle1.aspx?id=291&l=3",
    summary:
      "Reúne el corpus histórico más amplio consultado sobre Caragabí, Genené, Antomiá, Séver, los Domicó, la escalera, Herupotoarra, Baha, Aribamia, Dabeiba, Ancastor y los Bibidigomia.",
    limitation:
      "Fue escrita desde una misión católica, emplea categorías racistas y cristianas de su época y no identifica de manera sistemática narradores, lugares ni variantes.",
  }),
  rochereau1929: source({
    title:
      "Nociones sobre creencias, usos y costumbres de los Catíos del occidente de Antioquia",
    author: "Henri Rochereau",
    year: 1929,
    type: "notas de campo misioneras",
    url: "https://www.persee.fr/doc/jsa_0037-9174_1929_num_21_1_3658",
    summary:
      "Publica notas reunidas por religiosas entre grupos del occidente antioqueño y conserva variantes de Caragabí, Genené, Antomiá, Costé, Séver, Herupotoarra, la escalera, Aribamia y el cerro Musinga.",
    limitation:
      "La recolección pasó por traducción y edición misionera; el artículo admite contradicciones entre grupos y usa categorías coloniales que esta edición no reproduce como voz comunitaria.",
  }),
  villa1993: source({
    title: "Mitos y leyendas de Colombia, volumen III",
    author: "Eugenia Villa Posse",
    year: 1993,
    type: "compilación bibliográfica",
    url: "https://www.flacso.edu.ec/biblio/catalog/resGet.php?resId=44622",
    summary:
      "Facilita una transcripción consultable de capítulos de Severino 1924 y distingue el relato Chamí de Surranabe del conjunto atribuido a los antiguos Catíos de Urabá.",
    limitation:
      "Reproduce sin suficiente crítica el lenguaje misionero de la obra de 1924 y no constituye una fuente oral independiente.",
  }),
  bicanGuide: source({
    title: "Guía bibliográfica sobre pueblos Emberá y Wounaan",
    author: "Biblioteca Luis Ángel Arango y Banco de la República",
    type: "guía bibliográfica institucional",
    url: "https://www.antioquia.gov.co/images/PDF2/gerencia-indigena/Documentos_tecnicos_academicos/Guia_Embera-Waunaan.pdf",
    summary:
      "Identifica ediciones, autores y localizaciones, incluido El hombre que no podía cazar, narrado por Zaquidiama Domicó de Río Verde.",
    limitation:
      "Es una guía y resumen de fuentes; no reemplaza la publicación original ni el registro oral.",
  }),
  clacsoRegionalization: source({
    title: "Misiones, región y clasificación indígena en Urabá",
    author: "Investigación académica compilada por CLACSO",
    type: "análisis histórico crítico",
    url: "https://biblioteca-repositorio.clacso.edu.ar/libreria_cm_archivos/pdf_2218.pdf",
    summary:
      "Explica que la categoría regional Catío fue parcialmente consolidada por el proyecto misionero en el occidente de Antioquia, Urabá y Chocó.",
    limitation:
      "Analiza la producción histórica de categorías; no ofrece una versión narrativa de los mitos.",
  }),
  restrepo2019: source({
    title: "Civilizar para colonizar en Urabá, Antioquia, 1918-1940",
    author: "Eduardo Restrepo",
    year: 2019,
    type: "estudio histórico crítico",
    url: "https://www.researchgate.net/publication/330453147_Civilizar_para_colonizar_en_Uraba_Antioquia_Colombia_1918-1940",
    summary:
      "Sitúa las prácticas misioneras y colonizadoras dentro de las cuales se produjeron varias fuentes escritas del corpus.",
    limitation:
      "Sirve como crítica de la mediación documental y no como testimonio de los episodios narrativos.",
  }),
  onicKatio: source({
    title: "Pueblos indígenas de Colombia",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos",
    summary:
      "Ofrece contexto contemporáneo sobre pueblos, territorios y diversidad Emberá sin reducirlos a una sola tradición.",
    limitation:
      "Es un directorio panorámico y no fija versiones canónicas de relatos históricos.",
  }),
  gobiernoMayorKatio: source({
    title: "Emberá Katío",
    author: "Gobierno Mayor de Autoridades Tradicionales Indígenas",
    type: "perfil de organización indígena",
    url: "https://www.gobiernomayor.org.co/embera-katio/",
    summary:
      "Ubica comunidades Katío en Chocó, el noroccidente antioqueño y las cuencas altas del Sinú y San Jorge.",
    limitation:
      "Aporta contexto territorial contemporáneo, no una transcripción de los mitos del archivo de 1924.",
  }),
  minInteriorPlan: source({
    title:
      "Diagnóstico unificado de los pueblos Emberá Chamí, Katío, Dóbida y Eperara Siapidara",
    author: "Ministerio del Interior y organizaciones Emberá",
    type: "diagnóstico y plan de salvaguarda",
    url: "https://www.mininterior.gov.co/wp-content/uploads/2022/08/pueblos_embera_chami_katio_dobida_eperara_siapidara_-_diagnostico_unificado.pdf",
    summary:
      "Documenta diferenciación interna, territorios, memoria y riesgos contemporáneos desde espacios participativos Emberá.",
    limitation:
      "Su escala interregional no permite atribuir cada relato antiguo a una comunidad contemporánea específica.",
  }),
  cnmhDachi: source({
    title: "Dachi Chiuu: nuestra memoria",
    author: "Comunidades Emberá Katío del Alto Andágueda y CNMH",
    type: "memoria comunitaria multimedia",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/",
    summary:
      "Presenta una memoria contemporánea construida con grupos del Alto Andágueda, con audio en emberá y español.",
    limitation:
      "Representa un proceso comunitario localizado y no sustituye versiones de otras comunidades Katío.",
  }),
  cnmhCaragabi: source({
    title: "Karagabí",
    author: "Comunidades Emberá Katío del Alto Andágueda y CNMH",
    type: "relato comunitario multimedia",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/caragabi/",
    summary:
      "Conserva una versión contemporánea del Alto Andágueda sobre Karagabí y el orden del mundo.",
    limitation:
      "Es una versión local contemporánea; no debe fusionarse en silencio con la síntesis de Urabá de 1924.",
  }),
  cnmhCobaima: source({
    title: "Cobaima",
    author: "Comunidades Emberá Katío del Alto Andágueda y CNMH",
    type: "relato comunitario multimedia",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/cobaima/",
    summary:
      "Narra desde el Alto Andágueda la labor de Cobaima, primer jaibaná, en el ordenamiento de seres y lugares del territorio.",
    limitation:
      "La página editorial no debe convertir su resumen en una voz ancestral homogénea para todo el pueblo Katío.",
  }),
  cnmhAmor: source({
    title: "El amor prohibido de Humántahu y Gedeco",
    author: "Comunidades Emberá Katío del Alto Andágueda y CNMH",
    type: "relato comunitario multimedia",
    url: "https://micrositios.centrodememoriahistorica.gov.co/dachichiuu/amor-prohibido/",
    summary:
      "Relata una versión contemporánea del origen del sol y la luna desde voces del Alto Andágueda.",
    limitation:
      "Su procedencia localizada debe mantenerse y no mezclarse con otros ciclos solares Emberá.",
  }),
  cardonaHunter: source({
    title: "El hombre que no podía cazar",
    author: "Antonio María Cardona; narración de Zaquidiama Domicó",
    year: 1990,
    type: "relato con narrador y territorio identificados",
    url: "https://www.luguiva.net/admin/pdfs/Guia%20Embera-Waunaan.pdf",
    summary:
      "La guía bibliográfica acredita el relato a Zaquidiama Domicó, principal de Río Verde, y lo resume como una enseñanza sobre el respeto debido a los animales del monte.",
    limitation:
      "El enlace público consultado es la referencia bibliográfica y su resumen, no el facsímil completo de las páginas 165 a 168.",
  }),
  chaves1945: source({
    title: "Mitos, tradiciones y cuentos de los indios Chamí",
    author: "Milcíades Chaves Ch.",
    year: 1945,
    type: "recolección etnográfica con narradores identificados",
    url: "https://publicaciones.icanh.gov.co/index.php/picanh/catalog/book/235",
    summary:
      "Distingue relatos de Nicolás Henao, Chamí, y Rafael Bailarín, Katío; permite corregir la frontera de Surranabe.",
    limitation:
      "El título general puede inducir a mezclar ambos corpus si no se atiende a la atribución individual.",
  }),
  ferrari2023: source({
    title:
      "Jinu Potó, ¿mito o historia? Desplazamientos del saber y cuestionamientos epistémicos",
    author: "Simone Ferrari",
    year: 2023,
    type: "estudio contemporáneo de variantes Emberá",
    url: "https://dialnet.unirioja.es/descarga/articulo/9145820.pdf",
    summary:
      "Compara versiones regionales del ciclo del nacido de la pierna y muestra cambios en nacimiento, adversarios, viajes y desenlaces.",
    limitation:
      "La comparación no autoriza a fundir las versiones Katío, Chamí y Dóbida en una sola narración.",
  }),
  trimborn1953: source({
    title: "Dobaida o Dobaiba: diosa de las tormentas",
    author: "Hermann Trimborn",
    year: 1953,
    type: "estudio histórico de fuentes coloniales",
    url: "https://revistas.udea.edu.co/index.php/boletin/article/view/6481",
    summary:
      "Examina la Dobaida de las fuentes sobre los Cueva del bajo Atrato y su relación con territorios y búsquedas coloniales.",
    limitation:
      "Trabaja testimonios coloniales externos y no prueba que Dobaida sea la misma figura que Dabeiba Katío.",
  }),
};

export const defaultKatioSourceKeys = [
  "severino1924",
  "rochereau1929",
  "villa1993",
  "clacsoRegionalization",
  "onicKatio",
  "gobiernoMayorKatio",
  "minInteriorPlan",
];

export function pickKatioSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = katioSources[key];
    if (!selected) throw new Error(`Fuente Katío desconocida: ${key}`);
    return selected;
  });
}
