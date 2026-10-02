-- Add image fields to taxonomy tables (regions, communities, tags)

-- Regions
ALTER TABLE regions ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE regions ADD COLUMN IF NOT EXISTS image_prompt TEXT;

-- Communities
ALTER TABLE communities ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE communities ADD COLUMN IF NOT EXISTS image_prompt TEXT;

-- Tags
ALTER TABLE tags ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE tags ADD COLUMN IF NOT EXISTS image_prompt TEXT;
