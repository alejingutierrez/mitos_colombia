-- Migración SQLite para agregar latitud/longitud a mitos
ALTER TABLE myths ADD COLUMN latitude REAL;
ALTER TABLE myths ADD COLUMN longitude REAL;
