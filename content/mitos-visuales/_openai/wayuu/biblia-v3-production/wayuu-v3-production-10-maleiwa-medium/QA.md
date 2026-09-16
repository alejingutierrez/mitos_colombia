# QA · producción Wayuu V3 · lote 10

## Alcance

- Mito: `maleiwa`.
- Modelos nuevos: 10.
- Modelos aprobados reutilizados: 10.
- Cobertura del mito: 20/20 modelos.
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Referencias locales: ninguna; lote base y correcciones generados desde texto.
- Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `olivo_mareiwa__botanical_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `tormenta_nacimiento_mareiwa__phenomenon_rule` | PASS | lote base |
| `honda_piedra_mareiwa__object_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `pozos_salados_mareiwa__spatial_model` | PASS | lote base |
| `pava_semillera__identity_sheet` | PASS | lote base |
| `turpial_semillero__identity_sheet` | PASS | lote base |
| `paloma_semillera__identity_sheet` | PASS | lote base |
| `tuna_higo__botanical_sheet` | PASS | lote base |
| `primeros_wayuu__group_grammar` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `outsu_lluvia_mareiwa__group_grammar` | PASS | lote base |

## Investigación aplicada

Milcíades Chaves y Roberto Pineda Giraldo conservan versiones diferentes del
ciclo de Mareiwa. Por eso la tormenta, el olivo local, las olas y nubes, las
aves dispersoras y las secuencias de organización no se fusionan en una sola
genealogía. Pineda distingue además el árbol local llamado olivo del olivo
mediterráneo. Chaves registra pavas y turpiales, mientras Pineda incluye
palomas en otra versión. `Morva` permanece como arbusto y no se transforma en
ave.

La indumentaria se contrastó con Ramón Paz Ipuana, CINEP/PPP, ICANH,
Ministerio de Cultura, Artesanías de Colombia y el registro de Brian Moser. El
resultado corrige la idea de que el traje masculino Wayuu sea sólo wayuco:
camisa o camisilla, si'ira, waireñas, manta masculina larga, sombrero y cargas
funcionales forman repertorios distintos según edad, actividad y ocasión.

La terminología `outsü` femenina y `outshi` masculina se conserva. La ficha de
lluvia usa dos mujeres y un hombre como síntesis editorial reversible, no como
afirmación de una ceremonia histórica única. El rojo, la `mmolona` y la prenda
blanca larga documentados en contextos de protección o curación no se
trasladan al llamado de lluvia.

Expedientes:

- `docs/wayuu-lote-10-maleiwa-v3.md`
- `docs/wayuu-indumentaria-y-pintura-v3.md`

## Cultura material verificada

### Primeros Wayuu

- exactamente seis personas de edades y alturas distintas;
- tres mantas femeninas completas con cortes y colores diferenciados;
- hombre adulto con camisilla, wayuco opaco, si'ira y waireñas;
- hombre mayor con manta masculina larga sobre wayuco y waireñas;
- niño con camisa, paneles opacos de wayuco, si'ira y waireñas;
- un solo womu bajo y ningún bolso, uniforme, torso descubierto, pintura,
  motivo, kana o marca clanil.

### Especialistas de lluvia

- exactamente dos mujeres outsü y un hombre outshi;
- manta índigo, manta ocre y conjunto masculino de camisa con wayuco como tres
  siluetas distintas;
- una sola maraca pequeña, baja y quieta;
- ninguna vestimenta roja uniforme, prenda blanca transferida, pintura,
  tocado, tabaco, chirrinchi o coreografía;
- lo maravilloso nace de capas de aire que relacionan canto, vegetación y
  nubes distantes.

## Iteraciones rechazadas

- Olivo base: hojas, frutos y copa afirmaban visualmente un olivo
  mediterráneo. La corrección usa hojas ovales anchas y racimos ocre rojizos,
  manteniendo abierta la especie local.
- Honda base: cordón, piedra y suelo parecían materiales reales. La corrección
  usa tiras de papel trenzadas, bolsa plegada y piedra facetada apilada.
- Primeros Wayuu base: añadió una bolsa no prevista, ambigüedad en prendas
  inferiores y un paisaje montañoso no pertinente.
- Primeros Wayuu `corrections-01`: corrigió paisaje, womu y bolsa, pero el
  vestido inferior del niño se leía como shorts. `corrections-02` separa los
  paneles del wayuco y conserva seis conjuntos completos.

Todas las imágenes rechazadas permanecen en disco con causa y SHA-256 en
`selection.json`.

## Criterios generales

- Las diez selecciones son paper craft 3D full bleed con aire, cantos internos,
  oclusiones y sombras físicas.
- No se ve base, cartón soporte, mesa, pedestal, marco o exterior de maqueta.
- Ninguna planta o ave recibe una identificación taxonómica no respaldada.
- No hay violencia o sexualidad explícita, desnudez ni cuerpo vulnerado.
- No se inventan marcas claniles, kanas, pintura, tocados panindígenas o
  símbolos.
- Generación, QA, selección, ingestión, canon y publicación permanecen estados
  separados.

Tablero final:
`output/imagegen/wayuu-v3-production/maleiwa-selected-contact-sheet.jpeg`.

