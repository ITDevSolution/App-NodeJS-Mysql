## installation modules (npm install)
* express : framework de nodejs para crear aplicaciones servidor(backend)
* express-handlebars : integracion del motor de plantillas handlebars.
* express-session: administra las sesiones de nuestra app. sera necesario para autenticar a un usuario más tarde.

* mysql: modulo que permite conectarnos a la base de datos. Este modulo no es la base de datos, tan solo sirve para conectarnos y hacer consultas.

* express-mysql-session: Este módulo almacenará las sesiones en la base de datos, en lugar del servidor. esto es ideal cuando la app este en producción.

* morgan: permite crear logs o mensajes de que es lo que las aplicaciones clientes estan pidiendo al servidor.

* bcryptjs: este módulo lo usaremos para cifrar las contraseñas de los usuarios antes de guardarlos en la base de datos.

* passport: Módulo para autenticar y manejar el proceso de login de un usuario en nuestra aplicación.

* passport-local: es un complemento de passport para autenticar a los usuarios con nuestra propia base de datos.

* timeago.js : módulo que convierte los timestamps o fechas de la base de datos en un formato de : "2 minutes ago, 2 hours ago, etc".(esto sirve en las vistas).

* connect-flash: se usa para mostrar mensajes de error y exito cuando el usuario realice una operacion.

* express-validator: es un módulo para validar los datos que el usuario nos envia desde la aplicacion cliente.

*nodemon -D : es un módulo de desarrollo

## Creando carpetas donde se encontrará todo el codigo del proyecto

# mkdir: este comando permite crear carpetas(ejemplo mkdir lib public etc).
# touch : este comando permite crear archivos ejemplo( touch index.js).


