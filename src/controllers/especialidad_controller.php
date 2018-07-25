<?php

namespace Controller;

class EspecialidadController extends \Configs\Controller
{
  public function listar($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Especialidad', 'coa')
        ->select('id')
        ->select('nombre')
        ->find_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido listar las especialidades',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function guardar($request, $response, $args) {
    $data = json_decode($request->getParam('data'));
    $nuevos = $data->{'nuevos'};
    $editados = $data->{'editados'};
    $eliminados = $data->{'eliminados'};
    $rpta = []; $array_nuevos = [];
    $status = 200;
    \ORM::get_db('coa')->beginTransaction();
    try {
      if(count($nuevos) > 0){
        foreach ($nuevos as &$nuevo) {
          $especialidad = \Model::factory('\Models\Especialidad', 'coa')->create();
          $especialidad->nombre = $nuevo->{'nombre'};
          $especialidad->save();
          $temp = [];
          $temp['temporal'] = $nuevo->{'id'};
          $temp['nuevo_id'] = $especialidad->id;
          array_push( $array_nuevos, $temp );
        }
      }
      if(count($editados) > 0){
        foreach ($editados as &$editado) {
          $especialidad = \Model::factory('\Models\Especialidad', 'coa')->find_one($editado->{'id'});
          $especialidad->nombre = $editado->{'nombre'};
          $especialidad->save();
        }
      }
      if(count($eliminados) > 0){
        foreach ($eliminados as &$eliminado) {
          $especialidad = \Model::factory('\Models\Especialidad', 'coa')->find_one($eliminado);
          $especialidad->delete();
        }
      }
      $rpta['tipo_mensaje'] = 'success';
      $rpta['mensaje'] = [
        'Se ha registrado los cambios en los especialidades',
        $array_nuevos
      ];
      \ORM::get_db('coa')->commit();
    }catch (Exception $e) {
      $status = 500;
      $rpta['tipo_mensaje'] = 'error';
      $rpta['mensaje'] = [
        'Se ha producido un error en guardar la tabla de especialidades',
        $e->getMessage()
      ];
      \ORM::get_db('coa')->rollBack();
    }
    return $response->withStatus($status)->write(json_encode($rpta));
  }
}
