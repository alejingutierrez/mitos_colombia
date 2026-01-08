-- Migration: Add content_formatted column to myths table
-- Date: 2026-01-08
-- Description: Adds a boolean column to track which myths have had their content formatted with paragraphs

-- Add content_formatted column if it doesn't exist
ALTER TABLE myths ADD COLUMN IF NOT EXISTS content_formatted BOOLEAN DEFAULT FALSE;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_myths_content_formatted ON myths(content_formatted) WHERE content_formatted = FALSE;

-- Show stats
SELECT
  COUNT(*) as total_myths,
  COUNT(CASE WHEN content_formatted = TRUE THEN 1 END) as formatted_myths,
  COUNT(CASE WHEN content_formatted = FALSE OR content_formatted IS NULL THEN 1 END) as pending_myths
FROM myths;
