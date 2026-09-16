# Producción del material visual de los mitos

**Estado vigente del piloto Arámai, 2026-09-05:** conservar horizontal y vertical;
rehacer sólo la cuadrada como síntesis simbólica y consolidar el aprendizaje.
Ver [V1.6: iteraciones y proceso](./wayuu-tripticos-v1.6-aprendizajes.md).
Las actualizaciones V1.2–V1.5 siguientes son cronología, no instrucciones activas.
Nuevo resultado pendiente de revisión editorial; sin publicación ni otros mitos.

Cómo se fabrica, mito por mito y comunidad por comunidad, todo el material
visual del archivo: la **biblia** de la comunidad (personajes, paisajes,
props), el **tríptico** de cada mito y los **keyframes** de su video.

Este documento es el traspaso: está escrito para que una sesión nueva, sin
ningún contexto previo, pueda retomar la producción sin repetir los errores
que ya pagamos.

Actualización de dirección narrativa, 2026-09-05: para la iteración de Arámai
se aplica [Trípticos V1.2: relato y espíritu](./wayuu-tripticos-v1.2-relato-y-espiritu.md).
El relato exacto que acompañará la imagen se congela antes del prompt. Se
distinguen núcleo histórico, desarrollo editorial y licencia plástica; la
evaluación visual comprueba acciones y relaciones, además de materialidad.
Las revisiones V1.1 y V1.2 permanecen como historial sin aprobación editorial.
El usuario descartó las cuatro muestras V1.2 por caras tipo Pixar y planos
cerrados. La calibración vigente es [V1.3: papel y distancia](./wayuu-tripticos-v1.3-papel-y-distancia.md):
una sola horizontal, figuras casi planas y plano general amplio. No generar
acto, huella ni otro mito hasta evaluar esta dirección.

Actualización posterior: el usuario expresó «me gusta» sobre la muestra V1.3,
manteniendo pendiente su magia y pidiendo cinco alternativas para escoger.
La exploración vigente está en [V1.4: cinco opciones de realismo mágico](./wayuu-tripticos-v1.4-cinco-opciones.md).
Conservar figuras recortadas y plano amplio; generar sólo esas cinco entradas
horizontales. No hay aprobación del tríptico completo ni de otros mitos.

Elección posterior del usuario: opciones **1 y 5**, con autorización para
producir el tríptico completo de **Arámai**. La regla general queda en
[Prompting de realismo mágico](./prompting-realismo-magico.md) y la ejecución
en [Arámai V1.5](./wayuu-tripticos-v1.5-completo.md). No avanzar a otro mito
ni publicar por esta autorización. Conservar prompts y descartes previos.

---

## Puerta metodológica V2 · obligatoria para comunidades nuevas

La producción Muisca probó continuidad, formatos, referencias, ingesta y
cierre. No debe copiarse como plantilla cultural de otra comunidad. Antes de
generar una sola ficha de una comunidad nueva se aplica el contrato
[Biblia visual V2: fidelidad cultural y magia situada](./biblia-visual-v2.md).

La V2 añade dossier visual, matriz de evidencia, límites de representación,
revisión cultural, gramática mítica, firma material de la magia y modelos de
fenómeno/transformación/huella. Las puertas de fidelidad y potencia mítica son
independientes: ninguna compensa a la otra.

```bash
npm run mitos:preflight:biblia -- --plan <plan.json> --stage research
npm run mitos:preflight:biblia -- --plan <plan.json> --stage design
npm run mitos:preflight:biblia -- --plan <plan.json> --stage generate
```

El último comando debe ejecutarse antes de cualquier llamada de imagen y debe
devolver `PASS` para ese expediente V2. El estado de cuatro anclas fue un corte
histórico y no describe la producción Wayúu actual: ésta avanzó bajo las
autorizaciones editoriales del usuario y la selección aceptada de la Biblia V3.
Consultar `content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json`
y el plan activo de trípticos; no reintroducir bloqueos culturales históricos.

---

## Pipeline vigente · OpenAI API · 2026-09-03

La producción nueva usa **una sola cuenta OpenAI API**, seleccionada mediante
`OPENAI_API_KEY`. La clave vive únicamente en los archivos locales ignorados
`.env`, `.env.production` y `.vercel/.env.production.local`; nunca se copia a
un prompt, manifiesto, documento, log ni archivo versionado. Los tres archivos
locales deben contener la misma clave y tener permisos `600`.

La generación de imágenes en la web de Higgsfield fue el mecanismo histórico
del lote de agosto de 2026. Ya no es el camino operativo. Las instrucciones
antiguas se conservan al final de este documento sólo como evidencia de cómo
se produjeron los assets existentes.

### Contrato de salida

| Campo | Valor vigente |
|---|---|
| Proveedor | OpenAI API |
| Modelo | `gpt-image-2` |
| Endpoint con referencias | `images.edit` |
| Calidad de Biblia completa | `medium` |
| Calidad del tríptico horizontal, acto `entrada` 16:9 | `high` |
| Calidad del tríptico vertical, acto `acto` 9:16 | `medium` |
| Calidad del tríptico cuadrado, acto `huella` 1:1 | `medium` |
| Calidad de keyframes | `medium` |
| Máster vertical | `1024x1536` JPEG |
| Entrega de video | `1080x1920` JPEG, recorte `cover`, calidad 92 |
| Persistencia | máster + `.crop-9x16.jpg` + prompt SHA-256 + refs + manifiesto |
| Escritura | aditiva; nunca reemplaza un keyframe existente |

`1024x1536` es el tamaño vertical nativo usado por esta API. El archivo
`1080x1920` es una salida operativa 9:16 recortada y ligeramente reescalada; no
se documenta como un máster 2K nativo. El prompt reserva el 20% superior y el
15% inferior para proteger títulos, subtítulos, rostros, manos y objetos clave.

La calidad se decide por **familia y función**, no por orientación aislada: un
territorio horizontal de Biblia sigue siendo `medium`. Sólo `entrada`, la pieza
horizontal del tríptico, recibe `high`. La política ejecutable vive en
`src/lib/image-quality-policy.js` y los emisores no aceptan un `--quality`
global que pueda elevar por accidente las otras dos piezas.

La maqueta describe la técnica interna, no un objeto de estudio dentro del
cuadro. Toda salida debe ser inmersiva y de borde a borde: el mundo narrativo
llega a los cuatro límites. Se rechaza cualquier imagen que muestre base,
cartón crudo o corrugado, borde exterior de la maqueta, mesa, estudio,
ciclorama, marco o vacío fuera de la escena. Esto no elimina la profundidad:
primer plano, plano medio y fondo deben ser capas físicas a distintas
distancias, con cantos internos, aire, oclusiones y sombras proyectadas. La
cámara está dentro del diorama y el encuadre oculta únicamente su soporte.

### Preparar un tríptico OpenAI sin generar

El preparador exige un ID de lote nuevo, valida todas las referencias y congela
un prompt/hash/tamaño/calidad por acto. No acepta `--quality` global:

```bash
npm run mitos:prepare:triptych:openai -- \
  --comunidad muiscas \
  --slug chiminigagua \
  --batch-id chiminigagua-openai-01
```

El paquete resultante incluye comandos separados: `entrada` usa
`1536x1024 high`; `acto`, `1024x1536 medium`; `huella`, `1024x1024 medium`.
Si una pieza falla QA se abre otro `batch-id`; nunca se sobrescribe el paquete.

### Fuente de verdad y estado muisca

```bash
npm run mitos:estado -- --comunidad muiscas --detalle
```

El estado se deriva del disco. Al reabrir el cierre aceptado de 2026-08-26
había **84 keyframes físicos pendientes** en seis mitos: 9 en
`el-bermejo-aspira-a-ser-rey` y 15 en cada uno de `campos-eliseos`,
`el-hijo-del-sol-goranchacha`, `el-primero-de-los-reyes`, `popon` y
`pacanchique`. Las omisiones aceptadas por el certificado histórico no cuentan
como imágenes generadas.

### Flujo correcto por tanda

1. **Congelar plan y referencias.** Cada keyframe vive en
   `content/mitos-visuales/<comunidad>.json`. Si necesita una identidad, objeto,
   lugar o continuidad inmediata, declarar `refs` en esa escena. No confiar en
   referencias recordadas por el operador. El campo es obligatorio incluso
   cuando la decisión sea `refs: []`; el preparador no inventa un fallback.
2. **Preparar sin gastar.** El preparador valida que la escena esté pendiente,
   que todas las referencias existan y escribe prompt, referencias, destino y
   SHA-256 en un paquete reproducible:

   ```bash
   npm run mitos:prepare:keyframes:openai -- \
     --comunidad muiscas \
     --slug el-bermejo-aspira-a-ser-rey \
     --only b1a,b5a
   ```

3. **Generar con el CLI oficial del skill `imagegen`.** Cargar `.env` sin
   imprimirlo y ejecutar una llamada por keyframe. Ejemplo:

   ```bash
   python3 -m venv /tmp/mitos-imagegen
   /tmp/mitos-imagegen/bin/python -m pip install 'openai>=2.0.0'
   set -a
   source .env
   set +a

   /tmp/mitos-imagegen/bin/python /Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py edit \
     --model gpt-image-2 \
     --prompt-file content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/b1a.prompt.txt \
     --image content/videos/muiscas/mitos/el-bermejo-aspira-a-ser-rey/entrada.jpg \
     --size 1024x1536 --quality medium --output-format jpeg --no-augment \
     --out content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated/b1a.jpeg
   ```

   Para varias referencias, repetir `--image` **en el mismo orden** de
   `jobs.json`. No pasar `input_fidelity` a `gpt-image-2`. En `images.edit`, el
   cliente actual tampoco admite `moderation`; omitirlo.
4. **QA visual antes de ingerir.** Comparar el resultado contra el máster, sus
   refs y los keyframes vecinos. Rechazar texto, manos o anatomía rota,
   identidades mezcladas, iconografía/tecnología de otra época, aspecto digital
   pulido, cambio de vestuario, encuadre que pierda contenido al pasar a 9:16 o
   cualquier contradicción con el deslinde editorial.
5. **Ingerir sólo aprobadas.** Dejar únicamente los archivos aprobados en
   `generated/` y ejecutar:

   ```bash
   npm run mitos:ingest:keyframes -- \
     --comunidad muiscas \
     --slug el-bermejo-aspira-a-ser-rey \
     --local-dir content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/generated \
     --jobs content/mitos-visuales/_openai/muiscas/el-bermejo-aspira-a-ser-rey/jobs.json
   ```

   La ingesta valida comunidad/mito/tags, aborta si el destino ya existe,
   conserva el máster, crea el crop y añade a `bloques.json` proveedor, modelo,
   calidad, refs, hashes, `package_prepared_at` (cuándo se congeló el paquete) e
   `ingested_at`, sin guardar el secreto. El paquete no afirma una hora de
   generación de API que no haya sido registrada explícitamente.
6. **Cerrar la tanda.** Volver a ejecutar `mitos:estado`, inspeccionar una hoja
   de contactos de la secuencia completa y recrear el contenedor después del
   ajuste relevante:

   ```bash
   docker-compose up -d --build
   ```

### Preflight de cuenta y fallos

- La presencia de `OPENAI_API_KEY` no prueba saldo. La primera llamada real es
  el preflight definitivo.
- `401 invalid_api_key`: la clave no autentica; corregir la configuración sin
  copiarla a logs ni documentación.
- `429 credit_balance_exhausted` o `insufficient_quota`: la organización no
  tiene saldo API. Añadir créditos en
  <https://platform.openai.com/settings/organization/billing/>. No es un rate
  limit y una suscripción ChatGPT no lo cubre.
- `429 rate_limit_exceeded`: bajar concurrencia y aplicar backoff; no regenerar
  a ciegas.
- Un fallo de API jamás convierte una escena en hecha. Sólo cuenta el máster
  físicamente ingerido.

---

<details>
<summary><strong>Apéndice histórico — producción Higgsfield de agosto de 2026</strong></summary>

Lo siguiente explica los assets heredados y sus recibos. No describe la cuenta
ni el pipeline vigente y no debe usarse para nuevas generaciones.

## 0 · Empieza aquí

Cinco minutos para entrar en frío.

```bash
npm run mitos:estado -- --comunidad muiscas
```

Imprime, por mito, cuánto lleva de cada uno de los cinco pasos. **Ese comando
es la única fuente de verdad del avance**: lee el disco, no una lista aparte,
así que no se puede desincronizar. Si el archivo existe, el paso está hecho.

Luego, en este orden:

1. Lee **§1** (por qué esto no se hace por API — cuesta créditos reales).
2. Lee **§2** (el orden de los cinco pasos, que no es negociable).
3. Monta la pestaña siguiendo **§4** — sobre todo el paso 0, encender Unlimited.
4. Lanza la primera tanda con la receta de **§5**.

Lo demás se lee cuando haga falta. Si algo se comporta raro, casi seguro está
en **§9-§11** (trampas) o **§12** (bloqueo).

**Regla de oro**: el toggle Unlimited se apaga solo al recargar y el botón
vuelve a decir `Generate ✦ 7`. A partir de ahí **cada imagen cuesta 7
créditos** y nada más te avisa. Verifícalo antes de cada tanda.

---

## 1 · Por qué el trabajo se hace en la web y no por la API

El bundle **GPT Image 2 Unlimited del Marketplace** usado en esta producción
sólo aplica en higgsfield.ai. Higgsfield ofrece además promociones y productos
Unlimited distintos —incluido uno para MCP—, pero no heredan este bundle. Lo
verificamos gastando: por el MCP normal,
`gpt_image_2` a 2K/high cobra **7 créditos por imagen** y `use_unlim:true` es
rechazado con `Unlimited generations aren't supported for gpt_image_2`. Los
primeros tres trípticos costaron 21 créditos antes de descubrirlo (balance
86,01 → 65,01).

En la web, con el modelo en **GPT Image 2 + High + 2K**, aparece un toggle
**Unlimited** y el botón cambia de `Generate ✦ 7` a `Unlimited ✦`: cero
créditos. Ése es el único camino que hace viable el corpus completo — 596
mitos × ~22 piezas ≈ 13.000 imágenes, que por API serían ~91.000 créditos.

4K existe (12 cr) pero el bundle contratado cubre **2K**, que es la calidad
máxima disponible aquí.

**El precio de esa decisión, y hay que tenerlo presente:** sus reglas de fair
use prohíben automatizar el Unlimited —*"Unlimited is designed for personal,
human use only. Automation tools, scripting, credential sharing, and reselling
access are strictly prohibited"*— y avisan que ante actividad inusual pueden
bajar la prioridad de la cola o pausar el acceso para revisión manual. El
usuario, informado de eso, decidió el 2026-08-23 automatizar el navegador de
todos modos, a ritmo contenido. Por eso la tabla de abajo no es un capricho:
es lo que mantiene el patrón dentro de lo que parece uso humano.

### Ritmo que respetamos

| Regla | Valor | Por qué |
|---|---|---|
| Generaciones en vuelo | **2** | Es la concurrencia publicada para bundles de imagen comprados en el Marketplace |
| Pausa entre envíos | 6 s | Que no lleguen dos submits en el mismo segundo |
| Reintentos | **uno máximo** | Un reintento automático en bucle es exactamente lo que dispara la revisión |
| Sesiones en paralelo | **nunca** | Ver §12 |

Ritmo real medido: **~5-8 min por par** cuando la cola acepta las dos. La
duración puede variar porque Unlimited usa la cola estándar compartida.

**Criterio de vestuario:** un torso descubierto no es por sí solo un defecto.
Se acepta cuando corresponde a la ficha o a la escena y se mantiene el tono
documental, no sexualizado. La prohibición global es la sexualización, no la
piel visible.

---

## 2 · El orden, que no es negociable

Por cada mito, en este orden, y **un mito no se abandona a medio hacer**:

1. **Personajes** — fichas de cuerpo entero, frontales, sobre fondo crema. Van
   primero porque son la cara que todo lo demás tiene que respetar.
2. **Paisajes** — los escenarios del mito, tableau de borde a borde, sin gente.
3. **Props** — los objetos del hilo narrativo, centrados sobre fondo crema.
4. **Tríptico** — entrada 16:9, acto 9:16, huella 1:1, **adjuntando como
   referencia las fichas de los pasos 1-3**.
5. **Video — 17 escenas.** El guion son 9 bloques × 2 keyframes = 18; el `acto`
   del tríptico ya cubre una, así que se generan 17 nuevas. Heredan las fichas
   *y* el tríptico, de modo que el video no estrena ninguna cara ni ningún
   lugar.

Sólo cuando los cinco pasos están hechos se pasa al mito siguiente. Saltar al
siguiente con el anterior a medias es lo que rompe la continuidad: las fichas
que faltaban se terminan inventando dentro de una escena, y esa versión
improvisada se vuelve el canon de facto.

Y los mitos entre sí van en **orden cosmogónico**, no alfabético: el elenco
visual nace en el orden en que la mitología lo introduce, así cada mito hereda
las fichas del anterior en vez de estrenarlo todo de cero. En muiscas eso es
Chiminigagua → creación → aparición del hombre → Sol y Luna → Bochica → …

### La excepción que sí conviene hacer

Las fichas **sin referencias** (la gran mayoría de personajes, paisajes y
props) no dependen de nada previo. Con una cola de 6 min por pieza, encolarlas
todas juntas al principio de una comunidad es lo único que aprovecha bien el
tiempo muerto:

```bash
npm run mitos:tanda -- --comunidad muiscas --paso biblia-libre
```

Eso construye la biblia entera de la comunidad de una vez. Después, cada mito
se cierra en orden con sus trípticos y su video, ya con todo el elenco
disponible. **No es saltarse el orden**: es adelantar el paso 1-3 de todos los
mitos antes de empezar los pasos 4-5 de ninguno.

### Deslinde

Dos mitos de la misma comunidad pueden compartir un personaje, **jamás una
escena**. Los ciclos que más lo necesitan están anotados en el plan como claves
`deslinde_ciclo_*`: la inundación (Tequendama / Chibchacum / Cuchavira comparten
la misma crecida — la vara de oro y las peñas son EXCLUSIVAS del Tequendama),
Guatavita (El Dorado / la cacica / Meicuchuca), Hunza, linderos, Bermejo y
Goranchacha.

---

## 3 · El plan editorial: lo único que decide un humano

Todo lo que cambia entre un mito y otro vive en un solo archivo:

```
content/mitos-visuales/<comunidad>.json
```

Claves de la raíz: `comunidad`, `region`, `biblia` (ruta de la carpeta de
fichas), `doctrina`, `orden`, `deslinde`, `mitos`, `orden_de_produccion`,
`ritmo`, `video`, `carpetas_heredadas` y los `deslinde_ciclo_*`.

`mitos` es un **objeto indexado por slug**, no un array. Cada mito:

```jsonc
"chiminigagua": {
  "id": 216,
  "titulo": "Chiminigagua",
  "bloque": "cosmogonía",
  "arco": "la luz sale de la noche (entrada) -> las aves cosen el cielo (acto) -> …",
  "protagonista": "las aves grandes y negras primigenias",
  "estrena": ["ave_primigenia", "altiplano_noche"],   // fichas que este mito introduce
  "paleta": "negro de noche cerrada, gris de silueta, blanco lechoso…",

  "biblia": {                                   // pasos 1-3
    "ave_primigenia": {
      "kind": "personaje",                      // personaje | paisaje | prop
      "aspect": "9:16",                         // 9:16 | 16:9 | 1:1
      "refs": [],                               // fichas previas a adjuntar
      "desc": "Una de las aves grandes y negras que…",
      "nota": "Es el protagonista visible del mito…",
      "era": "colonial_rural"                   // opcional, ver abajo
    }
  },

  "escenas": {                                  // paso 4 — el tríptico
    "entrada": { "composicion": "umbral",       // uno de los 9 esquemas
                 "refs": ["altiplano_noche"],
                 "escena": "PLANO GENERAL AMPLIO sobre un altiplano…" },
    "acto":    { "composicion": "diagonal", "refs": [...], "escena": "…" },
    "huella":  { "composicion": "contrapicado", "refs": [], "escena": "…" }
  },

  "video": {                                    // paso 5 — 9 bloques × 2
    "duracion_objetivo_s": 90,
    "nota_deslinde": "b6a lo cubre el `acto` del tríptico",
    "bloques": {
      "b1": { "linea": "<la línea del guion>", "a": "<keyframe A>", "b": "<keyframe B>" },
      "…": {}
    }
  }
}
```

**`era` por escena existe por una razón concreta**: hay mitos de dos tiempos.
El Pozo de Hunzahúa es prehispánico cuando se quiebra la vasija y colonial
cuando llega Donato con palas. Sin marcar la época, el bloque por defecto
prohíbe el metal justo donde el relato lo pide. Valores: `prehispanico`,
`colonial_rural`, `indeterminado`.

**La doctrina no se repite por mito.** Técnica (fotografía de maqueta de
papel), prohibiciones, los tres actos, los nueve esquemas de composición y los
registros de época se escriben **una vez** en `scripts/mitos/art-direction.mjs`
y `src/lib/visual-direction.js`, y desde ahí llegan a los 596 mitos. Si algo
se ve mal en todas las imágenes, se corrige ahí, no en el plan.

---

## 4 · Montaje de la sesión de navegador

**Paso 0, antes de nada:** abrir `higgsfield.ai/ai/image?model=gpt_image_2`,
poner **High** y **2K**, y encender el toggle **Unlimited**. Verificar que el
botón diga `Unlimited ✦` y no `Generate ✦ 7`. Si dice lo segundo, está
cobrando.

**Paso 1: inyectar el arnés.**

```bash
node scripts/mitos/emit-bootstrap.mjs muiscas --min
```

Imprime un bloque de JS que se pega en la consola de la pestaña. Deja allí la
parte fija del prompt —técnica, época, territorio, comunidad, los tres actos,
los nueve esquemas y las prohibiciones— más todos los helpers. Sin él, cada
escena tendría que arrastrar sus ~3.000 caracteres de preámbulo idéntico.

> **Hay que reinyectarlo después de CADA recarga de la página.** El arnés vive
> en `window`; una recarga lo borra, igual que apaga el toggle Unlimited.

El emisor se autoverifica antes de imprimir (`new Function(salida)`) y falla
ruidosamente si el JS no compila. Existe porque una barra invertida sin doblar
dentro de un template literal ya rompió el arnés dos veces de forma silenciosa.

### Los helpers que quedan en la página

| Helper | Qué hace |
|---|---|
| `hfUnlim()` | Enciende el toggle Unlimited. **Paso 0 de toda sesión** |
| `hfAspect(a)` | Pone la proporción (`"16:9"`, `"9:16"`, `"1:1"`) |
| `hfSetText(t)` | Escribe el prompt en el editor Lexical (ver §9) |
| `hfTira()` / `hfNumRefs()` / `hfClearRefs()` | Inspecciona y limpia las referencias adjuntas |
| `hfIds()` | Extrae los ids de los resultados visibles en la galería |
| `hfBarrerBG()` | Barre la galería con scroll para recoger los ids que se desmontaron |
| `hfEnVuelo()` | Cuántas generaciones hay corriendo |
| `hfBanner()` / `hfCerrarBanner()` | Detecta y cierra el banner rojo de rechazo |
| `hfEnviarUno(it)` | Envía **una** pieza y confirma que fue aceptada |
| `hfStart(items, opts)` | Recorre una tanda llamando a `hfEnviarUno` |
| `hfEstado()` | Progreso de la tanda en curso: hechas, fallos, pendientes |

---

## 5 · El ciclo de una tanda

Éste es el bucle que se repite hasta terminar el corpus.

### 1. Emitir

```bash
npm run mitos:tanda -- --slug <slug> --paso personajes
```

`--paso` acepta: `personajes`, `paisajes`, `props`, `triptico`, `video`, y
`biblia-libre` (todas las fichas sin referencias de **todos** los mitos).

Imprime a **stdout** una llamada `window.hfStart([...])` lista para pegar, y a
**stderr** el resumen y —importante— **la lista de referencias que hay que
adjuntar a mano** antes de lanzar.

La tanda **salta lo que ya está en disco**, así que es reanudable: volver a
emitirla después de una interrupción produce sólo lo que falta.

> **Reemitir la tanda justo antes de lanzarla.** Entre emitir y lanzar puede
> aterrizar una pieza tardía de la tanda anterior; si no se reemite, esa pieza
> se genera dos veces.

Para tandas grandes conviene partirlas en archivos:

```bash
npm run mitos:tanda -- --comunidad muiscas --paso biblia-libre > scripts/tmp/tanda.js
```

### 2. Adjuntar referencias (pasos 4 y 5)

Los pasos `personajes`, `paisajes`, `props` y `biblia-libre` van **sin
referencias**: son fichas que estrenan algo, sobre fondo crema. Antes de
lanzarlas, `hfClearRefs()`.

Los pasos `triptico` y `video` **sí** las llevan. El emisor imprime cuáles.
Las fichas se suben con `file_upload` desde
`content/videos/<comunidad>/biblia/`:

```
content/videos/muiscas/biblia/<nombre>.jpg
```

En `video`, las referencias con forma `mitos/<carpeta>/<acto>` se resuelven
desde la raíz de la comunidad, por ejemplo:

```
content/videos/muiscas/mitos/chiminigagua/acto.jpg
```

El emisor incluye las fichas propias, las referencias heredadas por el
tríptico y `entrada`, `acto`, `huella`; el video no debe estrenar personajes ni
lugares por una referencia omitida.

El arnés trata el paso `video` como continuidad y no como «acto 2» del
tríptico. En esos prompts la descripción concreta de la escena prevalece sobre
los ejemplos genéricos del esquema de composición: una escena que diga
«vacío», «sin personas» o «sin aves» no puede recibir una figura sólo porque el
esquema mencione una como ejemplo.

Verificar con `hfNumRefs()` que quedaron las que debían. **Esto no está
automatizado**: el script te dice cuáles, tú las adjuntas.

Si el emisor declara siete u ocho referencias, no es obligatorio mantenerlas
todas cargadas durante los quince planos. En la sesión del 2026-08-26, siete
adjuntos provocaron fallos inmediatos y genéricos de `Something went wrong`,
mientras el mismo par arrancó al dejar sólo el objeto que realmente usaba.
Trabajar entonces **por subconjunto de escena**: cargar únicamente las
referencias declaradas que el par convoque —cada identidad, objeto o escenario
visible—, limpiar entre pares y no introducir ninguna referencia fuera de la
lista del emisor. Esto reduce el payload sin permitir que el video estrene
canon ni invente una identidad.

### 3. Lanzar

Pegar el `window.hfStart([...])` en la consola de la pestaña. Responde
`tanda arrancada: N piezas, en pares de hasta 2 con confirmación` y se va sola.

### 4. Esperar

⌈N / 2⌉ × ~5-8 min. No hay que vigilar: `hfEstado()` dice en qué va y registra
los ids nuevos de cada par. Reintenta **una sola vez** cada fallo y aborta la
tanda entera si el botón deja de decir `Unlimited`.

El arnés no considera terminado un par ante el primer `0` del contador: exige
cinco lecturas consecutivas, una por segundo. Esto evita abrir el siguiente par
durante un parpadeo transitorio del badge. Al recoger resultados también filtra
por la hora de inicio del par, para que los assets antiguos que la galería
virtualizada vuelve a montar no entren como ids nuevos.

### 5. Recoger los ids

```js
hfBarrerBG()   // inicia el barrido
__BARRIDO      // cuando listo=true, orden contiene los ids observados
```

Con dos generaciones concurrentes **el orden de llegada no prueba el orden de
envío**. `hfEstado().pares` conserva el conjunto de tags e ids de cada par; el
emparejamiento exacto se confirma abriendo el asset y leyendo su prompt. Si una
llegada tardía se mezcló, usar la hoja de contactos de §11.

### 6. Ingestar

```bash
# fichas de biblia
npm run mitos:ingest:biblia -- --fichas "ave_primigenia=20260823|133526|ec383995,…"

# tríptico (se identifica solo por proporción)
npm run mitos:ingest -- --comunidad muiscas --slug <slug>

# keyframes de video
npm run mitos:ingest:keyframes -- --slug <slug> --pares "b1a=20260823|141002|48c9a1eb,…"
```

`ingest:biblia` encuentra sola a qué mito pertenece cada ficha buscándola en
todo el plan, descarga el original, escribe `<nombre>.jpg` y su recorte 9:16, y
actualiza el manifiesto y `higgsfield-ids.json`. La ingesta es estrictamente
aditiva: si ya existe el JPG, su recorte o la entrada del manifiesto, aborta la
tanda completa antes de descargar y nunca reemplaza la ficha anterior.

La misma regla rige `mitos:ingest` y `mitos:ingest:keyframes`: pueden completar
un manifiesto parcial, pero rechazan cualquier rol o tag que ya exista y mezclan
lo nuevo con el manifiesto anterior. La bandeja del tríptico se conserva por
defecto; sólo se elimina con `--vaciar-bandeja` explícito.

### 7. Volver al paso 1

---

## 6 · Publicar al sitio

```bash
npm run images:apply:triptych -- --slug <slug> --dir content/videos/muiscas/mitos/<slug>
```

Sube a Blob, escribe las tres URLs y los prompts, purga la caché e imprime los
valores anteriores como respaldo.

### Tablero visual

```bash
node scripts/mitos/tablero.mjs muiscas /tmp/tablero.html
```

Arma un tablero con miniaturas embebidas de todo lo producido. Publicado como
artefacto en https://claude.ai/code/artifact/b947c338-3aed-4856-a6e0-6fac460717c7
— republicar el mismo archivo lo actualiza en su sitio.

---

## 7 · Bajar los resultados

El plugin/MCP de Higgsfield ya está instalado. `show_generations` se usa sólo
para consultar las salidas terminadas y confirmar `id`, modelo y URL original;
la generación permanece en la web para conservar el bundle Unlimited.

La galería también sirve las imágenes por un proxy con la URL firmada en el
query string. El nombre del archivo nativo es determinista:

```
https://<cdn>/<user>/hf_<YYYYMMDD>_<HHMMSS>_<job_id>.png
```

El MCP entrega esa misma URL original y el arnés del navegador conserva los
tres campos en `hfEstado().pares`. De ahí vienen los
`20260823|133526|ec383995` que comen los ingestores.

`descargar.mjs` prevalida el lote completo: rechaza identificadores repetidos
y aborta antes de escribir si cualquiera de los PNG de destino ya existe. No
reemplaza archivos anteriores.

```bash
node scripts/mitos/descargar.mjs --slug <slug> --ids "20260823|072548|ab7c…"
```

---

## 8 · Estado y reanudación

Ninguna sesión termina el corpus. El estado **no se lleva en una lista aparte
sino mirando el disco** —si el archivo existe, el paso está hecho—, así no
puede desincronizarse de la realidad:

```bash
npm run mitos:estado -- --comunidad muiscas
```

Imprime por mito los cinco pasos y el total de lo que falta. Honra
`mito.carpeta` y `mito.carpeta_video` para los mitos que se produjeron antes de
esta convención y viven en carpetas con nombre viejo.

---

## 9 · Trampas del editor, todas verificadas

La caja de prompt **no es un `<textarea>`**: es un `contenteditable` de
**Lexical**. Eso rompe las cuatro formas obvias de escribir en ella:

- `HTMLTextAreaElement.prototype.value` → `TypeError: Illegal invocation`.
- `document.execCommand('insertText', …)` → **corta en el primer espacio**
  (escribe "prueba" de "prueba de inyeccion").
- `Range` + `selectAll` por JS → Lexical **no lo honra** y el texto nuevo se
  **concatena** al viejo. Así es como una escena de 3.495 caracteres terminó
  con 7.431 en la caja.
- Pegar con un `ClipboardEvent` sintético → funciona a veces, y "a veces" en
  una tanda de 30 piezas es una tanda arruinada.

**Lo único fiable es reconstruir el árbol del editor:**

```js
const ed = document.querySelector('[contenteditable="true"]').__lexicalEditor;
ed.setEditorState(ed.parseEditorState({ root: { children: [ /* un párrafo por línea */ ] } }));
```

Es lo que hace `hfSetText()`.

**Y verificar antes de gastar.** Después de escribir, `hfEnviarUno` compara el
número de párrafos del editor contra el número de líneas del prompt y **aborta
sin generar** si difieren. Ese guardia ya evitó una corrida con el prompt
duplicado.

---

## 10 · La trampa cara: piezas que se pierden sin dejar rastro

De una tanda de 23 llegaron 11. De otra de 17, 13. Las que faltaban estaban
salteadas y la tanda no registraba ningún error: el botón seguía diciendo
`Unlimited`, el contador avanzaba, y la imagen simplemente no aparecía nunca.

Son **dos causas distintas** y hay que distinguirlas, porque una asusta más de
lo que debe:

**1. No todos los Unlimited comparten concurrencia.** La sesión promocional que
originó el primer arnés mostró un banner de una sola generación:

> You can generate 1 unlimited video, image & audio generation at a time.
> To use full concurrency, switch to credit-based generations.

Ese banner era real, pero se generalizó a la modalidad equivocada. El bundle de
imagen comprado en el Marketplace para esta producción declara **2
generaciones a la vez**. La cuenta lo muestra como acceso separado de 3 días a
GPT Image 2; el plan Plus, por su parte, muestra hasta 8 imágenes paralelas
cuando se paga con créditos. El arnés debe obedecer el producto activo, no un
banner visto en otra modalidad.

**2. Algunas sólo llegan tarde.** Dos piezas que dábamos por perdidas
aparecieron minutos después, fuera de orden. La cola gratuita no garantiza
tiempos, así que "no está" no significa "se perdió".

### La defensa: confirmar la aceptación, no suponerla

Mirar si hay algo en vuelo no basta, porque **el badge tarda en aparecer**: el
encolador creía la cola libre y enviaba antes de tiempo. El ciclo correcto es
una máquina de estados por pieza (`hfEnviarUno`):

1. **Cerrar el banner previo**, para que reaparecer signifique algo.
2. Poner proporción, escribir el prompt, **verificar párrafos**.
3. Verificar que el botón siga diciendo `Unlimited`. Si no, **abortar la tanda
   entera** — a partir de ahí cobra.
4. Clic, y entonces esperar hasta ~2 min a que ocurra una de dos cosas:
   aparece el badge (**aceptada**) o reaparece el banner (**rechazada**).
5. Con la primera aceptada, preparar y confirmar la segunda.
6. Esperar a que ambos badges **desaparezcan**; sólo entonces abrir el par
   siguiente.

Una rechazada se reintenta **una sola vez** con más respiro; si vuelve a
fallar queda anotada en `pendientes`. Nunca en bucle: el reintento automático
repetido es justo lo que dispara su revisión manual.

El arnés anterior verificó 21/21 en secuencial; esa prueba sigue demostrando la
máquina de confirmación, no el límite contractual. La versión por pares conserva
los mismos guardias y añade el inventario `tags ↔ ids` por par.

### Dos detalles del contador que costaron caro

**Una pieza pasa por `Processing` ANTES de `Generating`.** La primera versión
contaba sólo `Generating`, así que daba por no-arrancada una pieza que sí había
arrancado, la reintentaba, y producía duplicados. El contador correcto es
`/Generating|Processing|Queued/`.

**Cerrar el banner tiene que ser quirúrgico.** Una versión que hacía clic por
toda la franja superior buscando el botón de cerrar abrió el modal de búsqueda
—que tapa la página— y dejó la galería en **modo multiselección con 4 imágenes
marcadas al lado del botón de borrar**. Sólo se hace clic en el botón que está
**dentro del nodo del propio banner**, identificado por su texto.

---

## 11 · Otras trampas

**El toggle Unlimited se apaga al recargar.** El botón vuelve a decir
`Generate ✦ 7` sin ningún aviso, y a partir de ahí cada imagen cuesta 7
créditos. Por eso `hfUnlim()` es el paso 0 de toda sesión y `hfStart` verifica
la etiqueta antes de **cada** envío.

**Leer `innerText` en bucle congela la página.** La primera versión de
`hfAspect` recorría `document.querySelectorAll('div')` comparando `innerText`.
`innerText` fuerza un cálculo de layout por elemento, así que a medida que la
galería se llenaba la función se volvía más lenta, hasta que a mitad de una
tanda se quedó "preparando" durante minutos y pareció un cuelgue. Ahora sale
temprano si la proporción ya está puesta, busca sólo dentro del menú abierto y
usa `textContent`, que no fuerza layout.

**La galería es virtualizada**: desmonta los resultados que salen de pantalla.
En tandas largas hay que barrerla con `hfBarrerBG()` antes de ingestar, y
conviene ingestar por partes en vez de todo al final.

**El `job_id` que devuelve el POST de creación NO es el del archivo final.**
Intentamos emparejar tag↔imagen interceptando la respuesta de creación: no
funciona. Uno de los UUID es de sesión y se repite en todas las peticiones; el
otro no aparece en ningún resultado. El id definitivo sólo se conoce cuando la
imagen ya está en la galería. Con dos piezas en vuelo, `hfEstado().pares`
reduce la ambigüedad a dos assets y el prompt guardado en el detalle resuelve
cuál es cuál antes de ingestar.

### La hoja de contactos, para cuando el emparejamiento se pierde

```bash
node scripts/mitos/hoja-contactos.mjs --ids "…" --salida /tmp/hoja.jpg
```

Arma una hoja numerada con las N imágenes más nuevas, con la etiqueta quemada
en cada celda. Se mira **una vez**, se asignan los tags a ojo y se ingesta: una
imagen en lugar de catorce. Hace falta para recuperar tandas viejas corridas
con concurrencia, y para desambiguar cuando una llegada tardía se mezcla con la
tanda nueva — que pasa.

**La hoja sirve para identificar, no para juzgar.** A 240 px una ficha de
personaje cubierto de polvo de oro parece un hombre desnudo cualquiera; el
acabado sólo se ve a tamaño real. Si lo que está en duda es la calidad y no la
identidad, hay que bajar el original.

Ya nos costó un error: dimos por hecho que cuatro resultados de un bucle
atascado eran la misma pieza reintentada, e ingestamos como `abuelo_narrador`
una imagen que era otra ficha. La hoja de contactos lo destapó. **Si un bucle
se atascó, no supongas qué produjo: míralo.**

---

## 12 · Si Higgsfield nos bloquea

Sus reglas de fair use dicen que ante actividad inusual pueden **bajar la
prioridad de la cola**, **pausar el Unlimited para revisión manual**, o ambas.
No es una expulsión: el propio texto dice que el acceso se restablece una vez
se confirma el uso normal.

### Síntoma 1 — las generaciones tardan mucho más de lo normal
Es la cola degradada, no un bloqueo. **No reintentar en bucle**: eso confirma
el patrón que disparó la degradación. Subir la pausa entre envíos a 20-30 s
durante una hora.

### Síntoma 2 — el toggle Unlimited desaparece o el botón vuelve a `Generate ✦ 7`
El Unlimited quedó pausado. **Parar de generar inmediatamente** — si se sigue,
cada imagen cobra 7 créditos sin avisar más que ese cambio de etiqueta.

Si el toggle sigue visible pero está apagado y al pulsarlo aparece el diálogo
`GPT Image 2.0 2K unlimited purchase` con pases nuevos de 1, 3 o 7 días, no es
una pausa operativa: el pase de Marketplace ya no está activo para esa cuenta.
No comprar ni usar créditos desde la automatización; la persona titular debe
revisar la vigencia o reactivar el pase antes de continuar.

### Síntoma 3 — error explícito de límite o cuenta en revisión

1. **Detener todo.** Cerrar la pestaña de generación. No abrir otra sesión ni
   probar desde otra IP: eso lee como evasión y empeora el caso.
2. **Comprobar el estado real** en Manage Account → Subscription → *Active
   unlimited models*: sale cada modelo con fecha de inicio, de expiración y
   estado. Distingue "pausado por revisión" de "expiró el bundle".
3. **Escribir a soporte desde la cuenta**, explicando el uso real: un proyecto
   editorial propio, un archivo de mitos colombianos, generación asistida pero
   supervisada por una persona, sin reventa ni acceso compartido. Pedir la
   revisión manual que su propia documentación menciona.
4. **Mientras tanto, no parar el proyecto.** El trabajo que no depende de
   generar —escribir el plan editorial de los mitos que faltan, los arcos, los
   deslindes, las composiciones, los guiones de video— es la mayor parte del
   esfuerzo y no toca Higgsfield.
5. **Al volver**, entrar con la mitad del ritmo durante el primer día.

### Y si el Unlimited no vuelve
El camino de respaldo es la API por créditos, que nunca estuvo bloqueada: 7
créditos por imagen a 2K/high con `gpt_image_2`. Sirve para cerrar un mito
urgente, no para el corpus.

### Lo que nunca hacemos
Abrir varias sesiones en paralelo, rotar IP o cuentas, reintentar en bucle
automático, o compartir credenciales. Cualquiera de esas convierte una pausa
reversible en una expulsión.

---

## 13 · Mapa de archivos

| Archivo | Qué hace |
|---|---|
| `content/mitos-visuales/<comunidad>.json` | **El plan editorial**: lo único que decide un humano — arco, deslinde, escenas, composición, referencias |
| `scripts/mitos/art-direction.mjs` | La doctrina compartida: técnica, actos, fichas, prohibiciones. Se escribe una vez y llega a los 596 mitos |
| `src/lib/visual-direction.js` | Los 9 esquemas de composición, los registros de época, la artesanía por región y comunidad |
| `scripts/mitos/emit-bootstrap.mjs` | Proyecta la doctrina + los helpers a JS inyectable. **Se autoverifica antes de imprimir** |
| `scripts/mitos/emit-tanda.mjs` | Emite el `hfStart([...])` de un paso. Salta lo ya hecho: reanudable |
| `scripts/mitos/emit-prompts.mjs` | Prompts completos para API, resumen, o paquetes de trabajo manual |
| `scripts/mitos/descargar.mjs` | Reconstruye la URL nativa y baja el `.png` a la bandeja |
| `scripts/mitos/ingest.mjs` | Tríptico: identifica por proporción, renombra, recorta 9:16, escribe el manifiesto |
| `scripts/mitos/ingest-biblia.mjs` | Fichas nuevas a la biblia; encuentra sola a qué mito pertenecen |
| `scripts/mitos/ingest-keyframes.mjs` | Keyframes + `bloques.json` con las líneas del guion |
| `scripts/mitos/estado.mjs` | Qué falta de los cinco pasos, **mirando el disco** |
| `scripts/mitos/hoja-contactos.mjs` | Hoja numerada para identificar resultados cuando se pierde el emparejamiento |
| `scripts/mitos/tablero.mjs` + `tablero-html.mjs` | Tablero visual con miniaturas embebidas |
| `content/videos/<comunidad>/biblia/` | Las fichas producidas + `manifest.json` |
| `content/videos/<comunidad>/biblia/higgsfield-ids.json` | Registro de qué assets ya están subidos, para no resubir lo mismo |
| `content/videos/<comunidad>/mitos/<slug>/` | El tríptico del mito |
| `content/videos/<comunidad>/videos/<slug>/keyframes/` | Los keyframes del video |

---

## 14 · Dónde va esto

El corpus completo son **596 mitos × ~22 piezas ≈ 13.000 imágenes**. A ~5-8
min por par son aproximadamente **540-870 horas de reloj** si el bundle
mantiene dos generaciones concurrentes. Eso no lo termina una sesión, ni
diez: es un proyecto de fondo, y el cuello de botella es la cola gratuita de
Higgsfield, no el esfuerzo.

Lo que sí está resuelto, y es la parte que no hay que volver a hacer:

- La **doctrina** se escribe una vez y alcanza los 596 mitos.
- El **plan** de una comunidad es la única decisión humana por comunidad.
- El **arnés** genera a coste cero y confirma pieza por pieza.
- La **ingesta** identifica sola por proporción o por par explícito.
- El **estado** se deriva del disco y no puede mentir.
- El **runbook de bloqueo** está escrito antes de necesitarlo.

Para retomar una comunidad abierta: `npm run mitos:estado -- --comunidad
<comunidad>`, y seguir §5.

---

## 15 · Cierre certificado de muiscas

El 2026-08-26 el usuario aceptó el corpus muisca efectivamente producido como
objetivo cumplido. El cierre distingue lo generado de lo aceptado como omisión:

- 41/41 planes y 151 fichas físicas de biblia;
- 123/123 piezas de tríptico;
- 536/620 keyframes de video;
- 84 keyframes no generados, enumerados y aceptados fuera del alcance final;
- 1.681 imágenes físicas legibles y un archivo SHA-256 reproducible.

Los 41 trípticos se publicaron al sitio con el identificador
`cierre-muisca-2026-08-26`. La operación crea Blobs con sufijo aleatorio,
inserta una fila vertical nueva, conserva las imágenes y filas anteriores y
escribe un recibo antes/después por mito. Nunca borra un Blob previo.

Documentación y evidencia:

- [`certificacion-cierre-imagenes-muiscas-2026-08-26.md`](./certificacion-cierre-imagenes-muiscas-2026-08-26.md)
- `content/videos/muiscas/certificacion/cierre-muisca-2026-08-26.json`
- `content/videos/muiscas/certificacion/cierre-muisca-2026-08-26.SHA256SUMS`
- `content/videos/muiscas/certificacion/verificacion-produccion-cierre-muisca-2026-08-26.json`
- `content/videos/muiscas/publication-receipts/cierre-muisca-2026-08-26/`

Comandos de auditoría:

```bash
node scripts/mitos/certificar-cierre.mjs \
  --accepted-final \
  --date 2026-08-26 \
  --publication-id cierre-muisca-2026-08-26

node scripts/mitos/verificar-publicacion.mjs \
  --publication-id cierre-muisca-2026-08-26 \
  --site https://www.mitosdecolombia.com
```

Este cierre no elimina la capacidad de ampliar los seis videos incompletos en
el futuro. Si se reabren, la ingesta debe seguir siendo aditiva y el nuevo lote
debe obtener otro `publication-id`; el certificado de 2026-08-26 no se edita.

</details>
