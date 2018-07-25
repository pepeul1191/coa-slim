-- migrate:up

CREATE TABLE doctores (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  nombres varchar(50) NOT NULL,
  paterno varchar(30) NOT NULL,
  materno varchar(30) NOT NULL,
  cop integer NOT NULL,
  rne integer NULL,
  sede_id integer REFERENCES sedes,
  especialidad_id integer REFERENCES especialidades,
  sexo_id integer REFERENCES sexos
)

-- migrate:down

DROP TABLE IF EXISTS doctores;
