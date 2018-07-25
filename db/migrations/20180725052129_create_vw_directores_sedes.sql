-- migrate:up

CREATE VIEW vw_directores_sedes AS SELECT
  sede_id, nombre1 || ' ' || paterno || ' ' || materno || ', ' || nombres AS director, titulo
  FROM (
    SELECT J.sede_id, S.nombre2 AS titulo, S.nombre1, D.nombres, D.paterno, D.materno
    FROM directores J
    INNER JOIN doctores D ON D.id= J.doctor_id
    INNER JOIN sexos S ON D.sexo_id = S.id
  )

-- migrate:down

DROP VIEW IF EXISTS vw_directores_sedes;
