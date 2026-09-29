# Biblias V3 · las 42 comunidades, cerradas

Estado al 2026-09-28: **las 42 biblias V3 están terminadas**. De 2002 láminas del
plan, **1999 generadas** y **3 declaradas ausentes** con su razón
(`AUSENTES.json` de cada biblia). No queda ninguna lámina sin resolver.

Cubren todas las comunidades indígenas, los corpus mestizos y los mixtos que no
tenían biblia (wayúu, chamí, huitoto, muiscas, nasa y ette ennaka tienen la suya
aparte).

## Método

Fichas sobre papel blanco hueso y sólo paisajes y lugares a fondo completo; una
comunidad a la vez y, dentro de ella, capa por capa: tipos base → mortales →
míticos → colectivos → animales y criaturas → atrezo → arquitectura y fenómenos
→ paisajes y lugares (`scripts/mitos/prepare-biblia-tanda-v3.mjs`). Seis
biblias se revisaron capa por capa con el editor; las otras 36 se produjeron en
masa el 2026-09-28 por su pedido (`scripts/mitos/producir-biblia-v3.sh`).

Cada biblia tiene su `APROBACIONES.json`, su `BALANCE.json` y, las revisadas,
su `CIERRE.md` en `content/mitos-visuales/_openai/<corpus>/biblia-v3/`. Las
hojas de contacto se regeneran con `node scripts/mitos/hojas-biblia-v3.mjs <corpus>`
en `output/imagegen/_hojas/`.

| comunidad | láminas | estado | revisión |
|---|---|---|---|
| koguis | 96 de 96 | completa | capa por capa con el editor |
| katios | 108 de 109 | 1 declarada ausente | capa por capa con el editor |
| andoque | 70 de 70 | completa | capa por capa con el editor |
| u-wa | 76 de 76 | completa | capa por capa con el editor |
| guahibo-sikuani | 75 de 75 | completa | capa por capa con el editor |
| desana | 70 de 70 | completa | capa por capa con el editor |
| amazonia-mestizo-mixto | 87 de 87 | completa | en masa, revisión del editor en hoja |
| ansermas | 13 de 13 | completa | en masa, revisión del editor en hoja |
| antioquia-occidente-mixto | 53 de 53 | completa | en masa, revisión del editor en hoja |
| awa | 19 de 19 | completa | en masa, revisión del editor en hoja |
| barasana | 62 de 62 | completa | en masa, revisión del editor en hoja |
| bogota-sabana-mestizo | 57 de 57 | completa | en masa, revisión del editor en hoja |
| bolivar-cartagena-mestizo | 89 de 89 | completa | en masa, revisión del editor en hoja |
| boyaca-mestizo | 37 de 37 | completa | en masa, revisión del editor en hoja |
| caribe-restante-mestizo | 43 de 43 | completa | en masa, revisión del editor en hoja |
| choco-afro | 21 de 21 | completa | en masa, revisión del editor en hoja |
| cordoba-sinu-mestizo | 79 de 79 | completa | en masa, revisión del editor en hoja |
| cuycuyes | 18 de 19 | 1 declarada ausente | en masa, revisión del editor en hoja |
| eje-cafetero-mestizo | 39 de 39 | completa | en masa, revisión del editor en hoja |
| embera | 19 de 19 | completa | en masa, revisión del editor en hoja |
| eperara-siapidara | 21 de 21 | completa | en masa, revisión del editor en hoja |
| kuibas | 19 de 19 | completa | en masa, revisión del editor en hoja |
| makawanes | 26 de 26 | completa | en masa, revisión del editor en hoja |
| misak-guambianos | 55 de 55 | completa | en masa, revisión del editor en hoja |
| motilon-bari | 45 de 46 | 1 declarada ausente | en masa, revisión del editor en hoja |
| nukak-maku | 16 de 16 | completa | en masa, revisión del editor en hoja |
| orinoquia-llanera-mestizo | 79 de 79 | completa | en masa, revisión del editor en hoja |
| pacifico-sur-mestizo | 43 de 43 | completa | en masa, revisión del editor en hoja |
| pananes | 43 de 43 | completa | en masa, revisión del editor en hoja |
| pirsa | 15 de 15 | completa | en masa, revisión del editor en hoja |
| quillacingas | 49 de 49 | completa | en masa, revisión del editor en hoja |
| quimbaya | 18 de 18 | completa | en masa, revisión del editor en hoja |
| santander-mestizo | 88 de 88 | completa | en masa, revisión del editor en hoja |
| ticuna | 61 de 61 | completa | en masa, revisión del editor en hoja |
| tolima-huila-mestizo | 46 de 46 | completa | en masa, revisión del editor en hoja |
| tucano | 45 de 45 | completa | en masa, revisión del editor en hoja |
| ufaina | 19 de 19 | completa | en masa, revisión del editor en hoja |
| umbra | 15 de 15 | completa | en masa, revisión del editor en hoja |
| varios-sin-territorio | 84 de 84 | completa | en masa, revisión del editor en hoja |
| wounaan | 33 de 33 | completa | en masa, revisión del editor en hoja |
| yukpa | 13 de 13 | completa | en masa, revisión del editor en hoja |
| zenu | 35 de 35 | completa | en masa, revisión del editor en hoja |

## Cómo se cerró el hueco del filtro de OpenAI

Veinte láminas (casi todas figuras que el plan dibuja desnudas o que se definen
por el cuerpo) no pasaban el filtro de seguridad. Se resolvieron así, cada una
declarada en el `design.editorial` de su ficha con la silueta anterior guardada:

- **Cubiertas con la prenda que documenta el corpus**: los tipos misak con el
  tsitse; el hombre ansermá con la manta larga de los principales; la mujer
  quimbaya con la manta de la capa de 1603.
- **En silueta de un solo tono**, conservando en color los rasgos documentados
  que no son del cuerpo: el especialista huitoto y los seres del agua de
  Sitakara (andoque), Hesaa la Conga (eperara), las mujeres inventadas (koguis),
  Mama Manuela Caramaya y los guerreros pijaos (misak), la mujer y el niño barí,
  los tipos de niño de pirsa, ticuna y wounaan, el hombre y el muchacho
  quimbaya, y Manexca (zenú).
- **Declaradas ausentes** (3), porque no admiten otra solución sin inventar:
  Tipo base · mujer de Arma adulta (capa de contacto) (cuycuyes, tipos);
  Las mujeres de senos grandes del Bajía (katios, colectivos);
  Chibáig (motilon-bari, miticos). Su ficha sigue en el plan.

## Decisiones del editor en esta producción

- Antomiá paima (katíos) en carbón, no en piel.
- Urkoa (u'wa) como silueta sin especie.
- Las esferas de colores u'wa, concéntricas: en franjas se leían como la bandera.
- El «mar» sikuani es el agua dulce del borde del mundo, no una costa: el
  paisaje y la lámina del hermano, rehechos con orilla de sabana.
- El jaguar kogui, pardo y sin rosetas como pide su ficha, también en los
  estados de tigre de Nuánashe y Kashindukwe.

## Antes de publicar

- **Consultas abiertas**: barasana (ACAIPI), wounaan (protocolo del WPNP), misak
  (Cabildo) y los raizales del Caribe (Cátedra Raizal). Las láminas existen por
  pedido del editor; no deben publicarse antes de la consulta.
- Las 36 biblias producidas en masa están pendientes de la revisión del editor
  en hoja; sus `APROBACIONES.json` lo dicen así.
- Detalles abiertos de calidad: la luz de cine de animación de los paisajes
  desana, el caraiuru como antifaz (desana) y la chica extendida (sikuani).
