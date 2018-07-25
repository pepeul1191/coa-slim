-- migrate:up

CREATE TABLE tipo_sedes (
  id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
  nombre varchar(10) NOT NULL
)

-- migrate:down
