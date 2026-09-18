import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Cuando todavía había oro entre los habitantes de Tierradentro, los médicos se reunieron para preparar un remedio. El principal llevaba un sombrero de oro. Hicieron crecer una quebrada y, entre las aguas, recogieron al hijo del Trueno.

El niño fue criado por muchachas muy jóvenes, pero ellas solo resistían unos meses. Cuando pudo recibir otros alimentos, creció y recibió el nombre de Llíban. Llegó a ser un médico poderoso y un cacique de Calderas.

Una fuerza Pijao avanzó para matarlo. Lo rodearon por el Alto de Belén, la Muralla y la quebrada Kukiyú. Llíban pidió a un criado que buscara su boleadora, guardada dentro de una olla. El muchacho abrió el recipiente y encontró una culebra verde enorme; tuvo miedo y regresó sin tocarla. Llíban fue personalmente, sacó la culebra y la hizo girar como arma. El golpe sonó como un trueno y sus adversarios cayeron hasta Togoima. Según otra voz, la culebra era el rayo.

En una versión, una cacica ordenó a los médicos llamar una creciente. De allí tomaron al niño y lo criaron. Llíban no aceptó vivir encerrado en una casa y se instaló en Eshufi Ik, la laguna del oso. Preparó una huerta con papa, maíz, arveja y repollo para atraer a quienes entraban a quitársela. Desde Kuetaguata los enfrentó.

Antes de irse, aconsejó a las cacicas respetar a los mayores, impedir que la tierra pasara a manos de extranjeros y llamarlo mediante los médicos si el peligro regresaba. Otra versión hace de Llíban un muchacho humano que recibe de un viejo una pequeña boleadora. Él también encuentra la culebra en una olla, combate y anuncia que vivirá en una laguna porque no morirá.

Hijo del Trueno, Trueno mismo, niño de la creciente o muchacho transformado: las voces no coinciden por completo. Todas sitúan su fuerza en el agua, el rayo, la autoridad y la defensa de la tierra.`;

const historia = composeNasaHistory({
  informants:
    "La narración principal fue atribuida a Celia Urriaga; las dos variantes proceden de Felisa Ñunda y Victoriano Piñakué.",
  sourceDetail:
    "Bernal observa en su introducción que Llíban es considerado hijo del Trueno, aunque varias personas sostenían que era el propio Trueno. La publicación lo vincula con cacicazgo, medicina, lagunas, defensa territorial y memoria del conflicto con los Pijaos.",
  editorialDecision:
    "La revisión conserva las tres formas de origen en vez de escoger una genealogía única. También corrige la imagen textual anterior, que convertía el combate en una fantasía militar genérica, y devuelve el protagonismo a la culebra-boleadora y a los consejos territoriales.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "En la primera narración, médicos recogen al hijo del Trueno en una quebrada y Llíban usa una culebra-rayo. En la versión de Felisa Ñunda, una cacica convoca la creciente y el héroe vive en Eshufi Ik, cultiva una huerta y deja mandatos. En la de Victoriano Piñakué, Llíban nace de gente humana y recibe la boleadora de un viejo.",
  relationDetail:
    "El artículo acerca a Llíban al Trueno y a Juan Tama, pero también lo distingue de Juan Chiracol. La página conjunta de los dos caciques conserva su reparto oriental y occidental de Calderas sin borrar sus relatos individuales.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "El Popol Vuh narra héroes que vencen pruebas mediante objetos y fuerzas que no funcionan como armas ordinarias. La coincidencia está en que inteligencia, parentesco y potencia natural se reúnen en una defensa; no existe en el texto k’iche’ la culebra-boleadora, la laguna del oso ni el mandato sobre los resguardos.",
  internalDetail:
    "Juan Tama comparte nacimiento acuático, vínculo con el Trueno, autoridad y defensa territorial. Juan Chiracol también combate, aconseja no vender las tierras y se retira a una laguna. La cercanía explica por qué Bernal vio semejanzas con Juan Tama, pero cada ciclo conserva nombres, lugares y versiones propios.",
});

export default defineNasaMyth({
  slug: "lliban-el-hijo-del-trueno",
  title: "Llíban, el hijo del Trueno",
  mito,
  historia,
  versiones,
  leccion:
    "Defender el territorio exige fuerza, consejo colectivo y memoria de quienes lo cuidaron.",
  similitudes,
  excerpt:
    "Llíban nace de una creciente, empuña una culebra-rayo y deja consejos para proteger mayores, comunidad y territorio.",
  seoTitle: "Llíban, hijo del Trueno: mito Nasa",
  seoDescription:
    "Lee las tres versiones Nasa de Llíban: su nacimiento en el agua, la culebra-boleadora y sus consejos para defender el territorio.",
  focusKeywords: [
    "Llíban hijo del Trueno",
    "mito Nasa Llíban",
    "culebra boleadora",
    "mitología de Tierradentro",
    "Eshufi Ik",
    "relatos de Calderas",
  ],
  tags: ["Nasa", "Llíban", "trueno", "laguna", "resistencia"],
  researchNotes: `NÚCLEO: se integran narración principal y dos variantes explícitas.
FUENTES ORALES: Celia Urriaga, Felisa Ñunda y Victoriano Piñakué.
RELACIÓN: hijo del Trueno o Trueno mismo; no se normaliza la divergencia.
GEOGRAFÍA: Calderas aproximado; topónimos históricos se conservan sin coordenadas especulativas.
IMAGEN: el par existente se audita como candidato a sustitución por iconografía guerrera genérica.`,
});
