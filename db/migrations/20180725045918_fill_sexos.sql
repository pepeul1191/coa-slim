-- migrate:up

INSERT INTO sexos (id, nombre1, nombre2, sexo) VALUES
  (1, 'Dr.', 'Director Odontológico', 'M'),
  (2, 'Dra.', 'Directora Odontológica', 'F');

-- migrate:down
