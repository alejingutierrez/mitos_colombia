-- Seed prompts for taxonomy entities (Postgres)

WITH community_counts AS (
  SELECT
    communities.id,
    communities.name,
    regions.name AS region_name,
    COUNT(myths.id) AS myth_count
  FROM communities
  JOIN regions ON regions.id = communities.region_id
  LEFT JOIN myths ON myths.community_id = communities.id
  GROUP BY communities.id, regions.id
)
UPDATE communities
SET image_prompt =
  'Ilustracion editorial horizontal (3:2) estilo paper quilling y paper cut de la comunidad indigena '
  || communities.name
  || ' en la region '
  || community_counts.region_name
  || '. Escena respetuosa con vestimenta tradicional, paisaje local y simbolos culturales. Sin texto ni logos.'
FROM community_counts
WHERE communities.id = community_counts.id
  AND community_counts.myth_count >= 6
  AND (communities.image_prompt IS NULL OR communities.image_prompt = '');

WITH tag_counts AS (
  SELECT tags.id, tags.name, COUNT(myth_tags.myth_id) AS myth_count
  FROM tags
  JOIN myth_tags ON myth_tags.tag_id = tags.id
  GROUP BY tags.id
),
region_names AS (
  SELECT lower(name) AS name
  FROM regions
)
UPDATE tags
SET image_prompt =
  'Ilustracion editorial horizontal (3:2) estilo paper quilling y paper cut sobre el tema "'
  || tags.name
  || '" en la mitologia colombiana. Simbolos abstractos, naturaleza colombiana, paleta verde selva, azul rio y dorado tierra. Sin texto.'
FROM tag_counts
WHERE tags.id = tag_counts.id
  AND tag_counts.myth_count >= 6
  AND (tags.image_prompt IS NULL OR tags.image_prompt = '')
  AND lower(tags.name) NOT IN (SELECT name FROM region_names)
  AND lower(tags.name) <> 'ninguno';
