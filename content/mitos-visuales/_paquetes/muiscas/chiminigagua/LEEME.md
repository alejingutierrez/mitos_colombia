# Chiminigagua · chiminigagua

**Modelo:** GPT Image 2 · **Resolución:** 2K · **Calidad:** high · **Unlimited ON**

**Arco:** la luz sale de la noche (entrada) -> las aves cosen la luz sobre el mundo (acto) -> el vuelo sigue cruzando las madrugadas (huella)


## Las tres escenas

### 1. entrada · 16:9 · composición «umbral»

- **Prompt:** `entrada.txt`
- **Adjuntar como referencia:** _ninguna — esta escena se genera sólo con texto_

### 2. acto · 9:16 · composición «diagonal»

- **Prompt:** `acto.txt`
- **Adjuntar como referencia:** `content/videos/muiscas/biblia/laguna_iguaque_A.jpg`

### 3. huella · 1:1 · composición «contrapicado»

- **Prompt:** `huella.txt`
- **Adjuntar como referencia:** _ninguna — esta escena se genera sólo con texto_

## Cuando termines

Descarga las tres y déjalas en `content/mitos-visuales/_inbox/chiminigagua/` con el nombre que sea.
Yo las identifico por proporción, las renombro, recorto el 9:16 para video y escribo el manifiesto:

```bash
npm run mitos:ingest -- --comunidad muiscas --slug chiminigagua
```
