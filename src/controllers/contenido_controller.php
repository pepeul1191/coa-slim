<?php

namespace Controller;

class ContenidoController extends \Configs\Controller
{
  public function view($request, $response, $args) {
    $this->load_helper('contenido');
    $rpta = '';
    $status = 200;
    $locals = [
      'constants' => $this->constants,
      'title' => 'Gestión de Contenidos',
      'csss' => $this->load_css(index_css($this->constants)),
      'jss'=> $this->load_js(index_js($this->constants)),
      'mensaje' => '',
      'menu' => '[{"url" : "contenidos/", "nombre" : "Contenidos"}, {"url" : "ubicaciones/", "nombre" : "Ubicaciones"}]',
      'items' => json_encode(array(
         0 => array('subtitulo' => 'Sedes y Doctores', 'items' => array(
           0 => array('item' => 'Gestión de Especialidades', 'url' => 'contenidos/#/especialidad'),
           1 => array('item' => 'Gestión de Sedes', 'url' => 'contenidos/#/sede'),
           2 => array('item' => 'Gestión de Doctores', 'url' => 'contenidos/#/doctor'),
         ))
      )),
      'data' => json_encode(array(
        'mensaje' => false,
        'titulo_pagina' => 'Gestión de Contenidos',
        'modulo' => 'Contenidos'
      )),
    ];
    $view = $this->container->view;
    return $view($response, 'app', 'contenido/index.phtml', $locals);
  }
}
