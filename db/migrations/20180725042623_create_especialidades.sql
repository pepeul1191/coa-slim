-- migrate:up

CREATE TABLE especialidades (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  nombre varchar(45) NOT NULL
)

-- migrate:down

DROP TABLE IF EXISTS especialidades;
