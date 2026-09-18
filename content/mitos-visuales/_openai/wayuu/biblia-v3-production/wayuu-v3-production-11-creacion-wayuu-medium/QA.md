# QA · producción Wayuu V3 · lote 11

## Alcance

- Mito: `creacion-wayuu`.
- Modelos nuevos: 8.
- Modelos aprobados reutilizados: 13.
- Cobertura del mito: 21/21 modelos.
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Tamaños: cinco imágenes `1536x1024` y tres `1024x1024`.
- Referencias locales: ninguna; lote base y correcciones generados desde texto.
- Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `mma__presence_model` | PASS | lote base |
| `kai_sol__presence_model` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `kashi_luna__presence_model` | PASS | lote base |
| `trupillo__botanical_sheet` | PASS | lote base |
| `arachi__spatial_model` | PASS_AFTER_CORRECTION_03 | `corrections-03` |
| `cavidad_origen__spatial_model` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `barro_creacion__object_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `fogon_primero__object_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |

## Investigación y separación de variantes

Milcíades Chaves registra la creación o salida de personas desde una gran
cavidad o pozo y la posterior asignación de nombres, animales y territorios en
Arachí. Virginia Gutiérrez de Pineda registra por separado una versión de
modelado en barro. Cavidad y barro se diseñaron como dos modelos autónomos y
nunca aparecen juntos.

La relación Mma-Juyá se traduce mediante tierra que recibe, guarda y hace
brotar. Kaí y Kashi se conservan como presencias de variantes de primeras
generaciones transformadas en fenómenos naturales. Ninguna de las tres fuerzas
recibe anatomía humana, rostro, embarazo, unión sexual, halo o emblema.

Arachí se representa sin personas y sin signo alguno. Las fuentes que mencionan
marcas o hierros no ofrecen una base visual aprobada para copiarlos; inventarlos
sería aún menos válido. El fogón conserva una traza de la síntesis editorial
actual y un puente con el mito del origen del fuego, no una reconstrucción
ritual o técnica exclusiva.

Expediente: `docs/wayuu-lote-11-creacion-wayuu-v3.md`.

## Cultura material

Este lote no introduce personas ni colectivos humanos nuevos. Los Primeros
Wayuu se reutilizan desde el lote 10, donde ya pasaron la compuerta de
indumentaria completa, variación por edad y rol, ausencia de uniformes, pintura
inventada, kanas y marcas claniles. Por eso ninguna ficha del lote 11 requiere
un nuevo conjunto de vestuario.

## Magia e imaginación verificadas

- Mma guarda semillas y raíces dentro de estratos que sólo brotan donde reciben
  lluvia localizada.
- Kaí recorre el territorio como un corredor cálido que cambia sombras y abre
  tres vainas, sin deidad visible.
- Kashi alterna ocultamiento y retorno mediante tres tramos de luz fría sobre
  sal, piedra y agua.
- la cavidad conduce de oscuridad a territorio mediante grandes hojas de papel
  rasgadas y repisas asimétricas, sin nacimiento corporal;
- Arachí organiza cinco piedras lisas y cuatro recorridos hacia planicie,
  serranía, cauce seco y costa, sin vegetación espuria;
- el barro permanece una masa baja, maciza y no antropomorfa;
- el fogón hace habitable la noche mediante un hogar cercano y dos luces
  familiares distantes.

## Iteraciones rechazadas

- Arachí base: piedras y terreno se leían como fotografía de roca y arena.
- Barro base: la concavidad convertía la masa en cuenco o vasija.
- Cavidad base: la roca era fotográfica y las repisas parecían una escalera.
- Fogón base: introdujo vegetación en roseta semejante a agave o aloe.
- Kaí base: el territorio quedó dominado por agaves o aloes.
- Arachí `corrections-01`: corrigió el papel, pero introdujo rosetas.
- Arachí `corrections-02`: mejoró cardones y matorral, pero retuvo rosetas; la
  tercera corrección retiró toda flora porque el modelo fija organización
  pétrea, no botánica.

Todos los intentos rechazados permanecen en disco con causa y SHA-256 en
`selection.json`.

## Criterios generales

- Las ocho selecciones son paper craft 3D full bleed con aire, cantos internos,
  oclusiones y sombras físicas.
- No se ve base, cartón soporte, mesa, pedestal, marco o exterior de maqueta.
- No hay figuras humanas, antropomorfización, violencia, sexualidad o cuerpos
  vulnerados.
- No se inventan marcas claniles, kanas, glifos, petroglifos, pintura o símbolos.
- Ninguna variante se publica como versión única o reconstrucción arqueológica.
- Generación, QA, selección, ingestión, canon y publicación permanecen estados
  separados.

Tablero final:
`output/imagegen/wayuu-v3-production/creacion-wayuu-selected-contact-sheet.jpeg`.
