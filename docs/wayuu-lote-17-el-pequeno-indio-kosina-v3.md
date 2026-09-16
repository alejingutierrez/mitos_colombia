# Lote 17 · El pequeño indio Kosina · Biblia Wayuu V3

**Estado:** `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_01`  
**Calidad:** `medium`  
**Generación:** OpenAI API, `gpt-image-2`, texto solamente  
**Referencias locales:** ninguna  
**Cobertura:** 29/29 modelos del mito; 25 nuevos y 4 reutilizados

## Corrección cultural previa al diseño

La palabra `Kosina/Kusina` no se resolvió como si fuera simplemente el nombre
propio de un personaje Wayuu. Las fuentes consultadas documentan varios usos:

- Parques Nacionales registra Cosina o Kosina entre grupos históricamente
  señalados en la Alta Guajira y los diferencia de los actuales ocupantes
  Wayuu de la Makuira;
- MinCultura documenta `kusina` como término usado para otros pueblos
  indígenas al sur del territorio Wayuu;
- Michel Perrin registra sentidos relacionales, históricos y también una
  interpretación para antiguos cazadores guajiros o Wayuu empobrecidos de
  zonas remotas.

La producción conserva esa polisemia. El protagonista y su madre usan el
alcance `kusina_identity_unresolved`; el aliado, jefe y colectivos usan
`regional_indigenous_unresolved`. Ninguna imagen afirma una etnia, clan,
fisonomía o traje tradicional exactos.

## Reauditoría del inventario

La relectura primaria añadió once entidades y convirtió a los dueños de
caballos, antes embebidos, en colectivo con modelo propio. El denominador de la
Biblia pasó de 294 a 306 activos.

El mito ahora registra por separado:

- joven kusina, madre, aliado, jefe de fiesta, viajeros del camino y dueños;
- caballo principal, hermano menor, madre y otros hermanos, lagartijas y
  burros;
- arco y flechas, faja, manea, caja/tambor y trupillo sancochado;
- patilla, ahuyama, fríjol y trupillo;
- huellas menguantes, roza, casa, pista, corral y cueva subterránea;
- territorio general de Alta Guajira.

Se retiró la reutilización de `rancheria_wayuu__spatial_model`: Chaves solo
habla de una casa y no permite atribuir su arquitectura. También se reemplazó
el rebaño genérico por una familia equina específica.

## Indumentaria

Como la fuente no describe la ropa, todos los conjuntos humanos son
traducciones editoriales completas y reversibles:

- el joven usa camisa de manga larga, envolvente amplia, faja lisa, polainas y
  sandalias;
- la madre usa blusa, falda larga envolvente, delantal, pañuelo y sandalias;
- el aliado y el jefe se distinguen por corte, capas y estado de conservación,
  no por joyas o símbolos;
- los colectivos varían capas superiores, prendas inferiores, fajas, calzado y
  sombreros sin repetir un uniforme.

La pobreza inicial no se traduce en desnudez, ropa rota ni menos capas. La
riqueza tampoco se traduce en oro, corona o jerarquía racial.

## Producción y QA

La primera pasada generó 25 imágenes. Dos se rechazaron y repitieron:

1. la hoja de estados necesitó un arco curvo con cuerda visible y un tambor
   cilíndrico en vez de una vara y una caja cúbica;
2. la cueva necesitó estratos de papel rasgado, raíces de tiras y huellas
   troqueladas porque el primer intento parecía paisaje natural fotografiado.

Los 25 modelos nuevos pasaron QA. Cuatro modelos previos completan el mito:

- `caballo_kosina__identity_sheet`;
- `trupillo__botanical_sheet`;
- `arco_flechas__object_sheet`;
- `territorio_alta_guajira__environment_model`.

Tablero seleccionado:
`output/imagegen/wayuu-v3-production/el-pequeno-indio-kosina-selected-contact-sheet.jpeg`.

## Fuentes principales

1. Milciades Chaves Ch., *Mitos, leyendas y cuentos de la Guajira: El pequeño
   indio Kosina*, edición digital ICANH.
2. Parques Nacionales Naturales de Colombia, *Plan de Manejo del PNN Makuira*.
3. Michel Perrin, *wayuu, alijuna, kusina*, Antropológica 72.
4. Ministerio de Cultura, *Caracterización del pueblo Wayuu*.
5. SENA, *Inventario de cultura alimentaria Wayuu*.

