/**
 * Mundos sonoros: a qué paisaje musical pertenece cada comunidad.
 *
 * El catálogo de lechos nació entero andino —«Pre-Columbian Andean and Muisca
 * folk music, indigenous Colombian highlands»— porque los 41 primeros mitos
 * eran muiscas. Al llegar a los wayúu se vio el problema: a un relato de la
 * península guajira, de jagüeyes y rebaños, le tocaba un puente de bejuco sobre
 * una quebrada andina y una piedra de moler maíz. El sistema de caracteres
 * evita poner la laguna de un mito bajo otro; esto evita poner la música de un
 * pueblo bajo el relato de otro, que es el mismo error una escala más arriba.
 *
 * El mapa es EXPLÍCITO y se amplía a mano, comunidad por comunidad. No se
 * deduce de la región: los kogui de la Sierra Nevada y los wayúu del desierto
 * son los dos «Caribe» y no suenan igual.
 */

export const DEFAULT_WORLD = "andino-muisca";

export const WORLDS = {
  "andino-muisca": {
    label: "andino / muisca",
    prompt:
      "Pre-Columbian Andean and Muisca folk music, indigenous Colombian highlands. " +
      "Only ancestral instruments: cane flutes, clay ocarina, panpipes, hide frame drum, " +
      "seed rattles, shell rattles. Strictly no modern instruments, no synthesizers, " +
      "no guitar, no piano, no drum kit, no vocals. Raw, acoustic, close-recorded, spacious. " +
      "Steady and continuous from beginning to end, no intro, no fade out, no ending.",
  },
  "guajiro-wayuu": {
    label: "guajiro / wayúu",
    prompt:
      "Traditional Wayuu music of the Guajira desert peninsula, Caribbean Colombia. " +
      "Only ancestral instruments: kasha double-headed drum, taliraai cane flute, " +
      "wootoroyoi reed clarinet, massi flute, sawawa, turrompa jaw harp, maraca. " +
      "Strictly no modern instruments, no synthesizers, no guitar, no piano, no drum kit, " +
      "no vocals, and NO Andean panpipes or ocarinas — this is desert and sea, not highlands. " +
      "Raw, acoustic, close-recorded, dry and open. " +
      "Steady and continuous from beginning to end, no intro, no fade out, no ending.",
  },
};

/** Comunidad → mundo. Lo que no está aquí cae al mundo por defecto. */
export const COMMUNITY_WORLD = {
  Muiscas: "andino-muisca",
  "Wayúu": "guajiro-wayuu",
};

export function worldForCommunity(community) {
  return COMMUNITY_WORLD[String(community || "").trim()] || DEFAULT_WORLD;
}

/** True cuando la comunidad NO tiene mundo propio y se le presta otro. */
export function isBorrowedWorld(community) {
  return !COMMUNITY_WORLD[String(community || "").trim()];
}
