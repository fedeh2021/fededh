let fs = require('fs');  // importo libreria para leer archivos de texto
let moment = require('moment'); // importo libreria para fechas

const express = require('express');
const path = require('path');
const app = express();
const rutasProductos = require('./routes/productos');
const rutasMain = require('./routes/main');
const logMiddleware = require('./middleware/logMiddleware');
const session = require('express-session');
const cookie = require('cookie-parser')
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false}));
app.use(express.json()); 
app.use('/public/img', express.static(__dirname + '/public/img'));
app.use(logMiddleware);
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, '/views'));

app.use(session({secret: 'perro'}))

app.listen(process.env.PORT || 3090, () => console.log('Esto fue exitoso'));

app.set('view engine', 'ejs');

app.use('/productos', rutasProductos);
app.use('/', rutasMain);
