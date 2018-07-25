-- migrate:up

INSERT INTO doctor_turnos (telefono, sede_id, doctor_id) VALUES
  ('81273891279', 1,  2),
  ('81273891123', 34,  290),
  ('81273898900', 3,  198);

-- migrate:down
