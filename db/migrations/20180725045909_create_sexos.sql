-- migrate:up

CREATE TABLE sexos (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  nombre1 varchar(10) NOT NULL,
  nombre2 varchar(30) NOT NULL,
  sexo varchar(1) NOT NULL
)

-- migrate:down

DROP TABLE IF EXISTS sexos;
