var SedeView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.events = this.events || {};
		this.tabla = new TableView(paramsSedeTable);
	},
	events: {
		// se está usando asignacion dinamica de eventos en el constructor
		"click #tablaSede > tfoot > tr > td > button.agregar-fila": "agregarFila",
		"click #tablaSede > tfoot > tr > td > button.guardar-tabla": "guardarTabla",
		"keyup #tablaSede > tbody > tr > td > input.text": "inputTextEscribir",
		"change #tablaSede > tbody > tr > td > select": "cambiarSelect",
		"click #tablaSede > tbody > tr > td > i.quitar-fila": "quitarFila",
		"click #tablaSede > tbody > tr > td > i.ver-doctores": "verDoctores",
		"click #tablaSede > tbody > tr > td > i.ver-responsables": "verResponsables",
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/contenido/sede.html',
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
	cambiarSelect: function(event){
		this.tabla.cambiarSelect(event);
	},
});
