-- Separate long editorial tasks from the public HTTP process. No source corpus is seeded.
CREATE TABLE IF NOT EXISTS admin_jobs (
 id UUID PRIMARY KEY,
 path TEXT NOT NULL,
 payload JSONB NOT NULL,
 status TEXT NOT NULL CHECK (status IN ('queued','running','succeeded','failed','needs_review')),
 result JSONB,
 result_status INTEGER,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 started_at TIMESTAMPTZ,
 finished_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS admin_jobs_pending ON admin_jobs(created_at) WHERE status='queued';
