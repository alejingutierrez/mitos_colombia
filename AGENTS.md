# Guía para agentes

**Lee primero [`ESTADO.md`](ESTADO.md).** Dice dónde está cada cosa y en qué
punto va cada comunidad. Este archivo sólo cubre cómo trabajar aquí.

## Qué es el proyecto

Catálogo web de mitos de Colombia —Next.js 15, en producción en
www.mitosdecolombia.com— y el taller que produce su material visual: biblias
visuales por comunidad, trípticos por mito, keyframes, guiones y narración.

El sitio ya existe y está desplegado. No lo inicies de cero.

## Cómo está partido el repo

| carpeta | qué es |
|---|---|
| `src/` | la app Next.js |
| `content/` | **la fuente** del material: planes, prompts, guiones, selecciones, manifiestos |
| `output/` | **la salida**: los jpeg y png que emite la tanda. Ignorado por git, se regenera |
| `docs/` | doctrina y bitácora de producción |
| `editorial/` | los generadores de biblia y dirección visual por comunidad |
| `scripts/` | el pipeline: emisión de tandas, preflight, ingesta, preproducción de video |
| `public/` | lo que sirve la app |

La regla que gobierna qué entra a git está escrita en
`content/videos/.gitignore` y vale para todo el repo: **se versiona el
conocimiento, no los rushes.** Si perderlo obliga a volver a gastar créditos o
rompe la continuidad visual, va a git. Si se rehace sin costo desde lo que sí
está versionado, no.

## Reglas de producción

- **Los 41 muiscas completos, con las cuatro capas.** El alcance nunca es una
  muestra: es el corpus entero de la comunidad.
- **Todo en paralelo.** En Higgsfield por MCP se encola la tanda completa, no
  pieza por pieza.
- **Nunca sobrescribir un `freeze.json`.** Cada preparación va a una carpeta
  `prepared-NN` nueva. El freeze es lo que permite reproducir una pieza.
- **La biblia manda.** Ninguna imagen se genera sin contrastarla contra la
  biblia visual de su comunidad.
- **Puerta metodológica V2**: obligatoria antes de abrir una comunidad nueva.
  Está en `docs/mitos-produccion-imagenes.md`.

## Dirección visual

Editorial y minimalista. Manrope y Inter, verde selva `#1c5c3f`, iconos de
línea. Las ilustraciones son paper cut y quilling. Referencia sutil a Colombia
—verde selva, azul ríos, dorados tierra— nunca la bandera literal.

## Operación

```bash
npm run dev                  # el sitio en local
npm run mitos:estado         # en qué va la producción de imágenes
npm run mitos:tanda          # emitir una tanda
npm run mitos:test:biblia    # pruebas del pipeline visual
```

- **Despliegue por Git.** `vercel --prod` sube el disco, no `main`, y puede
  revertir lo que la integración ya publicó.
- **Secretos fuera del repo.** `.env` local o variables en Vercel. `POSTGRES_URL`
  contra Neon.
- **`npm run db:import:pg` NO es rutina: es un seed DESTRUCTIVO de arranque.**
  Vacía y reconstruye `myths`, `regions`, `communities`, `tags`, `myth_tags` y
  `myth_keywords` desde `docs/mitos_seo_actualizados.xlsx` —una foto de enero de
  2026, con menos mitos que la base viva— y por CASCADE borra también los
  dossiers editoriales y los comentarios. `vertical_images` y `tarot_cards`
  guardan ids sin llave foránea: sobreviven y quedan huérfanas. No hay vuelta
  atrás salvo restaurar un backup.
  - Ver qué se destruiría, sin tocar nada:
    `source .env && DESTRUCTIVE_IMPORT_DRY_RUN=yes npm run db:import:pg`
  - Ejecutarlo de verdad exige confirmarlo a mano; el script se niega por
    defecto: `source .env && CONFIRM_DESTRUCTIVE_IMPORT=yes CONFIRM_PRODUCTION_WIPE=yes npm run db:import:pg`
  - Para actualizar contenido en producción NO uses este script: edita por el
    admin o escribe una migración puntual.
- **`git` en esta máquina**: `/usr/bin/git` exige aceptar la licencia de Xcode.
  Mientras no se acepte, usa `/Library/Developer/CommandLineTools/usr/bin/git`.

## Seguridad y secretos
- Nunca versionar `.claude/settings.local.json`: guarda los permisos de una maquina concreta y es donde mas facil se cuela un token. Ya esta en `.gitignore`; `.claude/launch.json` si se versiona porque solo declara el puerto de dev.
- Nunca escribir un token dentro de una regla de allow. En vez de `Bash(vercel --prod --token="...")`, exporta `VERCEL_TOKEN` en tu shell y deja la regla generica: `Bash(vercel --prod:*)`. La CLI de Vercel lee `VERCEL_TOKEN` sola.
- Lo mismo aplica a `OPENAI_API_KEY`, `POSTGRES_URL`, `BOLD_*` y a las llaves de Bedrock: van en `.env` local o en las variables de Vercel, nunca en el repo ni en un comando de ejemplo.
- Chequeo antes de cada push (las tres salidas deben estar vacias, salvo `.claude/launch.json`):

```bash
git ls-files | grep -E '(^|/)\.env' | grep -v '\.env\.example$'
git ls-files .claude/ | grep -v '^\.claude/launch\.json$'
git diff --cached -U0 | grep -nEi 'token=|api[_-]?key|secret|password|AKIA|sk-|vercel_blob_rw_'
```

- Si un secreto ya llego a un commit: primero rotarlo o revocarlo (el valor publicado ya no es confiable) y despues limpiar la historia. El orden inverso no sirve de nada.

## Qué no hacer

- No empezar el proyecto de cero: existe y está en producción.
- No commitear `output/`, `tmp/` ni `.mp4`.
- No sobrescribir un freeze ni una carpeta `prepared-NN` existente.
- No borrar `artifacts/` ni ramas sin fusionar sin preguntar: hay trabajo vivo
  en 55 ramas fuera de `main`.
