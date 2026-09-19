# El prompt pesa 7.477 y el umbral que ya falló está en 6.341

Medido sobre los **853 modelos** derivados hasta ahora (excluida la biblia wayúu
terminada, que usa otro ensamblador). No es una estimación: es la suma de los
campos de `prompt_spec` tal como el generador los concatena.

| precedente | chars | resultado |
|---|---|---|
| tanda 01 de una biblia anterior | 6.341 | **salió fotorrealista**: la técnica perdió contra diez reglas de color y veinte prohibiciones |
| tanda 02, corregida | 5.022 | **salió en papel** |
| huitoto tanda-02 papel recortado | 4.955 | aprobada |
| nasa-páez maqueta 3D | ~2.600 | aprobada |
| **los 42 planes de ahora** | **7.477** | sin generar, y por encima del umbral que falló |

De dónde sale el peso, por campo y por lámina: `constraints` 2.180 (11 ítems),
`avoid` 939 (8), `materials_textures` 833, `era` 710, `technique_close` 701,
`lighting_mood` 574, `technique_first` 448, `style_medium` 433.

## Los seis recortes, medidos uno a uno

| recorte | ahorro | qué es |
|---|---|---|
| 1 · la silueta duplicada en `constraints` | −290 | ya viaja íntegra dentro de `primary_request`: es literal repetida |
| 2 · la cita dentro de `documentado:` | −6 | despreciable; las citas no están escritas con un patrón regular |
| 3 · la línea `mostrar:` entera | −290 | arrastra contabilidad del censo («el estado cuesta ficha porque…», los alias). **El ensamblador wayúu ya la descartaba**: `constraints.filter(c => !c.startsWith("mostrar:"))` |
| 4 · `materials_base` del corpus | −534 | se repite idéntica en las 103 láminas de un corpus, y el agente escribió la lista de su entidad **contra** ella |
| 5 · `era` | −711 | en katíos enumera los tres estratos cuando a cada ficha le aplica **uno** |
| 6 · `style_medium` | −434 | solapa con `technique_first` |

Acumulado: 7.477 → 7.187 → 7.180 → 6.891 → **6.357** → 5.647 → **5.212**,
y las láminas que siguen por encima de 6.341 caen de 643 a 475 a 181 a **34**.

## Dónde está la frontera

**Los recortes 1-4 no pierden nada**: mueven duplicación y procedencia al
`design_contract` y a `evidence_refs`, que el plan ya guarda íntegros. Llegan a
6.357 — por debajo del umbral que falló, pero **aún 1.300 por encima del que
funcionó**, y con 475 láminas todavía en zona de riesgo.

**Los recortes 5 y 6 sí pierden.** `era` es lo que impide el anacronismo, y
`style_medium` es media técnica. No se borran: se estrechan. `era` debería traer
**el estrato de esa ficha y no los tres** —lo que exige que alguien diga cuál
aplica, y `design.continuity` suele nombrarlo—; y lo no redundante de
`style_medium` se pliega dentro de `technique_first`, que es donde la técnica
manda.

## Cuándo se aplica

`models` es **enteramente derivado** de `design` + `visual_system`: volver a
correr `build-biblia-models-v3.mjs` sobre los 42 planes lo regenera sin pérdida.
Por eso el cambio **no se toca mientras los agentes escriben** —invocan ese
script al cerrar y saldrían contratos desparejos—: se hace al final, una vez,
sobre los 42.

Guiones de medición: `medir-recorte.mjs` y `menu-recortes.mjs`, en este mismo
scratchpad. No escriben nada.
