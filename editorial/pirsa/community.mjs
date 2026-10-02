export const pirsaCommunityPage = {
  title: "Pirsa / Pirza",
  description:
    "Archivo crítico de la noche de Tamaracunga y de la memoria histórica del territorio Pirsa, hoy nombrado también Pirza.",
  longDescription:
    "La colección Pirsa conserva una sola página porque el episodio de Tamaracunga es la única narración localizada que alcanza una trama completa y una cadena documental suficiente. Pedro Cieza de León la publicó en 1553 como historia ejemplar de bautismo: Tamaracunga, hermano joven del señor de Pirsa, viaja a Anserma mientras atraviesa una noche de apariciones y alteraciones que el cronista interpreta desde el cristianismo. Esta edición recupera los hechos narrados sin presentar como voz indígena la teología del conquistador. También distingue el nombre histórico Pirsa de la grafía Pirza que usa el actual Resguardo Escopetera Pirza. Esa continuidad territorial merece atención, pero no autoriza a identificar sin matices la sociedad del siglo XVI con todas las identidades contemporáneas. Los motivos del tesoro de Picará y la Piedra Herrada quedan registrados como contexto local y no como mitos nuevos, pues las fuentes disponibles no preservan relatos autónomos suficientemente desarrollados.",
  imagePrompt:
    "Ilustración editorial 2D full paper cut y paper quilling, de acabado gráfico plano y capas planas, del territorio Pirsa/Pirza: montañas del occidente de Caldas, camino hacia Anserma, casas de paja, aves oscuras ambiguas y una iglesia humilde al amanecer; sin demonios literales, cuernos, levitación espectacular, Diablo del Carnaval de Riosucio, regalia inventada, tocados panindígenas, símbolos aztecas, mayas o muiscas, sin fotografía, objeto físico, maqueta, diorama, CGI ni render 3D.",
};

export const pirsaCommunitySeo = {
  meta_title: "Pirsa / Pirza: Tamaracunga y su archivo colonial",
  meta_description:
    "Explora la noche de Tamaracunga con una lectura crítica de Cieza, la memoria territorial Pirza y las variantes coloniales posteriores.",
  meta_keywords:
    "Pirsa, Pirza, Tamaracunga, Anserma, Escopetera Pirza, relato colonial, Juan de Santa María",
  og_title: "Pirsa / Pirza: la noche de Tamaracunga",
  og_description:
    "Una narración revisada desde la crónica de 1553, fuentes comunitarias y estudios críticos sobre la conversión colonial.",
  twitter_title: "Pirsa / Pirza y la noche de Tamaracunga",
  twitter_description:
    "Conoce qué cuenta la fuente temprana y qué añadieron las versiones demonológicas y regionales.",
  canonical_path: "/comunidades/pirsa",
  summary:
    "La revisión conserva una URL, corrige la identidad de Tamaracunga y del fraile, separa las variantes tardías y reemplaza dos maquetas por ilustraciones 2D full paper cut.",
  focus_topics: [
    "Tamaracunga",
    "Pirsa y Pirza",
    "viaje a Anserma",
    "fray Juan de Santa María",
    "conversión colonial",
    "variantes demonológicas",
  ],
};

export function pirsaCommunitySeoPayload() {
  return {
    ...pirsaCommunitySeo,
    keywords: pirsaCommunitySeo.meta_keywords
      .split(",")
      .map((keyword) => keyword.trim()),
    focus_topics: [...pirsaCommunitySeo.focus_topics],
  };
}
