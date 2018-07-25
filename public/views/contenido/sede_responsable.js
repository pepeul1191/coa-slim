var dataSedeResponsableView = {
  el: "body",
  containerModal: "modal-container",
  urlTemplate: STATICS_URL + "templates/contenido/sede_responsable.html",
  handlebarsTemplateId: "sede-responsable-template",
  targetMensaje: "mensajeRptaSedeResponsables",
  context: {
    titulo_modal: "Gestión de Responsables de la Sede",
  },
  closeFunction: function(){
    location.replace(BASE_URL + "#/sede");
  },
};

var SedeResponsableView = ModalView.extend({
  initialize: function(options){
    this.targetMensaje = options["targetMensaje"];
    // herencia de atributos, móetodos y eventos
    ModalView.prototype.initialize.apply(this, [options])
    this.inheritEvents(ModalView);
    // delegación de eventos
    this.delegateEvents();
    this.doctoresSelect =  new DoctoresCollection({
      targetMensaje: "defaultTargetMensajes",
    });
  },
  events: {
    // se está usando asignacion dinamica de eventos en el constructor
    "click #btnGuardarDoctorTurno": "guardarDoctorTurno",
    "click #btnGuardarDirectorSede": "guardarDirectorSede",
  },
  llenarModelsSelect: function(){
    this.doctoresSelect.llenarModelsSelect(this.get("sede_id"));
  },
  obtenerResponsables: function(){
    this.responsables = {};
    var viewInstance = this;
    $.ajax({
      type: "GET",
      url: BASE_URL + "sede/obtener_responsables/" + viewInstance.get("sede_id"),
      data: {},
      headers: {
				[CSRF_KEY]: CSRF,
			},
      async: false,
      success: function(data){
        viewInstance.responsables = JSON.parse(data);
      },
      error: function(error){
        $("#" + viewInstance.targetMensaje).removeClass("color-success");
        $("#" + viewInstance.targetMensaje).removeClass("color-warning");
        $("#" + viewInstance.targetMensaje).addClass("color-danger");
        $("#" + viewInstance.targetMensaje).html("Error en listar los tipos de estaciones");
        $("html, body").animate({ scrollTop: $("#" + viewInstance.targetMensaje).offset().top }, 1000);
        console.log(error);
      }
    });
  },
  guardarDoctorTurno: function(){
    var viewInstance = this;
    var doctorTurno = new DoctorTurno({
      sede_id: this.get("sede_id"),
      doctor_id: $("#cbmDoctorTurno").val(),
      telefono: $("#txtTelefonoTurno").val(),
    });
    $.ajax({
      type: "POST",
      url: BASE_URL + "sede/doctor_turno/guardar",
      data: {
        data: JSON.stringify(doctorTurno.toJSON())
      },
      headers: {
				[CSRF_KEY]: CSRF,
			},
      async: false,
      success: function(data){
        var responseData = JSON.parse(data);
        if(responseData.tipo_mensaje == "success"){
					$("#" + viewInstance.targetMensaje).removeClass("color-danger");
	        $("#" + viewInstance.targetMensaje).removeClass("color-warning");
	        $("#" + viewInstance.targetMensaje).addClass("color-success");
	        $("#" + viewInstance.targetMensaje).html(responseData.mensaje[0]);
					$("html, body").animate({ scrollTop: $("#" + viewInstance.targetMensaje).offset().top }, 1000);
        }
      },
      error: function(error){
        $("#" + viewInstance.targetMensaje).removeClass("color-success");
        $("#" + viewInstance.targetMensaje).removeClass("color-warning");
        $("#" + viewInstance.targetMensaje).addClass("color-danger");
        $("#" + viewInstance.targetMensaje).html("Error en guardar al doctor de turno");
        $("html, body").animate({ scrollTop: $("#" + viewInstance.targetMensaje).offset().top }, 1000);
        console.log(error);
      }
    });
  },
  guardarDirectorSede: function(){
    var viewInstance = this;
    var director = new Director({
      sede_id: this.get("sede_id"),
      doctor_id: $("#cbmDirector").val(),
    });
    $.ajax({
      type: "POST",
      url: BASE_URL + "sede/director/guardar",
      data: {data: JSON.stringify(director.toJSON())},
      headers: {
				[CSRF_KEY]: CSRF,
			},
      async: false,
      success: function(data){
        var responseData = JSON.parse(data);
        if(responseData.tipo_mensaje == "success"){
					$("#" + viewInstance.targetMensaje).removeClass("color-danger");
	        $("#" + viewInstance.targetMensaje).removeClass("color-warning");
	        $("#" + viewInstance.targetMensaje).addClass("color-success");
	        $("#" + viewInstance.targetMensaje).html(responseData.mensaje[0]);
					$("html, body").animate({ scrollTop: $("#" + viewInstance.targetMensaje).offset().top }, 1000);
        }
      },
      error: function(error){
        $("#" + viewInstance.targetMensaje).removeClass("color-success");
        $("#" + viewInstance.targetMensaje).removeClass("color-warning");
        $("#" + viewInstance.targetMensaje).addClass("color-danger");
        $("#" + viewInstance.targetMensaje).html("Error en guardar al doctor de turno");
        $("html, body").animate({ scrollTop: $("#" + viewInstance.targetMensaje).offset().top }, 1000);
        console.log(error);
      }
    });
  },
});
