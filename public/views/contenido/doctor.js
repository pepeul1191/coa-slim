var DoctorView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.events = this.events || {};
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
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function() {
		var data = { };
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
  buscarNombres: function(event){
    var filtro = {};
    filtro.nombres = $("#txtNombres").val();
    filtro.paterno = $("#txtPaterno").val();
    filtro.materno = $("#txtMaterno").val();
    paramsDoctorTable.urlListar = paramsDoctorTable.urlListarBuscar + '?filtro=' + JSON.stringify(filtro);
    this.tabla = new TableView(paramsDoctorTable);
    console.log(this.tabla);
    $("#tablaDoctor tbody").empty();
    $("#doctoresBotonesPaginacion").empty();
    this.tabla.listar();
  },
});
