-- migrate:up

CREATE TABLE sedes (
	id	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	nombre	varchar(50) NOT NULL,
	direccion	varchar(100) NOT NULL,
	telefono	varchar(20) NOT NULL,
	latitud	NUMERIC,
	longitud	NUMERIC,
	tipo_sede_id	integer,
  distrito_id	integer,
	FOREIGN KEY(tipo_sede_id) REFERENCES tipo_sedes
  FOREIGN KEY(distrito_id) REFERENCES distritos
)

-- migrate:down

DROP TABLE IF EXISTS sedes;
