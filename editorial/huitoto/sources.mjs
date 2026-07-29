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

export const huitotoSources = {
  urbinaBook: source({
    title:
      "Las palabras del origen: breve compendio de la mitología de los uitotos",
    author:
      "Fernando Urbina Rangel; relatos de Jitoma Naïre, Félix Kuegajima, José García, Jitoma Zafiama, Moisés Tejada, Julio Ribera, Pablo Bigïdïma, Eudocio Becerra, Juvenal Flaviano Castilla y Filomena Tejada",
    year: 2010,
    type: "compendio narrativo con relatores, lugares y fechas identificados",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/4/download",
    summary:
      "Publica dieciséis relatos con introitos, créditos de narración o traducción y notas comparativas. Es la fuente directa de Nofïdeño, Uuikï, los ciclos de Jitoma, Dïïjoma, Nofïzazima, Buinaima, Yiida Buinama, Yarokamena, Juma, Kanifaido, Kugï y Nokuerai, Guyataiba y Konago.",
    limitation:
      "Es una selección y edición de Fernando Urbina, no el canon total Murui-Muina. La revisión conserva el nombre de cada relator y no convierte los comentarios del editor en voz comunitaria.",
  }),
  cervantesUrbina: source({
    title:
      "Las palabras del origen: breve compendio de la mitología de los Uitotos",
    author: "Biblioteca Virtual Miguel de Cervantes y Banco de la República",
    year: 2010,
    type: "registro bibliográfico institucional del compendio",
    url: "https://www.cervantesvirtual.com/portales/biblioteca_virtual_del_banco_de_la_republica/obra/las-palabras-del-origen-breve-compendio-de-la-mitologia-de-los-uitotos-878838/",
    summary:
      "Controla autoría, edición, institución de origen y acceso al compendio narrativo utilizado.",
    limitation:
      "Es un registro bibliográfico; no constituye una versión narrativa independiente.",
  }),
  jirayaumaCycle: source({
    title: "La Mujer Jaguar y el Cerbatanero",
    author: "José Octavio García y Fernando Urbina Rangel",
    year: 2016,
    type: "adaptación ilustrada de un ciclo narrado en 1971",
    url: "https://www.cervantesvirtual.com/obra/la-mujer-jaguar-y-el-cerbatanero-873839/",
    summary:
      "Identifica a Jirayauma como el Cerbatanero del ciclo de la Mujer-Jaguar y enumera sus ocho episodios, incluidos Cangrejo, chontaduro, Caimán y el encuentro con Dïïjoma.",
    limitation:
      "La publicación es una adaptación didáctica de episodios del ciclo; la ficha no rellena sus transiciones con escenas nuevas.",
  }),
  hugoNino: source({
    title: "Primitivos relatos contados otra vez: héroes y mitos amazónicos",
    author: "Hugo Niño",
    year: 1977,
    type: "reelaboración literaria y catálogo bibliográfico",
    url: "https://openlibrary.org/books/OL38211858M/Primitivos_relatos_contados_otra_vez",
    summary:
      "El índice documenta Jutíñamúi modela el universo, Unámarai, padre de Yajé y En el principio fueron los Yoria a la sombra de la ortiga.",
    limitation:
      "Hugo Niño reelabora relatos y no es un narrador indígena. La vista abierta confirma el índice y la edición, pero no ofrece el texto integral sin préstamo.",
  }),
  rabbitCatalog: source({
    title: "Mitos y leyendas colombianos",
    author: "Educar Editores; catálogo del Ministerio de Educación Nacional",
    year: 2009,
    type: "registro de antología escolar",
    url: "https://mineducacion.gov.co/1780/articles-137611_recurso_10.pdf",
    summary:
      "Registra Peleas y aventuras entre el sobrino conejo y el tío tigre dentro de una sección conjunta de Llanos Orientales y Amazonía.",
    limitation:
      "No atribuye el cuento específicamente al pueblo Huitoto. La ficha permanece publicada, pero declara esa incertidumbre.",
  }),
  preussOne: source({
    title: "Religión y mitología de los uitotos, primera parte",
    author:
      "Konrad Theodor Preuss; traducción de Ricardo Castañeda Nieto con asesoría de Gabriele Petersen de Piñeros",
    year: 1994,
    type: "edición académica de investigación y textos recopilados en 1914",
    url: "https://pure.mpg.de/pubman/item/item_576592_2/component/file_576590/witoto_preuss1994_1_s.pdf",
    summary:
      "Aporta contexto histórico sobre religión, fiestas, palabra, territorio y organización narrativa uitoto.",
    limitation:
      "La recopilación se hizo a comienzos del siglo XX bajo condiciones históricas específicas y no representa todas las comunidades ni dialectos actuales.",
  }),
  preussTwo: source({
    title: "Religión y mitología de los uitotos, segunda parte",
    author:
      "Konrad Theodor Preuss; transcripción y traducción revisadas por Eudocio Becerra y Gabriele Petersen de Piñeros",
    year: 1994,
    type: "corpus bilingüe de mitos, cantos y diccionario",
    url: "https://pure.mpg.de/pubman/item/item_576592_2/component/file_576591/witoto_preuss1994_2_s.pdf",
    summary:
      "Ofrece textos en lengua uitoto con traducción y un repertorio léxico para comparar nombres sin tratar grafías distintas como personajes nuevos.",
    limitation:
      "Es un corpus de la variedad mika y no prueba por sí solo los episodios recogidos después en otras zonas y dialectos.",
  }),
  onic: source({
    title: "Muina Murui",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil comunitario, lingüístico e histórico",
    url: "https://www.onic.org.co/pueblos/1125-muinane",
    summary:
      "Sitúa las variedades mika, minika, búe y nipode, la dispersión causada por la Casa Arana y la recuperación territorial y cultural.",
    limitation:
      "El encabezado y algunas denominaciones condensan identidades relacionadas. Se usa para contexto, no para homologar todas las versiones.",
  }),
  unalRecord: source({
    title: "Religión y mitología de los uitotos",
    author: "Repositorio de la Universidad Nacional de Colombia",
    year: 1994,
    type: "registro institucional de la edición de Preuss",
    url: "https://repositorio.unal.edu.co/handle/unal/3113",
    summary:
      "Documenta la edición colombiana, su acceso abierto y la participación de Eudocio Becerra y Gabriele Petersen en la revisión lingüística.",
    limitation:
      "Es un registro de repositorio, no una narración oral adicional.",
  }),
  mythEthics: source({
    title: "Mito y ética: una lectura del pensamiento mítico",
    author: "Fernando Urbina Rangel",
    year: 2010,
    type: "artículo académico de interpretación",
    url: "https://dialnet.unirioja.es/descarga/articulo/3703226.pdf",
    summary:
      "Explica cómo relatos amazónicos relacionan perspectiva, dueños de animales, cuidado y consecuencias sin reducirlos a moralejas universales.",
    limitation:
      "Es interpretación académica posterior. No sustituye la narración ni autoriza a presentar una lectura como significado único.",
  }),
};

export function pickHuitotoSources(...keys) {
  return [...new Set(keys)].map((key) => {
    const selected = huitotoSources[key];
    if (!selected) throw new Error(`Fuente Huitoto desconocida: ${key}`);
    return selected;
  });
}
