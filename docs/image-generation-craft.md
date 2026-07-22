# Generacion de imagenes craft

## Direccion

El generador usa `gpt-image-2` y prompts de fotografia frontal de piezas reales de papel artesanal. La intencion es evitar ilustracion digital plana, render 3D, animacion o encuadres oblicuos. Cada imagen debe sentirse como un tableau fisico de paper cut, paper relief y paper quilling, fotografiado en estudio y lleno de borde a borde.

## Helper compartido

La configuracion vive en `src/lib/image-generation.js`:

- Modelo por defecto: `gpt-image-2`.
- Formato por defecto: `jpeg`.
- Calidad por defecto: `high`.
- Presets:
  - `horizontal`: `1536x1024`, para mitos y taxonomias.
  - `homeBanner`: `1536x864`, para banners del home.
- `vertical`: `1024x1536`, para imagenes verticales.

El helper construye prompts con region, comunidad, excerpt y prompt original cuando existen. Tambien suaviza lenguaje heredado que pueda disparar rechazos de seguridad sin perder la escena cultural.

El helper tambien soporta perfiles de ronda:

- `editorialPaperPhoto`: base editorial de papel fotografiado.
- `documentaryPaperArtifact`: objeto fisico mas documental, con huella manual.
- `cinematicPaperRelief`: escena mas dramatica, con sombras de papel controladas.
- `culturalTextilePaper`: mas enfasis en fibras, textiles y simbolos locales.

## Rondas visuales locales

Antes de regenerar una tanda de produccion, usar el visual companion local en:

```txt
http://localhost:3003/admin/image-style-review
```

Este companion es un taller local de diseno. En produccion el endpoint de
generacion queda desactivado y la ruta no aparece en el menu admin.

Esa pantalla:

- Muestra las 5 muestras base de direccion.
- Muestra el home publicado segun el seed actual, regiones y banners editoriales.
- Muestra el lote ya regenerado.
- Permite generar una muestra privada por pieza y perfil.
- Muestra el comando local para generar una ronda completa de 5 mitos visibles
  del home sin bloquear el navegador.
- Muestra el plan de aplicacion del perfil seleccionado, con comandos de dry-run
  y ejecucion para el home actual.

La API local `/api/admin/image-style-review` crea muestras en
`artifacts/image-style-review/...` y devuelve `committed: false`. Las rondas
completas se guardan bajo
`artifacts/image-style-review/<perfil>/round-.../` usando el script local:

```bash
npm run images:style-round -- --style-profile documentaryPaperArtifact --seed 190 --count 5
```

Ese script escribe `round.json` de forma incremental para que el companion pueda
leer rondas parciales o completas al presionar `Actualizar`. No actualiza
`myths`, `regions`, `tags`, `communities`, `home_banners` ni
`vertical_images`. La aprobacion visual debe ocurrir antes de ejecutar los
comandos de regeneracion por lote.

## Superficies actualizadas

- `/api/admin/generate-images`
- `/api/admin/curacion-imagenes/regenerate`
- `/api/admin/home-banners`
- `/api/admin/image-style-review`
- `/api/admin/vertical-images/generate`
- `/api/admin/vertical-images/generate-single`
- `/api/admin/vertical-images/regenerate`
- `/api/admin/tarot/generate`
- `/api/admin/tarot/regenerate`

## Regeneracion por lotes

Comando:

```bash
npm run images:regenerate:craft -- --target home --limit 5 --force
```

Para aplicar el perfil aprobado exactamente al home actual, usar primero el
dry-run que muestra `/admin/image-style-review`:

```bash
npm run images:regenerate:craft -- --target home-current --seed 190 --force --style-profile documentaryPaperArtifact --dry-run
```

Si el reporte es correcto y la ronda esta aprobada:

```bash
npm run images:regenerate:craft -- --target home-current --seed 190 --force --style-profile documentaryPaperArtifact
```

Para regenerar IDs concretos despues de aprobar una ronda:

```bash
npm run images:regenerate:craft -- --target myths --ids 17,40,63 --force --style-profile documentaryPaperArtifact
```

Targets disponibles: `home`, `home-current`, `myths`, `communities`, `categories`, `regions`, `vertical`.

Flags:

- `--dry-run`: lista entidades y escribe reporte sin llamar OpenAI ni escribir DB.
- `--ids`: limita la tanda a IDs concretos separados por comas (`home`, `myths`, `communities`, `categories`, `regions`).
- `--seed`: fija el seed diario para `home-current`, recomendado tomarlo del visual companion.
- `--style-profile`: aplica el perfil visual aprobado (`editorialPaperPhoto`, `documentaryPaperArtifact`, `cinematicPaperRelief`, `culturalTextilePaper`).
- `--force`: regenera aunque la entidad ya tenga `image_url`.
- `--offset`: permite continuar por pagina.
- `--delete-old`: borra el Blob anterior despues de guardar la nueva URL.

Por seguridad, el script no borra blobs antiguos por defecto. Primero cambia la referencia en DB y escribe un reporte en `artifacts/image-regeneration/`.
