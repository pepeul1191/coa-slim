var TipoSedesCollection = Backbone.Collection.extend({
  model: TipoSede,
  initialize: function(params) {
    this.targetMensaje = params["targetMensaje"];
  },
  llenarModels: function(){
    var responseData = [];
    var viewInstance = this;
    this.models = []; // para evitar que el primero sea nulo
    $.ajax({
      type: "GET",
      url: BASE_URL + "contenidos/tipo_sede/listar",
      data: {csrfmiddlewaretoken: CSRF},
      async: false,
      success: function(data){
        responseData = JSON.parse(data);
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
    if(responseData.length > 0){
      for(var i = 0; i < responseData.length; i++){
        var modelo = new this.model(responseData[i]);
        this.models.push(modelo);
      }
    }
  },
  obtenerModels: function(){
    return this.models;
  },
});

var tipoSedesCollection = new TipoSedesCollection({
  targetMensaje: "mensajeRptaSede",
});
