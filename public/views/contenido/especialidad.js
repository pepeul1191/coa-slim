var EspecialidadView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.events = this.events || {};
		this.tabla = new TableView(paramsEspecialidadTable);
	},
	events: {
		// se está usando asignacion dinamica de eventos en el constructor
		"click #tablaEspecialidad > tfoot > tr > td > button.agregar-fila": "agregarFila",
		"click #tablaEspecialidad > tfoot > tr > td > button.guardar-tabla": "guardarTabla",
		"keyup #tablaEspecialidad > tbody > tr > td > input.text": "inputTextEscribir",
		"click #tablaEspecialidad > tbody > tr > td > i.quitar-fila": "quitarFila",
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/especialidad.html',
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
	inputTextEscribir: function(event){
		this.tabla.inputTextEscribir(event);
	},
	quitarFila: function(event){
		this.tabla.quitarFila(event);
	},
	guardarTabla: function(event){
		this.tabla.guardarTabla(event);
	},
	agregarFila: function(event){
		this.tabla.agregarFila(event);
	},
});
