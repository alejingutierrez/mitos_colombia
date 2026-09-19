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

export const wounaanSources = {
  cnmhCuriche: source({
    title:
      "Rescatando la historia del Pueblo Wounaan del resguardo Santa Marta de Curiche",
    author:
      "Resguardo Santa Marta de Curiche y Centro Nacional de Memoria Histórica",
    year: 2023,
    type: "memoria comunitaria bilingüe",
    url: "https://centrodememoriahistorica.gov.co/wp-content/uploads/2023/04/Cartilla%20Rescatando%20la%20historia%20del%20Pueblo%20Wounaan%20del%20Resguardo%20Santa%20Marta%20de%20Curiche.pdf",
    summary:
      "Conserva voces de Santa Marta de Curiche sobre la creación en el Baudó, el nacimiento de la gente como muñecos de barro, el benkhuun, los sueños, la rogativa y su pequeña barca de madera.",
    limitation:
      "Es una memoria situada en una comunidad de Juradó y no debe presentarse como versión única para todo el pueblo Wounaan de Colombia y Panamá.",
  }),
  weguerCelso: source({
    title: "Capítulo cestería en Werregue: La creación del Weguer",
    author: "Narración de Celso Peña; Artesanías de Colombia",
    year: 2000,
    type: "relato tradicional con narrador identificado",
    url: "https://cendar-repositorio.metabiblioteca.org/bitstream/001/13978/1/INST-D%202019.%20377.pdf",
    summary:
      "Registra la competencia entre Ewandam y Dosat, la creación de plantas, la sal del mar y el origen del weguer en una narración atribuida a Celso Peña.",
    limitation:
      "El documento fue editado para un capítulo artesanal y emplea nombres cristianizados; no permite fechar el origen del relato ni separar todas sus capas históricas.",
  }),
  barcaArtesanias: source({
    title: "Colombia Artesanal: objetos rituales, barca de los espíritus",
    author: "Artesanías de Colombia",
    type: "documentación institucional de objeto ritual",
    url: "https://www.artesaniasdecolombia.co/PortalAC/Noticia/colombia-artesanal-objetos-rituales-barca-de-los-espiritus_8765",
    summary:
      "Describe una barca tallada en balso por un benkhuun, sus pasajeros protectores y un aprendizaje ritual guiado mediante sueños.",
    limitation:
      "Es una síntesis institucional sin transcripción completa de una ceremonia concreta; sus detalles no se mezclan en silencio con la rogativa de Curiche.",
  }),
  camawaPlan: source({
    title:
      "Maach Thumaankhun Durr: El territorio de todos nosotros, Plan de Vida del Pueblo Wounaan y Siepien del Bajo San Juan",
    author: "CAMAWA",
    year: 2005,
    type: "plan de vida comunitario",
    url: "https://studylib.es/doc/7889963/camawa---plan-de-vida---observatorio-%C3%A9tnico-cecoin",
    summary:
      "Expone territorio, lengua, memoria, rogativas, sueños, benkhuun y relación con Ewandam desde una organización del Bajo San Juan.",
    limitation:
      "La URL consultable es un espejo del plan comunitario porque el enlace histórico original no está disponible; se usa para contexto y no como facsímil garantizado.",
  }),
  minAmbienteTerritorio: source({
    title: "Función ecológica de la propiedad en los resguardos indígenas",
    author: "Ministerio de Ambiente y organizaciones indígenas",
    type: "estudio territorial e intercultural",
    url: "https://archivo.minambiente.gov.co/images/OrdenamientoAmbientalTerritorialyCoordinaciondelSIN/pdf/Funci%C3%B3n_Ecol%C3%B3gica_de_la_Propiedad/libro_funci%C3%B3n_ecol%C3%B3gica.pdf",
    summary:
      "Resume los ciclos de Maach Aai Pomaam, Ewandam y Dosat, la creación de figuras de barro, los cuatro mundos y las relaciones territoriales Wounaan.",
    limitation:
      "Es una síntesis de escala amplia y no identifica siempre narradores ni localidades para cada motivo.",
  }),
  minCulturaProfile: source({
    title: "Caracterización del pueblo Wounaan",
    author: "Ministerio de Cultura",
    type: "caracterización institucional",
    url: "https://mng.mincultura.gov.co/prensa/noticias/Documents/Poblaciones/PUEBLO%20WOUNAAN.pdf",
    summary:
      "Sitúa lengua, territorio, organización y bibliografía, incluido el plan de vida de CAMAWA.",
    limitation:
      "Aporta contexto contemporáneo y bibliográfico; no es una fuente narrativa independiente de los mitos.",
  }),
  gobiernoMayor: source({
    title: "Wounaan",
    author: "Gobierno Mayor de Autoridades Tradicionales Indígenas",
    type: "perfil de organización indígena",
    url: "https://www.gobiernomayor.org.co/wounaan/",
    summary:
      "Ubica comunidades en las cuencas del San Juan, Baudó, Curiche y otros ríos del Chocó y Valle del Cauca.",
    limitation:
      "Es un perfil panorámico y no fija una versión canónica de los relatos ni de las prácticas locales.",
  }),
  onicWounaan: source({
    title: "Waunana",
    author: "Organización Nacional Indígena de Colombia",
    type: "perfil de organización indígena",
    url: "https://www.onic.org.co/pueblos/1155-waunana",
    summary:
      "Ofrece contexto sobre identidad, lengua, territorio y continuidad contemporánea del pueblo Wounaan.",
    limitation:
      "La ficha es breve y su grafía histórica no reemplaza la autodenominación ni los testimonios comunitarios localizados.",
  }),
  cesteria2026: source({
    title: "Referencial nacional de cestería en wérregue",
    author: "Artesanías de Colombia",
    year: 2026,
    type: "referencial técnico y cultural",
    url: "https://artesaniasdecolombia.com.co/document/documentos/REF_CESTERIA_EN_WERREGUE_BOGOTA_MAYO_2026.pdf",
    summary:
      "Documenta la palma, la preparación de fibras, la cestería y su continuidad entre mujeres Wounaan en territorios y ciudades.",
    limitation:
      "Sirve para materialidad y práctica contemporánea; no sustituye la narración de Celso Peña sobre el origen del weguer.",
  }),
  madreName2016: source({
    title:
      "Aspectos da dialogia do mito Madre Ñame na cultura indígena wounaan-nonam",
    author: "Livia Mathias Simão y Hernán Sánchez Ríos",
    year: 2016,
    type: "artículo académico con narración comunitaria",
    url: "https://doi.org/10.1590/0103-6564D20160005",
    summary:
      "Publica y analiza el relato Madre Ñame narrado en woun meu por Juan Perdiz, líder de Puerto Pizario, y traducido al español antes de su versión portuguesa.",
    limitation:
      "La versión publicada atravesó dos traducciones y el artículo la analiza desde la psicología cultural; esta edición no finge recuperar palabra por palabra el relato en woun meu.",
  }),
  madreNameEducation: source({
    title:
      "Cultural practices as scenario for non-formal education of children in the Wounaan-nonam community of the Colombian Pacific Coast",
    author: "Livia Mathias Simão y Hernán Sánchez Ríos",
    year: 2017,
    type: "estudio académico de transmisión comunitaria",
    url: "https://doi.org/10.1080/02560046.2017.1300829",
    summary:
      "Estudia la circulación de relatos y prácticas culturales con niñas y niños Wounaan Nonam de Puerto Pizario.",
    limitation:
      "Analiza una situación educativa localizada y no convierte la versión de Puerto Pizario en tradición uniforme.",
  }),
  mdpiStorywork: source({
    title:
      "Wounaan Storying as Intervention: Storywork in the Crafting of a Multimodal Illustrated Story Book on People and Birds",
    author: "Rito Ismare Peña, Chenier Carpio Opua y otros",
    year: 2021,
    type: "investigación colaborativa contemporánea",
    url: "https://www.mdpi.com/2313-5778/5/4/91",
    summary:
      "Documenta un proceso dirigido con autoridades y autores Wounaan de Panamá para crear un relato infantil multimodal en woun meu, español e inglés.",
    limitation:
      "Corresponde a un proceso Wounaan de Panamá sobre personas y aves; no registra Madre Ñame ni representa la transmisión específica de Puerto Pizario.",
  }),
};

/**
 * Acepta una clave suelta o una clave con resumen y límite propios del mito
 * (`{ key, summary, limitation }`). La ficha bibliográfica la fija el pool; lo
 * que cambia por mito es qué dice esa obra sobre ese relato.
 */
export function pickWounaanSources(...entries) {
  const entradas = entries;
  const vistas = new Set();
  const salida = [];
  for (const entrada of entradas) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = wounaanSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente Wounaan desconocida: ${visto}`);
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
