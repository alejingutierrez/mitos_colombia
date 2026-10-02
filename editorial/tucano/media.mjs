const vaupesApproximate = {
  latitude: 1.25,
  longitude: -70.23,
};

function approvedMedia(slug, horizontal, vertical) {
  return {
    horizontal,
    vertical,
    provenanceStatus: "approved",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...vaupesApproximate,
  };
}

export const tucanoMedia = {
  "cuando-la-danta-perdio-su-hegemonia": approvedMedia(
    "cuando-la-danta-perdio-su-hegemonia",
    "https://media.mitosdecolombia.com/blob/mitos/cuando-la-danta-perdio-su-hegemonia-tucano-openai-v1-1785350804402.jpg",
    "https://media.mitosdecolombia.com/blob/vertical/myth/cuando-la-danta-perdio-su-hegemonia-tucano-openai-v1-1785350925214.jpg",
  ),
  "el-origen-del-hombre": approvedMedia(
    "el-origen-del-hombre",
    "https://media.mitosdecolombia.com/blob/mitos/el-origen-del-hombre-tucano-openai-v1-1785351067489.jpg",
    "https://media.mitosdecolombia.com/blob/vertical/myth/el-origen-del-hombre-tucano-openai-v1-1785351203145.jpg",
  ),
  "la-aparicion-del-sol-del-viento-y-los-mares": approvedMedia(
    "la-aparicion-del-sol-del-viento-y-los-mares",
    "https://media.mitosdecolombia.com/blob/mitos/la-aparicion-del-sol-del-viento-y-los-mares-tucano-openai-v1-1785351355203.jpg",
    "https://media.mitosdecolombia.com/blob/vertical/myth/la-aparicion-del-sol-del-viento-y-los-mares-tucano-openai-v1-1785351485963.jpg",
  ),
  "los-blancos-dominan-a-los-indios": approvedMedia(
    "los-blancos-dominan-a-los-indios",
    "https://media.mitosdecolombia.com/blob/mitos/los-blancos-dominan-a-los-indios-tucano-openai-v1-1785351629171.jpg",
    "https://media.mitosdecolombia.com/blob/vertical/myth/los-blancos-dominan-a-los-indios-tucano-openai-v1-1785351774080.jpg",
  ),
  "yepa-abandona-la-tierra": approvedMedia(
    "yepa-abandona-la-tierra",
    "https://media.mitosdecolombia.com/blob/mitos/yepa-abandona-la-tierra-tucano-openai-v1-1785351894327.jpg",
    "https://media.mitosdecolombia.com/blob/vertical/myth/yepa-abandona-la-tierra-tucano-openai-v1-1785352023962.jpg",
  ),
  "yepa-castiaga-a-los-animales": approvedMedia(
    "yepa-castiaga-a-los-animales",
    "https://media.mitosdecolombia.com/blob/mitos/yepa-castiaga-a-los-animales-tucano-openai-v2-1785352717639.jpg",
    "https://media.mitosdecolombia.com/blob/vertical/myth/yepa-castiaga-a-los-animales-tucano-openai-v2-1785352851618.jpg",
  ),
  "la-semilla-de-la-yuca-tucano": approvedMedia(
    "la-semilla-de-la-yuca-tucano",
    "https://media.mitosdecolombia.com/blob/mitos/la-semilla-de-la-yuca-tucano-tucano-openai-v2-1785352975854.jpg",
    "https://media.mitosdecolombia.com/blob/vertical/myth/la-semilla-de-la-yuca-tucano-tucano-openai-v1-1785352559400.jpg",
  ),
};
