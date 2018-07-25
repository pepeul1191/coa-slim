var dataSedeDoctorView = {
  el: "body",
  containerModal: "modal-container",
  urlTemplate: STATICS_URL + "templates/contenido/sede_doctor.html",
  handlebarsTemplateId: "sede-doctor-template",
  context: {
    titulo_modal: "Gestión de Doctores de la Sede",
  },
  closeFunction: function(){
    location.replace(BASE_URL + "contenidos/#/sede");
  },
};

var SedeDoctorView = ModalView.extend({
  initialize: function(options){
    // herencia de atributos, móetodos y eventos
    ModalView.prototype.initialize.apply(this, [options])
    this.inheritEvents(ModalView);
    // delegación de eventos
    this.delegateEvents();
    this.tabla = new TableView(paramsSedeDoctorTable);
  },
  events: {
    // se está usando asignacion dinamica de eventos en el constructor
    "click #tablaSedeDoctor > tfoot > tr > td > button.agregar-fila": "agregarFila",
    "click #tablaSedeDoctor > tfoot > tr > td > button.guardar-tabla": "guardarTabla",
    "keyup #tablaSedeDoctor > tbody > tr > td > input.text": "inputTextEscribir",
    "change #tablaSedeDoctor > tbody > tr > td > select": "cambiarSelect",
    "click #tablaSedeDoctor > tbody > tr > td > i.quitar-fila": "quitarFila",
  },
  mostrarDoctores: function(){
    this.tabla.urlListar = this.tabla.urlListar + this.get("sede_id");
    this.tabla.listar();
    //Devolver la urlListar a su estado original si el param
    this.tabla.urlListar = this.tabla.urlListar.replace(this.get("sede_id"),'');
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
