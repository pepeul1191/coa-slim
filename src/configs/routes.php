<?php

use Slim\Http\Request;
use Slim\Http\Response;
use Controller\DepartamentoController;
use Controller\DistritoController;
use Controller\ErrorController;
use Controller\HomeController;
use Controller\LoginController;
use Controller\ProvinciaController;
use Controller\SedeController;
use Controller\ContenidoController;
use Controller\DoctorController;
use Controller\SexoController;
use Controller\TipoSedeController;
use Controller\EspecialidadController;
use Controller\UbicacionController;
// Routes
$app->get('/demo/[{name}]', function (Request $request, Response $response, array $args) {
  // Sample log message
  $this->logger->info("Slim-Skeleton '/' route");
  // Render index view
  return $this->renderer->render($response, 'index.phtml', $args);
});
//login
$app->get('/login', LoginController::class . ':view')->add($mw_session_false);
$app->post('/login/acceder', LoginController::class . ':acceder');
$app->get('/login/ver', LoginController::class . ':ver');
$app->get('/login/cerrar', LoginController::class . ':cerrar');
//error
$app->get('/error/access/{numero}', ErrorController::class . ':access');
//home
$app->get('/', HomeController::class . ':view')->add($mw_session_true);
$app->get('/ubicaciones/', UbicacionController::class . ':view')->add($mw_session_true);
$app->get('/contenidos/', ContenidoController::class . ':view')->add($mw_session_true);
//servicios REST - ubicaciones
$app->get('/departamento/listar', DepartamentoController::class . ':listar')->add($mw_ambiente_csrf);
$app->post('/departamento/guardar', DepartamentoController::class . ':guardar')->add($mw_ambiente_csrf);
$app->get('/provincia/listar/{departamento_id}', ProvinciaController::class . ':listar')->add($mw_ambiente_csrf);
$app->post('/provincia/guardar', ProvinciaController::class . ':guardar')->add($mw_ambiente_csrf);
$app->get('/distrito/listar/{provincia_id}', DistritoController::class . ':listar')->add($mw_ambiente_csrf);
$app->post('/distrito/guardar', DistritoController::class . ':guardar')->add($mw_ambiente_csrf);
$app->get('/distrito/buscar', DistritoController::class . ':buscar')->add($mw_ambiente_csrf);
$app->get('/distrito/nombre/{distrito_id}', DistritoController::class . ':nombre')->add($mw_ambiente_csrf);
// servicios REST - contenido
$app->get('/doctor/sexo_sede_especialidad', DoctorController::class . ':sexo_sede_especialidad')->add($mw_ambiente_csrf);
$app->get('/doctor/count_sexo_sede_especialidad', DoctorController::class . ':count_sexo_sede_especialidad')->add($mw_ambiente_csrf);
$app->get('/doctor/obtener/{doctor_id}', DoctorController::class . ':obtener')->add($mw_ambiente_csrf);
$app->post('/doctor/guardar', DoctorController::class . ':guardar')->add($mw_ambiente_csrf);
$app->get('/doctor/select/{sede_id}', DoctorController::class . ':select')->add($mw_ambiente_csrf);
$app->get('/doctor/sede/{sede_id}', DoctorController::class . ':sede')->add($mw_ambiente_csrf);
$app->get('/sexo/listar', SexoController::class . ':listar')->add($mw_ambiente_csrf);
$app->get('/sede/tipo/{tipo_sede_id}', SedeController::class . ':tipo')->add($mw_ambiente_csrf);
$app->get('/tipo_sede/listar', TipoSedeController::class . ':listar')->add($mw_ambiente_csrf);
$app->get('/especialidad/listar', EspecialidadController::class . ':listar')->add($mw_ambiente_csrf);
$app->post('/especialidad/guardar', EspecialidadController::class . ':guardar')->add($mw_ambiente_csrf);
$app->get('/sede/listar', SedeController::class . ':listar')->add($mw_ambiente_csrf);
$app->get('/sede/obtener_responsables/{sede_id}', SedeController::class . ':obtener_responsable')->add($mw_ambiente_csrf);
$app->post('/sede/guardar', SedeController::class . ':guardar')->add($mw_ambiente_csrf);
$app->post('/sede/doctor_turno/guardar', SedeController::class . ':doctor_turno_guardar')->add($mw_ambiente_csrf);
$app->post('/sede/director/guardar', SedeController::class . ':director_guardar')->add($mw_ambiente_csrf);
//servicios REST - sitio web
$app->get('/sede/lima', SedeController::class . ':distrito')->add($mw_ambiente_csrf);
$app->get('/sede/provincia', SedeController::class . ':provincia')->add($mw_ambiente_csrf);
$app->get('/sede/departamento', SedeController::class . ':departamento')->add($mw_ambiente_csrf);
$app->get('/sede/departamento/{sede_id}', SedeController::class . ':sedes_departamento')->add($mw_ambiente_csrf);
$app->get('/sede/director_odontologos/{sede_id}', SedeController::class . ':director_odontologos')->add($mw_ambiente_csrf);
