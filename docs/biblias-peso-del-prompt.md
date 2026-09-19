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


---

# Resultado del recorte 1+2, aplicado el 2026-09-19

Medido sobre las **1.718 láminas** de los 42 corpus, contra la versión anterior
en git. El denominador cambió: la medición original era sobre 853 láminas de 13
corpus, y los 29 que cerraron después escribieron bloques `design` más largos,
así que la línea de partida real era 7.561 y no 7.477.

| | antes | ahora |
|---|---|---|
| media | 7.561 | **6.221** (−18%) |
| por encima de 6.341, el que falló | 1.303 (76%) | **834 (49%)** |
| por encima de 5.022, el que salió en papel | — | 1.345 (78%) |

Por campo, por lámina:

| campo | antes | ahora | delta |
|---|---|---|---|
| `constraints` | 2.254 | 1.631 | **−623** |
| `materials_textures` | 905 | 330 | **−575** |
| `era` | 706 | 564 | −142 |
| `style_medium` | 406 | 0 | −406 |
| `technique_first` | 429 | 837 | **+407** |
| `avoid` · `technique_close` · `lighting_mood` · `primary_request` | sin tocar | | 0 |

## Lo que cada recorte dio de verdad

**El recorte 2 dio cero, y era previsible.** Se midió el solape entre
`technique` y `style_medium`: **0%**. `style_medium` es íntegramente aditivo, así
que plegarlo lo mueve pero no lo borra — los −406 de un campo reaparecen como
+407 en el otro. Lo que compra es **posición**: la técnica se dice en un solo
bloque al frente en vez de en dos separados por cinco campos, que es la lección
literal de la tanda 02.

**El recorte 1 dio −142, no los −711 esperados**, porque sólo se puede
estrechar donde hay estratos etiquetados: de 1.719 láminas, 789 tienen un `era`
de un solo estrato, 167 quedaron ambiguas y conservan todos, y **763 se
estrecharon**. El ahorro se concentra ahí.

Es conservador por diseño, y se verificó en los dos sitios donde podía romper:

- **katíos** reparte 72 Fundación —que el dossier llama «la mayoría del
  corpus»—, 9 Conquista, 5 Guerras cunas y 17 ambiguas. `cunas__group_grammar`
  cae en Guerras cunas; `fuego__phenomenon_rule` queda ambigua y conserva los
  tres.
- **santander** conserva la regla de cierre —«la crinolina de aros no existe
  antes de 1856»— en **83 de 83 láminas**, incluidas las doce que se quedaron
  en el estrato colonial. Las prohibiciones absolutas viajan aunque su estrato
  se descarte.

Cada modelo lleva `era_basis` fuera de `prompt_spec` —rastro de auditoría, no
instrucción— diciendo qué estrato se le dejó o que no hubo dominante.

Seis pruebas en `scripts/mitos/build-biblia-models-v3.test.mjs`.

## La sonda contestó la pregunta, y la respuesta es que el peso no era el problema

Ocho láminas generadas el 2026-09-19 (`sonda-peso-01`): seis adversas entre
8.248 y 9.513 caracteres ensamblados —una por cada manera distinta en que la
técnica se ha roto antes— y dos controles en 4.174 y 4.219.

**La técnica aguantó en las ocho, incluida la de 9.513.** Cantos de corte a la
vista, capas con sombra física, quilling sólo donde algo enrolla de verdad, y
la trampa del pelaje resuelta: la crin y la cola de la mula de Bogotá son pocas
piezas planas grandes con el borde en dientes, no mechón por mechón.

Eso reencuadra el umbral. Los 6.341 que salieron fotorrealistas se midieron con
**diez reglas de color y veinte prohibiciones compitiendo con la técnica**.
Estos planes van capados en cuatro y ocho, y desde el recorte la técnica abre
como un solo bloque. **El umbral no era el número: era la competencia.** No hay
motivo para seguir podando `documented`, que es lo que distingue esta biblia de
una ilustración inventada.

## Lo que la sonda rompió, que valía más que el ahorro

**El recorte 1 está revertido.** Estrechar `era` al estrato de cada ficha
ahorraba 142 caracteres y podía borrar un deslinde:

- **`choco-afro` no enumera épocas.** Su `era` dice «Entra: …» y «No entra: …».
  El parser leyó esas dos etiquetas como estratos, se quedó con la lista de
  inclusión y tiró casi toda la de prohibiciones — incluido **«ningún elemento
  emberá ni wounaan»**, que el dossier llama prohibición total y no graduada.
- **`cuycuyes` declara dos capas** y sólo una encajaba en el patrón de
  etiqueta: la otra mide 48 caracteres y el límite eran 45. No se estrechó, el
  modelo recibió las dos épocas **y dibujó las dos en el mismo cuadro** —
  cuerpos de contacto a la izquierda, arriero con mula a la derecha—, que es
  exactamente lo que ese dossier prohíbe.

Un estrechado seguro tendría que conservar intacta toda frase de prohibición, y
en katíos las prohibiciones son la mitad de cada estrato: no ahorraría nada.
**Detectar mal sale tan caro como recortar mal.**

## Y un defecto que la sonda destapó de camino

Siete corpus —awá, eperara, sikuani, kuiba, makaguán, u'wa y yukpa— llevaban en
`style_medium` la cadena **idéntica** «Ilustración editorial 2D full paper cut y
paper quilling de acabado gráfico plano», contra su propio `technique`, que es
de maqueta. Es la técnica **del sitio** —las imágenes de las páginas de mito sí
son 2D— filtrada dentro de la biblia, que es 3D: la trampa de los dos
productos, siete veces.

No es la disputa de canon de Caldas: sus dossiers no la mencionan, y la cadena
es la misma palabra por palabra. Retirada, con el valor y el motivo guardados
en `visual_system.style_medium_retired`. Y queda una guarda con pruebas
(`tecnicaSeContradice`) que **no pliega** un `style_medium` que contradiga la
técnica, para que nadie vuelva a poner «tridimensional inmersiva» y «2D de
acabado plano» en frases contiguas dentro del bloque que abre y manda. El
primer detector daba tres falsos positivos por leer «nunca ilustración plana»
—una prohibición— como una afirmación 2D.

## Dónde quedó

| | antes | ahora |
|---|---|---|
| media | 7.561 | **6.354** (−16%) |
| por encima de 6.341 | 1.303 (76%) | 956 (56%) |

Y ese 56% ya no es una alarma, porque la sonda enseñó que a 9.513 la técnica se
sostiene. Lo que queda por hacer con el prompt es nada; lo que queda es el
piloto por corpus, que es de otro tipo: lo aprueba el propietario editorial
mirando láminas.
