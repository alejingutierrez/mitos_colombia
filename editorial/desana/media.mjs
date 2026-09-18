import { andoqueMedia } from "../andoque/media.mjs";

const upperRioNegroApproximate = { latitude: 0.12, longitude: -69.45 };

function reused(slug) {
  const pair = andoqueMedia[slug];
  if (!pair) throw new Error(`Pareja Andoque desconocida: ${slug}`);
  return {
    horizontal: pair.horizontal,
    vertical: pair.vertical,
    reusedFrom: `andoque/${slug}`,
    ...upperRioNegroApproximate,
  };
}

export const desanaMedia = {
  "creacion-desana": reused("la-guerra-del-palo-hablador"),
  "el-origen-de-la-noche-desana": reused("el-sol-que-nace-en-araracuara"),
  "guelamun-ye-el-nieto-del-trueno": reused("la-venganza-de-los-brujos"),
  "nuguye-y-sepiro-fuego-y-creciente": reused(
    "huevo-de-chupaflor-el-diluvio-y-el-fuego",
  ),
  "yurupari": reused("los-grupos-de-mi-juventud"),
  "el-origen-de-la-mandioca-desana": reused(
    "el-retorno-de-plumon-de-fiebre",
  ),
  "gainpaya-y-el-origen-del-chontaduro": reused(
    "el-retorno-de-plumon-amarillo",
  ),
  "agamahsapu-y-el-tiempo-del-umari": reused(
    "el-aguila-canibal-y-la-madre-de-los-andoques",
  ),
};
