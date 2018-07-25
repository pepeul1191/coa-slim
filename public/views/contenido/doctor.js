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
	},
	render: function() {
		this.$el.html(this.getTemplate());
		return this;
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/doctor.html',
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
});
