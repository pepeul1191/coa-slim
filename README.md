# Slim PHP Boilerplate

Instalar depdendencias:

    $ composer install && bower install

Refrescar composer:

    $ composer dump-autoload -o

Basado en Slim Framework 3 Skeleton Application

## Correr test de carga

Cambiar en 'src/configs/settings.php' el valor de llave 'ambiente_csrf' y 'ambiente_session' a 'inactivo' .

## Vistas SQL

Crear Vista de doctores

      MySQL
      >> CREATE VIEW vw_distrito_provincia_departamento AS select DI.id AS id, PA.id AS pais_id, concat(DI.nombre,', ',PR.nombre,', ',DE.nombre) AS nombre from ((distritos DI join provincias PR on((DI.provincia_id = PR.id))) join departamentos DE on((PR.departamento_id = DE.id))) join paises PA on((DE.pais_id = PA.id)) limit 2000;

      SQLite
      >> CREATE VIEW vw_doctores AS SELECT D.id AS id,  D.sede_id,  S.nombre1  || ' ' || D.paterno || ' '  || D.materno|| ', '  || D.nombres AS nombre FROM doctores D join sexos S on D.sexo_id = S.id limit 2000;

Crear vista de doctores con sexo, sede y especialidad:

    >> SQLite
    DROP VIEW IF EXISTS vw_doctores_sede_sexos_especialidades;
    CREATE VIEW vw_doctores_sede_sexos_especialidades AS SELECT
    D.id AS id, D.nombres,  D.paterno, D.materno, D.rne, D.cop, D.sede_id,  L.nombre AS sede,  TL.id AS tipo_sede_id, TL.nombre AS tipo_sede , S.id AS sexo_id, S.nombre1 AS sexo, E.id AS especialidad_id, E.nombre AS especialidad
    FROM doctores D
    INNER JOIN sexos S on D.sexo_id = S.id  
    INNER JOIN sedes L ON L.id = D.sede_id
    INNER JOIN especialidades E ON E.id = D.especialidad_id
    INNER JOIN tipo_sedes TL ON  L.tipo_sede_id = TL.id
    ORDER BY D.sede_id
    LIMIT 2000;

Crear vista de directores de sede:

  DROP VIEW  IF EXISTS vw_directores_sedes;
  CREATE VIEW vw_directores_sedes AS SELECT
  sede_id, nombre1 || ' ' || paterno || ' ' || materno || ', ' || nombres AS director, titulo
  FROM (
    SELECT J.sede_id, S.nombre2 AS titulo, S.nombre1, D.nombres, D.paterno, D.materno
    FROM directores J
    INNER JOIN doctores D ON D.id= J.doctor_id  
    INNER JOIN sexos S ON D.sexo_id = S.id   
  )

Migraciones con DBMATE:

    $ dbmate -d "db/migrations" -e "DATABASE_URL" new <<nombre_de_migracion>>
    $ dbmate -d "db/migrations" up

---

Fuentes:

+ https://www.slimframework.com/docs/v3/tutorial/first-app.html
+ https://stackoverflow.com/questions/34807616/slim-3-render-method-not-valid
+ https://stackoverflow.com/questions/36993560/pass-arguments-in-slim-di-service
+ https://gist.github.com/akrabat/636a8833695f1e107701
+ https://www.slimframework.com/docs/v3/concepts/middleware.html
+ https://stackoverflow.com/questions/36521233/slim-3-middleware-redirect
+ https://github.com/slimphp/Slim-Skeleton
+ https://www.slimframework.com/docs/v3/cookbook/enable-cors.html
