import { defineNasaMyth } from "../define-editorial-myth.mjs";
import {
  composeNasaHistory,
  composeNasaSimilarities,
  composeNasaVersions,
} from "../compose-sections.mjs";

const mito = `Los ancianos de Calderas contaban que la región estuvo llena de Pijaos y que el Trueno vivía en Sukafi. Desde una piedra alta lanzó su boleadora y abatió a sus adversarios hasta Kuetando. Luego avisó a los médicos que podían desmontar, porque el peligro había pasado, y se retiró a la laguna de Vichaguau.

Los cabildos antiguos caminaban de noche hasta esa laguna para hablar con él. Allí enfriaban las varas de mando y pedían remedios para que muriera poca gente. Los médicos de tiempos posteriores ya no se atrevían a buscarlo: decían que no estaban preparados y que el Trueno podía matarlos.

Otro relato lo mostraba con apariencia de viejo. Un hombre cosechaba papas en Pueblito cuando vio acercarse a un desconocido robusto, de mirada inquietante y sombrero grande de ramo. El visitante pidió tierra para trabajar en compañía, pero la familia desconfió y apenas le respondió. Entonces atrajo una nube negra. La lluvia cayó con tanta fuerza que atravesó el rancho y llenó el papal. El viejo permaneció sentado bajo el agua, como si la tormenta no lo tocara. Cuando la familia huyó, se llevó a varias mujeres. Los médicos explicaron que aquel forastero era el Trueno; al perseguirlo solo encontraron un barrial.

En dos versiones de la misma memoria, una gran cosecha se volvió laguna durante un aguacero. Una niña logró subir al filo y salvarse; los adultos se quedaron abajo junto a un viejo de capa o sombrero de ramo. Desde lo alto, la niña vio cómo el agua cubría el cultivo. Se decía que las personas no habían muerto, sino que el Trueno se las había llevado y continuaban viviendo dentro de la laguna.

Así, el Trueno no era solo el ruido del cielo. Podía defender, aconsejar y sostener a las autoridades, pero también aparecer como un extraño que pone a prueba la confianza y transforma un terreno cultivado en agua. Su fuerza permanecía vinculada a las lagunas, a las crecientes y a quienes sabían acercarse con preparación.`;

const historia = composeNasaHistory({
  informants:
    "Bernal atribuye el primer relato a Martín Kuskue y el segundo a Rosario Iko; las dos variantes de la laguna proceden de Justo Muse y Juan Petins.",
  sourceDetail:
    "El artículo conecta el Trueno con las varas de mando, los médicos tradicionales, las lagunas y la memoria de conflictos con los Pijaos. También señala que Llíban puede ser entendido como hijo del Trueno o como el Trueno mismo. Esta cercanía explica por qué la página dialoga con Llíban y Juan Tama, pero no autoriza a fundirlos.",
  editorialDecision:
    "La ficha anterior reducía el personaje a una escena atmosférica. La nueva edición integra las dos entradas numeradas “El Trueno” y sus variantes, conserva la ambivalencia entre protector y raptor y evita presentar a los Pijaos históricos como criaturas sobrenaturales.",
});

const versiones = composeNasaVersions({
  variantDetail:
    "La primera entrada muestra al Trueno como defensor que destruye enemigos, se retira a Vichaguau y ayuda a médicos y cabildos. La segunda lo presenta como un viejo que pide tierra, convoca lluvia y se lleva personas. Sus dos variantes desplazan el énfasis hacia una cosecha convertida en laguna: cambia el número de familiares, la ropa del viejo y quién consigue subir al filo.",
  relationDetail:
    "Llíban comparte la boleadora, la lucha y el retiro acuático; Juan Tama comparte nacimiento, autoridad y vínculo con aguas de montaña. Son figuras relacionadas, no nombres intercambiables en todas las fuentes.",
});

const similitudes = composeNasaSimilarities({
  comparisonDetail:
    "En el Popol Vuh, tormentas, agua y oscuridad también marcan rupturas entre formas de vida y ponen a prueba a los seres que intentan habitar el mundo. La coincidencia reside en que un fenómeno celeste actúa como agente narrativo; el libro k’iche’ no contiene el cabildo, las varas ni las lagunas de autoridad de Calderas.",
  internalDetail:
    "Dentro del corpus Nasa, el paralelo más cercano está en Llíban, cuya culebra-boleadora suena como rayo, y en Juan Tama, nacido durante una lluvia intensa y reconocido como hijo del Trueno. “La visita del joven desconocido” vuelve a unir un forastero, una laguna, una nube negra y la intervención de médicos.",
});

export default defineNasaMyth({
  slug: "el-trueno",
  title: "El Trueno",
  mito,
  historia,
  versiones,
  leccion:
    "La autoridad protege cuando escucha el territorio y reconoce fuerzas que no puede dominar.",
  similitudes,
  excerpt:
    "El Trueno habita lagunas, auxilia a las autoridades y también aparece como un viejo que transforma cultivos y se lleva personas.",
  seoTitle: "El Trueno: mito Nasa de Calderas",
  seoDescription:
    "Lee las versiones Nasa del Trueno: protector de cabildos, viejo de la tormenta y fuerza ligada a lagunas y varas de mando.",
  focusKeywords: [
    "El Trueno Nasa",
    "mito Nasa del Trueno",
    "Trueno Calderas",
    "mitología de Tierradentro",
    "laguna de Vichaguau",
    "pueblo Nasa",
  ],
  tags: ["Nasa", "trueno", "laguna", "tormenta", "protección"],
  researchNotes: `NÚCLEO: dos entradas de Bernal y dos variantes conservadas como ciclo.
FUENTE: Martín Kuskue, Rosario Iko, Justo Muse y Juan Petins; intérprete Marco Antonio Penkue.
GEOGRAFÍA: Calderas como punto aproximado; Sukafi, Kuetando y Vichaguau no se geocodifican sin verificación comunitaria.
IMAGEN: se conserva el par publicado; ambas orientaciones fueron auditadas.`,
});
