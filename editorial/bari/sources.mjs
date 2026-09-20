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

export const bariSources = {
  mandatoJusticia: source({
    title:
      "Ruta metodológica para la construcción del Ibakaina – Mandato de Justicia del Pueblo Barí",
    author: "Asociación de Autoridades Tradicionales del Pueblo Barí Ñatubaiyibarí",
    year: 2021,
    type: "mandato y memoria comunitaria",
    url: "https://www.minjusticia.gov.co/programas-co/fortalecimiento-etnico/Documents/banco2021/IniciativasApoyadas/35.%20Ruta%20Metodol%C3%B3gica%20CONSTRUCCION%20DEL%20IBAKAINA%20%E2%80%93%20MANDATO%20DE%20JUSTICIA%20DEL%20PUEBLO%20BAR%C3%8D.pdf",
    summary:
      "Expone con voz organizativa Barí la ley de origen de Sabaseba, la salida de la gente de las piñas, las transformaciones animales, Sibabió, el bejuco de la Luna y el árbol que formó las cuencas del Catatumbo y del Río de Oro.",
    limitation:
      "Comparte deliberadamente solo una parte del conocimiento que las autoridades consideran comunicable al público no Barí; esta edición respeta ese límite.",
  }),
  memoriaHistorica: source({
    title: "Documento preliminar de memoria histórica del Pueblo Barí",
    author: "Asociación de Autoridades Tradicionales del Pueblo Barí Ñatubaiyibarí",
    year: 2016,
    type: "memoria histórica comunitaria",
    url: "https://www.centrodememoriahistorica.gov.co/micrositios/comunidades-etnicas/assets/pdf/Informe-de-Memoria-Pueblo_Bari.pdf",
    summary:
      "Recoge la autodenominación Barí, el nombre Ishtana, el ordenamiento de Sabaseba y testimonios de mayores del resguardo Motilón Barí.",
    limitation:
      "Es un documento preliminar de memoria y reparación, no una edición filológica completa de cada relato.",
  }),
  cnmhHijosSabaseba: source({
    title: "Los hijos de Sabaseba: Ishtana resiste, voces del pueblo Barí",
    author: "Pueblo Barí y Centro Nacional de Memoria Histórica",
    year: 2017,
    type: "micrositio de memoria comunitaria",
    url: "https://centrodememoriahistorica.gov.co/micrositios/catatumbo/bari.html",
    summary:
      "Sitúa a Sabaseba como ordenador y maestro, el territorio transfronterizo, el bohío y siete mundos alrededor de Ishtana.",
    limitation:
      "Es una síntesis pública multimedia; no contiene las transcripciones extensas ni toda la variación local.",
  }),
  rocha2010: source({
    title:
      "El Sol babea jugo de piña: Antología de las literaturas indígenas del Atlántico, el Pacífico y la Serranía del Perijá",
    author: "Selección, introducción y notas de Miguel Rocha Vivas",
    year: 2010,
    type: "antología crítica de oraliteraturas indígenas",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll8/id/3/download",
    summary:
      "Reúne el corpus Barí publicado sobre el bejuco celeste, Sabaseba, la piña, Sibabió, el árbol de los ríos, el nacimiento del Sol y el viaje de Caminar liviano, con procedencias bibliográficas.",
    limitation:
      "Es una compilación y estudio de registros anteriores; varias narraciones llegaron mediante traducciones, misioneros y editores no Barí.",
  }),
  cervantesRocha: source({
    title: "Ficha bibliográfica de El Sol babea jugo de piña",
    author: "Biblioteca Virtual Miguel de Cervantes",
    year: 2010,
    type: "registro bibliográfico institucional",
    url: "https://www.cervantesvirtual.com/obra/el-sol-babea-jugo-de-pina-antologia-de-las-literaturas-indigenas-del-atlantico-el-pacifico-y-la-serrania-del-perija-882849/",
    summary:
      "Confirma autoría, edición, sello institucional y alcance de la antología de Miguel Rocha Vivas.",
    limitation:
      "Acredita la publicación, pero no funciona como testimonio narrativo independiente.",
  }),
  mundoBari: source({
    title: "Mundo Barí: un pueblo que se niega a desaparecer",
    author: "David Alonso Páez Quintero, Orlando Diago Rodríguez y otros",
    type: "monografía regional de divulgación",
    url: "https://mariojavierpacheco.net/wp-content/uploads/2015/12/MUNDO-BARI-bb-2.pdf",
    summary:
      "Sistematiza a Sabaseba, los Saimadoyi, Ñandóu, Chibáig, el origen de los ríos, Sibabió, los oficios y el ordenamiento del cosmos.",
    limitation:
      "No siempre identifica narradores, fechas o comunidades para cada pasaje y resume trabajos previos de distinta mediación.",
  }),
  familiaBari: source({
    title: "La familia Barí",
    author: "José Ricardo Hernández Gómez",
    year: 2015,
    type: "tesis doctoral en antropología",
    url: "https://gredos.usal.es/bitstream/handle/10366/128357/III_Hern%C3%A1ndezFuentesJR_FamiliaBar%C3%AD.pdf?isAllowed=y&sequence=1",
    summary:
      "Documenta organización familiar, cosmogonía, Sabaseba, Chibáig, Ñandóu, Sibabió, muerte y vocabulario con un amplio aparato bibliográfico.",
    limitation:
      "Integra materiales colombianos y venezolanos y debe leerse como interpretación académica, no como versión única de todas las comunidades.",
  }),
  sanchezPirela: source({
    title: "Filosofía amerindia: wayuu y barí",
    author: "Beatriz Sánchez Pirela",
    year: 2006,
    type: "artículo académico",
    url: "https://produccioncientificaluz.org/index.php/rlh/article/download/18954/18937/",
    summary:
      "Analiza el pensamiento mítico Wayuu y Barí, incluido el papel ordenador de Sabaseba, desde una lectura filosófica del lenguaje simbólico.",
    limitation:
      "Su énfasis es filosófico y ético; no publica por sí solo un corpus narrativo completo.",
  }),

  // ——— Búsqueda profunda 2026-09-19 ———
  caballerobari1980: source({
    title: "Los barí. Su mundo social y religioso",
    author: "Dionisio Castillo Caballero",
    year: 1980,
    type: "etnografía misionera con relatos grabados en lengua barí",
    url: "http://www.bidicap.org/doai/PS_NyG_1980v027n003p0413_0708/HTML//files/assets/common/downloads/publication.pdf",
    summary:
      "Describe la escatología grabada en lengua barí: la salida del bosobokú por nariz, oídos y boca, los basunchimba que salen al encuentro, la antesala, el camino blando dibóuriboúske, el juicio de Sabaséba sobre matar, robar, mentir y chismear, los tres destinos y el baño del aboo.",
    limitation:
      "Registro venezolano del Zulia; el autor discute abiertamente a Alcácer y su exposición es sistemática, no narrativa, de modo que reconstruye un modelo a partir de varias narraciones y no reproduce un relato único.",
  }),
  gomezBari1993: source({
    title: "Los Barí, en Geografía humana de Colombia. Nordeste indígena, tomo II",
    author: "Orlando Jaramillo Gómez",
    year: 1993,
    type: "capítulo de etnografía institucional",
    url: "https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2809/download",
    summary:
      "Ubica en el mapa de cielos el lugar del encuentro de los muertos con sus familiares, en el kokda sada, y a los basunchimba en el barún, y resume la idea barí de la muerte como paso a un mundo nuevo.",
    limitation:
      "Capítulo colombiano de 1993 que no recoge ningún relato de viaje al más allá; sólo aporta la cartografía, tomada de Castillo.",
  }),
  sotobari2012: source({
    title: "Los barí: historia, sociedad y cultura",
    author: "Zaidy Fernández Soto y Asmery González",
    year: 2012,
    type: "monografía etnográfica de divulgación",
    url: "https://albaciudad.org/wp-content/uploads/2021/05/los_bari_historia_sociedad_y_cultura.pdf",
    summary:
      "Describe a los ichigbarí como seres del aire que pueden matar a los niños y a los que se teme de noche, lo que precisa qué clase de ser es el guía del viaje.",
    limitation:
      "Registro venezolano del Zulia que no recoge relato alguno de viaje al más allá; el PDF verificado está alojado en el sitio de un medio de comunicación.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickBariSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = bariSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Barí desconocida: ${visto}`);
    }
    if (vistas.has(key)) continue;
    vistas.add(key);
    salida.push(
      typeof entrada === "string"
        ? selected
        : {
            ...selected,
            ...(entrada.summary ? { summary: entrada.summary } : {}),
            ...(entrada.limitation ? { limitation: entrada.limitation } : {}),
          },
    );
  }
  return salida;
}
