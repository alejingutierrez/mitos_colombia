export const eperaraSources = {
  planVida: {
    title: "Tachi Ode T’tadama: Retomemos nuestro camino",
    authors:
      "Asociación de Cabildos Indígenas Eperara Siapidaara de Nariño (ACIESNA)",
    publication: "Plan de Vida del Pueblo Eperara Siapidaara",
    year: 2005,
    url: "https://centrodocumental.corape.org.ec/wp-content/uploads/2022/01/documento-149-retomemos-nuestro-camino.pdf",
    summary:
      "Fuente comunitaria primaria. Publica la versión de Fabriciano Obispo del origen en Playa Pizarro y el relato del Árbol del Agua.",
  },
  onicLeyes: {
    title: "Documento madre: Leyes de origen de los pueblos indígenas de Colombia",
    authors: "Consejería Mayor de la ONIC y Sistema de Monitoreo Territorial",
    publication: "Organización Nacional Indígena de Colombia",
    year: 2023,
    url: "https://smt-onic.com/media/pdf/DOCUMENTO_MADRE_Leyes_de_Origen_vf_SMT-ONIC.pdf",
    summary:
      "Sistematiza la Ley de Origen Eperara Siapidara y documenta a Tachi Nawe, Tachi Akhore, la palma y la creación de la gente.",
  },
  paniaPakuru: {
    title: "Pania Pak’uru: el árbol del agua",
    authors: "Fabriciano Obispo",
    publication: "El Espectador, cuento indígena en Sia Pedee y español",
    year: 2019,
    url: "https://www.elespectador.com/colombia/mas-regiones/cuento-indigena-pania-pakuru-el-arbol-del-agua-article-875249/",
    summary:
      "Versión bilingüe atribuida a Fabriciano Obispo sobre la Conga, la minga y el árbol del que nacen ríos, lagunas y mar.",
  },
  artesaniasGuapi: {
    title: "Guapi: Filigrana. Memorias de oficio",
    authors:
      "Magda Juliana Murcia Acevedo, Yenny Patricia Hurtado Cuero y equipo",
    publication: "Artesanías de Colombia",
    year: 2017,
    url: "https://artesaniasdecolombia.com.co/Documentos/Contenido/40301_29842_filigrana%2C_guapi.pdf",
    summary:
      "Reproduce el relato Eperara del Árbol del Agua en su contexto territorial del Pacífico caucano.",
  },
  carrasco: {
    title: "Los Épera Siapidara en Ecuador: proceso de invisibilidad a visibilidad",
    authors: "Eulalia Carrasco A.",
    publication: "Cuadernos de Antropología, Pontificia Universidad Católica del Ecuador",
    year: 2010,
    url: "https://cuadernosdeantropologia-puce.edu.ec/index.php/antropologia/article/download/96/80/",
    summary:
      "Publica una versión oral de Lina Quiroz sobre la creación y registra variantes de barro, chonta y caña brava.",
  },
  aciesnaJusticia: {
    title: "La resolución de conflictos en el pueblo Eperara Siapidaara",
    authors:
      "Asociación de Cabildos Indígenas Eperara Siapidaara de Nariño (ACIESNA)",
    publication: "Ministerio de Justicia y del Derecho",
    year: 2020,
    url: "https://www.minjusticia.gov.co/programas-co/fortalecimiento-etnico/Documents/banco-2020/17.%20ENTREGABLE%20C.%20DOCUMENTO%20GENERAL%20RESOLUCION%20DE%20CONFLICTOS%20PUEBLO%20EPERARA%20SIAPIDAARA.pdf",
    summary:
      "Explica la Ley de Origen, los tres mundos y las funciones de Tachi Akhore y Tachi Nawe desde ACIESNA.",
  },
  etnobiologia: {
    title: "Cosmovisiones y naturalezas en tres culturas indígenas de Colombia",
    authors: "Olga Lucía Sanabria Diago y Arturo Argueta Villamar",
    publication: "Etnobiología, volumen 13, número 2",
    year: 2015,
    url: "https://revistaetnobiologia.mx/index.php/etno/article/view/76",
    summary:
      "Estudio académico sobre el pensamiento Eperara Siapidara y la relación no separada entre seres humanos y naturaleza.",
  },
  satingaOnic: {
    title: "Río Satinga (Bacao)",
    authors: "Sistema de Monitoreo Territorial de la ONIC",
    publication: "SMT-ONIC",
    url: "https://wiki.smt-onic.com/index.php/R%C3%ADo_Satinga_%28Bacao%29",
    summary:
      "Sitúa la presencia Eperara Siapidara en Nariño y resume su Ley de Origen, territorio y autoridades tradicionales.",
  },
};

export function pickEperaraSources(...keys) {
  return keys.map((key) => {
    const source = eperaraSources[key];
    if (!source) throw new Error(`Fuente Eperara desconocida: ${key}.`);
    return source;
  });
}
