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

export const tucanoSources = {
  fulop1954: source({
    title: "Aspectos de la cultura Tukana: cosmogonía",
    author: "Marcos Fulop",
    year: 1954,
    type: "transcripción etnográfica de una narración Tukano",
    url: "https://repository.icesi.edu.co/items/bc2bf56a-5d2b-4abe-a04d-837c14521fd6",
    summary:
      "Publica el ciclo de Yepá Huáke y Yúpuri Baúro narrado por Marcos Sierra e interpretado por Manuel Sierra en el río Paca.",
    limitation:
      "Fulop trabajó pocas semanas y con un solo narrador; advirtió que no podía garantizar una versión exacta o representativa de todas las comunidades.",
  }),
  fulop1956: source({
    title: "Aspectos de la cultura Tukana: mitología, parte I",
    author: "Marcos Fulop",
    year: 1956,
    type: "colección etnográfica de relatos Tukano",
    url: "https://revistas.icanh.gov.co/index.php/rca/article/view/1801",
    summary:
      "Publica nueve conjuntos narrativos, entre ellos Boraró y Boraró Numió y La semilla de la yuca, con informante e intérprete identificados.",
    limitation:
      "El autor declara que reunió solo una porción pequeña de la mitología y pospone el análisis; la edición conserva categorías de su época.",
  }),
  gentil2005: source({
    title: "Povo Tukano: cultura, história e valores",
    author: "Gabriel dos Santos Gentil",
    year: 2005,
    type: "libro de autor Tukano y conocedor tradicional",
    url: "https://acervo.socioambiental.org/acervo/livros/povo-tukano-cultura-historia-e-valores",
    summary:
      "Presenta historia, valores y trayectoria cosmogónica desde la perspectiva del sabedor Tukano Gabriel Gentil.",
    limitation:
      "La ficha catalográfica permite confirmar autoría y alcance, pero no se usa para atribuirle escenas que no están disponibles en acceso abierto.",
  }),
  foirn2003: source({
    title:
      "Dahsea Hausirõ porã Uküshe wiophesase merã Bueri Turi: mitologia sagrada dos Tukano Hausirõ Porã",
    author:
      "Ñahuri (Miguel Azevedo), Kumarõ (Antenor Nascimento Azevedo) y FOIRN",
    year: 2003,
    type: "colección comunitaria de Narradores Indígenas do Rio Negro",
    url: "https://pesquisa.museudoindio.gov.br/index.php/informationobject/browse?genres=326129&places=4566&sf_culture=es&sort=identifier&sortDir=asc&subjects=178077&topLod=0&view=table",
    summary:
      "Registra mitología sagrada de los Tukano Hausirõ Porã del Medio Tiquié con narradores indígenas identificados.",
    limitation:
      "Se usa para demostrar continuidad y pluralidad de las narraciones, no para divulgar contenido ritual restringido ni completar argumentos por analogía.",
  }),
  funaiReport: source({
    title: "Relatório circunstanciado de identificação e delimitação: Baixo Rio Negro",
    author: "Fundação Nacional dos Povos Indígenas y Ministério da Justiça",
    type: "informe territorial y etnográfico contemporáneo",
    url: "https://www.gov.br/funai/pt-br/atuacao/terras-indigenas/demarcacao-de-terras-indigenas/contestacoes-administrativas/RCIDBAIXORION.pdf/@@display-file/file",
    summary:
      "Documenta la autodenominación Yepá-mahsã y la Canoa de Transformación dentro de la cosmología y la memoria territorial contemporáneas.",
    limitation:
      "Es un expediente estatal extenso y multiétnico; se usa como contexto actual y no como transcripción de cada relato de Fulop.",
  }),
  povosIndigenas: source({
    title: "Tukano",
    author: "Povos Indígenas no Brasil / Instituto Socioambiental",
    type: "perfil etnográfico de referencia",
    url: "https://www.povosindigenas.org.br/pt/Povo%3ATukano",
    summary:
      "Sitúa al pueblo Tukano, su organización regional y una cosmología donde animales y personas participan de perspectivas y relaciones recíprocas.",
    limitation:
      "Es una síntesis contextual actualizable; no reemplaza las narraciones atribuidas ni homogeniza a todos los pueblos tukano orientales.",
  }),
  jackson1983: source({
    title: "The Tukanoans' Place in the Cosmos",
    author: "Jean E. Jackson",
    year: 1983,
    type: "capítulo académico de antropología",
    url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/F513B2A3AF022199B84E6D4D1C08FD59/9780511621901c11_p195-210_CBO.pdf/tukanoans_place_in_the_cosmos.pdf",
    summary:
      "Examina territorio, organización social y ubicación cosmológica de los pueblos tukano orientales del Vaupés.",
    limitation:
      "Analiza un sistema regional y no debe convertirse en una versión única del pueblo Yepá-mahsã ni en fuente de escenas concretas.",
  }),
  kraus2001: source({
    title: "Cosmovisión, chamanismo y ritualidad en el noroeste amazónico",
    author: "Michael Kraus",
    year: 2001,
    type: "artículo académico comparativo",
    url: "https://www.sag-ssa.ch/bssa/pdf/bssa64-65_24.pdf",
    summary:
      "Contextualiza testimonios del Vaupés, cita la publicación de Fulop y discute capas históricas y contactos occidentales en las narraciones.",
    limitation:
      "Es una lectura comparativa posterior; sirve para crítica de transmisión y no para añadir episodios a la narración de Marcos Sierra.",
  }),
};

export function pickTucanoSources(primaryKey) {
  const preferred = [
    primaryKey,
    primaryKey === "fulop1954" ? "fulop1956" : "fulop1954",
    "gentil2005",
    "foirn2003",
    "funaiReport",
    "povosIndigenas",
    primaryKey === "fulop1954" ? "kraus2001" : "jackson1983",
  ];
  const keys = [...new Set(preferred)].slice(0, 7);
  if (keys.length !== 7) throw new Error("No se formó un dossier de siete fuentes.");
  return keys.map((key) => {
    const selected = tucanoSources[key];
    if (!selected) throw new Error(`Fuente Tucano desconocida: ${key}`);
    return selected;
  });
}

/**
 * Vía por entradas, para los mitos reescritos: una lista propia de claves, o de
 * `{ key, summary, limitation }` cuando el mito quiere decir qué aporta esa
 * obra a él en particular. La de arriba arma un reparto fijo con un solo
 * interruptor y se conserva como respaldo.
 */
export function entradasPropias(...entries) {
  const vistas = new Set();
  const salida = [];
  for (const entrada of entries) {
    const key = typeof entrada === "string" ? entrada : entrada?.key;
    const selected = tucanoSources[key];
    if (!selected) {
      const visto = typeof entrada === "string" ? entrada : JSON.stringify(entrada);
      throw new Error(`Fuente desconocida en tucano: ${visto}`);
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
