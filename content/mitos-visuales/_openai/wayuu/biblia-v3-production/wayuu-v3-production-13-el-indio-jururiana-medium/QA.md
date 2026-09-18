# QA · producción Wayuu V3 · lote 13

## Alcance

- Mito: `el-indio-jururiana`.
- Modelos nuevos: 8.
- Modelos aprobados reutilizados: 2.
- Cobertura del mito: 10/10 modelos.
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Tamaños: tres imágenes `1024x1024` y cinco `1536x1024`.
- Referencias locales: ninguna; lote base y correcciones generados desde texto.
- Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `jururiana__identity_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `jururiana__state_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `warir__identity_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `gran_lluvia_jururiana__phenomenon_rule` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `reservas_semillas_jururiana__object_sheet` | PASS | lote base |
| `animales_oscuros_jururiana__group_grammar` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `patsuo__spatial_model` | PASS | lote base |
| `habitacion_oscura_warir__spatial_model` | PASS | lote base |

## Investigación y corrección semántica

La transcripción de Milcíades Chaves nombra semillas, chivos negros, Patsuo
cerca de Puerto Estrella, un chubasco que borra huellas, la muerte anunciada de
Jururiana y la respuesta de Warir sobre la Tierra como abuela. No afirma un
diluvio universal, especies de semillas, depósitos concretos ni animales
oscuros genéricos.

El inventario se corrigió sin alterar el denominador: `animales_oscuros` se
mantiene como identificador técnico estable, pero su entidad visible son chivos
negros. La lluvia se limita a una trayectoria borrada y la síntesis editorial
actual de sueño, lluvia prolongada y cuidado compartido queda distinguida de la
fuente primaria.

La habitación oscura conserva otra frontera: Chaves encadena la prueba de un
hombre escondido, una ambigüedad nominal y luego la respuesta de Warir sobre
Mma. La ficha modela sólo arquitectura y oscuridad; no decide quién está dentro
ni reconstruye una iniciación.

Expediente: `docs/wayuu-lote-13-jururiana-v3.md`.

## Cultura material

- Jururiana lleva un Kotin masculino largo, liso y de mayor cobertura, sobre
  wayuco opaco y si'ira, con waireñas y womu. No se lo reduce a torso desnudo o
  prenda de cintura.
- El paipai de Jururiana es cobertura solar continua y mate, sin líneas,
  motivos o significado inventado. La primera versión se rechazó por convertirlo
  en bandas horizontales sobre el rostro.
- Warir lleva camisa larga índigo, wayuco estrecho con si'ira, waireñas y una
  Asheinpalajanaa cuadrada lisa. La versión base se rechazó porque convirtió el
  wayuco en una falda multipanel con ribetes verticales.
- Warir no lleva pintura facial. La fuente menciona Oyonajá en una fiesta, pero
  no afirma que él baile ni documenta un motivo facial exacto.
- Ninguno porta bastón, maraca, arma, joya, kana, marca clanil o insignia de
  especialista.

## Magia e imaginación verificadas

- cinco cortinas físicas de lluvia de papel borran gradualmente una sola senda
  de huellas y dejan seco el resto del territorio;
- el estado de Jururiana enlaza anuncio, preparación y observación mediante un
  sendero continuo, sin convertirlo en profeta que controla el clima;
- seis familias visuales de semillas permanecen anónimas, haciendo visible la
  diversidad sin inventar especies;
- Patsuo organiza tres caminos hacia un claro vacío junto a mar y dunas, sin
  mapa, coordenada ni sitio monumental;
- la habitación oscura conserva profundidad mediante bahareque, yotojoro,
  barro, piso estratificado y luz mínima, sin cuerpo escondido ni símbolo.

## Iteraciones rechazadas

- Jururiana identidad base: el paipai se volvió bandas faciales inventadas.
- Jururiana estado base: apareció una roseta semejante a agave o aloe.
- Warir base: el wayuco se volvió falda multipanel con ribete vertical.
- Lluvia base: incumplió el conteo congelado y no hizo suficientemente legible
  el borrado gradual. La corrección retiró además una falsa precisión: el número
  de huellas no constituye un dato cultural o narrativo.
- Chivos base: los cinco animales eran correctos, pero el fondo introdujo
  cactus ramificados de lectura saguaro.

Todos los intentos rechazados permanecen en disco con causa y SHA-256 en
`selection.json`.

## Criterios generales

- Las ocho selecciones son paper craft 3D full bleed con aire, cantos internos,
  oclusiones y sombras físicas.
- No se ve base, cartón soporte, mesa, pedestal, marco o exterior de maqueta.
- No hay violencia, muerte visible, enfermedad explícita, diluvio universal,
  sacrificio animal ni cuerpo vulnerable.
- No se inventan especies de semillas, símbolos del color negro, marcas
  claniles, kanas, glifos o motivos faciales.
- Generación, QA, selección, ingestión, canon y publicación permanecen estados
  separados.

Tablero final:
`output/imagegen/wayuu-v3-production/el-indio-jururiana-selected-contact-sheet.jpeg`.
