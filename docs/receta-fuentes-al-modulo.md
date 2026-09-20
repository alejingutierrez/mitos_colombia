# Receta: llevar las fuentes de la reescritura al módulo

La Fase A ya está hecha y aplicada: el texto de cada ficha está en el módulo. Lo
que falta es la Fase B — que las **fuentes que cita el módulo sean las que la
reescritura usó de verdad**. Hoy no lo son: los módulos conservan el reparto
viejo, en bloque, con URLs muertas entre ellas.

## El modelo, ya hecho: desana

Mira `editorial/desana/sources.mjs`, `editorial/desana/define-editorial-myth.mjs`
y `editorial/desana/definitions.mjs`. Así queda:

1. **`sources.mjs`** tiene un objeto con una clave por obra, y cada obra lleva
   `title`, `author`, `year`, `type`, `url`, `summary` y **`limitation`**. El
   `limitation` es obligatorio —el validador lo exige— y no se pinta en la
   página: dice hasta dónde llega esa obra, y es donde se marca la vecindad
   («es del lado brasileño», «es de otro pueblo guahibo», «es un artículo, no un
   libro»).
2. **`define-editorial-myth.mjs`** recibe `sourceKeys` por mito, con un reparto
   por defecto, y exige un mínimo de cinco fuentes, no un número exacto.
3. **`definitions.mjs`** declara `sourceKeys` dentro de cada mito, justo después
   del `slug`, con las obras que esa ficha usa de verdad y en orden de peso: las
   tres primeras salen como fuentes clave.

## De dónde sale qué obra usa cada ficha

Del propio JSON de la reescritura: `content/editorial/<comunidad>/reescritura-2026-09-19/<slug>.json`
tiene un campo **`fuentes`** con las obras que esa ficha usó, escritas a mano.
Esa es la lista buena. También tiene `dudas`, que a veces dice algo sobre una
fuente y conviene leer.

## Reglas al asignar la URL

- **Abre cada URL y confirma que contiene lo que dices.** Que responda 200 no
  basta: una portada de catálogo, una ficha de Open Library o un registro de
  metadatos responden 200 y no sostienen un relato.
- **Prefiere el editor sobre el agregador**, y el registro institucional sobre
  la copia de terceros.
- **No cites archivos privados ni copias piratas.** Si una obra en derechos sólo
  circula así, cítala por su ficha institucional —Library of Congress, DOI,
  WorldCat— y dilo en su `limitation`. Es preferible una ficha honesta a un
  enlace que no deberíamos dar.
- **Las URLs muertas se retiran.** Si una obra no tiene ninguna URL defendible,
  déjala fuera del módulo y anótalo en tu informe.
- **Marca la vecindad en `limitation`**, siempre.

## Cómo saber que quedó bien

Para cada comunidad, las tres tienen que pasar:

```
node --test scripts/editorial/<comunidad>-corpus.test.mjs
node scripts/editorial/enriquecimiento/auditar-fuentes.mjs --comunidad=<slugNeon> --modulos=<carpeta> --env=/Users/alegut/MyApps/Personal/mitos_colombia/.env
node -e "import('./editorial/<carpeta>/records.mjs').then(m=>console.log('ok'))"
```

La auditoría tiene que dar **cero bloqueos** y **cero URLs caídas**. Si un test
viejo afirma un número fijo de fuentes por ficha —«se esperaban siete»— eso era
el reparto en bloque escrito como aserción: reescríbelo sobre la sustancia
(mínimo de fuentes, dominios distintos, ninguna portada de catálogo, repartos
distintos entre fichas) y **nunca lo borres**.

**No toques el texto de las fichas.** Esta pasada es sólo de fuentes.
