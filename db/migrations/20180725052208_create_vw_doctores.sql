-- migrate:up

CREATE VIEW vw_doctores AS SELECT
  D.id AS id,  D.sede_id,  S.nombre1  || ' ' || D.paterno || ' '  || D.materno|| ', '  || D.nombres AS nombre
  FROM doctores D
  INNER join sexos S on D.sexo_id = S.id limit 2000;

-- migrate:down

DROP VIEW IF EXISTS vw_doctores;
