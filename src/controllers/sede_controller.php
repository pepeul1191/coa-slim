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
  					'No se ha podido listar los departamentos',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function sedes_departamento($request, $response, $args){
    $rpta = '';
    $status = 200;
    $sede_id = $args['sede_id'];
    try {
      $rs = null;
      if($sede_id == 0){
        $rs = \Model::factory('\Models\Sede', 'coa')
        	->select('id')
        	->select('nombre')
          ->where('tipo_sede_id', 1)
          ->select('latitud')
          ->select('longitud')
          ->select('direccion')
        	->find_array();
      }else{
        $rs = \Model::factory('\Models\Sede', 'coa')
        	->select('id')
        	->select('nombre')
          ->select('latitud')
          ->select('longitud')
          ->select('direccion')
          ->where('id', $sede_id)
          ->find_one()
    			->as_array();
      }
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido listar las sedes del departamento',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function director_odontologos($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $sede_id = $args['sede_id'];
    try {
      $director = \Model::factory('\Models\VWDirectorSede', 'coa')
      	->select('director')
      	->select('titulo')
        ->select('sede')
        ->where('sede_id', $sede_id)
        ->find_one()
  			->as_array();
      $odontologos = \Model::factory('\Models\VWDoctorSedeSexoEspecialidad', 'coa')
      	->select('nombres')
      	->select('paterno')
        ->select('materno')
        ->select('rne')
        ->select('cop')
        ->select('especialidad')
        ->where('sede_id', $sede_id)
      	->find_array();
      $rs = [
        'director' => $director,
        'odontologos' => $odontologos,
      ];
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido obtener el directo(a)r de la sede y sus odontólogo(a)s',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function tipo($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $tipo_sede_id = $args['tipo_sede_id'];
    try {
      $rs = \Model::factory('\Models\Sede', 'coa')
        ->select('id')
        ->select('nombre')
        ->where('tipo_sede_id', $tipo_sede_id)
        ->find_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido listar las sedes de dicho tipo',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function listar($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Sede', 'coa')
      	->select('id')
      	->select('nombre')
        ->select('direccion')
        ->select('telefono')
        ->select('latitud')
        ->select('longitud')
        ->select('tipo_sede_id')
      	->find_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido listar las sedes',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function obtener_responsable($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $sede_id = $args['sede_id'];
    try {
      $director = \Model::factory('\Models\Director', 'coa')
        ->where('sede_id', $sede_id)
        ->find_one();
      $doctor_turno = \Model::factory('\Models\DoctorTurno', 'coa')
        ->where('sede_id', $sede_id)
        ->find_one();
      $director_id = 'E';
      $doctor_turno_id = 'E';
      $telefono = '';
      if($director != false){
        $director_id = $director->doctor_id;
      }
      if($doctor_turno != false){
        $doctor_turno_id = $doctor_turno->doctor_id;
        $telefono = $doctor_turno->telefono;
      }
      $responsable = array(
        'director_id' => $director_id,
        'doctor_turno_id' => $doctor_turno_id,
        'telefono' => $telefono,
      );
      $rpta = json_encode($responsable);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido los responsables de la sede',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

  public function doctor_turno_guardar($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $data = json_decode($request->getParam('data'));
    \ORM::get_db('coa')->beginTransaction();
    try {
      $doctor_turno = \Model::factory('\Models\DoctorTurno', 'coa')
        ->where('sede_id', $data->{'sede_id'})
        ->find_one();
      if($doctor_turno != false){
        $doctor_turno->doctor_id = $data->{'doctor_id'};
        $doctor_turno->telefono = $data->{'telefono'};
        $doctor_turno->save();
      }else{
        $doctor_turno_nuevo = \Model::factory('\Models\DoctorTurno', 'coa')
          ->create();
        $doctor_turno_nuevo->sede_id = $data->{'sede_id'};
        $doctor_turno_nuevo->telefono = $data->{'telefono'};
        $doctor_turno_nuevo->doctor_id = $data->{'doctor_id'};
        $doctor_turno_nuevo->save();
      }
      \ORM::get_db('coa')->commit();
      $rpta['tipo_mensaje'] = 'success';
      $rpta['mensaje'] = [
        'Se ha registrado el doctor de turno de la sede',
        []
      ];
    } catch (Exception $e) {
      $status = 500;
      $rpta['tipo_mensaje'] = 'error';
      $rpta['mensaje'] = [
        'Se ha producido un error en guardar el doctor de turno de la sede',
        $e->getMessage()
      ];
      \ORM::get_db('coa')->rollBack();
    }
    $rpta = json_encode($rpta);
    return $response->withStatus($status)->write($rpta);
  }

  public function director_guardar($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $data = json_decode($request->getParam('data'));
    \ORM::get_db('coa')->beginTransaction();
    try {
      $director = \Model::factory('\Models\Director', 'coa')->where('sede_id', $data->{'sede_id'})->find_one();
      if($director != false){
        $director->doctor_id = $data->{'doctor_id'};
        $director->save();
      }else{
        $director_nuevo = \Model::factory('\Models\Director', 'coa')
          ->create();
        $director_nuevo->sede_id = $data->{'sede_id'};
        $director_nuevo->doctor_id = $data->{'doctor_id'};
        $director_nuevo->save();
      }
      \ORM::get_db('coa')->commit();
      $rpta['tipo_mensaje'] = 'success';
      $rpta['mensaje'] = [
        'Se ha registrado el director de la sede',
        []
      ];
    } catch (Exception $e) {
      $rpta['tipo_mensaje'] = 'error';
      $rpta['mensaje'] = [
        'Se ha producido un error en guardar el director de la sede',
        $e->getMessage()
      ];
      \ORM::get_db('coa')->rollBack();
    }
    $rpta = json_encode($rpta);
    return $response->withStatus($status)->write($rpta);
  }
}
