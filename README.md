# mercado-liebre

E-commerce similar a mercadolibre. Utilice Node.js. Lenguajes de hipertexto y estilo, como HTML Y CSS, respectivamente.
Contiene vista home con productos. La base de datos se registra en JSON no tiene SQL.
Vista con todos los productos, boton para crear nuevo producto que se guarda en JSON. 
Posibilidad de registrar nuevo usuario, que se guarda en JSON, y hacer login con ese usuario.
Los productos se pueden editar o borrar, los datos tambien se alteran en el JSON.
SEGURIDAD MIDDLEWARES Diseñe el sitio para que sea seguro, con validaciones pertinentes mediante middlewares con los cuales se valida el registro y el login del usuario, el formato de las imágenes. Para subir archivos al sitio (como las fotos de usuarios o de productos) utilice la librería de Express "Multer".
VALIDACIONES Realice las validaciones tanto en el frontend como en el backend (con NODE.JS) En el registro se validó que estén todos los campos completados, que lo que se ingresa sea un mail y que el formato de la imagen sea apropiado. En el login se valida tanto que el mail como que la contraseña sean los mismos que los ingresados en el registro. También use bcrypt para hashear la contraseña y que la guarde ya encriptada.
COOKIES Y SESSION Emplee Cookies y session para almacenar información de los usuarios.
En cuanto a la ARQUITECTURA DEL SISTEMA Trabaje con el framework Express, y el patrón de diseño MVC (MODELO, VISTA, CONTROLADOR), para ordenar los archivos del proyecto, y que se comuniquen el frontend y el backend. La implementación del sistema de ruteo también fue necesaria para lograr la apropiada conexión con los métodos del controlador.
VISTA Maneje HTML, CSS, y como motor de plantillas EJS que permitió generar vistas que contengan información y estructuras dinámicas.
RUTA Las solicitudes del cliente se hacen bajo el protocolo HTTP (HyperText Transfer Protocol), el cual presenta los métodos CRUD (CREATE, READ, UPDATE, DELETE), y a través de estos métodos fui capaz de solicitar datos al servidor a través de la URL (GET), enviar datos al servidor (POST), reemplazar información existente en los “editar producto” y “editar usuario” (PUT), y borrar registros en el servidor (DELETE).
