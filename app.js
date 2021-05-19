let fs = require('fs');  // importo libreria para leer archivos de texto
let moment = require('moment'); // importo libreria para fechas
/*
let series = require('./series/index');

let datos = fs.readFileSync(__dirname + '/texto', 'utf-8'); // leo archivo de texto

console.log(datos);

console.log("La fecha de hoy es: " + moment().format('DD MMM YY'));

console.log("Mis series:");

console.log(series);

let obj_json = fs.readFileSync('./servicios/tareas.json');
let obj_literal = JSON.parse(obj_json);

//console.log(obj_literal);

let unaCalculadora = require('./func_mat/calculadora');

console.log('Mi suma es: ' + unaCalculadora.sumar(2,9));
console.log('Mi resultado de resta es:' + unaCalculadora.restar(4,2));
console.log('Mi división es:' + unaCalculadora.dividir(8,0));
console.log('Mi multiplicación es:' + unaCalculadora.multiplicar(3,6));


let {listarTareas, agregarTarea, borrarTarea, tareasEstado} = require('./funcionesDeTareas');

let arreglo_obj_literal = require('./servicios/tareas.json');

listarTareas(arreglo_obj_literal);

let nuevaTarea = {
    "codigo": 5,
    "titulo": "practicar js",
    "estado": "pendiente"
};

agregarTarea(arreglo_obj_literal,nuevaTarea);

arreglo_objs_literal = borrarTarea(arreglo_obj_literal, 5);

let nuevo = tareasEstado(arreglo_obj_literal, "En proceso");

console.log(nuevo);
*/
const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.use('/public/img', express.static(__dirname + '/public/img'));

app.listen(3030, () => console.log('Esto fue exitoso'));

app.get('/', function(req, res) {
    //res.send('Bienvenidos al sitio')//permite enviar texto o codigo html
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/contacto', function(req, res) {
    res.send('Dejanos tu contacto!')
});

app.get('/home', function(req, res) {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

app.get('/ortega', function(req, res) {
    res.sendFile(path.resolve(__dirname,'./views/home3.html'))
});