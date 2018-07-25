var Doctor = Backbone.Model.extend({
  defaults: {
    nombre: '',
    nombres: '',
    paterno: '',
    materno: '',
    cop: 0,
    rne: 0,
    especialidad: 1,
    sexo: 1,
    sede_id: 1,
    id: 'E',
  },
  initialize: function() {
  },
});
