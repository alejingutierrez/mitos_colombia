export const emberaCommunityPage = {
  title: "Emberá",
  description:
    "Archivo Emberá del Chocó con relatos atribuidos a voces y territorios concretos, sin confundir Dóbida, Katío y Chamí como una comunidad única.",
  longDescription:
    "Emberá nombra un pueblo amplio y diverso, no una comunidad homogénea. Las fuentes contemporáneas distinguen, entre otros, ámbitos Dóbida —gente de río en cuencas como Atrato, Bojayá y Baudó— y Eyábida, donde se sitúan tradiciones Katío y Chamí. Esta revisión devuelve cada relato a la procedencia que puede sostenerse: los ciclos documentados en Río Frío y Lomaprieta pasan al expediente Chamí; Cobaima, Dabeiba, Río Verde y otras memorias identificables pasan al expediente Katío; La Yesca queda entre las leyendas populares del Chocó. La colección Emberá genérica conserva “Los Burumia” porque la narración de Odilia Dogiramá se sitúa en Usagará y Bojayá, dentro de un ámbito Dóbida, pero la taxonomía actual del sitio todavía no posee una comunidad Dóbida. La página declara ese límite en vez de inventar una clasificación o presentar un relato como resumen de toda la cultura Emberá.",
  imagePrompt:
    "Ilustración full paper cut y paper quilling del territorio fluvial Emberá del Chocó: río Bojayá, selva lluviosa, canoa, comunidad sobre un alto y capas de agua, sin fotografía, maqueta física ni estereotipos panindígenas",
};

export const emberaCommunitySeo = {
  meta_title: "Mitos Emberá: voces Dóbida, Katío y Chamí",
  meta_description:
    "Explora el archivo Emberá con procedencias diferenciadas, fuentes y contexto sobre Los Burumia, Bojayá y las tradiciones Dóbida, Katío y Chamí.",
  meta_keywords:
    "mitos Emberá, pueblo Emberá, Emberá Dóbida, Emberá Katío, Emberá Chamí, Los Burumia, río Bojayá, tradición oral Chocó",
  og_title: "Mitos Emberá con territorio, voces y fuentes",
  og_description:
    "Un archivo que distingue tradiciones Dóbida, Katío y Chamí y conserva Los Burumia dentro de su contexto fluvial en Bojayá.",
  twitter_title: "Mitos Emberá con fuentes y territorio",
  twitter_description:
    "Explora Los Burumia y la revisión que diferencia ámbitos Dóbida, Katío y Chamí.",
  canonical_path: "/comunidades/embera",
  summary:
    "Esta colección no usa Emberá como una etiqueta indiferenciada. La revisión identifica la procedencia de cada narración y traslada a Chamí, Katío o tradición popular chocoana las páginas que pueden adscribirse con evidencia. “Los Burumia”, narrado por Odilia Dogiramá, permanece en el archivo Emberá genérico porque transcurre en Usagará y Bojayá, territorio asociado hoy con comunidades Dóbida, una categoría aún ausente de la taxonomía del sitio. El relato conserva su URL, incorpora fuentes publicables, corrige la geografía y reemplaza una pareja visual que representaba episodios inventados.",
  focus_topics: [
    "mitología Emberá",
    "Emberá Dóbida",
    "Los Burumia",
    "Bojayá",
    "tradición oral",
    "Chocó",
  ],
};

export function emberaCommunitySeoPayload() {
  return {
    ...emberaCommunitySeo,
    keywords: emberaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...emberaCommunitySeo.focus_topics],
  };
}
