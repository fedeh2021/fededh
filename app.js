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

*/

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

