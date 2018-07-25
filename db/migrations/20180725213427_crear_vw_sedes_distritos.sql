-- migrate:up

CREATE VIEW vw_sedes_distritos AS SELECT
  S.id, S.nombre, S.direccion, S.telefono, S.latitud, S.longitud, S.tipo_sede_id, S.distrito_id, D.nombre AS distrito
  FROM sedes S
  INNER JOIN vw_distrito_provincia_departamento D on D.id = S.distrito_id
  LIMIT 2000

-- migrate:down

DROP VIEW IF EXISTS vw_sedes_distritos;
