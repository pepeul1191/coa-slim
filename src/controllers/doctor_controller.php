<?php

namespace Controller;

class DoctorController extends \Configs\Controller
{
  public function sexo_sede_especialidad($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $data = json_decode($request->getQueryParam('data'));
    $page = $data->{'page'};
    $step = $data->{'step'};
    $inicio = ($page - 1) * $step + 1;
    try {
      $rs = \Model::factory('\Models\VWDoctorSedeSexoEspecialidad', 'coa')
        ->limit($step)
        ->offset($inicio-1) //es menos 1 porque cuenta arreglo inicializado en 0
        ->find_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido generar los datos de la paginación de la tabla',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function count_sexo_sede_especialidad($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $data = json_decode($request->getQueryParam('data'));
    $page = $data->{'page'};
    $step = $data->{'step'};
    $inicio = ($page - 1) * $step + 1;
    try {
      $rpta = \Model::factory('\Models\VWDoctorSedeSexoEspecialidad', 'coa')
        ->count();
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido generar la paginación de la tabla',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function obtener($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $doctor_id = $args['doctor_id'];
    try {
      $rs = \Model::factory('\Models\VWDoctorSedeSexoEspecialidad', 'coa')
        ->where('id', $doctor_id)
        ->find_one()
        ->as_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido obtener el doctor a editar',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
