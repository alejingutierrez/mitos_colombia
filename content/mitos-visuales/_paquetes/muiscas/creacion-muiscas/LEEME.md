# La creación muisca · creacion-muiscas

**Modelo:** GPT Image 2 · **Resolución:** 2K · **Calidad:** high · **Unlimited ON**

**Arco:** bajan del páramo y hacen casa (entrada) -> la tierra se llena de gente (acto) -> el humo del fogón, señal de mundo habitado (huella)

**Ojo con el deslinde:** NO repetir a Bachué saliendo del agua (es la entrada de `bachue`), ni el reparto de semillas en el poblado (su acto), ni las serpientes en la laguna (su huella), ni las aves cosiendo la luz (acto de `chiminigagua`). Este mito es el POBLAMIENTO: la cadena de generaciones, no la emergencia.

## Las tres escenas

### 1. entrada · 16:9 · composición «peso_contrario»

- **Prompt:** `entrada.txt`
- **Adjuntar como referencia:** `content/videos/muiscas/biblia/bachue_adulta.jpg` · `content/videos/muiscas/biblia/laguna_iguaque_A.jpg`

### 2. acto · 9:16 · composición «figura_pequena»

- **Prompt:** `acto.txt`
- **Adjuntar como referencia:** `content/videos/muiscas/biblia/sabana_cultivos.jpg` · `content/videos/muiscas/biblia/familias_muiscas.jpg` · `content/videos/muiscas/biblia/poblado_nuevo.jpg`

### 3. huella · 1:1 · composición «simetria»

- **Prompt:** `huella.txt`
- **Adjuntar como referencia:** _ninguna — esta escena se genera sólo con texto_

## Cuando termines

Descarga las tres y déjalas en `content/mitos-visuales/_inbox/creacion-muiscas/` con el nombre que sea.
Yo las identifico por proporción, las renombro, recorto el 9:16 para video y escribo el manifiesto:

```bash
npm run mitos:ingest -- --comunidad muiscas --slug creacion-muiscas
```
