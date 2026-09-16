# QA · producción Wayuu V3 · lote 15

## Alcance

- Mito: `el-origen-del-fuego` / **El origen del fuego**.
- Modelos nuevos: 32.
- Modelos aprobados reutilizados: 7.
- Cobertura del mito: 39/39 modelos.
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Tamaños: quince imágenes `1024x1024` y diecisiete `1536x1024`.
- Referencias locales: ninguna; lote base y correcciones generados desde texto.
- Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_02`.

## Resultado por procedencia

### Lote base · 18 PASS

- Maajua: identidad y estado mujer/perdiz bola.
- Madre de Maajua: identidad y estado mujer/Yoto.
- Mouwa humana de identidad abierta.
- pala, gran huerta y nueve cultivos.
- Kenáa humano, Jimut y Serumáa humano/ave.
- morral con dos brasas, regla de la Noche y Caujaro.
- Maleiwa viejo, piedras de Pülowi y varitas de fricción.

### `corrections-01` · 10 PASS

- estado de Siki;
- gramática humana de los Señores de Wuna'apü;
- identidad y estado de Junuunay;
- estado de Kenáa;
- primeras personas sin fuego;
- identidad y estado de Kasemashi;
- Awa'alas;
- Ma'ayüi y Ulapiuy.

### `corrections-02` · 4 PASS

- identidad de Siki sin pantalón añadido bajo el Wusi;
- estado de Wuna'apü con cuatro humanos y siete animales individuales exactos;
- Jamu por sustracción, con Caujaro visible y sin arquitectura;
- gruta con siete piedras calientes dispuestas 3 + 2 + 2.

## Investigación y frontera entre versiones

Siki/Makutulain, Junuunay y Kasemashi permanecen como protagonistas de tres
versiones paralelas. Los animales, transformadores y objetos de una versión no
se asignan a otra. `Mareiwa/Maleiwa` conserva sus estados previos y recibe una
ficha humana adicional sólo para la apariencia de viejo mendicante que sí
describe la tercera versión.

El expediente narrativo y de cultura material está en
`docs/wayuu-lote-15-origen-del-fuego-v3.md` y
`docs/wayuu-indumentaria-y-pintura-v3.md`.

## Vestuario verificado

- Cada hombre o niño lleva una cobertura superior o envolvente además de
  Wusi/Aichee y S'ira: Kemiisa, Kotin o combinación contextual.
- Se verificaron calzado y, cuando corresponde a actividad y continuidad, Wom
  o Ekiialiiijaa.
- Maajua, su madre y Mouwa llevan manta larga sobre pechera y waireñas.
- Los dos colectivos humanos varían internamente por rol, edad, cobertura,
  color, calzado y accesorio funcional; no son filas del mismo wayuco.
- Prendas, fajas y tocados permanecen lisos donde no existe motivo exacto
  documentado. No se inventan kanas, marcas claniles o pintura facial.

## Conteos y continuidad

- Siki: una figura en identidad; dos estados humanos iguales y uno vegetal.
- Wuna'apü: cuatro trabajadores; una ardilla, un perico, un bachaco con hoja,
  una hormiga común, una langosta, una rata y un único saino.
- Primera humanidad: seis personas y cuatro refugios sin fuego.
- Gruta: exactamente siete piedras calientes y ninguna octava iluminada.
- Morral: exactamente dos brasas.
- Awa'alas: una sola flecha visible y una sola trayectoria.
- Pülowi: piedra blanca Simala y piedra negra Lapuna.

## Iteraciones rechazadas

Se conservaron catorce rechazos del lote base y cuatro de `corrections-01`:

- cuatro Kemiisa se volvieron túnicas genéricas largas;
- aparecieron pantalón no solicitado, bandas geométricas, bordados, bolsas,
  correas y Wom decorados sin respaldo;
- el primer estado animal de Wuna'apü sustituyó el saino por venado y no
  distinguió bachaco de hormiga; la primera corrección duplicó mamíferos;
- dos intentos de gruta produjeron ocho piedras calientes;
- Jamu recibió choza, saguaro o meseta y perdió el Caujaro en dos intentos;
- la primera Awa'alas mostró más de una flecha.

Cada descarte conserva `model_id`, lote, causa, ruta y SHA-256 en
`selection.json`. Ningún archivo fue sobrescrito.

## Criterios generales

- Paper craft 3D full bleed con oclusiones, cantos internos, pliegues y sombras
  físicas; no ilustración plana ni CGI liso.
- No se ve base, cartón soporte, mesa, pedestal, marco o exterior de maqueta.
- No hay violencia, quemadura, castigo corporal, sexualización o humillación.
- No hay templo, portal, monstruo genérico, tocado panindígena o paisaje de
  desierto mexicano usado como atajo.
- Generación, QA, selección, ingestión, canon y publicación permanecen estados
  separados.

Tablero final:
`output/imagegen/wayuu-v3-production/el-origen-del-fuego-selected-contact-sheet.jpeg`.
