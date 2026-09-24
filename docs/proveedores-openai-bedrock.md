# Proveedores: OpenAI sólo imágenes, Bedrock todo el texto

**Decisión del usuario, 18 de septiembre de 2026.** Lo único que se paga en
OpenAI son imágenes. Escritura, ayudantes, reescritura de prompts, SEO, formato
y planificación salen por Bedrock, con la API key que ya usa ODA. Desde esta
migración **no queda ni una llamada de texto contra OpenAI**.

## La regla

| Qué | Proveedor | Dónde |
|---|---|---|
| `images.generate` / `images.edit` | **OpenAI** (`OPENAI_API_KEY`) | `src/lib/image-generation.js` y los scripts de imagen |
| Cualquier texto | **Bedrock** | `src/lib/bedrock-text.js` |
| Carruseles de Instagram (necesita visión) | **Bedrock** | `scripts/instagram/lib/bedrock-planner.mjs` |
| Búsqueda web | **Serper o Brave** | `src/lib/web-search.js` |

`src/lib/bedrock-text.js` imita la superficie de `openai.chat.completions.create`
—mismos `messages`, misma lectura de `response.choices[0].message.content`— para
que migrar un sitio sea cambiar el cliente y nada más. Traduce a `Converse`,
saca los mensajes de sistema de la conversación, funde turnos consecutivos del
mismo rol, convierte `response_format: json_object` en una orden de sistema más
limpieza de vallas de código, y reintenta el throttling con espera creciente.

## Lo que se migró el 18-sep-2026

**Catorce sitios: el texto ya no toca OpenAI en ningún punto.** Primero los doce
que usaban `gpt-4o-mini`:

- `src/app/api/admin/category-descriptions/route.js` (2 llamadas)
- `src/app/api/admin/format-content/route.js`
- `src/app/api/admin/seo-pages/route.js`
- `src/app/api/admin/tarot-descriptions/route.js`
- `src/app/api/admin/curacion-imagenes/regenerate/route.js`
- `src/app/api/admin/generate-images/route.js`
- `src/app/api/admin/tarot/generate/route.js` y `tarot/regenerate/route.js`
- `src/app/api/admin/vertical-images/{generate,generate-single,regenerate}/route.js`
- `scripts/populate-taxonomy-prompts.mjs`

Y después las dos que dependían de la búsqueda alojada, `editorial-myths` y
`geo-locations`, descritas abajo.

En las rutas mixtas el cliente de OpenAI **se queda** para la imagen y convive
con el de Bedrock para el texto. El guardia viejo `if (!process.env.OPENAI_API_KEY)`
de las rutas de texto se cambió por `assertBedrockConfigured()`, que dice qué
falta.

## La búsqueda web, que era lo último atado a OpenAI

Dos rutas dependían de `web_search_preview`, la búsqueda alojada de OpenAI:
`editorial-myths` (escribe las fichas de los 596 mitos) y `geo-locations`
(coordenadas de lagunas, ríos y pueblos). Converse no trae buscador, así que
migrarlas no era cambiar de cliente sino **reemplazar la búsqueda**.

`src/lib/web-search.js` es el buscador propio: Serper o Brave tras la misma
interfaz, resultados normalizados `{title, url, snippet}`, deduplicados por URL
canónica. El reparto nuevo es:

1. `src/lib/editorial-queries.js` arma las consultas. Antes el modelo decidía
   qué preguntar y nadie lo veía; ahora son código: se leen, se prueban y se
   corrigen. La regla es que el relato entero como consulta devuelve mitología
   genérica — lo que ancla son título, comunidad, región y foco.
2. El buscador las ejecuta y devuelve URLs reales.
3. El scraper que el pipeline **ya tenía** (`EDITORIAL_SCRAPE_*`) lee las
   páginas. Lo que le faltaba no era leer, era encontrar.
4. Bedrock selecciona, resume y compone.

**Antialucinación:** como el modelo ya no busca sino que escoge de una lista,
`collectWebSources` descarta toda URL que no esté en `web_results` y lo anota en
`web_search_invented_urls`. Antes esa garantía la daba el buscador de OpenAI.

## Credenciales: la API key no es el perfil de AWS

Son dos cosas distintas y confundirlas cuesta una tarde:

- **`AWS_BEARER_TOKEN_BEDROCK` (formato `ABSK…`) — la vía preferida.** Es una
  API key propia de Bedrock. **Puede pertenecer a otra cuenta que la del perfil
  de AWS**, y por eso da acceso a otro catálogo de modelos. Es la que usa ODA en
  producción (cuenta `863956448838`). Si está definida, el cliente se construye
  sin credenciales IAM para que el SDK la use: pasarle credenciales explícitas
  la ignora en silencio.
- **Perfil `oda-comarca`** — cuenta `361990119044`, la de infraestructura de
  ODA. Sirve en local y **no** es la cuenta de los modelos buenos: allí sólo
  están Sonnet 4.6/4.5, Opus 4.5, Haiku 4.5 y Nova Pro, y el 18-sep devolvía
  `ThrottlingException: Too many tokens per day` en todos.
- **Vercel**: un perfil no sirve, allí no hay `~/.aws`. O la API key, o
  `BEDROCK_AWS_ACCESS_KEY_ID` + `BEDROCK_AWS_SECRET_ACCESS_KEY`. **Las claves
  estáticas del `.env` de `oda_storefront` están rotadas**
  (`UnrecognizedClientException`): ese proyecto corre con task roles.

⚠ **El consumo por API key no aparece donde se lo busca**: CloudWatch y Cost
Explorer de la cuenta `361990119044` ven esas llamadas en CERO, porque salen por
la `863956448838`.

## Una trampa que ya costó

El `.env` traía `INSTAGRAM_BEDROCK_MODEL_ID` **tres veces**; ganaba la última,
`us.amazon.nova-premier-v1:0`, que Bedrock declara retirado
(`ResourceNotFoundException: This model version has reached the end of its
life`). El planificador de carruseles llevaba tiempo apuntando a un modelo
muerto. Las tres líneas quedaron comentadas y hay una sola activa.
