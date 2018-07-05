# Slim Framework 3 Skeleton Application

Use this skeleton application to quickly setup and start working on a new Slim Framework 3 application. This application uses the latest Slim 3 with the PHP-View template renderer. It also uses the Monolog logger.

This skeleton application was built for Composer. This makes setting up a new Slim Framework application quick and easy.

## Install the Application

Run this command from the directory in which you want to install your new Slim Framework application.

    php composer.phar create-project slim/slim-skeleton [my-app-name]

Replace `[my-app-name]` with the desired directory name for your new application. You'll want to:

* Point your virtual host document root to your new application's `public/` directory.
* Ensure `logs/` is web writeable.

To run the application in development, you can run these commands

	cd [my-app-name]
	php composer.phar start

Run this command in the application directory to run the test suite

	php composer.phar test

That's it! Now go build something cool.

---

+ https://www.slimframework.com/docs/v3/tutorial/first-app.html
+ https://stackoverflow.com/questions/34807616/slim-3-render-method-not-valid
+ https://stackoverflow.com/questions/36993560/pass-arguments-in-slim-di-service
+ https://gist.github.com/akrabat/636a8833695f1e107701
+ https://www.slimframework.com/docs/v3/concepts/middleware.html

composer dump-autoload -o
