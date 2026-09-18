# Traspaso de producción · siguiente comunidad

Actualizado el 12 de septiembre de 2026, America/Bogota.

Este documento es el punto de entrada para retomar el trabajo en otra sesión y
abrir una comunidad nueva. Consolida lo aprendido en los ciclos **Muisca**,
**Wayúu** y **Nasa–Paeces**, con cierres distintos dentro de sus alcances aprobados. No convierte las
decisiones culturales o visuales de esas comunidades en una plantilla universal.

## 1. Estado que se hereda

| Comunidad | Estado de cierre | Evidencia | Límite del cierre |
|---|---|---|---|
| Muisca | Cierre visual certificado de 41 mitos: 41 planes escritos, 123/123 piezas de tríptico y 789 activos únicos materializados; las 84 imágenes de video no generadas quedaron aceptadas expresamente. La verificación de publicación registró 41 páginas coincidentes y 123 blobs nuevos en línea. | [`cierre-muisca-2026-08-26.json`](../../content/videos/muiscas/certificacion/cierre-muisca-2026-08-26.json) y [`verificacion-produccion-cierre-muisca-2026-08-26.json`](../../content/videos/muiscas/certificacion/verificacion-produccion-cierre-muisca-2026-08-26.json) | “Comunidad terminada” describe el alcance visual aprobado; no significa que existan 41 videos finales. Bachué y Bochica conservan el andamiaje audiovisual más desarrollado. |
| Wayúu | 27/27 paquetes de investigación audiovisual, guion técnico y keyframes completos; 496 keyframes canónicos seleccionados y 674 generaciones nuevas. | [`campaign.v1.json`](../../content/videos/wayuu/campaign.v1.json), [`README.md`](../../content/videos/wayuu/README.md) y [`ANDAMIAJE-VIDEOS.md`](../../content/videos/wayuu/ANDAMIAJE-VIDEOS.md) | Hay 0 videos completos: todavía no se hicieron voz, animación, montaje ni publicación audiovisual. El cierre corresponde a guion + keyframes. |
| Nasa–Paeces | Biblia de 60 referencias y 26/26 trípticos: 78 imágenes seleccionadas, publicadas y verificadas; 52 anteriores conservadas y textos preservados. | [Punto de traspaso](../../content/videos/nasa-paeces/README.md) y [cierre de publicación](../../content/videos/nasa-paeces/tripticos/verification/nasa-26-closure-20260912.json) | Keyframes no iniciados; no hay video final. El cierre es biblia + trípticos publicados, no audiovisual completo. |

Por tanto, la próxima sesión no debe regenerar los lotes cerrados de Muisca,
Wayúu o Nasa ni ampliar sus manifiestos por iniciativa propia. Una fase pendiente
de Nasa sólo se retoma si el usuario lo pide; no se declara ya producida.

**Comunidad activa desde este corte: Ette Ennaka**, catálogo “Chimila”, ID 29,
Caribe, 23 mitos (346–366, 579 y 580). Se abrió investigación, no producción
pagada ni publicación. Entrada: [README](../../content/videos/chimila/README.md),
[manifiesto inicial](../../content/videos/chimila/investigacion-01/manifest.v1.json),
[investigación](../../content/videos/chimila/investigacion-01/INVESTIGACION.md) y
[fuentes/cobertura](../../content/videos/chimila/investigacion-01/FUENTES.md).

Para este ciclo: corpus y fuentes → matriz de recurrencia/estados → inventario
acotado y ADN propios → aprobación de biblia → trípticos → guion/storyboard y
keyframes cuando se soliciten. No copiar la cuota de 60 referencias Nasa.

## 2. Principio rector

La unidad de trabajo es un mito independiente dentro de un **manifiesto de
comunidad congelado**. Investigación, adaptación editorial, producción de
imágenes, selección, publicación y disponibilidad pública son estados distintos.
Un archivo generado no es automáticamente un activo aprobado; un activo aprobado
no es automáticamente un video; y un video renderizado no es automáticamente una
publicación verificada.

Cadena recomendada:

> corpus y fuentes → manifiesto → ADN visual propio → inventario → guion →
> storyboard → prompts congelados → keyframes causales → QA individual y de
> secuencia → selección → entrega navegable → voz/motion/montaje/publicación,
> sólo si ese alcance fue pedido

## 3. Qué se puede reutilizar y qué se debe rediseñar

### Reutilizable entre comunidades

- Separación de estados y prueba de cierre.
- Manifiesto exacto de IDs, slugs, conteo y hashes del relato.
- Investigación trazable y distinción entre núcleo, variante, incertidumbre y
  licencia audiovisual.
- Inventario exclusivo por plano: personajes, animales, entidades, objetos,
  paisaje, tiempo y estados.
- Guion técnico por bloques y storyboard por instantes.
- Prompts congelados con snapshots, roles de referencias y SHA-256.
- Generación causal con antecedentes aprobados.
- Versionado sin sobrescritura, selección canónica y lámina de revisión.
- QA de acción, identidad, material, cámara, anatomía, seguridad y formato.
- Revisión de un mito completo antes de escalar al siguiente.

### No transferible automáticamente

- Vestuario, pintura corporal, arquitectura, fauna, vegetación, objetos, paleta,
  símbolos, ceremonias o instrumentos de Muisca, Wayúu o Nasa.
- Las biblias, trípticos, personajes o paisajes de otra comunidad como prueba
  cultural. Una imagen generada nunca es una fuente etnográfica.
- El número de mitos, de bloques o de keyframes de campañas anteriores.
- La duración de voz, proveedores, precios, música o modelo de movimiento.
- La dirección de papel recortado si el usuario decide otra materialidad.
- Las conclusiones editoriales de una comunidad para resolver variantes de otra.

## 4. Apertura de una comunidad nueva

No generar imágenes hasta cerrar estas decisiones:

1. **Nombre y taxonomía.** Confirmar comunidad, región y etiqueta exacta usada en
   el catálogo. No incluir registros cercanos sólo por coincidencia territorial o
   lexical.
2. **Corpus.** Inventariar IDs, slugs y títulos; resolver duplicados o variantes y
   congelar el conjunto aprobado con conteo y digest. No ampliar después sin una
   decisión expresa.
3. **Fuentes.** Empezar por [`metodologia-revision-mitos.md`](../metodologia-revision-mitos.md).
   Donde sea posible, contrastar cinco fuentes útiles y distintas. Registrar
   procedencia, exclusiones, vacíos y conflictos; no ocultar incertidumbre.
4. **Relato canónico.** Congelar snapshot y SHA-256 del texto usado por cada mito.
   Separar contenido documentado, variante del sitio y licencia de puesta en escena.
5. **Referencias existentes.** Auditar imágenes, trípticos y decisiones previas.
   Conservar propiedad única por mito y no borrar decisiones ya tomadas.
6. **Alcance de entrega.** Acordar si la fase termina en guion, keyframes, video o
   publicación. Registrar por escrito qué queda fuera.
7. **Dirección propia.** Construir y aprobar un ADN visual específico de la nueva
   comunidad antes de la primera producción pagada.

El primer hito debe ser un manifiesto legible por humanos y máquinas. Como mínimo:

```json
{
  "community": "<slug-comunidad>",
  "scope_approved_at": "YYYY-MM-DD",
  "total_myths": 0,
  "scope_sha256": "<digest-del-conjunto>",
  "delivery_scope": ["research", "script", "keyframes"],
  "myths": [
    {
      "id": 0,
      "slug": "<slug>",
      "title": "<titulo>",
      "content_sha256": "<sha256>",
      "narrative_snapshot": "<ruta>",
      "status": "pending"
    }
  ]
}
```

## 5. Arquitectura recomendada

```text
content/videos/<comunidad>/
├── README.md
├── campaign.v1.json
├── channel-dna.v1.json
└── videos/
    └── <slug>/
        ├── preproduccion-01/
        │   ├── INVESTIGACION.md
        │   ├── GUION-TECNICO.md
        │   ├── plan.json
        │   └── prepared-<instante>-01/
        │       ├── freeze.json
        │       ├── plan.snapshot.json
        │       ├── style.snapshot.json
        │       └── prompts/
        └── produccion-01/
            ├── selection.json
            └── ESTADO.md

output/imagegen/<comunidad>/keyframes/
├── <slug>/                         # maestros y versiones, nunca sobrescritos
└── <slug>-delivery-01/
    ├── index.html
    ├── verification.json
    └── secuencia-*.jpeg
```

Puede cambiar la implementación, pero no deben perderse los cuatro contratos:
fuente congelada, plan validable, procedencia de cada generación y selección final
verificable.

## 6. Investigación, guion e inventario

Cada `INVESTIGACION.md` debe declarar:

- relato base y hash;
- fuentes consultadas y qué aporta cada una;
- variantes compatibles e incompatibles;
- decisiones de adaptación y límites de certeza;
- elementos que no se deben inventar;
- asuntos sensibles que requieren tratamiento visual prudente.

Cada `GUION-TECNICO.md` debe poder leerse como narración continua y, además, ligar
cada bloque a su procedencia. La duración es una estimación hasta medir una voz
real. El mito define el número de bloques; no se fuerza la plantilla de otra
comunidad.

Antes del storyboard se completa el inventario. Cada plano declara solamente lo
que debe aparecer. Una referencia ayuda a conservar identidad o materialidad, pero
no autoriza a copiar su utilería, pose, acción o escenario si no pertenecen a la
toma nueva.

## 7. Dirección visual y contrato de prompt

El ADN de la comunidad debe fijar, como mínimo:

- materialidad y profundidad;
- paleta y tratamiento de luz;
- identidad, vestuario y cambios temporales de personajes;
- arquitectura, paisaje y objetos permitidos;
- gramática de magia o transformación;
- reglas de cámara y montaje;
- exclusiones culturales y de seguridad;
- modelo, calidad, dimensiones y formato;
- política de referencias, correcciones y versionado;
- método de QA.

Si se mantiene la dirección de maqueta de papel, el contrato material se repite
completo en cada prompt: papel inequívoco, figuras planas ensambladas, capas a
distintas distancias, cantos y sombras interiores, suelo y objetos también de
papel, encuadre inmersivo sin mostrar caja, base, mesa o estudio. No abreviar el
contrato para corregir un gesto.

Toda magia debe declarar:

1. ancla cotidiana;
2. comportamiento imposible;
3. prueba visible en el cuadro;
4. efecto narrativo;
5. agencia, si existe;
6. procedencia documental o función de licencia audiovisual.

## 8. Generación causal de keyframes

La configuración que cerró el lote Wayúu fue:

- modelo preferido: `gpt-image-2.5-sunburst`;
- iteración rápida permitida: `gpt-image-2.5-flare`;
- fallback/histórico: `gpt-image-2`;
- un solo modelo por mito, con ID exacto registrado;
- calidad `medium`;
- solicitud API `1024x1536`;
- JPEG con compresión 92;
- entrega centrada `864x1536`;
- edición con múltiples imágenes, no composiciones independientes.

Política causal que se recomienda probar de nuevo, no asumir a ciegas:

- Fotograma 1: al menos dos referencias aprobadas de biblia o tríptico del mismo
  mito.
- Fotograma 2: fotograma 1 aprobado más al menos una referencia canónica del mismo
  mito.
- Fotograma 3 en adelante: los dos keyframes aprobados inmediatamente anteriores,
  en orden, y sólo las referencias canónicas adicionales necesarias.
- Congelar ruta, rol, orden y SHA-256 de cada entrada.
- Un descarte nunca alimenta la continuidad.
- Una corrección reutiliza los mismos antecedentes aprobados y cambia sólo la
  causa puntual de la falla.
- Si se sustituye un antecedente canónico, revisar o regenerar sus descendientes.

Esta cadena mejora la identidad, pero puede crear **inercia visual**. Por eso la
continuidad no puede mandar sobre la composición.

## 9. Regla de variedad de cámara

El hallazgo decisivo del cierre Wayúu fue que una secuencia puede ser consistente
y, al mismo tiempo, monótona. La evaluación debe hacerse sobre la lámina completa,
no sólo fotograma por fotograma.

Para mitos de 16 o más keyframes:

- usar al menos seis familias: territorial, lateral, cenital, rasante,
  sobre-hombro o subjetiva, macro de objeto, tele comprimido o contrapicado;
- entre dos cuadros adyacentes cambiar al menos dos variables entre altura, eje,
  escala, horizonte, posición del sujeto, profundidad y objeto dominante;
- no repetir consecutivamente altura + escala + horizonte + distribución;
- cambiar también escenario, hora, densidad y punto de interés cuando lo pida la
  narración;
- reservar macros para manos, huellas, materia u objetos, no para volver el rostro
  espectáculo;
- declarar en el prompt qué composición anterior no se debe copiar;
- revisar contactos de inicio, centro, clímax y cierre antes de aprobar.

La regla no consiste en girar la cámara arbitrariamente: cada cambio debe revelar
información, emoción o consecuencia nueva.

## 10. QA y criterio de terminado

### QA de cada imagen

- acción narrativa inequívoca;
- identidad, edad y continuidad temporal;
- vestuario y cuerpo completos cuando corresponda;
- número correcto de figuras, manos, animales y objetos;
- props exclusivos del plano;
- materialidad, profundidad, suelo, vegetación y magia coherentes;
- encuadre y espacio útil para montaje;
- ausencia de texto, marcas y elementos culturales inventados;
- anatomía y contactos físicos legibles;
- dimensiones, formato y hash registrados;
- antecedentes causales correctos y aprobados.

### QA de secuencia

- progresión espacial y temporal;
- variedad real de cámara y escenario;
- continuidad sin clonación de composiciones;
- arco de luz, color, escala y densidad;
- clímax visual distinguible;
- cierre que transforma o resuelve el motivo inicial;
- ausencia de versiones descartadas dentro de la selección.

### Un paquete `guion + keyframes` está completo sólo si

1. investigación y relato congelado existen;
2. plan y guion validan;
3. todos los instantes requeridos tienen un original seleccionado;
4. la selección registra archivos, modelo, referencias y hashes;
5. originales y entregas tienen dimensiones/formato correctos;
6. el QA individual y secuencial está documentado;
7. existe una revisión navegable o lámina de entrega;
8. campaña y estado humano coinciden.

Esto no certifica aprobación cultural, voz, animación, montaje o publicación salvo
que existan pruebas separadas para cada fase.

## 11. Contenido sensible y moderación

No se eluden filtros ni se debilitan salvaguardas. Ante un rechazo:

1. revisar si la escena visual es necesaria;
2. separar el contexto narrativo sensible de lo que realmente aparece en cámara;
3. si el instante visible es ordinario, escribir un prompt estrictamente visual y
   seguro para ese cuadro;
4. conservar el contexto completo en investigación, guion y notas de auditoría;
5. mantener el modelo del mito y versionar la corrección;
6. si la escena no puede representarse con seguridad y fidelidad, detenerla y
   reportarla, no forzarla.

En `el-incesto`, dos cuadros se resolvieron de este modo: la narración sensible se
preservó en el guion, mientras las imágenes mostraron únicamente instantes visuales
ordinarios. La excepción quedó registrada y no se convirtió en una regla para
ocultar contexto editorial.

## 12. Comandos de referencia

El preparador actual es específico de Wayúu; para otra comunidad se puede clonar
su contrato, pero debe renombrarse y adaptarse. Desde la raíz del repositorio:

```sh
node scripts/videos/wayuu-preproduction.mjs validate \
  --plan content/videos/wayuu/videos/<slug>/preproduccion-01/plan.json

node --test scripts/videos/wayuu-preproduction.test.mjs

# Siempre preparar en una carpeta nueva; nunca sobrescribir un freeze.
node scripts/videos/wayuu-preproduction.mjs prepare \
  --plan content/videos/wayuu/videos/<slug>/preproduccion-01/plan.json \
  --out content/videos/wayuu/videos/<slug>/preproduccion-01/prepared-02
```

La invocación de referencia que produjo los maestros Sunburst fue:

```sh
set -a
source .env
set +a

/tmp/mitos-sunburst-20260909/bin/python \
  /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
  --model gpt-image-2.5-sunburst \
  --prompt-file <prompt.txt> \
  --image <referencia-1.jpeg> \
  --image <referencia-2.jpeg> \
  --size 1024x1536 \
  --quality medium \
  --output-format jpeg \
  --output-compression 92 \
  --out <master.jpeg> \
  --force

/opt/homebrew/bin/magick <master.jpeg> -gravity center \
  -crop 864x1536+0+0 +repage <delivery.jpeg>
```

La ruta `/tmp/mitos-sunburst-20260909` es efímera y **no debe darse por existente
en una sesión futura**. Hay que cargar la habilidad `imagegen`, leer sus
instrucciones vigentes y preparar su entorno antes de producir.

Revisión, pruebas y entorno local:

```sh
node scripts/videos/render-wayuu-keyframe-review.mjs \
  content/videos/wayuu/videos/<slug>/produccion-01/selection.json \
  output/imagegen/wayuu/keyframes/<slug>-delivery-01

docker-compose up -d --build
curl --fail --silent --show-error --output /dev/null \
  --write-out '%{http_code}\n' http://127.0.0.1:3003/
```

## 13. Fallos y aprendizajes que no deben perderse

- Generar cuadros independientes produce deriva de rostro, vestuario, densidad y
  material. La memoria visual causal redujo esa deriva.
- Usar sólo los antecedentes puede aplanar la dirección de cámara. Las referencias
  fijan continuidad, no composición.
- Revisar una imagen aislada no detecta monotonía. Siempre cerrar con lámina o
  página de secuencia.
- Un test de texto prueba que el contrato existe en el prompt; no prueba que la
  imagen lo cumpla. Hay que inspeccionar los originales.
- No se debe sobrescribir un preparado, un maestro o una corrección. El histórico
  explica decisiones y evita alimentar descartes.
- No cambiar de modelo dentro de un mito sin una excepción registrada; puede romper
  identidad y acabado.
- Las referencias deben verificarse antes de gastar. Ruta, rol, orden y hash son
  parte del activo.
- “Completo” debe llevar conteo y evidencia. Muisca y Wayúu cerraron alcances
  distintos; ambas comunidades están terminadas sin fingir equivalencia entre
  trípticos, keyframes y videos finales.

## 14. Orden de trabajo recomendado para la próxima sesión

1. Leer `AGENTS.md`, este traspaso y la metodología editorial.
2. Nombrar la comunidad y auditar el corpus real.
3. Presentar y congelar manifiesto, conteo y digest.
4. Investigar variantes y construir el ADN cultural/visual propio.
5. Preparar un mito piloto completo.
6. Generar sus primeros 3–5 cuadros, revisar dirección y corregir el ADN.
7. Completar el piloto y revisar la secuencia entera.
8. Sólo con aprobación, producir un mito por vez y mostrar cada entrega.
9. Mantener campaña, selección y documentación sincronizadas.
10. Cerrar la comunidad con certificación de alcance y pruebas, como se hizo en los
    cierres Muisca y Wayúu.

## 15. Prompt de arranque para una sesión aparte

```text
Vamos a iniciar la producción de la comunidad <COMUNIDAD>. Lee AGENTS.md,
docs/metodologia-revision-mitos.md y
docs/videos/TRASPASO-SIGUIENTE-COMUNIDAD.md. Toma Muisca, Wayúu y el cierre
de biblia/trípticos Nasa como evidencia de proceso, no como fuentes culturales para la nueva
comunidad.

Primero audita el corpus real y presenta un manifiesto exacto con IDs, slugs,
títulos, conteo, snapshot y digest. Separa investigación, guion, keyframes, video
y publicación. No generes imágenes hasta que estén definidos el alcance y el ADN
visual propio. Después prepara un mito piloto con inventario por plano, variedad
de cámara y referencias causales congeladas. Muéstramelo completo antes de pasar
al siguiente mito.
```

## 16. Decisiones que debe aportar la próxima sesión

- comunidad exacta;
- conjunto aprobado de mitos;
- alcance final: guion, keyframes, video o publicación;
- reutilización o inmovilidad de imágenes existentes;
- continuidad o cambio de la materialidad paper-cut;
- modelo de imagen y presupuesto;
- orden de producción y punto de aprobación del piloto.

Hasta que esas decisiones existan, el trabajo seguro es inventario, investigación
y propuesta de ADN; no generación masiva.
