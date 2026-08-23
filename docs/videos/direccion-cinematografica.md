# Dirección cinematográfica del canal — doctrina v1 (2026-08-20)

Reglas de dirección de escena, cámara, arte y narrativa para los videos de mitos.
Se aplican al escribir el guion, la spec de keyframes y los prompts de movimiento.
Estrenada con Bochica (video 2). Complementa `plantillas-prompts.md` (fórmulas).

## 1. Dirección de escena

- **Cada bloque narrativo es una mini-escena con arco**: el clip A plantea, el clip B
  revela o consuma. Nunca dos planos equivalentes del mismo instante.
- **Regla del objeto ancla**: cada bloque honra UN objeto o gesto (la vara, la mazorca,
  las manos que siembran). La cámara existe para ese objeto, no al revés.
- **Bookend de objeto**: el objeto del bloque 1 reaparece transformado en el bloque 9
  (Bachué: semillas dormidas → semillas entregadas; Bochica: mazorca con gotas →
  manos que vuelven a sembrar). El espectador lo siente aunque no lo nombre.
- **Personas de espaldas o a media distancia por defecto**: es la ética visual del
  canal (respeto, no rostro-spectáculo), es más segura ante moderación, y deja que
  el paisaje actúe. Los primeros planos de rostro se RESERVAN para 1 momento por
  video (el retrato emocional: la anciana Bachué, Bochica en la roca).
- **El clímax se muestra, no se ilustra**: el golpe de cada mito (la vara que vuela,
  las serpientes que se hunden) tiene su bloque propio con el plano más ambicioso
  del video. Todo lo demás se subordina.

## 2. Cámara

- **Escalas en alternancia consciente** — nunca dos bloques seguidos con la misma:
  `GRAN GENERAL` (asombro/territorio) · `GENERAL` (comunidad) · `MEDIO` (acción) ·
  `DETALLE/MACRO` (objeto ancla, manos) · `CENITAL` (destino, patrón, agua) ·
  `CONTRAPICADO` (aparición, poder sereno).
- **Un solo movimiento por clip y SIEMPRE motivado**: push-in = atención o emoción;
  lateral = viaje; tilt-up = revelación; overhead drift = destino; follow-from-behind
  = acompañamiento; arc = comunidad reunida. Si no hay motivo narrativo, push-in
  lentísimo por defecto.
- **Eje y dirección de viaje**: los desplazamientos del pueblo van de IZQUIERDA a
  DERECHA en todo el canal (la marcha de la historia). Los regresos al origen
  (Bachué al agua) van de DERECHA a IZQUIERDA. No romper sin razón.
- **Altura de cámara con sentido**: a ras de suelo para lo íntimo (pies, semillas),
  a altura humana para comunidad, cenital para lo que el mito decide desde arriba.
- **El movimiento respira con la voz**: el momento más quieto del clip debe coincidir
  con el remate de la frase (los xfades ya se recortan al aire de la narración).

## 3. Dirección de arte

- **Guion de luz por acto** (la luz ES el arco emocional): se define ANTES de escribir
  las escenas. Bochica: amanecer fértil → lluvia plomiza creciente → tormenta oscura
  (clímax negativo) → noche de ofrenda con fuego → tarde húmeda con sol dorado
  (aparición) → oro y espuma (el lanzamiento) → luz limpia (el salto) → verde
  renacido con arcoíris suave. Cada keyframe declara su luz.
- **Capa de primer plano SIEMPRE**: un elemento de papel fuera de foco o en sombra
  (frailejón, mazorca, piedra, borde de techo) da profundidad de maqueta real.
- **El clima es emoción, no decoración**: niebla = misterio/origen; lluvia = castigo
  o duelo; luz dorada = enseñanza/gracia; arcoíris = promesa (SIEMPRE sobrio, nunca
  vehículo ni personaje — línea editorial del sitio).
- **Escala humana vs territorio**: en los bloques de asombro, figuras diminutas
  contra paisaje enorme (el sublime andino). En los de comunidad, figuras a media
  distancia. El contraste entre ambos es el latido visual del video.
- **Paleta fija del canal + acento por mito**: la base verde-frío/azul-gris/ocre/crema
  no se negocia; cada mito puede sumar UN acento (Bachué: ninguno; Bochica: el oro
  de la vara y la luz de la aparición). El acento aparece en ≤3 bloques.
- **Identidad étnica sin caricatura**: personajes SIEMPRE de rasgos indígenas andinos,
  mantas de algodón crudo con franjas tejidas sobrias. PROHIBIDO: figuras europeas
  (línea roja del sitio con Bochica), cruces, coronas, oro corporal, penachos ajenos.

## 4. Prompts (lo que cambia en la práctica)

- La spec de cada keyframe declara: **escala + luz + objeto ancla + capa de primer
  plano** además de la escena. Ejemplo: "PLANO CENITAL, luz plomiza de tormenta,
  ancla: los surcos ahogados, primer plano: borde de techo de paja".
- El prompt de movimiento hereda el motivo de cámara del keyframe (si el keyframe es
  contrapicado de aparición, el movimiento es push-in reverente, no lateral).
- **Un gesto se completa por clip**: alguien termina de señalar, la vara termina de
  volar, una ola termina de cerrarse. Nada queda a medias al corte.
- Los negativos se ajustan por familia de plano (paisaje/manos/serpientes/multitud),
  ver plantillas §2.

## 5. Narrativa (guion)

- **Primera línea = gancho con giro** ("…Hasta que el cielo se cansó."): en redes,
  los primeros 3 segundos deciden. El gancho es narrativo, nunca clickbait.
- **Cita directa una vez por video** («No les quito los ríos, pero les abro la
  montaña»): la voz del personaje aparece UNA vez, en el clímax. Máximo poder.
- **El bloque 5-6 es la bisagra emocional** (la súplica, la aparición): ahí va el
  contraste de luz más fuerte y el plano más contenido antes del clímax.
- Resto de reglas de escritura: plantillas §3a (fogón-visual-coloquial, ≤19 palabras,
  bookend de agua quieta o su equivalente, sin moralejas).

## 6. Checklist de dirección (antes de generar nada)

1. ¿Guion de luz definido por acto y anotado en cada keyframe?
2. ¿Cada bloque tiene objeto ancla y su clip B consuma lo que A plantea?
3. ¿Escalas alternadas (ninguna repetida en bloques contiguos)? ¿Cenital y
   contrapicado usados 1 vez cada uno, donde más pesan?
4. ¿Direcciones de viaje consistentes (L→R ida, R→L regreso)?
5. ¿Primer plano de rostro reservado a UN momento?
6. ¿Capa de primer plano en todos los planos generales?
7. ¿El acento de color del mito aparece en ≤3 bloques?
8. ¿`lint-spec.mjs` en verde?
