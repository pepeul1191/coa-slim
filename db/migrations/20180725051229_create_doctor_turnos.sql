-- migrate:up

CREATE TABLE doctor_turnos (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  telefono varchar(20) NOT NULL,
  sede_id integer REFERENCES sedes,
  doctor_id integer REFERENCES doctores
)

-- migrate:down

DROP TABLE IF EXISTS doctor_turnos;
