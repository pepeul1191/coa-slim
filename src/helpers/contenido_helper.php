<?php

if ( ! function_exists('index_css'))
{
  function index_css($constants){
    $rpta = null;
    switch($constants['ambiente_static']){
      case 'desarrollo':
        $rpta = [
          'bower_components/bootstrap/dist/css/bootstrap.min',
				  'bower_components/font-awesome/css/font-awesome.min',
          'bower_components/swp-backbone/assets/css/constants',
          'bower_components/swp-backbone/assets/css/dashboard',
          'bower_components/swp-backbone/assets/css/table',
          'assets/css/constants',
          'assets/css/styles',
        ];
        break;
      case 'produccion':
        $rpta = [
          'dist/contenido.min',
        ];
        break;
    }
    return $rpta;
  }
}

if ( ! function_exists('index_js'))
{
  function index_js($constants){
    $rpta = null;
    switch($constants['ambiente_static']){
      case 'desarrollo':
        $rpta = [
          'bower_components/jquery/dist/jquery.min',
				  'bower_components/bootstrap/dist/js/bootstrap.min',
          'bower_components/underscore/underscore-min',
          'bower_components/backbone/backbone-min',
          'bower_components/handlebars/handlebars.min',
          'bower_components/swp-backbone/layouts/application',
          'bower_components/swp-backbone/views/table',
          'bower_components/swp-backbone/views/modal',
          'models/contenido/sexo',
          'models/contenido/tipo_sede',
          'models/contenido/especialidad',
          'models/contenido/view_doctor',
          'models/contenido/sede',
          'models/contenido/sexo',
          'models/contenido/doctor',
          'models/contenido/doctor_turno',
          'models/contenido/director',
          'collections/contenido/sede_collection',
          'collections/contenido/sede_doctor_collection',
          'collections/contenido/sexo_collection',
          'collections/contenido/sexo_collection',
          'collections/contenido/tipo_sede_collection',
          'collections/contenido/especialidad_collection',
          'collections/contenido/doctor_collection',
          'collections/contenido/view_doctor_collection',
          'views/contenido/especialidad_table',
          'views/contenido/especialidad',
          'views/contenido/sede_doctor_table',
          'views/contenido/sede_doctor',
          'views/contenido/sede_responsable',
          'views/contenido/doctor_detalle',
          'views/contenido/sede_table',
          'views/contenido/doctor_table',
          'views/contenido/sede',
          'views/contenido/doctor',
          'routes/contenido',
        ];
        break;
      case 'produccion':
        $rpta = [
          'dist/contenido.min',
        ];
        break;
    }
    return $rpta;
  }
}
