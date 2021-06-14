let fs = require('fs');  // importo libreria para leer archivos de texto
let moment = require('moment'); // importo libreria para fechas

const express = require('express');
const path = require('path');
const app = express();
//const rutasProductos = require('./routes/productos.js');
const rutasMain = require('./routes/main.js');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.use('/public/img', express.static(__dirname + '/public/img'));

app.listen(process.env.PORT || 3090, () => console.log('Esto fue exitoso'));

app.set('view engine', 'ejs');

//app.use('/productos', rutasProductos);
app.use('/', rutasMain);

