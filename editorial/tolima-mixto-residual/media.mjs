const slugs = [
  "la-madre-agua",
  "la-candileja",
  "la-muelona",
  "el-cazador",
  "el-tunjo",
  "el-guango",
  "el-silbador",
  "brujas-y-duendes",
  "la-tarasca",
  "el-chenche",
  "dioses-lares",
];

const coordinatesBySlug = {
  "la-madre-agua": [4.43889, -75.23222],
  "la-candileja": [4.43889, -75.23222],
  "la-muelona": [4.14924, -74.88429],
  "el-cazador": [4.01167, -75.605],
  "el-tunjo": [4.43889, -75.23222],
  "el-guango": [4.43889, -75.23222],
  "el-silbador": [3.72361, -75.48333],
  "brujas-y-duendes": [4.43889, -75.23222],
  "la-tarasca": [4.43889, -75.23222],
  "el-chenche": [3.79936, -75.19467],
  "dioses-lares": [3.6231, -75.09499],
};

export const tolimaMixtoResidualMedia = Object.fromEntries(
  slugs.map((slug) => {
    const [latitude, longitude] = coordinatesBySlug[slug];
    return [
      slug,
      {
        horizontal: `pending://tolima-mixto-residual/${slug}/horizontal`,
        vertical: `pending://tolima-mixto-residual/${slug}/vertical`,
        provenanceStatus: "pending",
        provider: "openai",
        model: "gpt-image-2",
        provenanceKeys: [`${slug}:horizontal`, `${slug}:vertical`],
        latitude,
        longitude,
      },
    ];
  }),
);
