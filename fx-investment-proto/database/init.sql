CREATE TABLE audit_log (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  action TEXT NOT NULL,
  payload JSONB,
  result JSONB,
  ts TIMESTAMPTZ DEFAULT NOW()
);
