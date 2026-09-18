# QA · producción Wayuu V3 · lote 12

## Alcance

- Mito: `el-incesto`.
- Modelos nuevos: 8.
- Modelos aprobados reutilizados: 4.
- Cobertura del mito: 12/12 modelos.
- Proveedor y modelo: OpenAI API, `gpt-image-2`.
- Calidad: `medium`.
- Tamaños: cuatro imágenes `1536x1024` y cuatro `1024x1024`.
- Referencias locales: ninguna; lote base y correcciones generados desde texto.
- Estado: `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS`.

## Resultado

| Modelo | Resultado | Selección |
| --- | --- | --- |
| `hermana_litoral__identity_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `hermana_litoral__state_sheet` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `hermano_litoral__identity_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `hermano_litoral__state_sheet` | PASS_AFTER_CORRECTION_02 | `corrections-02` |
| `padre_katetamana__identity_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `hija_katetamana__identity_sheet` | PASS_AFTER_CORRECTION_01 | `corrections-01` |
| `hija_katetamana__state_sheet` | PASS | lote base |
| `cerro_katetamana__spatial_model` | PASS | lote base |

## Investigación y límite de evidencia

Milcíades Chaves transcribe en 1946 dos episodios distintos. En el primero, la
hermana sale del encierro y Mareiwa le asigna una transformación en piedra
litoral. La transcripción no afirma una transformación independiente del
hermano. El inventario corrigió por ello su segundo estado de `forma_litoral` a
`continuidad_no_resuelta`, sin cambiar el denominador ni inventar una
petrificación.

En el segundo episodio, una relación padre-hija asimétrica antecede la muerte
de la joven y su transformación en el cerro Katetamana. Chaves y Roberto Pineda
Giraldo conservan lenguaje y juicios de época que no se trasladan al diseño. La
Biblia separa personas, responsabilidad y consecuencia territorial; nunca
representa unión sexual, embarazo enfatizado, escarnio, autolesión, cadáver o
castigo ejemplarizante.

La investigación contemporánea sobre parentesco y encierro se usa para no
reducir a la hermana a disponibilidad matrimonial o aislamiento individual. No
se presenta como evidencia del corte exacto de su vestuario mítico.

Expediente: `docs/wayuu-lote-12-el-incesto-v3.md`.

## Cultura material

- La hermana usa una manta/ashein cerrada verde mar, pechera visible sólo en el
  cuello, waireñas y womu bajo. La primera versión se rechazó por convertir la
  manta en abrigo abierto; su estado mantiene luego el mismo conjunto sin faja.
- El hermano usa camisilla cruda, wayuco índigo opaco de dos paneles angostos,
  si'ira ocre, waireñas y womu. Identidad y estado conservan el conjunto.
- El padre usa camisa larga carbón violáceo, wayuco arena de dos paneles, si'ira,
  waireñas y womu. No recibe manta formal, arma, joya o emblema de autoridad.
- La hija usa manta/ashein ocre rojiza cerrada, pechera carbón y waireñas; su
  trenza baja permanece entre identidad y estado.
- Ninguna persona lleva pintura facial: las fichas no representan yonna, viaje
  solar, visita o ritual con un motivo exacto respaldado.
- No hay torsos desnudos, taparrabos aislados, uniformes, kanas, marcas
  claniles, joyería o patrones inventados.

## Magia e imaginación verificadas

- la hermana conserva identidad humana a un lado y reaparece como una veta
  verde dentro de una roca litoral abstracta, sin cuerpo petrificado;
- el hermano ocupa sólo el estado documentado y su sendero desaparece por
  oclusión hacia una costa vacía, haciendo visible el límite de la fuente;
- la hija y Katetamana comparten una capa ocre en la geología, sin cuerda,
  árbol, cuerpo suspendido o montaña antropomorfa;
- el cerro fija cresta, collado y tres cauces mediante estratos físicos de papel,
  sin afirmar coordenada ni parecido con un lugar real.

## Iteraciones rechazadas

- Hermana identidad base: la manta se leyó como abrigo abierto.
- Hermana estado base: perdió el womu y agregó una faja no documentada.
- Hermano identidad base: el wayuco se convirtió en falda multipanel.
- Hermano estado base: repitió la falda e introdujo vegetación desértica
  genérica.
- Padre base: el wayuco se convirtió en culotte o shorts continuos.
- Hija identidad base: aparecieron rosetas semejantes a agave o aloe.
- Hermana estado `corrections-01`: corrigió vestuario, pero añadió agaves.
- Hermano estado `corrections-01`: añadió rosetas y ribetes dorados verticales
  no documentados.

Todos los intentos rechazados permanecen en disco con causa y SHA-256 en
`selection.json`.

## Criterios generales

- Las ocho selecciones son paper craft 3D full bleed con aire, cantos internos,
  oclusiones y sombras físicas.
- No se ve base, cartón soporte, mesa, pedestal, marco o exterior de maqueta.
- No hay sexualidad, violencia, autolesión, embarazo enfatizado, cuerpos
  vulnerados ni culpabilización visual.
- No se inventan marcas claniles, kanas, glifos, pintura facial o símbolos.
- Generación, QA, selección, ingestión, canon y publicación permanecen estados
  separados.

Tablero final:
`output/imagegen/wayuu-v3-production/el-incesto-selected-contact-sheet.jpeg`.
