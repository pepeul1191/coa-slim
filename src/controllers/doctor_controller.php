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

  public function editar($request, $response, $args) {
    $rpta = '';
    $status = 200;
    \ORM::get_db('coa')->beginTransaction();
    try{
      $data = json_decode($request->getParam('data'));
      $doctor = \Model::factory('\Models\Doctor', 'coa')->find_one($data->{'id'});
      $doctor->nombres = $data->{'nombres'};
      $doctor->paterno = $data->{'paterno'};
      $doctor->materno = $data->{'materno'};
      $doctor->cop = $data->{'cop'};
      $doctor->rne = $data->{'rne'};
      $doctor->sede_id = $data->{'sede_id'};
      $doctor->especialidad_id = $data->{'especialidad_id'};
      $doctor->sexo_id = $data->{'sexo_id'};
      $doctor->save();
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'success',
          'mensaje' => [
  					'Se ha registrado los cambios en el doctor(a)',
  					[]
  				]
        ]
      );
      \ORM::get_db('coa')->commit();
    } catch (Exception $e) {
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'Se ha producido un error en guardar el doctor(a)',
  					$e->getMessage()
  				]
        ]
      );
      \ORM::get_db('coa')->rollBack();
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function sede($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $sede_id = $args['sede_id'];
    try {
      $rs = \Model::factory('\Models\Doctor', 'coa')
        ->select('id')
        ->select('nombres')
        ->select('paterno')
        ->select('materno')
        ->select('cop')
        ->select('rne')
        ->select('especialidad_id')
        ->select('sexo_id')
        ->where('sede_id', $sede_id)
        ->find_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido listar los doctores de la sede',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
