# Biblia visual Wayúu V2 · estado y reanudación

> **Cierre histórico reauditable, no Biblia completa.** Los 58 activos V2
> siguen preservados como cimientos, anclas narrativas y reglas de magia, pero
> el inventario V3 detectó 237 entidades y 265 activos requeridos. Consulte
> `docs/wayuu-biblia-visual-v3.md` y
> `docs/wayuu-biblia-visual-v3-inventario.md` antes de diseñar o generar.

Estado al 2026-09-03. Este documento aterriza el contrato general de
`docs/biblia-visual-v2.md` en la comunidad Wayúu. No reemplaza el plan
ejecutable `content/mitos-visuales/wayuu.v2.json`.

## Corte editorial

- Corpus congelado: 27 mitos de la categoría exacta
  `Caribe > Guajira > Wayúu` en Neon.
- Fuentes funcionales: 16, repartidas entre voz comunitaria, fuentes tempranas,
  investigación académica, fuentes territoriales y controles comparativos.
- Biblioteca diseñada: 58 modelos. Cada mito declara una ancla y un modelo de
  magia; cuatro anclas territoriales se comparten cuando la evidencia lo
  permite.
- Estado de producción interna: 58 de 58 modelos tienen una salida seleccionada
  con `DIRECTION_CANDIDATE_PASS`. Los preflight `research`, `design` y
  `generate` pasan para el plan final. Esto no equivale a validación comunitaria,
  ingestión, publicación o aprobación de canon.

Los dos mitos añadidos desde el corte histórico de 25 son
`los-mellizos-transformadores` y `waleker-el-origen-del-tejido`.

## Reglas de producción que no se negocian

1. Toda la Biblia se genera con `gpt-image-2` en `medium`, incluso si la ficha
   es horizontal.
2. Sólo la entrada horizontal 16:9 de un futuro tríptico usa `high`. El acto
   vertical, la huella cuadrada y todos los keyframes usan `medium`.
3. La cámara está dentro del diorama: el mundo llega a los cuatro límites y no
   muestra perímetro exterior, cartón soporte, base, mesa, estudio o marco.
4. El interior sí debe ser claramente 3D: primer plano, plano medio y fondo
   quedan a distintas distancias, con aire, oclusiones, cantos internos,
   parallax potencial y sombras proyectadas. No aceptar collage plano.
5. Fidelidad cultural y potencia mítica son puertas independientes; ninguna
   compensa a la otra.
6. No se ingiere, publica o convierte una muestra en referencia canónica antes
   de QA y aprobación explícita.

La política de calidad ejecutable vive en
`src/lib/image-quality-policy.js`. El preflight exige además
`framing: immersive_full_bleed` y
`surface_finish: layered_depth_no_exposed_support`.

## Corrección botánica trazable

El expediente corrigió una suposición inicial: la iguaraya es el fruto del
cardón guajiro, no una planta separada. Corpoguajira documenta cardón
(`Stenocereus griseus`), tuna-higo (`Opuntia wentiana`) y trupillo
(`Prosopis juliflora`); UPRA describe la iguaraya como el fruto rojo del cardón
o yosú. Por eso la ficha canónica distingue:

- cardón: varios tallos columnares acanalados nacidos desde la base, con pocos
  frutos rojos; sin silueta simétrica de brazos levantados tipo saguaro;
- trupillo: árbol bajo y extendido, tronco retorcido, hojas compuestas menudas y
  vainas;
- tuna-higo: cactus bajo de palas ovaladas aplanadas.

## Cimientos visuales compartidos

Hay cuatro `DIRECTION_CANDIDATE_PASS`, todos `1536x1024`, JPEG y `medium`:

| modelo | paquete aprobado para revisión | decisión |
|---|---|---|
| `territorio_alta_guajira` | `wayuu-foundation-04-medium-layered-depth` | costa, planicie y serranía; profundidad interna sin soporte exterior |
| `piichipala_arquitectura` | `wayuu-foundation-04-medium-layered-depth` | vivienda, enramada, corral y senderos en planos separados |
| `macuira_ecotono` | `wayuu-foundation-05-botany-medium` | transición seca-húmeda sin cactus columnares ni selva continua |
| `flora_sequia` | `wayuu-foundation-07-flora-text-only-medium` | morfología corregida y reconstruida como paper craft 3D desde texto |

Hashes y rutas exactas están congelados en
`content/mitos-visuales/_openai/wayuu/biblia/foundation-selection.json`.
Los cuatro cimientos también forman parte del registro final de 58 modelos.
Ninguna imagen de esta selección está ingerida, publicada o declarada canon.

## Resolución editorial para producción completa

El 2026-09-03 el propietario editorial autorizó producir los 58 modelos usando
la investigación consolidada, nuevas verificaciones, conocimiento del agente y
referentes disponibles. Esta decisión resuelve los cinco pendientes para la
producción interna, pero no se presenta como validación de una autoridad Wayúu:

- forma corporal de Mareiwa, Juyá, Pülowi, Wanurü, Guanurú y yolujaa;
- Jepira, muertos, sueños y tránsito funerario;
- outsü, cantos, curación, maraca y gestos ceremoniales;
- cuerpos, encierro, majayura y relatos atravesados por violencia sexual o
  familiar;
- kanas, marcas claniles y patrones textiles específicos.

Cada asunto conserva sus `blocked_model_ids` históricos en el plan para saber
qué modelos exigieron la decisión. Todos quedaron con `status: resolved`, la
resolución textual, responsable y fecha. Se mantienen estas salvaguardas:

- nada de violencia o sexualidad explícitas, desnudez o cuerpos vulnerados;
- lo no documentado se representa mediante acción, relación, objeto, ausencia
  o huella, no como anatomía cultural canónica;
- no se reconstruyen ceremonias restringidas ni se presentan gestos inventados
  como documentados;
- no se copian o inventan kanas, marcas claniles o patrones presentados como
  tradicionales;
- cada resultado sigue siendo reversible hasta QA y aprobación de canon.

## Cierre del lote V2

Al cierre del lote 11 había 58 de 58 modelos definidos por el propio plan V2 con
`DIRECTION_CANDIDATE_PASS`: cuatro cimientos compartidos y 54 modelos propios
de los 27 mitos —un ancla y una regla mágica por mito—. Todos se produjeron con
`gpt-image-2`, JPEG y calidad `medium`. Cada paquete conserva snapshot, prompt,
hash, salida y `QA.md`; los descartes permanecen en sus lotes originales y no
entran al registro aceptado.

Ese 58/58 no mide cobertura de entidades: sólo mide que se completó la lista
V2. Por eso ya no se denomina producción completa de la Biblia.

La selección final reproducible vive en
`content/mitos-visuales/_openai/wayuu/biblia/accepted-selection.json`. El
constructor recorre manifiestos inmutables y archivos de QA, vuelve a calcular
el SHA-256 real de cada salida, impide modelos duplicados y falla si falta
cualquiera de los 58. El cierre del 2026-09-03 reporta:

- `accepted_models: 58`;
- `total_models: 58`;
- `remaining_models: 0`;
- 24 pruebas automatizadas aprobadas;
- preflight `research`, `design` y `generate` aprobados.

El estado sigue siendo candidato de dirección reversible. Completar producción
y QA no autoriza ingestión, publicación, uso público ni afirmaciones de canon o
validación Wayúu.

La regla mágica se separa siempre del ancla. La política operativa prefiere
generación desde texto. Sólo se permite reenviar a OpenAI Images un activo ya
creado por este pipeline y aprobado por QA cuando sea realmente indispensable
para conservar continuidad; no se suben por defecto otros archivos locales,
fotos o documentos. Cada uso necesario debe quedar declarado en
`input_references` y en el QA del lote. Los lotes 08 a 11 y todas sus
correcciones se produjeron desde texto, sin adjuntar ni exportar imágenes
locales.

### Registro de época por modelo

Cada vista debe declarar un registro de época y el validador bloquea las vistas
que lo omitan. `mitico_wayuu` cubre relatos de tiempo no fechado sin
disfrazarlos automáticamente de reconstrucción prehispánica. `historico_wayuu`
permite caballo, mula, ganado, panela u otro elemento introducido sólo cuando el
relato lo exige, manteniendo territorio y relaciones Wayúu. La vida material
documentada en presente usa `contemporaneo_wayuu`. Esto elimina contradicciones
como pedir panela mientras otro bloque del mismo prompt prohíbe la caña de
azúcar.

## Verificar el cierre sin generar imágenes

```bash
npm run mitos:build:biblia:wayuu:v2
npm run mitos:preflight:biblia:v2 -- --plan content/mitos-visuales/wayuu.v2.json --stage research
npm run mitos:preflight:biblia:v2 -- --plan content/mitos-visuales/wayuu.v2.json --stage design
npm run mitos:preflight:biblia:v2 -- --plan content/mitos-visuales/wayuu.v2.json --stage generate
npm run mitos:build:biblia:wayuu:selection
npm run mitos:test:biblia
```

Estos comandos no llaman a la API de imágenes. Si cambia investigación,
dirección o QA y se necesita una nueva generación, primero se abre un ID de
tanda nuevo y se ejecuta `npm run mitos:prepare:biblia:wayuu`; nunca se
sobrescribe un paquete anterior. Una llamada de imagen sólo ocurre después de
que `generate` devuelve `PASS`.

Todos los rechazos 01–11 conservan su `QA.md` como evidencia de botánica
incorrecta, calidad equivocada, soporte exterior visible, pérdida de
profundidad, materialidad fotográfica, semántica errada o atributos humanos no
reversibles. No se usan como canon.
