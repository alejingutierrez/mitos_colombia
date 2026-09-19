# 31 exclusiones que nadie volvió a mirar después de la investigación

El censo decidió las exclusiones **antes** de que existieran los dossiers. Una
razón como «sin evidencia visual» no es una afirmación sobre la entidad: es una
afirmación sobre lo que se había buscado hasta ese momento. La investigación
vino después y en algunos casos encontró justo eso que faltaba — pero
`build-inventario-v3.mjs` arrastró la decisión del censo sin re-contrastarla.

## El tamaño real, en tres cifras

De las 665 entidades `excluded` en los 42 planes:

- **89** llevan una razón de la familia «no encontré evidencia» (y no una
  decisión: restricción cultural, deslinde, sensibilidad, historia de recepción).
- De esas 89, **58 sí aparecen en alguna fila de la matriz de evidencia** de su
  propio dossier: alguien las volvió a mirar. Eso **no** garantiza que el
  veredicto sea correcto — ver el caso cuycuyes abajo —, pero sí que hubo lectura.
- **31 no aparecen en ninguna fila.** Nadie volvió a mirarlas. Ésta es la
  única cifra que es una laguna limpia.

## Las 31, por corpus

| corpus | entidades |
|---|---|
| koguis | `moha`, `siguate`, `chipi_chipi`, `aparatos_para_secar_el_agua`, `ubatashi` |
| motilon-bari | `dos-mujeres-hacia-el-oriente`, `muchu-mucshura`, `daviddu`, `espiritus-buenos-y-malos` |
| varios-sin-territorio | `duelo_de_tamboras_pamba_lina_santiago`, `cihuacoatl_y_mictlancihuatl`, `agustin_moreno_y_su_diario`, `claudia_patricia_y_clinica_minerva` |
| amazonia-mestizo-mixto | `duui`, `espiritus_del_higado`, `yuinata_reino_en_tinieblas` |
| desana | `trampa_de_los_padres`, `transformaciones_de_gainpaya`, `pruebas_de_la_casa_de_piro` |
| barasana | `ave_sanada_por_kahe_sawari`, `elementos_de_transmision_entre_generaciones` |
| cordoba-sinu-mestizo | `las_aves_nacidas_de_los_huevos_rotos`, `el_rejuvenecimiento_de_los_ancianos` |
| orinoquia-llanera-mestizo | `delfines_dorados`, `jefe_indio_levitando` |
| santander-mestizo | `cacique_caricachi_masuca`, `indios_espectrales_de_la_cueva` |
| bogota-sabana-mestizo | `tulua_variante` |
| tolima-huila-mestizo | `cadena_del_sombreron` |
| u-wa | `zorro_y_zarigueya` |
| zenu | `descendientes_nombrados` |

## Por qué la cata dice que no es alarma, y dónde sí lo es

Cuatro casos leídos contra su dossier:

- **`cuycuyes/maitama-y-cirigua` — error real.** El dossier: «Cirigua tiene el
  único retrato físico del corpus, de 1540. Es la corrección más importante del
  expediente». Estaba en el montón de las 58 «miradas»: **que la investigación
  la tocara no impidió que la exclusión sobreviviera equivocada.** Ya va
  corregida en el encargo de ese lote.
- **`motilon-bari/yacura` — exclusión correcta y mal redactada.** Su dossier
  trae fila propia: «Anatomía del yácura · `uncertain` · `consult_required` ·
  ausencia». Es una decisión firme disfrazada de laguna.
- **`choco-afro/el_chinango` — correcta.** El dossier le añade material
  positivo (cura, saber botánico, raicero) **y aun así lo confirma**: «Lo que no
  se encarna. El chinango, que no tiene rostro ni ropa en el texto.»
- **`koguis/moha` — ambigua.** «Palabra no glosada en el impreso» es un hallazgo
  sobre la fuente, más cerca de firme que de laguna.

Es decir: **la tasa de error real es baja, pero no es cero, y no está donde se
esperaba** — el caso que falló venía del montón supuestamente revisado.

## Qué hacer, y cuándo

Una pasada al cerrar los 42, no antes: los agentes están escribiendo esos mismos
planes. Dos tareas distintas y con distinto coste:

1. **Las 31 ciegas** — leer cada una contra su dossier y, o bien reinstalarla
   con `design`, o bien reescribir `exclusion_reason` para que diga qué se buscó
   y no se halló. Barato y mecánico.
2. **Las 58 miradas** — contrastar el veredicto de la fila de matriz con la
   exclusión. Más caro, y es donde apareció el único error confirmado.

Y una corrección de forma que vale para las dos: **«sin evidencia visual» no es
una razón admisible tal cual**. Una exclusión legítima dice qué se buscó, dónde,
y qué se encontró en su lugar — como hace la fila del yácura.
