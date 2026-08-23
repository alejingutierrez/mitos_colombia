# Bachué — guion y storyboard (video 90 s · 9:16)

- **Fuente canónica:** `editorial/muisca/myths/la-madre-de-los-hombres.mjs` (narración,
  guardarraíles en `researchNotes`: el compañero no tiene nombre documentado; las
  enseñanzas de semillas/caminos/acuerdos son licencia editorial coherente; sin joyería
  inventada, sin maternidad cristiana, sin halo).
- **Lección:** "Quien reúne a su gente termina por entregarle el camino que abrió."
- **Estructura:** 9 bloques × ~10 s · 1 línea de narración por bloque · planos según
  arquitectura híbrida (bloques motion: clip generado; bloques stills: keyframe con
  movimiento de cámara local tipo Ken Burns).
- **Calibración de ritmo (medida 2026-08-19 con seed_audio en español, registro de
  leyenda):** ~2,1–2,3 palabras/s → **20–23 palabras por bloque de 10 s**. La ventana
  de habla por bloque manda sobre el conteo: si una toma pasa de ~10 s, se reescribe
  la línea (nunca se acelera el audio).
- **Through-line:** **las semillas** (asset `semillas_bolsita`). Escalada: dormidas en la
  orilla (1) → junto a las primeras huellas (2) → guardadas junto al fuego (3) →
  repartidas en la familia (4) → viajan al hombro de Bachué (5) → enseñadas y sembradas
  (6) → reunidas por los poblados (7) → entregadas a una joven (8) → regresan con la
  gente (9).
- **Arc:** `{"hook": 1, "build": [2,3,4,5,6,7], "turn": 8, "payoff": 9}`
- **Tono de narración:** contador de leyendas, pausado, cálido, misterioso. Español
  contemporáneo. Sin chistes, sin arcaísmos.

---

## Bloques

### Bloque 1 — HOOK · Laguna de Iguaque (ángulo A) · amanecer
**VO (21 palabras):** "Antes de los caminos, solo había agua. La laguna de Iguaque
guardaba silencio en la niebla, esperando la mañana del origen."
1. WIDE (establecimiento): la laguna quieta entre niebla, frailejones en silueta.
2. MACRO: gotas de niebla resbalando por un frailejón.
3. TOP-DOWN: la superficie oscura del agua, ondas mínimas.
4. CU: la orilla — semillas dormidas semienterradas en el lodo junto a la piedra ancha.
5. LOW WIDE: la niebla se abre apenas sobre el agua.
- Assets: laguna_iguaque_A, semillas_bolsita (semillas sueltas).

### Bloque 2 — BUILD · Laguna (ángulo B — sin re-establecer) · **BLOQUE PILOTO (motion)**
**VO (22):** "Del fondo del agua salió Bachué, serena, llevando a un niño de la mano.
No traían nada: solo el comienzo de todo."
1. MED: la superficie se agita, círculos concéntricos.
2. CU: Bachué emerge serena hasta los hombros, cabello y manta empapados.
3. ECU: su mano toma la mano pequeña del niño.
4. LATERAL MED: ambos caminan del agua a la orilla.
5. HIGH: las primeras huellas humanas en el lodo, junto a las semillas.
- Assets: laguna_iguaque_B, bachue_adulta, companero_nino, semillas_bolsita.
- Keyframe piloto: `kf_b2_emerge` (plano 2). Moderación: manta empapada modesta.

### Bloque 3 — BUILD · Casa en las tierras llanas (nuevo paisaje)
**VO (22):** "Bajaron a las tierras llanas y levantaron una casa. Allí el niño creció,
aprendiendo a leer el cielo y cuidar el fuego."
1. WIDE (primer bloque del paisaje): el valle llano, el bohío a medio levantar.
2. MED: las manos de Bachué tejiendo la paja del techo.
3. CU: el niño apila leña junto al fogón; la bolsita de semillas cuelga de un poste.
4. ECU: chispas del fogón, manos pequeñas cuidando la llama.
5. MED nocturno: los dos junto al fuego bajo un cielo estrellado.
- Assets: casa_tierras_llanas, bachue_adulta, companero_nino, semillas_bolsita.

### Bloque 4 — BUILD · Casa y alrededores (sin WIDE de apertura)
**VO (20):** "Cuando fue adulto, se convirtió en su compañero. Tuvieron muchos hijos,
y luego más: el valle se llenó de voces."
1. MED: el compañero, ya hombre, carga un tronco hacia la casa.
2. CU: cuatro manos repartiendo semillas en la bolsita tejida.
3. LATERAL WIDE (encuadre nuevo): casas nuevas levantándose cerca.
4. MED: familias jóvenes caminan entre las casas, pequeños de la mano.
5. HIGH: el valle punteado de fogones humeando al atardecer.
- Assets: casa_tierras_llanas, bachue_adulta, companero_adulto, familias_muiscas,
  semillas_bolsita.

### Bloque 5 — BUILD · Sendero del territorio (nuevo paisaje)
**VO (20):** "Bachué caminó con su gente por el territorio, buscando agua limpia y
tierra fértil. Donde se detenía, nacía un poblado."
1. WIDE: la fila de familias avanza por el sendero entre lomas.
2. MED: Bachué al frente señala un valle con agua.
3. CU: sus pies descalzos cruzando el arroyo.
4. ECU: la bolsita de semillas balanceándose en su hombro.
5. LOW: la fila pasa en contraluz bajo nubes bajas.
- Assets: sendero_territorio, bachue_adulta, companero_adulto, familias_muiscas,
  semillas_bolsita.

### Bloque 6 — BUILD · Poblado nuevo (nuevo paisaje)
**VO (21):** "En cada poblado enseñaba a vivir juntos: guardar semillas para la siembra,
escuchar antes de decidir, y compartir siempre el agua."
1. WIDE: el poblado nuevo, patio central, el telar contra una casa.
2. MED: Bachué muestra a una joven cómo guardar semillas en una vasija.
3. CU: dos personas en desacuerdo; Bachué entre ambas, escuchando.
4. ECU: agua vertida de una vasija a otra, compartida.
5. MED: un sendero abierto entre cultivos; alguien lo cruza libremente.
- Assets: poblado_nuevo, bachue_adulta, familias_muiscas, semillas_bolsita,
  vasija_ceramica.

### Bloque 7 — BUILD · Poblado, años después (sin WIDE de apertura)
**VO (22):** "Pasaron los años. Bachué envejeció viendo crecer pueblos donde antes
había silencio. Un día reunió a los suyos: es hora de volver."
1. CU: el rostro de Bachué anciana, arrugas serenas.
2. MED: camina despacio por el patio; la gente la saluda al pasar.
3. HIGH: el poblado ahora extenso, muchos techos de paja.
4. MED: los descendientes se reúnen; sobre una manta, vasijas con semillas de todos los
   poblados.
5. ECU: la mano de Bachué señala hacia las montañas de Iguaque, lejos.
- Assets: poblado_nuevo, bachue_anciana, companero_anciano, familias_muiscas,
  semillas_bolsita.
- "Dijo unas palabras" es del narrador; en pantalla solo gesto (nunca lip-sync).

### Bloque 8 — TURN · Regreso a la laguna (retorno; abre en MED, no WIDE)
**VO (23):** "Una multitud los acompañó de regreso a Iguaque. Junto al agua, Bachué
pidió conservar la paz: no entregaba una tierra, confiaba una tarea."
1. MED: la multitud asciende por el pajonal, cargando niños y sosteniendo a los mayores.
2. LATERAL: Bachué anciana y su compañero caminan adelante, tomados del brazo.
3. CU: ella mira los rostros reunidos junto al agua.
4. ECU: entrega la bolsita de semillas a una joven (el relevo del through-line).
5. HIGH: la comunidad en silencio alrededor de la orilla, niebla baja.
- Assets: laguna_iguaque_A, bachue_anciana, companero_anciano, familias_muiscas,
  semillas_bolsita.

### Bloque 9 — PAYOFF · La transformación (laguna, ángulo B)
**VO (20):** "Tomó la mano de su compañero y entraron al agua. Dos grandes serpientes
se hundieron despacio. Todos volvieron llevando semillas."
1. MED: los dos ancianos, de la mano, entran al agua hasta la cintura.
2. CU: bajo la superficie, sus siluetas comienzan a ondular con serenidad.
3. TOP-DOWN: dos grandes serpientes se deslizan un instante sobre el agua oscura.
4. WIDE: la laguna quieta otra vez; la niebla se cierra.
5. CU final: la joven aprieta la bolsita de semillas contra el pecho; la comunidad
   emprende el regreso.
- Assets: laguna_iguaque_B, bachue_anciana, companero_anciano, serpientes_laguna,
  familias_muiscas, semillas_bolsita.
- Moderación: transformación serena, sin horror corporal; serpientes majestuosas. Si
  dispara el filtro: re-encuadrar hacia el plano del agua (siluetas).

---

## Notas de producción

- Total narración: **191 palabras ≈ 87–92 s** al ritmo medido (~2,15 palabras/s).
- Los 5 planos por bloque son el plan de cobertura: en bloques motion se piden dentro
  del prompt del clip o se cubren con 2 clips cortos; en bloques stills son keyframes
  alternativos para elegir el mejor.
- Asignación motion vs. stills (arquitectura híbrida, por definir tras el piloto):
  candidatos fijos a motion = bloques 2 (emergencia) y 9 (transformación); el resto
  puede ser stills con Ken Burns local si el presupuesto lo pide.
- Cada clip lleva ≤7 referencias: paisaje → personajes → props.
- Cierre de marca: sin texto en pantalla dentro de los clips; el branding
  (mitosdecolombia.com) va en el caption del post.
