var paramsSedeDoctorTable = {
  el: "#formTableSedeDoctor",
  idTable: "tablaSedeDoctor",
  targetMensaje: "mensajeRptaSedeDoctor",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en las especialidades",
  },
  //urlListar: BASE_URL + "distrito/listar/" + provinciaId,
  urlGuardar: BASE_URL + "doctor/sede/guardar",
  urlListar: BASE_URL + "doctor/sede/",
  fila: {
    id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    nombres: { // llave de REST
      tipo: "text",
      estilos: "width: 150px;",
      edicion: false,
    },
    paterno: { // llave de REST
      tipo: "text",
      estilos: "width: 150px;",
      edicion: false,
    },
    materno: { // llave de REST
      tipo: "text",
      estilos: "width: 150px;",
      edicion: false,
    },
    cop: { // llave de REST
      tipo: "text",
      estilos: "width: 80px;",
      edicion: false,
    },
    rne: { // llave de REST
      tipo: "text",
      estilos: "width: 80px;",
      edicion: false,
    },
    especialidad_id: { // llave de REST
      tipo: "select",
      estilos: "width: 150px;",
      edicion: false,
      collection: especialidadesCollection,
    },
    sexo_id: { // llave de REST
      tipo: "select",
      estilos: "width: 50px;",
      edicion: false,
      collection: sexosCollection,
    },
    filaBotones: {
      estilos: "width: 20px; padding-left:17px;"
    },
  },
  filaBotones: [
    /*{
      tipo: "i",
      claseOperacion: "quitar-fila",
      clase: "fa-times",
      estilos: "padding-left: 7px;",
    },*/
  ],
  collection: new SedeDoctoresCollection(),
  model: "Doctor",
};
