var Sede = Backbone.Model.extend({
  defaults: {
    nombre: '',
    direccion: '',
    telefono: '',
    latitud: 0,
    longitud: 0,
    id: 'E',
  },
  initialize: function() {
  },
});
