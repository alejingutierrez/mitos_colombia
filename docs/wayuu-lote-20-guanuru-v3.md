# Lote 20 — Guanuru — Biblia visual Wayuu V3

Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_02`  
Fecha de cierre: 2026-09-04  
Calidad: `medium`  
Modelo: `gpt-image-2`  
Modo: generación desde texto, sin referencias de imagen locales  
Encuadre: inmersivo a sangre, profundidad física por capas, sin soporte, cartón, mesa ni estudio visibles

## Resultado

Guanuru queda completo con 18 de 18 modelos requeridos:

- 13 modelos nuevos seleccionados en este lote;
- cinco modelos previamente aprobados y reutilizados: presencia y estados de
  Wanuru, presencia de Yolujaa, chinchorro y ranchería Wayuu;
- cero modelos pendientes del mito;
- 11 intentos rechazados y conservados con causa y SHA-256;
- progreso total: 319/389 modelos, 70 pendientes y 21/27 mitos completos.

## Qué cambió antes de producir

La ficha editorial vigente declara que no existe aquí un cuento tradicional
autónomo de Guanuru: compone motivos etnográficos dispersos. Por eso la pasada
de investigación no trató el texto como canon cerrado. La lectura directa de
Roberto Pineda Giraldo permitió establecer límites:

- Guanuru aparece en testimonios históricos como presencia menor o
  intermediaria, pero las equivalencias con Wanuru y Yoruja son inestables;
- la mariposa nocturna blanca se atribuye a Wanuru o a la visita de un pariente
  muerto, no a una anatomía fija de Guanuru;
- casas desocupadas, ruidos y el muerto que deshace sus pasos son motivos
  relacionados, no prueba de un único monstruo invisible;
- las calaveras de caballo junto a viviendas son una práctica postcontacto;
- las apariencias de rey, alijuna, Wayuu u ojos de fuego recogidas en fuentes
  históricas no se convirtieron en cuerpo canónico.

La reauditoría corrigió además dos coberturas falsas: la persona enferma no es
parte de la ficha de la `outsü` y la familia no es mobiliario de la casa. El
paciente recibió identidad y estados, la familia una gramática propia y los
pasos sin huellas una regla de fenómeno. El lote pasó de nueve a trece modelos
nuevos. Al contar los identificadores únicos se corrigió también una deriva
previa de dos unidades: el inventario real contiene 355 entidades, 317
requeridas y 389 activos.

## Diseño cultural y mágico

Guanuru y Yoruja no tienen cuerpo humano o demoníaco. Guanuru se resuelve como
compresión de capas domésticas; Yoruja como continuidad de sombra entre un
montículo, una grieta costera y un matorral. Los pasos existen como respuestas
materiales consecutivas sin huellas ni autor visible. La magia se vuelve
imaginativa a través de profundidad, oclusión, materia y distancia, no mediante
auras, portales o efectos digitales.

Los humanos llevan conjuntos Wayuu completos y reversibles:

- hombres con `Kotin` dominante sobre `Kemiisa`, faja secundaria y abarcas;
- `outsü` con `Wayuushein` larga sobre pechera y waireñas;
- familia con cuatro conjuntos diferentes, dos femeninos y dos masculinos;
- ningún uniforme de prenda inferior, torso descubierto, kana, marca clanil o
  pintura facial inventada.

## Producción y QA

| Ronda | Generadas | Seleccionadas | Motivo principal |
|---|---:|---:|---|
| Base | 13 | 4 | Cobertura inicial; detectó errores de extras, materiales y tono |
| Corrección 01 | 9 | 7 | Eliminó mano, animal, figura oculta y materiales fotográficos |
| Corrección 02 | 2 | 2 | Fijó tres anclas de Yoruja y retiró observadores del estado |
| **Total seleccionado** |  | **13** | Cobertura nueva completa |

Los rechazos incluyen oscuridad de terror, calzado discontinuo, una persona
oculta tras la mariposa, animales no pedidos, mariposa de color incorrecto,
mano junto al cráneo, tierra y arquitectura fotográficas, ausencia del
montículo y observadores adicionales. Ningún intento fue sobrescrito.

## Evidencias reproducibles

- inventario y contratos: `content/mitos-visuales/wayuu.v3.json`;
- direcciones: `editorial/wayuu/guanuru-directions-v3.mjs`;
- selección con hashes: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-20-guanuru-medium/selection.json`;
- selección acumulada: `content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json`;
- contacto final: `output/imagegen/wayuu-v3-production/guanuru-selected-contact-sheet.jpeg`;
- protocolo de indumentaria: `docs/wayuu-indumentaria-y-pintura-v3.md`.

## Fuente primaria principal

Roberto Pineda Giraldo, *Aspectos de la magia en la Guajira*, edición digital
del ICANH. Las páginas relevantes en la edición consultada cubren muerte,
Wanuru/Yoruja, casas y sueños (78-86), calaveras de caballo (101-102) y la
confusión histórica de nombres, incluido Guanuru (144-149).

https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/248/272/1634?inline=1

## Próxima compuerta

Quedan seis mitos incompletos y 70 modelos sin selección. El siguiente lote se
decidirá por menor cobertura faltante después de reauditar la fuente completa:
*La majayura que pierde a los hombres* y *Umarala* tienen nueve modelos
pendientes cada uno. Ese empate no autoriza generar antes de separar personajes,
estados, objetos, espacios y fenómenos de sus variantes.
