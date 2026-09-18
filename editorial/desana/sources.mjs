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

export const desanaSources = {
  primaryBook: source({
    title: "Antes o mundo não existia: Mitologia Desana-Kêhíripõrã",
    author: "Umusĩ Pãrõkumu y Tõrãmũ Kẽhíri",
    year: 2019,
    type: "libro de autoría indígena, tercera edición",
    url: "https://selvagemciclo.org.br/wp-content/uploads/2025/03/Antes_o_mundo_nao_existia_Dantes2019.pdf",
    summary:
      "Obra escrita e ilustrada por narradores Desana del clan Kêhíripõrã. Publica los ciclos de Yebá Buró, la Canoa de Transformación, la noche, los cataclismos, las flautas, la mandioca, el chontaduro y Ãgãmahsãpu.",
    limitation:
      "Es la versión de un clan y no un canon de todas las comunidades Desana. La ficha parafrasea únicamente capítulos publicados y no operacionaliza conocimiento ceremonial.",
  }),
  dantes: source({
    title: "Antes o mundo não existia",
    author: "Dantes Editora",
    year: 2019,
    type: "ficha editorial de la tercera edición",
    url: "https://dantes.com.br/produto/antes-o-mundo-nao-existia/",
    summary:
      "Presenta la tercera edición, sus autores Desana, la trayectoria de la obra y el trabajo editorial que actualizó grafías e ilustraciones.",
    limitation:
      "Es una ficha editorial y comercial; aporta historia de publicación, no una versión narrativa independiente.",
  }),
  isaPeople: source({
    title: "Desana",
    author: "Instituto Socioambiental, Povos Indígenas no Brasil",
    type: "perfil etnográfico y territorial",
    url: "https://www.povosindigenas.org.br/pt/Povo%3ADesana",
    summary:
      "Sitúa a los Desana o Umukomasã en el sistema social del Alto Río Negro, sus territorios, clanes, lenguas y relaciones con otros pueblos tukano orientales.",
    limitation:
      "Resume contexto regional y no prueba por sí solo cada episodio del libro Kêhíripõrã.",
  }),
  museu: source({
    title: "Povo Desano",
    author: "Museu do Índio, ProDoclin",
    type: "perfil lingüístico y cultural institucional",
    url: "https://prodoclin.museudoindio.gov.br/index.php/etnias/desano/povo",
    summary:
      "Aporta una presentación institucional del pueblo Desano, su lengua, localización y denominaciones.",
    limitation:
      "No contiene la transcripción completa de los ciclos y se usa solo para contextualizar nombres y localización.",
  }),
  wariBook: source({
    title: "Mitologia sagrada dos antigos Desana do grupo Wari Dihputiro Põrã",
    author: "Diakuru y Kisibi",
    year: 1996,
    type: "catálogo de libro de narradores indígenas",
    url: "https://acervo.socioambiental.org/acervo/livros/mitologia-sagrada-dos-antigos-desana-do-grupo-wari-dihputiro-pora",
    summary:
      "Registra otra publicación Desana dentro de la Colección Narradores Indígenas do Rio Negro y demuestra la existencia de versiones ligadas a clanes distintos.",
    limitation:
      "La ficha bibliográfica no ofrece el texto integral. Se usa para evitar presentar la versión Kêhíripõrã como única.",
  }),
  googleBook: source({
    title: "Antes o mundo não existia: Mitologia dos antigos Desana-Kêhíripõrã",
    author: "Tõrãmũ Kêhíri y Umusí Pãrõkumu; FOIRN y UNIRT",
    year: 1995,
    type: "registro bibliográfico de la segunda edición",
    url: "https://books.google.com.br/books?hl=pt-BR&id=7Kh-BgAAQBAJ",
    summary:
      "Documenta la edición de FOIRN y UNIRT, la autoría de padre e hijo y la pertenencia de Luiz Gomes Lana al clan Kêhíripõrã del río Tiquié.",
    limitation:
      "La vista es parcial y sirve como control bibliográfico, no para completar pasajes que la edición abierta no publique.",
  }),
  terminology: source({
    title:
      "Estudo etnoterminológico da obra Antes o mundo não existia",
    author: "José Alves da Costa Neto",
    year: 2021,
    type: "trabajo académico de lingüística y traducción",
    url: "https://bdm.unb.br/handle/10483/31507",
    summary:
      "Analiza vocabulario y decisiones de traducción de la obra Desana, útil para reconocer que los nombres y conceptos no son equivalentes transparentes en español.",
    limitation:
      "Es un análisis universitario posterior; no reemplaza a los autores indígenas ni constituye una segunda narración oral.",
  }),
};

export function pickDesanaSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = desanaSources[key];
    if (!selected) throw new Error(`Fuente Desana desconocida: ${key}`);
    return selected;
  });
}
