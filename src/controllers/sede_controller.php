<?php

namespace Controller;

class SedeController extends \Configs\Controller
{
  public function distrito($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Sede', 'coa')
      	->select('id')
      	->select('nombre')
        ->where('tipo_sede_id', 1)
      	->find_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido listar las sedes de Lima',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function provincia($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Sede', 'coa')
      	->select('id')
      	->select('nombre')
        ->where('tipo_sede_id', 2)
      	->find_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido listar las sedes de provincias',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function departamento($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Sede', 'coa')
      	->select('id')
      	->select('nombre')
        ->where('tipo_sede_id', 2)
      	->find_array();
      $lima = [
        'id' => 0,
        'nombre' => 'LIMA'
      ];
      array_unshift($rs , $lima);
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido listar las sedes de provincias',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
