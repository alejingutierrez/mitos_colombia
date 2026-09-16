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
  contra Neon; para importar, `source .env && npm run db:import:pg`.
- **`git` en esta máquina**: `/usr/bin/git` exige aceptar la licencia de Xcode.
  Mientras no se acepte, usa `/Library/Developer/CommandLineTools/usr/bin/git`.

## Qué no hacer

- No empezar el proyecto de cero: existe y está en producción.
- No commitear `output/`, `tmp/` ni `.mp4`.
- No sobrescribir un freeze ni una carpeta `prepared-NN` existente.
- No borrar `artifacts/` ni ramas sin fusionar sin preguntar: hay trabajo vivo
  en 55 ramas fuera de `main`.
