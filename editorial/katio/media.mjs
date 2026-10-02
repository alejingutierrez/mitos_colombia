const vertical = {
  "a-transformacion-del-hombre-que-no-podia-cazar":
    "https://media.mitosdecolombia.com/blob/vertical/myth/a-transformacion-del-hombre-que-no-podia-cazar-1784912942273.jpg",
  ancastor:
    "https://media.mitosdecolombia.com/blob/vertical/myth/ancastor-1785221089275.jpg",
  antomia:
    "https://media.mitosdecolombia.com/blob/vertical/myth/antomia-1784813130044.jpg",
  aribamias:
    "https://media.mitosdecolombia.com/blob/vertical/myth/aribamias-1784813073965.jpg",
  cobaima:
    "https://media.mitosdecolombia.com/blob/vertical/myth/cobaima-1784913453805.jpg",
  coste:
    "https://media.mitosdecolombia.com/blob/vertical/myth/coste-1784813122328.jpg",
  "creacion-katios":
    "https://media.mitosdecolombia.com/blob/vertical/myth/creacion-katios-1784813055936.jpg",
  dabeiba:
    "https://media.mitosdecolombia.com/blob/vertical/myth/dabeiba-1784813178154.jpg",
  dobaida:
    "https://media.mitosdecolombia.com/blob/vertical/myth/dobaida-1785221089275.jpg",
  "el-origen-del-sol-y-la-luna":
    "https://media.mitosdecolombia.com/blob/vertical/myth/el-origen-del-sol-y-la-luna-1784912881079.jpg",
  "el-tesoro-de-dabeiba":
    "https://media.mitosdecolombia.com/blob/vertical/myth/el-tesoro-de-dabeiba-1785221089275.jpg",
  "fragmentos-de-otras-tradiciones":
    "https://media.mitosdecolombia.com/blob/vertical/myth/fragmentos-de-otras-tradiciones-1784813098480.jpg",
  herupotoarra:
    "https://media.mitosdecolombia.com/blob/vertical/myth/herupotoarra-1784813168687.jpg",
  "icades-name":
    "https://media.mitosdecolombia.com/blob/vertical/myth/icades-name-1784813097639.jpg",
  "la-escalera-del-cielo":
    "https://media.mitosdecolombia.com/blob/vertical/myth/la-escalera-del-cielo-1785221089275.jpg",
  "los-bibidigomias":
    "https://media.mitosdecolombia.com/blob/vertical/myth/los-bibidigomias-1784813236747.jpg",
  "los-domicoes":
    "https://media.mitosdecolombia.com/blob/vertical/myth/los-domicoes-1784813157432.jpg",
  sever:
    "https://media.mitosdecolombia.com/blob/vertical/myth/sever-1784813142298.jpg",
  "tradicion-del-cerro":
    "https://media.mitosdecolombia.com/blob/vertical/myth/tradicion-del-cerro-1784813102645.jpg",
  "tradiciones-relativas-a-la-conquista":
    "https://media.mitosdecolombia.com/blob/vertical/myth/tradiciones-relativas-a-la-conquista-1785221089275.jpg",
  baha:
    "https://media.mitosdecolombia.com/blob/vertical/myth/baha-1785221089275.jpg",
};

const horizontal = {
  "a-transformacion-del-hombre-que-no-podia-cazar":
    "https://media.mitosdecolombia.com/blob/mitos/a-transformacion-del-hombre-que-no-podia-cazar-1784768166597.jpg",
  ancastor:
    "https://media.mitosdecolombia.com/blob/mitos/ancastor-1785221089275.jpg",
  antomia:
    "https://media.mitosdecolombia.com/blob/mitos/antomia-1784765533101.jpg",
  aribamias:
    "https://media.mitosdecolombia.com/blob/mitos/aribamias-1784765482919.jpg",
  cobaima:
    "https://media.mitosdecolombia.com/blob/mitos/cobaima-1784768539343.jpg",
  coste:
    "https://media.mitosdecolombia.com/blob/mitos/coste-1784765526741.jpg",
  "creacion-katios":
    "https://media.mitosdecolombia.com/blob/mitos/creacion-katios-1784765476448.jpg",
  dabeiba:
    "https://media.mitosdecolombia.com/blob/mitos/dabeiba-1785221089275.jpg",
  dobaida:
    "https://media.mitosdecolombia.com/blob/mitos/dobaida-1785221089275.jpg",
  "el-origen-del-sol-y-la-luna":
    "https://media.mitosdecolombia.com/blob/mitos/el-origen-del-sol-y-la-luna-1784768121481.jpg",
  "el-tesoro-de-dabeiba":
    "https://media.mitosdecolombia.com/blob/mitos/el-tesoro-de-dabeiba-1785221089275.jpg",
  "fragmentos-de-otras-tradiciones":
    "https://media.mitosdecolombia.com/blob/mitos/fragmentos-de-otras-tradiciones-1784765500423.jpg",
  herupotoarra:
    "https://media.mitosdecolombia.com/blob/mitos/herupotoarra-1784765566773.jpg",
  "icades-name":
    "https://media.mitosdecolombia.com/blob/mitos/icades-name-1784765512832.jpg",
  "la-escalera-del-cielo":
    "https://media.mitosdecolombia.com/blob/mitos/la-escalera-del-cielo-1785221089275.jpg",
  "los-bibidigomias":
    "https://media.mitosdecolombia.com/blob/mitos/los-bibidigomias-1784765637112.jpg",
  "los-domicoes":
    "https://media.mitosdecolombia.com/blob/mitos/los-domicoes-1784765564192.jpg",
  sever:
    "https://media.mitosdecolombia.com/blob/mitos/sever-1784765549399.jpg",
  "tradicion-del-cerro":
    "https://media.mitosdecolombia.com/blob/mitos/tradicion-del-cerro-1784765518585.jpg",
  "tradiciones-relativas-a-la-conquista":
    "https://media.mitosdecolombia.com/blob/mitos/tradiciones-relativas-a-la-conquista-1785221089275.jpg",
  baha:
    "https://media.mitosdecolombia.com/blob/mitos/baha-1785221089275.jpg",
};

const altoAndagueda = new Set(["cobaima", "el-origen-del-sol-y-la-luna"]);
const mixto = new Set(["dobaida", "el-tesoro-de-dabeiba"]);

export const katioMedia = Object.fromEntries(
  Object.keys(horizontal).map((slug) => {
    const coordinates = altoAndagueda.has(slug)
      ? { latitude: 5.411, longitude: -76.415 }
      : mixto.has(slug)
        ? { latitude: 7.0006, longitude: -76.2664 }
        : { latitude: 6.75611, longitude: -76.18528 };
    return [
      slug,
      {
        horizontal: horizontal[slug],
        vertical: vertical[slug],
        ...coordinates,
      },
    ];
  }),
);
