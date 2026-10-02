-- Migración PostgreSQL para agregar latitud/longitud a mitos
ALTER TABLE myths ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION;
ALTER TABLE myths ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION;
