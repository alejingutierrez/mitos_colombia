const amazonasApproximate = {
  latitude: -3.76,
  longitude: -70.27,
};

function approvedMedia(slug, horizontal, vertical) {
  return {
    horizontal,
    vertical,
    provenanceStatus: "approved",
    provider: "openai",
    model: "gpt-image-2",
    provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
    ...amazonasApproximate,
  };
}

export const ticunaMedia = {
  creacion: approvedMedia(
    "creacion",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/creacion-ticuna-openai-v3-1785345237688.jpg",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/creacion-ticuna-openai-v2-1785345058596.jpg",
  ),
  "el-combate-del-sueno-y-la-palabra": approvedMedia(
    "el-combate-del-sueno-y-la-palabra",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/el-combate-del-sueno-y-la-palabra-ticuna-openai-v1-1785293551012.jpg",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/el-combate-del-sueno-y-la-palabra-ticuna-openai-v1-1785293711037.jpg",
  ),
  "origen-del-sol-tikuna": approvedMedia(
    "origen-del-sol-tikuna",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/origen-del-sol-tikuna-ticuna-openai-v1-1785293823833.jpg",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/origen-del-sol-tikuna-ticuna-openai-v1-1785293966662.jpg",
  ),
  "origen-de-la-luna-tikuna": approvedMedia(
    "origen-de-la-luna-tikuna",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/origen-de-la-luna-tikuna-ticuna-openai-v1-1785294116500.jpg",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/origen-de-la-luna-tikuna-ticuna-openai-v1-1785294265299.jpg",
  ),
  "origen-del-friaje-tikuna": approvedMedia(
    "origen-del-friaje-tikuna",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/origen-del-friaje-tikuna-ticuna-openai-v1-1785294420183.jpg",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/origen-del-friaje-tikuna-ticuna-openai-v1-1785294576161.jpg",
  ),
  "la-canoa-de-moe": approvedMedia(
    "la-canoa-de-moe",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/mitos/la-canoa-de-moe-ticuna-openai-v1-1785294745286.jpg",
    "https://c5htob7za0dl3b5x.public.blob.vercel-storage.com/vertical/myth/la-canoa-de-moe-ticuna-openai-v1-1785294897388.jpg",
  ),
};
