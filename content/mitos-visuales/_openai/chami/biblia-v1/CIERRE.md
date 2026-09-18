# Biblia visual chamí V1 · cierre

**118 fichas, diez tandas, cuatro capas.** Cerrada el 2026-09-17.

| capa | fichas | tandas |
|---|---|---|
| 1 · personas, fuerzas y colectivos | 36 | 01, 02, 03 |
| 2 · animales y criaturas | 24 | 04, 05 |
| 3 · atrezo, objetos y plantas | 34 | 06, 07, 08 |
| 4 · arquitectura, paisaje y fenómenos | 24 | 09, 10 |

El recuento por capa coincide exactamente con el inventario
(`content/mitos-visuales/chami.v1.inventario.json`). **No falta ninguna ficha** y
ninguna entidad detectada quedó sin decisión declarada.

## Lo que se corrigió antes de cerrar

Once fichas rehechas en la pasada del 2026-09-17, con la versión anterior
conservada al lado como `--anterior`:

**Ocho figuras míticas recibieron su firma.** Iban como retratos documentales y
el editor pidió que los personajes se vieran míticos sin dejar de ser fieles.
Cada una tiene su propio vehículo y **ninguna usa resplandor**:

- **Karagabí**: el ruedo de la túnica continúa en el tronco de la palma
  barrigona. No se puede decidir dónde acaba el hombre.
- **Karagabí rejuvenecido**: la cabeza y las manos son de papel crema nuevo y el
  cuerpo de papel viejo y amarilleado, con la juntura visible en el cuello.
  Rejuveneció sólo por fuera.
- **El hijo de Karagabí**: las manos vacías proyectan la sombra de un cuchillo.
- **La mujer de Karagabí**: el contorno del pelo y el borde de la paruma están
  recortados en forma de plumas. Sin ave y sin dramatismo.
- **El primer hombre**: el fondo partido por un corte que pasa entre las dos
  mitades de la piedra, oscuro de un lado y crema del otro.
- **El hombre que cava**: las puntas de los diez dedos ya son plumas de papel.
- Más **el hijo de la nutria** (la pantorrilla abierta) y **la mujer embijada**
  (recortada en el crema del fondo), que ya venían con firma.

**Tres fichas de edad**: el anciano, la anciana y los dos jefes llevaban arrugas
pintadas. La técnica pide que la edad se lea por proporción, postura y pelo
blanco, y el rostro vuelve a ser un óvalo plano de un solo tono.

**Los dos Karagabí ahora comparten rostro**, descrito literalmente igual en las
dos fichas.

**Las flechas** perdieron las plumas rojas, azules y amarillas que el modelo
había inventado: la fuente sólo dice «arco y flechas», y ahora son pardas y
grises de ave de monte.

## Las tres reglas del repo que hubo que corregir antes de generar

1. `COMMUNITY_CRAFT.Chamí` decía «eje cafetero», «chaquira de pechera» y «jagua
   en trazos geométricos». Los tres contradicen la investigación.
2. `REGION_CRAFT.Andina` habría inyectado **páramo, frailejones y geometría
   muisca**. Se añadió `"Cordillera Occidental"`.
3. La época `prehispanico` prohíbe el metal y con él **el hacha con la que
   Karagabí abre la palma**. Se añadió `mitico_chami`.

## Las dos trampas de técnica, atrapadas a tiempo

**El modelo esculpe por defecto.** El primer piloto salió con cuerpos modelados
y piel en degradado. No basta con prohibir el volumen al final del prompt: hay
que **abrir con la técnica** y nombrar **el cuerpo** y **la cara** por separado,
porque se arreglan en pasos distintos.

**El pelaje es la trampa de los animales.** En wayuu el refuerzo pedía «cada
pluma, cada escama, cada mechón como recorte independiente» y produjo papel
maché; hubo que rehacer la tanda. Aquí la regla va invertida desde la primera
lámina —pocas piezas planas grandes con el borde en dientes— y **las 24 salieron
a la primera**.

## Lo que esta biblia NO tiene, y por qué

**El jaibaná no tiene ficha.** Es el asunto `consult_required` que la excepción
cultural dejó expresamente fuera: su trabajo, su vestuario, su transformación y
la chicha cantada. Rubiano (2023) sostiene que para los emberá el jaibaná **se
transforma**, no cree transformarse, y una imagen que lo trate como símbolo lo
falsea. **No se resuelve leyendo más: se resuelve consultando.**

Tampoco tiene nada de las **36 afirmaciones o escenas marcadas
`do_not_visualize`** en la matriz de evidencia: entre ellas el okama copiado de
una pieza real, la selva esmeralda con niebla, el tocado de plumas, las orejeras
de disco, la nariguera, el chamán en trance y «un hombre negro y enorme».

## Lo que falta para que esto deje de ser una hipótesis

**Ninguna persona emberá chamí ha revisado esta biblia.** El paso 3 está en
`documented_exception`, no en `approved`, y la diferencia se declara en cada
entrega. Las tres salvaguardas siguen vigentes: cada ficha declara su fuente y
su nivel de evidencia y dice cuándo el narrador es desconocido; nada inventa
diseño de jagua, okama ni vestuario; y todo es retirable y rastreable si una
autoridad chamí objeta una pieza.

## Lo que sigue

Los **42 trípticos** de los catorce mitos narrables, que ya se pueden componer
porque la biblia existe. Y antes, la decisión pendiente sobre qué hacer con las
cinco páginas editoriales, que no tienen una narración única que ilustrar.
