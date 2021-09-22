let fs = require('fs');  // importo libreria para leer archivos de texto
let moment = require('moment'); // importo libreria para fechas

const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json()); 
app.use(cookieParser());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
const userLoggedMiddleware = require('./src/middleware/userLoggedMiddleware')
app.use(session({secret: 'secreto',resave: false,saveUninitialized: false,}))

app.use(userLoggedMiddleware);

app.listen(process.env.PORT || 3090, () => console.log('Esto fue exitoso'));


const rutasProductos = require('./src/routes/productos');
const rutasMain = require('./src/routes/main');
const rutasUsuarios = require('./src/routes/usuarios');
const { cookie } = require('express-validator');

app.use('/', rutasMain);
app.use('/productos', rutasProductos);
app.use('/usuarios', rutasUsuarios);




//const publicPath = path.resolve(__dirname, );



app.use('/public/img', express.static(__dirname + '/public/img'));








