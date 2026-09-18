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

export const ansermasSources = {
  cieza1864: source({
    title:
      "The Travels of Pedro de Cieza de León, A.D. 1532–50: First Part of His Chronicle of Peru",
    author: "Pedro de Cieza de León; traducción de Clements R. Markham",
    year: 1864,
    type: "crónica colonial en traducción histórica",
    url: "https://commons.wikimedia.org/wiki/File:The_travels_of_Pedro_de_Cieza_de_Le%C3%B3n,_A._D._1532-50_-_contained_in_the_first_part_of_his_Chronicle_of_Peru_(IA_gri_000033125008673861).pdf",
    summary:
      "Registra la provincia de Anserma o Umbra y conserva la formulación colonial según la cual Xixarama era llamado «diablo» y Tamaraca designaba a los españoles.",
    limitation:
      "Es la mirada de un conquistador del siglo XVI, mediada además por una traducción inglesa del XIX; sus categorías cristianas no describen la religión Anserma en sus propios términos.",
  }),
  steward1948: source({
    title:
      "Handbook of South American Indians, Volume 4: The Circum-Caribbean Tribes",
    author: "Julian H. Steward, editor",
    year: 1948,
    type: "síntesis etnológica comparativa",
    url: "https://repository.si.edu/handle/10088/34600",
    summary:
      "Resume fuentes históricas sobre los pueblos del alto Cauca y señala a Xixarama como deidad principal Anserma y progenitor del Sol y la Luna.",
    limitation:
      "Es una síntesis de mediados del siglo XX basada en cronistas y bibliografía previa; no constituye trabajo comunitario contemporáneo ni una narración oral completa.",
  }),
  abad1955: source({
    title: "Los Ansermas",
    author: "Inés Lucía Abad Salazar",
    year: 1955,
    type: "tesis y monografía histórica",
    url: "https://books.google.com/books/about/Los_ansermas.html?id=fq0jAAAAMAAJ",
    summary:
      "Sistematiza territorio, lengua, organización, vida ritual y referencias históricas a Xixarama o Xixaraca entre los pueblos agrupados bajo el nombre Anserma.",
    limitation:
      "La vista pública es parcial y la obra emplea categorías antropológicas propias de su época; debe contrastarse con voces indígenas y estudios posteriores.",
  }),
  cardona1989: source({
    title: "Quinchía mestizo",
    author: "Alfredo Cardona Tobón",
    year: 1989,
    type: "historia local y memoria regional",
    url: "https://books.google.com/books/about/Quinch%C3%ADa_mestizo.html?id=W2wYAAAAYAAJ",
    summary:
      "Relaciona el cerro Karambá o Batero con Xixaraca y Michua, las huellas de Mápura, los Tamaracas y la memoria histórica de Guacuma y Quinchía.",
    limitation:
      "Combina documentos, tradición local e interpretación del autor; algunas reconstrucciones no identifican por separado narrador, fecha y variante.",
  }),
  cardona1993: source({
    title: "Ensayos: Las huellas ancestrales",
    author: "Alfredo Cardona Tobón",
    year: 1993,
    type: "artículo de historia y memoria regional",
    url: "https://publicaciones.autonoma.edu.co/index.php/anfora/article/view/415",
    summary:
      "Documenta las grandes huellas humanas de las rocas del río Mápura y las memorias que las atribuyen a la deidad protectora Anserma.",
    limitation:
      "Es un ensayo regional sobre pérdida de memoria, no una transcripción filológica ni una investigación arqueológica de las marcas.",
  }),
  cardona2011: source({
    title: "El último cacique de los Currumíes: La leyenda de los Tamaracas",
    author: "Alfredo Cardona Tobón",
    year: 2011,
    type: "memoria oral regional publicada",
    url: "https://historiayregion.blogspot.com/2011/08/el-ultimo-cacique-de-los-currumies.html",
    summary:
      "Publica el relato que Cardona recuerda haber escuchado en 1947 a Cándido Aricapa sobre Xixaraca, Michua, Karambá, Opiramá y las transformaciones de los Tamaracas.",
    limitation:
      "El testimonio fue escrito décadas después y está enmarcado por la memoria personal y política del autor; no es una grabación ni una transcripción contemporánea de Aricapa.",
  }),
  valencia2009: source({
    title:
      "Antiguos pobladores del territorio caldense: aspectos de la vida cotidiana",
    author: "Albeiro Valencia Llano",
    year: 2009,
    type: "artículo histórico con testimonio indígena",
    url: "https://filedn.com/ld7H5po5QNfB2tIYyyCQhm7/Gonzalo-public/Repositorio%20Revista%20Impronta%20ACH/Academia%20Caldense%20de%20Historia-%20Revista%20Impronta%2007%20de%202009.pdf",
    summary:
      "Contrasta cronistas coloniales y fuentes regionales e incluye una entrevista de 1977 al gobernador indígena Gabriel Campeón, quien rechaza llamar «diablo» a Xixarama.",
    limitation:
      "El artículo cubre numerosos pueblos del antiguo Caldas y reproduce vocabulario colonial que requiere lectura crítica; no desarrolla por sí solo cada episodio narrativo.",
  }),
  cubillos2020: source({
    title:
      "La interdisciplinariedad en las ciencias ambientales: la problemática ambiental del territorio",
    author: "León Felipe Cubillos Quintero",
    year: 2020,
    type: "monografía académica de la Universidad Tecnológica de Pereira",
    url: "https://oses-alc.net/wp-content/uploads/2021/08/2020-Libro.pdf",
    summary:
      "Sitúa a Karambá como centro patrimonial de Guacuma y resume a Xixaraca, Michua, los seres de adentro llamados Tamaracas, las huellas y las cascadas dentro de una historia territorial.",
    limitation:
      "Integra bibliografía regional, investigación ambiental y divulgación; varios pasajes dependen de Cardona y no equivalen a una nueva versión oral independiente.",
  }),
};

export function pickAnsermasSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = ansermasSources[key];
    if (!selected) throw new Error(`Fuente Anserma desconocida: ${key}`);
    return selected;
  });
}
