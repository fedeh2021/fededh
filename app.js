let fs = require('fs');  // importo libreria para leer archivos de texto
let moment = require('moment'); // importo libreria para fechas

const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false}));
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware')
app.use(session({secret: 'secreto',resave: false,saveUninitialized: false,}))
app.use(cookies());
app.use(userLoggedMiddleware);

app.listen(process.env.PORT || 3090, () => console.log('Esto fue exitoso'));

app.set('view engine', 'ejs');
const rutasProductos = require('./routes/productos');
const rutasMain = require('./routes/main');
const rutasUsuarios = require('./routes/usuarios')
app.use('/', rutasMain);
app.use('/productos', rutasProductos);
app.use('/usuarios', rutasUsuarios);




//const publicPath = path.resolve(__dirname, );


app.use(express.json()); 
app.use('/public/img', express.static(__dirname + '/public/img'));

app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, '/views'));





