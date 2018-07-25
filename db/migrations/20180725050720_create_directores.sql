-- migrate:up

CREATE TABLE directores (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  sede_id integer REFERENCES sedes,
  doctor_id integer REFERENCES doctores
)

-- migrate:down

DROP TABLE IF EXISTS directores;
