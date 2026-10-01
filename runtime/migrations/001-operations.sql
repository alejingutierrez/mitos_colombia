CREATE TABLE IF NOT EXISTS auth_rate_limits (
  key_hash TEXT PRIMARY KEY, count INTEGER NOT NULL,
  reset_at TIMESTAMPTZ NOT NULL
);
CREATE INDEX IF NOT EXISTS auth_rate_limits_expiry ON auth_rate_limits(reset_at);
CREATE TABLE IF NOT EXISTS payment_events (
  event_key TEXT PRIMARY KEY, body_hash TEXT NOT NULL,
  status TEXT NOT NULL, attempts INTEGER NOT NULL DEFAULT 1,
  lease_until TIMESTAMPTZ, completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
