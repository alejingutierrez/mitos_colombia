# Guiones de agosto de 2026 — ⛔ NO USAR

Los seis `guion-a-fogon` … `guion-f-duo` son el **bake-off de voz** del 22 de
agosto: el mismo relato de Bachué escrito seis veces para elegir registro.
`channel-dna.json` lo da por resuelto —«E ganó; mvps a-f archivados»— y de ahí
salió el registro *fogón-visual-coloquial* que hoy usan todos.

`guion-bachue-v3` y `guion-bochica` son los textos de agosto de los dos primeros
videos del canal, los del carril `grok_video`.

## Por qué se apartan

Ninguno cumple la regla vigente de la fase 1 —N bloques de **2 frases y 17-19
palabras**, con **una** cita en el clímax— y no pueden cumplirla: se escribieron
antes de que la banda se fijara, el **16 de septiembre de 2026**, después de
medir que escrita como «≤19» había dejado la narración en el **44 %** del
metraje. Comprobarlo:

```bash
node scripts/videos/lint-guion.mjs docs/videos/muiscas/mvp-guiones/historico/*.json
```

Se conservan porque son el registro de cómo se eligió la voz del canal y de cómo
sonaban los dos primeros videos. Las tres referencias que los citaban —la hoja de
producción de Bochica, el manual y `prepare-muisca-video-batch.mjs`— se
actualizaron a esta carpeta.

## Lo vigente

`../guion-<mito>-vN.json`, el de versión más alta por mito. Hoy: `bachue-v5`,
`bochica-v6`, `el-dorado-v2`, `huitaca-v2`, `la-aparicion-del-hombre-v2` y
`campos-eliseos-v1`.
