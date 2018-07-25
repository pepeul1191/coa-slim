-- migrate:up

INSERT INTO tipo_sedes (id, nombre) VALUES
  (1, 'Lima'),
  (2, 'Provincia');

-- migrate:down
