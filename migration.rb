require 'sequel'
require 'sqlite3'

# conexión a base de datos
Sequel::Model.plugin :json_serializer
DB = Sequel.connect('sqlite://db/coa_bk.db')

# clases ORM
class Especialidad < Sequel::Model(DB[:especialidades])
end
class Sede < Sequel::Model(DB[:sedes])
end
class Doctor < Sequel::Model(DB[:doctores])
end
class Director < Sequel::Model(DB[:directores])
end
class DoctorTurno < Sequel::Model(DB[:doctor_turnos])
end

def listar_especialidades
  especialidades = Especialidad.order(:id).all.to_a
  puts "INSERT INTO especialidades (id, nombre) VALUES "
  especialidades.each do |especialidad|
     puts "(%i, '%s'), " % [especialidad.id, especialidad.nombre]
  end
end

def listar_sedes
  sedes = Sede.order(:id).all.to_a
  puts "INSERT INTO sedes (id, nombre, direccion, telefono, latitud, longitud, tipo_sede_id) VALUES "
  sedes.each do |sede|
     puts "(%i, '%s', '%s', '%s', %f, %f, %i), " % [sede.id, sede.nombre, sede.direccion, sede.telefono, sede.latitud, sede.longitud, sede.tipo_sede_id]
  end
end

listar_sedes
