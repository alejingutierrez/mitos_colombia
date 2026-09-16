# Lote 21 · La majayura de Puró · Biblia Wayuu V3

**Estado:** investigación primaria, inventario, diseño, generación, corrección,
selección y QA cerrados.  
**Calidad:** `medium`.  
**Modelo:** `gpt-image-2`, OpenAI API.  
**Modo:** texto solamente, sin referencias locales.  
**Acabado:** maqueta física de paper craft 3D, mundo `full bleed`, capas a
distancias reales y ningún borde, cartón, base, mesa o estudio visible.

## Por qué cambió el lote

La reconstrucción editorial vigente contenía un primer joven, compañeros,
buscadores, bienes, voces, una entrada que se cerraba, un Papach humano y una
comparación con Pülowi. La lectura directa de la transcripción de Milcíades
Chaves no sostiene ninguno de esos elementos.

La página 310 sólo permite afirmar:

- Puró es una cueva sagrada a la que ningún ser viviente debe entrar;
- allí hay una majayura elegante, bonita y bien vestida;
- se aparece de día o de noche a hombres anónimos, los desorienta y conduce;
- revela secretos del territorio y quien regresa no debe contar lo visto;
- una apariencia semejante a una piedra blanca se aleja y entra al mar;
- Papach es la piedra nombrada como resultado de una transformación, no un
  sabedor.

La muerte, desaparición y el ahogamiento se detectan en el inventario, pero se
excluyen de imagen conforme a la autorización editorial.

Fuente primaria: Milcíades Chaves Ch., *Mitos, leyendas y cuentos de la
Guajira*, edición digital del ICANH:
https://publicaciones.icanh.gov.co/index.php/picanh/catalog/download/243/266/1579?inline=1

## Reconciliación del denominador

- antes: 355 entidades, 317 requeridas y 389 activos;
- se retiran seis entidades falsas;
- se añaden cinco entidades requeridas correctas y dos desenlaces excluidos;
- ahora: 356 entidades, 316 requeridas y 388 activos;
- producción acumulada antes del lote: 319/388, 69 pendientes y 21/27 mitos
  completos;
- producción después del lote: 327/388, 61 pendientes y 22/27 mitos completos.

El cambio está registrado en `inventory.correction_ledger` como
`2026-09-04-majayura-puro-primary-source-contraction-and-semantic-recast`.

## Ocho modelos congelados

1. `majayura_puro__identity_sheet`
2. `majayura_puro__state_sheet`
3. `hombres_alcanzados_puro__group_grammar`
4. `cueva_puro__spatial_model`
5. `desorientacion_puro__phenomenon_rule`
6. `secreto_y_silencio_puro__phenomenon_rule`
7. `piedra_blanca_movil_puro__phenomenon_rule`
8. `papach_piedra__object_sheet`

El mito reutiliza además los modelos ya aprobados del territorio de Alta
Guajira y de la costa y mar. Con los ocho nuevos seleccionados quedará 10/10.

## Vestuario: decisión ejecutable

La frase «bien vestida» no autoriza un vestido de fantasía. La majayura usa una
`Wayuushein` larga, amplia y con mangas sobre pechera; Wom/Woma bajo y waireñas.
Color, combinación y rostro son decisiones editoriales reversibles; no se
añaden bordado, kana, joya, pintura facial o sensualización.

Los hombres no se resuelven con una prenda inferior repetida. La gramática
contiene exactamente cuatro adultos anónimos y no simultáneos:

- Kotin ocre sobre Kemiisa cruda, faja, waireñas y Wom/Woma;
- She'etebe arcilla de cuerpo entero, faja y abarcas;
- Kemiisa azul gris, Asheinpalajanaa de viaje, faja, waireñas y Kapateera;
- Piiraneeru verde de mangas, base secundaria, si'ira, waireñas y paño liso.

Las fuentes de ropa son Ramón Paz Ipuana, Ministerio de Cultura, Artesanías de
Colombia, ICANH y el registro fotográfico histórico de Brian Moser conservado
por el Banco de la República. El contrato no presenta un conjunto como
prehispánico, universal o indicador de rango.

## Magia material y no genérica

- la desorientación se construye con un sendero que reaparece tras estratos y
  sombras incompatibles, no con laberinto, portal o partículas;
- el secreto se vuelve visible como bordes interiores que sólo abren desde un
  ángulo y desaparecen al cambiar de posición, nunca como libro o tesoro;
- la piedra blanca aparece una sola vez al fondo; dos hendiduras vacías de la
  misma forma marcan sus posiciones anteriores;
- Papach es una piedra compacta no antropomorfa, sin rostro, cuerpo atrapado,
  inscripción o pedestal.

## Compuertas y resultado de selección

- las 24 pruebas de Biblia V3 deben pasar;
- el preflight `generate` debe reportar 356 entidades, 316 requeridas y 388
  activos;
- toda figura humana/humanizada debe superar la compuerta de cultura material;
- el grupo falla si repite uniforme o pierde cualquiera de sus capas superiores;
- cada intento rechazado se conserva con causa y SHA-256;
- QA de Biblia no equivale a ingestión, canon o publicación.

Los ocho modelos pasaron QA. Cuatro primeras salidas quedaron rechazadas por
zapatos cerrados, flora genérica o materialidad pétrea demasiado realista. La
selección final usa cuatro primeras salidas y cuatro correcciones, queda 10/10
para el mito y lleva la Biblia a 327/388, 61 pendientes y 22/27 mitos completos.

Evidencia:

- selección con hashes:
  `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-21-la-majayura-que-pierde-a-los-hombres-medium/selection.json`;
- QA detallado:
  `content/mitos-visuales/_openai/wayuu/biblia-v3-production/wayuu-v3-production-21-la-majayura-que-pierde-a-los-hombres-medium/QA.md`;
- lámina seleccionada:
  `output/imagegen/wayuu-v3-production/la-majayura-puro-selected-contact-sheet.jpeg`.
