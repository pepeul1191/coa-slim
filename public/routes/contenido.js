var contenidosRouter = Backbone.Router.extend({
  especialidadView: null,
  sedeView: null,
  doctorView: null,
  sedeDoctorView: null,
  sedeResponsableView: null,
  doctorDetalleView: null,
  initialize: function() {
  },
  routes: {
    "": "index",
    "" : "index",
    "especialidad": "especialidad",
    "sede": "sede",
    "sede/doctores/:sede_id": "verSedeDoctores",
    "sede/responsables/:sede_id": "verSedeResponsables",
    "doctor": "doctor",
    "doctor/editar/:doctor_id": "editarDoctor",
    "doctor/crear": "crearDoctor",
    "*actions" : "index"
  },
  index: function(){
    window.location.href = BASE_URL + "contenidos/#/doctor";
  },
  especialidad: function() {
    if(this.especialidadView == null){
      this.especialidadView = new EspecialidadView();
    }
    this.especialidadView.render();
    this.especialidadView.mostrarTabla();
  },
  sede: function(){
    if(this.sedeView == null){
      this.sedeView = new SedeView();
    }
    this.sedeView.render();
    this.sedeView.mostrarTabla();
  },
  doctor: function(){
    if(this.doctorView == null){
      this.doctorView = new DoctorView();
    }
    this.doctorView.llenarModelsSelect();
    //console.log(this.doctorView.sedes);
    //console.log(this.doctorView.especialidades);
    this.doctorView.render();
    this.doctorView.mostrarTabla();
  },
  verSedeDoctores: function(sede_id) {
    $("#btnModal").click();
    sexosCollection.llenarModels();
    especialidadesCollection.llenarModels();
    if(this.sedeDoctorView == null){
      this.sedeDoctorView = new SedeDoctorView(dataSedeDoctorView);
    }
    this.sedeDoctorView.set("sede_id", sede_id);
    this.sedeDoctorView.context.BASE_URL = BASE_URL;
    this.sedeDoctorView.render();
    this.sedeDoctorView.mostrarDoctores();
  },
  verSedeResponsables: function(sede_id) {
    $("#btnModal").click();
    if(this.sedeResponsableView == null){
      this.sedeResponsableView = new SedeResponsableView(dataSedeResponsableView);
    }
    this.sedeResponsableView.set("sede_id", sede_id);
    this.sedeResponsableView.llenarModelsSelect();
    this.sedeResponsableView.obtenerResponsables();
    this.sedeResponsableView.context.doctores = this.sedeResponsableView.doctoresSelect.toJSON();
    this.sedeResponsableView.context.telefono = this.sedeResponsableView.responsables.telefono;
    this.sedeResponsableView.context.director_id = this.sedeResponsableView.responsables.director_id;
    this.sedeResponsableView.context.doctor_turno_id = this.sedeResponsableView.responsables.doctor_turno_id;
    this.sedeResponsableView.render();
  },
  editarDoctor: function(doctor_id){
    if(this.doctorDetalleView == null){
      this.doctorDetalleView = new DoctorDetalleView(dataDoctorDetalleView);
    }
    this.doctorDetalleView.set("doctor_id", doctor_id);
    this.doctorDetalleView.setModel();
    this.doctorDetalleView.llenarModelsSelect();
    this.doctorDetalleView.context.titulo_modal = "Editar Doctor";
    this.doctorDetalleView.context.doctor = this.doctorDetalleView.model;
    this.doctorDetalleView.context.sexos = this.doctorDetalleView.sexosSelect.toJSON();
    this.doctorDetalleView.context.tipo_sedes = this.doctorDetalleView.tipoSedesSelect.toJSON();
    this.doctorDetalleView.context.sedes = this.doctorDetalleView.sedesSelect.toJSON();
    this.doctorDetalleView.context.especialidades = this.doctorDetalleView.especialidadesSelect.toJSON();
    this.doctorDetalleView.render();
  },
  crearDoctor: function(){
    if(this.doctorDetalleView == null){
      this.doctorDetalleView = new DoctorDetalleView(dataDoctorDetalleView);
    }
    this.doctorDetalleView.set("doctor_id", "E");
    this.doctorDetalleView.setModel();
    this.doctorDetalleView.llenarModelsSelect();
    this.doctorDetalleView.context.titulo_modal = "Crear Doctor";
    this.doctorDetalleView.context.doctor = this.doctorDetalleView.model;
    this.doctorDetalleView.context.sexos = this.doctorDetalleView.sexosSelect.toJSON();
    this.doctorDetalleView.context.tipo_sedes = this.doctorDetalleView.tipoSedesSelect.toJSON();
    this.doctorDetalleView.context.sedes = this.doctorDetalleView.sedesSelect.toJSON();
    this.doctorDetalleView.context.especialidades = this.doctorDetalleView.especialidadesSelect.toJSON();
    this.doctorDetalleView.render();
  },
  default: function() {
    //window.location.href = BASE_URL + "error/access/404";
  },
});

$(document).ready(function(){
  router = new contenidosRouter();
  Backbone.history.start();
})
