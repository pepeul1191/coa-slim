var DoctorView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.events = this.events || {};
    this.sedesSelect = new SedesCollection({
      targetMensaje: "defaultTargetMensajes",
    });
    this.especialidadesSelect = new EspecialidadesCollection({
      targetMensaje: "defaultTargetMensajes",
    });
		this.tabla = new TableView(paramsDoctorTable);
	},
	events: {
		// se está usando asignacion dinamica de eventos en el constructor
		//botones de paginacion
		"click #tablaDoctor > tfoot > tr > td > span > .fa-fast-backward": "paginacionIrPrimero",
		"click #tablaDoctor > tfoot > tr > td > span > .fa-backward": "paginacionIrAnteior",
		"click #tablaDoctor > tfoot > tr > td > span > .fa-forward": "paginacionIrSiguiente",
		"click #tablaDoctor > tfoot > tr > td > span > .fa-fast-forward": "paginacionIrUltimo",
    "click #tablaDoctor > tfoot > tr > td > button.guardar-tabla": "guardarTabla",
    "click #tablaDoctor > tbody > tr > td > i.quitar-fila": "quitarFila",
    "click #btnBuscarNombres": "buscarNombres",
    "click #btnBuscarSede": "buscarSede",
    "click #btnBuscarEspecialidad": "buscarEspecialidad",
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function() {
		var data = {
      sedes: this.sedesSelect.toJSON(),
      especialides: this.especialidadesSelect.toJSON()
    };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/contenido/doctor.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
		   	var template = Handlebars.compile(source);
		   	template_compiled = template(data);
		   }
		});
		return template_compiled;
	},
	mostrarTabla: function(){
		this.tabla.listar();
	},
	paginacionIrPrimero: function(){
		this.tabla.paginacionIrPrimero();
	},
	paginacionIrAnteior: function(){
		this.tabla.paginacionIrAnteior();
	},
	paginacionIrSiguiente: function(){
    console.log(paramsDoctorTable.urlListar);
		this.tabla.paginacionIrSiguiente();
	},
	paginacionIrUltimo: function(){
		this.tabla.paginacionIrUltimo();
	},
  quitarFila: function(event){
		this.tabla.quitarFila(event);
	},
  guardarTabla: function(event){
		this.tabla.guardarTabla(event);
	},
  llenarModelsSelect: function(){
    this.sedesSelect.llenarModelsTodasSedes();
    this.especialidadesSelect.llenarModels();
  },
  buscarNombres: function(event){
    var filtro = {};
    filtro.nombres = $("#txtNombres").val();
    filtro.paterno = $("#txtPaterno").val();
    filtro.materno = $("#txtMaterno").val();
    paramsDoctorTable.urlListar = paramsDoctorTable.urlListarBuscar + '?filtro=' + JSON.stringify(filtro);
    paramsDoctorTable.pagination.urlCount = paramsDoctorTable.urlCountBase + '?filtro=' + JSON.stringify(filtro);
    this.tabla = new TableView(paramsDoctorTable);
    this.tabla.limpiarBody();
		this.tabla.limpiarPagination();
    this.tabla.listar();
  },
  buscarSede: function(event){
    paramsDoctorTable.urlListar = paramsDoctorTable.urlListarBuscar + '?sede=' + $("#cbmSede").val();
    paramsDoctorTable.pagination.urlCount = paramsDoctorTable.urlCountBase + '?sede=' + $("#cbmSede").val();
    this.tabla = new TableView(paramsDoctorTable);
    this.tabla.limpiarBody();
		this.tabla.limpiarPagination();
    this.tabla.listar();
  },
  buscarEspecialidad: function(event){
    paramsDoctorTable.urlListar = paramsDoctorTable.urlListarBuscar + '?especialidad=' + $("#cbmEspecialidad").val();
    paramsDoctorTable.pagination.urlCount = paramsDoctorTable.urlCountBase + '?especialidad=' + $("#cbmEspecialidad").val();
    this.tabla = new TableView(paramsDoctorTable);
    this.tabla.limpiarBody();
		this.tabla.limpiarPagination();
    this.tabla.listar();
  },
});
