-- migrate:up

CREATE VIEW vw_doctores_sede_sexos_especialidades AS SELECT
  D.id AS id, D.nombres,  D.paterno, D.materno, D.rne, D.cop, D.sede_id,  L.nombre AS sede,  TL.id AS tipo_sede_id, TL.nombre AS tipo_sede , S.id AS sexo_id, S.nombre1 AS sexo, E.id AS especialidad_id, E.nombre AS especialidad
  FROM doctores D
  INNER JOIN sexos S on D.sexo_id = S.id
  INNER JOIN sedes L ON L.id = D.sede_id
  INNER JOIN especialidades E ON E.id = D.especialidad_id
  INNER JOIN tipo_sedes TL ON  L.tipo_sede_id = TL.id
  ORDER BY D.sede_id
  LIMIT 2000;

-- migrate:down

DROP VIEW IF EXISTS vw_doctores_sede_sexos_especialidades;
