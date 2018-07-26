var paramsDoctorTable = {
  el: "#formTableDoctor",
  idTable: "tablaDoctor",
  targetMensaje: "mensajeRptaDoctor",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en los doctores",
  },
  //urlListar: BASE_URL + "distrito/listar/" + provinciaId,
  urlGuardar: BASE_URL + "doctor/guardar_tabla",
  urlListar: BASE_URL + "doctor/sexo_sede_especialidad",
  urlListarBuscar: BASE_URL + "doctor/sexo_sede_especialidad", //esto se usará como artificio en los filtros
  urlCountBase: BASE_URL + "doctor/count_sexo_sede_especialidad",//esto se usará como artificio en los filtros
  fila: {
    id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    sexo: { // llave de REST
      tipo: "label",
      estilos: "width: 50px;",
      edicion: true,
    },
    nombres: { // llave de REST
      tipo: "label",
      estilos: "width: 100px;",
      edicion: true,
    },
    paterno: { // llave de REST
      tipo: "label",
      estilos: "width: 100px;",
      edicion: true,
    },
    materno: { // llave de REST
      tipo: "label",
      estilos: "width: 100px;",
      edicion: true,
    },
    especialidad: { // llave de REST
      tipo: "label",
      estilos: "width: 100px;",
      edicion: true,
    },
    cop: { // llave de REST
      tipo: "label",
      estilos: "width: 70px;",
      edicion: true,
    },
    rne: { // llave de REST
      tipo: "label",
      estilos: "width: 70px;",
      edicion: true,
    },
    tipo_sede: { // llave de REST
      tipo: "label",
      estilos: "width: 100px;",
      edicion: true,
    },
    sede: { // llave de REST
      tipo: "label",
      estilos: "width: 100px;",
      edicion: true,
    },
    filaBotones: {
      estilos: "width: 80px; padding-left: 10px;"
    },
  },
  pagination: {
    urlCount: BASE_URL + "doctor/count_sexo_sede_especialidad",
    pageSize: 20,
    idBotonesPaginacion: "doctoresBotonesPaginacion"
  },
  filaBotones: [
    {
      tipo: "href",
      claseOperacion: "editar",
      clase: "fa-pencil",
      estilos: "padding-left: 7px;",
      url: BASE_URL + 'contenidos/#/doctor/editar/'/*+ doctor_id*/,
    },
    {
      tipo: "i",
      claseOperacion: "quitar-fila",
      clase: "fa-times",
      estilos: "padding-left: 7px;",
    },
  ],
  tableKeys: ['id', 'sexo', 'nombres', 'paterno', 'materno', 'especialidad', 'cop', 'rne', 'tipo_sede', 'sede'],
  collection: new ViewDoctoresCollection(),
  model: "ViewDoctor",
};
